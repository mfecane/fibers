var _0=Object.defineProperty;var x0=(n,e,t)=>e in n?_0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ge=(n,e,t)=>(x0(n,typeof e!="symbol"?e+"":e,t),t);const y0=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};y0();var wi={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vo=Symbol.for("react.element"),M0=Symbol.for("react.portal"),S0=Symbol.for("react.fragment"),w0=Symbol.for("react.strict_mode"),E0=Symbol.for("react.profiler"),T0=Symbol.for("react.provider"),C0=Symbol.for("react.context"),b0=Symbol.for("react.forward_ref"),A0=Symbol.for("react.suspense"),L0=Symbol.for("react.memo"),P0=Symbol.for("react.lazy"),zf=Symbol.iterator;function R0(n){return n===null||typeof n!="object"?null:(n=zf&&n[zf]||n["@@iterator"],typeof n=="function"?n:null)}var yp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mp=Object.assign,Sp={};function ps(n,e,t){this.props=n,this.context=e,this.refs=Sp,this.updater=t||yp}ps.prototype.isReactComponent={};ps.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ps.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function wp(){}wp.prototype=ps.prototype;function Ic(n,e,t){this.props=n,this.context=e,this.refs=Sp,this.updater=t||yp}var Nc=Ic.prototype=new wp;Nc.constructor=Ic;Mp(Nc,ps.prototype);Nc.isPureReactComponent=!0;var kf=Array.isArray,Ep=Object.prototype.hasOwnProperty,Fc={current:null},Tp={key:!0,ref:!0,__self:!0,__source:!0};function Cp(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ep.call(e,i)&&!Tp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:vo,type:n,key:s,ref:o,props:r,_owner:Fc.current}}function D0(n,e){return{$$typeof:vo,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function zc(n){return typeof n=="object"&&n!==null&&n.$$typeof===vo}function I0(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Of=/\/+/g;function Tl(n,e){return typeof n=="object"&&n!==null&&n.key!=null?I0(""+n.key):e.toString(36)}function pa(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case vo:case M0:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Tl(o,0):i,kf(r)?(t="",n!=null&&(t=n.replace(Of,"$&/")+"/"),pa(r,e,t,"",function(u){return u})):r!=null&&(zc(r)&&(r=D0(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Of,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",kf(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Tl(s,a);o+=pa(s,e,t,l,r)}else if(l=R0(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Tl(s,a++),o+=pa(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Lo(n,e,t){if(n==null)return n;var i=[],r=0;return pa(n,i,"","",function(s){return e.call(t,s,r++)}),i}function N0(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Dt={current:null},ma={transition:null},F0={ReactCurrentDispatcher:Dt,ReactCurrentBatchConfig:ma,ReactCurrentOwner:Fc};Pe.Children={map:Lo,forEach:function(n,e,t){Lo(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Lo(n,function(){e++}),e},toArray:function(n){return Lo(n,function(e){return e})||[]},only:function(n){if(!zc(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Pe.Component=ps;Pe.Fragment=S0;Pe.Profiler=E0;Pe.PureComponent=Ic;Pe.StrictMode=w0;Pe.Suspense=A0;Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F0;Pe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Mp({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Fc.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Ep.call(e,l)&&!Tp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:vo,type:n.type,key:r,ref:s,props:i,_owner:o}};Pe.createContext=function(n){return n={$$typeof:C0,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:T0,_context:n},n.Consumer=n};Pe.createElement=Cp;Pe.createFactory=function(n){var e=Cp.bind(null,n);return e.type=n,e};Pe.createRef=function(){return{current:null}};Pe.forwardRef=function(n){return{$$typeof:b0,render:n}};Pe.isValidElement=zc;Pe.lazy=function(n){return{$$typeof:P0,_payload:{_status:-1,_result:n},_init:N0}};Pe.memo=function(n,e){return{$$typeof:L0,type:n,compare:e===void 0?null:e}};Pe.startTransition=function(n){var e=ma.transition;ma.transition={};try{n()}finally{ma.transition=e}};Pe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Pe.useCallback=function(n,e){return Dt.current.useCallback(n,e)};Pe.useContext=function(n){return Dt.current.useContext(n)};Pe.useDebugValue=function(){};Pe.useDeferredValue=function(n){return Dt.current.useDeferredValue(n)};Pe.useEffect=function(n,e){return Dt.current.useEffect(n,e)};Pe.useId=function(){return Dt.current.useId()};Pe.useImperativeHandle=function(n,e,t){return Dt.current.useImperativeHandle(n,e,t)};Pe.useInsertionEffect=function(n,e){return Dt.current.useInsertionEffect(n,e)};Pe.useLayoutEffect=function(n,e){return Dt.current.useLayoutEffect(n,e)};Pe.useMemo=function(n,e){return Dt.current.useMemo(n,e)};Pe.useReducer=function(n,e,t){return Dt.current.useReducer(n,e,t)};Pe.useRef=function(n){return Dt.current.useRef(n)};Pe.useState=function(n){return Dt.current.useState(n)};Pe.useSyncExternalStore=function(n,e,t){return Dt.current.useSyncExternalStore(n,e,t)};Pe.useTransition=function(){return Dt.current.useTransition()};Pe.version="18.2.0";wi.exports=Pe;var kt=wi.exports,bp={exports:{}},Kt={},Ap={exports:{}},Lp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(R,I){var k=R.length;R.push(I);e:for(;0<k;){var Y=k-1>>>1,W=R[Y];if(0<r(W,I))R[Y]=I,R[k]=W,k=Y;else break e}}function t(R){return R.length===0?null:R[0]}function i(R){if(R.length===0)return null;var I=R[0],k=R.pop();if(k!==I){R[0]=k;e:for(var Y=0,W=R.length,Q=W>>>1;Y<Q;){var ce=2*(Y+1)-1,de=R[ce],G=ce+1,Ie=R[G];if(0>r(de,k))G<W&&0>r(Ie,de)?(R[Y]=Ie,R[G]=k,Y=G):(R[Y]=de,R[ce]=k,Y=ce);else if(G<W&&0>r(Ie,k))R[Y]=Ie,R[G]=k,Y=G;else break e}}return I}function r(R,I){var k=R.sortIndex-I.sortIndex;return k!==0?k:R.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,g=!1,_=!1,p=!1,d=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(R){for(var I=t(u);I!==null;){if(I.callback===null)i(u);else if(I.startTime<=R)i(u),I.sortIndex=I.expirationTime,e(l,I);else break;I=t(u)}}function w(R){if(p=!1,x(R),!_)if(t(l)!==null)_=!0,V(M);else{var I=t(u);I!==null&&j(w,I.startTime-R)}}function M(R,I){_=!1,p&&(p=!1,m(y),y=-1),g=!0;var k=h;try{for(x(I),f=t(l);f!==null&&(!(f.expirationTime>I)||R&&!O());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,h=f.priorityLevel;var W=Y(f.expirationTime<=I);I=n.unstable_now(),typeof W=="function"?f.callback=W:f===t(l)&&i(l),x(I)}else i(l);f=t(l)}if(f!==null)var Q=!0;else{var ce=t(u);ce!==null&&j(w,ce.startTime-I),Q=!1}return Q}finally{f=null,h=k,g=!1}}var b=!1,P=null,y=-1,A=5,N=-1;function O(){return!(n.unstable_now()-N<A)}function oe(){if(P!==null){var R=n.unstable_now();N=R;var I=!0;try{I=P(!0,R)}finally{I?K():(b=!1,P=null)}}else b=!1}var K;if(typeof v=="function")K=function(){v(oe)};else if(typeof MessageChannel!="undefined"){var F=new MessageChannel,q=F.port2;F.port1.onmessage=oe,K=function(){q.postMessage(null)}}else K=function(){d(oe,0)};function V(R){P=R,b||(b=!0,K())}function j(R,I){y=d(function(){R(n.unstable_now())},I)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(R){R.callback=null},n.unstable_continueExecution=function(){_||g||(_=!0,V(M))},n.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<R?Math.floor(1e3/R):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(R){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var k=h;h=I;try{return R()}finally{h=k}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(R,I){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var k=h;h=R;try{return I()}finally{h=k}},n.unstable_scheduleCallback=function(R,I,k){var Y=n.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?Y+k:Y):k=Y,R){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=k+W,R={id:c++,callback:I,priorityLevel:R,startTime:k,expirationTime:W,sortIndex:-1},k>Y?(R.sortIndex=k,e(u,R),t(l)===null&&R===t(u)&&(p?(m(y),y=-1):p=!0,j(w,k-Y))):(R.sortIndex=W,e(l,R),_||g||(_=!0,V(M))),R},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(R){var I=h;return function(){var k=h;h=I;try{return R.apply(this,arguments)}finally{h=k}}}})(Lp);Ap.exports=Lp;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp=wi.exports,$t=Ap.exports;function Z(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rp=new Set,Zs={};function dr(n,e){is(n,e),is(n+"Capture",e)}function is(n,e){for(Zs[n]=e,n=0;n<e.length;n++)Rp.add(e[n])}var ni=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Du=Object.prototype.hasOwnProperty,z0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uf={},Bf={};function k0(n){return Du.call(Bf,n)?!0:Du.call(Uf,n)?!1:z0.test(n)?Bf[n]=!0:(Uf[n]=!0,!1)}function O0(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function U0(n,e,t,i){if(e===null||typeof e=="undefined"||O0(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function It(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){vt[n]=new It(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];vt[e]=new It(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){vt[n]=new It(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){vt[n]=new It(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){vt[n]=new It(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){vt[n]=new It(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){vt[n]=new It(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){vt[n]=new It(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){vt[n]=new It(n,5,!1,n.toLowerCase(),null,!1,!1)});var kc=/[\-:]([a-z])/g;function Oc(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(kc,Oc);vt[e]=new It(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(kc,Oc);vt[e]=new It(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(kc,Oc);vt[e]=new It(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){vt[n]=new It(n,1,!1,n.toLowerCase(),null,!1,!1)});vt.xlinkHref=new It("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){vt[n]=new It(n,1,!1,n.toLowerCase(),null,!0,!0)});function Uc(n,e,t,i){var r=vt.hasOwnProperty(e)?vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(U0(e,t,r,i)&&(t=null),i||r===null?k0(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var oi=Pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Po=Symbol.for("react.element"),zr=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),Bc=Symbol.for("react.strict_mode"),Iu=Symbol.for("react.profiler"),Dp=Symbol.for("react.provider"),Ip=Symbol.for("react.context"),Vc=Symbol.for("react.forward_ref"),Nu=Symbol.for("react.suspense"),Fu=Symbol.for("react.suspense_list"),Gc=Symbol.for("react.memo"),gi=Symbol.for("react.lazy"),Np=Symbol.for("react.offscreen"),Vf=Symbol.iterator;function Ss(n){return n===null||typeof n!="object"?null:(n=Vf&&n[Vf]||n["@@iterator"],typeof n=="function"?n:null)}var $e=Object.assign,Cl;function Ns(n){if(Cl===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Cl=e&&e[1]||""}return`
`+Cl+n}var bl=!1;function Al(n,e){if(!n||bl)return"";bl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{bl=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ns(n):""}function B0(n){switch(n.tag){case 5:return Ns(n.type);case 16:return Ns("Lazy");case 13:return Ns("Suspense");case 19:return Ns("SuspenseList");case 0:case 2:case 15:return n=Al(n.type,!1),n;case 11:return n=Al(n.type.render,!1),n;case 1:return n=Al(n.type,!0),n;default:return""}}function zu(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case kr:return"Fragment";case zr:return"Portal";case Iu:return"Profiler";case Bc:return"StrictMode";case Nu:return"Suspense";case Fu:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Ip:return(n.displayName||"Context")+".Consumer";case Dp:return(n._context.displayName||"Context")+".Provider";case Vc:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Gc:return e=n.displayName||null,e!==null?e:zu(n.type)||"Memo";case gi:e=n._payload,n=n._init;try{return zu(n(e))}catch{}}return null}function V0(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zu(e);case 8:return e===Bc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ii(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fp(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function G0(n){var e=Fp(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t!="undefined"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ro(n){n._valueTracker||(n._valueTracker=G0(n))}function zp(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Fp(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Aa(n){if(n=n||(typeof document!="undefined"?document:void 0),typeof n=="undefined")return null;try{return n.activeElement||n.body}catch{return n.body}}function ku(n,e){var t=e.checked;return $e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:n._wrapperState.initialChecked})}function Gf(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ii(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function kp(n,e){e=e.checked,e!=null&&Uc(n,"checked",e,!1)}function Ou(n,e){kp(n,e);var t=Ii(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Uu(n,e.type,t):e.hasOwnProperty("defaultValue")&&Uu(n,e.type,Ii(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Hf(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Uu(n,e,t){(e!=="number"||Aa(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Fs=Array.isArray;function $r(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ii(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Bu(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Z(91));return $e({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Wf(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(Z(92));if(Fs(t)){if(1<t.length)throw Error(Z(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ii(t)}}function Op(n,e){var t=Ii(e.value),i=Ii(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function jf(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Up(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vu(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Up(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Do,Bp=function(n){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Do=Do||document.createElement("div"),Do.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Do.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ks(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Vs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},H0=["Webkit","ms","Moz","O"];Object.keys(Vs).forEach(function(n){H0.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Vs[e]=Vs[n]})});function Vp(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Vs.hasOwnProperty(n)&&Vs[n]?(""+e).trim():e+"px"}function Gp(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Vp(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var W0=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gu(n,e){if(e){if(W0[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Z(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Z(62))}}function Hu(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wu=null;function Hc(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ju=null,Zr=null,Kr=null;function Xf(n){if(n=yo(n)){if(typeof ju!="function")throw Error(Z(280));var e=n.stateNode;e&&(e=il(e),ju(n.stateNode,n.type,e))}}function Hp(n){Zr?Kr?Kr.push(n):Kr=[n]:Zr=n}function Wp(){if(Zr){var n=Zr,e=Kr;if(Kr=Zr=null,Xf(n),e)for(n=0;n<e.length;n++)Xf(e[n])}}function jp(n,e){return n(e)}function Xp(){}var Ll=!1;function qp(n,e,t){if(Ll)return n(e,t);Ll=!0;try{return jp(n,e,t)}finally{Ll=!1,(Zr!==null||Kr!==null)&&(Xp(),Wp())}}function Qs(n,e){var t=n.stateNode;if(t===null)return null;var i=il(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(Z(231,e,typeof t));return t}var Xu=!1;if(ni)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){Xu=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{Xu=!1}function j0(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Gs=!1,La=null,Pa=!1,qu=null,X0={onError:function(n){Gs=!0,La=n}};function q0(n,e,t,i,r,s,o,a,l){Gs=!1,La=null,j0.apply(X0,arguments)}function Y0(n,e,t,i,r,s,o,a,l){if(q0.apply(this,arguments),Gs){if(Gs){var u=La;Gs=!1,La=null}else throw Error(Z(198));Pa||(Pa=!0,qu=u)}}function pr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Yp(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function qf(n){if(pr(n)!==n)throw Error(Z(188))}function $0(n){var e=n.alternate;if(!e){if(e=pr(n),e===null)throw Error(Z(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return qf(r),n;if(s===i)return qf(r),e;s=s.sibling}throw Error(Z(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(Z(189))}}if(t.alternate!==i)throw Error(Z(190))}if(t.tag!==3)throw Error(Z(188));return t.stateNode.current===t?n:e}function $p(n){return n=$0(n),n!==null?Zp(n):null}function Zp(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Zp(n);if(e!==null)return e;n=n.sibling}return null}var Kp=$t.unstable_scheduleCallback,Yf=$t.unstable_cancelCallback,Z0=$t.unstable_shouldYield,K0=$t.unstable_requestPaint,Qe=$t.unstable_now,Q0=$t.unstable_getCurrentPriorityLevel,Wc=$t.unstable_ImmediatePriority,Qp=$t.unstable_UserBlockingPriority,Ra=$t.unstable_NormalPriority,J0=$t.unstable_LowPriority,Jp=$t.unstable_IdlePriority,Ja=null,Vn=null;function ev(n){if(Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(Ja,n,void 0,(n.current.flags&128)===128)}catch{}}var Sn=Math.clz32?Math.clz32:iv,tv=Math.log,nv=Math.LN2;function iv(n){return n>>>=0,n===0?32:31-(tv(n)/nv|0)|0}var Io=64,No=4194304;function zs(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Da(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=zs(a):(s&=o,s!==0&&(i=zs(s)))}else o=t&~r,o!==0?i=zs(o):s!==0&&(i=zs(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Sn(e),r=1<<t,i|=n[t],e&=~r;return i}function rv(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sv(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Sn(s),a=1<<o,l=r[o];l===-1?((a&t)===0||(a&i)!==0)&&(r[o]=rv(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Yu(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function em(){var n=Io;return Io<<=1,(Io&4194240)===0&&(Io=64),n}function Pl(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function _o(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Sn(e),n[e]=t}function ov(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Sn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function jc(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Sn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Ve=0;function tm(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var nm,Xc,im,rm,sm,$u=!1,Fo=[],Ei=null,Ti=null,Ci=null,Js=new Map,eo=new Map,xi=[],av="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $f(n,e){switch(n){case"focusin":case"focusout":Ei=null;break;case"dragenter":case"dragleave":Ti=null;break;case"mouseover":case"mouseout":Ci=null;break;case"pointerover":case"pointerout":Js.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(e.pointerId)}}function Es(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=yo(e),e!==null&&Xc(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function lv(n,e,t,i,r){switch(e){case"focusin":return Ei=Es(Ei,n,e,t,i,r),!0;case"dragenter":return Ti=Es(Ti,n,e,t,i,r),!0;case"mouseover":return Ci=Es(Ci,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Js.set(s,Es(Js.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,eo.set(s,Es(eo.get(s)||null,n,e,t,i,r)),!0}return!1}function om(n){var e=$i(n.target);if(e!==null){var t=pr(e);if(t!==null){if(e=t.tag,e===13){if(e=Yp(t),e!==null){n.blockedOn=e,sm(n.priority,function(){im(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ga(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Zu(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Wu=i,t.target.dispatchEvent(i),Wu=null}else return e=yo(t),e!==null&&Xc(e),n.blockedOn=t,!1;e.shift()}return!0}function Zf(n,e,t){ga(n)&&t.delete(e)}function uv(){$u=!1,Ei!==null&&ga(Ei)&&(Ei=null),Ti!==null&&ga(Ti)&&(Ti=null),Ci!==null&&ga(Ci)&&(Ci=null),Js.forEach(Zf),eo.forEach(Zf)}function Ts(n,e){n.blockedOn===e&&(n.blockedOn=null,$u||($u=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,uv)))}function to(n){function e(r){return Ts(r,n)}if(0<Fo.length){Ts(Fo[0],n);for(var t=1;t<Fo.length;t++){var i=Fo[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ei!==null&&Ts(Ei,n),Ti!==null&&Ts(Ti,n),Ci!==null&&Ts(Ci,n),Js.forEach(e),eo.forEach(e),t=0;t<xi.length;t++)i=xi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<xi.length&&(t=xi[0],t.blockedOn===null);)om(t),t.blockedOn===null&&xi.shift()}var Qr=oi.ReactCurrentBatchConfig,Ia=!0;function cv(n,e,t,i){var r=Ve,s=Qr.transition;Qr.transition=null;try{Ve=1,qc(n,e,t,i)}finally{Ve=r,Qr.transition=s}}function fv(n,e,t,i){var r=Ve,s=Qr.transition;Qr.transition=null;try{Ve=4,qc(n,e,t,i)}finally{Ve=r,Qr.transition=s}}function qc(n,e,t,i){if(Ia){var r=Zu(n,e,t,i);if(r===null)Bl(n,e,i,Na,t),$f(n,i);else if(lv(r,n,e,t,i))i.stopPropagation();else if($f(n,i),e&4&&-1<av.indexOf(n)){for(;r!==null;){var s=yo(r);if(s!==null&&nm(s),s=Zu(n,e,t,i),s===null&&Bl(n,e,i,Na,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Bl(n,e,i,null,t)}}var Na=null;function Zu(n,e,t,i){if(Na=null,n=Hc(i),n=$i(n),n!==null)if(e=pr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Yp(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Na=n,null}function am(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q0()){case Wc:return 1;case Qp:return 4;case Ra:case J0:return 16;case Jp:return 536870912;default:return 16}default:return 16}}var Mi=null,Yc=null,va=null;function lm(){if(va)return va;var n,e=Yc,t=e.length,i,r="value"in Mi?Mi.value:Mi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return va=r.slice(n,1<i?1-i:void 0)}function _a(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function zo(){return!0}function Kf(){return!1}function Qt(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zo:Kf,this.isPropagationStopped=Kf,this}return $e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),e}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$c=Qt(ms),xo=$e({},ms,{view:0,detail:0}),hv=Qt(xo),Rl,Dl,Cs,el=$e({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Cs&&(Cs&&n.type==="mousemove"?(Rl=n.screenX-Cs.screenX,Dl=n.screenY-Cs.screenY):Dl=Rl=0,Cs=n),Rl)},movementY:function(n){return"movementY"in n?n.movementY:Dl}}),Qf=Qt(el),dv=$e({},el,{dataTransfer:0}),pv=Qt(dv),mv=$e({},xo,{relatedTarget:0}),Il=Qt(mv),gv=$e({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),vv=Qt(gv),_v=$e({},ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),xv=Qt(_v),yv=$e({},ms,{data:0}),Jf=Qt(yv),Mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ev(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=wv[n])?!!e[n]:!1}function Zc(){return Ev}var Tv=$e({},xo,{key:function(n){if(n.key){var e=Mv[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=_a(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Sv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zc,charCode:function(n){return n.type==="keypress"?_a(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?_a(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Cv=Qt(Tv),bv=$e({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eh=Qt(bv),Av=$e({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zc}),Lv=Qt(Av),Pv=$e({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rv=Qt(Pv),Dv=$e({},el,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Iv=Qt(Dv),Nv=[9,13,27,32],Kc=ni&&"CompositionEvent"in window,Hs=null;ni&&"documentMode"in document&&(Hs=document.documentMode);var Fv=ni&&"TextEvent"in window&&!Hs,um=ni&&(!Kc||Hs&&8<Hs&&11>=Hs),th=String.fromCharCode(32),nh=!1;function cm(n,e){switch(n){case"keyup":return Nv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fm(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Or=!1;function zv(n,e){switch(n){case"compositionend":return fm(e);case"keypress":return e.which!==32?null:(nh=!0,th);case"textInput":return n=e.data,n===th&&nh?null:n;default:return null}}function kv(n,e){if(Or)return n==="compositionend"||!Kc&&cm(n,e)?(n=lm(),va=Yc=Mi=null,Or=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return um&&e.locale!=="ko"?null:e.data;default:return null}}var Ov={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ih(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Ov[n.type]:e==="textarea"}function hm(n,e,t,i){Hp(i),e=Fa(e,"onChange"),0<e.length&&(t=new $c("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ws=null,no=null;function Uv(n){wm(n,0)}function tl(n){var e=Vr(n);if(zp(e))return n}function Bv(n,e){if(n==="change")return e}var dm=!1;if(ni){var Nl;if(ni){var Fl="oninput"in document;if(!Fl){var rh=document.createElement("div");rh.setAttribute("oninput","return;"),Fl=typeof rh.oninput=="function"}Nl=Fl}else Nl=!1;dm=Nl&&(!document.documentMode||9<document.documentMode)}function sh(){Ws&&(Ws.detachEvent("onpropertychange",pm),no=Ws=null)}function pm(n){if(n.propertyName==="value"&&tl(no)){var e=[];hm(e,no,n,Hc(n)),qp(Uv,e)}}function Vv(n,e,t){n==="focusin"?(sh(),Ws=e,no=t,Ws.attachEvent("onpropertychange",pm)):n==="focusout"&&sh()}function Gv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return tl(no)}function Hv(n,e){if(n==="click")return tl(e)}function Wv(n,e){if(n==="input"||n==="change")return tl(e)}function jv(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var bn=typeof Object.is=="function"?Object.is:jv;function io(n,e){if(bn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Du.call(e,r)||!bn(n[r],e[r]))return!1}return!0}function oh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ah(n,e){var t=oh(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=oh(t)}}function mm(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?mm(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function gm(){for(var n=window,e=Aa();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Aa(n.document)}return e}function Qc(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Xv(n){var e=gm(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&mm(t.ownerDocument.documentElement,t)){if(i!==null&&Qc(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=ah(t,s);var o=ah(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var qv=ni&&"documentMode"in document&&11>=document.documentMode,Ur=null,Ku=null,js=null,Qu=!1;function lh(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Qu||Ur==null||Ur!==Aa(i)||(i=Ur,"selectionStart"in i&&Qc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),js&&io(js,i)||(js=i,i=Fa(Ku,"onSelect"),0<i.length&&(e=new $c("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Ur)))}function ko(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Br={animationend:ko("Animation","AnimationEnd"),animationiteration:ko("Animation","AnimationIteration"),animationstart:ko("Animation","AnimationStart"),transitionend:ko("Transition","TransitionEnd")},zl={},vm={};ni&&(vm=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function nl(n){if(zl[n])return zl[n];if(!Br[n])return n;var e=Br[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in vm)return zl[n]=e[t];return n}var _m=nl("animationend"),xm=nl("animationiteration"),ym=nl("animationstart"),Mm=nl("transitionend"),Sm=new Map,uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zi(n,e){Sm.set(n,e),dr(e,[n])}for(var kl=0;kl<uh.length;kl++){var Ol=uh[kl],Yv=Ol.toLowerCase(),$v=Ol[0].toUpperCase()+Ol.slice(1);zi(Yv,"on"+$v)}zi(_m,"onAnimationEnd");zi(xm,"onAnimationIteration");zi(ym,"onAnimationStart");zi("dblclick","onDoubleClick");zi("focusin","onFocus");zi("focusout","onBlur");zi(Mm,"onTransitionEnd");is("onMouseEnter",["mouseout","mouseover"]);is("onMouseLeave",["mouseout","mouseover"]);is("onPointerEnter",["pointerout","pointerover"]);is("onPointerLeave",["pointerout","pointerover"]);dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ks));function ch(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Y0(i,e,void 0,n),n.currentTarget=null}function wm(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ch(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ch(r,a,u),s=l}}}if(Pa)throw n=qu,Pa=!1,qu=null,n}function He(n,e){var t=e[ic];t===void 0&&(t=e[ic]=new Set);var i=n+"__bubble";t.has(i)||(Em(e,n,2,!1),t.add(i))}function Ul(n,e,t){var i=0;e&&(i|=4),Em(t,n,i,e)}var Oo="_reactListening"+Math.random().toString(36).slice(2);function ro(n){if(!n[Oo]){n[Oo]=!0,Rp.forEach(function(t){t!=="selectionchange"&&(Zv.has(t)||Ul(t,!1,n),Ul(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Oo]||(e[Oo]=!0,Ul("selectionchange",!1,e))}}function Em(n,e,t,i){switch(am(e)){case 1:var r=cv;break;case 4:r=fv;break;default:r=qc}t=r.bind(null,e,t,n),r=void 0,!Xu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Bl(n,e,t,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=$i(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}qp(function(){var u=s,c=Hc(t),f=[];e:{var h=Sm.get(n);if(h!==void 0){var g=$c,_=n;switch(n){case"keypress":if(_a(t)===0)break e;case"keydown":case"keyup":g=Cv;break;case"focusin":_="focus",g=Il;break;case"focusout":_="blur",g=Il;break;case"beforeblur":case"afterblur":g=Il;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Lv;break;case _m:case xm:case ym:g=vv;break;case Mm:g=Rv;break;case"scroll":g=hv;break;case"wheel":g=Iv;break;case"copy":case"cut":case"paste":g=xv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=eh}var p=(e&4)!==0,d=!p&&n==="scroll",m=p?h!==null?h+"Capture":null:h;p=[];for(var v=u,x;v!==null;){x=v;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,m!==null&&(w=Qs(v,m),w!=null&&p.push(so(v,w,x)))),d)break;v=v.return}0<p.length&&(h=new g(h,_,null,t,c),f.push({event:h,listeners:p}))}}if((e&7)===0){e:{if(h=n==="mouseover"||n==="pointerover",g=n==="mouseout"||n==="pointerout",h&&t!==Wu&&(_=t.relatedTarget||t.fromElement)&&($i(_)||_[ii]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=t.relatedTarget||t.toElement,g=u,_=_?$i(_):null,_!==null&&(d=pr(_),_!==d||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(p=Qf,w="onMouseLeave",m="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(p=eh,w="onPointerLeave",m="onPointerEnter",v="pointer"),d=g==null?h:Vr(g),x=_==null?h:Vr(_),h=new p(w,v+"leave",g,t,c),h.target=d,h.relatedTarget=x,w=null,$i(c)===u&&(p=new p(m,v+"enter",_,t,c),p.target=x,p.relatedTarget=d,w=p),d=w,g&&_)t:{for(p=g,m=_,v=0,x=p;x;x=xr(x))v++;for(x=0,w=m;w;w=xr(w))x++;for(;0<v-x;)p=xr(p),v--;for(;0<x-v;)m=xr(m),x--;for(;v--;){if(p===m||m!==null&&p===m.alternate)break t;p=xr(p),m=xr(m)}p=null}else p=null;g!==null&&fh(f,h,g,p,!1),_!==null&&d!==null&&fh(f,d,_,p,!0)}}e:{if(h=u?Vr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var M=Bv;else if(ih(h))if(dm)M=Wv;else{M=Gv;var b=Vv}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(M=Hv);if(M&&(M=M(n,u))){hm(f,M,t,c);break e}b&&b(n,h,u),n==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Uu(h,"number",h.value)}switch(b=u?Vr(u):window,n){case"focusin":(ih(b)||b.contentEditable==="true")&&(Ur=b,Ku=u,js=null);break;case"focusout":js=Ku=Ur=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,lh(f,t,c);break;case"selectionchange":if(qv)break;case"keydown":case"keyup":lh(f,t,c)}var P;if(Kc)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Or?cm(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(um&&t.locale!=="ko"&&(Or||y!=="onCompositionStart"?y==="onCompositionEnd"&&Or&&(P=lm()):(Mi=c,Yc="value"in Mi?Mi.value:Mi.textContent,Or=!0)),b=Fa(u,y),0<b.length&&(y=new Jf(y,n,null,t,c),f.push({event:y,listeners:b}),P?y.data=P:(P=fm(t),P!==null&&(y.data=P)))),(P=Fv?zv(n,t):kv(n,t))&&(u=Fa(u,"onBeforeInput"),0<u.length&&(c=new Jf("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=P))}wm(f,e)})}function so(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Fa(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Qs(n,t),s!=null&&i.unshift(so(n,s,r)),s=Qs(n,e),s!=null&&i.push(so(n,s,r))),n=n.return}return i}function xr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function fh(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Qs(t,s),l!=null&&o.unshift(so(t,l,a))):r||(l=Qs(t,s),l!=null&&o.push(so(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Kv=/\r\n?/g,Qv=/\u0000|\uFFFD/g;function hh(n){return(typeof n=="string"?n:""+n).replace(Kv,`
`).replace(Qv,"")}function Uo(n,e,t){if(e=hh(e),hh(n)!==e&&t)throw Error(Z(425))}function za(){}var Ju=null,ec=null;function tc(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nc=typeof setTimeout=="function"?setTimeout:void 0,Jv=typeof clearTimeout=="function"?clearTimeout:void 0,dh=typeof Promise=="function"?Promise:void 0,e_=typeof queueMicrotask=="function"?queueMicrotask:typeof dh!="undefined"?function(n){return dh.resolve(null).then(n).catch(t_)}:nc;function t_(n){setTimeout(function(){throw n})}function Vl(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),to(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);to(e)}function bi(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function ph(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var gs=Math.random().toString(36).slice(2),On="__reactFiber$"+gs,oo="__reactProps$"+gs,ii="__reactContainer$"+gs,ic="__reactEvents$"+gs,n_="__reactListeners$"+gs,i_="__reactHandles$"+gs;function $i(n){var e=n[On];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ii]||t[On]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=ph(n);n!==null;){if(t=n[On])return t;n=ph(n)}return e}n=t,t=n.parentNode}return null}function yo(n){return n=n[On]||n[ii],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Vr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(Z(33))}function il(n){return n[oo]||null}var rc=[],Gr=-1;function ki(n){return{current:n}}function We(n){0>Gr||(n.current=rc[Gr],rc[Gr]=null,Gr--)}function Ge(n,e){Gr++,rc[Gr]=n.current,n.current=e}var Ni={},Et=ki(Ni),Bt=ki(!1),sr=Ni;function rs(n,e){var t=n.type.contextTypes;if(!t)return Ni;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Vt(n){return n=n.childContextTypes,n!=null}function ka(){We(Bt),We(Et)}function mh(n,e,t){if(Et.current!==Ni)throw Error(Z(168));Ge(Et,e),Ge(Bt,t)}function Tm(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Z(108,V0(n)||"Unknown",r));return $e({},t,i)}function Oa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ni,sr=Et.current,Ge(Et,n),Ge(Bt,Bt.current),!0}function gh(n,e,t){var i=n.stateNode;if(!i)throw Error(Z(169));t?(n=Tm(n,e,sr),i.__reactInternalMemoizedMergedChildContext=n,We(Bt),We(Et),Ge(Et,n)):We(Bt),Ge(Bt,t)}var Zn=null,rl=!1,Gl=!1;function Cm(n){Zn===null?Zn=[n]:Zn.push(n)}function r_(n){rl=!0,Cm(n)}function Oi(){if(!Gl&&Zn!==null){Gl=!0;var n=0,e=Ve;try{var t=Zn;for(Ve=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Zn=null,rl=!1}catch(r){throw Zn!==null&&(Zn=Zn.slice(n+1)),Kp(Wc,Oi),r}finally{Ve=e,Gl=!1}}return null}var Hr=[],Wr=0,Ua=null,Ba=0,rn=[],sn=0,or=null,Kn=1,Qn="";function Hi(n,e){Hr[Wr++]=Ba,Hr[Wr++]=Ua,Ua=n,Ba=e}function bm(n,e,t){rn[sn++]=Kn,rn[sn++]=Qn,rn[sn++]=or,or=n;var i=Kn;n=Qn;var r=32-Sn(i)-1;i&=~(1<<r),t+=1;var s=32-Sn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Kn=1<<32-Sn(e)+r|t<<r|i,Qn=s+n}else Kn=1<<s|t<<r|i,Qn=n}function Jc(n){n.return!==null&&(Hi(n,1),bm(n,1,0))}function ef(n){for(;n===Ua;)Ua=Hr[--Wr],Hr[Wr]=null,Ba=Hr[--Wr],Hr[Wr]=null;for(;n===or;)or=rn[--sn],rn[sn]=null,Qn=rn[--sn],rn[sn]=null,Kn=rn[--sn],rn[sn]=null}var Yt=null,qt=null,je=!1,xn=null;function Am(n,e){var t=an(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function vh(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Yt=n,qt=bi(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Yt=n,qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=or!==null?{id:Kn,overflow:Qn}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=an(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Yt=n,qt=null,!0):!1;default:return!1}}function sc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function oc(n){if(je){var e=qt;if(e){var t=e;if(!vh(n,e)){if(sc(n))throw Error(Z(418));e=bi(t.nextSibling);var i=Yt;e&&vh(n,e)?Am(i,t):(n.flags=n.flags&-4097|2,je=!1,Yt=n)}}else{if(sc(n))throw Error(Z(418));n.flags=n.flags&-4097|2,je=!1,Yt=n}}}function _h(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Yt=n}function Bo(n){if(n!==Yt)return!1;if(!je)return _h(n),je=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!tc(n.type,n.memoizedProps)),e&&(e=qt)){if(sc(n))throw Lm(),Error(Z(418));for(;e;)Am(n,e),e=bi(e.nextSibling)}if(_h(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(Z(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){qt=bi(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}qt=null}}else qt=Yt?bi(n.stateNode.nextSibling):null;return!0}function Lm(){for(var n=qt;n;)n=bi(n.nextSibling)}function ss(){qt=Yt=null,je=!1}function tf(n){xn===null?xn=[n]:xn.push(n)}var s_=oi.ReactCurrentBatchConfig;function vn(n,e){if(n&&n.defaultProps){e=$e({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Va=ki(null),Ga=null,jr=null,nf=null;function rf(){nf=jr=Ga=null}function sf(n){var e=Va.current;We(Va),n._currentValue=e}function ac(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Jr(n,e){Ga=n,nf=jr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(Ot=!0),n.firstContext=null)}function un(n){var e=n._currentValue;if(nf!==n)if(n={context:n,memoizedValue:e,next:null},jr===null){if(Ga===null)throw Error(Z(308));jr=n,Ga.dependencies={lanes:0,firstContext:n}}else jr=jr.next=n;return e}var Zi=null;function of(n){Zi===null?Zi=[n]:Zi.push(n)}function Pm(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,of(e)):(t.next=r.next,r.next=t),e.interleaved=t,ri(n,i)}function ri(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var vi=!1;function af(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rm(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Jn(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ai(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(De&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ri(n,t)}return r=i.interleaved,r===null?(e.next=e,of(i)):(e.next=r.next,r.next=e),i.interleaved=e,ri(n,t)}function xa(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,jc(n,t)}}function xh(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Ha(n,e,t,i){var r=n.updateQueue;vi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,p=a;switch(h=e,g=t,p.tag){case 1:if(_=p.payload,typeof _=="function"){f=_.call(g,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=p.payload,h=typeof _=="function"?_.call(g,f,h):_,h==null)break e;f=$e({},f,h);break e;case 2:vi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);lr|=o,n.lanes=o,n.memoizedState=f}}function yh(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(Z(191,r));r.call(i)}}}var Dm=new Pp.Component().refs;function lc(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:$e({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var sl={isMounted:function(n){return(n=n._reactInternals)?pr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Lt(),r=Pi(n),s=Jn(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ai(n,s,r),e!==null&&(wn(e,n,r,i),xa(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Lt(),r=Pi(n),s=Jn(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ai(n,s,r),e!==null&&(wn(e,n,r,i),xa(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Lt(),i=Pi(n),r=Jn(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ai(n,r,i),e!==null&&(wn(e,n,i,t),xa(e,n,i))}};function Mh(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!io(t,i)||!io(r,s):!0}function Im(n,e,t){var i=!1,r=Ni,s=e.contextType;return typeof s=="object"&&s!==null?s=un(s):(r=Vt(e)?sr:Et.current,i=e.contextTypes,s=(i=i!=null)?rs(n,r):Ni),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=sl,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Sh(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&sl.enqueueReplaceState(e,e.state,null)}function uc(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=Dm,af(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=un(s):(s=Vt(e)?sr:Et.current,r.context=rs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(lc(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&sl.enqueueReplaceState(r,r.state,null),Ha(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function bs(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Z(309));var i=t.stateNode}if(!i)throw Error(Z(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Dm&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(Z(284));if(!t._owner)throw Error(Z(290,n))}return n}function Vo(n,e){throw n=Object.prototype.toString.call(e),Error(Z(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function wh(n){var e=n._init;return e(n._payload)}function Nm(n){function e(m,v){if(n){var x=m.deletions;x===null?(m.deletions=[v],m.flags|=16):x.push(v)}}function t(m,v){if(!n)return null;for(;v!==null;)e(m,v),v=v.sibling;return null}function i(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function r(m,v){return m=Ri(m,v),m.index=0,m.sibling=null,m}function s(m,v,x){return m.index=x,n?(x=m.alternate,x!==null?(x=x.index,x<v?(m.flags|=2,v):x):(m.flags|=2,v)):(m.flags|=1048576,v)}function o(m){return n&&m.alternate===null&&(m.flags|=2),m}function a(m,v,x,w){return v===null||v.tag!==6?(v=$l(x,m.mode,w),v.return=m,v):(v=r(v,x),v.return=m,v)}function l(m,v,x,w){var M=x.type;return M===kr?c(m,v,x.props.children,w,x.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===gi&&wh(M)===v.type)?(w=r(v,x.props),w.ref=bs(m,v,x),w.return=m,w):(w=Ta(x.type,x.key,x.props,null,m.mode,w),w.ref=bs(m,v,x),w.return=m,w)}function u(m,v,x,w){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Zl(x,m.mode,w),v.return=m,v):(v=r(v,x.children||[]),v.return=m,v)}function c(m,v,x,w,M){return v===null||v.tag!==7?(v=nr(x,m.mode,w,M),v.return=m,v):(v=r(v,x),v.return=m,v)}function f(m,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=$l(""+v,m.mode,x),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Po:return x=Ta(v.type,v.key,v.props,null,m.mode,x),x.ref=bs(m,null,v),x.return=m,x;case zr:return v=Zl(v,m.mode,x),v.return=m,v;case gi:var w=v._init;return f(m,w(v._payload),x)}if(Fs(v)||Ss(v))return v=nr(v,m.mode,x,null),v.return=m,v;Vo(m,v)}return null}function h(m,v,x,w){var M=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return M!==null?null:a(m,v,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Po:return x.key===M?l(m,v,x,w):null;case zr:return x.key===M?u(m,v,x,w):null;case gi:return M=x._init,h(m,v,M(x._payload),w)}if(Fs(x)||Ss(x))return M!==null?null:c(m,v,x,w,null);Vo(m,x)}return null}function g(m,v,x,w,M){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(x)||null,a(v,m,""+w,M);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Po:return m=m.get(w.key===null?x:w.key)||null,l(v,m,w,M);case zr:return m=m.get(w.key===null?x:w.key)||null,u(v,m,w,M);case gi:var b=w._init;return g(m,v,x,b(w._payload),M)}if(Fs(w)||Ss(w))return m=m.get(x)||null,c(v,m,w,M,null);Vo(v,w)}return null}function _(m,v,x,w){for(var M=null,b=null,P=v,y=v=0,A=null;P!==null&&y<x.length;y++){P.index>y?(A=P,P=null):A=P.sibling;var N=h(m,P,x[y],w);if(N===null){P===null&&(P=A);break}n&&P&&N.alternate===null&&e(m,P),v=s(N,v,y),b===null?M=N:b.sibling=N,b=N,P=A}if(y===x.length)return t(m,P),je&&Hi(m,y),M;if(P===null){for(;y<x.length;y++)P=f(m,x[y],w),P!==null&&(v=s(P,v,y),b===null?M=P:b.sibling=P,b=P);return je&&Hi(m,y),M}for(P=i(m,P);y<x.length;y++)A=g(P,m,y,x[y],w),A!==null&&(n&&A.alternate!==null&&P.delete(A.key===null?y:A.key),v=s(A,v,y),b===null?M=A:b.sibling=A,b=A);return n&&P.forEach(function(O){return e(m,O)}),je&&Hi(m,y),M}function p(m,v,x,w){var M=Ss(x);if(typeof M!="function")throw Error(Z(150));if(x=M.call(x),x==null)throw Error(Z(151));for(var b=M=null,P=v,y=v=0,A=null,N=x.next();P!==null&&!N.done;y++,N=x.next()){P.index>y?(A=P,P=null):A=P.sibling;var O=h(m,P,N.value,w);if(O===null){P===null&&(P=A);break}n&&P&&O.alternate===null&&e(m,P),v=s(O,v,y),b===null?M=O:b.sibling=O,b=O,P=A}if(N.done)return t(m,P),je&&Hi(m,y),M;if(P===null){for(;!N.done;y++,N=x.next())N=f(m,N.value,w),N!==null&&(v=s(N,v,y),b===null?M=N:b.sibling=N,b=N);return je&&Hi(m,y),M}for(P=i(m,P);!N.done;y++,N=x.next())N=g(P,m,y,N.value,w),N!==null&&(n&&N.alternate!==null&&P.delete(N.key===null?y:N.key),v=s(N,v,y),b===null?M=N:b.sibling=N,b=N);return n&&P.forEach(function(oe){return e(m,oe)}),je&&Hi(m,y),M}function d(m,v,x,w){if(typeof x=="object"&&x!==null&&x.type===kr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Po:e:{for(var M=x.key,b=v;b!==null;){if(b.key===M){if(M=x.type,M===kr){if(b.tag===7){t(m,b.sibling),v=r(b,x.props.children),v.return=m,m=v;break e}}else if(b.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===gi&&wh(M)===b.type){t(m,b.sibling),v=r(b,x.props),v.ref=bs(m,b,x),v.return=m,m=v;break e}t(m,b);break}else e(m,b);b=b.sibling}x.type===kr?(v=nr(x.props.children,m.mode,w,x.key),v.return=m,m=v):(w=Ta(x.type,x.key,x.props,null,m.mode,w),w.ref=bs(m,v,x),w.return=m,m=w)}return o(m);case zr:e:{for(b=x.key;v!==null;){if(v.key===b)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(m,v.sibling),v=r(v,x.children||[]),v.return=m,m=v;break e}else{t(m,v);break}else e(m,v);v=v.sibling}v=Zl(x,m.mode,w),v.return=m,m=v}return o(m);case gi:return b=x._init,d(m,v,b(x._payload),w)}if(Fs(x))return _(m,v,x,w);if(Ss(x))return p(m,v,x,w);Vo(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(m,v.sibling),v=r(v,x),v.return=m,m=v):(t(m,v),v=$l(x,m.mode,w),v.return=m,m=v),o(m)):t(m,v)}return d}var os=Nm(!0),Fm=Nm(!1),Mo={},Gn=ki(Mo),ao=ki(Mo),lo=ki(Mo);function Ki(n){if(n===Mo)throw Error(Z(174));return n}function lf(n,e){switch(Ge(lo,e),Ge(ao,n),Ge(Gn,Mo),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vu(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Vu(e,n)}We(Gn),Ge(Gn,e)}function as(){We(Gn),We(ao),We(lo)}function zm(n){Ki(lo.current);var e=Ki(Gn.current),t=Vu(e,n.type);e!==t&&(Ge(ao,n),Ge(Gn,t))}function uf(n){ao.current===n&&(We(Gn),We(ao))}var qe=ki(0);function Wa(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hl=[];function cf(){for(var n=0;n<Hl.length;n++)Hl[n]._workInProgressVersionPrimary=null;Hl.length=0}var ya=oi.ReactCurrentDispatcher,Wl=oi.ReactCurrentBatchConfig,ar=0,Ye=null,ot=null,ft=null,ja=!1,Xs=!1,uo=0,o_=0;function xt(){throw Error(Z(321))}function ff(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!bn(n[t],e[t]))return!1;return!0}function hf(n,e,t,i,r,s){if(ar=s,Ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ya.current=n===null||n.memoizedState===null?c_:f_,n=t(i,r),Xs){s=0;do{if(Xs=!1,uo=0,25<=s)throw Error(Z(301));s+=1,ft=ot=null,e.updateQueue=null,ya.current=h_,n=t(i,r)}while(Xs)}if(ya.current=Xa,e=ot!==null&&ot.next!==null,ar=0,ft=ot=Ye=null,ja=!1,e)throw Error(Z(300));return n}function df(){var n=uo!==0;return uo=0,n}function zn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?Ye.memoizedState=ft=n:ft=ft.next=n,ft}function cn(){if(ot===null){var n=Ye.alternate;n=n!==null?n.memoizedState:null}else n=ot.next;var e=ft===null?Ye.memoizedState:ft.next;if(e!==null)ft=e,ot=n;else{if(n===null)throw Error(Z(310));ot=n,n={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},ft===null?Ye.memoizedState=ft=n:ft=ft.next=n}return ft}function co(n,e){return typeof e=="function"?e(n):e}function jl(n){var e=cn(),t=e.queue;if(t===null)throw Error(Z(311));t.lastRenderedReducer=n;var i=ot,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ar&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Ye.lanes|=c,lr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,bn(i,e.memoizedState)||(Ot=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Ye.lanes|=s,lr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Xl(n){var e=cn(),t=e.queue;if(t===null)throw Error(Z(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);bn(s,e.memoizedState)||(Ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function km(){}function Om(n,e){var t=Ye,i=cn(),r=e(),s=!bn(i.memoizedState,r);if(s&&(i.memoizedState=r,Ot=!0),i=i.queue,pf(Vm.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||ft!==null&&ft.memoizedState.tag&1){if(t.flags|=2048,fo(9,Bm.bind(null,t,i,r,e),void 0,null),ht===null)throw Error(Z(349));(ar&30)!==0||Um(t,e,r)}return r}function Um(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ye.updateQueue,e===null?(e={lastEffect:null,stores:null},Ye.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Bm(n,e,t,i){e.value=t,e.getSnapshot=i,Gm(e)&&Hm(n)}function Vm(n,e,t){return t(function(){Gm(e)&&Hm(n)})}function Gm(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!bn(n,t)}catch{return!0}}function Hm(n){var e=ri(n,1);e!==null&&wn(e,n,1,-1)}function Eh(n){var e=zn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:co,lastRenderedState:n},e.queue=n,n=n.dispatch=u_.bind(null,Ye,n),[e.memoizedState,n]}function fo(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Ye.updateQueue,e===null?(e={lastEffect:null,stores:null},Ye.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Wm(){return cn().memoizedState}function Ma(n,e,t,i){var r=zn();Ye.flags|=n,r.memoizedState=fo(1|e,t,void 0,i===void 0?null:i)}function ol(n,e,t,i){var r=cn();i=i===void 0?null:i;var s=void 0;if(ot!==null){var o=ot.memoizedState;if(s=o.destroy,i!==null&&ff(i,o.deps)){r.memoizedState=fo(e,t,s,i);return}}Ye.flags|=n,r.memoizedState=fo(1|e,t,s,i)}function Th(n,e){return Ma(8390656,8,n,e)}function pf(n,e){return ol(2048,8,n,e)}function jm(n,e){return ol(4,2,n,e)}function Xm(n,e){return ol(4,4,n,e)}function qm(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Ym(n,e,t){return t=t!=null?t.concat([n]):null,ol(4,4,qm.bind(null,e,n),t)}function mf(){}function $m(n,e){var t=cn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&ff(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Zm(n,e){var t=cn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&ff(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Km(n,e,t){return(ar&21)===0?(n.baseState&&(n.baseState=!1,Ot=!0),n.memoizedState=t):(bn(t,e)||(t=em(),Ye.lanes|=t,lr|=t,n.baseState=!0),e)}function a_(n,e){var t=Ve;Ve=t!==0&&4>t?t:4,n(!0);var i=Wl.transition;Wl.transition={};try{n(!1),e()}finally{Ve=t,Wl.transition=i}}function Qm(){return cn().memoizedState}function l_(n,e,t){var i=Pi(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Jm(n))eg(e,t);else if(t=Pm(n,e,t,i),t!==null){var r=Lt();wn(t,n,i,r),tg(t,e,i)}}function u_(n,e,t){var i=Pi(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Jm(n))eg(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,bn(a,o)){var l=e.interleaved;l===null?(r.next=r,of(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Pm(n,e,r,i),t!==null&&(r=Lt(),wn(t,n,i,r),tg(t,e,i))}}function Jm(n){var e=n.alternate;return n===Ye||e!==null&&e===Ye}function eg(n,e){Xs=ja=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function tg(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,jc(n,t)}}var Xa={readContext:un,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},c_={readContext:un,useCallback:function(n,e){return zn().memoizedState=[n,e===void 0?null:e],n},useContext:un,useEffect:Th,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ma(4194308,4,qm.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ma(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ma(4,2,n,e)},useMemo:function(n,e){var t=zn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=zn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=l_.bind(null,Ye,n),[i.memoizedState,n]},useRef:function(n){var e=zn();return n={current:n},e.memoizedState=n},useState:Eh,useDebugValue:mf,useDeferredValue:function(n){return zn().memoizedState=n},useTransition:function(){var n=Eh(!1),e=n[0];return n=a_.bind(null,n[1]),zn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Ye,r=zn();if(je){if(t===void 0)throw Error(Z(407));t=t()}else{if(t=e(),ht===null)throw Error(Z(349));(ar&30)!==0||Um(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Th(Vm.bind(null,i,s,n),[n]),i.flags|=2048,fo(9,Bm.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=zn(),e=ht.identifierPrefix;if(je){var t=Qn,i=Kn;t=(i&~(1<<32-Sn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=uo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=o_++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},f_={readContext:un,useCallback:$m,useContext:un,useEffect:pf,useImperativeHandle:Ym,useInsertionEffect:jm,useLayoutEffect:Xm,useMemo:Zm,useReducer:jl,useRef:Wm,useState:function(){return jl(co)},useDebugValue:mf,useDeferredValue:function(n){var e=cn();return Km(e,ot.memoizedState,n)},useTransition:function(){var n=jl(co)[0],e=cn().memoizedState;return[n,e]},useMutableSource:km,useSyncExternalStore:Om,useId:Qm,unstable_isNewReconciler:!1},h_={readContext:un,useCallback:$m,useContext:un,useEffect:pf,useImperativeHandle:Ym,useInsertionEffect:jm,useLayoutEffect:Xm,useMemo:Zm,useReducer:Xl,useRef:Wm,useState:function(){return Xl(co)},useDebugValue:mf,useDeferredValue:function(n){var e=cn();return ot===null?e.memoizedState=n:Km(e,ot.memoizedState,n)},useTransition:function(){var n=Xl(co)[0],e=cn().memoizedState;return[n,e]},useMutableSource:km,useSyncExternalStore:Om,useId:Qm,unstable_isNewReconciler:!1};function ls(n,e){try{var t="",i=e;do t+=B0(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function ql(n,e,t){return{value:n,source:null,stack:t!=null?t:null,digest:e!=null?e:null}}function cc(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var d_=typeof WeakMap=="function"?WeakMap:Map;function ng(n,e,t){t=Jn(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Ya||(Ya=!0,yc=i),cc(n,e)},t}function ig(n,e,t){t=Jn(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){cc(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){cc(n,e),typeof i!="function"&&(Li===null?Li=new Set([this]):Li.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Ch(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new d_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=b_.bind(null,n,e,t),e.then(n,n))}function bh(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Ah(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Jn(-1,1),e.tag=2,Ai(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var p_=oi.ReactCurrentOwner,Ot=!1;function bt(n,e,t,i){e.child=n===null?Fm(e,null,t,i):os(e,n.child,t,i)}function Lh(n,e,t,i,r){t=t.render;var s=e.ref;return Jr(e,r),i=hf(n,e,t,i,s,r),t=df(),n!==null&&!Ot?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,si(n,e,r)):(je&&t&&Jc(e),e.flags|=1,bt(n,e,i,r),e.child)}function Ph(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!wf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,rg(n,e,s,i,r)):(n=Ta(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,(n.lanes&r)===0){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:io,t(o,i)&&n.ref===e.ref)return si(n,e,r)}return e.flags|=1,n=Ri(s,i),n.ref=e.ref,n.return=e,e.child=n}function rg(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(io(s,i)&&n.ref===e.ref)if(Ot=!1,e.pendingProps=i=s,(n.lanes&r)!==0)(n.flags&131072)!==0&&(Ot=!0);else return e.lanes=n.lanes,si(n,e,r)}return fc(n,e,t,i,r)}function sg(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(qr,Xt),Xt|=t;else{if((t&1073741824)===0)return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Ge(qr,Xt),Xt|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Ge(qr,Xt),Xt|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Ge(qr,Xt),Xt|=i;return bt(n,e,r,t),e.child}function og(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function fc(n,e,t,i,r){var s=Vt(t)?sr:Et.current;return s=rs(e,s),Jr(e,r),t=hf(n,e,t,i,s,r),i=df(),n!==null&&!Ot?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,si(n,e,r)):(je&&i&&Jc(e),e.flags|=1,bt(n,e,t,r),e.child)}function Rh(n,e,t,i,r){if(Vt(t)){var s=!0;Oa(e)}else s=!1;if(Jr(e,r),e.stateNode===null)Sa(n,e),Im(e,t,i),uc(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=un(u):(u=Vt(t)?sr:Et.current,u=rs(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Sh(e,o,i,u),vi=!1;var h=e.memoizedState;o.state=h,Ha(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Bt.current||vi?(typeof c=="function"&&(lc(e,t,c,i),l=e.memoizedState),(a=vi||Mh(e,t,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Rm(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:vn(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=un(l):(l=Vt(t)?sr:Et.current,l=rs(e,l));var g=t.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Sh(e,o,i,l),vi=!1,h=e.memoizedState,o.state=h,Ha(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||Bt.current||vi?(typeof g=="function"&&(lc(e,t,g,i),_=e.memoizedState),(u=vi||Mh(e,t,u,i,h,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return hc(n,e,t,i,s,r)}function hc(n,e,t,i,r,s){og(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&gh(e,t,!1),si(n,e,s);i=e.stateNode,p_.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=os(e,n.child,null,s),e.child=os(e,null,a,s)):bt(n,e,a,s),e.memoizedState=i.state,r&&gh(e,t,!0),e.child}function ag(n){var e=n.stateNode;e.pendingContext?mh(n,e.pendingContext,e.pendingContext!==e.context):e.context&&mh(n,e.context,!1),lf(n,e.containerInfo)}function Dh(n,e,t,i,r){return ss(),tf(r),e.flags|=256,bt(n,e,t,i),e.child}var dc={dehydrated:null,treeContext:null,retryLane:0};function pc(n){return{baseLanes:n,cachePool:null,transitions:null}}function lg(n,e,t){var i=e.pendingProps,r=qe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Ge(qe,r&1),n===null)return oc(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ul(o,i,0,null),n=nr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=pc(t),e.memoizedState=dc,n):gf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return m_(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ri(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ri(a,s):(s=nr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?pc(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=dc,i}return s=n.child,n=s.sibling,i=Ri(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function gf(n,e){return e=ul({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Go(n,e,t,i){return i!==null&&tf(i),os(e,n.child,null,t),n=gf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function m_(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=ql(Error(Z(422))),Go(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ul({mode:"visible",children:i.children},r,0,null),s=nr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&os(e,n.child,null,o),e.child.memoizedState=pc(o),e.memoizedState=dc,s);if((e.mode&1)===0)return Go(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Z(419)),i=ql(s,i,void 0),Go(n,e,o,i)}if(a=(o&n.childLanes)!==0,Ot||a){if(i=ht,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ri(n,r),wn(i,n,r,-1))}return Sf(),i=ql(Error(Z(421))),Go(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=A_.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,qt=bi(r.nextSibling),Yt=e,je=!0,xn=null,n!==null&&(rn[sn++]=Kn,rn[sn++]=Qn,rn[sn++]=or,Kn=n.id,Qn=n.overflow,or=e),e=gf(e,i.children),e.flags|=4096,e)}function Ih(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),ac(n.return,e,t)}function Yl(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function ug(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(bt(n,e,i.children,t),i=qe.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ih(n,t,e);else if(n.tag===19)Ih(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Ge(qe,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Wa(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Yl(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Wa(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Yl(e,!0,t,null,s);break;case"together":Yl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sa(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function si(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),lr|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(Z(153));if(e.child!==null){for(n=e.child,t=Ri(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ri(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function g_(n,e,t){switch(e.tag){case 3:ag(e),ss();break;case 5:zm(e);break;case 1:Vt(e.type)&&Oa(e);break;case 4:lf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ge(Va,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ge(qe,qe.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?lg(n,e,t):(Ge(qe,qe.current&1),n=si(n,e,t),n!==null?n.sibling:null);Ge(qe,qe.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return ug(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ge(qe,qe.current),i)break;return null;case 22:case 23:return e.lanes=0,sg(n,e,t)}return si(n,e,t)}var cg,mc,fg,hg;cg=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};mc=function(){};fg=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Ki(Gn.current);var s=null;switch(t){case"input":r=ku(n,r),i=ku(n,i),s=[];break;case"select":r=$e({},r,{value:void 0}),i=$e({},i,{value:void 0}),s=[];break;case"textarea":r=Bu(n,r),i=Bu(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=za)}Gu(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&He("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};hg=function(n,e,t,i){t!==i&&(e.flags|=4)};function As(n,e){if(!je)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function yt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function v_(n,e,t){var i=e.pendingProps;switch(ef(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(e),null;case 1:return Vt(e.type)&&ka(),yt(e),null;case 3:return i=e.stateNode,as(),We(Bt),We(Et),cf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Bo(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,xn!==null&&(wc(xn),xn=null))),mc(n,e),yt(e),null;case 5:uf(e);var r=Ki(lo.current);if(t=e.type,n!==null&&e.stateNode!=null)fg(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Z(166));return yt(e),null}if(n=Ki(Gn.current),Bo(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[On]=e,i[oo]=s,n=(e.mode&1)!==0,t){case"dialog":He("cancel",i),He("close",i);break;case"iframe":case"object":case"embed":He("load",i);break;case"video":case"audio":for(r=0;r<ks.length;r++)He(ks[r],i);break;case"source":He("error",i);break;case"img":case"image":case"link":He("error",i),He("load",i);break;case"details":He("toggle",i);break;case"input":Gf(i,s),He("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},He("invalid",i);break;case"textarea":Wf(i,s),He("invalid",i)}Gu(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Uo(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Uo(i.textContent,a,n),r=["children",""+a]):Zs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&He("scroll",i)}switch(t){case"input":Ro(i),Hf(i,s,!0);break;case"textarea":Ro(i),jf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=za)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Up(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[On]=e,n[oo]=i,cg(n,e,!1,!1),e.stateNode=n;e:{switch(o=Hu(t,i),t){case"dialog":He("cancel",n),He("close",n),r=i;break;case"iframe":case"object":case"embed":He("load",n),r=i;break;case"video":case"audio":for(r=0;r<ks.length;r++)He(ks[r],n);r=i;break;case"source":He("error",n),r=i;break;case"img":case"image":case"link":He("error",n),He("load",n),r=i;break;case"details":He("toggle",n),r=i;break;case"input":Gf(n,i),r=ku(n,i),He("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=$e({},i,{value:void 0}),He("invalid",n);break;case"textarea":Wf(n,i),r=Bu(n,i),He("invalid",n);break;default:r=i}Gu(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Gp(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bp(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ks(n,l):typeof l=="number"&&Ks(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&He("scroll",n):l!=null&&Uc(n,s,l,o))}switch(t){case"input":Ro(n),Hf(n,i,!1);break;case"textarea":Ro(n),jf(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ii(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?$r(n,!!i.multiple,s,!1):i.defaultValue!=null&&$r(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=za)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yt(e),null;case 6:if(n&&e.stateNode!=null)hg(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Z(166));if(t=Ki(lo.current),Ki(Gn.current),Bo(e)){if(i=e.stateNode,t=e.memoizedProps,i[On]=e,(s=i.nodeValue!==t)&&(n=Yt,n!==null))switch(n.tag){case 3:Uo(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Uo(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[On]=e,e.stateNode=i}return yt(e),null;case 13:if(We(qe),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(je&&qt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Lm(),ss(),e.flags|=98560,s=!1;else if(s=Bo(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(Z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Z(317));s[On]=e}else ss(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;yt(e),s=!1}else xn!==null&&(wc(xn),xn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(qe.current&1)!==0?at===0&&(at=3):Sf())),e.updateQueue!==null&&(e.flags|=4),yt(e),null);case 4:return as(),mc(n,e),n===null&&ro(e.stateNode.containerInfo),yt(e),null;case 10:return sf(e.type._context),yt(e),null;case 17:return Vt(e.type)&&ka(),yt(e),null;case 19:if(We(qe),s=e.memoizedState,s===null)return yt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)As(s,!1);else{if(at!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(o=Wa(n),o!==null){for(e.flags|=128,As(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Ge(qe,qe.current&1|2),e.child}n=n.sibling}s.tail!==null&&Qe()>us&&(e.flags|=128,i=!0,As(s,!1),e.lanes=4194304)}else{if(!i)if(n=Wa(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),As(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!je)return yt(e),null}else 2*Qe()-s.renderingStartTime>us&&t!==1073741824&&(e.flags|=128,i=!0,As(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Qe(),e.sibling=null,t=qe.current,Ge(qe,i?t&1|2:t&1),e):(yt(e),null);case 22:case 23:return Mf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(Xt&1073741824)!==0&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),null;case 24:return null;case 25:return null}throw Error(Z(156,e.tag))}function __(n,e){switch(ef(e),e.tag){case 1:return Vt(e.type)&&ka(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return as(),We(Bt),We(Et),cf(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return uf(e),null;case 13:if(We(qe),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(Z(340));ss()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return We(qe),null;case 4:return as(),null;case 10:return sf(e.type._context),null;case 22:case 23:return Mf(),null;case 24:return null;default:return null}}var Ho=!1,St=!1,x_=typeof WeakSet=="function"?WeakSet:Set,he=null;function Xr(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ke(n,e,i)}else t.current=null}function gc(n,e,t){try{t()}catch(i){Ke(n,e,i)}}var Nh=!1;function y_(n,e){if(Ju=Ia,n=gm(),Qc(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,h=null;t:for(;;){for(var g;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(ec={focusedElem:n,selectionRange:t},Ia=!1,he=e;he!==null;)if(e=he,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,he=n;else for(;he!==null;){e=he;try{var _=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var p=_.memoizedProps,d=_.memoizedState,m=e.stateNode,v=m.getSnapshotBeforeUpdate(e.elementType===e.type?p:vn(e.type,p),d);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch(w){Ke(e,e.return,w)}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}return _=Nh,Nh=!1,_}function qs(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&gc(e,t,s)}r=r.next}while(r!==i)}}function al(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function vc(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function dg(n){var e=n.alternate;e!==null&&(n.alternate=null,dg(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[On],delete e[oo],delete e[ic],delete e[n_],delete e[i_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function pg(n){return n.tag===5||n.tag===3||n.tag===4}function Fh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||pg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function _c(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=za));else if(i!==4&&(n=n.child,n!==null))for(_c(n,e,t),n=n.sibling;n!==null;)_c(n,e,t),n=n.sibling}function xc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(xc(n,e,t),n=n.sibling;n!==null;)xc(n,e,t),n=n.sibling}var mt=null,_n=!1;function li(n,e,t){for(t=t.child;t!==null;)mg(n,e,t),t=t.sibling}function mg(n,e,t){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(Ja,t)}catch{}switch(t.tag){case 5:St||Xr(t,e);case 6:var i=mt,r=_n;mt=null,li(n,e,t),mt=i,_n=r,mt!==null&&(_n?(n=mt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):mt.removeChild(t.stateNode));break;case 18:mt!==null&&(_n?(n=mt,t=t.stateNode,n.nodeType===8?Vl(n.parentNode,t):n.nodeType===1&&Vl(n,t),to(n)):Vl(mt,t.stateNode));break;case 4:i=mt,r=_n,mt=t.stateNode.containerInfo,_n=!0,li(n,e,t),mt=i,_n=r;break;case 0:case 11:case 14:case 15:if(!St&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&gc(t,e,o),r=r.next}while(r!==i)}li(n,e,t);break;case 1:if(!St&&(Xr(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Ke(t,e,a)}li(n,e,t);break;case 21:li(n,e,t);break;case 22:t.mode&1?(St=(i=St)||t.memoizedState!==null,li(n,e,t),St=i):li(n,e,t);break;default:li(n,e,t)}}function zh(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new x_),e.forEach(function(i){var r=L_.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function hn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:mt=a.stateNode,_n=!1;break e;case 3:mt=a.stateNode.containerInfo,_n=!0;break e;case 4:mt=a.stateNode.containerInfo,_n=!0;break e}a=a.return}if(mt===null)throw Error(Z(160));mg(s,o,r),mt=null,_n=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Ke(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)gg(e,n),e=e.sibling}function gg(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(hn(e,n),In(n),i&4){try{qs(3,n,n.return),al(3,n)}catch(p){Ke(n,n.return,p)}try{qs(5,n,n.return)}catch(p){Ke(n,n.return,p)}}break;case 1:hn(e,n),In(n),i&512&&t!==null&&Xr(t,t.return);break;case 5:if(hn(e,n),In(n),i&512&&t!==null&&Xr(t,t.return),n.flags&32){var r=n.stateNode;try{Ks(r,"")}catch(p){Ke(n,n.return,p)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&kp(r,s),Hu(a,o);var u=Hu(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Gp(r,f):c==="dangerouslySetInnerHTML"?Bp(r,f):c==="children"?Ks(r,f):Uc(r,c,f,u)}switch(a){case"input":Ou(r,s);break;case"textarea":Op(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?$r(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?$r(r,!!s.multiple,s.defaultValue,!0):$r(r,!!s.multiple,s.multiple?[]:"",!1))}r[oo]=s}catch(p){Ke(n,n.return,p)}}break;case 6:if(hn(e,n),In(n),i&4){if(n.stateNode===null)throw Error(Z(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(p){Ke(n,n.return,p)}}break;case 3:if(hn(e,n),In(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{to(e.containerInfo)}catch(p){Ke(n,n.return,p)}break;case 4:hn(e,n),In(n);break;case 13:hn(e,n),In(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(xf=Qe())),i&4&&zh(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(St=(u=St)||c,hn(e,n),St=u):hn(e,n),In(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&(n.mode&1)!==0)for(he=n,c=n.child;c!==null;){for(f=he=c;he!==null;){switch(h=he,g=h.child,h.tag){case 0:case 11:case 14:case 15:qs(4,h,h.return);break;case 1:Xr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(p){Ke(i,t,p)}}break;case 5:Xr(h,h.return);break;case 22:if(h.memoizedState!==null){Oh(f);continue}}g!==null?(g.return=h,he=g):Oh(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Vp("display",o))}catch(p){Ke(n,n.return,p)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(p){Ke(n,n.return,p)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:hn(e,n),In(n),i&4&&zh(n);break;case 21:break;default:hn(e,n),In(n)}}function In(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(pg(t)){var i=t;break e}t=t.return}throw Error(Z(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ks(r,""),i.flags&=-33);var s=Fh(n);xc(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Fh(n);_c(n,a,o);break;default:throw Error(Z(161))}}catch(l){Ke(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function M_(n,e,t){he=n,vg(n)}function vg(n,e,t){for(var i=(n.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ho;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||St;a=Ho;var u=St;if(Ho=o,(St=l)&&!u)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?Uh(r):l!==null?(l.return=o,he=l):Uh(r);for(;s!==null;)he=s,vg(s),s=s.sibling;he=r,Ho=a,St=u}kh(n)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,he=s):kh(n)}}function kh(n){for(;he!==null;){var e=he;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:St||al(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!St)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:vn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&yh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}yh(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&to(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Z(163))}St||e.flags&512&&vc(e)}catch(h){Ke(e,e.return,h)}}if(e===n){he=null;break}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}}function Oh(n){for(;he!==null;){var e=he;if(e===n){he=null;break}var t=e.sibling;if(t!==null){t.return=e.return,he=t;break}he=e.return}}function Uh(n){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{al(4,e)}catch(l){Ke(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ke(e,r,l)}}var s=e.return;try{vc(e)}catch(l){Ke(e,s,l)}break;case 5:var o=e.return;try{vc(e)}catch(l){Ke(e,o,l)}}}catch(l){Ke(e,e.return,l)}if(e===n){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var S_=Math.ceil,qa=oi.ReactCurrentDispatcher,vf=oi.ReactCurrentOwner,ln=oi.ReactCurrentBatchConfig,De=0,ht=null,nt=null,gt=0,Xt=0,qr=ki(0),at=0,ho=null,lr=0,ll=0,_f=0,Ys=null,Nt=null,xf=0,us=1/0,Yn=null,Ya=!1,yc=null,Li=null,Wo=!1,Si=null,$a=0,$s=0,Mc=null,wa=-1,Ea=0;function Lt(){return(De&6)!==0?Qe():wa!==-1?wa:wa=Qe()}function Pi(n){return(n.mode&1)===0?1:(De&2)!==0&&gt!==0?gt&-gt:s_.transition!==null?(Ea===0&&(Ea=em()),Ea):(n=Ve,n!==0||(n=window.event,n=n===void 0?16:am(n.type)),n)}function wn(n,e,t,i){if(50<$s)throw $s=0,Mc=null,Error(Z(185));_o(n,t,i),((De&2)===0||n!==ht)&&(n===ht&&((De&2)===0&&(ll|=t),at===4&&yi(n,gt)),Gt(n,i),t===1&&De===0&&(e.mode&1)===0&&(us=Qe()+500,rl&&Oi()))}function Gt(n,e){var t=n.callbackNode;sv(n,e);var i=Da(n,n===ht?gt:0);if(i===0)t!==null&&Yf(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Yf(t),e===1)n.tag===0?r_(Bh.bind(null,n)):Cm(Bh.bind(null,n)),e_(function(){(De&6)===0&&Oi()}),t=null;else{switch(tm(i)){case 1:t=Wc;break;case 4:t=Qp;break;case 16:t=Ra;break;case 536870912:t=Jp;break;default:t=Ra}t=Tg(t,_g.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function _g(n,e){if(wa=-1,Ea=0,(De&6)!==0)throw Error(Z(327));var t=n.callbackNode;if(es()&&n.callbackNode!==t)return null;var i=Da(n,n===ht?gt:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=Za(n,i);else{e=i;var r=De;De|=2;var s=yg();(ht!==n||gt!==e)&&(Yn=null,us=Qe()+500,tr(n,e));do try{T_();break}catch(a){xg(n,a)}while(1);rf(),qa.current=s,De=r,nt!==null?e=0:(ht=null,gt=0,e=at)}if(e!==0){if(e===2&&(r=Yu(n),r!==0&&(i=r,e=Sc(n,r))),e===1)throw t=ho,tr(n,0),yi(n,i),Gt(n,Qe()),t;if(e===6)yi(n,i);else{if(r=n.current.alternate,(i&30)===0&&!w_(r)&&(e=Za(n,i),e===2&&(s=Yu(n),s!==0&&(i=s,e=Sc(n,s))),e===1))throw t=ho,tr(n,0),yi(n,i),Gt(n,Qe()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(Z(345));case 2:Wi(n,Nt,Yn);break;case 3:if(yi(n,i),(i&130023424)===i&&(e=xf+500-Qe(),10<e)){if(Da(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Lt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=nc(Wi.bind(null,n,Nt,Yn),e);break}Wi(n,Nt,Yn);break;case 4:if(yi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Sn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Qe()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*S_(i/1960))-i,10<i){n.timeoutHandle=nc(Wi.bind(null,n,Nt,Yn),i);break}Wi(n,Nt,Yn);break;case 5:Wi(n,Nt,Yn);break;default:throw Error(Z(329))}}}return Gt(n,Qe()),n.callbackNode===t?_g.bind(null,n):null}function Sc(n,e){var t=Ys;return n.current.memoizedState.isDehydrated&&(tr(n,e).flags|=256),n=Za(n,e),n!==2&&(e=Nt,Nt=t,e!==null&&wc(e)),n}function wc(n){Nt===null?Nt=n:Nt.push.apply(Nt,n)}function w_(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!bn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yi(n,e){for(e&=~_f,e&=~ll,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Sn(e),i=1<<t;n[t]=-1,e&=~i}}function Bh(n){if((De&6)!==0)throw Error(Z(327));es();var e=Da(n,0);if((e&1)===0)return Gt(n,Qe()),null;var t=Za(n,e);if(n.tag!==0&&t===2){var i=Yu(n);i!==0&&(e=i,t=Sc(n,i))}if(t===1)throw t=ho,tr(n,0),yi(n,e),Gt(n,Qe()),t;if(t===6)throw Error(Z(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Wi(n,Nt,Yn),Gt(n,Qe()),null}function yf(n,e){var t=De;De|=1;try{return n(e)}finally{De=t,De===0&&(us=Qe()+500,rl&&Oi())}}function ur(n){Si!==null&&Si.tag===0&&(De&6)===0&&es();var e=De;De|=1;var t=ln.transition,i=Ve;try{if(ln.transition=null,Ve=1,n)return n()}finally{Ve=i,ln.transition=t,De=e,(De&6)===0&&Oi()}}function Mf(){Xt=qr.current,We(qr)}function tr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Jv(t)),nt!==null)for(t=nt.return;t!==null;){var i=t;switch(ef(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ka();break;case 3:as(),We(Bt),We(Et),cf();break;case 5:uf(i);break;case 4:as();break;case 13:We(qe);break;case 19:We(qe);break;case 10:sf(i.type._context);break;case 22:case 23:Mf()}t=t.return}if(ht=n,nt=n=Ri(n.current,null),gt=Xt=e,at=0,ho=null,_f=ll=lr=0,Nt=Ys=null,Zi!==null){for(e=0;e<Zi.length;e++)if(t=Zi[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Zi=null}return n}function xg(n,e){do{var t=nt;try{if(rf(),ya.current=Xa,ja){for(var i=Ye.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ja=!1}if(ar=0,ft=ot=Ye=null,Xs=!1,uo=0,vf.current=null,t===null||t.return===null){at=1,ho=e,nt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=gt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=bh(o);if(g!==null){g.flags&=-257,Ah(g,o,a,s,e),g.mode&1&&Ch(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var p=new Set;p.add(l),e.updateQueue=p}else _.add(l);break e}else{if((e&1)===0){Ch(s,u,e),Sf();break e}l=Error(Z(426))}}else if(je&&a.mode&1){var d=bh(o);if(d!==null){(d.flags&65536)===0&&(d.flags|=256),Ah(d,o,a,s,e),tf(ls(l,a));break e}}s=l=ls(l,a),at!==4&&(at=2),Ys===null?Ys=[s]:Ys.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=ng(s,l,e);xh(s,m);break e;case 1:a=l;var v=s.type,x=s.stateNode;if((s.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Li===null||!Li.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=ig(s,a,e);xh(s,w);break e}}s=s.return}while(s!==null)}Sg(t)}catch(M){e=M,nt===t&&t!==null&&(nt=t=t.return);continue}break}while(1)}function yg(){var n=qa.current;return qa.current=Xa,n===null?Xa:n}function Sf(){(at===0||at===3||at===2)&&(at=4),ht===null||(lr&268435455)===0&&(ll&268435455)===0||yi(ht,gt)}function Za(n,e){var t=De;De|=2;var i=yg();(ht!==n||gt!==e)&&(Yn=null,tr(n,e));do try{E_();break}catch(r){xg(n,r)}while(1);if(rf(),De=t,qa.current=i,nt!==null)throw Error(Z(261));return ht=null,gt=0,at}function E_(){for(;nt!==null;)Mg(nt)}function T_(){for(;nt!==null&&!Z0();)Mg(nt)}function Mg(n){var e=Eg(n.alternate,n,Xt);n.memoizedProps=n.pendingProps,e===null?Sg(n):nt=e,vf.current=null}function Sg(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=v_(t,e,Xt),t!==null){nt=t;return}}else{if(t=__(t,e),t!==null){t.flags&=32767,nt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{at=6,nt=null;return}}if(e=e.sibling,e!==null){nt=e;return}nt=e=n}while(e!==null);at===0&&(at=5)}function Wi(n,e,t){var i=Ve,r=ln.transition;try{ln.transition=null,Ve=1,C_(n,e,t,i)}finally{ln.transition=r,Ve=i}return null}function C_(n,e,t,i){do es();while(Si!==null);if((De&6)!==0)throw Error(Z(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(Z(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(ov(n,s),n===ht&&(nt=ht=null,gt=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Wo||(Wo=!0,Tg(Ra,function(){return es(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=ln.transition,ln.transition=null;var o=Ve;Ve=1;var a=De;De|=4,vf.current=null,y_(n,t),gg(t,n),Xv(ec),Ia=!!Ju,ec=Ju=null,n.current=t,M_(t),K0(),De=a,Ve=o,ln.transition=s}else n.current=t;if(Wo&&(Wo=!1,Si=n,$a=r),s=n.pendingLanes,s===0&&(Li=null),ev(t.stateNode),Gt(n,Qe()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ya)throw Ya=!1,n=yc,yc=null,n;return($a&1)!==0&&n.tag!==0&&es(),s=n.pendingLanes,(s&1)!==0?n===Mc?$s++:($s=0,Mc=n):$s=0,Oi(),null}function es(){if(Si!==null){var n=tm($a),e=ln.transition,t=Ve;try{if(ln.transition=null,Ve=16>n?16:n,Si===null)var i=!1;else{if(n=Si,Si=null,$a=0,(De&6)!==0)throw Error(Z(331));var r=De;for(De|=4,he=n.current;he!==null;){var s=he,o=s.child;if((he.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(he=u;he!==null;){var c=he;switch(c.tag){case 0:case 11:case 15:qs(8,c,s)}var f=c.child;if(f!==null)f.return=c,he=f;else for(;he!==null;){c=he;var h=c.sibling,g=c.return;if(dg(c),c===u){he=null;break}if(h!==null){h.return=g,he=h;break}he=g}}}var _=s.alternate;if(_!==null){var p=_.child;if(p!==null){_.child=null;do{var d=p.sibling;p.sibling=null,p=d}while(p!==null)}}he=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:qs(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,he=m;break e}he=s.return}}var v=n.current;for(he=v;he!==null;){o=he;var x=o.child;if((o.subtreeFlags&2064)!==0&&x!==null)x.return=o,he=x;else e:for(o=v;he!==null;){if(a=he,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:al(9,a)}}catch(M){Ke(a,a.return,M)}if(a===o){he=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,he=w;break e}he=a.return}}if(De=r,Oi(),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(Ja,n)}catch{}i=!0}return i}finally{Ve=t,ln.transition=e}}return!1}function Vh(n,e,t){e=ls(t,e),e=ng(n,e,1),n=Ai(n,e,1),e=Lt(),n!==null&&(_o(n,1,e),Gt(n,e))}function Ke(n,e,t){if(n.tag===3)Vh(n,n,t);else for(;e!==null;){if(e.tag===3){Vh(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Li===null||!Li.has(i))){n=ls(t,n),n=ig(e,n,1),e=Ai(e,n,1),n=Lt(),e!==null&&(_o(e,1,n),Gt(e,n));break}}e=e.return}}function b_(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Lt(),n.pingedLanes|=n.suspendedLanes&t,ht===n&&(gt&t)===t&&(at===4||at===3&&(gt&130023424)===gt&&500>Qe()-xf?tr(n,0):_f|=t),Gt(n,e)}function wg(n,e){e===0&&((n.mode&1)===0?e=1:(e=No,No<<=1,(No&130023424)===0&&(No=4194304)));var t=Lt();n=ri(n,e),n!==null&&(_o(n,e,t),Gt(n,t))}function A_(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),wg(n,t)}function L_(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(Z(314))}i!==null&&i.delete(e),wg(n,t)}var Eg;Eg=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Bt.current)Ot=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return Ot=!1,g_(n,e,t);Ot=(n.flags&131072)!==0}else Ot=!1,je&&(e.flags&1048576)!==0&&bm(e,Ba,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Sa(n,e),n=e.pendingProps;var r=rs(e,Et.current);Jr(e,t),r=hf(null,e,i,n,r,t);var s=df();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Vt(i)?(s=!0,Oa(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,af(e),r.updater=sl,e.stateNode=r,r._reactInternals=e,uc(e,i,n,t),e=hc(null,e,i,!0,s,t)):(e.tag=0,je&&s&&Jc(e),bt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Sa(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=R_(i),n=vn(i,n),r){case 0:e=fc(null,e,i,n,t);break e;case 1:e=Rh(null,e,i,n,t);break e;case 11:e=Lh(null,e,i,n,t);break e;case 14:e=Ph(null,e,i,vn(i.type,n),t);break e}throw Error(Z(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vn(i,r),fc(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vn(i,r),Rh(n,e,i,r,t);case 3:e:{if(ag(e),n===null)throw Error(Z(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Rm(n,e),Ha(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ls(Error(Z(423)),e),e=Dh(n,e,i,t,r);break e}else if(i!==r){r=ls(Error(Z(424)),e),e=Dh(n,e,i,t,r);break e}else for(qt=bi(e.stateNode.containerInfo.firstChild),Yt=e,je=!0,xn=null,t=Fm(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ss(),i===r){e=si(n,e,t);break e}bt(n,e,i,t)}e=e.child}return e;case 5:return zm(e),n===null&&oc(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,tc(i,r)?o=null:s!==null&&tc(i,s)&&(e.flags|=32),og(n,e),bt(n,e,o,t),e.child;case 6:return n===null&&oc(e),null;case 13:return lg(n,e,t);case 4:return lf(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=os(e,null,i,t):bt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vn(i,r),Lh(n,e,i,r,t);case 7:return bt(n,e,e.pendingProps,t),e.child;case 8:return bt(n,e,e.pendingProps.children,t),e.child;case 12:return bt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ge(Va,i._currentValue),i._currentValue=o,s!==null)if(bn(s.value,o)){if(s.children===r.children&&!Bt.current){e=si(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Jn(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),ac(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Z(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),ac(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}bt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Jr(e,t),r=un(r),i=i(r),e.flags|=1,bt(n,e,i,t),e.child;case 14:return i=e.type,r=vn(i,e.pendingProps),r=vn(i.type,r),Ph(n,e,i,r,t);case 15:return rg(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vn(i,r),Sa(n,e),e.tag=1,Vt(i)?(n=!0,Oa(e)):n=!1,Jr(e,t),Im(e,i,r),uc(e,i,r,t),hc(null,e,i,!0,n,t);case 19:return ug(n,e,t);case 22:return sg(n,e,t)}throw Error(Z(156,e.tag))};function Tg(n,e){return Kp(n,e)}function P_(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(n,e,t,i){return new P_(n,e,t,i)}function wf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function R_(n){if(typeof n=="function")return wf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Vc)return 11;if(n===Gc)return 14}return 2}function Ri(n,e){var t=n.alternate;return t===null?(t=an(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ta(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")wf(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case kr:return nr(t.children,r,s,e);case Bc:o=8,r|=8;break;case Iu:return n=an(12,t,e,r|2),n.elementType=Iu,n.lanes=s,n;case Nu:return n=an(13,t,e,r),n.elementType=Nu,n.lanes=s,n;case Fu:return n=an(19,t,e,r),n.elementType=Fu,n.lanes=s,n;case Np:return ul(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Dp:o=10;break e;case Ip:o=9;break e;case Vc:o=11;break e;case Gc:o=14;break e;case gi:o=16,i=null;break e}throw Error(Z(130,n==null?n:typeof n,""))}return e=an(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function nr(n,e,t,i){return n=an(7,n,i,e),n.lanes=t,n}function ul(n,e,t,i){return n=an(22,n,i,e),n.elementType=Np,n.lanes=t,n.stateNode={isHidden:!1},n}function $l(n,e,t){return n=an(6,n,null,e),n.lanes=t,n}function Zl(n,e,t){return e=an(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function D_(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pl(0),this.expirationTimes=Pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ef(n,e,t,i,r,s,o,a,l){return n=new D_(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=an(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},af(s),n}function I_(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zr,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Cg(n){if(!n)return Ni;n=n._reactInternals;e:{if(pr(n)!==n||n.tag!==1)throw Error(Z(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Z(171))}if(n.tag===1){var t=n.type;if(Vt(t))return Tm(n,t,e)}return e}function bg(n,e,t,i,r,s,o,a,l){return n=Ef(t,i,!0,n,r,s,o,a,l),n.context=Cg(null),t=n.current,i=Lt(),r=Pi(t),s=Jn(i,r),s.callback=e!=null?e:null,Ai(t,s,r),n.current.lanes=r,_o(n,r,i),Gt(n,i),n}function cl(n,e,t,i){var r=e.current,s=Lt(),o=Pi(r);return t=Cg(t),e.context===null?e.context=t:e.pendingContext=t,e=Jn(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ai(r,e,o),n!==null&&(wn(n,r,o,s),xa(n,r,o)),o}function Ka(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Gh(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Tf(n,e){Gh(n,e),(n=n.alternate)&&Gh(n,e)}function N_(){return null}var Ag=typeof reportError=="function"?reportError:function(n){console.error(n)};function Cf(n){this._internalRoot=n}fl.prototype.render=Cf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(Z(409));cl(n,e,null,null)};fl.prototype.unmount=Cf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ur(function(){cl(null,n,null,null)}),e[ii]=null}};function fl(n){this._internalRoot=n}fl.prototype.unstable_scheduleHydration=function(n){if(n){var e=rm();n={blockedOn:null,target:n,priority:e};for(var t=0;t<xi.length&&e!==0&&e<xi[t].priority;t++);xi.splice(t,0,n),t===0&&om(n)}};function bf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function hl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Hh(){}function F_(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ka(o);s.call(u)}}var o=bg(e,i,n,0,null,!1,!1,"",Hh);return n._reactRootContainer=o,n[ii]=o.current,ro(n.nodeType===8?n.parentNode:n),ur(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Ka(l);a.call(u)}}var l=Ef(n,0,!1,null,null,!1,!1,"",Hh);return n._reactRootContainer=l,n[ii]=l.current,ro(n.nodeType===8?n.parentNode:n),ur(function(){cl(e,l,t,i)}),l}function dl(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ka(o);a.call(l)}}cl(e,o,n,r)}else o=F_(t,e,n,r,i);return Ka(o)}nm=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=zs(e.pendingLanes);t!==0&&(jc(e,t|1),Gt(e,Qe()),(De&6)===0&&(us=Qe()+500,Oi()))}break;case 13:ur(function(){var i=ri(n,1);if(i!==null){var r=Lt();wn(i,n,1,r)}}),Tf(n,1)}};Xc=function(n){if(n.tag===13){var e=ri(n,134217728);if(e!==null){var t=Lt();wn(e,n,134217728,t)}Tf(n,134217728)}};im=function(n){if(n.tag===13){var e=Pi(n),t=ri(n,e);if(t!==null){var i=Lt();wn(t,n,e,i)}Tf(n,e)}};rm=function(){return Ve};sm=function(n,e){var t=Ve;try{return Ve=n,e()}finally{Ve=t}};ju=function(n,e,t){switch(e){case"input":if(Ou(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=il(i);if(!r)throw Error(Z(90));zp(i),Ou(i,r)}}}break;case"textarea":Op(n,t);break;case"select":e=t.value,e!=null&&$r(n,!!t.multiple,e,!1)}};jp=yf;Xp=ur;var z_={usingClientEntryPoint:!1,Events:[yo,Vr,il,Hp,Wp,yf]},Ls={findFiberByHostInstance:$i,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},k_={bundleType:Ls.bundleType,version:Ls.version,rendererPackageName:Ls.rendererPackageName,rendererConfig:Ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:oi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=$p(n),n===null?null:n.stateNode},findFiberByHostInstance:Ls.findFiberByHostInstance||N_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jo.isDisabled&&jo.supportsFiber)try{Ja=jo.inject(k_),Vn=jo}catch{}}Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z_;Kt.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bf(e))throw Error(Z(200));return I_(n,e,null,t)};Kt.createRoot=function(n,e){if(!bf(n))throw Error(Z(299));var t=!1,i="",r=Ag;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ef(n,1,!1,null,null,t,!1,i,r),n[ii]=e.current,ro(n.nodeType===8?n.parentNode:n),new Cf(e)};Kt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(Z(188)):(n=Object.keys(n).join(","),Error(Z(268,n)));return n=$p(e),n=n===null?null:n.stateNode,n};Kt.flushSync=function(n){return ur(n)};Kt.hydrate=function(n,e,t){if(!hl(e))throw Error(Z(200));return dl(null,n,e,!0,t)};Kt.hydrateRoot=function(n,e,t){if(!bf(n))throw Error(Z(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Ag;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=bg(e,null,n,1,t!=null?t:null,r,!1,s,o),n[ii]=e.current,ro(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new fl(e)};Kt.render=function(n,e,t){if(!hl(e))throw Error(Z(200));return dl(null,n,e,!1,t)};Kt.unmountComponentAtNode=function(n){if(!hl(n))throw Error(Z(40));return n._reactRootContainer?(ur(function(){dl(null,null,n,!1,function(){n._reactRootContainer=null,n[ii]=null})}),!0):!1};Kt.unstable_batchedUpdates=yf;Kt.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!hl(t))throw Error(Z(200));if(n==null||n._reactInternals===void 0)throw Error(Z(38));return dl(n,e,t,!1,i)};Kt.version="18.2.0-next-9e3b772b8-20220608";function Lg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lg)}catch(n){console.error(n)}}Lg(),bp.exports=Kt;var Pg,Wh=bp.exports;Pg=Wh.createRoot,Wh.hydrateRoot;var Qa=(n=>(n[n.Cards=0]="Cards",n[n.StandardCards=1]="StandardCards",n))(Qa||{});const O_=[{name:"cards",id:0},{name:"standard material cards",id:1}];/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Af="141",yr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Mr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},U_=0,jh=1,B_=2,Rg=1,V_=2,Os=3,po=0,En=1,Fi=2,G_=1,Di=0,ts=1,Xh=2,qh=3,Yh=4,H_=5,qi=100,W_=101,j_=102,$h=103,Zh=104,X_=200,q_=201,Y_=202,$_=203,Dg=204,Ig=205,Z_=206,K_=207,Q_=208,J_=209,ex=210,tx=0,nx=1,ix=2,Ec=3,rx=4,sx=5,ox=6,ax=7,pl=0,lx=1,ux=2,ei=0,cx=1,fx=2,hx=3,dx=4,px=5,Ng=300,cs=301,fs=302,Tc=303,Cc=304,ml=306,bc=1e3,yn=1001,Ac=1002,Ft=1003,Kh=1004,Qh=1005,zt=1006,mx=1007,gl=1008,cr=1009,gx=1010,vx=1011,Fg=1012,_x=1013,Qi=1014,Ji=1015,mo=1016,xx=1017,yx=1018,ns=1020,Mx=1021,Sx=1022,Mn=1023,wx=1024,Ex=1025,ir=1026,hs=1027,Tx=1028,Cx=1029,bx=1030,Ax=1031,Lx=1033,Kl=33776,Ql=33777,Jl=33778,eu=33779,Jh=35840,ed=35841,td=35842,nd=35843,Px=36196,id=37492,rd=37496,sd=37808,od=37809,ad=37810,ld=37811,ud=37812,cd=37813,fd=37814,hd=37815,dd=37816,pd=37817,md=37818,gd=37819,vd=37820,_d=37821,xd=36492,fr=3e3,Xe=3001,Rx=3200,Dx=3201,vs=0,Ix=1,$n="srgb",er="srgb-linear",tu=7680,Nx=519,yd=35044,Md="300 es",Lc=1035;class mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const pt=[];for(let n=0;n<256;n++)pt[n]=(n<16?"0":"")+n.toString(16);const nu=Math.PI/180,Sd=180/Math.PI;function So(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[i&255]+pt[i>>8&255]+pt[i>>16&255]+pt[i>>24&255]).toLowerCase()}function At(n,e,t){return Math.max(e,Math.min(t,n))}function Fx(n,e){return(n%e+e)%e}function iu(n,e,t){return(1-t)*n+t*e}function wd(n){return(n&n-1)===0&&n!==0}function Pc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class Se{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bn{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],g=i[5],_=i[8],p=r[0],d=r[3],m=r[6],v=r[1],x=r[4],w=r[7],M=r[2],b=r[5],P=r[8];return s[0]=o*p+a*v+l*M,s[3]=o*d+a*x+l*b,s[6]=o*m+a*w+l*P,s[1]=u*p+c*v+f*M,s[4]=u*d+c*x+f*b,s[7]=u*m+c*w+f*P,s[2]=h*p+g*v+_*M,s[5]=h*d+g*x+_*b,s[8]=h*m+g*w+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,g=u*s-o*l,_=t*f+i*h+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=f*p,e[1]=(r*u-c*i)*p,e[2]=(a*i-r*o)*p,e[3]=h*p,e[4]=(c*t-r*l)*p,e[5]=(r*s-a*t)*p,e[6]=g*p,e[7]=(i*l-u*t)*p,e[8]=(o*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],u=r[4],c=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*u,r[6]=t*a+i*c,r[1]=-i*s+t*l,r[4]=-i*o+t*u,r[7]=-i*a+t*c,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function zg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function go(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function rr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ca(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const ru={[$n]:{[er]:rr},[er]:{[$n]:Ca}},dn={legacyMode:!0,get workingColorSpace(){return er},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(ru[e]&&ru[e][t]!==void 0){const i=ru[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},st={r:0,g:0,b:0},pn={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function su(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function qo(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=er){return this.r=e,this.g=t,this.b=i,dn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=er){if(e=Fx(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=su(o,s,e+1/3),this.g=su(o,s,e),this.b=su(o,s,e-1/3)}return dn.toWorkingColorSpace(this,r),this}setStyle(e,t=$n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,dn.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,dn.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseInt(s[2],10)/100,c=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,u,c,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,dn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,dn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=$n){const i=kg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return dn.fromWorkingColorSpace(qo(this,st),e),At(st.r*255,0,255)<<16^At(st.g*255,0,255)<<8^At(st.b*255,0,255)<<0}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=er){dn.fromWorkingColorSpace(qo(this,st),t);const i=st.r,r=st.g,s=st.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=er){return dn.fromWorkingColorSpace(qo(this,st),t),e.r=st.r,e.g=st.g,e.b=st.b,e}getStyle(e=$n){return dn.fromWorkingColorSpace(qo(this,st),e),e!==$n?`color(${e} ${st.r} ${st.g} ${st.b})`:`rgb(${st.r*255|0},${st.g*255|0},${st.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(pn),pn.h+=e,pn.s+=t,pn.l+=i,this.setHSL(pn.h,pn.s,pn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pn),e.getHSL(Xo);const i=iu(pn.h,Xo.h,t),r=iu(pn.s,Xo.s,t),s=iu(pn.l,Xo.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}xe.NAMES=kg;let Sr;class Og{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Sr===void 0&&(Sr=go("canvas")),Sr.width=e.width,Sr.height=e.height;const i=Sr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=go("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=rr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(rr(t[i]/255)*255):t[i]=rr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ug{constructor(e=null){this.isSource=!0,this.uuid=So(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ou(r[o].image)):s.push(ou(r[o]))}else s=ou(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ou(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Og.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zx=0;class fn extends mr{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,i=yn,r=yn,s=zt,o=gl,a=Mn,l=cr,u=1,c=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=So(),this.name="",this.source=new Ug(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ng)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bc:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case Ac:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bc:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case Ac:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Ng;class wt{constructor(e=0,t=0,i=0,r=1){this.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],g=l[5],_=l[9],p=l[2],d=l[6],m=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-p)<.01&&Math.abs(_-d)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+p)<.1&&Math.abs(_+d)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,w=(g+1)/2,M=(m+1)/2,b=(c+h)/4,P=(f+p)/4,y=(_+d)/4;return x>w&&x>M?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=b/i,s=P/i):w>M?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=b/r,s=y/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=P/s,r=y/s),this.set(i,r,s,t),this}let v=Math.sqrt((d-_)*(d-_)+(f-p)*(f-p)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(d-_)/v,this.y=(f-p)/v,this.z=(h-c)/v,this.w=Math.acos((u+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ti extends mr{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:zt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ug(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bg extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kx extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],g=s[o+1],_=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=g,e[t+2]=_,e[t+3]=p;return}if(f!==p||l!==h||u!==g||c!==_){let d=1-a;const m=l*h+u*g+c*_+f*p,v=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const M=Math.sqrt(x),b=Math.atan2(M,m*v);d=Math.sin(d*b)/M,a=Math.sin(a*b)/M}const w=a*v;if(l=l*d+h*w,u=u*d+g*w,c=c*d+_*w,f=f*d+p*w,d===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=M,u*=M,c*=M,f*=M}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],g=s[o+2],_=s[o+3];return e[t]=a*_+c*f+l*g-u*h,e[t+1]=l*_+c*h+u*f-a*g,e[t+2]=u*_+c*g+a*h-l*f,e[t+3]=c*_-a*f-l*h-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),g=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*g*_,this._y=u*g*f-h*c*_,this._z=u*c*_+h*g*f,this._w=u*c*f-h*g*_;break;case"YXZ":this._x=h*c*f+u*g*_,this._y=u*g*f-h*c*_,this._z=u*c*_-h*g*f,this._w=u*c*f+h*g*_;break;case"ZXY":this._x=h*c*f-u*g*_,this._y=u*g*f+h*c*_,this._z=u*c*_+h*g*f,this._w=u*c*f-h*g*_;break;case"ZYX":this._x=h*c*f-u*g*_,this._y=u*g*f+h*c*_,this._z=u*c*_-h*g*f,this._w=u*c*f+h*g*_;break;case"YZX":this._x=h*c*f+u*g*_,this._y=u*g*f+h*c*_,this._z=u*c*_-h*g*f,this._w=u*c*f-h*g*_;break;case"XZY":this._x=h*c*f-u*g*_,this._y=u*g*f-h*c*_,this._z=u*c*_+h*g*f,this._w=u*c*f+h*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(c-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>f){const g=2*Math.sqrt(1+i-a-f);this._w=(c-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>f){const g=2*Math.sqrt(1+a-i-f);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+c)/g}else{const g=2*Math.sqrt(1+f-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){this.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Ed.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ed.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,f=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=u*l+h*-s+c*-a-f*-o,this.y=c*l+h*-o+f*-s-u*-a,this.z=f*l+h*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return au.copy(this).projectOnVector(e),this.sub(au)}reflect(e){return this.sub(au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const au=new D,Ed=new hr;class wo{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],f=e[l+1],h=e[l+2];c<t&&(t=c),f<i&&(i=f),h<r&&(r=h),c>s&&(s=c),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),f=e.getY(l),h=e.getZ(l);c<t&&(t=c),f<i&&(i=f),h<r&&(r=h),c>s&&(s=c),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Bi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Bi)}else i.boundingBox===null&&i.computeBoundingBox(),lu.copy(i.boundingBox),lu.applyMatrix4(e.matrixWorld),this.union(lu);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ps),Yo.subVectors(this.max,Ps),wr.subVectors(e.a,Ps),Er.subVectors(e.b,Ps),Tr.subVectors(e.c,Ps),ui.subVectors(Er,wr),ci.subVectors(Tr,Er),Vi.subVectors(wr,Tr);let t=[0,-ui.z,ui.y,0,-ci.z,ci.y,0,-Vi.z,Vi.y,ui.z,0,-ui.x,ci.z,0,-ci.x,Vi.z,0,-Vi.x,-ui.y,ui.x,0,-ci.y,ci.x,0,-Vi.y,Vi.x,0];return!uu(t,wr,Er,Tr,Yo)||(t=[1,0,0,0,1,0,0,0,1],!uu(t,wr,Er,Tr,Yo))?!1:($o.crossVectors(ui,ci),t=[$o.x,$o.y,$o.z],uu(t,wr,Er,Tr,Yo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Bi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hn=[new D,new D,new D,new D,new D,new D,new D,new D],Bi=new D,lu=new wo,wr=new D,Er=new D,Tr=new D,ui=new D,ci=new D,Vi=new D,Ps=new D,Yo=new D,$o=new D,Gi=new D;function uu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Gi.fromArray(n,s);const a=r.x*Math.abs(Gi.x)+r.y*Math.abs(Gi.y)+r.z*Math.abs(Gi.z),l=e.dot(Gi),u=t.dot(Gi),c=i.dot(Gi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Ox=new wo,Td=new D,Zo=new D,cu=new D;class vl{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ox.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){cu.subVectors(e,this.center);const t=cu.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(cu.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Zo.set(0,0,1).multiplyScalar(e.radius):Zo.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Td.copy(e.center).add(Zo)),this.expandByPoint(Td.copy(e.center).sub(Zo)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new D,fu=new D,Ko=new D,fi=new D,hu=new D,Qo=new D,du=new D;class Vg{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.direction).multiplyScalar(t).add(this.origin),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){fu.copy(e).add(t).multiplyScalar(.5),Ko.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(fu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ko),a=fi.dot(this.direction),l=-fi.dot(Ko),u=fi.lengthSq(),c=Math.abs(1-o*o);let f,h,g,_;if(c>0)if(f=o*l-a,h=o*a-l,_=s*c,f>=0)if(h>=-_)if(h<=_){const p=1/c;f*=p,h*=p,g=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Ko).multiplyScalar(h).add(fu),g}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const i=Wn.dot(this.direction),r=Wn.dot(Wn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,i,r,s){hu.subVectors(t,e),Qo.subVectors(i,e),du.crossVectors(hu,Qo);let o=this.direction.dot(du),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fi.subVectors(this.origin,e);const l=a*this.direction.dot(Qo.crossVectors(fi,Qo));if(l<0)return null;const u=a*this.direction.dot(hu.cross(fi));if(u<0||l+u>o)return null;const c=-a*fi.dot(du);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,u,c,f,h,g,_,p,d){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=f,m[14]=h,m[3]=g,m[7]=_,m[11]=p,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Cr.setFromMatrixColumn(e,0).length(),s=1/Cr.setFromMatrixColumn(e,1).length(),o=1/Cr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,g=o*f,_=a*c,p=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=g+_*u,t[5]=h-p*u,t[9]=-a*l,t[2]=p-h*u,t[6]=_+g*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,g=l*f,_=u*c,p=u*f;t[0]=h+p*a,t[4]=_*a-g,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=g*a-_,t[6]=p+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,g=l*f,_=u*c,p=u*f;t[0]=h-p*a,t[4]=-o*f,t[8]=_+g*a,t[1]=g+_*a,t[5]=o*c,t[9]=p-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,g=o*f,_=a*c,p=a*f;t[0]=l*c,t[4]=_*u-g,t[8]=h*u+p,t[1]=l*f,t[5]=p*u+h,t[9]=g*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,g=o*u,_=a*l,p=a*u;t[0]=l*c,t[4]=p-h*f,t[8]=_*f+g,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=g*f+_,t[10]=h-p*f}else if(e.order==="XZY"){const h=o*l,g=o*u,_=a*l,p=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+p,t[5]=o*c,t[9]=g*f-_,t[2]=_*f-g,t[6]=a*c,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ux,e,Bx)}lookAt(e,t,i){const r=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),hi.crossVectors(i,Wt),hi.lengthSq()===0&&(Math.abs(i.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),hi.crossVectors(i,Wt)),hi.normalize(),Jo.crossVectors(Wt,hi),r[0]=hi.x,r[4]=Jo.x,r[8]=Wt.x,r[1]=hi.y,r[5]=Jo.y,r[9]=Wt.y,r[2]=hi.z,r[6]=Jo.z,r[10]=Wt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],g=i[13],_=i[2],p=i[6],d=i[10],m=i[14],v=i[3],x=i[7],w=i[11],M=i[15],b=r[0],P=r[4],y=r[8],A=r[12],N=r[1],O=r[5],oe=r[9],K=r[13],F=r[2],q=r[6],V=r[10],j=r[14],R=r[3],I=r[7],k=r[11],Y=r[15];return s[0]=o*b+a*N+l*F+u*R,s[4]=o*P+a*O+l*q+u*I,s[8]=o*y+a*oe+l*V+u*k,s[12]=o*A+a*K+l*j+u*Y,s[1]=c*b+f*N+h*F+g*R,s[5]=c*P+f*O+h*q+g*I,s[9]=c*y+f*oe+h*V+g*k,s[13]=c*A+f*K+h*j+g*Y,s[2]=_*b+p*N+d*F+m*R,s[6]=_*P+p*O+d*q+m*I,s[10]=_*y+p*oe+d*V+m*k,s[14]=_*A+p*K+d*j+m*Y,s[3]=v*b+x*N+w*F+M*R,s[7]=v*P+x*O+w*q+M*I,s[11]=v*y+x*oe+w*V+M*k,s[15]=v*A+x*K+w*j+M*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],g=e[14],_=e[3],p=e[7],d=e[11],m=e[15];return _*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*g-i*l*g)+p*(+t*l*g-t*u*h+s*o*h-r*o*g+r*u*c-s*l*c)+d*(+t*u*f-t*a*g-s*o*f+i*o*g+s*a*c-i*u*c)+m*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],g=e[11],_=e[12],p=e[13],d=e[14],m=e[15],v=f*d*u-p*h*u+p*l*g-a*d*g-f*l*m+a*h*m,x=_*h*u-c*d*u-_*l*g+o*d*g+c*l*m-o*h*m,w=c*p*u-_*f*u+_*a*g-o*p*g-c*a*m+o*f*m,M=_*f*l-c*p*l-_*a*h+o*p*h+c*a*d-o*f*d,b=t*v+i*x+r*w+s*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/b;return e[0]=v*P,e[1]=(p*h*s-f*d*s-p*r*g+i*d*g+f*r*m-i*h*m)*P,e[2]=(a*d*s-p*l*s+p*r*u-i*d*u-a*r*m+i*l*m)*P,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*g-i*l*g)*P,e[4]=x*P,e[5]=(c*d*s-_*h*s+_*r*g-t*d*g-c*r*m+t*h*m)*P,e[6]=(_*l*s-o*d*s-_*r*u+t*d*u+o*r*m-t*l*m)*P,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*g+t*l*g)*P,e[8]=w*P,e[9]=(_*f*s-c*p*s-_*i*g+t*p*g+c*i*m-t*f*m)*P,e[10]=(o*p*s-_*a*s+_*i*u-t*p*u-o*i*m+t*a*m)*P,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*g-t*a*g)*P,e[12]=M*P,e[13]=(c*p*r-_*f*r+_*i*h-t*p*h-c*i*d+t*f*d)*P,e[14]=(_*a*r-o*p*r-_*i*l+t*p*l+o*i*d-t*a*d)*P,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,g=s*c,_=s*f,p=o*c,d=o*f,m=a*f,v=l*u,x=l*c,w=l*f,M=i.x,b=i.y,P=i.z;return r[0]=(1-(p+m))*M,r[1]=(g+w)*M,r[2]=(_-x)*M,r[3]=0,r[4]=(g-w)*b,r[5]=(1-(h+m))*b,r[6]=(d+v)*b,r[7]=0,r[8]=(_+x)*P,r[9]=(d-v)*P,r[10]=(1-(h+p))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Cr.set(r[0],r[1],r[2]).length();const o=Cr.set(r[4],r[5],r[6]).length(),a=Cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],mn.copy(this);const u=1/s,c=1/o,f=1/a;return mn.elements[0]*=u,mn.elements[1]*=u,mn.elements[2]*=u,mn.elements[4]*=c,mn.elements[5]*=c,mn.elements[6]*=c,mn.elements[8]*=f,mn.elements[9]*=f,mn.elements[10]*=f,t.setFromRotationMatrix(mn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),c=(t+e)/(t-e),f=(i+r)/(i-r),h=-(o+s)/(o-s),g=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),c=1/(o-s),f=(t+e)*l,h=(i+r)*u,g=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Cr=new D,mn=new Je,Ux=new D(0,0,0),Bx=new D(1,1,1),hi=new D,Jo=new D,Wt=new D,Cd=new Je,bd=new hr;class Eo{constructor(e=0,t=0,i=0,r=Eo.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-At(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Cd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bd.setFromEuler(this),this.setFromQuaternion(bd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Eo.DefaultOrder="XYZ";Eo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Gg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vx=0;const Ad=new D,br=new hr,jn=new Je,ea=new D,Rs=new D,Gx=new D,Hx=new hr,Ld=new D(1,0,0),Pd=new D(0,1,0),Rd=new D(0,0,1),Wx={type:"added"},Dd={type:"removed"};class Zt extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vx++}),this.uuid=So(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DefaultUp.clone();const e=new D,t=new Eo,i=new hr,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Je},normalMatrix:{value:new Bn}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Zt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Gg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(Ld,e)}rotateY(e){return this.rotateOnAxis(Pd,e)}rotateZ(e){return this.rotateOnAxis(Rd,e)}translateOnAxis(e,t){return Ad.copy(e).applyQuaternion(this.quaternion),this.position.add(Ad.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ld,e)}translateY(e){return this.translateOnAxis(Pd,e)}translateZ(e){return this.translateOnAxis(Rd,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ea.copy(e):ea.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Rs,ea,this.up):jn.lookAt(ea,Rs,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),br.setFromRotationMatrix(jn),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Wx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Dd)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,e,Gx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,Hx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),g=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Zt.DefaultUp=new D(0,1,0);Zt.DefaultMatrixAutoUpdate=!0;const gn=new D,Xn=new D,pu=new D,qn=new D,Ar=new D,Lr=new D,Id=new D,mu=new D,gu=new D,vu=new D;class Un{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),gn.subVectors(e,t),r.cross(gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){gn.subVectors(r,t),Xn.subVectors(i,t),pu.subVectors(e,t);const o=gn.dot(gn),a=gn.dot(Xn),l=gn.dot(pu),u=Xn.dot(Xn),c=Xn.dot(pu),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,g=(u*l-a*c)*h,_=(o*c-a*l)*h;return s.set(1-g-_,_,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,qn),qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,qn),l.set(0,0),l.addScaledVector(s,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(a,qn.z),l}static isFrontFacing(e,t,i,r){return gn.subVectors(i,t),Xn.subVectors(e,t),gn.cross(Xn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),gn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Un.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ar.subVectors(r,i),Lr.subVectors(s,i),mu.subVectors(e,i);const l=Ar.dot(mu),u=Lr.dot(mu);if(l<=0&&u<=0)return t.copy(i);gu.subVectors(e,r);const c=Ar.dot(gu),f=Lr.dot(gu);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Ar,o);vu.subVectors(e,s);const g=Ar.dot(vu),_=Lr.dot(vu);if(_>=0&&g<=_)return t.copy(s);const p=g*u-l*_;if(p<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(Lr,a);const d=c*_-g*f;if(d<=0&&f-c>=0&&g-_>=0)return Id.subVectors(s,r),a=(f-c)/(f-c+(g-_)),t.copy(r).addScaledVector(Id,a);const m=1/(d+p+h);return o=p*m,a=h*m,t.copy(i).addScaledVector(Ar,o).addScaledVector(Lr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let jx=0;class _t extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=So(),this.name="",this.type="Material",this.blending=ts,this.side=po,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Dg,this.blendDst=Ig,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ec,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tu,this.stencilZFail=tu,this.stencilZPass=tu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===G_;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(i.blending=this.blending),this.side!==po&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}_t.fromType=function(){return null};class _s extends _t{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tt=new D,ta=new Se;class Tn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=yd,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new xe),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Se),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new D),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new wt),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ta.fromBufferAttribute(this,t),ta.applyMatrix3(e),this.setXY(t,ta.x,ta.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix3(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Hg extends Tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Wg extends Tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class lt extends Tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Xx=0;const nn=new Je,_u=new Zt,Pr=new D,jt=new wo,Ds=new wo,ct=new D;class Jt extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=So(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zg(e)?Wg:Hg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Bn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,i){return nn.makeTranslation(e,t,i),this.applyMatrix4(nn),this}scale(e,t,i){return nn.makeScale(e,t,i),this.applyMatrix4(nn),this}lookAt(e){return _u.lookAt(e),_u.updateMatrix(),this.applyMatrix4(_u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(ct.addVectors(jt.min,Ds.min),jt.expandByPoint(ct),ct.addVectors(jt.max,Ds.max),jt.expandByPoint(ct)):(jt.expandByPoint(Ds.min),jt.expandByPoint(Ds.max))}jt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)ct.fromBufferAttribute(a,u),l&&(Pr.fromBufferAttribute(e,u),ct.add(Pr)),r=Math.max(r,i.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let N=0;N<a;N++)u[N]=new D,c[N]=new D;const f=new D,h=new D,g=new D,_=new Se,p=new Se,d=new Se,m=new D,v=new D;function x(N,O,oe){f.fromArray(r,N*3),h.fromArray(r,O*3),g.fromArray(r,oe*3),_.fromArray(o,N*2),p.fromArray(o,O*2),d.fromArray(o,oe*2),h.sub(f),g.sub(f),p.sub(_),d.sub(_);const K=1/(p.x*d.y-d.x*p.y);!isFinite(K)||(m.copy(h).multiplyScalar(d.y).addScaledVector(g,-p.y).multiplyScalar(K),v.copy(g).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(K),u[N].add(m),u[O].add(m),u[oe].add(m),c[N].add(v),c[O].add(v),c[oe].add(v))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let N=0,O=w.length;N<O;++N){const oe=w[N],K=oe.start,F=oe.count;for(let q=K,V=K+F;q<V;q+=3)x(i[q+0],i[q+1],i[q+2])}const M=new D,b=new D,P=new D,y=new D;function A(N){P.fromArray(s,N*3),y.copy(P);const O=u[N];M.copy(O),M.sub(P.multiplyScalar(P.dot(O))).normalize(),b.crossVectors(y,O);const K=b.dot(c[N])<0?-1:1;l[N*4]=M.x,l[N*4+1]=M.y,l[N*4+2]=M.z,l[N*4+3]=K}for(let N=0,O=w.length;N<O;++N){const oe=w[N],K=oe.start,F=oe.count;for(let q=K,V=K+F;q<V;q+=3)A(i[q+0]),A(i[q+1]),A(i[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,u=new D,c=new D,f=new D;if(e)for(let h=0,g=e.count;h<g;h+=3){const _=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,d),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),u.fromBufferAttribute(i,d),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(d,u.x,u.y,u.z)}else for(let h=0,g=t.count;h<g;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],l=a.array,u=a.itemSize*t,c=Math.min(l.length,o.length-u);for(let f=0,h=u;f<c;f++,h++)o[h]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let g=0,_=0;for(let p=0,d=l.length;p<d;p++){a.isInterleavedBufferAttribute?g=l[p]*a.data.stride+a.offset:g=l[p]*c;for(let m=0;m<c;m++)h[_++]=u[g++]}return new Tn(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],g=e(h,i);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const g=u[f];c.push(g.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,g=f.length;h<g;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nd=new Je,Rr=new Vg,xu=new vl,di=new D,pi=new D,mi=new D,yu=new D,Mu=new D,Su=new D,na=new D,ia=new D,ra=new D,sa=new Se,oa=new Se,aa=new Se,wu=new D,la=new D;class Ut extends Zt{constructor(e=new Jt,t=new _s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),xu.copy(i.boundingSphere),xu.applyMatrix4(s),e.ray.intersectsSphere(xu)===!1)||(Nd.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(Nd),i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.morphAttributes.position,c=i.morphTargetsRelative,f=i.attributes.uv,h=i.attributes.uv2,g=i.groups,_=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,d=g.length;p<d;p++){const m=g[p],v=r[m.materialIndex],x=Math.max(m.start,_.start),w=Math.min(a.count,Math.min(m.start+m.count,_.start+_.count));for(let M=x,b=w;M<b;M+=3){const P=a.getX(M),y=a.getX(M+1),A=a.getX(M+2);o=ua(this,v,e,Rr,l,u,c,f,h,P,y,A),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const p=Math.max(0,_.start),d=Math.min(a.count,_.start+_.count);for(let m=p,v=d;m<v;m+=3){const x=a.getX(m),w=a.getX(m+1),M=a.getX(m+2);o=ua(this,r,e,Rr,l,u,c,f,h,x,w,M),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,d=g.length;p<d;p++){const m=g[p],v=r[m.materialIndex],x=Math.max(m.start,_.start),w=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let M=x,b=w;M<b;M+=3){const P=M,y=M+1,A=M+2;o=ua(this,v,e,Rr,l,u,c,f,h,P,y,A),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const p=Math.max(0,_.start),d=Math.min(l.count,_.start+_.count);for(let m=p,v=d;m<v;m+=3){const x=m,w=m+1,M=m+2;o=ua(this,r,e,Rr,l,u,c,f,h,x,w,M),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function qx(n,e,t,i,r,s,o,a){let l;if(e.side===En?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==Fi,a),l===null)return null;la.copy(a),la.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(la);return u<t.near||u>t.far?null:{distance:u,point:la.clone(),object:n}}function ua(n,e,t,i,r,s,o,a,l,u,c,f){di.fromBufferAttribute(r,u),pi.fromBufferAttribute(r,c),mi.fromBufferAttribute(r,f);const h=n.morphTargetInfluences;if(s&&h){na.set(0,0,0),ia.set(0,0,0),ra.set(0,0,0);for(let _=0,p=s.length;_<p;_++){const d=h[_],m=s[_];d!==0&&(yu.fromBufferAttribute(m,u),Mu.fromBufferAttribute(m,c),Su.fromBufferAttribute(m,f),o?(na.addScaledVector(yu,d),ia.addScaledVector(Mu,d),ra.addScaledVector(Su,d)):(na.addScaledVector(yu.sub(di),d),ia.addScaledVector(Mu.sub(pi),d),ra.addScaledVector(Su.sub(mi),d)))}di.add(na),pi.add(ia),mi.add(ra)}n.isSkinnedMesh&&(n.boneTransform(u,di),n.boneTransform(c,pi),n.boneTransform(f,mi));const g=qx(n,e,t,i,di,pi,mi,wu);if(g){a&&(sa.fromBufferAttribute(a,u),oa.fromBufferAttribute(a,c),aa.fromBufferAttribute(a,f),g.uv=Un.getUV(wu,di,pi,mi,sa,oa,aa,new Se)),l&&(sa.fromBufferAttribute(l,u),oa.fromBufferAttribute(l,c),aa.fromBufferAttribute(l,f),g.uv2=Un.getUV(wu,di,pi,mi,sa,oa,aa,new Se));const _={a:u,b:c,c:f,normal:new D,materialIndex:0};Un.getNormal(di,pi,mi,_.normal),g.face=_}return g}class To extends Jt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,g=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(f,2));function _(p,d,m,v,x,w,M,b,P,y,A){const N=w/P,O=M/y,oe=w/2,K=M/2,F=b/2,q=P+1,V=y+1;let j=0,R=0;const I=new D;for(let k=0;k<V;k++){const Y=k*O-K;for(let W=0;W<q;W++){const Q=W*N-oe;I[p]=Q*v,I[d]=Y*x,I[m]=F,u.push(I.x,I.y,I.z),I[p]=0,I[d]=0,I[m]=b>0?1:-1,c.push(I.x,I.y,I.z),f.push(W/P),f.push(1-k/y),j+=1}}for(let k=0;k<y;k++)for(let Y=0;Y<P;Y++){const W=h+Y+q*k,Q=h+Y+q*(k+1),ce=h+(Y+1)+q*(k+1),de=h+(Y+1)+q*k;l.push(W,Q,de),l.push(Q,ce,de),R+=6}a.addGroup(g,R,A),g+=R,h+=j}}static fromJSON(e){return new To(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ds(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Mt(n){const e={};for(let t=0;t<n.length;t++){const i=ds(n[t]);for(const r in i)e[r]=i[r]}return e}const jg={clone:ds,merge:Mt};var Yx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$x=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends _t{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Yx,this.fragmentShader=$x,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Xg extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class on extends Xg{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sd*2*Math.atan(Math.tan(nu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nu*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Dr=90,Ir=1;class Zx extends Zt{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new on(Dr,Ir,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new D(1,0,0)),this.add(r);const s=new on(Dr,Ir,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new D(-1,0,0)),this.add(s);const o=new on(Dr,Ir,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new D(0,1,0)),this.add(o);const a=new on(Dr,Ir,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new D(0,-1,0)),this.add(a);const l=new on(Dr,Ir,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new D(0,0,1)),this.add(l);const u=new on(Dr,Ir,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new D(0,0,-1)),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=ei,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class qg extends fn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:cs,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kx extends ti{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new qg(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new To(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Di});s.uniforms.tEquirect.value=t;const o=new Ut(r,s),a=t.minFilter;return t.minFilter===gl&&(t.minFilter=zt),new Zx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Eu=new D,Qx=new D,Jx=new Bn;class ji{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Eu.subVectors(i,t).cross(Qx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Eu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Jx.getNormalMatrix(e),r=this.coplanarPoint(Eu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new vl,ca=new D;class Yg{constructor(e=new ji,t=new ji,i=new ji,r=new ji,s=new ji,o=new ji){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],f=i[7],h=i[8],g=i[9],_=i[10],p=i[11],d=i[12],m=i[13],v=i[14],x=i[15];return t[0].setComponents(a-r,f-l,p-h,x-d).normalize(),t[1].setComponents(a+r,f+l,p+h,x+d).normalize(),t[2].setComponents(a+s,f+u,p+g,x+m).normalize(),t[3].setComponents(a-s,f-u,p-g,x-m).normalize(),t[4].setComponents(a-o,f-c,p-_,x-v).normalize(),t[5].setComponents(a+o,f+c,p+_,x+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSprite(e){return Nr.center.set(0,0,0),Nr.radius=.7071067811865476,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ca.x=r.normal.x>0?e.max.x:e.min.x,ca.y=r.normal.y>0?e.max.y:e.min.y,ca.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ca)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $g(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ey(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,h=u.usage,g=n.createBuffer();n.bindBuffer(c,g),n.bufferData(c,f,h),u.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){const h=c.array,g=c.updateRange;n.bindBuffer(f,u),g.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,g.offset*h.BYTES_PER_ELEMENT,h,g.offset,g.count):n.bufferSubData(f,g.offset*h.BYTES_PER_ELEMENT,h.subarray(g.offset,g.offset+g.count)),g.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:o,remove:a,update:l}}class Co extends Jt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,g=[],_=[],p=[],d=[];for(let m=0;m<c;m++){const v=m*h-o;for(let x=0;x<u;x++){const w=x*f-s;_.push(w,-v,0),p.push(0,0,1),d.push(x/a),d.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const x=v+u*m,w=v+u*(m+1),M=v+1+u*(m+1),b=v+1+u*m;g.push(x,w,b),g.push(w,M,b)}this.setIndex(g),this.setAttribute("position",new lt(_,3)),this.setAttribute("normal",new lt(p,3)),this.setAttribute("uv",new lt(d,2))}static fromJSON(e){return new Co(e.width,e.height,e.widthSegments,e.heightSegments)}}var ty=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ny=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ry=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ay="vec3 transformed = vec3( position );",ly=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uy=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,cy=`#ifdef USE_IRIDESCENCE
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
#endif`,fy=`#ifdef USE_BUMPMAP
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
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_y=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yy=`#define PI 3.141592653589793
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
}`,My=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sy=`vec3 transformedNormal = objectNormal;
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
#endif`,wy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ey=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ty=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,by="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ay=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ly=`#ifdef USE_ENVMAP
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
#endif`,Py=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ry=`#ifdef USE_ENVMAP
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
#endif`,Dy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iy=`#ifdef USE_ENVMAP
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
#endif`,Ny=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ky=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Oy=`#ifdef USE_GRADIENTMAP
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
}`,Uy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,By=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vy=`vec3 diffuse = vec3( 1.0 );
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
#endif`,Gy=`uniform bool receiveShadow;
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
#endif`,Hy=`#if defined( USE_ENVMAP )
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
#endif`,Wy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jy=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Xy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qy=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Yy=`PhysicalMaterial material;
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
#endif`,$y=`struct PhysicalMaterial {
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
}`,Zy=`
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
#endif`,Ky=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Jy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,iM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cM=`#ifdef USE_MORPHNORMALS
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
#endif`,fM=`#ifdef USE_MORPHTARGETS
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
#endif`,hM=`#ifdef USE_MORPHTARGETS
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
#endif`,dM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,pM=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,mM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_M=`#ifdef USE_NORMALMAP
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
#endif`,xM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,yM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,MM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,SM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,EM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,TM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RM=`#ifdef USE_SHADOWMAP
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
#endif`,DM=`#ifdef USE_SHADOWMAP
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
#endif`,IM=`#ifdef USE_SHADOWMAP
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
#endif`,NM=`float getShadowMask() {
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
}`,FM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zM=`#ifdef USE_SKINNING
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
#endif`,kM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OM=`#ifdef USE_SKINNING
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
#endif`,UM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,HM=`#ifdef USE_TRANSMISSION
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
#endif`,WM=`#ifdef USE_TRANSMISSION
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
#endif`,jM=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,XM=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,qM=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,YM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,$M=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ZM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,KM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JM=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,eS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tS=`#include <envmap_common_pars_fragment>
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
}`,nS=`#include <common>
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
}`,iS=`#if DEPTH_PACKING == 3200
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
}`,rS=`#define DISTANCE
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
}`,sS=`#define DISTANCE
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
}`,oS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lS=`uniform float scale;
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
}`,uS=`uniform vec3 diffuse;
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
}`,cS=`#include <common>
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
}`,fS=`uniform vec3 diffuse;
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
}`,hS=`#define LAMBERT
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
}`,dS=`uniform vec3 diffuse;
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
}`,pS=`#define MATCAP
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
}`,mS=`#define MATCAP
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
}`,gS=`#define NORMAL
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
}`,vS=`#define NORMAL
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
}`,_S=`#define PHONG
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
}`,xS=`#define PHONG
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
}`,yS=`#define STANDARD
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
}`,MS=`#define STANDARD
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
}`,SS=`#define TOON
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
}`,wS=`#define TOON
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
}`,ES=`uniform float size;
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
}`,TS=`uniform vec3 diffuse;
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
}`,CS=`#include <common>
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
}`,bS=`uniform vec3 color;
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
}`,AS=`uniform float rotation;
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
}`,LS=`uniform vec3 diffuse;
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
}`,Ae={alphamap_fragment:ty,alphamap_pars_fragment:ny,alphatest_fragment:iy,alphatest_pars_fragment:ry,aomap_fragment:sy,aomap_pars_fragment:oy,begin_vertex:ay,beginnormal_vertex:ly,bsdfs:uy,iridescence_fragment:cy,bumpmap_pars_fragment:fy,clipping_planes_fragment:hy,clipping_planes_pars_fragment:dy,clipping_planes_pars_vertex:py,clipping_planes_vertex:my,color_fragment:gy,color_pars_fragment:vy,color_pars_vertex:_y,color_vertex:xy,common:yy,cube_uv_reflection_fragment:My,defaultnormal_vertex:Sy,displacementmap_pars_vertex:wy,displacementmap_vertex:Ey,emissivemap_fragment:Ty,emissivemap_pars_fragment:Cy,encodings_fragment:by,encodings_pars_fragment:Ay,envmap_fragment:Ly,envmap_common_pars_fragment:Py,envmap_pars_fragment:Ry,envmap_pars_vertex:Dy,envmap_physical_pars_fragment:Hy,envmap_vertex:Iy,fog_vertex:Ny,fog_pars_vertex:Fy,fog_fragment:zy,fog_pars_fragment:ky,gradientmap_pars_fragment:Oy,lightmap_fragment:Uy,lightmap_pars_fragment:By,lights_lambert_vertex:Vy,lights_pars_begin:Gy,lights_toon_fragment:Wy,lights_toon_pars_fragment:jy,lights_phong_fragment:Xy,lights_phong_pars_fragment:qy,lights_physical_fragment:Yy,lights_physical_pars_fragment:$y,lights_fragment_begin:Zy,lights_fragment_maps:Ky,lights_fragment_end:Qy,logdepthbuf_fragment:Jy,logdepthbuf_pars_fragment:eM,logdepthbuf_pars_vertex:tM,logdepthbuf_vertex:nM,map_fragment:iM,map_pars_fragment:rM,map_particle_fragment:sM,map_particle_pars_fragment:oM,metalnessmap_fragment:aM,metalnessmap_pars_fragment:lM,morphcolor_vertex:uM,morphnormal_vertex:cM,morphtarget_pars_vertex:fM,morphtarget_vertex:hM,normal_fragment_begin:dM,normal_fragment_maps:pM,normal_pars_fragment:mM,normal_pars_vertex:gM,normal_vertex:vM,normalmap_pars_fragment:_M,clearcoat_normal_fragment_begin:xM,clearcoat_normal_fragment_maps:yM,clearcoat_pars_fragment:MM,iridescence_pars_fragment:SM,output_fragment:wM,packing:EM,premultiplied_alpha_fragment:TM,project_vertex:CM,dithering_fragment:bM,dithering_pars_fragment:AM,roughnessmap_fragment:LM,roughnessmap_pars_fragment:PM,shadowmap_pars_fragment:RM,shadowmap_pars_vertex:DM,shadowmap_vertex:IM,shadowmask_pars_fragment:NM,skinbase_vertex:FM,skinning_pars_vertex:zM,skinning_vertex:kM,skinnormal_vertex:OM,specularmap_fragment:UM,specularmap_pars_fragment:BM,tonemapping_fragment:VM,tonemapping_pars_fragment:GM,transmission_fragment:HM,transmission_pars_fragment:WM,uv_pars_fragment:jM,uv_pars_vertex:XM,uv_vertex:qM,uv2_pars_fragment:YM,uv2_pars_vertex:$M,uv2_vertex:ZM,worldpos_vertex:KM,background_vert:QM,background_frag:JM,cube_vert:eS,cube_frag:tS,depth_vert:nS,depth_frag:iS,distanceRGBA_vert:rS,distanceRGBA_frag:sS,equirect_vert:oS,equirect_frag:aS,linedashed_vert:lS,linedashed_frag:uS,meshbasic_vert:cS,meshbasic_frag:fS,meshlambert_vert:hS,meshlambert_frag:dS,meshmatcap_vert:pS,meshmatcap_frag:mS,meshnormal_vert:gS,meshnormal_frag:vS,meshphong_vert:_S,meshphong_frag:xS,meshphysical_vert:yS,meshphysical_frag:MS,meshtoon_vert:SS,meshtoon_frag:wS,points_vert:ES,points_frag:TS,shadow_vert:CS,shadow_frag:bS,sprite_vert:AS,sprite_frag:LS},ae={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Bn},uv2Transform:{value:new Bn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Bn}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Bn}}},kn={basic:{uniforms:Mt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:Mt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.fog,ae.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:Mt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:Mt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:Mt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:Mt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:Mt([ae.points,ae.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:Mt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:Mt([ae.common,ae.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:Mt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:Mt([ae.sprite,ae.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new Bn},t2D:{value:null}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},cube:{uniforms:Mt([ae.envmap,{opacity:{value:1}}]),vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:Mt([ae.common,ae.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:Mt([ae.lights,ae.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};kn.physical={uniforms:Mt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Se(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};function PS(n,e,t,i,r,s){const o=new xe(0);let a=r===!0?0:1,l,u,c=null,f=0,h=null;function g(p,d){let m=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=e.get(v));const x=n.xr,w=x.getSession&&x.getSession();w&&w.environmentBlendMode==="additive"&&(v=null),v===null?_(o,a):v&&v.isColor&&(_(v,1),m=!0),(n.autoClear||m)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ml)?(u===void 0&&(u=new Ut(new To(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:ds(kn.cube.uniforms),vertexShader:kn.cube.vertexShader,fragmentShader:kn.cube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(c!==v||f!==v.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,c=v,f=v.version,h=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ut(new Co(2,2),new An({name:"BackgroundMaterial",uniforms:ds(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:po,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||f!==v.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,c=v,f=v.version,h=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,d){t.buffers.color.setClear(p.r,p.g,p.b,d,s)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),a=d,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,_(o,a)},render:g}}function RS(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=d(null);let u=l,c=!1;function f(F,q,V,j,R){let I=!1;if(o){const k=p(j,V,q);u!==k&&(u=k,g(u.object)),I=m(F,j,V,R),I&&v(F,j,V,R)}else{const k=q.wireframe===!0;(u.geometry!==j.id||u.program!==V.id||u.wireframe!==k)&&(u.geometry=j.id,u.program=V.id,u.wireframe=k,I=!0)}R!==null&&t.update(R,34963),(I||c)&&(c=!1,y(F,q,V,j),R!==null&&n.bindBuffer(34963,t.get(R).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function g(F){return i.isWebGL2?n.bindVertexArray(F):s.bindVertexArrayOES(F)}function _(F){return i.isWebGL2?n.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function p(F,q,V){const j=V.wireframe===!0;let R=a[F.id];R===void 0&&(R={},a[F.id]=R);let I=R[q.id];I===void 0&&(I={},R[q.id]=I);let k=I[j];return k===void 0&&(k=d(h()),I[j]=k),k}function d(F){const q=[],V=[],j=[];for(let R=0;R<r;R++)q[R]=0,V[R]=0,j[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:V,attributeDivisors:j,object:F,attributes:{},index:null}}function m(F,q,V,j){const R=u.attributes,I=q.attributes;let k=0;const Y=V.getAttributes();for(const W in Y)if(Y[W].location>=0){const ce=R[W];let de=I[W];if(de===void 0&&(W==="instanceMatrix"&&F.instanceMatrix&&(de=F.instanceMatrix),W==="instanceColor"&&F.instanceColor&&(de=F.instanceColor)),ce===void 0||ce.attribute!==de||de&&ce.data!==de.data)return!0;k++}return u.attributesNum!==k||u.index!==j}function v(F,q,V,j){const R={},I=q.attributes;let k=0;const Y=V.getAttributes();for(const W in Y)if(Y[W].location>=0){let ce=I[W];ce===void 0&&(W==="instanceMatrix"&&F.instanceMatrix&&(ce=F.instanceMatrix),W==="instanceColor"&&F.instanceColor&&(ce=F.instanceColor));const de={};de.attribute=ce,ce&&ce.data&&(de.data=ce.data),R[W]=de,k++}u.attributes=R,u.attributesNum=k,u.index=j}function x(){const F=u.newAttributes;for(let q=0,V=F.length;q<V;q++)F[q]=0}function w(F){M(F,0)}function M(F,q){const V=u.newAttributes,j=u.enabledAttributes,R=u.attributeDivisors;V[F]=1,j[F]===0&&(n.enableVertexAttribArray(F),j[F]=1),R[F]!==q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,q),R[F]=q)}function b(){const F=u.newAttributes,q=u.enabledAttributes;for(let V=0,j=q.length;V<j;V++)q[V]!==F[V]&&(n.disableVertexAttribArray(V),q[V]=0)}function P(F,q,V,j,R,I){i.isWebGL2===!0&&(V===5124||V===5125)?n.vertexAttribIPointer(F,q,V,R,I):n.vertexAttribPointer(F,q,V,j,R,I)}function y(F,q,V,j){if(i.isWebGL2===!1&&(F.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const R=j.attributes,I=V.getAttributes(),k=q.defaultAttributeValues;for(const Y in I){const W=I[Y];if(W.location>=0){let Q=R[Y];if(Q===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(Q=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(Q=F.instanceColor)),Q!==void 0){const ce=Q.normalized,de=Q.itemSize,G=t.get(Q);if(G===void 0)continue;const Ie=G.buffer,Ee=G.type,we=G.bytesPerElement;if(Q.isInterleavedBufferAttribute){const fe=Q.data,Fe=fe.stride,Le=Q.offset;if(fe.isInstancedInterleavedBuffer){for(let ye=0;ye<W.locationSize;ye++)M(W.location+ye,fe.meshPerAttribute);F.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ye=0;ye<W.locationSize;ye++)w(W.location+ye);n.bindBuffer(34962,Ie);for(let ye=0;ye<W.locationSize;ye++)P(W.location+ye,de/W.locationSize,Ee,ce,Fe*we,(Le+de/W.locationSize*ye)*we)}else{if(Q.isInstancedBufferAttribute){for(let fe=0;fe<W.locationSize;fe++)M(W.location+fe,Q.meshPerAttribute);F.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let fe=0;fe<W.locationSize;fe++)w(W.location+fe);n.bindBuffer(34962,Ie);for(let fe=0;fe<W.locationSize;fe++)P(W.location+fe,de/W.locationSize,Ee,ce,de*we,de/W.locationSize*fe*we)}}else if(k!==void 0){const ce=k[Y];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(W.location,ce);break;case 3:n.vertexAttrib3fv(W.location,ce);break;case 4:n.vertexAttrib4fv(W.location,ce);break;default:n.vertexAttrib1fv(W.location,ce)}}}}b()}function A(){oe();for(const F in a){const q=a[F];for(const V in q){const j=q[V];for(const R in j)_(j[R].object),delete j[R];delete q[V]}delete a[F]}}function N(F){if(a[F.id]===void 0)return;const q=a[F.id];for(const V in q){const j=q[V];for(const R in j)_(j[R].object),delete j[R];delete q[V]}delete a[F.id]}function O(F){for(const q in a){const V=a[q];if(V[F.id]===void 0)continue;const j=V[F.id];for(const R in j)_(j[R].object),delete j[R];delete V[F.id]}}function oe(){K(),c=!0,u!==l&&(u=l,g(u.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:oe,resetDefaultState:K,dispose:A,releaseStatesOfGeometry:N,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:w,disableUnusedAttributes:b}}function DS(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,f){if(f===0)return;let h,g;if(r)h=n,g="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[g](s,u,c,f),t.update(c,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function IS(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){if(P==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),g=n.getParameter(3379),_=n.getParameter(34076),p=n.getParameter(34921),d=n.getParameter(36347),m=n.getParameter(36348),v=n.getParameter(36349),x=h>0,w=o||e.has("OES_texture_float"),M=x&&w,b=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:d,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:M,maxSamples:b}}function NS(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ji,a=new Bn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,g){const _=f.length!==0||h||i!==0||r;return r=h,t=c(f,g,0),i=f.length,_},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(f,h,g){const _=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,m=n.get(f);if(!r||_===null||_.length===0||s&&!d)s?c(null):u();else{const v=s?0:i,x=v*4;let w=m.clippingState||null;l.value=w,w=c(_,h,x,g);for(let M=0;M!==x;++M)w[M]=t[M];m.clippingState=w,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,g,_){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=l.value,_!==!0||d===null){const m=g+p*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(d===null||d.length<m)&&(d=new Float32Array(m));for(let x=0,w=g;x!==p;++x,w+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(d,w),d[w+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function FS(n){let e=new WeakMap;function t(o,a){return a===Tc?o.mapping=cs:a===Cc&&(o.mapping=fs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Tc||a===Cc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Kx(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Lf extends Xg{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yr=4,Fd=[.125,.215,.35,.446,.526,.582],Yi=20,Tu=new Lf,zd=new xe;let Cu=null;const Xi=(1+Math.sqrt(5))/2,Fr=1/Xi,kd=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Xi,Fr),new D(0,Xi,-Fr),new D(Fr,0,Xi),new D(-Fr,0,Xi),new D(Xi,Fr,0),new D(-Xi,Fr,0)];class Od{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Cu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cu),e.scissorTest=!1,fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cu=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:mo,format:Mn,encoding:fr,depthBuffer:!1},r=Ud(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ud(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zS(s)),this._blurMaterial=kS(s,e,t)}return r}_compileMaterial(e){const t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,Tu)}_sceneToCubeUV(e,t,i,r){const a=new on(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(zd),c.toneMapping=ei,c.autoClear=!1;const g=new _s({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),_=new Ut(new To,g);let p=!1;const d=e.background;d?d.isColor&&(g.color.copy(d),e.background=null,p=!0):(g.color.copy(zd),p=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const x=this._cubeSize;fa(r,v*x,m>2?x:0,x,x),c.setRenderTarget(r),p&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===cs||e.mapping===fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ut(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;fa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Tu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=kd[(r-1)%kd.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Ut(this._lodPlanes[r],u),h=u.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Yi-1),p=s/_,d=isFinite(s)?1+Math.floor(c*p):Yi;d>Yi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Yi}`);const m=[];let v=0;for(let P=0;P<Yi;++P){const y=P/p,A=Math.exp(-y*y/2);m.push(A),P===0?v+=A:P<d&&(v+=2*A)}for(let P=0;P<m.length;P++)m[P]=m[P]/v;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-i;const w=this._sizeLods[r],M=3*w*(r>x-Yr?r-x+Yr:0),b=4*(this._cubeSize-w);fa(t,M,b,3*w,2*w),l.setRenderTarget(t),l.render(f,Tu)}}function zS(n){const e=[],t=[],i=[];let r=n;const s=n-Yr+1+Fd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Yr?l=Fd[o-n+Yr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],g=6,_=6,p=3,d=2,m=1,v=new Float32Array(p*_*g),x=new Float32Array(d*_*g),w=new Float32Array(m*_*g);for(let b=0;b<g;b++){const P=b%3*2/3-1,y=b>2?0:-1,A=[P,y,0,P+2/3,y,0,P+2/3,y+1,0,P,y,0,P+2/3,y+1,0,P,y+1,0];v.set(A,p*_*b),x.set(h,d*_*b);const N=[b,b,b,b,b,b];w.set(N,m*_*b)}const M=new Jt;M.setAttribute("position",new Tn(v,p)),M.setAttribute("uv",new Tn(x,d)),M.setAttribute("faceIndex",new Tn(w,m)),e.push(M),r>Yr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ud(n,e,t){const i=new ti(n,e,t);return i.texture.mapping=ml,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function kS(n,e,t){const i=new Float32Array(Yi),r=new D(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pf(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Bd(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pf(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Vd(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Pf(){return`

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
	`}function OS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Tc||l===Cc,c=l===cs||l===fs;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Od(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new Od(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function US(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function BS(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],34962);const g=f.morphAttributes;for(const _ in g){const p=g[_];for(let d=0,m=p.length;d<m;d++)e.update(p[d],34962)}}function u(f){const h=[],g=f.index,_=f.attributes.position;let p=0;if(g!==null){const v=g.array;p=g.version;for(let x=0,w=v.length;x<w;x+=3){const M=v[x+0],b=v[x+1],P=v[x+2];h.push(M,b,b,P,P,M)}}else{const v=_.array;p=_.version;for(let x=0,w=v.length/3-1;x<w;x+=3){const M=x+0,b=x+1,P=x+2;h.push(M,b,b,P,P,M)}}const d=new(zg(h)?Wg:Hg)(h,1);d.version=p;const m=s.get(f);m&&e.remove(m),s.set(f,d)}function c(f){const h=s.get(f);if(h){const g=f.index;g!==null&&h.version<g.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function VS(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function c(h,g){n.drawElements(s,g,a,h*l),t.update(g,s,1)}function f(h,g,_){if(_===0)return;let p,d;if(r)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,g,a,h*l,_),t.update(g,s,_)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function GS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function HS(n,e){return n[0]-e[0]}function WS(n,e){return Math.abs(e[1])-Math.abs(n[1])}function bu(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function jS(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new wt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f,h){const g=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,d=p!==void 0?p.length:0;let m=s.get(c);if(m===void 0||m.count!==d){let V=function(){F.dispose(),s.delete(c),c.removeEventListener("dispose",V)};var _=V;m!==void 0&&m.texture.dispose();const w=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,b=c.morphAttributes.color!==void 0,P=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],A=c.morphAttributes.color||[];let N=0;w===!0&&(N=1),M===!0&&(N=2),b===!0&&(N=3);let O=c.attributes.position.count*N,oe=1;O>e.maxTextureSize&&(oe=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const K=new Float32Array(O*oe*4*d),F=new Bg(K,O,oe,d);F.type=Ji,F.needsUpdate=!0;const q=N*4;for(let j=0;j<d;j++){const R=P[j],I=y[j],k=A[j],Y=O*oe*4*j;for(let W=0;W<R.count;W++){const Q=W*q;w===!0&&(o.fromBufferAttribute(R,W),R.normalized===!0&&bu(o,R),K[Y+Q+0]=o.x,K[Y+Q+1]=o.y,K[Y+Q+2]=o.z,K[Y+Q+3]=0),M===!0&&(o.fromBufferAttribute(I,W),I.normalized===!0&&bu(o,I),K[Y+Q+4]=o.x,K[Y+Q+5]=o.y,K[Y+Q+6]=o.z,K[Y+Q+7]=0),b===!0&&(o.fromBufferAttribute(k,W),k.normalized===!0&&bu(o,k),K[Y+Q+8]=o.x,K[Y+Q+9]=o.y,K[Y+Q+10]=o.z,K[Y+Q+11]=k.itemSize===4?o.w:1)}}m={count:d,texture:F,size:new Se(O,oe)},s.set(c,m),c.addEventListener("dispose",V)}let v=0;for(let w=0;w<g.length;w++)v+=g[w];const x=c.morphTargetsRelative?1:1-v;h.getUniforms().setValue(n,"morphTargetBaseInfluence",x),h.getUniforms().setValue(n,"morphTargetInfluences",g),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const p=g===void 0?0:g.length;let d=i[c.id];if(d===void 0||d.length!==p){d=[];for(let M=0;M<p;M++)d[M]=[M,0];i[c.id]=d}for(let M=0;M<p;M++){const b=d[M];b[0]=M,b[1]=g[M]}d.sort(WS);for(let M=0;M<8;M++)M<p&&d[M][1]?(a[M][0]=d[M][0],a[M][1]=d[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(HS);const m=c.morphAttributes.position,v=c.morphAttributes.normal;let x=0;for(let M=0;M<8;M++){const b=a[M],P=b[0],y=b[1];P!==Number.MAX_SAFE_INTEGER&&y?(m&&c.getAttribute("morphTarget"+M)!==m[P]&&c.setAttribute("morphTarget"+M,m[P]),v&&c.getAttribute("morphNormal"+M)!==v[P]&&c.setAttribute("morphNormal"+M,v[P]),r[M]=y,x+=y):(m&&c.hasAttribute("morphTarget"+M)===!0&&c.deleteAttribute("morphTarget"+M),v&&c.hasAttribute("morphNormal"+M)===!0&&c.deleteAttribute("morphNormal"+M),r[M]=0)}const w=c.morphTargetsRelative?1:1-x;h.getUniforms().setValue(n,"morphTargetBaseInfluence",w),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function XS(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);return r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Zg=new fn,Kg=new Bg,Qg=new kx,Jg=new qg,Gd=[],Hd=[],Wd=new Float32Array(16),jd=new Float32Array(9),Xd=new Float32Array(4);function xs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Gd[r];if(s===void 0&&(s=new Float32Array(r),Gd[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _l(n,e){let t=Hd[e];t===void 0&&(t=new Int32Array(e),Hd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function YS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function $S(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function ZS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function KS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Pt(t,i))return;Xd.set(i),n.uniformMatrix2fv(this.addr,!1,Xd),Rt(t,i)}}function QS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Pt(t,i))return;jd.set(i),n.uniformMatrix3fv(this.addr,!1,jd),Rt(t,i)}}function JS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Pt(t,i))return;Wd.set(i),n.uniformMatrix4fv(this.addr,!1,Wd),Rt(t,i)}}function e1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function t1(n,e){const t=this.cache;Pt(t,e)||(n.uniform2iv(this.addr,e),Rt(t,e))}function n1(n,e){const t=this.cache;Pt(t,e)||(n.uniform3iv(this.addr,e),Rt(t,e))}function i1(n,e){const t=this.cache;Pt(t,e)||(n.uniform4iv(this.addr,e),Rt(t,e))}function r1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function s1(n,e){const t=this.cache;Pt(t,e)||(n.uniform2uiv(this.addr,e),Rt(t,e))}function o1(n,e){const t=this.cache;Pt(t,e)||(n.uniform3uiv(this.addr,e),Rt(t,e))}function a1(n,e){const t=this.cache;Pt(t,e)||(n.uniform4uiv(this.addr,e),Rt(t,e))}function l1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Zg,r)}function u1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Qg,r)}function c1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Jg,r)}function f1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Kg,r)}function h1(n){switch(n){case 5126:return qS;case 35664:return YS;case 35665:return $S;case 35666:return ZS;case 35674:return KS;case 35675:return QS;case 35676:return JS;case 5124:case 35670:return e1;case 35667:case 35671:return t1;case 35668:case 35672:return n1;case 35669:case 35673:return i1;case 5125:return r1;case 36294:return s1;case 36295:return o1;case 36296:return a1;case 35678:case 36198:case 36298:case 36306:case 35682:return l1;case 35679:case 36299:case 36307:return u1;case 35680:case 36300:case 36308:case 36293:return c1;case 36289:case 36303:case 36311:case 36292:return f1}}function d1(n,e){n.uniform1fv(this.addr,e)}function p1(n,e){const t=xs(e,this.size,2);n.uniform2fv(this.addr,t)}function m1(n,e){const t=xs(e,this.size,3);n.uniform3fv(this.addr,t)}function g1(n,e){const t=xs(e,this.size,4);n.uniform4fv(this.addr,t)}function v1(n,e){const t=xs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function _1(n,e){const t=xs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function x1(n,e){const t=xs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function y1(n,e){n.uniform1iv(this.addr,e)}function M1(n,e){n.uniform2iv(this.addr,e)}function S1(n,e){n.uniform3iv(this.addr,e)}function w1(n,e){n.uniform4iv(this.addr,e)}function E1(n,e){n.uniform1uiv(this.addr,e)}function T1(n,e){n.uniform2uiv(this.addr,e)}function C1(n,e){n.uniform3uiv(this.addr,e)}function b1(n,e){n.uniform4uiv(this.addr,e)}function A1(n,e,t){const i=e.length,r=_l(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Zg,r[s])}function L1(n,e,t){const i=e.length,r=_l(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Qg,r[s])}function P1(n,e,t){const i=e.length,r=_l(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Jg,r[s])}function R1(n,e,t){const i=e.length,r=_l(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Kg,r[s])}function D1(n){switch(n){case 5126:return d1;case 35664:return p1;case 35665:return m1;case 35666:return g1;case 35674:return v1;case 35675:return _1;case 35676:return x1;case 5124:case 35670:return y1;case 35667:case 35671:return M1;case 35668:case 35672:return S1;case 35669:case 35673:return w1;case 5125:return E1;case 36294:return T1;case 36295:return C1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return A1;case 35679:case 36299:case 36307:return L1;case 35680:case 36300:case 36308:case 36293:return P1;case 36289:case 36303:case 36311:case 36292:return R1}}class I1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=h1(t.type)}}class N1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=D1(t.type)}}class F1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Au=/(\w+)(\])?(\[|\.)?/g;function qd(n,e){n.seq.push(e),n.map[e.id]=e}function z1(n,e,t){const i=n.name,r=i.length;for(Au.lastIndex=0;;){const s=Au.exec(i),o=Au.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){qd(t,u===void 0?new I1(a,n,e):new N1(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new F1(a),qd(t,f)),t=f}}}class ba{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);z1(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Yd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let k1=0;function O1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function U1(n){switch(n){case fr:return["Linear","( value )"];case Xe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function $d(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+O1(n.getShaderSource(e),o)}else return r}function B1(n,e){const t=U1(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function V1(n,e){let t;switch(e){case cx:t="Linear";break;case fx:t="Reinhard";break;case hx:t="OptimizedCineon";break;case dx:t="ACESFilmic";break;case px:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function G1(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Us).join(`
`)}function H1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function W1(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Us(n){return n!==""}function Zd(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const j1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(n){return n.replace(j1,X1)}function X1(n,e){const t=Ae[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Rc(t)}const q1=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Y1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qd(n){return n.replace(Y1,e0).replace(q1,$1)}function $1(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),e0(n,e,t,i)}function e0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jd(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Z1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Rg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===V_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Os&&(e="SHADOWMAP_TYPE_VSM"),e}function K1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case cs:case fs:e="ENVMAP_TYPE_CUBE";break;case ml:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Q1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case fs:e="ENVMAP_MODE_REFRACTION";break}return e}function J1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case pl:e="ENVMAP_BLENDING_MULTIPLY";break;case lx:e="ENVMAP_BLENDING_MIX";break;case ux:e="ENVMAP_BLENDING_ADD";break}return e}function ew(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function tw(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Z1(t),u=K1(t),c=Q1(t),f=J1(t),h=ew(t),g=t.isWebGL2?"":G1(t),_=H1(s),p=r.createProgram();let d,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[_].filter(Us).join(`
`),d.length>0&&(d+=`
`),m=[g,_].filter(Us).join(`
`),m.length>0&&(m+=`
`)):(d=[Jd(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),m=[g,Jd(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?Ae.tonemapping_pars_fragment:"",t.toneMapping!==ei?V1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ae.encodings_pars_fragment,B1("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Us).join(`
`)),o=Rc(o),o=Zd(o,t),o=Kd(o,t),a=Rc(a),a=Zd(a,t),a=Kd(a,t),o=Qd(o),a=Qd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["#define varying in",t.glslVersion===Md?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Md?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=v+d+o,w=v+m+a,M=Yd(r,35633,x),b=Yd(r,35632,w);if(r.attachShader(p,M),r.attachShader(p,b),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const A=r.getProgramInfoLog(p).trim(),N=r.getShaderInfoLog(M).trim(),O=r.getShaderInfoLog(b).trim();let oe=!0,K=!0;if(r.getProgramParameter(p,35714)===!1){oe=!1;const F=$d(r,M,"vertex"),q=$d(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+F+`
`+q)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(N===""||O==="")&&(K=!1);K&&(this.diagnostics={runnable:oe,programLog:A,vertexShader:{log:N,prefix:d},fragmentShader:{log:O,prefix:m}})}r.deleteShader(M),r.deleteShader(b);let P;this.getUniforms=function(){return P===void 0&&(P=new ba(r,p)),P};let y;return this.getAttributes=function(){return y===void 0&&(y=W1(r,p)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=k1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=b,this}let nw=0;class iw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new rw(e);t.set(e,i)}return t.get(e)}}class rw{constructor(e){this.id=nw++,this.code=e,this.usedTimes=0}}function sw(n,e,t,i,r,s,o){const a=new Gg,l=new iw,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,A,N,O,oe){const K=O.fog,F=oe.geometry,q=y.isMeshStandardMaterial?O.environment:null,V=(y.isMeshStandardMaterial?t:e).get(y.envMap||q),j=!!V&&V.mapping===ml?V.image.height:null,R=_[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const I=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,k=I!==void 0?I.length:0;let Y=0;F.morphAttributes.position!==void 0&&(Y=1),F.morphAttributes.normal!==void 0&&(Y=2),F.morphAttributes.color!==void 0&&(Y=3);let W,Q,ce,de;if(R){const Fe=kn[R];W=Fe.vertexShader,Q=Fe.fragmentShader}else W=y.vertexShader,Q=y.fragmentShader,l.update(y),ce=l.getVertexShaderID(y),de=l.getFragmentShaderID(y);const G=n.getRenderTarget(),Ie=y.alphaTest>0,Ee=y.clearcoat>0,we=y.iridescence>0;return{isWebGL2:c,shaderID:R,shaderName:y.type,vertexShader:W,fragmentShader:Q,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:de,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,instancing:oe.isInstancedMesh===!0,instancingColor:oe.isInstancedMesh===!0&&oe.instanceColor!==null,supportsVertexTextures:h,outputEncoding:G===null?n.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:fr,map:!!y.map,matcap:!!y.matcap,envMap:!!V,envMapMode:V&&V.mapping,envMapCubeUVHeight:j,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Ix,tangentSpaceNormalMap:y.normalMapType===vs,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Xe,clearcoat:Ee,clearcoatMap:Ee&&!!y.clearcoatMap,clearcoatRoughnessMap:Ee&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:Ee&&!!y.clearcoatNormalMap,iridescence:we,iridescenceMap:we&&!!y.iridescenceMap,iridescenceThicknessMap:we&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===ts,alphaMap:!!y.alphaMap,alphaTest:Ie,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!F.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!K,useFog:y.fog===!0,fogExp2:K&&K.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:f,skinning:oe.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:Y,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:ei,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Fi,flipSided:y.side===En,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)A.push(N),A.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(m(A,y),v(A,y),A.push(n.outputEncoding)),A.push(y.customProgramCacheKey),A.join()}function m(y,A){y.push(A.precision),y.push(A.outputEncoding),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.combine),y.push(A.vertexUvs),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function v(y,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),A.fog&&a.enable(33),y.push(a.mask),a.disableAll(),A.useFog&&a.enable(0),A.flatShading&&a.enable(1),A.logarithmicDepthBuffer&&a.enable(2),A.skinning&&a.enable(3),A.morphTargets&&a.enable(4),A.morphNormals&&a.enable(5),A.morphColors&&a.enable(6),A.premultipliedAlpha&&a.enable(7),A.shadowMapEnabled&&a.enable(8),A.physicallyCorrectLights&&a.enable(9),A.doubleSided&&a.enable(10),A.flipSided&&a.enable(11),A.useDepthPacking&&a.enable(12),A.dithering&&a.enable(13),A.specularIntensityMap&&a.enable(14),A.specularColorMap&&a.enable(15),A.transmission&&a.enable(16),A.transmissionMap&&a.enable(17),A.thicknessMap&&a.enable(18),A.sheen&&a.enable(19),A.sheenColorMap&&a.enable(20),A.sheenRoughnessMap&&a.enable(21),A.decodeVideoTexture&&a.enable(22),A.opaque&&a.enable(23),y.push(a.mask)}function x(y){const A=_[y.type];let N;if(A){const O=kn[A];N=jg.clone(O.uniforms)}else N=y.uniforms;return N}function w(y,A){let N;for(let O=0,oe=u.length;O<oe;O++){const K=u[O];if(K.cacheKey===A){N=K,++N.usedTimes;break}}return N===void 0&&(N=new tw(n,A,y,s),u.push(N)),N}function M(y){if(--y.usedTimes===0){const A=u.indexOf(y);u[A]=u[u.length-1],u.pop(),y.destroy()}}function b(y){l.remove(y)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:x,acquireProgram:w,releaseProgram:M,releaseShaderCache:b,programs:u,dispose:P}}function ow(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function aw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ep(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function tp(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,g,_,p,d){let m=n[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:g,groupOrder:_,renderOrder:f.renderOrder,z:p,group:d},n[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=g,m.groupOrder=_,m.renderOrder=f.renderOrder,m.z=p,m.group=d),e++,m}function a(f,h,g,_,p,d){const m=o(f,h,g,_,p,d);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):t.push(m)}function l(f,h,g,_,p,d){const m=o(f,h,g,_,p,d);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):t.unshift(m)}function u(f,h){t.length>1&&t.sort(f||aw),i.length>1&&i.sort(h||ep),r.length>1&&r.sort(h||ep)}function c(){for(let f=e,h=n.length;f<h;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function lw(){let n=new WeakMap;function e(i,r){let s;return n.has(i)===!1?(s=new tp,n.set(i,[s])):r>=n.get(i).length?(s=new tp,n.get(i).push(s)):s=n.get(i)[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function uw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new xe};break;case"SpotLight":t={position:new D,direction:new D,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function cw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let fw=0;function hw(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function dw(n,e){const t=new uw,i=cw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let c=0;c<9;c++)r.probe.push(new D);const s=new D,o=new Je,a=new Je;function l(c,f){let h=0,g=0,_=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let p=0,d=0,m=0,v=0,x=0,w=0,M=0,b=0;c.sort(hw);const P=f!==!0?Math.PI:1;for(let A=0,N=c.length;A<N;A++){const O=c[A],oe=O.color,K=O.intensity,F=O.distance,q=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=oe.r*K*P,g+=oe.g*K*P,_+=oe.b*K*P;else if(O.isLightProbe)for(let V=0;V<9;V++)r.probe[V].addScaledVector(O.sh.coefficients[V],K);else if(O.isDirectionalLight){const V=t.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*P),O.castShadow){const j=O.shadow,R=i.get(O);R.shadowBias=j.bias,R.shadowNormalBias=j.normalBias,R.shadowRadius=j.radius,R.shadowMapSize=j.mapSize,r.directionalShadow[p]=R,r.directionalShadowMap[p]=q,r.directionalShadowMatrix[p]=O.shadow.matrix,w++}r.directional[p]=V,p++}else if(O.isSpotLight){const V=t.get(O);if(V.position.setFromMatrixPosition(O.matrixWorld),V.color.copy(oe).multiplyScalar(K*P),V.distance=F,V.coneCos=Math.cos(O.angle),V.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),V.decay=O.decay,O.castShadow){const j=O.shadow,R=i.get(O);R.shadowBias=j.bias,R.shadowNormalBias=j.normalBias,R.shadowRadius=j.radius,R.shadowMapSize=j.mapSize,r.spotShadow[m]=R,r.spotShadowMap[m]=q,r.spotShadowMatrix[m]=O.shadow.matrix,b++}r.spot[m]=V,m++}else if(O.isRectAreaLight){const V=t.get(O);V.color.copy(oe).multiplyScalar(K),V.halfWidth.set(O.width*.5,0,0),V.halfHeight.set(0,O.height*.5,0),r.rectArea[v]=V,v++}else if(O.isPointLight){const V=t.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*P),V.distance=O.distance,V.decay=O.decay,O.castShadow){const j=O.shadow,R=i.get(O);R.shadowBias=j.bias,R.shadowNormalBias=j.normalBias,R.shadowRadius=j.radius,R.shadowMapSize=j.mapSize,R.shadowCameraNear=j.camera.near,R.shadowCameraFar=j.camera.far,r.pointShadow[d]=R,r.pointShadowMap[d]=q,r.pointShadowMatrix[d]=O.shadow.matrix,M++}r.point[d]=V,d++}else if(O.isHemisphereLight){const V=t.get(O);V.skyColor.copy(O.color).multiplyScalar(K*P),V.groundColor.copy(O.groundColor).multiplyScalar(K*P),r.hemi[x]=V,x++}}v>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=g,r.ambient[2]=_;const y=r.hash;(y.directionalLength!==p||y.pointLength!==d||y.spotLength!==m||y.rectAreaLength!==v||y.hemiLength!==x||y.numDirectionalShadows!==w||y.numPointShadows!==M||y.numSpotShadows!==b)&&(r.directional.length=p,r.spot.length=m,r.rectArea.length=v,r.point.length=d,r.hemi.length=x,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=M,r.spotShadowMatrix.length=b,y.directionalLength=p,y.pointLength=d,y.spotLength=m,y.rectAreaLength=v,y.hemiLength=x,y.numDirectionalShadows=w,y.numPointShadows=M,y.numSpotShadows=b,r.version=fw++)}function u(c,f){let h=0,g=0,_=0,p=0,d=0;const m=f.matrixWorldInverse;for(let v=0,x=c.length;v<x;v++){const w=c[v];if(w.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(w.isSpotLight){const M=r.spot[_];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),_++}else if(w.isRectAreaLight){const M=r.rectArea[p];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),a.identity(),o.copy(w.matrixWorld),o.premultiply(m),a.extractRotation(o),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(w.isPointLight){const M=r.point[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),g++}else if(w.isHemisphereLight){const M=r.hemi[d];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(m),d++}}}return{setup:l,setupView:u,state:r}}function np(n,e){const t=new dw(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function pw(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new np(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new np(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class t0 extends _t{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class n0 extends _t{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gw=`uniform sampler2D shadow_pass;
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
}`;function vw(n,e,t){let i=new Yg;const r=new Se,s=new Se,o=new wt,a=new t0({depthPacking:Dx}),l=new n0,u={},c=t.maxTextureSize,f={0:En,1:po,2:Fi},h=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:mw,fragmentShader:gw}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const _=new Jt;_.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Ut(_,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rg,this.render=function(w,M,b){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;const P=n.getRenderTarget(),y=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Di),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let O=0,oe=w.length;O<oe;O++){const K=w[O],F=K.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const q=F.getFrameExtents();if(r.multiply(q),s.copy(F.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/q.x),r.x=s.x*q.x,F.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/q.y),r.y=s.y*q.y,F.mapSize.y=s.y)),F.map===null&&!F.isPointLightShadow&&this.type===Os&&(F.map=new ti(r.x,r.y),F.map.texture.name=K.name+".shadowMap",F.mapPass=new ti(r.x,r.y),F.camera.updateProjectionMatrix()),F.map===null){const j={minFilter:Ft,magFilter:Ft,format:Mn};F.map=new ti(r.x,r.y,j),F.map.texture.name=K.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const V=F.getViewportCount();for(let j=0;j<V;j++){const R=F.getViewport(j);o.set(s.x*R.x,s.y*R.y,s.x*R.z,s.y*R.w),N.viewport(o),F.updateMatrices(K,j),i=F.getFrustum(),x(M,b,F.camera,K,this.type)}!F.isPointLightShadow&&this.type===Os&&m(F,b),F.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(P,y,A)};function m(w,M){const b=e.update(p);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(M,null,b,h,p,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(M,null,b,g,p,null)}function v(w,M,b,P,y,A){let N=null;const O=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0?N=O:N=b.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const oe=N.uuid,K=M.uuid;let F=u[oe];F===void 0&&(F={},u[oe]=F);let q=F[K];q===void 0&&(q=N.clone(),F[K]=q),N=q}return N.visible=M.visible,N.wireframe=M.wireframe,A===Os?N.side=M.shadowSide!==null?M.shadowSide:M.side:N.side=M.shadowSide!==null?M.shadowSide:f[M.side],N.alphaMap=M.alphaMap,N.alphaTest=M.alphaTest,N.clipShadows=M.clipShadows,N.clippingPlanes=M.clippingPlanes,N.clipIntersection=M.clipIntersection,N.displacementMap=M.displacementMap,N.displacementScale=M.displacementScale,N.displacementBias=M.displacementBias,N.wireframeLinewidth=M.wireframeLinewidth,N.linewidth=M.linewidth,b.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(b.matrixWorld),N.nearDistance=P,N.farDistance=y),N}function x(w,M,b,P,y){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Os)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const O=e.update(w),oe=w.material;if(Array.isArray(oe)){const K=O.groups;for(let F=0,q=K.length;F<q;F++){const V=K[F],j=oe[V.materialIndex];if(j&&j.visible){const R=v(w,j,P,b.near,b.far,y);n.renderBufferDirect(b,null,O,R,w,V)}}}else if(oe.visible){const K=v(w,oe,P,b.near,b.far,y);n.renderBufferDirect(b,null,O,K,w,null)}}const N=w.children;for(let O=0,oe=N.length;O<oe;O++)x(N[O],M,b,P,y)}}function _w(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const ne=new wt;let ee=null;const me=new wt(0,0,0,0);return{setMask:function(le){ee!==le&&!L&&(n.colorMask(le,le,le,le),ee=le)},setLocked:function(le){L=le},setClear:function(le,pe,ie,Me,Oe){Oe===!0&&(le*=Me,pe*=Me,ie*=Me),ne.set(le,pe,ie,Me),me.equals(ne)===!1&&(n.clearColor(le,pe,ie,Me),me.copy(ne))},reset:function(){L=!1,ee=null,me.set(-1,0,0,0)}}}function s(){let L=!1,ne=null,ee=null,me=null;return{setTest:function(le){le?de(2929):G(2929)},setMask:function(le){ne!==le&&!L&&(n.depthMask(le),ne=le)},setFunc:function(le){if(ee!==le){if(le)switch(le){case tx:n.depthFunc(512);break;case nx:n.depthFunc(519);break;case ix:n.depthFunc(513);break;case Ec:n.depthFunc(515);break;case rx:n.depthFunc(514);break;case sx:n.depthFunc(518);break;case ox:n.depthFunc(516);break;case ax:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);ee=le}},setLocked:function(le){L=le},setClear:function(le){me!==le&&(n.clearDepth(le),me=le)},reset:function(){L=!1,ne=null,ee=null,me=null}}}function o(){let L=!1,ne=null,ee=null,me=null,le=null,pe=null,ie=null,Me=null,Oe=null;return{setTest:function(Ue){L||(Ue?de(2960):G(2960))},setMask:function(Ue){ne!==Ue&&!L&&(n.stencilMask(Ue),ne=Ue)},setFunc:function(Ue,Tt,Ln){(ee!==Ue||me!==Tt||le!==Ln)&&(n.stencilFunc(Ue,Tt,Ln),ee=Ue,me=Tt,le=Ln)},setOp:function(Ue,Tt,Ln){(pe!==Ue||ie!==Tt||Me!==Ln)&&(n.stencilOp(Ue,Tt,Ln),pe=Ue,ie=Tt,Me=Ln)},setLocked:function(Ue){L=Ue},setClear:function(Ue){Oe!==Ue&&(n.clearStencil(Ue),Oe=Ue)},reset:function(){L=!1,ne=null,ee=null,me=null,le=null,pe=null,ie=null,Me=null,Oe=null}}}const a=new r,l=new s,u=new o;let c={},f={},h=new WeakMap,g=[],_=null,p=!1,d=null,m=null,v=null,x=null,w=null,M=null,b=null,P=!1,y=null,A=null,N=null,O=null,oe=null;const K=n.getParameter(35661);let F=!1,q=0;const V=n.getParameter(7938);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),F=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),F=q>=2);let j=null,R={};const I=n.getParameter(3088),k=n.getParameter(2978),Y=new wt().fromArray(I),W=new wt().fromArray(k);function Q(L,ne,ee){const me=new Uint8Array(4),le=n.createTexture();n.bindTexture(L,le),n.texParameteri(L,10241,9728),n.texParameteri(L,10240,9728);for(let pe=0;pe<ee;pe++)n.texImage2D(ne+pe,0,6408,1,1,0,6408,5121,me);return le}const ce={};ce[3553]=Q(3553,3553,1),ce[34067]=Q(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),de(2929),l.setFunc(Ec),it(!1),ut(jh),de(2884),Le(Di);function de(L){c[L]!==!0&&(n.enable(L),c[L]=!0)}function G(L){c[L]!==!1&&(n.disable(L),c[L]=!1)}function Ie(L,ne){return f[L]!==ne?(n.bindFramebuffer(L,ne),f[L]=ne,i&&(L===36009&&(f[36160]=ne),L===36160&&(f[36009]=ne)),!0):!1}function Ee(L,ne){let ee=g,me=!1;if(L)if(ee=h.get(ne),ee===void 0&&(ee=[],h.set(ne,ee)),L.isWebGLMultipleRenderTargets){const le=L.texture;if(ee.length!==le.length||ee[0]!==36064){for(let pe=0,ie=le.length;pe<ie;pe++)ee[pe]=36064+pe;ee.length=le.length,me=!0}}else ee[0]!==36064&&(ee[0]=36064,me=!0);else ee[0]!==1029&&(ee[0]=1029,me=!0);me&&(t.isWebGL2?n.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function we(L){return _!==L?(n.useProgram(L),_=L,!0):!1}const fe={[qi]:32774,[W_]:32778,[j_]:32779};if(i)fe[$h]=32775,fe[Zh]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(fe[$h]=L.MIN_EXT,fe[Zh]=L.MAX_EXT)}const Fe={[X_]:0,[q_]:1,[Y_]:768,[Dg]:770,[ex]:776,[Q_]:774,[Z_]:772,[$_]:769,[Ig]:771,[J_]:775,[K_]:773};function Le(L,ne,ee,me,le,pe,ie,Me){if(L===Di){p===!0&&(G(3042),p=!1);return}if(p===!1&&(de(3042),p=!0),L!==H_){if(L!==d||Me!==P){if((m!==qi||w!==qi)&&(n.blendEquation(32774),m=qi,w=qi),Me)switch(L){case ts:n.blendFuncSeparate(1,771,1,771);break;case Xh:n.blendFunc(1,1);break;case qh:n.blendFuncSeparate(0,769,0,1);break;case Yh:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ts:n.blendFuncSeparate(770,771,1,771);break;case Xh:n.blendFunc(770,1);break;case qh:n.blendFuncSeparate(0,769,0,1);break;case Yh:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,x=null,M=null,b=null,d=L,P=Me}return}le=le||ne,pe=pe||ee,ie=ie||me,(ne!==m||le!==w)&&(n.blendEquationSeparate(fe[ne],fe[le]),m=ne,w=le),(ee!==v||me!==x||pe!==M||ie!==b)&&(n.blendFuncSeparate(Fe[ee],Fe[me],Fe[pe],Fe[ie]),v=ee,x=me,M=pe,b=ie),d=L,P=null}function ye(L,ne){L.side===Fi?G(2884):de(2884);let ee=L.side===En;ne&&(ee=!ee),it(ee),L.blending===ts&&L.transparent===!1?Le(Di):Le(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const me=L.stencilWrite;u.setTest(me),me&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ht(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?de(32926):G(32926)}function it(L){y!==L&&(L?n.frontFace(2304):n.frontFace(2305),y=L)}function ut(L){L!==U_?(de(2884),L!==A&&(L===jh?n.cullFace(1029):L===B_?n.cullFace(1028):n.cullFace(1032))):G(2884),A=L}function dt(L){L!==N&&(F&&n.lineWidth(L),N=L)}function Ht(L,ne,ee){L?(de(32823),(O!==ne||oe!==ee)&&(n.polygonOffset(ne,ee),O=ne,oe=ee)):G(32823)}function rt(L){L?de(3089):G(3089)}function ke(L){L===void 0&&(L=33984+K-1),j!==L&&(n.activeTexture(L),j=L)}function en(L,ne){j===null&&ke();let ee=R[j];ee===void 0&&(ee={type:void 0,texture:void 0},R[j]=ee),(ee.type!==L||ee.texture!==ne)&&(n.bindTexture(L,ne||ce[L]),ee.type=L,ee.texture=ne)}function tn(){const L=R[j];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function C(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function S(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function H(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function E(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(L){Y.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Y.copy(L))}function se(L){W.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),W.copy(L))}function te(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},j=null,R={},f={},h=new WeakMap,g=[],_=null,p=!1,d=null,m=null,v=null,x=null,w=null,M=null,b=null,P=!1,y=null,A=null,N=null,O=null,oe=null,Y.set(0,0,n.canvas.width,n.canvas.height),W.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:de,disable:G,bindFramebuffer:Ie,drawBuffers:Ee,useProgram:we,setBlending:Le,setMaterial:ye,setFlipSided:it,setCullFace:ut,setLineWidth:dt,setPolygonOffset:Ht,setScissorTest:rt,activeTexture:ke,bindTexture:en,unbindTexture:tn,compressedTexImage2D:C,texImage2D:ve,texImage3D:E,texStorage2D:re,texStorage3D:ue,texSubImage2D:S,texSubImage3D:H,compressedTexSubImage2D:J,scissor:$,viewport:se,reset:te}}function xw(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,S){return m?new OffscreenCanvas(C,S):go("canvas")}function x(C,S,H,J){let re=1;if((C.width>J||C.height>J)&&(re=J/Math.max(C.width,C.height)),re<1||S===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap){const ue=S?Pc:Math.floor,ve=ue(re*C.width),E=ue(re*C.height);p===void 0&&(p=v(ve,E));const $=H?v(ve,E):p;return $.width=ve,$.height=E,$.getContext("2d").drawImage(C,0,0,ve,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ve+"x"+E+")."),$}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function w(C){return wd(C.width)&&wd(C.height)}function M(C){return a?!1:C.wrapS!==yn||C.wrapT!==yn||C.minFilter!==Ft&&C.minFilter!==zt}function b(C,S){return C.generateMipmaps&&S&&C.minFilter!==Ft&&C.minFilter!==zt}function P(C){n.generateMipmap(C)}function y(C,S,H,J,re=!1){if(a===!1)return S;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ue=S;return S===6403&&(H===5126&&(ue=33326),H===5131&&(ue=33325),H===5121&&(ue=33321)),S===33319&&(H===5126&&(ue=33328),H===5131&&(ue=33327),H===5121&&(ue=33323)),S===6408&&(H===5126&&(ue=34836),H===5131&&(ue=34842),H===5121&&(ue=J===Xe&&re===!1?35907:32856),H===32819&&(ue=32854),H===32820&&(ue=32855)),(ue===33325||ue===33326||ue===33327||ue===33328||ue===34842||ue===34836)&&e.get("EXT_color_buffer_float"),ue}function A(C,S,H){return b(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==Ft&&C.minFilter!==zt?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function N(C){return C===Ft||C===Kh||C===Qh?9728:9729}function O(C){const S=C.target;S.removeEventListener("dispose",O),K(S),S.isVideoTexture&&_.delete(S)}function oe(C){const S=C.target;S.removeEventListener("dispose",oe),q(S)}function K(C){const S=i.get(C);if(S.__webglInit===void 0)return;const H=C.source,J=d.get(H);if(J){const re=J[S.__cacheKey];re.usedTimes--,re.usedTimes===0&&F(C),Object.keys(J).length===0&&d.delete(H)}i.remove(C)}function F(C){const S=i.get(C);n.deleteTexture(S.__webglTexture);const H=C.source,J=d.get(H);delete J[S.__cacheKey],o.memory.textures--}function q(C){const S=C.texture,H=i.get(C),J=i.get(S);if(J.__webglTexture!==void 0&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)n.deleteFramebuffer(H.__webglFramebuffer[re]),H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[re]);else{if(n.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let re=0;re<H.__webglColorRenderbuffer.length;re++)H.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[re]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let re=0,ue=S.length;re<ue;re++){const ve=i.get(S[re]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),o.memory.textures--),i.remove(S[re])}i.remove(S),i.remove(C)}let V=0;function j(){V=0}function R(){const C=V;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),V+=1,C}function I(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.encoding),S.join()}function k(C,S){const H=i.get(C);if(C.isVideoTexture&&en(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(H,C,S);return}}t.activeTexture(33984+S),t.bindTexture(3553,H.__webglTexture)}function Y(C,S){const H=i.get(C);if(C.version>0&&H.__version!==C.version){Ee(H,C,S);return}t.activeTexture(33984+S),t.bindTexture(35866,H.__webglTexture)}function W(C,S){const H=i.get(C);if(C.version>0&&H.__version!==C.version){Ee(H,C,S);return}t.activeTexture(33984+S),t.bindTexture(32879,H.__webglTexture)}function Q(C,S){const H=i.get(C);if(C.version>0&&H.__version!==C.version){we(H,C,S);return}t.activeTexture(33984+S),t.bindTexture(34067,H.__webglTexture)}const ce={[bc]:10497,[yn]:33071,[Ac]:33648},de={[Ft]:9728,[Kh]:9984,[Qh]:9986,[zt]:9729,[mx]:9985,[gl]:9987};function G(C,S,H){if(H?(n.texParameteri(C,10242,ce[S.wrapS]),n.texParameteri(C,10243,ce[S.wrapT]),(C===32879||C===35866)&&n.texParameteri(C,32882,ce[S.wrapR]),n.texParameteri(C,10240,de[S.magFilter]),n.texParameteri(C,10241,de[S.minFilter])):(n.texParameteri(C,10242,33071),n.texParameteri(C,10243,33071),(C===32879||C===35866)&&n.texParameteri(C,32882,33071),(S.wrapS!==yn||S.wrapT!==yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,10240,N(S.magFilter)),n.texParameteri(C,10241,N(S.minFilter)),S.minFilter!==Ft&&S.minFilter!==zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(S.type===Ji&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===mo&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(C,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function Ie(C,S){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",O));const J=S.source;let re=d.get(J);re===void 0&&(re={},d.set(J,re));const ue=I(S);if(ue!==C.__cacheKey){re[ue]===void 0&&(re[ue]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),re[ue].usedTimes++;const ve=re[C.__cacheKey];ve!==void 0&&(re[C.__cacheKey].usedTimes--,ve.usedTimes===0&&F(S)),C.__cacheKey=ue,C.__webglTexture=re[ue].texture}return H}function Ee(C,S,H){let J=3553;S.isDataArrayTexture&&(J=35866),S.isData3DTexture&&(J=32879);const re=Ie(C,S),ue=S.source;if(t.activeTexture(33984+H),t.bindTexture(J,C.__webglTexture),ue.version!==ue.__currentVersion||re===!0){n.pixelStorei(37440,S.flipY),n.pixelStorei(37441,S.premultiplyAlpha),n.pixelStorei(3317,S.unpackAlignment),n.pixelStorei(37443,0);const ve=M(S)&&w(S.image)===!1;let E=x(S.image,ve,!1,c);E=tn(S,E);const $=w(E)||a,se=s.convert(S.format,S.encoding);let te=s.convert(S.type),L=y(S.internalFormat,se,te,S.encoding,S.isVideoTexture);G(J,S,$);let ne;const ee=S.mipmaps,me=a&&S.isVideoTexture!==!0,le=ue.__currentVersion===void 0||re===!0,pe=A(S,E,$);if(S.isDepthTexture)L=6402,a?S.type===Ji?L=36012:S.type===Qi?L=33190:S.type===ns?L=35056:L=33189:S.type===Ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ir&&L===6402&&S.type!==Fg&&S.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Qi,te=s.convert(S.type)),S.format===hs&&L===6402&&(L=34041,S.type!==ns&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ns,te=s.convert(S.type))),le&&(me?t.texStorage2D(3553,1,L,E.width,E.height):t.texImage2D(3553,0,L,E.width,E.height,0,se,te,null));else if(S.isDataTexture)if(ee.length>0&&$){me&&le&&t.texStorage2D(3553,pe,L,ee[0].width,ee[0].height);for(let ie=0,Me=ee.length;ie<Me;ie++)ne=ee[ie],me?t.texSubImage2D(3553,ie,0,0,ne.width,ne.height,se,te,ne.data):t.texImage2D(3553,ie,L,ne.width,ne.height,0,se,te,ne.data);S.generateMipmaps=!1}else me?(le&&t.texStorage2D(3553,pe,L,E.width,E.height),t.texSubImage2D(3553,0,0,0,E.width,E.height,se,te,E.data)):t.texImage2D(3553,0,L,E.width,E.height,0,se,te,E.data);else if(S.isCompressedTexture){me&&le&&t.texStorage2D(3553,pe,L,ee[0].width,ee[0].height);for(let ie=0,Me=ee.length;ie<Me;ie++)ne=ee[ie],S.format!==Mn?se!==null?me?t.compressedTexSubImage2D(3553,ie,0,0,ne.width,ne.height,se,ne.data):t.compressedTexImage2D(3553,ie,L,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?t.texSubImage2D(3553,ie,0,0,ne.width,ne.height,se,te,ne.data):t.texImage2D(3553,ie,L,ne.width,ne.height,0,se,te,ne.data)}else if(S.isDataArrayTexture)me?(le&&t.texStorage3D(35866,pe,L,E.width,E.height,E.depth),t.texSubImage3D(35866,0,0,0,0,E.width,E.height,E.depth,se,te,E.data)):t.texImage3D(35866,0,L,E.width,E.height,E.depth,0,se,te,E.data);else if(S.isData3DTexture)me?(le&&t.texStorage3D(32879,pe,L,E.width,E.height,E.depth),t.texSubImage3D(32879,0,0,0,0,E.width,E.height,E.depth,se,te,E.data)):t.texImage3D(32879,0,L,E.width,E.height,E.depth,0,se,te,E.data);else if(S.isFramebufferTexture){if(le)if(me)t.texStorage2D(3553,pe,L,E.width,E.height);else{let ie=E.width,Me=E.height;for(let Oe=0;Oe<pe;Oe++)t.texImage2D(3553,Oe,L,ie,Me,0,se,te,null),ie>>=1,Me>>=1}}else if(ee.length>0&&$){me&&le&&t.texStorage2D(3553,pe,L,ee[0].width,ee[0].height);for(let ie=0,Me=ee.length;ie<Me;ie++)ne=ee[ie],me?t.texSubImage2D(3553,ie,0,0,se,te,ne):t.texImage2D(3553,ie,L,se,te,ne);S.generateMipmaps=!1}else me?(le&&t.texStorage2D(3553,pe,L,E.width,E.height),t.texSubImage2D(3553,0,0,0,se,te,E)):t.texImage2D(3553,0,L,se,te,E);b(S,$)&&P(J),ue.__currentVersion=ue.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function we(C,S,H){if(S.image.length!==6)return;const J=Ie(C,S),re=S.source;if(t.activeTexture(33984+H),t.bindTexture(34067,C.__webglTexture),re.version!==re.__currentVersion||J===!0){n.pixelStorei(37440,S.flipY),n.pixelStorei(37441,S.premultiplyAlpha),n.pixelStorei(3317,S.unpackAlignment),n.pixelStorei(37443,0);const ue=S.isCompressedTexture||S.image[0].isCompressedTexture,ve=S.image[0]&&S.image[0].isDataTexture,E=[];for(let ie=0;ie<6;ie++)!ue&&!ve?E[ie]=x(S.image[ie],!1,!0,u):E[ie]=ve?S.image[ie].image:S.image[ie],E[ie]=tn(S,E[ie]);const $=E[0],se=w($)||a,te=s.convert(S.format,S.encoding),L=s.convert(S.type),ne=y(S.internalFormat,te,L,S.encoding),ee=a&&S.isVideoTexture!==!0,me=re.__currentVersion===void 0||J===!0;let le=A(S,$,se);G(34067,S,se);let pe;if(ue){ee&&me&&t.texStorage2D(34067,le,ne,$.width,$.height);for(let ie=0;ie<6;ie++){pe=E[ie].mipmaps;for(let Me=0;Me<pe.length;Me++){const Oe=pe[Me];S.format!==Mn?te!==null?ee?t.compressedTexSubImage2D(34069+ie,Me,0,0,Oe.width,Oe.height,te,Oe.data):t.compressedTexImage2D(34069+ie,Me,ne,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?t.texSubImage2D(34069+ie,Me,0,0,Oe.width,Oe.height,te,L,Oe.data):t.texImage2D(34069+ie,Me,ne,Oe.width,Oe.height,0,te,L,Oe.data)}}}else{pe=S.mipmaps,ee&&me&&(pe.length>0&&le++,t.texStorage2D(34067,le,ne,E[0].width,E[0].height));for(let ie=0;ie<6;ie++)if(ve){ee?t.texSubImage2D(34069+ie,0,0,0,E[ie].width,E[ie].height,te,L,E[ie].data):t.texImage2D(34069+ie,0,ne,E[ie].width,E[ie].height,0,te,L,E[ie].data);for(let Me=0;Me<pe.length;Me++){const Ue=pe[Me].image[ie].image;ee?t.texSubImage2D(34069+ie,Me+1,0,0,Ue.width,Ue.height,te,L,Ue.data):t.texImage2D(34069+ie,Me+1,ne,Ue.width,Ue.height,0,te,L,Ue.data)}}else{ee?t.texSubImage2D(34069+ie,0,0,0,te,L,E[ie]):t.texImage2D(34069+ie,0,ne,te,L,E[ie]);for(let Me=0;Me<pe.length;Me++){const Oe=pe[Me];ee?t.texSubImage2D(34069+ie,Me+1,0,0,te,L,Oe.image[ie]):t.texImage2D(34069+ie,Me+1,ne,te,L,Oe.image[ie])}}}b(S,se)&&P(34067),re.__currentVersion=re.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function fe(C,S,H,J,re){const ue=s.convert(H.format,H.encoding),ve=s.convert(H.type),E=y(H.internalFormat,ue,ve,H.encoding);i.get(S).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,E,S.width,S.height,S.depth,0,ue,ve,null):t.texImage2D(re,0,E,S.width,S.height,0,ue,ve,null)),t.bindFramebuffer(36160,C),ke(S)?h.framebufferTexture2DMultisampleEXT(36160,J,re,i.get(H).__webglTexture,0,rt(S)):n.framebufferTexture2D(36160,J,re,i.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function Fe(C,S,H){if(n.bindRenderbuffer(36161,C),S.depthBuffer&&!S.stencilBuffer){let J=33189;if(H||ke(S)){const re=S.depthTexture;re&&re.isDepthTexture&&(re.type===Ji?J=36012:re.type===Qi&&(J=33190));const ue=rt(S);ke(S)?h.renderbufferStorageMultisampleEXT(36161,ue,J,S.width,S.height):n.renderbufferStorageMultisample(36161,ue,J,S.width,S.height)}else n.renderbufferStorage(36161,J,S.width,S.height);n.framebufferRenderbuffer(36160,36096,36161,C)}else if(S.depthBuffer&&S.stencilBuffer){const J=rt(S);H&&ke(S)===!1?n.renderbufferStorageMultisample(36161,J,35056,S.width,S.height):ke(S)?h.renderbufferStorageMultisampleEXT(36161,J,35056,S.width,S.height):n.renderbufferStorage(36161,34041,S.width,S.height),n.framebufferRenderbuffer(36160,33306,36161,C)}else{const J=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let re=0;re<J.length;re++){const ue=J[re],ve=s.convert(ue.format,ue.encoding),E=s.convert(ue.type),$=y(ue.internalFormat,ve,E,ue.encoding),se=rt(S);H&&ke(S)===!1?n.renderbufferStorageMultisample(36161,se,$,S.width,S.height):ke(S)?h.renderbufferStorageMultisampleEXT(36161,se,$,S.width,S.height):n.renderbufferStorage(36161,$,S.width,S.height)}}n.bindRenderbuffer(36161,null)}function Le(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k(S.depthTexture,0);const J=i.get(S.depthTexture).__webglTexture,re=rt(S);if(S.depthTexture.format===ir)ke(S)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,re):n.framebufferTexture2D(36160,36096,3553,J,0);else if(S.depthTexture.format===hs)ke(S)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,re):n.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function ye(C){const S=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Le(S.__webglFramebuffer,C)}else if(H){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(36160,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]=n.createRenderbuffer(),Fe(S.__webglDepthbuffer[J],C,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),Fe(S.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function it(C,S,H){const J=i.get(C);S!==void 0&&fe(J.__webglFramebuffer,C,C.texture,36064,3553),H!==void 0&&ye(C)}function ut(C){const S=C.texture,H=i.get(C),J=i.get(S);C.addEventListener("dispose",oe),C.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=S.version,o.memory.textures++);const re=C.isWebGLCubeRenderTarget===!0,ue=C.isWebGLMultipleRenderTargets===!0,ve=w(C)||a;if(re){H.__webglFramebuffer=[];for(let E=0;E<6;E++)H.__webglFramebuffer[E]=n.createFramebuffer()}else{if(H.__webglFramebuffer=n.createFramebuffer(),ue)if(r.drawBuffers){const E=C.texture;for(let $=0,se=E.length;$<se;$++){const te=i.get(E[$]);te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&ke(C)===!1){const E=ue?S:[S];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let $=0;$<E.length;$++){const se=E[$];H.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(36161,H.__webglColorRenderbuffer[$]);const te=s.convert(se.format,se.encoding),L=s.convert(se.type),ne=y(se.internalFormat,te,L,se.encoding),ee=rt(C);n.renderbufferStorageMultisample(36161,ee,ne,C.width,C.height),n.framebufferRenderbuffer(36160,36064+$,36161,H.__webglColorRenderbuffer[$])}n.bindRenderbuffer(36161,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Fe(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,J.__webglTexture),G(34067,S,ve);for(let E=0;E<6;E++)fe(H.__webglFramebuffer[E],C,S,36064,34069+E);b(S,ve)&&P(34067),t.unbindTexture()}else if(ue){const E=C.texture;for(let $=0,se=E.length;$<se;$++){const te=E[$],L=i.get(te);t.bindTexture(3553,L.__webglTexture),G(3553,te,ve),fe(H.__webglFramebuffer,C,te,36064+$,3553),b(te,ve)&&P(3553)}t.unbindTexture()}else{let E=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?E=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(E,J.__webglTexture),G(E,S,ve),fe(H.__webglFramebuffer,C,S,36064,E),b(S,ve)&&P(E),t.unbindTexture()}C.depthBuffer&&ye(C)}function dt(C){const S=w(C)||a,H=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let J=0,re=H.length;J<re;J++){const ue=H[J];if(b(ue,S)){const ve=C.isWebGLCubeRenderTarget?34067:3553,E=i.get(ue).__webglTexture;t.bindTexture(ve,E),P(ve),t.unbindTexture()}}}function Ht(C){if(a&&C.samples>0&&ke(C)===!1){const S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],H=C.width,J=C.height;let re=16384;const ue=[],ve=C.stencilBuffer?33306:36096,E=i.get(C),$=C.isWebGLMultipleRenderTargets===!0;if($)for(let se=0;se<S.length;se++)t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+se,36161,null),t.bindFramebuffer(36160,E.__webglFramebuffer),n.framebufferTexture2D(36009,36064+se,3553,null,0);t.bindFramebuffer(36008,E.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,E.__webglFramebuffer);for(let se=0;se<S.length;se++){ue.push(36064+se),C.depthBuffer&&ue.push(ve);const te=E.__ignoreDepthValues!==void 0?E.__ignoreDepthValues:!1;if(te===!1&&(C.depthBuffer&&(re|=256),C.stencilBuffer&&(re|=1024)),$&&n.framebufferRenderbuffer(36008,36064,36161,E.__webglColorRenderbuffer[se]),te===!0&&(n.invalidateFramebuffer(36008,[ve]),n.invalidateFramebuffer(36009,[ve])),$){const L=i.get(S[se]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,L,0)}n.blitFramebuffer(0,0,H,J,0,0,H,J,re,9728),g&&n.invalidateFramebuffer(36008,ue)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),$)for(let se=0;se<S.length;se++){t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+se,36161,E.__webglColorRenderbuffer[se]);const te=i.get(S[se]).__webglTexture;t.bindFramebuffer(36160,E.__webglFramebuffer),n.framebufferTexture2D(36009,36064+se,3553,te,0)}t.bindFramebuffer(36009,E.__webglMultisampledFramebuffer)}}function rt(C){return Math.min(f,C.samples)}function ke(C){const S=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function en(C){const S=o.render.frame;_.get(C)!==S&&(_.set(C,S),C.update())}function tn(C,S){const H=C.encoding,J=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Lc||H!==fr&&(H===Xe?a===!1?e.has("EXT_sRGB")===!0&&J===Mn?(C.format=Lc,C.minFilter=zt,C.generateMipmaps=!1):S=Og.sRGBToLinear(S):(J!==Mn||re!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),S}this.allocateTextureUnit=R,this.resetTextureUnits=j,this.setTexture2D=k,this.setTexture2DArray=Y,this.setTexture3D=W,this.setTextureCube=Q,this.rebindTextures=it,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ke}function yw(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===cr)return 5121;if(s===xx)return 32819;if(s===yx)return 32820;if(s===gx)return 5120;if(s===vx)return 5122;if(s===Fg)return 5123;if(s===_x)return 5124;if(s===Qi)return 5125;if(s===Ji)return 5126;if(s===mo)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Mx)return 6406;if(s===Mn)return 6408;if(s===wx)return 6409;if(s===Ex)return 6410;if(s===ir)return 6402;if(s===hs)return 34041;if(s===Tx)return 6403;if(s===Sx)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Lc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Cx)return 36244;if(s===bx)return 33319;if(s===Ax)return 33320;if(s===Lx)return 36249;if(s===Kl||s===Ql||s===Jl||s===eu)if(o===Xe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Kl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ql)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Jl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===eu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Kl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ql)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Jl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===eu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Jh||s===ed||s===td||s===nd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Jh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ed)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===td)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===nd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Px)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===id||s===rd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===id)return o===Xe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===rd)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===sd||s===od||s===ad||s===ld||s===ud||s===cd||s===fd||s===hd||s===dd||s===pd||s===md||s===gd||s===vd||s===_d)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===sd)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===od)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ad)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ld)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ud)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===cd)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fd)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===hd)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===dd)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===pd)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===md)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===gd)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vd)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===_d)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===xd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===xd)return o===Xe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ns?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Mw extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bs extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sw={type:"move"};class Lu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(r=t.getPose(e.targetRaySpace,i),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sw))),u&&e.hand){o=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,i);if(u.joints[p.jointName]===void 0){const v=new Bs;v.matrixAutoUpdate=!1,v.visible=!1,u.joints[p.jointName]=v,u.add(v)}const m=u.joints[p.jointName];d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=d.radius),m.visible=d!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),g=.02,_=.005;u.inputState.pinching&&h>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}}class ww extends fn{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:ir,c!==ir&&c!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===ir&&(i=Qi),i===void 0&&c===hs&&(i=ns),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1}}class Ew extends mr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,f=null,h=null,g=null;const _=t.getContextAttributes();let p=null,d=null;const m=[],v=new Map,x=new on;x.layers.enable(1),x.viewport=new wt;const w=new on;w.layers.enable(2),w.viewport=new wt;const M=[x,w],b=new Mw;b.layers.enable(1),b.layers.enable(2);let P=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let k=m[I];return k===void 0&&(k=new Lu,m[I]=k),k.getTargetRaySpace()},this.getControllerGrip=function(I){let k=m[I];return k===void 0&&(k=new Lu,m[I]=k),k.getGripSpace()},this.getHand=function(I){let k=m[I];return k===void 0&&(k=new Lu,m[I]=k),k.getHandSpace()};function A(I){const k=v.get(I.inputSource);k!==void 0&&k.dispatchEvent({type:I.type,data:I.inputSource})}function N(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",O),v.forEach(function(I,k){I!==void 0&&I.disconnect(k)}),v.clear(),P=null,y=null,e.setRenderTarget(p),h=null,f=null,c=null,r=null,d=null,R.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",N),r.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,k),r.updateRenderState({baseLayer:h}),d=new ti(h.framebufferWidth,h.framebufferHeight,{format:Mn,type:cr,encoding:e.outputEncoding})}else{let k=null,Y=null,W=null;_.depth&&(W=_.stencil?35056:33190,k=_.stencil?hs:ir,Y=_.stencil?ns:Qi);const Q={colorFormat:e.outputEncoding===Xe?35907:32856,depthFormat:W,scaleFactor:s};c=new XRWebGLBinding(r,t),f=c.createProjectionLayer(Q),r.updateRenderState({layers:[f]}),d=new ti(f.textureWidth,f.textureHeight,{format:Mn,type:cr,depthTexture:new ww(f.textureWidth,f.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const ce=e.properties.get(d);ce.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),R.setContext(r),R.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function O(I){const k=r.inputSources;for(let Y=0;Y<k.length;Y++){const W=k[Y].handedness==="right"?1:0;v.set(k[Y],m[W])}for(let Y=0;Y<I.removed.length;Y++){const W=I.removed[Y],Q=v.get(W);Q&&(Q.dispatchEvent({type:"disconnected",data:W}),v.delete(W))}for(let Y=0;Y<I.added.length;Y++){const W=I.added[Y],Q=v.get(W);Q&&Q.dispatchEvent({type:"connected",data:W})}}const oe=new D,K=new D;function F(I,k,Y){oe.setFromMatrixPosition(k.matrixWorld),K.setFromMatrixPosition(Y.matrixWorld);const W=oe.distanceTo(K),Q=k.projectionMatrix.elements,ce=Y.projectionMatrix.elements,de=Q[14]/(Q[10]-1),G=Q[14]/(Q[10]+1),Ie=(Q[9]+1)/Q[5],Ee=(Q[9]-1)/Q[5],we=(Q[8]-1)/Q[0],fe=(ce[8]+1)/ce[0],Fe=de*we,Le=de*fe,ye=W/(-we+fe),it=ye*-we;k.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(it),I.translateZ(ye),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const ut=de+ye,dt=G+ye,Ht=Fe-it,rt=Le+(W-it),ke=Ie*G/dt*ut,en=Ee*G/dt*ut;I.projectionMatrix.makePerspective(Ht,rt,ke,en,ut,dt)}function q(I,k){k===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(k.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;b.near=w.near=x.near=I.near,b.far=w.far=x.far=I.far,(P!==b.near||y!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,y=b.far);const k=I.parent,Y=b.cameras;q(b,k);for(let Q=0;Q<Y.length;Q++)q(Y[Q],k);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),I.position.copy(b.position),I.quaternion.copy(b.quaternion),I.scale.copy(b.scale),I.matrix.copy(b.matrix),I.matrixWorld.copy(b.matrixWorld);const W=I.children;for(let Q=0,ce=W.length;Q<ce;Q++)W[Q].updateMatrixWorld(!0);Y.length===2?F(b,x,w):b.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(I){f!==null&&(f.fixedFoveation=I),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=I)};let V=null;function j(I,k){if(u=k.getViewerPose(l||o),g=k,u!==null){const W=u.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let Q=!1;W.length!==b.cameras.length&&(b.cameras.length=0,Q=!0);for(let ce=0;ce<W.length;ce++){const de=W[ce];let G=null;if(h!==null)G=h.getViewport(de);else{const Ee=c.getViewSubImage(f,de);G=Ee.viewport,ce===0&&(e.setRenderTargetTextures(d,Ee.colorTexture,f.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(d))}let Ie=M[ce];Ie===void 0&&(Ie=new on,Ie.layers.enable(ce),Ie.viewport=new wt,M[ce]=Ie),Ie.matrix.fromArray(de.transform.matrix),Ie.projectionMatrix.fromArray(de.projectionMatrix),Ie.viewport.set(G.x,G.y,G.width,G.height),ce===0&&b.matrix.copy(Ie.matrix),Q===!0&&b.cameras.push(Ie)}}const Y=r.inputSources;for(let W=0;W<m.length;W++){const Q=Y[W],ce=v.get(Q);ce!==void 0&&ce.update(Q,k,l||o)}V&&V(I,k),g=null}const R=new $g;R.setAnimationLoop(j),this.setAnimationLoop=function(I){V=I},this.dispose=function(){}}}function Tw(n,e){function t(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,m,v,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),c(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,x)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),_(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,m,v):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===En&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===En&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const m=e.get(d).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const w=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*w}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let v;d.map?v=d.map:d.specularMap?v=d.specularMap:d.displacementMap?v=d.displacementMap:d.normalMap?v=d.normalMap:d.bumpMap?v=d.bumpMap:d.roughnessMap?v=d.roughnessMap:d.metalnessMap?v=d.metalnessMap:d.alphaMap?v=d.alphaMap:d.emissiveMap?v=d.emissiveMap:d.clearcoatMap?v=d.clearcoatMap:d.clearcoatNormalMap?v=d.clearcoatNormalMap:d.clearcoatRoughnessMap?v=d.clearcoatRoughnessMap:d.iridescenceMap?v=d.iridescenceMap:d.iridescenceThicknessMap?v=d.iridescenceThicknessMap:d.specularIntensityMap?v=d.specularIntensityMap:d.specularColorMap?v=d.specularColorMap:d.transmissionMap?v=d.transmissionMap:d.thicknessMap?v=d.thicknessMap:d.sheenColorMap?v=d.sheenColorMap:d.sheenRoughnessMap&&(v=d.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let x;d.aoMap?x=d.aoMap:d.lightMap&&(x=d.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uv2Transform.value.copy(x.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,m,v){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*m,p.scale.value=v*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let x;d.map?x=d.map:d.alphaMap&&(x=d.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let m;d.map?m=d.map:d.alphaMap&&(m=d.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),p.uvTransform.value.copy(m.matrix))}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function c(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,m){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===En&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Cw(){const n=go("canvas");return n.style.display="block",n}function i0(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:Cw(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const g=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=fr,this.physicallyCorrectLights=!1,this.toneMapping=ei,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let d=!1,m=0,v=0,x=null,w=-1,M=null;const b=new wt,P=new wt;let y=null,A=e.width,N=e.height,O=1,oe=null,K=null;const F=new wt(0,0,A,N),q=new wt(0,0,A,N);let V=!1;const j=new Yg;let R=!1,I=!1,k=null;const Y=new Je,W=new Se,Q=new D,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function de(){return x===null?O:1}let G=t;function Ie(T,z){for(let B=0;B<T.length;B++){const U=T[B],X=e.getContext(U,z);if(X!==null)return X}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Af}`),e.addEventListener("webglcontextlost",L,!1),e.addEventListener("webglcontextrestored",ne,!1),e.addEventListener("webglcontextcreationerror",ee,!1),G===null){const z=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&z.shift(),G=Ie(z,T),G===null)throw Ie(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ee,we,fe,Fe,Le,ye,it,ut,dt,Ht,rt,ke,en,tn,C,S,H,J,re,ue,ve,E,$;function se(){Ee=new US(G),we=new IS(G,Ee,n),Ee.init(we),E=new yw(G,Ee,we),fe=new _w(G,Ee,we),Fe=new GS,Le=new ow,ye=new xw(G,Ee,fe,Le,we,E,Fe),it=new FS(p),ut=new OS(p),dt=new ey(G,we),$=new RS(G,Ee,dt,we),Ht=new BS(G,dt,Fe,$),rt=new XS(G,Ht,dt,Fe),re=new jS(G,we,ye),S=new NS(Le),ke=new sw(p,it,ut,Ee,we,$,S),en=new Tw(p,Le),tn=new lw,C=new pw(Ee,we),J=new PS(p,it,fe,rt,c,o),H=new vw(p,rt,we),ue=new DS(G,Ee,Fe,we),ve=new VS(G,Ee,Fe,we),Fe.programs=ke.programs,p.capabilities=we,p.extensions=Ee,p.properties=Le,p.renderLists=tn,p.shadowMap=H,p.state=fe,p.info=Fe}se();const te=new Ew(p,G);this.xr=te,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=Ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(T){T!==void 0&&(O=T,this.setSize(A,N,!1))},this.getSize=function(T){return T.set(A,N)},this.setSize=function(T,z,B){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=T,N=z,e.width=Math.floor(T*O),e.height=Math.floor(z*O),B!==!1&&(e.style.width=T+"px",e.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(A*O,N*O).floor()},this.setDrawingBufferSize=function(T,z,B){A=T,N=z,O=B,e.width=Math.floor(T*B),e.height=Math.floor(z*B),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(b)},this.getViewport=function(T){return T.copy(F)},this.setViewport=function(T,z,B,U){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,z,B,U),fe.viewport(b.copy(F).multiplyScalar(O).floor())},this.getScissor=function(T){return T.copy(q)},this.setScissor=function(T,z,B,U){T.isVector4?q.set(T.x,T.y,T.z,T.w):q.set(T,z,B,U),fe.scissor(P.copy(q).multiplyScalar(O).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(T){fe.setScissorTest(V=T)},this.setOpaqueSort=function(T){oe=T},this.setTransparentSort=function(T){K=T},this.getClearColor=function(T){return T.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(T=!0,z=!0,B=!0){let U=0;T&&(U|=16384),z&&(U|=256),B&&(U|=1024),G.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",L,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",ee,!1),tn.dispose(),C.dispose(),Le.dispose(),it.dispose(),ut.dispose(),rt.dispose(),$.dispose(),ke.dispose(),te.dispose(),te.removeEventListener("sessionstart",Oe),te.removeEventListener("sessionend",Ue),k&&(k.dispose(),k=null),Tt.stop()};function L(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const T=Fe.autoReset,z=H.enabled,B=H.autoUpdate,U=H.needsUpdate,X=H.type;se(),Fe.autoReset=T,H.enabled=z,H.autoUpdate=B,H.needsUpdate=U,H.type=X}function ee(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function me(T){const z=T.target;z.removeEventListener("dispose",me),le(z)}function le(T){pe(T),Le.remove(T)}function pe(T){const z=Le.get(T).programs;z!==void 0&&(z.forEach(function(B){ke.releaseProgram(B)}),T.isShaderMaterial&&ke.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,B,U,X,_e){z===null&&(z=ce);const Te=X.isMesh&&X.matrixWorld.determinant()<0,be=m0(T,z,B,U,X);fe.setMaterial(U,Te);let Ce=B.index;const Be=B.attributes.position;if(Ce===null){if(Be===void 0||Be.count===0)return}else if(Ce.count===0)return;let Re=1;U.wireframe===!0&&(Ce=Ht.getWireframeAttribute(B),Re=2),$.setup(X,U,be,B,Ce);let Ne,Ze=ue;Ce!==null&&(Ne=dt.get(Ce),Ze=ve,Ze.setIndex(Ne));const Ui=Ce!==null?Ce.count:Be.count,gr=B.drawRange.start*Re,vr=B.drawRange.count*Re,Pn=_e!==null?_e.start*Re:0,ze=_e!==null?_e.count*Re:1/0,_r=Math.max(gr,Pn),et=Math.min(Ui,gr+vr,Pn+ze)-1,Rn=Math.max(0,et-_r+1);if(Rn!==0){if(X.isMesh)U.wireframe===!0?(fe.setLineWidth(U.wireframeLinewidth*de()),Ze.setMode(1)):Ze.setMode(4);else if(X.isLine){let ai=U.linewidth;ai===void 0&&(ai=1),fe.setLineWidth(ai*de()),X.isLineSegments?Ze.setMode(1):X.isLineLoop?Ze.setMode(2):Ze.setMode(3)}else X.isPoints?Ze.setMode(0):X.isSprite&&Ze.setMode(4);if(X.isInstancedMesh)Ze.renderInstances(_r,Rn,X.count);else if(B.isInstancedBufferGeometry){const ai=Math.min(B.instanceCount,B._maxInstanceCount);Ze.renderInstances(_r,Rn,ai)}else Ze.render(_r,Rn)}},this.compile=function(T,z){h=C.get(T),h.init(),_.push(h),T.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights(p.physicallyCorrectLights),T.traverse(function(B){const U=B.material;if(U)if(Array.isArray(U))for(let X=0;X<U.length;X++){const _e=U[X];Sl(_e,T,B)}else Sl(U,T,B)}),_.pop(),h=null};let ie=null;function Me(T){ie&&ie(T)}function Oe(){Tt.stop()}function Ue(){Tt.start()}const Tt=new $g;Tt.setAnimationLoop(Me),typeof self!="undefined"&&Tt.setContext(self),this.setAnimationLoop=function(T){ie=T,te.setAnimationLoop(T),T===null?Tt.stop():Tt.start()},te.addEventListener("sessionstart",Oe),te.addEventListener("sessionend",Ue),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(z),z=te.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,z,x),h=C.get(T,_.length),h.init(),_.push(h),Y.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),j.setFromProjectionMatrix(Y),I=this.localClippingEnabled,R=S.init(this.clippingPlanes,I,z),f=tn.get(T,g.length),f.init(),g.push(f),Ln(T,z,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(oe,K),R===!0&&S.beginShadows();const B=h.state.shadowsArray;if(H.render(B,T,z),R===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(f,T),h.setupLights(p.physicallyCorrectLights),z.isArrayCamera){const U=z.cameras;for(let X=0,_e=U.length;X<_e;X++){const Te=U[X];Nf(f,T,Te,Te.viewport)}}else Nf(f,T,z);x!==null&&(ye.updateMultisampleRenderTarget(x),ye.updateRenderTargetMipmap(x)),T.isScene===!0&&T.onAfterRender(p,T,z),$.resetDefaultState(),w=-1,M=null,_.pop(),_.length>0?h=_[_.length-1]:h=null,g.pop(),g.length>0?f=g[g.length-1]:f=null};function Ln(T,z,B,U){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){U&&Q.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Y);const Te=rt.update(T),be=T.material;be.visible&&f.push(T,Te,be,B,Q.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Fe.render.frame&&(T.skeleton.update(),T.skeleton.frame=Fe.render.frame),!T.frustumCulled||j.intersectsObject(T))){U&&Q.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Y);const Te=rt.update(T),be=T.material;if(Array.isArray(be)){const Ce=Te.groups;for(let Be=0,Re=Ce.length;Be<Re;Be++){const Ne=Ce[Be],Ze=be[Ne.materialIndex];Ze&&Ze.visible&&f.push(T,Te,Ze,B,Q.z,Ne)}}else be.visible&&f.push(T,Te,be,B,Q.z,null)}}const _e=T.children;for(let Te=0,be=_e.length;Te<be;Te++)Ln(_e[Te],z,B,U)}function Nf(T,z,B,U){const X=T.opaque,_e=T.transmissive,Te=T.transparent;h.setupLightsView(B),_e.length>0&&d0(X,z,B),U&&fe.viewport(b.copy(U)),X.length>0&&Ao(X,z,B),_e.length>0&&Ao(_e,z,B),Te.length>0&&Ao(Te,z,B),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function d0(T,z,B){const U=we.isWebGL2;k===null&&(k=new ti(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?mo:cr,minFilter:gl,samples:U&&s===!0?4:0})),p.getDrawingBufferSize(W),U?k.setSize(W.x,W.y):k.setSize(Pc(W.x),Pc(W.y));const X=p.getRenderTarget();p.setRenderTarget(k),p.clear();const _e=p.toneMapping;p.toneMapping=ei,Ao(T,z,B),p.toneMapping=_e,ye.updateMultisampleRenderTarget(k),ye.updateRenderTargetMipmap(k),p.setRenderTarget(X)}function Ao(T,z,B){const U=z.isScene===!0?z.overrideMaterial:null;for(let X=0,_e=T.length;X<_e;X++){const Te=T[X],be=Te.object,Ce=Te.geometry,Be=U===null?Te.material:U,Re=Te.group;be.layers.test(B.layers)&&p0(be,z,B,Ce,Be,Re)}}function p0(T,z,B,U,X,_e){T.onBeforeRender(p,z,B,U,X,_e),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(p,z,B,U,T,_e),X.transparent===!0&&X.side===Fi?(X.side=En,X.needsUpdate=!0,p.renderBufferDirect(B,z,U,X,T,_e),X.side=po,X.needsUpdate=!0,p.renderBufferDirect(B,z,U,X,T,_e),X.side=Fi):p.renderBufferDirect(B,z,U,X,T,_e),T.onAfterRender(p,z,B,U,X,_e)}function Sl(T,z,B){z.isScene!==!0&&(z=ce);const U=Le.get(T),X=h.state.lights,_e=h.state.shadowsArray,Te=X.state.version,be=ke.getParameters(T,X.state,_e,z,B),Ce=ke.getProgramCacheKey(be);let Be=U.programs;U.environment=T.isMeshStandardMaterial?z.environment:null,U.fog=z.fog,U.envMap=(T.isMeshStandardMaterial?ut:it).get(T.envMap||U.environment),Be===void 0&&(T.addEventListener("dispose",me),Be=new Map,U.programs=Be);let Re=Be.get(Ce);if(Re!==void 0){if(U.currentProgram===Re&&U.lightsStateVersion===Te)return Ff(T,be),Re}else be.uniforms=ke.getUniforms(T),T.onBuild(B,be,p),T.onBeforeCompile(be,p),Re=ke.acquireProgram(be,Ce),Be.set(Ce,Re),U.uniforms=be.uniforms;const Ne=U.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=S.uniform),Ff(T,be),U.needsLights=v0(T),U.lightsStateVersion=Te,U.needsLights&&(Ne.ambientLightColor.value=X.state.ambient,Ne.lightProbe.value=X.state.probe,Ne.directionalLights.value=X.state.directional,Ne.directionalLightShadows.value=X.state.directionalShadow,Ne.spotLights.value=X.state.spot,Ne.spotLightShadows.value=X.state.spotShadow,Ne.rectAreaLights.value=X.state.rectArea,Ne.ltc_1.value=X.state.rectAreaLTC1,Ne.ltc_2.value=X.state.rectAreaLTC2,Ne.pointLights.value=X.state.point,Ne.pointLightShadows.value=X.state.pointShadow,Ne.hemisphereLights.value=X.state.hemi,Ne.directionalShadowMap.value=X.state.directionalShadowMap,Ne.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ne.spotShadowMap.value=X.state.spotShadowMap,Ne.spotShadowMatrix.value=X.state.spotShadowMatrix,Ne.pointShadowMap.value=X.state.pointShadowMap,Ne.pointShadowMatrix.value=X.state.pointShadowMatrix);const Ze=Re.getUniforms(),Ui=ba.seqWithValue(Ze.seq,Ne);return U.currentProgram=Re,U.uniformsList=Ui,Re}function Ff(T,z){const B=Le.get(T);B.outputEncoding=z.outputEncoding,B.instancing=z.instancing,B.skinning=z.skinning,B.morphTargets=z.morphTargets,B.morphNormals=z.morphNormals,B.morphColors=z.morphColors,B.morphTargetsCount=z.morphTargetsCount,B.numClippingPlanes=z.numClippingPlanes,B.numIntersection=z.numClipIntersection,B.vertexAlphas=z.vertexAlphas,B.vertexTangents=z.vertexTangents,B.toneMapping=z.toneMapping}function m0(T,z,B,U,X){z.isScene!==!0&&(z=ce),ye.resetTextureUnits();const _e=z.fog,Te=U.isMeshStandardMaterial?z.environment:null,be=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:fr,Ce=(U.isMeshStandardMaterial?ut:it).get(U.envMap||Te),Be=U.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Re=!!U.normalMap&&!!B.attributes.tangent,Ne=!!B.morphAttributes.position,Ze=!!B.morphAttributes.normal,Ui=!!B.morphAttributes.color,gr=U.toneMapped?p.toneMapping:ei,vr=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Pn=vr!==void 0?vr.length:0,ze=Le.get(U),_r=h.state.lights;if(R===!0&&(I===!0||T!==M)){const Dn=T===M&&U.id===w;S.setState(U,T,Dn)}let et=!1;U.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==_r.state.version||ze.outputEncoding!==be||X.isInstancedMesh&&ze.instancing===!1||!X.isInstancedMesh&&ze.instancing===!0||X.isSkinnedMesh&&ze.skinning===!1||!X.isSkinnedMesh&&ze.skinning===!0||ze.envMap!==Ce||U.fog===!0&&ze.fog!==_e||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==S.numPlanes||ze.numIntersection!==S.numIntersection)||ze.vertexAlphas!==Be||ze.vertexTangents!==Re||ze.morphTargets!==Ne||ze.morphNormals!==Ze||ze.morphColors!==Ui||ze.toneMapping!==gr||we.isWebGL2===!0&&ze.morphTargetsCount!==Pn)&&(et=!0):(et=!0,ze.__version=U.version);let Rn=ze.currentProgram;et===!0&&(Rn=Sl(U,z,X));let ai=!1,ys=!1,wl=!1;const Ct=Rn.getUniforms(),Ms=ze.uniforms;if(fe.useProgram(Rn.program)&&(ai=!0,ys=!0,wl=!0),U.id!==w&&(w=U.id,ys=!0),ai||M!==T){if(Ct.setValue(G,"projectionMatrix",T.projectionMatrix),we.logarithmicDepthBuffer&&Ct.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,ys=!0,wl=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Dn=Ct.map.cameraPosition;Dn!==void 0&&Dn.setValue(G,Q.setFromMatrixPosition(T.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Ct.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||X.isSkinnedMesh)&&Ct.setValue(G,"viewMatrix",T.matrixWorldInverse)}if(X.isSkinnedMesh){Ct.setOptional(G,X,"bindMatrix"),Ct.setOptional(G,X,"bindMatrixInverse");const Dn=X.skeleton;Dn&&(we.floatVertexTextures?(Dn.boneTexture===null&&Dn.computeBoneTexture(),Ct.setValue(G,"boneTexture",Dn.boneTexture,ye),Ct.setValue(G,"boneTextureSize",Dn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const El=B.morphAttributes;return(El.position!==void 0||El.normal!==void 0||El.color!==void 0&&we.isWebGL2===!0)&&re.update(X,B,U,Rn),(ys||ze.receiveShadow!==X.receiveShadow)&&(ze.receiveShadow=X.receiveShadow,Ct.setValue(G,"receiveShadow",X.receiveShadow)),ys&&(Ct.setValue(G,"toneMappingExposure",p.toneMappingExposure),ze.needsLights&&g0(Ms,wl),_e&&U.fog===!0&&en.refreshFogUniforms(Ms,_e),en.refreshMaterialUniforms(Ms,U,O,N,k),ba.upload(G,ze.uniformsList,Ms,ye)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(ba.upload(G,ze.uniformsList,Ms,ye),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Ct.setValue(G,"center",X.center),Ct.setValue(G,"modelViewMatrix",X.modelViewMatrix),Ct.setValue(G,"normalMatrix",X.normalMatrix),Ct.setValue(G,"modelMatrix",X.matrixWorld),Rn}function g0(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function v0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(T,z,B){Le.get(T.texture).__webglTexture=z,Le.get(T.depthTexture).__webglTexture=B;const U=Le.get(T);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=B===void 0,U.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,z){const B=Le.get(T);B.__webglFramebuffer=z,B.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,B=0){x=T,m=z,v=B;let U=!0;if(T){const Ce=Le.get(T);Ce.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(36160,null),U=!1):Ce.__webglFramebuffer===void 0?ye.setupRenderTarget(T):Ce.__hasExternalTextures&&ye.rebindTextures(T,Le.get(T.texture).__webglTexture,Le.get(T.depthTexture).__webglTexture)}let X=null,_e=!1,Te=!1;if(T){const Ce=T.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture)&&(Te=!0);const Be=Le.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(X=Be[z],_e=!0):we.isWebGL2&&T.samples>0&&ye.useMultisampledRTT(T)===!1?X=Le.get(T).__webglMultisampledFramebuffer:X=Be,b.copy(T.viewport),P.copy(T.scissor),y=T.scissorTest}else b.copy(F).multiplyScalar(O).floor(),P.copy(q).multiplyScalar(O).floor(),y=V;if(fe.bindFramebuffer(36160,X)&&we.drawBuffers&&U&&fe.drawBuffers(T,X),fe.viewport(b),fe.scissor(P),fe.setScissorTest(y),_e){const Ce=Le.get(T.texture);G.framebufferTexture2D(36160,36064,34069+z,Ce.__webglTexture,B)}else if(Te){const Ce=Le.get(T.texture),Be=z||0;G.framebufferTextureLayer(36160,36064,Ce.__webglTexture,B||0,Be)}w=-1},this.readRenderTargetPixels=function(T,z,B,U,X,_e,Te){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(be=be[Te]),be){fe.bindFramebuffer(36160,be);try{const Ce=T.texture,Be=Ce.format,Re=Ce.type;if(Be!==Mn&&E.convert(Be)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Re===mo&&(Ee.has("EXT_color_buffer_half_float")||we.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Re!==cr&&E.convert(Re)!==G.getParameter(35738)&&!(Re===Ji&&(we.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-U&&B>=0&&B<=T.height-X&&G.readPixels(z,B,U,X,E.convert(Be),E.convert(Re),_e)}finally{const Ce=x!==null?Le.get(x).__webglFramebuffer:null;fe.bindFramebuffer(36160,Ce)}}},this.copyFramebufferToTexture=function(T,z,B=0){const U=Math.pow(2,-B),X=Math.floor(z.image.width*U),_e=Math.floor(z.image.height*U);ye.setTexture2D(z,0),G.copyTexSubImage2D(3553,B,0,0,T.x,T.y,X,_e),fe.unbindTexture()},this.copyTextureToTexture=function(T,z,B,U=0){const X=z.image.width,_e=z.image.height,Te=E.convert(B.format),be=E.convert(B.type);ye.setTexture2D(B,0),G.pixelStorei(37440,B.flipY),G.pixelStorei(37441,B.premultiplyAlpha),G.pixelStorei(3317,B.unpackAlignment),z.isDataTexture?G.texSubImage2D(3553,U,T.x,T.y,X,_e,Te,be,z.image.data):z.isCompressedTexture?G.compressedTexSubImage2D(3553,U,T.x,T.y,z.mipmaps[0].width,z.mipmaps[0].height,Te,z.mipmaps[0].data):G.texSubImage2D(3553,U,T.x,T.y,Te,be,z.image),U===0&&B.generateMipmaps&&G.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(T,z,B,U,X=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=T.max.x-T.min.x+1,Te=T.max.y-T.min.y+1,be=T.max.z-T.min.z+1,Ce=E.convert(U.format),Be=E.convert(U.type);let Re;if(U.isData3DTexture)ye.setTexture3D(U,0),Re=32879;else if(U.isDataArrayTexture)ye.setTexture2DArray(U,0),Re=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,U.flipY),G.pixelStorei(37441,U.premultiplyAlpha),G.pixelStorei(3317,U.unpackAlignment);const Ne=G.getParameter(3314),Ze=G.getParameter(32878),Ui=G.getParameter(3316),gr=G.getParameter(3315),vr=G.getParameter(32877),Pn=B.isCompressedTexture?B.mipmaps[0]:B.image;G.pixelStorei(3314,Pn.width),G.pixelStorei(32878,Pn.height),G.pixelStorei(3316,T.min.x),G.pixelStorei(3315,T.min.y),G.pixelStorei(32877,T.min.z),B.isDataTexture||B.isData3DTexture?G.texSubImage3D(Re,X,z.x,z.y,z.z,_e,Te,be,Ce,Be,Pn.data):B.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Re,X,z.x,z.y,z.z,_e,Te,be,Ce,Pn.data)):G.texSubImage3D(Re,X,z.x,z.y,z.z,_e,Te,be,Ce,Be,Pn),G.pixelStorei(3314,Ne),G.pixelStorei(32878,Ze),G.pixelStorei(3316,Ui),G.pixelStorei(3315,gr),G.pixelStorei(32877,vr),X===0&&U.generateMipmaps&&G.generateMipmap(Re),fe.unbindTexture()},this.initTexture=function(T){ye.setTexture2D(T,0),fe.unbindTexture()},this.resetState=function(){m=0,v=0,x=null,fe.reset(),$.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class bw extends i0{}bw.prototype.isWebGL1Renderer=!0;class Aw extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class Lw extends _t{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class _i extends Tn{constructor(e,t,i,r=1){typeof i=="number"&&(r=i,i=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ip=new Je,rp=new Je,ha=[],Is=new Ut;class Pw extends Ut{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _i(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Is.geometry=this.geometry,Is.material=this.material,Is.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,ip),rp.multiplyMatrices(i,ip),Is.matrixWorld=rp,Is.raycast(e,ha);for(let o=0,a=ha.length;o<a;o++){const l=ha[o];l.instanceId=s,l.object=this,t.push(l)}ha.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _i(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class xl extends _t{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sp=new D,op=new D,ap=new Je,Pu=new Vg,da=new vl;class Rw extends Zt{constructor(e=new Jt,t=new xl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)sp.fromBufferAttribute(t,r-1),op.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=sp.distanceTo(op);e.setAttribute("lineDistance",new lt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(r),da.radius+=s,e.ray.intersectsSphere(da)===!1)return;ap.copy(r).invert(),Pu.copy(e.ray).applyMatrix4(ap);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new D,c=new D,f=new D,h=new D,g=this.isLineSegments?2:1,_=i.index,d=i.attributes.position;if(_!==null){const m=Math.max(0,o.start),v=Math.min(_.count,o.start+o.count);for(let x=m,w=v-1;x<w;x+=g){const M=_.getX(x),b=_.getX(x+1);if(u.fromBufferAttribute(d,M),c.fromBufferAttribute(d,b),Pu.distanceSqToSegment(u,c,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(h);y<e.near||y>e.far||t.push({distance:y,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let x=m,w=v-1;x<w;x+=g){if(u.fromBufferAttribute(d,x),c.fromBufferAttribute(d,x+1),Pu.distanceSqToSegment(u,c,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(h);b<e.near||b>e.far||t.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const lp=new D,up=new D;class Dw extends Rw{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)lp.fromBufferAttribute(t,r),up.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+lp.distanceTo(up);e.setAttribute("lineDistance",new lt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Iw extends _t{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}new D;new D;new D;new D;new Un;class Nw extends _t{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new xe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Dc extends An{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Rf extends _t{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vs,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fw extends Rf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class zw extends _t{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xe(16777215),this.specular=new xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vs,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kw extends _t{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new xe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vs,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Ow extends _t{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vs,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Uw extends _t{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Bw extends _t{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new xe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vs,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vw extends xl{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const Gw={ShadowMaterial:Nw,SpriteMaterial:Lw,RawShaderMaterial:Dc,ShaderMaterial:An,PointsMaterial:Iw,MeshPhysicalMaterial:Fw,MeshStandardMaterial:Rf,MeshPhongMaterial:zw,MeshToonMaterial:kw,MeshNormalMaterial:Ow,MeshLambertMaterial:Uw,MeshDepthMaterial:t0,MeshDistanceMaterial:n0,MeshBasicMaterial:_s,MeshMatcapMaterial:Bw,LineDashedMaterial:Vw,LineBasicMaterial:xl,Material:_t};_t.fromType=function(n){return new Gw[n]};const cp={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Hw{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const g=u[f],_=u[f+1];if(g.global&&(g.lastIndex=0),g.test(c))return _}return null}}}const Ww=new Hw;class r0{constructor(e){this.manager=e!==void 0?e:Ww,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class jw extends r0{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=cp.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=go("img");function l(){c(),cp.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class yl extends r0{constructor(e){super(e)}load(e,t,i,r){const s=new fn,o=new jw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Xw extends Zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class qw extends Xw{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Yw extends Jt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class $w{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=fp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function fp(){return(typeof performance=="undefined"?Date:performance).now()}const s0="\\[\\]\\.:\\/",Df="[^"+s0+"]",Zw="[^"+s0.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",Df);/(WCOD+)?/.source.replace("WCOD",Zw);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Df);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Df);class hp{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(At(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class o0 extends Dw{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Jt;r.setAttribute("position",new lt(t,3)),r.setAttribute("color",new lt(i,3));const s=new xl({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new xe,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}const Nn=new Uint32Array(512),Fn=new Uint32Array(512);for(let n=0;n<256;++n){const e=n-127;e<-27?(Nn[n]=0,Nn[n|256]=32768,Fn[n]=24,Fn[n|256]=24):e<-14?(Nn[n]=1024>>-e-14,Nn[n|256]=1024>>-e-14|32768,Fn[n]=-e-1,Fn[n|256]=-e-1):e<=15?(Nn[n]=e+15<<10,Nn[n|256]=e+15<<10|32768,Fn[n]=13,Fn[n|256]=13):e<128?(Nn[n]=31744,Nn[n|256]=64512,Fn[n]=24,Fn[n|256]=24):(Nn[n]=31744,Nn[n|256]=64512,Fn[n]=13,Fn[n|256]=13)}const a0=new Uint32Array(2048),bo=new Uint32Array(64),Kw=new Uint32Array(64);for(let n=1;n<1024;++n){let e=n<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,a0[n]=e|t}for(let n=1024;n<2048;++n)a0[n]=939524096+(n-1024<<13);for(let n=1;n<31;++n)bo[n]=n<<23;bo[31]=1199570944;bo[32]=2147483648;for(let n=33;n<63;++n)bo[n]=2147483648+(n-32<<23);bo[63]=3347054592;for(let n=1;n<64;++n)n!==32&&(Kw[n]=1024);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Af}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Af);const Qw=`#version 300 es
precision mediump float;

layout(location = 0) in vec2 position;
layout(location = 1) in vec2 texCoords;
layout(location = 2) in vec2 texCoords2;
// TODO why in this order?
layout(location = 3) in float bend;
layout(location = 4) in mat4 instanceMatrix;

uniform mat4 cameraWorldMatrix;
uniform mat4 cameraWorldMatrixInverse;
uniform mat4 cameraProjectionMatrix;
uniform mat4 cameraProjectionMatrixInverse;

out vec2 uv;
out vec2 uv2;
out vec4 vPosition;

void main()	{
  uv = texCoords;
  uv2 = texCoords2; 
  vec3 pos = vec3(position, 0.0);
  pos.x += bend * uv.y * uv.y;
  pos.z += bend * uv.y * uv.y * 2.0;

  //  shift end of fiber y position up and down to simulate bending effect 
  pos.y -= (uv.x - 0.5) * bend * uv.y;

  vPosition = cameraProjectionMatrix * cameraWorldMatrixInverse * instanceMatrix * vec4(pos, 1.0);
  gl_Position = vPosition;
}`,Jw=`#version 300 es
precision mediump float;

uniform sampler2D textureMap;
uniform sampler2D textureMap2;
uniform sampler2D textureMap3;
uniform vec3 cameraPosition;
uniform mat4 cameraWorldMatrixInverse;
uniform mat4 cameraProjectionMatrix;
uniform float logDepthBufFC;

#define EPSILON 1e-6

out vec4 FragColor;

in vec2 uv;
in vec2 uv2;
in vec4 vPosition;

void main()	{
  vec4 c = texture(textureMap, uv);
  if (c.w < 0.5) {
    discard;
  }
  vec4 c2 = texture(textureMap2, uv2 + vec2(0.0, uv.x - 0.5) * 0.01);
  c2 *= (0.4 + uv.y * 0.8);
  c2 *= 0.5 + 0.5 * texture(textureMap3, uv);
  FragColor = vec4(c2.xyz, c.x);

  // vec4 clipPos = cameraProjectionMatrix * cameraWorldMatrixInverse * vPosition;
  // gl_FragDepth = (clipPos.z / clipPos.w);

  // gl_Position.z = log2( max( EPSILON, vPosition.w + 1.0 ) ) * logDepthBufFC - 1.0;
  // gl_Position.z *= gl_Position.w;

  gl_FragDepth = log2(max(EPSILON, vPosition.w + 1.0)) * logDepthBufFC - 1.0;
  gl_FragDepth *= vPosition.w;
}`;class eE{constructor(){ge(this,"fiberSize",.08);ge(this,"size",3.98);ge(this,"density",6);ge(this,"curvature",.05);ge(this,"origins",[]);ge(this,"matrixArray");ge(this,"uvArray");ge(this,"bendArray");ge(this,"isSorting",!1)}createOrigins(){const e=-this.size/2,t=this.size/2,i=-this.size/2,r=this.size/2,s=this.fiberSize/this.density;this.origins=[];for(let o=e;o<t;o+=s)for(let a=i;a<r;a+=s)this.origins.push([o+(Math.random()-.5)*s,a+(Math.random()-.5)*s,Math.random()*Math.PI*2,1+Math.random()*.5,(o-e)/(t-e),(a-i)/(r-i),(Math.random()-.5)*this.curvature])}sort(e){return new Promise((t,i)=>{this.isSorting&&i(),this.isSorting=!0,this.matrixArray=new Float32Array(16*this.origins.length),this.uvArray=new Float32Array(2*this.origins.length),this.bendArray=new Float32Array(1*this.origins.length),this.origins.sort((r,s)=>this.sortFunc(e,r,s));for(let r=0;r<this.origins.length;r++){const s=this.origins[r][0],o=this.origins[r][1],a=this.origins[r][2],l=this.origins[r][3],u=new Je;u.makeRotationY(a);const c=new D(s,0,o);u.setPosition(c);const f=new D(1,l,1);u.scale(f),u.toArray(this.matrixArray,r*16);const h=this.origins[r][4],g=this.origins[r][5];this.uvArray[2*r]=h,this.uvArray[2*r+1]=g,this.bendArray[r]=this.origins[r][6]}setTimeout(()=>{this.isSorting=!1},1e3),t()})}sortFunc(e,t,i){const r=e.distanceTo(new D(t[0],0,t[1]));return e.distanceTo(new D(i[0],0,i[1]))-r}}class tE{constructor(e){ge(this,"positions",[]);ge(this,"indices",[]);ge(this,"uvs",[]);ge(this,"fiberSize",.08);ge(this,"fiberLength",.06);ge(this,"segments",8);ge(this,"meshInstanceDataProvider");ge(this,"bufferGeometry");this.camera=e,this.meshInstanceDataProvider=new eE;const t=this.getWidth(0);this.positions=[[-t/2,0],[t/2,0]],this.uvs=[[0,0],[1,0]];for(let i=1;i<this.segments;++i)this.addlayer(i)}addlayer(e){const t=this.positions.length,i=this.fiberLength/this.segments*e,r=e/(this.segments-1),s=this.getWidth(e);this.positions.push([-s/2,i],[s/2,i]),this.uvs.push([0,r],[1,r]),this.indices.push([t-2,t-1,t],[t,t-1,t+1])}build(){this.bufferGeometry=new Yw,this.bufferGeometry.setAttribute("position",new lt(this.positions.flat(),2)),this.bufferGeometry.setAttribute("texCoords",new lt(this.uvs.flat(),2)),this.bufferGeometry.setIndex(this.indices.flat()),this.meshInstanceDataProvider.createOrigins();const e=this.meshInstanceDataProvider.origins.length,t=new Float32Array(16*e),i=new _i(t,16,!1,1);this.bufferGeometry.setAttribute("instanceMatrix",i);const r=new Float32Array(1*e),s=new _i(r,1,!1,1);this.bufferGeometry.setAttribute("bend",s);const o=new Float32Array(2*e),a=new _i(o,2,!1,1);return this.bufferGeometry.setAttribute("texCoords2",a),this.bufferGeometry}getBuffer(){return{positions:this.positions.flat(),indices:this.indices.flat()}}getWidth(e){return this.fiberSize}update(){this.meshInstanceDataProvider.sort(this.camera.position).then(()=>{const e=new _i(this.meshInstanceDataProvider.matrixArray,16,!1,1);this.bufferGeometry.setAttribute("instanceMatrix",e);const t=new _i(this.meshInstanceDataProvider.bendArray,1,!1,1);this.bufferGeometry.setAttribute("bend",t);const i=new _i(this.meshInstanceDataProvider.uvArray,2,!1,1);this.bufferGeometry.setAttribute("texCoords2",i)}).catch(()=>{console.log("ignored")})}}class nE{constructor(e){ge(this,"material",new Dc);ge(this,"camera");ge(this,"builder");this.renderer=e,this.camera=e.camera}build(){this.builder=new tE(this.camera);const e=this.builder.build(),[t,i]=this.getDimensions(),r=new yl,s=r.load("fibers.png");s.premultiplyAlpha=!0,s.magFilter=zt,s.minFilter=zt;const o=r.load("texture_5.jpg"),a=r.load("fibers2.png");this.material=new Dc({uniforms:{textureMap:{value:s},textureMap2:{value:o},textureMap3:{value:a},resolution:{value:new Se(t,i)},cameraWorldMatrix:{value:this.camera.matrixWorld.clone()},cameraWorldMatrixInverse:{value:this.camera.matrixWorldInverse.clone()},cameraProjectionMatrix:{value:this.camera.projectionMatrix.clone()},cameraProjectionMatrixInverse:{value:this.camera.projectionMatrixInverse.clone()},cameraPosition:{value:this.camera.position.clone()},logDepthBufFC:{value:0}},vertexShader:Qw,fragmentShader:Jw,side:Fi,transparent:!0,alphaTest:.95,blendEquation:qi,depthWrite:!1,depthTest:!0});const l=new Ut(e,this.material);this.renderer.scene.add(l)}getDimensions(){const e=this.renderer.width*window.devicePixelRatio,t=this.renderer.height*window.devicePixelRatio;return[e,t]}update(){this.builder.update(),this.material.uniforms.cameraWorldMatrix.value=this.camera.matrixWorld.clone(),this.material.uniforms.cameraWorldMatrixInverse.value=this.camera.matrixWorldInverse.clone(),this.material.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix.clone(),this.material.uniforms.cameraProjectionMatrixInverse.value=this.camera.projectionMatrixInverse.clone(),this.material.uniforms.cameraPosition.value=this.camera.position.clone(),this.material.uniforms.logDepthBufFC.value=2/(Math.log(this.camera.far+1)/Math.LN2)}}const dp={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ml{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const iE=new Lf(-1,1,1,-1,0,1),If=new Jt;If.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3));If.setAttribute("uv",new lt([0,2,0,0,2,0],2));class rE{constructor(e){this._mesh=new Ut(If,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,iE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class pp extends Ml{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof An?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=jg.clone(e.uniforms),this.material=new An({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new rE(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class mp extends Ml{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class sE extends Ml{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class oE{constructor(e,t){if(this.renderer=e,t===void 0){const i=e.getSize(new Se);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new ti(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],dp===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),pp===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new pp(dp),this.clock=new $w}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}mp!==void 0&&(o instanceof mp?i=!0:o instanceof sE&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new Lf(-1,1,1,-1,0,1);const l0=new Jt;l0.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3));l0.setAttribute("uv",new lt([0,2,0,0,2,0],2));const gp={type:"change"},Ru={type:"start"},vp={type:"end"};class aE extends mr{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yr.ROTATE,MIDDLE:yr.DOLLY,RIGHT:yr.PAN},this.touches={ONE:Mr.ROTATE,TWO:Mr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",tn),this._domElementKeyEvents=E},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(gp),i.update(),s=r.NONE},this.update=function(){const E=new D,$=new hr().setFromUnitVectors(e.up,new D(0,1,0)),se=$.clone().invert(),te=new D,L=new hr,ne=2*Math.PI;return function(){const me=i.object.position;E.copy(me).sub(i.target),E.applyQuaternion($),a.setFromVector3(E),i.autoRotate&&s===r.NONE&&A(P()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let le=i.minAzimuthAngle,pe=i.maxAzimuthAngle;return isFinite(le)&&isFinite(pe)&&(le<-Math.PI?le+=ne:le>Math.PI&&(le-=ne),pe<-Math.PI?pe+=ne:pe>Math.PI&&(pe-=ne),le<=pe?a.theta=Math.max(le,Math.min(pe,a.theta)):a.theta=a.theta>(le+pe)/2?Math.max(le,a.theta):Math.min(pe,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),E.setFromSpherical(a),E.applyQuaternion(se),me.copy(i.target).add(E),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,f||te.distanceToSquared(i.object.position)>o||8*(1-L.dot(i.object.quaternion))>o?(i.dispatchEvent(gp),te.copy(i.object.position),L.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",H),i.domElement.removeEventListener("pointerdown",it),i.domElement.removeEventListener("pointercancel",Ht),i.domElement.removeEventListener("wheel",en),i.domElement.removeEventListener("pointermove",ut),i.domElement.removeEventListener("pointerup",dt),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",tn)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new hp,l=new hp;let u=1;const c=new D;let f=!1;const h=new Se,g=new Se,_=new Se,p=new Se,d=new Se,m=new Se,v=new Se,x=new Se,w=new Se,M=[],b={};function P(){return 2*Math.PI/60/60*i.autoRotateSpeed}function y(){return Math.pow(.95,i.zoomSpeed)}function A(E){l.theta-=E}function N(E){l.phi-=E}const O=function(){const E=new D;return function(se,te){E.setFromMatrixColumn(te,0),E.multiplyScalar(-se),c.add(E)}}(),oe=function(){const E=new D;return function(se,te){i.screenSpacePanning===!0?E.setFromMatrixColumn(te,1):(E.setFromMatrixColumn(te,0),E.crossVectors(i.object.up,E)),E.multiplyScalar(se),c.add(E)}}(),K=function(){const E=new D;return function(se,te){const L=i.domElement;if(i.object.isPerspectiveCamera){const ne=i.object.position;E.copy(ne).sub(i.target);let ee=E.length();ee*=Math.tan(i.object.fov/2*Math.PI/180),O(2*se*ee/L.clientHeight,i.object.matrix),oe(2*te*ee/L.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(O(se*(i.object.right-i.object.left)/i.object.zoom/L.clientWidth,i.object.matrix),oe(te*(i.object.top-i.object.bottom)/i.object.zoom/L.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function F(E){i.object.isPerspectiveCamera?u/=E:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*E)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(E){i.object.isPerspectiveCamera?u*=E:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/E)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function V(E){h.set(E.clientX,E.clientY)}function j(E){v.set(E.clientX,E.clientY)}function R(E){p.set(E.clientX,E.clientY)}function I(E){g.set(E.clientX,E.clientY),_.subVectors(g,h).multiplyScalar(i.rotateSpeed);const $=i.domElement;A(2*Math.PI*_.x/$.clientHeight),N(2*Math.PI*_.y/$.clientHeight),h.copy(g),i.update()}function k(E){x.set(E.clientX,E.clientY),w.subVectors(x,v),w.y>0?F(y()):w.y<0&&q(y()),v.copy(x),i.update()}function Y(E){d.set(E.clientX,E.clientY),m.subVectors(d,p).multiplyScalar(i.panSpeed),K(m.x,m.y),p.copy(d),i.update()}function W(E){E.deltaY<0?q(y()):E.deltaY>0&&F(y()),i.update()}function Q(E){let $=!1;switch(E.code){case i.keys.UP:K(0,i.keyPanSpeed),$=!0;break;case i.keys.BOTTOM:K(0,-i.keyPanSpeed),$=!0;break;case i.keys.LEFT:K(i.keyPanSpeed,0),$=!0;break;case i.keys.RIGHT:K(-i.keyPanSpeed,0),$=!0;break}$&&(E.preventDefault(),i.update())}function ce(){if(M.length===1)h.set(M[0].pageX,M[0].pageY);else{const E=.5*(M[0].pageX+M[1].pageX),$=.5*(M[0].pageY+M[1].pageY);h.set(E,$)}}function de(){if(M.length===1)p.set(M[0].pageX,M[0].pageY);else{const E=.5*(M[0].pageX+M[1].pageX),$=.5*(M[0].pageY+M[1].pageY);p.set(E,$)}}function G(){const E=M[0].pageX-M[1].pageX,$=M[0].pageY-M[1].pageY,se=Math.sqrt(E*E+$*$);v.set(0,se)}function Ie(){i.enableZoom&&G(),i.enablePan&&de()}function Ee(){i.enableZoom&&G(),i.enableRotate&&ce()}function we(E){if(M.length==1)g.set(E.pageX,E.pageY);else{const se=ve(E),te=.5*(E.pageX+se.x),L=.5*(E.pageY+se.y);g.set(te,L)}_.subVectors(g,h).multiplyScalar(i.rotateSpeed);const $=i.domElement;A(2*Math.PI*_.x/$.clientHeight),N(2*Math.PI*_.y/$.clientHeight),h.copy(g)}function fe(E){if(M.length===1)d.set(E.pageX,E.pageY);else{const $=ve(E),se=.5*(E.pageX+$.x),te=.5*(E.pageY+$.y);d.set(se,te)}m.subVectors(d,p).multiplyScalar(i.panSpeed),K(m.x,m.y),p.copy(d)}function Fe(E){const $=ve(E),se=E.pageX-$.x,te=E.pageY-$.y,L=Math.sqrt(se*se+te*te);x.set(0,L),w.set(0,Math.pow(x.y/v.y,i.zoomSpeed)),F(w.y),v.copy(x)}function Le(E){i.enableZoom&&Fe(E),i.enablePan&&fe(E)}function ye(E){i.enableZoom&&Fe(E),i.enableRotate&&we(E)}function it(E){i.enabled!==!1&&(M.length===0&&(i.domElement.setPointerCapture(E.pointerId),i.domElement.addEventListener("pointermove",ut),i.domElement.addEventListener("pointerup",dt)),J(E),E.pointerType==="touch"?C(E):rt(E))}function ut(E){i.enabled!==!1&&(E.pointerType==="touch"?S(E):ke(E))}function dt(E){re(E),M.length===0&&(i.domElement.releasePointerCapture(E.pointerId),i.domElement.removeEventListener("pointermove",ut),i.domElement.removeEventListener("pointerup",dt)),i.dispatchEvent(vp),s=r.NONE}function Ht(E){re(E)}function rt(E){let $;switch(E.button){case 0:$=i.mouseButtons.LEFT;break;case 1:$=i.mouseButtons.MIDDLE;break;case 2:$=i.mouseButtons.RIGHT;break;default:$=-1}switch($){case yr.DOLLY:if(i.enableZoom===!1)return;j(E),s=r.DOLLY;break;case yr.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(i.enablePan===!1)return;R(E),s=r.PAN}else{if(i.enableRotate===!1)return;V(E),s=r.ROTATE}break;case yr.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(i.enableRotate===!1)return;V(E),s=r.ROTATE}else{if(i.enablePan===!1)return;R(E),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ru)}function ke(E){if(i.enabled!==!1)switch(s){case r.ROTATE:if(i.enableRotate===!1)return;I(E);break;case r.DOLLY:if(i.enableZoom===!1)return;k(E);break;case r.PAN:if(i.enablePan===!1)return;Y(E);break}}function en(E){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(E.preventDefault(),i.dispatchEvent(Ru),W(E),i.dispatchEvent(vp))}function tn(E){i.enabled===!1||i.enablePan===!1||Q(E)}function C(E){switch(ue(E),M.length){case 1:switch(i.touches.ONE){case Mr.ROTATE:if(i.enableRotate===!1)return;ce(),s=r.TOUCH_ROTATE;break;case Mr.PAN:if(i.enablePan===!1)return;de(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Mr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ie(),s=r.TOUCH_DOLLY_PAN;break;case Mr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ee(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ru)}function S(E){switch(ue(E),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;we(E),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;fe(E),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Le(E),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ye(E),i.update();break;default:s=r.NONE}}function H(E){i.enabled!==!1&&E.preventDefault()}function J(E){M.push(E)}function re(E){delete b[E.pointerId];for(let $=0;$<M.length;$++)if(M[$].pointerId==E.pointerId){M.splice($,1);return}}function ue(E){let $=b[E.pointerId];$===void 0&&($=new Se,b[E.pointerId]=$),$.set(E.pageX,E.pageY)}function ve(E){const $=E.pointerId===M[0].pointerId?M[1]:M[0];return b[$.pointerId]}i.domElement.addEventListener("contextmenu",H),i.domElement.addEventListener("pointerdown",it),i.domElement.addEventListener("pointercancel",Ht),i.domElement.addEventListener("wheel",en,{passive:!1}),this.update()}}class lE extends Ml{constructor(e,t,i,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xe}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}class u0{constructor(e){ge(this,"scene");ge(this,"camera");ge(this,"width",10);ge(this,"height",10);ge(this,"controls");ge(this,"renderer");ge(this,"composer");ge(this,"lightScheme");this.root=e,this.updateSize=this.updateSize.bind(this),this.scene=new Aw;const t=new Bs;this.scene.add(t),this.renderer=new i0({antialias:!0,alpha:!1}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.setClearColor(10066329),this.camera=new on(60,this.width/this.height,.1,2e3),this.camera.position.set(.5,.5,2),this.camera.lookAt(0,0,0),this.updateSize(),this.composer=new oE(this.renderer),this.composer.setSize(this.width,this.height),this.composer.addPass(new lE(this.scene,this.camera)),this.controls=new aE(this.camera,this.renderer.domElement),this.controls.minDistance=.5,this.controls.maxDistance=20,this.controls.target.set(0,0,0),this.controls.enableDamping=!0,this.controls.zoomSpeed=.5,window.addEventListener("resize",this.updateSize),this.root.appendChild(this.renderer.domElement)}addLightScheme(e){this.lightScheme=e}updateSize(){if(!this.root)return;const e=this.root.getBoundingClientRect();this.width=e.width,this.height=e.height,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}update(){var e,t;(e=this.controls)==null||e.update(),this.controls.update(),this.composer.render(),(t=this.lightScheme)==null||t.update()}}class c0{constructor(e){ge(this,"directionalLight");this.renderer=e;const t=new qw(4210752);this.renderer.scene.add(t),this.renderer.addLightScheme(this)}update(){}}class uE{constructor(){ge(this,"animationId",-1);ge(this,"instanced");ge(this,"renderer");this.animate=this.animate.bind(this)}create(){const e=document.createElement("div");e.style.width=window.innerWidth+"px",e.style.height=window.innerHeight+"px",document.body.appendChild(e),this.renderer=new u0(e),new c0(this.renderer),this.instanced=new nE(this.renderer),this.instanced.build();const t=new o0;this.renderer.scene.add(t);const i=new Ut(new Co(4,4),new _s({map:new yl().load("texture_5.jpg")}));return i.rotateX(Math.PI/2),i.scale.z=-1,this.renderer.scene.add(i),this.animate(),e}animate(){var e,t;(e=this.instanced)==null||e.update(),(t=this.renderer)==null||t.update(),this.animationId=requestAnimationFrame(this.animate)}destroy(){this.animationId!==-1&&cancelAnimationFrame(this.animationId)}}class cE{constructor(){ge(this,"positions",[]);ge(this,"indices",[]);ge(this,"uvs",[]);ge(this,"fiberSize",.05);ge(this,"fiberLength",.08);ge(this,"segments",5);const e=this.getWidth(0);this.positions=[[-e/2,0,0],[e/2,0,0]],this.uvs=[[0,0],[1,0]];for(let t=1;t<this.segments;++t)this.addlayer(t)}addlayer(e){const t=this.positions.length,i=this.fiberLength/this.segments*e,r=e/(this.segments-1),s=this.getWidth(e);this.positions.push([-s/2,i,0],[s/2,i,0]),this.uvs.push([0,r],[1,r]),this.indices.push([t-2,t-1,t],[t,t-1,t+1])}getWidth(e){return this.fiberSize-e/this.segments*this.fiberSize/2}build(){const e=new Jt;return e.setAttribute("position",new lt(this.positions.flat(),3)),e.setAttribute("uv",new lt(this.uvs.flat(),2)),e.setIndex(this.indices.flat()),e}}class fE{constructor(e){ge(this,"material",new Rf);ge(this,"size",3.95);ge(this,"fiberSize",.05);ge(this,"density",5);ge(this,"count",0);this.renderer=e}makeOrigins(){const e=-this.size/2,t=this.size/2,i=-this.size/2,r=this.size/2,s=this.fiberSize/this.density,o=[];for(let a=e;a<t;a+=s)for(let l=i;l<r;l+=s)o.push([a+(Math.random()-.5)*s,l+(Math.random()-.5)*s,Math.random()*Math.PI*2,(a-e)/(t-e),(l-i)/(r-i)]);return this.count=o.length,o}build(){const t=new cE().build(),r=new yl().load("FurFin.png");r.premultiplyAlpha=!0,this.material=new _s({color:16711935,alphaMap:r,side:Fi,transparent:!0,depthWrite:!0,depthTest:!1,alphaTest:.1}),this.material.onBeforeCompile=l=>{console.log("THREE.ShaderChunk",Ae),console.log("shader",l.vertexShader),console.log("shader",l.fragmentShader)};const s=this.makeOrigins(),o=new Pw(t,this.material,this.count),a=new Je;for(let l=0;l<this.count;l++){const u=s[l][0],c=s[l][1],f=s[l][2];s[l][3],s[l][4];const h=f;a.makeRotationY(h);const g=new D(u,0,c);a.setPosition(g);const _=new D(1,1+Math.random()*.5,1);a.scale(_),o.setMatrixAt(l,a),o.setColorAt(l,new xe(Math.random(),Math.random(),Math.random()))}this.renderer.scene.add(o)}update(){}}class hE{constructor(){ge(this,"animationId",-1);ge(this,"instanced");ge(this,"renderer");this.animate=this.animate.bind(this)}create(){const e=document.createElement("div");e.style.width=window.innerWidth+"px",e.style.height=window.innerHeight+"px",document.body.appendChild(e),this.renderer=new u0(e),new c0(this.renderer),this.instanced=new fE(this.renderer),this.instanced.build();const t=new o0;this.renderer.scene.add(t);const i=new Ut(new Co(4,4),new _s({map:new yl().load("FurLeopard.jpg")}));return i.rotateX(Math.PI/2),i.scale.z=-1,this.renderer.scene.add(i),this.animate(),e}animate(){var e,t;(e=this.instanced)==null||e.update(),(t=this.renderer)==null||t.update(),this.animationId=requestAnimationFrame(this.animate)}destroy(){this.animationId!==-1&&cancelAnimationFrame(this.animationId)}}class Cn{isEmpty(){return!this.isPresent()}static of(e){if(e!=null)return new _p(e);throw new TypeError("The passed value was null or undefined.")}static ofNonNull(e){return Cn.of(e)}static ofNullable(e){return e!=null?new _p(e):new xp}static empty(){return new xp}static from(e){switch(e.kind){case"present":return Cn.of(e.value);case"empty":return Cn.empty();default:throw new TypeError("The passed value was not an Option type.")}}}class _p extends Cn{constructor(e){super(),this.payload=e}isPresent(){return!0}get(){return this.payload}ifPresent(e){e(this.payload)}ifPresentOrElse(e,t){e(this.payload)}filter(e){return e(this.payload)?this:Cn.empty()}map(e){const t=e(this.payload);return Cn.ofNullable(t)}flatMap(e){return e(this.payload)}or(e){return this}orElse(e){return this.payload}orElseGet(e){return this.payload}orElseThrow(e){return this.payload}orNull(){return this.payload}orUndefined(){return this.payload}toOption(){return{kind:"present",value:this.payload}}matches(e){return e.present(this.payload)}toJSON(e){return this.payload}}class xp extends Cn{isPresent(){return!1}constructor(){super()}get(){throw new TypeError("The optional is not present.")}ifPresent(e){}ifPresentOrElse(e,t){t()}filter(e){return this}map(e){return Cn.empty()}flatMap(e){return Cn.empty()}or(e){return e()}orElse(e){return e}orElseGet(e){return this.orElse(e())}orElseThrow(e){throw e()}orNull(){return null}orUndefined(){}toOption(){return{kind:"empty"}}matches(e){return e.empty()}toJSON(e){return null}}class dE{constructor(){ge(this,"renderer")}createRenderer(e){var i;switch(this.removeRendererIfExists(),e){case Qa.Cards:this.renderer=new uE;break;case Qa.StandardCards:this.renderer=new hE;break}const t=(i=this.renderer)==null?void 0:i.create();this.getRoot().appendChild(t)}removeRendererIfExists(){this.renderer&&(this.renderer.destroy(),this.getRoot().innerHTML="")}getRoot(){return Cn.ofNullable(document.querySelector("#render-target")).orElseThrow(()=>"no render target element")}}var pE=new dE;const mE={rendererId:Qa.Cards},gE=(n,e)=>{switch(e.type){case"setRenderer":return{...n,rendererId:e.payload}}throw"unreachable"},f0=wi.exports.createContext(null),h0=()=>{const n=wi.exports.useContext(f0);if(n===null)throw Error("Context has not been Provided!");return n},vE=({children:n})=>{const[e,t]=wi.exports.useReducer(gE,mE),i={rendererId:e.rendererId,renderersList:O_,setRenderer:r=>{t({type:"setRenderer",payload:r})}};return wi.exports.useEffect(()=>{const r=localStorage.getItem("rendererId");if(!r)return;const s=+r;!isNaN(s)&&s>=0&&s<i.renderersList.length&&t({type:"setRenderer",payload:s})},[]),wi.exports.useEffect(()=>{try{localStorage.setItem("rendererId",""+e.rendererId),pE.createRenderer(e.rendererId)}catch(r){console.error(r)}},[e.rendererId]),kt.createElement(f0.Provider,{value:i},n)};const _E=({title:n,id:e})=>{const{setRenderer:t}=h0();return kt.createElement("div",{className:"playground-selector-option__item"},kt.createElement("button",{className:"btn playground-selector-option__button",onClick:()=>{t(e)}},n))},xE=()=>{const{renderersList:n}=h0(),e=n.map(t=>kt.createElement(_E,{title:t.name,id:t.id,key:t.id}));return kt.createElement("div",{className:"playground_selector"},e)},yE=()=>kt.createElement("div",{id:"render-target"}),ME=()=>kt.createElement("div",{className:"layout"},kt.createElement("div",{className:"layout__left"},kt.createElement(xE,null)),kt.createElement("div",{className:"layout__canvas-container"},kt.createElement(yE,null))),SE=()=>kt.createElement(vE,null,kt.createElement(ME,null)),wE=Pg(document.querySelector("#app"));wE.render(kt.createElement(SE,null));
