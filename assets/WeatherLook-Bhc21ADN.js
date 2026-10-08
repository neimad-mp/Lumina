import{$n as e,$t as t,At as n,Bi as r,Bt as i,Ci as a,Cn as o,Di as s,Dt as c,Ei as l,En as u,Fi as d,Fn as f,G as p,Gn as m,Gr as h,Gt as g,Hn as _,Ht as v,Ii as y,In as b,It as x,Jn as S,Jt as C,Kn as w,Kt as T,Li as E,Ln as D,Lt as O,Mi as k,Mt as A,Ni as ee,Nt as j,Oi as M,Ot as N,Pi as P,Pn as F,Pt as I,Qn as te,Qt as ne,R as re,Ri as ie,Rn as ae,Rt as oe,Si as se,Sn as ce,St as le,Ti as L,Tt as ue,Un as R,Ur as de,Ut as fe,Vi as pe,Vn as z,Wn as me,Wr as he,Wt as ge,Xn as _e,Xr as ve,Xt as ye,Yn as be,Yr as xe,Zn as Se,Zr as Ce,Zt as B,_n as we,_t as Te,ai as Ee,ar as De,bi as Oe,bn as ke,bt as Ae,cn as je,di as Me,dn as Ne,dr as Pe,dt as V,en as H,er as Fe,fi as Ie,fn as Le,fr as U,ft as W,gi as Re,gn as G,gt as ze,hi as Be,hn as Ve,ht as He,ii as Ue,in as We,ji as Ge,jt as Ke,ki as qe,kn as Je,kt as K,ln as Ye,mi as Xe,mn as Ze,mt as Qe,nn as $e,nr as et,oi as tt,on as nt,pi as rt,pn as it,pr as at,pt as ot,qn as st,ri as ct,rn as lt,rr as ut,sn as dt,sr as ft,tn as pt,tr as mt,ui as ht,un as gt,vi as _t,vn as vt,vt as yt,wi as q,wn as bt,wt as xt,xi as St,xn as Ct,xt as wt,yn as Tt,yt as Et,zi as Dt,zt as Ot}from"./LevelStorage-BTzK5DyF.js";var kt=Object.defineProperty,At=(e,t)=>{let n={};for(var r in e)kt(n,r,{get:e[r],enumerable:!0});return t||kt(n,Symbol.toStringTag,{value:`Module`}),n};function jt(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Mt(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var J={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Y={common:{diffuse:{value:new B(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new z},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new z}},envmap:{envMap:{value:null},envMapRotation:{value:new z},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new z}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new z}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new z},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new z},normalScale:{value:new q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new z},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new z}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new z}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new z}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new B(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new B(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0},uvTransform:{value:new z}},sprite:{diffuse:{value:new B(16777215)},opacity:{value:1},center:{value:new q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new z},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0}}},Nt={basic:{uniforms:ie([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:J.meshbasic_vert,fragmentShader:J.meshbasic_frag},lambert:{uniforms:ie([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new B(0)},envMapIntensity:{value:1}}]),vertexShader:J.meshlambert_vert,fragmentShader:J.meshlambert_frag},phong:{uniforms:ie([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new B(0)},specular:{value:new B(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:J.meshphong_vert,fragmentShader:J.meshphong_frag},standard:{uniforms:ie([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new B(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag},toon:{uniforms:ie([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new B(0)}}]),vertexShader:J.meshtoon_vert,fragmentShader:J.meshtoon_frag},matcap:{uniforms:ie([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:J.meshmatcap_vert,fragmentShader:J.meshmatcap_frag},points:{uniforms:ie([Y.points,Y.fog]),vertexShader:J.points_vert,fragmentShader:J.points_frag},dashed:{uniforms:ie([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:J.linedashed_vert,fragmentShader:J.linedashed_frag},depth:{uniforms:ie([Y.common,Y.displacementmap]),vertexShader:J.depth_vert,fragmentShader:J.depth_frag},normal:{uniforms:ie([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:J.meshnormal_vert,fragmentShader:J.meshnormal_frag},sprite:{uniforms:ie([Y.sprite,Y.fog]),vertexShader:J.sprite_vert,fragmentShader:J.sprite_frag},background:{uniforms:{uvTransform:{value:new z},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:J.background_vert,fragmentShader:J.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new z}},vertexShader:J.backgroundCube_vert,fragmentShader:J.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:J.cube_vert,fragmentShader:J.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:J.equirect_vert,fragmentShader:J.equirect_frag},distance:{uniforms:ie([Y.common,Y.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:J.distance_vert,fragmentShader:J.distance_frag},shadow:{uniforms:ie([Y.lights,Y.fog,{color:{value:new B(0)},opacity:{value:1}}]),vertexShader:J.shadow_vert,fragmentShader:J.shadow_frag}};Nt.physical={uniforms:ie([Nt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new z},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new z},clearcoatNormalScale:{value:new q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new z},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new z},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new z},sheen:{value:0},sheenColor:{value:new B(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new z},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new z},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new z},transmissionSamplerSize:{value:new q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new z},attenuationDistance:{value:0},attenuationColor:{value:new B(0)},specularColor:{value:new B(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new z},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new z},anisotropyVector:{value:new q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new z}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag};var Pt={r:0,b:0,g:0},Ft=new _,It=new z;It.set(-1,0,0,0,1,0,0,0,1);function Lt(e,t,n,r,i,a){let o=new B(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new R(new ge(1,1,1),new tt({name:`BackgroundCubeMaterial`,uniforms:Ge(Nt.backgroundCube.uniforms),vertexShader:Nt.backgroundCube.vertexShader,fragmentShader:Nt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ft.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(It),l.material.toneMapped=ne.getTransfer(i.colorSpace)!==Ue,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new R(new mt(2,2),new tt({name:`BackgroundMaterial`,uniforms:Ge(Nt.background.uniforms),vertexShader:Nt.background.vertexShader,fragmentShader:Nt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=ne.getTransfer(i.colorSpace)!==Ue,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Pt,y(e)),n.buffers.color.setClear(Pt.r,Pt.g,Pt.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Rt(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function zt(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Bt(e,t,n,i){let a;function o(){if(a!==void 0)return a;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);a=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(t){return t===1023||i.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function c(n){let r=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!r&&i.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let u=n.precision===void 0?`highp`:n.precision,d=l(u);d!==u&&(r(`WebGLRenderer:`,u,`not supported, using`,d,`instead.`),u=d);let f=n.logarithmicDepthBuffer===!0,p=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&p===!1&&r(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_TEXTURE_SIZE),_=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),v=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),S=e.getParameter(e.MAX_SAMPLES),C=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:c,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:x,maxSamples:S,samples:C}}function Vt(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Fe,s=new z,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ht=4,Ut=6,Wt=20,Gt=256,Kt=new te,qt=new B,Jt=null,Yt=0,Xt=0,Zt=!1,Qt=new L,$t=new L,en=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Qt}=i;Jt=this._renderer.getRenderTarget(),Yt=this._renderer.getActiveCubeFace(),Xt=this._renderer.getActiveMipmapLevel(),Zt=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cn(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sn(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jt,Yt,Xt),this._renderer.xr.enabled=Zt,e.scissorTest=!1,rn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jt=this._renderer.getRenderTarget(),Yt=this._renderer.getActiveCubeFace(),Xt=this._renderer.getActiveMipmapLevel(),Zt=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:F,minFilter:F,generateMipmaps:!1,type:ke,format:U,colorSpace:D,depthBuffer:!1},r=nn(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nn(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=tn(r)),this._blurMaterial=on(r,e,t),this._ggxMaterial=an(r,e,t)}return r}_compileMaterial(e){let t=new R(new T,e);this._renderer.compile(t,Kt)}_sceneToCubeUV(t,n,r,i,a){let o=new e(90,1,n,r),s=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,d=l.toneMapping;l.getClearColor(qt),l.toneMapping=0,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(i),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new R(new ge,new me({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let f=this._backgroundBox,p=f.material,m=!1,h=t.background;h?h.isColor&&(p.color.copy(h),t.background=null,m=!0):(p.color.copy(qt),m=!0);for(let e=0;e<6;e++){let n=e%3;n===0?(o.up.set(0,s[e],0),o.position.set(a.x,a.y,a.z),o.lookAt(a.x+c[e],a.y,a.z)):n===1?(o.up.set(0,0,s[e]),o.position.set(a.x,a.y,a.z),o.lookAt(a.x,a.y+c[e],a.z)):(o.up.set(0,s[e],0),o.position.set(a.x,a.y,a.z),o.lookAt(a.x,a.y,a.z+c[e]));let r=this._cubeSize;rn(i,n*r,e>2?r:0,r,r),l.setRenderTarget(i),m&&l.render(f,o),l.render(t,o)}l.toneMapping=d,l.autoClear=u,t.background=h}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cn()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sn());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;rn(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Kt)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Ht?n-d+Ht:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,rn(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Kt),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,rn(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Kt)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];rn(t,3*l*(r>this._lodMax-Ht?r-this._lodMax+Ht:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Kt)}};function tn(e){let t=[],n=[],r=e,i=e-Ht+1+Ut;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?$t.set(1,r,n):e===1?$t.set(-n,1,-r):e===2?$t.set(-n,r,1):e===3?$t.set(-1,r,-n):e===4?$t.set(-n,-1,r):$t.set(n,r,-1),$t.toArray(l,(e*6+t)*3)}}let u=new T;u.setAttribute(`position`,new g(c,3)),u.setAttribute(`outputDirection`,new g(l,3)),n.push(new R(u,null)),r>Ht&&r--}return{lodMeshes:n,sizeLods:t}}function nn(e,t,n){let r=new M(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function rn(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function an(e,t,n){return new tt({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Gt,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ln(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function on(e,t,n){return new tt({name:`SphericalGaussianBlur`,defines:{SAMPLES:Wt,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ln(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function sn(){return new tt({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ln(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function cn(){return new tt({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ln(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ln(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var un=class extends M{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new pt(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ge(5,5,5),a=new tt({name:`CubemapFromEquirect`,uniforms:Ge(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=n;let o=new R(i,a),s=n.minFilter;return n.minFilter===1008&&(n.minFilter=F),new t(1,10,this).update(e,o),n.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function dn(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new un(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new en(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new en(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function fn(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&pe(`WebGLRenderer: `+e+` extension not supported.`),t}}}function pn(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Xe:rt)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function mn(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function hn(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:P(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function gn(e,t,n){let r=new WeakMap,i=new l;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new lt(h,p,m,u);g.type=Ve,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new q(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function _n(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var vn={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function yn(e,t,n,r,i,a){let o=new M(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new T;l.setAttribute(`position`,new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Ze([0,2,0,0,2,0],2));let u=new h({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new R(l,u),f=new te(-1,1,1,-1,0,1),p=null,m=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new M(t,n,{type:ke,depthBuffer:!1,stencilBuffer:!1}),c=new M(t,n,{type:ke,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},ne.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=vn[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var bn=new Ie,xn=new je(1,1),Sn=new lt,Cn=new $e,wn=new pt,Tn=[],En=[],Dn=new Float32Array(16),On=new Float32Array(9),kn=new Float32Array(4);function An(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Tn[i];if(a===void 0&&(a=new Float32Array(i),Tn[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function jn(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Mn(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Nn(e,t){let n=En[t];n===void 0&&(n=new Int32Array(t),En[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Pn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Fn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(jn(n,t))return;e.uniform2fv(this.addr,t),Mn(n,t)}}function In(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(jn(n,t))return;e.uniform3fv(this.addr,t),Mn(n,t)}}function Ln(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(jn(n,t))return;e.uniform4fv(this.addr,t),Mn(n,t)}}function Rn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(jn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Mn(n,t)}else{if(jn(n,r))return;kn.set(r),e.uniformMatrix2fv(this.addr,!1,kn),Mn(n,r)}}function zn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(jn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Mn(n,t)}else{if(jn(n,r))return;On.set(r),e.uniformMatrix3fv(this.addr,!1,On),Mn(n,r)}}function Bn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(jn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Mn(n,t)}else{if(jn(n,r))return;Dn.set(r),e.uniformMatrix4fv(this.addr,!1,Dn),Mn(n,r)}}function Vn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Hn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(jn(n,t))return;e.uniform2iv(this.addr,t),Mn(n,t)}}function Un(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(jn(n,t))return;e.uniform3iv(this.addr,t),Mn(n,t)}}function Wn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(jn(n,t))return;e.uniform4iv(this.addr,t),Mn(n,t)}}function Gn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Kn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(jn(n,t))return;e.uniform2uiv(this.addr,t),Mn(n,t)}}function qn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(jn(n,t))return;e.uniform3uiv(this.addr,t),Mn(n,t)}}function Jn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(jn(n,t))return;e.uniform4uiv(this.addr,t),Mn(n,t)}}function Yn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(xn.compareFunction=n.isReversedDepthBuffer()?518:515,a=xn):a=bn,n.setTexture2D(t||a,i)}function Xn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Cn,i)}function Zn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||wn,i)}function Qn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Sn,i)}function $n(e){switch(e){case 5126:return Pn;case 35664:return Fn;case 35665:return In;case 35666:return Ln;case 35674:return Rn;case 35675:return zn;case 35676:return Bn;case 5124:case 35670:return Vn;case 35667:case 35671:return Hn;case 35668:case 35672:return Un;case 35669:case 35673:return Wn;case 5125:return Gn;case 36294:return Kn;case 36295:return qn;case 36296:return Jn;case 35678:case 36198:case 36298:case 36306:case 35682:return Yn;case 35679:case 36299:case 36307:return Xn;case 35680:case 36300:case 36308:case 36293:return Zn;case 36289:case 36303:case 36311:case 36292:return Qn}}function er(e,t){e.uniform1fv(this.addr,t)}function tr(e,t){let n=An(t,this.size,2);e.uniform2fv(this.addr,n)}function nr(e,t){let n=An(t,this.size,3);e.uniform3fv(this.addr,n)}function rr(e,t){let n=An(t,this.size,4);e.uniform4fv(this.addr,n)}function ir(e,t){let n=An(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ar(e,t){let n=An(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function or(e,t){let n=An(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function sr(e,t){e.uniform1iv(this.addr,t)}function cr(e,t){e.uniform2iv(this.addr,t)}function lr(e,t){e.uniform3iv(this.addr,t)}function ur(e,t){e.uniform4iv(this.addr,t)}function dr(e,t){e.uniform1uiv(this.addr,t)}function fr(e,t){e.uniform2uiv(this.addr,t)}function pr(e,t){e.uniform3uiv(this.addr,t)}function mr(e,t){e.uniform4uiv(this.addr,t)}function hr(e,t,n){let r=this.cache,i=t.length,a=Nn(n,i);jn(r,a)||(e.uniform1iv(this.addr,a),Mn(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?xn:bn;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function gr(e,t,n){let r=this.cache,i=t.length,a=Nn(n,i);jn(r,a)||(e.uniform1iv(this.addr,a),Mn(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Cn,a[e])}function _r(e,t,n){let r=this.cache,i=t.length,a=Nn(n,i);jn(r,a)||(e.uniform1iv(this.addr,a),Mn(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||wn,a[e])}function vr(e,t,n){let r=this.cache,i=t.length,a=Nn(n,i);jn(r,a)||(e.uniform1iv(this.addr,a),Mn(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Sn,a[e])}function yr(e){switch(e){case 5126:return er;case 35664:return tr;case 35665:return nr;case 35666:return rr;case 35674:return ir;case 35675:return ar;case 35676:return or;case 5124:case 35670:return sr;case 35667:case 35671:return cr;case 35668:case 35672:return lr;case 35669:case 35673:return ur;case 5125:return dr;case 36294:return fr;case 36295:return pr;case 36296:return mr;case 35678:case 36198:case 36298:case 36306:case 35682:return hr;case 35679:case 36299:case 36307:return gr;case 35680:case 36300:case 36308:case 36293:return _r;case 36289:case 36303:case 36311:case 36292:return vr}}var br=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$n(t.type)}},xr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yr(t.type)}},Sr=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Cr=/(\w+)(\])?(\[|\.)?/g;function wr(e,t){e.seq.push(t),e.map[t.id]=t}function Tr(e,t,n){let r=e.name,i=r.length;for(Cr.lastIndex=0;;){let a=Cr.exec(r),o=Cr.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){wr(n,l===void 0?new br(s,e,t):new xr(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Sr(s),wr(n,e)),n=e}}}var Er=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Tr(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Dr(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Or=37297,kr=0;function Ar(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var jr=new z;function Mr(e){ne._getMatrix(jr,ne.workingColorSpace,e);let t=`mat3( ${jr.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(e)){case ae:return[t,`LinearTransferOETF`];case Ue:return[t,`sRGBTransferOETF`];default:return r(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Nr(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ar(e.getShaderSource(t),r)}return i}function Pr(e,t){let n=Mr(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Fr={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Ir(e,t){let n=Fr[t];return n===void 0?(r(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Lr=new L;function Rr(){return ne.getLuminanceCoefficients(Lr),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Lr.x.toFixed(4)}, ${Lr.y.toFixed(4)}, ${Lr.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function zr(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Hr).join(`
`)}function Br(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Vr(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Hr(e){return e!==``}function Ur(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wr(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gr=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kr(e){return e.replace(Gr,Jr)}var qr=new Map;function Jr(e,t){let n=J[t];if(n===void 0){let e=qr.get(t);if(e!==void 0)n=J[e],r(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Kr(n)}var Yr=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xr(e){return e.replace(Yr,Zr)}function Zr(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Qr(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var $r={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function ei(e){return $r[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var ti={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function ni(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:ti[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var ri={302:`ENVMAP_MODE_REFRACTION`};function ii(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:ri[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var ai={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function oi(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:ai[e.combine]||`ENVMAP_BLENDING_NONE`}function si(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function ci(e,t,n,i){let a=e.getContext(),o=n.defines,s=n.vertexShader,c=n.fragmentShader,l=ei(n),u=ni(n),d=ii(n),f=oi(n),p=si(n),m=zr(n),h=Br(o),g=a.createProgram(),_,v,y=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(Hr).join(`
`),_.length>0&&(_+=`
`),v=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(Hr).join(`
`),v.length>0&&(v+=`
`)):(_=[Qr(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+d:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+l:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Hr).join(`
`),v=[Qr(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMap?`#define `+f:``,p?`#define CUBEUV_TEXEL_WIDTH `+p.texelWidth:``,p?`#define CUBEUV_TEXEL_HEIGHT `+p.texelHeight:``,p?`#define CUBEUV_MAX_MIP `+p.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+l:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:J.tonemapping_pars_fragment,n.toneMapping===0?``:Ir(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,J.colorspace_pars_fragment,Pr(`linearToOutputTexel`,n.outputColorSpace),Rr(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Hr).join(`
`)),s=Kr(s),s=Ur(s,n),s=Wr(s,n),c=Kr(c),c=Ur(c,n),c=Wr(c,n),s=Xr(s),c=Xr(c),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[m,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+_,v=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+v);let b=y+_+s,x=y+v+c,S=Dr(a,a.VERTEX_SHADER,b),C=Dr(a,a.FRAGMENT_SHADER,x);a.attachShader(g,S),a.attachShader(g,C),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&a.bindAttribLocation(g,0,`position`):a.bindAttribLocation(g,0,n.index0AttributeName),a.linkProgram(g);function w(t){if(e.debug.checkShaderErrors){let n=a.getProgramInfoLog(g)||``,i=a.getShaderInfoLog(S)||``,o=a.getShaderInfoLog(C)||``,s=n.trim(),c=i.trim(),l=o.trim(),u=!0,d=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1){if(u=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(a,g,S,C);else{let e=Nr(a,S,`vertex`),n=Nr(a,C,`fragment`);P(`WebGLProgram: Shader Error `+a.getError()+` - VALIDATE_STATUS `+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+s+`
`+e+`
`+n)}}else s===``?(c===``||l===``)&&(d=!1):r(`WebGLProgram: Program Info Log:`,s);d&&(t.diagnostics={runnable:u,programLog:s,vertexShader:{log:c,prefix:_},fragmentShader:{log:l,prefix:v}})}a.deleteShader(S),a.deleteShader(C),T=new Er(a,g),E=Vr(a,g)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=a.getProgramParameter(g,Or)),D},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kr++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=C,this}var li=0,ui=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new di(e),t.set(e,n)),n}},di=class{constructor(e){this.id=li++,this.code=e,this.usedTimes=0}};function fi(e){return e===1030||e===37490||e===36285}function pi(e,t,n,i,a,o){let s=new Je,c=new ui,l=new Set,u=[],d=new Map,f=i.logarithmicDepthBuffer,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(a,s,u,d,g,_){let v=d.fog,y=g.geometry,b=a.isMeshStandardMaterial||a.isMeshLambertMaterial||a.isMeshPhongMaterial?d.environment:null,x=a.isMeshStandardMaterial||a.isMeshLambertMaterial&&!a.envMap||a.isMeshPhongMaterial&&!a.envMap,S=t.get(a.envMap||b,x),C=S&&S.mapping===306?S.image.height:null,w=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&r(`WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let T=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,E=T===void 0?0:T.length,D=0;y.morphAttributes.position!==void 0&&(D=1),y.morphAttributes.normal!==void 0&&(D=2),y.morphAttributes.color!==void 0&&(D=3);let O,k,A,ee;if(w){let e=Nt[w];O=e.vertexShader,k=e.fragmentShader}else{O=a.vertexShader,k=a.fragmentShader;let e=c.getVertexShaderStage(a),t=c.getFragmentShaderStage(a);c.update(a,e,t),A=e.id,ee=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=g.isInstancedMesh===!0,P=g.isBatchedMesh===!0,F=!!a.map,I=!!a.matcap,te=!!S,re=!!a.aoMap,ie=!!a.lightMap,ae=!!a.bumpMap&&a.wireframe===!1,oe=!!a.normalMap,se=!!a.displacementMap,ce=!!a.emissiveMap,le=!!a.metalnessMap,L=!!a.roughnessMap,ue=a.anisotropy>0,R=a.clearcoat>0,de=a.dispersion>0,fe=a.retroreflectivity>0,pe=a.iridescence>0,z=a.sheen>0,me=a.transmission>0,he=ue&&!!a.anisotropyMap,ge=R&&!!a.clearcoatMap,_e=R&&!!a.clearcoatNormalMap,ve=R&&!!a.clearcoatRoughnessMap,ye=pe&&!!a.iridescenceMap,be=pe&&!!a.iridescenceThicknessMap,xe=z&&!!a.sheenColorMap,Se=z&&!!a.sheenRoughnessMap,Ce=!!a.specularMap,B=!!a.specularColorMap,we=!!a.specularIntensityMap,Te=me&&!!a.transmissionMap,Ee=me&&!!a.thicknessMap,De=!!a.gradientMap,Oe=!!a.alphaMap,ke=a.alphaTest>0,Ae=!!a.alphaHash,je=!!a.extensions,Me=0;a.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Me=e.toneMapping);let Ne={shaderID:w,shaderType:a.type,shaderName:a.name,vertexShader:O,fragmentShader:k,defines:a.defines,customVertexShaderID:A,customFragmentShaderID:ee,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:P,batchingColor:P&&g._colorsTexture!==null,instancing:N,instancingColor:N&&g.instanceColor!==null,instancingMorph:N&&g.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!a.alphaToCoverage,map:F,matcap:I,envMap:te,envMapMode:te&&S.mapping,envMapCubeUVHeight:C,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:se,emissiveMap:ce,normalMapObjectSpace:oe&&a.normalMapType===1,normalMapTangentSpace:oe&&a.normalMapType===0,packedNormalMap:oe&&a.normalMapType===0&&fi(a.normalMap.format),metalnessMap:le,roughnessMap:L,anisotropy:ue,anisotropyMap:he,clearcoat:R,clearcoatMap:ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:ve,dispersion:de,retroreflection:fe,iridescence:pe,iridescenceMap:ye,iridescenceThicknessMap:be,sheen:z,sheenColorMap:xe,sheenRoughnessMap:Se,specularMap:Ce,specularColorMap:B,specularIntensityMap:we,transmission:me,transmissionMap:Te,thicknessMap:Ee,gradientMap:De,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:Oe,alphaTest:ke,alphaHash:Ae,combine:a.combine,mapUv:F&&h(a.map.channel),aoMapUv:re&&h(a.aoMap.channel),lightMapUv:ie&&h(a.lightMap.channel),bumpMapUv:ae&&h(a.bumpMap.channel),normalMapUv:oe&&h(a.normalMap.channel),displacementMapUv:se&&h(a.displacementMap.channel),emissiveMapUv:ce&&h(a.emissiveMap.channel),metalnessMapUv:le&&h(a.metalnessMap.channel),roughnessMapUv:L&&h(a.roughnessMap.channel),anisotropyMapUv:he&&h(a.anisotropyMap.channel),clearcoatMapUv:ge&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:_e&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:be&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:Se&&h(a.sheenRoughnessMap.channel),specularMapUv:Ce&&h(a.specularMap.channel),specularColorMapUv:B&&h(a.specularColorMap.channel),specularIntensityMapUv:we&&h(a.specularIntensityMap.channel),transmissionMapUv:Te&&h(a.transmissionMap.channel),thicknessMapUv:Ee&&h(a.thicknessMap.channel),alphaMapUv:Oe&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(oe||ue),vertexNormals:!!y.attributes.normal,vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:g.isPoints===!0&&!!y.attributes.uv&&(F||Oe),fog:!!v,useFog:a.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:a.wireframe===!1&&(a.flatShading===!0||y.attributes.normal===void 0&&oe===!1&&(a.isMeshLambertMaterial||a.isMeshPhongMaterial||a.isMeshStandardMaterial||a.isMeshPhysicalMaterial)),sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:M,skinning:g.isSkinnedMesh===!0,hasPositionAttribute:y.attributes.position!==void 0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:D,numSunLights:s.sun.length,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numSunLightShadows:s.sunShadowMap.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numLightProbeGrids:_.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:F&&a.map.isVideoTexture===!0&&ne.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&a.emissiveMap.isVideoTexture===!0&&ne.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:je&&a.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(je&&a.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.instancing&&s.enable(0),t.instancingColor&&s.enable(1),t.instancingMorph&&s.enable(2),t.matcap&&s.enable(3),t.envMap&&s.enable(4),t.normalMapObjectSpace&&s.enable(5),t.normalMapTangentSpace&&s.enable(6),t.clearcoat&&s.enable(7),t.iridescence&&s.enable(8),t.alphaTest&&s.enable(9),t.vertexColors&&s.enable(10),t.vertexAlphas&&s.enable(11),t.vertexUv1s&&s.enable(12),t.vertexUv2s&&s.enable(13),t.vertexUv3s&&s.enable(14),t.vertexTangents&&s.enable(15),t.anisotropy&&s.enable(16),t.alphaHash&&s.enable(17),t.batching&&s.enable(18),t.dispersion&&s.enable(19),t.retroreflection&&s.enable(24),t.batchingColor&&s.enable(20),t.gradientMap&&s.enable(21),t.packedNormalMap&&s.enable(22),t.vertexNormals&&s.enable(23),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reversedDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),t.numLightProbeGrids>0&&s.enable(22),t.hasPositionAttribute&&s.enable(23),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=Nt[t];n=Be.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r=d.get(n);return r===void 0?(r=new ci(e,n,t,a),u.push(r),d.set(n,r)):++r.usedTimes,r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),d.delete(e.cacheKey),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function mi(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function hi(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function gi(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function _i(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||hi),r.length>1&&r.sort(t||gi),i.length>1&&i.sort(t||gi)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function vi(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new _i,e.set(t,[i])):n>=r.length?(i=new _i,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function yi(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new L,color:new B};break;case`SpotLight`:n={position:new L,direction:new L,color:new B,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new L,color:new B,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new L,skyColor:new B,groundColor:new B};break;case`RectAreaLight`:n={color:new B,position:new L,halfWidth:new L,halfHeight:new L}}return e[t.id]=n,n}}}function bi(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var xi=0;function Si(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ci(e){let t=new yi,n=bi(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new L);let i=new L,a=new _,o=new _;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Si);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=xi++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function wi(e){let t=new Ci(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Ti(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new wi(e),t.set(n,[a])):r>=i.length?(a=new wi(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ei=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Di=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Oi=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],ki=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Ai=new _,ji=new L,Mi=new L;function Ni(e,t,n){let i=new we,a=new q,o=new q,s=new l,c=new m,u=new w,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},h=new tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new q},radius:{value:4}},vertexShader:Ei,fragmentShader:Di}),_=h.clone();_.defines.HORIZONTAL_PASS=1;let v=new T;v.setAttribute(`position`,new g(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new R(v,h),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let x=this.type;this.render=function(t,n,c){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||t.length===0)return;this.type===2&&(r(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let l=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=x!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,u=t.length;l<u;l++){let u=t[l],d=u.shadow;if(d===void 0){r(`WebGLShadowMap:`,u,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;a.copy(d.mapSize);let h=d.getFrameExtents();a.multiply(h),o.copy(d.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(o.x=Math.floor(f/h.x),a.x=o.x*h.x,d.mapSize.x=o.x),a.y>f&&(o.y=Math.floor(f/h.y),a.y=o.y*h.y,d.mapSize.y=o.y));let g=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=g,d.map===null||m===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(u.isPointLight){r(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new M(a.x,a.y,{format:de,type:ke,minFilter:F,magFilter:F,generateMipmaps:!1}),d.map.texture.name=u.name+`.shadowMap`,d.map.depthTexture=new je(a.x,a.y,Ve),d.map.depthTexture.name=u.name+`.shadowMapDepth`,d.map.depthTexture.format=nt,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=be,d.map.depthTexture.magFilter=be}else u.isPointLight?(d.map=new un(a.x),d.map.depthTexture=new H(a.x,Oe)):(d.map=new M(a.x,a.y),d.map.depthTexture=new je(a.x,a.y,Oe)),d.map.depthTexture.name=u.name+`.shadowMap`,d.map.depthTexture.format=nt,this.type===1?(d.map.depthTexture.compareFunction=g?518:515,d.map.depthTexture.minFilter=F,d.map.depthTexture.magFilter=F):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=be,d.map.depthTexture.magFilter=be);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==a.x||d.map.height!==a.y)&&d.map.setSize(a.x,a.y);let _=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();u.isPointLight!==!0&&d.updateMatrices(u,c);for(let t=0;t<_;t++){let r=d.getCamera(t);if(u.isPointLight){let e=d.camera,n=d.matrix,r=u.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),ji.setFromMatrixPosition(u.matrixWorld),e.position.copy(ji),Mi.copy(e.position),Mi.add(Oi[t]),e.up.copy(ki[t]),e.lookAt(Mi),e.updateMatrixWorld(),n.makeTranslation(-ji.x,-ji.y,-ji.z),Ai.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Ai,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);s.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),p.viewport(s)}i=d.getFrustum(t),E(n,c,r,u,this.type)}d.isPointLightShadow!==!0&&this.type===3&&S(d,c),d.needsUpdate=!1}x=this.type,b.needsUpdate=!1,e.setRenderTarget(l,u,d)};function S(n,r){let i=t.update(y);h.defines.VSM_SAMPLES!==n.blurSamples&&(h.defines.VSM_SAMPLES=n.blurSamples,_.defines.VSM_SAMPLES=n.blurSamples,h.needsUpdate=!0,_.needsUpdate=!0),n.mapPass===null?n.mapPass=new M(a.x,a.y,{format:de,type:ke}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),h.uniforms.shadow_pass.value=n.map.depthTexture,h.uniforms.resolution.value.set(n.map.width,n.map.height),h.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,h,y,null),_.uniforms.shadow_pass.value=n.mapPass.texture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,_,y,null)}function C(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=C(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=C(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Pi(e,t){function n(){let t=!1,n=new l,r=null,i=new l(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?le(e.DEPTH_TEST):L(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Ce[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?le(e.STENCIL_TEST):L(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,u=new WeakMap,d={},f={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new B(0,0,0),E=0,D=!1,O=null,k=null,A=null,ee=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,F=0,I=e.getParameter(e.VERSION);I.indexOf(`WebGL`)===-1?I.indexOf(`OpenGL ES`)!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),N=F>=2):(F=parseFloat(/^WebGL (\d)/.exec(I)[1]),N=F>=1);let te=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new l().fromArray(re),oe=new l().fromArray(ie);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),le(e.DEPTH_TEST),o.setFunc(3),he(!1),ge(1),le(e.CULL_FACE),z(0);function le(t){d[t]!==!0&&(e.enable(t),d[t]=!0)}function L(t){d[t]!==!1&&(e.disable(t),d[t]=!1)}function ue(t,n){return p[t]!==n&&(e.bindFramebuffer(t,n),p[t]=n,t===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=n),!0)}function R(t,n){let r=h,i=!1;if(t){r=m.get(n),r===void 0&&(r=[],m.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return g!==t&&(e.useProgram(t),g=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function z(t,n,r,i,a,o,s,c,l,u){if(t===0){_===!0&&(L(e.BLEND),_=!1);return}if(_===!1&&(le(e.BLEND),_=!0),t!==5){if(t!==v||u!==D){if((y!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,S=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:P(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:P(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:P(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:P(`WebGLState: Invalid blending: `,t)}b=null,x=null,C=null,w=null,T.set(0,0,0),E=0,v=t,D=u}return}a||=n,o||=r,s||=i,(n!==y||a!==S)&&(e.blendEquationSeparate(fe[n],fe[a]),y=n,S=a),(r!==b||i!==x||o!==C||s!==w)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),b=r,x=i,C=o,w=s),(c.equals(T)===!1||l!==E)&&(e.blendColor(c.r,c.g,c.b,l),T.copy(c),E=l),v=t,D=!1}function me(t,n){t.side===2?L(e.CULL_FACE):le(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?z(0):z(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ve(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?le(e.SAMPLE_ALPHA_TO_COVERAGE):L(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){O!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),O=t)}function ge(t){t===0?L(e.CULL_FACE):(le(e.CULL_FACE),t!==k&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),k=t}function _e(t){t!==A&&(N&&e.lineWidth(t),A=t)}function ve(t,n,r){t?(le(e.POLYGON_OFFSET_FILL),(ee!==n||j!==r)&&(ee=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):L(e.POLYGON_OFFSET_FILL)}function ye(t){t?le(e.SCISSOR_TEST):L(e.SCISSOR_TEST)}function be(t){t===void 0&&(t=e.TEXTURE0+M-1),te!==t&&(e.activeTexture(t),te=t)}function xe(t,n,r){r===void 0&&(r=te===null?e.TEXTURE0+M-1:te);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(te!==r&&(e.activeTexture(r),te=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function Se(){let t=ne[te];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function we(){try{e.compressedTexImage2D(...arguments)}catch(e){P(`WebGLState:`,e)}}function Te(){try{e.compressedTexImage3D(...arguments)}catch(e){P(`WebGLState:`,e)}}function Ee(){try{e.texSubImage2D(...arguments)}catch(e){P(`WebGLState:`,e)}}function De(){try{e.texSubImage3D(...arguments)}catch(e){P(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){P(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage3D(...arguments)}catch(e){P(`WebGLState:`,e)}}function Ae(){try{e.texStorage2D(...arguments)}catch(e){P(`WebGLState:`,e)}}function je(){try{e.texStorage3D(...arguments)}catch(e){P(`WebGLState:`,e)}}function Me(){try{e.texImage2D(...arguments)}catch(e){P(`WebGLState:`,e)}}function Ne(){try{e.texImage3D(...arguments)}catch(e){P(`WebGLState:`,e)}}function Pe(t){return f[t]===void 0?e.getParameter(t):f[t]}function V(t,n){f[t]!==n&&(e.pixelStorei(t,n),f[t]=n)}function H(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function Fe(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function Ie(t,n){let r=u.get(n);r===void 0&&(r=new WeakMap,u.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Le(t,n){let r=u.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function U(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),d={},f={},te=null,ne={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new B(0,0,0),E=0,D=!1,O=null,k=null,A=null,ee=null,j=null,ae.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:le,disable:L,bindFramebuffer:ue,drawBuffers:R,useProgram:de,setBlending:z,setMaterial:me,setFlipSided:he,setCullFace:ge,setLineWidth:_e,setPolygonOffset:ve,setScissorTest:ye,activeTexture:be,bindTexture:xe,unbindTexture:Se,compressedTexImage2D:we,compressedTexImage3D:Te,texImage2D:Me,texImage3D:Ne,pixelStorei:V,getParameter:Pe,updateUBOMapping:Ie,uniformBlockBinding:Le,texStorage2D:Ae,texStorage3D:je,texSubImage2D:Ee,texSubImage3D:De,compressedTexSubImage2D:Oe,compressedTexSubImage3D:ke,scissor:H,viewport:Fe,reset:U}}function Fi(e,t,n,i,a,o,s){let c=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,l=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),u=new q,p=new WeakMap,m=new Set,h,g=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function v(e,t){return _?new OffscreenCanvas(e,t):ee(`canvas`)}function y(e,t,n){let i=1,a=V(e);if((a.width>n||a.height>n)&&(i=n/Math.max(a.width,a.height)),i<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(i*a.width),o=Math.floor(i*a.height);h===void 0&&(h=v(n,o));let s=t?v(n,o):h;return s.width=n,s.height=o,s.getContext(`2d`).drawImage(e,0,0,n,o),r(`WebGLRenderer: Texture has been resized from (`+a.width+`x`+a.height+`) to (`+n+`x`+o+`).`),s}return`data`in e&&r(`WebGLRenderer: Image in DataTexture is too big (`+a.width+`x`+a.height+`).`),e}return e}function x(e){return e.generateMipmaps}function C(t){e.generateMipmap(t)}function w(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function T(n,i,a,o,s,c=!1){if(n!==null){if(e[n]!==void 0)return e[n];r(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let l;o&&(l=t.get(`EXT_texture_norm16`),l||r(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let u=i;if(i===e.RED&&(a===e.FLOAT&&(u=e.R32F),a===e.HALF_FLOAT&&(u=e.R16F),a===e.UNSIGNED_BYTE&&(u=e.R8),a===e.UNSIGNED_SHORT&&l&&(u=l.R16_EXT),a===e.SHORT&&l&&(u=l.R16_SNORM_EXT)),i===e.RED_INTEGER&&(a===e.UNSIGNED_BYTE&&(u=e.R8UI),a===e.UNSIGNED_SHORT&&(u=e.R16UI),a===e.UNSIGNED_INT&&(u=e.R32UI),a===e.BYTE&&(u=e.R8I),a===e.SHORT&&(u=e.R16I),a===e.INT&&(u=e.R32I)),i===e.RG&&(a===e.FLOAT&&(u=e.RG32F),a===e.HALF_FLOAT&&(u=e.RG16F),a===e.UNSIGNED_BYTE&&(u=e.RG8),a===e.UNSIGNED_SHORT&&l&&(u=l.RG16_EXT),a===e.SHORT&&l&&(u=l.RG16_SNORM_EXT)),i===e.RG_INTEGER&&(a===e.UNSIGNED_BYTE&&(u=e.RG8UI),a===e.UNSIGNED_SHORT&&(u=e.RG16UI),a===e.UNSIGNED_INT&&(u=e.RG32UI),a===e.BYTE&&(u=e.RG8I),a===e.SHORT&&(u=e.RG16I),a===e.INT&&(u=e.RG32I)),i===e.RGB_INTEGER&&(a===e.UNSIGNED_BYTE&&(u=e.RGB8UI),a===e.UNSIGNED_SHORT&&(u=e.RGB16UI),a===e.UNSIGNED_INT&&(u=e.RGB32UI),a===e.BYTE&&(u=e.RGB8I),a===e.SHORT&&(u=e.RGB16I),a===e.INT&&(u=e.RGB32I)),i===e.RGBA_INTEGER&&(a===e.UNSIGNED_BYTE&&(u=e.RGBA8UI),a===e.UNSIGNED_SHORT&&(u=e.RGBA16UI),a===e.UNSIGNED_INT&&(u=e.RGBA32UI),a===e.BYTE&&(u=e.RGBA8I),a===e.SHORT&&(u=e.RGBA16I),a===e.INT&&(u=e.RGBA32I)),i===e.RGB&&(a===e.UNSIGNED_SHORT&&l&&(u=l.RGB16_EXT),a===e.SHORT&&l&&(u=l.RGB16_SNORM_EXT),a===e.UNSIGNED_INT_5_9_9_9_REV&&(u=e.RGB9_E5),a===e.UNSIGNED_INT_10F_11F_11F_REV&&(u=e.R11F_G11F_B10F)),i===e.RGBA){let t=c?ae:ne.getTransfer(s);a===e.FLOAT&&(u=e.RGBA32F),a===e.HALF_FLOAT&&(u=e.RGBA16F),a===e.UNSIGNED_BYTE&&(u=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),a===e.UNSIGNED_SHORT&&l&&(u=l.RGBA16_EXT),a===e.SHORT&&l&&(u=l.RGBA16_SNORM_EXT),a===e.UNSIGNED_SHORT_4_4_4_4&&(u=e.RGBA4),a===e.UNSIGNED_SHORT_5_5_5_1&&(u=e.RGB5_A1)}return(u===e.R16F||u===e.R32F||u===e.RG16F||u===e.RG32F||u===e.RGBA16F||u===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),u}function E(t,n){let i;return t?n===null||n===1014||n===1020?i=e.DEPTH24_STENCIL8:n===1015?i=e.DEPTH32F_STENCIL8:n===1012&&(i=e.DEPTH24_STENCIL8,r(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?i=e.DEPTH_COMPONENT24:n===1015?i=e.DEPTH_COMPONENT32F:n===1012&&(i=e.DEPTH_COMPONENT16),i}function D(e,t){return x(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function O(e){let t=e.target;t.removeEventListener(`dispose`,O),A(t),t.isVideoTexture&&p.delete(t),t.isHTMLTexture&&m.delete(t)}function k(e){let t=e.target;t.removeEventListener(`dispose`,k),M(t)}function A(e){let t=i.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=g.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&j(e),Object.keys(r).length===0&&g.delete(n)}i.remove(e)}function j(t){let n=i.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,a=g.get(r);delete a[n.__cacheKey],s.memory.textures--}function M(t){let n=i.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),i.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=i.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),s.memory.textures--),i.remove(r[t])}i.remove(t)}let N=0;function I(){N=0}function te(){return N}function re(e){N=e}function ie(){let e=N;return e>=a.maxTextures&&r(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+a.maxTextures),N+=1,e}function oe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function se(t,a){let o=i.get(t);if(t.isVideoTexture&&Ne(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&o.__version!==t.version){let e=t.image;if(e===null)r(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)r(`WebGLRenderer: Texture marked for update but image is incomplete`);else{he(o,t,a);return}}else t.isExternalTexture&&(o.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,o.__webglTexture,e.TEXTURE0+a)}function ce(t,r){let a=i.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){he(a,t,r);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+r)}function le(t,r){let a=i.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){he(a,t,r);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+r)}function L(t,r){let a=i.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){ge(a,t,r);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+r)}let ue={[ve]:e.REPEAT,[ye]:e.CLAMP_TO_EDGE,[S]:e.MIRRORED_REPEAT},R={[be]:e.NEAREST,[Se]:e.NEAREST_MIPMAP_NEAREST,[_e]:e.NEAREST_MIPMAP_LINEAR,[F]:e.LINEAR,[b]:e.LINEAR_MIPMAP_NEAREST,[f]:e.LINEAR_MIPMAP_LINEAR},de={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function fe(n,o){if(o.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(o.magFilter===1006||o.magFilter===1007||o.magFilter===1005||o.magFilter===1008||o.minFilter===1006||o.minFilter===1007||o.minFilter===1005||o.minFilter===1008)&&r(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ue[o.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ue[o.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ue[o.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,R[o.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,R[o.minFilter]),o.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,de[o.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(o.magFilter===1003||o.minFilter!==1005&&o.minFilter!==1008||o.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(o.anisotropy>1||i.get(o).__currentAnisotropy){let r=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,r.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(o.anisotropy,a.getMaxAnisotropy())),i.get(o).__currentAnisotropy=o.anisotropy}}}function pe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,O));let i=n.source,a=g.get(i);a===void 0&&(a={},g.set(i,a));let o=oe(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&j(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function z(e,t,n){return Math.floor(Math.floor(e/n)/t)}function me(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=z(n.start,r.width,4),c=z(t.start,r.width,4);n.start<=i+1&&a===c&&z(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function he(t,s,c){let l=e.TEXTURE_2D;(s.isDataArrayTexture||s.isCompressedArrayTexture)&&(l=e.TEXTURE_2D_ARRAY),s.isData3DTexture&&(l=e.TEXTURE_3D);let u=pe(t,s),f=s.source;n.bindTexture(l,t.__webglTexture,e.TEXTURE0+c);let p=i.get(f);if(f.version!==p.__version||u===!0){if(n.activeTexture(e.TEXTURE0+c),!(typeof ImageBitmap<`u`&&s.image instanceof ImageBitmap)){let t=ne.getPrimaries(ne.workingColorSpace),r=s.colorSpace===``?null:ne.getPrimaries(s.colorSpace),i=s.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment);let t=y(s.image,!1,a.maxTextureSize);t=Pe(s,t);let i=o.convert(s.format,s.colorSpace),h=o.convert(s.type),g=T(s.internalFormat,i,h,s.normalized,s.colorSpace,s.isVideoTexture);fe(l,s);let _,v=s.mipmaps,b=s.isVideoTexture!==!0,S=p.__version===void 0||u===!0,w=f.dataReady,O=D(s,t);if(s.isDepthTexture)g=E(s.format===dt,s.type),S&&(b?n.texStorage2D(e.TEXTURE_2D,1,g,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,g,t.width,t.height,0,i,h,null));else if(s.isDataTexture){if(v.length>0){b&&S&&n.texStorage2D(e.TEXTURE_2D,O,g,v[0].width,v[0].height);for(let t=0,r=v.length;t<r;t++)_=v[t],b?w&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,i,h,_.data):n.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,i,h,_.data);s.generateMipmaps=!1}else b?(S&&n.texStorage2D(e.TEXTURE_2D,O,g,t.width,t.height),w&&me(s,t,i,h)):n.texImage2D(e.TEXTURE_2D,0,g,t.width,t.height,0,i,h,t.data)}else if(s.isCompressedTexture){if(s.isCompressedArrayTexture){b&&S&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,g,v[0].width,v[0].height,t.depth);for(let a=0,o=v.length;a<o;a++)if(_=v[a],s.format!==1023){if(i!==null){if(b){if(w){if(s.layerUpdates.size>0){let t=d(_.width,_.height,s.format,s.type);for(let r of s.layerUpdates){let o=_.data.subarray(r*t/_.data.BYTES_PER_ELEMENT,(r+1)*t/_.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,r,_.width,_.height,1,i,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,0,_.width,_.height,t.depth,i,_.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,a,g,_.width,_.height,t.depth,0,_.data,0,0)}else r(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else b?w&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,0,_.width,_.height,t.depth,i,h,_.data):n.texImage3D(e.TEXTURE_2D_ARRAY,a,g,_.width,_.height,t.depth,0,i,h,_.data);s.layerUpdates.size>0&&s.clearLayerUpdates()}else{b&&S&&n.texStorage2D(e.TEXTURE_2D,O,g,v[0].width,v[0].height);for(let t=0,a=v.length;t<a;t++)_=v[t],s.format===1023?b?w&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,i,h,_.data):n.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,i,h,_.data):i===null?r(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):b?w&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,i,_.data):n.compressedTexImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,_.data)}}else if(s.isDataArrayTexture){if(b){if(S&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,g,t.width,t.height,t.depth),w){if(s.layerUpdates.size>0){let r=d(t.width,t.height,s.format,s.type);for(let a of s.layerUpdates){let o=t.data.subarray(a*r/t.data.BYTES_PER_ELEMENT,(a+1)*r/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,i,h,o)}s.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,i,h,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,g,t.width,t.height,t.depth,0,i,h,t.data)}else if(s.isData3DTexture)b?(S&&n.texStorage3D(e.TEXTURE_3D,O,g,t.width,t.height,t.depth),w&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,i,h,t.data)):n.texImage3D(e.TEXTURE_3D,0,g,t.width,t.height,t.depth,0,i,h,t.data);else if(s.isFramebufferTexture){if(S){if(b)n.texStorage2D(e.TEXTURE_2D,O,g,t.width,t.height);else{let r=t.width,a=t.height;for(let t=0;t<O;t++)n.texImage2D(e.TEXTURE_2D,t,g,r,a,0,i,h,null),r>>=1,a>>=1}}}else if(s.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),m.add(s),n.onpaint=e=>{let t=e.changedElements;for(let e of m)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(v.length>0){if(b&&S){let t=V(v[0]);n.texStorage2D(e.TEXTURE_2D,O,g,t.width,t.height)}for(let t=0,r=v.length;t<r;t++)_=v[t],b?w&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,i,h,_):n.texImage2D(e.TEXTURE_2D,t,g,i,h,_);s.generateMipmaps=!1}else if(b){if(S){let r=V(t);n.texStorage2D(e.TEXTURE_2D,O,g,r.width,r.height)}w&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,i,h,t)}else n.texImage2D(e.TEXTURE_2D,0,g,i,h,t);x(s)&&C(l),p.__version=f.version,s.onUpdate&&s.onUpdate(s)}t.__version=s.version}function ge(t,s,c){if(s.image.length!==6)return;let l=pe(t,s),u=s.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+c);let d=i.get(u);if(u.version!==d.__version||l===!0){n.activeTexture(e.TEXTURE0+c);let t=ne.getPrimaries(ne.workingColorSpace),i=s.colorSpace===``?null:ne.getPrimaries(s.colorSpace),f=s.colorSpace===``||t===i?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=s.isCompressedTexture||s.image[0].isCompressedTexture,m=s.image[0]&&s.image[0].isDataTexture,h=[];for(let e=0;e<6;e++)!p&&!m?h[e]=y(s.image[e],!0,a.maxCubemapSize):h[e]=m?s.image[e].image:s.image[e],h[e]=Pe(s,h[e]);let g=h[0],_=o.convert(s.format,s.colorSpace),v=o.convert(s.type),b=T(s.internalFormat,_,v,s.normalized,s.colorSpace),S=s.isVideoTexture!==!0,w=d.__version===void 0||l===!0,E=u.dataReady,O=D(s,g);fe(e.TEXTURE_CUBE_MAP,s);let k;if(p){S&&w&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,b,g.width,g.height);for(let t=0;t<6;t++){k=h[t].mipmaps;for(let i=0;i<k.length;i++){let a=k[i];s.format===1023?S?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,_,v,a.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,b,a.width,a.height,0,_,v,a.data):_===null?r(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):S?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,_,a.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,b,a.width,a.height,0,a.data)}}}else{if(k=s.mipmaps,S&&w){k.length>0&&O++;let t=V(h[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,b,t.width,t.height)}for(let t=0;t<6;t++)if(m){S?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,h[t].width,h[t].height,_,v,h[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,b,h[t].width,h[t].height,0,_,v,h[t].data);for(let r=0;r<k.length;r++){let i=k[r].image[t].image;S?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,_,v,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,b,i.width,i.height,0,_,v,i.data)}}else{S?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,_,v,h[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,b,_,v,h[t]);for(let r=0;r<k.length;r++){let i=k[r];S?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,_,v,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,b,_,v,i.image[t])}}}x(s)&&C(e.TEXTURE_CUBE_MAP),d.__version=u.version,s.onUpdate&&s.onUpdate(s)}t.__version=s.version}function xe(t,r,a,s,l,u){let d=o.convert(a.format,a.colorSpace),f=o.convert(a.type),p=T(a.internalFormat,d,f,a.normalized,a.colorSpace),m=i.get(r),h=i.get(a);if(h.__renderTarget=r,!m.__hasExternalTextures){let t=Math.max(1,r.width>>u),i=Math.max(1,r.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,i,r.depth,0,d,f,null):n.texImage2D(l,u,p,t,i,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Me(r)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,s,l,h.__webglTexture,0,je(r)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,s,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=E(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Me(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,je(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,je(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],s=o.convert(a.format,a.colorSpace),l=o.convert(a.type),u=T(a.internalFormat,s,l,a.normalized,a.colorSpace);Me(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,je(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,je(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function B(t,r,a){let s=r.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(r.depthTexture&&r.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=i.get(r.depthTexture);if(l.__renderTarget=r,(!l.__webglTexture||r.depthTexture.image.width!==r.width||r.depthTexture.image.height!==r.height)&&(r.depthTexture.image.width=r.width,r.depthTexture.image.height=r.height,r.depthTexture.needsUpdate=!0),s){if(l.__webglInit===void 0&&(l.__webglInit=!0,r.depthTexture.addEventListener(`dispose`,O)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),fe(e.TEXTURE_CUBE_MAP,r.depthTexture);let t=o.convert(r.depthTexture.format),i=o.convert(r.depthTexture.type),a;r.depthTexture.format===1026?a=e.DEPTH_COMPONENT24:r.depthTexture.format===1027&&(a=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,a,r.width,r.height,0,t,i,null)}}else se(r.depthTexture,0);let u=l.__webglTexture,d=je(r),f=s?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=r.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(r.depthTexture.format===1026)Me(r)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(r.depthTexture.format===1027)Me(r)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function we(t){let r=i.get(t),a=t.isWebGLCubeRenderTarget===!0;if(r.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(r.__depthDisposeCallback&&r.__depthDisposeCallback(),e){let t=()=>{delete r.__boundDepthTexture,delete r.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),r.__depthDisposeCallback=t}r.__boundDepthTexture=e}if(t.depthTexture&&!r.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)B(r.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?B(r.__webglFramebuffer[0],t,0):B(r.__webglFramebuffer,t,0)}}else if(a){r.__webglDepthbuffer=[];for(let i=0;i<6;i++)if(n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[i]),r.__webglDepthbuffer[i]===void 0)r.__webglDepthbuffer[i]=e.createRenderbuffer(),Ce(r.__webglDepthbuffer[i],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=r.__webglDepthbuffer[i];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let i=t.texture.mipmaps;if(i&&i.length>0?n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer),r.__webglDepthbuffer===void 0)r.__webglDepthbuffer=e.createRenderbuffer(),Ce(r.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=r.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,i)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(t,n,r){let a=i.get(t);n!==void 0&&xe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&we(t)}function Ee(t){let r=t.texture,a=i.get(t),c=i.get(r);t.addEventListener(`dispose`,k);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=r.version,s.memory.textures++),u){a.__webglFramebuffer=[];for(let t=0;t<6;t++)if(r.mipmaps&&r.mipmaps.length>0){a.__webglFramebuffer[t]=[];for(let n=0;n<r.mipmaps.length;n++)a.__webglFramebuffer[t][n]=e.createFramebuffer()}else a.__webglFramebuffer[t]=e.createFramebuffer()}else{if(r.mipmaps&&r.mipmaps.length>0){a.__webglFramebuffer=[];for(let t=0;t<r.mipmaps.length;t++)a.__webglFramebuffer[t]=e.createFramebuffer()}else a.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=i.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),s.memory.textures++)}if(t.samples>0&&Me(t)===!1){a.__webglMultisampledFramebuffer=e.createFramebuffer(),a.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,a.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];a.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,a.__webglColorRenderbuffer[n]);let i=o.convert(r.format,r.colorSpace),s=o.convert(r.type),c=T(r.internalFormat,i,s,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=je(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,a.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(a.__webglDepthRenderbuffer=e.createRenderbuffer(),Ce(a.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),fe(e.TEXTURE_CUBE_MAP,r);for(let n=0;n<6;n++)if(r.mipmaps&&r.mipmaps.length>0)for(let i=0;i<r.mipmaps.length;i++)xe(a.__webglFramebuffer[n][i],t,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,i);else xe(a.__webglFramebuffer[n],t,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);x(r)&&C(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let r=0,o=l.length;r<o;r++){let o=l[r],s=i.get(o),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,s.__webglTexture),fe(c,o),xe(a.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+r,c,0),x(o)&&C(c)}n.unbindTexture()}else{let i=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(i=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(i,c.__webglTexture),fe(i,r),r.mipmaps&&r.mipmaps.length>0)for(let n=0;n<r.mipmaps.length;n++)xe(a.__webglFramebuffer[n],t,r,e.COLOR_ATTACHMENT0,i,n);else xe(a.__webglFramebuffer,t,r,e.COLOR_ATTACHMENT0,i,0);x(r)&&C(i),n.unbindTexture()}t.depthBuffer&&we(t)}function De(e){let t=e.textures;for(let r=0,a=t.length;r<a;r++){let a=t[r];if(x(a)){let t=w(e),r=i.get(a).__webglTexture;n.bindTexture(t,r),C(t),n.unbindTexture()}}}let Oe=[],ke=[];function Ae(t){if(t.samples>0){if(Me(t)===!1){let r=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=i.get(t),d=r.length>1;if(d)for(let t=0;t<r.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<r.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=i.get(r[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),l===!0&&(Oe.length=0,ke.length=0,Oe.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Oe.push(c),ke.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ke)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Oe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<r.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=i.get(r[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&l){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function je(e){return Math.min(a.maxSamples,e.samples)}function Me(e){let n=i.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ne(e){let t=s.render.frame;p.get(e)!==t&&(p.set(e,t),e.update())}function Pe(e,t){let n=e.colorSpace,i=e.format,a=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(ne.getTransfer(n)===`srgb`?(i!==1023||a!==1009)&&r(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):P(`WebGLTextures: Unsupported texture color space:`,n)),t}function V(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(u.width=e.naturalWidth||e.width,u.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(u.width=e.displayWidth,u.height=e.displayHeight):(u.width=e.width,u.height=e.height),u}this.allocateTextureUnit=ie,this.resetTextureUnits=I,this.getTextureUnits=te,this.setTextureUnits=re,this.setTexture2D=se,this.setTexture2DArray=ce,this.setTexture3D=le,this.setTextureCube=L,this.rebindTextures=Te,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Ii(e,t){function n(n,r=``){let i,a=ne.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Li=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ri=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,zi=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new it(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new tt({vertexShader:Li,fragmentShader:Ri,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new R(new mt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bi=class extends Le{constructor(t,n){super();let i=this,a=null,o=1,s=null,c=`local-floor`,u=1,d=null,f=null,p=null,m=null,h=null,g=null,_=typeof XRWebGLBinding<`u`,y=new zi,b={},x=n.getContextAttributes(),S=null,C=null,w=[],T=[],E=new q,D=null,O=null,k=new e;k.viewport=new l;let A=new e;A.viewport=new l;let ee=[k,A],j=new v,N=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=w[e];return t===void 0&&(t=new qe,w[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=w[e];return t===void 0&&(t=new qe,w[e]=t),t.getGripSpace()},this.getHand=function(e){let t=w[e];return t===void 0&&(t=new qe,w[e]=t),t.getHandSpace()};function F(e){let t=T.indexOf(e.inputSource);if(t===-1)return;let n=w[t];n!==void 0&&(n.update(e.inputSource,e.frame,d||s),n.dispatchEvent({type:e.type,data:e.inputSource}))}function I(){a.removeEventListener(`select`,F),a.removeEventListener(`selectstart`,F),a.removeEventListener(`selectend`,F),a.removeEventListener(`squeeze`,F),a.removeEventListener(`squeezestart`,F),a.removeEventListener(`squeezeend`,F),a.removeEventListener(`end`,I),a.removeEventListener(`inputsourceschange`,te);for(let e=0;e<w.length;e++){let t=T[e];t!==null&&(T[e]=null,w[e].disconnect(t))}N=null,P=null,y.reset();for(let e in b)delete b[e];if(t.setRenderTarget(S),h=null,m=null,p=null,a=null,C=null,le.stop(),i.isPresenting=!1,t.setPixelRatio(D),t.setSize(E.width,E.height,!1),O!==null){let e=O.camera;e.fov=O.fov,e.zoom=O.zoom,e.updateProjectionMatrix(),O=null}i.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){o=e,i.isPresenting===!0&&r(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){c=e,i.isPresenting===!0&&r(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return d||s},this.setReferenceSpace=function(e){d=e},this.getBaseLayer=function(){return m===null?h:m},this.getBinding=function(){return p===null&&_&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(e){if(a=e,a!==null){if(S=t.getRenderTarget(),a.addEventListener(`select`,F),a.addEventListener(`selectstart`,F),a.addEventListener(`selectend`,F),a.addEventListener(`squeeze`,F),a.addEventListener(`squeezestart`,F),a.addEventListener(`squeezeend`,F),a.addEventListener(`end`,I),a.addEventListener(`inputsourceschange`,te),x.xrCompatible!==!0&&await n.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(E),_&&`createProjectionLayer`in XRWebGLBinding.prototype){let e=null,r=null,i=null;x.depth&&(i=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,e=x.stencil?dt:nt,r=x.stencil?_t:Oe);let s={colorFormat:n.RGBA8,depthFormat:i,scaleFactor:o};p=this.getBinding(),m=p.createProjectionLayer(s),a.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),C=new M(m.textureWidth,m.textureHeight,{format:U,type:Re,depthTexture:new je(m.textureWidth,m.textureHeight,r,void 0,void 0,void 0,void 0,void 0,void 0,e),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let e={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(a,n,e),a.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),C=new M(h.framebufferWidth,h.framebufferHeight,{format:U,type:Re,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(u),d=null,s=await a.requestReferenceSpace(c),le.setContext(a),le.start(),i.isPresenting=!0,i.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function te(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=T.indexOf(n);r>=0&&(T[r]=null,w[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=T.indexOf(n);if(r===-1){for(let e=0;e<w.length;e++)if(e>=T.length){T.push(n),r=e;break}else if(T[e]===null){T[e]=n,r=e;break}if(r===-1)break}let i=w[r];i&&i.connect(n)}}let ne=new L,re=new L;function ie(e,t,n){ne.setFromMatrixPosition(t.matrixWorld),re.setFromMatrixPosition(n.matrixWorld);let r=ne.distanceTo(re),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ae(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(a===null)return;let t=e.near,n=e.far;y.texture!==null&&(y.depthNear>0&&(t=y.depthNear),y.depthFar>0&&(n=y.depthFar)),j.near=A.near=k.near=t,j.far=A.far=k.far=n,(N!==j.near||P!==j.far)&&(a.updateRenderState({depthNear:j.near,depthFar:j.far}),N=j.near,P=j.far),j.layers.mask=e.layers.mask|6,k.layers.mask=j.layers.mask&-5,A.layers.mask=j.layers.mask&-3;let r=e.parent,i=j.cameras;ae(j,r);for(let e=0;e<i.length;e++)ae(i[e],r);i.length===2?ie(j,k,A):j.projectionMatrix.copy(k.projectionMatrix),O===null&&e.isPerspectiveCamera&&(O={camera:e,fov:e.fov,zoom:e.zoom}),oe(e,j,r)};function oe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ft*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(m!==null||h!==null)return u},this.setFoveation=function(e){u=e,m!==null&&(m.fixedFoveation=e),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=e)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(e){return b[e]};let se=null;function ce(n,r){if(f=r.getViewerPose(d||s),g=r,f!==null){let n=f.views;h!==null&&(t.setRenderTargetFramebuffer(C,h.framebuffer),t.setRenderTarget(C));let r=!1;n.length!==j.cameras.length&&(j.cameras.length=0,r=!0);for(let i=0;i<n.length;i++){let a=n[i],o=null;if(h!==null)o=h.getViewport(a);else{let e=p.getViewSubImage(m,a);o=e.viewport,i===0&&(t.setRenderTargetTextures(C,e.colorTexture,e.depthStencilTexture),t.setRenderTarget(C))}let s=ee[i];s===void 0&&(s=new e,s.layers.enable(i),s.viewport=new l,ee[i]=s),s.matrix.fromArray(a.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.projectionMatrix.fromArray(a.projectionMatrix),s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),s.viewport.set(o.x,o.y,o.width,o.height),i===0&&(j.matrix.copy(s.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),r===!0&&j.cameras.push(s)}let o=a.enabledFeatures;if(o&&o.includes(`depth-sensing`)&&a.depthUsage==`gpu-optimized`&&_){p=i.getBinding();let e=p.getDepthInformation(n[0]);e&&e.isValid&&e.texture&&y.init(e,a.renderState)}if(o&&o.includes(`camera-access`)&&_){t.state.unbindTexture(),p=i.getBinding();for(let e=0;e<n.length;e++){let t=n[e].camera;if(t){let e=b[t];e||(e=new it,b[t]=e);let n=p.getCameraImage(t);e.sourceTexture=n}}}}for(let e=0;e<w.length;e++){let t=T[e],n=w[e];t!==null&&n!==void 0&&n.update(t,r,d||s)}se&&se(n,r),r.detectedPlanes&&i.dispatchEvent({type:`planesdetected`,data:r}),g=null}let le=new jt;le.setAnimationLoop(ce),this.setAnimationLoop=function(e){se=e},this.dispose=function(){}}},Vi=new _,Hi=new z;Hi.set(-1,0,0,0,1,0,0,0,1);function Ui(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,y(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Vi.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Hi),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Wi(e,t,n,i){let a={},o={},s=[],c=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(e,t){let n=t.program;i.uniformBlockBinding(e,n)}function u(e,n){let r=a[e.id];r===void 0&&(_(e),r=d(e),a[e.id]=r,e.addEventListener(`dispose`,y));let s=n.program;i.updateUBOMapping(e,s);let c=t.render.frame;o[e.id]!==c&&(p(e),o[e.id]=c)}function d(t){let n=f();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function f(){for(let e=0;e<c;e++)if(s.indexOf(e)===-1)return s.push(e),e;return P(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function p(t){let n=a[t.id],r=t.uniforms,i=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)m(t[n],e,n,i);else m(t,e,0,i)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(t,n,r,i){if(g(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=v(i);h(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else h(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function h(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function g(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function _(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=v(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function v(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?r(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):r(`WebGLRenderer: Unsupported uniform value type.`,e),t}function y(t){let n=t.target;n.removeEventListener(`dispose`,y);let r=s.indexOf(n.__bindingPointIndex);s.splice(r,1),e.deleteBuffer(a[n.id]),delete a[n.id],delete o[n.id]}function b(){for(let t in a)e.deleteBuffer(a[t]);s=[],a={},o={}}return{bind:l,update:u,dispose:b}}var Gi=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ki=null;function qi(){return Ki===null&&(Ki=new We(Gi,16,16,de,ke),Ki.name=`DFG_LUT`,Ki.minFilter=F,Ki.magFilter=F,Ki.wrapS=ye,Ki.wrapT=ye,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}var Ji=class{constructor(e={}){let{canvas:t=k(),context:n=null,depth:i=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:m=`default`,failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:g=!1,outputBufferType:v=Re}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);y=n.getContextAttributes().alpha}else y=c;let b=v,x=new Set([at,he,xe]),S=new Set([Re,Oe,a,_t,St,se]),C=new Uint32Array(4),w=new Int32Array(4),T=new L,D=null,O=null,A=[],ee=[],j=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,F=!1,I=null,te=null,re=null,ie=null;this._outputColorSpace=ct;let ae=0,oe=0,ce=null,le=-1,ue=null,R=new l,de=new l,fe=null,pe=new B(0),z=0,me=t.width,ge=t.height,_e=1,ve=null,ye=null,be=new l(0,0,me,ge),Se=new l(0,0,me,ge),Ce=!1,Te=new we,Ee=!1,De=!1,Ae=new _,je=new L,Me=new l,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function V(){return ce===null?_e:1}let H=n;function Fe(e,n){return t.getContext(e,n)}let Ie,Le,U,W,G,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,K,Ye,Xe,Ze,Qe,$e,et,tt;try{let e={alpha:!0,depth:i,stencil:o,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:h};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,it,!1),t.addEventListener(`webglcontextrestored`,ot,!1),t.addEventListener(`webglcontextcreationerror`,st,!1),H===null){let t=`webgl2`;if(H=Fe(t,e),H===null)throw Fe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}nt()}catch(e){throw t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),P(`WebGLRenderer: `+e.message),e}function nt(){Ie=new fn(H),Ie.init(),$e=new Ii(H,Ie),Le=new Bt(H,Ie,e,$e),U=new Pi(H,Ie),Le.reversedDepthBuffer&&g&&U.buffers.depth.setReversed(!0),te=H.createFramebuffer(),re=H.createFramebuffer(),ie=H.createFramebuffer(),W=new hn(H),G=new mi,ze=new Fi(H,Ie,U,G,Le,$e,W),Be=new dn(N),Ve=new Mt(H),et=new Rt(H,Ve),He=new pn(H,Ve,W,et),Ue=new _n(H,He,Ve,et,W),Xe=new gn(H,Le,ze),Je=new Vt(G),We=new pi(N,Be,Ie,Le,et,Je),Ge=new Ui(N,G),Ke=new vi,qe=new Ti(Ie),Ye=new Lt(N,Be,U,Ue,y,d),K=new Ni(N,Ue,Le),tt=new Wi(H,W,Le,U),Ze=new zt(H,Ie,W),Qe=new mn(H,Ie,W),W.programs=We.programs,N.capabilities=Le,N.extensions=Ie,N.properties=G,N.renderLists=Ke,N.shadowMap=K,N.state=U,N.info=W}b!==1009&&(j=new yn(b,t.width,t.height,u,i,o));let rt=new Bi(N,H);this.xr=rt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(e){e!==void 0&&(_e=e,this.setSize(me,ge,!1))},this.getSize=function(e){return e.set(me,ge)},this.setSize=function(e,n,i=!0){if(rt.isPresenting){r(`WebGLRenderer: Can't change size while VR device is presenting.`);return}me=e,ge=n,t.width=Math.floor(e*_e),t.height=Math.floor(n*_e),i===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),j!==null&&j.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(me*_e,ge*_e).floor()},this.setDrawingBufferSize=function(e,n,r){me=e,ge=n,_e=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(b===1009){P(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){r(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}j.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(R)},this.getViewport=function(e){return e.copy(be)},this.setViewport=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),U.viewport(R.copy(be).multiplyScalar(_e).round())},this.getScissor=function(e){return e.copy(Se)},this.setScissor=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),U.scissor(de.copy(Se).multiplyScalar(_e).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(e){U.setScissorTest(Ce=e)},this.setOpaqueSort=function(e){ve=e},this.setTransparentSort=function(e){ye=e},this.getClearColor=function(e){return e.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(ce!==null){let t=ce.texture.format;e=x.has(t)}if(e){let e=ce.texture.type,t=S.has(e),n=Ye.getClearColor(),r=Ye.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(C[0]=i,C[1]=a,C[2]=o,C[3]=r,H.clearBufferuiv(H.COLOR,0,C)):(w[0]=i,w[1]=a,w[2]=o,w[3]=r,H.clearBufferiv(H.COLOR,0,w))}else r|=H.COLOR_BUFFER_BIT}t&&(r|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&H.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),I=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),Ye.dispose(),Ke.dispose(),qe.dispose(),G.dispose(),Be.dispose(),Ue.dispose(),et.dispose(),tt.dispose(),We.dispose(),rt.dispose(),rt.removeEventListener(`sessionstart`,ht),rt.removeEventListener(`sessionend`,gt),vt.stop()};function it(e){e.preventDefault(),E(`WebGLRenderer: Context Lost.`),F=!0}function ot(){E(`WebGLRenderer: Context Restored.`),F=!1;let e=W.autoReset,t=K.enabled,n=K.autoUpdate,r=K.needsUpdate,i=K.type;nt(),W.autoReset=e,K.enabled=t,K.autoUpdate=n,K.needsUpdate=r,K.type=i}function st(e){P(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function lt(e){let t=e.target;t.removeEventListener(`dispose`,lt),ut(t)}function ut(e){dt(e),G.remove(e)}function dt(e){let t=G.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=kt(e,t,n,r,i);U.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=He.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;et.setup(i,r,s,n,c);let h,g=Ze;if(c!==null&&(h=Ve.get(c),g=Qe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(U.setLineWidth(r.wireframeLinewidth*V()),g.setMode(H.LINES)):g.setMode(H.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),U.setLineWidth(e*V()),i.isLineSegments?g.setMode(H.LINES):i.isLineLoop?g.setMode(H.LINE_LOOP):g.setMode(H.LINE_STRIP)}else i.isPoints?g.setMode(H.POINTS):i.isSprite&&g.setMode(H.TRIANGLES);if(i.isBatchedMesh){if(Ie.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ve.get(c).bytesPerElement:1,o=G.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(H,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ft(e,t,n,r){I!==null&&e.isNodeMaterial&&I.setObject(r,e),Ee===!0&&Je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,wt(e,t,r),e.side=0,e.needsUpdate=!0,wt(e,t,r),e.side=2):wt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),I!==null&&I.renderStart(e,t,n),O=qe.get(n),O.init(t),ee.push(O),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),O.setupLights(),I!==null&&I.updateLights(O.state.lightsArray),De=this.localClippingEnabled,Ee=Je.init(this.clippingPlanes,De),Ee===!0&&Je.setGlobalState(this.clippingPlanes,t),I!==null&&K.render(O.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ft(o,n,t,e),r.add(o)}else ft(i,n,t,e),r.add(i)}}),O=ee.pop(),I!==null&&I.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=G.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ie.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let pt=null;function mt(e){pt&&pt(e)}function ht(){vt.stop()}function gt(){vt.start()}let vt=new jt;vt.setAnimationLoop(mt),typeof self<`u`&&vt.setContext(self),this.setAnimationLoop=function(e){pt=e,rt.setAnimationLoop(e),e===null?vt.stop():vt.start()},rt.addEventListener(`sessionstart`,ht),rt.addEventListener(`sessionend`,gt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){P(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(F===!0)return;I!==null&&I.renderStart(e,t);let n=rt.enabled===!0&&rt.isPresenting===!0,r=j!==null&&(ce===null||n)&&j.begin(N,ce);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(t),t=rt.getCamera()),e.isScene===!0&&e.onBeforeRender(N,e,t,ce),O=qe.get(e,ee.length),O.init(t),O.state.textureUnits=ze.getTextureUnits(),ee.push(O),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Te.setFromProjectionMatrix(Ae,s,t.reversedDepth),De=this.localClippingEnabled,Ee=Je.init(this.clippingPlanes,De),D=Ke.get(e,A.length),D.init(),A.push(D),rt.enabled===!0&&rt.isPresenting===!0){let e=N.xr.getDepthSensingMesh();e!==null&&yt(e,t,-1/0,N.sortObjects)}yt(e,t,0,N.sortObjects),D.finish(),I!==null&&I.updateLights(O.state.lightsArray),N.sortObjects===!0&&D.sort(ve,ye),Pe=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Pe&&Ye.addToRenderList(D,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ee===!0&&Je.beginShadows();let i=O.state.shadowsArray;if(K.render(i,e,t),Ee===!0&&Je.endShadows(),(r&&j.hasRenderPass())===!1){let n=D.opaque,r=D.transmissive;if(O.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];bt(n,r,e,a)}Pe&&Ye.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];q(D,e,n,n.viewport)}}else r.length>0&&bt(n,r,e,t),Pe&&Ye.render(e),q(D,e,t)}ce!==null&&oe===0&&(ze.updateMultisampleRenderTarget(ce),ze.updateRenderTargetMipmap(ce)),r&&j.end(N),e.isScene===!0&&e.onAfterRender(N,e,t),et.resetDefaultState(),le=-1,ue=null,ee.pop(),ee.length>0?(O=ee[ee.length-1],ze.setTextureUnits(O.state.textureUnits),Ee===!0&&Je.setGlobalState(N.clippingPlanes,O.state.camera)):O=null,A.pop(),D=A.length>0?A[A.length-1]:null,I!==null&&I.renderEnd()};function yt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)O.pushLightProbeGrid(e);else if(e.isLight)O.pushLight(e),e.castShadow&&O.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Te)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let i=Ue.update(e),a=e.material;a.visible&&D.push(e,i,a,n,Me.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Te))){let i=Ue.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Me.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&D.push(e,i,c,n,Me.z,s,t)}}else a.visible&&D.push(e,i,a,n,Me.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)yt(i[e],t,n,r)}function q(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;O.setupLightsView(n),Ee===!0&&Je.setGlobalState(N.clippingPlanes,n),r&&U.viewport(R.copy(r)),i.length>0&&xt(i,t,n),a.length>0&&xt(a,t,n),o.length>0&&xt(o,t,n),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function bt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[r.id]===void 0){let e=Ie.has(`EXT_color_buffer_half_float`)||Ie.has(`EXT_color_buffer_float`);O.state.transmissionRenderTarget[r.id]=new M(1,1,{generateMipmaps:!0,type:e?ke:Re,minFilter:f,samples:Math.max(4,Le.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let i=O.state.transmissionRenderTarget[r.id],a=r.viewport||R;i.setSize(a.z*N.transmissionResolutionScale,a.w*N.transmissionResolutionScale);let s=N.getRenderTarget(),c=N.getActiveCubeFace(),l=N.getActiveMipmapLevel();N.setRenderTarget(i),N.getClearColor(pe),z=N.getClearAlpha(),z<1&&N.setClearColor(16777215,.5),N.clear(),Pe&&Ye.render(n);let u=N.toneMapping;N.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),O.setupLightsView(r),Ee===!0&&Je.setGlobalState(N.clippingPlanes,r),xt(e,n,r),ze.updateMultisampleRenderTarget(i),ze.updateRenderTargetMipmap(i),Ie.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ct(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(ze.updateMultisampleRenderTarget(i),ze.updateRenderTargetMipmap(i))}N.setRenderTarget(s,c,l),N.setClearColor(pe,z),d!==void 0&&(r.viewport=d),N.toneMapping=u}function xt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ct(o,t,n,s,l,c)}}function Ct(e,t,n,r,i,a){I!==null&&i.isNodeMaterial&&I.setObject(e,i),e.onBeforeRender(N,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(N,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=2):N.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(N,t,n,r,i,a)}function wt(e,t,n){t.isScene!==!0&&(t=Ne);let r=G.get(e),i=O.state.lights,a=O.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,O.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Be.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,lt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Et(e,s),d}else s.uniforms=We.getUniforms(e),I!==null&&e.isNodeMaterial&&I.build(e,n,s),e.onBeforeCompile(s,N),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Je.uniform),Et(e,s),r.needsLights=J(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=O.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Tt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Er.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Et(e,t){let n=G.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ot(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];T.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(T))return n}return null}function kt(e,t,n,r,i){t.isScene!==!0&&(t=Ne),ze.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=ce===null?N.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:ne.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Be.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(h=N.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=G.get(r),y=O.state.lights;if(Ee===!0&&(De===!0||e!==ue)){let t=e===ue&&r.id===le;Je.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Je.numPlanes||v.numIntersection!==Je.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=O.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=wt(r,t,i),I&&r.isNodeMaterial&&I.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(U.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==le&&(le=r.id,C=!0),v.needsLights){let e=Ot(O.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||ue!==e){U.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(H,`projectionMatrix`,e.projectionMatrix),T.setValue(H,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(H,je.setFromMatrixPosition(e.matrixWorld)),Le.logarithmicDepthBuffer&&T.setValue(H,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(H,`isOrthographic`,e.isOrthographicCamera===!0),ue!==e&&(ue=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(H,`sunShadowMap`,y.state.sunShadowMap,ze),y.state.directionalShadowMap.length>0&&T.setValue(H,`directionalShadowMap`,y.state.directionalShadowMap,ze),y.state.spotShadowMap.length>0&&T.setValue(H,`spotShadowMap`,y.state.spotShadowMap,ze),y.state.pointShadowMap.length>0&&T.setValue(H,`pointShadowMap`,y.state.pointShadowMap,ze)),i.isSkinnedMesh){T.setOptional(H,i,`bindMatrix`),T.setOptional(H,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(H,`boneTexture`,e.boneTexture,ze))}i.isBatchedMesh&&(T.setOptional(H,i,`batchingTexture`),T.setValue(H,`batchingTexture`,i._matricesTexture,ze),T.setOptional(H,i,`batchingIdTexture`),T.setValue(H,`batchingIdTexture`,i._indirectTexture,ze),T.setOptional(H,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(H,`batchingColorTexture`,i._colorsTexture,ze));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Xe.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(H,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=qi()),C){if(T.setValue(H,`toneMappingExposure`,N.toneMappingExposure),v.needsLights&&At(E,w),a&&r.fog===!0&&Ge.refreshFogUniforms(E,a),Ge.refreshMaterialUniforms(E,r,_e,ge,O.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Er.upload(H,Tt(v),E,ze)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Er.upload(H,Tt(v),E,ze),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(H,`center`,i.center),T.setValue(H,`modelViewMatrix`,i.modelViewMatrix),T.setValue(H,`normalMatrix`,i.normalMatrix),T.setValue(H,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];tt.update(n,x),tt.bind(n,x)}}return x}function At(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function J(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return ce},this.setRenderTargetTextures=function(e,t,n){let r=G.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),G.get(e.texture).__webglTexture=t,G.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=G.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){ce=e,ae=t,oe=n;let r=null,i=!1,a=!1;if(e){let o=G.get(e);if(o.__useDefaultFramebuffer!==void 0){U.bindFramebuffer(H.FRAMEBUFFER,o.__webglFramebuffer),R.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest,U.viewport(R),U.scissor(de),U.setScissorTest(fe),le=-1;return}if(o.__webglFramebuffer===void 0)ze.setupRenderTarget(e);else if(o.__hasExternalTextures)ze.rebindTextures(e,G.get(e.texture).__webglTexture,G.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&G.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);ze.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=G.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&ze.useMultisampledRTT(e)===!1?G.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,R.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest}else R.copy(be).multiplyScalar(_e).floor(),de.copy(Se).multiplyScalar(_e).floor(),fe=Ce;if(n!==0&&(r=te),U.bindFramebuffer(H.FRAMEBUFFER,r)&&U.drawBuffers(e,r),U.viewport(R),U.scissor(de),U.setScissorTest(fe),i){let r=G.get(e.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=G.get(e.textures[t]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=G.get(e.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,t.__webglTexture,n)}le=-1};function Y(e){let t=G.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Le.textureFormatReadable(e.format),t.__typeReadable=Le.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){P(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=G.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){U.bindFramebuffer(H.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+s);let u=Y(o);if(u.__formatReadable===!1){P(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){P(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&H.readPixels(t,n,r,i,$e.convert(c),$e.convert(l),a)}finally{let e=ce===null?null:G.get(ce).__webglFramebuffer;U.bindFramebuffer(H.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=G.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){U.bindFramebuffer(H.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+s);let d=Y(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,f),H.bufferData(H.PIXEL_PACK_BUFFER,a.byteLength,H.STREAM_READ),H.readPixels(t,n,r,i,$e.convert(l),$e.convert(u),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let p=ce===null?null:G.get(ce).__webglFramebuffer;U.bindFramebuffer(H.FRAMEBUFFER,p);let m=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Dt(H,m,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,f),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,a),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(f),H.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;ze.setTexture2D(e,0),H.copyTexSubImage2D(H.TEXTURE_2D,n,0,0,o,s,i,a),U.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=$e.convert(t.format),_=$e.convert(t.type),v;t.isData3DTexture?(ze.setTexture3D(t,0),v=H.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(ze.setTexture2DArray(t,0),v=H.TEXTURE_2D_ARRAY):(ze.setTexture2D(t,0),v=H.TEXTURE_2D),U.activeTexture(H.TEXTURE0),U.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,t.flipY),U.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),U.pixelStorei(H.UNPACK_ALIGNMENT,t.unpackAlignment);let y=U.getParameter(H.UNPACK_ROW_LENGTH),b=U.getParameter(H.UNPACK_IMAGE_HEIGHT),x=U.getParameter(H.UNPACK_SKIP_PIXELS),S=U.getParameter(H.UNPACK_SKIP_ROWS),C=U.getParameter(H.UNPACK_SKIP_IMAGES);U.pixelStorei(H.UNPACK_ROW_LENGTH,h.width),U.pixelStorei(H.UNPACK_IMAGE_HEIGHT,h.height),U.pixelStorei(H.UNPACK_SKIP_PIXELS,l),U.pixelStorei(H.UNPACK_SKIP_ROWS,u),U.pixelStorei(H.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=G.get(e),r=G.get(t),h=G.get(n.__renderTarget),g=G.get(r.__renderTarget);U.bindFramebuffer(H.READ_FRAMEBUFFER,h.__webglFramebuffer),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,G.get(e).__webglTexture,i,d+n),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,G.get(t).__webglTexture,a,m+n)),H.blitFramebuffer(l,u,o,s,f,p,o,s,H.DEPTH_BUFFER_BIT,H.NEAREST);U.bindFramebuffer(H.READ_FRAMEBUFFER,null),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||G.has(e)){let n=G.get(e),r=G.get(t);U.bindFramebuffer(H.READ_FRAMEBUFFER,re),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,ie);for(let e=0;e<c;e++)w?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,n.__webglTexture,i),T?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,r.__webglTexture,a),i===0?T?H.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):H.copyTexSubImage2D(v,a,f,p,l,u,o,s):H.blitFramebuffer(l,u,o,s,f,p,o,s,H.COLOR_BUFFER_BIT,H.NEAREST);U.bindFramebuffer(H.READ_FRAMEBUFFER,null),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?H.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?H.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):H.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):H.texSubImage2D(H.TEXTURE_2D,a,f,p,o,s,g,_,h);U.pixelStorei(H.UNPACK_ROW_LENGTH,y),U.pixelStorei(H.UNPACK_IMAGE_HEIGHT,b),U.pixelStorei(H.UNPACK_SKIP_PIXELS,x),U.pixelStorei(H.UNPACK_SKIP_ROWS,S),U.pixelStorei(H.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&H.generateMipmap(v),U.unbindTexture()},this.initRenderTarget=function(e){G.get(e).__webglFramebuffer===void 0&&ze.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?ze.setTextureCube(e,0):e.isData3DTexture?ze.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?ze.setTexture2DArray(e,0):ze.setTexture2D(e,0),U.unbindTexture()},this.resetState=function(){ae=0,oe=0,ce=null,U.reset(),et.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return s}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(e),t.unpackColorSpace=ne._getUnpackColorSpace()}},X={uTime:{value:0},uNight:{value:0},uWind:{value:new q(1,.35)},uWindStrength:{value:1},uCameraYaw:{value:0},uCameraPosition:{value:new L},uSunDirection:{value:new L(.4,.8,.45).normalize()},uSunColor:{value:new B(1,.9,.75)},uFogColor:{value:new B(.6,.65,.75)}},Yi=Object.freeze({up:[`KeyW`,`ArrowUp`],down:[`KeyS`,`ArrowDown`],left:[`KeyA`,`ArrowLeft`],right:[`KeyD`,`ArrowRight`],run:[`ShiftLeft`,`ShiftRight`],confirm:[`Space`,`Enter`,`KeyF`],cancel:[`Escape`,`Backspace`],camLeft:[`KeyQ`],camRight:[`KeyE`],zoomIn:[`KeyZ`,`Equal`],zoomOut:[`KeyX`,`Minus`],debug:[`Backquote`,`F1`],time:[`KeyT`],photo:[`KeyP`],help:[`KeyH`],weather:[`KeyR`],music:[`KeyM`],map:[`KeyN`,`Tab`]}),Xi=Object.freeze({confirm:[`GamepadA`],cancel:[`GamepadB`],camLeft:[`GamepadLB`],camRight:[`GamepadRB`],run:[`GamepadRT`],up:[`GamepadDpadUp`],down:[`GamepadDpadDown`],left:[`GamepadDpadLeft`],right:[`GamepadDpadRight`],zoomIn:[`GamepadY`],zoomOut:[`GamepadX`],help:[`GamepadStart`],map:[`GamepadBack`],photo:[`GamepadRS`]}),Zi=Object.freeze([`GamepadA`,`GamepadB`,`GamepadX`,`GamepadY`,`GamepadLB`,`GamepadRB`,`GamepadLT`,`GamepadRT`,`GamepadBack`,`GamepadStart`,`GamepadLS`,`GamepadRS`,`GamepadDpadUp`,`GamepadDpadDown`,`GamepadDpadLeft`,`GamepadDpadRight`,`GamepadHome`]),Qi=e=>Object.fromEntries(Object.entries(e).map(([e,t])=>[e,[...t]]));function $i(e){if(!e||e.nodeType!==1)return!1;if(e.isContentEditable)return!0;let t=e.tagName;if(t===`TEXTAREA`||t===`SELECT`)return!0;if(t===`INPUT`){let t=(e.type||`text`).toLowerCase();return![`button`,`checkbox`,`radio`,`submit`,`reset`,`image`,`color`,`file`,`range`].includes(t)}return!1}var ea=class{constructor(e=window,t={}){this.target=e,this.enabled=!0,this.bindings=Qi(Yi),this.padBindings=Qi(Xi),this.deadzone=t.deadzone??.2,this.triggerThreshold=.35,this.wheelIgnoreSelector=t.wheelIgnoreSelector??`.lil-gui, input, textarea, select, [contenteditable], [data-input-ignore]`,this.wheelDelta=0,this.pointer={x:0,y:0,down:!1,buttons:0,inside:!1},this.gamepad={connected:!1,index:-1,id:``,leftStick:{x:0,y:0},rightStick:{x:0,y:0},leftTrigger:0,rightTrigger:0},this._down=new Set,this._pressed=new Set,this._released=new Set,this._padDown=new Set,this._padKnown=0,this._move={x:0,y:0},this._look={x:0,y:0},this._boundCodes=new Set,this._boundCacheKey=``,this.lastDevice=`keyboard`,this._mouseTarget=null,this._mouseDown=new Set,this._onKeyDown=this._onKeyDown.bind(this),this._onKeyUp=this._onKeyUp.bind(this),this._onBlur=this._onBlur.bind(this),this._onVisibility=this._onVisibility.bind(this),this._onWheel=this._onWheel.bind(this),this._onPointerMove=this._onPointerMove.bind(this),this._onPointerDown=this._onPointerDown.bind(this),this._onPointerUp=this._onPointerUp.bind(this),this._onPointerLeave=this._onPointerLeave.bind(this),this._onPadConnected=this._onPadConnected.bind(this),this._onPadDisconnected=this._onPadDisconnected.bind(this);let n=e;n.addEventListener(`keydown`,this._onKeyDown),n.addEventListener(`keyup`,this._onKeyUp),n.addEventListener(`wheel`,this._onWheel,{passive:!0}),n.addEventListener(`pointermove`,this._onPointerMove,{passive:!0}),n.addEventListener(`pointerdown`,this._onPointerDown,{passive:!0}),n.addEventListener(`pointerup`,this._onPointerUp,{passive:!0}),n.addEventListener(`pointercancel`,this._onPointerUp,{passive:!0}),typeof window<`u`&&(window.addEventListener(`blur`,this._onBlur),window.addEventListener(`gamepadconnected`,this._onPadConnected),window.addEventListener(`gamepaddisconnected`,this._onPadDisconnected),document.addEventListener(`visibilitychange`,this._onVisibility),document.documentElement.addEventListener(`pointerleave`,this._onPointerLeave))}isDown(e){return this.enabled&&(this._down.has(e)||this._padDown.has(e))}wasPressed(e){return this.enabled&&this._pressed.has(e)}wasReleased(e){return this.enabled&&this._released.has(e)}anyPressed(){return this.enabled&&this._pressed.size>0}action(e){return this.enabled?this._anyOf(this.bindings[e],this._down,this._padDown)||this._anyOf(this.padBindings[e],this._padDown,null):!1}actionPressed(e){return this.enabled?this._anyOf(this.bindings[e],this._pressed,null)||this._anyOf(this.padBindings[e],this._pressed,null):!1}actionReleased(e){return this.enabled?this._anyOf(this.bindings[e],this._released,null)||this._anyOf(this.padBindings[e],this._released,null):!1}consumeAction(e){let t=this.actionPressed(e);if(t){let t=this.bindings[e],n=this.padBindings[e];if(t)for(let e=0;e<t.length;e++)this._pressed.delete(t[e]);if(n)for(let e=0;e<n.length;e++)this._pressed.delete(n[e])}return t}_anyOf(e,t,n){if(!e)return!1;for(let r=0;r<e.length;r++){let i=e[r];if(t.has(i)||n!==null&&n.has(i))return!0}return!1}getMoveVector(e=this._move){if(e.x=0,e.y=0,!this.enabled)return e;let t=+!!this.action(`right`)-!!this.action(`left`),n=+!!this.action(`up`)-!!this.action(`down`);t!==0&&n!==0&&(t*=Math.SQRT1_2,n*=Math.SQRT1_2);let r=t+this.gamepad.leftStick.x,i=n+this.gamepad.leftStick.y,a=Math.hypot(r,i);return a>1&&(r/=a,i/=a),e.x=r,e.y=i,e}getLookVector(e=this._look){return e.x=this.enabled?this.gamepad.rightStick.x:0,e.y=this.enabled?this.gamepad.rightStick.y:0,e}addBindings(e={},t={}){for(let[t,n]of Object.entries(e??{}))this.bindings[t]=[...n??[]];for(let[e,n]of Object.entries(t??{}))this.padBindings[e]=[...n??[]];this._boundCacheKey=``}enableMouseButtons(e){e&&typeof window<`u`&&(this._mouseTarget&&this._disableMouseButtons(),this._mouseTarget=e,this._onMouseDown??=this._mouseDownEdge.bind(this),this._onMouseMove??=this._mouseChord.bind(this),this._onMouseUp??=this._mouseUpEdge.bind(this),this._onContextMenu??=e=>e.preventDefault(),this._onAuxDown??=e=>{e.button===1&&e.preventDefault()},window.addEventListener(`pointerdown`,this._onMouseDown,{capture:!0,passive:!0}),window.addEventListener(`pointermove`,this._onMouseMove,{capture:!0,passive:!0}),window.addEventListener(`pointerup`,this._onMouseUp,{capture:!0,passive:!0}),window.addEventListener(`pointercancel`,this._onMouseUp,{capture:!0,passive:!0}),e.addEventListener(`contextmenu`,this._onContextMenu),e.addEventListener(`mousedown`,this._onAuxDown))}_disableMouseButtons(){let e=this._mouseTarget;if(e){window.removeEventListener(`pointerdown`,this._onMouseDown,{capture:!0}),window.removeEventListener(`pointermove`,this._onMouseMove,{capture:!0}),window.removeEventListener(`pointerup`,this._onMouseUp,{capture:!0}),window.removeEventListener(`pointercancel`,this._onMouseUp,{capture:!0}),e.removeEventListener(`contextmenu`,this._onContextMenu),e.removeEventListener(`mousedown`,this._onAuxDown);for(let e of this._mouseDown)this._releaseCode(e);this._mouseDown.clear(),this._mouseTarget=null}}_mouseDownEdge(e){e.target===this._mouseTarget&&this._pressMouse(e.button)}_mouseChord(e){let t=e.button;if(!(t>=0&&t<=2))return;let n=t===1?4:t===2?2:1;e.buttons&n?e.target===this._mouseTarget&&this._pressMouse(t):this._releaseCode(`Mouse${t}`)}_mouseUpEdge(e){let t=e.button;if(t>=0&&t<=2&&this._releaseCode(`Mouse${t}`),this._mouseDown.size&&typeof e.buttons==`number`)for(let t of this._mouseDown){let n=+t.charAt(5),r=n===1?4:n===2?2:1;e.buttons&r||this._releaseCode(t)}}_pressMouse(e){if(!(e>=0&&e<=2))return;let t=`Mouse${e}`;this._down.has(t)||(this._down.add(t),this._mouseDown.add(t),this._pressed.add(t),this.lastDevice=`mouse`)}_releaseCode(e){this._mouseDown.delete(e),this._down.delete(e)&&this._released.add(e)}update(){if(this._padKnown<=0&&!this.gamepad.connected)return;let e=typeof navigator<`u`?navigator:null;if(!e||typeof e.getGamepads!=`function`)return;let t;try{t=e.getGamepads()}catch{return}let n=null;for(let e=0;e<t.length;e++){let r=t[e];if(r&&r.connected){n=r;break}}let r=this.gamepad;if(!n){r.connected&&this._releasePad(),r.connected=!1,r.index=-1;return}r.connected=!0,r.index=n.index,r.id=n.id;let i=n.mapping===`standard`,a=n.axes;this._stick(r.leftStick,a[0]??0,a[1]??0),this._stick(r.rightStick,a[2]??0,a[3]??0);let o=n.buttons,s=Math.min(o.length,Zi.length);for(let e=0;e<s;e++){let t=o[e],n;if(e===6||e===7){let i=t.value??+!!t.pressed;e===6?r.leftTrigger=i:r.rightTrigger=i,n=i>this.triggerThreshold||t.pressed&&i===0}else n=t.pressed;!i&&e>11&&(n=!1),this._setPad(Zi[e],n)}}endFrame(){this._pressed.size&&this._pressed.clear(),this._released.size&&this._released.clear(),this.wheelDelta=0}reset(){for(let e of this._down)this._released.add(e);this._down.clear(),this._mouseDown.clear(),this._releasePad(),this.pointer.down=!1,this.pointer.buttons=0,this.wheelDelta=0}dispose(){let e=this.target;e.removeEventListener(`keydown`,this._onKeyDown),e.removeEventListener(`keyup`,this._onKeyUp),e.removeEventListener(`wheel`,this._onWheel),e.removeEventListener(`pointermove`,this._onPointerMove),e.removeEventListener(`pointerdown`,this._onPointerDown),e.removeEventListener(`pointerup`,this._onPointerUp),e.removeEventListener(`pointercancel`,this._onPointerUp),typeof window<`u`&&(window.removeEventListener(`blur`,this._onBlur),window.removeEventListener(`gamepadconnected`,this._onPadConnected),window.removeEventListener(`gamepaddisconnected`,this._onPadDisconnected),document.removeEventListener(`visibilitychange`,this._onVisibility),document.documentElement.removeEventListener(`pointerleave`,this._onPointerLeave),this._disableMouseButtons()),this._down.clear(),this._mouseDown.clear(),this._pressed.clear(),this._released.clear(),this._padDown.clear()}_isBound(e){let t=``;for(let e in this.bindings)t+=e+`:`+this.bindings[e].join(`,`)+`;`;if(t!==this._boundCacheKey){this._boundCacheKey=t,this._boundCodes.clear();for(let e in this.bindings)for(let t of this.bindings[e])this._boundCodes.add(t)}return this._boundCodes.has(e)}_onKeyDown(e){let t=e.code;t&&($i(e.target)||$i(typeof document<`u`?document.activeElement:null)||(!e.ctrlKey&&!e.metaKey&&!e.altKey&&this._isBound(t)&&e.preventDefault(),this._down.has(t)||(this._down.add(t),e.repeat||(this._pressed.add(t),this.lastDevice=`keyboard`))))}_onKeyUp(e){let t=e.code;t&&(this._down.has(t)&&(this._down.delete(t),this._released.add(t)),!$i(e.target)&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&this._isBound(t)&&e.preventDefault())}_onBlur(){this.reset()}_onVisibility(){document.visibilityState===`hidden`&&this.reset()}_onWheel(e){if(!this.enabled)return;let t=e.target;if(t&&t.closest&&this.wheelIgnoreSelector&&t.closest(this.wheelIgnoreSelector))return;let n=e.deltaY;e.deltaMode===1?n*=16:e.deltaMode===2&&(n*=400),this.wheelDelta+=n}_onPointerMove(e){this.pointer.x=e.clientX,this.pointer.y=e.clientY,this.pointer.inside=!0}_onPointerDown(e){this.pointer.x=e.clientX,this.pointer.y=e.clientY,this.pointer.down=!0,this.pointer.buttons=e.buttons,this.pointer.inside=!0}_onPointerUp(e){this.pointer.x=e.clientX,this.pointer.y=e.clientY,this.pointer.buttons=e.buttons??0,this.pointer.down=this.pointer.buttons!==0}_onPointerLeave(){this.pointer.inside=!1}_onPadConnected(){this._padKnown++}_onPadDisconnected(){this._padKnown=Math.max(0,this._padKnown-1)}_stick(e,t,n){let r=Math.hypot(t,n),i=this.deadzone;if(r<=i){e.x=0,e.y=0;return}let a=Math.min(1,(r-i)/(1-i))/r;e.x=t*a,e.y=-n*a}_setPad(e,t){t!==this._padDown.has(e)&&(t?(this._padDown.add(e),this._pressed.add(e),this.lastDevice=`gamepad`):(this._padDown.delete(e),this._released.add(e)))}_releasePad(){for(let e of this._padDown)this._released.add(e);this._padDown.clear();let e=this.gamepad;e.leftStick.x=e.leftStick.y=e.rightStick.x=e.rightStick.y=0,e.leftTrigger=e.rightTrigger=0}},ta=1/20,na=class{constructor(t={}){this.opts=t,this.container=t.container??document.body,this.maxPixelRatio=t.maxPixelRatio??1.5,this._renderScale=K(t.renderScale??1,.25,1);let n=new Ji({antialias:!1,powerPreference:`high-performance`,stencil:!1,preserveDrawingBuffer:!!t.preserveDrawingBuffer});n.shadowMap.enabled=!0;let r=t.shadowMapType??1;r===2&&(r=1),n.shadowMap.type=r,n.toneMapping=4,n.toneMappingExposure=1,n.outputColorSpace=ct,n.setClearColor(t.clearColor??724506,1),this.renderer=n;let i=n.domElement;i.classList.add(`lumina-canvas`),i.style.display=`block`,i.style.width=`100%`,i.style.height=`100%`,i.style.touchAction=`none`,i.style.outline=`none`,this._isFullWindow()&&(i.style.position=`fixed`,i.style.left=`0`,i.style.top=`0`),i.tabIndex=-1,this.container.appendChild(i),this.scene=new Ee,this.camera=new e(28,1,.5,400),this.camera.position.set(0,12.7,20.4),this.camera.lookAt(0,0,0),this.input=new ea(t.inputTarget??window),this.events=new xt,this.time={elapsed:0,delta:0,frame:0,timeScale:1,realDelta:0,realElapsed:0,fps:60},this._systems=[],this._seq=0,this._renderFn=null,this._failed=new WeakMap,this._running=!1,this._manual=!!(t.manualStep??(ra(`fixedstep`)&&(ra(`autostart`)||ra(`debug`)))),this._startedOnce=!1,this._lastNow=-1,this._disposed=!1,this._width=1,this._height=1,this._pixelRatio=1,this.resizeThrottleMs=0,this._lastResizeAt=-1/0,this._resizeTimer=0,this._tick=this._tick.bind(this),this._onWindowResize=()=>this._resize(),this._onContextLost=e=>{e.preventDefault(),console.warn(`[Engine] WebGL context lost`),this.events.emit(`contextlost`)},this._onContextRestored=()=>{console.warn(`[Engine] WebGL context restored`),this.events.emit(`contextrestored`)},i.addEventListener(`webglcontextlost`,this._onContextLost),i.addEventListener(`webglcontextrestored`,this._onContextRestored),this._resizeObserver=null,typeof ResizeObserver<`u`&&!this._isFullWindow()&&(this._resizeObserver=new ResizeObserver(()=>this._resize()),this._resizeObserver.observe(this.container)),window.addEventListener(`resize`,this._onWindowResize),this._resize(!0);let a=t.exposeGlobal;if(a===void 0)try{let e=new URLSearchParams(window.location.search);a=e.has(`debug`)||e.has(`autostart`)}catch{a=!1}a&&(window.__engine=this)}get width(){return this._width}get height(){return this._height}get pixelRatio(){return this._pixelRatio}get aspect(){return this._width/Math.max(1,this._height)}get drawingBufferSize(){return this._dbs??=new q,this.renderer.getDrawingBufferSize(this._dbs)}get canvas(){return this.renderer.domElement}get renderScale(){return this._renderScale}set renderScale(e){let t=K(Number(e)||1,.25,1);t!==this._renderScale&&(this._renderScale=t,this._resize(!0))}_isFullWindow(){return this.container===document.body||this.container===document.documentElement}_measure(){let e,t;if(this._isFullWindow())e=window.innerWidth,t=window.innerHeight;else if(e=this.container.clientWidth,t=this.container.clientHeight,!e||!t){let n=this.container.getBoundingClientRect();e=n.width||window.innerWidth,t=n.height||window.innerHeight}return[Math.max(1,Math.floor(e)),Math.max(1,Math.floor(t))]}_resize(e=!1){if(this._disposed)return;if(!e&&this.resizeThrottleMs>0){let e=(this._lastResizeAt??-1/0)+this.resizeThrottleMs-performance.now();if(e>0){this._resizeTimer||=setTimeout(()=>{this._resizeTimer=0,this._resize()},e);return}}let[t,n]=this._measure(),r=typeof window<`u`&&window.devicePixelRatio||1,i=Math.min(r,this.maxPixelRatio)*this._renderScale;(e||t!==this._width||n!==this._height||i!==this._pixelRatio)&&(this._lastResizeAt=performance.now(),this._width=t,this._height=n,this._pixelRatio=i,this.renderer.getPixelRatio()!==i&&this.renderer.setPixelRatio(i),this.renderer.setSize(t,n,!1),this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.events.emit(`resize`,{width:t,height:n,pixelRatio:i}))}resize(){this._resize(!0)}addSystem(e,t=0){if(!e||typeof e!=`object`&&typeof e!=`function`)throw TypeError(`Engine.addSystem: system must be an object`);let n=this._systems.find(t=>t.system===e),r=n?{...n,order:t}:{system:e,order:t,seq:this._seq++,name:e.name||e.constructor?.name||`system`},i=this._systems.filter(t=>t.system!==e);return i.push(r),i.sort((e,t)=>e.order-t.order||e.seq-t.seq),this._systems=i,e}removeSystem(e){let t=this._systems.filter(t=>t.system!==e),n=t.length!==this._systems.length;return this._systems=t,n}get systems(){return this._systems.map(e=>e.system)}setRenderFn(e){this._renderFn=typeof e==`function`?e:null}start(){return this._running||this._disposed?this:(this._running=!0,this._lastNow=-1,this._startedOnce||(this._startedOnce=!0,this._resize(!0)),this._manual||this.renderer.setAnimationLoop(this._tick),this.events.emit(`start`),this)}stop(){return this._running?(this._running=!1,this.renderer.setAnimationLoop(null),this.events.emit(`stop`),this):this}get running(){return this._running}get manualStep(){return this._manual}set manualStep(e){let t=!!e;t===this._manual||this._disposed||(this._manual=t,this._running&&(this._lastNow=-1,this.renderer.setAnimationLoop(t?null:this._tick)))}step(e=1/60,{render:t=!0}={}){this._disposed||this._frame(e,t)}redraw(){this._disposed||this._draw(0,this.time.elapsed)}_tick(e){this._lastNow<0&&(this._lastNow=e);let t=(e-this._lastNow)/1e3;this._lastNow=e,this._frame(t)}_frame(e,t=!0){let n=this.time,r=e>0&&Number.isFinite(e)?e:0,i=(r>ta?ta:r)*n.timeScale;n.realDelta=r,n.realElapsed+=r,n.delta=i,n.elapsed+=i,n.frame++,r>0&&(n.fps+=(1/r-n.fps)*.05);let a=n.elapsed;this.input.update();let o=this._systems;for(let e=0;e<o.length;e++){let t=o[e].system;if(typeof t.update==`function`)try{t.update(i,a,this)}catch(t){this._report(o[e].system,`update`,`system "${o[e].name}"`,t)}}this._emitSafe(`update`,i,a);for(let e=0;e<o.length;e++){let t=o[e].system;if(typeof t.lateUpdate==`function`)try{t.lateUpdate(i,a,this)}catch(t){this._report(o[e].system,`lateUpdate`,`system "${o[e].name}"`,t)}}this._emitSafe(`lateUpdate`,i,a),!this._disposed&&(X.uTime.value=a,t&&this._draw(i,a),this.input.endFrame())}_draw(e,t){this._emitSafe(`beforeRender`,e,t);try{this._renderFn?this._renderFn(e,t):this.renderer.render(this.scene,this.camera)}catch(e){this._report(this._renderFn??this.renderer,`render`,`render function`,e)}this._emitSafe(`afterRender`,e,t)}_emitSafe(e,t,n){let r=this.events.listeners(e);for(let i=0;i<r.length;i++){let a=r[i];try{a.call(this.events,t,n)}catch(t){this._report(a,e,`'${e}' listener ${a.name?`"${a.name}"`:`(anonymous)`}`,t)}}}_report(e,t,n,r){let i=this._failed.get(e);if(i||(i=new Set,this._failed.set(e,i)),!i.has(t)){i.add(t),console.error(`[Engine] ${n} threw in ${t} (further errors from it are suppressed):`,r);try{this.events.emit(`error`,{label:n,phase:t,error:r})}catch{}}}dispose({disposeScene:e=!0}={}){if(this._disposed)return;this.stop();try{this.events.emit(`dispose`)}catch(e){console.error(`[Engine] 'dispose' listener threw:`,e)}this._disposed=!0;let t=this._systems;for(let e=t.length-1;e>=0;e--){let n=t[e].system;if(typeof n.dispose==`function`)try{n.dispose()}catch(n){console.error(`[Engine] system "${t[e].name}" threw in dispose:`,n)}}this._systems=[],this.input.dispose(),this._resizeObserver?.disconnect(),this._resizeObserver=null,clearTimeout(this._resizeTimer),window.removeEventListener(`resize`,this._onWindowResize),e&&ia(this.scene),this.scene.clear();let n=this.renderer.domElement;n.removeEventListener(`webglcontextlost`,this._onContextLost),n.removeEventListener(`webglcontextrestored`,this._onContextRestored),this.renderer.renderLists.dispose(),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}n.remove(),this.events.clear(),typeof window<`u`&&window.__engine===this&&delete window.__engine}};function ra(e){try{let t=new URLSearchParams(window.location.search);return t.has(e)&&t.get(e)!==`0`}catch{return!1}}function ia(e){let t=new Set,n=e=>{e&&!t.has(e)&&typeof e.dispose==`function`&&(t.add(e),e.dispose())},r=e=>{if(e&&!t.has(e)){for(let t of Object.keys(e)){let r=e[t];r&&r.isTexture&&n(r)}if(e.uniforms)for(let t of Object.values(e.uniforms)){let e=t?.value;e&&e.isTexture&&n(e)}n(e)}};e.traverse(e=>{e.geometry&&n(e.geometry);let t=e.material;Array.isArray(t)?t.forEach(r):r(t),e.customDepthMaterial&&r(e.customDepthMaterial),e.customDistanceMaterial&&r(e.customDistanceMaterial),e.isLight&&e.shadow?.map&&e.shadow.dispose(),e.isInstancedMesh&&e.dispose?.()});let i=e.background;i&&i.isTexture&&n(i);let a=e.environment;a&&a.isTexture&&n(a)}var aa=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},oa=new te(-1,1,1,-1,0,1),sa=new class extends T{constructor(){super(),this.setAttribute(`position`,new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new Ze([0,2,0,0,2,0],2))}},ca=class{constructor(e){this._mesh=new R(sa,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,oa)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},la={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},ua={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new B(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},da=class e extends aa{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new q(256,256):new q(e.x,e.y),this.clearColor=new B(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new M(i,a,{type:ke,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new M(i,a,{type:ke,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new M(i,a,{type:ke,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=ua;this.highPassUniforms=Be.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new tt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new q(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Be.clone(la.uniforms),this.blendMaterial=new tt({uniforms:this.copyUniforms,vertexShader:la.vertexShader,fragmentShader:la.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new B,this._oldClearAlpha=1,this._basic=new me,this._fsQuad=new ca(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new q(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new tt({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new q(.5,.5)},direction:{value:new q(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new tt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};da.BlurDirectionX=new q(1,0),da.BlurDirectionY=new q(0,1);var fa={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},pa=class extends aa{constructor(){super(),this.isOutputPass=!0,this.uniforms=Be.clone(fa.uniforms),this.material=new h({name:fa.name,uniforms:this.uniforms,vertexShader:fa.vertexShader,fragmentShader:fa.fragmentShader}),this._fsQuad=new ca(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ne.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},ma=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,ha=`
float pfxLuma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }

// Scrub NaN / Inf / negative values coming from the scene (one bad pixel would otherwise poison
// every blur kernel that touches it). Tests the exponent bits instead of isnan(), which D3D's
// fast-math compiler is allowed to optimise away.
bool pfxNonFinite(float x) { return (floatBitsToUint(x) & 0x7f800000u) == 0x7f800000u; }
vec3 pfxSafe(vec3 c) {
  bool bad = pfxNonFinite(c.r) || pfxNonFinite(c.g) || pfxNonFinite(c.b);
  return bad ? vec3(0.0) : clamp(c, vec3(0.0), vec3(6.0e4));
}

// 8×8 Bayer ordered-dither threshold in [0, 1) (recursive closed form).
float pfxBayer2(vec2 a) { a = floor(a); return fract(dot(a, vec2(0.5, a.y * 0.75))); }
float pfxBayer4(vec2 a) { return pfxBayer2(0.5 * a) * 0.25 + pfxBayer2(a); }
float pfxBayer8(vec2 a) { return pfxBayer4(0.5 * a) * 0.25 + pfxBayer2(a); }

// Interleaved gradient noise (Jimenez 2014): cheap, well distributed, in [0, 1).
float pfxIGN(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }

// Integer-ish hash -> [0, 1) (Dave Hoskins, "hash without sine").
float pfxHash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
`,ga={name:`LuminaCopyShader`,uniforms:{tDiffuse:{value:null}},vertexShader:ma,fragmentShader:`
    ${ha}
    uniform sampler2D tDiffuse;
    void main() {
      gl_FragColor = vec4(pfxSafe(texelFetch(tDiffuse, ivec2(gl_FragCoord.xy), 0).rgb), 1.0);
    }
  `};function _a(){return{tDepth:{value:null},uCamNear:{value:.5},uCamFar:{value:400},uFocusDistance:{value:24},uFocusRange:{value:5},uNearScale:{value:1.4},uFarScale:{value:1},uMaxBlurPx:{value:10},uTilt:{value:new L(.35,.52,.28)},uTiltFeather:{value:.3},uOrtho:{value:0}}}var va=`
#include <packing>
uniform sampler2D tDepth;
uniform float uCamNear;
uniform float uCamFar;
uniform float uFocusDistance;
uniform float uFocusRange;
uniform float uNearScale;
uniform float uFarScale;
uniform float uMaxBlurPx;
uniform vec3 uTilt; // x = strength, y = centre (uv.y), z = band width (uv)
uniform float uTiltFeather; // uv distance over which the tilt term ramps in
uniform float uOrtho;       // 1 for orthographic cameras

float dofViewDepth(float rawDepth) {
  return uOrtho > 0.5 ? -orthographicDepthToViewZ(rawDepth, uCamNear, uCamFar)
                      : -perspectiveDepthToViewZ(rawDepth, uCamNear, uCamFar);
}

float dofCoC(float rawDepth, float uvY) {
  float z = dofViewDepth(rawDepth);
  float dz = z - uFocusDistance;
  float band = 0.5 * uFocusRange;
  float t = clamp((abs(dz) - band) / max(1.5 * uFocusRange, 1e-3), 0.0, 1.0);
  t = t * t * (3.0 - 2.0 * t);
  float coc = dz < 0.0 ? -uNearScale * t : uFarScale * t;
  // screen-space tilt-shift term
  float ty = abs(uvY - uTilt.y) - 0.5 * uTilt.z;
  float tilt = uTilt.x * smoothstep(0.0, max(uTiltFeather, 1e-3), ty);
  if (tilt > abs(coc)) {
    float s = abs(dz) > band ? sign(dz) : (uvY < uTilt.y ? -1.0 : 1.0);
    coc = s * tilt;
  }
  return coc * uMaxBlurPx;
}
`,ya={name:`LuminaDofPrefilter`,glslVersion:vt,uniforms:{tColor:{value:null},uFullSize:{value:new q(1,1)},uRatio:{value:new q(2,2)},uScale:{value:.5},uBokehThreshold:{value:1.5},uSprites:{value:1}},vertexShader:ma,fragmentShader:`
    ${va}
    ${ha}
    uniform sampler2D tColor;
    uniform vec2 uFullSize;
    uniform vec2 uRatio;
    uniform float uScale;
    uniform float uBokehThreshold;
    uniform float uSprites;
    varying vec2 vUv;
    layout(location = 0) out vec4 outColorCoc;
    layout(location = 1) out vec4 outHighlight;

    void main() {
      vec2 fc = gl_FragCoord.xy * uRatio;           // centre of this texel in full-res pixels
      ivec2 p = ivec2(floor(fc - 0.5));
      ivec2 mx = ivec2(uFullSize) - 1;
      ivec2 p0 = clamp(p, ivec2(0), mx);
      ivec2 p1 = clamp(p + ivec2(1, 0), ivec2(0), mx);
      ivec2 p2 = clamp(p + ivec2(0, 1), ivec2(0), mx);
      ivec2 p3 = clamp(p + ivec2(1, 1), ivec2(0), mx);

      vec3 c0 = texelFetch(tColor, p0, 0).rgb;
      vec3 c1 = texelFetch(tColor, p1, 0).rgb;
      vec3 c2 = texelFetch(tColor, p2, 0).rgb;
      vec3 c3 = texelFetch(tColor, p3, 0).rgb;

      float k0 = dofCoC(texelFetch(tDepth, p0, 0).x, vUv.y);
      float k1 = dofCoC(texelFetch(tDepth, p1, 0).x, vUv.y);
      float k2 = dofCoC(texelFetch(tDepth, p2, 0).x, vUv.y);
      float k3 = dofCoC(texelFetch(tDepth, p3, 0).x, vUv.y);

      float kn = min(min(k0, k1), min(k2, k3));
      float kf = max(max(k0, k1), max(k2, k3));
      float kc = (kn < -1.0 || -kn > kf) ? kn : kf;

      // guard against NaN/Inf from the scene (would poison the whole bokeh kernel)
      c0 = pfxSafe(c0);
      c1 = pfxSafe(c1);
      c2 = pfxSafe(c2);
      c3 = pfxSafe(c3);

      float w0 = 1.0 / (1.0 + (k0 - kc) * (k0 - kc));
      float w1 = 1.0 / (1.0 + (k1 - kc) * (k1 - kc));
      float w2 = 1.0 / (1.0 + (k2 - kc) * (k2 - kc));
      float w3 = 1.0 / (1.0 + (k3 - kc) * (k3 - kc));
      float wsum = w0 + w1 + w2 + w3;
      vec3 col = (c0 * w0 + c1 * w1 + c2 * w2 + c3 * w3) / wsum;

      vec4 hl = vec4(0.0);
      // Only highlights the composite actually shows through the blurred layers are scattered:
      // same ramp as its centreA (full-res px). Nearly-focused specks stay in the sharp image;
      // extracting them would double-count them (near pass is added on top of the sharp pixels)
      // or lose them (far discs are clipped to the tiny CoC of their focused surroundings),
      // which made them pulse between 'boosted disc', 'sharp' and 'hollow ring' while panning.
      float spriteGate = smoothstep(2.0, 4.0, abs(kc));
      if (uSprites > 0.5 && spriteGate > 0.0) {
        // highlight energy, decided per full-res pixel (smooth ramp above the threshold)
        float T = uBokehThreshold;
        float l0 = pfxLuma(c0), l1 = pfxLuma(c1), l2 = pfxLuma(c2), l3 = pfxLuma(c3);
        float r0 = smoothstep(T, 2.0 * T, l0), r1 = smoothstep(T, 2.0 * T, l1);
        float r2 = smoothstep(T, 2.0 * T, l2), r3 = smoothstep(T, 2.0 * T, l3);
        if (r0 + r1 + r2 + r3 > 0.0) {
          // isolation: tent-weighted neighbourhood mean (≈14×14 px via 5×5 bilinear 2×2 taps)
          // vs each pixel's OWN luminance. Lone specks → 1 (scattered as boosted discs);
          // extended bright areas → 0 (stay in the normalised gather, which keeps their blurred
          // edges free of dark halos). The 25 taps are re-weighted per pixel so each of the 4
          // pixels gets a tent window centred on itself (pixels sit ±0.25 tap from the block
          // centre, no extra fetches): the result barely depends on how a highlight straddles
          // the reduced-res grid, so boosted bokeh does not pulse while the camera pans (the
          // sprite gain amplifies any jitter here).
          float m0 = 0.0, m1 = 0.0, m2 = 0.0, m3 = 0.0;
          for (int y = -2; y <= 2; y++) {
            float ra = 0.0, rb = 0.0;
            for (int x = -2; x <= 2; x++) {
              float L = pfxLuma(textureLod(tColor, (fc + vec2(x, y) * 2.0) / uFullSize, 0.0).rgb);
              ra += (3.0 - abs(float(x) + 0.25)) * L;
              rb += (3.0 - abs(float(x) - 0.25)) * L;
            }
            float wa = 3.0 - abs(float(y) + 0.25);
            float wb = 3.0 - abs(float(y) - 0.25);
            m0 += wa * ra; m1 += wa * rb; m2 += wb * ra; m3 += wb * rb;
          }
          const float TENT_NORM = 1.0 / 76.5625;         // (Σ weights)² = 8.75²
          float s0 = r0 * (1.0 - smoothstep(0.06, 0.6, m0 * TENT_NORM / max(l0, 1e-4)));
          float s1 = r1 * (1.0 - smoothstep(0.06, 0.6, m1 * TENT_NORM / max(l1, 1e-4)));
          float s2 = r2 * (1.0 - smoothstep(0.06, 0.6, m2 * TENT_NORM / max(l2, 1e-4)));
          float s3 = r3 * (1.0 - smoothstep(0.06, 0.6, m3 * TENT_NORM / max(l3, 1e-4)));
          // Removed from the gather: the amount the layer-aware colour average above holds.
          vec3 eGather = (c0 * (w0 * s0) + c1 * (w1 * s1) + c2 * (w2 * s2) + c3 * (w3 * s3)) / wsum;
          // Scattered as sprites: the footprint's true (box-filtered) energy. The layer-aware
          // weights dilate near-field specks to every texel they touch, so using them here
          // made the scattered energy depend on the grid phase (even/odd flicker when panning).
          vec3 eBox = (c0 * s0 + c1 * s1 + c2 * s2 + c3 * s3) * 0.25;
          vec3 eAll = (c0 * r0 + c1 * r1 + c2 * r2 + c3 * r3) * 0.25;
          float iso = clamp(pfxLuma(eBox) / max(pfxLuma(eAll), 1e-6), 0.0, 1.0);
          col -= eGather * spriteGate;
          hl = vec4(eBox * spriteGate, iso);
        }
      }
      outColorCoc = vec4(max(col, vec3(0.0)), kc * uScale);
      outHighlight = hl;
    }
  `};function ba(e){let t=Math.PI*(3-Math.sqrt(5)),n=new Float32Array(e*3);for(let r=0;r<e;r++){let i=Math.sqrt((r+.5)/e),a=r*t;n[r*3]=i*Math.cos(a),n[r*3+1]=i*Math.sin(a),n[r*3+2]=i}return n}function xa(e){let t=ba(e),n=[];for(let r=0;r<e;r++)n.push(`vec2(${t[r*3].toFixed(6)}, ${t[r*3+1].toFixed(6)})`);return`const vec2 SMALL_KERNEL[${e}] = vec2[${e}](${n.join(`, `)});`}function Sa(e){let t=ba(e),n=[];for(let r=0;r<e;r++)n.push(`vec3(${t[r*3].toFixed(6)}, ${t[r*3+1].toFixed(6)}, ${t[r*3+2].toFixed(6)})`);return`const vec3 KERNEL[${e}] = vec3[${e}](\n  ${n.join(`,
  `)}\n);`}function Ca(e=48){return{name:`LuminaDofGather${e}`,defines:{TAPS:e},uniforms:{tColorCoc:{value:null},uTexel:{value:new q(1,1)},uRadius:{value:6}},vertexShader:ma,fragmentShader:`
      uniform sampler2D tColorCoc;
      uniform vec2 uTexel;
      uniform float uRadius;
      varying vec2 vUv;

      ${Sa(e)}

      void main() {
        vec4 centre = textureLod(tColorCoc, vUv, 0.0);
        float coc0 = centre.a;
        const float MARGIN = 1.0;                         // disc edge softness (px)
        // background taps are weighted by the inverse area of the disc they scatter
        // (1/CoC², floored so a focused silhouette cannot dominate its blurred neighbours):
        // a less-blurred object in front of a blurrier background then spreads over it as
        // much as it blends inward, instead of keeping a crisp 'cut-out' silhouette
        const float MIN_AREA = 4.0;                       // (2 px)²
        float norm = uRadius * uRadius / float(TAPS);     // (tap area) / PI

        float c0p = max(coc0, 0.0);
        vec4 bg = vec4(centre.rgb, 1.0) / max(c0p * c0p, MIN_AREA);
        vec4 fg = vec4(0.0);
        float fgA = 0.0;
        float nc0 = -coc0;
        if (nc0 >= 1.0) {
          fg = vec4(centre.rgb, 1.0);
          fgA = norm / max(nc0 * nc0, norm);
        }

        for (int i = 0; i < TAPS; i++) {
          vec3 k = KERNEL[i];
          float d = k.z * uRadius;
          vec4 s = textureLod(tColorCoc, vUv + k.xy * (uRadius * uTexel), 0.0);

          // background / focus layer: limited by the smaller CoC of centre and tap
          float bc = max(min(coc0, s.a), 0.0);
          float bw = clamp((bc - d) / MARGIN + 1.0, 0.0, 1.0) / max(bc * bc, MIN_AREA);
          bg += vec4(s.rgb, 1.0) * bw;

          // near layer: scatter-as-gather with the tap's own CoC
          float nc = -s.a;
          float fw = clamp((nc - d) / MARGIN + 1.0, 0.0, 1.0) * step(1.0, nc);
          fg += vec4(s.rgb, 1.0) * fw;
          fgA += fw * norm / max(nc * nc, norm);
        }

        bg.rgb /= bg.a;
        fg.rgb /= max(fg.a, 1e-4);
        fgA = fg.a > 0.0 ? clamp(fgA, 0.0, 1.0) : 0.0;
        gl_FragColor = vec4(mix(bg.rgb, fg.rgb, fgA), fgA);
      }
    `}}var wa={name:`LuminaDofTent`,uniforms:{tBlur:{value:null},tColorCoc:{value:null},uSize:{value:new q(1,1)}},vertexShader:ma,fragmentShader:`
    uniform sampler2D tBlur;
    uniform sampler2D tColorCoc;
    uniform vec2 uSize;

    void main() {
      ivec2 p = ivec2(gl_FragCoord.xy);
      ivec2 mx = ivec2(uSize) - 1;
      vec4 c = texelFetch(tBlur, p, 0);
      float cc = texelFetch(tColorCoc, p, 0).a;
      float tol = 1.0 + 0.25 * abs(cc);
      vec4 acc = vec4(0.0);
      float wsum = 0.0;
      for (int y = -1; y <= 1; y++) {
        for (int x = -1; x <= 1; x++) {
          ivec2 q = clamp(p + ivec2(x, y), ivec2(0), mx);
          vec4 s = texelFetch(tBlur, q, 0);
          float sc = texelFetch(tColorCoc, q, 0).a;
          float w = float((2 - abs(x)) * (2 - abs(y)));   // 1-2-1 tent
          float dd = (sc - cc) / tol;
          float sim = 1.0 / (1.0 + dd * dd * 4.0);
          // strict only next to (nearly) focused texels; two blurred layers blend freely
          sim = mix(sim, 1.0, smoothstep(1.0, 2.5, min(abs(cc), abs(sc))));
          w *= mix(sim, 1.0, max(s.a, c.a));
          acc += s * w;
          wsum += w;
        }
      }
      gl_FragColor = acc / wsum;
    }
  `},Ta={name:`LuminaDofBokehSprites`,uniforms:{tColorCoc:{value:null},tHighlight:{value:null},tGather:{value:null},uSize:{value:new q(1,1)},uMode:{value:0},uBoost:{value:1.5},uMaxRadius:{value:16},uMaxPointSize:{value:64}},vertexShader:`
    ${ha}
    uniform sampler2D tColorCoc;
    uniform sampler2D tHighlight;
    uniform vec2 uSize;
    uniform float uMode;
    uniform float uBoost;
    uniform float uMaxRadius;
    uniform float uMaxPointSize;
    flat out vec3 vColor;
    flat out float vRadius;
    flat out vec2 vCentre;

    void cull() {
      gl_Position = vec4(2.0, 2.0, 2.0, 1.0);   // outside the clip volume
      gl_PointSize = 1.0;
      vColor = vec3(0.0); vRadius = 0.0; vCentre = vec2(0.0);
    }

    void main() {
      // one point per 2×2 block of reduced-res texels: energy-weighted merge
      int gw = (int(uSize.x) + 1) / 2;
      ivec2 base = ivec2(gl_VertexID % gw, gl_VertexID / gw) * 2;
      ivec2 mx = ivec2(uSize) - 1;
      vec3 esum = vec3(0.0);
      vec2 eCentre = vec2(0.0);
      float cocSum = 0.0, isoSum = 0.0, lsum = 0.0;
      for (int i = 0; i < 4; i++) {
        ivec2 t = min(base + ivec2(i & 1, i >> 1), mx);
        vec4 hl = texelFetch(tHighlight, t, 0);
        float l = pfxLuma(hl.rgb);
        if (l > 0.0) {
          esum += hl.rgb;
          eCentre += (vec2(t) + 0.5) * l;
          cocSum += texelFetch(tColorCoc, t, 0).a * l;
          isoSum += hl.a * l;
          lsum += l;
        }
      }
      if (lsum < 1e-5) { cull(); return; }
      eCentre /= lsum;
      float coc = cocSum / lsum;
      float iso = isoSum / lsum;
      float wNear = smoothstep(0.75, 1.5, -coc);
      float wm = uMode > 0.5 ? wNear : 1.0 - wNear;
      vec3 e = esum * wm;
      if (pfxLuma(e) < 1e-4) { cull(); return; }
      float r = clamp(abs(coc), 0.5, uMaxRadius);
      float size = min(2.0 * ceil(r + 1.5) + 1.0, uMaxPointSize);
      r = min(r, 0.5 * size - 1.5);
      float area = max(3.14159265 * r * r, 1.0);
      float gain = 1.0 + uBoost * 4.0 * iso * smoothstep(0.5, 3.0, r) * (1.0 + 0.1 * r);
      vColor = e * gain / area;
      vRadius = r;
      vCentre = eCentre;
      // snap the point centre to a pixel centre; the disc itself is evaluated around vCentre
      vec2 pc = floor(eCentre) + 0.5;
      gl_Position = vec4(pc / uSize * 2.0 - 1.0, 0.0, 1.0);
      gl_PointSize = size;
    }
  `,fragmentShader:`
    uniform sampler2D tColorCoc;
    uniform sampler2D tGather;
    uniform float uMode;
    flat in vec3 vColor;
    flat in float vRadius;
    flat in vec2 vCentre;

    void main() {
      float d = length(gl_FragCoord.xy - vCentre);
      float r = vRadius;
      float cov;
      if (uMode < 0.5) {
        ivec2 q = ivec2(gl_FragCoord.xy);
        float c0 = abs(texelFetch(tColorCoc, q, 0).a);
        float nearA = texelFetch(tGather, q, 0).a;
        float lim = max(min(c0, r), 0.5);
        cov = clamp(lim - d + 0.5, 0.0, 1.0) * (1.0 - nearA);
      } else {
        cov = clamp(r - d + 0.5, 0.0, 1.0);
      }
      if (cov <= 0.0) discard;
      // lens-like disc: flat body with a slightly brighter rim
      float rim = mix(0.9, 1.18, smoothstep(0.55, 1.0, d / max(r, 1.0)));
      gl_FragColor = vec4(vColor * (cov * rim), 0.0);
    }
  `},Ea={name:`LuminaDofComposite`,uniforms:{tColor:{value:null},tBlur:{value:null},tColorCoc:{value:null},tNearBokeh:{value:null},uNearBokeh:{value:1},uHalfSize:{value:new q(1,1)},uHalfRatio:{value:new q(.5,.5)},uScale:{value:.5},uMaxCocPx:{value:10},uFullTexel:{value:new q(1,1)}},vertexShader:ma,fragmentShader:`
    ${va}
    ${ha}
    uniform sampler2D tColor;
    uniform sampler2D tBlur;
    uniform sampler2D tColorCoc;
    uniform sampler2D tNearBokeh;
    uniform float uNearBokeh;
    uniform vec2 uHalfSize;
    uniform vec2 uHalfRatio;
    uniform float uScale;
    uniform float uMaxCocPx;
    uniform vec2 uFullTexel;
    varying vec2 vUv;

    ${xa(12)}

    void main() {
      ivec2 fp = ivec2(gl_FragCoord.xy);
      vec3 sharp = pfxSafe(texelFetch(tColor, fp, 0).rgb);
      float coc = dofCoC(texelFetch(tDepth, fp, 0).x, vUv.y);   // full-res px
      float cocH = coc * uScale;                                   // reduced-res px

      // CoC-aware bilinear upsample of the blurred layer
      vec2 hp = gl_FragCoord.xy * uHalfRatio - 0.5;
      vec2 f = fract(hp);
      ivec2 b = ivec2(floor(hp));
      ivec2 mx = ivec2(uHalfSize) - 1;
      ivec2 q0 = clamp(b, ivec2(0), mx);
      ivec2 q1 = clamp(b + ivec2(1, 0), ivec2(0), mx);
      ivec2 q2 = clamp(b + ivec2(0, 1), ivec2(0), mx);
      ivec2 q3 = clamp(b + ivec2(1, 1), ivec2(0), mx);
      vec4 s0 = texelFetch(tBlur, q0, 0);
      vec4 s1 = texelFetch(tBlur, q1, 0);
      vec4 s2 = texelFetch(tBlur, q2, 0);
      vec4 s3 = texelFetch(tBlur, q3, 0);
      vec4 tcs = vec4(texelFetch(tColorCoc, q0, 0).a, texelFetch(tColorCoc, q1, 0).a,
                      texelFetch(tColorCoc, q2, 0).a, texelFetch(tColorCoc, q3, 0).a);
      float tol = 1.0 + 0.25 * abs(cocH);
      vec4 dc = (tcs - cocH) / tol;
      vec4 sim = 1.0 / (1.0 + dc * dc * 4.0) + 1e-3;
      // CoC rejection only matters next to (nearly) focused texels (it keeps sharp colour from
      // leaking into blurred neighbours). Where both sides are already visibly blurred, plain
      // bilinear blending is right; rejecting there gave blurred mid-ground sprites a crisp,
      // pixel-exact 'cut-out' silhouette against a blurrier background. (Same rule in the tent.)
      sim = mix(sim, vec4(1.0), smoothstep(1.0, 2.5, min(vec4(abs(cocH)), abs(tcs))));
      vec4 bil = vec4((1.0 - f.x) * (1.0 - f.y), f.x * (1.0 - f.y), (1.0 - f.x) * f.y, f.x * f.y);
      vec4 w = bil * mix(sim, vec4(1.0), clamp(vec4(s0.a, s1.a, s2.a, s3.a), 0.0, 1.0));
      vec4 blur = (s0 * w.x + s1 * w.y + s2 * w.z + s3 * w.w) / max(dot(w, vec4(1.0)), 1e-5);

      // small CoCs: a full-resolution disc blur, so the focus falloff is gradual and the
      // half-res layer only takes over once the blur is large enough to hide its resolution
      float ac = abs(coc);
      vec3 base = sharp;
      if (ac > 0.3 && ac < 4.0) {
        // scatter-as-gather: a tap only counts if its own CoC reaches this pixel, so focused
        // silhouettes never smear onto a slightly blurred background next to them
        vec3 acc = sharp;
        float wsum = 1.0;
        ivec2 fmx = ivec2(uHalfSize / uHalfRatio + 0.5) - 1;
        for (int i = 0; i < 12; i++) {
          vec2 o = SMALL_KERNEL[i] * ac;
          vec2 pos = gl_FragCoord.xy + o;
          float tc = abs(dofCoC(texelFetch(tDepth, clamp(ivec2(pos), ivec2(0), fmx), 0).x, pos.y * uFullTexel.y));
          float wt = clamp(tc - length(o) + 1.0, 0.0, 1.0);
          acc += texture2D(tColor, pos * uFullTexel).rgb * wt;
          wsum += wt;
        }
        base = mix(sharp, acc / wsum, smoothstep(0.3, 1.2, ac));
      }
      float centreA = smoothstep(2.0, 4.0, ac);
      float a = 1.0 - (1.0 - centreA) * (1.0 - clamp(blur.a, 0.0, 1.0));
      vec3 nearBokeh = uNearBokeh > 0.5 ? texture2D(tNearBokeh, vUv).rgb : vec3(0.0);

#ifdef DEBUG
      float l = pfxLuma(sharp);
      vec3 dbase = vec3(sqrt(l / (1.0 + l))) * 0.45;
      float n = sqrt(clamp(-coc / uMaxCocPx, 0.0, 1.0));
      float fr = sqrt(clamp(coc / uMaxCocPx, 0.0, 1.0));
      float inFocus = 1.0 - smoothstep(0.25, 0.75, abs(coc));
      vec3 col = dbase;
      col = mix(col, vec3(1.0, 0.55, 0.12), n * 0.8);
      col = mix(col, vec3(0.22, 0.5, 1.0), fr * 0.8);
      col = mix(col, col * 0.5 + vec3(0.12, 0.5, 0.16), inFocus);
      float spill = clamp(blur.a, 0.0, 1.0) * step(-0.5, coc);
      col = mix(col, vec3(0.85, 0.2, 0.75), spill * 0.6);
      gl_FragColor = vec4(col, 1.0);
#else
      gl_FragColor = vec4(mix(base, blur.rgb, a) + nearBokeh, 1.0);
#endif
    }
  `},Da={name:`LuminaGrade`,uniforms:{tDiffuse:{value:null},uTexel:{value:new q(1,1)},uAspect:{value:16/9},uExposure:{value:1},uContrast:{value:1.08},uSaturation:{value:1.12},uTemperature:{value:.08},uTint:{value:0},uShadowsTint:{value:new L(.02,.04,.08)},uHighlightsTint:{value:new L(.06,.03,-.02)},uVignette:{value:.5},uVignetteSoftness:{value:.55},uVignetteRoundness:{value:.65},uVignetteColor:{value:new L(.05,.025,.04)},uGrain:{value:.035},uGrainSize:{value:1},uGrainSeed:{value:0},uCA:{value:.0015},uSharpen:{value:.15},uDither:{value:1}},vertexShader:ma,fragmentShader:`
    ${ha}
    uniform sampler2D tDiffuse;
    uniform vec2 uTexel;
    uniform float uAspect;
    uniform float uExposure;
    uniform float uContrast;
    uniform float uSaturation;
    uniform float uTemperature;
    uniform float uTint;
    uniform vec3 uShadowsTint;
    uniform vec3 uHighlightsTint;
    uniform float uVignette;
    uniform float uVignetteSoftness;
    uniform float uVignetteRoundness;
    uniform vec3 uVignetteColor;
    uniform float uGrain;
    uniform float uGrainSize;
    uniform float uGrainSeed;
    uniform float uCA;
    uniform float uSharpen;
    uniform float uDither;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      // position relative to centre, x scaled toward the true aspect by 'roundness'
      vec2 d = uv - 0.5;
      vec2 dv = d * vec2(mix(1.0, uAspect, uVignetteRoundness), 1.0);
      float cornerLen = length(vec2(0.5 * mix(1.0, uAspect, uVignetteRoundness), 0.5));
      float r = length(dv) / cornerLen;            // 0 centre … 1 corners

      // --- sampling: sharpen + chromatic aberration
      vec3 c = texture2D(tDiffuse, uv).rgb;
      vec3 nb = texture2D(tDiffuse, uv + vec2(uTexel.x, 0.0)).rgb
              + texture2D(tDiffuse, uv - vec2(uTexel.x, 0.0)).rgb
              + texture2D(tDiffuse, uv + vec2(0.0, uTexel.y)).rgb
              + texture2D(tDiffuse, uv - vec2(0.0, uTexel.y)).rgb;
      vec3 detail = clamp((c - nb * 0.25) * uSharpen, vec3(-0.08), vec3(0.08));
      vec3 col = c;
      if (uCA > 0.0) {
        vec2 off = d * (uCA * 2.0 * r * r);       // radial, grows toward the edges
        col.r = texture2D(tDiffuse, uv - off).r;
        col.b = texture2D(tDiffuse, uv + off).b;
      }
      col += detail;
      col = max(col, vec3(0.0));

      // --- exposure (post tone-map multiply)
      col *= uExposure;

      // --- white balance: warm/cool along blue↔amber, tint along green↔magenta, luma preserving
      vec3 wb = vec3(1.0 + 0.30 * uTemperature + 0.10 * uTint,
                     1.0 + 0.02 * uTemperature - 0.25 * uTint,
                     1.0 - 0.34 * uTemperature + 0.10 * uTint);
      wb /= pfxLuma(wb);
      col *= wb;

      // --- contrast around display mid-grey
      col = (col - 0.5) * uContrast + 0.5;
      col = max(col, vec3(0.0));

      // --- saturation
      float l = pfxLuma(col);
      col = max(mix(vec3(l), col, uSaturation), vec3(0.0));

      // --- split toning
      l = clamp(pfxLuma(col), 0.0, 1.0);
      float ws = (1.0 - l) * (1.0 - l);
      float wh = l * l;
      col += uShadowsTint * ws + uHighlightsTint * wh;

      // --- vignette (smooth, elliptical; darkens toward a deep warm brown instead of grey)
      float inner = mix(0.95, 0.05, clamp(uVignetteSoftness, 0.0, 1.0));
      float v = smoothstep(inner, 1.25, r);
      v = v * v * (3.0 - 2.0 * v);
      col = mix(col, uVignetteColor * col, clamp(uVignette * v * 1.35, 0.0, 1.0));

      // --- film grain: animated, strongest in the mid-tones
      vec2 gp = floor(gl_FragCoord.xy / uGrainSize);
      float g = pfxHash12(gp + uGrainSeed * vec2(113.7, 71.3)) + pfxHash12(gp * 1.37 + uGrainSeed * vec2(37.1, 91.9)) - 1.0;
      float lg = clamp(pfxLuma(col), 0.0, 1.0);
      float gw = 0.35 + 2.6 * lg * (1.0 - lg);
      col += g * uGrain * gw;

      // --- ordered dither (±0.5 LSB of 8-bit) against banding
      col += (pfxBayer8(gl_FragCoord.xy) - 0.5) * (uDither / 255.0);

      gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
    }
  `},Oa={name:`LuminaBloomBrightPass`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:.82},smoothWidth:{value:.35},maxBrightness:{value:24}},vertexShader:ma,fragmentShader:`
    ${ha}
    uniform sampler2D tDiffuse;
    uniform float luminosityThreshold;
    uniform float smoothWidth;
    uniform float maxBrightness;
    varying vec2 vUv;

    void main() {
      vec3 c = pfxSafe(texture2D(tDiffuse, vUv).rgb);
      float br = max(c.r, max(c.g, c.b));
      float knee = max(smoothWidth, 1e-4);
      float soft = clamp(br - luminosityThreshold + knee, 0.0, 2.0 * knee);
      soft = soft * soft / (4.0 * knee);
      float contrib = max(soft, br - luminosityThreshold) / max(br, 1e-4);
      vec3 o = c * contrib;
      float m = max(o.r, max(o.g, o.b));
      o *= min(1.0, maxBrightness / max(m, 1e-4));
      gl_FragColor = vec4(o, 1.0);
    }
  `},ka=[48,64,96];function Aa(e,t,n={}){return new M(e,t,{type:ke,format:U,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1,minFilter:F,magFilter:F,...n})}function ja(e,t=null,n=null,r={}){let i=Be.clone(e.uniforms);return t&&Object.assign(i,t),new tt({name:e.name,uniforms:i,defines:{...e.defines||{},...n||{}},vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,glslVersion:e.glslVersion??null,depthTest:!1,depthWrite:!1,blending:0,toneMapped:!1,...r})}var Ma=class{constructor(e){this.gl=e,this.ext=e.getExtension?e.getExtension(`EXT_disjoint_timer_query_webgl2`):null,this.enabled=!1,this.results={},this.min={},this._pending=[],this._free=[],this._active=null}get supported(){return!!this.ext}begin(e){if(!this.enabled||!this.ext)return;this._active&&this.end();let t=this.gl,n=this._free.pop()||{q:t.createQuery(),label:``};n.label=e,t.beginQuery(this.ext.TIME_ELAPSED_EXT,n.q),this._active=n}end(){this._active&&=(this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),this._pending.push(this._active),null)}poll(){if(!this.ext||this._pending.length===0)return;let e=this.gl,t=e.getParameter(this.ext.GPU_DISJOINT_EXT);for(;this._pending.length;){let n=this._pending[0];if(!e.getQueryParameter(n.q,e.QUERY_RESULT_AVAILABLE))break;let r=e.getQueryParameter(n.q,e.QUERY_RESULT);if(!t){let e=r/1e6,t=this.results[n.label];this.results[n.label]=t===void 0?e:t*.9+e*.1,this.min[n.label]=Math.min(this.min[n.label]??1/0,e)}this._pending.shift(),this._free.push(n)}}dispose(){let e=this.gl;this._active&&this.end();for(let t of this._pending)e.deleteQuery(t.q);for(let t of this._free)e.deleteQuery(t.q);this._pending.length=0,this._free.length=0}},Na=class{constructor(e,t,n,r={}){this.renderer=e,this.scene=t,this.camera=n,this.samples=Math.max(0,r.samples??4)|0,this.dofScale=K(r.dofScale??.5,.25,1),this.maxTaps=Math.max(48,r.maxTaps??96),this.settings={enabled:!0,dof:{enabled:!0,focusDistance:24,focusRange:5,maxBlur:12,nearScale:1.4,farScale:1,tiltShift:.35,tiltCenter:.52,tiltWidth:.28,bokehBoost:1.5,autoFocus:!0,debug:!1,bokehThreshold:1.5,bokehSprites:!0,tiltFeather:.3,focusSpeed:4},bloom:{enabled:!0,strength:.55,radius:.55,threshold:.82,warmth:.25,knee:.35},grade:{enabled:!0,exposure:1,contrast:1.08,saturation:1.12,temperature:.08,tint:0,shadowsTint:[.02,.04,.08],highlightsTint:[.06,.03,-.02],vignette:.5,vignetteSoftness:.55,grain:.035,chromaticAberration:.0015,sharpen:.15,vignetteRoundness:.65,vignetteColor:[.05,.025,.04],grainSize:1,dither:1}},this._focusTarget=null,this._time=0,this._w=0,this._h=0,this._hw=0,this._hh=0,this._taps=ka[0],this._v2=new q,this._clearColor=new B,this._bloomWarmth=-1,this._sceneInfo={calls:0,triangles:0,points:0,lines:0},this._depthTexture=new je(1,1,Oe),this._sceneRT=Aa(1,1,{samples:this.samples,depthBuffer:!0,depthTexture:this._depthTexture}),this._prefilterRT=Aa(1,1,{count:2}),this._gatherRT=Aa(1,1),this._tentRT=Aa(1,1),this._nearBokehRT=Aa(1,1),this._hdrRT=Aa(1,1),this._ldrRT=Aa(1,1),this._sceneRT.texture.name=`PostFX.scene`,this._prefilterRT.textures[0].name=`PostFX.dofColorCoc`,this._prefilterRT.textures[1].name=`PostFX.dofHighlights`,this._gatherRT.texture.name=`PostFX.dofGather`,this._tentRT.texture.name=`PostFX.dofBlur`,this._nearBokehRT.texture.name=`PostFX.dofNearBokeh`,this._hdrRT.texture.name=`PostFX.hdr`,this._ldrRT.texture.name=`PostFX.ldr`,this._coc=_a(),this._prefilterMat=ja(ya,this._coc),this._gatherMats=new Map,this._tentMat=ja(wa),this._spriteMat=ja(Ta,null,null,{blending:5,blendEquation:100,blendSrc:201,blendDst:201,transparent:!0}),this._compositeMat=ja(Ea,this._coc),this._debugMat=ja(Ea,this._coc,{DEBUG:1}),this._gradeMat=ja(Da),this._copyMat=ja(ga),this._quad=new ca(null),this._spriteGeo=new T,this._spriteCapacity=0,this._sprites=new ut(this._spriteGeo,this._spriteMat),this._sprites.frustumCulled=!1,this._spriteCam=new te(-1,1,1,-1,0,1);let i=e.getContext(),a=i.getParameter(i.ALIASED_POINT_SIZE_RANGE);this._spriteMat.uniforms.uMaxPointSize.value=Math.max(1,Math.min(256,a?a[1]:64));let o=this.settings.bloom;this._bloom=new da(new q(2,2),o.strength,o.radius,o.threshold);let s=ja(Oa);this._bloom.materialHighPassFilter.dispose(),this._bloom.materialHighPassFilter=s,this._bloom.highPassUniforms=s.uniforms,this._output=new pa,this._timer=new Ma(i),e.getDrawingBufferSize(this._v2),this._allocate(Math.max(1,this._v2.x),Math.max(1,this._v2.y))}setSize(e,t,n=this.renderer.getPixelRatio()){let r=Math.max(1,Math.floor(e*n)),i=Math.max(1,Math.floor(t*n));(r!==this._w||i!==this._h)&&this._allocate(r,i)}setFocus(e,t=!1){Number.isFinite(e)&&(this._focusTarget=e,t&&this.settings.dof.autoFocus&&(this.settings.dof.focusDistance=e))}get depthTexture(){return this._depthTexture}get sceneTarget(){return this._sceneRT}get size(){return{width:this._w,height:this._h,dofWidth:this._hw,dofHeight:this._hh}}get taps(){return this._taps}get timings(){return this._timer.results}get timingsMin(){return this._timer.min}enableTimings(e=!0){return this._timer.enabled=!!e&&this._timer.supported,this._timer.enabled&&(this._timer.min={},this._timer.results={}),this._timer.enabled}render(e=1/60){let t=this.renderer,r=this.settings;e=Number.isFinite(e)?Math.min(Math.max(e,0),.25):1/60,this._time+=e;let i=r.dof;if(i.autoFocus&&this._focusTarget!==null&&(i.focusDistance+=(this._focusTarget-i.focusDistance)*n(i.focusSpeed??4,e)),!r.enabled){t.setRenderTarget(null),this._renderScene();return}t.getDrawingBufferSize(this._v2),(this._v2.x!==this._w||this._v2.y!==this._h)&&this._allocate(this._v2.x,this._v2.y);let a=this._timer;a.poll(),a.begin(`scene`),t.setRenderTarget(this._sceneRT),t.autoClear||t.clear(),this._renderScene(),a.end();let o=t.autoClear;t.autoClear=!1;let s=this._sceneRT,c=!!i.debug;if(i.enabled||c){if(a.begin(`dof`),this._renderDof(c),a.end(),c){t.autoClear=o;return}s=this._hdrRT}r.bloom.enabled&&r.bloom.strength>0&&(a.begin(`bloom`),s===this._sceneRT&&(this._copyMat.uniforms.tDiffuse.value=this._sceneRT.texture,this._blit(this._copyMat,this._hdrRT),s=this._hdrRT),this._updateBloom(),this._bloom.render(t,null,s,e,!1),a.end()),a.begin(`output`);let l=r.grade.enabled;this._output.renderToScreen=!l,this._output.render(t,this._ldrRT,s),l&&(this._updateGrade(),this._gradeMat.uniforms.tDiffuse.value=this._ldrRT.texture,this._blit(this._gradeMat,null)),a.end(),t.autoClear=o}warmup(){let e=this.renderer,t=e.getRenderTarget(),n=e.autoClear;e.autoClear=!1;for(let e of ka)e<=this.maxTaps&&this._blit(this._gatherMaterial(e),this._gatherRT);for(let e of[this._prefilterMat,this._tentMat,this._compositeMat,this._debugMat,this._gradeMat,this._copyMat]){let t=e===this._prefilterMat?this._prefilterRT:e===this._gradeMat||e===this._debugMat?null:this._hdrRT;this._blit(e,t)}e.setRenderTarget(this._tentRT),e.render(this._sprites,this._spriteCam),this._updateBloom(),this._bloom.render(e,null,this._hdrRT,0,!1),this._output.renderToScreen=!1,this._output.render(e,this._ldrRT,this._hdrRT),e.autoClear=n,e.setRenderTarget(t)}get sceneInfo(){return this._sceneInfo}dispose(){for(let e of[this._sceneRT,this._prefilterRT,this._gatherRT,this._tentRT,this._nearBokehRT,this._hdrRT,this._ldrRT])e.dispose();this._depthTexture.dispose(),this._prefilterMat.dispose();for(let e of this._gatherMats.values())e.dispose();this._gatherMats.clear();for(let e of[this._tentMat,this._spriteMat,this._compositeMat,this._debugMat,this._gradeMat,this._copyMat])e.dispose();this._spriteGeo.dispose(),this._quad.dispose(),this._bloom.dispose(),this._output.dispose(),this._timer.dispose()}_allocate(e,t){e=Math.max(1,e|0),t=Math.max(1,t|0),this._w=e,this._h=t;let n=Math.max(1,Math.ceil(e*this.dofScale)),r=Math.max(1,Math.ceil(t*this.dofScale));this._hw=n,this._hh=r,this._sceneRT.setSize(e,t),this._hdrRT.setSize(e,t),this._ldrRT.setSize(e,t);for(let e of[this._prefilterRT,this._gatherRT,this._tentRT,this._nearBokehRT])e.setSize(n,r);this._bloom.setSize(e,t);let i=Math.ceil(n/2)*Math.ceil(r/2);i>this._spriteCapacity&&(this._spriteCapacity=Math.ceil(i*1.25),this._spriteGeo.dispose(),this._spriteGeo.setAttribute(`position`,new g(new Uint8Array(this._spriteCapacity),1)),this._spriteGeo.boundingSphere=new ht(new L,1),this._spriteGeo.boundingBox=new fe(new L(-1,-1,-1),new L(1,1,1))),this._spriteGeo.setDrawRange(0,i);let a=this._prefilterMat.uniforms;a.uFullSize.value.set(e,t),a.uRatio.value.set(e/n,t/r),a.uScale.value=this.dofScale,this._tentMat.uniforms.uSize.value.set(n,r),this._spriteMat.uniforms.uSize.value.set(n,r);for(let i of[this._compositeMat,this._debugMat])i.uniforms.uHalfSize.value.set(n,r),i.uniforms.uHalfRatio.value.set(n/e,r/t),i.uniforms.uScale.value=this.dofScale,i.uniforms.uFullTexel.value.set(1/e,1/t);this._gradeMat.uniforms.uTexel.value.set(1/e,1/t),this._gradeMat.uniforms.uAspect.value=e/t}_renderScene(){let e=this.renderer.info,t=e.render,n=e.autoReset,r=n?0:t.calls,i=n?0:t.triangles,a=n?0:t.points,o=n?0:t.lines;this.renderer.render(this.scene,this.camera);let s=this._sceneInfo;s.calls=t.calls-r,s.triangles=t.triangles-i,s.points=t.points-a,s.lines=t.lines-o}_gatherMaterial(e){let t=this._gatherMats.get(e);return t||(t=ja(Ca(e)),this._gatherMats.set(e,t)),t}_blit(e,t){this._quad.material=e,this.renderer.setRenderTarget(t),this._quad.render(this.renderer)}_clear(e){let t=this.renderer;t.getClearColor(this._clearColor);let n=t.getClearAlpha();t.setRenderTarget(e),t.setClearColor(0,0),t.clear(!0,!1,!1),t.setClearColor(this._clearColor,n)}_renderDof(e){let t=this.settings.dof,n=this.camera,r=this._coc,i=this.renderer,a=Math.max(0,t.maxBlur)*(this._h/1080);r.tDepth.value=this._depthTexture,r.uCamNear.value=n.near,r.uCamFar.value=n.far,r.uFocusDistance.value=t.focusDistance,r.uFocusRange.value=Math.max(.01,t.focusRange),r.uNearScale.value=Math.max(0,t.nearScale),r.uFarScale.value=Math.max(0,t.farScale),r.uMaxBlurPx.value=a,r.uTilt.value.set(Math.max(0,t.tiltShift),t.tiltCenter,Math.max(0,t.tiltWidth)),r.uTiltFeather.value=Math.max(.01,t.tiltFeather??.3),r.uOrtho.value=+!!n.isOrthographicCamera;let o=Math.max(t.nearScale,t.farScale,t.tiltShift,0),s=Math.max(1,a*o*this.dofScale),c=.3*Math.PI*s*s,l=ka[0];for(let e=0;e<ka.length;e++){let t=ka[e];if(t>this.maxTaps||(l=t,t>=c))break}this._taps=l;let u=t.bokehSprites!==!1&&!e,d=Math.max(.001,i.toneMappingExposure||1),f=this._prefilterRT.textures[0],p=this._prefilterRT.textures[1],m=this._prefilterMat.uniforms;m.tColor.value=this._sceneRT.texture,m.uBokehThreshold.value=Math.max(.05,t.bokehThreshold??1.5)/d,m.uSprites.value=+!!u,this._blit(this._prefilterMat,this._prefilterRT);let h=this._gatherMaterial(l);h.uniforms.tColorCoc.value=f,h.uniforms.uTexel.value.set(1/this._hw,1/this._hh),h.uniforms.uRadius.value=s,this._blit(h,this._gatherRT);let g=this._tentMat.uniforms;if(g.tBlur.value=this._gatherRT.texture,g.tColorCoc.value=f,this._blit(this._tentMat,this._tentRT),u){let e=this._spriteMat.uniforms;e.tColorCoc.value=f,e.tHighlight.value=p,e.tGather.value=this._gatherRT.texture,e.uBoost.value=Math.max(0,t.bokehBoost),e.uMaxRadius.value=s,e.uMode.value=0,i.setRenderTarget(this._tentRT),i.render(this._sprites,this._spriteCam),e.uMode.value=1,this._clear(this._nearBokehRT),i.render(this._sprites,this._spriteCam)}let _=e?this._debugMat:this._compositeMat;_.uniforms.tColor.value=this._sceneRT.texture,_.uniforms.tBlur.value=this._tentRT.texture,_.uniforms.tColorCoc.value=f,_.uniforms.tNearBokeh.value=this._nearBokehRT.texture,_.uniforms.uNearBokeh.value=+!!u,_.uniforms.uMaxCocPx.value=Math.max(1,a*o),this._blit(_,e?null:this._hdrRT)}_updateBloom(){let e=this.settings.bloom,t=this._bloom;t.strength=e.strength,t.radius=e.radius,t.threshold=e.threshold,t.highPassUniforms.smoothWidth.value=Math.max(.01,e.knee??.35);let n=e.warmth??0;if(n!==this._bloomWarmth){this._bloomWarmth=n;let e=t.bloomTintColors.length;for(let r=0;r<e;r++){let i=K(n*(.35+.65*(r/Math.max(1,e-1))),0,1);t.bloomTintColors[r].set(1+.08*i,1-.1*i,1-.32*i)}}}_updateGrade(){let e=this.settings.grade,t=this._gradeMat.uniforms;t.uExposure.value=e.exposure,t.uContrast.value=e.contrast,t.uSaturation.value=e.saturation,t.uTemperature.value=e.temperature,t.uTint.value=e.tint,t.uShadowsTint.value.fromArray(e.shadowsTint),t.uHighlightsTint.value.fromArray(e.highlightsTint),t.uVignette.value=e.vignette,t.uVignetteSoftness.value=e.vignetteSoftness,t.uVignetteRoundness.value=e.vignetteRoundness??.65,e.vignetteColor&&t.uVignetteColor.value.fromArray(e.vignetteColor),t.uGrain.value=e.grain,t.uGrainSize.value=Math.max(1,e.grainSize??1),t.uGrainSeed.value=Math.floor(this._time*24)%997,t.uCA.value=e.chromaticAberration,t.uSharpen.value=e.sharpen,t.uDither.value=e.dither??1}},Pa=Te(V.outline),Fa=`#8a7a6a`,Ia=/^#?([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;function La(e,t=Fa){if(e==null||e===!1)return t;if(typeof e==`number`&&Number.isFinite(e))return`#${(e>>>0&16777215).toString(16).padStart(6,`0`)}`;if(e&&e.isColor)return`#${e.getHexString()}`;if(Array.isArray(e)&&e.length>=3&&typeof e[0]==`number`)return e;if(typeof e==`string`){let t=le(V,e);if(typeof t==`string`)return t;if(Array.isArray(t))return t[Math.floor(t.length/2)];if(Ia.test(e.trim()))return e.trim();let n=le(B.NAMES,e.trim().toLowerCase());if(n!==void 0)return`#${n.toString(16).padStart(6,`0`)}`}return t}function Ra(e,{base:t}={}){let n=null;if(Array.isArray(e)&&e.length&&typeof e[0]!=`number`?n=e:typeof e==`string`&&Array.isArray(V[e])&&(n=V[e]),!n){let t=La(e);return[-.62,-.3,0,.24,.46].map(e=>e===0?[...Te(t)]:Et(t,e))}let r=n.length,i=t??(r>=6?3:2);i<0&&(i=r+i);let a=[];for(let e=-2;e<=2;e++){let t=i+e;t<0?a.push(Et(n[0],-.22*-t)):t>=r?a.push(Et(n[r-1],.16*(t-r+1))):a.push([...Te(n[t])])}return a}var za=204;function Ba(e){return[e[0],e[1],e[2],za]}function Va(e,t){if(typeof e==`string`&&Array.isArray(V[e])){let n=V[e].length;if(t===`skin`)return Ra(e,{base:n-2});if(t===`hair`&&e===`hairBlack`||t===`hair`&&e===`hairWhite`||e===`white`||e===`cream`||e===`black`)return Ra(e,{base:3})}return Ra(e)}var Z={SKIN:1,HAIR:2,TOP:3,BOTTOM:4,ACCENT:5,CAPE:6,CAPEIN:7,HAT:8,BOOT:9,METAL:10,WOOD:11,GOLD:12,LEATHER:13,EYE:14,WHITE:15,SHIRT:16,SCARF:17,BLUSH:18,LINE:19,BEARD:20,PACK:21,GEM:22,STRING:23,FEATHER:24,BOOK:25,HATBAND:26,BELT:27,SASH:28,FUR:29,FUR2:30,FUR3:31,BEAK:32,COMB:33,NOSE:34,GEL:35,BONE:36,GLOW:37,STONE:38,WING:39},Ha=40,Ua=class{constructor(e,t){this.w=e,this.h=t,this.mat=new Uint8Array(e*t),this.shade=new Int8Array(e*t),this.part=new Uint16Array(e*t),this.pid=0,this.line=null,this.lineShade=0,this.ox=0,this.oy=0,this.minX=0,this.minY=0,this.maxX=-1,this.maxY=-1}clear(){return this.mat.fill(0),this.shade.fill(0),this.part.fill(0),this.pid=0,this}begin(e=null,t=0){this.pid++,this.line=e,this.lineShade=t,this.minX=this.w,this.minY=this.h,this.maxX=-1,this.maxY=-1}end(){let e=Ga[this.line];if(!e||this.maxX<0)return;let{w:t,h:n,mat:r,part:i,shade:a,pid:o}=this,s=[];for(let a=this.minY;a<=this.maxY;a++)for(let c=this.minX;c<=this.maxX;c++){let l=a*t+c;if(i[l]===o&&r[l])for(let[l,u]of e){let e=c+l,d=a+u;if(e<0||d<0||e>=t||d>=n)continue;let f=d*t+e;r[f]&&i[f]!==o&&r[f]!==Z.EYE&&r[f]!==Z.LINE&&s.push(f)}}for(let e of s)a[e]>this.lineShade&&(a[e]=this.lineShade)}set(e,t,n,r=2){if(e=(e|0)+this.ox,t=(t|0)+this.oy,e<0||t<0||e>=this.w||t>=this.h)return;let i=t*this.w+e;this.mat[i]=n,this.shade[i]=r,this.part[i]=this.pid,e<this.minX&&(this.minX=e),t<this.minY&&(this.minY=t),e>this.maxX&&(this.maxX=e),t>this.maxY&&(this.maxY=t)}get(e,t){return e=(e|0)+this.ox,t=(t|0)+this.oy,e<0||t<0||e>=this.w||t>=this.h?0:this.mat[t*this.w+e]}getShade(e,t){return e=(e|0)+this.ox,t=(t|0)+this.oy,e<0||t<0||e>=this.w||t>=this.h?0:this.shade[t*this.w+e]}tone(e,t,n){if(e=(e|0)+this.ox,t=(t|0)+this.oy,e<0||t<0||e>=this.w||t>=this.h)return;let r=t*this.w+e;this.mat[r]&&(this.shade[r]=Math.max(0,Math.min(4,this.shade[r]+n)))}over(e,t,n,r){this.get(e,t)&&this.set(e,t,n,r)}rect(e,t,n,r,i,a=2){for(let o=t;o<t+r;o++)for(let t=e;t<e+n;t++)this.set(t,o,i,a)}hline(e,t,n,r,i=2){t<e&&([e,t]=[t,e]);for(let a=e;a<=t;a++)this.set(a,n,r,i)}vline(e,t,n,r,i=2){n<t&&([t,n]=[n,t]);for(let a=t;a<=n;a++)this.set(e,a,r,i)}line2(e,t,n,r,i,a=2){e=Math.round(e),t=Math.round(t),n=Math.round(n),r=Math.round(r);let o=Math.abs(n-e),s=-Math.abs(r-t),c=e<n?1:-1,l=t<r?1:-1,u=o+s,d=Math.max(o,-s)||1,f=0;for(;this.set(e,t,i,typeof a==`function`?a(f/d,e,t):a),e!==n||t!==r;){let n=2*u;n>=s&&(u+=s,e+=c),n<=o&&(u+=o,t+=l),f++}}tpl(e,t,n,r=null){let i=r||e.legend,a=e.rows;for(let r=0;r<a.length;r++){let o=a[r];for(let a=0;a<o.length;a++){let s=o[a];if(s===`.`||s===` `)continue;let c=i[s];if(c){if(c===Wa){this.erase(t+(e.ox||0)+a,n+(e.oy||0)+r);continue}this.set(t+(e.ox||0)+a,n+(e.oy||0)+r,c[0],c[1])}}}}erase(e,t){if(e=(e|0)+this.ox,t=(t|0)+this.oy,e<0||t<0||e>=this.w||t>=this.h)return;let n=t*this.w+e;this.mat[n]=0,this.part[n]=0}},Wa=Object.freeze([`erase`]),Ga={all:[[1,0],[-1,0],[0,1],[0,-1]],below:[[0,1]],above:[[0,-1]],sides:[[1,0],[-1,0]],belowSides:[[1,0],[-1,0],[0,1]]};function Ka(e,t,n,r,i,a=!1,{outline:o=!0}={}){let{w:s,h:c,mat:l,shade:u}=e;for(let e=0;e<c;e++)for(let d=0;d<s;d++){let f=e*s+d,p=r+(a?s-1-d:d),m=i+e,h=l[f];if(h){let e=t[h]||t[Z.TOP];n.set(p,m,e[Math.max(0,Math.min(4,u[f]))])}else if(o){let t=d>0&&l[f-1],r=d<s-1&&l[f+1],i=e>0&&l[f-s],a=e<c-1&&l[f+s];(t||r||i||a)&&n.set(p,m,Pa)}}}var qa={d:[Z.SKIN,0],s:[Z.SKIN,1],m:[Z.SKIN,2],l:[Z.SKIN,3],L:[Z.SKIN,4]},Ja={1:[Z.HAIR,0],2:[Z.HAIR,1],3:[Z.HAIR,2],4:[Z.HAIR,3],5:[Z.HAIR,4],x:Wa},Ya={1:[Z.BEARD,0],2:[Z.BEARD,1],3:[Z.BEARD,2],4:[Z.BEARD,3],5:[Z.BEARD,4],s:[Z.SKIN,1]},Xa={1:[Z.HAT,0],2:[Z.HAT,1],3:[Z.HAT,2],4:[Z.HAT,3],5:[Z.HAT,4],a:[Z.HATBAND,0],b:[Z.HATBAND,1],c:[Z.HATBAND,2],d:[Z.HATBAND,3],g:[Z.GOLD,1],G:[Z.GOLD,3],h:[Z.GOLD,4],j:[Z.GEM,2],J:[Z.GEM,4],f:[Z.FEATHER,1],F:[Z.FEATHER,3],e:[Z.FEATHER,4],k:[Z.HAT,0],x:Wa,m:[Z.SKIN,2],s:[Z.SKIN,1],S:[Z.SKIN,0],9:[Z.HAIR,2],8:[Z.HAIR,1]},Q=(e,t,n=0,r=0)=>({rows:e,legend:t,ox:n,oy:r}),Za={down:Q([`............`,`...mmmmmm...`,`..mmmmmmmm..`,`.mmmmmmmmmm.`,`.mmmmmmmmms.`,`smmmmmmmmmss`,`smmmmmmmmmss`,`.mmmmmmmmms.`,`.lmmmmmmmss.`,`..mmmmmmss..`,`...mmssss...`],qa),side:Q([`............`,`....mmmmmm..`,`..mmmmmmmmm.`,`.mmmmmmmmmmm`,`.mmmmmmmmmms`,`.mmmmmmmmmss`,`.mmmmmmmmmss`,`mmmmmmmmmss.`,`.mmmmmmmss..`,`..mmmmsss...`,`...mss......`],qa),up:Q([`............`,`...mmmmmm...`,`..mmmmmmmm..`,`.mmmmmmmmmm.`,`.mmmmmmmmms.`,`smmmmmmmmmss`,`smmmmmmmmmss`,`.mmmmmmmmms.`,`..mmmmmmss..`,`...smmmss...`,`....ssss....`],qa)},Qa={short:{down:{front:Q([`.....3443.....`,`...33444433...`,`..3345544333..`,`.334554433322.`,`.344433333222.`,`.333233233322.`,`.33.33.23..22.`,`.32........22.`,`.2..........1.`],Ja,-1,-1)},side:{front:Q([`.....33443....`,`...334444433..`,`..33455443332.`,`.3445543333322`,`.3443333333222`,`.33.3.33333222`,`.3......333222`,`........332221`,`........33221.`,`.........221..`],Ja,-1,-1)},up:{front:Q([`.....3443.....`,`...33444433...`,`..3345544333..`,`.334554433322.`,`.344443333322.`,`.343343333222.`,`.333332333222.`,`.233333323221.`,`.223333332221.`,`..2223332221..`,`...22222211...`],Ja,-1,-1)}},spiky:{down:{front:Q([`...3.....4....`,`...43..3.43...`,`..3443344433..`,`.3344554443322`,`3334554433322.`,`.334433333322.`,`.3343332333222`,`.33.33.23.322.`,`.32...3....2..`,`.2..........1.`],Ja,-1,-2)},side:{front:Q([`.....3.4......`,`....343433.3..`,`...334444333..`,`..33455443332.`,`.3345543333322`,`.3343333332222`,`.33.3.33332222`,`.3......333222`,`........332221`,`........33221.`,`.........221..`],Ja,-1,-2)},up:{front:Q([`...3.....3....`,`...33..3.33...`,`..3343334333..`,`.3334443333322`,`3333443333322.`,`.334433333222.`,`.343343333222.`,`.333332333222.`,`.233333323221.`,`.223333332221.`,`..2223332221..`,`...22222211...`],Ja,-1,-2)}},long:{down:{swayFrom:12,front:Q([`.....3443.....`,`...33444433...`,`..3345544333..`,`.334554433322.`,`.3444433.3222.`,`.34433.3..322.`,`3343.......322`,`343.........22`,`343.........21`,`33..........21`,`343........321`,`343........221`,`.33........22.`,`.32........21.`,`..2........1..`],Ja,-1,-1),back:Q([`.333333333322.`,`.333333333322.`,`.233333333221.`,`..2222222221..`],Ja,-1,9)},side:{swayFrom:11,front:Q([`.....33443....`,`...334444433..`,`..33455443332.`,`.3445543333322`,`.3443333333222`,`.33.3.33433222`,`.3.....3433222`,`.......3433221`,`.......3333221`,`.......3332221`,`.......3332221`,`.......3332221`,`.......233221.`,`........2321..`,`........221...`],Ja,-1,-1)},up:{swayFrom:12,front:Q([`.....3443.....`,`...33444433...`,`..3345544333..`,`.334554433322.`,`.344443333322.`,`.344343333222.`,`33433323332221`,`34433323332221`,`34333323332221`,`33433323322221`,`33433233322221`,`33333233322221`,`.2333233322211`,`.233223232221.`,`..22.22.221...`],Ja,-1,-1)}},ponytail:{down:{front:Q([`.....3443.....`,`...33444433...`,`..3345544333..`,`.334554433322.`,`.344433333222.`,`.33.3.32..222.`,`.3..........2.`,`.2..........1.`],Ja,-1,-1)},side:{front:Q([`.....33443....`,`...334444433..`,`..33455443332.`,`.3445543333322`,`.3443333333222`,`.3..3.3333222.`,`.3......3322..`,`........322...`],Ja,-1,-1)},up:{front:Q([`.....3443.....`,`...33444433...`,`..3345544333..`,`.334554433322.`,`.344443333322.`,`.343343333222.`,`.233332333221.`,`..2333323221..`,`...22333221...`],Ja,-1,-1)}},bun:{down:{front:Q([`.....3443.....`,`....345542....`,`...33244233...`,`..3345544333..`,`.334554433322.`,`.344433333222.`,`.3332333.3322.`,`.3..3.....2...`,`.2..........1.`],Ja,-1,-2)},side:{front:Q([`............343.`,`.....33443324543`,`...3344444334332`,`..3345544333222.`,`.3445543333322..`,`.3443333333222..`,`.33.3.3333222...`,`.3......3322....`,`........322.....`],Ja,-1,-2)},up:{front:Q([`....345543....`,`....344432....`,`....233322....`,`..3344433332..`,`.334454333322.`,`.344433333222.`,`.333333323222.`,`.233332333221.`,`..2333323221..`,`...22333221...`],Ja,-1,-2)}},bald:{down:{front:Q([`.4..........3.`,`.43........32.`,`.33........22.`,`.32........21.`,`.2..........1.`],Ja,-1,3)},side:{front:Q([`.........332.`,`........33221`,`........3222.`,`.........21..`],Ja,-1,5)},up:{front:Q([`.4..........3.`,`.43........32.`,`.343333333322.`,`.233332333221.`,`..2223332221..`,`...22222211...`],Ja,-1,3)}}},$a={full:{down:Q([`.3........2.`,`.34.4433.32.`,`.3445ss5432.`,`..44433332..`,`..34433322..`,`...343322...`,`....3322....`,`.....21.....`],{...Ya,s:[Z.BEARD,0]},0,6),side:Q([`.....2......`,`.44..32.....`,`.4433332....`,`.344332.....`,`.34433......`,`..3432......`,`..332.......`,`...2........`],Ya,0,7)},mustache:{down:Q([`...443342...`,`...3.22.2...`],Ya,0,8),side:Q([`443.........`,`.3..........`],Ya,0,8)},goatee:{down:Q([`....4432....`,`.....32.....`],Ya,0,9),side:Q([`.44.........`,`.32.........`],Ya,0,9)}},eo={hood:{down:Q([`......44......`,`....344332....`,`...34444332...`,`..3445433322..`,`.344333333322.`,`.3431111111222`,`.341........22`,`342.........22`,`342.........21`,`332.........21`,`332.........21`,`3321.......221`,`33321.....2221`,`.333222222222.`],Xa,-1,-2),side:Q([`.......444....`,`.....3443332..`,`...344443332..`,`..34544333322.`,`..34433333322.`,`.3431113333222`,`.3..1..3333222`,`.3.....3333222`,`.......3332222`,`.......3332221`,`.......3332221`,`......23332221`,`.....233332221`,`....2333332221`],Xa,-1,-2),up:Q([`......44......`,`....344332....`,`...34444332...`,`..3445433322..`,`.344333333322.`,`.3443333333222`,`.3433333333222`,`33433333323222`,`33333333323222`,`33333333323221`,`33333333323221`,`33233333232221`,`32233333232221`,`.222222222221.`],Xa,-1,-2)},wide:{down:Q([`......34433.......`,`.....3444433......`,`....aabbbbcca.....`,`..3344444443332...`,`3344444433333322..`,`.22222222222221...`],Xa,-3,-2),side:Q([`.....34433........`,`....3444433.......`,`...aabbbbcca......`,`.334444444333322..`,`334444443333332221`,`.2222222222222211.`],Xa,-3,-2),up:Q([`......33332.......`,`.....3443332......`,`....aabbbbcca.....`,`..3344443333322...`,`3344443333333222..`,`.22222222222221...`],Xa,-3,-2)},cap:{down:Q([`.....33333...eF...`,`...3344443332fF...`,`..33445443333322..`,`..3444433333332...`,`..aabbbbbbbbca....`],Xa,-3,-2),side:Q([`.....33333..eF....`,`...33444433fF.....`,`..3445443333332...`,`..34443333333322..`,`..abbbbbbbbba2....`],Xa,-3,-2),up:Q([`.....33333....eF..`,`...3344433332fF...`,`..33443333333322..`,`..3443333333332...`,`..aabbbbbbbbca....`],Xa,-3,-2)},helmet:{down:Q([`....GhGGgg....`,`...33445332...`,`..3445543322..`,`.334544333222.`,`.344443333222.`,`dccccccccccbba`,`.2.....g....2.`,`.2..........2.`,`.1..........1.`],{...Xa,1:[Z.METAL,0],2:[Z.METAL,1],3:[Z.METAL,2],4:[Z.METAL,3],5:[Z.METAL,4],a:[Z.METAL,0],b:[Z.METAL,1],c:[Z.METAL,2],d:[Z.METAL,3]},-1,-2),side:Q([`.....GhGgg....`,`....3344533...`,`...34455333...`,`..3445433332..`,`..34443333322.`,`.dccccccccbbba`,`.........22222`,`.........2322.`,`.........122..`],{...Xa,1:[Z.METAL,0],2:[Z.METAL,1],3:[Z.METAL,2],4:[Z.METAL,3],5:[Z.METAL,4],a:[Z.METAL,0],b:[Z.METAL,1],c:[Z.METAL,2],d:[Z.METAL,3]},-1,-2),up:Q([`....GhGGgg....`,`...33445332...`,`..3445433322..`,`.334433333222.`,`.343333333222.`,`dccccccccccbba`,`.2222222222222`,`.2333333333322`,`.1222222222211`],{...Xa,1:[Z.METAL,0],2:[Z.METAL,1],3:[Z.METAL,2],4:[Z.METAL,3],5:[Z.METAL,4],a:[Z.METAL,0],b:[Z.METAL,1],c:[Z.METAL,2],d:[Z.METAL,3]},-1,-2)},circlet:{down:Q([`.GGGGhjgggg.`],Xa,0,3),side:Q([`.GGhGggggg..`],Xa,0,3),up:Q([`.ggggggggGg.`],Xa,0,3)}},to={traveler:{skin:`skinLight`,hair:`hairBrown`,hairStyle:`short`,outfit:{top:`#2f9a92`,bottom:`#4a4a5e`,accent:`wood`,style:`tunic`,shirt:`cream`},cape:{color:`#a0703f`,style:`cloak`,lining:`#5a3a2a`},hat:`none`,weapon:`none`,beard:!1,gear:{satchel:!0,boots:`#4a3428`,leather:`#6a4428`},eyes:`green`},swordsman:{skin:`skinTan`,hair:`hairBlack`,hairStyle:`spiky`,outfit:{top:`#39445e`,bottom:`brown`,accent:`metal`,style:`tunic`,shirt:`cream`},cape:!1,hat:`none`,weapon:`sword`,beard:!1,gear:{scarf:`red`,pauldrons:!0,bracers:!0,boots:`black`},eyes:`brown`},merchant:{skin:`skinLight`,hair:`hairRed`,hairStyle:`short`,outfit:{top:`green`,bottom:`#6b4a34`,accent:`gold`,style:`vest`,shirt:`cream`},cape:!1,hat:`wide`,hatColor:`#7a5a3c`,hatBand:`red`,weapon:`none`,beard:`mustache`,gear:{pack:!0,boots:`brown`},build:`stout`,eyes:`brown`},cleric:{skin:`skinLight`,hair:`hairBlonde`,hairStyle:`long`,outfit:{top:`white`,bottom:`white`,accent:`blue`,style:`robe`,shirt:`white`},cape:!1,hat:`circlet`,weapon:`staff`,beard:!1,gear:{boots:`cream`,sash:`gold`,staffGem:`blue`},eyes:`blue`,blush:!0},scholar:{skin:`skinLight`,hair:`hairWhite`,hairStyle:`short`,outfit:{top:`purple`,bottom:`purple`,accent:`gold`,style:`robe`,shirt:`cream`},cape:!1,hat:`none`,weapon:`none`,beard:`goatee`,gear:{glasses:!0,book:!0,boots:`brown`},eyes:`blue`},dancer:{skin:`skinTan`,hair:`hairBlack`,hairStyle:`ponytail`,outfit:{top:`red`,bottom:`red`,accent:`gold`,style:`dancer`,shirt:`gold`},cape:!1,hat:`circlet`,weapon:`none`,beard:!1,gear:{sashes:!0,boots:`gold`},eyes:`brown`,blush:!0,female:!0},hunter:{skin:`skinTan`,hair:`hairBlonde`,hairStyle:`short`,outfit:{top:`#7a5a38`,bottom:`#3f4a36`,accent:`brown`,style:`tunic`,shirt:`cream`},cape:{color:`#3f7a3c`,style:`short`,lining:`#2b4a2c`},hat:`hood`,hatColor:`#3f7a3c`,weapon:`bow`,beard:!1,gear:{quiver:!0,boots:`brown`,gloves:`brown`},eyes:`green`},villager:{skin:`skinLight`,hair:`hairBrown`,hairStyle:`short`,outfit:{top:`cream`,bottom:`#5a6b82`,accent:`brown`,style:`tunic`,shirt:`cream`},cape:!1,hat:`none`,weapon:`none`,beard:!1,gear:{boots:`brown`},eyes:`brown`},farmer:{skin:`skinTan`,hair:`hairBrown`,hairStyle:`short`,outfit:{top:`#c9b48a`,bottom:`#3f5f88`,accent:`gold`,style:`overalls`,shirt:`#c9b48a`},cape:!1,hat:`wide`,hatColor:`thatch`,hatBand:`red`,weapon:`none`,beard:!1,gear:{boots:`brown`},eyes:`brown`},elder:{skin:`skinLight`,hair:`hairWhite`,hairStyle:`bald`,outfit:{top:`#7a6a5a`,bottom:`#5c4d3f`,accent:`brown`,style:`robe`,shirt:`cream`},cape:!1,hat:`none`,weapon:`cane`,beard:`full`,gear:{boots:`brown`,sash:`red`},build:`elder`,eyes:`brown`},child:{skin:`skinLight`,hair:`hairBlonde`,hairStyle:`ponytail`,outfit:{top:`#d9776a`,bottom:`#5a6b82`,accent:`cream`,style:`tunic`,shirt:`cream`},cape:!1,hat:`none`,weapon:`none`,beard:!1,gear:{boots:`brown`},build:`child`,eyes:`blue`,blush:!0},guard:{skin:`skinLight`,hair:`hairBrown`,hairStyle:`short`,outfit:{top:`blue`,bottom:`#4a4450`,accent:`gold`,style:`tabard`,shirt:`metal`},cape:!1,hat:`helmet`,weapon:`spear`,beard:!1,gear:{pauldrons:!0,boots:`black`,gloves:`brown`},eyes:`brown`},innkeeper:{skin:`skinLight`,hair:`hairBrown`,hairStyle:`bun`,outfit:{top:`#a8563f`,bottom:`#6e3a3a`,accent:`white`,style:`dress`,shirt:`cream`},cape:!1,hat:`none`,weapon:`none`,beard:!1,gear:{apron:`cream`,boots:`brown`},eyes:`brown`,blush:!0,female:!0},bard:{skin:`skinLight`,hair:`hairBlonde`,hairStyle:`short`,outfit:{top:`#3d5fb4`,bottom:`#5a3a24`,accent:`gold`,style:`tunic`,shirt:`cream`},cape:{color:`#8c2330`,style:`short`,lining:`#5a1420`},hat:`cap`,hatColor:`red`,hatBand:`gold`,feather:`white`,weapon:`lute`,beard:!1,gear:{boots:`brown`},eyes:`blue`}},no={brown:`#5a3a2a`,blue:`#3a5ab0`,green:`#3a7a4a`,grey:`#5a6070`,violet:`#6a3a8a`,gold:`#a8781d`},ro=[`cream`,`brown`,`green`,`blue`,`red`,`purple`,`#5a6b82`,`#8a6a4a`,`#6e3a3a`,`#3f5f5a`,`#a8563f`,`#c9b48a`,`#4a4450`],io=[`hairBrown`,`hairBrown`,`hairBlonde`,`hairBlack`,`hairRed`,`hairWhite`];function ao(e,t){let n=new c(t),r={preset:`villager`,...e},i=e.female??n.chance(.5);r.female=i,r.skin??=n.pick([`skinLight`,`skinLight`,`skinTan`,`skinDark`]),r.hair??=n.pick(io),r.hairStyle??=i?n.pick([`long`,`ponytail`,`bun`,`short`]):n.pick([`short`,`short`,`spiky`,`bald`]);let a=n.pick(ro),o=n.pick(ro);return o===a&&(o=`brown`),r.outfit={top:a,bottom:o,accent:n.pick([`brown`,`gold`,`cream`,`red`]),style:i?n.pick([`dress`,`dress`,`tunic`]):n.pick([`tunic`,`tunic`,`vest`,`overalls`]),shirt:`cream`,...e.outfit||{}},r.hat??=n.pick([`none`,`none`,`none`,`cap`,`wide`]),r.hat===`cap`&&(r.hatColor??=n.pick(ro)),r.hat===`wide`&&(r.hatColor??=n.pick([`thatch`,`#7a5a3c`])),r.beard??=!i&&r.hairStyle!==`long`&&n.chance(.3)?n.pick([`full`,`mustache`,`goatee`]):!1,r.blush??=i&&n.chance(.6),r.eyes??=n.pick(Object.keys(no)),r.gear={boots:n.pick([`brown`,`black`,`#5a3a24`]),apron:r.outfit.style===`dress`&&n.chance(.5)?`cream`:void 0,...e.gear||{}},r.gear.apron||delete r.gear.apron,r.cape??=!1,r.weapon??=`none`,r}function oo(e){if(!e||typeof e!=`object`)return{};let t={};for(let[n,r]of Object.entries(e))r!==void 0&&(t[n]=(n===`outfit`||n===`gear`)&&r&&typeof r==`object`?oo(r):r);return t}function so(e){if(typeof e==`string`)return j(e);let t=Number(e);return Number.isFinite(t)?t>>>0:1}function co(e={}){if(typeof e==`string`&&(e={preset:e}),e=oo(e),e.seed!==void 0&&(e.seed=so(e.seed)),e.randomize||e.preset===`random`){let t=e.seed??1,{randomize:n,...r}=e;e=ao({...r,preset:e.preset===`random`?`villager`:e.preset??`villager`},t),e.seed=t,e._random=!0}let t=typeof e.preset==`string`&&Object.hasOwn(to,e.preset),n=t?e.preset:String(e.preset??`villager`),r=e._random?{...to.villager,gear:{}}:t?to[n]:to.villager,i={...r,...e,outfit:{...r.outfit,...e.outfit||{}},gear:{...r.gear,...e.gear||{}}};i.preset=n,i.seed=e.seed??j(String(n)),e.seed!==void 0&&!e._random&&(i.jitter={top:!(e.outfit&&e.outfit.top),bottom:!(e.outfit&&e.outfit.bottom),hair:e.hair===void 0,eyes:e.eyes===void 0});let a=e.cape===void 0?r.cape:e.cape;a=a===!0?{color:r.cape?.color??`brown`,style:r.cape?.style??`cape`}:typeof a==`string`&&a!==`none`||typeof a==`number`||a&&a.isColor?{color:a,style:r.cape&&r.cape.style||`cape`}:!a||a===`none`?null:{...r.cape||{},...a},i.cape=a,i.hat=typeof i.hat==`string`&&Object.hasOwn(eo,i.hat)?i.hat:`none`,i.weapon=i.weapon||`none`;let o=i.beard;return o===!0&&(o=`full`),o===`none`&&(o=null),(typeof o==`string`&&!Object.hasOwn($a,o)||typeof o==`number`||o&&o.isColor)&&(i.beardColor=i.beardColor??o,o=`full`),i.beard=o||null,i.hairStyle=typeof i.hairStyle==`string`&&Object.hasOwn(Qa,i.hairStyle)?i.hairStyle:`short`,i.build=i.build||`normal`,i.rig=lo(i.build),i}function lo(e){if(e===`child`)return{cx:16,ground:30,headY:11,torsoTop:22,waist:25,hem:27,hip:26,robeHem:29,armTop:23,armLen:2,half:3,legW:2,legGap:1,bootH:1,child:!0};let t={cx:16,ground:30,headY:4,torsoTop:15,waist:21,hem:24,hip:24,robeHem:28,armTop:16,armLen:5,half:4,legW:3,legGap:2,bootH:2,child:!1};return e===`stout`&&(t.half=5),e===`elder`&&(t.headY=5,t.torsoTop=16,t.armTop=17,t.armLen=4),t}function uo(e){let t=Array(Ha).fill(null),n=new c(e.seed),r=(e,n,r)=>{t[e]=Va(n,r)},i=(e,t)=>e===!0||e===!1||e==null||e===``?t:e;if(r(Z.SKIN,e.skin||`skinLight`,`skin`),r(Z.HAIR,e.hair||`hairBrown`,`hair`),r(Z.BEARD,e.beardColor||e.hair||`hairBrown`,`hair`),r(Z.TOP,e.outfit.top||`cream`),r(Z.BOTTOM,e.outfit.bottom||`brown`),r(Z.ACCENT,e.outfit.accent||`gold`),r(Z.SHIRT,e.outfit.shirt||`cream`),r(Z.CAPE,i(e.cape?.color,`brown`)),t[Z.CAPEIN]=e.cape?.lining?Va(e.cape.lining):t[Z.CAPE].map(e=>Et(e,-.25)),r(Z.HAT,e.hatColor||(e.hat===`hood`?e.cape?.color||`green`:`brown`)),r(Z.HATBAND,e.hatBand||e.outfit.accent||`red`),r(Z.BOOT,i(e.gear.boots,`brown`)),r(Z.METAL,`metal`),r(Z.WOOD,`wood`),r(Z.GOLD,`gold`),r(Z.LEATHER,i(e.gear.leather,`brown`)),r(Z.WHITE,i(e.gear.apron,e.gear.apron===!0?`cream`:`white`)),r(Z.SCARF,i(e.gear.scarf,`red`)),r(Z.PACK,i(e.gear.packColor,`#b09a70`)),r(Z.GEM,i(e.gear.staffGem,`blue`)),r(Z.STRING,`cream`),r(Z.FEATHER,i(e.feather,`white`)),r(Z.BOOK,i(e.gear.bookColor,`red`)),r(Z.BELT,i(e.gear.belt,`brown`)),r(Z.SASH,i(e.gear.sash,i(e.outfit.accent,`gold`))),r(Z.BONE,i(e.gear.beads,`#d8ccae`)),r(Z.GEL,`#4fbf5f`),e.gear.gemGlow&&(t[Z.GEM]=t[Z.GEM].map(Ba)),t[Z.LINE]=[Pa,Pa,Pa,Pa,Pa],e.jitter){let n=new c(e.seed^1540483477),r=(e,t,n,r=1)=>e.map(e=>{let[i,a,o]=yt(e);return[...ot([i+t,Math.min(1,a*r),Math.max(0,Math.min(1,o+n))]),e[3]??255]});e.jitter.top&&(t[Z.TOP]=r(t[Z.TOP],n.range(-14,14),n.range(-.05,.05),n.range(.85,1.1))),e.jitter.bottom&&(t[Z.BOTTOM]=r(t[Z.BOTTOM],n.range(-12,12),n.range(-.05,.04))),e.jitter.hair&&(t[Z.HAIR]=r(t[Z.HAIR],n.range(-6,6),n.range(-.04,.04))),e.jitter.eyes&&(e.eyes=n.pick(Object.keys(no)))}let a=t[Z.SKIN];t[Z.BLUSH]=[0,1,2,3,4].map(()=>He(a[2],`#e0607a`,.35));let o=La(le(no,e.eyes)||e.eyes||n.pick(Object.values(no)),no.brown),s=He(Pa,o,.25);t[Z.EYE]=[Pa,s,[...Te(o)],Et(o,.3),[255,255,255,255]];for(let e=0;e<Ha;e++)t[e]||(t[e]=t[Z.TOP]);return t}var fo=[{key:`idle0`,bob:0,br:0,walk:-1},{key:`idle1`,bob:0,br:1,walk:-1},{key:`walk0`,bob:0,br:0,walk:0},{key:`walk1`,bob:-1,br:0,walk:1},{key:`walk2`,bob:0,br:0,walk:2},{key:`walk3`,bob:-1,br:0,walk:3}];function po(e){if(e.lag)return e.lag;if(e.walk<0)return{dy:e.br?-1:0,sway:0,trail:0};let t=(e.walk+3)%4;return{dy:(t===1||t===3?-1:0)-e.bob,sway:[1,0,-1,0][t],trail:e.walk===1||e.walk===3?2:1}}function mo(e,t){return t<=1?2:e===0?3:e===t-1?1:2}function ho(e,t,n,r){let i=t.rig,a=n.act?fs(n,r):null,o=a?a.lifts:[[0,0],[0,0],[0,1],[0,2],[1,0],[2,0]][n.walk+2]||[0,0],s=i.hip+n.bob,c=i.child?[i.cx-3,i.cx+1]:[i.cx-4,i.cx+1];a&&(c[0]-=a.spread,c[1]+=a.spread);let l=t.outfit.style===`robe`||t.outfit.style===`dress`;for(let t=0;t<2;t++){let n=o[t],a=c[t],u=i.ground-n;e.begin(t===1?`sides`:null,1);for(let t=s;t<=u;t++){let n=t>u-i.bootH;for(let o=0;o<i.legW;o++){let c=mo(o,i.legW);t<=s+1&&(c=Math.min(c,1)),n?(c=t===u?1:mo(o,i.legW),r&&t===u&&(c=0),e.set(a+o,t,Z.BOOT,c)):e.set(a+o,t,Z.BOTTOM,l?Math.max(0,c-1):c)}}!r&&n===0&&!i.child&&e.set(t===0?a-1:a+i.legW,u,Z.BOOT,t===0?2:1),e.end()}}function go(e){switch(e.walk){case 0:return[-1,1];case 2:return[1,-1];default:return[0,0]}}function _o(e,t,n,r){let i=t.rig,a=n.bob+n.br,o=i.torsoTop+a,s=i.waist+a,c=i.hem+n.bob,l=i.cx,u=i.half,d=t.outfit.style,f=po(n),p=l-u,m=l+u-1;e.begin(null);for(let t=o;t<s;t++){let n=+(t===o);for(let r=p+n;r<=m-n;r++){let n=mo(r-p,m-p+1);t===o&&(n=Math.min(n,1)),e.set(r,t,Z.TOP,n)}}if(d===`robe`||d===`dress`||d===`dancer`){let t=d===`dancer`?i.ground-1:i.robeHem+0,r=d===`robe`?Z.TOP:Z.BOTTOM;for(let a=s;a<=t+n.bob;a++){let o=(a-s)/Math.max(1,t+n.bob-s),c=Math.round(o*(i.child?1:2)),u=a>=t+n.bob-1?f.sway:0,h=p-c+(a===t+n.bob?Math.max(0,u):0),g=m+c+(a===t+n.bob?Math.min(0,u):0);for(let i=h;i<=g;i++){let o=mo(i-h,g-h+1),c=i-l;a>s+1&&(c===-2||c===2)&&(o=Math.max(1,o-1)),a>s+2&&c===0&&d!==`dancer`&&(o=Math.min(3,o+0)),a===t+n.bob&&(o=Math.max(0,o-1)),e.set(i,a,r,o)}}}else for(let t=s;t<=c;t++){let n=+(t>s),r=p-(t===c?n:0)-0,i=m+(t===c?n:0),a=d===`overalls`?Z.BOTTOM:Z.TOP;for(let n=r;n<=i;n++){let o=mo(n-r,i-r+1);t===c&&(o=Math.max(1,o-1)),t>s&&(n===l-2||n===l+1)&&d===`tunic`&&(o=Math.max(1,o-1)),e.set(n,t,a,o)}}if(e.end(),!r&&(d===`tunic`||d===`dress`||d===`tabard`||d===`overalls`)&&(e.over(p+1,o+1,Z.TOP,3),e.over(p+1,o+2,Z.TOP,3),e.over(p+2,o+1,Z.TOP,3)),r){if((d===`tunic`||d===`vest`)&&(e.set(p+1,o+1,Z.TOP,3),e.set(p+2,o+1,Z.TOP,3),e.set(m-1,o+2,Z.TOP,1)),d===`overalls`){e.set(l-2,o,Z.BOTTOM,2),e.set(l+1,o,Z.BOTTOM,1);for(let t=o+1;t<s;t++)e.set(l-1-Math.floor((s-t)/3),t,Z.BOTTOM,2),e.set(l+Math.floor((s-t)/3),t,Z.BOTTOM,1)}if(d===`tabard`){for(let t=o;t<=c+1;t++)for(let n=l-2;n<=l+1;n++)e.set(n,t,Z.TOP,n===l-2?3:n===l+1?1:2);for(let t=o+1;t<s;t++)e.set(p,t,Z.METAL,t&1?3:2),e.set(m,t,Z.METAL,t&1?1:2)}if(d===`dancer`){for(let t=p;t<=m;t++)e.set(t,s-1,Z.SKIN,t===p?3:t===m?1:2);for(let t=p;t<=m;t++)e.set(t,s-2,Z.GOLD,t===m?2:3)}}else if(d===`robe`){e.set(l-1,o,Z.SHIRT,2),e.set(l,o,Z.SHIRT,1);for(let t=o+1;t<=i.robeHem+n.bob;t++)e.set(l-0,t,Z.ACCENT,t<s?3:2);for(let t=o+1;t<=i.robeHem+n.bob;t++)e.set(l-1,t,Z.ACCENT,3);e.set(l-1,o+1,Z.ACCENT,4)}else if(d===`tunic`)e.set(l-1,o,Z.TOP,0),e.set(l,o,Z.TOP,0),e.set(l-1,o+1,Z.TOP,1),e.set(l-2,o,Z.TOP,2),e.set(l+1,o,Z.TOP,1);else if(d===`vest`){for(let t=o;t<s;t++)e.set(l-1,t,Z.SHIRT,t===o?1:3),e.set(l,t,Z.SHIRT,t===o?1:2);e.set(l-2,o+1,Z.GOLD,3),e.set(l+1,o+1,Z.GOLD,2),e.set(l-2,o+3,Z.GOLD,3),e.set(l+1,o+3,Z.GOLD,2)}else if(d===`overalls`){for(let t=o+2;t<s;t++)for(let n=l-2;n<=l+1;n++)e.set(n,t,Z.BOTTOM,n===l-2?3:n===l+1?1:2);e.set(l-3,o,Z.BOTTOM,2),e.set(l-3,o+1,Z.BOTTOM,2),e.set(l+2,o,Z.BOTTOM,1),e.set(l+2,o+1,Z.BOTTOM,1),e.set(l-2,o+2,Z.GOLD,3),e.set(l+1,o+2,Z.GOLD,2),e.set(l-1,o+3,Z.BOTTOM,1),e.set(l,o+3,Z.BOTTOM,1)}else if(d===`tabard`){for(let t=o;t<=c+1;t++)for(let n=l-2;n<=l+1;n++){let r=n===l-2?3:n===l+1?1:2;e.set(n,t,Z.TOP,t===c+1?Math.max(0,r-1):r)}e.set(l-1,o+2,Z.GOLD,4),e.set(l,o+2,Z.GOLD,3),e.set(l-1,o+3,Z.GOLD,3),e.set(l,o+3,Z.GOLD,2);for(let t=o+1;t<s;t++)e.set(p,t,Z.METAL,t&1?3:2),e.set(m,t,Z.METAL,t&1?1:2)}else if(d===`dress`)e.set(l-1,o,Z.TOP,0),e.set(l,o,Z.TOP,0),e.set(l-2,o,Z.SHIRT,3),e.set(l+1,o,Z.SHIRT,2);else if(d===`dancer`){e.set(l-1,o,Z.SKIN,2),e.set(l,o,Z.SKIN,1);for(let t=p;t<=m;t++)e.set(t,s-1,Z.SKIN,t===p?3:t===m?1:2);for(let t=p;t<=m;t++)e.set(t,s-2,Z.GOLD,t===m?2:3);e.set(l-1,s-1,Z.SKIN,1)}if(d===`tunic`||d===`vest`||d===`tabard`){for(let t=p;t<=m;t++)e.set(t,s,Z.BELT,t===p?3:t===m?1:2);r||(e.set(l-1,s,Z.GOLD,4),e.set(l,s,Z.GOLD,2))}else if(d===`robe`){for(let t=p;t<=m;t++)e.set(t,s,Z.SASH,t===p?3:t===m?1:2);r?(e.set(l-2,s+1,Z.SASH,2),e.set(l-2,s+2,Z.SASH,1)):(e.set(l+1,s+1,Z.SASH,1),e.set(l+1,s+2,Z.SASH,2),e.set(l+2,s+3,Z.SASH,1))}else if(d===`dress`){for(let t=p;t<=m;t++)e.set(t,s,Z.ACCENT,t===p?3:t===m?1:2);r&&(e.set(l-1,s+1,Z.ACCENT,3),e.set(l,s+1,Z.ACCENT,2),e.set(l-2,s+2,Z.ACCENT,2),e.set(l+1,s+2,Z.ACCENT,1))}else if(d===`dancer`)for(let t=p-1;t<=m+1;t++)e.set(t,s,Z.GOLD,t<=p?4:t>=m?2:3);if(t.gear.apron&&!r){for(let t=s+1;t<=(d===`dress`?i.robeHem-1:c)+n.bob;t++){let n=2+ +(t>s+2);for(let r=l-n;r<=l+n-1;r++)e.set(r,t,Z.WHITE,r===l-n?3:r===l+n-1?1:2)}for(let t=l-2;t<=l+1;t++)e.set(t,o+1,Z.WHITE,3);for(let t=o+2;t<s;t++)for(let n=l-2;n<=l+1;n++)e.set(n,t,Z.WHITE,n===l+1?1:2);e.set(l-1,s+3,Z.WHITE,1)}}function vo(e,t,n,r){let i=t.rig,a=n.bob+n.br,o=go(n),s=i.half,c=t.outfit.style,l=c===`vest`||c===`overalls`?Z.SHIRT:c===`tabard`?Z.METAL:c===`dancer`?Z.SKIN:Z.TOP,u=c===`robe`;for(let n=0;n<2;n++){let d=r?-o[n]:o[n],f=n===0?i.cx-s-2:i.cx+s,p=i.armTop+a,m=i.armLen+(d>0?0:d);e.begin(`sides`,1);for(let t=p;t<p+m;t++){for(let r=0;r<2;r++){let i=r===0?2:1;t===p&&(i=n===0?3:2),l===Z.SKIN&&(i=n===0?r===0?3:2:r===0?2:1),e.set(f+r,t,l,i)}u&&t>=p+m-2&&e.set(n===0?f-1:f+2,t,Z.TOP,n===0?2:1)}u&&(e.set(f,p+m-1,Z.ACCENT,3),e.set(f+1,p+m-1,Z.ACCENT,2),e.set(n===0?f-1:f+2,p+m-1,Z.ACCENT,2)),t.gear.bracers&&!i.child&&(e.set(f,p+m-1,Z.METAL,3),e.set(f+1,p+m-1,Z.METAL,2)),c===`dancer`&&(e.set(f,p+m-1,Z.GOLD,3),e.set(f+1,p+m-1,Z.GOLD,2));let h=p+m,g=t.gear.gloves?Z.LEATHER:Z.SKIN;if(e.set(f,h,g,n===0?3:2),e.set(f+1,h,g,n===0?2:1),i.child||(e.set(f,h+1,g,1),e.set(f+1,h+1,g,1)),e.end(),t.gear.pauldrons&&!i.child){e.begin(`below`,1);let t={1:[Z.METAL,0],2:[Z.METAL,1],3:[Z.METAL,2],4:[Z.METAL,3],5:[Z.METAL,4]},r=n===0?[`.45.`,`4543`,`2332`]:[`.43.`,`3432`,`1221`];e.tpl(Q(r,t),f-1,p-1),e.end()}}}function yo(e,t,n,r,i){let a=r+6,o=n+3,s=n+8;if(i&&os.has(i.act)){As(e,t,n,r);return}if(t.face===`fierce`){is(e,t,n,r);return}if(e.set(o,a,Z.EYE,0),e.set(o,a+1,Z.EYE,2),e.set(s,a,Z.EYE,0),e.set(s,a+1,Z.EYE,2),t.female&&(e.set(o-1,a,Z.EYE,1),e.set(s+1,a,Z.EYE,1)),(!t.beard||t.beard===`goatee`)&&e.set(n+6,r+9,Z.SKIN,1),t.blush&&(e.set(n+2,r+8,Z.BLUSH,2),e.set(n+9,r+8,Z.BLUSH,2)),t.gear.glasses){for(let t of[o,s])e.set(t-1,a,Z.GOLD,3),e.set(t+1,a,Z.GOLD,2),e.set(t-1,a+1,Z.GOLD,2),e.set(t+1,a+1,Z.GOLD,1),e.set(t,a-1,Z.GOLD,4),e.set(t,a+2,Z.GOLD,1),e.set(t,a,Z.WHITE,3);for(let t=o+2;t<=s-2;t++)e.set(t,a,Z.GOLD,2)}}function bo(e,t,n,r,i){let a=r+6;if(i&&os.has(i.act)){js(e,t,n,r);return}if(t.face===`fierce`){as(e,t,n,r);return}if(e.set(n+2,a,Z.EYE,0),e.set(n+2,a+1,Z.EYE,2),t.female&&e.set(n+3,a,Z.EYE,1),t.beard||e.set(n+1,r+9,Z.SKIN,1),e.set(n+6,a,Z.SKIN,1),e.set(n+6,a+1,Z.SKIN,1),e.set(n+7,a,Z.SKIN,2),e.set(n+7,a+1,Z.SKIN,0),t.blush&&e.set(n+3,r+8,Z.BLUSH,2),t.gear.glasses){e.set(n+1,a,Z.GOLD,4),e.set(n+3,a,Z.GOLD,3),e.set(n+2,a-1,Z.GOLD,4),e.set(n+2,a+2,Z.GOLD,2),e.set(n+1,a+1,Z.GOLD,3),e.set(n+3,a+1,Z.GOLD,2);for(let t=n+4;t<=n+6;t++)e.set(t,a-1,Z.GOLD,2)}}function xo(e,t,n,r,i,a,o=0){if(!i||!a&&!o){e.tpl(t,n,r);return}let s=t.oy||0;e.tpl({...t,rows:t.rows.slice(0,i)},n,r);for(let a=0;a<o;a++)e.tpl({...t,rows:[t.rows[i]],oy:s+i+a},n,r);e.tpl({...t,rows:t.rows.slice(i),oy:s+i+o},n+a,r)}var So={1:[Z.CAPE,0],2:[Z.CAPE,1],3:[Z.CAPE,2],4:[Z.CAPE,3],5:[Z.CAPE,4],i:[Z.CAPEIN,1],I:[Z.CAPEIN,2],j:[Z.CAPEIN,3],g:[Z.GOLD,2],G:[Z.GOLD,4]},Co=Q([`..3444433322..`,`.344443333322.`,`.34444Gg33322.`,`344444Ii333221`,`34444I..i33221`,`34443I..i32221`,`34443I..i32221`,`.3333i..i2221.`],So,-7,-2),wo=Q([`.34444Gg33322.`,`343........221`,`.3..........1.`],So,-7,0),To=Q([`.....34443....`,`...G44443332..`,`..34444433322.`,`.344444333222.`,`.34443333222..`,`..33332222I...`,`...2...2......`],So,-5,-1),Eo=Q([`.2IjjjjI2.`,`3444444332`,`3444433322`,`.34443322.`,`..343322..`,`...3322...`,`....32....`],So,-5,-1);function Do(e,t,n){let r=t.rig,i=t.cape.style===`short`,a=n.bob+n.br,o=po(n),s=r.torsoTop+a+2,c=(i?r.waist+a+1:r.robeHem)+o.dy;e.begin(null);for(let t=s;t<=c;t++){let n=(t-s)/Math.max(1,c-s),a=r.half+2+ +(n>.7&&!i),l=t>=c-1?o.sway:0,u=r.cx-a+l,d=r.cx+a-1+l;for(let n=u;n<=d;n++)n===u?e.set(n,t,Z.CAPE,t===c?1:2):n===d?e.set(n,t,Z.CAPE,t===c?0:1):e.set(n,t,Z.CAPEIN,t===c?1:2)}e.end()}function Oo(e,t,n){let r=t.rig,i=n.bob+n.br,a=r.torsoTop+i;e.begin(`below`,1),e.tpl(t.cape.style===`cloak`?Co:wo,r.cx,a),e.end()}function ko(e,t,n){let r=t.rig,i=n.bob+n.br,a=po(n),o=r.torsoTop+i,s=t.cape.style===`cloak`,c=(t.cape.style===`short`?o+7:r.robeHem)+a.dy;e.begin(null);for(let t=o;t<=c;t++){let n=(t-o)/Math.max(1,c-o),i=(t===o?r.half+1:r.half+2)+ +(n>.6),s=t>=c-2?a.sway:0,l=r.cx-i+s,u=r.cx+i-1+s;for(let n=l;n<=u;n++){let i=mo(n-l,u-l+1),a=n-r.cx-s;t>o+3&&(a===-3||a===2?i=1:(a===-2||a===3)&&(i=Math.min(3,i+1))),t===c&&(i=Math.max(0,i-1)),(t!==c||a!==-3&&a!==2)&&e.set(n,t,Z.CAPE,i)}}if(e.end(),s)e.begin(`all`,1),e.tpl(Eo,r.cx,o),e.end();else{e.begin(null);for(let t=r.cx-r.half-1;t<=r.cx+r.half;t++)e.set(t,o,Z.CAPE,t<r.cx-2?4:t>r.cx+2?2:3);e.end()}}function Ao(e,t,n,r,i){i===`spear`?(e.set(n,r-3,Z.METAL,4),e.set(n-1,r-2,Z.METAL,3),e.set(n,r-2,Z.METAL,4),e.set(n+1,r-2,Z.METAL,2),e.set(n-1,r-1,Z.METAL,2),e.set(n,r-1,Z.METAL,3),e.set(n+1,r-1,Z.METAL,1),e.set(n,r,Z.METAL,2),e.set(n-1,r+1,Z.SCARF,3),e.set(n,r+1,Z.GOLD,3),e.set(n+1,r+1,Z.SCARF,1)):i===`staff`?(e.set(n-1,r-1,Z.GOLD,3),e.set(n,r-2,Z.GOLD,4),e.set(n+1,r-1,Z.GOLD,2),e.set(n-1,r,Z.GOLD,3),e.set(n+1,r,Z.GOLD,1),e.set(n,r-1,Z.GEM,4),e.set(n,r,Z.GEM,2),e.set(n,r+1,Z.GOLD,2)):i===`cane`&&(e.set(n,r,Z.WOOD,3),e.set(n+1,r-1,Z.WOOD,3),e.set(n+2,r-1,Z.WOOD,2),e.set(n+3,r,Z.WOOD,1))}function jo(e,t){return e===`spear`||e===`staff`?t-16:t-3}var Mo=.125;function No(e,t,n,r,i){let a=t.rig,o=jo(i,r),s=a.ground;e.begin(null);for(let t=o;t<=s;t++)e.set(n,t,Z.WOOD,t<r?3:2);Ao(e,t,n,o,i),e.end()}function Po(e,t,n,r,i){e.begin(`sides`,0),n.act?e.set(r,i-1,Z.GOLD,2):(e.set(r,i-2,Z.GOLD,4),e.set(r-1,i-1,Z.GOLD,3),e.set(r,i-1,Z.LEATHER,2),e.set(r+1,i-1,Z.GOLD,2));for(let t=0;t<6;t++)e.set(r+ +(t>3),i+t,Z.LEATHER,t===5?1:2);e.set(r+1,i+5,Z.METAL,3),e.end()}function Fo(e,t,n,r){let i=t.rig,a=n.bob+n.br,o=i.torsoTop+a,s=r===`down`;if(t.gear.pack&&s){e.begin(null);let t=i.half+4,n=o-5;for(let r=n+2;r<=o+8;r++)e.set(i.cx-t,r,Z.PACK,3),e.set(i.cx-t+1,r,Z.PACK,2),e.set(i.cx+t-2,r,Z.PACK,1),e.set(i.cx+t-1,r,Z.PACK,1);for(let n=i.cx-t;n<=i.cx+t-1;n++)e.set(n,o+8,Z.PACK,0);for(let r=i.cx-t-1;r<=i.cx+t;r++){let a=r===i.cx-t-1||r===i.cx+t;e.set(r,n,Z.CAPE,a?2:3),e.set(r,n+1,Z.CAPE,a?1:r<i.cx?3:2),e.set(r,n+2,Z.CAPE,+!a)}e.set(i.cx-t-1,n+1,Z.CAPEIN,2),e.set(i.cx+t,n+1,Z.CAPEIN,1),e.set(i.cx-t+2,n,Z.LEATHER,2),e.set(i.cx-t+2,n+1,Z.LEATHER,1),e.set(i.cx-t+2,n+2,Z.LEATHER,0),e.set(i.cx+t-3,n,Z.LEATHER,2),e.set(i.cx+t-3,n+1,Z.LEATHER,1),e.set(i.cx+t-3,n+2,Z.LEATHER,0),e.end()}if(t.gear.pack&&!s){e.begin(s?null:`all`,0);let t=i.half+3,n=o-4;for(let r=n;r<=o+9;r++)for(let n=i.cx-t;n<=i.cx+t-1;n++){let a=mo(n-(i.cx-t),2*t);r===o+9&&(a=1),e.set(n,r,Z.PACK,a)}for(let r=i.cx-t-1;r<=i.cx+t;r++)e.set(r,n-1,Z.CAPE,3),e.set(r,n-2,Z.CAPE,r<i.cx?3:2),e.set(r,n,Z.CAPE,1);if(e.set(i.cx-t-1,n-2,Z.CAPE,1),e.set(i.cx+t,n-1,Z.CAPE,0),!s){for(let r=i.cx-t+1;r<=i.cx+t-2;r++)e.set(r,n+4,Z.LEATHER,2);for(let r=n+1;r<=n+4;r++)e.set(i.cx-t+1,r,Z.PACK,1),e.set(i.cx+t-2,r,Z.PACK,1);e.set(i.cx-1,n+4,Z.GOLD,4),e.set(i.cx,n+4,Z.GOLD,2);for(let t=n+6;t<=o+7;t++)e.set(i.cx-3,t,Z.LEATHER,2),e.set(i.cx+2,t,Z.LEATHER,1);e.set(i.cx+t,o+3,Z.METAL,2),e.set(i.cx+t,o+4,Z.METAL,1),e.set(i.cx+t+1,o+3,Z.METAL,1),e.set(i.cx+t+1,o+4,Z.METAL,0)}e.end()}if(t.gear.quiver){e.begin(s?null:`all`,1);let t=s?i.cx+i.half:i.cx+2;for(let n=0;n<9;n++){let r=t-Math.floor(n/3)+0,i=o-3+n;e.set(r,i,Z.LEATHER,2),e.set(r+1,i,Z.LEATHER,1)}e.set(t,o-4,Z.WHITE,3),e.set(t+1,o-5,Z.WHITE,4),e.set(t+2,o-4,Z.SCARF,3),e.set(t+1,o-4,Z.SCARF,2),e.end()}if(t.weapon===`bow`&&!n.act){e.begin(s?null:`all`,1);let t=s?i.cx-i.half-2:i.cx-i.half,n=[];for(let e=0;e<=14;e++){let r=e/14,a=t+Math.round(r*(i.half*2+2)+Math.sin(r*Math.PI)*-2),s=o-3+Math.round(r*12);n.push([a,s])}for(let[t,r]of n)e.set(t,r,Z.WOOD,3);if(!s)for(let n=0;n<=12;n++)e.set(t+1+Math.round(n/12*(i.half*2)),o-2+n,Z.STRING,3);e.end()}if(t.weapon===`lute`){if(e.begin(s?null:`all`,1),s){let t=i.cx+i.half+1;for(let n=0;n<5;n++)e.set(t-Math.floor(n/3),o-4+n,Z.WOOD,2);e.set(t,o-5,Z.WOOD,1),e.set(t+1,o-5,Z.WOOD,1)}else{let t=i.cx-2,n=o+3;e.tpl(Q([`.3332.`,`344332`,`343332`,`343322`,`.3322.`,`..22..`],{2:[Z.WOOD,1],3:[Z.WOOD,2],4:[Z.WOOD,3]}),t-1,n);for(let r=1;r<=6;r++)e.set(t+3+Math.floor(r/2),n-r,Z.WOOD,2);e.set(t+6,n-7,Z.WOOD,1),e.set(t+7,n-7,Z.WOOD,1);for(let t=0;t<7;t++)e.set(i.cx-i.half+t,o+t,Z.LEATHER,2)}e.end()}}function Io(e,t,n,r){let i=t.rig,a=n.bob+n.br,o=i.torsoTop+a;e.begin(null);let s=i.waist-i.torsoTop,c=!r&&t.cape&&t.cape.style===`cloak`;for(let t=0;t<=s&&!c;t++){let n=r?i.cx+i.half-1-Math.round(t*(i.half*2-1)/s):i.cx-i.half+Math.round(t*(i.half*2-1)/s);e.set(n,o+t,Z.LEATHER,1)}e.end(),e.begin(`all`,0);let l=r?i.cx-i.half-1:i.cx+i.half-1,u=i.waist+a+1,d=r?[`.4443`,`43332`,`33322`,`.222.`]:[`4443.`,`34g32`,`33322`,`.222.`];e.tpl(Q(d,{2:[Z.LEATHER,1],3:[Z.LEATHER,2],4:[Z.LEATHER,3],g:[Z.GOLD,4]}),l-1,u),e.end()}function Lo(e,t,n,r){let i=t.rig,a=n.bob+n.br,o=i.torsoTop+a,s=po(n);e.begin(`below`,0);for(let t=i.cx-i.half;t<=i.cx+i.half-1;t++){let n=t-(i.cx-i.half);e.set(t,o,Z.SCARF,n<2?3:n>2*i.half-3?1:2),e.set(t,o-1,Z.SCARF,n<2?4:n>2*i.half-3?2:3)}if(r){e.set(i.cx-2,o+1,Z.SCARF,3),e.set(i.cx-1,o+1,Z.SCARF,3),e.set(i.cx,o+1,Z.SCARF,2);let t=6+s.dy;for(let n=2;n<=t;n++){let r=n>=t-1?s.sway:0,a=i.cx-2+r;e.set(a,o+n,Z.SCARF,3),e.set(a+1,o+n,Z.SCARF,n===t?1:2),n<=t-2&&e.set(a+2,o+n,Z.SCARF,1)}}else{let t=i.cx+1;e.set(t,o+1,Z.SCARF,2),e.set(t+1,o+1,Z.SCARF,1);for(let n=2;n<=5;n++)e.set(t+1+(n>3?+(s.sway>0):0),o+n,Z.SCARF,n===5?1:2)}e.end()}function Ro(e,t,n,r){let i=t.rig,a=n.bob,o=po(n),s=i.waist+a;e.begin(null);for(let t=0;t<2;t++){let n=t===0?-1:1,r=n<0?i.cx-i.half-1:i.cx+i.half;for(let i=0;i<7+o.dy;i++){let a=Math.floor(i/3)*n+(i>3?o.sway:0);e.set(r+a,s+i,Z.GOLD,t===0?3:2)}}e.end()}function zo(e,t,n,r){let i=t.rig,a=n.bob+n.br,o=i.cx-6,s=i.headY+a,c=r?`up`:`down`,l=po(n);e.begin(null),e.tpl(Za[c],o,s),e.end(),r||(e.begin(null),yo(e,t,o,s,n),e.end());let u=t.hat,d=Qa[t.hairStyle][c];u===`hood`?r||(e.begin(`below`,1),e.tpl(Q([`.33432332.`,`..3.3..2..`],Ja),o+1,s+3),e.end()):(e.begin(r?null:`below`,1),xo(e,d.front,o,s,d.swayFrom,l.sway,Math.max(0,l.dy)),e.end(),t.hairStyle===`ponytail`&&Vo(e,t,o,s,l,r)),t.beard&&!r&&(e.begin(null),e.tpl($a[t.beard].down,o,s),e.end()),t.ears===`pointed`&&u!==`hood`&&u!==`helmet`&&$o(e,o,s,r),u!==`none`&&eo[u]&&(e.begin(u===`wide`||u===`cap`?`below`:u===`circlet`?null:`below`,1),e.tpl(eo[u][c],o,s,Bo(t,eo[u][c])),e.end()),u===`hood`&&t.feather&&ts(e,o,s,c)}function Bo(e,t){return e.feather?null:{...t.legend,f:null,F:null,e:null}}function Vo(e,t,n,r,i,a){if(a){e.begin(`all`,0);let t=n+5,a=12+i.dy;for(let n=3;n<=a;n++){let o=t+(n>8?i.sway:0),s=n>a-2?1:2,c=n%3!=0;e.set(o,r+n,Z.HAIR,c?3:2),s>1&&e.set(o+1,r+n,Z.HAIR,c?2:1),n>4&&n<a-2&&e.set(o-1,r+n,Z.HAIR,2)}e.end(),e.begin(null),e.set(t-1,r+3,Z.ACCENT,3),e.set(t,r+3,Z.ACCENT,4),e.set(t+1,r+3,Z.ACCENT,2),e.end();return}e.begin(null);{let t=n+11;for(let n=0;n<7+i.dy;n++){let a=t+ +(n>2)+(n>4?i.sway:0);e.set(a,r+1+n,Z.HAIR,n<3?2:1),n>1&&n<6&&e.set(a+1,r+1+n,Z.HAIR,1)}}e.end()}function Ho(e,t,n,r){let i=t.rig,a=n.bob+n.br,o=n.act?hs(t,n,r?`up`:`down`):null;o&&ps(e,o),r||(t.cape&&Do(e,t,n),Fo(e,t,n,`down`),Qa[t.hairStyle].down.back&&t.hat!==`hood`&&(e.begin(null),e.tpl(Qa[t.hairStyle].down.back,i.cx-6,i.headY+a),e.end()));let s=[`staff`,`spear`,`cane`].includes(t.weapon)?t.weapon:null,c=go(n),l=e=>i.armTop+a+i.armLen+(r?-c[e]:c[e]);if(s&&r&&!o&&No(e,t,i.cx+i.half+2,l(1),s),o&&_s(e,t,o,`behind`),o&&ms(e),ho(e,t,n,r),o&&ps(e,o),_o(e,t,n,r),t.gear.beads&&ns(e,t,n,r),t.gear.sashes&&Ro(e,t,n,r),t.gear.satchel&&!t.cape&&Io(e,t,n,r),t.gear.satchel&&t.cape&&!r&&Io(e,t,n,r),t.weapon===`sword`&&!r&&Po(e,t,n,i.cx+i.half+1,i.waist+a+1),t.weapon===`sword`&&r&&Po(e,t,n,i.cx-i.half-2,i.waist+a+1),o?_s(e,t,o,`under`):vo(e,t,n,r),t.gear.book&&!r&&!o){e.begin(`all`,1);let t=i.cx-i.half-3,n=l(0)-2;e.tpl(Q([`2332`,`3443`,`3443`,`2332`,`1221`],{1:[Z.BOOK,0],2:[Z.BOOK,1],3:[Z.BOOK,2],4:[Z.WHITE,3]}),t,n),e.set(t+2,n+2,Z.SKIN,2),e.set(t+3,n+2,Z.SKIN,1),e.end()}if(s&&!r&&!o&&No(e,t,i.cx-i.half-3,l(0),s),s&&!r&&!o&&(e.begin(null),e.set(i.cx-i.half-4,l(0),Z.SKIN,3),e.set(i.cx-i.half-2,l(0),Z.SKIN,2),e.set(i.cx-i.half-3,l(0)+1,Z.SKIN,1),e.end()),t.gear.scarf&&!r&&Lo(e,t,n,!1),t.cape&&!r&&Oo(e,t,n),zo(e,t,n,r),s===`staff`&&!o){let n=+!!r,a=r?i.cx+i.half+2:i.cx-i.half-3;e.begin(null),Ao(e,t,a,jo(`staff`,l(n)),`staff`),e.end()}r&&(t.cape&&ko(e,t,n),Fo(e,t,n,`up`),t.gear.scarf&&Lo(e,t,n,!0)),o&&_s(e,t,o,`over`)}function Uo(e,t){let n=t?.67:1,r=(e,t,r=0,i=!1)=>({knee:Math.round(e*n),ankle:Math.round(t*n),lift:Math.round(r*n),tip:i});if(e.act)return ds(e,r);switch(e.walk){case 0:return[r(-2,-3),r(1,3,0,!0)];case 1:return[r(0,0),r(-2,-1,2)];case 2:return[r(1,3,0,!0),r(-2,-3)];case 3:return[r(-2,-1,2),r(0,0)];default:return[r(-1,-1),r(1,1)]}}function Wo(e,t,n,r,i){let a=t.rig,o=a.hip+n.bob,s=a.ground-r.lift-(a.bootH-1),c=a.ground-r.lift,l=Math.round((o+s)/2),u=a.cx-(a.child?1:2)+ +!!i,d=a.child?2:3,f=i?-1:0;e.begin(i?null:`sides`,0);for(let t=o;t<s;t++){let n;n=Math.round(t<=l?r.knee*((t-o)/Math.max(1,l-o)):r.knee+(r.ankle-r.knee)*((t-l)/Math.max(1,s-l)));let i=t<=l?d:Math.max(2,d-1);for(let r=0;r<i;r++){let a=mo(r,i)+f;t===o&&(a=Math.min(a,1+f)),e.set(u+n+r,t,Z.BOTTOM,Math.max(0,a))}}let p=u+r.ankle;for(let t=s;t<=c;t++){let n=t===c,i=a.child?2:3;for(let a=0;a<i;a++){let o=n?a===0?2:1:mo(a,i);e.set(p+a-(n&&!r.tip?1:0),t,Z.BOOT,Math.max(0,o+f))}!n&&!a.child&&e.set(p,t,Z.BOOT,Math.max(0,3+f))}r.tip&&e.set(p+(a.child?2:3),c-1,Z.BOOT,Math.max(0,1+f)),e.end()}function Go(e,t,n,r,i){let a=t.rig,o=n.bob+n.br,s=a.cx-1,c=a.armTop+o,l=a.armLen,u=t.outfit.style,d=u===`vest`||u===`overalls`?Z.SHIRT:u===`tabard`?Z.METAL:u===`dancer`?Z.SKIN:Z.TOP;e.begin(r?`all`:null,1);for(let t=0;t<l;t++){let n=t/Math.max(1,l-1),a=s+Math.round(i*n),o=r?3:1,f=r?2:0;d===Z.SKIN&&(o=r?3:1,f=r?2:1),e.set(a,c+t,d,o),e.set(a+1,c+t,d,f),u===`robe`&&t>=l-2&&e.set(a+(i>0?2:-1),c+t,Z.TOP,r?2:0)}let f=s+i,p=c+l;u===`robe`&&(e.set(f,p-1,Z.ACCENT,r?3:1),e.set(f+1,p-1,Z.ACCENT,r?2:1)),t.gear.bracers&&!a.child&&(e.set(f,p-1,Z.METAL,r?3:1),e.set(f+1,p-1,Z.METAL,r?2:1)),u===`dancer`&&(e.set(f,p-1,Z.GOLD,r?3:1),e.set(f+1,p-1,Z.GOLD,r?2:1));let m=t.gear.gloves?Z.LEATHER:Z.SKIN;return e.set(f,p,m,r?3:1),e.set(f+1,p,m,r?2:1),a.child||e.set(f+(i<0?0:1),p+1,m,+!!r),e.end(),[f,p]}function Ko(e,t,n){let r=t.rig,i=n.bob+n.br,a=r.torsoTop+i,o=r.waist+i,s=r.hem+n.bob,c=t.outfit.style,l=po(n),u=r.cx-(r.child?3:4)+1,d=r.cx+(r.child?2:3)-(r.half>=5?-1:0);e.begin(null);for(let t=a;t<o;t++){let n=+(t===a);for(let r=u+n;r<=d-n;r++){let n=mo(r-u,d-u+1);t===a&&(n=Math.min(n,1)),e.set(r,t,Z.TOP,n)}}if(c===`robe`||c===`dress`||c===`dancer`){let t=(c===`dancer`?r.ground-1:r.robeHem)+n.bob,i=c===`robe`?Z.TOP:Z.BOTTOM;for(let a=o;a<=t;a++){let s=(a-o)/Math.max(1,t-o),c=Math.round(s*1.5),f=a>=t-2&&n.walk>=0?l.trail-1:0,p=u-c+ +(a>=t-1&&n.walk>=0),m=d+c+f;for(let n=p;n<=m;n++){let s=mo(n-p,m-p+1);a>o+1&&n===r.cx&&(s=Math.max(1,s-1)),a===t&&(s=Math.max(0,s-1)),e.set(n,a,i,s)}}}else for(let t=o;t<=s;t++){let r=u-+(t===s),i=d+ +(t>=s-1)+(t===s&&n.walk,0),a=c===`overalls`?Z.BOTTOM:Z.TOP;for(let n=r;n<=i;n++){let o=mo(n-r,i-r+1);t===s&&(o=Math.max(1,o-1)),e.set(n,t,a,o)}}if(e.end(),c===`tunic`||c===`vest`||c===`tabard`){for(let t=u;t<=d;t++)e.set(t,o,Z.BELT,t===u?3:t===d?1:2);e.set(u,o,Z.GOLD,3)}else if(c===`robe`){for(let t=u;t<=d;t++)e.set(t,o,Z.SASH,t===u?3:t===d?1:2);e.set(d+1,o+1,Z.SASH,1),e.set(d+1,o+2,Z.SASH,1);for(let t=a+1;t<=r.robeHem+n.bob;t++)t!==o&&e.set(u-+(t>o+2),t,Z.ACCENT,3)}else if(c===`dress`){for(let t=u;t<=d;t++)e.set(t,o,Z.ACCENT,2);e.set(d+1,o,Z.ACCENT,1),e.set(d+2,o+1,Z.ACCENT,1)}else if(c===`dancer`){for(let t=u;t<=d;t++)e.set(t,o-1,Z.SKIN,t===u?3:2);for(let t=u;t<=d;t++)e.set(t,o-2,Z.GOLD,3);for(let t=u-1;t<=d+1;t++)e.set(t,o,Z.GOLD,3)}else if(c===`overalls`){for(let t=a+2;t<o;t++)e.set(u,t,Z.BOTTOM,3),e.set(u+1,t,Z.BOTTOM,2);e.set(u+2,a,Z.BOTTOM,2),e.set(u+2,a+1,Z.BOTTOM,2),e.set(u+1,a+2,Z.GOLD,3)}if(c===`tabard`){for(let t=a;t<=s+1;t++)e.set(u,t,Z.TOP,3),e.set(u+1,t,Z.TOP,2);for(let t=a+1;t<o;t++)for(let n=u+2;n<=d;n++)e.set(n,t,Z.METAL,n+t&1?1:2)}if(t.gear.apron)for(let t=a+1;t<=(c===`dress`?r.robeHem-1:s)+n.bob;t++)e.set(u-+(t>o+1),t,Z.WHITE,3),t>o&&e.set(u-(t>o+1?0:-1),t,Z.WHITE,2);return{L:u,R:d,top:a,waist:o}}function qo(e,t,n,r){let i=t.rig,a=n.bob+n.br,o=po(n),s=Uo(n,i.child),c=0,l=i.child?2:3;n.walk===0&&(c=l),n.walk===2&&(c=-l),(n.walk===1||n.walk===3)&&(c=0);let u=i.cx-6,d=i.headY+a,f=[`staff`,`spear`,`cane`].includes(t.weapon)?t.weapon:null,p=n.act?hs(t,n,r?`right`:`left`):null;p&&ps(e,p),t.cape&&Qo(e,t,n,`back`),t.hairStyle===`long`&&t.hat;let m=e=>-2-Math.sign(e),h=null;if(p)_s(e,t,p,`behind`);else{let i=Go(e,t,n,!1,f&&!r?m(-c):-c);f&&!r&&(h=Jo(e,t,i[0]-1,i[1],f))}p&&ms(e),Wo(e,t,n,s[1],!0),p&&ps(e,p),Xo(e,t,n),p&&ms(e),Wo(e,t,n,s[0],!1),p&&ps(e,p);let g=Ko(e,t,n);if(t.gear.beads&&rs(e,t,n,g),t.gear.sashes){e.begin(null);for(let t=0;t<7+o.dy;t++)e.set(g.R+1+Math.floor(t/2)+(n.walk>=0?Math.floor(t/3):0),i.waist+n.bob+t,Z.GOLD,2);e.end()}if(t.weapon===`sword`&&Yo(e,t,n,r),t.gear.satchel){e.begin(`all`,0);let t=r?g.R-1:g.L,n=r?[`.443`,`3332`,`.22.`]:[`4443`,`3g32`,`3322`,`.22.`];if(e.tpl(Q(n,{2:[Z.LEATHER,1],3:[Z.LEATHER,2],4:[Z.LEATHER,3],g:[Z.GOLD,4]}),t,i.waist+a+1),e.end(),!r){e.begin(null);for(let t=g.top;t<i.waist+a+1;t++)e.set(g.L+2+Math.floor((t-g.top)/4),t,Z.LEATHER,1);e.end()}}if(t.gear.scarf&&Zo(e,t,n,g),t.gear.pauldrons&&!i.child){e.begin(`below`,1);let t=i.cx-2,n=i.armTop+a-1;e.tpl(Q([`.344.`,`34432`,`33221`],{1:[Z.METAL,0],2:[Z.METAL,1],3:[Z.METAL,2],4:[Z.METAL,3]}),t,n),e.end()}let _=p?_s(e,t,p,`under`):Go(e,t,n,!0,f&&r?m(c):c);if(t.gear.pauldrons&&!i.child){e.begin(null);let t=i.cx-2,n=i.armTop+a-1;e.tpl(Q([`.344.`,`34432`,`33221`],{1:[Z.METAL,0],2:[Z.METAL,1],3:[Z.METAL,2],4:[Z.METAL,3]}),t,n),e.end()}if(f&&r&&!p&&(h=Jo(e,t,_[0]-1,_[1],f,!0)),t.gear.book&&!p&&(e.begin(`all`,1),e.tpl(Q([`233`,`343`,`343`,`221`],{1:[Z.BOOK,0],2:[Z.BOOK,1],3:[Z.BOOK,2],4:[Z.WHITE,3]}),_[0]-2,_[1]-3),e.set(_[0],_[1],Z.SKIN,3),e.end()),t.cape&&Qo(e,t,n,`front`),e.begin(null),e.tpl(Za.side,u,d),bo(e,t,u,d,n),e.end(),t.hat!==`hood`){e.begin(`below`,1);let r=Qa[t.hairStyle].side;if(xo(e,r.front,u,d,r.swayFrom,n.walk>=0?o.trail-1:0,Math.max(0,o.dy)),e.end(),t.hairStyle===`ponytail`){e.begin(null);let t=u+11,r=d+1;e.set(t,r,Z.SCARF,3);for(let i=1;i<9+o.dy;i++){let a=t+1+Math.floor(i/3)+(n.walk>=0&&i>3?o.trail-1:0);e.set(a,r+i,Z.HAIR,i%3==1?3:2),i<7&&e.set(a-1,r+i,Z.HAIR,3),i>2&&i<6&&e.set(a+1,r+i,Z.HAIR,1)}e.end()}}else e.begin(`below`,1),e.tpl(Q([`3432`,`3.3.`],Ja),u+1,d+3),e.end();if(t.beard&&(e.begin(null),e.tpl($a[t.beard].side,u,d),e.end()),t.ears===`pointed`&&t.hat!==`hood`&&t.hat!==`helmet`&&es(e,u,d),t.hat!==`none`&&eo[t.hat]&&(e.begin(t.hat===`circlet`?null:`below`,1),e.tpl(eo[t.hat].side,u,d,Bo(t,eo[t.hat].side)),e.end()),t.hat===`hood`&&t.feather&&ts(e,u,d,`side`),h&&f===`staff`&&(e.begin(null),Ao(e,t,h.x,h.y,`staff`),e.end()),t.weapon===`lute`){e.begin(`all`,1);let t=i.cx+3,n=i.torsoTop+a+2;e.tpl(Q([`.33.`,`3432`,`3432`,`3322`,`.22.`],{2:[Z.WOOD,1],3:[Z.WOOD,2],4:[Z.WOOD,3]}),t,n);for(let r=1;r<=5;r++)e.set(t+1-Math.floor(r/3),n-r,Z.WOOD,2);e.end()}p&&_s(e,t,p,`over`)}function Jo(e,t,n,r,i,a=!1){let o=t.rig,s=jo(i,r),c=i===`staff`?Mo:0,l=e=>n-Math.round((r-e)*c);e.begin(null);for(let t=s;t<=o.ground;t++)e.set(l(t),t,Z.WOOD,a?3:2);return i===`cane`?(e.set(n,s,Z.WOOD,3),e.set(n-1,s-1,Z.WOOD,3),e.set(n-2,s-1,Z.WOOD,2),e.set(n-3,s,Z.WOOD,1)):Ao(e,t,l(s),s,i),e.end(),{x:l(s),y:s}}function Yo(e,t,n,r){let i=t.rig,a=n.bob+n.br,o=i.waist+a;e.begin(r?null:`all`,0);let s=i.cx-4;n.act||(e.set(s-1,o-2,Z.GOLD,4),e.set(s,o-1,Z.LEATHER,2)),e.set(s+1,o-1,Z.GOLD,3),e.set(s+1,o,Z.GOLD,2),n.act||e.set(s+1,o-2,Z.GOLD,3);for(let t=0;t<9;t++){let n=s+2+t,i=o+Math.floor(t/2.5);e.set(n,i,Z.LEATHER,r?1:2),e.set(n,i+1,Z.LEATHER,+!r)}e.set(s+11,o+4,Z.METAL,3),e.end()}function Xo(e,t,n){let r=t.rig,i=n.bob+n.br,a=r.torsoTop+i;if(t.gear.pack){e.begin(null);let t=r.cx+2,n=a-4;for(let r=n;r<=a+9;r++)for(let n=t;n<=t+6;n++)e.set(n,r,Z.PACK,n===t?3:n>=t+5?1:2);for(let r=t-1;r<=t+7;r++)e.set(r,n-1,Z.CAPE,3),e.set(r,n-2,Z.CAPE,2),e.set(r,n,Z.CAPE,1);e.set(t-1,n-1,Z.CAPE,4),e.set(t-1,n-2,Z.CAPE,3);for(let r=n+1;r<=a+8;r++)e.set(t+3,r,Z.LEATHER,1);e.set(t+3,n+4,Z.GOLD,4),e.set(t+7,a+3,Z.METAL,2),e.set(t+7,a+4,Z.METAL,1),e.end()}if(t.gear.quiver){e.begin(null);let t=r.cx+3;for(let n=0;n<9;n++)e.set(t+Math.floor(n/4),a-2+n,Z.LEATHER,2),e.set(t+1+Math.floor(n/4),a-2+n,Z.LEATHER,1);e.set(t,a-3,Z.WHITE,4),e.set(t-1,a-4,Z.WHITE,3),e.set(t+1,a-3,Z.SCARF,3),e.set(t+1,a-4,Z.SCARF,2),e.end()}if(t.weapon===`bow`&&!n.act){e.begin(null);let t=r.cx+1;for(let n=0;n<=14;n++){let r=n/14,i=t+Math.round(Math.sin(r*Math.PI)*3);e.set(i,a-3+n,Z.WOOD,3)}for(let n=1;n<14;n++)e.set(t,a-3+n,Z.STRING,3);e.end()}}function Zo(e,t,n,r){t.rig;let i=po(n),a=r.top;e.begin(`below`,0);for(let t=r.L;t<=r.R+1;t++)e.set(t,a-1,Z.SCARF,t===r.L?4:3),e.set(t,a,Z.SCARF,t===r.L?3:2);let o=n.walk>=0;for(let t=0;t<6;t++){let n=r.R+1+t,s=a+(o?Math.floor(t/3)+((t+i.sway)%2==0?0:1)-1+ +(i.dy>0):t),c=o?n:r.R+1+Math.floor(t/3);e.set(c,s+1,Z.SCARF,t%2?1:2),o&&t<4&&e.set(c,s+2,Z.SCARF,1)}e.end()}function Qo(e,t,n,r){let i=t.rig,a=n.bob+n.br,o=po(n),s=i.torsoTop+a,c=n.walk>=0,l=(t.cape.style===`short`?s+6:i.robeHem-+!!c)+(c?o.dy:0);if(r===`back`){e.begin(null);for(let t=s;t<=l;t++){let n=(t-s)/Math.max(1,l-s),r=Math.round(c?n*n*(1.5+o.trail):n*1.2),a=i.cx-1+(c?Math.round(n*1):0),u=i.cx+4+r;for(let n=a;n<=u;n++){let r=n===a?3:n>=u-1?1:2;if(t>s+4&&n===u-3&&(r=1),t>s+4&&n===u-4&&(r=3),t===l&&(r=Math.max(0,r-1)),c&&n===u&&t>s+3){e.set(n,t,Z.CAPEIN,2);continue}e.set(n,t,Z.CAPE,r)}}e.end()}else if(t.cape.style===`cloak`)e.begin(`below`,1),e.tpl(To,i.cx,s),e.end();else{e.begin(`below`,1);let t=s;for(let n=i.cx-3;n<=i.cx+4;n++)e.set(n,t,Z.CAPE,n<i.cx?3:2),e.set(n,t+1,Z.CAPE,n<i.cx-1?3:1);e.set(i.cx-3,t,Z.GOLD,4),e.end()}}function $o(e,t,n,r){e.begin(null);for(let[r,i,a]of[[-1,7,3],[-1,6,2],[-2,6,3],[-2,5,4],[-3,5,3],[-3,4,4],[-4,3,3],[0,6,2],[0,7,1]])e.set(t+r,n+i,Z.SKIN,a);for(let[r,i,a]of[[12,7,1],[12,6,1],[13,6,2],[13,5,2],[14,5,1],[14,4,2],[15,3,1],[11,6,1],[11,7,0]])e.set(t+r,n+i,Z.SKIN,a);r||(e.set(t-1,n+6,Z.SKIN,1),e.set(t+12,n+6,Z.SKIN,0)),e.end()}function es(e,t,n){e.begin(`all`,1);for(let[r,i,a]of[[13,4,3],[14,4,4],[11,5,3],[12,5,3],[13,5,2],[8,6,3],[9,6,3],[10,6,3],[11,6,2],[12,6,1],[7,7,2],[8,7,1],[9,7,1],[10,7,1],[7,8,1]])e.set(t+r,n+i,Z.SKIN,a);e.set(t+9,n+7,Z.BLUSH,1),e.set(t+10,n+7,Z.SKIN,0),e.end()}function ts(e,t,n,r){e.begin(`all`,1);let i=r===`side`?[[9,-1,3],[10,-2,4],[11,-3,3],[12,-4,1],[10,-1,2],[11,-1,3],[12,-2,3],[13,-2,1],[9,-2,2],[9,-3,3],[9,-4,1]]:r===`up`?[[4,-1,3],[3,-2,3],[2,-3,1],[6,-1,3],[6,-2,4],[6,-3,3],[6,-4,1],[8,-1,2],[9,-2,3],[10,-3,1]]:[[8,-1,3],[9,-2,4],[10,-3,3],[11,-4,1],[7,-2,3],[7,-3,4],[7,-4,1],[9,-1,2],[10,-1,3],[11,-2,3],[12,-2,1]];for(let[r,a,o]of i)e.set(t+r,n+a,o===1?Z.SCARF:Z.FEATHER,o===1?2:o);e.end()}function ns(e,t,n,r){let i=t.rig,a=i.torsoTop+n.bob+n.br;e.begin(null);let o=i.half*2;for(let t=0;t<o;t++){let n=i.cx-i.half+t,s=r?0:+(Math.min(t,o-1-t)>=2);e.set(n,a+s,Z.BONE,t%2?2:4)}r||(e.set(i.cx-1,a+2,Z.BONE,4),e.set(i.cx,a+2,Z.BONE,3),e.set(i.cx-1,a+3,Z.BONE,2)),e.end()}function rs(e,t,n,r){e.begin(null);for(let t=r.L;t<=r.R;t++)e.set(t,r.top+ +(t<=r.L+1),Z.BONE,t%2?2:4);e.set(r.L,r.top+2,Z.BONE,3),e.end()}function is(e,t,n,r){let i=r+6,a=n+3,o=n+8;e.set(a,i,Z.EYE,3),e.set(a,i+1,Z.EYE,2),e.set(a+1,i+1,Z.EYE,0),e.set(o,i,Z.EYE,3),e.set(o,i+1,Z.EYE,2),e.set(o-1,i+1,Z.EYE,0),e.set(a-1,i-2,Z.SKIN,0),e.set(a,i-1,Z.SKIN,0),e.set(a+1,i-1,Z.SKIN,0),e.set(o+1,i-2,Z.SKIN,0),e.set(o,i-1,Z.SKIN,0),e.set(o-1,i-1,Z.SKIN,0),e.set(n+6,r+8,Z.SKIN,1);for(let t=n+4;t<=n+7;t++)e.set(t,r+9,Z.EYE,0);e.set(n+5,r+9,Z.EYE,4)}function as(e,t,n,r){let i=r+6;e.set(n+2,i,Z.EYE,3),e.set(n+2,i+1,Z.EYE,2),e.set(n+3,i+1,Z.EYE,0),e.set(n+1,i-1,Z.SKIN,0),e.set(n+2,i-1,Z.SKIN,0),e.set(n+3,i-2,Z.SKIN,0),e.set(n,r+8,Z.SKIN,1),e.set(n+1,r+9,Z.EYE,0),e.set(n+2,r+9,Z.EYE,0),e.set(n+1,r+10,Z.EYE,4)}var os=new Set([`hurt`,`down`]),ss=[{key:`wind`,bob:0,br:0,walk:-1,act:`wind`,phase:0,lag:{dy:0,sway:-1,trail:1}},{key:`slash`,bob:0,br:0,walk:-1,act:`slash`,phase:1,lag:{dy:0,sway:1,trail:3}},{key:`follow`,bob:0,br:0,walk:-1,act:`follow`,phase:2,lag:{dy:1,sway:1,trail:2}},{key:`backhand`,bob:0,br:0,walk:-1,act:`backhand`,phase:1,lag:{dy:0,sway:-1,trail:3}},{key:`thrust`,bob:1,br:0,walk:-1,act:`thrust`,phase:1,lag:{dy:0,sway:1,trail:3}},{key:`spin`,bob:0,br:0,walk:-1,act:`spin`,phase:1,lag:{dy:-1,sway:1,trail:4}},{key:`cast`,bob:0,br:-1,walk:-1,act:`cast`,phase:-1,lag:{dy:0,sway:0,trail:1}},{key:`aim`,bob:0,br:0,walk:-1,act:`aim`,phase:-1,lag:{dy:0,sway:0,trail:1}},{key:`hurt`,bob:0,br:0,walk:-1,act:`hurt`,phase:-1,lag:{dy:-1,sway:-1,trail:0}},{key:`tuck`,bob:4,br:0,walk:-1,act:`tuck`,phase:-1,lag:{dy:0,sway:0,trail:2}},{key:`roll`,bob:4,br:0,walk:-1,act:`roll`,phase:-1,lag:{dy:0,sway:0,trail:2}},{key:`down`,bob:0,br:0,walk:-1,act:`down`,phase:-1,lag:{dy:0,sway:0,trail:1}}],cs={wind:{side:{lean:[1,0],w:{h:[4,2],l:`behind`,d:[1,-.45]},o:{h:[-3,3],l:`under`},legs:`stance`},down:{w:{h:[-2,-2],d:[-.55,-1]},o:{h:[1,4]},legs:{spread:1}},up:{w:{h:[2,4],d:[.7,.8]},o:{h:[-1,4]},legs:{spread:1}}},slash:{side:{lean:[-1,0],w:{h:[-5,3],l:`under`,d:[-1,.3]},o:{h:[3,3],l:`behind`},legs:`lunge`},down:{w:{h:[7,4],d:[.9,.8]},o:{h:[-1,4]},legs:{spread:1}},up:{w:{h:[-8,-1],l:`behind`,d:[-.7,-1]},o:{h:[1,4]},legs:{spread:1}}},follow:{side:{lean:[-1,0],w:{h:[-4,5],l:`under`,d:[-.45,1]},o:{h:[3,2],l:`behind`},legs:`stance`},down:{w:{h:[9,4],d:[1,.35]},o:{h:[1,3]},legs:{spread:1}},up:{w:{h:[-9,3],l:`behind`,d:[-1,.35]},o:{h:[-1,3]},legs:{spread:1}}},backhand:{side:{lean:[0,0],w:{h:[-5,1],l:`under`,d:[-1,-.7]},o:{h:[3,4],l:`behind`},legs:`stance`},down:{w:{h:[-2,4],d:[-1,.55]},o:{h:[-1,4]},legs:{spread:1}},up:{w:{h:[0,-2],d:[.55,-1]},o:{h:[-1,4]},legs:{spread:1}}},thrust:{side:{lean:[-2,0],w:{h:[-5,2],l:`under`,d:[-1,0]},o:{h:[4,1],l:`behind`},legs:`lunge`},down:{w:{h:[4,3],d:[0,1]},o:{h:[-4,3]},legs:{spread:1,lifts:[0,1]}},up:{w:{h:[2,-2],d:[0,-1]},o:{h:[-2,3]},legs:{spread:1,lifts:[1,0]}}},spin:{side:{lean:[0,0],w:{h:[5,1],l:`behind`,d:[1,.1]},o:{h:[-5,1],l:`under`},legs:`wide`},down:{w:{h:[-3,0],d:[-1,.2]},o:{h:[3,0]},legs:{spread:2}},up:{w:{h:[3,0],d:[1,.2]},o:{h:[-3,0]},legs:{spread:2}}},cast:{side:{lean:[0,0],w:{h:[-7,-2],l:`under`,d:[-.2,-1]},o:{h:[-6,-1],l:`under`},legs:`idle`},down:{w:{h:[-3,-4],d:[0,-1]},o:{h:[3,-4]},legs:{spread:0}},up:{w:{h:[3,-4],d:[0,-1]},o:{h:[-3,-4]},legs:{spread:0}}},aim:{side:{lean:[0,0],w:{h:[1,5],l:`behind`,d:[.35,1]},o:{h:[-3,-2],l:`over`,item:`flask`},legs:`idle`},down:{w:{h:[0,5],d:[-.25,1]},o:{h:[-4,-3],l:`over`,item:`flask`},legs:{spread:0}},up:{w:{h:[0,5],d:[.25,1]},o:{h:[3,-3],l:`behind`,item:`flask`},legs:{spread:0}}},hurt:{side:{lean:[1,0],w:{h:[4,3],l:`behind`,d:[.8,.7]},o:{h:[-3,1],l:`under`},legs:`stagger`},down:{lean:[0,-1],w:{h:[-3,1],d:[-1,.8]},o:{h:[3,1]},legs:{spread:1,lifts:[1,0]}},up:{lean:[0,1],w:{h:[3,1],d:[1,.8]},o:{h:[-3,1]},legs:{spread:1,lifts:[0,1]}}},tuck:{side:{lean:[0,0],w:{h:[-2,3],l:`under`,d:[-.6,1]},o:{h:[-3,3],l:`under`},legs:`crouch`},down:{w:{h:[3,3],d:[-.7,-1]},o:{h:[-3,3]},legs:{spread:0}},up:{w:{h:[-3,3],d:[.7,-1]},o:{h:[3,3]},legs:{spread:0}}},down:{side:{lean:[0,0],w:{h:[1,5],l:`under`,d:[.2,1]},o:{h:[-1,5],l:`under`},legs:`idle`},down:{w:{h:[-1,5],d:[-.2,1]},o:{h:[1,5]},legs:{spread:0}},up:{w:{h:[1,5],d:[.2,1]},o:{h:[-1,5]},legs:{spread:0}}}},ls={aim:{side:{w:{h:[-1,0],hc:[0,1],l:`over`},o:{h:[-6,1],hc:[-7,1],l:`over`},b:[-1,.35],drawn:!0,legs:`stance`},down:{w:{h:[-3,1],hc:[5,1],l:`over`},o:{h:[-3,3],hc:[4,1],l:`over`},b:[1,.25],drawn:!0,legs:{spread:1}},up:{w:{h:[-1,0],hc:[-3,-3],l:`over`},o:{h:[2,1],hc:[-3,-2],l:`under`},b:[-1,-.3],drawn:!0,legs:{spread:1}}},follow:{side:{w:{h:[3,0],hc:[3,-3],l:`behind`},o:{h:[-6,1],hc:[-6,-4],l:`over`},b:[-1,0],drawn:!1,legs:`stance`},down:{w:{h:[-1,4],hc:[2,0]},o:{h:[-3,3],hc:[3,-2],l:`over`},b:[1,.3],drawn:!1,legs:{spread:1}},up:{w:{h:[2,2],hc:[-1,0]},o:{h:[2,1],hc:[-3,-2],l:`under`},b:[-1,-.3],drawn:!1,legs:{spread:1}}},cast:{side:{w:{h:[-2,-2],l:`over`},o:{h:[-5,-3],l:`over`},b:[-.6,-1],drawn:!0,legs:`idle`},down:{w:{h:[1,-1]},o:{h:[4,-4]},b:[.35,-1],drawn:!0,legs:{spread:0}},up:{w:{h:[-1,-1]},o:{h:[-4,-4]},b:[-.35,-1],drawn:!0,legs:{spread:0}}},thrust:{side:{lean:[-2,0],w:{h:[-4,3],l:`under`},o:{h:[-6,1],l:`under`},b:[-1,0],drawn:!1,legs:`lunge`},down:{w:{h:[4,3]},o:{h:[-4,3]},b:[-.5,1],drawn:!1,legs:{spread:1,lifts:[0,1]}},up:{w:{h:[-3,2]},o:{h:[3,2]},b:[.5,-1],drawn:!1,legs:{spread:1}}}},us={cast:{side:{w:{h:[-4,-3],hc:[-6,-5],l:`over`,d:[-.12,-1]},o:{h:[-4,-1],hc:[-5,-3],l:`over`},legs:`idle`},down:{w:{h:[-4,-3],hc:[-3,-6],d:[0,-1]},o:{h:[4,-3],hc:[3,-4]},legs:{spread:0}},up:{w:{h:[4,-3],hc:[3,-6],d:[0,-1]},o:{h:[-4,-3],hc:[-3,-4]},legs:{spread:0}}},aim:{side:{lean:[-1,0],w:{h:[-5,1],l:`under`,d:[-1,-.4]},o:{h:[3,3],l:`behind`},legs:`stance`},down:{w:{h:[4,3],d:[.35,1]},o:{h:[1,3]},legs:{spread:1}},up:{w:{h:[0,-2],d:[.3,-1]},o:{h:[-1,3]},legs:{spread:1}}},tuck:{side:{w:{h:[-3,2],l:`under`,d:[-.2,-1]},o:{h:[-2,3],l:`under`},legs:`crouch`},down:{w:{h:[0,2],d:[0,-1]},o:{h:[-3,3]},legs:{spread:0}},up:{w:{h:[0,2],d:[0,-1]},o:{h:[3,3]},legs:{spread:0}}}};function ds(e,t){switch(e.act===`roll`?`crouch`:cs[e.act]?.side.legs??`idle`){case`stance`:return[t(-2,-3),t(2,3,0,!0)];case`lunge`:return[t(-3,-4),t(3,5,0,!0)];case`wide`:return[t(-2,-4),t(2,4)];case`stagger`:return[t(-1,-2),t(2,3,0,!0)];case`crouch`:return[t(-2,-2),t(1,1)];default:return[t(-1,-1),t(1,1)]}}function fs(e,t){let n=cs[e.act]?.[t?`up`:`down`]?.legs??{};return{spread:n.spread??0,lifts:n.lifts??[0,0]}}function ps(e,t){e.ox=t.lean[0],e.oy=t.lean[1]}function ms(e){e.ox=0,e.oy=0}function hs(e,t,n){let r=e.rig,i=n===`left`||n===`right`,a=i?`side`:n,o=cs[t.act]??cs.down,s=e.weapon===`bow`?ls[t.act]?.[a]:null,c=e.weapon===`staff`?us[t.act]?.[a]:null,l={...o[a],...c||{},...s||{}},u=r.child?.75:1,d=r.child?.6:1,f=t.bob+t.br,p=r.armTop+f,m=e=>{if(i)return[r.cx-1,p];let t=[r.cx-r.half-2,p],a=[r.cx+r.half,p];return e===`w`==(n===`down`)?t:a},h=n===`right`,g=[];for(let e of[`w`,`o`]){let t=l[e];if(!t)continue;let[a,o]=m(e),s=a+(r.child&&t.hc?t.hc[0]:Math.round(t.h[0]*u)),c=o+(r.child&&t.hc?t.hc[1]:Math.round(t.h[1]*d)),f=i?e===`w`!==h:!1,p=t.l??`under`;i&&!f&&p===`behind`&&(p=`under`),g.push({which:e,sx:a,sy:o,hx:s,hy:c,near:!i||!f,layer:p,d:t.d??null,item:t.item??null,view:n})}let _=e.weapon===`bow`?{b:l.b??(i?[-1,0]:n===`down`?[-.5,1]:[.5,-1]),drawn:!!l.drawn}:null;return{lean:l.lean??[0,0],arms:g,bow:_,key:a,view:n,child:r.child}}function gs(e){let t=e.outfit.style;return t===`vest`||t===`overalls`?Z.SHIRT:t===`tabard`?Z.METAL:t===`dancer`?Z.SKIN:Z.TOP}function _s(e,t,n,r){let i;for(let a of n.arms)if(a.layer===r){if(vs(e,t,a),i=[a.hx,a.hy],a.which===`w`&&t.weapon!==`bow`&&Ss(e,t,n,a),a.which===`o`&&t.weapon===`bow`){Ts(e,t,n,a);let r=n.arms.find(e=>e.which===`w`);n.bow.drawn&&r&&Es(e,t,n,r)}a.item===`flask`&&t.weapon!==`bow`&&t.weapon!==`staff`&&Ds(e,a.hx,a.hy,n.view)}return i}function vs(e,t,n){let r=t.rig,i=gs(t),a=t.gear.gloves?Z.LEATHER:Z.SKIN,o=n.near&&(n.view!==`up`||n.which===`o`)?3:n.near?2:1;e.begin(n.near?`all`:null,1);let s=n.hx-n.sx,c=n.hy-n.sy,l=Math.max(Math.abs(s),Math.abs(c),1),u=Math.abs(c)>=Math.abs(s);for(let t=0;t<l;t++){let r=Math.round(n.sx+s*t/l),a=Math.round(n.sy+c*t/l),d=t===0;e.set(r,a,i,d?Math.min(4,o+1):o),u?e.set(r+1,a,i,o-1):e.set(r,a+1,i,o-1)}let d=Math.round(n.sx+s*(l-1)/l),f=Math.round(n.sy+c*(l-1)/l);t.gear.bracers&&!r.child&&(e.set(d,f,Z.METAL,o),e.set(u?d+1:d,u?f:f+1,Z.METAL,o-1)),t.outfit.style===`robe`&&(e.set(d,f,Z.ACCENT,o),e.set(u?d+1:d,u?f:f+1,Z.ACCENT,o-1)),e.set(n.hx,n.hy,a,o),e.set(n.hx+1,n.hy,a,o-1),r.child||(e.set(n.hx,n.hy+1,a,o-1),e.set(n.hx+1,n.hy+1,a,Math.max(0,o-2))),e.end()}function ys(e){let t=Math.hypot(e[0],e[1])||1;return[e[0]/t,e[1]/t]}var bs=null,xs=(e,t)=>{let n=e+bs.ox,r=t+bs.oy;return n>=2&&n<=29&&r>=2&&r<=30};function Ss(e,t,n,r){if(!r.d)return;let i=ys(r.d),a=r.hx+.5,o=r.hy+(n.child?0:.5);t.weapon===`sword`?Cs(e,a,o,i,n.child?4:5,r.near):(t.weapon===`staff`||t.weapon===`spear`||t.weapon===`cane`)&&ws(e,t,a,o,i,6,2,t.weapon,r.near)}function Cs(e,t,n,r,i,a){let[o,s]=r,c=-s,l=o;e.begin(`all`,0);let u=(e,r=0)=>[Math.round(t+o*e+c*r-.5),Math.round(n+s*e+l*r-.5)],d=(t,n,r)=>{xs(t[0],t[1])&&e.set(t[0],t[1],n,r)};d(u(-1.4),Z.GOLD,3),d(u(1.3,-1),Z.GOLD,4),d(u(1.3),Z.GOLD,3),d(u(1.3,1),Z.GOLD,2);for(let e=0;e<i;e++){let t=2.2+e,n=e===i-1;d(u(t),Z.METAL,n?3:4),!n&&e<i-2&&Math.abs(o)>.35&&Math.abs(s)>.35&&d(u(t+.5,s>0==o>0?.6:-.6),Z.METAL,a?2:1)}e.end()}function ws(e,t,n,r,i,a,o,s,c){let[l,u]=i;e.begin(null);let d=null;for(let t=-o;t<=a;t+=.5){let i=Math.round(n+l*t-.5),a=Math.round(r+u*t-.5);xs(i,a)&&(e.set(i,a,Z.WOOD,c?3:2),d=[i,a])}if(e.end(),d&&s!==`cane`){e.begin(`all`,1);let[n,r]=d;if(s===`spear`)Ao(e,t,n,r+0,`spear`);else{e.set(n,r,Z.GEM,4),e.set(n+(l>.5?-1:1),r,Z.GEM,2),e.set(n,r+(u>.5?-1:1),Z.GEM,3);for(let[t,i,a]of[[-1,-1,3],[1,-1,2],[-1,1,2],[1,1,1]])xs(n+t,r+i)&&e.set(n+t,r+i,Z.GOLD,a)}e.end()}}function Ts(e,t,n,r){let[i,a]=ys(n.bow.b),o=-a,s=i,c=n.child?5.5:6.5,l=n.child?2.4:2.8,u=r.hx+.5,d=r.hy+.5;e.begin(`all`,0);let f=[],p=e=>l*(1-e/c*(e/c))-(Math.abs(e)>c-1.2?.8:0);for(let t=-c;t<=c;t+=.5){let n=Math.round(u+o*t+i*p(t)-.5),r=Math.round(d+s*t+a*p(t)-.5);if(!xs(n,r))continue;let l=Math.abs(t)<1;e.set(n,r,l?Z.LEATHER:Z.WOOD,l?2:Math.abs(t)>c-1.5?4:t<0?3:2)}for(let e of[-c+.5,c-.5])f.push([Math.round(u+o*e+i*p(e)-.5),Math.round(d+s*e+a*p(e)-.5)]);if(!n.bow.drawn){let[t,n]=f;e.line2(t[0],t[1],n[0],n[1],Z.STRING,3)}e.end(),n.bow.tips=f,n.bow.grip=[u,d]}function Es(e,t,n,r){let i=n.bow.tips;if(!i)return;let a=r.hx,o=r.hy;e.begin(null);for(let[t,n]of i)e.line2(t,n,a,o,Z.STRING,3);let[s,c]=ys(n.bow.b),[l,u]=n.bow.grip,d=Math.hypot(l-a,u-o)+2.5;for(let t=0;t<=d;t+=.5){let n=Math.round(a+.5+s*t-.5),r=Math.round(o+.5+c*t-.5);xs(n,r)&&e.set(n,r,t>d-1.5?Z.METAL:Z.WOOD,t>d-1.5?4:3)}e.set(a,o,Z.FEATHER,3),e.end()}function Ds(e,t,n,r){e.begin(`all`,0);let i=t,a=n-3;e.set(i,a,Z.WOOD,3),e.set(i,a+1,Z.WHITE,3),e.set(i-1,a+2,Z.GEL,3),e.set(i,a+2,Z.GEL,4),e.set(i+1,a+2,Z.GEL,2),e.set(i-1,a+3,Z.GEL,2),e.set(i,a+3,Z.GEL,2),e.set(i+1,a+3,Z.GEL,1),r===`up`&&e.set(i,a+2,Z.GEL,2),e.end()}function Os(e,t,n){let r=t.rig,i=r.child?.84:1,a=r.ground,o=r.cx,s=!!t.cape&&t.cape.style!==`short`,c=s?Z.CAPE:Z.TOP,l=s?Z.TOP:Z.BOTTOM,u=t.hat===`hood`?Z.HAT:Z.HAIR,d=t.gear.gloves?Z.LEATHER:Z.SKIN,f=gs(t),p=(t,n,r,i)=>{let a=Math.round(t-.5),o=Math.round(n-.5);xs(a,o)&&e.set(a,o,r,i)},m=(t,n,r)=>{let i=1/0,a=-1/0,o=1/0,s=-1/0;for(let[e,n]of t)i=Math.min(i,e),a=Math.max(a,e),o=Math.min(o,n),s=Math.max(s,n);for(let c=Math.floor(o);c<=Math.ceil(s);c++)for(let o=Math.floor(i);o<=Math.ceil(a);o++){let i=!1;for(let e=0,n=t.length-1;e<t.length;n=e++){let[r,a]=t[e],[s,l]=t[n];a>c+.5!=l>c+.5&&o+.5<(s-r)*(c+.5-a)/(l-a)+r&&(i=!i)}let a=i&&xs(o,c)?typeof r==`function`?r(o+.5,c+.5):r:null;a!=null&&e.set(o,c,n,a)}},h=(t,n,r,i,a,o,s=3)=>{let c=Math.max(1,Math.ceil(Math.hypot(r-t,i-n)*2)),l=a/2;for(let a=0;a<=c;a++){let u=a/c,d=t+(r-t)*u,f=n+(i-n)*u;for(let t=Math.floor(f-l);t<=Math.ceil(f+l);t++)for(let n=Math.floor(d-l);n<=Math.ceil(d+l);n++){let r=n+.5-d,i=t+.5-f;r*r+i*i>l*l+.05||!xs(n,t)||e.set(n,t,o,Math.max(0,i<-l*.3?s:i>l*.35?s-2:s-1))}}},g=(t,n)=>{s&&(e.begin(`all`,0),m(t,Z.CAPEIN,(e,t)=>n(e,t)?null:1),m(t,Z.CAPE,(e,t)=>n(e,t)?3:null),e.end())},_=(n,r,i,a)=>{if(t.weapon!==`sword`&&t.weapon!==`staff`&&t.weapon!==`spear`)return;e.begin(`all`,0);let o=Math.max(1,Math.round(Math.hypot(i-n,a-r)));for(let e=0;e<=o;e++){let s=n+(i-n)*e/o,c=r+(a-r)*e/o;t.weapon===`sword`?p(s,c,e<2?Z.GOLD:Z.METAL,e<2?3:4):p(s,c,Z.WOOD,3)}e.end()},v=(t,n,r,i,a,o,s=null)=>{for(let c=Math.floor(n-i);c<=Math.ceil(n+i);c++)for(let l=Math.floor(t-r);l<=Math.ceil(t+r);l++){let u=(l+.5-t)/r,d=(c+.5-n)/i;u*u+d*d>1||!o(u,d)||e.over(l,c,a,s??Math.max(1,Math.min(3,e.getShade(l,c))))}};if(n===`left`||n===`right`){let t=o-3.8*i,n=a-5.2*i,r=5.4*i,s=5*i,m=o+3*i,y=a-8*i,b=5.3*i,x=5.2*i,S=[m-.5*i,y-x*.85],C=[m+b+3.4*i,y-x-1.6*i];g([S,C,[m+b+2.6*i,y-x*.05],[m+b*.6,y+x*.3]],(e,t)=>t<S[1]+(e-S[0])*(C[1]-S[1])/(C[0]-S[0])+1.4),_(m+b*.75,y-x*.45,m-b*.7,y-x*1.15),e.begin(null),zs(e,m,y,b,x,c,{hi:.35,lo:-.25}),v(m,y,b,x,l,(e,t)=>t>.35-e*.35&&e<.35),v(m,y,b,x,Z.BELT,(e,t)=>t>.2-e*.35&&t<=.35-e*.35&&e<.3,1),e.end(),e.begin(`all`,0);let w=o-.5*i,T=a-1.4*i,E=o+7*i,D=a-1.4*i;h(w,T,E,D,2.8*i,Z.BOTTOM,3);for(let[e,t,n]of[[.5,-1.5,3],[1.5,-1.5,2],[.5,-.5,2],[1.5,-.5,1],[.5,.5,0],[1.5,.5,0],[2.5,-2.5,2],[1.5,-2.5,3]])p(E+e*i,D+t*i,Z.BOOT,n);e.end(),e.begin(`all`,1);let O=o+2.5*i,k=a-2.8*i;p(O-1,k-1,f,3),p(O,k-1,f,2),p(O,k,d,3),p(O+1,k,d,2),e.end(),e.begin(`all`,0),zs(e,t,n,r,s,u,{hi:.3,lo:-.3,maxShade:4}),v(t,n,r,s,Z.SKIN,(e,t)=>t>.38-e*.25&&e>-.55,null);for(let i=Math.floor(n-s);i<=Math.ceil(n+s);i++)for(let n=Math.floor(t-r);n<=Math.ceil(t+r);n++){if(e.get(n,i)!==Z.SKIN)continue;let a=(n+.5-t)/r;e.set(n,i,Z.SKIN,a<0?3:2)}p(t-.5*i,n+2*i,Z.EYE,0),p(t+.5*i,n+2.2*i,Z.EYE,0),p(t+2.5*i,n+.5*i,Z.SKIN,2),p(t+2.5*i,n+1.5*i,Z.SKIN,1),e.end();return}if(n!==`up`){let t=o+.5,n=a-5*i,r=5.4*i,s=4.8*i,m=o+.5,h=a-8.6*i,y=7*i,b=4.6*i;g([[m+y*.2,h-b*.6],[m+y*.55,h-b-3.4*i],[m+y+1.6*i,h-b-1.6*i],[m+y*.85,h-b*.15]],(e,t)=>e<m+y*.55+(t-h+b)*.1),e.begin(`all`,0);for(let e of[-1,1]){let t=m+e*2.4*i,n=h-b-.4*i;p(t-.5,n-.5,Z.BOOT,1),p(t+.5,n-.5,Z.BOOT,1),p(t-.5,n+.5,Z.BOOT,e<0?3:2),p(t+.5,n+.5,Z.BOOT,2)}e.end(),_(m-y*.95,h+b*.2,m-y*.45,h-b*1.1),e.begin(null),zs(e,m,h,y,b,c,{hi:.35,lo:-.25}),v(m,h,y,b,l,(e,t)=>Math.abs(e)>.62&&t>.1),e.end(),e.begin(`all`,1);for(let e of[-1,1]){let a=e<0?3:2;p(t+e*(r+.6),n-1.2*i,f,a),p(t+e*(r+.4),n-.2*i,f,a-1),p(t+e*(r-.2),n+1.6*i,d,a),p(t+e*(r-1.2),n+2.8*i,d,a-1)}e.end(),e.begin(`all`,0),zs(e,t,n,r,s,u,{hi:.3,lo:-.3,maxShade:4}),v(t,n,r,s,Z.SKIN,(e,t)=>t>.5-Math.abs(e)*.2,null);for(let i=Math.floor(n);i<=Math.ceil(n+s);i++)for(let n=Math.floor(t-r);n<=Math.ceil(t+r);n++)e.get(n,i)===Z.SKIN&&e.set(n,i,Z.SKIN,n+.5<t?3:2);for(let e of[-1,1])p(t+e*2*i-.5,n+s*.72,Z.EYE,0),p(t+e*2*i+.5,n+s*.72,Z.EYE,0);p(t-1.2,n-1.6,u,4),p(t-.2,n-2.1,u,4),p(t-r-.2,n+.8,Z.SKIN,3),p(t+r+.2,n+.8,Z.SKIN,1),e.end();return}let y=o+.5,b=a-5.8*i,x=6.8*i,S=5.2*i;_(y+x*.95,b+S*.1,y+x*.4,b-S*1.15),e.begin(null),zs(e,y,b,x,S,c,{hi:.35,lo:-.25}),v(y,b,x,S,Z.BOTTOM,(e,t)=>t>.45&&Math.abs(e)<.62),e.end();{let t=y-.3,n=b-S*.95,r=5.2*i,a=3.4*i;e.begin(`all`,0);for(let i=Math.floor(n-a);i<=Math.floor(n);i++)for(let o=Math.floor(t-r);o<=Math.ceil(t+r);o++){let s=(o+.5-t)/r,c=(i+.5-n)/a;if(s*s+c*c>1||!xs(o,i))continue;let l=-.55*s-.8*c;e.set(o,i,u,l>.6?3:l>.05?2:1)}u===Z.HAIR&&(p(t-r+.6,n-.2*i,Z.SKIN,2),p(t+r-.4,n-.2*i,Z.SKIN,1)),e.end()}g([[y+x*.45,b+S*.05],[y+x+3.2*i,b-S*.45],[y+x+2.6*i,b+S*.4],[y+x*.6,b+S*.6]],(e,t)=>t<b+S*.05-(e-y-x)*.25),e.begin(`all`,1);for(let e of[-1,1]){let t=e<0?3:2;p(y+e*(x-.4),b+S*.1,f,t),p(y+e*(x-.9),b+S*.4,d,t)}e.end(),e.begin(`all`,0);for(let e of[-1,1]){let t=y+e*2.2*i,n=a-1.2*i;p(t-.5,n-.5,Z.BOOT,e<0?3:2),p(t+.5,n-.5,Z.BOOT,2),p(t-.5,n+.5,Z.BOOT,0),p(t+.5,n+.5,Z.BOOT,0)}e.end()}function ks(e,t){let{w:n,h:r,mat:i,shade:a}=e,o=new Uint8Array(n*r),s=new Int8Array(n*r),c=n,l=-1,u=r,d=-1;for(let e=0;e<r;e++)for(let t=0;t<n;t++){let f=e*n+t;if(!i[f])continue;let p=r-1-e,m=t;p<0||p>=n||m>=r||(o[m*n+p]=i[f],s[m*n+p]=a[f],p<c&&(c=p),p>l&&(l=p),m<u&&(u=m),m>d&&(d=m))}if(i.fill(0),a.fill(0),e.part.fill(0),l<0)return;let f=Math.round(t.rig.cx-(c+l+1)/2),p=t.rig.ground-d;for(let e=u;e<=d;e++)for(let t=c;t<=l;t++){let c=e*n+t;if(!o[c])continue;let l=t+f,u=e+p;l<1||l>n-2||u<1||u>=r-1||(i[u*n+l]=o[c],a[u*n+l]=s[c])}}function As(e,t,n,r){let i=r+6;for(let t of[n+3,n+8])e.set(t-1,i+1,Z.EYE,0),e.set(t,i+1,Z.EYE,0);e.set(n+2,i,Z.EYE,0),e.set(n+9,i,Z.EYE,0),e.set(n+5,r+9,Z.EYE,0),e.set(n+6,r+9,Z.EYE,0),t.blush&&(e.set(n+2,r+8,Z.BLUSH,2),e.set(n+9,r+8,Z.BLUSH,2))}function js(e,t,n,r){let i=r+6;e.set(n+1,i+1,Z.EYE,0),e.set(n+2,i+1,Z.EYE,0),e.set(n+3,i,Z.EYE,0),e.set(n+1,r+9,Z.EYE,0),e.set(n+6,i,Z.SKIN,1),e.set(n+6,i+1,Z.SKIN,1),e.set(n+7,i,Z.SKIN,2),e.set(n+7,i+1,Z.SKIN,0)}function Ms(e,t,n,r){e.clear(),bs=e,r.act===`roll`?Os(e,t,n):n===`down`?Ho(e,t,r,!1):n===`up`?Ho(e,t,r,!0):qo(e,t,r,n===`right`),r.act===`down`&&ks(e,t),e.ox=0,e.oy=0}function Ns(e,t){let n=Qe(e,{wrap:`clamp`,mipmaps:!1,srgb:!0,name:t});return n.wrapS=n.wrapT=ye,n.generateMipmaps=!1,n.minFilter=be,n.magFilter=be,n}function Ps(e,{idleFps:t=2.5,walkFps:n=8,runFps:r=13,extra:i=null}={}){let a={};return oe.forEach((e,o)=>{a[`idle_${e}`]={frames:[{col:0,row:o},{col:1,row:o}],fps:t,loop:!0};let s=[2,3,4,5].map(e=>({col:e,row:o}));a[`walk_${e}`]={frames:s,fps:n,loop:!0},a[`run_${e}`]={frames:s.map(e=>({...e})),fps:r,loop:!0},i&&i(a,e,o)}),a}function Fs(e={},t={}){let n=co(e),r=uo(n),i=fo.length,a=oe.length,o=new W(32*i,32*a),s=new Ua(32,32);if(oe.forEach((e,t)=>{fo.forEach((i,a)=>{Ms(s,n,e,i),Ka(s,r,o,a*32,t*32,e===`right`)})}),t&&t.combat)return Rs(n,r,o,s);let c=o.toCanvas(),l=Ns(c,`character:${n.preset}`);return{texture:l,canvas:c,frameWidth:32,frameHeight:32,columns:i,rows:a,pixelsPerUnit:16,anchor:[.5,0],animations:Ps(a),name:n.preset,spec:n,dispose(){l.dispose()}}}var Is=Object.freeze([`wind`,`slash`,`follow`,`backhand`,`thrust`,`spin`,`cast`,`aim`,`hurt`,`tuck`,`roll`,`down`]),Ls={attack1:[`wind`,`slash`,`follow`],attack2:[`backhand`,`follow`],attack3:[`wind`,`thrust`],spin:[`spin`],cast:[`cast`],aim:[`aim`],hurt:[`hurt`],dodge:[`tuck`,`roll`,`tuck`],down:[`down`]};function Rs(e,t,n,r){let i=oe.length,a=fo.length+ss.length,o=new W(32*a,32*i),s=n.width*4;for(let e=0;e<n.height;e++)o.data.set(n.data.subarray(e*s,(e+1)*s),e*o.width*4);oe.forEach((n,i)=>{ss.forEach((a,s)=>{Ms(r,e,n,a),Ka(r,t,o,(fo.length+s)*32,i*32,n===`right`)})});let c=o.toCanvas(),l=Ns(c,`character:${e.preset}:combat`),u={};return fo.forEach((e,t)=>{u[e.key]=t}),ss.forEach((e,t)=>{u[e.key]=fo.length+t}),{texture:l,canvas:c,frameWidth:32,frameHeight:32,columns:a,rows:i,pixelsPerUnit:16,anchor:[.5,0],animations:Ps(i,{extra:(e,t,n)=>{for(let[r,i]of Object.entries(Ls))e[`${r}_${t}`]={frames:i.map(e=>({col:u[e],row:n})),fps:12,loop:!1}}}),name:e.preset,spec:e,poses:u,dispose(){l.dispose()}}}function zs(e,t,n,r,i,a,{lx:o=-.55,ly:s=-.8,hi:c=.5,lo:l=-.2,deep:u=-.75,maxShade:d=3,minShade:f=0}={}){for(let p=Math.floor(n-i-1);p<=Math.ceil(n+i+1);p++)for(let m=Math.floor(t-r-1);m<=Math.ceil(t+r+1);m++){let h=(m+.5-t)/r,g=(p+.5-n)/i;if(h*h+g*g>1)continue;let _=h*o+g*s,v=_>c?3:_>l?2:+(_>u);v=Math.max(f,Math.min(d,v)),e.set(m,p,a,v)}}var Bs={D:[Z.FUR,0],d:[Z.FUR,1],o:[Z.FUR,2],O:[Z.FUR,3],L:[Z.FUR,4],s:[Z.FUR2,1],S:[Z.FUR2,2],c:[Z.FUR3,1],C:[Z.FUR3,2],w:[Z.FUR3,3],W:[Z.FUR3,4],e:[Z.EYE,2],E:[Z.EYE,0],g:[Z.EYE,4],n:[Z.NOSE,1],N:[Z.NOSE,2],p:[Z.NOSE,3],b:[Z.BEAK,1],B:[Z.BEAK,3],r:[Z.COMB,1],R:[Z.COMB,2],k:[Z.LINE,0]};function Vs(e){switch(e.walk){case 0:return[{dx:-1,lift:0},{dx:1,lift:0},{dx:1,lift:0},{dx:-1,lift:0}];case 1:return[{dx:0,lift:0},{dx:0,lift:1},{dx:0,lift:1},{dx:0,lift:0}];case 2:return[{dx:1,lift:0},{dx:-1,lift:0},{dx:-1,lift:0},{dx:1,lift:0}];case 3:return[{dx:0,lift:1},{dx:0,lift:0},{dx:0,lift:0},{dx:0,lift:1}];default:return[{dx:0,lift:0},{dx:0,lift:0},{dx:0,lift:0},{dx:0,lift:0}]}}function Hs(e,t,n,r,i,a,o,s,c=Z.FUR,l=2){let u=r-i;for(let r=n;r<=u;r++){let i=(r-n)/Math.max(1,u-n),d=Math.round(a*i);for(let n=0;n<l;n++){let i=r===u,a=i?s:c,l=n===0?2:1;o&&--l,i&&(l=o?1:2),e.set(t+d+n,r,a,Math.max(0,l))}}}function Us(e,t,{mat:n=Z.FUR,stripe:r=!1,tipMat:i=null,widthBase:a=2}={}){for(let o=0;o<t.length;o++){let[s,c]=t[o],l=o/(t.length-1),u=r&&o%3==1,d=i&&o>=t.length-2?i:u?Z.FUR2:n;e.set(s,c,d,u?1:2),l<.55&&a>1&&e.set(s+1,c,d,1)}}var Ws=e=>e.walk===0||e.walk===1?[0,1]:e.walk===2||e.walk===3?[1,0]:[0,0];function Gs(e,t,n,r){let i=po(r),a=r.bob,o=r.key===`idle1`,s=r.walk>=0?i.sway:+(r.key===`idle1`);if(n===`side`){let t=Vs(r),n=9+a,i=[[18,n],[19,n-1],[20,n-2],[20+ +(s>0),n-3],[21+ +(s>0),n-4],[21+s,n-5],[20+s,n-6],[20+s*2,n-7]];e.begin(null),Us(e,i,{stripe:!0}),e.end(),e.begin(null),Hs(e,9,11+a,14,t[1].lift,t[1].dx,!0,Z.FUR3),Hs(e,17,11+a,14,t[3].lift,t[3].dx,!0,Z.FUR3),e.end(),e.begin(null),zs(e,13,9.5+a,5.6,2.6,Z.FUR);for(let t=9;t<=17;t+=2)e.over(t,7+a,Z.FUR2,1),e.over(t,8+a,Z.FUR2,1),t%4==1&&e.over(t+1,9+a,Z.FUR2,1);for(let t=9;t<=16;t++)e.over(t,11+a,Z.FUR3,1);e.end(),e.begin(`sides`,1),Hs(e,8,11+a,14,t[0].lift,t[0].dx,!1,Z.FUR3),Hs(e,16,11+a,14,t[2].lift,t[2].dx,!1,Z.FUR3),e.end();let c=3+a;e.begin(null),e.tpl(Q([`..O..o....`,`.OpooDo...`,`.OOooood..`,`OOOEeoood.`,`nwwOoooodd`,`.wwwCood..`,`..wwcd....`],Bs),1,c),o&&(e.set(4,c+3,Z.FUR,1),e.set(5,c+3,Z.FUR,1)),e.end()}else if(n===`down`){let t=Ws(r),n=12+a;e.begin(null),Us(e,[[15,n],[16,n-1],[17,n-2],[17+ +(s>0),n-3],[17+s,n-4],[16+s,n-5],[16+s,n-6]],{stripe:!0}),e.end(),e.begin(null),zs(e,12,10.5+a,3.6,2.8,Z.FUR);for(let t=9;t<=12;t++)e.over(11,t+a,Z.FUR3,3),e.over(12,t+a,Z.FUR3,2);e.end(),e.begin(`sides`,1),Hs(e,9,12+a,14,t[0],0,!1,Z.FUR3),Hs(e,13,12+a,14,t[1],0,!1,Z.FUR3),e.end();let i=2+a;e.begin(null),e.tpl(Q([`.O......o.`,`.Op....po.`,`.OOooooood`,`OOOooooood`,`OOeEooEedd`,`OOoowwoood`,`.OwwnNwod.`,`..wwwwcd..`],Bs),7,i),e.set(11,i+2,Z.FUR2,1),e.set(12,i+2,Z.FUR2,1),e.set(10,i+3,Z.FUR2,2),e.set(13,i+3,Z.FUR2,1),o&&(e.set(9,i+4,Z.FUR,1),e.set(10,i+4,Z.FUR,1),e.set(13,i+4,Z.FUR,1),e.set(14,i+4,Z.FUR,1)),e.end()}else{let t=Ws(r);e.begin(null),Hs(e,9,12+a,14,t[0],0,!0,Z.FUR3),Hs(e,13,12+a,14,t[1],0,!0,Z.FUR3),e.end(),e.begin(null),zs(e,12,10+a,4.1,3.3,Z.FUR);for(let t of[8,10,12])for(let n=9;n<=14;n++)(n!==9||t!==12)&&e.over(n,t+a,Z.FUR2,n>12?1:2);e.end();let n=2+a;e.begin(`below`,1),zs(e,12,n+4.2,3.7,2.9,Z.FUR),e.set(8,n,Z.FUR,3),e.set(8,n+1,Z.FUR,3),e.set(9,n+1,Z.FUR,2),e.set(9,n+2,Z.FUR,2),e.set(15,n,Z.FUR,2),e.set(15,n+1,Z.FUR,1),e.set(14,n+1,Z.FUR,1),e.set(14,n+2,Z.FUR,1),e.set(11,n+3,Z.FUR2,2),e.set(12,n+3,Z.FUR2,1),e.set(11,n+5,Z.FUR2,2),e.set(12,n+5,Z.FUR2,1),e.end(),e.begin(`sides`,1),Us(e,[[11,13+a],[11,12+a],[11+(s<0?-1:0),11+a],[11+s,10+a],[11+s,9+a],[11+s*2,8+a],[11+s*2,7+a]],{stripe:!0,widthBase:2}),e.end()}}function Ks(e,t,n,r){let i=po(r),a=r.bob,o=r.walk>=0?i.sway:r.key===`idle1`?1:-1;if(n===`side`){let t=Vs(r);e.begin(null),Us(e,[[20,11+a],[21,10+a],[22,9+a],[22+ +(o>0),8+a],[22+o,7+a]],{tipMat:Z.FUR3}),e.end(),e.begin(null),Hs(e,8,13+a,18,t[1].lift,t[1].dx,!0,Z.FUR3,Z.FUR,2),Hs(e,18,13+a,18,t[3].lift,t[3].dx,!0,Z.FUR3,Z.FUR,2),e.end(),e.begin(null),zs(e,14,11.5+a,7,3.3,Z.FUR);for(let t=8;t<=19;t++)e.over(t,14+a,Z.FUR3,1);for(let t=7;t<=10;t++)for(let n=11;n<=13;n++)e.over(t,n+a,Z.FUR3,t===7?3:2);e.end(),e.begin(`sides`,1),Hs(e,7,13+a,18,t[0].lift,t[0].dx,!1,Z.FUR3,Z.FUR,2),Hs(e,17,13+a,18,t[2].lift,t[2].dx,!1,Z.FUR3,Z.FUR,2),e.end();let n=3+a;e.begin(null),e.tpl(Q([`...OOoo...`,`..OOoooo..`,`.OOEeoSSd.`,`OOOooSSSd.`,`wwwoooSSd.`,`nwwwooSd..`,`.wwwwod...`,`..ccc.....`],Bs),0,n),e.end()}else if(n===`down`){let t=Ws(r);e.begin(null),Us(e,[[15,12+a],[16,11+a],[17,10+a],[17+o,9+a]],{tipMat:Z.FUR3}),e.end(),e.begin(null),zs(e,12,13+a,4,3.4,Z.FUR);for(let t=11;t<=15;t++)e.over(11,t+a,Z.FUR3,3),e.over(12,t+a,Z.FUR3,2),e.over(13,t+a,Z.FUR3,1);e.end(),e.begin(`sides`,1),Hs(e,9,15+a,18,t[0],0,!1,Z.FUR3,Z.FUR,2),Hs(e,13,15+a,18,t[1],0,!1,Z.FUR3,Z.FUR,2),e.end();let n=3+a;e.begin(null),e.tpl(Q([`..OOoooo..`,`.OOOoooodd`,`SOOoooooSS`,`SSOEooEdSS`,`SSowwwwdSS`,`SSwwnNwdS.`,`..wwwwwd..`,`...ccc....`],Bs),7,n),r.key===`idle1`&&(e.set(11,n+7,Z.NOSE,3),e.set(12,n+7,Z.NOSE,2)),e.end()}else{let t=Ws(r);e.begin(null),Hs(e,9,15+a,18,t[0],0,!0,Z.FUR3,Z.FUR,2),Hs(e,13,15+a,18,t[1],0,!0,Z.FUR3,Z.FUR,2),e.end(),e.begin(null),zs(e,12,12+a,4.8,4,Z.FUR);for(let t=10;t<=14;t++)for(let n=10;n<=13;n++)(t!==14||n!==10&&n!==13)&&e.over(n,t+a,Z.FUR2,n<12?2:1);e.end();let n=2+a;e.begin(`below`,1),e.tpl(Q([`..OOoooo..`,`.OOOoooodd`,`SOOoooooSS`,`SSOoooodSS`,`SSoooooddS`,`.S.oood.S.`],Bs),7,n),e.end(),e.begin(`sides`,1),Us(e,[[11,14+a],[11,13+a],[11+o,12+a],[11+o,11+a],[11+o*2,10+a]],{tipMat:Z.FUR3}),e.end()}}function qs(e,t,n,r){let i=r.bob,a=r.key===`idle1`,o=r.walk===0||r.walk===3?[0,1]:r.walk===1||r.walk===2?[1,0]:[0,0];if(n===`side`){e.begin(null),e.tpl(Q([`.S`,`SS`,`sS`,`s.`],Bs),12,4+i),e.end(),e.begin(null);let t=[7,9];for(let n=0;n<2;n++){let a=o[n],s=r.walk===0?n===0?-1:1:r.walk===2?n===0?1:-1:0;e.vline(t[n],12+i,14-a,Z.BEAK,n===0?2:1),e.set(t[n]-1+s,14-a,Z.BEAK,n===0?2:1),e.set(t[n]+s,14-a,Z.BEAK,n===0?3:1)}e.end(),e.begin(null),zs(e,8.5,9.5+i+(a?.5:0),4.3,3.2,Z.FUR,{hi:.35,lo:-.35}),e.tpl(Q([`.SSS.`,`sSSSs`,`.sss.`],Bs),6,8+i+ +!!a),e.end();let n=a?1:3,s=a?8+i:2+i;e.begin(null),e.tpl(Q([`.rR..`,`rRRR.`,`.OOo.`,`OEoo.`,`bOoo.`,`.rOo.`,`.rOd.`],Bs),n,s),e.set(n-1,s+4,Z.BEAK,3),e.end(),a&&(e.begin(null),e.set(5,9+i,Z.FUR,2),e.set(5,10+i,Z.FUR,2),e.set(4,10+i,Z.FUR,2),e.end())}else{let t=n===`up`;e.begin(null);for(let t=0;t<2;t++){let n=t===0?6:9;e.vline(n,12+i,14-o[t],Z.BEAK,2),e.set(n-1,14-o[t],Z.BEAK,2),e.set(n+1,14-o[t],Z.BEAK,1)}e.end(),t&&(e.begin(null),e.tpl(Q([`.SS.`,`SSSs`,`sSss`],Bs),6,3+i),e.end()),e.begin(null),zs(e,8,9.5+i,3.7,3.3,Z.FUR,{hi:.35,lo:-.35}),e.set(4,9+i,Z.FUR2,2),e.set(4,10+i,Z.FUR2,1),e.set(11,9+i,Z.FUR2,1),e.set(11,10+i,Z.FUR2,1),e.end();let r=(a&&!t?6:2)+i;e.begin(null),t?e.tpl(Q([`..rR..`,`.rRRr.`,`.OOoo.`,`OOoood`,`.Oood.`],Bs),5,r):e.tpl(Q([`..rR..`,`.rRRr.`,`.OOoo.`,`OEOoEd`,`.ObBo.`,`..rr..`],Bs),5,r),e.end()}}function Js(e,t,n,r){let i=r.walk>=0?[0,-3,0,-1][r.walk]:0,a=i+ +(r.walk===0||r.walk===2),o=r.key===`idle1`;if(n===`side`){e.begin(null),e.set(11,10+a-+!!o,Z.FUR2,2),e.set(12,10+a-(o?2:0),Z.FUR2,1),e.set(12,11+a-+!!o,Z.FUR2,1),e.end(),e.begin(null),i<-1?(e.set(8,13+a,Z.BEAK,1),e.set(7,13+a,Z.BEAK,1)):(e.vline(8,12+a,14,Z.BEAK,1),e.set(7,14,Z.BEAK,2)),e.end(),e.begin(null),zs(e,8.5,10.5+a,3,2.2,Z.FUR,{hi:.3,lo:-.3});for(let t=6;t<=9;t++)e.over(t,12+a,Z.FUR3,2);e.set(9,9+a,Z.FUR2,2),e.set(10,10+a,Z.FUR2,1),e.set(9,10+a,Z.FUR2,1),e.end(),e.begin(null),zs(e,6,8+a,1.9,1.8,Z.FUR,{hi:.2,lo:-.4}),e.set(5,8+a,Z.EYE,0),e.set(6,9+a,Z.FUR3,3),e.set(3,8+a,Z.BEAK,3),e.set(4,8+a,Z.BEAK,2),e.end()}else{let t=n===`up`;if(e.begin(null),i<-1?(e.set(6,13+a,Z.BEAK,1),e.set(9,13+a,Z.BEAK,1)):(e.vline(6,13+a,14,Z.BEAK,1),e.vline(9,13+a,14,Z.BEAK,1),e.set(5,14,Z.BEAK,2),e.set(10,14,Z.BEAK,1)),e.end(),t&&(e.begin(null),e.tpl(Q([`.SS.`,`.Ss.`,`..s.`],Bs),6,12+a),e.end()),e.begin(null),zs(e,8,10.8+a,3.1,2.4,Z.FUR,{hi:.3,lo:-.3}),t)e.over(5,10+a,Z.FUR2,2),e.over(10,10+a,Z.FUR2,1),e.over(6,11+a,Z.FUR2,2),e.over(9,11+a,Z.FUR2,1);else for(let t=10;t<=12;t++)for(let n=6;n<=9;n++)e.over(n,t+a,Z.FUR3,n<8?3:2);e.end(),e.begin(null),zs(e,8,7.6+a,2.3,2,Z.FUR,{hi:.2,lo:-.4}),t?(e.set(7,6+a,Z.FUR2,2),e.set(8,6+a,Z.FUR2,1)):(e.set(6,7+a,Z.EYE,0),e.set(9,7+a,Z.EYE,0),e.set(7,8+a,Z.BEAK,3),e.set(8,8+a,Z.BEAK,2)),e.end()}}var Ys={cat:{fw:24,fh:16,draw:Gs,idleFps:2,walkFps:9,runFps:14,colors:{fur:`#d9822b`,fur2:`#8c4a1c`,fur3:`#f2e3c4`,eyes:`#7ab04a`,nose:`#e08a8a`}},dog:{fw:28,fh:20,ox:2,draw:Ks,idleFps:3,walkFps:9,runFps:14,colors:{fur:`#a8703e`,fur2:`#5a3a24`,fur3:`#f2e3c4`,eyes:`#3a2418`,nose:`#2a1c1c`}},chicken:{fw:18,fh:16,ox:1,draw:qs,idleFps:3,walkFps:8,runFps:12,colors:{fur:`#f4efe6`,fur2:`#b8844e`,fur3:`#fff8ee`,eyes:`#1e1418`,beak:`#e8b030`,comb:`#d23a2e`}},bird:{fw:16,fh:16,draw:Js,idleFps:2.5,walkFps:8,runFps:12,colors:{fur:`#8a6040`,fur2:`#5a3a24`,fur3:`#e8dcc0`,eyes:`#141018`,beak:`#e0a040`}}};function Xs(e,t={}){t=oo(t);let n=le(Ys,e)||Ys.cat,r={...n.colors,...t},i={...r,kind:e,seed:so(t.seed??j(String(e)))},a=Array(Ha).fill(null);a[Z.FUR]=Va(r.fur),a[Z.FUR2]=Va(r.fur2),a[Z.FUR3]=Va(r.fur3),a[Z.NOSE]=Va(r.nose||`#d08080`),a[Z.BEAK]=Va(r.beak||`#e0a040`),a[Z.COMB]=Va(r.comb||`#c83a30`);let o=Te(La(r.eyes,`#202020`));a[Z.EYE]=[Pa,He(Pa,o,.5),[...o],Et(o,.3),[255,255,255,255]],a[Z.LINE]=[Pa,Pa,Pa,Pa,Pa];for(let e=0;e<Ha;e++)a[e]||(a[e]=a[Z.FUR]);let s=n.fw,c=n.fh,l=fo.length,u=oe.length,d=new W(s*l,c*u),f=new Ua(s,c);f.ox=n.ox||0,oe.forEach((e,t)=>{fo.forEach((r,o)=>{f.clear(),n.draw(f,i,e===`down`?`down`:e===`up`?`up`:`side`,r),Ka(f,a,d,o*s,t*c,e===`right`)})});let p=d.toCanvas(),m=Ns(p,`creature:${e}`);return{texture:m,canvas:p,frameWidth:s,frameHeight:c,columns:l,rows:u,pixelsPerUnit:16,anchor:[.5,0],name:e,animations:Ps(u,{idleFps:n.idleFps,walkFps:n.walkFps,runFps:n.runFps}),dispose(){m.dispose()}}}var Zs={Painter:Ua,resolvePainter:Ka,T:Q,M:Z,CRE_L:Bs,blob:zs,quadGait:Vs,quadLeg:Hs,tailChain:Us,rampForKind:Va,finishTexture:Ns,buildAnimations:Ps,POSES:fo,lagOf:po,glowTexel:Ba,GLOW_ALPHA:za,OUTLINE:Pa,ERASE:Wa},Qs=V.outline,$s=V.grass,ec=V.leaves,tc=V.fire;function nc(e,t,{frames:n=0,fps:r=0,smooth:i=!1}={}){let a=e.toCanvas(),o=Qe(a,{wrap:`clamp`,mipmaps:!1,srgb:!0,name:`prop:${t}`});o.wrapS=o.wrapT=ye,o.generateMipmaps=!1,i&&(o.magFilter=F,o.minFilter=F);let s=n||1,c=e.width/s,l={};n&&(l.idle={frames:Array.from({length:s},(e,t)=>({col:t,row:0})),fps:r,loop:!0});let u={texture:o,canvas:a,width:c,height:e.height,pixelsPerUnit:16,anchor:[.5,0],frameWidth:c,frameHeight:e.height,sheetWidth:e.width,columns:s,rows:1,animations:l,kind:t,dispose(){o.dispose()}};return n&&(u.frames=n,u.fps=r),u}function rc(e,t,n,r,i){let a=Te(r);e.set(t,n,[a[0],a[1],a[2],Math.round(K(i)*255)])}function ic(e,t,{top:n=!0,bottom:r=!0,left:i=!0,right:a=!0,diag:o=!1}={}){let s=e.clone(),c=[];i&&c.push([1,0]),a&&c.push([-1,0]),n&&c.push([0,1]),r&&c.push([0,-1]),o&&c.push([1,1],[-1,1]);for(let n=0;n<e.height;n++)for(let r=0;r<e.width;r++)if(!(s.getAlpha(r,n)>0)){for(let[i,a]of c)if(s.getAlpha(r+i,n+a)>=128){e.set(r,n,t);break}}}function ac(e,t,n,r,i,a,{depth:o=0,baseW:s=2,tipLight:c=!0}={}){let l=Math.max(2,Math.round(r));for(let r=0;r<=l;r++){let u=r/l,d=Math.round(t+i*u*u),f=n-r,p;p=u<.22?1:u<.5?2:u<.82?3:c?4:3,i<-.5&&u>.3&&(p=Math.min(p+1,a.length-1)),p=K(p-o,0,a.length-1),e.set(d,f,a[p]),u<.3&&s>1&&e.set(d+(i>=0?1:-1),f,a[K(p-1,0,a.length-1)])}}function oc(e){let t=new W(16,12),n=new c(e),r=$s,i=[];for(let e=0;e<15;e++){let t=e/14*2-1,r=Math.round(7.5+t*4+n.range(-.6,.6));i.push({bx:r,h:(10.5-Math.abs(t)*5)*n.range(.75,1.05),lean:t*n.range(2.5,4.5)+n.range(-.8,.8),depth:+(e*7%3==0)})}i.sort((e,t)=>t.depth-e.depth||e.h-t.h);for(let e of i){let n=Math.max(3,Math.round(e.h));for(let i=0;i<=n;i++){let a=i/n,o=Math.round(e.bx+e.lean*a*a),s=11-i,c=a<.2?1:a<.45?2:a<.78?3:4;e.lean<-.8&&a>.35&&(c=Math.min(5,c+1)),e.lean>1.5&&a>.5&&(c=Math.max(2,c-1)),c=K(c-e.depth,0,5),t.set(o,s,r[c]),a<.45&&t.set(o+(e.lean>=0?1:-1),s,r[K(c-1,0,5)])}}for(let e=4;e<=11;e++)t.set(e,11,r[e<6?2:1]),e>4&&e<11&&t.set(e,10,r[e<7?2:1]);return nc(t,`grass_tuft`)}function sc(e){let t=new W(16,24),n=new c(e),r=$s,i=V.grassDry,a=[];for(let e=0;e<15;e++){let t=e/14*2-1,r=Math.round(8+t*4.5+n.range(-.6,.6));a.push({bx:r,h:(21-Math.abs(t)*9)*n.range(.7,1.05),lean:t*n.range(2.5,5)+n.range(-1.2,1.2),depth:+(e%3==1)})}a.sort((e,t)=>t.depth-e.depth);for(let e of a)ac(t,e.bx,23,e.h,e.lean,r,{depth:e.depth});let o=[...a].sort((e,t)=>t.h-e.h).slice(0,3);for(let e of o){let n=Math.round(e.bx+e.lean),r=Math.round(23-e.h);t.set(n,r-1,i[4]),t.set(n,r-2,i[3]),t.set(n+(e.lean>0?1:-1),r-1,i[3]),t.set(n,r,i[2])}for(let e=4;e<=12;e++)t.set(e,23,r[1]),e>4&&e<12&&t.set(e,22,r[e<8?2:1]);return nc(t,`grass_tall`)}function cc(e,t,n,r,i=4){for(let a=0;a<7;a++){let o=a%2?1:-1;ac(e,t+o*r.int(0,2),n,r.range(2.5,5.5),o*r.range(1.5,i),$s,{depth:+(a<2),baseW:2,tipLight:a>3})}}function lc(e,t,n,r,i){let a=Math.max(1,n-i);for(let i=0;i<=a;i++){let o=i/a,s=Math.round(I(t,r,o*o));e.set(s,n-i,i<a*.4?$s[1]:$s[2])}}function uc(e,t,n,r,i,a={}){for(let o=0;o<t.length;o++)for(let s=0;s<t[o].length;s++){let c=t[o][s];if(c===`.`)continue;let l=a[c]??(c===`k`?Qs:i[Number(c)]);l!==void 0&&e.set(n+s,r+o,l)}}function dc(e){let t=new W(13,15),n=new c(e),r=V.red;cc(t,6,14,n);let i=[[3,3],[9,2],[6,6]];for(let[e,n]of i)lc(t,6+Math.sign(e-6),13,e,n+3);for(let[e,n]of i)uc(t,[`.454.`,`45543`,`44k32`,`.332.`],e-2,n,r);return ic(t,He(r[0],Qs,.4),{top:!1,left:!1,bottom:!0,right:!0}),nc(t,`flower_red`)}function fc(e){let t=new W(12,12),n=new c(e),r=V.yellow;cc(t,6,11,n,3.5);let i=[[3,4],[6,2],[9,4],[5,6],[8,7]];for(let[e,n]of i)lc(t,6,11,e,n+1);for(let[e,n]of i)uc(t,[`454`,`343`,`.2.`],e-1,n-1,r);return ic(t,He(r[1],Qs,.35),{top:!1,left:!1,bottom:!0,right:!0}),nc(t,`flower_yellow`)}function pc(e){let t=new W(14,14),n=new c(e),r=V.white,i=V.yellow;cc(t,7,13,n);let a=[[3,3],[10,2],[7,6]];for(let[e,n]of a)lc(t,7+Math.sign(e-7),13,e+1,n+4);for(let[e,n]of a)uc(t,[`.44.`,`4ab3`,`3bc2`,`.22.`],e-1,n,r,{a:i[5],b:i[4],c:i[3]});return ic(t,He(r[0],Qs,.45),{top:!0,left:!0,bottom:!0,right:!0}),nc(t,`flower_white`)}function mc(e){let t=new W(12,14),n=new c(e),r=V.blue;cc(t,6,13,n),lc(t,5,13,3,3),lc(t,7,13,9,5);for(let[e,n]of[[3,4],[2,7],[4,8],[9,6],[10,9]])uc(t,[`.43`,`342`,`2.1`],e-1,n,r);return uc(t,[`.4.`,`453`,`.2.`],7,1,r),ic(t,He(r[0],Qs,.3),{top:!1,left:!1,bottom:!0,right:!0}),nc(t,`flower_blue`)}function hc(e){let t=new W(24,18),n=new c(e),r=ec,i=new Int8Array(432).fill(-1);for(let[t,r,a,o]of[[6,11,5,4.5],[17,11,5.5,4.5],[11.5,12,6.5,5],[8,7,4.5,4],[15,6.5,5,4.2],[11.5,5,4.5,4]]){let s=n.range(-.4,.4),c=n.range(-.3,.3);for(let n=Math.floor(r-o-1);n<=Math.ceil(r+o+1);n++)for(let l=Math.floor(t-a-1);l<=Math.ceil(t+a+1);l++){if(l<0||n<0||l>=24||n>=18)continue;let u=(l+.5-t-s)/a,d=(n+.5-r-c)/o,f=1-.18*O(l*.9,n*.9,e),p=u*u+d*d;if(p>f)continue;let m=-u*.5-d*.9-n/18*.6+.35,h=m>.65?4:m>.2?3:m>-.3?2:1;p>f*.72&&m<.3&&(h=Math.max(1,h-1)),i[n*24+l]=h}}let a=i.slice();for(let t=1;t<17;t++)for(let n=1;n<23;n++){let r=a[t*24+n];if(r<0)continue;let o=A(n,t,e);o<.11&&r>=2?(i[t*24+n]=Math.min(5,r+1),a[(t-1)*24+n+1]>=2&&(i[(t-1)*24+n+1]=Math.min(5,r+1))):o>.9&&r>=2&&r<=3&&(i[t*24+n]=r-1)}for(let e=0;e<24;e++)for(let t=15;t<18;t++)i[t*24+e]>=0&&(i[t*24+e]=t===17?0:1);for(let e=0;e<432;e++)i[e]>=0&&t.set(e%24,e/24|0,r[i[e]]);let o=n.chance(.5)?V.white:[`#8c3a5a`,`#c85a82`,`#ec8fb0`,`#f8bdd0`,`#fff0f4`];for(let e=0;e<4;e++){let e=n.int(5,18),r=n.int(3,11);t.getAlpha(e,r)&&t.getAlpha(e+1,r+1)&&(t.set(e,r,o[4]),t.set(e+1,r,o[2]),t.set(e,r+1,o[2]))}return ic(t,He(r[0],Qs,.5),{top:!1,left:!1,bottom:!0,right:!0}),ic(t,r[1],{top:!0,left:!0,bottom:!1,right:!1}),nc(t,`bush`)}function gc(e){let t=new W(20,16),n=new c(e),r=V.green,i=V.grass[4];for(let e of[{ang:-2.75,len:8,depth:1},{ang:-.4,len:8,depth:1},{ang:-1.9,len:11,depth:1},{ang:-2.3,len:11,depth:0},{ang:-.85,len:11,depth:0},{ang:-1.45,len:12.5,depth:0}]){let a=Math.cos(e.ang)>=0?1:-1,o=9.5,s=15,c=e.ang+n.range(-.06,.06),l=Math.round(e.len/.75),u=[];for(let e=0;e<l;e++)c+=a*.05*(.2+e/l),o+=Math.cos(c)*.75,s+=Math.sin(c)*.75,u.push([o,s,c,e/l]);for(let n=1;n<u.length-1;n+=2){let[i,a,o,s]=u[n],c=s<.55?2:1;for(let n of[-1,1]){let s=o+n*1.05,l=Math.sin(s)<-.2;for(let n=1;n<=c;n++){let o=Math.round(i+Math.cos(s)*n),u=Math.round(a+Math.sin(s)*n),d=K((l?3:2)-e.depth+(n===c&&l?1:0),1,4);t.set(o,u,r[d])}}}for(let[n,i,,a]of u)t.set(Math.round(n),Math.round(i),r[K((a<.3?2:3)-e.depth,1,4)]);let d=u[u.length-1];t.set(Math.round(d[0]),Math.round(d[1]),e.depth?r[3]:i)}for(let e=7;e<=12;e++)t.set(e,15,r[e<9?2:1]);return ic(t,He(r[0],Qs,.4),{top:!1,left:!1,bottom:!0,right:!0}),nc(t,`fern`)}function _c(e){let t=new W(14,26),n=new c(e),r=$s,i=V.grassDry,a=V.brown;for(let e=0;e<7;e++){let i=3+Math.round(e*1.3+n.range(-.5,.5));ac(t,i,25,n.range(9,17),(i-7)*n.range(.6,1.3)+n.range(-1.5,1.5),r,{depth:e%2,baseW:1})}for(let[e,n,r]of[[5,23,-1],[8,25,1],[10,19,1]]){for(let a=0;a<n;a++){let o=a/n,s=Math.round(e+r*o*o*1.5);t.set(s,25-a,o<.4?i[1]:i[2])}let o=Math.round(e+r*1.5),s=25-n;for(let e=0;e<5;e++)t.set(o,s+2+e,e===0?a[4]:a[3]),t.set(o+1,s+2+e,e===4?a[1]:a[2]);t.set(o,s+1,i[3]),t.set(o,s,i[2])}for(let e=3;e<=11;e++)t.set(e,25,r[1]);return ic(t,He(r[0],Qs,.4),{top:!1,left:!1,bottom:!0,right:!0}),nc(t,`reeds`)}function vc(e){let t=new W(13,11),n=V.red,r=V.cream,i=V.white,a=[`..3455..`,`.345W43.`,`34W44432`,`34443W32`,`.222211.`],o=(e,n,r,a)=>{for(let o=0;o<e.length;o++)for(let s=0;s<e[o].length;s++){let c=e[o][s];c!==`.`&&t.set(n+s,r+o,c===`W`?i[4]:c===`w`?i[2]:a[Number(c)])}};for(let e=5;e<=10;e++)t.set(4,e,r[4]),t.set(5,e,r[3]),t.set(6,e,r[2]);t.set(3,10,r[3]),t.set(7,10,r[1]);for(let e=7;e<=10;e++)t.set(10,e,r[4]),t.set(11,e,r[2]);return o(a,1,1,n),o([`.34.`,`3W42`,`2211`],9,5,n),t.set(2,10,$s[3]),t.set(8,10,$s[3]),t.set(8,9,$s[4]),t.set(12,10,$s[2]),t.outline(He(n[0],Qs,.6)),nc(t,`mushroom`)}function yc(e){let t=new W(14,9),n=V.stone,r=V.moss,i=[`....4455......`,`..344554432...`,`.3444443333...`,`3443343332232.`,`33333322222221`,`.2222221111111`,`..11111111....`];for(let e=0;e<i.length;e++)for(let r=0;r<i[e].length;r++){let a=i[e][r];a!==`.`&&t.set(r,e+1,n[Number(a)])}return t.set(6,4,n[1]),t.set(7,5,n[1]),t.set(3,2,r[3]),t.set(4,2,r[3]),t.set(5,1,r[3]),t.set(2,3,r[2]),t.set(3,3,r[2]),t.set(8,2,r[2]),t.outline(He(n[0],Qs,.5)),nc(t,`rock_small`)}function bc(e,t,n,{cx:r,baseY:i,height:a,halfW:o,seed:s=0,tongues:c=3}){let l=(i-t)/a;if(l<-.15||l>1.35)return 0;let u=Math.PI*2,d=Math.sin(n*u+l*3.1+s)*.9*l+Math.sin(n*u*2+l*5.3+s*1.7)*.5*l*l,f=(e+.5-r-d)/o,p=Math.max(.05,1-Math.max(0,l)**1.25),m=1-Math.abs(f)/p,h=0;for(let t=0;t<c;t++){let i=n*u*(t%2?1:2)+t*2.1+s,a=Math.sin(i)*.55+(t-(c-1)/2)*.35,f=.75+.35*(.5+.5*Math.sin(i*1+t)),p=(e+.5-r-d)/o-a,m=.28*(1-l/f);l<f&&m>0&&(h=Math.max(h,1-Math.abs(p)/m))}m=Math.max(m,h*.85);let g=O(e*.55,(t+n*12)*.55,s,0)*.5+O(e*1.3,(t+n*24)*1.1,s+3,0)*.25;return m=m*(1.05-l*.55)+(g-.38)*.55,l<0&&(m*=1+l*5),m}function xc(e){return e>.86?tc[5]:e>.68?tc[4]:e>.5?tc[3]:e>.33?tc[2]:e>.2?tc[1]:null}function Sc(e,t,n,r){let{fw:i,fh:a}=r;for(let o=0;o<a;o++)for(let a=0;a<i;a++){let i=xc(bc(a,o,n,r));i&&e.set(t+a,o,i)}}function Cc(e){let t=new W(192,26),n=V.wood,r=V.stone,i=(i,a)=>{let o=(e,r,a,o,s)=>{let c=Math.max(Math.abs(a-e),Math.abs(o-r));for(let l=0;l<=c;l++){let u=l/c,d=Math.round(I(e,a,u)),f=Math.round(I(r,o,u));for(let e=0;e<s;e++)t.set(i+d,f+e,n[e===0?4:e===s-1?1:2]);l%4==2&&t.set(i+d,f+1,n[1])}t.set(i+e,r,tc[3]),t.set(i+e,r+1,tc[2])};o(4,18,17,22,3),o(19,18,6,22,3),o(7,21,17,21,3);for(let[e,n]of[[2,22],[5,23],[9,24],[14,24],[18,23],[21,22]])t.set(i+e,n,r[4]),t.set(i+e+1,n,r[3]),t.set(i+e,n+1,r[3]),t.set(i+e+1,n+1,r[2]),t.set(i+e-1,n+1,r[2]);for(let n=0;n<7;n++){let r=7+(n*5+e)%11,o=20+n%3,s=(n+a)%3!=0;t.set(i+r,o,s?tc[4]:tc[2])}};for(let n=0;n<8;n++){let r=n*24;i(r,n),Sc(t,r,n/8,{fw:24,fh:26,cx:12,baseY:21,height:17,halfW:5.2,seed:e%97,tongues:3});let a=4-n%4*1,o=11+n*3%4-1;n%2==0&&t.set(r+o,a,tc[4]),n%4==1&&t.set(r+o+2,a+2,tc[3])}return nc(t,`campfire`,{frames:8,fps:10})}function wc(e){let t=new W(60,16);for(let n=0;n<6;n++)Sc(t,n*10,n/6,{fw:10,fh:16,cx:5,baseY:14,height:12,halfW:3.4,seed:11+e%13,tongues:2});return nc(t,`torch_flame`,{frames:6,fps:12})}function Tc(e){let t=new W(20,8),n=[[`..5..`,`.454.`,`.454.`,`.353.`,`..3..`,`.....`],[`..4..`,`..5..`,`.454.`,`.353.`,`..3..`,`.....`],[`.....`,`..5..`,`.455.`,`.354.`,`..3..`,`.....`],[`..4..`,`.45..`,`.454.`,`.353.`,`..3..`,`.....`]];for(let e=0;e<4;e++){let r=n[e];for(let n=0;n<r.length;n++)for(let i=0;i<5;i++){let a=r[n][i];a!==`.`&&t.set(e*5+i,n+1,tc[Number(a)])}t.set(e*5+2,6,`#8fb0ff`)}return nc(t,`candle_flame`,{frames:4,fps:9})}function Ec(){let e=new W(17,15),t=V.white,n=V.cream;for(let r=1;r<11;r++)for(let i=1;i<16;i++){if((i===1||i===15)&&(r===1||r===10))continue;let a=r>=9?n[4]:t[4];e.set(i,r,a)}for(let t=2;t<15;t++)e.set(t,10,n[3]);for(let n=2;n<10;n++)e.set(15,n,t[2]);e.set(6,11,t[4]),e.set(7,11,n[4]),e.set(8,11,n[3]),e.set(6,12,n[4]),e.set(7,12,n[3]),e.set(6,13,n[3]);let r=t=>{e.set(t,5,Qs),e.set(t+1,5,Qs),e.set(t,6,Qs),e.set(t+1,6,`#3a3346`)};return r(4),r(8),r(12),e.outline(Qs),nc(e,`speech_bubble`)}function Dc(){let e=new W(6,15),t=V.gold;return uc(e,[`4553`,`4553`,`4543`,`.443`,`.443`,`.433`,`.43.`,`.32.`,`....`,`.44.`,`4553`,`.32.`],1,1,t),e.outline(Qs),nc(e,`exclamation`)}function Oc(){let e=new W(11,11),t=`#ffffff`,n=tc[5],r=tc[4];for(let i=1;i<=5;i++){let a=1-(i-1)/5,o=i<=1?t:i<=3?n:r;for(let[t,n]of[[i,0],[-i,0],[0,i],[0,-i]])rc(e,5+t,5+n,o,Math.min(1,a*1.15))}for(let[t,r]of[[1,1],[-1,1],[1,-1],[-1,-1]])rc(e,5+t,5+r,n,.55);return rc(e,5,5,t,1),nc(e,`sparkle`)}function kc(){let e=new W(7,6),t=ec,n=[`....45.`,`..3444.`,`.33343.`,`32233..`,`222....`,`1......`];for(let r=0;r<n.length;r++)for(let i=0;i<7;i++){let a=n[r][i];a!==`.`&&e.set(i,r,t[Number(a)])}return e.set(3,3,t[2]),nc(e,`leaf`)}function Ac(){let e=new W(5,4),t=[`#8c3a5a`,`#c85a82`,`#ec8fb0`,`#f8bdd0`,`#fff0f4`],n=[`.34.`,`3443`,`2332`,`.21.`];for(let r=0;r<n.length;r++)for(let i=0;i<4;i++){let a=n[r][i];a!==`.`&&e.set(i,r,t[Number(a)])}return nc(e,`petal`)}function jc(){let e=new W(5,5);rc(e,2,2,tc[5],1);for(let[t,n]of[[1,0],[-1,0],[0,1],[0,-1]])rc(e,2+t,2+n,tc[4],.95);for(let[t,n]of[[1,1],[-1,1],[1,-1],[-1,-1]])rc(e,2+t,2+n,tc[3],.55);for(let[t,n]of[[2,0],[-2,0],[0,2],[0,-2]])rc(e,2+t,2+n,tc[2],.3);return nc(e,`ember`)}function Mc(e){let t=new W(24,24),n=new c(e),r=[[12,13,7],[8.5,11,5],[15.5,10.5,5.5],[12,8,5],[9,15,4.5],[16,15,4.5]];for(let e of r)e[0]+=n.range(-.5,.5),e[1]+=n.range(-.5,.5);for(let n=0;n<24;n++)for(let i=0;i<24;i++){let a=0,o=0;for(let[e,t,s]of r){let r=Math.hypot(i+.5-e,n+.5-t)/s;if(r<1){let c=1-r*r;a=Math.max(a,c),o=Math.max(o,c*(1-((i-e)*.4+(n-t)*.7)/s*.5))}}if(a<=.02)continue;let s=O(i*.35,n*.35,e)*.35;a=x(0,.75,a)*(.75+s);let c=K(.45+o*.45+s*.2),l=He(`#6f7480`,`#e8e6e2`,c);rc(t,i,n,l,a*.9)}return nc(t,`smoke_puff`,{smooth:!0})}function Nc(){let e=new W(4,4);return rc(e,1,1,`#fff8e6`,1),rc(e,2,1,`#fff2d0`,.8),rc(e,1,2,`#fff2d0`,.8),rc(e,2,2,`#ffe6b0`,.6),rc(e,0,1,`#ffe6b0`,.25),rc(e,3,2,`#ffe6b0`,.2),rc(e,1,0,`#ffe6b0`,.25),rc(e,2,3,`#ffe6b0`,.2),nc(e,`dust`)}function Pc(){let e=new W(32,32);for(let t=0;t<32;t++)for(let n=0;n<32;n++){let r=Math.hypot(n+.5-16,t+.5-16)/16;if(r>=1)continue;let i=(1-x(0,1,r))**1.6*.95+x(.55,.8,r)*(1-x(.8,1,r))*.08;rc(e,n,t,`#ffffff`,i)}return nc(e,`bokeh_soft`,{smooth:!0})}var Fc={grass_tuft:oc,grass_tall:sc,flower_red:dc,flower_yellow:fc,flower_white:pc,flower_blue:mc,bush:hc,fern:gc,reeds:_c,mushroom:vc,rock_small:yc,campfire:Cc,torch_flame:wc,candle_flame:Tc,speech_bubble:Ec,exclamation:Dc,sparkle:Oc,leaf:kc,petal:Ac,ember:jc,smoke_puff:Mc,dust:Nc,bokeh_soft:Pc};function Ic(e,t){let n=Object.hasOwn(Fc,e)?Fc[e]:null;if(!n)throw Error(`createPropSprite: unknown kind "${e}"`);let r=t?t.seed:void 0;return n((r==null?j(e):typeof r==`string`?j(r):Number(r)||0)>>>0)}var Lc=`
float luminaBayer4( vec2 p ) {
	ivec2 q = ivec2( mod( floor( p ), 4.0 ) );
	const float M[ 16 ] = float[ 16 ]( 0.0, 8.0, 2.0, 10.0, 12.0, 4.0, 14.0, 6.0, 3.0, 11.0, 1.0, 9.0, 15.0, 7.0, 13.0, 5.0 );
	return ( M[ q.y * 4 + q.x ] + 0.5 ) / 16.0;
}
`,Rc=`
varying vec3 vViewPosition;
uniform float uWrap;

struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};

void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = dot( geometryNormal, directLight.direction );
	float wrapped = saturate( ( dotNL + uWrap ) / ( 1.0 + uWrap ) );
	reflectedLight.directDiffuse += wrapped * directLight.color * BRDF_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

#define RE_Direct RE_Direct_Lambert
#define RE_IndirectDiffuse RE_IndirectDiffuse_Lambert
`,zc=`
	{
		vec3 lnUp = normalize( ( viewMatrix * vec4( 0.0, 1.0, 0.0, 0.0 ) ).xyz );
		vec3 lnCam = isOrthographic ? vec3( 0.0, 0.0, 1.0 ) : normalize( vViewPosition );
		vec3 lnN = normalize( mix( lnCam, lnUp, uNormalUp ) );
		lnN = normalize( lnN + vec3( ( vQuadUv.x * 2.0 - 1.0 ) * uRoundness, 0.0, 0.0 ) );
		normal = lnN;
		nonPerturbedNormal = lnN;
	}
`,Bc=`
#ifdef USE_SHADOWMAP
	vec4 luminaSavedWorldPosition = worldPosition;
	{
		vec3 lsH = vec3( uSunDirection.x, 0.0, uSunDirection.z );
		float lsLen = length( lsH );
		vec3 lsN = lsH / max( lsLen, 1e-4 );
		float lsSd = dot( worldPosition.xyz - ( LUMINA_SHADOW_CENTER ), lsN );
		float lsSkip = max( 0.0, - lsSd ) / max( lsLen, 0.25 ) * uShadowSkip + uShadowSkipBias;
		worldPosition.xyz += uSunDirection * lsSkip;
	}
#endif
#include <shadowmap_vertex>
#ifdef USE_SHADOWMAP
	worldPosition = luminaSavedWorldPosition;
#endif
`;function Vc(e,t,{shadowCenter:n=`modelMatrix[ 3 ].xyz`}={}){Object.assign(e.uniforms,t),e.uniforms.uSunDirection=X.uSunDirection,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec2 vQuadUv;
uniform vec3 uSunDirection;
uniform float uShadowSkip;
uniform float uShadowSkipBias;
#define LUMINA_SHADOW_CENTER ${n}`).replace(`#include <uv_vertex>`,`#include <uv_vertex>
	vQuadUv = uv;`).replace(`#include <shadowmap_vertex>`,Bc),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec2 vQuadUv;
uniform float uNormalUp;
uniform float uRoundness;`).replace(`#include <lights_lambert_pars_fragment>`,Rc).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>\n${zc}`)}function Hc(e,t){e.uniforms.uFlash=t.uFlash,e.uniforms.uGlow=t.uGlow,e.uniforms.uHighlight=t.uHighlight,e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform vec4 uFlash;
uniform vec4 uGlow;
uniform vec4 uHighlight;`).replace(`totalEmissiveRadiance *= diffuseColor.rgb;`,`totalEmissiveRadiance *= diffuseColor.rgb;
	if ( diffuseColor.a < 0.98 ) totalEmissiveRadiance += uGlow.rgb * uGlow.a * diffuseColor.rgb;`).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
	if ( uHighlight.a > 0.0 ) {
		vec3 hlBase = gl_FragColor.rgb;
		float hlLum = dot( hlBase, vec3( 0.2126, 0.7152, 0.0722 ) );
		gl_FragColor.rgb += ( hlBase * uHighlight.rgb * ( 1.0 - smoothstep( 0.45, 1.2, hlLum ) ) + uHighlight.rgb * 0.035 ) * uHighlight.a;
	}
	gl_FragColor.rgb = mix( gl_FragColor.rgb, uFlash.rgb, uFlash.a );`)}function Uc(e){let t=e.source.version,n=e.clone();return n.source.version=t,n}var Wc=null,Gc=0;function Kc(){if(!Wc){let e=document.createElement(`canvas`);e.width=32,e.height=32;let t=e.getContext(`2d`),n=t.createImageData(32,32);for(let e=0;e<32;e++)for(let t=0;t<32;t++){let r=(t+.5)/32*2-1,i=(e+.5)/32*2-1,a=1-Jc(.2,1,Math.sqrt(r*r+i*i)),o=(e*32+t)*4;n.data[o]=n.data[o+1]=n.data[o+2]=255,n.data[o+3]=Math.round(a*255)}t.putImageData(n,0,0);let r=new C(e);r.colorSpace=``,r.generateMipmaps=!0,r.minFilter=f,r.magFilter=F;let i=new mt(1,1);i.rotateX(-Math.PI/2),Wc={texture:r,geometry:i}}return Gc++,Wc}function qc(){--Gc<=0&&Wc&&(Wc.texture.dispose(),Wc.geometry.dispose(),Wc=null,Gc=0)}function Jc(e,t,n){let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)}var Yc=/_(down|left|right|up)$/,Xc=new De;function Zc(e){if(!e||e.frameWidth)return e;let t=Math.max(1,e.frames|0||1),n=e.texture&&e.texture.image,r=e.width;t>1&&n&&n.width&&Math.abs(n.width-e.width)<.5&&(r=e.width/t);let i={};if(t>1){let n=[];for(let e=0;e<t;e++)n.push({col:e,row:0});i.idle={frames:n,fps:e.fps||8,loop:!0}}return{texture:e.texture,canvas:e.canvas,frameWidth:r,frameHeight:e.height,columns:t,rows:1,pixelsPerUnit:e.pixelsPerUnit||16,anchor:e.anchor||[.5,0],animations:i}}var Qc=class e extends Tt{constructor(e,t={}){super(),e=Zc(e);let n={billboard:`cylindrical`,tilt:0,castShadow:!0,shadowMode:`sunFacing`,blobShadow:!0,lit:!0,alphaTest:.5,emissive:null,emissiveIntensity:1,scale:1,renderOrder:0,receiveShadow:!0,normalUp:.55,wrap:.6,roundness:.8,ditherMode:`screen`,blobSize:null,blobOpacity:.5,tint:null,animation:null,direction:`down`,combatFx:!1,...t};this.type=`Sprite3D`,this.isSprite3D=!0,this._opts=n,this.sheet=e,this._resolveCache=new Map,this.billboard=n.billboard,this.tilt=n.tilt,this.speed=1,this.playing=!0,this.animation=null,this.direction=oe.includes(n.direction)?n.direction:`down`,this.finished=!1,this.onFrameChange=null,this.onAnimationEnd=null,this._anim=null,this._animKey=null,this._autoFlip=!1,this._flipX=!1,this._frame=0,this._time=0,this._col=0,this._row=0,this._opacity=1,this._bodyOpacity=1,this._shadowMode=n.shadowMode===`billboard`?`billboard`:`sunFacing`;let r=e.pixelsPerUnit||16,a=e.texture.image,o=a&&a.width||e.canvas&&e.canvas.width||e.columns*e.frameWidth,s=a&&a.height||e.canvas&&e.canvas.height||e.rows*e.frameHeight;this._frameU=e.frameWidth/o,this._frameV=e.frameHeight/s,this.texture=Uc(e.texture),this.texture.matrixAutoUpdate=!0;let[c,u]=e.anchor||[.5,0],d=e.frameWidth/r,f=e.frameHeight/r;this._size=new q(d,f);let p=new mt(d,f);if(p.translate(d*(.5-c),f*(.5-u),0),this._uniforms={uNormalUp:{value:n.normalUp},uWrap:{value:n.wrap},uRoundness:{value:n.roundness},uShadowSkip:{value:0},uShadowSkipBias:{value:.04},uDitherOpacity:{value:1},uShadowDither:{value:1},uDitherTexel:{value:+(n.ditherMode===`texel`)},uFrameSize:{value:new q(e.frameWidth,e.frameHeight)}},this._fx=!!(n.combatFx&&n.lit),this._fx&&(this._uniforms.uFlash={value:new l(0,0,0,0)},this._uniforms.uGlow={value:new l(0,0,0,0)},this._uniforms.uHighlight={value:new l(0,0,0,0)}),this.material=n.lit?this._createLitMaterial(n):this._createUnlitMaterial(n),n.tint!=null&&this.material.color.set(n.tint),this.mesh=new R(p,this.material),this.mesh.name=`Sprite3D.mesh`,this.mesh.rotation.order=`YXZ`,this.mesh.renderOrder=n.renderOrder,this.mesh.customDepthMaterial=this._createDepthMaterial(),this.add(this.mesh),this._proxyMaterial=new me({map:this.texture,alphaTest:n.alphaTest,side:2,colorWrite:!1,depthWrite:!1,fog:!1}),this.shadowProxy=new R(p,this._proxyMaterial),this.shadowProxy.name=`Sprite3D.shadowProxy`,this.shadowProxy.castShadow=!0,this.shadowProxy.receiveShadow=!1,this.shadowProxy.customDepthMaterial=this.mesh.customDepthMaterial,this.add(this.shadowProxy),this.blob=null,this._blobOpacity=n.blobOpacity,n.blobShadow){let e=Kc();this._blobMaterial=new me({color:788498,map:e.texture,transparent:!0,opacity:n.blobOpacity,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4});let t=n.blobSize||[Math.max(.7,d*.52),Math.max(.36,d*.26)];this.blob=new R(e.geometry,this._blobMaterial),this.blob.name=`Sprite3D.blob`,this.blob.scale.set(t[0],1,t[1]),this.blob.position.y=.012,this.blob.renderOrder=i.DECALS,this.blob.castShadow=!1,this.blob.receiveShadow=!1,this.add(this.blob)}this.scale.setScalar(n.scale),this._ready=!0,this.castShadow=n.castShadow,this.receiveShadow=n.receiveShadow;let m=n.animation||(this._resolve(`idle`)?`idle`:null);m&&this._resolve(m)?this.play(m):this._applyFrame()}_createLitMaterial(e){let t=this._uniforms,n=new st({map:this.texture,alphaTest:e.alphaTest,side:2});return e.emissive!=null&&(n.emissive.set(e.emissive),n.emissiveIntensity=e.emissiveIntensity??1),n.onBeforeCompile=e=>{Vc(e,t),e.uniforms.uDitherOpacity=t.uDitherOpacity,e.uniforms.uDitherTexel=t.uDitherTexel,e.uniforms.uFrameSize=t.uFrameSize,e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uDitherOpacity;
uniform float uDitherTexel;
uniform vec2 uFrameSize;
${Lc}`).replace(`#include <alphatest_fragment>`,`#include <alphatest_fragment>
	if ( uDitherOpacity < 0.999 ) {
		vec2 ldp = mix( gl_FragCoord.xy, vQuadUv * uFrameSize, uDitherTexel );
		if ( uDitherOpacity <= luminaBayer4( ldp ) ) discard;
	}`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
	totalEmissiveRadiance *= diffuseColor.rgb;`),t.uFlash&&Hc(e,t)},n.customProgramCacheKey=t.uFlash?()=>`lumina-sprite3d-lit-fx-v1`:()=>`lumina-sprite3d-lit-v1`,n}_createUnlitMaterial(e){let t=this._uniforms,n=new me({map:this.texture,alphaTest:e.alphaTest,side:2});return e.emissive!=null&&n.color.set(e.emissive).multiplyScalar(e.emissiveIntensity??1),n.onBeforeCompile=e=>{e.uniforms.uDitherOpacity=t.uDitherOpacity,e.uniforms.uDitherTexel=t.uDitherTexel,e.uniforms.uFrameSize=t.uFrameSize,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec2 vQuadUv;`).replace(`#include <uv_vertex>`,`#include <uv_vertex>
	vQuadUv = uv;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec2 vQuadUv;
uniform float uDitherOpacity;
uniform float uDitherTexel;
uniform vec2 uFrameSize;
${Lc}`).replace(`#include <alphatest_fragment>`,`#include <alphatest_fragment>
	if ( uDitherOpacity < 0.999 ) {
		vec2 ldp = mix( gl_FragCoord.xy, vQuadUv * uFrameSize, uDitherTexel );
		if ( uDitherOpacity <= luminaBayer4( ldp ) ) discard;
	}`)},n.customProgramCacheKey=()=>`lumina-sprite3d-unlit-v1`,n}_createDepthMaterial(){let e=this._uniforms,t=new m({depthPacking:Pe,map:this.texture,alphaTest:this.material.alphaTest,side:2});return t.onBeforeCompile=t=>{t.uniforms.uDitherOpacity=e.uShadowDither,t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>\nuniform float uDitherOpacity;\n${Lc}`).replace(`#include <alphatest_fragment>`,`#include <alphatest_fragment>
	if ( uDitherOpacity < 0.999 && uDitherOpacity <= luminaBayer4( gl_FragCoord.xy ) ) discard;`)},t.customProgramCacheKey=()=>`lumina-sprite3d-depth-v1`,t}get tint(){return this.material.color}set tint(e){this.material.color.set(e)}get opacity(){return this._opacity}set opacity(e){this._opacity=e<0?0:e>1?1:e,this._applyOpacity()}get bodyOpacity(){return this._bodyOpacity}set bodyOpacity(e){this._bodyOpacity=e<0?0:e>1?1:e,this._applyOpacity()}_applyOpacity(){let e=this._opacity,t=e*this._bodyOpacity;this._uniforms.uDitherOpacity.value=t,this._uniforms.uShadowDither.value=e;let n=e>.001;this.mesh.visible=this._shadowMode===`billboard`?n:t>.001,this.blob&&(this._blobMaterial.opacity=this._blobOpacity*e,this.blob.visible=n),this._applyShadowFlags()}get flipX(){return this._flipX}set flipX(e){e=!!e,e!==this._flipX&&(this._flipX=e,this._applyFrame())}get castShadow(){return!!this._castShadow}set castShadow(e){this._castShadow=!!e,this._ready&&this._applyShadowFlags()}get receiveShadow(){return!!this._receiveShadow}set receiveShadow(e){this._receiveShadow=!!e,this._ready&&this._applyShadowFlags()}get shadowMode(){return this._shadowMode}set shadowMode(e){this._shadowMode=e===`billboard`?`billboard`:`sunFacing`,this._ready&&this._applyOpacity()}get frame(){return this._frame}setFlash(e,t,n,r){return this._fx&&this._uniforms.uFlash.value.set(e,t,n,r),this}setGlow(e,t,n,r){return this._fx&&this._uniforms.uGlow.value.set(e,t,n,r),this}setHighlight(e,t,n,r){return this._fx&&this._uniforms.uHighlight.value.set(e,t,n,r),this}get flash(){return this._fx?this._uniforms.uFlash.value.toArray():[0,0,0,0]}get highlight(){return this._fx?this._uniforms.uHighlight.value.toArray():[0,0,0,0]}get glow(){return this._fx?this._uniforms.uGlow.value.toArray():[0,0,0,0]}get size(){return this._size}_applyShadowFlags(){let e=this._castShadow&&this._opacity>.001,t=this._shadowMode===`sunFacing`;this.shadowProxy.visible=e&&t,this.mesh.castShadow=e&&!t,this.mesh.receiveShadow=!!this._receiveShadow,this._uniforms.uShadowSkip.value=e&&t?1:0}_resolve(e,t=this.direction){let n=this._resolveCache.get(e);n||(n=new Map,this._resolveCache.set(e,n));let r=n.get(t);return r===void 0&&(r=this._resolveUncached(e,t),n.set(t,r)),r}_resolveUncached(e,t){let n=this.sheet.animations||{},r=Yc.exec(e),i=r?e.slice(0,-r[0].length):e,a=r?r[1]:t;if(!r&&n[e])return{key:e,name:e,base:null,anim:n[e],flip:!1};let o=`${i}_${a}`;if(n[o])return{key:o,name:o,base:i,anim:n[o],flip:!1};let s=a===`left`?`right`:a===`right`?`left`:null;return s&&n[`${i}_${s}`]?{key:`${i}_${s}`,name:o,base:i,anim:n[`${i}_${s}`],flip:!0}:r&&n[e]?{key:e,name:e,base:i,anim:n[e],flip:!1}:null}play(e,t={}){let{restart:n=!1,speed:r,keepPhase:i=!1}=t,a=this._resolve(e);return a?a.name===this.animation&&!n&&!this.finished?(r!==void 0&&(this.speed=r),this.playing=!0,this):(this.speed=r===void 0?1:r,this._setAnimation(a,!i||n||this.finished),this.playing=!0,this):(this._warned||=(console.warn(`Sprite3D: unknown animation "${e}"`),!0),this)}_setAnimation(e,t){if(this._anim=e.anim,this._animKey=e.key,this._autoFlip=e.flip,this.animation=e.name,e.base!==null){let t=Yc.exec(e.name);t&&(this.direction=t[1])}let n=Math.max(1,e.anim.frames.length);t?(this._frame=0,this._time=0,this.finished=!1):this._frame%=n;let r=e.anim.frames[this._frame]||e.anim.frames[0];r&&(this._col=r.col,this._row=r.row),this._applyFrame()}setDirection(e){if(e===this.direction||!oe.includes(e))return this;if(this.direction=e,this.animation){let t=Yc.exec(this.animation);if(t){let n=this._resolve(`${this.animation.slice(0,-t[0].length)}_${e}`,e);n&&this._setAnimation(n,!1)}}return this}faceVector(t,n,r=X.uCameraYaw.value){let i=e.directionFromVector(t,n,r,this.direction);return this.setDirection(i)}setFrame(e,t){return this._col=e,this._row=t,this._autoFlip=!1,this._anim=null,this._animKey=null,this.animation=null,this.finished=!1,this._frame=0,this._time=0,this.playing=!1,this._applyFrame(),this}_applyFrame(){let e=this.texture,t=this._frameU,n=this._frameV,r=this._flipX!==this._autoFlip;e.repeat.set(r?-t:t,n),e.offset.set((this._col+ +!!r)*t,1-(this._row+1)*n)}update(e,t){let n=this._anim;if(this.playing&&n&&n.frames.length>0){let t=n.fps>0?n.fps:8;this._time+=e*this.speed;let r=1/t;if(this._time>=r){let e=Math.floor(this._time/r);this._time-=e*r;let t=n.frames.length,i=this._frame+e;if(i>=t&&(n.loop===!1?(i=t-1,this.playing=!1,this.finished||(this.finished=!0,this.onAnimationEnd&&this.onAnimationEnd(this.animation))):i%=t),i!==this._frame){this._frame=i;let e=n.frames[i];this._col=e.col,this._row=e.row,this._applyFrame(),this.onFrameChange&&this.onFrameChange(i,this.animation)}}}let r=X.uCameraYaw.value,i=this.rotation.y;if(this.billboard===`cylindrical`||this.billboard===`spherical`&&!t){let e=0;if(t&&this.tilt!==0){let n=t.matrixWorld.elements[9];e=Math.asin(n<-1?-1:n>1?1:n)}this.mesh.rotation.set(-e*this.tilt,r-i,0)}else this.billboard===`spherical`&&(Xc.setFromRotationMatrix(t.matrixWorld),this.mesh.quaternion.copy(this.quaternion).invert().multiply(Xc));if(this.shadowProxy.visible){let e=X.uSunDirection.value;e.x*e.x+e.z*e.z>1e-8&&(this.shadowProxy.rotation.y=Math.atan2(e.x,e.z)-i)}this.blob&&(this.blob.rotation.y=r-i)}static directionFromVector(e,t,n=0,r=`down`){let i=Math.cos(n),a=Math.sin(n),o=e*i-t*a,s=e*a+t*i,c=Math.abs(o),l=Math.abs(s);if(c<1e-6&&l<1e-6)return r;let u=r===`left`||r===`right`,d=1.15;return(u?c*d>=l:c>l*d)?o>0?`right`:`left`:s>0?`down`:`up`}clone(){let e=new this.constructor(this.sheet,{...this._opts,animation:null,direction:this.direction});return e.name=this.name,e.visible=this.visible,e.position.copy(this.position),e.quaternion.copy(this.quaternion),e.scale.copy(this.scale),e.billboard=this.billboard,e.tilt=this.tilt,e.tint.copy(this.tint),this.material.emissive&&e.material.emissive&&(e.material.emissive.copy(this.material.emissive),e.material.emissiveIntensity=this.material.emissiveIntensity),e.flipX=this.flipX,e.opacity=this.opacity,e.bodyOpacity=this.bodyOpacity,e.shadowMode=this.shadowMode,e.castShadow=this.castShadow,e.receiveShadow=this.receiveShadow,this._fx&&(e._uniforms.uFlash.value.copy(this._uniforms.uFlash.value),e._uniforms.uGlow.value.copy(this._uniforms.uGlow.value),e._uniforms.uHighlight.value.copy(this._uniforms.uHighlight.value)),this.animation?e.play(this.animation,{speed:this.speed}):e.setFrame(this._col,this._row),e.playing=this.playing,e}dispose(){this.parent&&this.parent.remove(this),this.mesh.geometry.dispose(),this.material.dispose(),this.mesh.customDepthMaterial.dispose(),this._proxyMaterial.dispose(),this.texture.dispose(),this.blob&&(this._blobMaterial.dispose(),this.blob=null,qc()),this._anim=null,this.onFrameChange=null,this.onAnimationEnd=null}},$c=class{constructor({capacity:e=256}={}){this.capacity=e,this.mesh=null,this.sprites=[],this._alpha=null}adopt(e){let t=e?.blob;return!t||this.sprites.includes(e)?!1:(this.mesh||this._create(t),t.layers.disable(0),this.sprites.push(e),!0)}release(e){let t=this.sprites.indexOf(e);return t<0?!1:(this.sprites.splice(t,1),e.blob?.layers.enable(0),!0)}update(){let e=this.mesh;if(!e)return;let t=this._alpha.array,n=0;for(let r=0;r<this.sprites.length&&n<this.capacity;r++){let i=this.sprites[r].blob;if(!i||!el(i))continue;let a=i.material.opacity;a>.001&&(i.updateWorldMatrix(!0,!1),e.setMatrixAt(n,i.matrixWorld),t[n]=a,n++)}e.count=n,e.instanceMatrix.needsUpdate=!0,this._alpha.needsUpdate=!0}dispose(){for(let e of this.sprites)e.blob?.layers.enable(0);this.sprites.length=0,this.mesh&&=(this.mesh.removeFromParent(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh.dispose?.(),null)}_create(e){let t=e.material,n=e.geometry.clone();this._alpha=new o(new Float32Array(this.capacity),1),this._alpha.setUsage(gt),n.setAttribute(`aBlobAlpha`,this._alpha);let r=new me({color:t.color.clone(),map:t.map,transparent:!0,opacity:1,depthWrite:!1,polygonOffset:t.polygonOffset,polygonOffsetFactor:t.polygonOffsetFactor,polygonOffsetUnits:t.polygonOffsetUnits,fog:t.fog});r.name=`lumina:blob-batch`,r.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aBlobAlpha;
varying float vBlobAlpha;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
	vBlobAlpha = aBlobAlpha;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vBlobAlpha;`).replace(`#include <alphamap_fragment>`,`#include <alphamap_fragment>
	diffuseColor.a *= vBlobAlpha;`)},r.customProgramCacheKey=()=>`lumina-blob-batch`;let i=new u(n,r,this.capacity);i.name=`BlobBatch`,i.instanceMatrix.setUsage(gt),i.count=0,i.renderOrder=e.renderOrder,i.castShadow=!1,i.receiveShadow=!1,i.frustumCulled=!1,i.matrixAutoUpdate=!1,this.mesh=i}};function el(e){for(let t=e;t;t=t.parent){if(!t.visible)return!1;if(t.isScene)return!0}return!1}var tl=`
uniform float uTime;
uniform float uCameraYaw;
uniform vec2 uWind;
uniform float uWindStrength;
uniform float uFoliageWind;
uniform float uAnchorY;
uniform float uQuadHeight;
uniform float uFrameU;
#ifdef LUMINA_FACE_SUN
uniform vec3 uSunDirection;
#endif
attribute float aFrame;

float luminaFoliageYaw() {
#ifdef LUMINA_FACE_SUN
	vec2 sh = uSunDirection.xz;
	return dot( sh, sh ) > 1e-8 ? atan( sh.x, sh.y ) : uCameraYaw;
#else
	return uCameraYaw;
#endif
}

vec3 luminaYawRotate( vec3 v, float yaw ) {
	float c = cos( yaw );
	float s = sin( yaw );
	return vec3( v.x * c + v.z * s, v.y, - v.x * s + v.z * c );
}
`,nl=`
	vec3 transformed = luminaYawRotate( vec3( position ), luminaFoliageYaw() );
	{
		vec3 lfPos = vec3( 0.0 );
		float lfScale = 1.0;
		#ifdef USE_INSTANCING
			lfPos = instanceMatrix[ 3 ].xyz;
			lfScale = max( length( instanceMatrix[ 0 ].xyz ), 1e-4 );
		#endif
		float lfW = clamp( ( uv.y - uAnchorY ) / max( 1.0 - uAnchorY, 1e-3 ), 0.0, 1.0 );
		float lfWindLen = length( uWind );
		vec2 lfDir = lfWindLen > 1e-4 ? uWind / lfWindLen : vec2( 1.0, 0.0 );
		float lfHash = fract( sin( dot( lfPos.xz, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );
		float lfWave = dot( lfPos.xz, lfDir ) * 0.42 - uTime * ( 1.25 + lfWindLen * 0.55 );
		float lfGust = 0.5 + 0.5 * sin( lfWave ) + 0.25 * sin( lfWave * 0.37 + 1.7 );
		lfGust = lfGust * lfGust;
		float lfFlutter = sin( uTime * ( 2.1 + lfHash * 1.9 ) + lfHash * 6.2831 );
		float lfAmt = uWindStrength * uFoliageWind * ( 0.03 + 0.06 * lfWindLen ) * uQuadHeight * lfScale;
		vec2 lfSway = lfDir * lfAmt * ( 0.3 + lfGust * 1.1 + lfFlutter * 0.25 )
			+ vec2( - lfDir.y, lfDir.x ) * lfAmt * lfFlutter * 0.3;
		transformed.xz += lfSway * lfW / lfScale;
		transformed.y -= dot( lfSway, lfSway ) * lfW / ( lfScale * max( uQuadHeight * lfScale, 0.2 ) ) * 0.5;
	}
`,rl=class{constructor(e){let{sprite:t,instances:n,wind:r=1,castShadow:i=!1,receiveShadow:a=!0,alphaTest:s=.5,normalUp:l=.8,wrap:d=.5,roundness:f=.25,rootDarken:p=.35,randomFrames:h=!1,variance:g=.08,seed:v=1,name:y=`Foliage`}=e,b=t.pixelsPerUnit||16,x=Math.max(1,t.frames|0||1),S=t.texture.image,C=t.width;x>1&&S&&S.width&&Math.abs(S.width-t.width)<.5&&(C=t.width/x);let w=t.height,[T,E]=t.anchor||[.5,0],D=C/b,O=w/b,k=n.length,A=new mt(D,O);A.translate(D*(.5-T),O*(.5-E),0);let ee=new o(new Float32Array(Math.max(1,k)),1);A.setAttribute(`aFrame`,ee),this._ownsTexture=x>1,this.texture=x>1?Uc(t.texture):t.texture,x>1&&(this.texture.repeat.set(1/x,1),this.texture.offset.set(0,0)),this._uniforms={uTime:X.uTime,uCameraYaw:X.uCameraYaw,uWind:X.uWind,uWindStrength:X.uWindStrength,uFoliageWind:{value:r},uAnchorY:{value:E},uQuadHeight:{value:O},uFrameU:{value:1/x},uRootDarken:{value:p},uNormalUp:{value:l},uWrap:{value:d},uRoundness:{value:f},uShadowSkip:{value:+!!i},uShadowSkipBias:{value:i?.03:0}};let j=this._uniforms,M=new st({map:this.texture,alphaTest:s,side:2});M.onBeforeCompile=e=>{Vc(e,j,{shadowCenter:`( modelMatrix * vec4( instanceMatrix[ 3 ].xyz, 1.0 ) ).xyz`}),Object.assign(e.uniforms,j),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\n${tl}`).replace(`#include <beginnormal_vertex>`,`#include <beginnormal_vertex>
	objectNormal = luminaYawRotate( objectNormal, luminaFoliageYaw() );`).replace(`#include <begin_vertex>`,nl).replace(`#include <uv_vertex>`,`#include <uv_vertex>
#ifdef USE_MAP
	vMapUv.x += aFrame * uFrameU;
#endif`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uRootDarken;`).replace(`#include <map_fragment>`,`#include <map_fragment>
	diffuseColor.rgb *= mix( 1.0 - uRootDarken, 1.0, smoothstep( 0.0, 0.6, vQuadUv.y ) );`)},M.customProgramCacheKey=()=>`lumina-foliage-lit-v1`,this.material=M;let N=new m({depthPacking:Pe,map:this.texture,alphaTest:s,side:2});N.onBeforeCompile=e=>{Object.assign(e.uniforms,j),e.uniforms.uSunDirection=X.uSunDirection,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\n#define LUMINA_FACE_SUN\n${tl}`).replace(`#include <begin_vertex>`,nl).replace(`#include <uv_vertex>`,`#include <uv_vertex>
#ifdef USE_MAP
	vMapUv.x += aFrame * uFrameU;
#endif`)},N.customProgramCacheKey=()=>`lumina-foliage-depth-v1`,this.depthMaterial=N,this.object=new u(A,M,Math.max(1,k)),this.object.name=y,this.object.count=k,this.object.customDepthMaterial=N,this.object.castShadow=i,this.object.receiveShadow=a;let P=new c(v),F=new _,I=new B,te=0;for(let e=0;e<k;e++){let t=n[e],r=t.scale??1;te=Math.max(te,r),F.makeScale(r,r,r),F.setPosition(t.x,t.y??0,t.z),this.object.setMatrixAt(e,F),t.tint==null?I.setRGB(1,1,1):I.set(t.tint),g>0&&I.multiplyScalar(1+(P.next()*2-1)*g),this.object.setColorAt(e,I);let i=t.frame;i??=h?Math.floor(P.next()*x):0,ee.array[e]=Math.min(x-1,Math.max(0,i|0))}this.object.instanceMatrix.needsUpdate=!0,this.object.instanceColor&&(this.object.instanceColor.needsUpdate=!0),ee.needsUpdate=!0,k>0&&(this.object.computeBoundingSphere(),this.object.boundingSphere.radius+=Math.hypot(D,O)*Math.max(1,te)+.5),this.count=k}get castShadow(){return this.object.castShadow}set castShadow(e){this.object.castShadow=!!e,this._uniforms.uShadowSkip.value=+!!e,this._uniforms.uShadowSkipBias.value=e?.03:0}get receiveShadow(){return this.object.receiveShadow}set receiveShadow(e){this.object.receiveShadow=!!e}get wind(){return this._uniforms.uFoliageWind.value}set wind(e){this._uniforms.uFoliageWind.value=e}update(){}dispose(){this.object.parent&&this.object.parent.remove(this.object),this.object.geometry.dispose(),this.material.dispose(),this.depthMaterial.dispose(),this._ownsTexture&&this.texture.dispose(),this.object.dispose()}},il={dust:{mode:`area`,motion:`drift`,texture:`glow`,blending:`additive`,count:90,life:[5,10],size:[.06,.12],sizeEnd:1,velocity:[0,.05,0],velocityVariance:[.07,.04,.07],windInfluence:.12,turbulence:[.3,.35],color:`#ffe0a0`,hdr:2.4,alpha:.85,fade:[.25,.3],twinkle:1,nightVisibility:-.85,bounds:[14,4,14]},fireflies:{mode:`area`,motion:`drift`,texture:`glow`,blending:`additive`,count:36,life:[8,14],size:[.2,.3],sizeEnd:1,velocity:[0,0,0],velocityVariance:[.1,.04,.1],windInfluence:.04,turbulence:[.8,.3],color:`#b6ff3c`,colorEnd:`#ffd23c`,hdr:2.4,alpha:1,fade:[.15,.2],blink:1,nightVisibility:1,bounds:[10,2.2,10]},embers:{mode:`point`,motion:`emit`,texture:`square`,blending:`additive`,count:34,life:[.9,2.2],size:[.07,.11],sizeEnd:.35,spawnSize:[.6,.15,.6],velocity:[0,1.5,0],velocityVariance:[.3,.55,.3],radial:.12,gravity:.5,drag:.7,windInfluence:.35,turbulence:[.3,5],color:`#ff8a2a`,colorEnd:`#ff3a12`,hdr:2.4,alpha:1,fade:[.04,.35],twinkle:.35},smoke:{mode:`point`,motion:`emit`,texture:`smoke`,blending:`normal`,count:22,life:[3.5,6],size:[.45,.7],sizeEnd:4.2,spawnSize:[.25,.1,.25],velocity:[0,.8,0],velocityVariance:[.1,.15,.1],gravity:.06,drag:.3,windInfluence:.22,turbulence:[.25,1.2],spin:[.1,.4],color:`#d2cdc8`,colorEnd:`#8d8b92`,alpha:.5,fade:[.12,.55],lit:1},leaves:{mode:`area`,motion:`fall`,texture:`leaf`,blending:`cutout`,count:24,size:[.46,.54],velocity:[0,-.75,0],velocityVariance:[0,.3,0],windInfluence:.45,turbulence:[.55,1.6],spin:[1.2,3],tumble:1,colors:[`#e0752f`,`#f2b04a`,`#b8462a`,`#86ad48`],alpha:1,fade:[.06,.12],lit:1,bounds:[10,6,10]},petals:{mode:`area`,motion:`fall`,texture:`petal`,blending:`cutout`,count:40,size:[.3,.36],velocity:[0,-.5,0],velocityVariance:[0,.3,0],windInfluence:.8,turbulence:[.75,1.3],spin:[1,2.6],tumble:1,colors:[`#f7b3c7`,`#ffd8e3`,`#fff4f6`,`#f28fb0`],alpha:1,fade:[.06,.12],lit:1,bounds:[10,5,10]},rain:{mode:`area`,motion:`precip`,texture:`streak`,blending:`normal`,followCamera:!0,count:1600,size:[.035,.05],aspect:12,streak:.03,velocity:[0,-15,0],velocityVariance:[0,.12,0],windInfluence:.9,color:`#c4d8f6`,alpha:.5,lit:.6,bounds:[36,16,36]},snow:{mode:`area`,motion:`precip`,texture:`snow`,blending:`normal`,followCamera:!0,count:1100,size:[.08,.13],velocity:[0,-1,0],velocityVariance:[0,.35,0],windInfluence:.45,turbulence:[.35,1.1],spin:[.5,.5],color:`#ffffff`,alpha:.95,lit:.75,bounds:[34,14,34]},mist:{mode:`point`,motion:`emit`,texture:`smoke`,blending:`normal`,count:34,life:[1.6,3],size:[.6,.9],sizeEnd:3.2,spawnSize:[2,.3,.4],velocity:[0,.35,.45],velocityVariance:[.45,.3,.35],radial:.5,gravity:.05,drag:1,windInfluence:.2,turbulence:[.2,1.5],spin:[.1,.5],color:`#eef8ff`,colorEnd:`#d2e6f4`,alpha:.28,fade:[.15,.6],lit:.9},footstep:{mode:`burst`,motion:`emit`,texture:`smoke`,blending:`normal`,count:8,life:[.35,.65],size:[.14,.22],sizeEnd:2.2,spawnSize:[.3,.02,.14],burstSpeed:[.5,1.1],burstUp:[.15,.45],gravity:-.3,drag:5,windInfluence:.1,spin:[.5,2],color:`#d6bf98`,alpha:.7,fade:[.05,.6],lit:1},splash:{mode:`burst`,motion:`emit`,texture:`square`,blending:`normal`,count:16,life:[.45,.8],size:[.07,.12],sizeEnd:.6,spawnSize:[.3,.02,.3],burstSpeed:[.8,2.2],burstUp:[2.2,4.2],gravity:-9.8,drag:.4,ballistic:!0,color:`#e8f6ff`,hdr:1.4,alpha:.95,fade:[0,.3],lit:.5},sparkle:{mode:`burst`,motion:`emit`,texture:`star`,blending:`additive`,count:10,life:[.45,1],size:[.28,.5],sizeEnd:.9,pulse:1,spawnSize:[.8,.8,.8],burstSpeed:[.2,.8],burstUp:[.2,.8],velocity:[0,.12,0],gravity:.2,drag:2,spin:[.5,2],color:`#fff6d0`,hdr:6,alpha:1,fade:[.05,.3],bounds:[4,1,4]},hitSpark:{mode:`burst`,motion:`emit`,texture:`streak`,blending:`additive`,variants:1,lit:0,pulse:0,tumble:0,aspect:4,streak:.04,fade:[0,.3],twinkle:0,blink:0,nightVisibility:0,count:8,life:[.12,.25],size:[.05,.08],sizeEnd:.6,spawnSize:[.1,.1,.1],burstSpeed:[3,7],burstUp:[.5,2],gravity:-8,drag:4,color:`#fff2c0`,colorEnd:`#ff9a3c`,hdr:4,alpha:1},emberBurst:{mode:`burst`,motion:`emit`,texture:`streak`,blending:`additive`,variants:1,lit:0,pulse:0,tumble:0,aspect:4,streak:.04,fade:[0,.3],twinkle:0,blink:0,nightVisibility:0,count:10,life:[.4,.9],size:[.05,.09],sizeEnd:.5,spawnSize:[.4,.2,.4],burstSpeed:[1,3],burstUp:[1,3],gravity:1.5,drag:1,colors:[`#ff8a2a`,`#ff3a12`,`#ffd27a`],hdr:3,alpha:1},deathPoof:{mode:`burst`,motion:`emit`,texture:`smoke`,blending:`normal`,variants:1,lit:1,pulse:0,tumble:0,aspect:1,streak:0,fade:[.05,.6],twinkle:0,blink:0,nightVisibility:0,count:10,life:[.4,.8],size:[.5,.5],sizeEnd:2.2,spawnSize:[.5,.3,.5],burstSpeed:[.6,1.4],burstUp:[.3,.8],drag:4,spin:[.5,2],color:`#d8d0c0`,alpha:.7},gooPoof:{mode:`burst`,motion:`emit`,texture:`smoke`,blending:`normal`,variants:1,lit:1,pulse:0,tumble:0,aspect:1,streak:0,fade:[.05,.6],twinkle:0,blink:0,nightVisibility:0,count:10,life:[.4,.8],size:[.5,.5],sizeEnd:2.2,spawnSize:[.5,.3,.5],burstSpeed:[.6,1.4],burstUp:[.3,.8],drag:4,spin:[.5,2],color:`#5fc7b0`,alpha:.7},healGlow:{mode:`burst`,motion:`emit`,texture:`star`,blending:`additive`,variants:1,lit:0,pulse:1,tumble:0,aspect:1,streak:0,fade:[.05,.3],twinkle:0,blink:0,nightVisibility:0,count:8,life:[.5,1],size:[.2,.35],sizeEnd:.8,spawnSize:[.6,.8,.6],velocity:[0,1.2,0],burstSpeed:[.2,.6],burstUp:[0,.3],drag:1,color:`#bfe58f`,hdr:2.4,alpha:1},magicBurst:{mode:`burst`,motion:`emit`,texture:`star`,blending:`additive`,variants:1,lit:0,pulse:1,tumble:0,aspect:1,streak:0,fade:[.05,.3],twinkle:0,blink:0,nightVisibility:0,count:12,life:[.4,.8],size:[.25,.45],sizeEnd:.7,spawnSize:[.3,.3,.3],burstSpeed:[2,5],burstUp:[-.5,.5],drag:3,colors:[`#8fd0ff`,`#f3cf7a`],hdr:3.5,alpha:1},victoryEmbers:{mode:`burst`,motion:`emit`,texture:`streak`,blending:`additive`,variants:1,lit:0,pulse:0,tumble:0,aspect:4,streak:.04,fade:[0,.3],twinkle:0,blink:0,nightVisibility:0,count:12,life:[.7,1.3],size:[.05,.08],sizeEnd:.5,spawnSize:[1,.8,.6],burstSpeed:[.3,1.1],burstUp:[1.6,3.2],gravity:1.2,drag:1.4,colors:[`#ff8a2a`,`#ff3a12`,`#ffd27a`],hdr:1.5,alpha:1},victorySparkle:{mode:`burst`,motion:`emit`,texture:`star`,blending:`additive`,variants:1,lit:0,pulse:1,tumble:0,aspect:1,streak:0,fade:[.05,.3],twinkle:0,blink:0,nightVisibility:0,count:12,life:[.6,1.1],size:[.16,.3],sizeEnd:.8,spawnSize:[1.4,1,.8],velocity:[0,.5,0],burstSpeed:[.15,.6],burstUp:[.2,.8],gravity:.2,drag:2,spin:[.5,2],color:`#fff0c8`,hdr:1.15,alpha:1},levelSparkle:{mode:`burst`,motion:`emit`,texture:`star`,blending:`additive`,variants:1,lit:0,pulse:1,tumble:0,aspect:1,streak:0,fade:[.05,.3],twinkle:0,blink:0,nightVisibility:0,count:14,life:[.6,1.1],size:[.14,.26],sizeEnd:.8,spawnSize:[1.3,.5,1.3],velocity:[0,.9,0],burstSpeed:[.3,.8],burstUp:[.1,.5],gravity:.2,drag:1.5,spin:[.5,2],color:`#fff0c8`,hdr:1.15,alpha:1}},al={mode:`point`,motion:`emit`,texture:`glow`,blending:`additive`,count:32,life:[1,2],size:[.1,.1],sizeEnd:1,aspect:1,streak:0,velocity:[0,0,0],velocityVariance:[0,0,0],radial:0,gravity:0,drag:0,windInfluence:0,turbulence:[0,1],spin:[0,0],tumble:0,color:`#ffffff`,colorEnd:null,colors:null,hdr:1,alpha:1,fade:[.1,.3],twinkle:0,blink:0,nightVisibility:0,lit:0,pulse:0,bounds:[6,3,6],spawnSize:[.2,.2,.2],followCamera:!1,followDistance:20,burstSpeed:[.5,1.5],burstUp:[.5,1.5],ballistic:!1,map:null,variants:1},ol=`
float lpBayer4( vec2 p ) {
	ivec2 q = ivec2( mod( floor( p ), 4.0 ) );
	const float M[ 16 ] = float[ 16 ]( 0.0, 8.0, 2.0, 10.0, 12.0, 4.0, 14.0, 6.0, 3.0, 11.0, 1.0, 9.0, 15.0, 7.0, 13.0, 5.0 );
	return ( M[ q.y * 4 + q.x ] + 0.5 ) / 16.0;
}
`,sl=`
#include <common>
#include <fog_pars_vertex>

uniform float uTime;
uniform float uNight;
uniform vec2 uWind;
uniform float uWindStrength;
uniform vec3 uSunColor;

uniform vec3 uOrigin;
uniform vec3 uBox;
uniform float uSeed;
uniform float uCount;
uniform float uIntensity;
uniform vec2 uLife;
uniform vec2 uSize;
uniform float uSizeEnd;
uniform vec2 uStretch;
uniform vec3 uVel;
uniform vec3 uVelVar;
uniform float uRadial;
uniform float uGravity;
uniform float uDrag;
uniform float uWindInfluence;
uniform vec2 uTurb;
uniform vec2 uSpin;
uniform float uTumble;
uniform vec3 uColor0;
uniform vec3 uColor1;
uniform vec3 uPalette[ 4 ];
uniform float uPaletteSize;
uniform float uAlpha;
uniform vec2 uFade;
uniform float uVariants;
uniform float uTwinkle;
uniform float uBlink;
uniform float uNightVis;
uniform float uLit;
uniform float uPulse;

#ifdef BURST
attribute vec4 aOrigin; // xyz spawn, w birth time
attribute vec4 aVel;    // xyz initial velocity, w life
attribute vec4 aSize;   // x size, y end multiplier, z rotation, w spin
attribute vec4 aColor;  // rgb (linear, HDR), a alpha
attribute vec4 aPhys;   // x gravity, y drag, z wind influence, w seed
#endif

varying vec2 vUv;
varying vec4 vColor;
varying float vVariant;

uvec4 lpPcg4( uvec4 v ) {
	v = v * 1664525u + 1013904223u;
	v.x += v.y * v.w; v.y += v.z * v.x; v.z += v.x * v.y; v.w += v.y * v.z;
	v ^= v >> 16u;
	v.x += v.y * v.w; v.y += v.z * v.x; v.z += v.x * v.y; v.w += v.y * v.z;
	return v;
}

vec4 lpHash( float a, float b, float c ) {
	uvec4 h = lpPcg4( uvec4( uint( a ), uint( b ), uint( c ), 2654435769u ) );
	return vec4( h >> 8u ) / 16777216.0;
}

void main() {

	vec3 wind3 = vec3( uWind.x, 0.0, uWind.y ) * uWindStrength;
	vec3 wpos = vec3( 0.0 );
	vec3 vel = vec3( 0.0, - 1.0, 0.0 );
	float t = 0.5;
	float age = 0.0;
	float size = 0.1;
	float angle = 0.0;
	float tumble = 1.0;
	float gate = 1.0;
	vec3 col = uColor0;
	float alpha = uAlpha;
	vec4 s = vec4( 0.5 );

#ifdef BURST

	age = uTime - aOrigin.w;
	float life = max( aVel.w, 1e-3 );
	t = age / life;
	gate = ( age >= 0.0 && t < 1.0 ) ? 1.0 : 0.0;
	s = fract( vec4( aPhys.w, aPhys.w * 7.31, aPhys.w * 13.17, aPhys.w * 3.73 ) );
	float k = max( aPhys.y, 1e-3 );
	vec3 g = vec3( 0.0, aPhys.x, 0.0 ) + wind3 * aPhys.z;
	float ek = exp( - k * max( age, 0.0 ) );
	float E = ( 1.0 - ek ) / k;
	wpos = aOrigin.xyz + aVel.xyz * E + g / k * ( age - E );
	vel = aVel.xyz * ek + g / k * ( 1.0 - ek );
	size = aSize.x * mix( 1.0, aSize.y, clamp( t, 0.0, 1.0 ) );
	angle = aSize.z + aSize.w * age;
	col = aColor.rgb;
	alpha = aColor.a;
	tumble = mix( 1.0, cos( age * aSize.w * 1.3 + s.y * 6.2831 ), uTumble );

#else

	float id = float( gl_InstanceID );
	s = lpHash( id, 0.0, uSeed );
	gate = clamp( uIntensity * uCount - id, 0.0, 1.0 ) * clamp( uIntensity * 3.0, 0.0, 1.0 );

	#ifdef MOTION_PRECIP

		vec4 r = lpHash( id, 1.0, uSeed );
		vec3 box = max( uBox, vec3( 1e-3 ) );
		float speed = abs( uVel.y ) * mix( 1.0 - uVelVar.y, 1.0 + uVelVar.y, r.w );
		vel = vec3( uVel.x, - speed, uVel.z ) + wind3 * uWindInfluence;
		vec3 p = r.xyz * box + vel * uTime;
		p.x += sin( uTime * uTurb.y + r.x * 43.0 ) * uTurb.x;
		p.z += cos( uTime * uTurb.y * 0.83 + r.z * 37.0 ) * uTurb.x;
		vec3 bmin = uOrigin - box * 0.5;
		vec3 rel = mod( p - bmin, box );
		wpos = bmin + rel;
		vec3 rn = rel / box;
		alpha *= smoothstep( 0.0, 0.05, rn.y ) * ( 1.0 - smoothstep( 0.8, 1.0, rn.y ) )
			* smoothstep( 0.0, 0.12, rn.x ) * ( 1.0 - smoothstep( 0.88, 1.0, rn.x ) )
			* smoothstep( 0.0, 0.12, rn.z ) * ( 1.0 - smoothstep( 0.88, 1.0, rn.z ) );
		size = mix( uSize.x, uSize.y, s.y );
		angle = s.w * 6.2831 + uSpin.x * uTime * ( s.x < 0.5 ? - 1.0 : 1.0 );
		age = uTime;
		t = 0.5;

	#else

		float life = max( mix( uLife.x, uLife.y, s.y ), 0.05 );
		#ifdef MOTION_FALL
			float fallSpeed = max( abs( uVel.y ) * mix( 1.0 - uVelVar.y, 1.0 + uVelVar.y, s.y ), 0.05 );
			life = max( uBox.y / fallSpeed, 0.05 );
		#endif
		float tt = uTime + s.z * life;
		float cycle = floor( tt / life );
		age = tt - cycle * life;
		t = age / life;
		vec4 r = lpHash( id, cycle + 2.0, uSeed + 17.0 );
		vec4 r2 = lpHash( id, cycle + 2.0, uSeed + 91.0 );
		vec3 spawn = uOrigin + ( r.xyz - 0.5 ) * uBox;

		#if defined( MOTION_DRIFT )

			float f = uTurb.y;
			vec3 wob = vec3(
				sin( uTime * f * ( 0.7 + r.w * 0.6 ) + r.x * 6.2831 ),
				sin( uTime * f * ( 0.5 + r2.x * 0.5 ) + r.y * 6.2831 ) * 0.5,
				cos( uTime * f * ( 0.6 + r2.y * 0.5 ) + r.z * 6.2831 ) ) * uTurb.x;
			vel = uVel + ( r2.xyz - 0.5 ) * 2.0 * uVelVar + wind3 * uWindInfluence;
			wpos = spawn + vel * age + wob;

		#elif defined( MOTION_FALL )

			spawn.y = uOrigin.y + uBox.y * 0.5;
			float sf = uTurb.y * ( 0.7 + 0.6 * r.w );
			wpos = spawn + vec3( 0.0, - fallSpeed * age, 0.0 ) + wind3 * uWindInfluence * age
				+ vec3( sin( age * sf + r.x * 6.2831 ), 0.0, cos( age * sf * 0.7 + r.z * 6.2831 ) * 0.6 ) * uTurb.x;
			vel = vec3( 0.0, - fallSpeed, 0.0 );
			tumble = mix( 1.0, cos( age * mix( uSpin.x, uSpin.y, r2.x ) * 1.3 + r2.y * 6.2831 ), uTumble );

		#else

			float ang = r.w * 6.2831;
			vec3 v0 = uVel + ( r2.xyz - 0.5 ) * 2.0 * uVelVar + vec3( cos( ang ), 0.0, sin( ang ) ) * uRadial * ( 0.4 + 0.6 * r2.w );
			float k = max( uDrag, 1e-3 );
			vec3 g = vec3( 0.0, uGravity, 0.0 ) + wind3 * uWindInfluence;
			float ek = exp( - k * age );
			float E = ( 1.0 - ek ) / k;
			wpos = spawn + v0 * E + g / k * ( age - E );
			vel = v0 * ek + g / k * ( 1.0 - ek );
			wpos += vec3( sin( age * uTurb.y + r.x * 6.2831 ), 0.0, cos( age * uTurb.y * 1.3 + r.y * 6.2831 ) ) * uTurb.x * t;
			tumble = mix( 1.0, cos( age * uSpin.y * 1.3 + r2.y * 6.2831 ), uTumble );

		#endif

		size = mix( uSize.x, uSize.y, r2.z ) * mix( 1.0, uSizeEnd, t );
		angle = r2.w * 6.2831 + mix( uSpin.x, uSpin.y, r.w ) * age * ( r2.x < 0.5 ? - 1.0 : 1.0 );
		col = mix( uColor0, uColor1, t );
		if ( uPaletteSize > 0.5 ) {
			int pIdx = int( min( floor( r2.z * uPaletteSize ), uPaletteSize - 1.0 ) );
			col = uPalette[ pIdx ];
		}
		s = r;

	#endif

#endif

	// life envelope
	float fadeIn = smoothstep( 0.0, max( uFade.x, 1e-4 ), t );
	float fadeOut = 1.0 - smoothstep( 1.0 - max( uFade.y, 1e-4 ), 1.0, t );
	alpha *= fadeIn * fadeOut;
	size *= mix( 1.0, sin( PI * clamp( t, 0.0, 1.0 ) ), uPulse );

	if ( uTwinkle > 0.0 ) {
		// max(): GPU sin() may overshoot -1 slightly; pow() of a negative base is NaN, and a NaN in the
		// HDR target spreads through bloom as black/white blocks
		float tw = pow( max( 0.5 + 0.5 * sin( uTime * ( 1.1 + s.x * 2.3 ) + s.z * 6.2831 ), 0.0 ), 14.0 );
		col *= 1.0 + uTwinkle * tw * 3.0;
		size *= 1.0 + uTwinkle * tw * 0.5;
	}
	if ( uBlink > 0.0 ) {
		float bl = smoothstep( 0.1, 0.95, sin( uTime * ( 0.8 + s.y * 1.3 ) + s.w * 6.2831 ) );
		alpha *= mix( 1.0, bl, uBlink );
		size *= mix( 1.0, 0.55 + 0.45 * bl, uBlink );
	}
	if ( uNightVis > 0.0 ) alpha *= smoothstep( 0.3, 0.85, uNight ) * uNightVis;
	else if ( uNightVis < 0.0 ) alpha *= 1.0 - uNight * ( - uNightVis );
	if ( uLit > 0.0 ) {
		vec3 amb = mix( vec3( 0.42, 0.45, 0.52 ), vec3( 0.06, 0.08, 0.15 ), uNight );
		col *= mix( vec3( 1.0 ), amb + uSunColor * 0.75, uLit );
	}
	if ( tumble < 0.0 ) col *= 0.78; // back side of a tumbling leaf
	alpha *= gate;

	vec4 mv = viewMatrix * vec4( wpos, 1.0 );
	vec2 corner = position.xy;
	vUv = uv;

#ifdef STREAK
	vec3 vv = ( viewMatrix * vec4( vel, 0.0 ) ).xyz;
	float vl = length( vv.xy );
	vec2 dir = vl > 1e-4 ? vv.xy / vl : vec2( 0.0, - 1.0 );
	vec2 side = vec2( - dir.y, dir.x );
	float len = size * uStretch.x + vl * uStretch.y;
	mv.xy += side * corner.x * size + dir * corner.y * len;
#else
	float tf = ( tumble >= 0.0 ? 1.0 : - 1.0 ) * max( abs( tumble ), 0.18 );
	corner.x *= tf;
	corner.y *= uStretch.x;
	float ca = cos( angle );
	float sa = sin( angle );
	mv.xy += vec2( corner.x * ca - corner.y * sa, corner.x * sa + corner.y * ca ) * size;
#endif

	gl_Position = projectionMatrix * mv;
	if ( alpha <= 0.002 ) gl_Position = vec4( 0.0, 0.0, 2.0, 1.0 ); // cull dead / hidden particles

	vColor = vec4( col, alpha );
	vVariant = floor( s.x * uVariants );

	#ifdef USE_FOG
		// the standard chunk (vFogDepth = -mvPosition.z), so a game that patches it — e.g. to start
		// the fog some distance in front of the camera — fogs particles like every other material
		vec4 mvPosition = mv;
		#include <fog_vertex>
	#endif
}
`,cl=`
#include <common>
#include <fog_pars_fragment>

uniform sampler2D uMap;
uniform float uVariants;

varying vec2 vUv;
varying vec4 vColor;
varying float vVariant;

${ol}

void main() {

#ifdef USE_PMAP
	vec4 tex = texture2D( uMap, vec2( ( min( vVariant, uVariants - 1.0 ) + vUv.x ) / uVariants, vUv.y ) );
#else
	float across = 1.0 - abs( vUv.x * 2.0 - 1.0 );
	vec4 tex = vec4( 1.0, 1.0, 1.0, smoothstep( 0.0, 1.0, vUv.y ) * smoothstep( 0.0, 0.7, across ) );
#endif

	vec4 outColor = vec4( vColor.rgb * tex.rgb, vColor.a * tex.a );

#ifdef CUTOUT
	if ( tex.a < 0.5 ) discard;
	if ( vColor.a < 0.999 && vColor.a <= lpBayer4( gl_FragCoord.xy ) ) discard;
	outColor.a = 1.0;
#else
	if ( outColor.a < 0.004 ) discard;
#endif

	gl_FragColor = outColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

	#ifdef USE_FOG
		#ifdef FOG_EXP2
			float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
		#else
			float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
		#endif
		#ifdef ADDITIVE
			gl_FragColor.rgb *= 1.0 - fogFactor;
		#else
			gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
		#endif
	#endif
}
`;function ll(e,t,n,r,i){for(let a=0;a<r.length;a++){let o=r[a];for(let r=0;r<o.length;r++){let s=i[o[r]];s&&e.set(t+r,n+a,[s[0]*255,s[0]*255,s[0]*255,s[1]*255])}}}function ul(e,t,n,{angle:r,a:i,b:a,midrib:o,shades:s,stem:c}){let l=n/2-.5,u=n/2-.5,d=Math.cos(r),f=Math.sin(r),p=new W(n,n);for(let e=0;e<n;e++)for(let t=0;t<n;t++){let n=t-l,r=e-u,c=n*d+r*f,m=-n*f+r*d,h=a*(1-Math.max(0,c/i)*.35),g=c*c/(i*i)+m*m/(h*h);if(g>1)continue;let _=m<-.35?s.light:s.mid;g>.62&&m>.2&&(_=s.dark),o&&Math.abs(m)<.45&&c>-i*.8&&c<i*.75&&(_=s.rib),p.set(t,e,[_*255,_*255,_*255,255])}if(c){let e=Math.round(l-d*(i+.6)),t=Math.round(u-f*(i+.6));p.set(e,t,[s.outline*255,s.outline*255,s.outline*255,255])}let m=s.outline*255;p.outline([m,m,m,255]),e.blit(p,t,0)}function dl(e){switch(e){case`glow`:{let e=new W(32,32);for(let t=0;t<32;t++)for(let n=0;n<32;n++){let r=Math.hypot(n+.5-16,t+.5-16)/16,i=K(.8*Math.exp(-r*r*4.5)+.2*Math.exp(-r*r*40)-.009*r,0,1);e.set(n,t,[255,255,255,i*255])}let t=Qe(e.toCanvas(),{wrap:`clamp`,mipmaps:!0,srgb:!0,name:`particle_glow`});return t.magFilter=F,{texture:t,variants:1}}case`square`:{let e=new W(8,4),t={b:[1,.55],d:[1,1]};return ll(e,0,0,[`.bb.`,`bddb`,`bddb`,`.bb.`],t),ll(e,4,0,[`....`,`.dd.`,`.dd.`,`....`],t),{texture:Qe(e.toCanvas(),{wrap:`clamp`,name:`particle_square`}),variants:2}}case`snow`:{let e=new W(8,4),t={a:[1,.4],b:[1,.8],d:[1,1]};return ll(e,0,0,[`.aa.`,`abba`,`abda`,`.aa.`],t),ll(e,4,0,[`....`,`.bd.`,`.db.`,`....`],t),{texture:Qe(e.toCanvas(),{wrap:`clamp`,name:`particle_snow`}),variants:2}}case`star`:{let e=new W(18,9),t={a:[1,.3],b:[1,.6],c:[1,.85],d:[1,1]};return ll(e,0,0,[`....a....`,`....b....`,`....c....`,`...bdb...`,`abcdddcba`,`...bdb...`,`....c....`,`....b....`,`....a....`],t),ll(e,9,0,[`.........`,`.........`,`..a...a..`,`...bcb...`,`...cdc...`,`...bcb...`,`..a...a..`,`.........`,`.........`],t),{texture:Qe(e.toCanvas(),{wrap:`clamp`,name:`particle_star`}),variants:2}}case`leaf`:{let e=new W(32,8),t={light:1,mid:.8,dark:.62,rib:.66,outline:.3};return ul(e,0,8,{angle:-.75,a:3.1,b:1.55,midrib:!0,shades:t,stem:!0}),ul(e,8,8,{angle:.6,a:2.7,b:1.7,midrib:!0,shades:t,stem:!0}),ul(e,16,8,{angle:-1.35,a:3,b:1.35,midrib:!1,shades:t,stem:!0}),ul(e,24,8,{angle:2.3,a:2.6,b:1.9,midrib:!0,shades:t,stem:!1}),{texture:Qe(e.toCanvas(),{wrap:`clamp`,name:`particle_leaf`}),variants:4}}case`petal`:{let e=new W(32,8),t={light:1,mid:.92,dark:.8,rib:.9,outline:.66};return ul(e,0,8,{angle:-.5,a:2.2,b:1.6,midrib:!1,shades:t,stem:!1}),ul(e,8,8,{angle:.9,a:2,b:1.4,midrib:!1,shades:t,stem:!1}),ul(e,16,8,{angle:2,a:2.4,b:1.3,midrib:!1,shades:t,stem:!1}),ul(e,24,8,{angle:-1.8,a:1.8,b:1.5,midrib:!1,shades:t,stem:!1}),{texture:Qe(e.toCanvas(),{wrap:`clamp`,name:`particle_petal`}),variants:4}}case`smoke`:{let e=new W(128,32);for(let t=0;t<4;t++){let n=t*32;for(let r=0;r<32;r++)for(let i=0;i<32;i++){let a=(i+.5-16)/16,o=(r+.5-16)/16,s=Ke(i/9+t*7.3,r/9+t*3.1,{octaves:3,seed:71+t}),c=Math.hypot(a,o)*1.08+(s-.5)*.55,l=K((.95-c)/.55,0,1);l=l*l*(3-2*l);let u=K(Math.floor(l*5+N(i,r)-.25),0,5)/5;if(u<=0)continue;let d=K(.5-o*.35-a*.15+(s-.5)*.5,0,1),f=.74+Math.round(d*3)/3*.26;e.set(n+i,r,[f*255,f*255,Math.min(1,f*1.03)*255,u*255])}}return{texture:Qe(e.toCanvas(),{wrap:`clamp`,mipmaps:!0,name:`particle_smoke`}),variants:4}}default:return null}}function fl(e,t){return e==null?t:Array.isArray(e)?[e[0],e.length>1?e[1]:e[0]]:[e,e]}function pl(e,t){return e==null?new L().fromArray(t):e.isVector3?e.clone():Array.isArray(e)?new L(e[0],e[1],e[2]):new L(e,e,e)}function ml(e,t=1,n=new B){return n.set(e).multiplyScalar(t)}var hl=(e,t)=>t[0]+(t[1]-t[0])*e.next();function gl(e,t){let n=le(il,e);if(!n)throw Error(`Particles: unknown preset "${e}"`);let r={...al,...n,...t,preset:e};return Array.isArray(t.color)&&t.color.length===2&&typeof t.color[0]!=`number`?(r.color=t.color[0],r.colorEnd=t.color[1]):t.color!=null&&t.colorEnd===void 0&&(r.colorEnd=null,t.colors===void 0&&(r.colors=null)),r.size=fl(r.size,[.1,.1]),r.life=fl(r.life,[1,2]),r.spin=fl(r.spin,[0,0]),r.fade=fl(r.fade,[.1,.3]),r.turbulence=fl(r.turbulence,[0,1]),r.burstSpeed=fl(r.burstSpeed,[.5,1.5]),r.burstUp=fl(r.burstUp,[.5,1.5]),r}function _l(e,t){let n=[new B,new B,new B,new B],r=0;if(Array.isArray(e.colors)&&e.colors.length){r=Math.min(4,e.colors.length);for(let t=0;t<4;t++)ml(e.colors[Math.min(t,r-1)],e.hdr,n[t])}let i=ml(e.color,e.hdr),a=e.colorEnd==null?i.clone():ml(e.colorEnd,e.hdr);return{uTime:X.uTime,uNight:X.uNight,uWind:X.uWind,uWindStrength:X.uWindStrength,uSunColor:X.uSunColor,...Be.clone(Y.fog),uMap:{value:t?t.texture:null},uVariants:{value:t?t.variants:1},uOrigin:{value:new L},uBox:{value:new L(1,1,1)},uSeed:{value:1},uCount:{value:1},uIntensity:{value:1},uLife:{value:new q(e.life[0],e.life[1])},uSize:{value:new q(e.size[0],e.size[1])},uSizeEnd:{value:e.sizeEnd},uStretch:{value:new q(e.aspect,e.streak)},uVel:{value:pl(e.velocity,[0,0,0])},uVelVar:{value:pl(e.velocityVariance,[0,0,0])},uRadial:{value:e.radial},uGravity:{value:e.gravity},uDrag:{value:e.drag},uWindInfluence:{value:e.windInfluence},uTurb:{value:new q(e.turbulence[0],e.turbulence[1])},uSpin:{value:new q(e.spin[0],e.spin[1])},uTumble:{value:e.tumble},uColor0:{value:i},uColor1:{value:a},uPalette:{value:n},uPaletteSize:{value:r},uAlpha:{value:e.alpha},uFade:{value:new q(e.fade[0],e.fade[1])},uTwinkle:{value:e.twinkle},uBlink:{value:e.blink},uNightVis:{value:e.nightVisibility},uLit:{value:typeof e.lit==`boolean`?+!!e.lit:e.lit},uPulse:{value:e.pulse}}}function vl(e,t,n){let r={};r[`MOTION_${String(n?`emit`:e.motion).toUpperCase()}`]=``,n&&(r.BURST=``),e.texture===`streak`&&!e.map?r.STREAK=``:r.USE_PMAP=``,e.blending===`additive`&&(r.ADDITIVE=``),e.blending===`cutout`&&(r.CUTOUT=``);let i=e.blending===`cutout`;return new tt({name:`Particles.${e.preset}${n?`.burst`:``}`,uniforms:t,defines:r,vertexShader:sl,fragmentShader:cl,transparent:!i,depthWrite:i,blending:e.blending===`additive`?2:1,side:2,fog:!0})}function yl(){let e=new bt,t=new mt(1,1);return e.setIndex(t.index),e.setAttribute(`position`,t.getAttribute(`position`)),e.setAttribute(`uv`,t.getAttribute(`uv`)),t.dispose(),e}var bl=class{constructor(e,t){let n=gl(t.preset,t);this.system=e,this.config=n,this.preset=n.preset,this.followCamera=!!n.followCamera,this.followDistance=n.followDistance;let r=!!t.bounds||n.mode===`area`||n.motion===`precip`;this.mode=r?`area`:`point`;let a=t.bounds?.center??t.position??new L;this.position=a.isVector3?a.clone():Array.isArray(a)?new L().fromArray(a):new L(a.x??0,a.y??0,a.z??0);let o=r?t.bounds?.size??n.bounds:n.spawnSize;this.boxSize=pl(o,[1,1,1]);let s=!!t.bounds?.center,c=this.position.y;r&&!s&&t.position&&n.motion!==`precip`&&(this.position.y+=this.boxSize.y*.5),this.followBaseY=s?c-this.boxSize.y*.5:t.position?c:0;let l=n.count;t.rate!=null&&n.motion!==`precip`&&(l=Math.ceil(t.rate*(n.life[0]+n.life[1])*.5)),this.count=Math.max(1,Math.round(l));let u=null;n.map?u={texture:n.map,variants:n.variants||1}:n.texture!==`streak`&&(u=e._texture(n.texture)),this.uniforms=_l(n,u),this.uniforms.uOrigin.value=this.position,this.uniforms.uBox.value.copy(this.boxSize),this.uniforms.uSeed.value=t.seed??e._nextSeed(n.preset),this.uniforms.uCount.value=this.count,this.geometry=yl(),this.geometry.instanceCount=this.count,this.material=vl(n,this.uniforms,!1),this.object=new R(this.geometry,this.material),this.object.name=`Emitter.${n.preset}`,this.object.renderOrder=i.PARTICLES+(n.blending===`additive`?2:0),this.object.matrixAutoUpdate=!1,this.object.castShadow=!1,this.object.receiveShadow=!1,this.object.frustumCulled=!this.followCamera,this._windKey=this._windStrength(),this.geometry.boundingSphere=new ht(this.position.clone(),this._estimateRadius()),this.geometry.boundingBox=null,this._enabled=!0,this._intensity=1,this.enabled=t.enabled??!0,this.intensity=t.intensity??1}_windStrength(){return X.uWind.value.length()*Math.max(1,X.uWindStrength.value)}_estimateRadius(){let e=this.config,t=e.life[1],n=this.uniforms,r=n.uVel.value.length()+n.uVelVar.value.length()+e.radial,i=Math.max(e.drag,.001),a=X.uWind.value.length()*Math.max(1,X.uWindStrength.value)*e.windInfluence,o=Math.abs(e.gravity)+a,s=Math.min(r*t,r/i)+Math.min(.5*o*t*t,o/i*t);this.config.motion===`fall`&&(s=a*(this.boxSize.y/Math.max(.05,Math.abs(n.uVel.value.y)))+e.turbulence[0]),this.config.motion===`drift`&&(s=(r+a)*t+e.turbulence[0]);let c=e.size[1]*Math.max(1,e.sizeEnd)*Math.max(1,e.aspect);return this.boxSize.length()*.5+s+c+.5}get enabled(){return this._enabled}set enabled(e){this._enabled=!!e,this._refresh()}get intensity(){return this._intensity}set intensity(e){this._intensity=Math.max(0,+e||0),this.uniforms.uIntensity.value=this._intensity,this._refresh()}_refresh(){let e=Math.min(this.count,Math.ceil(this.count*Math.min(1,this._intensity)));this.geometry.instanceCount=e,this.object.visible=this._enabled&&e>0}_update(e,t){if(this.followCamera&&e){let e=this.followBaseY,n=this.followDistance;t.fy<-.05&&(n=K((e-t.py)/t.fy,2,120)),this.position.set(t.px+t.fx*n,e+this.boxSize.y*.5,t.pz+t.fz*n)}let n=this.geometry.boundingSphere;if(n.center.copy(this.position),this.object.frustumCulled){let e=this._windStrength();Math.abs(e-this._windKey)>.02*Math.max(1,this._windKey)&&(this._windKey=e,n.radius=this._estimateRadius())}}dispose(){this.object.parent&&this.object.parent.remove(this.object),this.geometry.dispose(),this.material.dispose();let e=this.system.emitters,t=e.indexOf(this);t>=0&&e.splice(t,1)}},xl=class{constructor(e,t,n=512){this.capacity=n,this.head=0,this.used=0,this.aliveUntil=-1/0;let r=null;t.map?r={texture:t.map,variants:t.variants||1}:t.texture!==`streak`&&(r=e._texture(t.texture)),this.uniforms=_l(t,r);let a=yl(),s=()=>{let e=new o(new Float32Array(n*4),4);return e.setUsage(gt),e};this.aOrigin=s(),this.aVel=s(),this.aSize=s(),this.aColor=s(),this.aPhys=s();for(let e=0;e<n;e++)this.aOrigin.array[e*4+3]=-1e6;a.setAttribute(`aOrigin`,this.aOrigin),a.setAttribute(`aVel`,this.aVel),a.setAttribute(`aSize`,this.aSize),a.setAttribute(`aColor`,this.aColor),a.setAttribute(`aPhys`,this.aPhys),a.instanceCount=0,this.geometry=a,this.material=vl(t,this.uniforms,!0),this.object=new R(a,this.material),this.object.name=`Particles.burst.${t.texture}.${t.blending}`,this.object.frustumCulled=!1,this.object.matrixAutoUpdate=!1,this.object.renderOrder=i.PARTICLES+(t.blending===`additive`?3:1),this.object.visible=!1,this._dirtyStart=1/0,this._dirtyEnd=-1}write(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y){let b=this.head,x=b*4,S=this.aOrigin.array;S[x]=e,S[x+1]=t,S[x+2]=n,S[x+3]=r,S=this.aVel.array,S[x]=i,S[x+1]=a,S[x+2]=o,S[x+3]=s,S=this.aSize.array,S[x]=c,S[x+1]=l,S[x+2]=u,S[x+3]=d,S=this.aColor.array,S[x]=f,S[x+1]=p,S[x+2]=m,S[x+3]=h,S=this.aPhys.array,S[x]=g,S[x+1]=_,S[x+2]=v,S[x+3]=y,b<this._dirtyStart&&(this._dirtyStart=b),b+1>this._dirtyEnd&&(this._dirtyEnd=b+1),this.head=(b+1)%this.capacity,this.used=Math.max(this.used,b+1),r+s>this.aliveUntil&&(this.aliveUntil=r+s)}flush(){if(this._dirtyEnd<0)return;let e=this._dirtyStart*4,t=(this._dirtyEnd-this._dirtyStart)*4;for(let n of[this.aOrigin,this.aVel,this.aSize,this.aColor,this.aPhys])n.addUpdateRange(e,t),n.needsUpdate=!0;this._dirtyStart=1/0,this._dirtyEnd=-1,this.geometry.instanceCount=this.used,this.object.visible=!0}dispose(){this.object.parent&&this.object.parent.remove(this.object),this.geometry.dispose(),this.material.dispose()}},Sl=class{constructor(e){this.scene=e,this.object=new Tt,this.object.name=`Particles`,e&&e.add(this.object),this.emitters=[],this._pools=new Map,this._poolList=[],this._burstConfigs=new Map,this._textures=new Map,this._rng=new c(20903),this._emitterCounter=0,this._cam={px:0,py:0,pz:0,fx:0,fy:-1,fz:0}}_texture(e){let t=this._textures.get(e);return t===void 0&&(t=dl(e),this._textures.set(e,t)),t}_nextSeed(e){return this._emitterCounter++,(j(e)+this._emitterCounter*7919)%1000003}createEmitter(e){let t=new bl(this,e);return this.emitters.push(t),this.object.add(t.object),t}_pool(e){let t=`${e.map?e.map.uuid:e.texture}|${e.variants}|${e.blending}|${+e.lit}|${e.pulse}|${e.tumble}|${e.aspect}|${e.streak}|${e.fade[0]}|${e.fade[1]}|${e.twinkle}|${e.blink}|${e.nightVisibility}`,n=this._pools.get(t);return n||(n=new xl(this,e),this._pools.set(t,n),this._poolList.push(n),this.object.add(n.object)),n}_burstConfig(e,t){let n=!1;for(let e in t){n=!0;break}if(!n){let t=this._burstConfigs.get(e);if(t)return t}let r=gl(e,t);return r._spawn=pl(r.spawnSize,[.2,.2,.2]),r._vel=pl(r.velocity,[0,0,0]),r._velVar=pl(r.velocityVariance,[0,0,0]),r._color=ml(r.color,r.hdr),r._palette=Array.isArray(r.colors)&&r.colors.length?r.colors.map(e=>ml(e,r.hdr)):null,r._lit=typeof r.lit==`boolean`?+!!r.lit:r.lit,r._pool=this._pool(r),n||this._burstConfigs.set(e,r),r}burst(e,t,n=12,r={}){let i=this._burstConfig(e,r),a=i._pool,o=this._rng,s=X.uTime.value,c=i._vel,l=i._velVar,u=i._spawn,d=i._palette,f=i._color,p=Math.max(0,Math.min(a.capacity,n|0));for(let e=0;e<p;e++){let e=o.next()*Math.PI*2,n=hl(o,i.burstSpeed),r=hl(o,i.burstUp),p=Math.cos(e)*n+c.x+(o.next()*2-1)*l.x,m=r+c.y+(o.next()*2-1)*l.y,h=Math.sin(e)*n+c.z+(o.next()*2-1)*l.z,g=hl(o,i.life);i.ballistic&&i.gravity<0&&m>0&&(g=Math.min(g,2*m/-i.gravity*.95));let _=d?d[Math.floor(o.next()*d.length)]:f,v=hl(o,i.spin)*(o.next()<.5?-1:1);a.write(t.x+(o.next()-.5)*u.x,t.y+(o.next()-.5)*u.y,t.z+(o.next()-.5)*u.z,s,p,m,h,g,hl(o,i.size),i.sizeEnd,o.next()*Math.PI*2,v,_.r,_.g,_.b,i.alpha,i.gravity,i.drag,i.windInfluence,o.next())}a.flush()}update(e,t){let n=this._cam;if(t){let e=t.matrixWorld.elements;n.px=e[12],n.py=e[13],n.pz=e[14],n.fx=-e[8],n.fy=-e[9],n.fz=-e[10]}for(let e=0;e<this.emitters.length;e++)this.emitters[e]._update(t,n);let r=X.uTime.value,i=this._poolList;for(let e=0;e<i.length;e++){let t=i[e];t.object.visible&&r>t.aliveUntil+.05&&(t.object.visible=!1)}}dispose(){for(let e of this.emitters.slice())e.dispose();this.emitters.length=0;for(let e of this._poolList)e.dispose();this._pools.clear(),this._poolList.length=0,this._burstConfigs.clear();for(let e of this._textures.values())e&&e.texture.dispose();this._textures.clear(),this.object.parent&&this.object.parent.remove(this.object)}},Cl=`
uniform vec3 uSunDirection;
uniform float uSteepness;
uniform float uUseSun;
uniform vec3 uAxis;
uniform float uLength;
uniform float uWidth;
uniform float uTopWidth;

varying vec2 vUv;
varying vec3 vWorld;
varying float vAxisView;

#include <fog_pars_vertex>

void main() {
  vec3 toLight;
  if (uUseSun > 0.5) {
    vec3 s = normalize(uSunDirection);
    float hl = length(s.xz);
    vec2 hd = hl > 1e-4 ? s.xz / hl : vec2(0.0, 1.0);
    float el = asin(clamp(s.y, -1.0, 1.0));
    el = max(el, 0.12);
    el = mix(el, 1.5707963, uSteepness);
    toLight = vec3(hd.x * cos(el), sin(el), hd.y * cos(el));
  } else {
    toLight = -normalize(uAxis);
  }

  vec3 base = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
  float u = position.x;           // -0.5 .. 0.5 across
  float v = position.y;           // 0 (ground) .. 1 (top)
  vec3 c = base + toLight * (v * uLength);
  vec3 view = normalize(cameraPosition - c);
  vec3 side = cross(toLight, view);
  float sl = length(side);
  side = sl > 1e-4 ? side / sl : vec3(1.0, 0.0, 0.0);
  float w = uWidth * mix(1.0, uTopWidth, v);
  vec3 wp = c + side * (u * w);

  vUv = vec2(u * 2.0, v);
  vWorld = wp;
  vAxisView = abs(dot(view, toLight));

  vec4 mvPosition = viewMatrix * vec4(wp, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}
`,wl=`
uniform vec3 uSunColor;
uniform vec3 uSunDirection;
uniform vec3 uColor;
uniform float uNight;
uniform float uTime;
uniform float uIntensity;
uniform float uGlobalIntensity;
uniform float uNightStrength;
uniform float uSeed;
uniform float uGroundY;
uniform float uFadeHeight;
uniform float uLength;
uniform vec2 uNearFade;
uniform vec2 uHorizonFade;
uniform float uGain;

varying vec2 vUv;
varying vec3 vWorld;
varying float vAxisView;

#include <fog_pars_fragment>

float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), u.x),
             mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), u.x), u.y);
}

void main() {
  float x = vUv.x;                       // -1 .. 1 across
  float v = vUv.y;                       // 0 bottom .. 1 top
  float across = exp(-x * x * 3.2) - 0.04;
  across = max(across, 0.0) / 0.96;

  float topFade = 1.0 - smoothstep(0.5, 1.0, v);
  float groundFade = smoothstep(uGroundY - 0.2, uGroundY + uFadeHeight, vWorld.y);
  float mid = mix(0.75, 1.0, smoothstep(0.1, 0.55, v));

  // Streaks parallel to the beam, drifting slowly.
  float along = v * uLength;
  float s1 = vnoise(vec2(x * 2.6 + uSeed * 7.1 + uTime * 0.05, along * 0.09 - uTime * 0.12));
  float s2 = vnoise(vec2(x * 6.3 - uSeed * 3.7 - uTime * 0.08, along * 0.16 - uTime * 0.21));
  float streak = 0.3 + 0.7 * smoothstep(0.15, 0.85, s1 * 0.62 + s2 * 0.38);
  // Slow breathing so the scene feels alive.
  float breathe = 0.82 + 0.18 * sin(uTime * 0.35 + uSeed * 6.2831);

  float axisFade = 1.0 - smoothstep(0.82, 0.98, vAxisView);
  float camDist = distance(cameraPosition, vWorld);
  float nearFade = smoothstep(uNearFade.x, uNearFade.y, camDist);

  float sunY = normalize(uSunDirection).y;
  // Strongest with a low sun (golden hour / morning), weaker at noon, gone as the sun sets.
  float lowSun = mix(0.4, 1.0, 1.0 - smoothstep(0.3, 0.8, sunY)) * smoothstep(uHorizonFade.x, uHorizonFade.y, sunY);
  float dayMix = mix(uNightStrength, 1.0, 1.0 - uNight);

  float a = across * topFade * groundFade * mid * streak * breathe * axisFade * nearFade
          * lowSun * dayMix * uIntensity * uGlobalIntensity;

  #ifdef USE_FOG
    #ifdef FOG_EXP2
      float fogF = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
    #else
      float fogF = smoothstep(fogNear, fogFar, vFogDepth);
    #endif
    a *= 1.0 - fogF;
  #endif

  // Slightly desaturated sun colour: beams read as pale warm light, not orange paint.
  vec3 sunCol = mix(vec3(dot(uSunColor, vec3(0.3, 0.59, 0.11))), uSunColor, 0.72);
  vec3 col = sunCol * uColor * (a * uGain);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,Tl=null,El=0;function Dl(){return Tl||(Tl=new mt(1,1,1,6),Tl.translate(0,.5,0),Tl.name=`GodRayShaft`),El++,Tl}function Ol(){El--,El<=0&&Tl&&(Tl.dispose(),Tl=null,El=0)}var kl=class{constructor({steepness:e=.45,color:t=16773592,nightStrength:n=0,nearFade:r=[5,13],fadeHeight:i=2.2,gain:a=.28,horizonFade:o=[.19,.27]}={}){this.object=new Tt,this.object.name=`GodRays`,this.shafts=[],this.fadeHeight=i,this._shared={uTime:{value:0},uGlobalIntensity:{value:1},uSteepness:{value:e},uNightStrength:{value:n},uNearFade:{value:new q(r[0],r[1])},uGain:{value:a},uHorizonFade:{value:new q(o[0],o[1])},uTint:new B(t),fog:Be.clone(Y.fog)}}get intensity(){return this._shared.uGlobalIntensity.value}set intensity(e){this._shared.uGlobalIntensity.value=e}get steepness(){return this._shared.uSteepness.value}set steepness(e){this._shared.uSteepness.value=e}addShaft({position:e,direction:t,length:n=14,width:r=3,intensity:a=1,color:o,topWidth:s=.7,seed:c}={}){let l=this._shared,u={uSunDirection:X.uSunDirection,uSunColor:X.uSunColor,uNight:X.uNight,uTime:l.uTime,uGlobalIntensity:l.uGlobalIntensity,uSteepness:l.uSteepness,uNightStrength:l.uNightStrength,uNearFade:l.uNearFade,uGain:l.uGain,uHorizonFade:l.uHorizonFade,fogColor:l.fog.fogColor,fogDensity:l.fog.fogDensity,fogNear:l.fog.fogNear,fogFar:l.fog.fogFar,uUseSun:{value:+!t},uAxis:{value:t?new L().copy(t).normalize():new L(0,-1,0)},uLength:{value:n},uWidth:{value:r},uTopWidth:{value:s},uIntensity:{value:a},uColor:{value:o===void 0?l.uTint.clone():new B(o)},uSeed:{value:c??this.shafts.length*.618+.13},uGroundY:{value:e?e.y:0},uFadeHeight:{value:this.fadeHeight}},d=new tt({name:`GodRayMaterial`,uniforms:u,vertexShader:Cl,fragmentShader:wl,transparent:!0,depthWrite:!1,depthTest:!0,blending:2,side:2,fog:!0});d.forceSinglePass=!0,d.blendEquation=100,d.blendSrc=201,d.blendDst=203;let f=new R(Dl(),d);f.name=`GodRayShaft`;let p=new ht;f.frustumCulled=!0,f.intersectsFrustum=function(e){return p.center.setFromMatrixPosition(this.matrixWorld),p.radius=u.uLength.value+u.uWidth.value*.5+.1,typeof e.intersectsSphere!=`function`||e.intersectsSphere(p)},f.renderOrder=i.GODRAYS,f.castShadow=!1,f.receiveShadow=!1,f.onBeforeRender=e=>{d.blending=e.getRenderTarget()===null?5:2},e&&f.position.set(e.x,e.y,e.z),this.object.add(f);let m=this.shafts,h=!1,g={mesh:f,get intensity(){return u.uIntensity.value},set intensity(e){u.uIntensity.value=e},dispose(){if(h)return;h=!0;let e=m.indexOf(g);e>=0&&m.splice(e,1),f.removeFromParent(),d.dispose(),Ol()}};return m.push(g),g}populate(e,t,n=7){let r=new c(n),i=e.maxX-e.minX,a=e.maxZ-e.minZ,o=Math.max(1,Math.round(Math.sqrt(t*i/Math.max(a,.001)))),s=Math.max(1,Math.ceil(t/o)),l=[];for(let e=0;e<s;e++)for(let t=0;t<o;t++)l.push([t,e]);r.shuffle(l);let u=[];for(let n=0;n<t;n++){let[t,c]=l[n%l.length],d=e.minX+(t+r.range(.15,.85))/o*i,f=e.minZ+(c+r.range(.15,.85))/s*a;u.push(this.addShaft({position:new L(d,e.y??0,f),length:r.range(11,17),width:r.range(1.4,3.4),intensity:r.range(.55,1),topWidth:r.range(.55,.85),seed:r.range(0,10)}))}return u}update(e){this._shared.uTime.value+=e}dispose(){for(let e of[...this.shafts])e.dispose();this.object.removeFromParent()}},Al=`
varying vec3 vDir;

void main() {
  vDir = position;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  // Pin the dome to (just inside) the far plane whatever the camera far plane is: it never clips and,
  // with the depth test on, it only fills pixels no opaque geometry has covered.
  #ifdef USE_REVERSED_DEPTH_BUFFER
    gl_Position.z = gl_Position.w * 1e-5;
  #else
    gl_Position.z = gl_Position.w * 0.99999;
  #endif
}
`,jl=`
uniform vec3 uTop;
uniform vec3 uHorizon;
uniform vec3 uBottom;
uniform vec3 uSunDir;
uniform vec3 uMoonDir;
uniform vec3 uSunColor;
uniform float uNight;
uniform float uGlow;
uniform float uClouds;
uniform float uLowerClouds;
uniform float uTime;
uniform float uStarDensity;
uniform float uSunSize;
uniform float uMoonSize;
uniform float uSunIntensity;
uniform float uCloudPixel;
uniform vec2 uWind;

varying vec3 vDir;

#define TAU 6.28318530718

float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash12(i);
  float b = hash12(i + vec2(1.0, 0.0));
  float c = hash12(i + vec2(0.0, 1.0));
  float d = hash12(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm4(vec2 p) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    s += a * vnoise(p);
    p = p * 2.03 + vec2(17.13, 3.71);
    a *= 0.5;
  }
  return s / 0.9375;
}

vec3 skyGradient(float y) {
  if (y >= 0.0) {
    float t = smoothstep(0.0, 1.0, pow(clamp(y, 0.0, 1.0), 0.5));
    return mix(uHorizon, uTop, t);
  }
  // Below the horizon: a thick band of horizon haze that slowly sinks into the bottom colour.
  float t = clamp(-y / 0.9, 0.0, 1.0);
  return mix(uHorizon, uBottom, smoothstep(0.0, 1.0, pow(t, 0.8)));
}

// Tangent-plane coordinates of direction d around centre c, in units of radius r.
vec2 discCoord(vec3 d, vec3 c, float r) {
  vec3 t1 = cross(c, vec3(0.0, 1.0, 0.0));
  t1 = length(t1) < 1e-4 ? vec3(1.0, 0.0, 0.0) : normalize(t1);
  vec3 t2 = cross(t1, c);
  return vec2(dot(d, t1), dot(d, t2)) / r;
}

// Snap a direction to a lat/long pixel grid with ~square cells (P cells per radian).
vec3 quantDir(float lat, float lon, float P) {
  float latQ = (floor(lat * P) + 0.5) / P;
  float cl = max(cos(latQ), 0.05);
  float lonQ = (floor(lon * P * cl) + 0.5) / (P * cl);
  float c = cos(latQ);
  return vec3(c * cos(lonQ), sin(latQ), c * sin(lonQ));
}

// Stars on a latitude/longitude grid with ~square cells (cells per row follow cos(latitude)).
vec3 stars(float lat, float lon) {
  float N = uStarDensity;
  // Fine 1-px stars
  float row = floor(lat * N);
  float rowLat = (row + 0.5) / N;
  float cells = max(1.0, floor(TAU * N * cos(rowLat)));
  vec2 cell = vec2(floor((lon / TAU + 0.5) * cells), row);
  float h = hash12(cell);
  float star = step(0.9962, h);
  float tw = 0.55 + 0.45 * sin(uTime * (1.2 + 3.5 * fract(h * 37.0)) + h * 91.0);
  // Mostly faint stars with a few bright ones (a uniform spread made every star bloom).
  float mag = fract(h * 113.0);
  float b = star * tw * (0.3 + 1.6 * mag * mag * mag);
  vec3 tint = mix(vec3(0.72, 0.82, 1.0), vec3(1.0, 0.88, 0.72), step(0.6, fract(h * 7.0)));
  vec3 col = tint * b;

  // Coarse cells with a plus-shaped bright star (5x5 px pattern)
  float N2 = N / 5.0;
  float row2 = floor(lat * N2);
  float rowLat2 = (row2 + 0.5) / N2;
  float cells2 = max(1.0, floor(TAU * N2 * cos(rowLat2)));
  float u2 = (lon / TAU + 0.5) * cells2;
  float v2 = lat * N2;
  float h2 = hash12(vec2(floor(u2), row2) + 71.3);
  vec2 f = floor(vec2(fract(u2), fract(v2)) * 5.0);
  float m = abs(f.x - 2.0) + abs(f.y - 2.0);
  float centre = step(m, 0.5);
  float arm = step(m, 1.5) - centre;
  float tw2 = 0.6 + 0.4 * sin(uTime * (0.7 + 1.8 * h2) + h2 * 50.0);
  float big = step(0.991, h2) * (centre * 2.2 + arm * 0.6) * tw2;
  vec3 tint2 = mix(vec3(0.8, 0.88, 1.0), vec3(1.0, 0.92, 0.78), step(0.5, fract(h2 * 13.0)));
  col += tint2 * big;
  return col;
}

void main() {
  vec3 d = normalize(vDir);
  float y = d.y;
  vec3 col = skyGradient(y);

  vec3 sunDir = normalize(uSunDir);
  vec3 moonDir = normalize(uMoonDir);
  float lat = asin(clamp(y, -1.0, 1.0));
  float lon = atan(d.z, d.x);

  // ---------------------------------------------------------------- sun glow
  float cs = dot(d, sunDir);
  float cs0 = max(cs, 0.0);
  float sunUp = smoothstep(-0.3, 0.02, sunDir.y);
  float halo = pow(cs0, 8.0) * 0.1 + pow(cs0, 42.0) * 0.28 + pow(cs0, 600.0) * 1.1;
  vec2 dh = d.xz / max(length(d.xz), 1e-4);
  vec2 shz = sunDir.xz / max(length(sunDir.xz), 1e-4);
  float az = dot(dh, shz) * 0.5 + 0.5;
  float lowSun = 1.0 - smoothstep(0.02, 0.6, sunDir.y);
  float band = exp(-abs(y) * 8.0) * pow(az, 3.0) * lowSun;
  vec3 glowCol = uSunColor * uGlow;
  col += glowCol * (halo + band * 0.32) * sunUp;

  // Cloud pixel grid (constant on-screen size), shared by both cloud layers.
  vec3 qd = quantDir(lat, lon, uCloudPixel);

  if (y > 0.0) {
    // ------------------------------------------------------------- stars
    float starMask = uNight * uNight * smoothstep(0.03, 0.35, y);
    if (starMask > 0.002) col += stars(lat, lon) * starMask;

    // -------------------------------------- moon (pixel disc, gibbous, halo)
    float cm = dot(d, moonDir);
    float moonVis = smoothstep(0.25, 0.8, uNight) * smoothstep(-0.02, 0.08, moonDir.y);
    if (moonVis > 0.001 && cm > 0.0) {
      vec2 mp = discCoord(d, moonDir, uMoonSize);
      vec2 mcell = floor(mp * 7.0);
      vec2 mq = (mcell + 0.5) / 7.0;
      float inside = step(length(mq), 1.0);
      float mottle = hash12(mcell + 13.0);
      float crater = step(0.78, mottle) * 0.22 + step(0.93, mottle) * 0.12;
      float phase = smoothstep(0.35, 0.95, length(mq - vec2(-0.55, 0.25)));
      // Kept below the bloom-saturation point so the pixel craters and the gibbous phase read.
      vec3 moonCol = vec3(0.84, 0.9, 1.0) * (0.95 - crater * 1.3) * mix(0.22, 1.0, phase);
      col = mix(col, moonCol, inside * moonVis);
      float cm0 = max(cm, 0.0);
      col += vec3(0.45, 0.58, 1.0) * (pow(cm0, 2500.0) * 0.3 + pow(cm0, 200.0) * 0.08 + pow(cm0, 12.0) * 0.025) * moonVis;
    }

    // ------------------------------------ sun disc (pixel-crisp, HDR bloom)
    if (cs > 0.0) {
      vec2 sp = discCoord(d, sunDir, uSunSize);
      vec2 sq = (floor(sp * 6.0) + 0.5) / 6.0;
      float r = length(sq);
      float sIn = step(r, 1.0);
      float rim = step(0.8, r);
      col += uSunColor * sIn * mix(1.0, 0.55, rim) * uSunIntensity * sunUp * smoothstep(-0.005, 0.01, y);
    }

    // --------------------------- clouds (plane overhead, lit from the sun side)
    if (uClouds > 0.001) {
      vec2 cp = qd.xz / (max(qd.y, 0.0) + 0.15) * 2.4 + uWind * uTime;
      float n = fbm4(cp * 1.2);
      float c = smoothstep(1.0 - uClouds - 0.08, 1.0 - uClouds + 0.2, n);
      float n2 = fbm4((cp + shz * 0.16) * 1.2);
      float lit = clamp(0.55 + (n - n2) * 5.0, 0.0, 1.0);
      c = floor(c * 3.0 + 0.5) / 3.0;
      lit = floor(lit * 3.0 + 0.5) / 3.0;
      float moonLit = pow(max(dot(d, moonDir), 0.0), 6.0) * smoothstep(0.3, 0.9, uNight);
      vec3 shade = mix(mix(uTop, uHorizon, 0.5) * 0.95, uTop * 0.8, uNight);
      vec3 litCol = mix(uHorizon * 1.12, mix(uTop, uHorizon, 0.55) + vec3(0.05, 0.07, 0.12) * moonLit, uNight)
                  + glowCol * (0.12 + pow(cs0, 4.0) * 0.8) * sunUp;
      vec3 cloudCol = mix(shade, litCol, lit);
      float fade = smoothstep(0.0, 0.22, y);
      col = mix(col, cloudCol, c * fade * mix(0.9, 0.55, uNight));
    }
  } else if (uLowerClouds > 0.001) {
    // ------------------------------------------------------ sea of clouds below
    vec2 lp = qd.xz / (max(-qd.y, 0.0) + 0.07) * 0.6 + uWind * uTime * 0.6 + vec2(37.0, 11.0);
    float n = fbm4(lp);
    float c = smoothstep(0.42, 0.74, n);
    float n2 = fbm4(lp + shz * 0.12);
    float lit = clamp(0.5 + (n - n2) * 5.0, 0.0, 1.0);
    lit = floor(lit * 3.0 + 0.5) / 3.0;
    c = floor(c * 3.0 + 0.5) / 3.0;
    vec3 topCol = uHorizon * 1.08 + glowCol * (0.06 + band * 0.25) * sunUp;
    vec3 shadeCol = mix(uBottom, uHorizon, 0.5);
    vec3 cc = mix(shadeCol, topCol, 0.3 + lit * 0.7);
    float distFade = smoothstep(0.0, 0.16, -y);
    col = mix(col, cc, c * uLowerClouds * distFade);
  }

  gl_FragColor = vec4(max(col, vec3(0.0)), 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,Ml=new L,Nl=class e{constructor({radius:t=180,cloudCover:n=.45,lowerClouds:r=.5,starDensity:i=1100,sunSize:a=.032,moonSize:o=.026,sunIntensity:s=9,cloudPixel:c=380,wind:l=[.012,.004],earlyZ:u=!0}={}){this.radius=t,this.uniforms={uTop:{value:new B(3833568)},uHorizon:{value:new B(12902642)},uBottom:{value:new B(9417936)},uSunDir:{value:new L(.3,.6,-.5).normalize()},uMoonDir:{value:new L(-.3,.6,-.5).normalize()},uSunColor:{value:new B(1,.9,.75)},uNight:{value:0},uGlow:{value:1},uClouds:{value:n},uLowerClouds:{value:r},uTime:{value:0},uStarDensity:{value:i},uSunSize:{value:a},uMoonSize:{value:o},uSunIntensity:{value:s},uCloudPixel:{value:c},uWind:{value:new q(l[0],l[1])}},this.material=new tt({name:`SkyMaterial`,uniforms:this.uniforms,vertexShader:Al,fragmentShader:jl,side:1,depthWrite:!1,depthTest:u,fog:!1,toneMapped:!0}),this.geometry=new Me(t,48,24);let d=new R(this.geometry,this.material);d.name=`Sky`,d.renderOrder=u?e.EARLY_Z_RENDER_ORDER:-1e3,d.frustumCulled=!1,d.castShadow=!1,d.receiveShadow=!1,d.matrixAutoUpdate=!1,d.onBeforeRender=(e,t,n)=>{Ml.setFromMatrixPosition(n.matrixWorld),d.position.copy(Ml),d.updateMatrix(),d.matrixWorld.copy(d.matrix)},this.object=d}setState({top:e,horizon:t,bottom:n,sunDirection:r,sunColor:i,night:a,moonDirection:o,glow:s,clouds:c}={}){let l=this.uniforms;e&&l.uTop.value.copy(e),t&&l.uHorizon.value.copy(t),n&&l.uBottom.value.copy(n),r&&l.uSunDir.value.copy(r),i&&l.uSunColor.value.copy(i),a!==void 0&&(l.uNight.value=a),o&&l.uMoonDir.value.copy(o),s!==void 0&&(l.uGlow.value=s),c!==void 0&&(l.uClouds.value=c)}get cloudCover(){return this.uniforms.uClouds.value}set cloudCover(e){this.uniforms.uClouds.value=e}get lowerClouds(){return this.uniforms.uLowerClouds.value}set lowerClouds(e){this.uniforms.uLowerClouds.value=e}update(e){this.uniforms.uTime.value+=e}dispose(){this.geometry.dispose(),this.material.dispose()}};Nl.EARLY_Z_RENDER_ORDER=1e6;var Pl=[{t:0,name:`night`,top:`#050a1f`,horizon:`#1b2a5c`,bottom:`#0a1232`,sun:`#7294ff`,sunI:.85,hemiSky:`#2a48b4`,hemiGround:`#101430`,hemiI:1.12,fog:.011,exp:1.3,night:1,moon:1,shadow:.6,glow:.4,clouds:.3},{t:4.3,name:`late night`,top:`#070c24`,horizon:`#213062`,bottom:`#0d1436`,sun:`#7a98ff`,sunI:.72,hemiSky:`#2e4ab0`,hemiGround:`#121632`,hemiI:1.1,fog:.0115,exp:1.3,night:1,moon:1,shadow:.58,glow:.5,clouds:.34},{t:5.25,name:`pre-dawn`,top:`#18204e`,horizon:`#5c5a92`,bottom:`#282852`,sun:`#a0a6ea`,sunI:.16,hemiSky:`#5460a8`,hemiGround:`#221e38`,hemiI:1.05,fog:.014,exp:1.26,night:.86,moon:1,shadow:.35,glow:.8,clouds:.45},{t:6.1,name:`pink dawn`,top:`#3c5098`,horizon:`#f59aa0`,bottom:`#8a6aa0`,sun:`#ff7c6a`,sunI:2.3,hemiSky:`#9a86d2`,hemiGround:`#6a4450`,hemiI:.98,fog:.012,exp:1.08,night:.3,moon:0,shadow:.85,glow:1,clouds:.45},{t:6.9,name:`sunrise`,top:`#4a74c4`,horizon:`#f8c0a0`,bottom:`#a08aa8`,sun:`#ffb88a`,sunI:2.8,hemiSky:`#98aee0`,hemiGround:`#6e5048`,hemiI:1.05,fog:.013,exp:1.06,night:.06,moon:0,shadow:.95,glow:1,clouds:.44},{t:8,name:`morning`,top:`#4f86d6`,horizon:`#d6e6f0`,bottom:`#9cb6cc`,sun:`#ffe6c0`,sunI:3.2,hemiSky:`#a2c2ec`,hemiGround:`#6e5c46`,hemiI:1.05,fog:.011,exp:1.02,night:0,moon:0,shadow:1,glow:.8,clouds:.42},{t:12.2,name:`noon`,top:`#3a7ee0`,horizon:`#c4e0f2`,bottom:`#8fb4d0`,sun:`#fff4e2`,sunI:3.5,hemiSky:`#a6c8f2`,hemiGround:`#72624a`,hemiI:1.1,fog:.009,exp:1,night:0,moon:0,shadow:1,glow:.7,clouds:.38},{t:15.3,name:`afternoon`,top:`#4880d8`,horizon:`#dde2da`,bottom:`#9eb0c0`,sun:`#ffe0b0`,sunI:3.6,hemiSky:`#9cb8e8`,hemiGround:`#786248`,hemiI:1.1,fog:.0095,exp:1,night:0,moon:0,shadow:1,glow:.8,clouds:.42},{t:17.2,name:`golden hour`,top:`#3e4c9a`,horizon:`#f7a068`,bottom:`#a0628a`,sun:`#ffb466`,sunI:6,hemiSky:`#7078cc`,hemiGround:`#9a6444`,hemiI:1.45,fog:.0098,exp:1.12,night:0,moon:0,shadow:1,glow:1,clouds:.48},{t:18.45,name:`sunset`,top:`#2a2a70`,horizon:`#ec7e6c`,bottom:`#643a70`,sun:`#ff8050`,sunI:3.1,hemiSky:`#6c5ec4`,hemiGround:`#4c2e44`,hemiI:1.2,fog:.0112,exp:1.12,night:.22,moon:0,shadow:.85,glow:1.3,clouds:.5},{t:19.25,name:`purple dusk`,top:`#1a1c54`,horizon:`#8a5a9e`,bottom:`#2c2052`,sun:`#c07aaa`,sunI:.3,hemiSky:`#4c4ea8`,hemiGround:`#2a1c36`,hemiI:1.15,fog:.013,exp:1.28,night:.62,moon:0,shadow:.5,glow:.9,clouds:.46},{t:20.05,name:`blue hour`,top:`#0b1240`,horizon:`#2c3e82`,bottom:`#111a40`,sun:`#7090f4`,sunI:.38,hemiSky:`#304cae`,hemiGround:`#12152e`,hemiI:1.08,fog:.0125,exp:1.28,night:.92,moon:1,shadow:.5,glow:.5,clouds:.42},{t:21.4,name:`night`,top:`#060b20`,horizon:`#1c2b5c`,bottom:`#0b1332`,sun:`#7294ff`,sunI:.82,hemiSky:`#2a48b4`,hemiGround:`#101430`,hemiI:1.12,fog:.011,exp:1.3,night:1,moon:1,shadow:.6,glow:.4,clouds:.3}],Fl=[`top`,`horizon`,`bottom`,`sun`,`hemiSky`,`hemiGround`],Il=[`sunI`,`hemiI`,`fog`,`exp`,`night`,`moon`,`shadow`,`glow`,`clouds`],Ll=Fl.length*3+Il.length,Rl=Fl.length*3,zl=Object.fromEntries(Il.map((e,t)=>[e,Rl+t])),Bl=3.5,Vl=class{constructor(e,t,n,r=24){let i=e.length;this.n=i,this.channels=n,this.period=r,this.t=new Float64Array(i+1),this.y=new Float64Array((i+1)*n),this.m=new Float64Array((i+1)*n);for(let t=0;t<i;t++)this.t[t]=e[t];this.t[i]=e[0]+r,this.y.set(t.subarray(0,i*n)),this.y.set(t.subarray(0,n),i*n);let a=new Float64Array(i);for(let e=0;e<i;e++)a[e]=this.t[e+1]-this.t[e];let o=new Float64Array(i);for(let e=0;e<n;e++){for(let t=0;t<i;t++)o[t]=(this.y[(t+1)*n+e]-this.y[t*n+e])/a[t];for(let t=0;t<i;t++){let r=(t-1+i)%i,s=o[r],c=o[t],l=0;if(s*c>0){let e=a[r],n=a[t],i=2*n+e,o=n+2*e;l=(i+o)/(i/s+o/c)}this.m[t*n+e]=l}this.m[i*n+e]=this.m[e]}}evaluate(e,t){let{n,channels:r,t:i}=this,a=e-i[0];a=(a%this.period+this.period)%this.period+i[0];let o=0;for(;o<n-1&&a>=i[o+1];)o++;let s=i[o+1]-i[o],c=(a-i[o])/s,l=c*c,u=l*c,d=2*u-3*l+1,f=(u-2*l+c)*s,p=-2*u+3*l,m=(u-l)*s,h=o*r,g=(o+1)*r;for(let e=0;e<r;e++)t[e]=d*this.y[h+e]+f*this.m[h+e]+p*this.y[g+e]+m*this.m[g+e];return t}};function Hl(e,t,n,r){let i=(e-t.noon)/24*Math.PI*2,a=t.lat*ue,o=t.dec*ue,s=Math.cos(o),c=Math.sin(o),l=Math.cos(i),u=Math.sin(i),d=Math.sin(a),f=Math.cos(a),p=-s*u,m=c*d+s*l*f,h=-c*f+s*l*d,g=Math.cos(n),_=Math.sin(n);return r.set(p*g+h*_,m,-p*_+h*g).normalize()}function Ul(e,t,n){let r=Hl(t,e,0,new L);return n*ue-Math.atan2(r.x,r.z)}var Wl=(e,t,n)=>.5*(e+t+Math.sqrt((e-t)*(e-t)+n*n)),Gl=(e,t,n)=>.5*(e+t-Math.sqrt((e-t)*(e-t)+n*n));function Kl(e){return e=(e+Math.PI)%(Math.PI*2),e<0&&(e+=Math.PI*2),e-Math.PI}function ql(e,t){let n=Math.floor(e),r=e-n,i=r*r*(3-2*r);return I(A(n,0,t),A(n+1,0,t),i)}function Jl(e,t){return ql(e,t)*.55+ql(e*2.37+11.3,t+17)*.3+ql(e*5.13+3.1,t+41)*.15}var Yl=new L,Xl=new L,Zl=new L,Ql=new L,$l=new L,eu=(e,t)=>t.setStyle(e,ct),tu=class{constructor(e,t={}){this.name=`lighting`,this.engine=e,this.renderer=e.renderer,this.scene=e.scene,this.camera=e.camera,this.timeOfDay=((t.timeOfDay??17.2)%24+24)%24,this.timeSpeed=t.timeSpeed??0,this.paused=!1,this.settings={sunMul:1,ambientMul:1,fogMul:1,shadows:!0,exposureMul:1,pointLightMul:1,flicker:!0},this.shadowMapSize=t.shadowMapSize??2048,this._shadowExtent=t.shadowExtent??22,this.lightDistance=t.lightDistance??70,this.minElevation=(t.minElevation??10)*ue,this.maxElevation=(t.maxElevation??68)*ue,this.followPlaneY=t.followPlaneY??0,this.shadowForward=t.shadowForward??.22,this.shadowRadius={day:2.5,night:3.2},this.sunPath={noon:12.4,lat:45,dec:5,refTime:17.2,refAzimuth:-125,...t.sunPath||{}},this.moonPath={noon:23.6,lat:45,dec:2,refTime:0,refAzimuth:140,...t.moonPath||{}},this._sunYaw=Ul(this.sunPath,this.sunPath.refTime,this.sunPath.refAzimuth),this._moonYaw=Ul(this.moonPath,this.moonPath.refTime,this.moonPath.refAzimuth),this.group=new Tt,this.group.name=`LightingSystem`,this.sun=new Ye(16777215,3),this.sun.name=`Sun`,this.sun.castShadow=!0;let n=this.sun.shadow;n.mapSize.set(this.shadowMapSize,this.shadowMapSize),n.bias=-2e-4,n.normalBias=.055,n.radius=this.shadowRadius.day,n.camera.near=1,n.camera.far=this.lightDistance*2.4,this._applyShadowExtent(),this.group.add(this.sun,this.sun.target),this.hemi=new Ct(10535167,6309944,1),this.hemi.name=`Hemisphere`,this.hemi.position.set(0,1,0),this.group.add(this.hemi),this.pointLightGroup=new Tt,this.pointLightGroup.name=`PointLights`,this.group.add(this.pointLightGroup),this.sky=new Nl(t.sky),this.scene.add(this.group),this.scene.add(this.sky.object),this.fog=new G(10465480,.012),this._previousFog=this.scene.fog,this.scene.fog=this.fog,this.renderer?.shadowMap&&(this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type===2&&(this.renderer.shadowMap.type=1)),this._values=new Float64Array(Ll),this.setKeyframes(t.keyframes??Pl),this.state={skyTop:new B,skyHorizon:new B,skyBottom:new B,sunColor:new B,hemiSky:new B,hemiGround:new B,sunIntensity:0,hemiIntensity:0,fogDensity:0,exposure:1,night:0,moonBlend:0,shadowIntensity:1,glow:1,clouds:.4,sunElevation:0,lightElevation:0},this._sunDir=new L(0,1,0),this._moonDir=new L(0,1,0),this._lightDir=new L(0,1,0),this._skyState={top:this.state.skyTop,horizon:this.state.skyHorizon,bottom:this.state.skyBottom,sunDirection:this._sunDir,moonDirection:this._moonDir,sunColor:new B,night:0,glow:1,clouds:.4},this._follow=null,this._clock=0,this._pointLights=[],this._emissives=[],this._nightFactor=0,this._apply(0)}setTime(e){this.timeOfDay=(e%24+24)%24,this._apply(0)}get nightFactor(){return this._nightFactor}get phaseName(){let e=``,t=1/0,n=this.timeOfDay;for(let r=0;r<this.keyframes.length;r++){let i=this.keyframes[r],a=Math.min(Math.abs(i.t-n),24-Math.abs(i.t-n));a<t&&(t=a,e=i.name??``)}return e}get sunDirection(){return this._lightDir}get trueSunDirection(){return this._sunDir}get moonDirection(){return this._moonDir}get shadowExtent(){return this._shadowExtent}set shadowExtent(e){this._shadowExtent=e,this._applyShadowExtent()}setShadowDepthRange(e,t){let n=this.sun.shadow.camera;this._shadowBase??={near:n.near,far:n.far,bias:this.sun.shadow.bias};let r=this._shadowBase;e==null||t==null?(n.near=r.near,n.far=r.far,this.sun.shadow.bias=r.bias):(n.near=Math.max(.1,this.lightDistance-e),n.far=Math.max(n.near+1,this.lightDistance+t),this.sun.shadow.bias=r.bias*((r.far-r.near)/(n.far-n.near))),n.updateProjectionMatrix()}followTarget(e){this._follow=e||null}setKeyframes(e){let t=[...e].sort((e,t)=>e.t-t.t);this.keyframes=t;let n=new Float64Array(t.length*Ll),r=new B;t.forEach((e,t)=>{let i=Pl.reduce((t,n)=>Math.abs(n.t-e.t)<Math.abs(t.t-e.t)?n:t);Fl.forEach((a,o)=>{let s=e[a]??i[a];typeof s==`number`?r.setHex(s,ct):eu(s,r),n[t*Ll+o*3]=r.r,n[t*Ll+o*3+1]=r.g,n[t*Ll+o*3+2]=r.b}),Il.forEach((r,a)=>{n[t*Ll+Rl+a]=e[r]??i[r]})}),this._track=new Vl(t.map(e=>(e.t%24+24)%24),n,Ll,24),this.state&&this._apply(0)}addPointLight({position:e,color:t=16757867,intensity:n=8,distance:r=8,decay:i=2,flicker:a=.3,nightOnly:o=!0,dayIntensity:s=.15,seed:c,flickerSpeed:l=2.6}={}){let u=new et(t,0,r,i);u.castShadow=!1,e&&u.position.set(e.x,e.y,e.z),this.pointLightGroup.add(u);let d=this._pointLights.length,f=this,p={light:u,intensity:n,flicker:a,nightOnly:o,dayIntensity:s,flickerSpeed:l,seed:c??d*7919+13>>>0,flickerFactor:1,fade:1,dispose(){let e=f._pointLights.indexOf(p);e>=0&&f._pointLights.splice(e,1),u.removeFromParent(),u.dispose()}};return this._pointLights.push(p),this._updatePointLight(p),p}retargetPointLight(e,t={}){let n=e.light;t.position&&n.position.set(t.position.x,t.position.y,t.position.z),t.color!==void 0&&n.color.set(t.color),t.distance!==void 0&&(n.distance=t.distance),t.decay!==void 0&&(n.decay=t.decay);for(let n of[`intensity`,`flicker`,`nightOnly`,`dayIntensity`,`seed`,`flickerSpeed`])t[n]!==void 0&&(e[n]=t[n]);return this._updatePointLight(e),e}flickerAt(e,t,n=2.6){if(!this.settings.flicker||!(t>0))return 1;let r=Jl(this._clock*n,e);return Math.max(0,1+t*(r-.5)*1.7)}registerEmissive(e,{day:t=0,night:n=1.6,flicker:r=null}={}){let i=this,a={material:e,day:t,night:n,flicker:r,dispose(){let e=i._emissives.indexOf(a);e>=0&&i._emissives.splice(e,1)}};return this._emissives.push(a),this._updateEmissive(a),a}update(e){!this.paused&&this.timeSpeed!==0&&(this.timeOfDay=((this.timeOfDay+this.timeSpeed*e)%24+24)%24),this._apply(e)}lateUpdate(){this._placeSun()}dispose(){for(let e of[...this._pointLights])e.dispose();this._emissives.length=0,this.sun.dispose(),this.hemi.dispose(),this.group.removeFromParent(),this.sky.object.removeFromParent(),this.sky.dispose(),this.scene.fog===this.fog&&(this.scene.fog=this._previousFog??null)}_applyShadowExtent(){let e=this.sun.shadow.camera,t=this._shadowExtent;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.updateProjectionMatrix()}_apply(e){this._clock+=e;let t=this._track.evaluate(this.timeOfDay,this._values),n=this.state,r=this._stateColors||=[n.skyTop,n.skyHorizon,n.skyBottom,n.sunColor,n.hemiSky,n.hemiGround];for(let e=0;e<6;e++)r[e].setRGB(Math.max(0,t[e*3]),Math.max(0,t[e*3+1]),Math.max(0,t[e*3+2]));n.sunIntensity=Math.max(0,t[zl.sunI]),n.hemiIntensity=Math.max(0,t[zl.hemiI]),n.fogDensity=Math.max(0,t[zl.fog]),n.exposure=Math.max(.05,t[zl.exp]),n.night=K(t[zl.night]),n.moonBlend=K(t[zl.moon]),n.shadowIntensity=K(t[zl.shadow]),n.glow=Math.max(0,t[zl.glow]),n.clouds=K(t[zl.clouds]),this._nightFactor=n.night,this._computeDirections();let i=this.settings;this.sun.color.copy(n.sunColor),this.sun.intensity=n.sunIntensity*i.sunMul;let a=this.sun.shadow;a.intensity=i.shadows?n.shadowIntensity:0,a.autoUpdate=!!i.shadows,a.radius=I(this.shadowRadius.day,this.shadowRadius.night,n.night),this._placeSun(),this.hemi.color.copy(n.hemiSky),this.hemi.groundColor.copy(n.hemiGround),this.hemi.intensity=n.hemiIntensity*i.ambientMul,this.fog.color.copy(n.skyHorizon),this.fog.density=n.fogDensity*i.fogMul,this.scene.fog!==this.fog&&this.scene.fog==null&&(this.scene.fog=this.fog),this.renderer&&(this.renderer.toneMappingExposure=n.exposure*i.exposureMul),X.uNight.value=n.night,X.uSunDirection.value.copy(this._lightDir),X.uSunColor.value.copy(n.sunColor).multiplyScalar(n.sunIntensity*i.sunMul/Bl),X.uFogColor.value.copy(n.skyHorizon);let o=this._skyState;o.sunColor.copy(n.sunColor),o.night=n.night,o.glow=n.glow,o.clouds=n.clouds,this.sky.setState(o),this.sky.update(e);for(let e=0;e<this._pointLights.length;e++)this._updatePointLight(this._pointLights[e]);for(let e=0;e<this._emissives.length;e++)this._updateEmissive(this._emissives[e])}_computeDirections(){let e=this.state;Hl(this.timeOfDay,this.sunPath,this._sunYaw,this._sunDir),Hl(this.timeOfDay,this.moonPath,this._moonYaw,this._moonDir);let t=Math.asin(K(this._sunDir.y,-1,1)),n=Math.asin(K(this._moonDir.y,-1,1));e.sunElevation=t;let r=.12,i=this.minElevation,a=this.maxElevation,o=Gl(Wl(t,i,r),a,r),s=Gl(Wl(n,i,r),a,r),c=Math.atan2(this._sunDir.x,this._sunDir.z),l=Math.atan2(this._moonDir.x,this._moonDir.z),u=e.moonBlend,d=c+Kl(l-c)*u,f=I(o,s,u);e.lightElevation=f;let p=Math.cos(f);this._lightDir.set(Math.sin(d)*p,Math.sin(f),Math.cos(d)*p)}_getFollowPoint(e){let t=this._follow;if(t&&t.isObject3D)return t.getWorldPosition(e);if(t&&t.isVector3)return e.copy(t);let n=this.camera;if(!n)return e.set(0,0,0);$l.setFromMatrixPosition(n.matrixWorld),n.getWorldDirection(Ql);let r=24;return Ql.y<-.05&&(r=Math.min(60,($l.y-this.followPlaneY)/-Ql.y)),e.copy($l).addScaledVector(Ql,Math.max(0,r))}_placeSun(){let e=this._lightDir,t=this.camera;if(t&&t.updateWorldMatrix(!0,!1),this._getFollowPoint(Yl),t&&this.shadowForward!==0){$l.setFromMatrixPosition(t.matrixWorld);let e=Yl.x-$l.x,n=Yl.z-$l.z,r=Math.hypot(e,n);if(r>.001){let t=$l.distanceTo(Yl),i=Math.min(t*this.shadowForward,this._shadowExtent*.5)/r;Yl.x+=e*i,Yl.z+=n*i}}let n=this.sun.shadow.camera.up;Xl.crossVectors(n,e),Xl.lengthSq()<1e-8&&Xl.set(1,0,0),Xl.normalize(),Zl.crossVectors(e,Xl);let r=2*this._shadowExtent/this.shadowMapSize,i=Yl.dot(Xl),a=Yl.dot(Zl),o=Math.round(i/r)*r-i,s=Math.round(a/r)*r-a;Yl.addScaledVector(Xl,o).addScaledVector(Zl,s),this.sun.target.position.copy(Yl),this.sun.position.copy(Yl).addScaledVector(e,this.lightDistance),this.sun.target.updateMatrixWorld(),this.sun.updateMatrixWorld()}_updatePointLight(e){let t=this.settings,n=1;if(t.flicker&&e.flicker>0){let t=Jl(this._clock*e.flickerSpeed,e.seed);n=Math.max(0,1+e.flicker*(t-.5)*1.7)}e.flickerFactor=n;let r=e.nightOnly?I(e.dayIntensity,1,this._nightFactor):1,i=e.intensity*r*n*t.pointLightMul;e.light.intensity=e.fade===1||e.fade===void 0?i:i*e.fade}_updateEmissive(e){let t=I(e.day,e.night,this._nightFactor);e.flicker&&(t*=I(1,e.flicker.flickerFactor,.6)),e.material.emissiveIntensity=t}},nu=class{constructor(e,t=[],n={}){if(this.lighting=e,this.descriptors=t.slice(),this.size=Math.max(0,Math.floor(n.size??12)),this.fixed=!!n.fixed,this.interval=n.interval??.2,this.fadeTime=n.fadeTime??.35,this.margin=n.margin??4,this.priorityWeight=n.priorityWeight??1.5,this.hysteresis=n.hysteresis??2,this.dayPenalty=n.dayPenalty??10,this.nightDayIntensity=n.nightDayIntensity??.05,this.pooled=this.descriptors.length>this.size,this.handles=[],this._slots=[],this._sources=new Map,this._emissives=[],this._timer=0,this._snapNext=!0,this._frustum=new we,this._m=new _,this._sphere=new ht,this._scored=this.descriptors.map(e=>({d:e,s:0})),this._wanted=new Set,this._seeds=new Map,this._baseSeeds=[],this.fixed){for(let e=0;e<this.size;e++)this.handles.push(this._addParked());this._baseSeeds=this.handles.map(e=>e.seed);let e=this.descriptors;this.descriptors=[],this.pooled=!1,this.setDescriptors(e,{snap:!0});return}if(!this.pooled){for(let t of this.descriptors){let n=e.addPointLight(this._staticParams(t));n.tag=t.tag,n.desc=t,this.handles.push(n)}this._baseSeeds=this.handles.map(e=>e.seed);return}for(let e of this.descriptors)this._seeds.set(e,e.seed??cu(e.position));for(let t=0;t<this.size;t++){let t=e.addPointLight({position:ru,intensity:0,distance:8,flicker:0,nightOnly:!1});t.fade=0,t.tag=``,t.desc=null,this.handles.push(t),this._slots.push({handle:t,desc:null,target:null,fade:0})}this._baseSeeds=this.handles.map(e=>e.seed)}get activeCount(){if(!this.pooled)return Math.min(this.handles.length,this.descriptors.length);let e=0;for(let t of this._slots)t.desc&&e++;return e}get used(){return this.activeCount}get active(){return this.pooled?this._slots.filter(e=>e.desc).map(e=>e.desc):this.descriptors.slice(0,this.handles.length)}snap(){this._snapNext=!0}setDescriptors(e,{snap:t=!1}={}){let n=e.slice(),r=this.descriptors,i=n.length===r.length&&n.every((e,t)=>e===r[t]);this.descriptors=n,i||(this._scored=n.map(e=>({d:e,s:0}))),t&&(this._snapNext=!0);let a=this.handles.length,o=this.lighting;if(n.length<=a){this.pooled=!1,this._slots.length=0,this._seeds.clear();for(let e=0;e<a;e++){let t=this.handles[e],r=n[e];if(!r){this._park(t);continue}t.fade=1,o.retargetPointLight(t,this._params(r,r.seed??this._baseSeeds[e])),t.tag=r.tag,t.desc=r}return}let s=i?null:new Set(n),c=i?null:su(r,n,s),l=e=>!e||i||s.has(e)?e:c.get(e)??null;if(!i){let e=new Map;for(let t of n)e.set(t,this._seeds.get(t)??t.seed??cu(t.position));this._seeds=e;for(let[e,t]of[...this._sources]){let n=c.get(e);n&&!this._sources.has(n)&&(this._sources.delete(e),this._sources.set(n,t))}}if(!this.pooled){this.pooled=!0,this._slots=this.handles.map(e=>{let t=l(e.desc??null);return{handle:e,desc:t,target:null,fade:+!!t}});for(let e of this._slots)e.desc||this._park(e.handle),e.handle.desc=e.desc,e.handle.fade=e.fade}else if(!i){let e=new Set;for(let t of this._slots){let n=t.desc,r=l(n);r&&r!==n&&!e.has(r)&&(n=r),n!==t.desc&&(t.desc=n,t.handle.desc=n),t.desc&&s.has(t.desc)&&e.add(t.desc)}let t=new Set;for(let e of this._slots){let n=l(e.target);e.target=n&&!t.has(n)?n:null,e.target&&t.add(e.target)}}for(let e of this._slots)e.desc&&(o.retargetPointLight(e.handle,this._params(e.desc,this._seeds.get(e.desc)??e.handle.seed)),e.handle.tag=e.desc.tag);i||(this._timer=0)}flickerSource(e){let t=this._sources.get(e);return t||(t={flickerFactor:1},this._sources.set(e,t)),t}registerEmissive(e,{day:t=0,night:n=1.6,light:r=null}={}){let i=r?this.flickerSource(r):null,a=this.lighting.registerEmissive(e,{day:t,night:n,flicker:i});return this._emissives.push(a),a}update(e,{focus:t=null,camera:n=null}={}){if(this._updateSources(),!this.pooled){this._snapNext=!1;return}let r=this.nightDayIntensity;for(let e of this._slots)e.desc&&e.desc.nightOnly!==!1&&e.desc.dayIntensity===void 0&&(e.handle.dayIntensity=r);if(this._snapNext){this._snapNext=!1,this._timer=this.interval,this._assign(t,n);for(let e of this._slots){let t=e.target!==e.desc;t&&this._move(e,e.target),e.fade=+!!e.desc,e.handle.fade=e.fade,t&&e.desc&&this.lighting.retargetPointLight(e.handle,{})}return}this._timer-=e,this._timer<=0&&(this._timer=this.interval,this._assign(t,n));let i=this.fadeTime>0?e/this.fadeTime:1;for(let e of this._slots)e.target===e.desc?e.desc&&(e.fade=Math.min(1,e.fade+i)):(e.fade=e.desc?Math.max(0,e.fade-i):0,e.fade===0&&this._move(e,e.target)),e.handle.fade=e.fade*e.fade*(3-2*e.fade)}dispose(){for(let e of this._emissives)e.dispose();this._emissives.length=0;for(let e of this.handles)e.dispose();this.handles.length=0,this._slots.length=0,this._sources.clear()}_staticParams(e){let t=e.nightOnly??!0;return{position:e.position,color:e.color,intensity:e.intensity,distance:e.distance,flicker:e.flicker,nightOnly:t,dayIntensity:e.dayIntensity??(t?this.nightDayIntensity:1),...e.seed===void 0?{}:{seed:e.seed},...e.flickerSpeed===void 0?{}:{flickerSpeed:e.flickerSpeed}}}_addParked(){let e=this.lighting.addPointLight({position:ru,intensity:0,distance:8,flicker:0,nightOnly:!1});return e.fade=0,e.tag=``,e.desc=null,e}_park(e){e.desc=null,e.tag=``,e.fade=0,e.intensity=0,e.light.intensity=0,e.light.position.copy(ru)}_params(e,t){let n=e.nightOnly??!0;return{position:e.position,color:e.color??16757867,intensity:e.intensity??8,distance:e.distance??8,flicker:e.flicker??.3,nightOnly:n,dayIntensity:e.dayIntensity??(n?this.nightDayIntensity:1),seed:t,flickerSpeed:e.flickerSpeed??2.6}}_move(e,t){e.desc=t;let n=e.handle;if(n.desc=t,n.fade=0,n.light.intensity=0,!t){n.tag=``,n.intensity=0,n.light.position.copy(ru);return}let r=t.nightOnly??!0;this.lighting.retargetPointLight(n,{position:t.position,color:t.color??16757867,intensity:t.intensity??8,distance:t.distance??8,flicker:t.flicker??.3,nightOnly:r,dayIntensity:t.dayIntensity??(r?this.nightDayIntensity:1),seed:this._seeds.get(t),flickerSpeed:t.flickerSpeed??2.6}),n.tag=t.tag}_assign(e,t){let n=this._wanted;n.clear();let r=null;t&&(t.updateMatrixWorld(),this._m.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),r=this._frustum.setFromProjectionMatrix(this._m,t.coordinateSystem));let i=new Set;for(let e of this._slots)e.target&&i.add(e.target);let a=this.lighting.nightFactor,o=e?.x??0,s=e?.y??0,c=e?.z??0,l=this._scored,u=0;for(let t=0;t<l.length;t++){let n=l[t],d=n.d,f=d.position;if(r&&(this._sphere.center.copy(f),this._sphere.radius=(d.distance??8)+this.margin,!r.intersectsSphere(this._sphere))){n.s=1/0;continue}let p=d.nightOnly??!0?I(d.dayIntensity??this.nightDayIntensity,1,a):1;n.s=(e?Math.hypot(f.x-o,(f.y-s)*.5,f.z-c):0)+(d.priority??3)*this.priorityWeight+(1-Math.min(1,p))*this.dayPenalty-(i.has(d)?this.hysteresis:0),u++}if(u){l.sort((e,t)=>e.s-t.s);for(let e=0;e<Math.min(this.size,u);e++)n.add(l[e].d)}let d=new Set;for(let e of this._slots)e.target&&n.has(e.target)&&!d.has(e.target)?d.add(e.target):e.desc&&n.has(e.desc)&&!d.has(e.desc)?(e.target=e.desc,d.add(e.desc)):e.target=null;let f=this._slots.filter(e=>!e.target).sort((e,t)=>e.fade-t.fade),p=0;for(let e of n){if(d.has(e))continue;let t=f[p++];if(!t)break;t.target=e}}_updateSources(){if(!this._sources.size)return;let e=this.lighting;for(let[t,n]of this._sources){let r=this._handleOf(t);n.flickerFactor=r?r.flickerFactor:e.flickerAt(this._seeds.get(t)??cu(t.position),t.flicker??.3,t.flickerSpeed??2.6)}}_handleOf(e){if(!this.pooled){let t=this.descriptors.indexOf(e);return t>=0?this.handles[t]:null}for(let t of this._slots)if(t.desc===e)return t.handle;return null}},ru=new L(0,-500,0);function iu(e){return{position:e.position,color:e.color,intensity:ou(e.intensity,8,0,200),distance:ou(e.distance,8,.5,100),flicker:ou(e.flicker,.2,0,1),nightOnly:e.nightOnly??!0,priority:e.priority??3,tag:e.tag}}function au(e,{cache:t=null}={}){return e.map((e,t)=>({d:e,i:t,p:e.priority??3})).sort((e,t)=>e.p-t.p||e.i-t.i).map(({d:e})=>{if(!t)return iu(e);let n=t.get(e);return n||(n=iu(e),t.set(e,n)),n})}function ou(e,t,n,r){return e===void 0?void 0:Math.min(r,Math.max(n,Number.isFinite(Number(e))&&e!==null&&e!==``?Number(e):t))}function su(e,t,n){let r=new Map,i=new Set(e),a=new Map,o=new Map;for(let e of t){if(!e.tag)continue;let t=o.get(e.tag)??0;o.set(e.tag,t+1),i.has(e)||a.set(`${e.tag}#${t}`,e)}if(!a.size)return r;o.clear();for(let t of e){if(!t.tag)continue;let e=o.get(t.tag)??0;if(o.set(t.tag,e+1),n.has(t))continue;let i=a.get(`${t.tag}#${e}`);i&&r.set(t,i)}return r}function cu(e){return e?(Math.imul(Math.round(e.x*64),73856093)^Math.imul(Math.round(e.y*64),19349663)^Math.imul(Math.round(e.z*64),83492791))>>>0:13}function lu(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new T,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=uu(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=uu(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function uu(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new g(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function du(e,{x:t,z:n,weight:r=()=>1,maxWeight:i=1/0,maxExtent:a=1/0,minWeight:o=0}){if(!e.length)return[];let s=e.length,c=new Float64Array(s),l=new Float64Array(s),u=new Float64Array(s);for(let i=0;i<s;i++)c[i]=t(e[i]),l[i]=n(e[i]),u[i]=Math.max(0,r(e[i])||0);let d=[],f=e=>{let t=0;for(let n of e)t+=u[n];let n=1/0,r=-1/0,s=1/0,p=-1/0;for(let t of e)c[t]<n&&(n=c[t]),c[t]>r&&(r=c[t]),l[t]<s&&(s=l[t]),l[t]>p&&(p=l[t]);let m=Math.max(r-n,p-s)>a&&t>o;if(e.length<2||!(t>i||m)){d.push(e);return}let h=r-n>=p-s?c:l,g=e.slice().sort((e,t)=>h[e]-h[t]||e-t),_=0,v=1;for(let e=0;e<g.length-1&&(_+=u[g[e]],v=e+1,!(_>=t/2));e++);f(g.slice(0,v)),f(g.slice(v))};return f(Array.from({length:s},(e,t)=>t)),d.map(t=>t.sort((e,t)=>e-t).map(t=>e[t]))}function fu(e){return e?(e.index?e.index.count:e.attributes.position?.count??0)/3:0}function pu(e,{pad:t=0,only:n=null}={}){e.updateWorldMatrix(!0,!1);let r;e.isInstancedMesh?(e.boundingBox||e.computeBoundingBox(),r=e.boundingBox):(e.geometry.boundingBox||e.geometry.computeBoundingBox(),r=e.geometry.boundingBox);let i=r.clone().applyMatrix4(e.matrixWorld);return t&&i.expandByScalar(t),e.userData.cullBox=i,e.frustumCulled=!0,e.intersectsFrustum=function(e){return n&&!n(e)?!1:e.intersectsBox(this.userData.cullBox)},e}var mu=4,hu=Ot/mu,gu=1,_u=4,vu=.35,yu=1e-4,bu=2,xu=16,Su=256,Cu={N:{key:`N`,dx:0,dz:-1,nx:0,nz:-1,rx:-1,rz:0,idx:0},E:{key:`E`,dx:1,dz:0,nx:1,nz:0,rx:0,rz:-1,idx:1},S:{key:`S`,dx:0,dz:1,nx:0,nz:1,rx:1,rz:0,idx:2},W:{key:`W`,dx:-1,dz:0,nx:-1,nz:0,rx:0,rz:1,idx:3}},wu=[`N`,`E`,`S`,`W`],Tu={N:`S`,S:`N`,E:`W`,W:`E`},Eu=new Set([`grass`,`grass_dark`,`grass_flowers`,`dirt`,`sand`,`riverbed`,`moss_stone`]),Du=new Set([`grass`,`grass_dark`,`grass_flowers`]),Ou=new Set([`dirt`,`dirt_path`,`cobblestone`,`stone_tiles`,`sand`,`farmland`,`moss_stone`]),ku={grass_dark:3,grass:2,grass_flowers:1},Au=[],ju=[];for(let e=0;e<8;e++)Au.push(Math.cos(e*Math.PI/4)),ju.push(Math.sin(e*Math.PI/4));var Mu=[.22,.45,.8,1.25],Nu=1.75,Pu=8,Fu=[],Iu=[];for(let e=0;e<Pu;e++)Fu.push(Math.cos(e*Math.PI*2/Pu)),Iu.push(Math.sin(e*Math.PI*2/Pu));var Lu=64,Ru=48,zu={stripA:1,stripB:9,brim:17,skirt:22,corner:33},Bu=10,Vu=6,Hu=6/16,Uu=3/16,Wu=7/16,Gu=1/16,Ku=`
uniform vec2 lmUnits;
uniform float lmVarSeed;
float lmVHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float lmVNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(lmVHash(i), lmVHash(i + vec2(1.0, 0.0)), u.x), mix(lmVHash(i + vec2(0.0, 1.0)), lmVHash(i + vec2(1.0, 1.0)), u.x), u.y);
}
vec2 lmVApply(vec2 d, float r, float fl) {
  d.x = fl > 0.5 ? -d.x : d.x;
  return r < 0.5 ? d : r < 1.5 ? vec2(-d.y, d.x) : r < 2.5 ? -d : vec2(d.y, -d.x);
}
vec2 lmVariedUv(vec2 uv, out mat2 A) {
  vec2 w = vec2(uv.x * lmUnits.x, -uv.y * lmUnits.y);
  vec2 pw = (floor(w * 16.0) + 0.5) / 16.0;
  vec2 o = vec2(lmVNoise(pw * 1.35 + lmVarSeed), lmVNoise(pw * 1.35 - lmVarSeed + 41.3)) - 0.5;
  o += (vec2(lmVNoise(pw * 4.1 + 7.7), lmVNoise(pw * 4.1 - 3.1)) - 0.5) * 0.35;
  vec2 cell = floor(pw + o * 0.95);
  float h = lmVHash(cell + vec2(lmVarSeed * 0.37, 11.7));
  float r = floor(h * 4.0);
  float fl = step(0.5, fract(h * 7.31));
  vec2 c = cell + 0.5;
  vec2 w2 = c + lmVApply(w - c, r, fl);
  vec2 eu = lmVApply(vec2(1.0, 0.0), r, fl);
  vec2 ev = lmVApply(vec2(0.0, -1.0), r, fl);
  A = mat2(vec2(eu.x, -eu.y), vec2(ev.x, -ev.y));
  return vec2(w2.x / lmUnits.x, -w2.y / lmUnits.y);
}
`,qu=`
#ifdef USE_MAP
  mat2 lmA;
  vec2 lmUv = lmVariedUv( vMapUv, lmA );
  vec2 lmGx = lmA * dFdx( vMapUv );
  vec2 lmGy = lmA * dFdy( vMapUv );
  vec4 sampledDiffuseColor = textureGrad( map, lmUv, lmGx, lmGy );
  diffuseColor *= sampledDiffuseColor;
#endif
`,Ju=`
#if defined( USE_NORMALMAP_TANGENTSPACE ) && defined( USE_MAP )
  vec3 mapN = textureGrad( normalMap, lmUv, lmGx, lmGy ).xyz * 2.0 - 1.0;
  mapN.xy = transpose( lmA ) * mapN.xy;
  mapN.xy *= normalScale;
  normal = normalize( tbn * mapN );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
  vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
  mapN.xy *= normalScale;
  normal = normalize( tbn * mapN );
#endif
`,Yu=`
#ifdef USE_ALPHAMAP
  vec4 lmDecalMask = texture2D( alphaMap, vAlphaMapUv );
  diffuseColor.a *= lmDecalMask.g;
  diffuseColor.rgb *= lmDecalMask.r * ( 255.0 / 170.0 );
#endif
`,Xu=`
uniform float uLmBounce;
uniform vec3 uSunColor;
uniform vec3 uSunDirection;
`,Zu=`
#include <lights_fragment_maps>
{
  vec3 lmWN = inverseTransformDirection( normalize( vNormal ), viewMatrix );
  float lmSide = clamp( 1.0 - abs( lmWN.y ), 0.0, 1.0 );
  irradiance += uSunColor * ( max( uSunDirection.y, 0.0 ) * 0.44 * uLmBounce * lmSide );
}
`;function Qu(e,t){return .0015+.0025*(ku[e]??0)+5e-4*t}function $u(e){if(!e)return 0;let t=e.charCodeAt(0);return t>=48&&t<=57?t-48:t>=97&&t<=122?t-87:t>=65&&t<=90?t-55:0}function ed(e,t,n,r,i){let a=$u(n),o=!!t.water;return{char:e,type:t,level:a,h:a*Ot,walkable:t.walkable??!o,i:r,j:i,water:o,stairs:wt(Cu,t.stairs)?t.stairs:null,blocked:!1,waterSurface:null,waterSource:null}}function td(e,t,n){return e===`N`?1-n:e===`S`?n:e===`E`?t:1-t}var nd=class{constructor(e=!1){this.pos=[],this.nrm=[],this.uv=[],this.uv1=e?[]:null,this.col=[],this.idx=[],this.count=0}v(e,t,n,r,i,a,o,s,c,l,u,d=0,f=0){return this.pos.push(e,t,n),this.nrm.push(r,i,a),this.uv.push(o,s),this.col.push(c,l,u),this.uv1&&this.uv1.push(d,f),this.count++}quad(e,t,n,r){this.idx.push(e,t,n,e,n,r)}quadN(e,t,n,r,i,a,o){let s=this.pos,c=s[e*3],l=s[e*3+1],u=s[e*3+2],d=s[t*3]-c,f=s[t*3+1]-l,p=s[t*3+2]-u,m=s[n*3]-c,h=s[n*3+1]-l,g=s[n*3+2]-u,_=f*g-p*h,v=p*m-d*g,y=d*h-f*m;_*i+v*a+y*o>=0?this.idx.push(e,t,n,e,n,r):this.idx.push(e,n,t,e,r,n)}toGeometry(){let e=new T;return e.setAttribute(`position`,new Ze(this.pos,3)),e.setAttribute(`normal`,new Ze(this.nrm,3)),e.setAttribute(`uv`,new Ze(this.uv,2)),this.uv1&&e.setAttribute(`uv1`,new Ze(this.uv1,2)),e.setAttribute(`color`,new Ze(this.col,3)),e.setIndex(this.count>65535?new Xe(this.idx,1):new rt(this.idx,1)),e.computeBoundingBox(),e.computeBoundingSphere(),e}};function rd(e=1){let t=new W(Lu,Ru,[0,0,0,255]),n=(e,n,r)=>t.set(e,n,[K(Math.round(r),0,255),255,0,255]),r=(t,n,r=0)=>A(t,n,e+r),i=(t,n,r)=>O(t/8,n,e+r,8);for(let e=0;e<2;e++){let t=e?zu.stripB:zu.stripA,a=new Int8Array(Lu),o=new Uint8Array(Lu);for(let t=0;t<Lu;t++){let n=2+Math.round(i(t,e*7.3,11)*2.4);r(t,e,3)<.3&&(o[t]=1,n+=1+ +(r(t,e,5)<.45)),a[t]=K(n,1,6)}for(let i=0;i<Lu;i++){let s=a[i],c=Math.max(a[(i+Lu-1)%Lu],a[(i+1)%Lu]);for(let a=0;a<s;a++){let l=170;a===s-1?l=o[i]&&s>c?212:136:a===s-2?l=o[i]&&s>c?192:158:a===0&&r(i,e,9)<.2&&(l=185),n(i,t+a,l)}}}for(let e=0;e<Lu;e++){n(e,zu.brim,r(e,1,21)<.25?196:180);let t=r(e,2,21)<.8;t&&n(e,zu.brim+1,164),t&&r(e,3,21)<.42&&n(e,zu.brim+2,140)}for(let e=0;e<Lu;e++){let t=2+Math.round(i(e,3.7,31)*2.6),a=r(e,4,31)<.34;a&&(t+=1+ +(r(e,5,31)<.5)+ +(r(e,6,31)<.25)),t=K(t,2,7);for(let i=0;i<t;i++){let o=I(178,118,i/6);i===t-1?o=a?150:88:i===0?o=190:r(e,i,37)<.12&&(o+=22),n(e,zu.skirt+i,o)}}let a=zu.corner;for(let i=0;i<Vu;i++){let o=i*Bu+1,s=3.4+r(i,7,41)*2;for(let t=0;t<8;t++)for(let r=0;r<8;r++){let c=Math.atan2(t+.5,r+.5),l=(A(Math.floor(c*6),i,e+43)-.5)*2.2,u=Math.hypot(r+.5,t+.5),d=s+l;u<d&&n(o+r,a+t,u>d-1?136:170)}for(let e=0;e<8;e++)t.set(o+e,a-1,t.get(o+e,a));for(let e=-1;e<8;e++)t.set(o-1,a+e,t.get(o,a+Math.max(0,e)))}for(let e of[zu.stripA,zu.stripB,zu.brim,zu.skirt])for(let n=0;n<Lu;n++)t.set(n,e-1,t.get(n,e));return t}var id=class{constructor(e,t={}){let{textures:n,seed:r=j(String(e?.name??`lumina-map`)),baseDepth:i=2,chunkSize:a=32,uvVariation:o=!0,fringes:s=!0,overhangs:c=!0,aoStrength:l=1.1,tintStrength:u=1,sideVariation:d=!1,wallBounce:f=1}=t;if(!n)throw Error(`TileMap: opts.textures (TextureLibrary) is required`);this.textures=n,this.map=e,this.name=e.name??``,this.seed=r>>>0,this.options={baseDepth:i,chunkSize:a,uvVariation:o,fringes:s,overhangs:c,aoStrength:l,tintStrength:u,sideVariation:d},this._bounceUniform={value:f};let p=e.tiles??[],m=e.heights??[];this.depth=p.length,this.width=p.reduce((e,t)=>Math.max(e,t.length),0),this.bounds={minX:0,maxX:this.width,minZ:0,maxZ:this.depth},this._tiles=Array(this.width*this.depth).fill(null);let h=e.legend??{},g=new Set,_=1/0,v=-1/0;for(let e=0;e<this.depth;e++){let t=p[e],n=m[e]??``;for(let r=0;r<this.width;r++){let i=t[r]??` `,a=h[i];if(!a){i!==` `&&!g.has(i)&&(g.add(i),console.warn(`[TileMap] legend has no entry for "${i}" (treated as void)`));continue}if(a.void)continue;let o=ed(i,a,n[r],r,e),s=o.h;this._tiles[e*this.width+r]=o,_=Math.min(_,s),v=Math.max(v,s+(o.stairs?Ot:0))}}Number.isFinite(_)||(_=0,v=0),this.minHeight=_,this.maxHeight=v,this.baseY=_-i,this.waterLevel=e.waterLevel??.35;for(let e of this._tiles){if(!e||!e.water)continue;let t=this._computeWaterSurface(e,this.waterLevel);e.waterSurface=t.level,e.waterSource=t.source}this.colliders=[],this._cgrid=null,this._cgridDirty=!0,this.walkSurfaces=[],this.object=new Tt,this.object.name=`TileMap${this.name?`:${this.name}`:``}`,this._materials=new Map,this._builders=new Map,this._maskTexture=null,this._tmpPush={x:0,z:0},this._loose=0,this._tmpUV={u:0,v:0},this._tmpTint=[1,1,1],this._build()}tileAt(e,t){return e=Math.floor(e),t=Math.floor(t),e>=0&&t>=0&&e<this.width&&t<this.depth?this._tiles[t*this.width+e]:null}worldToTile(e,t,n={i:0,j:0}){return n.i=Math.floor(e),n.j=Math.floor(t),n}tileCenter(e,t,n=new L){let r=e+.5,i=t+.5;return n.set(r,this.getHeight(r,i),i)}forEachTile(e){for(let t=0;t<this.depth;t++)for(let n=0;n<this.width;n++){let r=this._tiles[t*this.width+n];r&&e(n,t,r)}}getHeight(e,t){let n=this._walkHeight(e,t);if(n!==null)return n;let r=Math.floor(e),i=Math.floor(t),a=this.tileAt(r,i);return a?a.stairs?this._stairRamp(a,e-r,t-i):a.h:this.baseY}getWaterSurface(e,t){let n=this.tileAt(Math.floor(e),Math.floor(t));return n&&n.water?n.waterSurface:null}waterSurfaceOf(e,t=this.waterLevel){return this._computeWaterSurface(e,t).level}_computeWaterSurface(e,t){let n=e.type;return typeof n.waterLevel==`number`?{level:n.waterLevel,source:`legend`}:typeof n.waterDepth==`number`?{level:e.h+n.waterDepth,source:`legend`}:t>e.h+.02?{level:t,source:`global`}:{level:e.h+vu,source:`auto`}}_stairRamp(e,t,n){let r=td(e.stairs,t,n);return K(e.h+hu*.5+r*Ot,e.h,e.h+Ot)}_topAt(e,t,n){if(!e.stairs)return e.h;let r=Math.min(3,Math.floor(td(e.stairs,t,n)*mu));return e.h+(r+1)*hu}_surface(e,t){let n=Math.floor(e),r=Math.floor(t),i=this.tileAt(n,r);return i?this._topAt(i,e-n,t-r):this.baseY}_walkHeight(e,t){let n=this.walkSurfaces,r=null;for(let i=0;i<n.length;i++){let a=n[i];e>=a.minX&&e<=a.maxX&&t>=a.minZ&&t<=a.maxZ&&(r===null||a.y>r)&&(r=a.y)}return r}isWalkable(e,t){if(e<0||t<0||e>this.width||t>this.depth)return!1;if(this._walkHeight(e,t)===null){let n=this.tileAt(Math.floor(e),Math.floor(t));if(!n||!n.walkable)return!1}return!this._pointInCollider(e,t)}addCollider(e){return e&&!this.colliders.includes(e)&&(this.colliders.push(e),this._cgridDirty=!0),e}removeCollider(e){let t=this.colliders.indexOf(e);t>=0&&(this.colliders.splice(t,1),this._cgridDirty=!0)}collidersChanged(){this._cgridDirty=!0}queryColliders(e,t,n,r,i=[]){i.length=0;let a=this.colliders,o=this._colliderGrid();if(!o){for(let e=0;e<a.length;e++)i.push(a[e]);return i}let s=++o.stamp,c=o.scratch;c.length=0;let l=Math.max(0,Math.floor((e-o.ox)/bu)),u=Math.min(o.nx-1,Math.floor((n-o.ox)/bu)),d=Math.max(0,Math.floor((t-o.oz)/bu)),f=Math.min(o.nz-1,Math.floor((r-o.oz)/bu));for(let e=d;e<=f;e++)for(let t=l;t<=u;t++){let n=o.cells[e*o.nx+t];n&&this._collectIndices(o,n,s,c)}this._collectIndices(o,o.always,s,c),c.length>1&&c.sort((e,t)=>e-t);for(let e=0;e<c.length;e++)i.push(a[c[e]]);return i}_collectIndices(e,t,n,r){for(let i=0;i<t.length;i++){let a=t[i];e.mark[a]!==n&&(e.mark[a]=n,r.push(a))}}_colliderGrid(){let e=this.colliders;if(e.length<xu)return null;let t=this._cgrid;if(t&&!this._cgridDirty&&t.count===e.length)return t;let n=Math.max(1,Math.ceil((this.width+32)/bu)),r=Math.max(1,Math.ceil((this.depth+32)/bu));t={ox:-16,oz:-16,nx:n,nz:r,cells:Array(n*r).fill(null),always:[],count:e.length,mark:new Uint32Array(e.length),stamp:0,scratch:[]};for(let i=0;i<e.length;i++){let a=e[i];if(!a)continue;let o,s,c,l;a.type===`circle`?(o=a.x-a.r,s=a.x+a.r,c=a.z-a.r,l=a.z+a.r):(o=a.minX,s=a.maxX,c=a.minZ,l=a.maxZ);let u=Math.floor((o- -16)/bu),d=Math.floor((s- -16)/bu),f=Math.floor((c- -16)/bu),p=Math.floor((l- -16)/bu);if(a.dynamic||!(Number.isFinite(u)&&Number.isFinite(d)&&Number.isFinite(f)&&Number.isFinite(p))||u<0||f<0||d>=n||p>=r||(d-u+1)*(p-f+1)>Su){t.always.push(i);continue}for(let e=f;e<=p;e++)for(let r=u;r<=d;r++){let a=e*n+r;(t.cells[a]??=[]).push(i)}}return this._cgrid=t,this._cgridDirty=!1,t}_nextPush(e,t,n,r,i){let a=1/0,o=Math.max(0,Math.floor((t-r-e.ox)/bu)),s=Math.min(e.nx-1,Math.floor((t+r-e.ox)/bu)),c=Math.max(0,Math.floor((n-r-e.oz)/bu)),l=Math.min(e.nz-1,Math.floor((n+r-e.oz)/bu));for(let u=c;u<=l;u++)for(let c=o;c<=s;c++){let o=e.cells[u*e.nx+c];o&&(a=this._firstPush(o,t,n,r,i,a))}return a=this._firstPush(e.always,t,n,r,i,a),a===1/0?-1:a}_firstPush(e,t,n,r,i,a){let o=this.colliders;for(let s=0;s<e.length;s++){let c=e[s];if(c<=i||c>=a)continue;let l=o[c];if(l.type===`circle`){let e=t-l.x,i=n-l.z,o=l.r+r;e*e+i*i<o*o&&(a=c)}else{let e=t-K(t,l.minX,l.maxX),i=n-K(n,l.minZ,l.maxZ),o=e*e+i*i;(o===0||o<r*r)&&(a=c)}}return a}blockTile(e,t){let n=this.tileAt(e,t);n&&(n.blocked=!0,n.walkable=!1)}unblockTile(e,t){let n=this.tileAt(e,t);n&&(n.blocked=!1,n.walkable=n.type.walkable??!n.water)}addWalkSurface(e){return e&&!this.walkSurfaces.includes(e)&&this.walkSurfaces.push(e),e}removeWalkSurface(e){let t=this.walkSurfaces.indexOf(e);t>=0&&this.walkSurfaces.splice(t,1)}_pointInCollider(e,t){let n=this.colliders,r=this._colliderGrid();if(r){let n=Math.floor((e-r.ox)/bu),i=Math.floor((t-r.oz)/bu),a=n>=0&&i>=0&&n<r.nx&&i<r.nz?r.cells[i*r.nx+n]:null;return!!a&&this._pointInList(e,t,a)||this._pointInList(e,t,r.always)}for(let r=0;r<n.length;r++){let i=n[r];if(i.type===`circle`){let n=e-i.x,r=t-i.z;if(n*n+r*r<i.r*i.r)return!0}else if(e>i.minX&&e<i.maxX&&t>i.minZ&&t<i.maxZ)return!0}return!1}_pointInList(e,t,n){let r=this.colliders;for(let i=0;i<n.length;i++){let a=r[n[i]];if(a.type===`circle`){let n=e-a.x,r=t-a.z;if(n*n+r*r<a.r*a.r)return!0}else if(e>a.minX&&e<a.maxX&&t>a.minZ&&t<a.maxZ)return!0}return!1}_standHeight(e,t,n,r){let i=this._walkHeight(e,t);if(i===null){let n=Math.floor(e),r=Math.floor(t),a=this.tileAt(n,r);if(!a||!a.walkable)return NaN;i=a.stairs?this._stairRamp(a,e-n,t-r):a.h}return Math.abs(i-n)>r?NaN:i}_canOccupy(e,t,n,r,i){if(e-n<0||t-n<0||e+n>this.width||t+n>this.depth)return!1;let a=this._standHeight(e,t,r,i);if(a!==a)return!1;for(let r=0;r<Pu;r++){let o=this._standHeight(e+Fu[r]*n,t+Iu[r]*n,a,i);if(o!==o)return!1}return!0}_occupy(e,t,n,r,i){if(!this._loose)return this._canOccupy(e,t,n,r,i);if(e-n<0||t-n<0||e+n>this.width||t+n>this.depth)return!1;let a=this._walkHeight(e,t),o=!0;if(a===null){let n=Math.floor(e),r=Math.floor(t),i=this.tileAt(n,r);if(!i)return!1;a=i.stairs?this._stairRamp(i,e-n,t-r):i.h,o=i.walkable}return this._loose===1?o&&Math.abs(a-r)<=i:a-r<=i}_pushOut(e,t,n,r){let i=this.colliders,a=this._colliderGrid();for(let r=0;r<3;r++){let r=!1;for(let o=a?this._nextPush(a,e,t,n,-1):0;a?o>=0:o<i.length;o=a?this._nextPush(a,e,t,n,o):o+1){let a=i[o];if(a.type===`circle`){let i=e-a.x,o=t-a.z,s=a.r+n,c=i*i+o*o;if(c>=s*s)continue;let l=Math.sqrt(c);l<1e-6&&(i=0,o=1,l=1),e=a.x+i/l*s,t=a.z+o/l*s,r=!0}else{let i=K(e,a.minX,a.maxX),o=K(t,a.minZ,a.maxZ),s=e-i,c=t-o,l=s*s+c*c;if(l===0){let i=e-a.minX,o=a.maxX-e,s=t-a.minZ,c=a.maxZ-t,l=Math.min(i,o,s,c);l===i?e=a.minX-n:l===o?e=a.maxX+n:t=l===s?a.minZ-n:a.maxZ+n,r=!0}else if(l<n*n){let a=Math.sqrt(l);e=i+s/a*n,t=o+c/a*n,r=!0}}}if(!r)break}return r.x=e,r.z=t,r}move(e,t,n,r=.3,i=.55,a={x:0,z:0}){let o=e.x,s=e.z,c=Math.hypot(t,n);if(c>1e-9){let e=Math.max(1,Math.ceil(c/Math.max(.04,r*.5))),a=t/e,l=n/e,u=this.getHeight(o,s),d=this._tmpPush;this._loose=0,this._canOccupy(o,s,r,u,i)||(this._loose=Number.isNaN(this._standHeight(o,s,u,i))?2:1);for(let t=0;t<e;t++){let e,t;if(this._loose&&this._canOccupy(o,s,r,u,i)&&(this._loose=0),this._occupy(o+a,s+l,r,u,i))e=o+a,t=s+l;else if(a!==0&&this._occupy(o+a,s,r,u,i))e=o+a,t=s;else if(l!==0&&this._occupy(o,s+l,r,u,i))e=o,t=s+l;else break;if(this.colliders.length&&(this._pushOut(e,t,r,d),(d.x!==e||d.z!==t)&&(this._occupy(d.x,d.z,r,u,i)?(e=d.x,t=d.z):(e=o,t=s))),e===o&&t===s)break;o=e,s=t,u=this.getHeight(o,s)}}return a.x=o,a.z=s,a}_topUV(e,t,n,r,i){return i.u=t/r[0],i.v=-n/r[1],i}_varies(e){if(!this.options.uvVariation||!Eu.has(e))return!1;let t=this.textures.meta(e).units;return Math.abs(t[0]-t[1])<1e-6}_patchMaterial(e,t,n,r){let i=n?this.textures.meta(t).units:null,a=this.seed%997*.731+3.17,o=this._bounceUniform;e.onBeforeCompile=e=>{e.uniforms.uLmBounce=o,e.uniforms.uSunColor=X.uSunColor,e.uniforms.uSunDirection=X.uSunDirection;let t=e.fragmentShader.replace(`#include <common>`,`#include <common>\n${Xu}${n?Ku:``}`).replace(`#include <lights_fragment_maps>`,Zu);n&&(e.uniforms.lmUnits={value:new q(i[0],i[1])},e.uniforms.lmVarSeed={value:a},t=t.replace(`#include <map_fragment>`,qu).replace(`#include <normal_fragment_maps>`,Ju)),r&&(t=t.replace(`#include <alphamap_fragment>`,Yu)),e.fragmentShader=t},e.customProgramCacheKey=()=>`lumina-tilemap${n?`-var`:``}${r?`-decal`:``}`}get wallBounce(){return this._bounceUniform.value}set wallBounce(e){this._bounceUniform.value=e}_tint(e,t,n=1){let r=this.options.tintStrength*n,i=(Ke(e*.11,t*.11,this._tintOptsA??={octaves:3,seed:this.seed+7})-.5)*2.6,a=(Ke(e*.23+17.3,t*.23,this._tintOptsB??={octaves:2,seed:this.seed+13})-.5)*2.2,o=K(i,-1,1)*r,s=1+K(a,-1,1)*.045*r,c=this._tmpTint;return c[0]=(1+.045*o)*s,c[1]=(1+.012*o)*s,c[2]=(1-.06*o)*s,c}_sideTint(e,t,n,r,i){let a=this.options.tintStrength,o=e*.9+n*.9,s=(Ke(o*.38+3.1,t*.55,{octaves:3,seed:this.seed+17})-.5)*2.4,c=(Ke(o*.13,t*.2+9.7,{octaves:2,seed:this.seed+19})-.5)*2.2,l=1+K(s,-1,1)*.11*a,u=K(c,-1,1)*a,d=this._tmpTint;if(d[0]=(1+.05*u)*l,d[1]=(1+.015*u)*l,d[2]=(1-.06*u)*l,i){let e=(1-x(.1,.75,r-t))*.5*a;d[0]*=1-.14*e,d[1]*=1+.05*e,d[2]*=1-.2*e}return d}_wetness(e,t,n){let r=Math.floor(e),i=Math.floor(t),a=1e9;for(let o=-1;o<=1;o++)for(let s=-1;s<=1;s++){let c=this.tileAt(r+s,i+o);if(!c||!c.water||c.waterSurface===null||n-c.waterSurface>.4||n<c.waterSurface-.01)continue;let l=Math.max(c.i-e,0,e-(c.i+1)),u=Math.max(c.j-t,0,t-(c.j+1));a=Math.min(a,Math.hypot(l,u))}return a>.35?0:1-x(0,.35,a)}_aoTop(e,t,n){let r=0;for(let i=0;i<8;i++){let a=0;for(let r=0;r<Mu.length;r++){let o=Mu[r],s=this._surface(e+Au[i]*o,t+ju[i]*o)-n;if(s>.02){let e=s/Math.sqrt(o*o+s*s)*(1-o/Nu);e>a&&(a=e)}}r+=a}return K(1-this.options.aoStrength*r/8,.28,1)}_aoWall(e,t,n,r,i,a,o){let s=1;s*=a?I(.24,1,x(0,2.8,t-this.baseY)):I(.58,1,x(0,1.15,t-i));let c=e+r.nx*.14,l=n+r.nz*.14,u=0;for(let e=-1;e<=1;e+=2)for(let n=0;n<2;n++){let i=n===0?.18:.42;if(this._surface(c+r.rx*e*i,l+r.rz*e*i)>t+.02){u+=n===0?.26:.14;break}}return s*=1-Math.min(.45,u),o!==null&&(s*=I(.66,1,x(.02,.4,o-t))),K(s,.2,1)}_builder(e,t,n=!1){let r=this.options.chunkSize,i=`${Math.floor(t.i/r)},${Math.floor(t.j/r)}`,a=`${e}@${i}`,o=this._builders.get(a);return o||(o=new nd(n),o.key=e,o.chunk=i,this._builders.set(a,o)),o}_terrainMaterial(e,t=!1){let n=`terrain:${e}${t?`:var`:``}`,r=this._materials.get(n);if(r)return r;let i=this.textures,a=i.normal(e),o=typeof i.pixels==`function`&&i.pixels(e)?.normalScale||.6;return r=new st({map:i.get(e),vertexColors:!0}),a&&(r.normalMap=a,r.normalScale=new q(o,o)),r.name=`TileMap:${e}${t?`:var`:``}`,this._patchMaterial(r,e,t,!1),this._materials.set(n,r),r}_maskTex(){if(!this._maskTexture){this._maskPixels=rd(this.seed+9001);let e=this._maskPixels.toTexture({wrap:`repeat`,mipmaps:!1,srgb:!1,name:`TileMap:decalMask`});e.channel=1,this._maskTexture=e}return this._maskTexture}_decalMaterial(e,t=!1){let n=`decal:${e}${t?`:var`:``}`,r=this._materials.get(n);if(r)return r;let i=this.textures,a=i.normal(e),o=typeof i.pixels==`function`&&i.pixels(e)?.normalScale||.6;return r=new st({map:i.get(e),alphaMap:this._maskTex(),alphaTest:.5,vertexColors:!0,side:2,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),a&&(r.normalMap=a,r.normalScale=new q(o,o)),r.name=`TileMap:decal:${e}${t?`:var`:``}`,this._patchMaterial(r,e,t,!0),this._materials.set(n,r),r}_build(){this.forEachTile((e,t,n)=>this._emitTile(n)),this.options.fringes&&this._emitFringes(),this._flushBuilders()}_emitTile(e){e.stairs?this._emitStairs(e):this._emitTop(e);for(let t of wu)this._emitSides(e,Cu[t])}_flushBuilders(){let e=[];for(let t of this._builders.values()){if(!t.count)continue;let[n,r]=t.key.split(`:`),i=n.endsWith(`X`),a=i?n.slice(0,-1):n,o=a===`fringe`||a===`brim`||a===`skirt`,s=!i&&(a===`top`||a===`fringe`||a===`brim`)&&this._varies(r),c=o?this._decalMaterial(r,s):this._terrainMaterial(r,s),l=new R(t.toGeometry(),c);l.name=t.key,l.castShadow=a!==`fringe`&&a!==`top`,l.receiveShadow=!0,l.matrixAutoUpdate=!1,l.userData.kind=a,l.userData.chunk=t.chunk,o&&(l.renderOrder=1),e.push(l)}e.sort((e,t)=>e.renderOrder-t.renderOrder||(e.name<t.name?-1:1));for(let t of e)this.object.add(t);return this.object.updateMatrixWorld(!0),this._builders.clear(),e}consolidateChunks({maxTriangles:e=48e3,maxExtent:t=1/0,minTriangles:n=0}={}){let r=this.options.chunkSize,i=new Map;for(let e of this.object.children){if(!e.isMesh||e.userData.chunks)continue;let t=`${e.name}|${e.material.uuid}|${+e.castShadow}|${e.renderOrder}`,n=i.get(t);n||i.set(t,n=[]),n.push(e)}let a=this.object.children.length,o=e=>e.userData.chunk.split(`,`).map(e=>(Number(e)+.5)*r);for(let r of i.values()){if(r.length<2)continue;let i=du(r,{x:e=>o(e)[0],z:e=>o(e)[1],weight:e=>fu(e.geometry),maxWeight:e,maxExtent:t,minWeight:n});for(let e of i){if(e.length<2)continue;let t=lu(e.map(e=>e.geometry),!1);if(!t)continue;let n=e[0],r=new R(t,n.material);r.name=n.name,r.castShadow=n.castShadow,r.receiveShadow=n.receiveShadow,r.matrixAutoUpdate=!1,r.renderOrder=n.renderOrder,r.userData.kind=n.userData.kind,r.userData.chunks=e.map(e=>e.userData.chunk);for(let t of e)t.removeFromParent(),t.geometry.dispose();this.object.add(r)}}let s=[...this.object.children].sort((e,t)=>e.renderOrder-t.renderOrder||(e.name<t.name?-1:+(e.name>t.name)));this.object.clear();for(let e of s)this.object.add(e);return this.object.updateMatrixWorld(!0),a-this.object.children.length}rebuildRect(e,t){let n=this.updateTiles(e,t,{rebase:!1});return n?(this.rebuildChunks(n),n):null}updateTiles(e,t,{rebase:n=!0}={}){let r=this.width,i=this.depth,a=e?.tiles??[];if(a.length!==i||a.reduce((e,t)=>Math.max(e,t.length),0)!==r||(e.waterLevel??.35)!==this.waterLevel)return null;let o=Math.max(0,Math.floor(t.minI)),s=Math.min(r-1,Math.floor(t.maxI)),c=Math.max(0,Math.floor(t.minJ)),l=Math.min(i-1,Math.floor(t.maxJ));if(s<o||l<c)return[];let u=e.legend??{},d=e.heights??[],f=new Map;for(let e=c;e<=l;e++)for(let t=o;t<=s;t++){let n=a[e][t]??` `,i=u[n];f.set(e*r+t,i&&!i.void?ed(n,i,(d[e]??``)[t],t,e):null)}let p=1/0,m=-1/0;for(let e=0;e<this._tiles.length;e++){let t=f.has(e)?f.get(e):this._tiles[e];t&&(p=Math.min(p,t.h),m=Math.max(m,t.h+(t.stairs?Ot:0)))}if(!Number.isFinite(p)||!n&&p<this.baseY+this.options.baseDepth-yu)return null;this.map=e;for(let[e,t]of f)if(this._tiles[e]=t,t&&t.water){let e=this._computeWaterSurface(t,this.waterLevel);t.waterSurface=e.level,t.waterSource=e.source}this.minHeight=p,this.maxHeight=m;let h=this.options.chunkSize,g=p-this.options.baseDepth;if(n&&Math.abs(g-this.baseY)>yu){this.baseY=g;let e=[];for(let t=0;t*h<i;t++)for(let n=0;n*h<r;n++)e.push(`${n},${t}`);return e}let _=Math.max(0,Math.floor((o-2)/h)),v=Math.min(Math.floor((r-1)/h),Math.floor((s+2)/h)),y=Math.max(0,Math.floor((c-2)/h)),b=Math.min(Math.floor((i-1)/h),Math.floor((l+2)/h)),x=[];for(let e=y;e<=b;e++)for(let t=_;t<=v;t++)x.push(`${t},${e}`);return x}rebuildChunks(e){let t=this.width,n=this.depth,r=this.options.chunkSize,i=new Set(e);if(!i.size)return[];let a=!0;for(;a;){a=!1;for(let e of this.object.children){let t=e.userData.chunks;if(t&&t.some(e=>i.has(e)))for(let e of t)i.has(e)||(i.add(e),a=!0)}}for(let e of[...this.object.children])e.isMesh&&(i.has(e.userData.chunk)||e.userData.chunks?.some(e=>i.has(e)))&&(e.removeFromParent(),e.geometry.dispose());let o=[...i].map(e=>e.split(`,`).map(Number)).filter(([e,i])=>e>=0&&i>=0&&e*r<t&&i*r<n);o.sort((e,t)=>e[1]-t[1]||e[0]-t[0]);for(let[e,i]of o){let a=i*r,o=Math.min(n,a+r),s=e*r,c=Math.min(t,s+r);for(let e=a;e<o;e++)for(let n=s;n<c;n++){let r=this._tiles[e*t+n];r&&(this._emitTile(r),this.options.fringes&&this._emitFringesAt(n,e,r))}}return this._flushBuilders()}*rebuildChunkSteps(e){let t=this.width,n=this.depth,r=this.options.chunkSize,[i,a]=e.split(`,`).map(Number);if(!(i>=0&&a>=0&&i*r<t&&a*r<n))return[];let o=new Map,s=this._builders,c=a*r,l=Math.min(n,c+r),u=i*r,d=Math.min(t,u+r);for(let e=c;e<l;e++){this._builders=o;try{for(let n=u;n<d;n++){let r=this._tiles[e*t+n];r&&(this._emitTile(r),this.options.fringes&&this._emitFringesAt(n,e,r))}}finally{this._builders=s}e<l-1&&(yield)}for(let t of[...this.object.children])t.isMesh&&t.userData.chunk===e&&(t.removeFromParent(),t.geometry.dispose());this._builders=o;try{return this._flushBuilders()}finally{this._builders=s}}_emitTop(e){let t=e.type.top;if(!t)return;let n=this.textures.meta(t).units,r=this._builder(`${e.type.uvVariation===!1?`topX`:`top`}:${t}`,e),i=this._tmpUV,a=r.count,o=e.water?.4:1;for(let t=0;t<=_u;t++)for(let a=0;a<=_u;a++){let s=e.i+a/_u,c=e.j+t/_u;this._topUV(e,s,c,n,i);let l=this._aoTop(s,c,e.h),u=this._tint(s,c,o),d=e.water?0:this._wetness(s,c,e.h)*.2;r.v(s,e.h,c,0,1,0,i.u,i.v,u[0]*l**1.08*(1-d*1.1),u[1]*l*(1-d),u[2]*l**.9*(1-d*.6))}for(let e=0;e<_u;e++)for(let t=0;t<_u;t++){let n=a+e*5+t;r.quad(n,n+5,n+5+1,n+1)}}_emitStairs(e){let t=e.type.top;if(!t)return;let n=e.stairs;Cu[n];let r=this.textures.meta(t).units,i=e.type.riser||t,a=this.textures.meta(i).units,o=this._builder(`top:${t}`,e),s=this._builder(`side:${i}`,e),c=this._tmpUV;for(let t=0;t<mu;t++){let i=e.h+(t+1)*hu,l=t/mu,u=(t+1)/mu,d=0,f=1,p=0,m=1;n===`N`?(p=1-u,m=1-l):n===`S`?(p=l,m=u):n===`E`?(d=l,f=u):(d=1-u,f=1-l);let h=n===`N`||n===`S`?_u:1,g=n===`N`||n===`S`?1:_u,_=o.count;for(let a=0;a<=g;a++)for(let s=0;s<=h;s++){let u=e.i+I(d,f,s/h),_=e.j+I(p,m,a/g);this._topUV(e,u,_,r,c);let v=td(n,u-e.i,_-e.j),y=Math.abs(v-l)<1e-4,b=this._aoTop(u,_,i);!y&&t<3&&(b*=.68);let x=y?1.22:1;ad(o,u,i,_,0,1,0,c.u,c.v,b*x)}let v=h+1;for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=_+e*v+t;o.quadN(n,n+v,n+v+1,n+1,0,1,0)}let y=Cu[Tu[n]],b=e.h+t*hu,x=e.i+.5,S=e.j+.5;n===`N`?S=e.j+1-l:n===`S`?S=e.j+l:x=n===`E`?e.i+l:e.i+1-l;let C=x-y.rx*.5,w=S-y.rz*.5,T=s.count;for(let e=0;e<=_u;e++){let t=e/_u,n=C+y.rx*t,r=w+y.rz*t,o=(n*y.rx+r*y.rz)/a[0];ad(s,n,b,r,y.nx,0,y.nz,o,b/a[1],.5),ad(s,n,i,r,y.nx,0,y.nz,o,i/a[1],.9)}for(let e=0;e<_u;e++){let t=T+e*2;s.quadN(t,t+2,t+3,t+1,y.nx,0,y.nz)}}}_edgeProfile(e,t,n){if(!e)return n[0]=n[1]=n[2]=n[3]=this.baseY,n;if(!e.stairs||Tu[e.stairs]===t)return n[0]=n[1]=n[2]=n[3]=e.h,n;for(let r=0;r<4;r++){let i=(r+.5)/4,a,o;t===`N`?(a=i,o=.001):t===`S`?(a=i,o=.999):t===`E`?(a=.999,o=i):(a=.001,o=i),n[r]=this._topAt(e,a,o)}return n}_emitSides(e,t){let n=this.tileAt(e.i+t.dx,e.j+t.dz),r=this._edgeProfile(e,t.key,this._ep0||=[0,0,0,0]),i=this._edgeProfile(n,Tu[t.key],this._ep1||=[0,0,0,0]),a=!n,o=0;for(;o<4;){let s=o+1;for(;s<4&&Math.abs(r[s]-r[o])<yu&&Math.abs(i[s]-i[o])<yu;)s++;let c=r[o],l=i[o];c>l+yu&&this._emitFace(e,t,o/4,s/4,l,c,a,n&&n.water?n.waterSurface:null),o=s}}_edgePoint(e,t,n){let r=this._ptmp||={x:0,z:0};switch(t.key){case`N`:r.x=e.i+n,r.z=e.j;break;case`S`:r.x=e.i+n,r.z=e.j+1;break;case`E`:r.x=e.i+1,r.z=e.j+n;break;default:r.x=e.i,r.z=e.j+n}return r}_emitFace(e,t,n,r,i,a,o,s=null){let c=e.type,l=c.lip||null,u=c.side||l||c.top;if(!u)return;let d=l?Math.max(i,a-gu):a,f=Du.has(c.top)&&!e.stairs&&c.overhang!==!1,p=this.options.overhangs&&f&&l&&a-i>=.24&&Math.abs(a-e.h)<yu,m=p?a:null;s!==null&&(s<i||s>a+.2)&&(s=null),l&&this._faceBand(e,t,n,r,d,a,l,!0,a,i,o,m,s),d>i+yu&&this._faceBand(e,t,n,r,i,d,u,!1,a,i,o,m,s),p&&this._emitOverhang(e,t,n,r,a,a-i)}_faceBand(e,t,n,r,i,a,o,s,c,l,u,d,f=null){let p=this.textures.meta(o),m=p.units,h=this._builder(`side:${o}`,e),g=[i];for(let e=Math.floor(i/.5+1-yu)*.5;e<a-yu;e+=.5)e>i+yu&&g.push(e);if(d!==null&&d-.25>i+yu&&d-.25<a-yu&&!g.some(e=>Math.abs(e-(d-.25))<yu)&&g.push(d-.25),f!==null)for(let e of[f,f+.14])e>i+yu&&e<a-yu&&!g.some(t=>Math.abs(t-e)<yu)&&g.push(e);g.push(a),g.sort((e,t)=>e-t);let _=0;this.options.sideVariation&&(_=Math.floor(A(e.i*4+t.idx,e.j,this.seed+303)*p.px[0])/p.px[0]);let v=this._edgePoint(e,t,n),y=v.x,b=v.z,S=this._edgePoint(e,t,r),C=S.x,w=S.z,T=y*t.rx+b*t.rz,E=C*t.rx+w*t.rz,D=T<=E?y:C,O=T<=E?b:w,k=T<=E?C:y,ee=T<=E?w:b,j=Math.max(1,Math.round((r-n)*_u)),M=h.count;for(let e=0;e<=j;e++){let n=e/j,r=I(D,k,n),i=I(O,ee,n),a=(r*t.rx+i*t.rz)/m[0]+_;for(let e=0;e<g.length;e++){let n=g[e],o=s?(n-c)/m[1]+1:n/m[1],p=this._aoWall(r,n,i,t,l,u,d),_=this._sideTint(r,n,i,c,d!==null),v=f===null?0:n<=f+yu?.3:.3*(1-x(f,f+.14,n));h.v(r,n,i,t.nx,0,t.nz,a,o,_[0]*p**1.06*(1-v),_[1]*p*(1-v*.9),_[2]*p**.92*(1-v*.6))}}let N=g.length;for(let e=0;e<j;e++)for(let t=0;t<N-1;t++){let n=M+e*N+t,r=M+(e+1)*N+t;h.quad(n,r,r+1,n+1)}}_convexEnd(e,t,n,r){let i=+(t.dx===0),a=t.dx===0?0:1,o=this._edgePoint(e,t,n<0?0:1),s=o.x+i*n*.06-t.nx*.06,c=o.z+a*n*.06-t.nz*.06;return this._surface(s,c)<r-.2}_emitOverhang(e,t,n,r,i,a){let o=e.type.top,s=this.textures.meta(o).units,c=e.type.uvVariation===!1?`X`:``,l=this._builder(`brim${c}:${o}`,e,!0),u=this._tmpUV,d=+(t.dx===0),f=t.dx===0?0:1,p=n===0&&this._convexEnd(e,t,-1,i),m=r===1&&this._convexEnd(e,t,1,i),h=Uu,g=this._edgePoint(e,t,n),_=g.x,v=g.z;g=this._edgePoint(e,t,r);let y=g.x,b=g.z,x=_-(p?d*h:0),S=v-(p?f*h:0),C=y+(m?d*h:0),w=b+(m?f*h:0),T=t.dx===0?x:_,E=t.dx===0?S:v,D=t.dx===0?C:y,O=t.dx===0?w:b,k=Math.max(1,Math.round(Math.hypot(D-T,O-E)*_u)),A=1-(zu.brim-Gu*16)/Ru,ee=1-(zu.brim+Uu*16)/Ru,j=l.count;for(let n=0;n<=k;n++){let r=n/k,a=I(T,D,r),o=I(E,O,r),c=a*d+o*f,p=this._tint(a,o);for(let n=0;n<2;n++){let r=n?Uu:-Gu,d=a+t.nx*r,f=o+t.nz*r;this._topUV(e,d,f,s,u),l.v(d,i+6e-4*(t.idx+1),f,0,1,0,u.u,u.v,p[0],p[1],p[2],c/4,n?ee:A)}}for(let e=0;e<k;e++){let t=j+e*2;l.quadN(t,t+1,t+3,t+2,0,1,0)}let M=Math.min(Wu,a*.72),N=t.nx*Uu,P=t.nz*Uu,F=x*t.rx+S*t.rz,te=C*t.rx+w*t.rz,ne=(F<=te?x:C)+N,re=(F<=te?S:w)+P,ie=(F<=te?C:x)+N,ae=(F<=te?w:S)+P,oe=Math.max(1,Math.round(Math.hypot(ie-ne,ae-re)*_u));l=this._builder(`skirt:${o}`,e,!0),j=l.count;for(let e=0;e<=oe;e++){let n=e/oe,r=I(ne,ie,n),a=I(re,ae,n),o=(r*t.rx+a*t.rz)/s[0],c=(r-N)*d+(a-P)*f,u=this._tint(r,a);for(let e=0;e<2;e++){let n=e?i:i-M,d=1-(zu.skirt+(e?0:M*16))/Ru,f=e?1:.82;l.v(r,n,a,t.nx,0,t.nz,o,-n/s[1],u[0]*f,u[1]*f,u[2]*f,c/4,d)}}for(let e=0;e<oe;e++){let n=j+e*2;l.quadN(n,n+2,n+3,n+1,t.nx,0,t.nz)}}_isGrassSource(e,t){if(!e||e.stairs||e.water||e.type.fringe===!1||Math.abs(e.h-t.h)>yu)return!1;let n=e.type.top;if(!Du.has(n))return!1;let r=t.type.top;return Ou.has(r)?!0:Du.has(r)&&(ku[n]??0)>(ku[r]??0)}_emitFringes(){this.forEachTile((e,t,n)=>this._emitFringesAt(e,t,n))}_emitFringesAt(e,t,n){let r=this._tmpUV;{if(n.stairs||n.water||n.type.fringe===!1||!Ou.has(n.type.top)&&!Du.has(n.type.top))return;let i=[];for(let r of wu){let a=Cu[r],o=this.tileAt(e+a.dx,t+a.dz);i.push(this._isGrassSource(o,n)?o:null)}for(let a=0;a<4;a++){let o=i[a];if(!o)continue;let s=Cu[wu[a]],c=o.type.top,l=this.textures.meta(c).units,u=this._builder(`fringe${o.type.uvVariation===!1?`X`:``}:${c}`,n,!0),d=+(s.dx===0),f=s.dx===0?0:1,p=A(e+s.idx*7,t,this.seed+404)<.5?zu.stripA:zu.stripB,m=n.h+Qu(c,s.idx),h=this._edgePoint(n,s,0),g=h.x,_=h.z,v=u.count;for(let e=0;e<=_u;e++){let t=e/_u;for(let e=0;e<2;e++){let i=e?Hu:-Gu,a=g+d*t-s.nx*i,c=_+f*t-s.nz*i;this._topUV(o,a,c,l,r);let h=a*d+c*f,v=this._aoTop(a,c,n.h),y=this._tint(a,c),b=1-(p+i*16)/Ru;u.v(a,m,c,0,1,0,r.u,r.v,y[0]*v**1.08,y[1]*v,y[2]*v**.9,h/4,b)}}for(let e=0;e<_u;e++){let t=v+e*2;u.quadN(t,t+1,t+3,t+2,0,1,0)}}let a=[[-1,-1,0,3],[1,-1,0,1],[1,1,2,1],[-1,1,2,3]];for(let o=0;o<4;o++){let[s,c,l,u]=a[o];if(i[l]||i[u])continue;let d=this.tileAt(e+s,t+c);if(!this._isGrassSource(d,n))continue;let f=d.type.top,p=this.textures.meta(f).units,m=this._builder(`fringe${d.type.uvVariation===!1?`X`:``}:${f}`,n,!0),h=e+ +(s>0),g=t+ +(c>0),_=Math.floor(A(e,t,this.seed+505+o)*Vu)*Bu+1,v=n.h+Qu(f,4),y=m.count;for(let e=0;e<2;e++)for(let t=0;t<2;t++){let i=t*Hu,a=e*Hu,o=h-s*i,l=g-c*a;this._topUV(d,o,l,p,r);let u=this._tint(o,l),f=this._aoTop(o,l,n.h),y=(_+(t?Hu*16:0))/Lu,b=1-(zu.corner+(e?Hu*16:0))/Ru;m.v(o,v,l,0,1,0,r.u,r.v,u[0]*f**1.08,u[1]*f,u[2]*f**.9,y,b)}m.quadN(y,y+2,y+3,y+1,0,1,0)}}}get stats(){let e=0,t=0,n=0;return this.object.traverse(r=>{r.isMesh&&(e++,t+=r.geometry.index.count/3,n+=r.geometry.attributes.position.count)}),{meshes:e,triangles:t,vertices:n,materials:this._materials.size}}dispose(){this.object.traverse(e=>{e.isMesh&&e.geometry.dispose()});for(let e of this._materials.values())e.dispose();this._materials.clear(),this._maskTexture?.dispose(),this._maskTexture=null,this.object.removeFromParent(),this.object.clear()}};function ad(e,t,n,r,i,a,o,s,c,l){return e.v(t,n,r,i,a,o,s,c,l**1.06,l,l**.92)}function od(e,t,n,r,i){let{width:a,R:o,colliders:s,maxDistance:c,maxDepth:l,maxFlow:u}=e,d=e.surf,f=e.flow,p=e.bed,m=r*i,h=new Float32Array(m).fill(NaN),g=new Float32Array(m),_=new Float32Array(m),v=new Float32Array(m),y=e.depth,b=(e,t)=>e<0||t<0||e>=a||t>=y?NaN:d[t*a+e],x=Math.floor(t/o),S=Math.floor(n/o),C=Math.floor((t+r-1)/o)-x+1,w=Math.floor((n+i-1)/o)-S+1,T=Array(Math.max(0,C*w)).fill(null);for(let e=0;e<s.length;e++){let t=s[e],n=t.type===`circle`,r=n?t.x-t.r:t.minX,i=n?t.x+t.r:t.maxX,a=n?t.z-t.r:t.minZ,o=n?t.z+t.r:t.maxZ;if(!(i>r&&o>a))continue;let c=Math.max(x,Math.floor(r)),l=Math.min(x+C-1,Math.floor(i)),u=Math.max(S,Math.floor(a)),d=Math.min(S+w-1,Math.floor(o));for(let e=u;e<=d;e++)for(let n=c;n<=l;n++){let r=b(n,e);if(r!==r)continue;let i=(e-S)*C+(n-x);(T[i]??=[]).push(t)}}for(let e=0;e<i;e++){let i=n+e,s=Math.floor(i/o),c=(i+.5)/o;for(let n=0;n<r;n++){let i=t+n,l=Math.floor(i/o),u=b(l,s);if(u!==u)continue;let d=(i+.5)/o,m=!1,y=T[(s-S)*C+(l-x)]??sd;for(let e=0;e<y.length&&!m;e++){let t=y[e];m=t.type===`circle`?(d-t.x)**2+(c-t.z)**2<t.r*t.r:d>t.minX&&d<t.maxX&&c>t.minZ&&c<t.maxZ}if(m)continue;let w=e*r+n,E=s*a+l;h[w]=u,g[w]=Math.max(0,u-p[E]),_[w]=f[E*2],v[w]=f[E*2+1]}}let E=new Float32Array(m);for(let e=0;e<i;e++)for(let t=0;t<r;t++){let n=e*r+t,a=h[n];if(a!==a){E[n]=0;continue}let o=!1;if(t>0){let e=h[n-1];e===e&&Math.abs(e-a)>.01&&(o=!0)}if(t<r-1){let e=h[n+1];e===e&&Math.abs(e-a)>.01&&(o=!0)}if(e>0){let e=h[n-r];e===e&&Math.abs(e-a)>.01&&(o=!0)}if(e<i-1){let e=h[n+r];e===e&&Math.abs(e-a)>.01&&(o=!0)}E[n]=o?.5:1e9}let D=Math.SQRT2;for(let e=0;e<i;e++)for(let t=0;t<r;t++){let n=e*r+t,i=E[n];i!==0&&(t>0&&(i=Math.min(i,E[n-1]+1)),e>0&&(i=Math.min(i,E[n-r]+1),t>0&&(i=Math.min(i,E[n-r-1]+D)),t<r-1&&(i=Math.min(i,E[n-r+1]+D))),E[n]=i)}for(let e=i-1;e>=0;e--)for(let t=r-1;t>=0;t--){let n=e*r+t,a=E[n];a!==0&&(t<r-1&&(a=Math.min(a,E[n+1]+1)),e<i-1&&(a=Math.min(a,E[n+r]+1),t<r-1&&(a=Math.min(a,E[n+r+1]+D)),t>0&&(a=Math.min(a,E[n+r-1]+D))),E[n]=a)}for(let e=0;e<m;e++)E[e]=Math.min(E[e]/o,c);cd(E,r,i,1,2,e=>h[e]===h[e]),cd(g,r,i,Math.max(1,o>>1),2,null),cd(_,r,i,Math.max(1,o>>1),2,null),cd(v,r,i,Math.max(1,o>>1),2,null);let O=new Uint8Array(m*4),k=u;for(let e=0;e<m;e++)O[e*4]=Math.round(K(E[e]/c)*255),O[e*4+1]=Math.round(K(g[e]/l)*255),O[e*4+2]=Math.round(K(_[e]/k*.5+.5)*255),O[e*4+3]=Math.round(K(v[e]/k*.5+.5)*255);return O}var sd=[];function cd(e,t,n,r,i,a){let o=new Float32Array(e.length);for(let s=0;s<i;s++){for(let i=0;i<n;i++)for(let n=0;n<t;n++){let a=0,s=0;for(let o=-r;o<=r;o++){let r=n+o;r<0||r>=t||(a+=e[i*t+r],s++)}o[i*t+n]=a/s}for(let i=0;i<n;i++)for(let s=0;s<t;s++){let c=i*t+s;if(a&&!a(c))continue;let l=0,u=0;for(let e=-r;e<=r;e++){let r=i+e;r<0||r>=n||(l+=o[r*t+s],u++)}e[c]=l/u}}}var ld=V.water.map(e=>Ae(e)),ud=`
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

float lmHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float lmNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(lmHash(i), lmHash(i + vec2(1.0, 0.0)), u.x),
             mix(lmHash(i + vec2(0.0, 1.0)), lmHash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float lmBayer2(vec2 a) { a = floor(a); return fract(dot(a, vec2(0.5, a.y * 0.75))); }
float lmBayer4(vec2 a) { return lmBayer2(0.5 * a) * 0.25 + lmBayer2(a); }
// keep water saturated under strongly coloured light (golden hour / purple dusk fill)
vec3 lmSaturate(vec3 c, float amount) {
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  return max(mix(vec3(l), c, amount), 0.0);
}
// partially neutralise a light colour: water scatters light and keeps more of its own hue
vec3 lmNeutral(vec3 irr, float amount) {
  return mix(irr, vec3(dot(irr, vec3(0.2126, 0.7152, 0.0722))), amount);
}


vec3 lmIrradiance(vec3 nW, vec3 posW, float shadow) {
  vec3 n = normalize((viewMatrix * vec4(nW, 0.0)).xyz);
  vec3 irr = ambientLightColor;
  #if NUM_HEMI_LIGHTS > 0
  for (int i = 0; i < NUM_HEMI_LIGHTS; i++) irr += getHemisphereLightIrradiance(hemisphereLights[i], n);
  #endif
  #if NUM_DIR_LIGHTS > 0
  for (int i = 0; i < NUM_DIR_LIGHTS; i++) irr += directionalLights[i].color * max(dot(n, directionalLights[i].direction), 0.0) * shadow;
  #endif
  #if NUM_POINT_LIGHTS > 0
  vec3 lmVp = (viewMatrix * vec4(posW, 1.0)).xyz;
  IncidentLight lmIl;
  for (int i = 0; i < NUM_POINT_LIGHTS; i++) {
    getPointLightInfo(pointLights[i], lmVp, lmIl);
    irr += lmIl.color * max(dot(n, lmIl.direction), 0.0);
  }
  #endif
  return irr * RECIPROCAL_PI;
}

`,dd=`
attribute float aTop;
varying vec3 vWorldPos;
varying vec3 vWorldNormal;
varying float vTop;
#include <common>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
  #include <beginnormal_vertex>
  #include <defaultnormal_vertex>
  #include <begin_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <worldpos_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>
  vWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
  vWorldNormal = normalize(mat3(modelMatrix) * objectNormal);
  vTop = aTop;
}
`,fd=`
uniform float uTime;
uniform float uNight;
uniform vec3 uSunDirection;
uniform vec3 uSunColor;
uniform vec3 uFogColor;
uniform sampler2D uShore;
uniform vec4 uShoreRect;
uniform float uMaxDist;
uniform float uMaxDepth;
uniform float uMaxFlow;
uniform vec3 uC0;
uniform vec3 uC1;
uniform vec3 uC2;
uniform vec3 uC3;
uniform vec3 uCrest;
uniform vec3 uFoam;
uniform float uOpacity;
uniform float uShallowOpacity;
uniform float uGlint;
uniform float uFoamAmount;
uniform float uBrightness;
uniform float uDeepAt;
uniform float uReflect;
uniform float uSaturation;
uniform float uNeutral;
varying vec3 vWorldPos;
varying vec3 vWorldNormal;
varying float vTop;
${ud}

// short horizontal ripple dashes (anisotropic value noise, two octaves)
float lmRipple(vec2 p, float t) {
  vec2 q = vec2(p.x * 1.9, p.y * 5.2);
  float n = lmNoise(q + vec2(t * 0.22, t * 0.08));
  return n * 0.62 + 0.38 * lmNoise(q * 2.3 + vec2(-t * 0.31, t * 0.17) + 17.0);
}

// Two-phase flow map: the pattern is advected along the local flow and restarted every
// PERIOD seconds with a contrast-preserving cross-fade, so it never stretches.
float lmFlowRipple(vec2 p, vec2 flow, float t) {
  const float PERIOD = 3.2;
  float ph0 = fract(t / PERIOD);
  float ph1 = fract(t / PERIOD + 0.5);
  float w0 = 1.0 - abs(2.0 * ph0 - 1.0);
  float r0 = lmRipple(p - flow * (ph0 * PERIOD), t);
  float r1 = lmRipple(p - flow * (ph1 * PERIOD) + vec2(0.37, 0.61), t);
  float r = mix(r1, r0, w0);
  float norm = inversesqrt(w0 * w0 + (1.0 - w0) * (1.0 - w0));
  return clamp((r - 0.5) * norm + 0.5, 0.0, 1.0);
}

void main() {
  #include <logdepthbuf_fragment>
  float t = uTime;
  float shadow = getShadowMask();
  float night = clamp(uNight, 0.0, 1.0);
  vec3 V = normalize(cameraPosition - vWorldPos);
  vec3 irrUp = lmNeutral(lmIrradiance(vec3(0.0, 1.0, 0.0), vWorldPos, shadow), uNeutral * (1.0 - night)) * uBrightness;
  vec3 sky = uFogColor;
  vec3 col;
  float alpha;

  if (vWorldNormal.y < 0.5) {
    // --- vertical cross-section of the water body (diorama cut / step down) ---
    vec2 axis = vec2(-vWorldNormal.z, vWorldNormal.x);
    float u = dot(vWorldPos.xz, axis);
    vec2 px = floor(vec2(u, vWorldPos.y) * 16.0);
    float below = max(0.0, vTop - (px.y + 0.5) / 16.0);
    float band = 1.6 + clamp(below / 0.3, 0.0, 1.0) * 1.9 + (lmNoise(vec2(px.x * 0.22, px.y * 0.3 + t * 0.4)) - 0.5) * 0.5;
    float q = clamp(floor(band + (lmBayer4(px) - 0.5) * 0.5), 1.0, 3.0);
    vec3 albedo = q < 1.5 ? uC1 : q < 2.5 ? uC2 : uC3;
    float wob = lmNoise(vec2(px.x * 0.35 + t * 0.6, 3.0));
    float rim = step(below, 1.1 / 16.0 + wob * 0.06);
    albedo = mix(albedo, uC1, 0.4 * step(0.78, lmNoise(vec2(px.x * 0.16 - t * 0.25, 1.3))) * (1.0 - rim));
    albedo = mix(albedo, uCrest, rim);
    vec3 irrSide = lmNeutral(lmIrradiance(normalize(vWorldNormal + vec3(0.0, 0.6, 0.0)), vWorldPos, shadow), uNeutral * (1.0 - night)) * uBrightness;
    col = albedo * mix(irrSide, irrUp, rim);
    col = mix(col, sky, 0.04);
    alpha = mix(0.95, 1.0, rim);
  } else {
    // --- surface ---
    vec2 px = floor(vWorldPos.xz * 16.0);
    vec2 pc = (px + 0.5) / 16.0;
    vec4 sh = texture2D(uShore, (pc - uShoreRect.xy) * uShoreRect.zw);
    float dist = sh.r * uMaxDist;
    float depth = min(sh.g * uMaxDepth, dist * 1.3 + 0.03);
    vec2 flow = (sh.ba * 2.0 - 1.0) * uMaxFlow;

    // depth bands: shallow teal rim → deep blue, with large slowly drifting darker patches;
    // ordered dithering only near band edges
    float dN = clamp(depth / uDeepAt, 0.0, 1.0);
    float patchN = lmNoise(pc * 0.42 + vec2(t * 0.03, -t * 0.021)) * 0.75 + lmNoise(pc * 1.3 - t * 0.05) * 0.25;
    float band = dN * 2.3 + smoothstep(0.5, 0.6, patchN) * 0.95 * dN;
    float q = clamp(floor(band + (lmBayer4(px) - 0.5) * 0.5), 0.0, 3.0);
    vec3 albedo = q < 0.5 ? uC0 : q < 1.5 ? uC1 : q < 2.5 ? uC2 : uC3;

    // pixel ripple dashes drifting with the flow
    float rp = lmFlowRipple(pc, flow, t);
    float hi = step(0.69, rp);
    float hi2 = step(0.8, rp);
    float lo = 1.0 - step(0.2, rp);
    albedo = mix(albedo, uC0, hi * (1.0 - hi2) * 0.7);
    albedo = mix(albedo, uCrest, hi2);
    albedo *= 1.0 - lo * 0.18;
    col = albedo * irrUp;

    // sky reflection (fresnel-ish, a touch stronger on crests). Stylised: weaker where the sun
    // is shadowed, so shaded water keeps its deep body colour instead of turning into a flat
    // lavender/grey veil of the (unlit, bright) horizon colour at golden hour / dusk.
    float fres = uReflect * (0.35 + 1.2 * pow(1.0 - clamp(V.y, 0.0, 1.0), 3.0)) * mix(0.4, 1.0, shadow);
    col = mix(col, sky, clamp(fres + hi * 0.06 * mix(0.4, 1.0, shadow), 0.0, 0.6));

    // foam: broken contact rim + lines rolling toward the shore
    float fn = lmNoise(pc * 2.1 + vec2(t * 0.13, -t * 0.09));
    float contact = step(dist, (0.05 + 0.07 * fn) * uFoamAmount);
    float phase = dist * 2.3 + t * 0.3 + fn * 0.35;
    float lineMask = step(0.42, lmNoise(pc * 1.25 + vec2(-t * 0.05, t * 0.04) + 9.0));
    float lines = step(0.86, fract(phase)) * (1.0 - smoothstep(0.12, 0.75 * uFoamAmount, dist)) * lineMask;
    float foam = max(contact, lines * 0.85);
    col = mix(col, uFoam * irrUp, foam);

    // sun / moon glints: 4-point pixel stars in 4x4 px cells, HDR so they bloom
    vec3 L = normalize(uSunDirection);
    vec3 N = normalize(vec3((rp - 0.5) * 0.35, 1.0, (fn - 0.5) * 0.35));
    float spec = pow(max(dot(reflect(-L, N), V), 0.0), 10.0);
    vec2 cell = floor(px / 4.0);
    float ch = lmHash(cell * 1.37 + 3.1);
    float tt = t * (1.8 + ch * 1.6) + ch * 11.0;
    float slot = mod(floor(tt), 4096.0); // wrapped: hash inputs stay small after hours of uptime
    float life = fract(tt);
    float hs = lmHash(cell + slot * vec2(7.13, 3.71));
    vec2 gpos = 1.0 + floor(vec2(lmHash(cell + slot + 0.5), lmHash(cell - slot + 1.7)) * 2.0);
    vec2 lp = abs(px - cell * 4.0 - gpos);
    float manh = lp.x + lp.y;
    float centre = step(manh, 0.5);
    float arms = step(manh, 1.5) * (1.0 - centre) * step(0.28, life) * step(life, 0.72);
    float density = (0.045 + 0.35 * spec) * uGlint * (0.3 + 0.7 * hi);
    float glint = step(1.0 - density, hs) * (centre + arms * 0.5) * (1.0 - foam) * shadow * step(0.02, L.y);
    vec3 gcol = uSunColor * 3.0 * mix(1.0, 1.7, night) + mix(vec3(0.25, 0.22, 0.15), vec3(0.04, 0.07, 0.16), night);
    col += glint * gcol;

    alpha = mix(uShallowOpacity, uOpacity, smoothstep(0.02, 0.35, depth));
    alpha = max(alpha, max(foam, min(1.0, glint)));
  }

  col = lmSaturate(col, mix(uSaturation, 1.0, night));
  gl_FragColor = vec4(col, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}
`,pd=class{constructor(e,t={}){let{level:n,flow:r=[0,.3],resolution:a=8,opacity:o=.9,shallowOpacity:s=.58,glint:c=1,foam:u=1,maxDistance:d=2,maxDepth:f=1.5,brightness:p=1.15,deepAt:m=.34,reflect:h=.1,saturation:g=1.12,neutral:_=.35,deferShore:v=!1}=t;this.tileMap=e,this.level=n??e.waterLevel,this._levelOverride=n,this.flow=new q(r[0]??0,r[1]??0),this.resolution=Math.max(2,a|0),this.maxDistance=d,this.maxDepth=f;let y=e.width,b=e.depth;this._surf=new Float32Array(y*b).fill(NaN),this._flow=new Float32Array(y*b*2),this._bed=new Float64Array(y*b),this.tiles=[],this._readTiles();let x=this.maxFlow;this.uniforms=Be.merge([Y.lights,Y.fog,{uShore:{value:null},uShoreRect:{value:new l(0,0,1/Math.max(1,y),1/Math.max(1,b))},uMaxDist:{value:d},uMaxDepth:{value:f},uMaxFlow:{value:x},uC0:{value:ld[4].clone()},uC1:{value:ld[3].clone()},uC2:{value:ld[2].clone()},uC3:{value:ld[1].clone()},uCrest:{value:ld[5].clone()},uFoam:{value:ld[6].clone().multiplyScalar(1.05)},uOpacity:{value:o},uShallowOpacity:{value:s},uGlint:{value:c},uFoamAmount:{value:u},uBrightness:{value:p},uDeepAt:{value:m},uReflect:{value:h},uSaturation:{value:g},uNeutral:{value:_}}]),this.uniforms.uTime=X.uTime,this.uniforms.uNight=X.uNight,this.uniforms.uSunDirection=X.uSunDirection,this.uniforms.uSunColor=X.uSunColor,this.uniforms.uFogColor=X.uFogColor,this.material=new tt({name:`Lumina:Water`,uniforms:this.uniforms,vertexShader:dd,fragmentShader:fd,fog:!0,lights:!0,transparent:!0,depthWrite:!0}),this.geometry=this._buildGeometry(),this.object=new R(this.geometry,this.material),this.object.name=`Water`,this.object.renderOrder=i.WATER,this.object.receiveShadow=!0,this.object.castShadow=!1,this.object.matrixAutoUpdate=!1,this.object.visible=this.tiles.length>0,this.shoreTexture=null,this._colliderCount=e.colliders.length,this._colliderSig=``,v||this.refresh()}_readTiles(){let e=this.tileMap,t=e.width,n=this._levelOverride;this._surf.fill(NaN),this._flow.fill(0),this._bed.fill(0),this.tiles=[],e.forEachTile((e,r,i)=>{if(!i.water)return;let a=r*t+e;this._surf[a]=n!=null&&i.waterSource===`global`?n:i.waterSurface,this._bed[a]=i.h;let o=i.type.flow,s=this.flow.x,c=this.flow.y;Array.isArray(o)?(s=o[0]??0,c=o[1]??0):typeof o==`number`&&(s*=o,c*=o),this._flow[a*2]=s,this._flow[a*2+1]=c,this.tiles.push(i)});let r=.05;for(let e=0;e<this._flow.length;e++)r=Math.max(r,Math.abs(this._flow[e]));this.maxFlow=r}refresh(){let e=this._buildShoreTexture();this.shoreTexture?.dispose(),this.shoreTexture=e,this.uniforms.uShore.value=e,this._colliderCount=this.tileMap.colliders.length,this._colliderSig=this._waterColliderSignature()}refreshAsync(){if(typeof Worker!=`function`)return this.refresh(),Promise.resolve();let e=this.tileMap,t=this.resolution,n=Math.max(1,e.width*t),r=Math.max(1,e.depth*t),i=this.shoreInput(!0),a=e.colliders.length,o=this._waterColliderSignature();return new Promise(s=>{let c,l=()=>{c?.terminate(),this.refresh(),s()};try{c=new Worker(new URL(new URL(`shoreWorker-CWjE-yRZ.js`,import.meta.url).href,``+import.meta.url),{type:`module`})}catch{l();return}c.onmessage=i=>{let{out:u,error:d}=i.data??{};if(d||!u||u.length!==n*r*4||n!==e.width*t||r!==e.depth*t){l();return}c.terminate(),this._shoreData=u;let f=new We(u,n,r,U,Re);this._setupShoreTexture(f),this.shoreTexture?.dispose(),this.shoreTexture=f,this.uniforms.uShore.value=f,this._colliderCount=a,this._colliderSig=o,s()},c.onerror=e=>{e.preventDefault?.(),l()},c.postMessage({id:1,input:i,a0:0,b0:0,W:n,H:r})})}get shoreReach(){return Math.ceil(this.maxDistance)+1}updateTiles(){let e=this.tileMap;if(this._surf.length!==e.width*e.depth)throw Error(`Water.updateTiles: the TileMap size changed`);let t=this.maxFlow;this._readTiles(),this.uniforms.uMaxFlow.value=this.maxFlow;let n=this._buildGeometry(),r=this.geometry;return this.geometry=n,this.object.geometry=n,r.dispose(),this.object.visible=this.tiles.length>0,{flowChanged:t!==this.maxFlow,hasWater:this.tiles.length>0}}rebakeShore(e,{expand:t=!0}={}){if(!this._shoreData||!this.shoreTexture){this.refresh();return}this._updateShoreWindow(e,t),this._colliderCount=this.tileMap.colliders.length,this._colliderSig=this._waterColliderSignature()}rebuild(e=null){let{flowChanged:t,hasWater:n}=this.updateTiles();return!e||t||!this.shoreTexture||!this._shoreData?this.refresh():this.rebakeShore(e),n}_updateShoreWindow(e,t=!0){let n=this.shoreJob(e,{expand:t});n&&this.applyShore(n,od(this.shoreInput(),n.a0,n.b0,n.W,n.H))}shoreInput(e=!1){let t=this.tileMap,n=t=>e?t.slice():t,r=t.colliders.filter(e=>!e.dynamic);return{width:t.width,depth:t.depth,R:this.resolution,surf:n(this._surf),flow:n(this._flow),bed:n(this._bed),colliders:e?r.map(e=>({...e})):r,maxDistance:this.maxDistance,maxDepth:this.maxDepth,maxFlow:this.maxFlow}}shoreJob(e,{expand:t=!0}={}){let n=this.tileMap,r=this.resolution,i=n.width*r,a=n.depth*r,o=this.shoreReach,s=t?o:0,c=e=>Math.max(0,Math.min(i,e)),l=e=>Math.max(0,Math.min(a,e)),u=c((Math.floor(e.minI)-s)*r),d=c((Math.floor(e.maxI)+1+s)*r),f=l((Math.floor(e.minJ)-s)*r),p=l((Math.floor(e.maxJ)+1+s)*r);if(d<=u||p<=f)return;let m=c(u-o*r),h=c(d+o*r),g=l(f-o*r),_=l(p+o*r);return{a0:m,b0:g,W:h-m,H:_-g,oa0:u,oa1:d,ob0:f,ob1:p,TW:i,TH:a}}applyShore(e,t){let n=this._shoreData;if(!n||!this.shoreTexture||e.TW!==this.tileMap.width*this.resolution||n.length!==e.TW*e.TH*4)return!1;for(let r=e.ob0;r<e.ob1;r++){let i=((r-e.b0)*e.W+(e.oa0-e.a0))*4;n.set(t.subarray(i,i+(e.oa1-e.oa0)*4),(r*e.TW+e.oa0)*4)}return this.shoreTexture.needsUpdate=!0,this._colliderCount=this.tileMap.colliders.length,this._colliderSig=this._waterColliderSignature(),!0}update(e){this.tileMap.colliders.length!==this._colliderCount&&(this._colliderCount=this.tileMap.colliders.length,this._waterColliderSignature()!==this._colliderSig&&this.refresh())}_waterColliderSignature(){if(!this.tiles.length)return``;let e=[];for(let t of this.tileMap.colliders){if(t.dynamic)continue;let n=t.type===`circle`,r=n?t.x-t.r:t.minX,i=n?t.x+t.r:t.maxX,a=n?t.z-t.r:t.minZ,o=n?t.z+t.r:t.maxZ;if(!(i>r&&o>a))continue;let s=!1,c=Math.min(this.tileMap.width-1,Math.floor(i)),l=Math.min(this.tileMap.depth-1,Math.floor(o));for(let e=Math.max(0,Math.floor(a));e<=l&&!s;e++)for(let t=Math.max(0,Math.floor(r));t<=c&&!s;t++)s=this._surfAt(t,e)===this._surfAt(t,e);s&&e.push(`${Math.round(r*64)},${Math.round(i*64)},${Math.round(a*64)},${Math.round(o*64)},${t.type}`)}return e.join(`;`)}_surfAt(e,t){let n=this.tileMap;return e<0||t<0||e>=n.width||t>=n.depth?NaN:this._surf[t*n.width+e]}_buildGeometry(){let e=this.tileMap,t=[],n=[],r=[],i=[],a=0,o=(e,o,s,c,l)=>{for(let i=0;i<4;i++)t.push(e[i*3],e[i*3+1],e[i*3+2]),n.push(o,s,c),r.push(l);i.push(a,a+1,a+2,a,a+2,a+3),a+=4},s=[{dx:0,dz:-1,nx:0,nz:-1},{dx:1,dz:0,nx:1,nz:0},{dx:0,dz:1,nx:0,nz:1},{dx:-1,dz:0,nx:-1,nz:0}];for(let t of this.tiles){let{i:n,j:r}=t,i=this._surfAt(n,r);o([n,i,r,n,i,r+1,n+1,i,r+1,n+1,i,r],0,1,0,i);for(let a of s){let s=e.tileAt(n+a.dx,r+a.dz),c;if(!s)c=t.h;else if(s.water){let e=this._surfAt(n+a.dx,r+a.dz);if(!(e<i-.01))continue;c=Math.max(e,t.h)}else{if(s.h>=i-.01)continue;c=Math.max(s.h,t.h)}if(i-c<.01)continue;let l=a.nz,u=-a.nx,d=n+.5+a.nx*.5,f=r+.5+a.nz*.5,p=d-l*.5,m=f-u*.5,h=d+l*.5,g=f+u*.5;o([p,c,m,h,c,g,h,i,g,p,i,m],a.nx,0,a.nz,i)}}let c=new T;return c.setAttribute(`position`,new Ze(t,3)),c.setAttribute(`normal`,new Ze(n,3)),c.setAttribute(`aTop`,new Ze(r,1)),c.setIndex(a>65535?new Xe(i,1):new rt(i,1)),c.computeBoundingBox(),c.computeBoundingSphere(),c}_buildShoreTexture(){let e=this.tileMap,t=this.resolution,n=Math.max(1,e.width*t),r=Math.max(1,e.depth*t),i=this._bakeShore(0,0,n,r);this._shoreData=i;let a=new We(i,n,r,U,Re);return this._setupShoreTexture(a)}_setupShoreTexture(e){return e.name=`Lumina:WaterShore`,e.magFilter=F,e.minFilter=F,e.wrapS=e.wrapT=ye,e.colorSpace=``,e.generateMipmaps=!1,e.needsUpdate=!0,e}_bakeShore(e,t,n,r){return od(this.shoreInput(),e,t,n,r)}dispose(){this.geometry.dispose(),this.material.dispose(),this.shoreTexture?.dispose(),this.shoreTexture=null,this.object.removeFromParent()}},md=`
varying vec2 vUv;
varying vec3 vWorldPos;
varying vec3 vWorldNormal;
#include <common>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
  vUv = uv;
  #include <beginnormal_vertex>
  #include <defaultnormal_vertex>
  #include <begin_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <worldpos_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>
  vWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
  vWorldNormal = normalize(mat3(modelMatrix) * objectNormal);
}
`,hd=`
uniform float uTime;
uniform float uNight;
uniform vec3 uSunColor;
uniform vec3 uFogColor;
uniform float uWidth;
uniform float uLength;
uniform float uLipLength;
uniform float uSeed;
uniform vec3 uC0;
uniform vec3 uC1;
uniform vec3 uC2;
uniform vec3 uC3;
uniform vec3 uFoam;
varying vec2 vUv;
varying vec3 vWorldPos;
varying vec3 vWorldNormal;
${ud}
void main() {
  #include <logdepthbuf_fragment>
  float t = uTime;
  float colX = floor(vUv.x * uWidth * 16.0);
  float nCols = floor(uWidth * 16.0 + 0.5);
  float py = floor(vUv.y * 16.0);            // pixel row along the sheet (arc length)
  float fall = max(0.0, vUv.y - uLipLength);  // distance fallen past the lip
  float h1 = lmHash(vec2(colX, uSeed));
  float h2 = lmHash(vec2(floor(colX / 3.0), uSeed + 5.0));
  // water accelerates: streaks scroll faster further down
  float speed = (2.2 + h1 * 1.4) * (0.5 + 0.5 * clamp(fall / 1.0, 0.0, 1.0));
  float s1 = fract(py / 16.0 * (0.55 + 0.35 * h2) - t * speed * 0.5 + h1 * 7.0);
  float s2 = fract(py / 16.0 * 0.3 - t * speed * 0.33 + h2 * 3.0);
  vec3 albedo = mix(uC1, uC0, 0.2 + 0.6 * h2);
  albedo = mix(albedo, uC2, step(0.7, s2) * 0.85);
  albedo = mix(albedo, uC3, step(s1, 0.16));
  albedo = mix(albedo, uFoam, step(0.91, s1));
  // foam where the water bends over the lip and churning at the bottom
  // discrete animation slots are wrapped so hash inputs stay precise after hours of uptime
  float lipFoam = 1.0 - step(0.1 + 0.16 * lmHash(vec2(colX, mod(floor(t * 6.0), 4096.0))), abs(vUv.y - uLipLength));
  float bn = lmNoise(vec2(colX * 0.45, py * 0.4 - t * 5.0));
  float botFoam = step(uLength - vUv.y, 0.2 + 0.42 * bn);
  float foam = max(lipFoam * 0.85, botFoam);
  albedo = mix(albedo, uFoam, foam);
  // lighting (the normal leans up: falling water scatters sky light)
  float shadow = getShadowMask();
  vec3 nW = normalize((gl_FrontFacing ? vWorldNormal : -vWorldNormal) + vec3(0.0, 1.1, 0.0));
  float nightF = clamp(uNight, 0.0, 1.0);
  vec3 col = albedo * lmNeutral(lmIrradiance(nW, vWorldPos, shadow), 0.5 * (1.0 - nightF)) * 1.12;
  col = lmSaturate(mix(col, uFogColor, 0.06), mix(1.12, 1.0, nightF));
  // sparkling droplets (HDR, bloom) in the white water
  float sp = step(0.988, lmHash(vec2(colX, py) + mod(floor(t * 9.0), 4096.0) * vec2(3.1, 7.7)));
  col += sp * (uSunColor * 2.2 + vec3(0.1)) * shadow * (1.0 - 0.8 * clamp(uNight, 0.0, 1.0)) * step(0.5, foam + step(0.9, s1));
  // ragged, splashing side edges and a soft entry from the river surface
  float edgePx = min(colX, nCols - 1.0 - colX);
  float jag = lmHash(vec2(py + mod(floor(t * 10.0), 4096.0) * 3.0, colX + uSeed));
  if (edgePx < 1.0 && jag < 0.55) discard;
  if (edgePx < 2.0 && jag < 0.18) discard;
  float entry = smoothstep(0.0, 0.18, vUv.y);
  if (entry < lmBayer4(vec2(colX, py)) * 0.999) discard;
  gl_FragColor = vec4(col, mix(0.9, 1.0, foam));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}
`,gd=`
uniform float uTime;
uniform float uNight;
uniform vec3 uFogColor;
uniform vec3 uFoam;
uniform vec3 uC0;
uniform vec2 uSize;
uniform float uSeed;
varying vec2 vUv;
varying vec3 vWorldPos;
varying vec3 vWorldNormal;
${ud}
void main() {
  #include <logdepthbuf_fragment>
  float t = uTime;
  vec2 px = floor(vUv * uSize * 16.0);
  vec2 pc = (px + 0.5) / 16.0;
  // distance from the impact line (v = 0 edge, centred across u)
  float across = abs(pc.x - uSize.x * 0.5) / (uSize.x * 0.5);
  float d = pc.y + max(0.0, across - 0.55) * 1.4;
  float churn = lmNoise(pc * 3.2 + vec2(t * 0.7, -t * 2.1) + uSeed);
  float bub = lmNoise(pc * 6.5 - vec2(0.0, t * 1.4) + uSeed * 2.0);
  float ring = step(0.8, fract(d * 2.2 - t * 0.9 + churn * 0.4)) * step(0.45, bub);
  float core = step(d, 0.36 + churn * 0.45);
  float speck = step(0.8, bub) * step(d, 0.95);
  float foam = max(core, max(ring * step(d, 1.05), speck * 0.8));
  foam *= step(across, 1.0 - churn * 0.12);
  if (foam < 0.5) discard;
  vec3 albedo = mix(uC0, uFoam, 0.72 + 0.28 * step(0.6, churn));
  float shadow = getShadowMask();
  float nightF = clamp(uNight, 0.0, 1.0);
  vec3 col = albedo * lmNeutral(lmIrradiance(vec3(0.0, 1.0, 0.0), vWorldPos, shadow), 0.45 * (1.0 - nightF)) * 1.1;
  col = mix(col, uFogColor, 0.05);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}
`,_d=0,vd=Object.freeze({N:Object.freeze([0,-1]),S:Object.freeze([0,1]),E:Object.freeze([1,0]),W:Object.freeze([-1,0])});function yd(e){return le(vd,e)??vd.S}function bd({x:e,z:t,width:n=2,top:r,bottom:a,facing:o=`S`,seed:s,pool:c=!0,lip:l=.3}={}){let u=yd(o),d=u[0],f=u[1],p=f,m=-d,h=Math.max(.05,r-a),g=s??A(Math.round(e*16),Math.round(t*16),77)*1e3+ ++_d,v=[];v.push([-l,r+.012]),v.push([-l*.35,r+.012]),v.push([0,r+.004]);for(let e=1;e<=14;e++){let t=e/14,n=h*t*t;v.push([.04+.26*Math.sqrt(n)+.05*t,r-n])}let y=[0];for(let e=1;e<v.length;e++)y.push(y[e-1]+Math.hypot(v[e][0]-v[e-1][0],v[e][1]-v[e-1][1]));let b=y[y.length-1],x=y[2],S=Math.max(2,Math.ceil(n*4)),C=[],w=[],E=[];for(let r=0;r<=S;r++){let i=r/S,a=(i-.5)*n;for(let n=0;n<v.length;n++){let[r,o]=v[n];C.push(e+p*a+d*r,o,t+m*a+f*r),w.push(i,y[n])}}let D=v.length;for(let e=0;e<S;e++)for(let t=0;t<D-1;t++){let n=e*D+t,r=(e+1)*D+t;E.push(n,n+1,r+1,n,r+1,r)}let O=new T;O.setAttribute(`position`,new Ze(C,3)),O.setAttribute(`uv`,new Ze(w,2)),O.setIndex(E),O.computeVertexNormals(),O.computeBoundingSphere();let k=e=>{let t=Be.merge([Y.lights,Y.fog,e]);return t.uTime=X.uTime,t.uNight=X.uNight,t.uSunColor=X.uSunColor,t.uFogColor=X.uFogColor,t},ee=new tt({name:`Lumina:Waterfall`,uniforms:k({uWidth:{value:n},uLength:{value:b},uLipLength:{value:x},uSeed:{value:g%97},uC0:{value:ld[4].clone()},uC1:{value:ld[3].clone()},uC2:{value:ld[2].clone()},uC3:{value:ld[5].clone()},uFoam:{value:ld[6].clone().multiplyScalar(1.08)}}),vertexShader:md,fragmentShader:hd,fog:!0,lights:!0,transparent:!0,depthWrite:!0,side:2}),j=new R(O,ee);j.name=`WaterfallSheet`,j.renderOrder=i.WATER+1,j.receiveShadow=!0;let M=new Tt;M.name=`Waterfall`,M.add(j);let N=null,P=null,F=null,I=v[v.length-1][0];if(c){let r=n+1.1,o=1.25;P=new mt(r,o),P.rotateX(-Math.PI/2);let s=new _().makeBasis(new L(p,0,m),new L(0,1,0),new L(-d,0,-f));P.applyMatrix4(s),P.translate(e+d*(I-.2+o/2),a+.012,t+f*(I-.2+o/2)),F=new tt({name:`Lumina:WaterfallPool`,uniforms:k({uFoam:{value:ld[6].clone().multiplyScalar(1.05)},uC0:{value:ld[5].clone()},uSize:{value:new q(r,o)},uSeed:{value:g%53}}),vertexShader:md,fragmentShader:gd,fog:!0,lights:!0,transparent:!1,depthWrite:!0,side:2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),N=new R(P,F),N.name=`WaterfallPool`,N.renderOrder=i.WATER+2,N.receiveShadow=!0,M.add(N)}let te=d!==0,ne=[{preset:`mist`,position:new L(e+d*(I+.3),a+.25,t+f*(I+.3)),spawnSize:te?[.4,.3,n]:[n,.3,.4],velocity:[d*.45,.35,f*.45],velocityVariance:te?[.35,.3,.45]:[.45,.3,.35],width:n}];return{object:M,sheet:j,pool:N,emitters:ne,update(e){},dispose(){O.dispose(),ee.dispose(),P?.dispose(),F?.dispose(),M.removeFromParent()}}}var xd={pz:{o:[-1,-1,1],s:[1,0,0],t:[0,1,0],n:[0,0,1],sd:0,td:1},nz:{o:[1,-1,-1],s:[-1,0,0],t:[0,1,0],n:[0,0,-1],sd:0,td:1},px:{o:[1,-1,1],s:[0,0,-1],t:[0,1,0],n:[1,0,0],sd:2,td:1},nx:{o:[-1,-1,-1],s:[0,0,1],t:[0,1,0],n:[-1,0,0],sd:2,td:1},py:{o:[-1,1,1],s:[1,0,0],t:[0,0,-1],n:[0,1,0],sd:0,td:2},ny:{o:[-1,-1,-1],s:[1,0,0],t:[0,0,1],n:[0,-1,0],sd:0,td:2}},Sd=[`pz`,`nz`,`px`,`nx`,`py`,`ny`],Cd=Object.freeze({vertexColors:!0}),wd=new L,Td=new L,Ed=new L,Dd=new L,Od=new L,kd=new De,Ad=new Ne,jd=new L,Md=new L,Nd=new _;function Pd(e=null,t=null,n=null,r=new _){return Md.set(e?e[0]:0,e?e[1]:0,e?e[2]:0),t==null?kd.identity():typeof t==`number`?kd.setFromEuler(Ad.set(0,t,0)):t.isQuaternion?kd.copy(t):kd.setFromEuler(Ad.set(t[0],t[1],t[2],t[3]||`XYZ`)),n==null?jd.set(1,1,1):typeof n==`number`?jd.set(n,n,n):jd.set(n[0],n[1],n[2]),r.compose(Md,kd,jd)}var Fd=class{constructor(e,{ao:t=null}={}){this.textures=e,this.parts=new Map,this.matrix=new _,this._stack=[],this.color=[1,1,1],this.sway=0,this.phase=0,this.ao=t,this.center=[0,0,0]}mat(e,t=null){return typeof e==`string`?this.textures.material(e,t?{vertexColors:!0,...t}:Cd):e}units(e){let t=e.userData.units;if(t)return t;let n=e.userData.texture;return n?this.textures.meta(n).units:[1,1]}push(e=null,t=null,n=null){return this._stack.push(this.matrix.clone()),this.matrix.multiply(Pd(e,t,n,Nd)),this}pushMatrix(e){return this._stack.push(this.matrix.clone()),this.matrix.multiply(e),this}pop(){return this.matrix.copy(this._stack.pop()),this}point(e,t,n){return new L(e,t,n).applyMatrix4(this.matrix)}tinted(e,t){let n=this.color;return this.color=e,t(),this.color=n,this}_part(e){let t=this.parts.get(e);return t||(t={material:e,pos:[],nrm:[],uv:[],col:[],sway:[],phase:[],ctr:[],idx:[]},this.parts.set(e,t)),t}_local(e){return!e||!e.at&&e.rot==null&&e.scale==null?this.matrix:new _().multiplyMatrices(this.matrix,Pd(e.at,e.rot,e.scale))}_vert(e,t,n,r,i,a,o,s,c,l,u,d){wd.set(r,i,a).applyMatrix4(t),Td.set(o,s,c).applyMatrix3(n).normalize();let f=e.pos.length/3;e.pos.push(wd.x,wd.y,wd.z),e.nrm.push(Td.x,Td.y,Td.z),e.uv.push(l,u);let p=d||this.color,m=this.ao?this.ao(wd.x,wd.y,wd.z):1;e.col.push(p[0]*m,p[1]*m,p[2]*m);let h=typeof this.sway==`function`?this.sway(wd.x,wd.y,wd.z):this.sway;return e.sway.push(h),e.phase.push(this.phase),e.material.userData.billboard&&(Ed.fromArray(this.center).applyMatrix4(t),e.ctr.push(Ed.x,Ed.y,Ed.z)),f}_grid(e,t,n,r,i,a,o,s,c,l={}){let u=this._part(e),d=(e,t)=>{let n=[0];if(e)for(let r of e)r>1e-4&&r<t-1e-4&&n.push(r);return n.push(t),n.sort((e,t)=>e-t)},f=d(l.cutsS,o),p=d(l.cutsT,s),m=l.uv===`fit`,h=l.scale||this.units(e),g=l.off||[0,0],_=l.rep||[1,1],v=u.pos.length/3;for(let e=0;e<p.length;e++)for(let d=0;d<f.length;d++){let v=f[d],y=p[e],b=r[0]+i[0]*v+a[0]*y,x=r[1]+i[1]*v+a[1]*y,S=r[2]+i[2]*v+a[2]*y,C,w;m?(C=v/o*_[0]+g[0],w=y/s*_[1]+g[1]):l.rotUV?(C=(y+g[0])/h[0],w=(v+g[1])/h[1]):(C=(v+g[0])/h[0],w=(y+g[1])/h[1]),l.flipU&&(C=-C),this._vert(u,t,n,b,x,S,c[0],c[1],c[2],C,w,l.color)}let y=f.length;for(let e=0;e<p.length-1;e++)for(let t=0;t<y-1;t++){let n=v+e*y+t;u.idx.push(n,n+1,n+y+1,n,n+y+1,n+y)}}box(e,t,n={}){let r=this._local(n),i=new z().getNormalMatrix(r),a=[t[0]/2,t[1]/2,t[2]/2];for(let o of Sd){let s=n.faces?n.faces[o]:void 0;if(s===!1)continue;s===void 0||s===!0?s={}:(typeof s==`string`||s.isMaterial)&&(s={mat:s});let c={uv:n.uv,off:n.off,rep:n.rep,rotUV:n.rotUV,color:n.color,scale:n.scale,...s},l=xd[o];c.cutsT===void 0&&l.td===1&&(c.cutsT=n.cutsT);let u=this.mat(c.mat||e),d=[l.o[0]*a[0],l.o[1]*a[1],l.o[2]*a[2]];this._grid(u,r,i,d,l.s,l.t,t[l.sd],t[l.td],l.n,c)}return this}poly(e,t,n){let r=this.mat(e),i=this._part(r),a=this._local(n),o=new z().getNormalMatrix(a),s=n.scale||this.units(r),c=n.origin||[0,0,0],l=n.off||[0,0],u=n.normal;u||=(Ed.fromArray(t[0]),Dd.fromArray(t[1]).sub(Ed),Od.fromArray(t[2]).sub(Ed),Dd.cross(Od).normalize(),[Dd.x,Dd.y,Dd.z]);let d=i.pos.length/3;for(let e of t){let t=e[0]-c[0],r=e[1]-c[1],d=e[2]-c[2],f=(t*n.uAxis[0]+r*n.uAxis[1]+d*n.uAxis[2]+l[0])/s[0],p=(t*n.vAxis[0]+r*n.vAxis[1]+d*n.vAxis[2]+l[1])/s[1];this._vert(i,a,o,e[0],e[1],e[2],u[0],u[1],u[2],f,p,n.color)}for(let e=1;e<t.length-1;e++)i.idx.push(d,d+e,d+e+1);return this}quad(e,t,n,r={}){let i=this.mat(e),a=this._part(i),o=this._local(r),s=new z().getNormalMatrix(o),c=null;r.normals||(Ed.fromArray(t[0]),Dd.fromArray(t[1]).sub(Ed),Od.fromArray(t[3]).sub(Ed),Dd.cross(Od).normalize(),c=[Dd.x,Dd.y,Dd.z]);let l=a.pos.length/3;for(let e=0;e<4;e++){let i=r.normals?r.normals[e]:c,l=r.colors?r.colors[e]:r.color;this._vert(a,o,s,t[e][0],t[e][1],t[e][2],i[0],i[1],i[2],n[e][0],n[e][1],l)}return a.idx.push(l,l+1,l+2,l,l+2,l+3),this}tri(e,t,n,r,i,a,o,s={}){let c=this.mat(e),l=this._part(c),u=this._local(s),d=new z().getNormalMatrix(u),f=s.normal;f||=(Ed.fromArray(t),Dd.fromArray(n).sub(Ed),Od.fromArray(r).sub(Ed),Dd.cross(Od).normalize(),[Dd.x,Dd.y,Dd.z]);let p=l.pos.length/3;return this._vert(l,u,d,t[0],t[1],t[2],f[0],f[1],f[2],i[0],i[1],s.color),this._vert(l,u,d,n[0],n[1],n[2],f[0],f[1],f[2],a[0],a[1],s.color),this._vert(l,u,d,r[0],r[1],r[2],f[0],f[1],f[2],o[0],o[1],s.color),l.idx.push(p,p+1,p+2),this}lathe(e,t,n={}){let r=this.mat(e),i=n.segments||8,a=this._local(n),o=new z().getNormalMatrix(a),s=this.units(r),c=0;for(let e of t)c=Math.max(c,e.r);let l=n.uRepeat??Math.max(1,Math.round(Math.PI*2*c/s[0])),u=n.vScale??s[1],d=n.phase||0,f=n.smooth!==!1,p=[];for(let e=0;e<t.length;e++){let r=t[e],a=[];for(let t=0;t<=i;t++){let o=t%i,s=d+o/i*Math.PI*2,c=r.r*(n.radiusFn?n.radiusFn(e,o,s):1),l=r.y+(n.yFn?n.yFn(e,o,s):0);a.push([(r.cx||0)+Math.cos(s)*c,l,(r.cz||0)-Math.sin(s)*c])}p.push(a)}let m=[0];for(let e=1;e<t.length;e++){let n=t[e-1],r=t[e];m.push(m[e-1]+Math.hypot(r.r-n.r,r.y-n.y,(r.cx||0)-(n.cx||0),(r.cz||0)-(n.cz||0)))}let h=n.vOff||0,g=this._part(r),_=n.normalUp||0;if(f){let e=g.pos.length/3;for(let e=0;e<t.length;e++){let r=t[Math.max(0,e-1)],s=t[Math.min(t.length-1,e+1)],c=s.r-r.r,f=s.y-r.y,v=Math.hypot(c,f)||1,y=f/v,b=-c/v+_,x=Math.hypot(y,b)||1;y/=x,b/=x;for(let t=0;t<=i;t++){let r=d+t%i/i*Math.PI*2,s=p[e][t],c=n.colorFn?n.colorFn(e,t%i):n.color;this._vert(g,a,o,s[0],s[1],s[2],Math.cos(r)*y,b,-Math.sin(r)*y,t/i*l,(m[e]+h)/u,c)}}let r=i+1;for(let n=0;n<t.length-1;n++)for(let t=0;t<i;t++){let i=e+n*r+t;g.idx.push(i,i+1,i+r+1,i,i+r+1,i+r)}}else for(let e=0;e<t.length-1;e++)for(let t=0;t<i;t++){let r=p[e][t],s=p[e][t+1],c=p[e+1][t+1],d=p[e+1][t],f=t/i*l,v=(t+1)/i*l,y=(m[e]+h)/u,b=(m[e+1]+h)/u;Ed.fromArray(r),Dd.fromArray(s).sub(Ed),Od.fromArray(d).sub(Ed),Od.lengthSq()<1e-10&&Od.fromArray(c).sub(Ed),Dd.cross(Od).normalize(),_&&(Dd.y+=_,Dd.normalize());let x=[Dd.x,Dd.y,Dd.z],S=n.colorFn?n.colorFn(e,t):n.color,C=g.pos.length/3;this._vert(g,a,o,r[0],r[1],r[2],x[0],x[1],x[2],f,y,S),this._vert(g,a,o,s[0],s[1],s[2],x[0],x[1],x[2],v,y,S),this._vert(g,a,o,c[0],c[1],c[2],x[0],x[1],x[2],v,b,S),this._vert(g,a,o,d[0],d[1],d[2],x[0],x[1],x[2],f,b,S),g.idx.push(C,C+1,C+2,C,C+2,C+3)}let v=(e,r,s)=>{let c=this.mat(s),l=this.units(c),u=this._part(c),d=t[e],f=d.y,m=u.pos.length/3,h=r?1:-1;this._vert(u,a,o,d.cx||0,f,d.cz||0,0,h,0,(d.cx||0)/l[0],-(d.cz||0)/l[1],n.color);for(let t=0;t<i;t++){let r=p[e][t];this._vert(u,a,o,r[0],r[1],r[2],0,h,0,r[0]/l[0],-r[2]/l[1],n.color)}for(let e=0;e<i;e++){let t=m+1+e,n=m+1+(e+1)%i;r?u.idx.push(m,t,n):u.idx.push(m,n,t)}};return n.capTop&&v(t.length-1,!0,n.capTop===!0?r:n.capTop),n.capBottom&&v(0,!1,n.capBottom===!0?r:n.capBottom),this}tube(e,t,n,r,i,a={}){let o=new L(n[0]-t[0],n[1]-t[1],n[2]-t[2]),s=o.length();o.normalize();let c=new De().setFromUnitVectors(new L(0,1,0),o);a.twist&&c.multiply(new De().setFromAxisAngle(new L(0,1,0),a.twist));let l=a.rings||2,u=[];for(let e=0;e<l;e++){let t=e/(l-1);u.push({y:t*s,r:r+(i-r)*t})}return this.pushMatrix(new _().compose(new L(t[0],t[1],t[2]),c,new L(1,1,1))),this.lathe(e,u,a),this.pop(),this}get vertexCount(){let e=0;for(let t of this.parts.values())e+=t.pos.length/3;return e}build(e=`prop`,{castShadow:t=!0,receiveShadow:n=!0}={}){let r=new Tt;r.name=e;let i=[],a=[];for(let o of this.parts.values()){if(!o.idx.length)continue;let s=new T;s.setAttribute(`position`,new Ze(o.pos,3)),s.setAttribute(`normal`,new Ze(o.nrm,3)),s.setAttribute(`uv`,new Ze(o.uv,2)),s.setAttribute(`color`,new Ze(o.col,3)),o.material.userData.wind&&(s.setAttribute(`aSway`,new Ze(o.sway,1)),s.setAttribute(`aPhase`,new Ze(o.phase,1))),o.material.userData.billboard&&s.setAttribute(`aCenter`,new Ze(o.ctr,3)),s.setIndex(o.idx),s.computeBoundingSphere(),s.computeBoundingBox();let c=(o.material.userData.billboard?1.5:0)+(o.material.userData.wind?.3:0);c&&(s.boundingSphere.radius+=c,s.boundingBox.expandByScalar(c));let l=new R(s,o.material);l.matrixAutoUpdate=!1;let u=o.material.userData;l.castShadow=u.castShadow??t,l.receiveShadow=u.receiveShadow??n,u.depthMaterial&&(l.customDepthMaterial=u.depthMaterial),l.name=`${e}:${u.texture||o.material.name||`mat`}`,r.add(l),i.push(l),a.push(s)}return this.parts.clear(),{group:r,meshes:i,geometries:a}}},Id=`
uniform float uTime;
uniform vec2 uWind;
uniform float uWindStrength;
uniform float uCameraYaw;
uniform vec3 uSunDirection;
attribute float aSway;
attribute float aPhase;
#ifdef FOLIAGE_BILLBOARD
attribute vec3 aCenter;
#endif
`,Ld=`
#include <begin_vertex>
{
  mat3 wM3 = mat3( modelMatrix );
  float wS2 = max( dot( wM3[ 0 ], wM3[ 0 ] ), 1e-6 );
#ifdef FOLIAGE_BILLBOARD
  {
    #ifdef FOLIAGE_SHADOW_PASS
      vec2 bbDir = normalize( uSunDirection.xz + vec2( 1e-4, 0.0 ) );
      float bbYaw = atan( bbDir.x, bbDir.y );
      float bbTilt = 0.15;
    #else
      float bbYaw = uCameraYaw;
      float bbTilt = 0.42;
    #endif
    vec3 bbOff = position - aCenter;
    vec3 bbToCam = vec3( sin( bbYaw ), 0.0, cos( bbYaw ) );
    vec3 bbRight = vec3( cos( bbYaw ), 0.0, - sin( bbYaw ) );
    vec3 bbUp = normalize( vec3( 0.0, 1.0, 0.0 ) - bbToCam * bbTilt );
    vec3 bbWorld = ( bbRight * bbOff.x + bbUp * bbOff.y + bbToCam * bbOff.z ) * sqrt( wS2 );
    transformed = aCenter + ( bbWorld * wM3 ) / wS2;
  }
#endif
  vec3 wOrigin = modelMatrix[ 3 ].xyz;
  float wLen = length( uWind );
  vec2 wDir = wLen > 1e-4 ? uWind / wLen : vec2( 1.0, 0.0 );
  float wPh = aPhase + wOrigin.x * 0.23 + wOrigin.z * 0.17;
  float wT = uTime;
  // slow gusts travelling across the map + two-frequency sway + small per-leaf flutter
  float gust = 0.55 + 0.45 * sin( wT * 0.43 - dot( wOrigin.xz, wDir ) * 0.09 );
  float sway = sin( wT * 1.21 + wPh ) * 0.62 + sin( wT * 2.37 + wPh * 1.73 ) * 0.38;
  float amp = aSway * uWindStrength * ( 0.35 + 0.65 * min( wLen, 2.0 ) );
  vec3 wDisp = vec3( 0.0 );
  wDisp.xz = wDir * ( sway * 0.075 + gust * 0.06 ) * amp;
  float flutter = sin( wT * 4.3 + dot( position, vec3( 2.9, 2.1, 1.7 ) ) + wPh * 2.0 ) * 0.022 * amp;
  wDisp.xz += vec2( -wDir.y, wDir.x ) * flutter;
  wDisp.y = flutter * 0.7 - sway * sway * 0.012 * amp;
  // world → object (uniform scale): M^-1 d = (d * M3) / s^2
  transformed += ( wDisp * wM3 ) / wS2;
}
`,Rd=J.normal_fragment_begin.replace(`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;`,`float faceDirection = 1.0;`),zd=J.lights_lambert_pars_fragment.replace(`float dotNL = saturate( dot( geometryNormal, directLight.direction ) );`,`float dotNL = saturate( ( dot( geometryNormal, directLight.direction ) + FOLIAGE_WRAP ) / ( 1.0 + FOLIAGE_WRAP ) );`);function Bd(e,t){e.uniforms.uTime=X.uTime,e.uniforms.uWind=X.uWind,e.uniforms.uWindStrength=X.uWindStrength,e.uniforms.uCameraYaw=X.uCameraYaw,e.uniforms.uSunDirection=X.uSunDirection,e.vertexShader=e.vertexShader.replace(`#include <common>`,`${t}#include <common>\n${Id}`).replace(`#include <begin_vertex>`,Ld)}function Vd(e,{foliage:t=!1,wrap:n=.45,billboard:r=!1}={}){let i=r?`#define FOLIAGE_BILLBOARD
`:``;e.onBeforeCompile=e=>{Bd(e,i),t&&(e.fragmentShader=e.fragmentShader.replace(`#include <normal_fragment_begin>`,Rd).replace(`#include <lights_lambert_pars_fragment>`,`#define FOLIAGE_WRAP ${n.toFixed(3)}\n${zd}`))};let a=`lumina-wind-${t?`foliage-${n.toFixed(3)}`:`solid`}${r?`-bb`:``}`;return e.customProgramCacheKey=()=>a,e.userData.wind=!0,r&&(e.userData.billboard=!0),e.userData.depthMaterial=Hd({billboard:r}),e}function Hd({billboard:e=!1}={}){let t=new m,n=e?`#define FOLIAGE_BILLBOARD
#define FOLIAGE_SHADOW_PASS
`:``;return t.onBeforeCompile=e=>Bd(e,n),t.customProgramCacheKey=()=>`lumina-wind-depth${e?`-bb`:``}`,t}var Ud=[.55,.62,.75,.9,1,2.4];function Wd(){return V.fire.map((e,t)=>Ae(e).multiplyScalar(Ud[t]))}var Gd=`
uniform float uCameraYaw;
uniform float uLift;
varying vec2 vUv;
#include <common>
#include <fog_pars_vertex>
void main() {
  vUv = uv;
  vec3 wCenter = ( modelMatrix * vec4( 0.0, 0.0, 0.0, 1.0 ) ).xyz;
  float sx = length( modelMatrix[ 0 ].xyz );
  float sy = length( modelMatrix[ 1 ].xyz );
  vec3 right = vec3( cos( uCameraYaw ), 0.0, - sin( uCameraYaw ) );
  vec3 toCam = vec3( sin( uCameraYaw ), 0.0, cos( uCameraYaw ) );
  vec3 wPos = wCenter + right * position.x * sx + vec3( 0.0, 1.0, 0.0 ) * position.y * sy + toCam * uLift;
  vec4 mvPosition = viewMatrix * vec4( wPos, 1.0 );
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}
`,Kd=`
float fh21( vec2 p ) {
  p = fract( p * vec2( 123.34, 456.21 ) );
  p += dot( p, p + 45.32 );
  return fract( p.x * p.y );
}
float fnoise( vec2 p ) {
  vec2 i = floor( p );
  vec2 f = fract( p );
  f = f * f * ( 3.0 - 2.0 * f );
  return mix( mix( fh21( i ), fh21( i + vec2( 1.0, 0.0 ) ), f.x ),
              mix( fh21( i + vec2( 0.0, 1.0 ) ), fh21( i + vec2( 1.0, 1.0 ) ), f.x ), f.y );
}
`,qd=`
uniform float uTime;
uniform float uSeed;
uniform float uIntensity;
uniform float uSpeed;
uniform vec2 uPx;
uniform vec3 uFire[ 6 ];
varying vec2 vUv;
#include <common>
#include <fog_pars_fragment>
${Kd}
void main() {
  vec2 px = floor( vUv * uPx );
  vec2 uv = ( px + 0.5 ) / uPx;
  // stepped time → hand-animated feel (12 fps). Every noise input is kept small (time wrapped
  // every 50 s, seed folded to [0, 20)) — the fract()-hash loses float32 precision past ~10^3,
  // which would quantise the tongues after a long session or for large seeds.
  float sOff = fract( uSeed * 0.1731 ) * 20.0;
  float t = mod( floor( uTime * 12.0 * uSpeed ), 600.0 ) / 12.0 + sOff;
  float y = uv.y;
  float x = uv.x * 2.0 - 1.0;
  // tongues: horizontal displacement growing with height, scrolling upward
  float wob = fnoise( vec2( y * 3.2 - t * 2.3, t * 0.7 + sOff ) ) - 0.5;
  x += wob * 0.35 * y;
  // teardrop profile: broad rounded base, full belly, pointed tip
  float w = 0.98 * pow( max( 1.0 - y, 0.0 ), 0.42 ) * ( 0.9 + 0.1 * smoothstep( 0.0, 0.3, y ) );
  // rounded bottom (no flat rectangular cut at the base of the quad)
  float rb = 1.0 - clamp( y / 0.16, 0.0, 1.0 );
  w *= mix( 0.45, 1.0, sqrt( max( 1.0 - rb * rb, 0.0 ) ) );
  float heat = ( 1.0 - abs( x ) / max( w, 1e-3 ) ) * 1.3;
  // split the upper half into 2–3 licking lobes
  float lob = sin( x * 6.9 + t * 1.7 + sOff ) * 0.5 + 0.5;
  heat -= ( 1.0 - lob ) * 0.6 * smoothstep( 0.5, 1.0, y );
  // turbulence in pixel space (chunky), stronger toward the tip → broken tongues
  vec2 q = vec2( px.x * 0.42, px.y * 0.36 - t * 5.5 );
  float n = fnoise( q + sOff * 3.0 ) * 0.6 + fnoise( q * 2.1 + 3.7 ) * 0.4;
  heat += ( n - 0.5 ) * ( 0.3 + 0.5 * y );
  heat -= y * 0.15;
  if ( heat < 0.08 ) discard;
  // bands: small white-hot core low in the flame, yellow heart, orange body, red rim; the dark
  // red only on the lower rim so broken-off tongue pixels near the tip stay fiery orange-red
  vec3 col;
  if ( heat > 1.05 && y < 0.38 ) col = uFire[ 5 ];
  else if ( heat > 0.9 ) col = uFire[ 4 ];
  else if ( heat > 0.55 ) col = uFire[ 3 ];
  else if ( heat > 0.24 || y < 0.25 || y > 0.55 ) col = uFire[ 2 ];
  else col = uFire[ 1 ];
  gl_FragColor = vec4( col * uIntensity, 1.0 );
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}
`,Jd=`
uniform float uTime;
uniform float uSeed;
uniform float uIntensity;
uniform float uNight;
uniform float uDay;
uniform float uBaseV;
uniform vec3 uColor;
varying vec2 vUv;
#include <common>
#include <fog_pars_fragment>
${Kd}
void main() {
  float r = length( vUv - 0.5 ) * 2.0;
  float g = pow( max( 1.0 - r, 0.0 ), 1.7 );
  // fade out toward / below the flame base: the vertical card would otherwise cut a hard
  // horizontal edge where it intersects the ground (campfire) or a wall
  g *= smoothstep( uBaseV - 0.04, uBaseV + 0.2, vUv.y );
  float flick = 0.82 + 0.18 * fnoise( vec2( mod( uTime, 60.0 ) * 7.0, fract( uSeed * 0.1731 ) * 40.0 ) );
  float k = g * flick * uIntensity * mix( uDay, 1.0, uNight );
  if ( k < 0.002 ) discard;
  gl_FragColor = vec4( uColor * k, 1.0 );
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #ifdef USE_FOG
    // additive: fade the contribution out with fog instead of tinting toward the fog colour
    #ifdef FOG_EXP2
      float fogF = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
    #else
      float fogF = smoothstep( fogNear, fogFar, vFogDepth );
    #endif
    gl_FragColor.rgb *= 1.0 - fogF;
  #endif
}
`;function Yd({width:e,height:t,seed:n=0,intensity:r=1,speed:i=1}){let a=Be.merge([Y.fog,{uSeed:{value:n},uIntensity:{value:r},uSpeed:{value:i},uLift:{value:.02},uPx:{value:new q(Math.max(4,Math.round(e*16)),Math.max(4,Math.round(t*16)))},uFire:{value:Wd()}}]);return a.uTime=X.uTime,a.uCameraYaw=X.uCameraYaw,new tt({name:`lumina:flame`,uniforms:a,vertexShader:Gd,fragmentShader:qd,fog:!0,side:2})}function Xd({color:e=16747066,intensity:t=.6,seed:n=0,day:r=.25,baseV:i=-1}={}){let a=Be.merge([Y.fog,{uSeed:{value:n},uIntensity:{value:t},uDay:{value:r},uLift:{value:-.05},uBaseV:{value:i},uColor:{value:new B(e)}}]);return a.uTime=X.uTime,a.uCameraYaw=X.uCameraYaw,a.uNight=X.uNight,new tt({name:`lumina:glow`,uniforms:a,vertexShader:Gd,fragmentShader:Jd,fog:!0,transparent:!0,depthWrite:!1,blending:2,side:2})}function Zd({width:e=.5,height:t=.75,seed:n=0,intensity:r=1,speed:a=1,glow:o=!0,glowSize:s=2.6,glowIntensity:c=.55,glowColor:l=16747066}={}){let u=new Tt;u.name=`flame`;let d=new mt(e,t);d.translate(0,t/2,0);let f=Yd({width:e,height:t,seed:n,intensity:r,speed:a}),p=new R(d,f);p.name=`flame:body`,p.castShadow=!1,p.receiveShadow=!1,u.add(p);let m=[f],h=[d],g=null;if(o){let r=Math.max(e,t)*s,a=new mt(r,r);a.translate(0,t*.4,0);let o=Xd({color:l,intensity:c,seed:n,baseV:.5-t*.4/r});g=new R(a,o),g.name=`flame:glow`,g.renderOrder=i.PARTICLES+5,g.castShadow=!1,g.receiveShadow=!1,u.add(g),m.push(o),h.push(a)}return{object:u,flame:p,glow:g,materials:m,geometries:h}}var Qd=V.outline;function $d(e,t,{alpha:n=!1,normalStrength:r=2,wrap:i=!0}={}){let a=e.width,o=e.height,s=Qe(e.toCanvas(),{wrap:`repeat`,mipmaps:!0,anisotropy:4}),c=ze(a,o,(e,n)=>t[n*a+e],{strength:r,wrap:i});return{map:s,normal:Qe(c.toCanvas(),{wrap:`repeat`,mipmaps:!0,srgb:!1,anisotropy:4}),units:[a/16,o/16],alpha:n}}function ef(e){let t=new c(e),n=new W(16,32);n.wrap=!0;let r=new Float32Array(512).fill(.6),i=[`#9c9a9a`,`#c4c1bb`,`#dedad2`,`#eeebe3`,`#f8f6ef`];for(let t=0;t<32;t++)for(let a=0;a<16;a++){let o=A(a,t>>1,e)*.5+A(a>>1,t>>2,e+3)*.5,s=K(Math.floor(o*3.2+1),0,4);n.set(a,t,i[s]),r[t*16+a]=.55+o*.1}for(let e=0;e<16;e++){let e=t.int(0,31),i=t.int(0,15),a=t.int(2,6);for(let t=0;t<a;t++)n.set(i+t,e,t===0||t===a-1?`#56555f`:`#2b2a33`),n.set(i+t,e+1,`#fbfaf5`),r[(e%32+32)%32*16+(i+t)%16]=.3}for(let e=0;e<2;e++){let e=t.int(0,15),i=t.int(0,31);for(let[t,a]of[[0,0],[1,0],[-1,0],[0,1],[2,1],[-2,1],[1,1],[-1,1],[0,-1]])n.set(e+t,i+a,a===-1?`#3d3c47`:Qd),r[((i+a)%32+32)%32*16+((e+t)%16+16)%16]=.2}return $d(n,r,{normalStrength:2.2})}function tf(e){let t=new W(64,16,`#1d1311`),n=new Float32Array(1024).fill(.1);return[{ramp:[`#3a0c14`,`#7a1a22`,`#b8302e`,`#e0584a`,`#f7a37e`],r:2.2,step:4},{ramp:[`#4a1d0c`,`#9c4414`,`#dd7a1f`,`#f5a93a`,`#ffe08a`],r:2.2,step:4},{ramp:[`#0f261c`,`#1f4a2a`,`#3c7a36`,`#68a845`,`#a8d466`],r:3.1,step:6},{ramp:[`#170c24`,`#34194a`,`#5a2d78`,`#8a4aa8`,`#c08ad6`],r:1.3,step:3}].forEach((r,i)=>{let a=new c(e+i*97),o=i*16,s=[];for(let e=-1;e*r.step<16+r.step;e++)for(let t=-1;t*r.step<16+r.step;t++)s.push([t*r.step+(e&1?r.step/2:0)+a.range(-.7,.7)+1.5,e*r.step+a.range(-.7,.7)+1.5]);s.sort((e,t)=>e[1]-t[1]);for(let[c,l]of s){let s=r.r*a.range(.9,1.1);for(let a=Math.floor(l-s-1);a<=Math.ceil(l+s+1);a++)for(let u=Math.floor(c-s-1);u<=Math.ceil(c+s+1);u++){if(u<0||a<0||u>=16||a>=16)continue;let d=u+.5-c,f=a+.5-l,p=Math.hypot(d,f)/(s+.35);if(p>1)continue;let m=K(.62-d*.12-f*.16-p*.35+(i===2?(A(u,a,e)-.5)*.3:0),0,.999),h=r.ramp[Math.floor(m*r.ramp.length)];p>.84&&(h=r.ramp[0]),t.set(o+u,a,h),n[a*64+o+u]=.4+(1-p*p)*.6}let u=Math.round(c-s*.45-.5),d=Math.round(l-s*.45-.5);if(i!==2&&u>=0&&d>=0&&u<16&&d<16&&t.set(o+u,d,r.ramp[4]),i===0&&a.chance(.5)){let e=Math.round(c-.5),n=Math.round(l-s+.2);e>=0&&n>=0&&e<16&&n<16&&t.set(o+e,n,`#4a2a18`)}}}),$d(t,n,{normalStrength:2.5,wrap:!1})}function nf(e){let t=new c(e),n=new W(16,48),r=new Float32Array(768).fill(0),i=V.wood,a=[`#8f8170`,`#b8a88e`,`#d6c8aa`,`#ebe1c9`,`#f6efdd`];for(let t=0;t<39;t++)for(let i=1;i<15;i++){let o=Math.sin(i/14*Math.PI*2.2+.4)*.5+.5,s=A(i,t,e),c=K(Math.floor(1+o*2.2+s*.9-(t>34?.8:0)),0,4);n.set(i,t,a[c]),r[t*16+i]=.35+o*.15}let o=t.int(6,24),s=t.int(3,9);n.rect(s,o,3,3,`#c9a77a`),n.strokeRect(s,o,3,3,`#9a7a55`);let l=(e,t,i,a=.9)=>{n.set(e,t,i),e>=0&&t>=0&&e<16&&t<48&&(r[t*16+e]=a)};for(let e=0;e<48;e++)l(0,e,i[1]),l(15,e,i[2]),e>=39&&l(8,e,i[3]);for(let e=0;e<48;e+=5){for(let t=0;t<16;t++)l(t,e,t===0?i[1]:i[3],.85);for(let t=0;t<16;t++)e+1<48&&n.getAlpha(t,e+1)>0&&n.set(t,e+1,Et(n.get(t,e+1),-.25))}for(let e=0;e<16;e++)l(e,47,i[2]);return $d(n,r,{alpha:!0,normalStrength:2,wrap:!1})}function rf(e){let t=new c(e),n=new W(32,32),r=new Float32Array(1024).fill(0),i=V.leavesAutumn;for(let e=0;e<70;e++){let e=t.next()*Math.PI*2,a=Math.sqrt(t.next())*14,o=Math.round(16+Math.cos(e)*a),s=Math.round(16+Math.sin(e)*a*.9),c=i[t.int(1,4)],l=i[Math.min(5,t.int(3,5))];n.set(o,s,c),n.set(o+1,s,t.chance(.5)?c:l),t.chance(.6)&&n.set(o,s+1,Et(c,-.2)),t.chance(.3)&&n.set(o-1,s,l),r[K(s,0,31)*32+K(o,0,31)]=1}return $d(n,r,{alpha:!0,normalStrength:1,wrap:!1})}function af(e){let t=new W(16,16),n=new Float32Array(256),r=[`#141116`,`#221c20`,`#352c2c`,`#4a3f3b`,`#6b5f58`];for(let i=0;i<16;i++)for(let a=0;a<16;a++){let o=A(a,i,e)*.6+A(a>>1,i>>1,e+1)*.4;t.set(a,i,r[K(Math.floor(o*5),0,4)]),n[i*16+a]=o,A(a,i,e+9)>.93&&t.set(a,i,He(`#ff7a2a`,`#5a1208`,A(i,a,e)))}return $d(t,n,{normalStrength:1.5})}function of(e,t=!1){let n=new c(e),r=new W(32,32);r.wrap=!0;let i=new Float32Array(1024),a=[`#3d4053`,`#4f5468`,`#626a7c`,`#767e8d`,`#8e97a3`],o=[`#1c2f25`,`#2e4a31`,`#4b6b3a`,`#6f8d45`,`#93ad55`];for(let t=0;t<32;t++)for(let n=0;n<32;n++){let o=Ke(n/8,t/8,{octaves:3,seed:e,period:4}),s=(N(n,t)-.5)*.35,c=K((o-.5)*1.35+.55+s*.5,0,.999);r.set(n,t,a[Math.floor(c*a.length)]),i[t*32+n]=.45+o*.3}for(let e=0;e<3;e++){let e=n.int(0,31),t=n.int(0,31),a=n.int(4,8),o=n.chance(.5)?1:-1;for(let s=0;s<a;s++)r.set(e,t,`#2a2b3a`),r.set(e,t+1,`#9aa3ad`),i[(t%32+32)%32*32+(e%32+32)%32]=.15,e+=o,n.chance(.45)&&(t+=n.chance(.5)?1:-1),n.chance(.15)&&(o=-o)}for(let e=0;e<10;e++){let e=n.int(0,31),t=n.int(0,31);r.set(e,t,n.chance(.5)?`#a9a86a`:`#c8b77a`)}if(t){for(let t=0;t<32;t++)for(let n=0;n<32;n++){let a=Ke(n/8+11.3,t/8+7.1,{octaves:3,seed:e+5,period:4});if(a<.4)continue;let s=K((a-.4)*3.6+(N(n,t)-.5)*.4,0,.999);r.set(n,t,o[Math.min(4,1+Math.floor(s*4))]),i[t*32+n]=.7+s*.25}let t=r.clone();for(let e=0;e<32;e++)for(let n=0;n<32;n++){let i=t.get(n,e);i[1]>i[2]+8||t.get(n,e-1)[1]>t.get(n,e-1)[2]+8&&r.set(n,e,`#2e3b30`)}}return $d(r,i,{normalStrength:2.2})}var sf={birch:ef,produce:tf,sail:nf,leaf_litter:rf,ash:af,boulder:e=>of(e,!1),boulder_moss:e=>of(e,!0)},cf=class{constructor(e=42){this.seed=e>>>0,this._tex=new Map,this._mats=new Map}textures(e){let t=this._tex.get(e);return t||(t=sf[e](this.seed+(e===`boulder_moss`?`boulder`:e).length*7919),this._tex.set(e,t)),t}material(e,t={}){let n=`${e}|${JSON.stringify(t)}`,r=this._mats.get(n);if(r)return r;let i=this.textures(e);return r=new st({map:i.map,normalMap:i.normal,normalScale:new q(.6,.6),vertexColors:!0,...i.alpha?{alphaTest:.5,side:2}:{},...t}),r.name=`lumina:prop:${e}`,r.userData.units=i.units,r.userData.texture=null,i.alpha&&(r.userData.alpha=!0),this._mats.set(n,r),r}dispose(){for(let e of this._tex.values())e.map.dispose(),e.normal.dispose();for(let e of this._mats.values())e.dispose();this._tex.clear(),this._mats.clear()}};function lf(e){if(!e?.isMesh||!e.castShadow||e.isInstancedMesh||e.customDepthMaterial)return!1;let t=e.material;return!(!t||Array.isArray(t)||t.isShaderMaterial||t.alphaTest>0&&(t.map||t.alphaMap)||t.displacementMap&&t.displacementScale!==0||t.alphaToCoverage||t.clipShadows)}function uf(e,t){return e.frustumCulled=!0,e.intersectsFrustum=function(e){return df(t,e)&&e.intersectsObject(this)},e}function df(e,t){for(let n=0;n<e.length;n++)if(e[n].shadow?.getFrustum?.()===t)return!0;return!1}var ff=new ht;function pf(e,{lights:t,maxTriangles:n=64e3,maxExtent:r=48,name:i=`shadowCasters`}){let a=new Tt;a.name=i;let o=[],s=new Map,c=new Map;for(let t of e){let e=t.geometry;if(!e?.attributes?.position||!fu(e))continue;let n=t.side??0,r=`${n}|${+!!e.index}`,i=c.get(r);i||c.set(r,i=[]),e.boundingSphere||e.computeBoundingSphere(),ff.copy(e.boundingSphere),i.push({g:e,side:n,x:ff.center.x,z:ff.center.z,tris:fu(e)})}for(let e of c.values()){let c=du(e,{x:e=>e.x,z:e=>e.z,weight:e=>e.tris,maxWeight:n,maxExtent:r});for(let e of c){let n=lu(e.map(({g:e})=>{let t=new T;return t.setAttribute(`position`,e.getAttribute(`position`)),e.index&&t.setIndex(e.index),t}),!1);if(!n)continue;n.computeBoundingSphere();let r=e[0].side,c=s.get(r);c||(c=new me({side:r,colorWrite:!1,depthWrite:!1}),c.name=`${i}:proxy`,s.set(r,c));let l=new R(n,c);l.name=`${i}#${o.length}`,l.castShadow=!0,l.receiveShadow=!1,l.matrixAutoUpdate=!1,pu(l,{only:e=>df(t,e)}),a.add(l),o.push(l)}}return{object:a,meshes:o,dispose(){for(let e of o)e.geometry.dispose();for(let e of s.values())e.dispose();a.removeFromParent()}}}var $=`wood_planks_dark`;function mf(e,t){let n=e/2/t;return Math.abs(n-Math.round(n))<=Math.abs(n-.5-Math.round(n-.5))+1e-6?-e/2:-e/2+t/2}function hf(e,t,n,r={}){return{pz:{off:[mf(e,n),r.vOff||0],...r},nz:{off:[mf(e,n),r.vOff||0],...r},px:{off:[mf(t,n),r.vOff||0],...r},nx:{off:[mf(t,n),r.vOff||0],...r}}}function gf(e,t,n,r,i,{w:a=.24,h:o=.32,metal:s=`metal`}={}){e.box(t,[a,o,a],{at:[n,r,i],faces:{py:!1,ny:!1},uv:`fit`});let c=a/2+.012;for(let t of[-1,1])for(let a of[-1,1])e.box(s,[.045,o+.03,.045],{at:[n+t*c,r,i+a*c]});let l=a+.08;e.box(s,[l,.05,l],{at:[n,r-o/2-.02,i]}),e.box(s,[l*.55,.05,l*.55],{at:[n,r-o/2-.065,i]});let u=r+o/2,d=l/2+.02,f=u+.17,p=[n,f,i],m=[[n-d,u,i+d],[n+d,u,i+d],[n+d,u,i-d],[n-d,u,i-d]];for(let t=0;t<4;t++){let n=m[t],r=m[(t+1)%4];e.tri(s,n,r,p,[0,0],[.5,0],[.25,.3])}e.box(s,[l,.04,l],{at:[n,u+.01,i]}),e.box(s,[.06,.1,.06],{at:[n,f+.03,i]}),e.box(s,[.1,.03,.1],{at:[n,f+.09,i]})}function _f(e,t,n,r,i=1,a=.28,o=0){let s=t-i/2,c=t+i/2,l=7/16,u=`flowerbox`;e.quad(u,[[s,n,r],[c,n,r],[c,n+1,r],[s,n+1,r]],[[o,0],[o+i,0],[o+i,1],[o,1]]);let d=r-a;e.quad(u,[[c,n,d],[s,n,d],[s,n+1,d],[c,n+1,d]],[[o+.43,0],[o+.43+i,0],[o+.43+i,1],[o+.43,1]]);let f=r-a*.5;e.quad(u,[[s,n+l-.05,f],[c,n+l-.05,f],[c,n+1,f],[s,n+1,f]],[[o+.21,.3875],[o+.21+i,.3875],[o+.21+i,1],[o+.21,1]]),e.quad(u,[[c,n,r],[c,n,d],[c,n+l,d],[c,n+l,r]],[[0,0],[a,0],[a,l],[0,l]]),e.quad(u,[[s,n,d],[s,n,r],[s,n+l,r],[s,n+l,d]],[[0,0],[a,0],[a,l],[0,l]]),e.box($,[i-.02,.04,a-.02],{at:[t,n+l-.06,r-a/2],faces:{ny:!1},color:[.42,.34,.3]}),e.box($,[i,.03,a],{at:[t,n+.015,r-a/2],faces:{py:!1}})}var vf={front:{n:[0,1],yaw:0},back:{n:[0,-1],yaw:Math.PI},right:{n:[1,0],yaw:Math.PI/2},left:{n:[-1,0],yaw:-Math.PI/2}},yf={front:`right`,back:`left`,left:`front`,right:`back`},bf=[[.62,.78,1],[.7,.95,.65],[1,.72,.62],[1,1,1]];function xf(e,t,n,r,i={}){let a={width:4,depth:3,stories:1,roof:`roof_red`,wall:`timber_frame`,rotation:0,chimney:!0,door:`front`,...i},o=e.textures,s=e.rng(`house`,t,r,a.seed),c=!!a.gableFront,l=c?a.depth:a.width,u=c?a.width:a.depth,d=K(Math.round(a.stories),1,2),f=a.plinthHeight??.5,p=a.storyHeight??3,m=d>1?a.upperHeight??2:0,h=d>1?a.jetty??.25:0,g=a.wall,_=a.upperWall??g,v=a.plinth??`stone_brick`,y=f+p+m,b=l/2,S=u/2,C=S+h,w=(a.pitch??s.range(38,45))*ue,T=a.overhang??.35,E=C*Math.tan(w),D=a.roofThickness??.22,O=.1,k=e.builder((e,t)=>{let n=.62+.38*x(-.05,1.1,t);return t>f&&t<y+.01&&(n*=1-.2*x(y-.9,y,t)),n});c&&k.matrix.makeRotationY(-Math.PI/2);let A=e.windowMaterial(),ee=e.glassMaterial(),j=[],M=[],N=[{material:A,day:0,night:1.6}],P={},F=o.meta(v).units[0];k.box(v,[l+2*O,f,u+2*O],{at:[0,f/2,0],faces:{...hf(l+2*O,u+2*O,F),ny:!1},cutsT:[f*.5]});let I=o.meta(g).units[0];k.box(g,[l,p,u],{at:[0,f+p/2,0],faces:{...hf(l,u,I),py:!1,ny:!1},cutsT:[.5,p-.9]}),Sf(k,o,g,l,u,f,p,s,{top:d===1,bottom:!0});let te=f+p;if(d>1){let e=o.meta(_).units[0];k.box(_,[l,m,u+2*h],{at:[0,te+m/2,0],faces:{...hf(l,u+2*h,e),py:!1,ny:!1},cutsT:[m-.9]}),k.box($,[l+.14,.24,u+2*h+.14],{at:[0,te+.04,0]});let t=Math.max(2,Math.round(l/.55));for(let e=0;e<t;e++){let n=-b+.25+e*(l-.5)/(t-1);for(let e of[-1,1])k.box($,[.13,.13,h+.08],{at:[n,te-.13,e*(S+h/2)],faces:{nz:!(e>0),pz:!(e<0)}})}Sf(k,o,_,l,u+2*h,te+.16,m-.16,s,{top:!0,bottom:!1})}let ne=a.gable??(_===`brick`||_===`stone_brick`?`wood_planks`:_),re=d>1?te:f,ie=o.meta(ne).units,ae=ne===`wood_planks`||ne===`wood_planks_dark`,oe=mf(2*C,ie[0]);for(let e of[1,-1]){let t=e*b,n=e>0?[[t,y,C],[t,y,-C],[t,y+E+.02,0]]:[[t,y,-C],[t,y,C],[t,y+E+.02,0]],r=e>0?[0,0,-1]:[0,0,1];k.poly(ne,n,ae?{uAxis:[0,1,0],vAxis:r,origin:[t,re,e*C],off:[0,oe]}:{uAxis:r,vAxis:[0,1,0],origin:[t,re,e*C],off:[oe,0]}),k.box($,[.1,.16,2*C+.1],{at:[t+e*.05,y+.02,0]}),ae||k.box($,[.1,E*.8,.16],{at:[t+e*.04,y+E*.4,0],rotUV:!0})}let se=a.roof,ce=o.meta(se).units[0],L=Math.cos(w),R=Math.sin(w),de=Math.tan(w),fe=l+2*T,pe=(C+T)/L+D*de,z=((C+T)/L-D*de)/2,me=y+E;for(let e of[1,-1]){let t=[0,me-R*z+L*D/2,e*(L*z+R*D/2)];k.push(t,e>0?[w,0,0]:[w,Math.PI,0,`YXZ`]),k.box(se,[fe,D,pe],{faces:{py:{off:[mf(fe,ce),0]},ny:{mat:$,color:[.8,.78,.8]},pz:{mat:$},nz:!1,px:{mat:$},nx:{mat:$}}}),k.box($,[fe+.1,D+.16,.09],{at:[0,-.06,pe/2+.03],faces:{nz:!1}});for(let e of[-1,1])k.box($,[.09,D+.16,pe+.02],{at:[e*(fe/2+.035),-.06,.005],faces:{nz:!1}});k.pop()}let he=me+D/L;if(k.box(a.ridge??se,[fe+.14,.3,.3],{at:[0,he-.05,0],rot:[Math.PI/4,0,0],faces:{px:$,nx:$},color:[.82,.8,.82]}),a.chimney){let e=(a.chimneySide??(s.chance(.5)?1:-1))*Math.max(.2,b-.8),t=s.chance(.6)?-C*.42:C*.3,n=he+.75,r=y-.2,i=.74,c=o.meta(`chimney_stone`).units;k.box(`chimney_stone`,[i,n-r,i],{at:[e,(n+r)/2,t],faces:{...hf(i,i,c[0],{vOff:r-y}),ny:!1,py:!1}}),k.box(v,[.94,.16,.94],{at:[e,n+.08,t]}),k.box(`chimney_stone`,[.64,.12,.64],{at:[e,n+.2,t],faces:{py:!1}}),k.box(`chimney_stone`,[.48,.02,.48],{at:[e,n+.255,t],faces:{ny:!1},color:[.1,.08,.08]}),P.smoke=k.point(e,n+.45,t)}let ge=(e,t)=>{let n=vf[e],r=e===`front`||e===`back`,i=t?S+h:S;return{L:r?l:t?u+2*h:u,cx:n.n[0]*b,cz:n.n[1]*i,yaw:n.yaw,long:r}},_e=e=>k.push([e.cx,0,e.cz],e.yaw),ve=a.door===`none`||a.door===!1?null:a.door||`front`,ye=ve?c?le(yf,ve):ve:null,be=a.shutters??s.chance(.6),xe=bf[s.int(0,bf.length-1)],Se=a.flowerboxes??!0,Ce=0;for(let e of[`front`,`back`,`right`,`left`]){let t=ge(e,!1);_e(t);let n=e===ye;if(n){let e=t.L/2-1.15,n=t.L>=4&&(t.L<5.5||s.chance(.5));Ce=a.doorOffset??(n?s.chance(.5)?-e:e:0),wf(k,o,Ce,f,O,v,s,a),P.door=k.point(Ce,0,1),P.leafA=k.point(Ce-.5,f+1,.02),P.leafB=k.point(Ce+.5,f+1,.02);let r=t.L/2-(Ce+.7)>=Ce-.7+t.L/2?1:-1,i=Ce+r*.98;if((a.lantern??!0)&&Math.abs(i)<t.L/2-.15){let e=f+1.95;k.box(`metal`,[.05,.05,.46],{at:[i,e+.36,.23]}),k.box(`metal`,[.04,.04,.32],{at:[i,e+.25,.12],rot:[-.75,0,0]}),k.box(`metal`,[.1,.14,.03],{at:[i,e+.3,.015]}),gf(k,ee,i,e,.44,{w:.22,h:.28}),N.push({material:ee,day:0,night:2.4}),P.lantern=k.point(i,e,.6)}if(a.sign){let e=Ce-r*1;Math.abs(e)<t.L/2+.2&&(k.push([e,0,0],-r*Math.PI/4),Ef(k,o,0,f+2.35),k.pop())}}let r=f+1,i=Cf(t.L,n?Ce:null,t.long);for(let a of i){if(!n&&!t.long&&s.chance(.25))continue;let i=Se&&(e===`front`||s.chance(.3))&&s.chance(.75),o=Math.min(t.L/2-Math.abs(a),n?Math.abs(a-Ce)-.75:9);Tf(k,A,a,r,{shutters:be&&o>1.12,shutterTint:xe,flowerbox:i,uShift:s.range(0,1)})}if(k.pop(),d>1){let t=ge(e,!0);_e(t);let n=Cf(t.L,null,t.long);for(let r of n){if(!t.long&&s.chance(.3))continue;let n=t.L/2-Math.abs(r);Tf(k,A,r,te+.5,{shutters:be&&n>1.12,shutterTint:xe,flowerbox:Se&&e===`front`&&s.chance(.5),uShift:s.range(0,1)})}k.pop()}}if(a.woodpile??s.chance(.55)){let e=ge(s.chance(.5)?`right`:`left`,!1);_e(e),Df(k,s.range(-.4,.4)*(e.L-2),.38),k.pop()}let B=e.finish(k,`house`,t,n,r,a.rotation),we=t=>e.world(B,t);P.lantern&&j.push({position:we(P.lantern),color:16757867,intensity:6,distance:7,flicker:.25,nightOnly:!0}),a.windowLights&&P.door&&j.push({position:we(P.door).setY(n+1.6),color:16754266,intensity:3,distance:6,flicker:.1,nightOnly:!0}),P.smoke&&M.push({preset:`smoke`,position:we(P.smoke),rate:3});let Te=e.result(B,{colliders:c?[e.boxCollider(B,-S-O,S+O,-b-O,b+O)]:[e.boxCollider(B,-b-O,b+O,-S-O,S+O)],lights:j,emissives:N,emitters:M});return P.door&&(Te.interact={position:we(P.door),radius:1.1,id:a.id??`house`,lookSpan:{a:we(P.leafA),b:we(P.leafB)}}),Te}function Sf(e,t,n,r,i,a,o,s,{top:c=!0,bottom:l=!0}={}){let u=r/2,d=i/2;if(n===`timber_frame`||n===`plaster`){for(let t of[-1,1])for(let n of[-1,1])e.box($,[.2,o,.2],{at:[t*(u-.06),a+o/2,n*(d-.06)],rotUV:!0,faces:{py:!1,ny:!1}});l&&e.box($,[r+.08,.16,i+.08],{at:[0,a+.08,0],faces:{ny:!1}})}else if(n===`brick`){let t=Math.floor(o/.5);for(let n=0;n<t;n++){let t=n%2==0;for(let r of[-1,1])for(let i of[-1,1]){let o=t?.62:.34,c=t?.34:.62;e.box(`stone_brick`,[o,.46,c],{at:[r*(u-o/2+.04),a+n*.5+.25,i*(d-c/2+.04)],faces:{ny:!1},off:[s.range(0,1),0]})}}l&&e.box(`stone_brick`,[r+.1,.18,i+.1],{at:[0,a+.09,0],faces:{ny:!1}})}else if(n===`log_wall`){let t=Math.round(o/.5);for(let n=0;n<t;n++){let t=a+n*.5+.25,r=n%2==0;for(let n of[-1,1])for(let i of[-1,1]){let a=n*(u-.05),o=i*(d-.05);r?e.tube(`bark`,[a-n*.12,t,o],[a+n*.32,t,o],.2,.19,{segments:6,capTop:`wood_planks`,twist:.3}):e.tube(`bark`,[a,t,o-i*.12],[a,t,o+i*.32],.2,.19,{segments:6,capTop:`wood_planks`,twist:.3})}}}c&&e.box($,[r+.12,.2,i+.12],{at:[0,a+o-.1,0],faces:{py:!1}})}function Cf(e,t,n){let r=-e/2+.85,i=e/2-.85,a=[];t==null?a.push([r,i]):(t-1.38>=r&&a.push([r,t-1.38]),t+1.38<=i&&a.push([t+1.38,i]));let o=[];for(let[e,t]of a){let r=t-e;if(r<0)continue;let i=Math.floor(r/(n?1.9:2.4))+1;if(n||(i=Math.min(i,1)),i===1)o.push((e+t)/2);else for(let t=0;t<i;t++)o.push(e+t*r/(i-1))}return o}function wf(e,t,n,r,i,a,o,s){e.quad(`door`,[[n-.5,r,.02],[n+.5,r,.02],[n+.5,r+2,.02],[n-.5,r+2,.02]],[[0,0],[1,0],[1,1],[0,1]]);for(let t of[-1,1])e.box($,[.15,2.16,.18],{at:[n+t*.575,r+1.08,.07],rotUV:!0});if(e.box($,[1.46,.2,.22],{at:[n,r+2.1,.09]}),e.box($,[1.2,.05,.16],{at:[n,r+.02,.08],faces:{ny:!1}}),e.box(a,[1.5,.25,.5],{at:[n,.125,i+.25],faces:{ny:!1},off:[.3,0]}),s.doorHood??o.chance(.55)){let t=r+2.45;e.box(s.roof,[1.8,.1,.78],{at:[n,t,.36],rot:[.32,0,0],faces:{ny:$,px:$,nx:$,pz:$}});for(let r of[-1,1])e.box($,[.08,.08,.62],{at:[n+r*.7,t-.26,.26],rot:[-.7,0,0]})}}function Tf(e,t,n,r,{shutters:i,shutterTint:a,flowerbox:o,uShift:s=0}){e.quad(t,[[n-.5,r,.02],[n+.5,r,.02],[n+.5,r+1,.02],[n-.5,r+1,.02]],[[0,0],[1,0],[1,1],[0,1]]),e.box($,[1.16,.08,.1],{at:[n,r+1,.05]});for(let t of[-1,1])e.box($,[.08,1.02,.1],{at:[n+t*.54,r+.5,.05],rotUV:!0});if(e.box($,[1.36,.09,.24],{at:[n,r-.045,.11]}),e.box($,[1.3,.13,.15],{at:[n,r+1.1,.07]}),i)for(let t of[-1,1])e.box(`wood_planks`,[.46,1.04,.05],{at:[n+t*.83,r+.5,.035],rotUV:!0,color:a}),e.box($,[.4,.06,.02],{at:[n+t*.83,r+.8,.07]}),e.box($,[.4,.06,.02],{at:[n+t*.83,r+.2,.07]});o&&_f(e,n,r-.09-7/16,.36,1.1,.26,s)}function Ef(e,t,n,r){e.box(`metal`,[.05,.05,1.05],{at:[n,r,.52]}),e.box(`metal`,[.04,.04,.6],{at:[n,r-.2,.25],rot:[.62,0,0]});for(let t of[.3,.9])e.box(`metal`,[.02,.14,.02],{at:[n,r-.08,t]});let i=.52;e.box(`sign_board`,[.06,i,.95],{at:[n,r-.15-i/2,.6],faces:{px:{off:[1.05/2,.48/2]},nx:{off:[1.05/2,.48/2]},py:$,ny:$,pz:$,nz:$}})}function Df(e,t,n){for(let[r,i]of[[4,0],[3,.5],[2,1]])for(let a=0;a<r;a++){let o=t+(a-(r-1)/2)*.36,s=.17+i*.62;e.tube($,[o,s,n+.3],[o,s,n-.25],.17,.17,{segments:6,capTop:`wood_planks`,capBottom:`wood_planks`,twist:a*.7+i,uRepeat:1})}e.box($,[1.6,.08,.7],{at:[t,.04,n+.02]})}var Of=Math.PI*(3-Math.sqrt(5)),kf={oak:{leaves:`leaves`,tint:[1,1,1],clusters:[9,12],crown:.44,flat:.8,trunk:.075,card:2},autumn:{leaves:`leaves_autumn`,tint:[1,1,1],clusters:[9,11],crown:.43,flat:.78,trunk:.072,card:2},birch:{leaves:`leaves`,tint:[1.1,1.15,.72],clusters:[6,8],crown:.3,flat:1.25,trunk:.036,card:2}};function Af(e,t,n,r,i={}){let a=i.kind??`oak`,o=e.rng(`tree:${a}`,t,r,i.seed),s=(i.height??4.5)*o.range(.94,1.06),c=i.rotation??o.range(0,Math.PI*2),l,u;return a===`pine`?{group:u,trunkR:l}=Nf(e,o,s,t,n,r,c):{group:u,trunkR:l}=Mf(e,o,wt(kf,a)?a:`oak`,s,t,n,r,c,i),e.result(u,{colliders:[{type:`circle`,x:t,z:r,r:l+.12}]})}function jf(e,t){return(n,r,i)=>{let a=K((r-t)/Math.max(.1,e-t),0,1),o=Math.min(1,Math.hypot(n,i)/(e*.45));return a**1.35*(.75+.35*o)}}function Mf(e,t,n,r,i,a,o,s,c){let l=kf[n],u=n===`birch`,d=e.builder(),f=u?e.windMaterial(`birch`):e.windMaterial(`bark`),p=e.foliageMaterial(l.leaves,{billboard:!0}),m=r*l.crown,h=u?[m*.78,m*1.05,m*.78]:[m,m*l.flat,m],g=[t.range(-.12,.12),r-h[1]*.78-(u?.35:.2),t.range(-.12,.12)],_=g[1]-h[1]*(u?.1:.25),v=Math.max(.12,r*l.trunk);d.sway=jf(r,r*.28);let y=t.range(-.25,.25)*(u?1.5:1),b=t.range(-.25,.25)*(u?1.5:1),S=Array.from({length:7},()=>t.range(-.06,.38)),C=u?[{y:-.1,r:v*1.45},{y:.14,r:v*1.12},{y:_*.35,r:v,cx:y*.2,cz:b*.2},{y:_*.7,r:v*.82,cx:y*.6,cz:b*.6},{y:_+.4,r:v*.55,cx:y+g[0],cz:b+g[2]}]:[{y:-.12,r:v*1.75},{y:.12,r:v*1.28},{y:.45,r:v*1.04},{y:_*.55,r:v*.86,cx:y*.4,cz:b*.4},{y:_,r:v*.66,cx:y+g[0]*.5,cz:b+g[2]*.5},{y:_+.5,r:v*.4,cx:y*.8+g[0],cz:b*.8+g[2]}];d.lathe(f,C,{segments:7,phase:t.range(0,Math.PI),radiusFn:(e,t)=>e===0?1+S[t]:e===1?1+S[t]*.45:1,colorFn:e=>{let t=e===0?.6:e===1?.8:1;return[t,t,t]},vOff:t.range(0,2)});let[w,T]=l.clusters,E=t.int(w,T),D=[],O=t.range(0,1);for(let e=0;e<E;e++){let n=1-(e+O)/E*1.8,r=Math.sqrt(Math.max(0,1-n*n)),i=e*Of+t.range(-.3,.3),a=t.range(.48,.72);D.push({p:[g[0]+Math.cos(i)*r*h[0]*a,g[1]+n*h[1]*a,g[2]+Math.sin(i)*r*h[2]*a],inner:!1})}D.push({p:[g[0]+t.range(-.2,.2),g[1]+h[1]*.55,g[2]+t.range(-.2,.2)],inner:!1});let k=u?2:4;for(let e=0;e<k;e++){let n=e/k*Math.PI*2+t.range(-.4,.4);D.push({p:[g[0]+Math.cos(n)*h[0]*.3,g[1]+t.range(-.25,.15)*h[1],g[2]+Math.sin(n)*h[2]*.3],inner:!0})}let A=t.int(2,3),ee=D.filter(e=>!e.inner).sort((e,t)=>e.p[1]-t.p[1]);for(let e=0;e<A&&e<ee.length;e++){let n=ee[e*2%ee.length].p,r=_*t.range(.72,.95),i=[r/_*y,r,r/_*b],a=[I(g[0],n[0],.8),I(r,n[1],.7),I(g[2],n[2],.8)];d.tube(f,i,a,v*.46,v*.16,{segments:5,rings:3,uRepeat:1})}let j=l.tint,M=[];for(let e of D){if(M.push({p:e.p,inner:e.inner,shade:1}),e.inner)continue;let n=t.range(0,Math.PI*2),r=t.range(.4,.6);M.push({p:[e.p[0]+Math.cos(n)*r,e.p[1]-t.range(.2,.38),e.p[2]+Math.sin(n)*r],inner:!1,shade:.9})}for(let e=0;e<M.length;e++){let n=M[e],r=l.card*t.range(.94,1.08),i=r/2,a=t.range(-.07,.07),o=t.range(-.05,.05),s=n.p,c=(s[0]-g[0])/h[0],u=(s[1]-g[1])/h[1],f=(s[2]-g[2])/h[2],m=Math.hypot(c,u,f),_=n.inner?.5:n.shade*K(.66+.5*m,.6,1.05)*(.8+.2*x(-.8,.6,u)),v=[j[0]*(1+a+o)*_,j[1]*(1+a)*_,j[2]*(1+a-o)*_];d.phase=t.range(0,6.283),d.center=s;let y=t.range(-.22,.22),b=Math.cos(y),S=Math.sin(y),C=[[-i,-i],[i,-i],[i,i],[-i,i]],w=[],T=[],E=[];for(let[e,t]of C){let n=e*b-t*S,i=e*S+t*b;w.push([s[0]+n,s[1]+i,s[2]]);let a=c+n/r*.5,o=u+i/r*.6+.45,l=f+.25,d=Math.hypot(a,o,l)||1;T.push([a/d,o/d,l/d]);let p=t<0?.8:1.06;E.push([v[0]*p,v[1]*p,v[2]*p])}d.quad(p,w,[[0,0],[1,0],[1,1],[0,1]],{normals:T,colors:E})}if(d.center=[0,0,0],n===`autumn`&&c.fallenLeaves!==!1){let n=e.decalMaterial(`leaf_litter`);d.sway=0;for(let e=0;e<2;e++){let r=t.range(0,Math.PI*2),i=g[0]+Math.cos(r)*t.range(.4,1.1),a=g[2]+Math.sin(r)*t.range(.4,1.1),o=t.range(0,Math.PI),s=[Math.cos(o),-Math.sin(o)],c=[Math.sin(o),Math.cos(o)],l=.025+e*.004,u=[[-1,1],[1,1],[1,-1],[-1,-1]].map(([e,t])=>[i+s[0]*e+c[0]*t,l,a+s[1]*e+c[1]*t]);d.quad(n,u,[[0,0],[1,0],[1,1],[0,1]],{normals:[[0,1,0],[0,1,0],[0,1,0],[0,1,0]]})}}return{group:e.finish(d,`tree:${n}`,i,a,o,s),trunkR:v*1.1}}function Nf(e,t,n,r,i,a,o){let s=e.builder(),c=e.windMaterial(`bark`),l=e.foliageMaterial(`pine`);s.sway=jf(n,n*.25);let u=Math.max(.14,n*.042);s.lathe(c,[{y:-.1,r:u*1.5},{y:.15,r:u*1.1},{y:n*.55,r:u*.7},{y:n*.8,r:u*.3}],{segments:6,colorFn:e=>e===0?[.6,.6,.6]:[.9,.9,.9]});let d=K(Math.round(n/.95),4,7),f=n*.34,p=n*.19,m=[],h=[];for(let e=0;e<d;e++){let n=e/(d-1);m.push(f*(1-.78*n)*t.range(.95,1.05)),h.push(m[e]*1.12+.3)}let g=n-p-h[d-1];for(let e=0;e<d;e++){let n=e/(d-1),r=m[e],i=h[e],a=p+g*n,o=.2+.14*(1-n),c=Array.from({length:12},(e,n)=>+(n%2==0)+t.range(-.25,.25)),u=I(.74,1,n),f=t.range(-.05,.05),_=t.range(-.05,.05);s.phase=t.range(0,6.283),s.lathe(l,[{y:a,r,cx:f,cz:_},{y:a+i*.3,r:r*.66,cx:f,cz:_},{y:a+i,r:.03,cx:f*.5,cz:_*.5}],{segments:12,phase:t.range(0,1),uRepeat:Math.max(3,Math.round(Math.PI*2*r/2)),vOff:t.range(0,.5),normalUp:.9,radiusFn:(e,t)=>e===0?1+.1*c[t]:e===1?1+.05*c[(t+1)%12]:1,yFn:(e,t)=>e===0?-o*(.35+.65*c[t]):0,colorFn:e=>{let t=u*(e===0?.52:e===1?1:1.12);return[t,t,t]}})}return{group:e.finish(s,`tree:pine`,r,i,a,o),trunkR:u*1.2}}function Pf(e,t,n,r,i={}){let a=i.rotation??0,o=i.height??2.9,s=i.style??`arm`,c=e.builder((e,t)=>.7+.3*x(0,.6,t)),l=e.glassMaterial(),u=`metal`;c.box(`stone_brick`,[.5,.26,.5],{at:[0,.13,0],faces:{ny:!1},off:[.2,0]}),c.box(`stone_brick`,[.38,.12,.38],{at:[0,.32,0],faces:{ny:!1},off:[.6,.1]}),c.box(u,[.2,.3,.2],{at:[0,.53,0]}),c.box(u,[.13,o-.6,.13],{at:[0,.68+(o-.6)/2-.1,0],faces:{ny:!1}}),c.box(u,[.2,.06,.2],{at:[0,1.25,0]}),c.box(u,[.2,.08,.2],{at:[0,o-.04,0]}),c.box(u,[.08,.14,.08],{at:[0,o+.07,0]}),c.box(u,[.14,.05,.14],{at:[0,o+.16,0]});let d;if(s===`top`)gf(c,l,0,o+.45,0,{w:.3,h:.4}),d=[0,o+.45,0];else{let e=o-.1,t=.62;c.box(u,[t,.06,.06],{at:[t/2,e,0]}),c.box(u,[.08,.08,.08],{at:[t,e+.02,0]});let n=.17,r=.24,i=e-.2;for(let e=0;e<9;e++){let t=Math.PI*.5+e/9*Math.PI*1.75,a=Math.PI*.5+(e+1)/9*Math.PI*1.75,o=n*(1-e/9*.55),s=n*(1-(e+1)/9*.55),l=[r+Math.cos(t)*o,i+Math.sin(t)*o],d=[r+Math.cos(a)*s,i+Math.sin(a)*s],f=Math.hypot(d[0]-l[0],d[1]-l[1]);c.box(u,[f+.03,.04,.045],{at:[(l[0]+d[0])/2,(l[1]+d[1])/2,0],rot:[0,0,Math.atan2(d[1]-l[1],d[0]-l[0])]})}c.box(u,[.04,.24,.04],{at:[.08,e-.12,0],rot:[0,0,-.6]}),c.box(u,[.025,.14,.025],{at:[t,e-.09,0]});let a=e-.46;gf(c,l,t,a,0,{w:.26,h:.34}),d=[t,a,0]}let f=e.finish(c,`lamppost`,t,n,r,a),p=e.world(f,new L(...d));return e.result(f,{colliders:[{type:`circle`,x:t,z:r,r:.26}],lights:[{position:p,color:16757867,intensity:i.intensity??12,distance:i.distance??9,flicker:.2,nightOnly:!0}],emissives:[{material:l,day:0,night:2.4}],emitters:[]})}function Ff(e,t,n,r,i={}){let a=e.rng(`walltorch`,t,r,i.seed),o=i.rotation??0,s=e.builder(),c=`metal`;s.box(c,[.2,.34,.04],{at:[0,0,.02]}),s.box(c,[.05,.05,.3],{at:[0,-.06,.16]}),s.box(c,[.14,.05,.14],{at:[0,-.02,.3]});let l=[0,-.22,.26],u=[0,.3,.26+Math.sin(.28)*.5];s.tube(`bark`,l,u,.05,.065,{segments:6}),s.tube($,[0,u[1]-.12,u[2]-.035],[0,u[1]+.02,u[2]+.005],.085,.08,{segments:6,capTop:!0,color:[.35,.3,.3]});let d=e.finish(s,`wallTorch`,t,n,r,o),f=e.flame({width:.56,height:.8,seed:a.range(0,100),glowSize:2.4,glowIntensity:.5});f.object.position.set(0,u[1]+.01,u[2]),d.add(f.object),d.updateMatrixWorld(!0);let p=e.world(d,new L(0,u[1]+.35,u[2]+.2));return e.result(d,{colliders:[],lights:[{position:p,color:16751173,intensity:i.intensity??7,distance:i.distance??7,flicker:.45,nightOnly:!1}],emissives:[],emitters:i.embers?[{preset:`embers`,position:e.world(d,new L(0,u[1]+.5,u[2])),rate:2}]:[],flames:[f]})}function If(e,t,n,r,i={}){let a=e.rng(`campfire`,t,r,i.seed),o=i.rotation??a.range(0,Math.PI*2),s=e.builder(),c=e.extra.material(`ash`);s.lathe(c,[{y:.012,r:.72},{y:.05,r:.5},{y:.06,r:.01}],{segments:10,smooth:!0,normalUp:2});let l=i.stones??10;for(let t=0;t<l;t++){let n=t/l*Math.PI*2+a.range(-.1,.1),r=.8+a.range(-.04,.04),i=a.range(.17,.23);e.rockGeom(s,Math.cos(n)*r,0,Math.sin(n)*r,[i*1.2,i*.8,i],a,{top:e.extra.material(`boulder`),side:e.extra.material(`boulder`),detail:0,yaw:-n})}let u=i.logs??4;for(let e=0;e<u;e++){let t=e/u*Math.PI*2+.4,n=Math.cos(t),r=Math.sin(t),i=[n*.62,.08,r*.62],a=[-n*.1,.36,-r*.1];s.tube(`bark`,i,a,.085,.06,{segments:6,capBottom:`wood_planks`,twist:e,colorFn:e=>e===0?[.95,.9,.9]:[.28,.22,.22],rings:2})}if(i.seat!==!1){let e=a.range(0,Math.PI*2),t=Math.cos(e)*1.7,n=Math.sin(e)*1.7,r=-Math.sin(e)*.7,i=Math.cos(e)*.7;s.tube(`bark`,[t-r,.2,n-i],[t+r,.21,n+i],.21,.2,{segments:7,capTop:`wood_planks`,capBottom:`wood_planks`,twist:.5})}let d=e.finish(s,`campfire`,t,n,r,o),f=e.flame({width:1.15,height:1.3,seed:a.range(0,100),glowSize:2.7,glowIntensity:.55});return f.object.position.set(0,.05,0),d.add(f.object),d.updateMatrixWorld(!0),e.result(d,{colliders:[{type:`circle`,x:t,z:r,r:.95}],lights:[{position:new L(t,n+.9,r),color:16747578,intensity:i.intensity??14,distance:i.distance??10,flicker:.5,nightOnly:!1}],emissives:[],emitters:[{preset:`embers`,position:new L(t,n+.7,r),rate:6},{preset:`smoke`,position:new L(t,n+1.5,r),rate:2.5}],interact:{position:new L(t,n,r),radius:1.6,id:i.id??`campfire`},flames:[f]})}var Lf=Math.PI*2,Rf=(e=.7,t=.62)=>(n,r)=>t+(1-t)*x(-.05,e,r);function zf(e,t,n,r,i={}){let a=e.rng(`well`,t,r,i.seed),o=i.rotation??0,s=i.roof??`wood_planks`,c=e.builder(Rf(.8)),l=.82,u=Math.PI/8;c.lathe(`well_stone`,[{y:-.05,r:.86},{y:l,r:.82}],{segments:8,smooth:!1,phase:u,uRepeat:3,vOff:.18}),c.lathe(`well_stone`,[{y:l,r:.6199999999999999},{y:.2,r:.6}],{segments:8,smooth:!1,phase:u,uRepeat:2,color:[.45,.45,.5]});for(let e=0;e<8;e++){let t=(u+e/8*Math.PI*2+(u+(e+1)/8*Math.PI*2))/2,n=.73,r=1.7599999999999998*Math.sin(Math.PI/8);c.box(`stone_brick`,[r+.02,.14,.34],{at:[Math.cos(t)*n,.8799999999999999+a.range(-.015,.015),-Math.sin(t)*n],rot:t+Math.PI/2,off:[a.range(0,2),.2]})}let d=e.textures.material(`riverbed`,{vertexColors:!0,color:6982840});c.lathe(d,[{y:.38,r:.61},{y:.38,r:.01}],{segments:8,phase:u,smooth:!0,normalUp:5,color:[.35,.45,.6]});for(let e of[-1,1])c.box($,[.16,2.35,.16],{at:[e*.7699999999999999,1.225,0],rotUV:!0});c.box($,[1.94,.14,.14],{at:[0,2.3000000000000003,0]}),c.tube(`wood_planks`,[-.72,1.55,0],[.72,1.55,0],.09,.09,{segments:6,capTop:$,capBottom:$}),c.tube(`rope`,[-.25,1.55,0],[.25,1.55,0],.13,.13,{segments:6,uRepeat:2}),c.box(`metal`,[.04,.3,.04],{at:[.84,1.45,0]}),c.box(`metal`,[.04,.04,.22],{at:[.84,1.32,.11]}),c.box(`rope`,[.04,.55,.04],{at:[.05,1.2,.08]});let f=.05;c.lathe(`barrel`,[{y:.75,r:.14},{y:.97,r:.18}],{segments:8,uRepeat:1,vScale:.25,capBottom:`wood_planks`,smooth:!0,at:[f,0,.08]}),c.box(`metal`,[.36,.03,.03],{at:[f,1.0899999999999999,.08]});let p=2.44,m=.75,h=.62,g=.1,_=m/Math.cos(h)+.1,v=2.4,y=e.textures.meta(s).units[0];for(let e of[1,-1]){let t=_/2-.05,n=[0,v-Math.sin(h)*t+Math.cos(h)*g/2+m*Math.tan(h)*.35,Math.cos(h)*t*e];c.push(n,e>0?[h,0,0]:[h,Math.PI,0,`YXZ`]),c.box(s,[p,g,_],{faces:{py:{off:[mf(p,y),0]},ny:$,px:$,nx:$,pz:$,nz:!1}}),c.box($,[2.5,.18,.06],{at:[0,-.03,_/2+.02],faces:{nz:!1}}),c.pop()}let b=v+m*Math.tan(h)*.35+g/Math.cos(h);c.box($,[2.54,.14,.14],{at:[0,b,0],rot:[Math.PI/4,0,0]});for(let e of[-1,1])c.box($,[.08,.5,.08],{at:[e*.7699999999999999,2.45,.2],rot:[-.7,0,0]}),c.box($,[.08,.5,.08],{at:[e*.7699999999999999,2.45,-.2],rot:[.7,0,0]});let x=e.finish(c,`well`,t,n,r,o);return e.result(x,{colliders:[{type:`circle`,x:t,z:r,r:.94}],interact:{position:new L(t,n,r),radius:1.72,id:i.id??`well`}})}function Bf(e,t,n,r,i={}){let a=e.rng(`stall`,t,r,i.seed),o=i.cloth??`cloth_stripe`,s=i.rotation??0,c=i.width??3,l=i.depth??1.6,u=c/2,d=l/2,f=e.builder(Rf(.6)),p=2.7,m=2.15;for(let e of[-1,1])f.box($,[.14,p,.14],{at:[e*(u-.07),p/2,-d+.07],rotUV:!0}),f.box($,[.14,m,.14],{at:[e*(u-.07),m/2,d-.07],rotUV:!0}),f.box($,[.1,.1,l],{at:[e*(u-.07),4.85/2-.15,0],rot:[Math.atan2(.5500000000000003,l),0,0]});let h=-d-.1,g=d+.45,_=Math.atan2(.6900000000000004,g-h),v=Math.hypot(g-h,.6900000000000004),y=e.textures.meta(o).units[0];f.push([0,4.75/2,(h+g)/2],[_,0,0]),f.box(o,[c+.3,.05,v],{faces:{py:{off:[mf(c+.3,y),0]},ny:{color:[.62,.58,.6]},nz:!1}}),f.pop();let b=g+.01,x=Math.max(4,Math.round((c+.3)/.38)),S=(c+.3)/x,C=-(c+.3)/2,w=y;for(let e=0;e<x;e++){let t=C+e*S,n=t+S,r=2.01,i=1.8099999999999998,a=e=>(e-C)/w;f.quad(o,[[t,i,b],[n,i,b],[n,r,b],[t,r,b]],[[a(t),.8],[a(n),.8],[a(n),.9],[a(t),.9]],{color:[.95,.92,.92]}),f.tri(o,[t,i,b],[(t+n)/2,1.6699999999999997,b],[n,i,b],[a(t),.8],[a((t+n)/2),.73],[a(n),.8],{color:[.95,.92,.92]})}let T=d-.42;f.box(`wood_planks`,[c-.25,.8899999999999999,.62],{at:[0,.8899999999999999/2,T],faces:{ny:!1}}),f.box($,[c-.1,.08,.74],{at:[0,.9299999999999999,T]}),f.box(`cloth_red`,[c-.3,.5,.03],{at:[0,.6099999999999999,T+.33],faces:{ny:!1,nz:!1}});let E=Math.max(2,Math.floor((c-.4)/.72)),D=(c-.5)/E,O=e.extra.material(`produce`);for(let e=0;e<E;e++){let t=-((c-.5)/2)+D*(e+.5),n=(e+a.int(0,3))%4;Vf(f,O,t,.97,T-.02,Math.min(.6,D-.08),.46,n,a)}if(i.display!==!1)for(let e of[-1,1]){let t=e*c*.27,n=d+.22;for(let e of[-.24,.24])f.box($,[.07,.36,.07],{at:[t+e,.18,n],rotUV:!0});f.push([t,.36,n],[.42,0,0]),Vf(f,O,0,0,0,.62,.44,+(e>0)+a.int(0,1)*2,a,.2),f.pop()}f.box($,[c-.3,.07,.4],{at:[0,1.35,-d+.3]});for(let e=0;e<2;e++)Vf(f,O,-u*.45+e*u*.9,1.39,-d+.3,.5,.34,(e+2+a.int(0,1))%4,a);let k=a.chance(.5)?1:-1,A=e.textures.material(`crate`,{vertexColors:!0});f.box(A,[.7,.7,.7],{at:[k*(u+.5),.35,d-.3],rot:a.range(-.2,.2),uv:`fit`,faces:{ny:!1}}),Vf(f,O,k*(u+.5),0,-d+.45,.62,.5,a.int(0,3),a,.55);let ee=e.finish(f,`marketStall`,t,n,r,s);return e.result(ee,{colliders:[e.boxCollider(ee,-u-.05,u+.05,-d-.05,d+(i.display===!1?.05:.5))],interact:{position:e.world(ee,new L(0,0,d+1.2)),radius:1.3,id:i.id??`stall`}})}function Vf(e,t,n,r,i,a,o,s,c,l=.26){e.box(`crate`,[a,l,o],{at:[n,r+l/2,i],rot:c.range(-.08,.08),uv:`fit`,rep:[1,l/.9],faces:{ny:!1,py:!1}});let u=s*.25,d=a/2-.03,f=o/2-.03,p=r+l+.02,m=p+.1,h=(e,t)=>[u+K((e+d)/1,0,.999)*.25,K((t+f)/1,0,1)],g=[[-d,p,f],[d,p,f],[d,p,-f],[-d,p,-f]],_=[[-d*.45,m,0],[d*.45,m,0]];e.push([n,0,i]),e.quad(t,[g[0],g[1],_[1],_[0]],[h(-d,0),h(d,0),h(d*.45,f),h(-d*.45,f)]),e.quad(t,[g[2],g[3],_[0],_[1]],[h(d,2*f),h(-d,2*f),h(-d*.45,f),h(d*.45,f)]),e.tri(t,g[1],g[2],_[1],h(d,0),h(d,2*f),h(d*.45,f)),e.tri(t,g[3],g[0],_[0],h(-d,2*f),h(-d,0),h(-d*.45,f)),e.pop()}function Hf(e,t,n,r,i,a,o={}){let s=e.rng(`bridge`,(t+r)/2,(n+i)/2,o.seed),c=o.width??2,l=r-t,u=i-n,d=Math.hypot(l,u),f=Math.atan2(l,u),p=o.arch??Math.min(.4,d*.05),m=o.postDepth??1.4,h=c/2,g=e.builder(),_=e=>p*Math.sin(Math.PI*K(e,0,1)),v=e=>-d/2+e*d,y=Math.max(2,Math.round(d/.5)),b=d/y;for(let e=0;e<y;e++){let t=e/y,n=(e+1)/y,r=(t+n)/2,i=Math.atan2(_(n)-_(t),b),a=c+s.range(-.06,.1);g.box(`wood_deck`,[a,.11,b-.035],{at:[s.range(-.04,.04),_(r)-.055+s.range(-.012,.012),v(r)],rot:[-i,s.range(-.03,.03),0],faces:{py:{off:[s.range(0,4),e%8*.5]},ny:{color:[.6,.6,.6]}},rotUV:!1})}let x=Math.max(2,Math.round(d/1));for(let e of[-1,1])for(let t=0;t<x;t++){let n=t/x,r=(t+1)/x,i=Math.hypot(d/x,_(r)-_(n)),a=Math.atan2(_(r)-_(n),d/x);g.box($,[.18,.2,i+.02],{at:[e*(h-.3),(_(n)+_(r))/2-.2,v((n+r)/2)],rot:[-a,0,0]})}let S=Math.max(2,Math.round(d/1.6)+1),C=[.5,.95];for(let e=0;e<S;e++){let t=e/(S-1),n=e===0||e===S-1,r=_(t)+(n?1.15:1.02),i=n?-.35:-m;for(let e of[-1,1]){let a=n?.2:.15;g.box($,[a,r-i,a],{at:[e*(h+.02),(r+i)/2,v(t)],rotUV:!0,color:[1,1,1]}),n&&g.box($,[a+.08,.08,a+.08],{at:[e*(h+.02),r+.04,v(t)]})}}if(o.rails!==!1)for(let e=0;e<S-1;e++){let t=e/(S-1),n=(e+1)/(S-1),r=Math.hypot(d/(S-1),_(n)-_(t)),i=Math.atan2(_(n)-_(t),d/(S-1));for(let e of[-1,1])for(let a of C)g.box(`wood_planks`,[.08,a>.8?.12:.09,r],{at:[e*(h+.02),(_(t)+_(n))/2+a+s.range(-.015,.015),v((t+n)/2)],rot:[-i,0,0]})}let w=(t+r)/2,T=(n+i)/2,E=e.finish(g,`bridge`,w,a,T,f),D=[],O=[],k=p>.02?Math.max(2,Math.round(d/.5)):1;for(let t=0;t<k;t++){let n=t/k,r=(t+1)/k,i=t===0?-.25:0,o=t===k-1?.25:0,s=e.localRect(E,-h+.1,h-.1,v(n)+i,v(r)+o);D.push({...s,y:a+_((n+r)/2)})}let A=Math.max(1,Math.round(d/1));for(let t=0;t<A;t++){let n=v(t/A),r=v((t+1)/A);for(let t of[-1,1])O.push(e.boxCollider(E,t*(h+.02)-.12,t*(h+.02)+.12,n,r))}let ee=e.result(E,{colliders:O});return ee.walkRects=D,ee}function Uf(e,t,n,r,i={}){let a=e.rng(`windmill`,t,r,i.seed),o=i.rotation??0,s=i.height??6,c=i.roof??`roof_thatch`,l=i.wall??`plaster`,u=e.builder(Rf(1)),d=Math.PI/8,f=1.12,p=e=>I(1.65,f,e/s);u.lathe(`stone_brick`,[{y:-.05,r:1.73},{y:.5,r:p(.5)+.06}],{segments:8,smooth:!1,phase:d,vOff:0}),u.lathe(`stone_brick`,[{y:.5,r:p(.5)},{y:2,r:p(2)}],{segments:8,smooth:!1,phase:d,vOff:.5}),u.lathe(l,[{y:2,r:p(2)},{y:3,r:p(3)},{y:s,r:f}],{segments:8,smooth:!1,phase:d,vOff:0,color:l===`plaster`?[.84,.8,.78]:void 0});let m=(e,t,n)=>u.lathe($,[{y:e-t/2,r:p(e)+n},{y:e+t/2,r:p(e)+n}],{segments:8,smooth:!1,phase:d,capTop:$,uRepeat:4});m(2,.2,.06),m(s-.05,.22,.08);for(let e=0;e<8;e++){let t=d+e/8*Math.PI*2,n=[Math.cos(t)*(p(2)+.02),2,-Math.sin(t)*(p(2)+.02)],r=[Math.cos(t)*1.1400000000000001,s,-Math.sin(t)*1.1400000000000001];u.tube($,n,r,.07,.06,{segments:4,uRepeat:1})}let h=1.5;u.lathe(c,[{y:s-.1,r:h},{y:s+.7,r:h*.62},{y:s+1.7,r:.05}],{segments:8,smooth:!0,phase:d,normalUp:.3,colorFn:e=>e===0?[.85,.85,.85]:[1,1,1]}),u.lathe($,[{y:s-.22,r:1.52},{y:s-.08,r:1.52}],{segments:8,smooth:!1,phase:d,capBottom:$,uRepeat:4}),u.box($,[.1,.4,.1],{at:[0,s+1.85,0]});let g=e=>p(e)*Math.cos(Math.PI/8),_=g(.5)+.02;u.quad(`door`,[[-.5,.35,_],[.5,.35,_],[.5,2.35,_-.1],[-.5,2.35,_-.1]],[[0,0],[1,0],[1,1],[0,1]]),u.box($,[1.3,.18,.22],{at:[0,2.42,_-.06]});for(let e of[-1,1])u.box($,[.15,2.1,.2],{at:[e*.58,1.38,_-.04],rot:[-.05,0,0],rotUV:!0});u.box(`stone_brick`,[1.5,.35,.6],{at:[0,.175,_+.25],faces:{ny:!1}});let v=e.windowMaterial();for(let[e,t]of[[3.5,0],[4.6,Math.PI/4*3]]){u.push([0,0,0],t);let n=g(e+.5)+.03;u.quad(v,[[-.4,e,n],[.4,e,n-.01],[.4,e+.8,n-.07],[-.4,e+.8,n-.06]],[[.1,.1],[.9,.1],[.9,.9],[.1,.9]]),u.box($,[1,.08,.2],{at:[0,e-.04,n+.04]}),u.box($,[.96,.1,.14],{at:[0,e+.86,n-.03]}),u.pop()}let y=s-.35,b=g(y)+.2;u.box(`wood_planks`,[.9,.8,.9],{at:[0,y+.15,b-.35]}),u.box(c,[1.1,.12,1.1],{at:[0,y+.6,b-.35],rot:[.25,0,0]});let x=e.finish(u,`windmill`,t,n,r,o),S=e.builder(),C=e.extra.material(`sail`),w=i.sailLength??3.7;S.tube($,[0,0,-.1],[0,0,.45],.16,.14,{segments:8,capTop:$,uRepeat:2}),S.box(`metal`,[.36,.36,.08],{at:[0,0,.42],rot:[0,0,Math.PI/4]});for(let e=0;e<4;e++){S.push([0,0,.3],[0,0,e*Math.PI/2]),S.box($,[.13,w+.35,.12],{at:[0,(w+.35)/2-.15,0],rotUV:!0});let t=.55,n=w;S.quad(C,[[.07,t,.02],[1.02,t,.02],[1.02,n,.02],[.07,n,.02]],[[0,0],[1,0],[1,1],[0,1]],{normals:[[0,.3,.95],[0,.3,.95],[0,.3,.95],[0,.3,.95]]}),S.box(`wood_planks`,[.14,n-t,.03],{at:[-.14,(t+n)/2,.02],rotUV:!0}),S.pop()}let{group:T,geometries:E}=S.build(`windmill:sails`);e.track(E),T.position.set(0,y,b+.12),T.userData.dynamic=!0,T.rotation.z=a.range(0,Math.PI/2),x.add(T),x.updateMatrixWorld(!0);let D=i.speed??.55,O=e.result(x,{colliders:[{type:`circle`,x:t,z:r,r:1.75}],emissives:[{material:v,day:0,night:1.6}],update:e=>{T.rotation.z=(T.rotation.z-e*D*(.6+.4*X.uWindStrength.value))%Lf}});return O.sails=T,O}var Wf=(e=.5,t=.62)=>(n,r)=>t+(1-t)*x(-.05,e,r);function Gf(e,t,n,r,i,a,o={}){let s=e.rng(`fence`,(t+r)/2,(n+i)/2,o.seed),c=r-t,l=i-n,u=Math.hypot(c,l),d=Math.atan2(l,c)*-1,f=o.height??.95,p=Math.max(1,Math.round(u/(o.spacing??1))),m=u/p,h=e.builder(Wf(.45)),g=[];for(let e=0;e<=p;e++){let t=-u/2+e*m,n=f+s.range(-.05,.04),r=[s.range(-.04,.04),0,s.range(-.04,.04)];g.push({px:t,h:n}),h.push([t,0,0],r),h.box($,[.15,n,.15],{at:[0,n/2-.05,0],rotUV:!0,faces:{ny:!1,py:!1},off:[s.range(0,2),s.range(0,2)]});let i=n-.05,a=.075,o=[0,i+.12,0],c=[[-.075,i,a],[a,i,a],[a,i,-.075],[-.075,i,-.075]];for(let e=0;e<4;e++)h.tri($,c[e],c[(e+1)%4],o,[0,0],[.15,0],[.075,.12]);h.pop()}let _=(o.rails??2)===1?[.62]:[.34,.7];for(let e=0;e<p;e++){let t=g[e],n=g[e+1];for(let e of _){let r=e*(t.h/f)+s.range(-.02,.02),i=e*(n.h/f)+s.range(-.02,.02),a=Math.hypot(m,i-r)+.12;h.box(`wood_planks`,[a,.1,.06],{at:[(t.px+n.px)/2,(r+i)/2,.09],rot:[0,0,Math.atan2(i-r,m)],off:[s.range(0,2),s.range(0,2)]})}}let v=e.finish(h,`fence`,(t+r)/2,a,(n+i)/2,d),y=[],b=Math.abs(Math.sin(2*d))>.05?Math.max(1,Math.ceil(m/.3)):1;for(let t=0;t<p;t++)for(let n=0;n<b;n++){let r=g[t].px+m*n/b;y.push(e.boxCollider(v,r,r+m/b,-.1,.1))}return e.result(v,{colliders:y})}function Kf(e,t,n,r,{h:i=1,r:a=.4,yaw:o=0,lid:s=!0,bottom:c=!1}={}){let l=[{y:0,r:a*.86},{y:i*.15,r:a*.95},{y:i*.5,r:a},{y:i*.85,r:a*.95},{y:i,r:a*.86}];e.lathe(`barrel`,l,{segments:10,uRepeat:3,vScale:i,at:[t,n,r],rot:o,smooth:!0});let u=s=>{e.push([t,n+i/2,r],s?[Math.PI,o,0]:[0,o,0]),e.lathe(`barrel`,[{y:i/2,r:a*.86},{y:i/2-.04,r:a*.78}],{segments:10,uRepeat:3,vScale:1,vOff:.9,capTop:`wood_planks`,color:[.8,.8,.8]}),e.pop()};s&&u(!1),c&&u(!0)}function qf(e,t,n,r,i={}){let a=e.rng(`barrel`,t,r,i.seed),o=e.builder(Wf(.5)),s=i.height??1,c=i.radius??.4;i.lying?(o.push([0,c*.95,-s/2],[Math.PI/2,0,0]),Kf(o,0,0,0,{h:s,r:c,yaw:a.range(0,6),bottom:!0}),o.pop()):Kf(o,0,0,0,{h:s,r:c,yaw:a.range(0,6)});let l=e.finish(o,`barrel`,t,n,r,i.rotation??a.range(0,Math.PI*2));return e.result(l,{colliders:[{type:`circle`,x:t,z:r,r:c+.04}]})}function Jf(e,t,n,r,i={}){let a=e.rng(`crate`,t,r,i.seed),o=i.size??.9,s=e.builder(Wf(.5));s.box(`crate`,[o,o,o],{at:[0,o/2,0],uv:`fit`,faces:{ny:!1}});let c=i.rotation??a.range(-.3,.3),l=e.finish(s,`crate`,t,n,r,c),u=o*.5*(Math.abs(Math.cos(c))+Math.abs(Math.sin(c)));return e.result(l,{colliders:[{type:`box`,minX:t-u,maxX:t+u,minZ:r-u,maxZ:r+u}]})}function Yf(e,t,n,r,i={}){let a=e.rng(`crateStack`,t,r,i.seed),o=e.builder(Wf(.6)),s=i.size??.85,c=i.count??a.int(2,3),l=[];for(let e=0;e<c;e++){let t=(e-(c-1)/2)*(s+.04)+a.range(-.05,.05),n=a.range(-.08,.08),r=a.range(-.12,.12);l.push([t,n]),o.box(`crate`,[s,s,s],{at:[t,s/2,n],rot:r,uv:`fit`,faces:{ny:!1}})}let u=c>=3?a.int(1,2):1;for(let e=0;e<u;e++){let t=u===1?a.range(-.25,.25):(e-.5)*(s+.02);o.box(`crate`,[s*.92,s*.92,s*.92],{at:[t,s+s*.92/2,a.range(-.06,.06)],rot:a.range(-.35,.35),uv:`fit`,faces:{ny:!1}})}(i.barrel??a.chance(.6))&&Kf(o,(a.chance(.5)?1:-1)*(c/2*(s+.04)+.3),0,a.range(.1,.4),{yaw:a.range(0,6)});let d=i.rotation??a.range(-.4,.4),f=e.finish(o,`crateStack`,t,n,r,d),p=c/2*(s+.04)+.75;return e.result(f,{colliders:[e.boxCollider(f,-p,p,-s*.6,s*.6)]})}function Xf(e,t,n,r,i={}){let a=e.rng(`signpost`,t,r,i.seed),o=e.builder(Wf(.5)),s=2.3;o.box($,[.16,s,.16],{at:[0,s/2-.05,0],rotUV:!0,faces:{ny:!1}}),o.box($,[.24,.08,.24],{at:[0,2.28,0]}),o.box($,[.1,.1,.1],{at:[0,2.36,0],rot:[0,Math.PI/4,0]});let c=i.boards??2;for(let e=0;e<c;e++){let t=1.8499999999999999-e*.55,n=e%2==0?1:-1,r=a.range(-.35,.35)+(e===1?a.range(-.5,.5):0);o.push([0,t,0],r);let i=1.15,s=.42,c=n*.595;o.box(`sign_board`,[i,s,.07],{at:[c,0,.09],faces:{pz:{off:[.8500000000000001/2,.5800000000000001/2-.02]},nz:{off:[.8500000000000001/2,.5800000000000001/2-.02]},py:$,ny:$,px:$,nx:$}});let l=c+n*i/2,u=.09-.035,d=.125,f=[l+n*.24,0,0],p=[l,s/2,0],m=[l,-.42/2,0];n>0?(o.tri(`sign_board`,[p[0],p[1],d],[m[0],m[1],d],[f[0],0,d],[.9,.7],[.9,.3],[1,.5]),o.tri(`sign_board`,[m[0],m[1],u],[p[0],p[1],u],[f[0],0,u],[.9,.3],[.9,.7],[1,.5])):(o.tri(`sign_board`,[m[0],m[1],d],[p[0],p[1],d],[f[0],0,d],[.1,.3],[.1,.7],[0,.5]),o.tri(`sign_board`,[p[0],p[1],u],[m[0],m[1],u],[f[0],0,u],[.1,.7],[.1,.3],[0,.5]));let h=n>0?[[p[0],p[1],d],[f[0],0,d],[f[0],0,u],[p[0],p[1],u]]:[[f[0],0,d],[p[0],p[1],d],[p[0],p[1],u],[f[0],0,u]],g=n>0?[[f[0],0,d],[m[0],m[1],d],[m[0],m[1],u],[f[0],0,u]]:[[m[0],m[1],d],[f[0],0,d],[f[0],0,u],[m[0],m[1],u]];o.quad($,h,[[0,0],[.3,0],[.3,.1],[0,.1]]),o.quad($,g,[[0,0],[.3,0],[.3,.1],[0,.1]]),o.box(`metal`,[.05,.05,.06],{at:[n*.1,.1,.14]}),o.box(`metal`,[.05,.05,.06],{at:[n*.1,-.1,.14]}),o.pop()}for(let t=0;t<3;t++){let t=a.range(0,Math.PI*2);$f(o,Math.cos(t)*.22,0,Math.sin(t)*.22,[.2,.14,.18],a,{detail:0,top:e.extra.material(`boulder_moss`),side:e.extra.material(`boulder`)})}let l=e.finish(o,`signpost`,t,n,r,i.rotation??0);return e.result(l,{colliders:[{type:`circle`,x:t,z:r,r:.22}],interact:{position:new L(t,n,r),radius:1.2,id:i.id??`signpost`}})}var Zf=new Map;function Qf(e){let t=Zf.get(e);if(!t){let n=new ce(1,e);t=n.getAttribute(`position`).array.slice(),n.dispose(),Zf.set(e,t)}return t}function $f(e,t,n,r,i,a,{top:o=`moss_stone`,side:s=`cliff`,detail:c=1,yaw:l=0,sink:u=.22,flatTop:d=0,tint:f=[1,1,1],rough:p=.3}={}){let m=Qf(c),h=a.int(0,1e6),g=(e,t,n)=>{let r=Math.round(e*1e3),i=Math.round(t*1e3),a=Math.round(n*1e3),o=A(r*7+a,i*13-r,h);return 1-p/2+o*p},_=Math.cos(l),v=Math.sin(l),y=[];for(let e=0;e<m.length;e+=3){let a=m[e],o=m[e+1],s=m[e+2],c=g(a,o,s);a*=c*i[0],o*=c*i[1],s*=c*i[2],d&&o>i[1]*(1-d)&&(o=i[1]*(1-d)+(o-i[1]*(1-d))*.3),o=Math.max(o,-i[1]*u)+i[1]*u;let l=a*_+s*v,f=-a*v+s*_;y.push([t+l,n+o,r+f])}let b=new L,x=new L,S=new L;for(let t=0;t<y.length;t+=3){let r=y[t],a=y[t+1],c=y[t+2];if(b.fromArray(r),x.fromArray(a).sub(b),S.fromArray(c).sub(b),x.cross(S),x.lengthSq()<1e-10)continue;x.normalize();let l=x.y>.62?o:s,u=e.mat(l),d=e.units(u),p;p=x.y>.62||x.y<-.62?e=>[e[0]/d[0],-e[2]/d[1]]:Math.abs(x.x)>Math.abs(x.z)?e=>[-Math.sign(x.x)*e[2]/d[0],e[1]/d[1]]:e=>[Math.sign(x.z)*e[0]/d[0],e[1]/d[1]];let m=Math.min(r[1],a[1],c[1])-n,h=(.9+.25*K(x.y,0,1))*(.78+.22*K(m/Math.max(.01,i[1]),0,1)),g=x.y>.62?[h,h,h]:[h*f[0],h*f[1],h*f[2]];e.tri(u,r,a,c,p(r),p(a),p(c),{normal:[x.x,x.y,x.z],color:g})}}function ep(e,t,n,r,i={}){let a=e.rng(`rock`,t,r,i.seed),o=i.size??1,s=e.builder(Wf(.4*o,.7)),c=.7*o*a.range(.85,1.15),l=.62*o*a.range(.85,1.1),u=.62*o*a.range(.85,1.15),d={top:e.extra.material(`boulder_moss`),side:e.extra.material(`boulder`)};$f(s,0,0,0,[c,l,u],a,{...d,detail:+(o>.55),flatTop:i.flat?.3:.12});let f=o>=1?[c*.75,u*.55,Math.max(c,u)*.45]:null;if(f&&$f(s,f[0],0,f[1],[c*.5,l*.55,u*.5],a,{...d,detail:1,yaw:a.range(0,6)}),o>=.8)for(let e=0;e<2;e++){let e=a.range(0,Math.PI*2);$f(s,Math.cos(e)*(c+.2),0,Math.sin(e)*(u+.2),[.18*o,.12*o,.16*o],a,{...d,detail:0})}let p=e.finish(s,`rock`,t,n,r,i.rotation??a.range(0,Math.PI*2)),m=[{type:`circle`,x:t,z:r,r:Math.max(c,u)*.95}];if(f){let t=e.world(p,new L(f[0],0,f[1]));m.push({type:`circle`,x:t.x,z:t.z,r:f[2]})}return e.result(p,{colliders:m})}function tp(e,t,n,r,i={}){let a=e.rng(`bench`,t,r,i.seed),o=e.builder(Wf(.4)),s=i.length??1.8;for(let e of[-1,1])o.box(`stone_brick`,[.2,.42,.44],{at:[e*(s/2-.25),.21,0],faces:{ny:!1},off:[a.range(0,2),.3]});if(o.box(`wood_planks`,[s,.1,.24],{at:[0,.47,.1],faces:{ny:$}}),o.box(`wood_planks`,[s,.1,.24],{at:[0,.47,-.15],faces:{ny:$},off:[.6,.4]}),i.back!==!1){for(let e of[-1,1])o.box($,[.1,.7,.1],{at:[e*(s/2-.25),.8,-.26],rot:[-.12,0,0],rotUV:!0});o.box(`wood_planks`,[s-.1,.22,.07],{at:[0,1,-.3],rot:[-.12,0,0],off:[.3,.2]})}let c=i.rotation??0,l=e.finish(o,`bench`,t,n,r,c);return e.result(l,{colliders:[e.boxCollider(l,-s/2,s/2,-.35,.25)],interact:{position:e.world(l,new L(0,0,.6)),radius:.9,id:i.id??`bench`}})}function np(e,t,n,r,i={}){let a=e.rng(`haystack`,t,r,i.seed),o=i.size??1,s=e.builder(Wf(.7*o,.6)),c=1*o,l=1.9*o,u=Array.from({length:12},()=>a.range(.9,1.08));s.lathe(`hay`,[{y:-.05,r:c*1.08},{y:l*.18,r:c*1.02},{y:l*.45,r:c*.9},{y:l*.7,r:c*.64},{y:l*.9,r:c*.3},{y:l,r:.05}],{segments:12,phase:a.range(0,1),smooth:!0,normalUp:.15,radiusFn:(e,t)=>e===0?u[t]*1.04:e<5?1+(u[(t+e)%12]-1)*.6:1,colorFn:e=>{let t=[.8,.9,1,1.05,1.08,1.1][e];return[t,t,t]}}),s.box($,[.09,.9*o,.09],{at:[.03,l+.3*o,.02],rot:[.08,0,.05],rotUV:!0});for(let e=0;e<4;e++){let e=a.range(0,Math.PI*2),t=c*a.range(1.05,1.25);s.lathe(`hay`,[{y:-.02,r:.28*o},{y:.14*o,r:.02}],{segments:6,at:[Math.cos(e)*t,0,Math.sin(e)*t],smooth:!0,normalUp:.5})}let d=e.finish(s,`haystack`,t,n,r,i.rotation??a.range(0,Math.PI*2));return e.result(d,{colliders:[{type:`circle`,x:t,z:r,r:c*1.05}]})}function rp(e,t,n,r,i={}){let a=e.rng(`flowerbox`,t,r,i.seed),o=e.builder(i.wall?null:Wf(.4)),s=i.length??1.2,c=.34,l=i.wall?0:.22;if(!i.wall)for(let e of[-1,1])for(let t of[-1,1])o.box($,[.07,l+.05,.07],{at:[e*(s/2-.06),(l+.05)/2,t*(c/2-.05)],rotUV:!0});_f(o,0,l,c/2,s,c,a.range(0,1));let u=e.finish(o,`flowerbox`,t,n,r,i.rotation??0);return e.result(u,{colliders:i.wall?[]:[e.boxCollider(u,-s/2,s/2,-.34/2,c/2)]})}var ip=Math.PI*2,ap=(e=.5,t=.62)=>(n,r)=>t+(1-t)*x(-.05,e,r),op=[1.55,1.18,.52],sp=[.34,.33,.36],cp=[.5,.42,.38],lp=.4,up=Object.freeze({idle:`#3a8fb0`,attuned:`#7fe3ff`});function dp(e,t,n,r,i={}){let a=e.rng(`chest`,t,r,i.seed),o=i.rotation??0,s=.88,c=.58,l=e.builder(ap(.45));l.box($,[.92,.06,.62],{at:[0,.03,0],faces:{ny:!1}}),l.box(`wood_planks`,[.84,.32,.5399999999999999],{at:[0,.22,0],faces:{ny:!1,py:!1},off:[a.range(0,1),.1]});for(let e of[-1,1])for(let t of[-1,1])l.box($,[.07,.38,.07],{at:[e*(s/2-.02),.2,t*(c/2-.02)],rotUV:!0});for(let e of[-1,1])l.box($,[s,.05,.07],{at:[0,.375,e*(c/2-.035)],faces:{ny:!1}});for(let e of[-1,1])l.box($,[.07,.05,.43999999999999995],{at:[e*(s/2-.035),.375,0],faces:{ny:!1}});for(let e of[-1,1])l.box(`metal`,[.07,.30000000000000004,.6],{at:[e*.25,.21000000000000002,0],faces:{py:!1,ny:!1}});l.box(`metal`,[.17,.15,.03],{at:[0,.28,.3],color:op,uv:`fit`}),l.box(`metal`,[.05,.06,.02],{at:[0,.26,.31999999999999995],color:[.25,.2,.18]}),l.box(`metal`,[.76,.04,.45999999999999996],{at:[0,.33,0],faces:{ny:!1},color:op});for(let e=0;e<5;e++){let e=a.range(.07,.11);l.box(`metal`,[e,.03,e],{at:[a.range(-.3,.3),.365,a.range(-.16,.16)],rot:a.range(0,1.5),color:[1.8,1.4,.6]})}let u=e.finish(l,`chest`,t,n,r,o),d=e.builder(),f=c/2,p=[];for(let e=0;e<=6;e++){let t=e/6*Math.PI;p.push([f+Math.cos(t)*f,Math.sin(t)*.17+.04])}let m=l.mat(`wood_planks`),h=l.units(m),g=0;for(let e=0;e<6;e++){let[t,n]=p[e],[r,i]=p[e+1],a=Math.hypot(r-t,i-n),o=g/h[1],c=(g+a)/h[1];g+=a;let l=-.88/2/h[0],u=s/2/h[0];d.quad(m,[[-.88/2,n,t],[s/2,n,t],[s/2,i,r],[-.88/2,i,r]],[[l,o],[u,o],[u,c],[l,c]]);let _=.012/Math.max(.001,Math.hypot((t+r)/2-f,(n+i)/2-.04)),v=[(n-.04)*_,(t-f)*_],y=[(i-.04)*_,(r-f)*_];for(let e of[-1,1])d.quad(m,[[e*.25-.035,n+v[0],t+v[1]],[e*.25+.035,n+v[0],t+v[1]],[e*.25+.035,i+y[0],r+y[1]],[e*.25-.035,i+y[0],r+y[1]]],[[0,o],[.07,o],[.07,c],[0,c]],{color:sp})}let _=e=>p.map(([t,n])=>[e*s/2,n,t]),v=_(1);d.poly(m,[[s/2,.04,0],[s/2,.04,c],...v.slice(1,-1)].reverse(),{uAxis:[0,0,1],vAxis:[0,1,0],normal:[1,0,0],color:cp}),d.poly(m,[[-.88/2,.04,c],[-.88/2,.04,0],..._(-1).slice(1,-1).reverse()].reverse(),{uAxis:[0,0,-1],vAxis:[0,1,0],normal:[-1,0,0],color:cp}),d.box(m,[.9,.045,.6],{at:[0,.022,f],faces:{py:!1},color:cp}),d.box(m,[.1,.13,.025],{at:[0,-.02,.6],color:[1.9,1.45,.62]});let{group:y,geometries:b}=d.build(`chest:lid`);e.track(b),y.position.set(0,.4,-.29),y.userData.dynamic=!0,u.add(y),u.updateMatrixWorld(!0);let x=0,S={opened:!1,open(e=!1){return!S.opened&&(S.opened=!0,e&&(x=1,y.rotation.x=-1.95),!0)}},C=e.world(u,new L(0,0,.8));C.y=n;let w=e.result(u,{colliders:[{type:`circle`,x:t,z:r,r:.45}],interact:{position:C,radius:1.2,id:i.id??`chest`},update:e=>{if(!S.opened||x>=1)return;x=Math.min(1,x+e/lp);let t=1+2.2*(x-1)**3+1.2*(x-1)**2;y.rotation.x=-1.95*t}});return w.controls=S,w.lid=y,w}function fp(e,t,n,r,a={}){let o=e.rng(`waystone`,t,r,a.seed),s=e.builder(ap(.7,.55)),c={segments:8,smooth:!1,phase:Math.PI/8};s.lathe(`stone_brick`,[{y:-.06,r:.7},{y:.2,r:.66}],{...c,capTop:`stone_tiles`,uRepeat:4,vOff:.3}),s.lathe(`stone_brick`,[{y:.2,r:.5},{y:.38,r:.47}],{...c,capTop:`stone_tiles`,uRepeat:3,vOff:.1});let l=.34,u={segments:4,smooth:!1,phase:Math.PI/4};s.lathe(`stone_brick`,[{y:.36,r:l},{y:2,r:.25}],{...u,uRepeat:2,colorFn:e=>e===0?[.86,.96,.8]:[1.12,1.1,1.04]}),s.box(`stone_tiles`,[.5,.1,.5],{at:[0,2.04,0]}),s.box(`stone_brick`,[.4,.07,.4],{at:[0,2.125,0],off:[.3,.2]});for(let e=0;e<4;e++){let t=Math.PI/4+e*Math.PI/2,n=Math.cos(t)*.17,r=-Math.sin(t)*.17;s.tube(`metal`,[n,2.14,r],[n*1.25,2.36,r*1.25],.028,.02,{segments:4,uRepeat:1})}for(let t=0;t<2;t++){let t=o.range(0,ip),n=o.range(.1,.16);e.rockGeom(s,Math.cos(t)*.82,0,Math.sin(t)*.82,[n*1.3,n,n*1.1],o,{top:e.extra.material(`boulder_moss`),side:e.extra.material(`boulder`),detail:0,yaw:t})}let d=e.finish(s,`waystone`,t,n,r,0),f=e.textures.material(`plaster`,{vertexColors:!0}).clone();f.name=`lumina:waystone-crystal`,f.color.set(`#6aa6b5`),f.emissive=new B(up.idle),f.emissiveIntensity=.9,f.userData.castShadow=!1;let p=e.builder(),m=e=>(l+-.09000000000000002*(e-.36)/1.6400000000000001)*Math.SQRT1_2,h=[[[0,-1,0,1],[0,.4,.55,.95],[0,-.1,.55,.4]],[[-.45,-1,-.45,1],[.45,-1,.45,1],[-.45,.6,.45,-.2]],[[0,-1,0,1],[-.5,.5,.5,-.1],[.5,.5,-.5,-.1]],[[-.5,1,.5,0],[.5,0,-.5,-1],[0,-1,0,1]]],g=(e,t,n,r,i)=>{let a=Math.hypot(r-t,i-n)||1,o=-(i-n)/a*.022,s=(r-t)/a*.022,c=(t,n)=>{let r=m(n)+.012,i=Math.cos(e),a=Math.sin(e);return[i*r+a*t,n,-a*r+i*t]};p.quad(f,[c(t+o,n+s),c(r+o,i+s),c(r-o,i-s),c(t-o,n-s)],[[0,0],[1,0],[1,1],[0,1]])};for(let e=0;e<4;e++){let t=e*Math.PI/2;for(let n=0;n<3;n++){let r=h[(e+n+o.int(0,3))%h.length],i=.72+n*.42;for(let[e,n,a,o]of r)g(t,e*.07,i+n*.1,a*.07,i+o*.1)}}let{group:_,geometries:v}=p.build(`waystone:runes`);e.track(v),_.userData.dynamic=!0,d.add(_);let y=e.builder(),b=.2,x=[0,.44,0],S=[0,-.3,0],C=[0,1,2,3].map(e=>[Math.cos(e*Math.PI/2)*b,0,-Math.sin(e*Math.PI/2)*b]);for(let e=0;e<4;e++){let t=C[e],n=C[(e+1)%4];y.tri(f,t,n,x,[0,0],[.4,0],[.2,.44],{color:e%2?[1.15,1.2,1.25]:[.95,1,1.05]}),y.tri(f,n,t,S,[.4,0],[0,0],[.2,.3],{color:e%2?[.62,.72,.82]:[.5,.6,.72]})}let{group:w,geometries:T}=y.build(`waystone:crystal`);e.track(T);let E=2.62;w.position.set(0,E,0),w.rotation.y=o.range(0,ip),w.userData.dynamic=!0,d.add(w);let D=1.7,O=new mt(D,D);e.track([O]);let k=Xd({color:up.idle,intensity:.34,seed:o.range(0,100),day:.8}),A=new R(O,k);A.name=`waystone:glow`,A.renderOrder=i.PARTICLES+5,A.castShadow=!1,A.receiveShadow=!1,A.position.y=.05,w.add(A),d.updateMatrixWorld(!0);let ee={attuned:!1,setAttuned(e){return ee.attuned=!!e,f.emissive.set(e?up.attuned:up.idle),k.uniforms.uColor.value.set(e?up.attuned:up.idle),k.uniforms.uIntensity.value=e?.62:.34,ee.attuned}},j=o.range(0,10),M=e.result(d,{colliders:[{type:`circle`,x:t,z:r,r:.5}],emissives:[{material:f,day:.9,night:1.6}],interact:{position:new L(t,n,r),radius:1.5,id:a.id??`waystone`},materials:[f,k],update:e=>{j=(j+e)%1e3,w.position.y=E+Math.sin(j*1.7)*.06,w.rotation.y=(w.rotation.y+e*.7)%ip}});return M.controls=ee,M.crystal=w,M}var pp=new L,mp=new _,hp=new _,gp=class{constructor({textures:e,seed:t=42}={}){if(!e)throw Error("PropFactory: `textures` (TextureLibrary) is required");this.textures=e,this.seed=t>>>0,this.extra=new cf(this.seed^24301),this._geometries=new Set,this._materials=new Map,this._flameMaterials=new Set,this._ownMaterials=new Set}house(e,t,n,{width:r=4,depth:i=3,stories:a=1,roof:o=`roof_red`,wall:s=`timber_frame`,rotation:c=0,chimney:l=!0,door:u=`front`,...d}={}){return xf(this,e,t,n,{width:r,depth:i,stories:a,roof:o,wall:s,rotation:c,chimney:l,door:u,...d})}tree(e,t,n,{kind:r=`oak`,height:i=4.5,seed:a,...o}={}){return Af(this,e,t,n,{kind:r,height:i,seed:a,...o})}lamppost(e,t,n,r={}){return Pf(this,e,t,n,r)}wallTorch(e,t,n,r={}){return Ff(this,e,t,n,r)}campfire(e,t,n,r={}){return If(this,e,t,n,r)}fence(e,t,n,r,i,a={}){return Gf(this,e,t,n,r,i,a)}well(e,t,n,r={}){return zf(this,e,t,n,r)}marketStall(e,t,n,{cloth:r=`cloth_stripe`,rotation:i,...a}={}){return Bf(this,e,t,n,{cloth:r,rotation:i,...a})}barrel(e,t,n,r={}){return qf(this,e,t,n,r)}crate(e,t,n,r={}){return Jf(this,e,t,n,r)}crateStack(e,t,n,r={}){return Yf(this,e,t,n,r)}bridge(e,t,n,r,i,{width:a=2,...o}={}){return Hf(this,e,t,n,r,i,{width:a,...o})}signpost(e,t,n,r={}){return Xf(this,e,t,n,r)}rock(e,t,n,{size:r=1,...i}={}){return ep(this,e,t,n,{size:r,...i})}bench(e,t,n,r={}){return tp(this,e,t,n,r)}windmill(e,t,n,r={}){return Uf(this,e,t,n,r)}haystack(e,t,n,r={}){return np(this,e,t,n,r)}flowerbox(e,t,n,r={}){return rp(this,e,t,n,r)}chest(e,t,n,r={}){return dp(this,e,t,n,r)}waystone(e,t,n,r={}){return fp(this,e,t,n,r)}dispose(){for(let e of this._geometries)e.dispose();this._geometries.clear();for(let e of this._materials.values())e.userData.depthMaterial?.dispose(),e.dispose();this._materials.clear();for(let e of this._flameMaterials)e.dispose();this._flameMaterials.clear();for(let e of this._ownMaterials)e.dispose();this._ownMaterials.clear(),this.extra.dispose()}mergeStatic(e,{name:t=`props:static`,maxTriangles:n=1/0,maxExtent:r=1/0,minTriangles:i=0,shadowCasters:a=null}={}){let o=new Map,s=[],c=(e,t)=>{if(!e.userData.dynamic){t(e);for(let n of e.children)c(n,t)}};for(let t of e){let e=t?.object??t;if(!e?.isObject3D)continue;e.updateWorldMatrix(!0,!0);let n=e.parent?mp.copy(e.parent.matrixWorld).invert():null;c(e,e=>{if(!e.isMesh||!this._geometries.has(e.geometry))return;let t=e.material;if(Array.isArray(t)||t.isShaderMaterial||t.userData.wind||(hp.copy(e.matrixWorld),n&&hp.premultiply(n),hp.determinant()<0))return;let r=`${t.uuid}|${+e.castShadow}|${+e.receiveShadow}`,i=o.get(r);i||(i={material:t,castShadow:e.castShadow,receiveShadow:e.receiveShadow,depth:e.customDepthMaterial,geos:[],meshes:[],pos:[]},o.set(r,i)),i.geos.push(e.geometry.clone().applyMatrix4(hp)),i.meshes.push(e),i.pos.push([hp.elements[12],hp.elements[14]])})}let l=new Tt;l.name=t;let u=null;if(a){let e=[];for(let t of o.values()){let n=t.material;if(!(!t.castShadow||t.depth||n.isShaderMaterial||n.alphaTest>0&&(n.map||n.alphaMap)||n.alphaToCoverage)){t.proxied=!0;for(let r of t.geos)e.push({geometry:r,side:n.side})}}u=pf(e,{name:`${t}:shadow`,...a}),l.add(u.object)}for(let e of o.values()){let a=e.geos.map((e,t)=>t),o=Number.isFinite(n)||Number.isFinite(r)?du(a,{x:t=>e.pos[t][0],z:t=>e.pos[t][1],weight:t=>fu(e.geos[t]),maxWeight:n,maxExtent:r,minWeight:i}):[a],c=`${t}:${e.material.userData.texture||e.material.name||`mat`}`,u=!0,d=[];for(let t=0;t<o.length&&u;t++){let n=lu(o[t].map(t=>e.geos[t]),!1);if(!n){u=!1;break}n.computeBoundingSphere(),n.computeBoundingBox();let r=new R(n,e.material);r.name=o.length>1?`${c}#${t}`:c,r.castShadow=e.castShadow&&!e.proxied,r.receiveShadow=e.receiveShadow,e.depth&&(r.customDepthMaterial=e.depth),r.matrixAutoUpdate=!1,d.push(r)}for(let t of e.geos)t.dispose();if(!u){for(let e of d)e.geometry.dispose();continue}for(let e of d)l.add(e),s.push(e),this._geometries.add(e.geometry);for(let t of e.meshes)t.removeFromParent(),t.geometry.dispose(),this._geometries.delete(t.geometry)}return{object:l,meshes:s,dispose:()=>{for(let e of s)e.geometry.dispose(),this._geometries.delete(e.geometry);u?.dispose(),l.removeFromParent()}}}rng(e,t,n,r){let i=j(e)^Math.floor(A(Math.round(t*16),Math.round(n*16),this.seed)*4294967296)^(r==null?0:Math.imul((r|0)+2654435769,2246822507));return new c(i>>>0)}builder(e=null){return new Fd(this.textures,{ao:e})}track(e){for(let t of e)this._geometries.add(t)}finish(e,t,n,r,i,a=0){let{group:o,geometries:s}=e.build(t);return this.track(s),o.position.set(n,r,i),o.rotation.y=a,o.updateMatrixWorld(!0),o.userData.geometries=s,o}world(e,t){return new L().copy(t).applyMatrix4(e.matrixWorld)}boxCollider(e,t,n,r,i){return{type:`box`,...this.localRect(e,t,n,r,i)}}localRect(e,t,n,r,i){let a=1/0,o=-1/0,s=1/0,c=-1/0;for(let[l,u]of[[t,r],[n,r],[n,i],[t,i]])pp.set(l,0,u).applyMatrix4(e.matrixWorld),a=Math.min(a,pp.x),o=Math.max(o,pp.x),s=Math.min(s,pp.z),c=Math.max(c,pp.z);return{minX:a,maxX:o,minZ:s,maxZ:c}}result(e,t={}){let n={object:e,colliders:t.colliders??[],lights:t.lights??[],emissives:_p(t.emissives??[]),emitters:t.emitters??[],...t};n.emissives=_p(n.emissives);let r=t.flames??[];delete n.flames;let i=t.materials??[];delete n.materials;for(let e of i)this._ownMaterials.add(e);return n.dispose=()=>{e.traverse(e=>{e.geometry&&this._geometries.has(e.geometry)&&(e.geometry.dispose(),this._geometries.delete(e.geometry))});for(let e of r)for(let t of e.materials)t.dispose(),this._flameMaterials.delete(t);for(let e of i)e.dispose(),this._ownMaterials.delete(e);e.removeFromParent()},n}flame(e){let t=Zd(e);this.track(t.geometries);for(let e of t.materials)this._flameMaterials.add(e);return t}windowMaterial(){return this.textures.material(`window`,{vertexColors:!0,emissiveIntensity:0})}glassMaterial(){return this.textures.material(`lantern_glass`,{vertexColors:!0,emissiveIntensity:0})}windMaterial(e){return this._cachedMaterial(`wind:${e}`,()=>{let t=this._source(e),n=new st({map:t.map,normalMap:t.normalMap,normalScale:t.normalScale.clone(),vertexColors:!0});return n.name=`lumina:wind:${e}`,n.userData.units=t.units,Vd(n,{foliage:!1})})}foliageMaterial(e,{billboard:t=!1}={}){return this._cachedMaterial(`foliage:${e}:${t}`,()=>{let n=this._source(e),r=new st({map:n.map,normalMap:n.normalMap,normalScale:n.normalScale.clone().multiplyScalar(.8),vertexColors:!0,alphaTest:.5,side:2});return r.name=`lumina:foliage:${e}`,r.userData.units=n.units,Vd(r,{foliage:!0,wrap:.5,billboard:t})})}decalMaterial(e){return this._cachedMaterial(`decal:${e}`,()=>{let t=this.extra.textures(e),n=new st({map:t.map,normalMap:t.normal,vertexColors:!0,alphaTest:.5,side:2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return n.name=`lumina:decal:${e}`,n.userData.units=t.units,n.userData.castShadow=!1,n})}rockGeom(e,t,n,r,i,a,o){return $f(e,t,n,r,i,a,o)}_cachedMaterial(e,t){let n=this._materials.get(e);return n||(n=t(),this._materials.set(e,n)),n}_source(e){if(this.textures.has(e)){let t=this.textures.material(e);return{map:t.map,normalMap:t.normalMap,normalScale:t.normalScale,units:this.textures.meta(e).units}}let t=this.extra.textures(e);return{map:t.map,normalMap:t.normal,normalScale:new q(.6,.6),units:t.units}}};function _p(e){let t=new Set,n=[];for(let r of e)t.has(r.material)||(t.add(r.material),n.push(r));return n}var vp={campfire:0,wallTorch:1,light:1,lamppost:2,house:3},yp=class{constructor({textures:e,seed:t=42,factory:n=null}){this.textures=e,this.factory=n??new gp({textures:e,seed:t}),this._ownsFactory=!n}static isBuildable(e){return p[e]?.kind===`prop`}build(e,t){let n=p[e.type];if(!n||n.kind!==`prop`&&e.type!==`enemy`)return null;let r=this.factory,i=(e,n)=>t.getHeight(e,n),a=e.rotation??0,o={...e.opts??{},id:e.id};n.rotatable&&(o.rotation=a);let s=null,c=null;switch(e.type){case`house`:case`windmill`:case`well`:case`marketStall`:case`lamppost`:case`campfire`:case`bench`:case`barrel`:case`crate`:case`crateStack`:case`flowerbox`:case`signpost`:case`rock`:case`haystack`:case`chest`:case`waystone`:e.type===`house`&&!o.upperWall&&delete o.upperWall,s=r[e.type](e.x,i(e.x,e.z),e.z,o);break;case`enemy`:return null;case`tree`:s=r.tree(e.x,i(e.x,e.z),e.z,o),e.collider===!1&&(s.colliders=[]);break;case`wallTorch`:{let t=e.x+Math.sin(a)*.6,n=e.z+Math.cos(a)*.6;s=r.wallTorch(e.x,i(t,n)+(e.dy??2.1),e.z,o);break}case`light`:{let t=new Tt;t.name=`light:${e.id}`;let n=i(e.x,e.z)+(e.dy??1.5);t.position.set(e.x,n,e.z),s={object:t,colliders:[],emissives:[],emitters:[],lights:[{position:new L(e.x,n,e.z),color:e.color??`#ffb46b`,intensity:e.intensity??8,distance:e.distance??8,flicker:e.flicker??.2,nightOnly:e.nightOnly??!0}],dispose:()=>t.removeFromParent()};break}case`fence`:s=r.fence(e.x0,e.z0,e.x1,e.z1,i((e.x0+e.x1)/2,(e.z0+e.z1)/2),o),c=new L((e.x0+e.x1)/2,0,(e.z0+e.z1)/2);break;case`bridge`:{let n=e.deckY??bp(t,e);s=r.bridge(e.x0,e.z0,e.x1,e.z1,n,o),c=new L((e.x0+e.x1)/2,n,(e.z0+e.z1)/2);break}case`waterfall`:{let n=xp(t,e);s={object:n.object,colliders:[],emissives:[],lights:[],emitters:n.emitters??[],update:n.update,dispose:()=>{n.dispose(),n.object.removeFromParent()},waterfall:n},c=new L(e.x,n.bottom,e.z);break}default:return null}let l=(s.lights??[]).map(t=>({...t,tag:`${e.type}:${e.id}`,priority:vp[e.type]??3}));return e.type===`house`&&!e.light&&(l.length=0),c||=new L(e.x,i(e.x,e.z),e.z),c.y===0&&e.type===`fence`&&(c.y=i(c.x,c.z)),s.object.userData.levelObjectId=e.id,{object:s.object,colliders:s.colliders??[],walkRects:s.walkRects??[],lights:l,emissives:s.emissives??[],emitters:s.emitters??[],update:s.update??null,interact:s.interact??null,anchor:c,source:e,propResult:e.type===`light`||e.type===`waterfall`?null:s,dispose:()=>s.dispose?.()}}dispose(){this._ownsFactory&&this.factory.dispose()}};function bp(e,t){let n=t.x1-t.x0,r=t.z1-t.z0,i=Math.hypot(n,r)||1,a=n/i,o=r/i,s=(t,n)=>{let r=e.tileAt(Math.floor(t),Math.floor(n));return r&&!r.water&&!r.type?.void?e.getHeight(t,n):null},c=s(t.x0-a*.5,t.z0-o*.5),l=s(t.x1+a*.5,t.z1+o*.5),u=-1/0;for(let i of[0,.25,.5,.75,1]){let a=e.getWaterSurface(t.x0+n*i,t.z0+r*i);a!=null&&a>u&&(u=a)}let d=c??l;return d==null?u>-1/0?u+.3:e.getHeight(t.x0,t.z0):u>-1/0?Math.max(d,u+.1):d}function xp(e,t){let[n,r]=yd(t.facing),i=(t,n)=>e.getWaterSurface(t,n)??e.getHeight(t,n),a=i(t.x-n*.5+.01,t.z-r*.5+.01),o=i(t.x+n*.5+.01,t.z+r*.5+.01),s=bd({x:t.x,z:t.z,width:t.width??2,top:a,bottom:Math.min(o,a-.05),facing:t.facing??`S`});return s.top=a,s.bottom=o,s}function Sp(e,{textures:t,chunkSize:n=32,tileMapOptions:r={},deferShore:i=!1}){let a=new id(re(e),{textures:t,chunkSize:n,...r}),o=new Tt;o.name=`terrain:${e.name}`,o.add(a.object);let s=null;return e.tiles.some(t=>[...t].some(t=>e.legend[t]?.water))&&(s=new pd(a,{flow:e.water?.flow??[0,.45],reflect:e.water?.reflect??.2,neutral:e.water?.neutral??.2,glint:Cp(e),deferShore:i}),o.add(s.object)),{tileMap:a,water:s,object:o,dispose:()=>{s?.dispose(),a.dispose(),o.removeFromParent()}}}function Cp(e){let t=e?.water?.glint,n=Number(t);return t!==null&&t!==``&&Number.isFinite(n)?Math.max(0,n):1}function wp(e,t=3){let n=1/0,r=-1/0,i=1/0,a=-1/0;if(e.tiles.forEach((t,o)=>{for(let s=0;s<t.length;s++){let c=e.legend[t[s]];!c||c.void||c.water||c.walkable===!1||(n=Math.min(n,s),r=Math.max(r,s+1),i=Math.min(i,o),a=Math.max(a,o+1))}}),!Number.isFinite(n))return{minX:0,maxX:e.width,minZ:0,maxZ:e.depth};let o=(n+r)/2,s=(i+a)/2,c=Math.max(0,(r-n)/2-t),l=Math.max(0,(a-i)/2-t);return{minX:o-c,maxX:o+c,minZ:s-l,maxZ:s+l}}var Tp=At({FOREST_KINDS:()=>Op,buildOuterGround:()=>Pp,forestKindAreas:()=>kp,makeOuterHeight:()=>Np,mergeTrees:()=>Dp,outerGroundSteps:()=>Fp,scatterForest:()=>Ap}),Ep=new L;function Dp(e,{name:t=`trees`,castShadow:n=!0,maxTriangles:r=1/0,maxExtent:i=1/0,minTriangles:a=0}={}){let o=new Map;for(let t of e){let e=t.object;e.updateWorldMatrix(!0,!0);let r=A(Math.round(e.position.x*7),Math.round(e.position.z*7),3)*Math.PI*2;e.traverse(t=>{if(!t.isMesh||Array.isArray(t.material))return;let i=t.material,a=n&&t.castShadow,s=`${i.uuid}|${+a}|${+t.receiveShadow}`,c=o.get(s);c||(c={material:i,castShadow:a,receiveShadow:t.receiveShadow,depth:t.customDepthMaterial,geos:[],pos:[]},o.set(s,c));let l=t.geometry.clone();l.applyMatrix4(t.matrixWorld);let u=l.getAttribute(`aCenter`);if(u)for(let e=0;e<u.count;e++)Ep.fromBufferAttribute(u,e).applyMatrix4(t.matrixWorld),u.setXYZ(e,Ep.x,Ep.y,Ep.z);let d=l.getAttribute(`aPhase`);if(d)for(let e=0;e<d.count;e++)d.setX(e,d.getX(e)+r);c.geos.push(l),c.pos.push([e.position.x,e.position.z])}),t.dispose?.()}let s=new Tt;s.name=t;let c=[];for(let e of o.values()){let n=e.geos.map((e,t)=>t),o=Number.isFinite(r)||Number.isFinite(i)?du(n,{x:t=>e.pos[t][0],z:t=>e.pos[t][1],weight:t=>fu(e.geos[t]),maxWeight:r,maxExtent:i,minWeight:a}):[n];o.forEach((n,r)=>{let i=lu(n.map(t=>e.geos[t]),!1);if(!i)return;i.computeBoundingSphere(),i.computeBoundingBox(),i.boundingSphere.radius+=1.8,i.boundingBox.expandByScalar(1.8);let a=new R(i,e.material);a.name=`${t}:${e.material.name||`mat`}${o.length>1?`#${r}`:``}`,a.castShadow=e.castShadow,a.receiveShadow=e.receiveShadow,e.depth&&(a.customDepthMaterial=e.depth),a.matrixAutoUpdate=!1,s.add(a),c.push(a)});for(let t of e.geos)t.dispose()}return{object:s,meshes:c,dispose(){for(let e of c)e.geometry.dispose();s.removeFromParent()}}}var Op=Object.freeze([`oak`,`pine`,`birch`,`autumn`]);function kp(e){let t=e?.forest&&typeof e.forest==`object`&&Array.isArray(e.forest.areas)?e.forest.areas:[],n=[];for(let e of t){if(!e||typeof e!=`object`||![`minX`,`maxX`,`minZ`,`maxZ`].every(t=>Number.isFinite(e[t])))continue;let t=e.kinds&&typeof e.kinds==`object`?e.kinds:{},r=Op.map(e=>[e,Number.isFinite(t[e])&&t[e]>0?t[e]:0]).filter(([,e])=>e>0),i=r.reduce((e,[,t])=>e+t,0);if(!(i>0))continue;let a=0,o=r.map(([e,t])=>[e,a+=t/i]);n.push({minX:e.minX,maxX:e.maxX,minZ:e.minZ,maxZ:e.maxZ,cumulative:o})}return n}function Ap({tileMap:e,heightAt:t,seed:n=77,avoid:r=[],southGap:i=0,kindAreas:a=[]}){let o=e.width,s=e.depth,l=new c(n),u=[],d=[],f=[],p=1.35,m=new Map,h=(e,t)=>`${Math.floor(e/p)},${Math.floor(t/p)}`,g=(e,t,n)=>{let i=Math.floor(e/p),a=Math.floor(t/p);for(let r=-2;r<=2;r++)for(let o=-2;o<=2;o++){let s=m.get(`${i+o},${a+r}`);if(s){for(let r of s)if((r.x-e)**2+(r.z-t)**2<(r.r+n)**2)return!1}}for(let i of r)if((i.x-e)**2+(i.z-t)**2<(i.r+n)**2)return!1;return!0},_=(e,t,n)=>{let r={x:e,z:t,r:n};f.push(r);let i=h(e,t),a=m.get(i);a||m.set(i,a=[]),a.push(r)},v=(e,t,r)=>{for(let n=0;n<a.length;n++){let i=a[n];if(!(e<i.minX||e>=i.maxX||t<i.minZ||t>=i.maxZ)){for(let[e,t]of i.cumulative)if(r<t)return e;return i.cumulative[i.cumulative.length-1][0]}}let i=t<6,s=e>o*.72&&t>8,c=Ke(e*.09,t*.09,{seed:n+5,octaves:2});return i?r<.5?`pine`:r<.82?`oak`:`birch`:s?r<.5?`autumn`:r<.78?`oak`:r<.9?`pine`:`birch`:c>.55?r<.6?`pine`:`oak`:r<.62?`oak`:r<.82?`pine`:r<.93?`birch`:`autumn`};e.forEachTile((e,t,n)=>{if(n.char!==`T`||t>=s-3)return;let r=t<3?1:2,i=t>=9?Math.min(e,o-1-e):-1;for(let a=0;a<r;a++){let r=e+l.range(.1,.9),a=t+l.range(.1,.9),o=l.range(.85,1.25);if(!g(r,a,o))continue;let s=v(r,a,l.next()),c=(s===`pine`?5.4:s===`birch`?5.2:5)*l.range(.85,1.25)*(i===1?.8:1);i!==2&&(_(r,a,o),u.push([s,r,n.h,a,c]))}});let y=Mp(e,jp);for(let e=0;e<5200;e++){let e=l.range(-34,o+34),r=l.range(-44,s+20.4),a=Math.max(0,-e,e-o),c=Math.max(0,-r,r-s),u=Math.hypot(a,c);if(u<.6||i>0&&r>s&&r<s+i||u<jp&&y?.(e,r))continue;let f=Ke(e*.075+11,r*.075-4,{seed:n+2,octaves:3}),p=1-x(4,30,u),m=K((f-.42)*2.6+p*(r<0?.35:.75),0,1)*(1-x(24,34,u)*.85);if(l.next()>m)continue;let h=l.range(.95,1.5);if(!g(e,r,h))continue;_(e,r,h);let b=v(e,r,l.next()),S=b===`pine`?5.8:5.2;d.push([b,e,t(e,r),r,S*l.range(.85,1.35)])}return{border:u,outer:d}}var jp=2.5;function Mp(e,t){let n=e.width,r=e.depth,i=(t,n)=>{let r=e.tileAt(t,n);return!!r&&!r.water&&!r.type?.void&&(r.type?.walkable??!0)!==!1},a=new Set,o=(e,t)=>{let r=[];for(let o=0;o<=e;o++){let s=o<e?t(o):null;if(s&&i(s[0],s[1])){r.push(s);continue}if(r.length>=3)for(let[e,t]of r)a.add(t*n+e);r=[]}};return o(n,e=>[e,0]),o(n,e=>[e,r-1]),o(r,e=>[0,e]),o(r,e=>[n-1,e]),a.size?(e,i)=>{let o=Math.max(0,Math.floor(e-t)),s=Math.min(n-1,Math.floor(e+t)),c=Math.max(0,Math.floor(i-t)),l=Math.min(r-1,Math.floor(i+t));for(let r=c;r<=l;r++)for(let c=o;c<=s;c++){if(!a.has(r*n+c))continue;let o=Math.max(0,c-e,e-(c+1)),s=Math.max(0,r-i,i-(r+1));if(o*o+s*s<t*t)return!0}return!1}:null}function Np(e){let t=e.width,n=e.depth,r=(r,i)=>{let a=-1/0;for(let o of[-.5,.5])for(let s of[-.5,.5]){let c=K(Math.floor(r+o),0,t-1),l=K(Math.floor(i+s),0,n-1),u=e.tileAt(c,l);if(!u)continue;let d=u.water?Math.max(u.h,.5):u.h;d>a&&(a=d)}return Number.isFinite(a)?a:0};return(e,i)=>{let a=K(e,0,t),o=K(i,0,n),s=e-a,c=i-o,l=Math.hypot(s,c),u=r(a,o)-.04;if(l<1e-6)return u;let d=(Ke(e*.05,i*.05,{seed:91,octaves:3})-.5)*3.2,f=x(0,10,l),p=u+d*f,m=x(2,-30,i);p+=m*(x(0,40,-i)*7+Ke(e*.03,i*.04,{seed:17,octaves:4})*9*x(-6,-40,i));let h=x(-55,-120,i);p+=h*(18+Ke(e*.018,3.1,{seed:23,octaves:4})*34);let g=x(18,90,Math.max(-e,e-t,i-n));return p+=g*(4+Ke(e*.02,i*.02,{seed:29,octaves:3})*14),Math.max(p,u-.6*f)}}function Pp(e){let t=Fp(e),n=t.next();for(;!n.done;)n=t.next();return n.value}function*Fp({textures:e,tileMap:t,heightAt:n,extent:r=170,rowsPerStep:i=12}){let a=t.width,o=t.depth,s=(e,t)=>{let n=new Set;for(let t=e-r;t<e-40;t+=10)n.add(t);for(let t=e-40;t<e-16;t+=2)n.add(t);for(let r=e-16;r<=t+16;r+=1)n.add(r);for(let e=t+16;e<=t+40;e+=2)n.add(e);for(let e=t+40;e<=t+r;e+=10)n.add(e);return[...n].sort((e,t)=>e-t)},c=s(0,a),l=s(0,o),u=c.length,d=l.length,f=new Float32Array(u*d*3),p=new Float32Array(u*d*2),m=new Float32Array(u*d*3),h=new Float32Array(u*d);for(let e=0;e<d;e++){for(let t=0;t<u;t++){let r=c[t],i=l[e];h[e*u+t]=n(r,i)}e%i===i-1&&(yield)}let _=e.meta(`grass_dark`).units,v=new B,y=new B(1,1,1),b=new B(.78,.86,.72),S=new B(.62,.6,.66);for(let e=0;e<d;e++){for(let t=0;t<u;t++){let n=e*u+t,r=c[t],i=l[e],s=h[n];f[n*3]=r,f[n*3+1]=s,f[n*3+2]=i,p[n*2]=r/_[0],p[n*2+1]=-i/_[1];let g=h[e*u+Math.max(0,t-1)],C=h[e*u+Math.min(u-1,t+1)],w=h[Math.max(0,e-1)*u+t],T=h[Math.min(d-1,e+1)*u+t],E=(C-g)/Math.max(.001,c[Math.min(u-1,t+1)]-c[Math.max(0,t-1)]),D=(T-w)/Math.max(.001,l[Math.min(d-1,e+1)]-l[Math.max(0,e-1)]),O=Math.hypot(E,D),k=Math.max(0,-r,r-a),A=Math.max(0,-i,i-o),ee=Math.hypot(k,A);v.copy(y).lerp(b,x(20,80,ee)).lerp(S,x(.55,1.2,O));let j=I(.62,1,x(0,14,ee))*(.9+.2*Ke(r*.11,i*.11,{seed:4,octaves:2}));m[n*3]=v.r*j,m[n*3+1]=v.g*j,m[n*3+2]=v.b*j}e%i===i-1&&(yield)}let C=[];for(let e=0;e<d-1;e++)for(let t=0;t<u-1;t++){let n=(c[t]+c[t+1])/2,r=(l[e]+l[e+1])/2;if(n>0&&n<a&&r>0&&r<o)continue;let i=e*u+t,s=i+1,d=i+u,f=d+1;C.push(i,d,s,s,d,f)}let w=new T;w.setAttribute(`position`,new g(f,3)),w.setAttribute(`uv`,new g(p,2)),w.setAttribute(`color`,new g(m,3)),w.setIndex(C),w.computeVertexNormals(),w.computeBoundingSphere();let E=e.material(`grass_dark`,{vertexColors:!0,normalScale:.35}),D=new R(w,E);return D.name=`OuterGround`,D.receiveShadow=!0,D.castShadow=!1,D.matrixAutoUpdate=!1,D.updateMatrix(),D}function Ip(e){let t=e.map(({kind:e,seed:t})=>Ic(e,{seed:t})),n=Math.max(...t.map(e=>e.frameWidth))+2,r=Math.max(...t.map(e=>e.frameHeight))+1,i=document.createElement(`canvas`);i.width=n*t.length,i.height=r;let a=i.getContext(`2d`);return a.imageSmoothingEnabled=!1,t.forEach((e,t)=>{let i=t*n+Math.floor((n-e.frameWidth)/2),o=r-e.frameHeight;a.drawImage(e.canvas,0,0,e.frameWidth,e.frameHeight,i,o,e.frameWidth,e.frameHeight),e.dispose()}),{texture:Qe(i,{wrap:`clamp`,mipmaps:!1,srgb:!0,name:`foliage-strip`}),width:n,height:r,pixelsPerUnit:16,anchor:[.5,0],frames:t.length}}var Lp=new Set([`g`,`G`,`f`]),Rp=[1,2,3,1,2];function zp({tileMap:e,isFree:t,seed:n=2024,houses:r=[],trees:i=[],clearings:a=[],flowerAreas:o=[],shrubAreas:s=[],maxInstances:l=1/0}){let u=new c(n),d=new Tt;d.name=`GroundDetail`;let f=[],p=[],m=[],h=[],g=(e,t)=>{for(let n=0;n<a.length;n++){let r=a[n];if((e-r.x)**2+(t-r.z)**2<r.r*r.r)return!0}return!1},_=(e,t,n)=>{for(let r=0;r<e.length;r++){let i=e[r];if(t>=i.minX&&t<i.maxX&&n>=i.minZ&&n<i.maxZ)return i}return null},v=(t,n,r)=>{for(let i=-1;i<=1;i++)for(let a=-1;a<=1;a++){if(!a&&!i)continue;let o=e.tileAt(t+a,n+i);if(o&&r(o))return!0}return!1};e.forEachTile((e,r,i)=>{let a=i.char,c=i.h,l=a===`T`;if(Lp.has(a)||l){let i=Ke(e*.23,r*.23,{seed:n+1,octaves:3}),d=l?2:3+(i>.55?2:0);for(let n=0;n<d;n++){let n=e+u.next(),a=r+u.next();if(!l&&!t(n,a))continue;let o=i>.58&&u.chance(.45),s=u.range(.7,1.05),d=u.chance(.25)?`#e2f2a8`:l?`#b8c8a0`:`#ffffff`,p=!l&&g(n,a);f.push({x:n,y:c,z:a,scale:p?s*.75:s,frame:o&&!p?1:0,tint:d})}let m=l?0:a===`f`?3:i>.6?1:+!!u.chance(.25),v=_(o,e,r)?.palette??Rp;for(let n=0;n<m;n++){let n=e+u.next(),i=r+u.next();if(!t(n,i))continue;let a=u.range(.75,1),o=v[u.int(0,v.length-1)];g(n,i)||p.push({x:n,y:c,z:i,scale:a,frame:o})}let y=l?.55:_(s,e,r)?.chance??.05;if(u.chance(y)){let n=e+u.range(.15,.85),i=r+u.range(.15,.85);if(l||t(n,i)){let e=u.next(),t=e<.45?0:e<.85?1:2,r=u.range(.8,1.2);(l||!g(n,i))&&h.push({x:n,y:c,z:i,scale:r,frame:t})}}if(!l&&u.chance(.035)){let n=e+u.next(),i=r+u.next();t(n,i)&&h.push({x:n,y:c,z:i,scale:u.range(.8,1.1),frame:3})}}else if(a===`s`){let n=v(e,r,e=>e.water),i=n?2:1;for(let a=0;a<i;a++){let i=e+u.next(),a=r+u.next();t(i,a)&&(n&&u.chance(.7)?m.push({x:i,y:c,z:a,scale:u.range(.75,1.1)}):h.push({x:i,y:c,z:a,scale:u.range(.7,1),frame:3}))}}else if(a===`F`)u.chance(.3)&&f.push({x:e+u.next(),y:c,z:r+u.next(),scale:u.range(.55,.75),frame:0,tint:`#d8e4a0`});else if(a===`d`||a===`.`){if(u.chance(.12)){let n=e+u.next(),i=r+u.next();t(n,i)&&f.push({x:n,y:c,z:i,scale:u.range(.5,.7),frame:0,tint:`#d8e0a0`})}}else a===`m`&&u.chance(.35)&&h.push({x:e+u.next(),y:c,z:r+u.next(),scale:u.range(.7,1),frame:u.chance(.5)?1:3})});let y=(t,n)=>{let r=e.tileAt(Math.floor(t),Math.floor(n));return r&&Lp.has(r.char)?r:null},b=(e,n,r,i)=>{let a=y(e,n);return!a||!t(e,n)||g(e,n)?!1:(h.push({x:e,y:a.h,z:n,scale:i,frame:r}),!0)};for(let e of r){let t=[[e.minX,e.maxZ,e.maxX,e.maxZ,0,1],[e.minX,e.minZ,e.maxX,e.minZ,0,-1],[e.minX,e.minZ,e.minX,e.maxZ,-1,0],[e.maxX,e.minZ,e.maxX,e.maxZ,1,0]];for(let[n,r,i,a,o,s]of t){let t=Math.hypot(i-n,a-r),c=Math.max(1,Math.round(t/.95));for(let t=0;t<c;t++){if(!u.chance(.62))continue;let l=(t+u.range(.2,.8))/c,d=u.range(.28,.55),f=n+(i-n)*l+o*d,p=r+(a-r)*l+s*d;e.door&&Math.hypot(f-e.door.x,p-e.door.z)<1.25||b(f,p,u.next()<.62?0:1,u.range(.75,1.1))}}}for(let e of i){let t=u.int(1,3);for(let n=0;n<t;n++){let t=u.range(0,Math.PI*2),n=(e.r??.3)+u.range(.35,.8);b(e.x+Math.cos(t)*n,e.z+Math.sin(t)*n,+!!u.chance(.6),u.range(.7,1.05))}}let x=[],S=(e,t,r,i={})=>{if(!r.length)return[];let a=r.length>l?du(r,{x:e=>e.x,z:e=>e.z,maxWeight:l}):[r];return a.map((t,n)=>[a.length>1?`${e}#${n}`:e,t]).map(([e,r])=>{let a=new rl({sprite:t,instances:r,name:e,seed:n+x.length,...i});return d.add(a.object),x.push(a),a})},C=Ip([{kind:`grass_tuft`},{kind:`grass_tall`}]),w=Ip([{kind:`flower_red`},{kind:`flower_yellow`},{kind:`flower_white`},{kind:`flower_blue`}]),T=Ip([{kind:`bush`},{kind:`fern`},{kind:`mushroom`},{kind:`rock_small`}]),E=Ic(`reeds`);S(`Foliage:grass`,C,f,{wind:1}),S(`Foliage:flowers`,w,p,{wind:1.1}),S(`Foliage:reeds`,E,m,{wind:1.4});for(let e of S(`Foliage:shrubs`,T,h,{wind:.5,rootDarken:.25}))e.castShadow=!0;return{fields:x,object:d,stats:{grass:f.length,flowers:p.length,reeds:m.length,shrubs:h.length},dispose(){for(let e of x)e.dispose();C.texture.dispose(),w.texture.dispose(),T.texture.dispose(),E.dispose()}}}var Bp={value:0},Vp=`
	{
		vec3 snowN = inverseTransformDirection( normal, viewMatrix );
		float snowUp = smoothstep( 0.5, 0.86, snowN.y );
		float snowL = dot( diffuseColor.rgb, vec3( 0.299, 0.587, 0.114 ) );
		float snowK = uSnowCover * snowUp * ( 0.7 + 0.25 * smoothstep( 0.02, 0.2, snowL ) );
		diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 0.8, 0.84, 0.92 ) * ( 0.82 + 0.3 * smoothstep( 0.0, 0.3, snowL ) ), snowK );
	}
`,Hp=`
	{
		float snowL = dot( diffuseColor.rgb, vec3( 0.299, 0.587, 0.114 ) );
		float snowK = uSnowCover * smoothstep( 0.2, 0.95, vQuadUv.y ) * 0.72;
		diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 0.78, 0.83, 0.9 ) * ( 0.7 + 0.6 * sqrt( snowL ) ), snowK );
	}
`;function Up(e,t=`ground`){if(!e||e.userData.luminaSnow)return;e.userData.luminaSnow=t;let n=e.onBeforeCompile,r=e.customProgramCacheKey();e.onBeforeCompile=function(e,r){n.call(this,e,r),e.uniforms.uSnowCover=Bp;let i=t===`foliage`?Hp:Vp;e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uSnowCover;`).replace(`#include <emissivemap_fragment>`,`${i}\n#include <emissivemap_fragment>`)},e.customProgramCacheKey=()=>`${r}|lumina-snow-${t}`,e.needsUpdate=!0}var Wp=/^lumina:roof/;function Gp(e,{roofsOnly:t=!1}={}){e?.traverse(e=>{let n=e.isMesh?e.material:null;!n||Array.isArray(n)||n.userData.luminaSnow||(!t||Wp.test(n.name??``))&&Up(n,`ground`)})}var Kp=Object.freeze({distance:30,pitch:32,fov:28,minDistance:18,maxDistance:42}),qp=1/90,Jp=Object.freeze({noon:12.6,lat:32,dec:14,refTime:17.2,refAzimuth:-112}),Yp=Object.freeze({refAzimuth:40}),Xp=Object.freeze({night:{hemiI:1.6,hemiSky:`#3656c0`,hemiGround:`#1a2042`,sunI:1,exp:1.36},"late night":{hemiI:1.55,hemiSky:`#3656c0`,hemiGround:`#1a2042`,sunI:.9,exp:1.36},"blue hour":{hemiI:1.5,exp:1.36},sunset:{hemiI:1.45,exp:1.2},"purple dusk":{sunI:.85,hemiI:1.62,exp:1.46},"golden hour":{hemiGround:`#7a6058`,hemiSky:`#6a80d4`}}),Zp=Object.freeze({normalUp:.6,wrap:.6,roundness:.55,emissive:`#ffe9d2`,emissiveIntensity:.06}),Qp=Object.freeze({day:.05,night:.03}),$p=Object.freeze([.5,.62]),em=Object.freeze({sunMul:1,ambientMul:1,exposureMul:1,pointLightMul:1,temperature:0,saturation:0}),tm=Object.freeze({sunMul:.32,ambientMul:.78,exposureMul:.96,pointLightMul:1,temperature:.02,saturation:-.24});function nm(e){return e?.look===`dark-dungeon`?tm:em}var rm=[`clear`,`rain`,`snow`],im=Object.freeze({clear:Object.freeze({sun:1,ambient:1,fog:1,exposure:1,wind:1,windX:1,windZ:.35,temp:0,sat:0,rays:1,dust:1,bugs:1,leaves:1,rain:0,snow:0,overcast:0}),rain:Object.freeze({sun:.26,ambient:.9,fog:2.1,exposure:.92,wind:2.3,windX:2.2,windZ:.9,temp:-.12,sat:-.24,rays:0,dust:.15,bugs:0,leaves:1.6,rain:1,snow:0,overcast:.72}),snow:Object.freeze({sun:.45,ambient:1.15,fog:1.9,exposure:1.04,wind:1.3,windX:1.2,windZ:.5,temp:-.3,sat:-.42,rays:.25,dust:0,bugs:0,leaves:.3,rain:0,snow:1,overcast:.62})}),am=Object.keys(im.clear);function om(e){return typeof e==`string`&&Object.hasOwn(im,e)?e:`clear`}function sm(e){return im[om(e)]}function cm(e){return+(om(e)===`snow`)}var lm={rain:{preset:`rain`,count:2600,bounds:[44,16,44]},snow:{preset:`snow`,count:2400,bounds:[44,15,44],size:[.09,.15]}};function um(e,t={}){let n=lm[e];if(!n)throw Error(`precipitationEmitter: unknown kind "${e}"`);let r={preset:n.preset,...t,count:n.count,bounds:[...n.bounds]};return n.size&&(r.size=[...n.size]),r}function dm(e){return e<.02?0:e}function fm(e,t,{sunMul:n=1,ambientMul:r=1,exposureMul:i=1,pointLightMul:a=1}={}){e.sunMul=n*t.sun,e.ambientMul=r*t.ambient,e.exposureMul=i*t.exposure,e.pointLightMul=a}function pm(e,t=1){X.uWindStrength.value=t*e.wind,X.uWind.value.set(e.windX,e.windZ)}function mm(e,t,n,r){e.temperature=n+t.temp,e.saturation=r+t.sat}var hm=new B(.9,.97,1.12),gm=new B;function _m(e,t){if(t<=0)return e;let n=e.r*.2126+e.g*.7152+e.b*.0722;return gm.copy(hm).multiplyScalar(n),e.lerp(gm,t)}function vm(e,t){t>.002&&(_m(e.fog.color,t),_m(e.sun.color,t*.85),_m(e.hemi.color,t*.6),_m(e.hemi.groundColor,t*.6),X.uFogColor.value.copy(e.fog.color),_m(X.uSunColor.value,t*.85))}function ym(e,t){t?.look===`dark-dungeon`&&(_m(e.fog.color,.85),_m(e.sun.color,.85),_m(e.hemi.color,.85),_m(e.hemi.groundColor,.85),X.uFogColor.value.copy(e.fog.color),_m(X.uSunColor.value,.85))}function bm(e){return I(.05,.45,e)}function xm(e,t,n){let r=bm(n);for(let t=0;t<e.length;t++)e[t].nightOnly&&(e[t].dayIntensity=r);t&&(t.nightDayIntensity=r)}function Sm(e,t){for(let n=0;n<e.length;n++)e[n].day=I(e[n].baseDay,e[n].night*.4,t)}function Cm(e,t){return I(.5,1,K(Math.max(e,t*.8)))}var wm=Object.freeze({fireflies:1,leaves:1,petals:1,dust:1,smoke:1,mist:1});function Tm(e,t,n=wm,r=0){switch(e){case`fireflies`:return n.fireflies*t.bugs;case`leaves`:return n.leaves*K(t.leaves,0,1)*(1-.6*r);case`petals`:return n.petals*K(1-t.rain-t.snow,0,1);case`dust`:return n.dust*t.dust;case`smoke`:return n.smoke;case`mist`:return n.mist;default:return null}}export{au as $,Bp as A,bp as B,Yp as C,Wp as D,qp as E,Np as F,lf as G,wp as H,Dp as I,pd as J,df as K,Fp as L,Tp as M,Pp as N,Gp as O,kp as P,nu as Q,Ap as R,Xp as S,Jp as T,Cp as U,Sp as V,pf as W,pu as X,yd as Y,lu as Z,sm as _,J as _t,xm as a,$c as at,Zp as b,At as bt,mm as c,to as ct,Tm as d,Fs as dt,Pl as et,Cm as f,Xs as ft,cm as g,X as gt,dm as h,na as ht,Sm as i,Sl as it,zp as j,Up as k,fm as l,Is as lt,um as m,ca as mt,am as n,kl as nt,ym as o,Qc as ot,nm as p,Na as pt,uf as q,im as r,il as rt,vm as s,Vc as st,rm as t,tu as tt,pm as u,Zs as ut,om as v,Nt as vt,Qp as w,$p as x,Kp as y,Y as yt,yp as z};