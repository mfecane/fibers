var jx=Object.defineProperty;var Jx=(l,e,t)=>e in l?jx(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var Dt=(l,e,t)=>(Jx(l,typeof e!="symbol"?e+"":e,t),t);const Qx=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}};Qx();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fc="141",Pr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},eM=0,Wh=1,tM=2,vd=1,nM=2,Cs=3,Is=0,Zn=1,fr=2,iM=1,Vi=0,jr=1,Hh=2,Vh=3,kh=4,rM=5,Zr=100,sM=101,aM=102,qh=103,Xh=104,oM=200,lM=201,cM=202,uM=203,xd=204,Md=205,hM=206,fM=207,dM=208,pM=209,mM=210,gM=0,_M=1,vM=2,nc=3,xM=4,MM=5,yM=6,SM=7,Ja=0,wM=1,bM=2,Si=0,EM=1,TM=2,AM=3,CM=4,LM=5,yd=300,Qr=301,es=302,ic=303,rc=304,Qa=306,sc=1e3,Xn=1001,ac=1002,un=1003,Yh=1004,Zh=1005,Pn=1006,RM=1007,eo=1008,dr=1009,DM=1010,PM=1011,Sd=1012,IM=1013,or=1014,lr=1015,Fs=1016,FM=1017,NM=1018,Jr=1020,OM=1021,UM=1022,Yn=1023,zM=1024,BM=1025,ur=1026,ts=1027,GM=1028,WM=1029,HM=1030,VM=1031,kM=1033,Ml=33776,yl=33777,Sl=33778,wl=33779,$h=35840,Kh=35841,jh=35842,Jh=35843,qM=36196,Qh=37492,ef=37496,tf=37808,nf=37809,rf=37810,sf=37811,af=37812,of=37813,lf=37814,cf=37815,uf=37816,hf=37817,ff=37818,df=37819,pf=37820,mf=37821,gf=36492,pr=3e3,Et=3001,XM=3200,YM=3201,is=0,ZM=1,yi="srgb",cr="srgb-linear",bl=7680,$M=519,_f=35044,vf="300 es",oc=1035;class gr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,u=s.length;o<u;o++)s[o].call(this,e);e.target=null}}}const Xt=[];for(let l=0;l<256;l++)Xt[l]=(l<16?"0":"")+l.toString(16);const El=Math.PI/180,xf=180/Math.PI;function Os(){const l=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[l&255]+Xt[l>>8&255]+Xt[l>>16&255]+Xt[l>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function tn(l,e,t){return Math.max(e,Math.min(t,l))}function KM(l,e){return(l%e+e)%e}function Tl(l,e,t){return(1-t)*l+t*e}function Mf(l){return(l&l-1)===0&&l!==0}function lc(l){return Math.pow(2,Math.floor(Math.log(l)/Math.LN2))}class He{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*i-u*s+e.x,this.y=o*s+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ii{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,s,o,u,c,d,f){const p=this.elements;return p[0]=e,p[1]=s,p[2]=c,p[3]=t,p[4]=o,p[5]=d,p[6]=i,p[7]=u,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,u=i[0],c=i[3],d=i[6],f=i[1],p=i[4],g=i[7],_=i[2],M=i[5],w=i[8],v=s[0],m=s[3],b=s[6],P=s[1],O=s[4],N=s[7],L=s[2],G=s[5],k=s[8];return o[0]=u*v+c*P+d*L,o[3]=u*m+c*O+d*G,o[6]=u*b+c*N+d*k,o[1]=f*v+p*P+g*L,o[4]=f*m+p*O+g*G,o[7]=f*b+p*N+g*k,o[2]=_*v+M*P+w*L,o[5]=_*m+M*O+w*G,o[8]=_*b+M*N+w*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],d=e[6],f=e[7],p=e[8];return t*u*p-t*c*f-i*o*p+i*c*d+s*o*f-s*u*d}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],d=e[6],f=e[7],p=e[8],g=p*u-c*f,_=c*d-p*o,M=f*o-u*d,w=t*g+i*_+s*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/w;return e[0]=g*v,e[1]=(s*f-p*i)*v,e[2]=(c*i-s*u)*v,e[3]=_*v,e[4]=(p*t-s*d)*v,e[5]=(s*o-c*t)*v,e[6]=M*v,e[7]=(i*d-f*t)*v,e[8]=(u*t-i*o)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,u,c){const d=Math.cos(o),f=Math.sin(o);return this.set(i*d,i*f,-i*(d*u+f*c)+u+e,-s*f,s*d,-s*(-f*u+d*c)+c+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),s=this.elements,o=s[0],u=s[3],c=s[6],d=s[1],f=s[4],p=s[7];return s[0]=t*o+i*d,s[3]=t*u+i*f,s[6]=t*c+i*p,s[1]=-i*o+t*d,s[4]=-i*u+t*f,s[7]=-i*c+t*p,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function wd(l){for(let e=l.length-1;e>=0;--e)if(l[e]>65535)return!0;return!1}function Ns(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function hr(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function Ka(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}const Al={[yi]:{[cr]:hr},[cr]:{[yi]:Ka}},Hn={legacyMode:!0,get workingColorSpace(){return cr},set workingColorSpace(l){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(l,e,t){if(this.legacyMode||e===t||!e||!t)return l;if(Al[e]&&Al[e][t]!==void 0){const i=Al[e][t];return l.r=i(l.r),l.g=i(l.g),l.b=i(l.b),l}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(l,e){return this.convert(l,this.workingColorSpace,e)},toWorkingColorSpace:function(l,e){return this.convert(l,e,this.workingColorSpace)}},bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ut={r:0,g:0,b:0},Vn={h:0,s:0,l:0},La={h:0,s:0,l:0};function Cl(l,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?l+(e-l)*6*t:t<1/2?e:t<2/3?l+(e-l)*6*(2/3-t):l}function Ra(l,e){return e.r=l.r,e.g=l.g,e.b=l.b,e}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Hn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=cr){return this.r=e,this.g=t,this.b=i,Hn.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=cr){if(e=KM(e,1),t=tn(t,0,1),i=tn(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,u=2*i-o;this.r=Cl(u,o,e+1/3),this.g=Cl(u,o,e),this.b=Cl(u,o,e-1/3)}return Hn.toWorkingColorSpace(this,s),this}setStyle(e,t=yi){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let o;const u=s[1],c=s[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(255,parseInt(o[1],10))/255,this.g=Math.min(255,parseInt(o[2],10))/255,this.b=Math.min(255,parseInt(o[3],10))/255,Hn.toWorkingColorSpace(this,t),i(o[4]),this;if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(100,parseInt(o[1],10))/100,this.g=Math.min(100,parseInt(o[2],10))/100,this.b=Math.min(100,parseInt(o[3],10))/100,Hn.toWorkingColorSpace(this,t),i(o[4]),this;break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c)){const d=parseFloat(o[1])/360,f=parseInt(o[2],10)/100,p=parseInt(o[3],10)/100;return i(o[4]),this.setHSL(d,f,p,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],u=o.length;if(u===3)return this.r=parseInt(o.charAt(0)+o.charAt(0),16)/255,this.g=parseInt(o.charAt(1)+o.charAt(1),16)/255,this.b=parseInt(o.charAt(2)+o.charAt(2),16)/255,Hn.toWorkingColorSpace(this,t),this;if(u===6)return this.r=parseInt(o.charAt(0)+o.charAt(1),16)/255,this.g=parseInt(o.charAt(2)+o.charAt(3),16)/255,this.b=parseInt(o.charAt(4)+o.charAt(5),16)/255,Hn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=yi){const i=bd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}copyLinearToSRGB(e){return this.r=Ka(e.r),this.g=Ka(e.g),this.b=Ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return Hn.fromWorkingColorSpace(Ra(this,Ut),e),tn(Ut.r*255,0,255)<<16^tn(Ut.g*255,0,255)<<8^tn(Ut.b*255,0,255)<<0}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=cr){Hn.fromWorkingColorSpace(Ra(this,Ut),t);const i=Ut.r,s=Ut.g,o=Ut.b,u=Math.max(i,s,o),c=Math.min(i,s,o);let d,f;const p=(c+u)/2;if(c===u)d=0,f=0;else{const g=u-c;switch(f=p<=.5?g/(u+c):g/(2-u-c),u){case i:d=(s-o)/g+(s<o?6:0);break;case s:d=(o-i)/g+2;break;case o:d=(i-s)/g+4;break}d/=6}return e.h=d,e.s=f,e.l=p,e}getRGB(e,t=cr){return Hn.fromWorkingColorSpace(Ra(this,Ut),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=yi){return Hn.fromWorkingColorSpace(Ra(this,Ut),e),e!==yi?`color(${e} ${Ut.r} ${Ut.g} ${Ut.b})`:`rgb(${Ut.r*255|0},${Ut.g*255|0},${Ut.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Vn),Vn.h+=e,Vn.s+=t,Vn.l+=i,this.setHSL(Vn.h,Vn.s,Vn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(La);const i=Tl(Vn.h,La.h,t),s=Tl(Vn.s,La.s,t),o=Tl(Vn.l,La.l,t);return this.setHSL(i,s,o),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ke.NAMES=bd;let Fr;class Ed{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fr===void 0&&(Fr=Ns("canvas")),Fr.width=e.width,Fr.height=e.height;const i=Fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Ns("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let u=0;u<o.length;u++)o[u]=hr(o[u]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hr(t[i]/255)*255):t[i]=hr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Td{constructor(e=null){this.isSource=!0,this.uuid=Os(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let u=0,c=s.length;u<c;u++)s[u].isDataTexture?o.push(Ll(s[u].image)):o.push(Ll(s[u]))}else o=Ll(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function Ll(l){return typeof HTMLImageElement!="undefined"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&l instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&l instanceof ImageBitmap?Ed.getDataURL(l):l.data?{data:Array.prototype.slice.call(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jM=0;class Fn extends gr{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,i=Xn,s=Xn,o=Pn,u=eo,c=Yn,d=dr,f=1,p=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=Os(),this.name="",this.source=new Td(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=u,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=d,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ii,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sc:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case ac:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sc:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case ac:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=yd;class Yt{constructor(e=0,t=0,i=0,s=1){this.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*s+u[12]*o,this.y=u[1]*t+u[5]*i+u[9]*s+u[13]*o,this.z=u[2]*t+u[6]*i+u[10]*s+u[14]*o,this.w=u[3]*t+u[7]*i+u[11]*s+u[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const d=e.elements,f=d[0],p=d[4],g=d[8],_=d[1],M=d[5],w=d[9],v=d[2],m=d[6],b=d[10];if(Math.abs(p-_)<.01&&Math.abs(g-v)<.01&&Math.abs(w-m)<.01){if(Math.abs(p+_)<.1&&Math.abs(g+v)<.1&&Math.abs(w+m)<.1&&Math.abs(f+M+b-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const O=(f+1)/2,N=(M+1)/2,L=(b+1)/2,G=(p+_)/4,k=(g+v)/4,A=(w+m)/4;return O>N&&O>L?O<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(O),s=G/i,o=k/i):N>L?N<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(N),i=G/s,o=A/s):L<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(L),i=k/o,s=A/o),this.set(i,s,o,t),this}let P=Math.sqrt((m-w)*(m-w)+(g-v)*(g-v)+(_-p)*(_-p));return Math.abs(P)<.001&&(P=1),this.x=(m-w)/P,this.y=(g-v)/P,this.z=(_-p)/P,this.w=Math.acos((f+M+b-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wi extends gr{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new Fn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Pn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Td(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ad extends Fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class JM extends Fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerp(e,t,i,s){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,s)}static slerpFlat(e,t,i,s,o,u,c){let d=i[s+0],f=i[s+1],p=i[s+2],g=i[s+3];const _=o[u+0],M=o[u+1],w=o[u+2],v=o[u+3];if(c===0){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=g;return}if(c===1){e[t+0]=_,e[t+1]=M,e[t+2]=w,e[t+3]=v;return}if(g!==v||d!==_||f!==M||p!==w){let m=1-c;const b=d*_+f*M+p*w+g*v,P=b>=0?1:-1,O=1-b*b;if(O>Number.EPSILON){const L=Math.sqrt(O),G=Math.atan2(L,b*P);m=Math.sin(m*G)/L,c=Math.sin(c*G)/L}const N=c*P;if(d=d*m+_*N,f=f*m+M*N,p=p*m+w*N,g=g*m+v*N,m===1-c){const L=1/Math.sqrt(d*d+f*f+p*p+g*g);d*=L,f*=L,p*=L,g*=L}}e[t]=d,e[t+1]=f,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,o,u){const c=i[s],d=i[s+1],f=i[s+2],p=i[s+3],g=o[u],_=o[u+1],M=o[u+2],w=o[u+3];return e[t]=c*w+p*g+d*M-f*_,e[t+1]=d*w+p*_+f*g-c*M,e[t+2]=f*w+p*M+c*_-d*g,e[t+3]=p*w-c*g-d*_-f*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,s=e._y,o=e._z,u=e._order,c=Math.cos,d=Math.sin,f=c(i/2),p=c(s/2),g=c(o/2),_=d(i/2),M=d(s/2),w=d(o/2);switch(u){case"XYZ":this._x=_*p*g+f*M*w,this._y=f*M*g-_*p*w,this._z=f*p*w+_*M*g,this._w=f*p*g-_*M*w;break;case"YXZ":this._x=_*p*g+f*M*w,this._y=f*M*g-_*p*w,this._z=f*p*w-_*M*g,this._w=f*p*g+_*M*w;break;case"ZXY":this._x=_*p*g-f*M*w,this._y=f*M*g+_*p*w,this._z=f*p*w+_*M*g,this._w=f*p*g-_*M*w;break;case"ZYX":this._x=_*p*g-f*M*w,this._y=f*M*g+_*p*w,this._z=f*p*w-_*M*g,this._w=f*p*g+_*M*w;break;case"YZX":this._x=_*p*g+f*M*w,this._y=f*M*g+_*p*w,this._z=f*p*w-_*M*g,this._w=f*p*g-_*M*w;break;case"XZY":this._x=_*p*g-f*M*w,this._y=f*M*g-_*p*w,this._z=f*p*w+_*M*g,this._w=f*p*g+_*M*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],u=t[1],c=t[5],d=t[9],f=t[2],p=t[6],g=t[10],_=i+c+g;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(p-d)*M,this._y=(o-f)*M,this._z=(u-s)*M}else if(i>c&&i>g){const M=2*Math.sqrt(1+i-c-g);this._w=(p-d)/M,this._x=.25*M,this._y=(s+u)/M,this._z=(o+f)/M}else if(c>g){const M=2*Math.sqrt(1+c-i-g);this._w=(o-f)/M,this._x=(s+u)/M,this._y=.25*M,this._z=(d+p)/M}else{const M=2*Math.sqrt(1+g-i-c);this._w=(u-s)/M,this._x=(o+f)/M,this._y=(d+p)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,u=e._w,c=t._x,d=t._y,f=t._z,p=t._w;return this._x=i*p+u*c+s*f-o*d,this._y=s*p+u*d+o*c-i*f,this._z=o*p+u*f+i*d-s*c,this._w=u*p-i*c-s*d-o*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,o=this._z,u=this._w;let c=u*e._w+i*e._x+s*e._y+o*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=s,this._z=o,this;const d=1-c*c;if(d<=Number.EPSILON){const M=1-t;return this._w=M*u+t*this._w,this._x=M*i+t*this._x,this._y=M*s+t*this._y,this._z=M*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const f=Math.sqrt(d),p=Math.atan2(f,c),g=Math.sin((1-t)*p)/f,_=Math.sin(t*p)/f;return this._w=u*g+this._w*_,this._x=i*g+this._x*_,this._y=s*g+this._y*_,this._z=o*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(o),i*Math.cos(o),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){this.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(yf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,u=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*u,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*u,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,u=e.y,c=e.z,d=e.w,f=d*t+u*s-c*i,p=d*i+c*t-o*s,g=d*s+o*i-u*t,_=-o*t-u*i-c*s;return this.x=f*d+_*-o+p*-c-g*-u,this.y=p*d+_*-u+g*-o-f*-c,this.z=g*d+_*-c+f*-u-p*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,u=t.x,c=t.y,d=t.z;return this.x=s*d-o*c,this.y=o*u-i*d,this.z=i*c-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rl.copy(this).projectOnVector(e),this.sub(Rl)}reflect(e){return this.sub(Rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rl=new B,yf=new mr;class Us{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,s=1/0,o=-1/0,u=-1/0,c=-1/0;for(let d=0,f=e.length;d<f;d+=3){const p=e[d],g=e[d+1],_=e[d+2];p<t&&(t=p),g<i&&(i=g),_<s&&(s=_),p>o&&(o=p),g>u&&(u=g),_>c&&(c=_)}return this.min.set(t,i,s),this.max.set(o,u,c),this}setFromBufferAttribute(e){let t=1/0,i=1/0,s=1/0,o=-1/0,u=-1/0,c=-1/0;for(let d=0,f=e.count;d<f;d++){const p=e.getX(d),g=e.getY(d),_=e.getZ(d);p<t&&(t=p),g<i&&(i=g),_<s&&(s=_),p>o&&(o=p),g>u&&(u=g),_>c&&(c=_)}return this.min.set(t,i,s),this.max.set(o,u,c),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=tr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const o=i.attributes.position;for(let u=0,c=o.count;u<c;u++)tr.fromBufferAttribute(o,u).applyMatrix4(e.matrixWorld),this.expandByPoint(tr)}else i.boundingBox===null&&i.computeBoundingBox(),Dl.copy(i.boundingBox),Dl.applyMatrix4(e.matrixWorld),this.union(Dl);const s=e.children;for(let o=0,u=s.length;o<u;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,tr),tr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),Da.subVectors(this.max,bs),Nr.subVectors(e.a,bs),Or.subVectors(e.b,bs),Ur.subVectors(e.c,bs),Oi.subVectors(Or,Nr),Ui.subVectors(Ur,Or),nr.subVectors(Nr,Ur);let t=[0,-Oi.z,Oi.y,0,-Ui.z,Ui.y,0,-nr.z,nr.y,Oi.z,0,-Oi.x,Ui.z,0,-Ui.x,nr.z,0,-nr.x,-Oi.y,Oi.x,0,-Ui.y,Ui.x,0,-nr.y,nr.x,0];return!Pl(t,Nr,Or,Ur,Da)||(t=[1,0,0,0,1,0,0,0,1],!Pl(t,Nr,Or,Ur,Da))?!1:(Pa.crossVectors(Oi,Ui),t=[Pa.x,Pa.y,Pa.z],Pl(t,Nr,Or,Ur,Da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return tr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(tr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new B,new B,new B,new B,new B,new B,new B,new B],tr=new B,Dl=new Us,Nr=new B,Or=new B,Ur=new B,Oi=new B,Ui=new B,nr=new B,bs=new B,Da=new B,Pa=new B,ir=new B;function Pl(l,e,t,i,s){for(let o=0,u=l.length-3;o<=u;o+=3){ir.fromArray(l,o);const c=s.x*Math.abs(ir.x)+s.y*Math.abs(ir.y)+s.z*Math.abs(ir.z),d=e.dot(ir),f=t.dot(ir),p=i.dot(ir);if(Math.max(-Math.max(d,f,p),Math.min(d,f,p))>c)return!1}return!0}const QM=new Us,Sf=new B,Ia=new B,Il=new B;class to{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):QM.setFromPoints(e).getCenter(i);let s=0;for(let o=0,u=e.length;o<u;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Il.subVectors(e,this.center);const t=Il.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.add(Il.multiplyScalar(s/i)),this.radius+=s}return this}union(e){return this.center.equals(e.center)===!0?Ia.set(0,0,1).multiplyScalar(e.radius):Ia.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Sf.copy(e.center).add(Ia)),this.expandByPoint(Sf.copy(e.center).sub(Ia)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new B,Fl=new B,Fa=new B,zi=new B,Nl=new B,Na=new B,Ol=new B;class Cd{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.direction).multiplyScalar(t).add(this.origin),_i.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Fl.copy(e).add(t).multiplyScalar(.5),Fa.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(Fl);const o=e.distanceTo(t)*.5,u=-this.direction.dot(Fa),c=zi.dot(this.direction),d=-zi.dot(Fa),f=zi.lengthSq(),p=Math.abs(1-u*u);let g,_,M,w;if(p>0)if(g=u*d-c,_=u*c-d,w=o*p,g>=0)if(_>=-w)if(_<=w){const v=1/p;g*=v,_*=v,M=g*(g+u*_+2*c)+_*(u*g+_+2*d)+f}else _=o,g=Math.max(0,-(u*_+c)),M=-g*g+_*(_+2*d)+f;else _=-o,g=Math.max(0,-(u*_+c)),M=-g*g+_*(_+2*d)+f;else _<=-w?(g=Math.max(0,-(-u*o+c)),_=g>0?-o:Math.min(Math.max(-o,-d),o),M=-g*g+_*(_+2*d)+f):_<=w?(g=0,_=Math.min(Math.max(-o,-d),o),M=_*(_+2*d)+f):(g=Math.max(0,-(u*o+c)),_=g>0?o:Math.min(Math.max(-o,-d),o),M=-g*g+_*(_+2*d)+f);else _=u>0?-o:o,g=Math.max(0,-(u*_+c)),M=-g*g+_*(_+2*d)+f;return i&&i.copy(this.direction).multiplyScalar(g).add(this.origin),s&&s.copy(Fa).multiplyScalar(_).add(Fl),M}intersectSphere(e,t){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),s=_i.dot(_i)-i*i,o=e.radius*e.radius;if(s>o)return null;const u=Math.sqrt(o-s),c=i-u,d=i+u;return c<0&&d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,u,c,d;const f=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,_=this.origin;return f>=0?(i=(e.min.x-_.x)*f,s=(e.max.x-_.x)*f):(i=(e.max.x-_.x)*f,s=(e.min.x-_.x)*f),p>=0?(o=(e.min.y-_.y)*p,u=(e.max.y-_.y)*p):(o=(e.max.y-_.y)*p,u=(e.min.y-_.y)*p),i>u||o>s||((o>i||i!==i)&&(i=o),(u<s||s!==s)&&(s=u),g>=0?(c=(e.min.z-_.z)*g,d=(e.max.z-_.z)*g):(c=(e.max.z-_.z)*g,d=(e.min.z-_.z)*g),i>d||c>s)||((c>i||i!==i)&&(i=c),(d<s||s!==s)&&(s=d),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,i,s,o){Nl.subVectors(t,e),Na.subVectors(i,e),Ol.crossVectors(Nl,Na);let u=this.direction.dot(Ol),c;if(u>0){if(s)return null;c=1}else if(u<0)c=-1,u=-u;else return null;zi.subVectors(this.origin,e);const d=c*this.direction.dot(Na.crossVectors(zi,Na));if(d<0)return null;const f=c*this.direction.dot(Nl.cross(zi));if(f<0||d+f>u)return null;const p=-c*zi.dot(Ol);return p<0?null:this.at(p/u,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,s,o,u,c,d,f,p,g,_,M,w,v,m){const b=this.elements;return b[0]=e,b[4]=t,b[8]=i,b[12]=s,b[1]=o,b[5]=u,b[9]=c,b[13]=d,b[2]=f,b[6]=p,b[10]=g,b[14]=_,b[3]=M,b[7]=w,b[11]=v,b[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/zr.setFromMatrixColumn(e,0).length(),o=1/zr.setFromMatrixColumn(e,1).length(),u=1/zr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,s=e.y,o=e.z,u=Math.cos(i),c=Math.sin(i),d=Math.cos(s),f=Math.sin(s),p=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const _=u*p,M=u*g,w=c*p,v=c*g;t[0]=d*p,t[4]=-d*g,t[8]=f,t[1]=M+w*f,t[5]=_-v*f,t[9]=-c*d,t[2]=v-_*f,t[6]=w+M*f,t[10]=u*d}else if(e.order==="YXZ"){const _=d*p,M=d*g,w=f*p,v=f*g;t[0]=_+v*c,t[4]=w*c-M,t[8]=u*f,t[1]=u*g,t[5]=u*p,t[9]=-c,t[2]=M*c-w,t[6]=v+_*c,t[10]=u*d}else if(e.order==="ZXY"){const _=d*p,M=d*g,w=f*p,v=f*g;t[0]=_-v*c,t[4]=-u*g,t[8]=w+M*c,t[1]=M+w*c,t[5]=u*p,t[9]=v-_*c,t[2]=-u*f,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const _=u*p,M=u*g,w=c*p,v=c*g;t[0]=d*p,t[4]=w*f-M,t[8]=_*f+v,t[1]=d*g,t[5]=v*f+_,t[9]=M*f-w,t[2]=-f,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const _=u*d,M=u*f,w=c*d,v=c*f;t[0]=d*p,t[4]=v-_*g,t[8]=w*g+M,t[1]=g,t[5]=u*p,t[9]=-c*p,t[2]=-f*p,t[6]=M*g+w,t[10]=_-v*g}else if(e.order==="XZY"){const _=u*d,M=u*f,w=c*d,v=c*f;t[0]=d*p,t[4]=-g,t[8]=f*p,t[1]=_*g+v,t[5]=u*p,t[9]=M*g-w,t[2]=w*g-M,t[6]=c*p,t[10]=v*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ey,e,ty)}lookAt(e,t,i){const s=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Bi.crossVectors(i,_n),Bi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Bi.crossVectors(i,_n)),Bi.normalize(),Oa.crossVectors(_n,Bi),s[0]=Bi.x,s[4]=Oa.x,s[8]=_n.x,s[1]=Bi.y,s[5]=Oa.y,s[9]=_n.y,s[2]=Bi.z,s[6]=Oa.z,s[10]=_n.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,u=i[0],c=i[4],d=i[8],f=i[12],p=i[1],g=i[5],_=i[9],M=i[13],w=i[2],v=i[6],m=i[10],b=i[14],P=i[3],O=i[7],N=i[11],L=i[15],G=s[0],k=s[4],A=s[8],U=s[12],Q=s[1],Y=s[5],Ee=s[9],de=s[13],H=s[2],oe=s[6],j=s[10],re=s[14],ne=s[3],$=s[7],se=s[11],fe=s[15];return o[0]=u*G+c*Q+d*H+f*ne,o[4]=u*k+c*Y+d*oe+f*$,o[8]=u*A+c*Ee+d*j+f*se,o[12]=u*U+c*de+d*re+f*fe,o[1]=p*G+g*Q+_*H+M*ne,o[5]=p*k+g*Y+_*oe+M*$,o[9]=p*A+g*Ee+_*j+M*se,o[13]=p*U+g*de+_*re+M*fe,o[2]=w*G+v*Q+m*H+b*ne,o[6]=w*k+v*Y+m*oe+b*$,o[10]=w*A+v*Ee+m*j+b*se,o[14]=w*U+v*de+m*re+b*fe,o[3]=P*G+O*Q+N*H+L*ne,o[7]=P*k+O*Y+N*oe+L*$,o[11]=P*A+O*Ee+N*j+L*se,o[15]=P*U+O*de+N*re+L*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],u=e[1],c=e[5],d=e[9],f=e[13],p=e[2],g=e[6],_=e[10],M=e[14],w=e[3],v=e[7],m=e[11],b=e[15];return w*(+o*d*g-s*f*g-o*c*_+i*f*_+s*c*M-i*d*M)+v*(+t*d*M-t*f*_+o*u*_-s*u*M+s*f*p-o*d*p)+m*(+t*f*g-t*c*M-o*u*g+i*u*M+o*c*p-i*f*p)+b*(-s*c*p-t*d*g+t*c*_+s*u*g-i*u*_+i*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],d=e[6],f=e[7],p=e[8],g=e[9],_=e[10],M=e[11],w=e[12],v=e[13],m=e[14],b=e[15],P=g*m*f-v*_*f+v*d*M-c*m*M-g*d*b+c*_*b,O=w*_*f-p*m*f-w*d*M+u*m*M+p*d*b-u*_*b,N=p*v*f-w*g*f+w*c*M-u*v*M-p*c*b+u*g*b,L=w*g*d-p*v*d-w*c*_+u*v*_+p*c*m-u*g*m,G=t*P+i*O+s*N+o*L;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/G;return e[0]=P*k,e[1]=(v*_*o-g*m*o-v*s*M+i*m*M+g*s*b-i*_*b)*k,e[2]=(c*m*o-v*d*o+v*s*f-i*m*f-c*s*b+i*d*b)*k,e[3]=(g*d*o-c*_*o-g*s*f+i*_*f+c*s*M-i*d*M)*k,e[4]=O*k,e[5]=(p*m*o-w*_*o+w*s*M-t*m*M-p*s*b+t*_*b)*k,e[6]=(w*d*o-u*m*o-w*s*f+t*m*f+u*s*b-t*d*b)*k,e[7]=(u*_*o-p*d*o+p*s*f-t*_*f-u*s*M+t*d*M)*k,e[8]=N*k,e[9]=(w*g*o-p*v*o-w*i*M+t*v*M+p*i*b-t*g*b)*k,e[10]=(u*v*o-w*c*o+w*i*f-t*v*f-u*i*b+t*c*b)*k,e[11]=(p*c*o-u*g*o-p*i*f+t*g*f+u*i*M-t*c*M)*k,e[12]=L*k,e[13]=(p*v*s-w*g*s+w*i*_-t*v*_-p*i*m+t*g*m)*k,e[14]=(w*c*s-u*v*s-w*i*d+t*v*d+u*i*m-t*c*m)*k,e[15]=(u*g*s-p*c*s+p*i*d-t*g*d-u*i*_+t*c*_)*k,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,u=e.x,c=e.y,d=e.z,f=o*u,p=o*c;return this.set(f*u+i,f*c-s*d,f*d+s*c,0,f*c+s*d,p*c+i,p*d-s*u,0,f*d-s*c,p*d+s*u,o*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,u){return this.set(1,i,o,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,u=t._y,c=t._z,d=t._w,f=o+o,p=u+u,g=c+c,_=o*f,M=o*p,w=o*g,v=u*p,m=u*g,b=c*g,P=d*f,O=d*p,N=d*g,L=i.x,G=i.y,k=i.z;return s[0]=(1-(v+b))*L,s[1]=(M+N)*L,s[2]=(w-O)*L,s[3]=0,s[4]=(M-N)*G,s[5]=(1-(_+b))*G,s[6]=(m+P)*G,s[7]=0,s[8]=(w+O)*k,s[9]=(m-P)*k,s[10]=(1-(_+v))*k,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let o=zr.set(s[0],s[1],s[2]).length();const u=zr.set(s[4],s[5],s[6]).length(),c=zr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],kn.copy(this);const f=1/o,p=1/u,g=1/c;return kn.elements[0]*=f,kn.elements[1]*=f,kn.elements[2]*=f,kn.elements[4]*=p,kn.elements[5]*=p,kn.elements[6]*=p,kn.elements[8]*=g,kn.elements[9]*=g,kn.elements[10]*=g,t.setFromRotationMatrix(kn),i.x=o,i.y=u,i.z=c,this}makePerspective(e,t,i,s,o,u){u===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const c=this.elements,d=2*o/(t-e),f=2*o/(i-s),p=(t+e)/(t-e),g=(i+s)/(i-s),_=-(u+o)/(u-o),M=-2*u*o/(u-o);return c[0]=d,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=f,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,o,u){const c=this.elements,d=1/(t-e),f=1/(i-s),p=1/(u-o),g=(t+e)*d,_=(i+s)*f,M=(u+o)*p;return c[0]=2*d,c[4]=0,c[8]=0,c[12]=-g,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-_,c[2]=0,c[6]=0,c[10]=-2*p,c[14]=-M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const zr=new B,kn=new zt,ey=new B(0,0,0),ty=new B(1,1,1),Bi=new B,Oa=new B,_n=new B,wf=new zt,bf=new mr;class zs{constructor(e=0,t=0,i=0,s=zs.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],u=s[4],c=s[8],d=s[1],f=s[5],p=s[9],g=s[2],_=s[6],M=s[10];switch(t){case"XYZ":this._y=Math.asin(tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,M),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(_,f),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,M),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(tn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-u,f)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-tn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-u,f));break;case"YZX":this._z=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(c,M));break;case"XZY":this._z=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,f),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-p,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bf.setFromEuler(this),this.setFromQuaternion(bf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}zs.DefaultOrder="XYZ";zs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ld{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ny=0;const Ef=new B,Br=new mr,vi=new zt,Ua=new B,Es=new B,iy=new B,ry=new mr,Tf=new B(1,0,0),Af=new B(0,1,0),Cf=new B(0,0,1),sy={type:"added"},Lf={type:"removed"};class nn extends gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DefaultUp.clone();const e=new B,t=new zs,i=new mr,s=new B(1,1,1);function o(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new zt},normalMatrix:{value:new ii}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=nn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Ld,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(Tf,e)}rotateY(e){return this.rotateOnAxis(Af,e)}rotateZ(e){return this.rotateOnAxis(Cf,e)}translateOnAxis(e,t){return Ef.copy(e).applyQuaternion(this.quaternion),this.position.add(Ef.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tf,e)}translateY(e){return this.translateOnAxis(Af,e)}translateZ(e){return this.translateOnAxis(Cf,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ua.copy(e):Ua.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Es,Ua,this.up):vi.lookAt(Ua,Es,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Br.setFromRotationMatrix(vi),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(sy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Lf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,iy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,ry,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let o=0,u=s.length;o<u;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function o(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let f=0,p=d.length;f<p;f++){const g=d[f];o(e.shapes,g)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,f=this.material.length;d<f;d++)c.push(o(e.materials,this.material[d]));s.material=c}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];s.animations.push(o(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),f=u(e.textures),p=u(e.images),g=u(e.shapes),_=u(e.skeletons),M=u(e.animations),w=u(e.nodes);c.length>0&&(i.geometries=c),d.length>0&&(i.materials=d),f.length>0&&(i.textures=f),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),M.length>0&&(i.animations=M),w.length>0&&(i.nodes=w)}return i.object=s,i;function u(c){const d=[];for(const f in c){const p=c[f];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}nn.DefaultUp=new B(0,1,0);nn.DefaultMatrixAutoUpdate=!0;const qn=new B,xi=new B,Ul=new B,Mi=new B,Gr=new B,Wr=new B,Rf=new B,zl=new B,Bl=new B,Gl=new B;class ni{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),qn.subVectors(e,t),s.cross(qn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){qn.subVectors(s,t),xi.subVectors(i,t),Ul.subVectors(e,t);const u=qn.dot(qn),c=qn.dot(xi),d=qn.dot(Ul),f=xi.dot(xi),p=xi.dot(Ul),g=u*f-c*c;if(g===0)return o.set(-2,-1,-1);const _=1/g,M=(f*d-c*p)*_,w=(u*p-c*d)*_;return o.set(1-M-w,w,M)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Mi),Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getUV(e,t,i,s,o,u,c,d){return this.getBarycoord(e,t,i,s,Mi),d.set(0,0),d.addScaledVector(o,Mi.x),d.addScaledVector(u,Mi.y),d.addScaledVector(c,Mi.z),d}static isFrontFacing(e,t,i,s){return qn.subVectors(i,t),xi.subVectors(e,t),qn.cross(xi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),qn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,o){return ni.getUV(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let u,c;Gr.subVectors(s,i),Wr.subVectors(o,i),zl.subVectors(e,i);const d=Gr.dot(zl),f=Wr.dot(zl);if(d<=0&&f<=0)return t.copy(i);Bl.subVectors(e,s);const p=Gr.dot(Bl),g=Wr.dot(Bl);if(p>=0&&g<=p)return t.copy(s);const _=d*g-p*f;if(_<=0&&d>=0&&p<=0)return u=d/(d-p),t.copy(i).addScaledVector(Gr,u);Gl.subVectors(e,o);const M=Gr.dot(Gl),w=Wr.dot(Gl);if(w>=0&&M<=w)return t.copy(o);const v=M*f-d*w;if(v<=0&&f>=0&&w<=0)return c=f/(f-w),t.copy(i).addScaledVector(Wr,c);const m=p*w-M*g;if(m<=0&&g-p>=0&&M-w>=0)return Rf.subVectors(o,s),c=(g-p)/(g-p+(M-w)),t.copy(s).addScaledVector(Rf,c);const b=1/(m+v+_);return u=v*b,c=_*b,t.copy(i).addScaledVector(Gr,u).addScaledVector(Wr,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ay=0;class Zt extends gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=jr,this.side=Is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=xd,this.blendDst=Md,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=nc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$M,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bl,this.stencilZFail=bl,this.stencilZPass=bl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===iM;continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(i.blending=this.blending),this.side!==Is&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function s(o){const u=[];for(const c in o){const d=o[c];delete d.metadata,u.push(d)}return u}if(t){const o=s(e.textures),u=s(e.images);o.length>0&&(i.textures=o),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}Zt.fromType=function(){return null};class dc extends Zt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new B,za=new He;class si{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=_f,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let s=0,o=e.length;s<o;s++){let u=e[s];u===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",s),u=new ke),t[i++]=u.r,t[i++]=u.g,t[i++]=u.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let s=0,o=e.length;s<o;s++){let u=e[s];u===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",s),u=new He),t[i++]=u.x,t[i++]=u.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let s=0,o=e.length;s<o;s++){let u=e[s];u===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",s),u=new B),t[i++]=u.x,t[i++]=u.y,t[i++]=u.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let s=0,o=e.length;s<o;s++){let u=e[s];u===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",s),u=new Yt),t[i++]=u.x,t[i++]=u.y,t[i++]=u.z,t[i++]=u.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)za.fromBufferAttribute(this,t),za.applyMatrix3(e),this.setXY(t,za.x,za.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_f&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Rd extends si{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Dd extends si{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class It extends si{constructor(e,t,i){super(new Float32Array(e),t,i)}}let oy=0;const Dn=new zt,Wl=new nn,Hr=new B,vn=new Us,Ts=new Us,Wt=new B;class Nn extends gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wd(e)?Dd:Rd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ii().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,i){return Dn.makeTranslation(e,t,i),this.applyMatrix4(Dn),this}scale(e,t,i){return Dn.makeScale(e,t,i),this.applyMatrix4(Dn),this}lookAt(e){return Wl.lookAt(e),Wl.updateMatrix(),this.applyMatrix4(Wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new It(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];vn.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new to);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const c=t[o];Ts.setFromBufferAttribute(c),this.morphTargetsRelative?(Wt.addVectors(vn.min,Ts.min),vn.expandByPoint(Wt),Wt.addVectors(vn.max,Ts.max),vn.expandByPoint(Wt)):(vn.expandByPoint(Ts.min),vn.expandByPoint(Ts.max))}vn.getCenter(i);let s=0;for(let o=0,u=e.count;o<u;o++)Wt.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(Wt));if(t)for(let o=0,u=t.length;o<u;o++){const c=t[o],d=this.morphTargetsRelative;for(let f=0,p=c.count;f<p;f++)Wt.fromBufferAttribute(c,f),d&&(Hr.fromBufferAttribute(e,f),Wt.add(Hr)),s=Math.max(s,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,o=t.normal.array,u=t.uv.array,c=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*c),4));const d=this.getAttribute("tangent").array,f=[],p=[];for(let Q=0;Q<c;Q++)f[Q]=new B,p[Q]=new B;const g=new B,_=new B,M=new B,w=new He,v=new He,m=new He,b=new B,P=new B;function O(Q,Y,Ee){g.fromArray(s,Q*3),_.fromArray(s,Y*3),M.fromArray(s,Ee*3),w.fromArray(u,Q*2),v.fromArray(u,Y*2),m.fromArray(u,Ee*2),_.sub(g),M.sub(g),v.sub(w),m.sub(w);const de=1/(v.x*m.y-m.x*v.y);!isFinite(de)||(b.copy(_).multiplyScalar(m.y).addScaledVector(M,-v.y).multiplyScalar(de),P.copy(M).multiplyScalar(v.x).addScaledVector(_,-m.x).multiplyScalar(de),f[Q].add(b),f[Y].add(b),f[Ee].add(b),p[Q].add(P),p[Y].add(P),p[Ee].add(P))}let N=this.groups;N.length===0&&(N=[{start:0,count:i.length}]);for(let Q=0,Y=N.length;Q<Y;++Q){const Ee=N[Q],de=Ee.start,H=Ee.count;for(let oe=de,j=de+H;oe<j;oe+=3)O(i[oe+0],i[oe+1],i[oe+2])}const L=new B,G=new B,k=new B,A=new B;function U(Q){k.fromArray(o,Q*3),A.copy(k);const Y=f[Q];L.copy(Y),L.sub(k.multiplyScalar(k.dot(Y))).normalize(),G.crossVectors(A,Y);const de=G.dot(p[Q])<0?-1:1;d[Q*4]=L.x,d[Q*4+1]=L.y,d[Q*4+2]=L.z,d[Q*4+3]=de}for(let Q=0,Y=N.length;Q<Y;++Q){const Ee=N[Q],de=Ee.start,H=Ee.count;for(let oe=de,j=de+H;oe<j;oe+=3)U(i[oe+0]),U(i[oe+1]),U(i[oe+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new si(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,M=i.count;_<M;_++)i.setXYZ(_,0,0,0);const s=new B,o=new B,u=new B,c=new B,d=new B,f=new B,p=new B,g=new B;if(e)for(let _=0,M=e.count;_<M;_+=3){const w=e.getX(_+0),v=e.getX(_+1),m=e.getX(_+2);s.fromBufferAttribute(t,w),o.fromBufferAttribute(t,v),u.fromBufferAttribute(t,m),p.subVectors(u,o),g.subVectors(s,o),p.cross(g),c.fromBufferAttribute(i,w),d.fromBufferAttribute(i,v),f.fromBufferAttribute(i,m),c.add(p),d.add(p),f.add(p),i.setXYZ(w,c.x,c.y,c.z),i.setXYZ(v,d.x,d.y,d.z),i.setXYZ(m,f.x,f.y,f.z)}else for(let _=0,M=t.count;_<M;_+=3)s.fromBufferAttribute(t,_+0),o.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),p.subVectors(u,o),g.subVectors(s,o),p.cross(g),i.setXYZ(_+0,p.x,p.y,p.z),i.setXYZ(_+1,p.x,p.y,p.z),i.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const s in i){if(e.attributes[s]===void 0)continue;const u=i[s].array,c=e.attributes[s],d=c.array,f=c.itemSize*t,p=Math.min(d.length,u.length-f);for(let g=0,_=f;g<p;g++,_++)u[_]=d[g]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(c,d){const f=c.array,p=c.itemSize,g=c.normalized,_=new f.constructor(d.length*p);let M=0,w=0;for(let v=0,m=d.length;v<m;v++){c.isInterleavedBufferAttribute?M=d[v]*c.data.stride+c.offset:M=d[v]*p;for(let b=0;b<p;b++)_[w++]=f[M++]}return new si(_,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nn,i=this.index.array,s=this.attributes;for(const c in s){const d=s[c],f=e(d,i);t.setAttribute(c,f)}const o=this.morphAttributes;for(const c in o){const d=[],f=o[c];for(let p=0,g=f.length;p<g;p++){const _=f[p],M=e(_,i);d.push(M)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const f=u[c];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(e[f]=d[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const f=i[d];e.data.attributes[d]=f.toJSON(e.data)}const s={};let o=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],p=[];for(let g=0,_=f.length;g<_;g++){const M=f[g];p.push(M.toJSON(e.data))}p.length>0&&(s[d]=p,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const f in s){const p=s[f];this.setAttribute(f,p.clone(t))}const o=e.morphAttributes;for(const f in o){const p=[],g=o[f];for(let _=0,M=g.length;_<M;_++)p.push(g[_].clone(t));this.morphAttributes[f]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let f=0,p=u.length;f<p;f++){const g=u[f];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Df=new zt,Vr=new Cd,Hl=new to,Gi=new B,Wi=new B,Hi=new B,Vl=new B,kl=new B,ql=new B,Ba=new B,Ga=new B,Wa=new B,Ha=new He,Va=new He,ka=new He,Xl=new B,qa=new B;class ri extends nn{constructor(e=new Nn,t=new dc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;if(s===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Hl.copy(i.boundingSphere),Hl.applyMatrix4(o),e.ray.intersectsSphere(Hl)===!1)||(Df.copy(o).invert(),Vr.copy(e.ray).applyMatrix4(Df),i.boundingBox!==null&&Vr.intersectsBox(i.boundingBox)===!1))return;let u;const c=i.index,d=i.attributes.position,f=i.morphAttributes.position,p=i.morphTargetsRelative,g=i.attributes.uv,_=i.attributes.uv2,M=i.groups,w=i.drawRange;if(c!==null)if(Array.isArray(s))for(let v=0,m=M.length;v<m;v++){const b=M[v],P=s[b.materialIndex],O=Math.max(b.start,w.start),N=Math.min(c.count,Math.min(b.start+b.count,w.start+w.count));for(let L=O,G=N;L<G;L+=3){const k=c.getX(L),A=c.getX(L+1),U=c.getX(L+2);u=Xa(this,P,e,Vr,d,f,p,g,_,k,A,U),u&&(u.faceIndex=Math.floor(L/3),u.face.materialIndex=b.materialIndex,t.push(u))}}else{const v=Math.max(0,w.start),m=Math.min(c.count,w.start+w.count);for(let b=v,P=m;b<P;b+=3){const O=c.getX(b),N=c.getX(b+1),L=c.getX(b+2);u=Xa(this,s,e,Vr,d,f,p,g,_,O,N,L),u&&(u.faceIndex=Math.floor(b/3),t.push(u))}}else if(d!==void 0)if(Array.isArray(s))for(let v=0,m=M.length;v<m;v++){const b=M[v],P=s[b.materialIndex],O=Math.max(b.start,w.start),N=Math.min(d.count,Math.min(b.start+b.count,w.start+w.count));for(let L=O,G=N;L<G;L+=3){const k=L,A=L+1,U=L+2;u=Xa(this,P,e,Vr,d,f,p,g,_,k,A,U),u&&(u.faceIndex=Math.floor(L/3),u.face.materialIndex=b.materialIndex,t.push(u))}}else{const v=Math.max(0,w.start),m=Math.min(d.count,w.start+w.count);for(let b=v,P=m;b<P;b+=3){const O=b,N=b+1,L=b+2;u=Xa(this,s,e,Vr,d,f,p,g,_,O,N,L),u&&(u.faceIndex=Math.floor(b/3),t.push(u))}}}}function ly(l,e,t,i,s,o,u,c){let d;if(e.side===Zn?d=i.intersectTriangle(u,o,s,!0,c):d=i.intersectTriangle(s,o,u,e.side!==fr,c),d===null)return null;qa.copy(c),qa.applyMatrix4(l.matrixWorld);const f=t.ray.origin.distanceTo(qa);return f<t.near||f>t.far?null:{distance:f,point:qa.clone(),object:l}}function Xa(l,e,t,i,s,o,u,c,d,f,p,g){Gi.fromBufferAttribute(s,f),Wi.fromBufferAttribute(s,p),Hi.fromBufferAttribute(s,g);const _=l.morphTargetInfluences;if(o&&_){Ba.set(0,0,0),Ga.set(0,0,0),Wa.set(0,0,0);for(let w=0,v=o.length;w<v;w++){const m=_[w],b=o[w];m!==0&&(Vl.fromBufferAttribute(b,f),kl.fromBufferAttribute(b,p),ql.fromBufferAttribute(b,g),u?(Ba.addScaledVector(Vl,m),Ga.addScaledVector(kl,m),Wa.addScaledVector(ql,m)):(Ba.addScaledVector(Vl.sub(Gi),m),Ga.addScaledVector(kl.sub(Wi),m),Wa.addScaledVector(ql.sub(Hi),m)))}Gi.add(Ba),Wi.add(Ga),Hi.add(Wa)}l.isSkinnedMesh&&(l.boneTransform(f,Gi),l.boneTransform(p,Wi),l.boneTransform(g,Hi));const M=ly(l,e,t,i,Gi,Wi,Hi,Xl);if(M){c&&(Ha.fromBufferAttribute(c,f),Va.fromBufferAttribute(c,p),ka.fromBufferAttribute(c,g),M.uv=ni.getUV(Xl,Gi,Wi,Hi,Ha,Va,ka,new He)),d&&(Ha.fromBufferAttribute(d,f),Va.fromBufferAttribute(d,p),ka.fromBufferAttribute(d,g),M.uv2=ni.getUV(Xl,Gi,Wi,Hi,Ha,Va,ka,new He));const w={a:f,b:p,c:g,normal:new B,materialIndex:0};ni.getNormal(Gi,Wi,Hi,w.normal),M.face=w}return M}class Bs extends Nn{constructor(e=1,t=1,i=1,s=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:u};const c=this;s=Math.floor(s),o=Math.floor(o),u=Math.floor(u);const d=[],f=[],p=[],g=[];let _=0,M=0;w("z","y","x",-1,-1,i,t,e,u,o,0),w("z","y","x",1,-1,i,t,-e,u,o,1),w("x","z","y",1,1,e,i,t,s,u,2),w("x","z","y",1,-1,e,i,-t,s,u,3),w("x","y","z",1,-1,e,t,i,s,o,4),w("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(d),this.setAttribute("position",new It(f,3)),this.setAttribute("normal",new It(p,3)),this.setAttribute("uv",new It(g,2));function w(v,m,b,P,O,N,L,G,k,A,U){const Q=N/k,Y=L/A,Ee=N/2,de=L/2,H=G/2,oe=k+1,j=A+1;let re=0,ne=0;const $=new B;for(let se=0;se<j;se++){const fe=se*Y-de;for(let he=0;he<oe;he++){const pe=he*Q-Ee;$[v]=pe*P,$[m]=fe*O,$[b]=H,f.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[b]=G>0?1:-1,p.push($.x,$.y,$.z),g.push(he/k),g.push(1-se/A),re+=1}}for(let se=0;se<A;se++)for(let fe=0;fe<k;fe++){const he=_+fe+oe*se,pe=_+fe+oe*(se+1),Ce=_+(fe+1)+oe*(se+1),Re=_+(fe+1)+oe*se;d.push(he,pe,Re),d.push(pe,Ce,Re),ne+=6}c.addGroup(M,ne,U),M+=ne,_+=re}}static fromJSON(e){return new Bs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ns(l){const e={};for(const t in l){e[t]={};for(const i in l[t]){const s=l[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function jt(l){const e={};for(let t=0;t<l.length;t++){const i=ns(l[t]);for(const s in i)e[s]=i[s]}return e}const Pd={clone:ns,merge:jt};var cy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends Zt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=cy,this.fragmentShader=uy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Id extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class In extends Id{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(El*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xf*2*Math.atan(Math.tan(El*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(El*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,f=u.fullHeight;o+=u.offsetX*s/d,t-=u.offsetY*i/f,s*=u.width/d,i*=u.height/f}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const kr=90,qr=1;class hy extends nn{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const s=new In(kr,qr,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new B(1,0,0)),this.add(s);const o=new In(kr,qr,e,t);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new B(-1,0,0)),this.add(o);const u=new In(kr,qr,e,t);u.layers=this.layers,u.up.set(0,0,1),u.lookAt(new B(0,1,0)),this.add(u);const c=new In(kr,qr,e,t);c.layers=this.layers,c.up.set(0,0,-1),c.lookAt(new B(0,-1,0)),this.add(c);const d=new In(kr,qr,e,t);d.layers=this.layers,d.up.set(0,-1,0),d.lookAt(new B(0,0,1)),this.add(d);const f=new In(kr,qr,e,t);f.layers=this.layers,f.up.set(0,-1,0),f.lookAt(new B(0,0,-1)),this.add(f)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,o,u,c,d,f]=this.children,p=e.getRenderTarget(),g=e.toneMapping,_=e.xr.enabled;e.toneMapping=Si,e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,s),e.setRenderTarget(i,1),e.render(t,o),e.setRenderTarget(i,2),e.render(t,u),e.setRenderTarget(i,3),e.render(t,c),e.setRenderTarget(i,4),e.render(t,d),i.texture.generateMipmaps=M,e.setRenderTarget(i,5),e.render(t,f),e.setRenderTarget(p),e.toneMapping=g,e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Fd extends Fn{constructor(e,t,i,s,o,u,c,d,f,p){e=e!==void 0?e:[],t=t!==void 0?t:Qr,super(e,t,i,s,o,u,c,d,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fy extends wi{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Fd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bs(5,5,5),o=new $n({name:"CubemapFromEquirect",uniforms:ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zn,blending:Vi});o.uniforms.tEquirect.value=t;const u=new ri(s,o),c=t.minFilter;return t.minFilter===eo&&(t.minFilter=Pn),new hy(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,s){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,s);e.setRenderTarget(o)}}const Yl=new B,dy=new B,py=new ii;class rr{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Yl.subVectors(i,t).cross(dy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Yl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(i).multiplyScalar(o).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||py.getNormalMatrix(e),s=this.coplanarPoint(Yl).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new to,Ya=new B;class pc{constructor(e=new rr,t=new rr,i=new rr,s=new rr,o=new rr,u=new rr){this.planes=[e,t,i,s,o,u]}set(e,t,i,s,o,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(s),c[4].copy(o),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,s=i[0],o=i[1],u=i[2],c=i[3],d=i[4],f=i[5],p=i[6],g=i[7],_=i[8],M=i[9],w=i[10],v=i[11],m=i[12],b=i[13],P=i[14],O=i[15];return t[0].setComponents(c-s,g-d,v-_,O-m).normalize(),t[1].setComponents(c+s,g+d,v+_,O+m).normalize(),t[2].setComponents(c+o,g+f,v+M,O+b).normalize(),t[3].setComponents(c-o,g-f,v-M,O-b).normalize(),t[4].setComponents(c-u,g-p,v-w,O-P).normalize(),t[5].setComponents(c+u,g+p,v+w,O+P).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSprite(e){return Xr.center.set(0,0,0),Xr.radius=.7071067811865476,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ya.x=s.normal.x>0?e.max.x:e.min.x,Ya.y=s.normal.y>0?e.max.y:e.min.y,Ya.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ya)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nd(){let l=null,e=!1,t=null,i=null;function s(o,u){t(o,u),i=l.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=l.requestAnimationFrame(s),e=!0)},stop:function(){l.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){l=o}}}function my(l,e){const t=e.isWebGL2,i=new WeakMap;function s(f,p){const g=f.array,_=f.usage,M=l.createBuffer();l.bindBuffer(p,M),l.bufferData(p,g,_),f.onUploadCallback();let w;if(g instanceof Float32Array)w=5126;else if(g instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)w=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=5123;else if(g instanceof Int16Array)w=5122;else if(g instanceof Uint32Array)w=5125;else if(g instanceof Int32Array)w=5124;else if(g instanceof Int8Array)w=5120;else if(g instanceof Uint8Array)w=5121;else if(g instanceof Uint8ClampedArray)w=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:M,type:w,bytesPerElement:g.BYTES_PER_ELEMENT,version:f.version}}function o(f,p,g){const _=p.array,M=p.updateRange;l.bindBuffer(g,f),M.count===-1?l.bufferSubData(g,0,_):(t?l.bufferSubData(g,M.offset*_.BYTES_PER_ELEMENT,_,M.offset,M.count):l.bufferSubData(g,M.offset*_.BYTES_PER_ELEMENT,_.subarray(M.offset,M.offset+M.count)),M.count=-1)}function u(f){return f.isInterleavedBufferAttribute&&(f=f.data),i.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=i.get(f);p&&(l.deleteBuffer(p.buffer),i.delete(f))}function d(f,p){if(f.isGLBufferAttribute){const _=i.get(f);(!_||_.version<f.version)&&i.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const g=i.get(f);g===void 0?i.set(f,s(f,p)):g.version<f.version&&(o(g.buffer,f,p),g.version=f.version)}return{get:u,remove:c,update:d}}class mc extends Nn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,u=t/2,c=Math.floor(i),d=Math.floor(s),f=c+1,p=d+1,g=e/c,_=t/d,M=[],w=[],v=[],m=[];for(let b=0;b<p;b++){const P=b*_-u;for(let O=0;O<f;O++){const N=O*g-o;w.push(N,-P,0),v.push(0,0,1),m.push(O/c),m.push(1-b/d)}}for(let b=0;b<d;b++)for(let P=0;P<c;P++){const O=P+f*b,N=P+f*(b+1),L=P+1+f*(b+1),G=P+1+f*b;M.push(O,N,G),M.push(N,L,G)}this.setIndex(M),this.setAttribute("position",new It(w,3)),this.setAttribute("normal",new It(v,3)),this.setAttribute("uv",new It(m,2))}static fromJSON(e){return new mc(e.width,e.height,e.widthSegments,e.heightSegments)}}var gy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,_y=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,My=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sy="vec3 transformed = vec3( position );",wy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,by=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Ey=`#ifdef USE_IRIDESCENCE
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
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
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
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,Ty=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Py=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Iy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Fy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ny=`#define PI 3.141592653589793
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
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Oy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
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
#endif`,Uy=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,By=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Gy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vy=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ky=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$y=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ky=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,eS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,tS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nS=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,iS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,rS=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,sS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,oS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,cS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,uS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hS=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,pS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_S=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ES=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,TS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,AS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,CS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,LS=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,RS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,FS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,NS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,OS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,US=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,GS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XS=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,YS=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ZS=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,$S=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,KS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,JS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QS=`#ifdef USE_SKINNING
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
#endif`,ew=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rw=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,sw=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,aw=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ow=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,lw=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,cw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,hw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,fw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pw=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gw=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_w=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,vw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,xw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Mw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ww=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ew=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Tw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Aw=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cw=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Rw=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Iw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Fw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Ow=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,zw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Gw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ww=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Vw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,kw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,et={alphamap_fragment:gy,alphamap_pars_fragment:_y,alphatest_fragment:vy,alphatest_pars_fragment:xy,aomap_fragment:My,aomap_pars_fragment:yy,begin_vertex:Sy,beginnormal_vertex:wy,bsdfs:by,iridescence_fragment:Ey,bumpmap_pars_fragment:Ty,clipping_planes_fragment:Ay,clipping_planes_pars_fragment:Cy,clipping_planes_pars_vertex:Ly,clipping_planes_vertex:Ry,color_fragment:Dy,color_pars_fragment:Py,color_pars_vertex:Iy,color_vertex:Fy,common:Ny,cube_uv_reflection_fragment:Oy,defaultnormal_vertex:Uy,displacementmap_pars_vertex:zy,displacementmap_vertex:By,emissivemap_fragment:Gy,emissivemap_pars_fragment:Wy,encodings_fragment:Hy,encodings_pars_fragment:Vy,envmap_fragment:ky,envmap_common_pars_fragment:qy,envmap_pars_fragment:Xy,envmap_pars_vertex:Yy,envmap_physical_pars_fragment:rS,envmap_vertex:Zy,fog_vertex:$y,fog_pars_vertex:Ky,fog_fragment:jy,fog_pars_fragment:Jy,gradientmap_pars_fragment:Qy,lightmap_fragment:eS,lightmap_pars_fragment:tS,lights_lambert_vertex:nS,lights_pars_begin:iS,lights_toon_fragment:sS,lights_toon_pars_fragment:aS,lights_phong_fragment:oS,lights_phong_pars_fragment:lS,lights_physical_fragment:cS,lights_physical_pars_fragment:uS,lights_fragment_begin:hS,lights_fragment_maps:fS,lights_fragment_end:dS,logdepthbuf_fragment:pS,logdepthbuf_pars_fragment:mS,logdepthbuf_pars_vertex:gS,logdepthbuf_vertex:_S,map_fragment:vS,map_pars_fragment:xS,map_particle_fragment:MS,map_particle_pars_fragment:yS,metalnessmap_fragment:SS,metalnessmap_pars_fragment:wS,morphcolor_vertex:bS,morphnormal_vertex:ES,morphtarget_pars_vertex:TS,morphtarget_vertex:AS,normal_fragment_begin:CS,normal_fragment_maps:LS,normal_pars_fragment:RS,normal_pars_vertex:DS,normal_vertex:PS,normalmap_pars_fragment:IS,clearcoat_normal_fragment_begin:FS,clearcoat_normal_fragment_maps:NS,clearcoat_pars_fragment:OS,iridescence_pars_fragment:US,output_fragment:zS,packing:BS,premultiplied_alpha_fragment:GS,project_vertex:WS,dithering_fragment:HS,dithering_pars_fragment:VS,roughnessmap_fragment:kS,roughnessmap_pars_fragment:qS,shadowmap_pars_fragment:XS,shadowmap_pars_vertex:YS,shadowmap_vertex:ZS,shadowmask_pars_fragment:$S,skinbase_vertex:KS,skinning_pars_vertex:jS,skinning_vertex:JS,skinnormal_vertex:QS,specularmap_fragment:ew,specularmap_pars_fragment:tw,tonemapping_fragment:nw,tonemapping_pars_fragment:iw,transmission_fragment:rw,transmission_pars_fragment:sw,uv_pars_fragment:aw,uv_pars_vertex:ow,uv_vertex:lw,uv2_pars_fragment:cw,uv2_pars_vertex:uw,uv2_vertex:hw,worldpos_vertex:fw,background_vert:dw,background_frag:pw,cube_vert:mw,cube_frag:gw,depth_vert:_w,depth_frag:vw,distanceRGBA_vert:xw,distanceRGBA_frag:Mw,equirect_vert:yw,equirect_frag:Sw,linedashed_vert:ww,linedashed_frag:bw,meshbasic_vert:Ew,meshbasic_frag:Tw,meshlambert_vert:Aw,meshlambert_frag:Cw,meshmatcap_vert:Lw,meshmatcap_frag:Rw,meshnormal_vert:Dw,meshnormal_frag:Pw,meshphong_vert:Iw,meshphong_frag:Fw,meshphysical_vert:Nw,meshphysical_frag:Ow,meshtoon_vert:Uw,meshtoon_frag:zw,points_vert:Bw,points_frag:Gw,shadow_vert:Ww,shadow_frag:Hw,sprite_vert:Vw,sprite_frag:kw},be={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ii},uv2Transform:{value:new ii},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ii}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ii}}},ti={basic:{uniforms:jt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:jt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.fog,be.lights,{emissive:{value:new ke(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:jt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:jt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:jt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new ke(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:jt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:jt([be.points,be.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:jt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:jt([be.common,be.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:jt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:jt([be.sprite,be.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new ii},t2D:{value:null}},vertexShader:et.background_vert,fragmentShader:et.background_frag},cube:{uniforms:jt([be.envmap,{opacity:{value:1}}]),vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:jt([be.common,be.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:jt([be.lights,be.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ti.physical={uniforms:jt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new He(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};function qw(l,e,t,i,s,o){const u=new ke(0);let c=s===!0?0:1,d,f,p=null,g=0,_=null;function M(v,m){let b=!1,P=m.isScene===!0?m.background:null;P&&P.isTexture&&(P=e.get(P));const O=l.xr,N=O.getSession&&O.getSession();N&&N.environmentBlendMode==="additive"&&(P=null),P===null?w(u,c):P&&P.isColor&&(w(P,1),b=!0),(l.autoClear||b)&&l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil),P&&(P.isCubeTexture||P.mapping===Qa)?(f===void 0&&(f=new ri(new Bs(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:ns(ti.cube.uniforms),vertexShader:ti.cube.vertexShader,fragmentShader:ti.cube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(L,G,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=P,f.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,(p!==P||g!==P.version||_!==l.toneMapping)&&(f.material.needsUpdate=!0,p=P,g=P.version,_=l.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):P&&P.isTexture&&(d===void 0&&(d=new ri(new mc(2,2),new $n({name:"BackgroundMaterial",uniforms:ns(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Is,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=P,P.matrixAutoUpdate===!0&&P.updateMatrix(),d.material.uniforms.uvTransform.value.copy(P.matrix),(p!==P||g!==P.version||_!==l.toneMapping)&&(d.material.needsUpdate=!0,p=P,g=P.version,_=l.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null))}function w(v,m){t.buffers.color.setClear(v.r,v.g,v.b,m,o)}return{getClearColor:function(){return u},setClearColor:function(v,m=1){u.set(v),c=m,w(u,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,w(u,c)},render:M}}function Xw(l,e,t,i){const s=l.getParameter(34921),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),u=i.isWebGL2||o!==null,c={},d=m(null);let f=d,p=!1;function g(H,oe,j,re,ne){let $=!1;if(u){const se=v(re,j,oe);f!==se&&(f=se,M(f.object)),$=b(H,re,j,ne),$&&P(H,re,j,ne)}else{const se=oe.wireframe===!0;(f.geometry!==re.id||f.program!==j.id||f.wireframe!==se)&&(f.geometry=re.id,f.program=j.id,f.wireframe=se,$=!0)}ne!==null&&t.update(ne,34963),($||p)&&(p=!1,A(H,oe,j,re),ne!==null&&l.bindBuffer(34963,t.get(ne).buffer))}function _(){return i.isWebGL2?l.createVertexArray():o.createVertexArrayOES()}function M(H){return i.isWebGL2?l.bindVertexArray(H):o.bindVertexArrayOES(H)}function w(H){return i.isWebGL2?l.deleteVertexArray(H):o.deleteVertexArrayOES(H)}function v(H,oe,j){const re=j.wireframe===!0;let ne=c[H.id];ne===void 0&&(ne={},c[H.id]=ne);let $=ne[oe.id];$===void 0&&($={},ne[oe.id]=$);let se=$[re];return se===void 0&&(se=m(_()),$[re]=se),se}function m(H){const oe=[],j=[],re=[];for(let ne=0;ne<s;ne++)oe[ne]=0,j[ne]=0,re[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:oe,enabledAttributes:j,attributeDivisors:re,object:H,attributes:{},index:null}}function b(H,oe,j,re){const ne=f.attributes,$=oe.attributes;let se=0;const fe=j.getAttributes();for(const he in fe)if(fe[he].location>=0){const Ce=ne[he];let Re=$[he];if(Re===void 0&&(he==="instanceMatrix"&&H.instanceMatrix&&(Re=H.instanceMatrix),he==="instanceColor"&&H.instanceColor&&(Re=H.instanceColor)),Ce===void 0||Ce.attribute!==Re||Re&&Ce.data!==Re.data)return!0;se++}return f.attributesNum!==se||f.index!==re}function P(H,oe,j,re){const ne={},$=oe.attributes;let se=0;const fe=j.getAttributes();for(const he in fe)if(fe[he].location>=0){let Ce=$[he];Ce===void 0&&(he==="instanceMatrix"&&H.instanceMatrix&&(Ce=H.instanceMatrix),he==="instanceColor"&&H.instanceColor&&(Ce=H.instanceColor));const Re={};Re.attribute=Ce,Ce&&Ce.data&&(Re.data=Ce.data),ne[he]=Re,se++}f.attributes=ne,f.attributesNum=se,f.index=re}function O(){const H=f.newAttributes;for(let oe=0,j=H.length;oe<j;oe++)H[oe]=0}function N(H){L(H,0)}function L(H,oe){const j=f.newAttributes,re=f.enabledAttributes,ne=f.attributeDivisors;j[H]=1,re[H]===0&&(l.enableVertexAttribArray(H),re[H]=1),ne[H]!==oe&&((i.isWebGL2?l:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,oe),ne[H]=oe)}function G(){const H=f.newAttributes,oe=f.enabledAttributes;for(let j=0,re=oe.length;j<re;j++)oe[j]!==H[j]&&(l.disableVertexAttribArray(j),oe[j]=0)}function k(H,oe,j,re,ne,$){i.isWebGL2===!0&&(j===5124||j===5125)?l.vertexAttribIPointer(H,oe,j,ne,$):l.vertexAttribPointer(H,oe,j,re,ne,$)}function A(H,oe,j,re){if(i.isWebGL2===!1&&(H.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;O();const ne=re.attributes,$=j.getAttributes(),se=oe.defaultAttributeValues;for(const fe in $){const he=$[fe];if(he.location>=0){let pe=ne[fe];if(pe===void 0&&(fe==="instanceMatrix"&&H.instanceMatrix&&(pe=H.instanceMatrix),fe==="instanceColor"&&H.instanceColor&&(pe=H.instanceColor)),pe!==void 0){const Ce=pe.normalized,Re=pe.itemSize,ee=t.get(pe);if(ee===void 0)continue;const pt=ee.buffer,ze=ee.type,Ue=ee.bytesPerElement;if(pe.isInterleavedBufferAttribute){const Te=pe.data,tt=Te.stride,Ye=pe.offset;if(Te.isInstancedInterleavedBuffer){for(let Be=0;Be<he.locationSize;Be++)L(he.location+Be,Te.meshPerAttribute);H.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Be=0;Be<he.locationSize;Be++)N(he.location+Be);l.bindBuffer(34962,pt);for(let Be=0;Be<he.locationSize;Be++)k(he.location+Be,Re/he.locationSize,ze,Ce,tt*Ue,(Ye+Re/he.locationSize*Be)*Ue)}else{if(pe.isInstancedBufferAttribute){for(let Te=0;Te<he.locationSize;Te++)L(he.location+Te,pe.meshPerAttribute);H.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Te=0;Te<he.locationSize;Te++)N(he.location+Te);l.bindBuffer(34962,pt);for(let Te=0;Te<he.locationSize;Te++)k(he.location+Te,Re/he.locationSize,ze,Ce,Re*Ue,Re/he.locationSize*Te*Ue)}}else if(se!==void 0){const Ce=se[fe];if(Ce!==void 0)switch(Ce.length){case 2:l.vertexAttrib2fv(he.location,Ce);break;case 3:l.vertexAttrib3fv(he.location,Ce);break;case 4:l.vertexAttrib4fv(he.location,Ce);break;default:l.vertexAttrib1fv(he.location,Ce)}}}}G()}function U(){Ee();for(const H in c){const oe=c[H];for(const j in oe){const re=oe[j];for(const ne in re)w(re[ne].object),delete re[ne];delete oe[j]}delete c[H]}}function Q(H){if(c[H.id]===void 0)return;const oe=c[H.id];for(const j in oe){const re=oe[j];for(const ne in re)w(re[ne].object),delete re[ne];delete oe[j]}delete c[H.id]}function Y(H){for(const oe in c){const j=c[oe];if(j[H.id]===void 0)continue;const re=j[H.id];for(const ne in re)w(re[ne].object),delete re[ne];delete j[H.id]}}function Ee(){de(),p=!0,f!==d&&(f=d,M(f.object))}function de(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:g,reset:Ee,resetDefaultState:de,dispose:U,releaseStatesOfGeometry:Q,releaseStatesOfProgram:Y,initAttributes:O,enableAttribute:N,disableUnusedAttributes:G}}function Yw(l,e,t,i){const s=i.isWebGL2;let o;function u(f){o=f}function c(f,p){l.drawArrays(o,f,p),t.update(p,o,1)}function d(f,p,g){if(g===0)return;let _,M;if(s)_=l,M="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[M](o,f,p,g),t.update(p,o,g)}this.setMode=u,this.render=c,this.renderInstances=d}function Zw(l,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");i=l.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(k){if(k==="highp"){if(l.getShaderPrecisionFormat(35633,36338).precision>0&&l.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";k="mediump"}return k==="mediump"&&l.getShaderPrecisionFormat(35633,36337).precision>0&&l.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext!="undefined"&&l instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&l instanceof WebGL2ComputeRenderingContext;let c=t.precision!==void 0?t.precision:"highp";const d=o(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=u||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,g=l.getParameter(34930),_=l.getParameter(35660),M=l.getParameter(3379),w=l.getParameter(34076),v=l.getParameter(34921),m=l.getParameter(36347),b=l.getParameter(36348),P=l.getParameter(36349),O=_>0,N=u||e.has("OES_texture_float"),L=O&&N,G=u?l.getParameter(36183):0;return{isWebGL2:u,drawBuffers:f,getMaxAnisotropy:s,getMaxPrecision:o,precision:c,logarithmicDepthBuffer:p,maxTextures:g,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:w,maxAttributes:v,maxVertexUniforms:m,maxVaryings:b,maxFragmentUniforms:P,vertexTextures:O,floatFragmentTextures:N,floatVertexTextures:L,maxSamples:G}}function $w(l){const e=this;let t=null,i=0,s=!1,o=!1;const u=new rr,c=new ii,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_,M){const w=g.length!==0||_||i!==0||s;return s=_,t=p(g,M,0),i=g.length,w},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1,f()},this.setState=function(g,_,M){const w=g.clippingPlanes,v=g.clipIntersection,m=g.clipShadows,b=l.get(g);if(!s||w===null||w.length===0||o&&!m)o?p(null):f();else{const P=o?0:i,O=P*4;let N=b.clippingState||null;d.value=N,N=p(w,_,O,M);for(let L=0;L!==O;++L)N[L]=t[L];b.clippingState=N,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=P}};function f(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(g,_,M,w){const v=g!==null?g.length:0;let m=null;if(v!==0){if(m=d.value,w!==!0||m===null){const b=M+v*4,P=_.matrixWorldInverse;c.getNormalMatrix(P),(m===null||m.length<b)&&(m=new Float32Array(b));for(let O=0,N=M;O!==v;++O,N+=4)u.copy(g[O]).applyMatrix4(P,c),u.normal.toArray(m,N),m[N+3]=u.constant}d.value=m,d.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Kw(l){let e=new WeakMap;function t(u,c){return c===ic?u.mapping=Qr:c===rc&&(u.mapping=es),u}function i(u){if(u&&u.isTexture&&u.isRenderTargetTexture===!1){const c=u.mapping;if(c===ic||c===rc)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const f=new fy(d.height/2);return f.fromEquirectangularTexture(l,u),e.set(u,f),u.addEventListener("dispose",s),t(f.texture,u.mapping)}else return null}}return u}function s(u){const c=u.target;c.removeEventListener("dispose",s);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class no extends Id{constructor(e=-1,t=1,i=1,s=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,u=i+e,c=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,u=o+f*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(o,u,c,d,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Kr=4,Pf=[.125,.215,.35,.446,.526,.582],ar=20,Zl=new no,If=new ke;let $l=null;const sr=(1+Math.sqrt(5))/2,Yr=1/sr,Ff=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,sr,Yr),new B(0,sr,-Yr),new B(Yr,0,sr),new B(-Yr,0,sr),new B(sr,Yr,0),new B(-sr,Yr,0)];class Nf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){$l=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($l),e.scissorTest=!1,Za(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qr||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$l=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Fs,format:Yn,encoding:pr,depthBuffer:!1},s=Of(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Of(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jw(o)),this._blurMaterial=Jw(o,e,t)}return s}_compileMaterial(e){const t=new ri(this._lodPlanes[0],e);this._renderer.compile(t,Zl)}_sceneToCubeUV(e,t,i,s){const c=new In(90,1,t,i),d=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,_=p.toneMapping;p.getClearColor(If),p.toneMapping=Si,p.autoClear=!1;const M=new dc({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),w=new ri(new Bs,M);let v=!1;const m=e.background;m?m.isColor&&(M.color.copy(m),e.background=null,v=!0):(M.color.copy(If),v=!0);for(let b=0;b<6;b++){const P=b%3;P===0?(c.up.set(0,d[b],0),c.lookAt(f[b],0,0)):P===1?(c.up.set(0,0,d[b]),c.lookAt(0,f[b],0)):(c.up.set(0,d[b],0),c.lookAt(0,0,f[b]));const O=this._cubeSize;Za(s,P*O,b>2?O:0,O,O),p.setRenderTarget(s),v&&p.render(w,c),p.render(e,c)}w.geometry.dispose(),w.material.dispose(),p.toneMapping=_,p.autoClear=g,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Qr||e.mapping===es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uf());const o=s?this._cubemapMaterial:this._equirectMaterial,u=new ri(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=e;const d=this._cubeSize;Za(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(u,Zl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),u=Ff[(s-1)%Ff.length];this._blur(e,s-1,s,o,u)}t.autoClear=i}_blur(e,t,i,s,o){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,s,"latitudinal",o),this._halfBlur(u,e,i,i,s,"longitudinal",o)}_halfBlur(e,t,i,s,o,u,c){const d=this._renderer,f=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new ri(this._lodPlanes[s],f),_=f.uniforms,M=this._sizeLods[i]-1,w=isFinite(o)?Math.PI/(2*M):2*Math.PI/(2*ar-1),v=o/w,m=isFinite(o)?1+Math.floor(p*v):ar;m>ar&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ar}`);const b=[];let P=0;for(let k=0;k<ar;++k){const A=k/v,U=Math.exp(-A*A/2);b.push(U),k===0?P+=U:k<m&&(P+=2*U)}for(let k=0;k<b.length;k++)b[k]=b[k]/P;_.envMap.value=e.texture,_.samples.value=m,_.weights.value=b,_.latitudinal.value=u==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:O}=this;_.dTheta.value=w,_.mipInt.value=O-i;const N=this._sizeLods[s],L=3*N*(s>O-Kr?s-O+Kr:0),G=4*(this._cubeSize-N);Za(t,L,G,3*N,2*N),d.setRenderTarget(t),d.render(g,Zl)}}function jw(l){const e=[],t=[],i=[];let s=l;const o=l-Kr+1+Pf.length;for(let u=0;u<o;u++){const c=Math.pow(2,s);t.push(c);let d=1/c;u>l-Kr?d=Pf[u-l+Kr-1]:u===0&&(d=0),i.push(d);const f=1/(c-2),p=-f,g=1+f,_=[p,p,g,p,g,g,p,p,g,g,p,g],M=6,w=6,v=3,m=2,b=1,P=new Float32Array(v*w*M),O=new Float32Array(m*w*M),N=new Float32Array(b*w*M);for(let G=0;G<M;G++){const k=G%3*2/3-1,A=G>2?0:-1,U=[k,A,0,k+2/3,A,0,k+2/3,A+1,0,k,A,0,k+2/3,A+1,0,k,A+1,0];P.set(U,v*w*G),O.set(_,m*w*G);const Q=[G,G,G,G,G,G];N.set(Q,b*w*G)}const L=new Nn;L.setAttribute("position",new si(P,v)),L.setAttribute("uv",new si(O,m)),L.setAttribute("faceIndex",new si(N,b)),e.push(L),s>Kr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Of(l,e,t){const i=new wi(l,e,t);return i.texture.mapping=Qa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Za(l,e,t,i,s){l.viewport.set(e,t,i,s),l.scissor.set(e,t,i,s)}function Jw(l,e,t){const i=new Float32Array(ar),s=new B(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Uf(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function zf(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function gc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qw(l){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const d=c.mapping,f=d===ic||d===rc,p=d===Qr||d===es;if(f||p)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let g=e.get(c);return t===null&&(t=new Nf(l)),g=f?t.fromEquirectangular(c,g):t.fromCubemap(c,g),e.set(c,g),g.texture}else{if(e.has(c))return e.get(c).texture;{const g=c.image;if(f&&g&&g.height>0||p&&g&&s(g)){t===null&&(t=new Nf(l));const _=f?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,_),c.addEventListener("dispose",o),_.texture}else return null}}}return c}function s(c){let d=0;const f=6;for(let p=0;p<f;p++)c[p]!==void 0&&d++;return d===f}function o(c){const d=c.target;d.removeEventListener("dispose",o);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function eb(l){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=l.getExtension("WEBGL_depth_texture")||l.getExtension("MOZ_WEBGL_depth_texture")||l.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=l.getExtension("EXT_texture_filter_anisotropic")||l.getExtension("MOZ_EXT_texture_filter_anisotropic")||l.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=l.getExtension("WEBGL_compressed_texture_s3tc")||l.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=l.getExtension("WEBGL_compressed_texture_pvrtc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=l.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function tb(l,e,t,i){const s={},o=new WeakMap;function u(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const w in _.attributes)e.remove(_.attributes[w]);_.removeEventListener("dispose",u),delete s[_.id];const M=o.get(_);M&&(e.remove(M),o.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(g,_){return s[_.id]===!0||(_.addEventListener("dispose",u),s[_.id]=!0,t.memory.geometries++),_}function d(g){const _=g.attributes;for(const w in _)e.update(_[w],34962);const M=g.morphAttributes;for(const w in M){const v=M[w];for(let m=0,b=v.length;m<b;m++)e.update(v[m],34962)}}function f(g){const _=[],M=g.index,w=g.attributes.position;let v=0;if(M!==null){const P=M.array;v=M.version;for(let O=0,N=P.length;O<N;O+=3){const L=P[O+0],G=P[O+1],k=P[O+2];_.push(L,G,G,k,k,L)}}else{const P=w.array;v=w.version;for(let O=0,N=P.length/3-1;O<N;O+=3){const L=O+0,G=O+1,k=O+2;_.push(L,G,G,k,k,L)}}const m=new(wd(_)?Dd:Rd)(_,1);m.version=v;const b=o.get(g);b&&e.remove(b),o.set(g,m)}function p(g){const _=o.get(g);if(_){const M=g.index;M!==null&&_.version<M.version&&f(g)}else f(g);return o.get(g)}return{get:c,update:d,getWireframeAttribute:p}}function nb(l,e,t,i){const s=i.isWebGL2;let o;function u(_){o=_}let c,d;function f(_){c=_.type,d=_.bytesPerElement}function p(_,M){l.drawElements(o,M,c,_*d),t.update(M,o,1)}function g(_,M,w){if(w===0)return;let v,m;if(s)v=l,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](o,M,c,_*d,w),t.update(M,o,w)}this.setMode=u,this.setIndex=f,this.render=p,this.renderInstances=g}function ib(l){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,u,c){switch(t.calls++,u){case 4:t.triangles+=c*(o/3);break;case 1:t.lines+=c*(o/2);break;case 3:t.lines+=c*(o-1);break;case 2:t.lines+=c*o;break;case 0:t.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function rb(l,e){return l[0]-e[0]}function sb(l,e){return Math.abs(e[1])-Math.abs(l[1])}function Kl(l,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),l.divideScalar(t)}function ab(l,e,t){const i={},s=new Float32Array(8),o=new WeakMap,u=new Yt,c=[];for(let f=0;f<8;f++)c[f]=[f,0];function d(f,p,g,_){const M=f.morphTargetInfluences;if(e.isWebGL2===!0){const v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,m=v!==void 0?v.length:0;let b=o.get(p);if(b===void 0||b.count!==m){let j=function(){H.dispose(),o.delete(p),p.removeEventListener("dispose",j)};var w=j;b!==void 0&&b.texture.dispose();const N=p.morphAttributes.position!==void 0,L=p.morphAttributes.normal!==void 0,G=p.morphAttributes.color!==void 0,k=p.morphAttributes.position||[],A=p.morphAttributes.normal||[],U=p.morphAttributes.color||[];let Q=0;N===!0&&(Q=1),L===!0&&(Q=2),G===!0&&(Q=3);let Y=p.attributes.position.count*Q,Ee=1;Y>e.maxTextureSize&&(Ee=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const de=new Float32Array(Y*Ee*4*m),H=new Ad(de,Y,Ee,m);H.type=lr,H.needsUpdate=!0;const oe=Q*4;for(let re=0;re<m;re++){const ne=k[re],$=A[re],se=U[re],fe=Y*Ee*4*re;for(let he=0;he<ne.count;he++){const pe=he*oe;N===!0&&(u.fromBufferAttribute(ne,he),ne.normalized===!0&&Kl(u,ne),de[fe+pe+0]=u.x,de[fe+pe+1]=u.y,de[fe+pe+2]=u.z,de[fe+pe+3]=0),L===!0&&(u.fromBufferAttribute($,he),$.normalized===!0&&Kl(u,$),de[fe+pe+4]=u.x,de[fe+pe+5]=u.y,de[fe+pe+6]=u.z,de[fe+pe+7]=0),G===!0&&(u.fromBufferAttribute(se,he),se.normalized===!0&&Kl(u,se),de[fe+pe+8]=u.x,de[fe+pe+9]=u.y,de[fe+pe+10]=u.z,de[fe+pe+11]=se.itemSize===4?u.w:1)}}b={count:m,texture:H,size:new He(Y,Ee)},o.set(p,b),p.addEventListener("dispose",j)}let P=0;for(let N=0;N<M.length;N++)P+=M[N];const O=p.morphTargetsRelative?1:1-P;_.getUniforms().setValue(l,"morphTargetBaseInfluence",O),_.getUniforms().setValue(l,"morphTargetInfluences",M),_.getUniforms().setValue(l,"morphTargetsTexture",b.texture,t),_.getUniforms().setValue(l,"morphTargetsTextureSize",b.size)}else{const v=M===void 0?0:M.length;let m=i[p.id];if(m===void 0||m.length!==v){m=[];for(let L=0;L<v;L++)m[L]=[L,0];i[p.id]=m}for(let L=0;L<v;L++){const G=m[L];G[0]=L,G[1]=M[L]}m.sort(sb);for(let L=0;L<8;L++)L<v&&m[L][1]?(c[L][0]=m[L][0],c[L][1]=m[L][1]):(c[L][0]=Number.MAX_SAFE_INTEGER,c[L][1]=0);c.sort(rb);const b=p.morphAttributes.position,P=p.morphAttributes.normal;let O=0;for(let L=0;L<8;L++){const G=c[L],k=G[0],A=G[1];k!==Number.MAX_SAFE_INTEGER&&A?(b&&p.getAttribute("morphTarget"+L)!==b[k]&&p.setAttribute("morphTarget"+L,b[k]),P&&p.getAttribute("morphNormal"+L)!==P[k]&&p.setAttribute("morphNormal"+L,P[k]),s[L]=A,O+=A):(b&&p.hasAttribute("morphTarget"+L)===!0&&p.deleteAttribute("morphTarget"+L),P&&p.hasAttribute("morphNormal"+L)===!0&&p.deleteAttribute("morphNormal"+L),s[L]=0)}const N=p.morphTargetsRelative?1:1-O;_.getUniforms().setValue(l,"morphTargetBaseInfluence",N),_.getUniforms().setValue(l,"morphTargetInfluences",s)}}return{update:d}}function ob(l,e,t,i){let s=new WeakMap;function o(d){const f=i.render.frame,p=d.geometry,g=e.get(d,p);return s.get(g)!==f&&(e.update(g),s.set(g,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),t.update(d.instanceMatrix,34962),d.instanceColor!==null&&t.update(d.instanceColor,34962)),g}function u(){s=new WeakMap}function c(d){const f=d.target;f.removeEventListener("dispose",c),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:u}}const Od=new Fn,Ud=new Ad,zd=new JM,Bd=new Fd,Bf=[],Gf=[],Wf=new Float32Array(16),Hf=new Float32Array(9),Vf=new Float32Array(4);function rs(l,e,t){const i=l[0];if(i<=0||i>0)return l;const s=e*t;let o=Bf[s];if(o===void 0&&(o=new Float32Array(s),Bf[s]=o),e!==0){i.toArray(o,0);for(let u=1,c=0;u!==e;++u)c+=t,l[u].toArray(o,c)}return o}function rn(l,e){if(l.length!==e.length)return!1;for(let t=0,i=l.length;t<i;t++)if(l[t]!==e[t])return!1;return!0}function sn(l,e){for(let t=0,i=e.length;t<i;t++)l[t]=e[t]}function io(l,e){let t=Gf[e];t===void 0&&(t=new Int32Array(e),Gf[e]=t);for(let i=0;i!==e;++i)t[i]=l.allocateTextureUnit();return t}function lb(l,e){const t=this.cache;t[0]!==e&&(l.uniform1f(this.addr,e),t[0]=e)}function cb(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(l.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;l.uniform2fv(this.addr,e),sn(t,e)}}function ub(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(l.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(l.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;l.uniform3fv(this.addr,e),sn(t,e)}}function hb(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(l.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;l.uniform4fv(this.addr,e),sn(t,e)}}function fb(l,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;l.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;Vf.set(i),l.uniformMatrix2fv(this.addr,!1,Vf),sn(t,i)}}function db(l,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;l.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;Hf.set(i),l.uniformMatrix3fv(this.addr,!1,Hf),sn(t,i)}}function pb(l,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;l.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;Wf.set(i),l.uniformMatrix4fv(this.addr,!1,Wf),sn(t,i)}}function mb(l,e){const t=this.cache;t[0]!==e&&(l.uniform1i(this.addr,e),t[0]=e)}function gb(l,e){const t=this.cache;rn(t,e)||(l.uniform2iv(this.addr,e),sn(t,e))}function _b(l,e){const t=this.cache;rn(t,e)||(l.uniform3iv(this.addr,e),sn(t,e))}function vb(l,e){const t=this.cache;rn(t,e)||(l.uniform4iv(this.addr,e),sn(t,e))}function xb(l,e){const t=this.cache;t[0]!==e&&(l.uniform1ui(this.addr,e),t[0]=e)}function Mb(l,e){const t=this.cache;rn(t,e)||(l.uniform2uiv(this.addr,e),sn(t,e))}function yb(l,e){const t=this.cache;rn(t,e)||(l.uniform3uiv(this.addr,e),sn(t,e))}function Sb(l,e){const t=this.cache;rn(t,e)||(l.uniform4uiv(this.addr,e),sn(t,e))}function wb(l,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(l.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||Od,s)}function bb(l,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(l.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||zd,s)}function Eb(l,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(l.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Bd,s)}function Tb(l,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(l.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ud,s)}function Ab(l){switch(l){case 5126:return lb;case 35664:return cb;case 35665:return ub;case 35666:return hb;case 35674:return fb;case 35675:return db;case 35676:return pb;case 5124:case 35670:return mb;case 35667:case 35671:return gb;case 35668:case 35672:return _b;case 35669:case 35673:return vb;case 5125:return xb;case 36294:return Mb;case 36295:return yb;case 36296:return Sb;case 35678:case 36198:case 36298:case 36306:case 35682:return wb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return Eb;case 36289:case 36303:case 36311:case 36292:return Tb}}function Cb(l,e){l.uniform1fv(this.addr,e)}function Lb(l,e){const t=rs(e,this.size,2);l.uniform2fv(this.addr,t)}function Rb(l,e){const t=rs(e,this.size,3);l.uniform3fv(this.addr,t)}function Db(l,e){const t=rs(e,this.size,4);l.uniform4fv(this.addr,t)}function Pb(l,e){const t=rs(e,this.size,4);l.uniformMatrix2fv(this.addr,!1,t)}function Ib(l,e){const t=rs(e,this.size,9);l.uniformMatrix3fv(this.addr,!1,t)}function Fb(l,e){const t=rs(e,this.size,16);l.uniformMatrix4fv(this.addr,!1,t)}function Nb(l,e){l.uniform1iv(this.addr,e)}function Ob(l,e){l.uniform2iv(this.addr,e)}function Ub(l,e){l.uniform3iv(this.addr,e)}function zb(l,e){l.uniform4iv(this.addr,e)}function Bb(l,e){l.uniform1uiv(this.addr,e)}function Gb(l,e){l.uniform2uiv(this.addr,e)}function Wb(l,e){l.uniform3uiv(this.addr,e)}function Hb(l,e){l.uniform4uiv(this.addr,e)}function Vb(l,e,t){const i=e.length,s=io(t,i);l.uniform1iv(this.addr,s);for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Od,s[o])}function kb(l,e,t){const i=e.length,s=io(t,i);l.uniform1iv(this.addr,s);for(let o=0;o!==i;++o)t.setTexture3D(e[o]||zd,s[o])}function qb(l,e,t){const i=e.length,s=io(t,i);l.uniform1iv(this.addr,s);for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Bd,s[o])}function Xb(l,e,t){const i=e.length,s=io(t,i);l.uniform1iv(this.addr,s);for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ud,s[o])}function Yb(l){switch(l){case 5126:return Cb;case 35664:return Lb;case 35665:return Rb;case 35666:return Db;case 35674:return Pb;case 35675:return Ib;case 35676:return Fb;case 5124:case 35670:return Nb;case 35667:case 35671:return Ob;case 35668:case 35672:return Ub;case 35669:case 35673:return zb;case 5125:return Bb;case 36294:return Gb;case 36295:return Wb;case 36296:return Hb;case 35678:case 36198:case 36298:case 36306:case 35682:return Vb;case 35679:case 36299:case 36307:return kb;case 35680:case 36300:case 36308:case 36293:return qb;case 36289:case 36303:case 36311:case 36292:return Xb}}class Zb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Ab(t.type)}}class $b{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Yb(t.type)}}class Kb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,u=s.length;o!==u;++o){const c=s[o];c.setValue(e,t[c.id],i)}}}const jl=/(\w+)(\])?(\[|\.)?/g;function kf(l,e){l.seq.push(e),l.map[e.id]=e}function jb(l,e,t){const i=l.name,s=i.length;for(jl.lastIndex=0;;){const o=jl.exec(i),u=jl.lastIndex;let c=o[1];const d=o[2]==="]",f=o[3];if(d&&(c=c|0),f===void 0||f==="["&&u+2===s){kf(t,f===void 0?new Zb(c,l,e):new $b(c,l,e));break}else{let g=t.map[c];g===void 0&&(g=new Kb(c),kf(t,g)),t=g}}}class ja{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),u=e.getUniformLocation(t,o.name);jb(o,u,this)}}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,u=t.length;o!==u;++o){const c=t[o],d=i[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const u=e[s];u.id in t&&i.push(u)}return i}}function qf(l,e,t){const i=l.createShader(e);return l.shaderSource(i,t),l.compileShader(i),i}let Jb=0;function Qb(l,e){const t=l.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=s;u<o;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}function e1(l){switch(l){case pr:return["Linear","( value )"];case Et:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",l),["Linear","( value )"]}}function Xf(l,e,t){const i=l.getShaderParameter(e,35713),s=l.getShaderInfoLog(e).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const u=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Qb(l.getShaderSource(e),u)}else return s}function t1(l,e){const t=e1(e);return"vec4 "+l+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function n1(l,e){let t;switch(e){case EM:t="Linear";break;case TM:t="Reinhard";break;case AM:t="OptimizedCineon";break;case CM:t="ACESFilmic";break;case LM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+l+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function i1(l){return[l.extensionDerivatives||!!l.envMapCubeUVHeight||l.bumpMap||l.tangentSpaceNormalMap||l.clearcoatNormalMap||l.flatShading||l.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(l.extensionFragDepth||l.logarithmicDepthBuffer)&&l.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",l.extensionDrawBuffers&&l.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(l.extensionShaderTextureLOD||l.envMap||l.transmission)&&l.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ls).join(`
`)}function r1(l){const e=[];for(const t in l){const i=l[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function s1(l,e){const t={},i=l.getProgramParameter(e,35721);for(let s=0;s<i;s++){const o=l.getActiveAttrib(e,s),u=o.name;let c=1;o.type===35674&&(c=2),o.type===35675&&(c=3),o.type===35676&&(c=4),t[u]={type:o.type,location:l.getAttribLocation(e,u),locationSize:c}}return t}function Ls(l){return l!==""}function Yf(l,e){return l.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zf(l,e){return l.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const a1=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(l){return l.replace(a1,o1)}function o1(l,e){const t=et[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return cc(t)}const l1=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,c1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $f(l){return l.replace(c1,Gd).replace(l1,u1)}function u1(l,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Gd(l,e,t,i)}function Gd(l,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Kf(l){let e="precision "+l.precision+` float;
precision `+l.precision+" int;";return l.precision==="highp"?e+=`
#define HIGH_PRECISION`:l.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function h1(l){let e="SHADOWMAP_TYPE_BASIC";return l.shadowMapType===vd?e="SHADOWMAP_TYPE_PCF":l.shadowMapType===nM?e="SHADOWMAP_TYPE_PCF_SOFT":l.shadowMapType===Cs&&(e="SHADOWMAP_TYPE_VSM"),e}function f1(l){let e="ENVMAP_TYPE_CUBE";if(l.envMap)switch(l.envMapMode){case Qr:case es:e="ENVMAP_TYPE_CUBE";break;case Qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function d1(l){let e="ENVMAP_MODE_REFLECTION";if(l.envMap)switch(l.envMapMode){case es:e="ENVMAP_MODE_REFRACTION";break}return e}function p1(l){let e="ENVMAP_BLENDING_NONE";if(l.envMap)switch(l.combine){case Ja:e="ENVMAP_BLENDING_MULTIPLY";break;case wM:e="ENVMAP_BLENDING_MIX";break;case bM:e="ENVMAP_BLENDING_ADD";break}return e}function m1(l){const e=l.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function g1(l,e,t,i){const s=l.getContext(),o=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=h1(t),f=f1(t),p=d1(t),g=p1(t),_=m1(t),M=t.isWebGL2?"":i1(t),w=r1(o),v=s.createProgram();let m,b,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[w].filter(Ls).join(`
`),m.length>0&&(m+=`
`),b=[M,w].filter(Ls).join(`
`),b.length>0&&(b+=`
`)):(m=[Kf(t),"#define SHADER_NAME "+t.shaderName,w,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),b=[M,Kf(t),"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?et.tonemapping_pars_fragment:"",t.toneMapping!==Si?n1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.encodings_pars_fragment,t1("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ls).join(`
`)),u=cc(u),u=Yf(u,t),u=Zf(u,t),c=cc(c),c=Yf(c,t),c=Zf(c,t),u=$f(u),c=$f(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,b=["#define varying in",t.glslVersion===vf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const O=P+m+u,N=P+b+c,L=qf(s,35633,O),G=qf(s,35632,N);if(s.attachShader(v,L),s.attachShader(v,G),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v),l.debug.checkShaderErrors){const U=s.getProgramInfoLog(v).trim(),Q=s.getShaderInfoLog(L).trim(),Y=s.getShaderInfoLog(G).trim();let Ee=!0,de=!0;if(s.getProgramParameter(v,35714)===!1){Ee=!1;const H=Xf(s,L,"vertex"),oe=Xf(s,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,35715)+`

Program Info Log: `+U+`
`+H+`
`+oe)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(Q===""||Y==="")&&(de=!1);de&&(this.diagnostics={runnable:Ee,programLog:U,vertexShader:{log:Q,prefix:m},fragmentShader:{log:Y,prefix:b}})}s.deleteShader(L),s.deleteShader(G);let k;this.getUniforms=function(){return k===void 0&&(k=new ja(s,v)),k};let A;return this.getAttributes=function(){return A===void 0&&(A=s1(s,v)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=Jb++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=G,this}let _1=0;class v1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new x1(e);t.set(e,i)}return t.get(e)}}class x1{constructor(e){this.id=_1++,this.code=e,this.usedTimes=0}}function M1(l,e,t,i,s,o,u){const c=new Ld,d=new v1,f=[],p=s.isWebGL2,g=s.logarithmicDepthBuffer,_=s.vertexTextures;let M=s.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(A,U,Q,Y,Ee){const de=Y.fog,H=Ee.geometry,oe=A.isMeshStandardMaterial?Y.environment:null,j=(A.isMeshStandardMaterial?t:e).get(A.envMap||oe),re=!!j&&j.mapping===Qa?j.image.height:null,ne=w[A.type];A.precision!==null&&(M=s.getMaxPrecision(A.precision),M!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",M,"instead."));const $=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,se=$!==void 0?$.length:0;let fe=0;H.morphAttributes.position!==void 0&&(fe=1),H.morphAttributes.normal!==void 0&&(fe=2),H.morphAttributes.color!==void 0&&(fe=3);let he,pe,Ce,Re;if(ne){const tt=ti[ne];he=tt.vertexShader,pe=tt.fragmentShader}else he=A.vertexShader,pe=A.fragmentShader,d.update(A),Ce=d.getVertexShaderID(A),Re=d.getFragmentShaderID(A);const ee=l.getRenderTarget(),pt=A.alphaTest>0,ze=A.clearcoat>0,Ue=A.iridescence>0;return{isWebGL2:p,shaderID:ne,shaderName:A.type,vertexShader:he,fragmentShader:pe,defines:A.defines,customVertexShaderID:Ce,customFragmentShaderID:Re,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:M,instancing:Ee.isInstancedMesh===!0,instancingColor:Ee.isInstancedMesh===!0&&Ee.instanceColor!==null,supportsVertexTextures:_,outputEncoding:ee===null?l.outputEncoding:ee.isXRRenderTarget===!0?ee.texture.encoding:pr,map:!!A.map,matcap:!!A.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:re,lightMap:!!A.lightMap,aoMap:!!A.aoMap,emissiveMap:!!A.emissiveMap,bumpMap:!!A.bumpMap,normalMap:!!A.normalMap,objectSpaceNormalMap:A.normalMapType===ZM,tangentSpaceNormalMap:A.normalMapType===is,decodeVideoTexture:!!A.map&&A.map.isVideoTexture===!0&&A.map.encoding===Et,clearcoat:ze,clearcoatMap:ze&&!!A.clearcoatMap,clearcoatRoughnessMap:ze&&!!A.clearcoatRoughnessMap,clearcoatNormalMap:ze&&!!A.clearcoatNormalMap,iridescence:Ue,iridescenceMap:Ue&&!!A.iridescenceMap,iridescenceThicknessMap:Ue&&!!A.iridescenceThicknessMap,displacementMap:!!A.displacementMap,roughnessMap:!!A.roughnessMap,metalnessMap:!!A.metalnessMap,specularMap:!!A.specularMap,specularIntensityMap:!!A.specularIntensityMap,specularColorMap:!!A.specularColorMap,opaque:A.transparent===!1&&A.blending===jr,alphaMap:!!A.alphaMap,alphaTest:pt,gradientMap:!!A.gradientMap,sheen:A.sheen>0,sheenColorMap:!!A.sheenColorMap,sheenRoughnessMap:!!A.sheenRoughnessMap,transmission:A.transmission>0,transmissionMap:!!A.transmissionMap,thicknessMap:!!A.thicknessMap,combine:A.combine,vertexTangents:!!A.normalMap&&!!H.attributes.tangent,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUvs:!!A.map||!!A.bumpMap||!!A.normalMap||!!A.specularMap||!!A.alphaMap||!!A.emissiveMap||!!A.roughnessMap||!!A.metalnessMap||!!A.clearcoatMap||!!A.clearcoatRoughnessMap||!!A.clearcoatNormalMap||!!A.iridescenceMap||!!A.iridescenceThicknessMap||!!A.displacementMap||!!A.transmissionMap||!!A.thicknessMap||!!A.specularIntensityMap||!!A.specularColorMap||!!A.sheenColorMap||!!A.sheenRoughnessMap,uvsVertexOnly:!(!!A.map||!!A.bumpMap||!!A.normalMap||!!A.specularMap||!!A.alphaMap||!!A.emissiveMap||!!A.roughnessMap||!!A.metalnessMap||!!A.clearcoatNormalMap||!!A.iridescenceMap||!!A.iridescenceThicknessMap||A.transmission>0||!!A.transmissionMap||!!A.thicknessMap||!!A.specularIntensityMap||!!A.specularColorMap||A.sheen>0||!!A.sheenColorMap||!!A.sheenRoughnessMap)&&!!A.displacementMap,fog:!!de,useFog:A.fog===!0,fogExp2:de&&de.isFogExp2,flatShading:!!A.flatShading,sizeAttenuation:A.sizeAttenuation,logarithmicDepthBuffer:g,skinning:Ee.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:fe,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:A.dithering,shadowMapEnabled:l.shadowMap.enabled&&Q.length>0,shadowMapType:l.shadowMap.type,toneMapping:A.toneMapped?l.toneMapping:Si,physicallyCorrectLights:l.physicallyCorrectLights,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===fr,flipSided:A.side===Zn,useDepthPacking:!!A.depthPacking,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:A.extensions&&A.extensions.derivatives,extensionFragDepth:A.extensions&&A.extensions.fragDepth,extensionDrawBuffers:A.extensions&&A.extensions.drawBuffers,extensionShaderTextureLOD:A.extensions&&A.extensions.shaderTextureLOD,rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),customProgramCacheKey:A.customProgramCacheKey()}}function m(A){const U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(const Q in A.defines)U.push(Q),U.push(A.defines[Q]);return A.isRawShaderMaterial===!1&&(b(U,A),P(U,A),U.push(l.outputEncoding)),U.push(A.customProgramCacheKey),U.join()}function b(A,U){A.push(U.precision),A.push(U.outputEncoding),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.combine),A.push(U.vertexUvs),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function P(A,U){c.disableAll(),U.isWebGL2&&c.enable(0),U.supportsVertexTextures&&c.enable(1),U.instancing&&c.enable(2),U.instancingColor&&c.enable(3),U.map&&c.enable(4),U.matcap&&c.enable(5),U.envMap&&c.enable(6),U.lightMap&&c.enable(7),U.aoMap&&c.enable(8),U.emissiveMap&&c.enable(9),U.bumpMap&&c.enable(10),U.normalMap&&c.enable(11),U.objectSpaceNormalMap&&c.enable(12),U.tangentSpaceNormalMap&&c.enable(13),U.clearcoat&&c.enable(14),U.clearcoatMap&&c.enable(15),U.clearcoatRoughnessMap&&c.enable(16),U.clearcoatNormalMap&&c.enable(17),U.iridescence&&c.enable(18),U.iridescenceMap&&c.enable(19),U.iridescenceThicknessMap&&c.enable(20),U.displacementMap&&c.enable(21),U.specularMap&&c.enable(22),U.roughnessMap&&c.enable(23),U.metalnessMap&&c.enable(24),U.gradientMap&&c.enable(25),U.alphaMap&&c.enable(26),U.alphaTest&&c.enable(27),U.vertexColors&&c.enable(28),U.vertexAlphas&&c.enable(29),U.vertexUvs&&c.enable(30),U.vertexTangents&&c.enable(31),U.uvsVertexOnly&&c.enable(32),U.fog&&c.enable(33),A.push(c.mask),c.disableAll(),U.useFog&&c.enable(0),U.flatShading&&c.enable(1),U.logarithmicDepthBuffer&&c.enable(2),U.skinning&&c.enable(3),U.morphTargets&&c.enable(4),U.morphNormals&&c.enable(5),U.morphColors&&c.enable(6),U.premultipliedAlpha&&c.enable(7),U.shadowMapEnabled&&c.enable(8),U.physicallyCorrectLights&&c.enable(9),U.doubleSided&&c.enable(10),U.flipSided&&c.enable(11),U.useDepthPacking&&c.enable(12),U.dithering&&c.enable(13),U.specularIntensityMap&&c.enable(14),U.specularColorMap&&c.enable(15),U.transmission&&c.enable(16),U.transmissionMap&&c.enable(17),U.thicknessMap&&c.enable(18),U.sheen&&c.enable(19),U.sheenColorMap&&c.enable(20),U.sheenRoughnessMap&&c.enable(21),U.decodeVideoTexture&&c.enable(22),U.opaque&&c.enable(23),A.push(c.mask)}function O(A){const U=w[A.type];let Q;if(U){const Y=ti[U];Q=Pd.clone(Y.uniforms)}else Q=A.uniforms;return Q}function N(A,U){let Q;for(let Y=0,Ee=f.length;Y<Ee;Y++){const de=f[Y];if(de.cacheKey===U){Q=de,++Q.usedTimes;break}}return Q===void 0&&(Q=new g1(l,U,A,o),f.push(Q)),Q}function L(A){if(--A.usedTimes===0){const U=f.indexOf(A);f[U]=f[f.length-1],f.pop(),A.destroy()}}function G(A){d.remove(A)}function k(){d.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:O,acquireProgram:N,releaseProgram:L,releaseShaderCache:G,programs:f,dispose:k}}function y1(){let l=new WeakMap;function e(o){let u=l.get(o);return u===void 0&&(u={},l.set(o,u)),u}function t(o){l.delete(o)}function i(o,u,c){l.get(o)[u]=c}function s(){l=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function S1(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.material.id!==e.material.id?l.material.id-e.material.id:l.z!==e.z?l.z-e.z:l.id-e.id}function jf(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.z!==e.z?e.z-l.z:l.id-e.id}function Jf(){const l=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function u(g,_,M,w,v,m){let b=l[e];return b===void 0?(b={id:g.id,object:g,geometry:_,material:M,groupOrder:w,renderOrder:g.renderOrder,z:v,group:m},l[e]=b):(b.id=g.id,b.object=g,b.geometry=_,b.material=M,b.groupOrder=w,b.renderOrder=g.renderOrder,b.z=v,b.group=m),e++,b}function c(g,_,M,w,v,m){const b=u(g,_,M,w,v,m);M.transmission>0?i.push(b):M.transparent===!0?s.push(b):t.push(b)}function d(g,_,M,w,v,m){const b=u(g,_,M,w,v,m);M.transmission>0?i.unshift(b):M.transparent===!0?s.unshift(b):t.unshift(b)}function f(g,_){t.length>1&&t.sort(g||S1),i.length>1&&i.sort(_||jf),s.length>1&&s.sort(_||jf)}function p(){for(let g=e,_=l.length;g<_;g++){const M=l[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:c,unshift:d,finish:p,sort:f}}function w1(){let l=new WeakMap;function e(i,s){let o;return l.has(i)===!1?(o=new Jf,l.set(i,[o])):s>=l.get(i).length?(o=new Jf,l.get(i).push(o)):o=l.get(i)[s],o}function t(){l=new WeakMap}return{get:e,dispose:t}}function b1(){const l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new ke};break;case"SpotLight":t={position:new B,direction:new B,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new B,halfWidth:new B,halfHeight:new B};break}return l[e.id]=t,t}}}function E1(){const l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[e.id]=t,t}}}let T1=0;function A1(l,e){return(e.castShadow?1:0)-(l.castShadow?1:0)}function C1(l,e){const t=new b1,i=E1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let p=0;p<9;p++)s.probe.push(new B);const o=new B,u=new zt,c=new zt;function d(p,g){let _=0,M=0,w=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let v=0,m=0,b=0,P=0,O=0,N=0,L=0,G=0;p.sort(A1);const k=g!==!0?Math.PI:1;for(let U=0,Q=p.length;U<Q;U++){const Y=p[U],Ee=Y.color,de=Y.intensity,H=Y.distance,oe=Y.shadow&&Y.shadow.map?Y.shadow.map.texture:null;if(Y.isAmbientLight)_+=Ee.r*de*k,M+=Ee.g*de*k,w+=Ee.b*de*k;else if(Y.isLightProbe)for(let j=0;j<9;j++)s.probe[j].addScaledVector(Y.sh.coefficients[j],de);else if(Y.isDirectionalLight){const j=t.get(Y);if(j.color.copy(Y.color).multiplyScalar(Y.intensity*k),Y.castShadow){const re=Y.shadow,ne=i.get(Y);ne.shadowBias=re.bias,ne.shadowNormalBias=re.normalBias,ne.shadowRadius=re.radius,ne.shadowMapSize=re.mapSize,s.directionalShadow[v]=ne,s.directionalShadowMap[v]=oe,s.directionalShadowMatrix[v]=Y.shadow.matrix,N++}s.directional[v]=j,v++}else if(Y.isSpotLight){const j=t.get(Y);if(j.position.setFromMatrixPosition(Y.matrixWorld),j.color.copy(Ee).multiplyScalar(de*k),j.distance=H,j.coneCos=Math.cos(Y.angle),j.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),j.decay=Y.decay,Y.castShadow){const re=Y.shadow,ne=i.get(Y);ne.shadowBias=re.bias,ne.shadowNormalBias=re.normalBias,ne.shadowRadius=re.radius,ne.shadowMapSize=re.mapSize,s.spotShadow[b]=ne,s.spotShadowMap[b]=oe,s.spotShadowMatrix[b]=Y.shadow.matrix,G++}s.spot[b]=j,b++}else if(Y.isRectAreaLight){const j=t.get(Y);j.color.copy(Ee).multiplyScalar(de),j.halfWidth.set(Y.width*.5,0,0),j.halfHeight.set(0,Y.height*.5,0),s.rectArea[P]=j,P++}else if(Y.isPointLight){const j=t.get(Y);if(j.color.copy(Y.color).multiplyScalar(Y.intensity*k),j.distance=Y.distance,j.decay=Y.decay,Y.castShadow){const re=Y.shadow,ne=i.get(Y);ne.shadowBias=re.bias,ne.shadowNormalBias=re.normalBias,ne.shadowRadius=re.radius,ne.shadowMapSize=re.mapSize,ne.shadowCameraNear=re.camera.near,ne.shadowCameraFar=re.camera.far,s.pointShadow[m]=ne,s.pointShadowMap[m]=oe,s.pointShadowMatrix[m]=Y.shadow.matrix,L++}s.point[m]=j,m++}else if(Y.isHemisphereLight){const j=t.get(Y);j.skyColor.copy(Y.color).multiplyScalar(de*k),j.groundColor.copy(Y.groundColor).multiplyScalar(de*k),s.hemi[O]=j,O++}}P>0&&(e.isWebGL2||l.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):l.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=_,s.ambient[1]=M,s.ambient[2]=w;const A=s.hash;(A.directionalLength!==v||A.pointLength!==m||A.spotLength!==b||A.rectAreaLength!==P||A.hemiLength!==O||A.numDirectionalShadows!==N||A.numPointShadows!==L||A.numSpotShadows!==G)&&(s.directional.length=v,s.spot.length=b,s.rectArea.length=P,s.point.length=m,s.hemi.length=O,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=G,s.spotShadowMap.length=G,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=L,s.spotShadowMatrix.length=G,A.directionalLength=v,A.pointLength=m,A.spotLength=b,A.rectAreaLength=P,A.hemiLength=O,A.numDirectionalShadows=N,A.numPointShadows=L,A.numSpotShadows=G,s.version=T1++)}function f(p,g){let _=0,M=0,w=0,v=0,m=0;const b=g.matrixWorldInverse;for(let P=0,O=p.length;P<O;P++){const N=p[P];if(N.isDirectionalLight){const L=s.directional[_];L.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(b),_++}else if(N.isSpotLight){const L=s.spot[w];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(b),L.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(b),w++}else if(N.isRectAreaLight){const L=s.rectArea[v];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(b),c.identity(),u.copy(N.matrixWorld),u.premultiply(b),c.extractRotation(u),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),L.halfWidth.applyMatrix4(c),L.halfHeight.applyMatrix4(c),v++}else if(N.isPointLight){const L=s.point[M];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(b),M++}else if(N.isHemisphereLight){const L=s.hemi[m];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(b),m++}}}return{setup:d,setupView:f,state:s}}function Qf(l,e){const t=new C1(l,e),i=[],s=[];function o(){i.length=0,s.length=0}function u(g){i.push(g)}function c(g){s.push(g)}function d(g){t.setup(i,g)}function f(g){t.setupView(i,g)}return{init:o,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:d,setupLightsView:f,pushLight:u,pushShadow:c}}function L1(l,e){let t=new WeakMap;function i(o,u=0){let c;return t.has(o)===!1?(c=new Qf(l,e),t.set(o,[c])):u>=t.get(o).length?(c=new Qf(l,e),t.get(o).push(c)):c=t.get(o)[u],c}function s(){t=new WeakMap}return{get:i,dispose:s}}class Wd extends Zt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=XM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hd extends Zt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new B,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const R1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function P1(l,e,t){let i=new pc;const s=new He,o=new He,u=new Yt,c=new Wd({depthPacking:YM}),d=new Hd,f={},p=t.maxTextureSize,g={0:Zn,1:Is,2:fr},_=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:R1,fragmentShader:D1}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const w=new Nn;w.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ri(w,_),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vd,this.render=function(N,L,G){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||N.length===0)return;const k=l.getRenderTarget(),A=l.getActiveCubeFace(),U=l.getActiveMipmapLevel(),Q=l.state;Q.setBlending(Vi),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);for(let Y=0,Ee=N.length;Y<Ee;Y++){const de=N[Y],H=de.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const oe=H.getFrameExtents();if(s.multiply(oe),o.copy(H.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/oe.x),s.x=o.x*oe.x,H.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/oe.y),s.y=o.y*oe.y,H.mapSize.y=o.y)),H.map===null&&!H.isPointLightShadow&&this.type===Cs&&(H.map=new wi(s.x,s.y),H.map.texture.name=de.name+".shadowMap",H.mapPass=new wi(s.x,s.y),H.camera.updateProjectionMatrix()),H.map===null){const re={minFilter:un,magFilter:un,format:Yn};H.map=new wi(s.x,s.y,re),H.map.texture.name=de.name+".shadowMap",H.camera.updateProjectionMatrix()}l.setRenderTarget(H.map),l.clear();const j=H.getViewportCount();for(let re=0;re<j;re++){const ne=H.getViewport(re);u.set(o.x*ne.x,o.y*ne.y,o.x*ne.z,o.y*ne.w),Q.viewport(u),H.updateMatrices(de,re),i=H.getFrustum(),O(L,G,H.camera,de,this.type)}!H.isPointLightShadow&&this.type===Cs&&b(H,G),H.needsUpdate=!1}m.needsUpdate=!1,l.setRenderTarget(k,A,U)};function b(N,L){const G=e.update(v);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),_.uniforms.shadow_pass.value=N.map.texture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,l.setRenderTarget(N.mapPass),l.clear(),l.renderBufferDirect(L,null,G,_,v,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,l.setRenderTarget(N.map),l.clear(),l.renderBufferDirect(L,null,G,M,v,null)}function P(N,L,G,k,A,U){let Q=null;const Y=G.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(Y!==void 0?Q=Y:Q=G.isPointLight===!0?d:c,l.localClippingEnabled&&L.clipShadows===!0&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0){const Ee=Q.uuid,de=L.uuid;let H=f[Ee];H===void 0&&(H={},f[Ee]=H);let oe=H[de];oe===void 0&&(oe=Q.clone(),H[de]=oe),Q=oe}return Q.visible=L.visible,Q.wireframe=L.wireframe,U===Cs?Q.side=L.shadowSide!==null?L.shadowSide:L.side:Q.side=L.shadowSide!==null?L.shadowSide:g[L.side],Q.alphaMap=L.alphaMap,Q.alphaTest=L.alphaTest,Q.clipShadows=L.clipShadows,Q.clippingPlanes=L.clippingPlanes,Q.clipIntersection=L.clipIntersection,Q.displacementMap=L.displacementMap,Q.displacementScale=L.displacementScale,Q.displacementBias=L.displacementBias,Q.wireframeLinewidth=L.wireframeLinewidth,Q.linewidth=L.linewidth,G.isPointLight===!0&&Q.isMeshDistanceMaterial===!0&&(Q.referencePosition.setFromMatrixPosition(G.matrixWorld),Q.nearDistance=k,Q.farDistance=A),Q}function O(N,L,G,k,A){if(N.visible===!1)return;if(N.layers.test(L.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&A===Cs)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,N.matrixWorld);const Y=e.update(N),Ee=N.material;if(Array.isArray(Ee)){const de=Y.groups;for(let H=0,oe=de.length;H<oe;H++){const j=de[H],re=Ee[j.materialIndex];if(re&&re.visible){const ne=P(N,re,k,G.near,G.far,A);l.renderBufferDirect(G,null,Y,ne,N,j)}}}else if(Ee.visible){const de=P(N,Ee,k,G.near,G.far,A);l.renderBufferDirect(G,null,Y,de,N,null)}}const Q=N.children;for(let Y=0,Ee=Q.length;Y<Ee;Y++)O(Q[Y],L,G,k,A)}}function I1(l,e,t){const i=t.isWebGL2;function s(){let I=!1;const _e=new Yt;let me=null;const Ie=new Yt(0,0,0,0);return{setMask:function(Se){me!==Se&&!I&&(l.colorMask(Se,Se,Se,Se),me=Se)},setLocked:function(Se){I=Se},setClear:function(Se,De,ve,We,ot){ot===!0&&(Se*=We,De*=We,ve*=We),_e.set(Se,De,ve,We),Ie.equals(_e)===!1&&(l.clearColor(Se,De,ve,We),Ie.copy(_e))},reset:function(){I=!1,me=null,Ie.set(-1,0,0,0)}}}function o(){let I=!1,_e=null,me=null,Ie=null;return{setTest:function(Se){Se?Re(2929):ee(2929)},setMask:function(Se){_e!==Se&&!I&&(l.depthMask(Se),_e=Se)},setFunc:function(Se){if(me!==Se){if(Se)switch(Se){case gM:l.depthFunc(512);break;case _M:l.depthFunc(519);break;case vM:l.depthFunc(513);break;case nc:l.depthFunc(515);break;case xM:l.depthFunc(514);break;case MM:l.depthFunc(518);break;case yM:l.depthFunc(516);break;case SM:l.depthFunc(517);break;default:l.depthFunc(515)}else l.depthFunc(515);me=Se}},setLocked:function(Se){I=Se},setClear:function(Se){Ie!==Se&&(l.clearDepth(Se),Ie=Se)},reset:function(){I=!1,_e=null,me=null,Ie=null}}}function u(){let I=!1,_e=null,me=null,Ie=null,Se=null,De=null,ve=null,We=null,ot=null;return{setTest:function(lt){I||(lt?Re(2960):ee(2960))},setMask:function(lt){_e!==lt&&!I&&(l.stencilMask(lt),_e=lt)},setFunc:function(lt,Ht,xn){(me!==lt||Ie!==Ht||Se!==xn)&&(l.stencilFunc(lt,Ht,xn),me=lt,Ie=Ht,Se=xn)},setOp:function(lt,Ht,xn){(De!==lt||ve!==Ht||We!==xn)&&(l.stencilOp(lt,Ht,xn),De=lt,ve=Ht,We=xn)},setLocked:function(lt){I=lt},setClear:function(lt){ot!==lt&&(l.clearStencil(lt),ot=lt)},reset:function(){I=!1,_e=null,me=null,Ie=null,Se=null,De=null,ve=null,We=null,ot=null}}}const c=new s,d=new o,f=new u;let p={},g={},_=new WeakMap,M=[],w=null,v=!1,m=null,b=null,P=null,O=null,N=null,L=null,G=null,k=!1,A=null,U=null,Q=null,Y=null,Ee=null;const de=l.getParameter(35661);let H=!1,oe=0;const j=l.getParameter(7938);j.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(j)[1]),H=oe>=1):j.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),H=oe>=2);let re=null,ne={};const $=l.getParameter(3088),se=l.getParameter(2978),fe=new Yt().fromArray($),he=new Yt().fromArray(se);function pe(I,_e,me){const Ie=new Uint8Array(4),Se=l.createTexture();l.bindTexture(I,Se),l.texParameteri(I,10241,9728),l.texParameteri(I,10240,9728);for(let De=0;De<me;De++)l.texImage2D(_e+De,0,6408,1,1,0,6408,5121,Ie);return Se}const Ce={};Ce[3553]=pe(3553,3553,1),Ce[34067]=pe(34067,34069,6),c.setClear(0,0,0,1),d.setClear(1),f.setClear(0),Re(2929),d.setFunc(nc),ct(!1),xt(Wh),Re(2884),Ye(Vi);function Re(I){p[I]!==!0&&(l.enable(I),p[I]=!0)}function ee(I){p[I]!==!1&&(l.disable(I),p[I]=!1)}function pt(I,_e){return g[I]!==_e?(l.bindFramebuffer(I,_e),g[I]=_e,i&&(I===36009&&(g[36160]=_e),I===36160&&(g[36009]=_e)),!0):!1}function ze(I,_e){let me=M,Ie=!1;if(I)if(me=_.get(_e),me===void 0&&(me=[],_.set(_e,me)),I.isWebGLMultipleRenderTargets){const Se=I.texture;if(me.length!==Se.length||me[0]!==36064){for(let De=0,ve=Se.length;De<ve;De++)me[De]=36064+De;me.length=Se.length,Ie=!0}}else me[0]!==36064&&(me[0]=36064,Ie=!0);else me[0]!==1029&&(me[0]=1029,Ie=!0);Ie&&(t.isWebGL2?l.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function Ue(I){return w!==I?(l.useProgram(I),w=I,!0):!1}const Te={[Zr]:32774,[sM]:32778,[aM]:32779};if(i)Te[qh]=32775,Te[Xh]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(Te[qh]=I.MIN_EXT,Te[Xh]=I.MAX_EXT)}const tt={[oM]:0,[lM]:1,[cM]:768,[xd]:770,[mM]:776,[dM]:774,[hM]:772,[uM]:769,[Md]:771,[pM]:775,[fM]:773};function Ye(I,_e,me,Ie,Se,De,ve,We){if(I===Vi){v===!0&&(ee(3042),v=!1);return}if(v===!1&&(Re(3042),v=!0),I!==rM){if(I!==m||We!==k){if((b!==Zr||N!==Zr)&&(l.blendEquation(32774),b=Zr,N=Zr),We)switch(I){case jr:l.blendFuncSeparate(1,771,1,771);break;case Hh:l.blendFunc(1,1);break;case Vh:l.blendFuncSeparate(0,769,0,1);break;case kh:l.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case jr:l.blendFuncSeparate(770,771,1,771);break;case Hh:l.blendFunc(770,1);break;case Vh:l.blendFuncSeparate(0,769,0,1);break;case kh:l.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}P=null,O=null,L=null,G=null,m=I,k=We}return}Se=Se||_e,De=De||me,ve=ve||Ie,(_e!==b||Se!==N)&&(l.blendEquationSeparate(Te[_e],Te[Se]),b=_e,N=Se),(me!==P||Ie!==O||De!==L||ve!==G)&&(l.blendFuncSeparate(tt[me],tt[Ie],tt[De],tt[ve]),P=me,O=Ie,L=De,G=ve),m=I,k=null}function Be(I,_e){I.side===fr?ee(2884):Re(2884);let me=I.side===Zn;_e&&(me=!me),ct(me),I.blending===jr&&I.transparent===!1?Ye(Vi):Ye(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),d.setFunc(I.depthFunc),d.setTest(I.depthTest),d.setMask(I.depthWrite),c.setMask(I.colorWrite);const Ie=I.stencilWrite;f.setTest(Ie),Ie&&(f.setMask(I.stencilWriteMask),f.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),f.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),wt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Re(32926):ee(32926)}function ct(I){A!==I&&(I?l.frontFace(2304):l.frontFace(2305),A=I)}function xt(I){I!==eM?(Re(2884),I!==U&&(I===Wh?l.cullFace(1029):I===tM?l.cullFace(1028):l.cullFace(1032))):ee(2884),U=I}function Ft(I){I!==Q&&(H&&l.lineWidth(I),Q=I)}function wt(I,_e,me){I?(Re(32823),(Y!==_e||Ee!==me)&&(l.polygonOffset(_e,me),Y=_e,Ee=me)):ee(32823)}function Tt(I){I?Re(3089):ee(3089)}function ut(I){I===void 0&&(I=33984+de-1),re!==I&&(l.activeTexture(I),re=I)}function Bt(I,_e){re===null&&ut();let me=ne[re];me===void 0&&(me={type:void 0,texture:void 0},ne[re]=me),(me.type!==I||me.texture!==_e)&&(l.bindTexture(I,_e||Ce[I]),me.type=I,me.texture=_e)}function Mt(){const I=ne[re];I!==void 0&&I.type!==void 0&&(l.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function R(){try{l.compressedTexImage2D.apply(l,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function E(){try{l.texSubImage2D.apply(l,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{l.texSubImage3D.apply(l,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{l.compressedTexSubImage2D.apply(l,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{l.texStorage2D.apply(l,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{l.texStorage3D.apply(l,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{l.texImage2D.apply(l,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function T(){try{l.texImage3D.apply(l,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(I){fe.equals(I)===!1&&(l.scissor(I.x,I.y,I.z,I.w),fe.copy(I))}function Me(I){he.equals(I)===!1&&(l.viewport(I.x,I.y,I.z,I.w),he.copy(I))}function ge(){l.disable(3042),l.disable(2884),l.disable(2929),l.disable(32823),l.disable(3089),l.disable(2960),l.disable(32926),l.blendEquation(32774),l.blendFunc(1,0),l.blendFuncSeparate(1,0,1,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(513),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(519,0,4294967295),l.stencilOp(7680,7680,7680),l.clearStencil(0),l.cullFace(1029),l.frontFace(2305),l.polygonOffset(0,0),l.activeTexture(33984),l.bindFramebuffer(36160,null),i===!0&&(l.bindFramebuffer(36009,null),l.bindFramebuffer(36008,null)),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),p={},re=null,ne={},g={},_=new WeakMap,M=[],w=null,v=!1,m=null,b=null,P=null,O=null,N=null,L=null,G=null,k=!1,A=null,U=null,Q=null,Y=null,Ee=null,fe.set(0,0,l.canvas.width,l.canvas.height),he.set(0,0,l.canvas.width,l.canvas.height),c.reset(),d.reset(),f.reset()}return{buffers:{color:c,depth:d,stencil:f},enable:Re,disable:ee,bindFramebuffer:pt,drawBuffers:ze,useProgram:Ue,setBlending:Ye,setMaterial:Be,setFlipSided:ct,setCullFace:xt,setLineWidth:Ft,setPolygonOffset:wt,setScissorTest:Tt,activeTexture:ut,bindTexture:Bt,unbindTexture:Mt,compressedTexImage2D:R,texImage2D:Pe,texImage3D:T,texStorage2D:xe,texStorage3D:ye,texSubImage2D:E,texSubImage3D:J,compressedTexSubImage2D:ue,scissor:le,viewport:Me,reset:ge}}function F1(l,e,t,i,s,o,u){const c=s.isWebGL2,d=s.maxTextures,f=s.maxCubemapSize,p=s.maxTextureSize,g=s.maxSamples,_=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,M=/OculusBrowser/g.test(navigator.userAgent),w=new WeakMap;let v;const m=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(R,E){return b?new OffscreenCanvas(R,E):Ns("canvas")}function O(R,E,J,ue){let xe=1;if((R.width>ue||R.height>ue)&&(xe=ue/Math.max(R.width,R.height)),xe<1||E===!0)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap){const ye=E?lc:Math.floor,Pe=ye(xe*R.width),T=ye(xe*R.height);v===void 0&&(v=P(Pe,T));const le=J?P(Pe,T):v;return le.width=Pe,le.height=T,le.getContext("2d").drawImage(R,0,0,Pe,T),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Pe+"x"+T+")."),le}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function N(R){return Mf(R.width)&&Mf(R.height)}function L(R){return c?!1:R.wrapS!==Xn||R.wrapT!==Xn||R.minFilter!==un&&R.minFilter!==Pn}function G(R,E){return R.generateMipmaps&&E&&R.minFilter!==un&&R.minFilter!==Pn}function k(R){l.generateMipmap(R)}function A(R,E,J,ue,xe=!1){if(c===!1)return E;if(R!==null){if(l[R]!==void 0)return l[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ye=E;return E===6403&&(J===5126&&(ye=33326),J===5131&&(ye=33325),J===5121&&(ye=33321)),E===33319&&(J===5126&&(ye=33328),J===5131&&(ye=33327),J===5121&&(ye=33323)),E===6408&&(J===5126&&(ye=34836),J===5131&&(ye=34842),J===5121&&(ye=ue===Et&&xe===!1?35907:32856),J===32819&&(ye=32854),J===32820&&(ye=32855)),(ye===33325||ye===33326||ye===33327||ye===33328||ye===34842||ye===34836)&&e.get("EXT_color_buffer_float"),ye}function U(R,E,J){return G(R,J)===!0||R.isFramebufferTexture&&R.minFilter!==un&&R.minFilter!==Pn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function Q(R){return R===un||R===Yh||R===Zh?9728:9729}function Y(R){const E=R.target;E.removeEventListener("dispose",Y),de(E),E.isVideoTexture&&w.delete(E)}function Ee(R){const E=R.target;E.removeEventListener("dispose",Ee),oe(E)}function de(R){const E=i.get(R);if(E.__webglInit===void 0)return;const J=R.source,ue=m.get(J);if(ue){const xe=ue[E.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&H(R),Object.keys(ue).length===0&&m.delete(J)}i.remove(R)}function H(R){const E=i.get(R);l.deleteTexture(E.__webglTexture);const J=R.source,ue=m.get(J);delete ue[E.__cacheKey],u.memory.textures--}function oe(R){const E=R.texture,J=i.get(R),ue=i.get(E);if(ue.__webglTexture!==void 0&&(l.deleteTexture(ue.__webglTexture),u.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++)l.deleteFramebuffer(J.__webglFramebuffer[xe]),J.__webglDepthbuffer&&l.deleteRenderbuffer(J.__webglDepthbuffer[xe]);else{if(l.deleteFramebuffer(J.__webglFramebuffer),J.__webglDepthbuffer&&l.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&l.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let xe=0;xe<J.__webglColorRenderbuffer.length;xe++)J.__webglColorRenderbuffer[xe]&&l.deleteRenderbuffer(J.__webglColorRenderbuffer[xe]);J.__webglDepthRenderbuffer&&l.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let xe=0,ye=E.length;xe<ye;xe++){const Pe=i.get(E[xe]);Pe.__webglTexture&&(l.deleteTexture(Pe.__webglTexture),u.memory.textures--),i.remove(E[xe])}i.remove(E),i.remove(R)}let j=0;function re(){j=0}function ne(){const R=j;return R>=d&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+d),j+=1,R}function $(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.encoding),E.join()}function se(R,E){const J=i.get(R);if(R.isVideoTexture&&Bt(R),R.isRenderTargetTexture===!1&&R.version>0&&J.__version!==R.version){const ue=R.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(J,R,E);return}}t.activeTexture(33984+E),t.bindTexture(3553,J.__webglTexture)}function fe(R,E){const J=i.get(R);if(R.version>0&&J.__version!==R.version){ze(J,R,E);return}t.activeTexture(33984+E),t.bindTexture(35866,J.__webglTexture)}function he(R,E){const J=i.get(R);if(R.version>0&&J.__version!==R.version){ze(J,R,E);return}t.activeTexture(33984+E),t.bindTexture(32879,J.__webglTexture)}function pe(R,E){const J=i.get(R);if(R.version>0&&J.__version!==R.version){Ue(J,R,E);return}t.activeTexture(33984+E),t.bindTexture(34067,J.__webglTexture)}const Ce={[sc]:10497,[Xn]:33071,[ac]:33648},Re={[un]:9728,[Yh]:9984,[Zh]:9986,[Pn]:9729,[RM]:9985,[eo]:9987};function ee(R,E,J){if(J?(l.texParameteri(R,10242,Ce[E.wrapS]),l.texParameteri(R,10243,Ce[E.wrapT]),(R===32879||R===35866)&&l.texParameteri(R,32882,Ce[E.wrapR]),l.texParameteri(R,10240,Re[E.magFilter]),l.texParameteri(R,10241,Re[E.minFilter])):(l.texParameteri(R,10242,33071),l.texParameteri(R,10243,33071),(R===32879||R===35866)&&l.texParameteri(R,32882,33071),(E.wrapS!==Xn||E.wrapT!==Xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),l.texParameteri(R,10240,Q(E.magFilter)),l.texParameteri(R,10241,Q(E.minFilter)),E.minFilter!==un&&E.minFilter!==Pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ue=e.get("EXT_texture_filter_anisotropic");if(E.type===lr&&e.has("OES_texture_float_linear")===!1||c===!1&&E.type===Fs&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(l.texParameterf(R,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function pt(R,E){let J=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",Y));const ue=E.source;let xe=m.get(ue);xe===void 0&&(xe={},m.set(ue,xe));const ye=$(E);if(ye!==R.__cacheKey){xe[ye]===void 0&&(xe[ye]={texture:l.createTexture(),usedTimes:0},u.memory.textures++,J=!0),xe[ye].usedTimes++;const Pe=xe[R.__cacheKey];Pe!==void 0&&(xe[R.__cacheKey].usedTimes--,Pe.usedTimes===0&&H(E)),R.__cacheKey=ye,R.__webglTexture=xe[ye].texture}return J}function ze(R,E,J){let ue=3553;E.isDataArrayTexture&&(ue=35866),E.isData3DTexture&&(ue=32879);const xe=pt(R,E),ye=E.source;if(t.activeTexture(33984+J),t.bindTexture(ue,R.__webglTexture),ye.version!==ye.__currentVersion||xe===!0){l.pixelStorei(37440,E.flipY),l.pixelStorei(37441,E.premultiplyAlpha),l.pixelStorei(3317,E.unpackAlignment),l.pixelStorei(37443,0);const Pe=L(E)&&N(E.image)===!1;let T=O(E.image,Pe,!1,p);T=Mt(E,T);const le=N(T)||c,Me=o.convert(E.format,E.encoding);let ge=o.convert(E.type),I=A(E.internalFormat,Me,ge,E.encoding,E.isVideoTexture);ee(ue,E,le);let _e;const me=E.mipmaps,Ie=c&&E.isVideoTexture!==!0,Se=ye.__currentVersion===void 0||xe===!0,De=U(E,T,le);if(E.isDepthTexture)I=6402,c?E.type===lr?I=36012:E.type===or?I=33190:E.type===Jr?I=35056:I=33189:E.type===lr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ur&&I===6402&&E.type!==Sd&&E.type!==or&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=or,ge=o.convert(E.type)),E.format===ts&&I===6402&&(I=34041,E.type!==Jr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Jr,ge=o.convert(E.type))),Se&&(Ie?t.texStorage2D(3553,1,I,T.width,T.height):t.texImage2D(3553,0,I,T.width,T.height,0,Me,ge,null));else if(E.isDataTexture)if(me.length>0&&le){Ie&&Se&&t.texStorage2D(3553,De,I,me[0].width,me[0].height);for(let ve=0,We=me.length;ve<We;ve++)_e=me[ve],Ie?t.texSubImage2D(3553,ve,0,0,_e.width,_e.height,Me,ge,_e.data):t.texImage2D(3553,ve,I,_e.width,_e.height,0,Me,ge,_e.data);E.generateMipmaps=!1}else Ie?(Se&&t.texStorage2D(3553,De,I,T.width,T.height),t.texSubImage2D(3553,0,0,0,T.width,T.height,Me,ge,T.data)):t.texImage2D(3553,0,I,T.width,T.height,0,Me,ge,T.data);else if(E.isCompressedTexture){Ie&&Se&&t.texStorage2D(3553,De,I,me[0].width,me[0].height);for(let ve=0,We=me.length;ve<We;ve++)_e=me[ve],E.format!==Yn?Me!==null?Ie?t.compressedTexSubImage2D(3553,ve,0,0,_e.width,_e.height,Me,_e.data):t.compressedTexImage2D(3553,ve,I,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?t.texSubImage2D(3553,ve,0,0,_e.width,_e.height,Me,ge,_e.data):t.texImage2D(3553,ve,I,_e.width,_e.height,0,Me,ge,_e.data)}else if(E.isDataArrayTexture)Ie?(Se&&t.texStorage3D(35866,De,I,T.width,T.height,T.depth),t.texSubImage3D(35866,0,0,0,0,T.width,T.height,T.depth,Me,ge,T.data)):t.texImage3D(35866,0,I,T.width,T.height,T.depth,0,Me,ge,T.data);else if(E.isData3DTexture)Ie?(Se&&t.texStorage3D(32879,De,I,T.width,T.height,T.depth),t.texSubImage3D(32879,0,0,0,0,T.width,T.height,T.depth,Me,ge,T.data)):t.texImage3D(32879,0,I,T.width,T.height,T.depth,0,Me,ge,T.data);else if(E.isFramebufferTexture){if(Se)if(Ie)t.texStorage2D(3553,De,I,T.width,T.height);else{let ve=T.width,We=T.height;for(let ot=0;ot<De;ot++)t.texImage2D(3553,ot,I,ve,We,0,Me,ge,null),ve>>=1,We>>=1}}else if(me.length>0&&le){Ie&&Se&&t.texStorage2D(3553,De,I,me[0].width,me[0].height);for(let ve=0,We=me.length;ve<We;ve++)_e=me[ve],Ie?t.texSubImage2D(3553,ve,0,0,Me,ge,_e):t.texImage2D(3553,ve,I,Me,ge,_e);E.generateMipmaps=!1}else Ie?(Se&&t.texStorage2D(3553,De,I,T.width,T.height),t.texSubImage2D(3553,0,0,0,Me,ge,T)):t.texImage2D(3553,0,I,Me,ge,T);G(E,le)&&k(ue),ye.__currentVersion=ye.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ue(R,E,J){if(E.image.length!==6)return;const ue=pt(R,E),xe=E.source;if(t.activeTexture(33984+J),t.bindTexture(34067,R.__webglTexture),xe.version!==xe.__currentVersion||ue===!0){l.pixelStorei(37440,E.flipY),l.pixelStorei(37441,E.premultiplyAlpha),l.pixelStorei(3317,E.unpackAlignment),l.pixelStorei(37443,0);const ye=E.isCompressedTexture||E.image[0].isCompressedTexture,Pe=E.image[0]&&E.image[0].isDataTexture,T=[];for(let ve=0;ve<6;ve++)!ye&&!Pe?T[ve]=O(E.image[ve],!1,!0,f):T[ve]=Pe?E.image[ve].image:E.image[ve],T[ve]=Mt(E,T[ve]);const le=T[0],Me=N(le)||c,ge=o.convert(E.format,E.encoding),I=o.convert(E.type),_e=A(E.internalFormat,ge,I,E.encoding),me=c&&E.isVideoTexture!==!0,Ie=xe.__currentVersion===void 0||ue===!0;let Se=U(E,le,Me);ee(34067,E,Me);let De;if(ye){me&&Ie&&t.texStorage2D(34067,Se,_e,le.width,le.height);for(let ve=0;ve<6;ve++){De=T[ve].mipmaps;for(let We=0;We<De.length;We++){const ot=De[We];E.format!==Yn?ge!==null?me?t.compressedTexSubImage2D(34069+ve,We,0,0,ot.width,ot.height,ge,ot.data):t.compressedTexImage2D(34069+ve,We,_e,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?t.texSubImage2D(34069+ve,We,0,0,ot.width,ot.height,ge,I,ot.data):t.texImage2D(34069+ve,We,_e,ot.width,ot.height,0,ge,I,ot.data)}}}else{De=E.mipmaps,me&&Ie&&(De.length>0&&Se++,t.texStorage2D(34067,Se,_e,T[0].width,T[0].height));for(let ve=0;ve<6;ve++)if(Pe){me?t.texSubImage2D(34069+ve,0,0,0,T[ve].width,T[ve].height,ge,I,T[ve].data):t.texImage2D(34069+ve,0,_e,T[ve].width,T[ve].height,0,ge,I,T[ve].data);for(let We=0;We<De.length;We++){const lt=De[We].image[ve].image;me?t.texSubImage2D(34069+ve,We+1,0,0,lt.width,lt.height,ge,I,lt.data):t.texImage2D(34069+ve,We+1,_e,lt.width,lt.height,0,ge,I,lt.data)}}else{me?t.texSubImage2D(34069+ve,0,0,0,ge,I,T[ve]):t.texImage2D(34069+ve,0,_e,ge,I,T[ve]);for(let We=0;We<De.length;We++){const ot=De[We];me?t.texSubImage2D(34069+ve,We+1,0,0,ge,I,ot.image[ve]):t.texImage2D(34069+ve,We+1,_e,ge,I,ot.image[ve])}}}G(E,Me)&&k(34067),xe.__currentVersion=xe.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Te(R,E,J,ue,xe){const ye=o.convert(J.format,J.encoding),Pe=o.convert(J.type),T=A(J.internalFormat,ye,Pe,J.encoding);i.get(E).__hasExternalTextures||(xe===32879||xe===35866?t.texImage3D(xe,0,T,E.width,E.height,E.depth,0,ye,Pe,null):t.texImage2D(xe,0,T,E.width,E.height,0,ye,Pe,null)),t.bindFramebuffer(36160,R),ut(E)?_.framebufferTexture2DMultisampleEXT(36160,ue,xe,i.get(J).__webglTexture,0,Tt(E)):l.framebufferTexture2D(36160,ue,xe,i.get(J).__webglTexture,0),t.bindFramebuffer(36160,null)}function tt(R,E,J){if(l.bindRenderbuffer(36161,R),E.depthBuffer&&!E.stencilBuffer){let ue=33189;if(J||ut(E)){const xe=E.depthTexture;xe&&xe.isDepthTexture&&(xe.type===lr?ue=36012:xe.type===or&&(ue=33190));const ye=Tt(E);ut(E)?_.renderbufferStorageMultisampleEXT(36161,ye,ue,E.width,E.height):l.renderbufferStorageMultisample(36161,ye,ue,E.width,E.height)}else l.renderbufferStorage(36161,ue,E.width,E.height);l.framebufferRenderbuffer(36160,36096,36161,R)}else if(E.depthBuffer&&E.stencilBuffer){const ue=Tt(E);J&&ut(E)===!1?l.renderbufferStorageMultisample(36161,ue,35056,E.width,E.height):ut(E)?_.renderbufferStorageMultisampleEXT(36161,ue,35056,E.width,E.height):l.renderbufferStorage(36161,34041,E.width,E.height),l.framebufferRenderbuffer(36160,33306,36161,R)}else{const ue=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let xe=0;xe<ue.length;xe++){const ye=ue[xe],Pe=o.convert(ye.format,ye.encoding),T=o.convert(ye.type),le=A(ye.internalFormat,Pe,T,ye.encoding),Me=Tt(E);J&&ut(E)===!1?l.renderbufferStorageMultisample(36161,Me,le,E.width,E.height):ut(E)?_.renderbufferStorageMultisampleEXT(36161,Me,le,E.width,E.height):l.renderbufferStorage(36161,le,E.width,E.height)}}l.bindRenderbuffer(36161,null)}function Ye(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),se(E.depthTexture,0);const ue=i.get(E.depthTexture).__webglTexture,xe=Tt(E);if(E.depthTexture.format===ur)ut(E)?_.framebufferTexture2DMultisampleEXT(36160,36096,3553,ue,0,xe):l.framebufferTexture2D(36160,36096,3553,ue,0);else if(E.depthTexture.format===ts)ut(E)?_.framebufferTexture2DMultisampleEXT(36160,33306,3553,ue,0,xe):l.framebufferTexture2D(36160,33306,3553,ue,0);else throw new Error("Unknown depthTexture format")}function Be(R){const E=i.get(R),J=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Ye(E.__webglFramebuffer,R)}else if(J){E.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(36160,E.__webglFramebuffer[ue]),E.__webglDepthbuffer[ue]=l.createRenderbuffer(),tt(E.__webglDepthbuffer[ue],R,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=l.createRenderbuffer(),tt(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(36160,null)}function ct(R,E,J){const ue=i.get(R);E!==void 0&&Te(ue.__webglFramebuffer,R,R.texture,36064,3553),J!==void 0&&Be(R)}function xt(R){const E=R.texture,J=i.get(R),ue=i.get(E);R.addEventListener("dispose",Ee),R.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=l.createTexture()),ue.__version=E.version,u.memory.textures++);const xe=R.isWebGLCubeRenderTarget===!0,ye=R.isWebGLMultipleRenderTargets===!0,Pe=N(R)||c;if(xe){J.__webglFramebuffer=[];for(let T=0;T<6;T++)J.__webglFramebuffer[T]=l.createFramebuffer()}else{if(J.__webglFramebuffer=l.createFramebuffer(),ye)if(s.drawBuffers){const T=R.texture;for(let le=0,Me=T.length;le<Me;le++){const ge=i.get(T[le]);ge.__webglTexture===void 0&&(ge.__webglTexture=l.createTexture(),u.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&R.samples>0&&ut(R)===!1){const T=ye?E:[E];J.__webglMultisampledFramebuffer=l.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,J.__webglMultisampledFramebuffer);for(let le=0;le<T.length;le++){const Me=T[le];J.__webglColorRenderbuffer[le]=l.createRenderbuffer(),l.bindRenderbuffer(36161,J.__webglColorRenderbuffer[le]);const ge=o.convert(Me.format,Me.encoding),I=o.convert(Me.type),_e=A(Me.internalFormat,ge,I,Me.encoding),me=Tt(R);l.renderbufferStorageMultisample(36161,me,_e,R.width,R.height),l.framebufferRenderbuffer(36160,36064+le,36161,J.__webglColorRenderbuffer[le])}l.bindRenderbuffer(36161,null),R.depthBuffer&&(J.__webglDepthRenderbuffer=l.createRenderbuffer(),tt(J.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(36160,null)}}if(xe){t.bindTexture(34067,ue.__webglTexture),ee(34067,E,Pe);for(let T=0;T<6;T++)Te(J.__webglFramebuffer[T],R,E,36064,34069+T);G(E,Pe)&&k(34067),t.unbindTexture()}else if(ye){const T=R.texture;for(let le=0,Me=T.length;le<Me;le++){const ge=T[le],I=i.get(ge);t.bindTexture(3553,I.__webglTexture),ee(3553,ge,Pe),Te(J.__webglFramebuffer,R,ge,36064+le,3553),G(ge,Pe)&&k(3553)}t.unbindTexture()}else{let T=3553;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(c?T=R.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(T,ue.__webglTexture),ee(T,E,Pe),Te(J.__webglFramebuffer,R,E,36064,T),G(E,Pe)&&k(T),t.unbindTexture()}R.depthBuffer&&Be(R)}function Ft(R){const E=N(R)||c,J=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ue=0,xe=J.length;ue<xe;ue++){const ye=J[ue];if(G(ye,E)){const Pe=R.isWebGLCubeRenderTarget?34067:3553,T=i.get(ye).__webglTexture;t.bindTexture(Pe,T),k(Pe),t.unbindTexture()}}}function wt(R){if(c&&R.samples>0&&ut(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],J=R.width,ue=R.height;let xe=16384;const ye=[],Pe=R.stencilBuffer?33306:36096,T=i.get(R),le=R.isWebGLMultipleRenderTargets===!0;if(le)for(let Me=0;Me<E.length;Me++)t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+Me,36161,null),t.bindFramebuffer(36160,T.__webglFramebuffer),l.framebufferTexture2D(36009,36064+Me,3553,null,0);t.bindFramebuffer(36008,T.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,T.__webglFramebuffer);for(let Me=0;Me<E.length;Me++){ye.push(36064+Me),R.depthBuffer&&ye.push(Pe);const ge=T.__ignoreDepthValues!==void 0?T.__ignoreDepthValues:!1;if(ge===!1&&(R.depthBuffer&&(xe|=256),R.stencilBuffer&&(xe|=1024)),le&&l.framebufferRenderbuffer(36008,36064,36161,T.__webglColorRenderbuffer[Me]),ge===!0&&(l.invalidateFramebuffer(36008,[Pe]),l.invalidateFramebuffer(36009,[Pe])),le){const I=i.get(E[Me]).__webglTexture;l.framebufferTexture2D(36009,36064,3553,I,0)}l.blitFramebuffer(0,0,J,ue,0,0,J,ue,xe,9728),M&&l.invalidateFramebuffer(36008,ye)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),le)for(let Me=0;Me<E.length;Me++){t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+Me,36161,T.__webglColorRenderbuffer[Me]);const ge=i.get(E[Me]).__webglTexture;t.bindFramebuffer(36160,T.__webglFramebuffer),l.framebufferTexture2D(36009,36064+Me,3553,ge,0)}t.bindFramebuffer(36009,T.__webglMultisampledFramebuffer)}}function Tt(R){return Math.min(g,R.samples)}function ut(R){const E=i.get(R);return c&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Bt(R){const E=u.render.frame;w.get(R)!==E&&(w.set(R,E),R.update())}function Mt(R,E){const J=R.encoding,ue=R.format,xe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===oc||J!==pr&&(J===Et?c===!1?e.has("EXT_sRGB")===!0&&ue===Yn?(R.format=oc,R.minFilter=Pn,R.generateMipmaps=!1):E=Ed.sRGBToLinear(E):(ue!==Yn||xe!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",J)),E}this.allocateTextureUnit=ne,this.resetTextureUnits=re,this.setTexture2D=se,this.setTexture2DArray=fe,this.setTexture3D=he,this.setTextureCube=pe,this.rebindTextures=ct,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=ut}function N1(l,e,t){const i=t.isWebGL2;function s(o,u=null){let c;if(o===dr)return 5121;if(o===FM)return 32819;if(o===NM)return 32820;if(o===DM)return 5120;if(o===PM)return 5122;if(o===Sd)return 5123;if(o===IM)return 5124;if(o===or)return 5125;if(o===lr)return 5126;if(o===Fs)return i?5131:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(o===OM)return 6406;if(o===Yn)return 6408;if(o===zM)return 6409;if(o===BM)return 6410;if(o===ur)return 6402;if(o===ts)return 34041;if(o===GM)return 6403;if(o===UM)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(o===oc)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(o===WM)return 36244;if(o===HM)return 33319;if(o===VM)return 33320;if(o===kM)return 36249;if(o===Ml||o===yl||o===Sl||o===wl)if(u===Et)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(o===Ml)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===yl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Sl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===wl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(o===Ml)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===yl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Sl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===wl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===$h||o===Kh||o===jh||o===Jh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(o===$h)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Kh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===jh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Jh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===qM)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Qh||o===ef)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(o===Qh)return u===Et?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(o===ef)return u===Et?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===tf||o===nf||o===rf||o===sf||o===af||o===of||o===lf||o===cf||o===uf||o===hf||o===ff||o===df||o===pf||o===mf)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(o===tf)return u===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===nf)return u===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===rf)return u===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===sf)return u===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===af)return u===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===of)return u===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===lf)return u===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===cf)return u===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===uf)return u===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===hf)return u===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===ff)return u===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===df)return u===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===pf)return u===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===mf)return u===Et?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===gf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(o===gf)return u===Et?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return o===Jr?i?34042:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):l[o]!==void 0?l[o]:null}return{convert:s}}class O1 extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rs extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const U1={type:"move"};class Jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,u=null;const c=this._targetRay,d=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(c!==null&&(s=t.getPose(e.targetRaySpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(U1))),f&&e.hand){u=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i);if(f.joints[v.jointName]===void 0){const P=new Rs;P.matrixAutoUpdate=!1,P.visible=!1,f.joints[v.jointName]=P,f.add(P)}const b=f.joints[v.jointName];m!==null&&(b.matrix.fromArray(m.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.jointRadius=m.radius),b.visible=m!==null}const p=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],_=p.position.distanceTo(g.position),M=.02,w=.005;f.inputState.pinching&&_>M+w?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&_<=M-w&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));return c!==null&&(c.visible=s!==null),d!==null&&(d.visible=o!==null),f!==null&&(f.visible=u!==null),this}}class z1 extends Fn{constructor(e,t,i,s,o,u,c,d,f,p){if(p=p!==void 0?p:ur,p!==ur&&p!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===ur&&(i=or),i===void 0&&p===ts&&(i=Jr),super(null,s,o,u,c,d,p,i,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:un,this.minFilter=d!==void 0?d:un,this.flipY=!1,this.generateMipmaps=!1}}class B1 extends gr{constructor(e,t){super();const i=this;let s=null,o=1,u=null,c="local-floor",d=null,f=null,p=null,g=null,_=null,M=null;const w=t.getContextAttributes();let v=null,m=null;const b=[],P=new Map,O=new In;O.layers.enable(1),O.viewport=new Yt;const N=new In;N.layers.enable(2),N.viewport=new Yt;const L=[O,N],G=new O1;G.layers.enable(1),G.layers.enable(2);let k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let se=b[$];return se===void 0&&(se=new Jl,b[$]=se),se.getTargetRaySpace()},this.getControllerGrip=function($){let se=b[$];return se===void 0&&(se=new Jl,b[$]=se),se.getGripSpace()},this.getHand=function($){let se=b[$];return se===void 0&&(se=new Jl,b[$]=se),se.getHandSpace()};function U($){const se=P.get($.inputSource);se!==void 0&&se.dispatchEvent({type:$.type,data:$.inputSource})}function Q(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",Y),P.forEach(function($,se){$!==void 0&&$.disconnect(se)}),P.clear(),k=null,A=null,e.setRenderTarget(v),_=null,g=null,p=null,s=null,m=null,ne.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){c=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function($){d=$},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return p},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",Y),w.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const se={antialias:s.renderState.layers===void 0?w.antialias:!0,alpha:w.alpha,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:o};_=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:_}),m=new wi(_.framebufferWidth,_.framebufferHeight,{format:Yn,type:dr,encoding:e.outputEncoding})}else{let se=null,fe=null,he=null;w.depth&&(he=w.stencil?35056:33190,se=w.stencil?ts:ur,fe=w.stencil?Jr:or);const pe={colorFormat:e.outputEncoding===Et?35907:32856,depthFormat:he,scaleFactor:o};p=new XRWebGLBinding(s,t),g=p.createProjectionLayer(pe),s.updateRenderState({layers:[g]}),m=new wi(g.textureWidth,g.textureHeight,{format:Yn,type:dr,depthTexture:new z1(g.textureWidth,g.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:w.stencil,encoding:e.outputEncoding,samples:w.antialias?4:0});const Ce=e.properties.get(m);Ce.__ignoreDepthValues=g.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),d=null,u=await s.requestReferenceSpace(c),ne.setContext(s),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function Y($){const se=s.inputSources;for(let fe=0;fe<se.length;fe++){const he=se[fe].handedness==="right"?1:0;P.set(se[fe],b[he])}for(let fe=0;fe<$.removed.length;fe++){const he=$.removed[fe],pe=P.get(he);pe&&(pe.dispatchEvent({type:"disconnected",data:he}),P.delete(he))}for(let fe=0;fe<$.added.length;fe++){const he=$.added[fe],pe=P.get(he);pe&&pe.dispatchEvent({type:"connected",data:he})}}const Ee=new B,de=new B;function H($,se,fe){Ee.setFromMatrixPosition(se.matrixWorld),de.setFromMatrixPosition(fe.matrixWorld);const he=Ee.distanceTo(de),pe=se.projectionMatrix.elements,Ce=fe.projectionMatrix.elements,Re=pe[14]/(pe[10]-1),ee=pe[14]/(pe[10]+1),pt=(pe[9]+1)/pe[5],ze=(pe[9]-1)/pe[5],Ue=(pe[8]-1)/pe[0],Te=(Ce[8]+1)/Ce[0],tt=Re*Ue,Ye=Re*Te,Be=he/(-Ue+Te),ct=Be*-Ue;se.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ct),$.translateZ(Be),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const xt=Re+Be,Ft=ee+Be,wt=tt-ct,Tt=Ye+(he-ct),ut=pt*ee/Ft*xt,Bt=ze*ee/Ft*xt;$.projectionMatrix.makePerspective(wt,Tt,ut,Bt,xt,Ft)}function oe($,se){se===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(se.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;G.near=N.near=O.near=$.near,G.far=N.far=O.far=$.far,(k!==G.near||A!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),k=G.near,A=G.far);const se=$.parent,fe=G.cameras;oe(G,se);for(let pe=0;pe<fe.length;pe++)oe(fe[pe],se);G.matrixWorld.decompose(G.position,G.quaternion,G.scale),$.position.copy(G.position),$.quaternion.copy(G.quaternion),$.scale.copy(G.scale),$.matrix.copy(G.matrix),$.matrixWorld.copy(G.matrixWorld);const he=$.children;for(let pe=0,Ce=he.length;pe<Ce;pe++)he[pe].updateMatrixWorld(!0);fe.length===2?H(G,O,N):G.projectionMatrix.copy(O.projectionMatrix)},this.getCamera=function(){return G},this.getFoveation=function(){if(g!==null)return g.fixedFoveation;if(_!==null)return _.fixedFoveation},this.setFoveation=function($){g!==null&&(g.fixedFoveation=$),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=$)};let j=null;function re($,se){if(f=se.getViewerPose(d||u),M=se,f!==null){const he=f.views;_!==null&&(e.setRenderTargetFramebuffer(m,_.framebuffer),e.setRenderTarget(m));let pe=!1;he.length!==G.cameras.length&&(G.cameras.length=0,pe=!0);for(let Ce=0;Ce<he.length;Ce++){const Re=he[Ce];let ee=null;if(_!==null)ee=_.getViewport(Re);else{const ze=p.getViewSubImage(g,Re);ee=ze.viewport,Ce===0&&(e.setRenderTargetTextures(m,ze.colorTexture,g.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(m))}let pt=L[Ce];pt===void 0&&(pt=new In,pt.layers.enable(Ce),pt.viewport=new Yt,L[Ce]=pt),pt.matrix.fromArray(Re.transform.matrix),pt.projectionMatrix.fromArray(Re.projectionMatrix),pt.viewport.set(ee.x,ee.y,ee.width,ee.height),Ce===0&&G.matrix.copy(pt.matrix),pe===!0&&G.cameras.push(pt)}}const fe=s.inputSources;for(let he=0;he<b.length;he++){const pe=fe[he],Ce=P.get(pe);Ce!==void 0&&Ce.update(pe,se,d||u)}j&&j($,se),M=null}const ne=new Nd;ne.setAnimationLoop(re),this.setAnimationLoop=function($){j=$},this.dispose=function(){}}}function G1(l,e){function t(v,m){v.fogColor.value.copy(m.color),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function i(v,m,b,P,O){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(v,m):m.isMeshToonMaterial?(s(v,m),p(v,m)):m.isMeshPhongMaterial?(s(v,m),f(v,m)):m.isMeshStandardMaterial?(s(v,m),g(v,m),m.isMeshPhysicalMaterial&&_(v,m,O)):m.isMeshMatcapMaterial?(s(v,m),M(v,m)):m.isMeshDepthMaterial?s(v,m):m.isMeshDistanceMaterial?(s(v,m),w(v,m)):m.isMeshNormalMaterial?s(v,m):m.isLineBasicMaterial?(o(v,m),m.isLineDashedMaterial&&u(v,m)):m.isPointsMaterial?c(v,m,b,P):m.isSpriteMaterial?d(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map),m.alphaMap&&(v.alphaMap.value=m.alphaMap),m.bumpMap&&(v.bumpMap.value=m.bumpMap,v.bumpScale.value=m.bumpScale,m.side===Zn&&(v.bumpScale.value*=-1)),m.displacementMap&&(v.displacementMap.value=m.displacementMap,v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap),m.normalMap&&(v.normalMap.value=m.normalMap,v.normalScale.value.copy(m.normalScale),m.side===Zn&&v.normalScale.value.negate()),m.specularMap&&(v.specularMap.value=m.specularMap),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const b=e.get(m).envMap;if(b&&(v.envMap.value=b,v.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap){v.lightMap.value=m.lightMap;const N=l.physicallyCorrectLights!==!0?Math.PI:1;v.lightMapIntensity.value=m.lightMapIntensity*N}m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity);let P;m.map?P=m.map:m.specularMap?P=m.specularMap:m.displacementMap?P=m.displacementMap:m.normalMap?P=m.normalMap:m.bumpMap?P=m.bumpMap:m.roughnessMap?P=m.roughnessMap:m.metalnessMap?P=m.metalnessMap:m.alphaMap?P=m.alphaMap:m.emissiveMap?P=m.emissiveMap:m.clearcoatMap?P=m.clearcoatMap:m.clearcoatNormalMap?P=m.clearcoatNormalMap:m.clearcoatRoughnessMap?P=m.clearcoatRoughnessMap:m.iridescenceMap?P=m.iridescenceMap:m.iridescenceThicknessMap?P=m.iridescenceThicknessMap:m.specularIntensityMap?P=m.specularIntensityMap:m.specularColorMap?P=m.specularColorMap:m.transmissionMap?P=m.transmissionMap:m.thicknessMap?P=m.thicknessMap:m.sheenColorMap?P=m.sheenColorMap:m.sheenRoughnessMap&&(P=m.sheenRoughnessMap),P!==void 0&&(P.isWebGLRenderTarget&&(P=P.texture),P.matrixAutoUpdate===!0&&P.updateMatrix(),v.uvTransform.value.copy(P.matrix));let O;m.aoMap?O=m.aoMap:m.lightMap&&(O=m.lightMap),O!==void 0&&(O.isWebGLRenderTarget&&(O=O.texture),O.matrixAutoUpdate===!0&&O.updateMatrix(),v.uv2Transform.value.copy(O.matrix))}function o(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity}function u(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function c(v,m,b,P){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*b,v.scale.value=P*.5,m.map&&(v.map.value=m.map),m.alphaMap&&(v.alphaMap.value=m.alphaMap),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);let O;m.map?O=m.map:m.alphaMap&&(O=m.alphaMap),O!==void 0&&(O.matrixAutoUpdate===!0&&O.updateMatrix(),v.uvTransform.value.copy(O.matrix))}function d(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map),m.alphaMap&&(v.alphaMap.value=m.alphaMap),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);let b;m.map?b=m.map:m.alphaMap&&(b=m.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),v.uvTransform.value.copy(b.matrix))}function f(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function p(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function g(v,m){v.roughness.value=m.roughness,v.metalness.value=m.metalness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function _(v,m,b){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),v.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Zn&&v.clearcoatNormalScale.value.negate())),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=b.texture,v.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap)}function M(v,m){m.matcap&&(v.matcap.value=m.matcap)}function w(v,m){v.referencePosition.value.copy(m.referencePosition),v.nearDistance.value=m.nearDistance,v.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function W1(){const l=Ns("canvas");return l.style.display="block",l}function Vd(l={}){this.isWebGLRenderer=!0;const e=l.canvas!==void 0?l.canvas:W1(),t=l.context!==void 0?l.context:null,i=l.depth!==void 0?l.depth:!0,s=l.stencil!==void 0?l.stencil:!0,o=l.antialias!==void 0?l.antialias:!1,u=l.premultipliedAlpha!==void 0?l.premultipliedAlpha:!0,c=l.preserveDrawingBuffer!==void 0?l.preserveDrawingBuffer:!1,d=l.powerPreference!==void 0?l.powerPreference:"default",f=l.failIfMajorPerformanceCaveat!==void 0?l.failIfMajorPerformanceCaveat:!1;let p;t!==null?p=t.getContextAttributes().alpha:p=l.alpha!==void 0?l.alpha:!1;let g=null,_=null;const M=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=pr,this.physicallyCorrectLights=!1,this.toneMapping=Si,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const v=this;let m=!1,b=0,P=0,O=null,N=-1,L=null;const G=new Yt,k=new Yt;let A=null,U=e.width,Q=e.height,Y=1,Ee=null,de=null;const H=new Yt(0,0,U,Q),oe=new Yt(0,0,U,Q);let j=!1;const re=new pc;let ne=!1,$=!1,se=null;const fe=new zt,he=new He,pe=new B,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Re(){return O===null?Y:1}let ee=t;function pt(C,V){for(let Z=0;Z<C.length;Z++){const X=C[Z],ae=e.getContext(X,V);if(ae!==null)return ae}return null}try{const C={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fc}`),e.addEventListener("webglcontextlost",I,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",me,!1),ee===null){const V=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&V.shift(),ee=pt(V,C),ee===null)throw pt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}ee.getShaderPrecisionFormat===void 0&&(ee.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ze,Ue,Te,tt,Ye,Be,ct,xt,Ft,wt,Tt,ut,Bt,Mt,R,E,J,ue,xe,ye,Pe,T,le;function Me(){ze=new eb(ee),Ue=new Zw(ee,ze,l),ze.init(Ue),T=new N1(ee,ze,Ue),Te=new I1(ee,ze,Ue),tt=new ib,Ye=new y1,Be=new F1(ee,ze,Te,Ye,Ue,T,tt),ct=new Kw(v),xt=new Qw(v),Ft=new my(ee,Ue),le=new Xw(ee,ze,Ft,Ue),wt=new tb(ee,Ft,tt,le),Tt=new ob(ee,wt,Ft,tt),xe=new ab(ee,Ue,Be),E=new $w(Ye),ut=new M1(v,ct,xt,ze,Ue,le,E),Bt=new G1(v,Ye),Mt=new w1,R=new L1(ze,Ue),ue=new qw(v,ct,Te,Tt,p,u),J=new P1(v,Tt,Ue),ye=new Yw(ee,ze,tt,Ue),Pe=new nb(ee,ze,tt,Ue),tt.programs=ut.programs,v.capabilities=Ue,v.extensions=ze,v.properties=Ye,v.renderLists=Mt,v.shadowMap=J,v.state=Te,v.info=tt}Me();const ge=new B1(v,ee);this.xr=ge,this.getContext=function(){return ee},this.getContextAttributes=function(){return ee.getContextAttributes()},this.forceContextLoss=function(){const C=ze.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ze.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(U,Q,!1))},this.getSize=function(C){return C.set(U,Q)},this.setSize=function(C,V,Z){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,Q=V,e.width=Math.floor(C*Y),e.height=Math.floor(V*Y),Z!==!1&&(e.style.width=C+"px",e.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(U*Y,Q*Y).floor()},this.setDrawingBufferSize=function(C,V,Z){U=C,Q=V,Y=Z,e.width=Math.floor(C*Z),e.height=Math.floor(V*Z),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(G)},this.getViewport=function(C){return C.copy(H)},this.setViewport=function(C,V,Z,X){C.isVector4?H.set(C.x,C.y,C.z,C.w):H.set(C,V,Z,X),Te.viewport(G.copy(H).multiplyScalar(Y).floor())},this.getScissor=function(C){return C.copy(oe)},this.setScissor=function(C,V,Z,X){C.isVector4?oe.set(C.x,C.y,C.z,C.w):oe.set(C,V,Z,X),Te.scissor(k.copy(oe).multiplyScalar(Y).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(C){Te.setScissorTest(j=C)},this.setOpaqueSort=function(C){Ee=C},this.setTransparentSort=function(C){de=C},this.getClearColor=function(C){return C.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(C=!0,V=!0,Z=!0){let X=0;C&&(X|=16384),V&&(X|=256),Z&&(X|=1024),ee.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",I,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",me,!1),Mt.dispose(),R.dispose(),Ye.dispose(),ct.dispose(),xt.dispose(),Tt.dispose(),le.dispose(),ut.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",ot),ge.removeEventListener("sessionend",lt),se&&(se.dispose(),se=null),Ht.stop()};function I(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const C=tt.autoReset,V=J.enabled,Z=J.autoUpdate,X=J.needsUpdate,ae=J.type;Me(),tt.autoReset=C,J.enabled=V,J.autoUpdate=Z,J.needsUpdate=X,J.type=ae}function me(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ie(C){const V=C.target;V.removeEventListener("dispose",Ie),Se(V)}function Se(C){De(C),Ye.remove(C)}function De(C){const V=Ye.get(C).programs;V!==void 0&&(V.forEach(function(Z){ut.releaseProgram(Z)}),C.isShaderMaterial&&ut.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,Z,X,ae,Ge){V===null&&(V=Ce);const qe=ae.isMesh&&ae.matrixWorld.determinant()<0,Ke=as(C,V,Z,X,ae);Te.setMaterial(X,qe);let Ze=Z.index;const ht=Z.attributes.position;if(Ze===null){if(ht===void 0||ht.count===0)return}else if(Ze.count===0)return;let it=1;X.wireframe===!0&&(Ze=wt.getWireframeAttribute(Z),it=2),le.setup(ae,X,Ke,Z,Ze);let at,yt=ye;Ze!==null&&(at=Ft.get(Ze),yt=Pe,yt.setIndex(at));const ai=Ze!==null?Ze.count:ht.count,bi=Z.drawRange.start*it,On=Z.drawRange.count*it,Mn=Ge!==null?Ge.start*it:0,rt=Ge!==null?Ge.count*it:1/0,Ei=Math.max(bi,Mn),At=Math.min(ai,bi+On,Mn+rt)-1,yn=Math.max(0,At-Ei+1);if(yn!==0){if(ae.isMesh)X.wireframe===!0?(Te.setLineWidth(X.wireframeLinewidth*Re()),yt.setMode(1)):yt.setMode(4);else if(ae.isLine){let Un=X.linewidth;Un===void 0&&(Un=1),Te.setLineWidth(Un*Re()),ae.isLineSegments?yt.setMode(1):ae.isLineLoop?yt.setMode(2):yt.setMode(3)}else ae.isPoints?yt.setMode(0):ae.isSprite&&yt.setMode(4);if(ae.isInstancedMesh)yt.renderInstances(Ei,yn,ae.count);else if(Z.isInstancedBufferGeometry){const Un=Math.min(Z.instanceCount,Z._maxInstanceCount);yt.renderInstances(Ei,yn,Un)}else yt.render(Ei,yn)}},this.compile=function(C,V){_=R.get(C),_.init(),w.push(_),C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights(v.physicallyCorrectLights),C.traverse(function(Z){const X=Z.material;if(X)if(Array.isArray(X))for(let ae=0;ae<X.length;ae++){const Ge=X[ae];ss(Ge,C,Z)}else ss(X,C,Z)}),w.pop(),_=null};let ve=null;function We(C){ve&&ve(C)}function ot(){Ht.stop()}function lt(){Ht.start()}const Ht=new Nd;Ht.setAnimationLoop(We),typeof self!="undefined"&&Ht.setContext(self),this.setAnimationLoop=function(C){ve=C,ge.setAnimationLoop(C),C===null?Ht.stop():Ht.start()},ge.addEventListener("sessionstart",ot),ge.addEventListener("sessionend",lt),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;C.autoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(V),V=ge.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,V,O),_=R.get(C,w.length),_.init(),w.push(_),fe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),re.setFromProjectionMatrix(fe),$=this.localClippingEnabled,ne=E.init(this.clippingPlanes,$,V),g=Mt.get(C,M.length),g.init(),M.push(g),xn(C,V,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(Ee,de),ne===!0&&E.beginShadows();const Z=_.state.shadowsArray;if(J.render(Z,C,V),ne===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),ue.render(g,C),_.setupLights(v.physicallyCorrectLights),V.isArrayCamera){const X=V.cameras;for(let ae=0,Ge=X.length;ae<Ge;ae++){const qe=X[ae];Ws(g,C,qe,qe.viewport)}}else Ws(g,C,V);O!==null&&(Be.updateMultisampleRenderTarget(O),Be.updateRenderTargetMipmap(O)),C.isScene===!0&&C.onAfterRender(v,C,V),le.resetDefaultState(),N=-1,L=null,w.pop(),w.length>0?_=w[w.length-1]:_=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function xn(C,V,Z,X){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||re.intersectsSprite(C)){X&&pe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(fe);const qe=Tt.update(C),Ke=C.material;Ke.visible&&g.push(C,qe,Ke,Z,pe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==tt.render.frame&&(C.skeleton.update(),C.skeleton.frame=tt.render.frame),!C.frustumCulled||re.intersectsObject(C))){X&&pe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(fe);const qe=Tt.update(C),Ke=C.material;if(Array.isArray(Ke)){const Ze=qe.groups;for(let ht=0,it=Ze.length;ht<it;ht++){const at=Ze[ht],yt=Ke[at.materialIndex];yt&&yt.visible&&g.push(C,qe,yt,Z,pe.z,at)}}else Ke.visible&&g.push(C,qe,Ke,Z,pe.z,null)}}const Ge=C.children;for(let qe=0,Ke=Ge.length;qe<Ke;qe++)xn(Ge[qe],V,Z,X)}function Ws(C,V,Z,X){const ae=C.opaque,Ge=C.transmissive,qe=C.transparent;_.setupLightsView(Z),Ge.length>0&&ao(ae,V,Z),X&&Te.viewport(G.copy(X)),ae.length>0&&ki(ae,V,Z),Ge.length>0&&ki(Ge,V,Z),qe.length>0&&ki(qe,V,Z),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function ao(C,V,Z){const X=Ue.isWebGL2;se===null&&(se=new wi(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")?Fs:dr,minFilter:eo,samples:X&&o===!0?4:0})),v.getDrawingBufferSize(he),X?se.setSize(he.x,he.y):se.setSize(lc(he.x),lc(he.y));const ae=v.getRenderTarget();v.setRenderTarget(se),v.clear();const Ge=v.toneMapping;v.toneMapping=Si,ki(C,V,Z),v.toneMapping=Ge,Be.updateMultisampleRenderTarget(se),Be.updateRenderTargetMipmap(se),v.setRenderTarget(ae)}function ki(C,V,Z){const X=V.isScene===!0?V.overrideMaterial:null;for(let ae=0,Ge=C.length;ae<Ge;ae++){const qe=C[ae],Ke=qe.object,Ze=qe.geometry,ht=X===null?qe.material:X,it=qe.group;Ke.layers.test(Z.layers)&&oo(Ke,V,Z,Ze,ht,it)}}function oo(C,V,Z,X,ae,Ge){C.onBeforeRender(v,V,Z,X,ae,Ge),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ae.onBeforeRender(v,V,Z,X,C,Ge),ae.transparent===!0&&ae.side===fr?(ae.side=Zn,ae.needsUpdate=!0,v.renderBufferDirect(Z,V,X,ae,C,Ge),ae.side=Is,ae.needsUpdate=!0,v.renderBufferDirect(Z,V,X,ae,C,Ge),ae.side=fr):v.renderBufferDirect(Z,V,X,ae,C,Ge),C.onAfterRender(v,V,Z,X,ae,Ge)}function ss(C,V,Z){V.isScene!==!0&&(V=Ce);const X=Ye.get(C),ae=_.state.lights,Ge=_.state.shadowsArray,qe=ae.state.version,Ke=ut.getParameters(C,ae.state,Ge,V,Z),Ze=ut.getProgramCacheKey(Ke);let ht=X.programs;X.environment=C.isMeshStandardMaterial?V.environment:null,X.fog=V.fog,X.envMap=(C.isMeshStandardMaterial?xt:ct).get(C.envMap||X.environment),ht===void 0&&(C.addEventListener("dispose",Ie),ht=new Map,X.programs=ht);let it=ht.get(Ze);if(it!==void 0){if(X.currentProgram===it&&X.lightsStateVersion===qe)return Hs(C,Ke),it}else Ke.uniforms=ut.getUniforms(C),C.onBuild(Z,Ke,v),C.onBeforeCompile(Ke,v),it=ut.acquireProgram(Ke,Ze),ht.set(Ze,it),X.uniforms=Ke.uniforms;const at=X.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(at.clippingPlanes=E.uniform),Hs(C,Ke),X.needsLights=os(C),X.lightsStateVersion=qe,X.needsLights&&(at.ambientLightColor.value=ae.state.ambient,at.lightProbe.value=ae.state.probe,at.directionalLights.value=ae.state.directional,at.directionalLightShadows.value=ae.state.directionalShadow,at.spotLights.value=ae.state.spot,at.spotLightShadows.value=ae.state.spotShadow,at.rectAreaLights.value=ae.state.rectArea,at.ltc_1.value=ae.state.rectAreaLTC1,at.ltc_2.value=ae.state.rectAreaLTC2,at.pointLights.value=ae.state.point,at.pointLightShadows.value=ae.state.pointShadow,at.hemisphereLights.value=ae.state.hemi,at.directionalShadowMap.value=ae.state.directionalShadowMap,at.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,at.spotShadowMap.value=ae.state.spotShadowMap,at.spotShadowMatrix.value=ae.state.spotShadowMatrix,at.pointShadowMap.value=ae.state.pointShadowMap,at.pointShadowMatrix.value=ae.state.pointShadowMatrix);const yt=it.getUniforms(),ai=ja.seqWithValue(yt.seq,at);return X.currentProgram=it,X.uniformsList=ai,it}function Hs(C,V){const Z=Ye.get(C);Z.outputEncoding=V.outputEncoding,Z.instancing=V.instancing,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function as(C,V,Z,X,ae){V.isScene!==!0&&(V=Ce),Be.resetTextureUnits();const Ge=V.fog,qe=X.isMeshStandardMaterial?V.environment:null,Ke=O===null?v.outputEncoding:O.isXRRenderTarget===!0?O.texture.encoding:pr,Ze=(X.isMeshStandardMaterial?xt:ct).get(X.envMap||qe),ht=X.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,it=!!X.normalMap&&!!Z.attributes.tangent,at=!!Z.morphAttributes.position,yt=!!Z.morphAttributes.normal,ai=!!Z.morphAttributes.color,bi=X.toneMapped?v.toneMapping:Si,On=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Mn=On!==void 0?On.length:0,rt=Ye.get(X),Ei=_.state.lights;if(ne===!0&&($===!0||C!==L)){const Sn=C===L&&X.id===N;E.setState(X,C,Sn)}let At=!1;X.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==Ei.state.version||rt.outputEncoding!==Ke||ae.isInstancedMesh&&rt.instancing===!1||!ae.isInstancedMesh&&rt.instancing===!0||ae.isSkinnedMesh&&rt.skinning===!1||!ae.isSkinnedMesh&&rt.skinning===!0||rt.envMap!==Ze||X.fog===!0&&rt.fog!==Ge||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==E.numPlanes||rt.numIntersection!==E.numIntersection)||rt.vertexAlphas!==ht||rt.vertexTangents!==it||rt.morphTargets!==at||rt.morphNormals!==yt||rt.morphColors!==ai||rt.toneMapping!==bi||Ue.isWebGL2===!0&&rt.morphTargetsCount!==Mn)&&(At=!0):(At=!0,rt.__version=X.version);let yn=rt.currentProgram;At===!0&&(yn=ss(X,V,ae));let Un=!1,Ti=!1,_r=!1;const Vt=yn.getUniforms(),qi=rt.uniforms;if(Te.useProgram(yn.program)&&(Un=!0,Ti=!0,_r=!0),X.id!==N&&(N=X.id,Ti=!0),Un||L!==C){if(Vt.setValue(ee,"projectionMatrix",C.projectionMatrix),Ue.logarithmicDepthBuffer&&Vt.setValue(ee,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),L!==C&&(L=C,Ti=!0,_r=!0),X.isShaderMaterial||X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshStandardMaterial||X.envMap){const Sn=Vt.map.cameraPosition;Sn!==void 0&&Sn.setValue(ee,pe.setFromMatrixPosition(C.matrixWorld))}(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Vt.setValue(ee,"isOrthographic",C.isOrthographicCamera===!0),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial||X.isShadowMaterial||ae.isSkinnedMesh)&&Vt.setValue(ee,"viewMatrix",C.matrixWorldInverse)}if(ae.isSkinnedMesh){Vt.setOptional(ee,ae,"bindMatrix"),Vt.setOptional(ee,ae,"bindMatrixInverse");const Sn=ae.skeleton;Sn&&(Ue.floatVertexTextures?(Sn.boneTexture===null&&Sn.computeBoneTexture(),Vt.setValue(ee,"boneTexture",Sn.boneTexture,Be),Vt.setValue(ee,"boneTextureSize",Sn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ls=Z.morphAttributes;return(ls.position!==void 0||ls.normal!==void 0||ls.color!==void 0&&Ue.isWebGL2===!0)&&xe.update(ae,Z,X,yn),(Ti||rt.receiveShadow!==ae.receiveShadow)&&(rt.receiveShadow=ae.receiveShadow,Vt.setValue(ee,"receiveShadow",ae.receiveShadow)),Ti&&(Vt.setValue(ee,"toneMappingExposure",v.toneMappingExposure),rt.needsLights&&lo(qi,_r),Ge&&X.fog===!0&&Bt.refreshFogUniforms(qi,Ge),Bt.refreshMaterialUniforms(qi,X,Y,Q,se),ja.upload(ee,rt.uniformsList,qi,Be)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ja.upload(ee,rt.uniformsList,qi,Be),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Vt.setValue(ee,"center",ae.center),Vt.setValue(ee,"modelViewMatrix",ae.modelViewMatrix),Vt.setValue(ee,"normalMatrix",ae.normalMatrix),Vt.setValue(ee,"modelMatrix",ae.matrixWorld),yn}function lo(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function os(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(C,V,Z){Ye.get(C.texture).__webglTexture=V,Ye.get(C.depthTexture).__webglTexture=Z;const X=Ye.get(C);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=Z===void 0,X.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,V){const Z=Ye.get(C);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,Z=0){O=C,b=V,P=Z;let X=!0;if(C){const Ze=Ye.get(C);Ze.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(36160,null),X=!1):Ze.__webglFramebuffer===void 0?Be.setupRenderTarget(C):Ze.__hasExternalTextures&&Be.rebindTextures(C,Ye.get(C.texture).__webglTexture,Ye.get(C.depthTexture).__webglTexture)}let ae=null,Ge=!1,qe=!1;if(C){const Ze=C.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture)&&(qe=!0);const ht=Ye.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(ae=ht[V],Ge=!0):Ue.isWebGL2&&C.samples>0&&Be.useMultisampledRTT(C)===!1?ae=Ye.get(C).__webglMultisampledFramebuffer:ae=ht,G.copy(C.viewport),k.copy(C.scissor),A=C.scissorTest}else G.copy(H).multiplyScalar(Y).floor(),k.copy(oe).multiplyScalar(Y).floor(),A=j;if(Te.bindFramebuffer(36160,ae)&&Ue.drawBuffers&&X&&Te.drawBuffers(C,ae),Te.viewport(G),Te.scissor(k),Te.setScissorTest(A),Ge){const Ze=Ye.get(C.texture);ee.framebufferTexture2D(36160,36064,34069+V,Ze.__webglTexture,Z)}else if(qe){const Ze=Ye.get(C.texture),ht=V||0;ee.framebufferTextureLayer(36160,36064,Ze.__webglTexture,Z||0,ht)}N=-1},this.readRenderTargetPixels=function(C,V,Z,X,ae,Ge,qe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=Ye.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&qe!==void 0&&(Ke=Ke[qe]),Ke){Te.bindFramebuffer(36160,Ke);try{const Ze=C.texture,ht=Ze.format,it=Ze.type;if(ht!==Yn&&T.convert(ht)!==ee.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const at=it===Fs&&(ze.has("EXT_color_buffer_half_float")||Ue.isWebGL2&&ze.has("EXT_color_buffer_float"));if(it!==dr&&T.convert(it)!==ee.getParameter(35738)&&!(it===lr&&(Ue.isWebGL2||ze.has("OES_texture_float")||ze.has("WEBGL_color_buffer_float")))&&!at){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-X&&Z>=0&&Z<=C.height-ae&&ee.readPixels(V,Z,X,ae,T.convert(ht),T.convert(it),Ge)}finally{const Ze=O!==null?Ye.get(O).__webglFramebuffer:null;Te.bindFramebuffer(36160,Ze)}}},this.copyFramebufferToTexture=function(C,V,Z=0){const X=Math.pow(2,-Z),ae=Math.floor(V.image.width*X),Ge=Math.floor(V.image.height*X);Be.setTexture2D(V,0),ee.copyTexSubImage2D(3553,Z,0,0,C.x,C.y,ae,Ge),Te.unbindTexture()},this.copyTextureToTexture=function(C,V,Z,X=0){const ae=V.image.width,Ge=V.image.height,qe=T.convert(Z.format),Ke=T.convert(Z.type);Be.setTexture2D(Z,0),ee.pixelStorei(37440,Z.flipY),ee.pixelStorei(37441,Z.premultiplyAlpha),ee.pixelStorei(3317,Z.unpackAlignment),V.isDataTexture?ee.texSubImage2D(3553,X,C.x,C.y,ae,Ge,qe,Ke,V.image.data):V.isCompressedTexture?ee.compressedTexSubImage2D(3553,X,C.x,C.y,V.mipmaps[0].width,V.mipmaps[0].height,qe,V.mipmaps[0].data):ee.texSubImage2D(3553,X,C.x,C.y,qe,Ke,V.image),X===0&&Z.generateMipmaps&&ee.generateMipmap(3553),Te.unbindTexture()},this.copyTextureToTexture3D=function(C,V,Z,X,ae=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ge=C.max.x-C.min.x+1,qe=C.max.y-C.min.y+1,Ke=C.max.z-C.min.z+1,Ze=T.convert(X.format),ht=T.convert(X.type);let it;if(X.isData3DTexture)Be.setTexture3D(X,0),it=32879;else if(X.isDataArrayTexture)Be.setTexture2DArray(X,0),it=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ee.pixelStorei(37440,X.flipY),ee.pixelStorei(37441,X.premultiplyAlpha),ee.pixelStorei(3317,X.unpackAlignment);const at=ee.getParameter(3314),yt=ee.getParameter(32878),ai=ee.getParameter(3316),bi=ee.getParameter(3315),On=ee.getParameter(32877),Mn=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;ee.pixelStorei(3314,Mn.width),ee.pixelStorei(32878,Mn.height),ee.pixelStorei(3316,C.min.x),ee.pixelStorei(3315,C.min.y),ee.pixelStorei(32877,C.min.z),Z.isDataTexture||Z.isData3DTexture?ee.texSubImage3D(it,ae,V.x,V.y,V.z,Ge,qe,Ke,Ze,ht,Mn.data):Z.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ee.compressedTexSubImage3D(it,ae,V.x,V.y,V.z,Ge,qe,Ke,Ze,Mn.data)):ee.texSubImage3D(it,ae,V.x,V.y,V.z,Ge,qe,Ke,Ze,ht,Mn),ee.pixelStorei(3314,at),ee.pixelStorei(32878,yt),ee.pixelStorei(3316,ai),ee.pixelStorei(3315,bi),ee.pixelStorei(32877,On),ae===0&&X.generateMipmaps&&ee.generateMipmap(it),Te.unbindTexture()},this.initTexture=function(C){Be.setTexture2D(C,0),Te.unbindTexture()},this.resetState=function(){b=0,P=0,O=null,Te.reset(),le.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class H1 extends Vd{}H1.prototype.isWebGL1Renderer=!0;class V1 extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class k1 extends Zt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class ro extends Zt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ed=new B,td=new B,nd=new zt,Ql=new Cd,$a=new to;class q1 extends nn{constructor(e=new Nn,t=new ro){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,o=t.count;s<o;s++)ed.fromBufferAttribute(t,s-1),td.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ed.distanceTo(td);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$a.copy(i.boundingSphere),$a.applyMatrix4(s),$a.radius+=o,e.ray.intersectsSphere($a)===!1)return;nd.copy(s).invert(),Ql.copy(e.ray).applyMatrix4(nd);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,f=new B,p=new B,g=new B,_=new B,M=this.isLineSegments?2:1,w=i.index,m=i.attributes.position;if(w!==null){const b=Math.max(0,u.start),P=Math.min(w.count,u.start+u.count);for(let O=b,N=P-1;O<N;O+=M){const L=w.getX(O),G=w.getX(O+1);if(f.fromBufferAttribute(m,L),p.fromBufferAttribute(m,G),Ql.distanceSqToSegment(f,p,_,g)>d)continue;_.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(_);A<e.near||A>e.far||t.push({distance:A,point:g.clone().applyMatrix4(this.matrixWorld),index:O,face:null,faceIndex:null,object:this})}}else{const b=Math.max(0,u.start),P=Math.min(m.count,u.start+u.count);for(let O=b,N=P-1;O<N;O+=M){if(f.fromBufferAttribute(m,O),p.fromBufferAttribute(m,O+1),Ql.distanceSqToSegment(f,p,_,g)>d)continue;_.applyMatrix4(this.matrixWorld);const G=e.ray.origin.distanceTo(_);G<e.near||G>e.far||t.push({distance:G,point:g.clone().applyMatrix4(this.matrixWorld),index:O,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}const id=new B,rd=new B;class X1 extends q1{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,o=t.count;s<o;s+=2)id.fromBufferAttribute(t,s),rd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+id.distanceTo(rd);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Y1 extends Zt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}new B;new B;new B;new B;new ni;class Z1 extends Zt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ke(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class kd extends $n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qd extends Zt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=is,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $1 extends qd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class K1 extends Zt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ke(16777215),this.specular=new ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=is,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class j1 extends Zt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ke(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=is,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class J1 extends Zt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=is,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Q1 extends Zt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class eE extends Zt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ke(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=is,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tE extends ro{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const nE={ShadowMaterial:Z1,SpriteMaterial:k1,RawShaderMaterial:kd,ShaderMaterial:$n,PointsMaterial:Y1,MeshPhysicalMaterial:$1,MeshStandardMaterial:qd,MeshPhongMaterial:K1,MeshToonMaterial:j1,MeshNormalMaterial:J1,MeshLambertMaterial:Q1,MeshDepthMaterial:Wd,MeshDistanceMaterial:Hd,MeshBasicMaterial:dc,MeshMatcapMaterial:eE,LineDashedMaterial:tE,LineBasicMaterial:ro,Material:Zt};Zt.fromType=function(l){return new nE[l]};const sd={enabled:!1,files:{},add:function(l,e){this.enabled!==!1&&(this.files[l]=e)},get:function(l){if(this.enabled!==!1)return this.files[l]},remove:function(l){delete this.files[l]},clear:function(){this.files={}}};class iE{constructor(e,t,i){const s=this;let o=!1,u=0,c=0,d;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(p){c++,o===!1&&s.onStart!==void 0&&s.onStart(p,u,c),o=!0},this.itemEnd=function(p){u++,s.onProgress!==void 0&&s.onProgress(p,u,c),u===c&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,g){return f.push(p,g),this},this.removeHandler=function(p){const g=f.indexOf(p);return g!==-1&&f.splice(g,2),this},this.getHandler=function(p){for(let g=0,_=f.length;g<_;g+=2){const M=f[g],w=f[g+1];if(M.global&&(M.lastIndex=0),M.test(p))return w}return null}}}const rE=new iE;class Xd{constructor(e){this.manager=e!==void 0?e:rE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,o){i.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class sE extends Xd{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,u=sd.get(e);if(u!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(u),o.manager.itemEnd(e)},0),u;const c=Ns("img");function d(){p(),sd.add(e,this),t&&t(this),o.manager.itemEnd(e)}function f(g){p(),s&&s(g),o.manager.itemError(e),o.manager.itemEnd(e)}function p(){c.removeEventListener("load",d,!1),c.removeEventListener("error",f,!1)}return c.addEventListener("load",d,!1),c.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),o.manager.itemStart(e),c.src=e,c}}class aE extends Xd{constructor(e){super(e)}load(e,t,i,s){const o=new Fn,u=new sE(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(c){o.image=c,o.needsUpdate=!0,t!==void 0&&t(o)},i,s),o}}class oE extends nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ad=new zt,od=new B,ld=new B;class lE{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pc,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;od.setFromMatrixPosition(e.matrixWorld),t.position.copy(od),ld.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ld),t.updateMatrixWorld(),ad.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ad),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cE extends lE{constructor(){super(new no(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ec extends oE{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DefaultUp),this.updateMatrix(),this.target=new nn,this.shadow=new cE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class uE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=cd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function cd(){return(typeof performance=="undefined"?Date:performance).now()}const Yd="\\[\\]\\.:\\/",_c="[^"+Yd+"]",hE="[^"+Yd.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",_c);/(WCOD+)?/.source.replace("WCOD",hE);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_c);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_c);class ud{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(tn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class fE extends X1{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Nn;s.setAttribute("position",new It(t,3)),s.setAttribute("color",new It(i,3));const o=new ro({vertexColors:!0,toneMapped:!1});super(s,o),this.type="AxesHelper"}setColors(e,t,i){const s=new ke,o=this.geometry.attributes.color.array;return s.set(e),s.toArray(o,0),s.toArray(o,3),s.set(t),s.toArray(o,6),s.toArray(o,9),s.set(i),s.toArray(o,12),s.toArray(o,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}const Qn=new Uint32Array(512),ei=new Uint32Array(512);for(let l=0;l<256;++l){const e=l-127;e<-27?(Qn[l]=0,Qn[l|256]=32768,ei[l]=24,ei[l|256]=24):e<-14?(Qn[l]=1024>>-e-14,Qn[l|256]=1024>>-e-14|32768,ei[l]=-e-1,ei[l|256]=-e-1):e<=15?(Qn[l]=e+15<<10,Qn[l|256]=e+15<<10|32768,ei[l]=13,ei[l|256]=13):e<128?(Qn[l]=31744,Qn[l|256]=64512,ei[l]=24,ei[l|256]=24):(Qn[l]=31744,Qn[l|256]=64512,ei[l]=13,ei[l|256]=13)}const Zd=new Uint32Array(2048),Gs=new Uint32Array(64),dE=new Uint32Array(64);for(let l=1;l<1024;++l){let e=l<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,Zd[l]=e|t}for(let l=1024;l<2048;++l)Zd[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)Gs[l]=l<<23;Gs[31]=1199570944;Gs[32]=2147483648;for(let l=33;l<63;++l)Gs[l]=2147483648+(l-32<<23);Gs[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(dE[l]=1024);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fc);const hd={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class so{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const pE=new no(-1,1,1,-1,0,1),vc=new Nn;vc.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3));vc.setAttribute("uv",new It([0,2,0,0,2,0],2));class mE{constructor(e){this._mesh=new ri(vc,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,pE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class fd extends so{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof $n?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Pd.clone(e.uniforms),this.material=new $n({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new mE(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class dd extends so{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let u,c;this.inverse?(u=0,c=1):(u=1,c=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,u,4294967295),o.buffers.stencil.setClear(c),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class gE extends so{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class _E{constructor(e,t){if(this.renderer=e,t===void 0){const i=e.getSize(new He);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new wi(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],hd===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),fd===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new fd(hd),this.clock=new uE}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,o=this.passes.length;s<o;s++){const u=this.passes[s];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),u.needsSwap){if(i){const c=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(c.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),d.setFunc(c.EQUAL,1,4294967295)}this.swapBuffers()}dd!==void 0&&(u instanceof dd?i=!0:u instanceof gE&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new He);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new no(-1,1,1,-1,0,1);const $d=new Nn;$d.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3));$d.setAttribute("uv",new It([0,2,0,0,2,0],2));const pd={type:"change"},tc={type:"start"},md={type:"end"};class vE extends gr{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pr.ROTATE,MIDDLE:Pr.DOLLY,RIGHT:Pr.PAN},this.touches={ONE:Ir.ROTATE,TWO:Ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",Mt),this._domElementKeyEvents=T},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(pd),i.update(),o=s.NONE},this.update=function(){const T=new B,le=new mr().setFromUnitVectors(e.up,new B(0,1,0)),Me=le.clone().invert(),ge=new B,I=new mr,_e=2*Math.PI;return function(){const Ie=i.object.position;T.copy(Ie).sub(i.target),T.applyQuaternion(le),c.setFromVector3(T),i.autoRotate&&o===s.NONE&&U(k()),i.enableDamping?(c.theta+=d.theta*i.dampingFactor,c.phi+=d.phi*i.dampingFactor):(c.theta+=d.theta,c.phi+=d.phi);let Se=i.minAzimuthAngle,De=i.maxAzimuthAngle;return isFinite(Se)&&isFinite(De)&&(Se<-Math.PI?Se+=_e:Se>Math.PI&&(Se-=_e),De<-Math.PI?De+=_e:De>Math.PI&&(De-=_e),Se<=De?c.theta=Math.max(Se,Math.min(De,c.theta)):c.theta=c.theta>(Se+De)/2?Math.max(Se,c.theta):Math.min(De,c.theta)),c.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,c.phi)),c.makeSafe(),c.radius*=f,c.radius=Math.max(i.minDistance,Math.min(i.maxDistance,c.radius)),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),T.setFromSpherical(c),T.applyQuaternion(Me),Ie.copy(i.target).add(T),i.object.lookAt(i.target),i.enableDamping===!0?(d.theta*=1-i.dampingFactor,d.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(d.set(0,0,0),p.set(0,0,0)),f=1,g||ge.distanceToSquared(i.object.position)>u||8*(1-I.dot(i.object.quaternion))>u?(i.dispatchEvent(pd),ge.copy(i.object.position),I.copy(i.object.quaternion),g=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",J),i.domElement.removeEventListener("pointerdown",ct),i.domElement.removeEventListener("pointercancel",wt),i.domElement.removeEventListener("wheel",Bt),i.domElement.removeEventListener("pointermove",xt),i.domElement.removeEventListener("pointerup",Ft),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",Mt)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=s.NONE;const u=1e-6,c=new ud,d=new ud;let f=1;const p=new B;let g=!1;const _=new He,M=new He,w=new He,v=new He,m=new He,b=new He,P=new He,O=new He,N=new He,L=[],G={};function k(){return 2*Math.PI/60/60*i.autoRotateSpeed}function A(){return Math.pow(.95,i.zoomSpeed)}function U(T){d.theta-=T}function Q(T){d.phi-=T}const Y=function(){const T=new B;return function(Me,ge){T.setFromMatrixColumn(ge,0),T.multiplyScalar(-Me),p.add(T)}}(),Ee=function(){const T=new B;return function(Me,ge){i.screenSpacePanning===!0?T.setFromMatrixColumn(ge,1):(T.setFromMatrixColumn(ge,0),T.crossVectors(i.object.up,T)),T.multiplyScalar(Me),p.add(T)}}(),de=function(){const T=new B;return function(Me,ge){const I=i.domElement;if(i.object.isPerspectiveCamera){const _e=i.object.position;T.copy(_e).sub(i.target);let me=T.length();me*=Math.tan(i.object.fov/2*Math.PI/180),Y(2*Me*me/I.clientHeight,i.object.matrix),Ee(2*ge*me/I.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Y(Me*(i.object.right-i.object.left)/i.object.zoom/I.clientWidth,i.object.matrix),Ee(ge*(i.object.top-i.object.bottom)/i.object.zoom/I.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function H(T){i.object.isPerspectiveCamera?f/=T:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*T)),i.object.updateProjectionMatrix(),g=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function oe(T){i.object.isPerspectiveCamera?f*=T:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/T)),i.object.updateProjectionMatrix(),g=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(T){_.set(T.clientX,T.clientY)}function re(T){P.set(T.clientX,T.clientY)}function ne(T){v.set(T.clientX,T.clientY)}function $(T){M.set(T.clientX,T.clientY),w.subVectors(M,_).multiplyScalar(i.rotateSpeed);const le=i.domElement;U(2*Math.PI*w.x/le.clientHeight),Q(2*Math.PI*w.y/le.clientHeight),_.copy(M),i.update()}function se(T){O.set(T.clientX,T.clientY),N.subVectors(O,P),N.y>0?H(A()):N.y<0&&oe(A()),P.copy(O),i.update()}function fe(T){m.set(T.clientX,T.clientY),b.subVectors(m,v).multiplyScalar(i.panSpeed),de(b.x,b.y),v.copy(m),i.update()}function he(T){T.deltaY<0?oe(A()):T.deltaY>0&&H(A()),i.update()}function pe(T){let le=!1;switch(T.code){case i.keys.UP:de(0,i.keyPanSpeed),le=!0;break;case i.keys.BOTTOM:de(0,-i.keyPanSpeed),le=!0;break;case i.keys.LEFT:de(i.keyPanSpeed,0),le=!0;break;case i.keys.RIGHT:de(-i.keyPanSpeed,0),le=!0;break}le&&(T.preventDefault(),i.update())}function Ce(){if(L.length===1)_.set(L[0].pageX,L[0].pageY);else{const T=.5*(L[0].pageX+L[1].pageX),le=.5*(L[0].pageY+L[1].pageY);_.set(T,le)}}function Re(){if(L.length===1)v.set(L[0].pageX,L[0].pageY);else{const T=.5*(L[0].pageX+L[1].pageX),le=.5*(L[0].pageY+L[1].pageY);v.set(T,le)}}function ee(){const T=L[0].pageX-L[1].pageX,le=L[0].pageY-L[1].pageY,Me=Math.sqrt(T*T+le*le);P.set(0,Me)}function pt(){i.enableZoom&&ee(),i.enablePan&&Re()}function ze(){i.enableZoom&&ee(),i.enableRotate&&Ce()}function Ue(T){if(L.length==1)M.set(T.pageX,T.pageY);else{const Me=Pe(T),ge=.5*(T.pageX+Me.x),I=.5*(T.pageY+Me.y);M.set(ge,I)}w.subVectors(M,_).multiplyScalar(i.rotateSpeed);const le=i.domElement;U(2*Math.PI*w.x/le.clientHeight),Q(2*Math.PI*w.y/le.clientHeight),_.copy(M)}function Te(T){if(L.length===1)m.set(T.pageX,T.pageY);else{const le=Pe(T),Me=.5*(T.pageX+le.x),ge=.5*(T.pageY+le.y);m.set(Me,ge)}b.subVectors(m,v).multiplyScalar(i.panSpeed),de(b.x,b.y),v.copy(m)}function tt(T){const le=Pe(T),Me=T.pageX-le.x,ge=T.pageY-le.y,I=Math.sqrt(Me*Me+ge*ge);O.set(0,I),N.set(0,Math.pow(O.y/P.y,i.zoomSpeed)),H(N.y),P.copy(O)}function Ye(T){i.enableZoom&&tt(T),i.enablePan&&Te(T)}function Be(T){i.enableZoom&&tt(T),i.enableRotate&&Ue(T)}function ct(T){i.enabled!==!1&&(L.length===0&&(i.domElement.setPointerCapture(T.pointerId),i.domElement.addEventListener("pointermove",xt),i.domElement.addEventListener("pointerup",Ft)),ue(T),T.pointerType==="touch"?R(T):Tt(T))}function xt(T){i.enabled!==!1&&(T.pointerType==="touch"?E(T):ut(T))}function Ft(T){xe(T),L.length===0&&(i.domElement.releasePointerCapture(T.pointerId),i.domElement.removeEventListener("pointermove",xt),i.domElement.removeEventListener("pointerup",Ft)),i.dispatchEvent(md),o=s.NONE}function wt(T){xe(T)}function Tt(T){let le;switch(T.button){case 0:le=i.mouseButtons.LEFT;break;case 1:le=i.mouseButtons.MIDDLE;break;case 2:le=i.mouseButtons.RIGHT;break;default:le=-1}switch(le){case Pr.DOLLY:if(i.enableZoom===!1)return;re(T),o=s.DOLLY;break;case Pr.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enablePan===!1)return;ne(T),o=s.PAN}else{if(i.enableRotate===!1)return;j(T),o=s.ROTATE}break;case Pr.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enableRotate===!1)return;j(T),o=s.ROTATE}else{if(i.enablePan===!1)return;ne(T),o=s.PAN}break;default:o=s.NONE}o!==s.NONE&&i.dispatchEvent(tc)}function ut(T){if(i.enabled!==!1)switch(o){case s.ROTATE:if(i.enableRotate===!1)return;$(T);break;case s.DOLLY:if(i.enableZoom===!1)return;se(T);break;case s.PAN:if(i.enablePan===!1)return;fe(T);break}}function Bt(T){i.enabled===!1||i.enableZoom===!1||o!==s.NONE||(T.preventDefault(),i.dispatchEvent(tc),he(T),i.dispatchEvent(md))}function Mt(T){i.enabled===!1||i.enablePan===!1||pe(T)}function R(T){switch(ye(T),L.length){case 1:switch(i.touches.ONE){case Ir.ROTATE:if(i.enableRotate===!1)return;Ce(),o=s.TOUCH_ROTATE;break;case Ir.PAN:if(i.enablePan===!1)return;Re(),o=s.TOUCH_PAN;break;default:o=s.NONE}break;case 2:switch(i.touches.TWO){case Ir.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;pt(),o=s.TOUCH_DOLLY_PAN;break;case Ir.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ze(),o=s.TOUCH_DOLLY_ROTATE;break;default:o=s.NONE}break;default:o=s.NONE}o!==s.NONE&&i.dispatchEvent(tc)}function E(T){switch(ye(T),o){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ue(T),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;Te(T),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ye(T),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Be(T),i.update();break;default:o=s.NONE}}function J(T){i.enabled!==!1&&T.preventDefault()}function ue(T){L.push(T)}function xe(T){delete G[T.pointerId];for(let le=0;le<L.length;le++)if(L[le].pointerId==T.pointerId){L.splice(le,1);return}}function ye(T){let le=G[T.pointerId];le===void 0&&(le=new He,G[T.pointerId]=le),le.set(T.pageX,T.pageY)}function Pe(T){const le=T.pointerId===L[0].pointerId?L[1]:L[0];return G[le.pointerId]}i.domElement.addEventListener("contextmenu",J),i.domElement.addEventListener("pointerdown",ct),i.domElement.addEventListener("pointercancel",wt),i.domElement.addEventListener("wheel",Bt,{passive:!1}),this.update()}}class xE extends so{constructor(e,t,i,s,o){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=o!==void 0?o:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ke}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let o,u;this.overrideMaterial!==void 0&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),o=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,o),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=u),e.autoClear=s}}class ME{constructor(e){Dt(this,"scene");Dt(this,"perspCamera");Dt(this,"width",10);Dt(this,"height",10);Dt(this,"controls");Dt(this,"renderer");Dt(this,"composer");Dt(this,"lightScheme");Dt(this,"callbacks",[]);this.root=e,this.updateSize=this.updateSize.bind(this),this.animate=this.animate.bind(this),this.scene=new V1;const t=new Rs;this.scene.add(t),this.renderer=new Vd({antialias:!0,alpha:!1}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.setClearColor(10066329),this.perspCamera=new In(45,this.width/this.height,.1,1e3),this.perspCamera.position.set(.5,.5,2),this.perspCamera.lookAt(.5,.5,0),this.updateSize(),this.composer=new _E(this.renderer),this.composer.setSize(this.width,this.height),this.composer.addPass(new xE(this.scene,this.perspCamera)),this.controls=new vE(this.perspCamera,this.renderer.domElement),this.controls.minDistance=2,this.controls.maxDistance=12,this.controls.target.set(0,0,0),this.controls.enableDamping=!0,this.controls.zoomSpeed=.5,window.addEventListener("resize",this.updateSize),this.root.appendChild(this.renderer.domElement)}addLightScheme(e){this.lightScheme=e}updateSize(){if(!this.root)return;const e=this.root.getBoundingClientRect();this.width=e.width,this.height=e.height,this.perspCamera.aspect=this.width/this.height,this.perspCamera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}animate(){var t,i;(t=this.controls)==null||t.update(),this.controls.update(),this.composer.render(),(i=this.lightScheme)==null||i.update(),this.callbacks.forEach(s=>s());const e=this.renderer.info.render.calls;console.log(`Number of draw calls per frame: ${e}`),requestAnimationFrame(this.animate)}setCallback(e){this.callbacks.push(e)}}class yE{constructor(e){Dt(this,"directionalLight");this.renderer=e,this.directionalLight=new ec(16777215,.8),this.directionalLight.position.set(1,2,1),this.renderer.scene.add(this.directionalLight.target),this.directionalLight.target.position.set(0,0,0),this.renderer.scene.add(this.directionalLight);const t=new ec(16777215,.6);t.position.set(-1,2,-.5),this.renderer.scene.add(t.target),t.target.position.set(0,0,0),this.renderer.scene.add(t);const i=new ec(16777215,.6);i.position.set(.5,2,-.5),this.renderer.scene.add(i.target),i.target.position.set(0,0,0),this.renderer.scene.add(i),this.renderer.addLightScheme(this)}update(){}}function gd(l,e,t,i,s){return l=l===void 0?t:l,l=l>t?t:l,l=l<e?e:l,uc(l,e,t,i,s)}function uc(l,e,t,i,s){return i+(s-i)/(t-e)*(l-e)}function _d(l){return[l.x,l.y,l.z]}class SE{constructor(e){this.options=e}generateCurve(){const e=[];let t=new B(0,1,0),i=new B(0,0,0);e.push({position:_d(i),width:this.getWidth(0)});for(let s=1;s<this.options.heightSegments;++s){i.add(t.clone().multiplyScalar(this.getStep(s))),this.changeDir(t);const o=s===this.options.heightSegments-1?0:this.getWidth(s),u=_d(i);u[1]=Math.max(u[1],o),e.push({position:u,width:o})}return e}changeDir(e){const{variance:t}=this.options;e.normalize(),e.applyAxisAngle(new B(1,0,0),t*(Math.random()-.5)),e.applyAxisAngle(new B(0,0,1),t*(Math.random()-.5))}getWidth(e){const t=e/this.options.heightSegments;return gd(t,.6,1,this.options.width,.01)}getStep(e){const{length:t,heightSegments:i}=this.options;return gd(e,0,i,t/i,t/i/2)}}var As=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},hc={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(l,e){(function(){var t,i="4.17.21",s=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",c="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",f=500,p="__lodash_placeholder__",g=1,_=2,M=4,w=1,v=2,m=1,b=2,P=4,O=8,N=16,L=32,G=64,k=128,A=256,U=512,Q=30,Y="...",Ee=800,de=16,H=1,oe=2,j=3,re=1/0,ne=9007199254740991,$=17976931348623157e292,se=0/0,fe=4294967295,he=fe-1,pe=fe>>>1,Ce=[["ary",k],["bind",m],["bindKey",b],["curry",O],["curryRight",N],["flip",U],["partial",L],["partialRight",G],["rearg",A]],Re="[object Arguments]",ee="[object Array]",pt="[object AsyncFunction]",ze="[object Boolean]",Ue="[object Date]",Te="[object DOMException]",tt="[object Error]",Ye="[object Function]",Be="[object GeneratorFunction]",ct="[object Map]",xt="[object Number]",Ft="[object Null]",wt="[object Object]",Tt="[object Promise]",ut="[object Proxy]",Bt="[object RegExp]",Mt="[object Set]",R="[object String]",E="[object Symbol]",J="[object Undefined]",ue="[object WeakMap]",xe="[object WeakSet]",ye="[object ArrayBuffer]",Pe="[object DataView]",T="[object Float32Array]",le="[object Float64Array]",Me="[object Int8Array]",ge="[object Int16Array]",I="[object Int32Array]",_e="[object Uint8Array]",me="[object Uint8ClampedArray]",Ie="[object Uint16Array]",Se="[object Uint32Array]",De=/\b__p \+= '';/g,ve=/\b(__p \+=) '' \+/g,We=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ot=/&(?:amp|lt|gt|quot|#39);/g,lt=/[&<>"']/g,Ht=RegExp(ot.source),xn=RegExp(lt.source),Ws=/<%-([\s\S]+?)%>/g,ao=/<%([\s\S]+?)%>/g,ki=/<%=([\s\S]+?)%>/g,oo=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ss=/^\w*$/,Hs=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,as=/[\\^$.*+?()[\]{}|]/g,lo=RegExp(as.source),os=/^\s+/,C=/\s/,V=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Z=/\{\n\/\* \[wrapped with (.+)\] \*/,X=/,? & /,ae=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ge=/[()=,{}\[\]\/\s]/,qe=/\\(\\)?/g,Ke=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ze=/\w*$/,ht=/^[-+]0x[0-9a-f]+$/i,it=/^0b[01]+$/i,at=/^\[object .+?Constructor\]$/,yt=/^0o[0-7]+$/i,ai=/^(?:0|[1-9]\d*)$/,bi=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,On=/($^)/,Mn=/['\n\r\u2028\u2029\\]/g,rt="\\ud800-\\udfff",Ei="\\u0300-\\u036f",At="\\ufe20-\\ufe2f",yn="\\u20d0-\\u20ff",Un=Ei+At+yn,Ti="\\u2700-\\u27bf",_r="a-z\\xdf-\\xf6\\xf8-\\xff",Vt="\\xac\\xb1\\xd7\\xf7",qi="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ls="\\u2000-\\u206f",Sn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xc="A-Z\\xc0-\\xd6\\xd8-\\xde",Mc="\\ufe0e\\ufe0f",yc=Vt+qi+ls+Sn,co="['\u2019]",jd="["+rt+"]",Sc="["+yc+"]",Vs="["+Un+"]",wc="\\d+",Jd="["+Ti+"]",bc="["+_r+"]",Ec="[^"+rt+yc+wc+Ti+_r+xc+"]",uo="\\ud83c[\\udffb-\\udfff]",Qd="(?:"+Vs+"|"+uo+")",Tc="[^"+rt+"]",ho="(?:\\ud83c[\\udde6-\\uddff]){2}",fo="[\\ud800-\\udbff][\\udc00-\\udfff]",vr="["+xc+"]",Ac="\\u200d",Cc="(?:"+bc+"|"+Ec+")",ep="(?:"+vr+"|"+Ec+")",Lc="(?:"+co+"(?:d|ll|m|re|s|t|ve))?",Rc="(?:"+co+"(?:D|LL|M|RE|S|T|VE))?",Dc=Qd+"?",Pc="["+Mc+"]?",tp="(?:"+Ac+"(?:"+[Tc,ho,fo].join("|")+")"+Pc+Dc+")*",np="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ip="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ic=Pc+Dc+tp,rp="(?:"+[Jd,ho,fo].join("|")+")"+Ic,sp="(?:"+[Tc+Vs+"?",Vs,ho,fo,jd].join("|")+")",ap=RegExp(co,"g"),op=RegExp(Vs,"g"),po=RegExp(uo+"(?="+uo+")|"+sp+Ic,"g"),lp=RegExp([vr+"?"+bc+"+"+Lc+"(?="+[Sc,vr,"$"].join("|")+")",ep+"+"+Rc+"(?="+[Sc,vr+Cc,"$"].join("|")+")",vr+"?"+Cc+"+"+Lc,vr+"+"+Rc,ip,np,wc,rp].join("|"),"g"),cp=RegExp("["+Ac+rt+Un+Mc+"]"),up=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,hp=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],fp=-1,vt={};vt[T]=vt[le]=vt[Me]=vt[ge]=vt[I]=vt[_e]=vt[me]=vt[Ie]=vt[Se]=!0,vt[Re]=vt[ee]=vt[ye]=vt[ze]=vt[Pe]=vt[Ue]=vt[tt]=vt[Ye]=vt[ct]=vt[xt]=vt[wt]=vt[Bt]=vt[Mt]=vt[R]=vt[ue]=!1;var _t={};_t[Re]=_t[ee]=_t[ye]=_t[Pe]=_t[ze]=_t[Ue]=_t[T]=_t[le]=_t[Me]=_t[ge]=_t[I]=_t[ct]=_t[xt]=_t[wt]=_t[Bt]=_t[Mt]=_t[R]=_t[E]=_t[_e]=_t[me]=_t[Ie]=_t[Se]=!0,_t[tt]=_t[Ye]=_t[ue]=!1;var dp={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},pp={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},mp={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},gp={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},_p=parseFloat,vp=parseInt,Fc=typeof As=="object"&&As&&As.Object===Object&&As,xp=typeof self=="object"&&self&&self.Object===Object&&self,kt=Fc||xp||Function("return this")(),mo=e&&!e.nodeType&&e,Xi=mo&&!0&&l&&!l.nodeType&&l,Nc=Xi&&Xi.exports===mo,go=Nc&&Fc.process,wn=function(){try{var z=Xi&&Xi.require&&Xi.require("util").types;return z||go&&go.binding&&go.binding("util")}catch{}}(),Oc=wn&&wn.isArrayBuffer,Uc=wn&&wn.isDate,zc=wn&&wn.isMap,Bc=wn&&wn.isRegExp,Gc=wn&&wn.isSet,Wc=wn&&wn.isTypedArray;function hn(z,K,q){switch(q.length){case 0:return z.call(K);case 1:return z.call(K,q[0]);case 2:return z.call(K,q[0],q[1]);case 3:return z.call(K,q[0],q[1],q[2])}return z.apply(K,q)}function Mp(z,K,q,Ae){for(var Ve=-1,ft=z==null?0:z.length;++Ve<ft;){var Nt=z[Ve];K(Ae,Nt,q(Nt),z)}return Ae}function bn(z,K){for(var q=-1,Ae=z==null?0:z.length;++q<Ae&&K(z[q],q,z)!==!1;);return z}function yp(z,K){for(var q=z==null?0:z.length;q--&&K(z[q],q,z)!==!1;);return z}function Hc(z,K){for(var q=-1,Ae=z==null?0:z.length;++q<Ae;)if(!K(z[q],q,z))return!1;return!0}function Ai(z,K){for(var q=-1,Ae=z==null?0:z.length,Ve=0,ft=[];++q<Ae;){var Nt=z[q];K(Nt,q,z)&&(ft[Ve++]=Nt)}return ft}function ks(z,K){var q=z==null?0:z.length;return!!q&&xr(z,K,0)>-1}function _o(z,K,q){for(var Ae=-1,Ve=z==null?0:z.length;++Ae<Ve;)if(q(K,z[Ae]))return!0;return!1}function St(z,K){for(var q=-1,Ae=z==null?0:z.length,Ve=Array(Ae);++q<Ae;)Ve[q]=K(z[q],q,z);return Ve}function Ci(z,K){for(var q=-1,Ae=K.length,Ve=z.length;++q<Ae;)z[Ve+q]=K[q];return z}function vo(z,K,q,Ae){var Ve=-1,ft=z==null?0:z.length;for(Ae&&ft&&(q=z[++Ve]);++Ve<ft;)q=K(q,z[Ve],Ve,z);return q}function Sp(z,K,q,Ae){var Ve=z==null?0:z.length;for(Ae&&Ve&&(q=z[--Ve]);Ve--;)q=K(q,z[Ve],Ve,z);return q}function xo(z,K){for(var q=-1,Ae=z==null?0:z.length;++q<Ae;)if(K(z[q],q,z))return!0;return!1}var wp=Mo("length");function bp(z){return z.split("")}function Ep(z){return z.match(ae)||[]}function Vc(z,K,q){var Ae;return q(z,function(Ve,ft,Nt){if(K(Ve,ft,Nt))return Ae=ft,!1}),Ae}function qs(z,K,q,Ae){for(var Ve=z.length,ft=q+(Ae?1:-1);Ae?ft--:++ft<Ve;)if(K(z[ft],ft,z))return ft;return-1}function xr(z,K,q){return K===K?Up(z,K,q):qs(z,kc,q)}function Tp(z,K,q,Ae){for(var Ve=q-1,ft=z.length;++Ve<ft;)if(Ae(z[Ve],K))return Ve;return-1}function kc(z){return z!==z}function qc(z,K){var q=z==null?0:z.length;return q?So(z,K)/q:se}function Mo(z){return function(K){return K==null?t:K[z]}}function yo(z){return function(K){return z==null?t:z[K]}}function Xc(z,K,q,Ae,Ve){return Ve(z,function(ft,Nt,gt){q=Ae?(Ae=!1,ft):K(q,ft,Nt,gt)}),q}function Ap(z,K){var q=z.length;for(z.sort(K);q--;)z[q]=z[q].value;return z}function So(z,K){for(var q,Ae=-1,Ve=z.length;++Ae<Ve;){var ft=K(z[Ae]);ft!==t&&(q=q===t?ft:q+ft)}return q}function wo(z,K){for(var q=-1,Ae=Array(z);++q<z;)Ae[q]=K(q);return Ae}function Cp(z,K){return St(K,function(q){return[q,z[q]]})}function Yc(z){return z&&z.slice(0,jc(z)+1).replace(os,"")}function fn(z){return function(K){return z(K)}}function bo(z,K){return St(K,function(q){return z[q]})}function cs(z,K){return z.has(K)}function Zc(z,K){for(var q=-1,Ae=z.length;++q<Ae&&xr(K,z[q],0)>-1;);return q}function $c(z,K){for(var q=z.length;q--&&xr(K,z[q],0)>-1;);return q}function Lp(z,K){for(var q=z.length,Ae=0;q--;)z[q]===K&&++Ae;return Ae}var Rp=yo(dp),Dp=yo(pp);function Pp(z){return"\\"+gp[z]}function Ip(z,K){return z==null?t:z[K]}function Mr(z){return cp.test(z)}function Fp(z){return up.test(z)}function Np(z){for(var K,q=[];!(K=z.next()).done;)q.push(K.value);return q}function Eo(z){var K=-1,q=Array(z.size);return z.forEach(function(Ae,Ve){q[++K]=[Ve,Ae]}),q}function Kc(z,K){return function(q){return z(K(q))}}function Li(z,K){for(var q=-1,Ae=z.length,Ve=0,ft=[];++q<Ae;){var Nt=z[q];(Nt===K||Nt===p)&&(z[q]=p,ft[Ve++]=q)}return ft}function Xs(z){var K=-1,q=Array(z.size);return z.forEach(function(Ae){q[++K]=Ae}),q}function Op(z){var K=-1,q=Array(z.size);return z.forEach(function(Ae){q[++K]=[Ae,Ae]}),q}function Up(z,K,q){for(var Ae=q-1,Ve=z.length;++Ae<Ve;)if(z[Ae]===K)return Ae;return-1}function zp(z,K,q){for(var Ae=q+1;Ae--;)if(z[Ae]===K)return Ae;return Ae}function yr(z){return Mr(z)?Gp(z):wp(z)}function zn(z){return Mr(z)?Wp(z):bp(z)}function jc(z){for(var K=z.length;K--&&C.test(z.charAt(K)););return K}var Bp=yo(mp);function Gp(z){for(var K=po.lastIndex=0;po.test(z);)++K;return K}function Wp(z){return z.match(po)||[]}function Hp(z){return z.match(lp)||[]}var Vp=function z(K){K=K==null?kt:Sr.defaults(kt.Object(),K,Sr.pick(kt,hp));var q=K.Array,Ae=K.Date,Ve=K.Error,ft=K.Function,Nt=K.Math,gt=K.Object,To=K.RegExp,kp=K.String,En=K.TypeError,Ys=q.prototype,qp=ft.prototype,wr=gt.prototype,Zs=K["__core-js_shared__"],$s=qp.toString,mt=wr.hasOwnProperty,Xp=0,Jc=function(){var n=/[^.]+$/.exec(Zs&&Zs.keys&&Zs.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Ks=wr.toString,Yp=$s.call(gt),Zp=kt._,$p=To("^"+$s.call(mt).replace(as,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),js=Nc?K.Buffer:t,Ri=K.Symbol,Js=K.Uint8Array,Qc=js?js.allocUnsafe:t,Qs=Kc(gt.getPrototypeOf,gt),eu=gt.create,tu=wr.propertyIsEnumerable,ea=Ys.splice,nu=Ri?Ri.isConcatSpreadable:t,us=Ri?Ri.iterator:t,Yi=Ri?Ri.toStringTag:t,ta=function(){try{var n=Ji(gt,"defineProperty");return n({},"",{}),n}catch{}}(),Kp=K.clearTimeout!==kt.clearTimeout&&K.clearTimeout,jp=Ae&&Ae.now!==kt.Date.now&&Ae.now,Jp=K.setTimeout!==kt.setTimeout&&K.setTimeout,na=Nt.ceil,ia=Nt.floor,Ao=gt.getOwnPropertySymbols,Qp=js?js.isBuffer:t,iu=K.isFinite,em=Ys.join,tm=Kc(gt.keys,gt),Ot=Nt.max,$t=Nt.min,nm=Ae.now,im=K.parseInt,ru=Nt.random,rm=Ys.reverse,Co=Ji(K,"DataView"),hs=Ji(K,"Map"),Lo=Ji(K,"Promise"),br=Ji(K,"Set"),fs=Ji(K,"WeakMap"),ds=Ji(gt,"create"),ra=fs&&new fs,Er={},sm=Qi(Co),am=Qi(hs),om=Qi(Lo),lm=Qi(br),cm=Qi(fs),sa=Ri?Ri.prototype:t,ps=sa?sa.valueOf:t,su=sa?sa.toString:t;function y(n){if(Ct(n)&&!Xe(n)&&!(n instanceof nt)){if(n instanceof Tn)return n;if(mt.call(n,"__wrapped__"))return ah(n)}return new Tn(n)}var Tr=function(){function n(){}return function(r){if(!bt(r))return{};if(eu)return eu(r);n.prototype=r;var a=new n;return n.prototype=t,a}}();function aa(){}function Tn(n,r){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=t}y.templateSettings={escape:Ws,evaluate:ao,interpolate:ki,variable:"",imports:{_:y}},y.prototype=aa.prototype,y.prototype.constructor=y,Tn.prototype=Tr(aa.prototype),Tn.prototype.constructor=Tn;function nt(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=fe,this.__views__=[]}function um(){var n=new nt(this.__wrapped__);return n.__actions__=an(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=an(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=an(this.__views__),n}function hm(){if(this.__filtered__){var n=new nt(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function fm(){var n=this.__wrapped__.value(),r=this.__dir__,a=Xe(n),h=r<0,x=a?n.length:0,S=bg(0,x,this.__views__),D=S.start,F=S.end,W=F-D,te=h?F:D-1,ie=this.__iteratees__,ce=ie.length,we=0,Le=$t(W,this.__takeCount__);if(!a||!h&&x==W&&Le==W)return Lu(n,this.__actions__);var Ne=[];e:for(;W--&&we<Le;){te+=r;for(var je=-1,Oe=n[te];++je<ce;){var Qe=ie[je],st=Qe.iteratee,mn=Qe.type,en=st(Oe);if(mn==oe)Oe=en;else if(!en){if(mn==H)continue e;break e}}Ne[we++]=Oe}return Ne}nt.prototype=Tr(aa.prototype),nt.prototype.constructor=nt;function Zi(n){var r=-1,a=n==null?0:n.length;for(this.clear();++r<a;){var h=n[r];this.set(h[0],h[1])}}function dm(){this.__data__=ds?ds(null):{},this.size=0}function pm(n){var r=this.has(n)&&delete this.__data__[n];return this.size-=r?1:0,r}function mm(n){var r=this.__data__;if(ds){var a=r[n];return a===d?t:a}return mt.call(r,n)?r[n]:t}function gm(n){var r=this.__data__;return ds?r[n]!==t:mt.call(r,n)}function _m(n,r){var a=this.__data__;return this.size+=this.has(n)?0:1,a[n]=ds&&r===t?d:r,this}Zi.prototype.clear=dm,Zi.prototype.delete=pm,Zi.prototype.get=mm,Zi.prototype.has=gm,Zi.prototype.set=_m;function oi(n){var r=-1,a=n==null?0:n.length;for(this.clear();++r<a;){var h=n[r];this.set(h[0],h[1])}}function vm(){this.__data__=[],this.size=0}function xm(n){var r=this.__data__,a=oa(r,n);if(a<0)return!1;var h=r.length-1;return a==h?r.pop():ea.call(r,a,1),--this.size,!0}function Mm(n){var r=this.__data__,a=oa(r,n);return a<0?t:r[a][1]}function ym(n){return oa(this.__data__,n)>-1}function Sm(n,r){var a=this.__data__,h=oa(a,n);return h<0?(++this.size,a.push([n,r])):a[h][1]=r,this}oi.prototype.clear=vm,oi.prototype.delete=xm,oi.prototype.get=Mm,oi.prototype.has=ym,oi.prototype.set=Sm;function li(n){var r=-1,a=n==null?0:n.length;for(this.clear();++r<a;){var h=n[r];this.set(h[0],h[1])}}function wm(){this.size=0,this.__data__={hash:new Zi,map:new(hs||oi),string:new Zi}}function bm(n){var r=xa(this,n).delete(n);return this.size-=r?1:0,r}function Em(n){return xa(this,n).get(n)}function Tm(n){return xa(this,n).has(n)}function Am(n,r){var a=xa(this,n),h=a.size;return a.set(n,r),this.size+=a.size==h?0:1,this}li.prototype.clear=wm,li.prototype.delete=bm,li.prototype.get=Em,li.prototype.has=Tm,li.prototype.set=Am;function $i(n){var r=-1,a=n==null?0:n.length;for(this.__data__=new li;++r<a;)this.add(n[r])}function Cm(n){return this.__data__.set(n,d),this}function Lm(n){return this.__data__.has(n)}$i.prototype.add=$i.prototype.push=Cm,$i.prototype.has=Lm;function Bn(n){var r=this.__data__=new oi(n);this.size=r.size}function Rm(){this.__data__=new oi,this.size=0}function Dm(n){var r=this.__data__,a=r.delete(n);return this.size=r.size,a}function Pm(n){return this.__data__.get(n)}function Im(n){return this.__data__.has(n)}function Fm(n,r){var a=this.__data__;if(a instanceof oi){var h=a.__data__;if(!hs||h.length<s-1)return h.push([n,r]),this.size=++a.size,this;a=this.__data__=new li(h)}return a.set(n,r),this.size=a.size,this}Bn.prototype.clear=Rm,Bn.prototype.delete=Dm,Bn.prototype.get=Pm,Bn.prototype.has=Im,Bn.prototype.set=Fm;function au(n,r){var a=Xe(n),h=!a&&er(n),x=!a&&!h&&Ni(n),S=!a&&!h&&!x&&Rr(n),D=a||h||x||S,F=D?wo(n.length,kp):[],W=F.length;for(var te in n)(r||mt.call(n,te))&&!(D&&(te=="length"||x&&(te=="offset"||te=="parent")||S&&(te=="buffer"||te=="byteLength"||te=="byteOffset")||fi(te,W)))&&F.push(te);return F}function ou(n){var r=n.length;return r?n[Go(0,r-1)]:t}function Nm(n,r){return Ma(an(n),Ki(r,0,n.length))}function Om(n){return Ma(an(n))}function Ro(n,r,a){(a!==t&&!Gn(n[r],a)||a===t&&!(r in n))&&ci(n,r,a)}function ms(n,r,a){var h=n[r];(!(mt.call(n,r)&&Gn(h,a))||a===t&&!(r in n))&&ci(n,r,a)}function oa(n,r){for(var a=n.length;a--;)if(Gn(n[a][0],r))return a;return-1}function Um(n,r,a,h){return Di(n,function(x,S,D){r(h,x,a(x),D)}),h}function lu(n,r){return n&&jn(r,Gt(r),n)}function zm(n,r){return n&&jn(r,ln(r),n)}function ci(n,r,a){r=="__proto__"&&ta?ta(n,r,{configurable:!0,enumerable:!0,value:a,writable:!0}):n[r]=a}function Do(n,r){for(var a=-1,h=r.length,x=q(h),S=n==null;++a<h;)x[a]=S?t:hl(n,r[a]);return x}function Ki(n,r,a){return n===n&&(a!==t&&(n=n<=a?n:a),r!==t&&(n=n>=r?n:r)),n}function An(n,r,a,h,x,S){var D,F=r&g,W=r&_,te=r&M;if(a&&(D=x?a(n,h,x,S):a(n)),D!==t)return D;if(!bt(n))return n;var ie=Xe(n);if(ie){if(D=Tg(n),!F)return an(n,D)}else{var ce=Kt(n),we=ce==Ye||ce==Be;if(Ni(n))return Pu(n,F);if(ce==wt||ce==Re||we&&!x){if(D=W||we?{}:ju(n),!F)return W?mg(n,zm(D,n)):pg(n,lu(D,n))}else{if(!_t[ce])return x?n:{};D=Ag(n,ce,F)}}S||(S=new Bn);var Le=S.get(n);if(Le)return Le;S.set(n,D),Th(n)?n.forEach(function(Oe){D.add(An(Oe,r,a,Oe,n,S))}):bh(n)&&n.forEach(function(Oe,Qe){D.set(Qe,An(Oe,r,a,Qe,n,S))});var Ne=te?W?jo:Ko:W?ln:Gt,je=ie?t:Ne(n);return bn(je||n,function(Oe,Qe){je&&(Qe=Oe,Oe=n[Qe]),ms(D,Qe,An(Oe,r,a,Qe,n,S))}),D}function Bm(n){var r=Gt(n);return function(a){return cu(a,n,r)}}function cu(n,r,a){var h=a.length;if(n==null)return!h;for(n=gt(n);h--;){var x=a[h],S=r[x],D=n[x];if(D===t&&!(x in n)||!S(D))return!1}return!0}function uu(n,r,a){if(typeof n!="function")throw new En(u);return Ss(function(){n.apply(t,a)},r)}function gs(n,r,a,h){var x=-1,S=ks,D=!0,F=n.length,W=[],te=r.length;if(!F)return W;a&&(r=St(r,fn(a))),h?(S=_o,D=!1):r.length>=s&&(S=cs,D=!1,r=new $i(r));e:for(;++x<F;){var ie=n[x],ce=a==null?ie:a(ie);if(ie=h||ie!==0?ie:0,D&&ce===ce){for(var we=te;we--;)if(r[we]===ce)continue e;W.push(ie)}else S(r,ce,h)||W.push(ie)}return W}var Di=Uu(Kn),hu=Uu(Io,!0);function Gm(n,r){var a=!0;return Di(n,function(h,x,S){return a=!!r(h,x,S),a}),a}function la(n,r,a){for(var h=-1,x=n.length;++h<x;){var S=n[h],D=r(S);if(D!=null&&(F===t?D===D&&!pn(D):a(D,F)))var F=D,W=S}return W}function Wm(n,r,a,h){var x=n.length;for(a=$e(a),a<0&&(a=-a>x?0:x+a),h=h===t||h>x?x:$e(h),h<0&&(h+=x),h=a>h?0:Ch(h);a<h;)n[a++]=r;return n}function fu(n,r){var a=[];return Di(n,function(h,x,S){r(h,x,S)&&a.push(h)}),a}function qt(n,r,a,h,x){var S=-1,D=n.length;for(a||(a=Lg),x||(x=[]);++S<D;){var F=n[S];r>0&&a(F)?r>1?qt(F,r-1,a,h,x):Ci(x,F):h||(x[x.length]=F)}return x}var Po=zu(),du=zu(!0);function Kn(n,r){return n&&Po(n,r,Gt)}function Io(n,r){return n&&du(n,r,Gt)}function ca(n,r){return Ai(r,function(a){return di(n[a])})}function ji(n,r){r=Ii(r,n);for(var a=0,h=r.length;n!=null&&a<h;)n=n[Jn(r[a++])];return a&&a==h?n:t}function pu(n,r,a){var h=r(n);return Xe(n)?h:Ci(h,a(n))}function Jt(n){return n==null?n===t?J:Ft:Yi&&Yi in gt(n)?wg(n):Og(n)}function Fo(n,r){return n>r}function Hm(n,r){return n!=null&&mt.call(n,r)}function Vm(n,r){return n!=null&&r in gt(n)}function km(n,r,a){return n>=$t(r,a)&&n<Ot(r,a)}function No(n,r,a){for(var h=a?_o:ks,x=n[0].length,S=n.length,D=S,F=q(S),W=1/0,te=[];D--;){var ie=n[D];D&&r&&(ie=St(ie,fn(r))),W=$t(ie.length,W),F[D]=!a&&(r||x>=120&&ie.length>=120)?new $i(D&&ie):t}ie=n[0];var ce=-1,we=F[0];e:for(;++ce<x&&te.length<W;){var Le=ie[ce],Ne=r?r(Le):Le;if(Le=a||Le!==0?Le:0,!(we?cs(we,Ne):h(te,Ne,a))){for(D=S;--D;){var je=F[D];if(!(je?cs(je,Ne):h(n[D],Ne,a)))continue e}we&&we.push(Ne),te.push(Le)}}return te}function qm(n,r,a,h){return Kn(n,function(x,S,D){r(h,a(x),S,D)}),h}function _s(n,r,a){r=Ii(r,n),n=th(n,r);var h=n==null?n:n[Jn(Ln(r))];return h==null?t:hn(h,n,a)}function mu(n){return Ct(n)&&Jt(n)==Re}function Xm(n){return Ct(n)&&Jt(n)==ye}function Ym(n){return Ct(n)&&Jt(n)==Ue}function vs(n,r,a,h,x){return n===r?!0:n==null||r==null||!Ct(n)&&!Ct(r)?n!==n&&r!==r:Zm(n,r,a,h,vs,x)}function Zm(n,r,a,h,x,S){var D=Xe(n),F=Xe(r),W=D?ee:Kt(n),te=F?ee:Kt(r);W=W==Re?wt:W,te=te==Re?wt:te;var ie=W==wt,ce=te==wt,we=W==te;if(we&&Ni(n)){if(!Ni(r))return!1;D=!0,ie=!1}if(we&&!ie)return S||(S=new Bn),D||Rr(n)?Zu(n,r,a,h,x,S):yg(n,r,W,a,h,x,S);if(!(a&w)){var Le=ie&&mt.call(n,"__wrapped__"),Ne=ce&&mt.call(r,"__wrapped__");if(Le||Ne){var je=Le?n.value():n,Oe=Ne?r.value():r;return S||(S=new Bn),x(je,Oe,a,h,S)}}return we?(S||(S=new Bn),Sg(n,r,a,h,x,S)):!1}function $m(n){return Ct(n)&&Kt(n)==ct}function Oo(n,r,a,h){var x=a.length,S=x,D=!h;if(n==null)return!S;for(n=gt(n);x--;){var F=a[x];if(D&&F[2]?F[1]!==n[F[0]]:!(F[0]in n))return!1}for(;++x<S;){F=a[x];var W=F[0],te=n[W],ie=F[1];if(D&&F[2]){if(te===t&&!(W in n))return!1}else{var ce=new Bn;if(h)var we=h(te,ie,W,n,r,ce);if(!(we===t?vs(ie,te,w|v,h,ce):we))return!1}}return!0}function gu(n){if(!bt(n)||Dg(n))return!1;var r=di(n)?$p:at;return r.test(Qi(n))}function Km(n){return Ct(n)&&Jt(n)==Bt}function jm(n){return Ct(n)&&Kt(n)==Mt}function Jm(n){return Ct(n)&&Ta(n.length)&&!!vt[Jt(n)]}function _u(n){return typeof n=="function"?n:n==null?cn:typeof n=="object"?Xe(n)?Mu(n[0],n[1]):xu(n):Bh(n)}function Uo(n){if(!ys(n))return tm(n);var r=[];for(var a in gt(n))mt.call(n,a)&&a!="constructor"&&r.push(a);return r}function Qm(n){if(!bt(n))return Ng(n);var r=ys(n),a=[];for(var h in n)h=="constructor"&&(r||!mt.call(n,h))||a.push(h);return a}function zo(n,r){return n<r}function vu(n,r){var a=-1,h=on(n)?q(n.length):[];return Di(n,function(x,S,D){h[++a]=r(x,S,D)}),h}function xu(n){var r=Qo(n);return r.length==1&&r[0][2]?Qu(r[0][0],r[0][1]):function(a){return a===n||Oo(a,n,r)}}function Mu(n,r){return tl(n)&&Ju(r)?Qu(Jn(n),r):function(a){var h=hl(a,n);return h===t&&h===r?fl(a,n):vs(r,h,w|v)}}function ua(n,r,a,h,x){n!==r&&Po(r,function(S,D){if(x||(x=new Bn),bt(S))eg(n,r,D,a,ua,h,x);else{var F=h?h(il(n,D),S,D+"",n,r,x):t;F===t&&(F=S),Ro(n,D,F)}},ln)}function eg(n,r,a,h,x,S,D){var F=il(n,a),W=il(r,a),te=D.get(W);if(te){Ro(n,a,te);return}var ie=S?S(F,W,a+"",n,r,D):t,ce=ie===t;if(ce){var we=Xe(W),Le=!we&&Ni(W),Ne=!we&&!Le&&Rr(W);ie=W,we||Le||Ne?Xe(F)?ie=F:Lt(F)?ie=an(F):Le?(ce=!1,ie=Pu(W,!0)):Ne?(ce=!1,ie=Iu(W,!0)):ie=[]:ws(W)||er(W)?(ie=F,er(F)?ie=Lh(F):(!bt(F)||di(F))&&(ie=ju(W))):ce=!1}ce&&(D.set(W,ie),x(ie,W,h,S,D),D.delete(W)),Ro(n,a,ie)}function yu(n,r){var a=n.length;if(!!a)return r+=r<0?a:0,fi(r,a)?n[r]:t}function Su(n,r,a){r.length?r=St(r,function(S){return Xe(S)?function(D){return ji(D,S.length===1?S[0]:S)}:S}):r=[cn];var h=-1;r=St(r,fn(Fe()));var x=vu(n,function(S,D,F){var W=St(r,function(te){return te(S)});return{criteria:W,index:++h,value:S}});return Ap(x,function(S,D){return dg(S,D,a)})}function tg(n,r){return wu(n,r,function(a,h){return fl(n,h)})}function wu(n,r,a){for(var h=-1,x=r.length,S={};++h<x;){var D=r[h],F=ji(n,D);a(F,D)&&xs(S,Ii(D,n),F)}return S}function ng(n){return function(r){return ji(r,n)}}function Bo(n,r,a,h){var x=h?Tp:xr,S=-1,D=r.length,F=n;for(n===r&&(r=an(r)),a&&(F=St(n,fn(a)));++S<D;)for(var W=0,te=r[S],ie=a?a(te):te;(W=x(F,ie,W,h))>-1;)F!==n&&ea.call(F,W,1),ea.call(n,W,1);return n}function bu(n,r){for(var a=n?r.length:0,h=a-1;a--;){var x=r[a];if(a==h||x!==S){var S=x;fi(x)?ea.call(n,x,1):Vo(n,x)}}return n}function Go(n,r){return n+ia(ru()*(r-n+1))}function ig(n,r,a,h){for(var x=-1,S=Ot(na((r-n)/(a||1)),0),D=q(S);S--;)D[h?S:++x]=n,n+=a;return D}function Wo(n,r){var a="";if(!n||r<1||r>ne)return a;do r%2&&(a+=n),r=ia(r/2),r&&(n+=n);while(r);return a}function Je(n,r){return rl(eh(n,r,cn),n+"")}function rg(n){return ou(Dr(n))}function sg(n,r){var a=Dr(n);return Ma(a,Ki(r,0,a.length))}function xs(n,r,a,h){if(!bt(n))return n;r=Ii(r,n);for(var x=-1,S=r.length,D=S-1,F=n;F!=null&&++x<S;){var W=Jn(r[x]),te=a;if(W==="__proto__"||W==="constructor"||W==="prototype")return n;if(x!=D){var ie=F[W];te=h?h(ie,W,F):t,te===t&&(te=bt(ie)?ie:fi(r[x+1])?[]:{})}ms(F,W,te),F=F[W]}return n}var Eu=ra?function(n,r){return ra.set(n,r),n}:cn,ag=ta?function(n,r){return ta(n,"toString",{configurable:!0,enumerable:!1,value:pl(r),writable:!0})}:cn;function og(n){return Ma(Dr(n))}function Cn(n,r,a){var h=-1,x=n.length;r<0&&(r=-r>x?0:x+r),a=a>x?x:a,a<0&&(a+=x),x=r>a?0:a-r>>>0,r>>>=0;for(var S=q(x);++h<x;)S[h]=n[h+r];return S}function lg(n,r){var a;return Di(n,function(h,x,S){return a=r(h,x,S),!a}),!!a}function ha(n,r,a){var h=0,x=n==null?h:n.length;if(typeof r=="number"&&r===r&&x<=pe){for(;h<x;){var S=h+x>>>1,D=n[S];D!==null&&!pn(D)&&(a?D<=r:D<r)?h=S+1:x=S}return x}return Ho(n,r,cn,a)}function Ho(n,r,a,h){var x=0,S=n==null?0:n.length;if(S===0)return 0;r=a(r);for(var D=r!==r,F=r===null,W=pn(r),te=r===t;x<S;){var ie=ia((x+S)/2),ce=a(n[ie]),we=ce!==t,Le=ce===null,Ne=ce===ce,je=pn(ce);if(D)var Oe=h||Ne;else te?Oe=Ne&&(h||we):F?Oe=Ne&&we&&(h||!Le):W?Oe=Ne&&we&&!Le&&(h||!je):Le||je?Oe=!1:Oe=h?ce<=r:ce<r;Oe?x=ie+1:S=ie}return $t(S,he)}function Tu(n,r){for(var a=-1,h=n.length,x=0,S=[];++a<h;){var D=n[a],F=r?r(D):D;if(!a||!Gn(F,W)){var W=F;S[x++]=D===0?0:D}}return S}function Au(n){return typeof n=="number"?n:pn(n)?se:+n}function dn(n){if(typeof n=="string")return n;if(Xe(n))return St(n,dn)+"";if(pn(n))return su?su.call(n):"";var r=n+"";return r=="0"&&1/n==-re?"-0":r}function Pi(n,r,a){var h=-1,x=ks,S=n.length,D=!0,F=[],W=F;if(a)D=!1,x=_o;else if(S>=s){var te=r?null:xg(n);if(te)return Xs(te);D=!1,x=cs,W=new $i}else W=r?[]:F;e:for(;++h<S;){var ie=n[h],ce=r?r(ie):ie;if(ie=a||ie!==0?ie:0,D&&ce===ce){for(var we=W.length;we--;)if(W[we]===ce)continue e;r&&W.push(ce),F.push(ie)}else x(W,ce,a)||(W!==F&&W.push(ce),F.push(ie))}return F}function Vo(n,r){return r=Ii(r,n),n=th(n,r),n==null||delete n[Jn(Ln(r))]}function Cu(n,r,a,h){return xs(n,r,a(ji(n,r)),h)}function fa(n,r,a,h){for(var x=n.length,S=h?x:-1;(h?S--:++S<x)&&r(n[S],S,n););return a?Cn(n,h?0:S,h?S+1:x):Cn(n,h?S+1:0,h?x:S)}function Lu(n,r){var a=n;return a instanceof nt&&(a=a.value()),vo(r,function(h,x){return x.func.apply(x.thisArg,Ci([h],x.args))},a)}function ko(n,r,a){var h=n.length;if(h<2)return h?Pi(n[0]):[];for(var x=-1,S=q(h);++x<h;)for(var D=n[x],F=-1;++F<h;)F!=x&&(S[x]=gs(S[x]||D,n[F],r,a));return Pi(qt(S,1),r,a)}function Ru(n,r,a){for(var h=-1,x=n.length,S=r.length,D={};++h<x;){var F=h<S?r[h]:t;a(D,n[h],F)}return D}function qo(n){return Lt(n)?n:[]}function Xo(n){return typeof n=="function"?n:cn}function Ii(n,r){return Xe(n)?n:tl(n,r)?[n]:sh(dt(n))}var cg=Je;function Fi(n,r,a){var h=n.length;return a=a===t?h:a,!r&&a>=h?n:Cn(n,r,a)}var Du=Kp||function(n){return kt.clearTimeout(n)};function Pu(n,r){if(r)return n.slice();var a=n.length,h=Qc?Qc(a):new n.constructor(a);return n.copy(h),h}function Yo(n){var r=new n.constructor(n.byteLength);return new Js(r).set(new Js(n)),r}function ug(n,r){var a=r?Yo(n.buffer):n.buffer;return new n.constructor(a,n.byteOffset,n.byteLength)}function hg(n){var r=new n.constructor(n.source,Ze.exec(n));return r.lastIndex=n.lastIndex,r}function fg(n){return ps?gt(ps.call(n)):{}}function Iu(n,r){var a=r?Yo(n.buffer):n.buffer;return new n.constructor(a,n.byteOffset,n.length)}function Fu(n,r){if(n!==r){var a=n!==t,h=n===null,x=n===n,S=pn(n),D=r!==t,F=r===null,W=r===r,te=pn(r);if(!F&&!te&&!S&&n>r||S&&D&&W&&!F&&!te||h&&D&&W||!a&&W||!x)return 1;if(!h&&!S&&!te&&n<r||te&&a&&x&&!h&&!S||F&&a&&x||!D&&x||!W)return-1}return 0}function dg(n,r,a){for(var h=-1,x=n.criteria,S=r.criteria,D=x.length,F=a.length;++h<D;){var W=Fu(x[h],S[h]);if(W){if(h>=F)return W;var te=a[h];return W*(te=="desc"?-1:1)}}return n.index-r.index}function Nu(n,r,a,h){for(var x=-1,S=n.length,D=a.length,F=-1,W=r.length,te=Ot(S-D,0),ie=q(W+te),ce=!h;++F<W;)ie[F]=r[F];for(;++x<D;)(ce||x<S)&&(ie[a[x]]=n[x]);for(;te--;)ie[F++]=n[x++];return ie}function Ou(n,r,a,h){for(var x=-1,S=n.length,D=-1,F=a.length,W=-1,te=r.length,ie=Ot(S-F,0),ce=q(ie+te),we=!h;++x<ie;)ce[x]=n[x];for(var Le=x;++W<te;)ce[Le+W]=r[W];for(;++D<F;)(we||x<S)&&(ce[Le+a[D]]=n[x++]);return ce}function an(n,r){var a=-1,h=n.length;for(r||(r=q(h));++a<h;)r[a]=n[a];return r}function jn(n,r,a,h){var x=!a;a||(a={});for(var S=-1,D=r.length;++S<D;){var F=r[S],W=h?h(a[F],n[F],F,a,n):t;W===t&&(W=n[F]),x?ci(a,F,W):ms(a,F,W)}return a}function pg(n,r){return jn(n,el(n),r)}function mg(n,r){return jn(n,$u(n),r)}function da(n,r){return function(a,h){var x=Xe(a)?Mp:Um,S=r?r():{};return x(a,n,Fe(h,2),S)}}function Ar(n){return Je(function(r,a){var h=-1,x=a.length,S=x>1?a[x-1]:t,D=x>2?a[2]:t;for(S=n.length>3&&typeof S=="function"?(x--,S):t,D&&Qt(a[0],a[1],D)&&(S=x<3?t:S,x=1),r=gt(r);++h<x;){var F=a[h];F&&n(r,F,h,S)}return r})}function Uu(n,r){return function(a,h){if(a==null)return a;if(!on(a))return n(a,h);for(var x=a.length,S=r?x:-1,D=gt(a);(r?S--:++S<x)&&h(D[S],S,D)!==!1;);return a}}function zu(n){return function(r,a,h){for(var x=-1,S=gt(r),D=h(r),F=D.length;F--;){var W=D[n?F:++x];if(a(S[W],W,S)===!1)break}return r}}function gg(n,r,a){var h=r&m,x=Ms(n);function S(){var D=this&&this!==kt&&this instanceof S?x:n;return D.apply(h?a:this,arguments)}return S}function Bu(n){return function(r){r=dt(r);var a=Mr(r)?zn(r):t,h=a?a[0]:r.charAt(0),x=a?Fi(a,1).join(""):r.slice(1);return h[n]()+x}}function Cr(n){return function(r){return vo(Uh(Oh(r).replace(ap,"")),n,"")}}function Ms(n){return function(){var r=arguments;switch(r.length){case 0:return new n;case 1:return new n(r[0]);case 2:return new n(r[0],r[1]);case 3:return new n(r[0],r[1],r[2]);case 4:return new n(r[0],r[1],r[2],r[3]);case 5:return new n(r[0],r[1],r[2],r[3],r[4]);case 6:return new n(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new n(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var a=Tr(n.prototype),h=n.apply(a,r);return bt(h)?h:a}}function _g(n,r,a){var h=Ms(n);function x(){for(var S=arguments.length,D=q(S),F=S,W=Lr(x);F--;)D[F]=arguments[F];var te=S<3&&D[0]!==W&&D[S-1]!==W?[]:Li(D,W);if(S-=te.length,S<a)return ku(n,r,pa,x.placeholder,t,D,te,t,t,a-S);var ie=this&&this!==kt&&this instanceof x?h:n;return hn(ie,this,D)}return x}function Gu(n){return function(r,a,h){var x=gt(r);if(!on(r)){var S=Fe(a,3);r=Gt(r),a=function(F){return S(x[F],F,x)}}var D=n(r,a,h);return D>-1?x[S?r[D]:D]:t}}function Wu(n){return hi(function(r){var a=r.length,h=a,x=Tn.prototype.thru;for(n&&r.reverse();h--;){var S=r[h];if(typeof S!="function")throw new En(u);if(x&&!D&&va(S)=="wrapper")var D=new Tn([],!0)}for(h=D?h:a;++h<a;){S=r[h];var F=va(S),W=F=="wrapper"?Jo(S):t;W&&nl(W[0])&&W[1]==(k|O|L|A)&&!W[4].length&&W[9]==1?D=D[va(W[0])].apply(D,W[3]):D=S.length==1&&nl(S)?D[F]():D.thru(S)}return function(){var te=arguments,ie=te[0];if(D&&te.length==1&&Xe(ie))return D.plant(ie).value();for(var ce=0,we=a?r[ce].apply(this,te):ie;++ce<a;)we=r[ce].call(this,we);return we}})}function pa(n,r,a,h,x,S,D,F,W,te){var ie=r&k,ce=r&m,we=r&b,Le=r&(O|N),Ne=r&U,je=we?t:Ms(n);function Oe(){for(var Qe=arguments.length,st=q(Qe),mn=Qe;mn--;)st[mn]=arguments[mn];if(Le)var en=Lr(Oe),gn=Lp(st,en);if(h&&(st=Nu(st,h,x,Le)),S&&(st=Ou(st,S,D,Le)),Qe-=gn,Le&&Qe<te){var Rt=Li(st,en);return ku(n,r,pa,Oe.placeholder,a,st,Rt,F,W,te-Qe)}var Wn=ce?a:this,mi=we?Wn[n]:n;return Qe=st.length,F?st=Ug(st,F):Ne&&Qe>1&&st.reverse(),ie&&W<Qe&&(st.length=W),this&&this!==kt&&this instanceof Oe&&(mi=je||Ms(mi)),mi.apply(Wn,st)}return Oe}function Hu(n,r){return function(a,h){return qm(a,n,r(h),{})}}function ma(n,r){return function(a,h){var x;if(a===t&&h===t)return r;if(a!==t&&(x=a),h!==t){if(x===t)return h;typeof a=="string"||typeof h=="string"?(a=dn(a),h=dn(h)):(a=Au(a),h=Au(h)),x=n(a,h)}return x}}function Zo(n){return hi(function(r){return r=St(r,fn(Fe())),Je(function(a){var h=this;return n(r,function(x){return hn(x,h,a)})})})}function ga(n,r){r=r===t?" ":dn(r);var a=r.length;if(a<2)return a?Wo(r,n):r;var h=Wo(r,na(n/yr(r)));return Mr(r)?Fi(zn(h),0,n).join(""):h.slice(0,n)}function vg(n,r,a,h){var x=r&m,S=Ms(n);function D(){for(var F=-1,W=arguments.length,te=-1,ie=h.length,ce=q(ie+W),we=this&&this!==kt&&this instanceof D?S:n;++te<ie;)ce[te]=h[te];for(;W--;)ce[te++]=arguments[++F];return hn(we,x?a:this,ce)}return D}function Vu(n){return function(r,a,h){return h&&typeof h!="number"&&Qt(r,a,h)&&(a=h=t),r=pi(r),a===t?(a=r,r=0):a=pi(a),h=h===t?r<a?1:-1:pi(h),ig(r,a,h,n)}}function _a(n){return function(r,a){return typeof r=="string"&&typeof a=="string"||(r=Rn(r),a=Rn(a)),n(r,a)}}function ku(n,r,a,h,x,S,D,F,W,te){var ie=r&O,ce=ie?D:t,we=ie?t:D,Le=ie?S:t,Ne=ie?t:S;r|=ie?L:G,r&=~(ie?G:L),r&P||(r&=~(m|b));var je=[n,r,x,Le,ce,Ne,we,F,W,te],Oe=a.apply(t,je);return nl(n)&&nh(Oe,je),Oe.placeholder=h,ih(Oe,n,r)}function $o(n){var r=Nt[n];return function(a,h){if(a=Rn(a),h=h==null?0:$t($e(h),292),h&&iu(a)){var x=(dt(a)+"e").split("e"),S=r(x[0]+"e"+(+x[1]+h));return x=(dt(S)+"e").split("e"),+(x[0]+"e"+(+x[1]-h))}return r(a)}}var xg=br&&1/Xs(new br([,-0]))[1]==re?function(n){return new br(n)}:_l;function qu(n){return function(r){var a=Kt(r);return a==ct?Eo(r):a==Mt?Op(r):Cp(r,n(r))}}function ui(n,r,a,h,x,S,D,F){var W=r&b;if(!W&&typeof n!="function")throw new En(u);var te=h?h.length:0;if(te||(r&=~(L|G),h=x=t),D=D===t?D:Ot($e(D),0),F=F===t?F:$e(F),te-=x?x.length:0,r&G){var ie=h,ce=x;h=x=t}var we=W?t:Jo(n),Le=[n,r,a,h,x,ie,ce,S,D,F];if(we&&Fg(Le,we),n=Le[0],r=Le[1],a=Le[2],h=Le[3],x=Le[4],F=Le[9]=Le[9]===t?W?0:n.length:Ot(Le[9]-te,0),!F&&r&(O|N)&&(r&=~(O|N)),!r||r==m)var Ne=gg(n,r,a);else r==O||r==N?Ne=_g(n,r,F):(r==L||r==(m|L))&&!x.length?Ne=vg(n,r,a,h):Ne=pa.apply(t,Le);var je=we?Eu:nh;return ih(je(Ne,Le),n,r)}function Xu(n,r,a,h){return n===t||Gn(n,wr[a])&&!mt.call(h,a)?r:n}function Yu(n,r,a,h,x,S){return bt(n)&&bt(r)&&(S.set(r,n),ua(n,r,t,Yu,S),S.delete(r)),n}function Mg(n){return ws(n)?t:n}function Zu(n,r,a,h,x,S){var D=a&w,F=n.length,W=r.length;if(F!=W&&!(D&&W>F))return!1;var te=S.get(n),ie=S.get(r);if(te&&ie)return te==r&&ie==n;var ce=-1,we=!0,Le=a&v?new $i:t;for(S.set(n,r),S.set(r,n);++ce<F;){var Ne=n[ce],je=r[ce];if(h)var Oe=D?h(je,Ne,ce,r,n,S):h(Ne,je,ce,n,r,S);if(Oe!==t){if(Oe)continue;we=!1;break}if(Le){if(!xo(r,function(Qe,st){if(!cs(Le,st)&&(Ne===Qe||x(Ne,Qe,a,h,S)))return Le.push(st)})){we=!1;break}}else if(!(Ne===je||x(Ne,je,a,h,S))){we=!1;break}}return S.delete(n),S.delete(r),we}function yg(n,r,a,h,x,S,D){switch(a){case Pe:if(n.byteLength!=r.byteLength||n.byteOffset!=r.byteOffset)return!1;n=n.buffer,r=r.buffer;case ye:return!(n.byteLength!=r.byteLength||!S(new Js(n),new Js(r)));case ze:case Ue:case xt:return Gn(+n,+r);case tt:return n.name==r.name&&n.message==r.message;case Bt:case R:return n==r+"";case ct:var F=Eo;case Mt:var W=h&w;if(F||(F=Xs),n.size!=r.size&&!W)return!1;var te=D.get(n);if(te)return te==r;h|=v,D.set(n,r);var ie=Zu(F(n),F(r),h,x,S,D);return D.delete(n),ie;case E:if(ps)return ps.call(n)==ps.call(r)}return!1}function Sg(n,r,a,h,x,S){var D=a&w,F=Ko(n),W=F.length,te=Ko(r),ie=te.length;if(W!=ie&&!D)return!1;for(var ce=W;ce--;){var we=F[ce];if(!(D?we in r:mt.call(r,we)))return!1}var Le=S.get(n),Ne=S.get(r);if(Le&&Ne)return Le==r&&Ne==n;var je=!0;S.set(n,r),S.set(r,n);for(var Oe=D;++ce<W;){we=F[ce];var Qe=n[we],st=r[we];if(h)var mn=D?h(st,Qe,we,r,n,S):h(Qe,st,we,n,r,S);if(!(mn===t?Qe===st||x(Qe,st,a,h,S):mn)){je=!1;break}Oe||(Oe=we=="constructor")}if(je&&!Oe){var en=n.constructor,gn=r.constructor;en!=gn&&"constructor"in n&&"constructor"in r&&!(typeof en=="function"&&en instanceof en&&typeof gn=="function"&&gn instanceof gn)&&(je=!1)}return S.delete(n),S.delete(r),je}function hi(n){return rl(eh(n,t,ch),n+"")}function Ko(n){return pu(n,Gt,el)}function jo(n){return pu(n,ln,$u)}var Jo=ra?function(n){return ra.get(n)}:_l;function va(n){for(var r=n.name+"",a=Er[r],h=mt.call(Er,r)?a.length:0;h--;){var x=a[h],S=x.func;if(S==null||S==n)return x.name}return r}function Lr(n){var r=mt.call(y,"placeholder")?y:n;return r.placeholder}function Fe(){var n=y.iteratee||ml;return n=n===ml?_u:n,arguments.length?n(arguments[0],arguments[1]):n}function xa(n,r){var a=n.__data__;return Rg(r)?a[typeof r=="string"?"string":"hash"]:a.map}function Qo(n){for(var r=Gt(n),a=r.length;a--;){var h=r[a],x=n[h];r[a]=[h,x,Ju(x)]}return r}function Ji(n,r){var a=Ip(n,r);return gu(a)?a:t}function wg(n){var r=mt.call(n,Yi),a=n[Yi];try{n[Yi]=t;var h=!0}catch{}var x=Ks.call(n);return h&&(r?n[Yi]=a:delete n[Yi]),x}var el=Ao?function(n){return n==null?[]:(n=gt(n),Ai(Ao(n),function(r){return tu.call(n,r)}))}:vl,$u=Ao?function(n){for(var r=[];n;)Ci(r,el(n)),n=Qs(n);return r}:vl,Kt=Jt;(Co&&Kt(new Co(new ArrayBuffer(1)))!=Pe||hs&&Kt(new hs)!=ct||Lo&&Kt(Lo.resolve())!=Tt||br&&Kt(new br)!=Mt||fs&&Kt(new fs)!=ue)&&(Kt=function(n){var r=Jt(n),a=r==wt?n.constructor:t,h=a?Qi(a):"";if(h)switch(h){case sm:return Pe;case am:return ct;case om:return Tt;case lm:return Mt;case cm:return ue}return r});function bg(n,r,a){for(var h=-1,x=a.length;++h<x;){var S=a[h],D=S.size;switch(S.type){case"drop":n+=D;break;case"dropRight":r-=D;break;case"take":r=$t(r,n+D);break;case"takeRight":n=Ot(n,r-D);break}}return{start:n,end:r}}function Eg(n){var r=n.match(Z);return r?r[1].split(X):[]}function Ku(n,r,a){r=Ii(r,n);for(var h=-1,x=r.length,S=!1;++h<x;){var D=Jn(r[h]);if(!(S=n!=null&&a(n,D)))break;n=n[D]}return S||++h!=x?S:(x=n==null?0:n.length,!!x&&Ta(x)&&fi(D,x)&&(Xe(n)||er(n)))}function Tg(n){var r=n.length,a=new n.constructor(r);return r&&typeof n[0]=="string"&&mt.call(n,"index")&&(a.index=n.index,a.input=n.input),a}function ju(n){return typeof n.constructor=="function"&&!ys(n)?Tr(Qs(n)):{}}function Ag(n,r,a){var h=n.constructor;switch(r){case ye:return Yo(n);case ze:case Ue:return new h(+n);case Pe:return ug(n,a);case T:case le:case Me:case ge:case I:case _e:case me:case Ie:case Se:return Iu(n,a);case ct:return new h;case xt:case R:return new h(n);case Bt:return hg(n);case Mt:return new h;case E:return fg(n)}}function Cg(n,r){var a=r.length;if(!a)return n;var h=a-1;return r[h]=(a>1?"& ":"")+r[h],r=r.join(a>2?", ":" "),n.replace(V,`{
/* [wrapped with `+r+`] */
`)}function Lg(n){return Xe(n)||er(n)||!!(nu&&n&&n[nu])}function fi(n,r){var a=typeof n;return r=r==null?ne:r,!!r&&(a=="number"||a!="symbol"&&ai.test(n))&&n>-1&&n%1==0&&n<r}function Qt(n,r,a){if(!bt(a))return!1;var h=typeof r;return(h=="number"?on(a)&&fi(r,a.length):h=="string"&&r in a)?Gn(a[r],n):!1}function tl(n,r){if(Xe(n))return!1;var a=typeof n;return a=="number"||a=="symbol"||a=="boolean"||n==null||pn(n)?!0:ss.test(n)||!oo.test(n)||r!=null&&n in gt(r)}function Rg(n){var r=typeof n;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?n!=="__proto__":n===null}function nl(n){var r=va(n),a=y[r];if(typeof a!="function"||!(r in nt.prototype))return!1;if(n===a)return!0;var h=Jo(a);return!!h&&n===h[0]}function Dg(n){return!!Jc&&Jc in n}var Pg=Zs?di:xl;function ys(n){var r=n&&n.constructor,a=typeof r=="function"&&r.prototype||wr;return n===a}function Ju(n){return n===n&&!bt(n)}function Qu(n,r){return function(a){return a==null?!1:a[n]===r&&(r!==t||n in gt(a))}}function Ig(n){var r=ba(n,function(h){return a.size===f&&a.clear(),h}),a=r.cache;return r}function Fg(n,r){var a=n[1],h=r[1],x=a|h,S=x<(m|b|k),D=h==k&&a==O||h==k&&a==A&&n[7].length<=r[8]||h==(k|A)&&r[7].length<=r[8]&&a==O;if(!(S||D))return n;h&m&&(n[2]=r[2],x|=a&m?0:P);var F=r[3];if(F){var W=n[3];n[3]=W?Nu(W,F,r[4]):F,n[4]=W?Li(n[3],p):r[4]}return F=r[5],F&&(W=n[5],n[5]=W?Ou(W,F,r[6]):F,n[6]=W?Li(n[5],p):r[6]),F=r[7],F&&(n[7]=F),h&k&&(n[8]=n[8]==null?r[8]:$t(n[8],r[8])),n[9]==null&&(n[9]=r[9]),n[0]=r[0],n[1]=x,n}function Ng(n){var r=[];if(n!=null)for(var a in gt(n))r.push(a);return r}function Og(n){return Ks.call(n)}function eh(n,r,a){return r=Ot(r===t?n.length-1:r,0),function(){for(var h=arguments,x=-1,S=Ot(h.length-r,0),D=q(S);++x<S;)D[x]=h[r+x];x=-1;for(var F=q(r+1);++x<r;)F[x]=h[x];return F[r]=a(D),hn(n,this,F)}}function th(n,r){return r.length<2?n:ji(n,Cn(r,0,-1))}function Ug(n,r){for(var a=n.length,h=$t(r.length,a),x=an(n);h--;){var S=r[h];n[h]=fi(S,a)?x[S]:t}return n}function il(n,r){if(!(r==="constructor"&&typeof n[r]=="function")&&r!="__proto__")return n[r]}var nh=rh(Eu),Ss=Jp||function(n,r){return kt.setTimeout(n,r)},rl=rh(ag);function ih(n,r,a){var h=r+"";return rl(n,Cg(h,zg(Eg(h),a)))}function rh(n){var r=0,a=0;return function(){var h=nm(),x=de-(h-a);if(a=h,x>0){if(++r>=Ee)return arguments[0]}else r=0;return n.apply(t,arguments)}}function Ma(n,r){var a=-1,h=n.length,x=h-1;for(r=r===t?h:r;++a<r;){var S=Go(a,x),D=n[S];n[S]=n[a],n[a]=D}return n.length=r,n}var sh=Ig(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(Hs,function(a,h,x,S){r.push(x?S.replace(qe,"$1"):h||a)}),r});function Jn(n){if(typeof n=="string"||pn(n))return n;var r=n+"";return r=="0"&&1/n==-re?"-0":r}function Qi(n){if(n!=null){try{return $s.call(n)}catch{}try{return n+""}catch{}}return""}function zg(n,r){return bn(Ce,function(a){var h="_."+a[0];r&a[1]&&!ks(n,h)&&n.push(h)}),n.sort()}function ah(n){if(n instanceof nt)return n.clone();var r=new Tn(n.__wrapped__,n.__chain__);return r.__actions__=an(n.__actions__),r.__index__=n.__index__,r.__values__=n.__values__,r}function Bg(n,r,a){(a?Qt(n,r,a):r===t)?r=1:r=Ot($e(r),0);var h=n==null?0:n.length;if(!h||r<1)return[];for(var x=0,S=0,D=q(na(h/r));x<h;)D[S++]=Cn(n,x,x+=r);return D}function Gg(n){for(var r=-1,a=n==null?0:n.length,h=0,x=[];++r<a;){var S=n[r];S&&(x[h++]=S)}return x}function Wg(){var n=arguments.length;if(!n)return[];for(var r=q(n-1),a=arguments[0],h=n;h--;)r[h-1]=arguments[h];return Ci(Xe(a)?an(a):[a],qt(r,1))}var Hg=Je(function(n,r){return Lt(n)?gs(n,qt(r,1,Lt,!0)):[]}),Vg=Je(function(n,r){var a=Ln(r);return Lt(a)&&(a=t),Lt(n)?gs(n,qt(r,1,Lt,!0),Fe(a,2)):[]}),kg=Je(function(n,r){var a=Ln(r);return Lt(a)&&(a=t),Lt(n)?gs(n,qt(r,1,Lt,!0),t,a):[]});function qg(n,r,a){var h=n==null?0:n.length;return h?(r=a||r===t?1:$e(r),Cn(n,r<0?0:r,h)):[]}function Xg(n,r,a){var h=n==null?0:n.length;return h?(r=a||r===t?1:$e(r),r=h-r,Cn(n,0,r<0?0:r)):[]}function Yg(n,r){return n&&n.length?fa(n,Fe(r,3),!0,!0):[]}function Zg(n,r){return n&&n.length?fa(n,Fe(r,3),!0):[]}function $g(n,r,a,h){var x=n==null?0:n.length;return x?(a&&typeof a!="number"&&Qt(n,r,a)&&(a=0,h=x),Wm(n,r,a,h)):[]}function oh(n,r,a){var h=n==null?0:n.length;if(!h)return-1;var x=a==null?0:$e(a);return x<0&&(x=Ot(h+x,0)),qs(n,Fe(r,3),x)}function lh(n,r,a){var h=n==null?0:n.length;if(!h)return-1;var x=h-1;return a!==t&&(x=$e(a),x=a<0?Ot(h+x,0):$t(x,h-1)),qs(n,Fe(r,3),x,!0)}function ch(n){var r=n==null?0:n.length;return r?qt(n,1):[]}function Kg(n){var r=n==null?0:n.length;return r?qt(n,re):[]}function jg(n,r){var a=n==null?0:n.length;return a?(r=r===t?1:$e(r),qt(n,r)):[]}function Jg(n){for(var r=-1,a=n==null?0:n.length,h={};++r<a;){var x=n[r];h[x[0]]=x[1]}return h}function uh(n){return n&&n.length?n[0]:t}function Qg(n,r,a){var h=n==null?0:n.length;if(!h)return-1;var x=a==null?0:$e(a);return x<0&&(x=Ot(h+x,0)),xr(n,r,x)}function e_(n){var r=n==null?0:n.length;return r?Cn(n,0,-1):[]}var t_=Je(function(n){var r=St(n,qo);return r.length&&r[0]===n[0]?No(r):[]}),n_=Je(function(n){var r=Ln(n),a=St(n,qo);return r===Ln(a)?r=t:a.pop(),a.length&&a[0]===n[0]?No(a,Fe(r,2)):[]}),i_=Je(function(n){var r=Ln(n),a=St(n,qo);return r=typeof r=="function"?r:t,r&&a.pop(),a.length&&a[0]===n[0]?No(a,t,r):[]});function r_(n,r){return n==null?"":em.call(n,r)}function Ln(n){var r=n==null?0:n.length;return r?n[r-1]:t}function s_(n,r,a){var h=n==null?0:n.length;if(!h)return-1;var x=h;return a!==t&&(x=$e(a),x=x<0?Ot(h+x,0):$t(x,h-1)),r===r?zp(n,r,x):qs(n,kc,x,!0)}function a_(n,r){return n&&n.length?yu(n,$e(r)):t}var o_=Je(hh);function hh(n,r){return n&&n.length&&r&&r.length?Bo(n,r):n}function l_(n,r,a){return n&&n.length&&r&&r.length?Bo(n,r,Fe(a,2)):n}function c_(n,r,a){return n&&n.length&&r&&r.length?Bo(n,r,t,a):n}var u_=hi(function(n,r){var a=n==null?0:n.length,h=Do(n,r);return bu(n,St(r,function(x){return fi(x,a)?+x:x}).sort(Fu)),h});function h_(n,r){var a=[];if(!(n&&n.length))return a;var h=-1,x=[],S=n.length;for(r=Fe(r,3);++h<S;){var D=n[h];r(D,h,n)&&(a.push(D),x.push(h))}return bu(n,x),a}function sl(n){return n==null?n:rm.call(n)}function f_(n,r,a){var h=n==null?0:n.length;return h?(a&&typeof a!="number"&&Qt(n,r,a)?(r=0,a=h):(r=r==null?0:$e(r),a=a===t?h:$e(a)),Cn(n,r,a)):[]}function d_(n,r){return ha(n,r)}function p_(n,r,a){return Ho(n,r,Fe(a,2))}function m_(n,r){var a=n==null?0:n.length;if(a){var h=ha(n,r);if(h<a&&Gn(n[h],r))return h}return-1}function g_(n,r){return ha(n,r,!0)}function __(n,r,a){return Ho(n,r,Fe(a,2),!0)}function v_(n,r){var a=n==null?0:n.length;if(a){var h=ha(n,r,!0)-1;if(Gn(n[h],r))return h}return-1}function x_(n){return n&&n.length?Tu(n):[]}function M_(n,r){return n&&n.length?Tu(n,Fe(r,2)):[]}function y_(n){var r=n==null?0:n.length;return r?Cn(n,1,r):[]}function S_(n,r,a){return n&&n.length?(r=a||r===t?1:$e(r),Cn(n,0,r<0?0:r)):[]}function w_(n,r,a){var h=n==null?0:n.length;return h?(r=a||r===t?1:$e(r),r=h-r,Cn(n,r<0?0:r,h)):[]}function b_(n,r){return n&&n.length?fa(n,Fe(r,3),!1,!0):[]}function E_(n,r){return n&&n.length?fa(n,Fe(r,3)):[]}var T_=Je(function(n){return Pi(qt(n,1,Lt,!0))}),A_=Je(function(n){var r=Ln(n);return Lt(r)&&(r=t),Pi(qt(n,1,Lt,!0),Fe(r,2))}),C_=Je(function(n){var r=Ln(n);return r=typeof r=="function"?r:t,Pi(qt(n,1,Lt,!0),t,r)});function L_(n){return n&&n.length?Pi(n):[]}function R_(n,r){return n&&n.length?Pi(n,Fe(r,2)):[]}function D_(n,r){return r=typeof r=="function"?r:t,n&&n.length?Pi(n,t,r):[]}function al(n){if(!(n&&n.length))return[];var r=0;return n=Ai(n,function(a){if(Lt(a))return r=Ot(a.length,r),!0}),wo(r,function(a){return St(n,Mo(a))})}function fh(n,r){if(!(n&&n.length))return[];var a=al(n);return r==null?a:St(a,function(h){return hn(r,t,h)})}var P_=Je(function(n,r){return Lt(n)?gs(n,r):[]}),I_=Je(function(n){return ko(Ai(n,Lt))}),F_=Je(function(n){var r=Ln(n);return Lt(r)&&(r=t),ko(Ai(n,Lt),Fe(r,2))}),N_=Je(function(n){var r=Ln(n);return r=typeof r=="function"?r:t,ko(Ai(n,Lt),t,r)}),O_=Je(al);function U_(n,r){return Ru(n||[],r||[],ms)}function z_(n,r){return Ru(n||[],r||[],xs)}var B_=Je(function(n){var r=n.length,a=r>1?n[r-1]:t;return a=typeof a=="function"?(n.pop(),a):t,fh(n,a)});function dh(n){var r=y(n);return r.__chain__=!0,r}function G_(n,r){return r(n),n}function ya(n,r){return r(n)}var W_=hi(function(n){var r=n.length,a=r?n[0]:0,h=this.__wrapped__,x=function(S){return Do(S,n)};return r>1||this.__actions__.length||!(h instanceof nt)||!fi(a)?this.thru(x):(h=h.slice(a,+a+(r?1:0)),h.__actions__.push({func:ya,args:[x],thisArg:t}),new Tn(h,this.__chain__).thru(function(S){return r&&!S.length&&S.push(t),S}))});function H_(){return dh(this)}function V_(){return new Tn(this.value(),this.__chain__)}function k_(){this.__values__===t&&(this.__values__=Ah(this.value()));var n=this.__index__>=this.__values__.length,r=n?t:this.__values__[this.__index__++];return{done:n,value:r}}function q_(){return this}function X_(n){for(var r,a=this;a instanceof aa;){var h=ah(a);h.__index__=0,h.__values__=t,r?x.__wrapped__=h:r=h;var x=h;a=a.__wrapped__}return x.__wrapped__=n,r}function Y_(){var n=this.__wrapped__;if(n instanceof nt){var r=n;return this.__actions__.length&&(r=new nt(this)),r=r.reverse(),r.__actions__.push({func:ya,args:[sl],thisArg:t}),new Tn(r,this.__chain__)}return this.thru(sl)}function Z_(){return Lu(this.__wrapped__,this.__actions__)}var $_=da(function(n,r,a){mt.call(n,a)?++n[a]:ci(n,a,1)});function K_(n,r,a){var h=Xe(n)?Hc:Gm;return a&&Qt(n,r,a)&&(r=t),h(n,Fe(r,3))}function j_(n,r){var a=Xe(n)?Ai:fu;return a(n,Fe(r,3))}var J_=Gu(oh),Q_=Gu(lh);function e0(n,r){return qt(Sa(n,r),1)}function t0(n,r){return qt(Sa(n,r),re)}function n0(n,r,a){return a=a===t?1:$e(a),qt(Sa(n,r),a)}function ph(n,r){var a=Xe(n)?bn:Di;return a(n,Fe(r,3))}function mh(n,r){var a=Xe(n)?yp:hu;return a(n,Fe(r,3))}var i0=da(function(n,r,a){mt.call(n,a)?n[a].push(r):ci(n,a,[r])});function r0(n,r,a,h){n=on(n)?n:Dr(n),a=a&&!h?$e(a):0;var x=n.length;return a<0&&(a=Ot(x+a,0)),Aa(n)?a<=x&&n.indexOf(r,a)>-1:!!x&&xr(n,r,a)>-1}var s0=Je(function(n,r,a){var h=-1,x=typeof r=="function",S=on(n)?q(n.length):[];return Di(n,function(D){S[++h]=x?hn(r,D,a):_s(D,r,a)}),S}),a0=da(function(n,r,a){ci(n,a,r)});function Sa(n,r){var a=Xe(n)?St:vu;return a(n,Fe(r,3))}function o0(n,r,a,h){return n==null?[]:(Xe(r)||(r=r==null?[]:[r]),a=h?t:a,Xe(a)||(a=a==null?[]:[a]),Su(n,r,a))}var l0=da(function(n,r,a){n[a?0:1].push(r)},function(){return[[],[]]});function c0(n,r,a){var h=Xe(n)?vo:Xc,x=arguments.length<3;return h(n,Fe(r,4),a,x,Di)}function u0(n,r,a){var h=Xe(n)?Sp:Xc,x=arguments.length<3;return h(n,Fe(r,4),a,x,hu)}function h0(n,r){var a=Xe(n)?Ai:fu;return a(n,Ea(Fe(r,3)))}function f0(n){var r=Xe(n)?ou:rg;return r(n)}function d0(n,r,a){(a?Qt(n,r,a):r===t)?r=1:r=$e(r);var h=Xe(n)?Nm:sg;return h(n,r)}function p0(n){var r=Xe(n)?Om:og;return r(n)}function m0(n){if(n==null)return 0;if(on(n))return Aa(n)?yr(n):n.length;var r=Kt(n);return r==ct||r==Mt?n.size:Uo(n).length}function g0(n,r,a){var h=Xe(n)?xo:lg;return a&&Qt(n,r,a)&&(r=t),h(n,Fe(r,3))}var _0=Je(function(n,r){if(n==null)return[];var a=r.length;return a>1&&Qt(n,r[0],r[1])?r=[]:a>2&&Qt(r[0],r[1],r[2])&&(r=[r[0]]),Su(n,qt(r,1),[])}),wa=jp||function(){return kt.Date.now()};function v0(n,r){if(typeof r!="function")throw new En(u);return n=$e(n),function(){if(--n<1)return r.apply(this,arguments)}}function gh(n,r,a){return r=a?t:r,r=n&&r==null?n.length:r,ui(n,k,t,t,t,t,r)}function _h(n,r){var a;if(typeof r!="function")throw new En(u);return n=$e(n),function(){return--n>0&&(a=r.apply(this,arguments)),n<=1&&(r=t),a}}var ol=Je(function(n,r,a){var h=m;if(a.length){var x=Li(a,Lr(ol));h|=L}return ui(n,h,r,a,x)}),vh=Je(function(n,r,a){var h=m|b;if(a.length){var x=Li(a,Lr(vh));h|=L}return ui(r,h,n,a,x)});function xh(n,r,a){r=a?t:r;var h=ui(n,O,t,t,t,t,t,r);return h.placeholder=xh.placeholder,h}function Mh(n,r,a){r=a?t:r;var h=ui(n,N,t,t,t,t,t,r);return h.placeholder=Mh.placeholder,h}function yh(n,r,a){var h,x,S,D,F,W,te=0,ie=!1,ce=!1,we=!0;if(typeof n!="function")throw new En(u);r=Rn(r)||0,bt(a)&&(ie=!!a.leading,ce="maxWait"in a,S=ce?Ot(Rn(a.maxWait)||0,r):S,we="trailing"in a?!!a.trailing:we);function Le(Rt){var Wn=h,mi=x;return h=x=t,te=Rt,D=n.apply(mi,Wn),D}function Ne(Rt){return te=Rt,F=Ss(Qe,r),ie?Le(Rt):D}function je(Rt){var Wn=Rt-W,mi=Rt-te,Gh=r-Wn;return ce?$t(Gh,S-mi):Gh}function Oe(Rt){var Wn=Rt-W,mi=Rt-te;return W===t||Wn>=r||Wn<0||ce&&mi>=S}function Qe(){var Rt=wa();if(Oe(Rt))return st(Rt);F=Ss(Qe,je(Rt))}function st(Rt){return F=t,we&&h?Le(Rt):(h=x=t,D)}function mn(){F!==t&&Du(F),te=0,h=W=x=F=t}function en(){return F===t?D:st(wa())}function gn(){var Rt=wa(),Wn=Oe(Rt);if(h=arguments,x=this,W=Rt,Wn){if(F===t)return Ne(W);if(ce)return Du(F),F=Ss(Qe,r),Le(W)}return F===t&&(F=Ss(Qe,r)),D}return gn.cancel=mn,gn.flush=en,gn}var x0=Je(function(n,r){return uu(n,1,r)}),M0=Je(function(n,r,a){return uu(n,Rn(r)||0,a)});function y0(n){return ui(n,U)}function ba(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new En(u);var a=function(){var h=arguments,x=r?r.apply(this,h):h[0],S=a.cache;if(S.has(x))return S.get(x);var D=n.apply(this,h);return a.cache=S.set(x,D)||S,D};return a.cache=new(ba.Cache||li),a}ba.Cache=li;function Ea(n){if(typeof n!="function")throw new En(u);return function(){var r=arguments;switch(r.length){case 0:return!n.call(this);case 1:return!n.call(this,r[0]);case 2:return!n.call(this,r[0],r[1]);case 3:return!n.call(this,r[0],r[1],r[2])}return!n.apply(this,r)}}function S0(n){return _h(2,n)}var w0=cg(function(n,r){r=r.length==1&&Xe(r[0])?St(r[0],fn(Fe())):St(qt(r,1),fn(Fe()));var a=r.length;return Je(function(h){for(var x=-1,S=$t(h.length,a);++x<S;)h[x]=r[x].call(this,h[x]);return hn(n,this,h)})}),ll=Je(function(n,r){var a=Li(r,Lr(ll));return ui(n,L,t,r,a)}),Sh=Je(function(n,r){var a=Li(r,Lr(Sh));return ui(n,G,t,r,a)}),b0=hi(function(n,r){return ui(n,A,t,t,t,r)});function E0(n,r){if(typeof n!="function")throw new En(u);return r=r===t?r:$e(r),Je(n,r)}function T0(n,r){if(typeof n!="function")throw new En(u);return r=r==null?0:Ot($e(r),0),Je(function(a){var h=a[r],x=Fi(a,0,r);return h&&Ci(x,h),hn(n,this,x)})}function A0(n,r,a){var h=!0,x=!0;if(typeof n!="function")throw new En(u);return bt(a)&&(h="leading"in a?!!a.leading:h,x="trailing"in a?!!a.trailing:x),yh(n,r,{leading:h,maxWait:r,trailing:x})}function C0(n){return gh(n,1)}function L0(n,r){return ll(Xo(r),n)}function R0(){if(!arguments.length)return[];var n=arguments[0];return Xe(n)?n:[n]}function D0(n){return An(n,M)}function P0(n,r){return r=typeof r=="function"?r:t,An(n,M,r)}function I0(n){return An(n,g|M)}function F0(n,r){return r=typeof r=="function"?r:t,An(n,g|M,r)}function N0(n,r){return r==null||cu(n,r,Gt(r))}function Gn(n,r){return n===r||n!==n&&r!==r}var O0=_a(Fo),U0=_a(function(n,r){return n>=r}),er=mu(function(){return arguments}())?mu:function(n){return Ct(n)&&mt.call(n,"callee")&&!tu.call(n,"callee")},Xe=q.isArray,z0=Oc?fn(Oc):Xm;function on(n){return n!=null&&Ta(n.length)&&!di(n)}function Lt(n){return Ct(n)&&on(n)}function B0(n){return n===!0||n===!1||Ct(n)&&Jt(n)==ze}var Ni=Qp||xl,G0=Uc?fn(Uc):Ym;function W0(n){return Ct(n)&&n.nodeType===1&&!ws(n)}function H0(n){if(n==null)return!0;if(on(n)&&(Xe(n)||typeof n=="string"||typeof n.splice=="function"||Ni(n)||Rr(n)||er(n)))return!n.length;var r=Kt(n);if(r==ct||r==Mt)return!n.size;if(ys(n))return!Uo(n).length;for(var a in n)if(mt.call(n,a))return!1;return!0}function V0(n,r){return vs(n,r)}function k0(n,r,a){a=typeof a=="function"?a:t;var h=a?a(n,r):t;return h===t?vs(n,r,t,a):!!h}function cl(n){if(!Ct(n))return!1;var r=Jt(n);return r==tt||r==Te||typeof n.message=="string"&&typeof n.name=="string"&&!ws(n)}function q0(n){return typeof n=="number"&&iu(n)}function di(n){if(!bt(n))return!1;var r=Jt(n);return r==Ye||r==Be||r==pt||r==ut}function wh(n){return typeof n=="number"&&n==$e(n)}function Ta(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=ne}function bt(n){var r=typeof n;return n!=null&&(r=="object"||r=="function")}function Ct(n){return n!=null&&typeof n=="object"}var bh=zc?fn(zc):$m;function X0(n,r){return n===r||Oo(n,r,Qo(r))}function Y0(n,r,a){return a=typeof a=="function"?a:t,Oo(n,r,Qo(r),a)}function Z0(n){return Eh(n)&&n!=+n}function $0(n){if(Pg(n))throw new Ve(o);return gu(n)}function K0(n){return n===null}function j0(n){return n==null}function Eh(n){return typeof n=="number"||Ct(n)&&Jt(n)==xt}function ws(n){if(!Ct(n)||Jt(n)!=wt)return!1;var r=Qs(n);if(r===null)return!0;var a=mt.call(r,"constructor")&&r.constructor;return typeof a=="function"&&a instanceof a&&$s.call(a)==Yp}var ul=Bc?fn(Bc):Km;function J0(n){return wh(n)&&n>=-ne&&n<=ne}var Th=Gc?fn(Gc):jm;function Aa(n){return typeof n=="string"||!Xe(n)&&Ct(n)&&Jt(n)==R}function pn(n){return typeof n=="symbol"||Ct(n)&&Jt(n)==E}var Rr=Wc?fn(Wc):Jm;function Q0(n){return n===t}function ev(n){return Ct(n)&&Kt(n)==ue}function tv(n){return Ct(n)&&Jt(n)==xe}var nv=_a(zo),iv=_a(function(n,r){return n<=r});function Ah(n){if(!n)return[];if(on(n))return Aa(n)?zn(n):an(n);if(us&&n[us])return Np(n[us]());var r=Kt(n),a=r==ct?Eo:r==Mt?Xs:Dr;return a(n)}function pi(n){if(!n)return n===0?n:0;if(n=Rn(n),n===re||n===-re){var r=n<0?-1:1;return r*$}return n===n?n:0}function $e(n){var r=pi(n),a=r%1;return r===r?a?r-a:r:0}function Ch(n){return n?Ki($e(n),0,fe):0}function Rn(n){if(typeof n=="number")return n;if(pn(n))return se;if(bt(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=bt(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=Yc(n);var a=it.test(n);return a||yt.test(n)?vp(n.slice(2),a?2:8):ht.test(n)?se:+n}function Lh(n){return jn(n,ln(n))}function rv(n){return n?Ki($e(n),-ne,ne):n===0?n:0}function dt(n){return n==null?"":dn(n)}var sv=Ar(function(n,r){if(ys(r)||on(r)){jn(r,Gt(r),n);return}for(var a in r)mt.call(r,a)&&ms(n,a,r[a])}),Rh=Ar(function(n,r){jn(r,ln(r),n)}),Ca=Ar(function(n,r,a,h){jn(r,ln(r),n,h)}),av=Ar(function(n,r,a,h){jn(r,Gt(r),n,h)}),ov=hi(Do);function lv(n,r){var a=Tr(n);return r==null?a:lu(a,r)}var cv=Je(function(n,r){n=gt(n);var a=-1,h=r.length,x=h>2?r[2]:t;for(x&&Qt(r[0],r[1],x)&&(h=1);++a<h;)for(var S=r[a],D=ln(S),F=-1,W=D.length;++F<W;){var te=D[F],ie=n[te];(ie===t||Gn(ie,wr[te])&&!mt.call(n,te))&&(n[te]=S[te])}return n}),uv=Je(function(n){return n.push(t,Yu),hn(Dh,t,n)});function hv(n,r){return Vc(n,Fe(r,3),Kn)}function fv(n,r){return Vc(n,Fe(r,3),Io)}function dv(n,r){return n==null?n:Po(n,Fe(r,3),ln)}function pv(n,r){return n==null?n:du(n,Fe(r,3),ln)}function mv(n,r){return n&&Kn(n,Fe(r,3))}function gv(n,r){return n&&Io(n,Fe(r,3))}function _v(n){return n==null?[]:ca(n,Gt(n))}function vv(n){return n==null?[]:ca(n,ln(n))}function hl(n,r,a){var h=n==null?t:ji(n,r);return h===t?a:h}function xv(n,r){return n!=null&&Ku(n,r,Hm)}function fl(n,r){return n!=null&&Ku(n,r,Vm)}var Mv=Hu(function(n,r,a){r!=null&&typeof r.toString!="function"&&(r=Ks.call(r)),n[r]=a},pl(cn)),yv=Hu(function(n,r,a){r!=null&&typeof r.toString!="function"&&(r=Ks.call(r)),mt.call(n,r)?n[r].push(a):n[r]=[a]},Fe),Sv=Je(_s);function Gt(n){return on(n)?au(n):Uo(n)}function ln(n){return on(n)?au(n,!0):Qm(n)}function wv(n,r){var a={};return r=Fe(r,3),Kn(n,function(h,x,S){ci(a,r(h,x,S),h)}),a}function bv(n,r){var a={};return r=Fe(r,3),Kn(n,function(h,x,S){ci(a,x,r(h,x,S))}),a}var Ev=Ar(function(n,r,a){ua(n,r,a)}),Dh=Ar(function(n,r,a,h){ua(n,r,a,h)}),Tv=hi(function(n,r){var a={};if(n==null)return a;var h=!1;r=St(r,function(S){return S=Ii(S,n),h||(h=S.length>1),S}),jn(n,jo(n),a),h&&(a=An(a,g|_|M,Mg));for(var x=r.length;x--;)Vo(a,r[x]);return a});function Av(n,r){return Ph(n,Ea(Fe(r)))}var Cv=hi(function(n,r){return n==null?{}:tg(n,r)});function Ph(n,r){if(n==null)return{};var a=St(jo(n),function(h){return[h]});return r=Fe(r),wu(n,a,function(h,x){return r(h,x[0])})}function Lv(n,r,a){r=Ii(r,n);var h=-1,x=r.length;for(x||(x=1,n=t);++h<x;){var S=n==null?t:n[Jn(r[h])];S===t&&(h=x,S=a),n=di(S)?S.call(n):S}return n}function Rv(n,r,a){return n==null?n:xs(n,r,a)}function Dv(n,r,a,h){return h=typeof h=="function"?h:t,n==null?n:xs(n,r,a,h)}var Ih=qu(Gt),Fh=qu(ln);function Pv(n,r,a){var h=Xe(n),x=h||Ni(n)||Rr(n);if(r=Fe(r,4),a==null){var S=n&&n.constructor;x?a=h?new S:[]:bt(n)?a=di(S)?Tr(Qs(n)):{}:a={}}return(x?bn:Kn)(n,function(D,F,W){return r(a,D,F,W)}),a}function Iv(n,r){return n==null?!0:Vo(n,r)}function Fv(n,r,a){return n==null?n:Cu(n,r,Xo(a))}function Nv(n,r,a,h){return h=typeof h=="function"?h:t,n==null?n:Cu(n,r,Xo(a),h)}function Dr(n){return n==null?[]:bo(n,Gt(n))}function Ov(n){return n==null?[]:bo(n,ln(n))}function Uv(n,r,a){return a===t&&(a=r,r=t),a!==t&&(a=Rn(a),a=a===a?a:0),r!==t&&(r=Rn(r),r=r===r?r:0),Ki(Rn(n),r,a)}function zv(n,r,a){return r=pi(r),a===t?(a=r,r=0):a=pi(a),n=Rn(n),km(n,r,a)}function Bv(n,r,a){if(a&&typeof a!="boolean"&&Qt(n,r,a)&&(r=a=t),a===t&&(typeof r=="boolean"?(a=r,r=t):typeof n=="boolean"&&(a=n,n=t)),n===t&&r===t?(n=0,r=1):(n=pi(n),r===t?(r=n,n=0):r=pi(r)),n>r){var h=n;n=r,r=h}if(a||n%1||r%1){var x=ru();return $t(n+x*(r-n+_p("1e-"+((x+"").length-1))),r)}return Go(n,r)}var Gv=Cr(function(n,r,a){return r=r.toLowerCase(),n+(a?Nh(r):r)});function Nh(n){return dl(dt(n).toLowerCase())}function Oh(n){return n=dt(n),n&&n.replace(bi,Rp).replace(op,"")}function Wv(n,r,a){n=dt(n),r=dn(r);var h=n.length;a=a===t?h:Ki($e(a),0,h);var x=a;return a-=r.length,a>=0&&n.slice(a,x)==r}function Hv(n){return n=dt(n),n&&xn.test(n)?n.replace(lt,Dp):n}function Vv(n){return n=dt(n),n&&lo.test(n)?n.replace(as,"\\$&"):n}var kv=Cr(function(n,r,a){return n+(a?"-":"")+r.toLowerCase()}),qv=Cr(function(n,r,a){return n+(a?" ":"")+r.toLowerCase()}),Xv=Bu("toLowerCase");function Yv(n,r,a){n=dt(n),r=$e(r);var h=r?yr(n):0;if(!r||h>=r)return n;var x=(r-h)/2;return ga(ia(x),a)+n+ga(na(x),a)}function Zv(n,r,a){n=dt(n),r=$e(r);var h=r?yr(n):0;return r&&h<r?n+ga(r-h,a):n}function $v(n,r,a){n=dt(n),r=$e(r);var h=r?yr(n):0;return r&&h<r?ga(r-h,a)+n:n}function Kv(n,r,a){return a||r==null?r=0:r&&(r=+r),im(dt(n).replace(os,""),r||0)}function jv(n,r,a){return(a?Qt(n,r,a):r===t)?r=1:r=$e(r),Wo(dt(n),r)}function Jv(){var n=arguments,r=dt(n[0]);return n.length<3?r:r.replace(n[1],n[2])}var Qv=Cr(function(n,r,a){return n+(a?"_":"")+r.toLowerCase()});function ex(n,r,a){return a&&typeof a!="number"&&Qt(n,r,a)&&(r=a=t),a=a===t?fe:a>>>0,a?(n=dt(n),n&&(typeof r=="string"||r!=null&&!ul(r))&&(r=dn(r),!r&&Mr(n))?Fi(zn(n),0,a):n.split(r,a)):[]}var tx=Cr(function(n,r,a){return n+(a?" ":"")+dl(r)});function nx(n,r,a){return n=dt(n),a=a==null?0:Ki($e(a),0,n.length),r=dn(r),n.slice(a,a+r.length)==r}function ix(n,r,a){var h=y.templateSettings;a&&Qt(n,r,a)&&(r=t),n=dt(n),r=Ca({},r,h,Xu);var x=Ca({},r.imports,h.imports,Xu),S=Gt(x),D=bo(x,S),F,W,te=0,ie=r.interpolate||On,ce="__p += '",we=To((r.escape||On).source+"|"+ie.source+"|"+(ie===ki?Ke:On).source+"|"+(r.evaluate||On).source+"|$","g"),Le="//# sourceURL="+(mt.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++fp+"]")+`
`;n.replace(we,function(Oe,Qe,st,mn,en,gn){return st||(st=mn),ce+=n.slice(te,gn).replace(Mn,Pp),Qe&&(F=!0,ce+=`' +
__e(`+Qe+`) +
'`),en&&(W=!0,ce+=`';
`+en+`;
__p += '`),st&&(ce+=`' +
((__t = (`+st+`)) == null ? '' : __t) +
'`),te=gn+Oe.length,Oe}),ce+=`';
`;var Ne=mt.call(r,"variable")&&r.variable;if(!Ne)ce=`with (obj) {
`+ce+`
}
`;else if(Ge.test(Ne))throw new Ve(c);ce=(W?ce.replace(De,""):ce).replace(ve,"$1").replace(We,"$1;"),ce="function("+(Ne||"obj")+`) {
`+(Ne?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(F?", __e = _.escape":"")+(W?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ce+`return __p
}`;var je=zh(function(){return ft(S,Le+"return "+ce).apply(t,D)});if(je.source=ce,cl(je))throw je;return je}function rx(n){return dt(n).toLowerCase()}function sx(n){return dt(n).toUpperCase()}function ax(n,r,a){if(n=dt(n),n&&(a||r===t))return Yc(n);if(!n||!(r=dn(r)))return n;var h=zn(n),x=zn(r),S=Zc(h,x),D=$c(h,x)+1;return Fi(h,S,D).join("")}function ox(n,r,a){if(n=dt(n),n&&(a||r===t))return n.slice(0,jc(n)+1);if(!n||!(r=dn(r)))return n;var h=zn(n),x=$c(h,zn(r))+1;return Fi(h,0,x).join("")}function lx(n,r,a){if(n=dt(n),n&&(a||r===t))return n.replace(os,"");if(!n||!(r=dn(r)))return n;var h=zn(n),x=Zc(h,zn(r));return Fi(h,x).join("")}function cx(n,r){var a=Q,h=Y;if(bt(r)){var x="separator"in r?r.separator:x;a="length"in r?$e(r.length):a,h="omission"in r?dn(r.omission):h}n=dt(n);var S=n.length;if(Mr(n)){var D=zn(n);S=D.length}if(a>=S)return n;var F=a-yr(h);if(F<1)return h;var W=D?Fi(D,0,F).join(""):n.slice(0,F);if(x===t)return W+h;if(D&&(F+=W.length-F),ul(x)){if(n.slice(F).search(x)){var te,ie=W;for(x.global||(x=To(x.source,dt(Ze.exec(x))+"g")),x.lastIndex=0;te=x.exec(ie);)var ce=te.index;W=W.slice(0,ce===t?F:ce)}}else if(n.indexOf(dn(x),F)!=F){var we=W.lastIndexOf(x);we>-1&&(W=W.slice(0,we))}return W+h}function ux(n){return n=dt(n),n&&Ht.test(n)?n.replace(ot,Bp):n}var hx=Cr(function(n,r,a){return n+(a?" ":"")+r.toUpperCase()}),dl=Bu("toUpperCase");function Uh(n,r,a){return n=dt(n),r=a?t:r,r===t?Fp(n)?Hp(n):Ep(n):n.match(r)||[]}var zh=Je(function(n,r){try{return hn(n,t,r)}catch(a){return cl(a)?a:new Ve(a)}}),fx=hi(function(n,r){return bn(r,function(a){a=Jn(a),ci(n,a,ol(n[a],n))}),n});function dx(n){var r=n==null?0:n.length,a=Fe();return n=r?St(n,function(h){if(typeof h[1]!="function")throw new En(u);return[a(h[0]),h[1]]}):[],Je(function(h){for(var x=-1;++x<r;){var S=n[x];if(hn(S[0],this,h))return hn(S[1],this,h)}})}function px(n){return Bm(An(n,g))}function pl(n){return function(){return n}}function mx(n,r){return n==null||n!==n?r:n}var gx=Wu(),_x=Wu(!0);function cn(n){return n}function ml(n){return _u(typeof n=="function"?n:An(n,g))}function vx(n){return xu(An(n,g))}function xx(n,r){return Mu(n,An(r,g))}var Mx=Je(function(n,r){return function(a){return _s(a,n,r)}}),yx=Je(function(n,r){return function(a){return _s(n,a,r)}});function gl(n,r,a){var h=Gt(r),x=ca(r,h);a==null&&!(bt(r)&&(x.length||!h.length))&&(a=r,r=n,n=this,x=ca(r,Gt(r)));var S=!(bt(a)&&"chain"in a)||!!a.chain,D=di(n);return bn(x,function(F){var W=r[F];n[F]=W,D&&(n.prototype[F]=function(){var te=this.__chain__;if(S||te){var ie=n(this.__wrapped__),ce=ie.__actions__=an(this.__actions__);return ce.push({func:W,args:arguments,thisArg:n}),ie.__chain__=te,ie}return W.apply(n,Ci([this.value()],arguments))})}),n}function Sx(){return kt._===this&&(kt._=Zp),this}function _l(){}function wx(n){return n=$e(n),Je(function(r){return yu(r,n)})}var bx=Zo(St),Ex=Zo(Hc),Tx=Zo(xo);function Bh(n){return tl(n)?Mo(Jn(n)):ng(n)}function Ax(n){return function(r){return n==null?t:ji(n,r)}}var Cx=Vu(),Lx=Vu(!0);function vl(){return[]}function xl(){return!1}function Rx(){return{}}function Dx(){return""}function Px(){return!0}function Ix(n,r){if(n=$e(n),n<1||n>ne)return[];var a=fe,h=$t(n,fe);r=Fe(r),n-=fe;for(var x=wo(h,r);++a<n;)r(a);return x}function Fx(n){return Xe(n)?St(n,Jn):pn(n)?[n]:an(sh(dt(n)))}function Nx(n){var r=++Xp;return dt(n)+r}var Ox=ma(function(n,r){return n+r},0),Ux=$o("ceil"),zx=ma(function(n,r){return n/r},1),Bx=$o("floor");function Gx(n){return n&&n.length?la(n,cn,Fo):t}function Wx(n,r){return n&&n.length?la(n,Fe(r,2),Fo):t}function Hx(n){return qc(n,cn)}function Vx(n,r){return qc(n,Fe(r,2))}function kx(n){return n&&n.length?la(n,cn,zo):t}function qx(n,r){return n&&n.length?la(n,Fe(r,2),zo):t}var Xx=ma(function(n,r){return n*r},1),Yx=$o("round"),Zx=ma(function(n,r){return n-r},0);function $x(n){return n&&n.length?So(n,cn):0}function Kx(n,r){return n&&n.length?So(n,Fe(r,2)):0}return y.after=v0,y.ary=gh,y.assign=sv,y.assignIn=Rh,y.assignInWith=Ca,y.assignWith=av,y.at=ov,y.before=_h,y.bind=ol,y.bindAll=fx,y.bindKey=vh,y.castArray=R0,y.chain=dh,y.chunk=Bg,y.compact=Gg,y.concat=Wg,y.cond=dx,y.conforms=px,y.constant=pl,y.countBy=$_,y.create=lv,y.curry=xh,y.curryRight=Mh,y.debounce=yh,y.defaults=cv,y.defaultsDeep=uv,y.defer=x0,y.delay=M0,y.difference=Hg,y.differenceBy=Vg,y.differenceWith=kg,y.drop=qg,y.dropRight=Xg,y.dropRightWhile=Yg,y.dropWhile=Zg,y.fill=$g,y.filter=j_,y.flatMap=e0,y.flatMapDeep=t0,y.flatMapDepth=n0,y.flatten=ch,y.flattenDeep=Kg,y.flattenDepth=jg,y.flip=y0,y.flow=gx,y.flowRight=_x,y.fromPairs=Jg,y.functions=_v,y.functionsIn=vv,y.groupBy=i0,y.initial=e_,y.intersection=t_,y.intersectionBy=n_,y.intersectionWith=i_,y.invert=Mv,y.invertBy=yv,y.invokeMap=s0,y.iteratee=ml,y.keyBy=a0,y.keys=Gt,y.keysIn=ln,y.map=Sa,y.mapKeys=wv,y.mapValues=bv,y.matches=vx,y.matchesProperty=xx,y.memoize=ba,y.merge=Ev,y.mergeWith=Dh,y.method=Mx,y.methodOf=yx,y.mixin=gl,y.negate=Ea,y.nthArg=wx,y.omit=Tv,y.omitBy=Av,y.once=S0,y.orderBy=o0,y.over=bx,y.overArgs=w0,y.overEvery=Ex,y.overSome=Tx,y.partial=ll,y.partialRight=Sh,y.partition=l0,y.pick=Cv,y.pickBy=Ph,y.property=Bh,y.propertyOf=Ax,y.pull=o_,y.pullAll=hh,y.pullAllBy=l_,y.pullAllWith=c_,y.pullAt=u_,y.range=Cx,y.rangeRight=Lx,y.rearg=b0,y.reject=h0,y.remove=h_,y.rest=E0,y.reverse=sl,y.sampleSize=d0,y.set=Rv,y.setWith=Dv,y.shuffle=p0,y.slice=f_,y.sortBy=_0,y.sortedUniq=x_,y.sortedUniqBy=M_,y.split=ex,y.spread=T0,y.tail=y_,y.take=S_,y.takeRight=w_,y.takeRightWhile=b_,y.takeWhile=E_,y.tap=G_,y.throttle=A0,y.thru=ya,y.toArray=Ah,y.toPairs=Ih,y.toPairsIn=Fh,y.toPath=Fx,y.toPlainObject=Lh,y.transform=Pv,y.unary=C0,y.union=T_,y.unionBy=A_,y.unionWith=C_,y.uniq=L_,y.uniqBy=R_,y.uniqWith=D_,y.unset=Iv,y.unzip=al,y.unzipWith=fh,y.update=Fv,y.updateWith=Nv,y.values=Dr,y.valuesIn=Ov,y.without=P_,y.words=Uh,y.wrap=L0,y.xor=I_,y.xorBy=F_,y.xorWith=N_,y.zip=O_,y.zipObject=U_,y.zipObjectDeep=z_,y.zipWith=B_,y.entries=Ih,y.entriesIn=Fh,y.extend=Rh,y.extendWith=Ca,gl(y,y),y.add=Ox,y.attempt=zh,y.camelCase=Gv,y.capitalize=Nh,y.ceil=Ux,y.clamp=Uv,y.clone=D0,y.cloneDeep=I0,y.cloneDeepWith=F0,y.cloneWith=P0,y.conformsTo=N0,y.deburr=Oh,y.defaultTo=mx,y.divide=zx,y.endsWith=Wv,y.eq=Gn,y.escape=Hv,y.escapeRegExp=Vv,y.every=K_,y.find=J_,y.findIndex=oh,y.findKey=hv,y.findLast=Q_,y.findLastIndex=lh,y.findLastKey=fv,y.floor=Bx,y.forEach=ph,y.forEachRight=mh,y.forIn=dv,y.forInRight=pv,y.forOwn=mv,y.forOwnRight=gv,y.get=hl,y.gt=O0,y.gte=U0,y.has=xv,y.hasIn=fl,y.head=uh,y.identity=cn,y.includes=r0,y.indexOf=Qg,y.inRange=zv,y.invoke=Sv,y.isArguments=er,y.isArray=Xe,y.isArrayBuffer=z0,y.isArrayLike=on,y.isArrayLikeObject=Lt,y.isBoolean=B0,y.isBuffer=Ni,y.isDate=G0,y.isElement=W0,y.isEmpty=H0,y.isEqual=V0,y.isEqualWith=k0,y.isError=cl,y.isFinite=q0,y.isFunction=di,y.isInteger=wh,y.isLength=Ta,y.isMap=bh,y.isMatch=X0,y.isMatchWith=Y0,y.isNaN=Z0,y.isNative=$0,y.isNil=j0,y.isNull=K0,y.isNumber=Eh,y.isObject=bt,y.isObjectLike=Ct,y.isPlainObject=ws,y.isRegExp=ul,y.isSafeInteger=J0,y.isSet=Th,y.isString=Aa,y.isSymbol=pn,y.isTypedArray=Rr,y.isUndefined=Q0,y.isWeakMap=ev,y.isWeakSet=tv,y.join=r_,y.kebabCase=kv,y.last=Ln,y.lastIndexOf=s_,y.lowerCase=qv,y.lowerFirst=Xv,y.lt=nv,y.lte=iv,y.max=Gx,y.maxBy=Wx,y.mean=Hx,y.meanBy=Vx,y.min=kx,y.minBy=qx,y.stubArray=vl,y.stubFalse=xl,y.stubObject=Rx,y.stubString=Dx,y.stubTrue=Px,y.multiply=Xx,y.nth=a_,y.noConflict=Sx,y.noop=_l,y.now=wa,y.pad=Yv,y.padEnd=Zv,y.padStart=$v,y.parseInt=Kv,y.random=Bv,y.reduce=c0,y.reduceRight=u0,y.repeat=jv,y.replace=Jv,y.result=Lv,y.round=Yx,y.runInContext=z,y.sample=f0,y.size=m0,y.snakeCase=Qv,y.some=g0,y.sortedIndex=d_,y.sortedIndexBy=p_,y.sortedIndexOf=m_,y.sortedLastIndex=g_,y.sortedLastIndexBy=__,y.sortedLastIndexOf=v_,y.startCase=tx,y.startsWith=nx,y.subtract=Zx,y.sum=$x,y.sumBy=Kx,y.template=ix,y.times=Ix,y.toFinite=pi,y.toInteger=$e,y.toLength=Ch,y.toLower=rx,y.toNumber=Rn,y.toSafeInteger=rv,y.toString=dt,y.toUpper=sx,y.trim=ax,y.trimEnd=ox,y.trimStart=lx,y.truncate=cx,y.unescape=ux,y.uniqueId=Nx,y.upperCase=hx,y.upperFirst=dl,y.each=ph,y.eachRight=mh,y.first=uh,gl(y,function(){var n={};return Kn(y,function(r,a){mt.call(y.prototype,a)||(n[a]=r)}),n}(),{chain:!1}),y.VERSION=i,bn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){y[n].placeholder=y}),bn(["drop","take"],function(n,r){nt.prototype[n]=function(a){a=a===t?1:Ot($e(a),0);var h=this.__filtered__&&!r?new nt(this):this.clone();return h.__filtered__?h.__takeCount__=$t(a,h.__takeCount__):h.__views__.push({size:$t(a,fe),type:n+(h.__dir__<0?"Right":"")}),h},nt.prototype[n+"Right"]=function(a){return this.reverse()[n](a).reverse()}}),bn(["filter","map","takeWhile"],function(n,r){var a=r+1,h=a==H||a==j;nt.prototype[n]=function(x){var S=this.clone();return S.__iteratees__.push({iteratee:Fe(x,3),type:a}),S.__filtered__=S.__filtered__||h,S}}),bn(["head","last"],function(n,r){var a="take"+(r?"Right":"");nt.prototype[n]=function(){return this[a](1).value()[0]}}),bn(["initial","tail"],function(n,r){var a="drop"+(r?"":"Right");nt.prototype[n]=function(){return this.__filtered__?new nt(this):this[a](1)}}),nt.prototype.compact=function(){return this.filter(cn)},nt.prototype.find=function(n){return this.filter(n).head()},nt.prototype.findLast=function(n){return this.reverse().find(n)},nt.prototype.invokeMap=Je(function(n,r){return typeof n=="function"?new nt(this):this.map(function(a){return _s(a,n,r)})}),nt.prototype.reject=function(n){return this.filter(Ea(Fe(n)))},nt.prototype.slice=function(n,r){n=$e(n);var a=this;return a.__filtered__&&(n>0||r<0)?new nt(a):(n<0?a=a.takeRight(-n):n&&(a=a.drop(n)),r!==t&&(r=$e(r),a=r<0?a.dropRight(-r):a.take(r-n)),a)},nt.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},nt.prototype.toArray=function(){return this.take(fe)},Kn(nt.prototype,function(n,r){var a=/^(?:filter|find|map|reject)|While$/.test(r),h=/^(?:head|last)$/.test(r),x=y[h?"take"+(r=="last"?"Right":""):r],S=h||/^find/.test(r);!x||(y.prototype[r]=function(){var D=this.__wrapped__,F=h?[1]:arguments,W=D instanceof nt,te=F[0],ie=W||Xe(D),ce=function(Qe){var st=x.apply(y,Ci([Qe],F));return h&&we?st[0]:st};ie&&a&&typeof te=="function"&&te.length!=1&&(W=ie=!1);var we=this.__chain__,Le=!!this.__actions__.length,Ne=S&&!we,je=W&&!Le;if(!S&&ie){D=je?D:new nt(this);var Oe=n.apply(D,F);return Oe.__actions__.push({func:ya,args:[ce],thisArg:t}),new Tn(Oe,we)}return Ne&&je?n.apply(this,F):(Oe=this.thru(ce),Ne?h?Oe.value()[0]:Oe.value():Oe)})}),bn(["pop","push","shift","sort","splice","unshift"],function(n){var r=Ys[n],a=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",h=/^(?:pop|shift)$/.test(n);y.prototype[n]=function(){var x=arguments;if(h&&!this.__chain__){var S=this.value();return r.apply(Xe(S)?S:[],x)}return this[a](function(D){return r.apply(Xe(D)?D:[],x)})}}),Kn(nt.prototype,function(n,r){var a=y[r];if(a){var h=a.name+"";mt.call(Er,h)||(Er[h]=[]),Er[h].push({name:r,func:a})}}),Er[pa(t,b).name]=[{name:"wrapper",func:t}],nt.prototype.clone=um,nt.prototype.reverse=hm,nt.prototype.value=fm,y.prototype.at=W_,y.prototype.chain=H_,y.prototype.commit=V_,y.prototype.next=k_,y.prototype.plant=X_,y.prototype.reverse=Y_,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=Z_,y.prototype.first=y.prototype.head,us&&(y.prototype[us]=q_),y},Sr=Vp();Xi?((Xi.exports=Sr)._=Sr,mo._=Sr):kt._=Sr}).call(As)})(hc,hc.exports);class Kd{constructor(e){Dt(this,"prototypes",[]);this.options=e}createFromCurves(e){this.prototypes=e.map(t=>this.addCurve(t))}addCurve(e){const t=[],i=[],s=[],o=[],u=[],c=[],{widthSegments:d}=this.options,f=2*Math.PI/d,p=e.length,g=e[0].position;for(let _=0;_<p;++_){let M=new B,w=new B,v=new B,m=new B(e[_].position[0],e[_].position[1],e[_].position[2]),b=e[_].width;if(_>0){let N=new B(e[_-1].position[0],e[_-1].position[1],e[_-1].position[2]);M=new B().subVectors(m,N)}if(_<p-1){let N=new B(e[_+1].position[0],e[_+1].position[1],e[_+1].position[2]);w=new B().subVectors(N,m)}v=M||w,M&&w&&(v=new B().addVectors(M,w));let P=new B().crossVectors(v,new B(1,0,0)).normalize(),O=new B().crossVectors(v,P).normalize();for(let N=0;N<d+1;++N){let L=new B().addVectors(P.clone().multiplyScalar(Math.cos(f*N)),O.clone().multiplyScalar(Math.sin(f*N))),G=L.clone().multiplyScalar(b).add(m);t.push([G.x,G.y,G.z]);const k=uc(N/d,0,1,.01,.99),A=uc(_/(p-1),0,1,.01,.99);i.push([k,A]),s.push([g[0]/6+.5,g[2]/6+.5]),o.push(L.toArray()),c.push(_/p)}}for(let _=0;_<p-1;++_)for(let M=0;M<d;++M)u.push(this.getIndiciForLayer(M,_,d+1));return{vertices:t,uvs:i,uvs2:s,normals:o,indices:u,offsets:c}}getIndiciForLayer(e,t,i){const s=[];let o,u,c;return o=t*i+e,u=t*i+e+1,c=(t+1)*i+e,s.push(o,u,c),o=t*i+e+1,u=(t+1)*i+e+1,c=(t+1)*i+e,s.push(o,u,c),s}}Dt(Kd,"SIDE_SEGMENTS",3);class wE{constructor(e){Dt(this,"bufferGeometry");Dt(this,"meshPrototypeGenerator");this.options=e,this.meshPrototypeGenerator=new Kd(e)}setCurves(e){this.meshPrototypeGenerator.createFromCurves(e)}populateShape(){const{minx:e,miny:t,maxx:i,maxy:s,sizex:o,sizey:u}=this.options,c={vertices:[],uvs:[],uvs2:[],normals:[],indices:[],offsets:[]};for(let d=e;d<i;d+=o)for(let f=t;f<s;f+=u){let p=d+(Math.random()-.5)*o*.5,g=f+(Math.random()-.5)*u*.5;p=p<e?e:p>i?i:p,g=g<t?t:g>s?s:g;const _=this.cloneRandomChunk(this.meshPrototypeGenerator.prototypes);this.moveChunkToOrigin(_,new B(p,0,g)),this.appendChunk(c,_)}this.bufferGeometry=this.getBufferGeometry(c)}cloneRandomChunk(e){return this.cloneChunk(e[Math.floor(Math.random()*e.length)])}moveChunkToOrigin(e,t){e.vertices.forEach(i=>{i[0]+=t.x,i[1]+=t.y,i[2]+=t.z})}cloneChunk(e){return hc.exports.cloneDeep(e)}appendChunk(e,t){const i=e.vertices.length;e.vertices.push(...t.vertices),e.uvs.push(...t.uvs),e.uvs2.push(...t.uvs2),e.normals.push(...t.normals),e.indices.push(...t.indices.map(s=>s.map(o=>i+o))),e.offsets.push(...t.offsets)}getBufferGeometry(e){const t=new Nn;return t.setIndex(e.indices.flat()),t.setAttribute("position",new It(e.vertices.flat(),3)),t.setAttribute("uv",new It(e.uvs.flat(),2)),t.setAttribute("uv2",new It(e.uvs2.flat(),2)),t.setAttribute("normal",new It(e.normals.flat(),3)),t.setAttribute("offsets",new It(e.offsets,1)),t}}const Ps=class{constructor(e){Dt(this,"options");Dt(this,"mesh");this.options={...Ps.defaults,...e},this.createObjects()}createObjects(){const e=new SE(this.options),t=[];for(let d=0;d<200;++d)t.push(e.generateCurve());const i=new wE(this.options);i.setCurves(t),i.populateShape();const s=i.bufferGeometry,o=new aE().load(this.options.surfaceColorMap),u={};this.options.spiralTexture&&(u.USE_SPIRAL_TEXTURE=!0);const c=new kd({defines:u,uniforms:{surfaceColor:{value:o}},vertexShader:Ps.vertexShader,fragmentShader:Ps.fragmentShader,side:fr,transparent:!0});this.mesh=new ri(s,c)}};let $r=Ps;Dt($r,"defaults",{surfaceColorMap:"",minx:-1,miny:-1,maxx:1,maxy:1,sizex:.02,sizey:.02,variance:2,length:.3,heightSegments:3,widthSegments:3,width:.01,spiralTexture:!0}),Dt($r,"vertexShader",`
precision mediump float;
precision mediump int;

uniform mat4 modelViewMatrix; // optional
uniform mat4 projectionMatrix; // optional

attribute vec3 position;
attribute vec4 color;
attribute float offsets;
attribute vec2 uv;
attribute vec2 uv2;

varying vec2 vUv;
varying vec2 vUv2;
varying float vOffset;

void main()	{
    vUv = uv;
    vUv2 = uv2;
    vOffset = offsets;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`),Dt($r,"fragmentShader",`
precision mediump float;
precision mediump int;

uniform sampler2D surfaceColor;

varying vec2 vUv;
varying vec2 vUv2;
varying float vOffset;

void main()	{
    vec4 texelColor = texture2D(surfaceColor, vUv2);

    #if defined(USE_SPIRAL_TEXTURE)
    // pseudorandomly shift uv using color
    // scaled with different factor u and v
    // adjusted to range -0.5, 0.5
    vec2 scaledUv = fract((vUv + texelColor.xy * 100.0) * vec2(2.0, 6.0)) - vec2(0.5);
    float spiral = abs(abs(scaledUv.x + scaledUv.y) - 0.5);
    spiral = smoothstep(0.0, 0.5, spiral);
    texelColor *= (0.6 + 0.4 * spiral);
    #endif

    texelColor *= (0.2 + vOffset * 0.8);
    gl_FragColor = vec4(texelColor.xyz* 1.5 , 1.0);
    // TODO omit something
}
`);let Ds;const bE={surfaceColorMap:"./texture_light.png",minx:-1,miny:-1,maxx:1,maxy:1,sizex:.02,sizey:.02,variance:1,length:.05,heightSegments:6,widthSegments:5,width:.014,spiralTexture:!1},EE=()=>{const l=document.createElement("div");l.style.width=window.innerWidth+"px",l.style.height=window.innerHeight+"px",document.body.appendChild(l),Ds=new ME(l),new yE(Ds),TE();const e=new fE;Ds.scene.add(e),Ds.animate()};function TE(){const l=new $r(bE);Ds.scene.add(l.mesh)}EE();
