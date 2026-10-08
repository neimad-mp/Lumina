/** Verify the actual export under a subdirectory, or a deployed --url, using the real title gesture. */
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import puppeteer from 'puppeteer-core';

const args = Object.fromEntries(process.argv.slice(2).map((a)=>a.replace(/^--/,'').split('=')));
const root = path.resolve(args.root || 'dist');
const out = path.resolve('.check',args.out || 'production-audio');
fs.mkdirSync(out,{recursive:true});
const types = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.json':'application/json',
  '.ogg':'audio/ogg', '.woff':'font/woff', '.woff2':'font/woff2' };
let server;
let url = args.url;
if (!url) {
  server = http.createServer((req,res)=>{
    const route = new URL(req.url,'http://localhost').pathname;
    if (!route.startsWith('/playtest/')) { res.writeHead(404).end(); return; }
    const file = path.resolve(root,decodeURIComponent(route.slice(10)) || 'index.html');
    if (!file.startsWith(root+path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404).end(); return; }
    res.setHeader('Content-Type',types[path.extname(file)] || 'application/octet-stream');
    fs.createReadStream(file).pipe(res);
  });
  await new Promise((resolve)=>server.listen(0,'127.0.0.1',resolve));
  url = `http://127.0.0.1:${server.address().port}/playtest/index.html`;
}
const executablePath = [process.env.CHROME_PATH,'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe','C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find((p)=>p&&fs.existsSync(p));
const browser = await puppeteer.launch({ executablePath, headless:true,
  args:['--enable-gpu','--enable-webgl','--use-angle=d3d11','--no-first-run','--no-default-browser-check'],
  defaultViewport:{width:1600,height:900} });
const report = { url, checks:[], pageErrors:[], errors:[], warnings:[], failedRequests:[], audioRequests:[] };
const page = await browser.newPage();
page.on('pageerror',(e)=>report.pageErrors.push(String(e)));
page.on('console',(m)=>{ if(m.type()==='error'&&!/favicon/.test(m.text())) report.errors.push(m.text()); if(m.type()==='warn') report.warnings.push(m.text()); });
page.on('requestfailed',(r)=>report.failedRequests.push(`${r.url()}: ${r.failure()?.errorText}`));
page.on('response',(r)=>{
  if(r.status()>=400&&!r.url().endsWith('favicon.ico'))report.failedRequests.push(`${r.url()}: HTTP ${r.status()}`);
  if(r.url().includes('/audio/'))report.audioRequests.push({url:r.url(),status:r.status()});
});
const wait = (ms)=>new Promise((resolve)=>setTimeout(resolve,ms));
const assert = (ok, message)=>{ if(!ok) throw new Error(message); };
try {
  await page.goto(url,{waitUntil:'load',timeout:60000});
  await page.waitForFunction(()=>!!(/** @type {any} */(window)).__lumina?.loadMs,{timeout:60000});
  assert(await page.evaluate(()=> (/** @type {any} */(window)).__game.game.level.name==='Ashen Crypt'),'export does not open Ashen Crypt');
  assert(await page.evaluate(()=> (/** @type {any} */(window)).__game.audio.ctx===null),'audio unlocked before player gesture');
  await page.waitForFunction(()=> (/** @type {any} */(window)).__game.ui.title._accepting(),{timeout:15000});
  await page.screenshot({path:path.join(out,'title.png')});
  await page.keyboard.press('Space');
  await page.waitForFunction(()=> (/** @type {any} */(window)).__game.game.mode==='play',{timeout:15000});
  await page.evaluate(()=> (/** @type {any} */(window)).__game.audio.prepareMusic());
  await wait(1500);
  const initial=await page.evaluate(()=>{
    const g=(/** @type {any} */(window)).__game;
    return {track:g.audio.musicTrack,recordings:g.audio.recordedMusicState,ambience:g.audio.ambience,context:g.audio.ctx.state};
  });
  assert(initial.recordings.playing==='ashen-exploration'&&initial.recordings.loaded.length===3,'production file playback failed');
  assert(initial.ambience.birds===0&&initial.ambience.crickets===0&&initial.ambience.dungeon>0,'dungeon ambience profile failed');
  report.checks.push({check:'title gesture, decoding, exploration and dungeon ambience',result:initial});
  await page.keyboard.press('KeyM'); await wait(250);
  assert(await page.evaluate(()=> !(/** @type {any} */(window)).__game.audio.musicPlaying),'M did not turn off');
  await page.keyboard.press('KeyM'); await wait(250);
  assert(await page.evaluate(()=> (/** @type {any} */(window)).__game.audio.recordedMusicState.playing==='ashen-exploration'),'M did not restore recording');
  report.checks.push({check:'real M key off/on',verdict:'ok'});
  await page.screenshot({path:path.join(out,'dungeon.png')});
  const transitions=await page.evaluate(async()=>{
    const g=(/** @type {any} */(window)).__game; g.engine.stop();
    const m=g.game.combat.music; const audio=g.audio; const seen=[];
    m.update(0.8,true,false); seen.push(audio.recordedMusicState.playing);
    m.update(4,false,false); seen.push(audio.recordedMusicState.playing);
    m.update(0.1,true,true); m.setSection('B'); seen.push(`${audio.recordedMusicState.playing}/${audio.musicSection}`);
    m.victory(); seen.push(audio.recordedMusicState.playing);
    await new Promise((resolve)=>setTimeout(resolve,10200)); m.update(10.2,false,false); seen.push(audio.recordedMusicState.playing);
    m.death(); seen.push(audio.musicPlaying); g.setMusic(false); m.respawn(); seen.push(audio.musicPlaying);
    g.setMusic(true); seen.push(audio.recordedMusicState.playing);
    audio.muted=true; seen.push(audio.muted); audio.muted=false;
    const before=audio.musicTrack;
    Object.defineProperty(document,'visibilityState',{value:'hidden',configurable:true});
    audio._onVisibility(); await new Promise((resolve)=>setTimeout(resolve,100));
    if(audio.ctx.state!=='suspended') throw new Error('hidden-tab suspension failed');
    Object.defineProperty(document,'visibilityState',{value:'visible',configurable:true});
    audio._onVisibility(); await new Promise((resolve)=>setTimeout(resolve,100));
    delete (/** @type {any} */(document)).visibilityState;
    if(audio.ctx.state!=='running'||audio.musicTrack!==before) throw new Error('visibility resume changed music intent');
    return seen;
  });
  assert(JSON.stringify(transitions)===JSON.stringify(['ashen-battle','ashen-exploration','ashen-boss/B',null,'ashen-exploration',false,false,'ashen-exploration',true]),'production transition sequence failed');
  report.checks.push({check:'combat, boss B, real-time victory handoff, death/off/respawn, master mute and hidden-tab resume',result:transitions});
  for(const level of ['emberfall','cinderwatch-pass']) {
    const next=new URL(url); next.search=`?level=${level}`;
    await page.goto(next.href,{waitUntil:'load',timeout:60000});
    await page.waitForFunction(()=>!!(/** @type {any} */(window)).__lumina?.loadMs,{timeout:60000});
    await page.waitForFunction(()=> (/** @type {any} */(window)).__game.ui.title._accepting(),{timeout:15000});
    await page.keyboard.press('Space');
    await page.waitForFunction(()=> (/** @type {any} */(window)).__game.game.mode==='play',{timeout:15000});
    await wait(600);
    const state=await page.evaluate(()=>{
      const g=(/** @type {any} */(window)).__game; return {level:g.game.level.name,track:g.audio.musicTrack,recordings:g.audio.recordedMusicState};
    });
    assert(state.track==='emberfall'&&state.recordings.loaded.length===0,`${level}: original soundtrack changed`);
    report.checks.push({check:`${level} production regression`,result:state});
  }
  assert(!report.pageErrors.length&&!report.errors.length&&!report.warnings.length&&!report.failedRequests.length,'production browser diagnostics failed');
  report['verdict']='ok';
} catch(err) { report['verdict']='failed'; report['failure']=String(err?.stack||err); process.exitCode=1; }
finally {
  fs.writeFileSync(path.join(out,'report.json'),JSON.stringify(report,null,2)+'\n');
  await browser.close(); if(server) await new Promise((resolve)=>server.close(resolve));
}
console.log(JSON.stringify(report,null,2));
