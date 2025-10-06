(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Em={exports:{}},$a={},Cm={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ls=Symbol.for("react.element"),Jv=Symbol.for("react.portal"),Xv=Symbol.for("react.fragment"),Zv=Symbol.for("react.strict_mode"),ew=Symbol.for("react.profiler"),tw=Symbol.for("react.provider"),nw=Symbol.for("react.context"),rw=Symbol.for("react.forward_ref"),iw=Symbol.for("react.suspense"),sw=Symbol.for("react.memo"),ow=Symbol.for("react.lazy"),Fh=Symbol.iterator;function aw(t){return t===null||typeof t!="object"?null:(t=Fh&&t[Fh]||t["@@iterator"],typeof t=="function"?t:null)}var km={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sm=Object.assign,Im={};function ci(t,e,n){this.props=t,this.context=e,this.refs=Im,this.updater=n||km}ci.prototype.isReactComponent={};ci.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ci.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Tm(){}Tm.prototype=ci.prototype;function ju(t,e,n){this.props=t,this.context=e,this.refs=Im,this.updater=n||km}var Fu=ju.prototype=new Tm;Fu.constructor=ju;Sm(Fu,ci.prototype);Fu.isPureReactComponent=!0;var Uh=Array.isArray,Nm=Object.prototype.hasOwnProperty,Uu={current:null},bm={key:!0,ref:!0,__self:!0,__source:!0};function Rm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Nm.call(e,r)&&!bm.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ls,type:t,key:s,ref:o,props:i,_owner:Uu.current}}function lw(t,e){return{$$typeof:Ls,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ls}function cw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wh=/\/+/g;function Tl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?cw(""+t.key):e.toString(36)}function ko(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ls:case Jv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Tl(o,0):r,Uh(i)?(n="",t!=null&&(n=t.replace(Wh,"$&/")+"/"),ko(i,e,n,"",function(c){return c})):i!=null&&(Wu(i)&&(i=lw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Wh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Uh(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Tl(s,a);o+=ko(s,e,n,l,i)}else if(l=aw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Tl(s,a++),o+=ko(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function no(t,e,n){if(t==null)return t;var r=[],i=0;return ko(t,r,"","",function(s){return e.call(n,s,i++)}),r}function uw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Le={current:null},So={transition:null},dw={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:So,ReactCurrentOwner:Uu};function Pm(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:no,forEach:function(t,e,n){no(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return no(t,function(){e++}),e},toArray:function(t){return no(t,function(e){return e})||[]},only:function(t){if(!Wu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$.Component=ci;$.Fragment=Xv;$.Profiler=ew;$.PureComponent=ju;$.StrictMode=Zv;$.Suspense=iw;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dw;$.act=Pm;$.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Sm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Uu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Nm.call(e,l)&&!bm.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ls,type:t.type,key:i,ref:s,props:r,_owner:o}};$.createContext=function(t){return t={$$typeof:nw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:tw,_context:t},t.Consumer=t};$.createElement=Rm;$.createFactory=function(t){var e=Rm.bind(null,t);return e.type=t,e};$.createRef=function(){return{current:null}};$.forwardRef=function(t){return{$$typeof:rw,render:t}};$.isValidElement=Wu;$.lazy=function(t){return{$$typeof:ow,_payload:{_status:-1,_result:t},_init:uw}};$.memo=function(t,e){return{$$typeof:sw,type:t,compare:e===void 0?null:e}};$.startTransition=function(t){var e=So.transition;So.transition={};try{t()}finally{So.transition=e}};$.unstable_act=Pm;$.useCallback=function(t,e){return Le.current.useCallback(t,e)};$.useContext=function(t){return Le.current.useContext(t)};$.useDebugValue=function(){};$.useDeferredValue=function(t){return Le.current.useDeferredValue(t)};$.useEffect=function(t,e){return Le.current.useEffect(t,e)};$.useId=function(){return Le.current.useId()};$.useImperativeHandle=function(t,e,n){return Le.current.useImperativeHandle(t,e,n)};$.useInsertionEffect=function(t,e){return Le.current.useInsertionEffect(t,e)};$.useLayoutEffect=function(t,e){return Le.current.useLayoutEffect(t,e)};$.useMemo=function(t,e){return Le.current.useMemo(t,e)};$.useReducer=function(t,e,n){return Le.current.useReducer(t,e,n)};$.useRef=function(t){return Le.current.useRef(t)};$.useState=function(t){return Le.current.useState(t)};$.useSyncExternalStore=function(t,e,n){return Le.current.useSyncExternalStore(t,e,n)};$.useTransition=function(){return Le.current.useTransition()};$.version="18.3.1";Cm.exports=$;var w=Cm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hw=w,fw=Symbol.for("react.element"),pw=Symbol.for("react.fragment"),mw=Object.prototype.hasOwnProperty,gw=hw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yw={key:!0,ref:!0,__self:!0,__source:!0};function Am(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)mw.call(e,r)&&!yw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:fw,type:t,key:s,ref:o,props:i,_owner:gw.current}}$a.Fragment=pw;$a.jsx=Am;$a.jsxs=Am;Em.exports=$a;var u=Em.exports,Mm={exports:{}},Je={},Dm={exports:{}},Lm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,L){var j=R.length;R.push(L);e:for(;0<j;){var ae=j-1>>>1,me=R[ae];if(0<i(me,L))R[ae]=L,R[j]=me,j=ae;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var L=R[0],j=R.pop();if(j!==L){R[0]=j;e:for(var ae=0,me=R.length,eo=me>>>1;ae<eo;){var zn=2*(ae+1)-1,Il=R[zn],Vn=zn+1,to=R[Vn];if(0>i(Il,j))Vn<me&&0>i(to,Il)?(R[ae]=to,R[Vn]=j,ae=Vn):(R[ae]=Il,R[zn]=j,ae=zn);else if(Vn<me&&0>i(to,j))R[ae]=to,R[Vn]=j,ae=Vn;else break e}}return L}function i(R,L){var j=R.sortIndex-L.sortIndex;return j!==0?j:R.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,m=!1,_=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(R){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=R)r(c),L.sortIndex=L.expirationTime,e(l,L);else break;L=n(c)}}function x(R){if(v=!1,y(R),!_)if(n(l)!==null)_=!0,kl(C);else{var L=n(c);L!==null&&Sl(x,L.startTime-R)}}function C(R,L){_=!1,v&&(v=!1,g(b),b=-1),m=!0;var j=h;try{for(y(L),d=n(l);d!==null&&(!(d.expirationTime>L)||R&&!ke());){var ae=d.callback;if(typeof ae=="function"){d.callback=null,h=d.priorityLevel;var me=ae(d.expirationTime<=L);L=t.unstable_now(),typeof me=="function"?d.callback=me:d===n(l)&&r(l),y(L)}else r(l);d=n(l)}if(d!==null)var eo=!0;else{var zn=n(c);zn!==null&&Sl(x,zn.startTime-L),eo=!1}return eo}finally{d=null,h=j,m=!1}}var I=!1,T=null,b=-1,O=5,D=-1;function ke(){return!(t.unstable_now()-D<O)}function P(){if(T!==null){var R=t.unstable_now();D=R;var L=!0;try{L=T(!0,R)}finally{L?H():(I=!1,T=null)}}else I=!1}var H;if(typeof p=="function")H=function(){p(P)};else if(typeof MessageChannel<"u"){var jh=new MessageChannel,Qv=jh.port2;jh.port1.onmessage=P,H=function(){Qv.postMessage(null)}}else H=function(){E(P,0)};function kl(R){T=R,I||(I=!0,H())}function Sl(R,L){b=E(function(){R(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,kl(C))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var j=h;h=L;try{return R()}finally{h=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var j=h;h=R;try{return L()}finally{h=j}},t.unstable_scheduleCallback=function(R,L,j){var ae=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ae+j:ae):j=ae,R){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=j+me,R={id:f++,callback:L,priorityLevel:R,startTime:j,expirationTime:me,sortIndex:-1},j>ae?(R.sortIndex=j,e(c,R),n(l)===null&&R===n(c)&&(v?(g(b),b=-1):v=!0,Sl(x,j-ae))):(R.sortIndex=me,e(l,R),_||m||(_=!0,kl(C))),R},t.unstable_shouldYield=ke,t.unstable_wrapCallback=function(R){var L=h;return function(){var j=h;h=L;try{return R.apply(this,arguments)}finally{h=j}}}})(Lm);Dm.exports=Lm;var _w=Dm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vw=w,Qe=_w;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Om=new Set,ss={};function mr(t,e){Qr(t,e),Qr(t+"Capture",e)}function Qr(t,e){for(ss[t]=e,t=0;t<e.length;t++)Om.add(e[t])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wc=Object.prototype.hasOwnProperty,ww=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$h={},zh={};function xw(t){return wc.call(zh,t)?!0:wc.call($h,t)?!1:ww.test(t)?zh[t]=!0:($h[t]=!0,!1)}function Ew(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Cw(t,e,n,r){if(e===null||typeof e>"u"||Ew(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Oe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ce[t]=new Oe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ce[e]=new Oe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ce[t]=new Oe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ce[t]=new Oe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ce[t]=new Oe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ce[t]=new Oe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ce[t]=new Oe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ce[t]=new Oe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ce[t]=new Oe(t,5,!1,t.toLowerCase(),null,!1,!1)});var $u=/[\-:]([a-z])/g;function zu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($u,zu);Ce[e]=new Oe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($u,zu);Ce[e]=new Oe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($u,zu);Ce[e]=new Oe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ce[t]=new Oe(t,1,!1,t.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ce[t]=new Oe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vu(t,e,n,r){var i=Ce.hasOwnProperty(e)?Ce[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Cw(e,n,i,r)&&(n=null),r||i===null?xw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var nn=vw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ro=Symbol.for("react.element"),Sr=Symbol.for("react.portal"),Ir=Symbol.for("react.fragment"),Bu=Symbol.for("react.strict_mode"),xc=Symbol.for("react.profiler"),jm=Symbol.for("react.provider"),Fm=Symbol.for("react.context"),Hu=Symbol.for("react.forward_ref"),Ec=Symbol.for("react.suspense"),Cc=Symbol.for("react.suspense_list"),Gu=Symbol.for("react.memo"),cn=Symbol.for("react.lazy"),Um=Symbol.for("react.offscreen"),Vh=Symbol.iterator;function Ci(t){return t===null||typeof t!="object"?null:(t=Vh&&t[Vh]||t["@@iterator"],typeof t=="function"?t:null)}var ie=Object.assign,Nl;function Oi(t){if(Nl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nl=e&&e[1]||""}return`
`+Nl+t}var bl=!1;function Rl(t,e){if(!t||bl)return"";bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{bl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Oi(t):""}function kw(t){switch(t.tag){case 5:return Oi(t.type);case 16:return Oi("Lazy");case 13:return Oi("Suspense");case 19:return Oi("SuspenseList");case 0:case 2:case 15:return t=Rl(t.type,!1),t;case 11:return t=Rl(t.type.render,!1),t;case 1:return t=Rl(t.type,!0),t;default:return""}}function kc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ir:return"Fragment";case Sr:return"Portal";case xc:return"Profiler";case Bu:return"StrictMode";case Ec:return"Suspense";case Cc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Fm:return(t.displayName||"Context")+".Consumer";case jm:return(t._context.displayName||"Context")+".Provider";case Hu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gu:return e=t.displayName||null,e!==null?e:kc(t.type)||"Memo";case cn:e=t._payload,t=t._init;try{return kc(t(e))}catch{}}return null}function Sw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kc(e);case 8:return e===Bu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Wm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Iw(t){var e=Wm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function io(t){t._valueTracker||(t._valueTracker=Iw(t))}function $m(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Wm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Vo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sc(t,e){var n=e.checked;return ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Mn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zm(t,e){e=e.checked,e!=null&&Vu(t,"checked",e,!1)}function Ic(t,e){zm(t,e);var n=Mn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Tc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Tc(t,e.type,Mn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Tc(t,e,n){(e!=="number"||Vo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ji=Array.isArray;function Ur(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Mn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Nc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(ji(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mn(n)}}function Vm(t,e){var n=Mn(e.value),r=Mn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Kh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Bm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Bm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var so,Hm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(so=so||document.createElement("div"),so.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=so.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function os(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tw=["Webkit","ms","Moz","O"];Object.keys(zi).forEach(function(t){Tw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zi[e]=zi[t]})});function Gm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zi.hasOwnProperty(t)&&zi[t]?(""+e).trim():e+"px"}function Km(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Gm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Nw=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rc(t,e){if(e){if(Nw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Pc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ac=null;function Ku(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mc=null,Wr=null,$r=null;function qh(t){if(t=Fs(t)){if(typeof Mc!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Ga(e),Mc(t.stateNode,t.type,e))}}function qm(t){Wr?$r?$r.push(t):$r=[t]:Wr=t}function Ym(){if(Wr){var t=Wr,e=$r;if($r=Wr=null,qh(t),e)for(t=0;t<e.length;t++)qh(e[t])}}function Qm(t,e){return t(e)}function Jm(){}var Pl=!1;function Xm(t,e,n){if(Pl)return t(e,n);Pl=!0;try{return Qm(t,e,n)}finally{Pl=!1,(Wr!==null||$r!==null)&&(Jm(),Ym())}}function as(t,e){var n=t.stateNode;if(n===null)return null;var r=Ga(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Dc=!1;if(qt)try{var ki={};Object.defineProperty(ki,"passive",{get:function(){Dc=!0}}),window.addEventListener("test",ki,ki),window.removeEventListener("test",ki,ki)}catch{Dc=!1}function bw(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Vi=!1,Bo=null,Ho=!1,Lc=null,Rw={onError:function(t){Vi=!0,Bo=t}};function Pw(t,e,n,r,i,s,o,a,l){Vi=!1,Bo=null,bw.apply(Rw,arguments)}function Aw(t,e,n,r,i,s,o,a,l){if(Pw.apply(this,arguments),Vi){if(Vi){var c=Bo;Vi=!1,Bo=null}else throw Error(k(198));Ho||(Ho=!0,Lc=c)}}function gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Zm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yh(t){if(gr(t)!==t)throw Error(k(188))}function Mw(t){var e=t.alternate;if(!e){if(e=gr(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Yh(i),t;if(s===r)return Yh(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function eg(t){return t=Mw(t),t!==null?tg(t):null}function tg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=tg(t);if(e!==null)return e;t=t.sibling}return null}var ng=Qe.unstable_scheduleCallback,Qh=Qe.unstable_cancelCallback,Dw=Qe.unstable_shouldYield,Lw=Qe.unstable_requestPaint,le=Qe.unstable_now,Ow=Qe.unstable_getCurrentPriorityLevel,qu=Qe.unstable_ImmediatePriority,rg=Qe.unstable_UserBlockingPriority,Go=Qe.unstable_NormalPriority,jw=Qe.unstable_LowPriority,ig=Qe.unstable_IdlePriority,za=null,Nt=null;function Fw(t){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(za,t,void 0,(t.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:$w,Uw=Math.log,Ww=Math.LN2;function $w(t){return t>>>=0,t===0?32:31-(Uw(t)/Ww|0)|0}var oo=64,ao=4194304;function Fi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ko(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Fi(a):(s&=o,s!==0&&(r=Fi(s)))}else o=n&~i,o!==0?r=Fi(o):s!==0&&(r=Fi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-mt(e),i=1<<n,r|=t[n],e&=~i;return r}function zw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-mt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=zw(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Oc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sg(){var t=oo;return oo<<=1,!(oo&4194240)&&(oo=64),t}function Al(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Os(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mt(e),t[e]=n}function Bw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-mt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Yu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-mt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var G=0;function og(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ag,Qu,lg,cg,ug,jc=!1,lo=[],vn=null,wn=null,xn=null,ls=new Map,cs=new Map,dn=[],Hw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jh(t,e){switch(t){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":ls.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":cs.delete(e.pointerId)}}function Si(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Fs(e),e!==null&&Qu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Gw(t,e,n,r,i){switch(e){case"focusin":return vn=Si(vn,t,e,n,r,i),!0;case"dragenter":return wn=Si(wn,t,e,n,r,i),!0;case"mouseover":return xn=Si(xn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ls.set(s,Si(ls.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,cs.set(s,Si(cs.get(s)||null,t,e,n,r,i)),!0}return!1}function dg(t){var e=Yn(t.target);if(e!==null){var n=gr(e);if(n!==null){if(e=n.tag,e===13){if(e=Zm(n),e!==null){t.blockedOn=e,ug(t.priority,function(){lg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Io(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ac=r,n.target.dispatchEvent(r),Ac=null}else return e=Fs(n),e!==null&&Qu(e),t.blockedOn=n,!1;e.shift()}return!0}function Xh(t,e,n){Io(t)&&n.delete(e)}function Kw(){jc=!1,vn!==null&&Io(vn)&&(vn=null),wn!==null&&Io(wn)&&(wn=null),xn!==null&&Io(xn)&&(xn=null),ls.forEach(Xh),cs.forEach(Xh)}function Ii(t,e){t.blockedOn===e&&(t.blockedOn=null,jc||(jc=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,Kw)))}function us(t){function e(i){return Ii(i,t)}if(0<lo.length){Ii(lo[0],t);for(var n=1;n<lo.length;n++){var r=lo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(vn!==null&&Ii(vn,t),wn!==null&&Ii(wn,t),xn!==null&&Ii(xn,t),ls.forEach(e),cs.forEach(e),n=0;n<dn.length;n++)r=dn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<dn.length&&(n=dn[0],n.blockedOn===null);)dg(n),n.blockedOn===null&&dn.shift()}var zr=nn.ReactCurrentBatchConfig,qo=!0;function qw(t,e,n,r){var i=G,s=zr.transition;zr.transition=null;try{G=1,Ju(t,e,n,r)}finally{G=i,zr.transition=s}}function Yw(t,e,n,r){var i=G,s=zr.transition;zr.transition=null;try{G=4,Ju(t,e,n,r)}finally{G=i,zr.transition=s}}function Ju(t,e,n,r){if(qo){var i=Fc(t,e,n,r);if(i===null)zl(t,e,r,Yo,n),Jh(t,r);else if(Gw(i,t,e,n,r))r.stopPropagation();else if(Jh(t,r),e&4&&-1<Hw.indexOf(t)){for(;i!==null;){var s=Fs(i);if(s!==null&&ag(s),s=Fc(t,e,n,r),s===null&&zl(t,e,r,Yo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else zl(t,e,r,null,n)}}var Yo=null;function Fc(t,e,n,r){if(Yo=null,t=Ku(r),t=Yn(t),t!==null)if(e=gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Zm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yo=t,null}function hg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ow()){case qu:return 1;case rg:return 4;case Go:case jw:return 16;case ig:return 536870912;default:return 16}default:return 16}}var yn=null,Xu=null,To=null;function fg(){if(To)return To;var t,e=Xu,n=e.length,r,i="value"in yn?yn.value:yn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return To=i.slice(t,1<r?1-r:void 0)}function No(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function co(){return!0}function Zh(){return!1}function Xe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?co:Zh,this.isPropagationStopped=Zh,this}return ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),e}var ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zu=Xe(ui),js=ie({},ui,{view:0,detail:0}),Qw=Xe(js),Ml,Dl,Ti,Va=ie({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ed,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ti&&(Ti&&t.type==="mousemove"?(Ml=t.screenX-Ti.screenX,Dl=t.screenY-Ti.screenY):Dl=Ml=0,Ti=t),Ml)},movementY:function(t){return"movementY"in t?t.movementY:Dl}}),ef=Xe(Va),Jw=ie({},Va,{dataTransfer:0}),Xw=Xe(Jw),Zw=ie({},js,{relatedTarget:0}),Ll=Xe(Zw),e1=ie({},ui,{animationName:0,elapsedTime:0,pseudoElement:0}),t1=Xe(e1),n1=ie({},ui,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),r1=Xe(n1),i1=ie({},ui,{data:0}),tf=Xe(i1),s1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},o1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=a1[t])?!!e[t]:!1}function ed(){return l1}var c1=ie({},js,{key:function(t){if(t.key){var e=s1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=No(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?o1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ed,charCode:function(t){return t.type==="keypress"?No(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?No(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),u1=Xe(c1),d1=ie({},Va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nf=Xe(d1),h1=ie({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ed}),f1=Xe(h1),p1=ie({},ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),m1=Xe(p1),g1=ie({},Va,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),y1=Xe(g1),_1=[9,13,27,32],td=qt&&"CompositionEvent"in window,Bi=null;qt&&"documentMode"in document&&(Bi=document.documentMode);var v1=qt&&"TextEvent"in window&&!Bi,pg=qt&&(!td||Bi&&8<Bi&&11>=Bi),rf=" ",sf=!1;function mg(t,e){switch(t){case"keyup":return _1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Tr=!1;function w1(t,e){switch(t){case"compositionend":return gg(e);case"keypress":return e.which!==32?null:(sf=!0,rf);case"textInput":return t=e.data,t===rf&&sf?null:t;default:return null}}function x1(t,e){if(Tr)return t==="compositionend"||!td&&mg(t,e)?(t=fg(),To=Xu=yn=null,Tr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return pg&&e.locale!=="ko"?null:e.data;default:return null}}var E1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function of(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!E1[t.type]:e==="textarea"}function yg(t,e,n,r){qm(r),e=Qo(e,"onChange"),0<e.length&&(n=new Zu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Hi=null,ds=null;function C1(t){Ng(t,0)}function Ba(t){var e=Rr(t);if($m(e))return t}function k1(t,e){if(t==="change")return e}var _g=!1;if(qt){var Ol;if(qt){var jl="oninput"in document;if(!jl){var af=document.createElement("div");af.setAttribute("oninput","return;"),jl=typeof af.oninput=="function"}Ol=jl}else Ol=!1;_g=Ol&&(!document.documentMode||9<document.documentMode)}function lf(){Hi&&(Hi.detachEvent("onpropertychange",vg),ds=Hi=null)}function vg(t){if(t.propertyName==="value"&&Ba(ds)){var e=[];yg(e,ds,t,Ku(t)),Xm(C1,e)}}function S1(t,e,n){t==="focusin"?(lf(),Hi=e,ds=n,Hi.attachEvent("onpropertychange",vg)):t==="focusout"&&lf()}function I1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ba(ds)}function T1(t,e){if(t==="click")return Ba(e)}function N1(t,e){if(t==="input"||t==="change")return Ba(e)}function b1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _t=typeof Object.is=="function"?Object.is:b1;function hs(t,e){if(_t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wc.call(e,i)||!_t(t[i],e[i]))return!1}return!0}function cf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function uf(t,e){var n=cf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cf(n)}}function wg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?wg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function xg(){for(var t=window,e=Vo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vo(t.document)}return e}function nd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function R1(t){var e=xg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&wg(n.ownerDocument.documentElement,n)){if(r!==null&&nd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=uf(n,s);var o=uf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var P1=qt&&"documentMode"in document&&11>=document.documentMode,Nr=null,Uc=null,Gi=null,Wc=!1;function df(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wc||Nr==null||Nr!==Vo(r)||(r=Nr,"selectionStart"in r&&nd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gi&&hs(Gi,r)||(Gi=r,r=Qo(Uc,"onSelect"),0<r.length&&(e=new Zu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Nr)))}function uo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var br={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},Fl={},Eg={};qt&&(Eg=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function Ha(t){if(Fl[t])return Fl[t];if(!br[t])return t;var e=br[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Eg)return Fl[t]=e[n];return t}var Cg=Ha("animationend"),kg=Ha("animationiteration"),Sg=Ha("animationstart"),Ig=Ha("transitionend"),Tg=new Map,hf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(t,e){Tg.set(t,e),mr(e,[t])}for(var Ul=0;Ul<hf.length;Ul++){var Wl=hf[Ul],A1=Wl.toLowerCase(),M1=Wl[0].toUpperCase()+Wl.slice(1);Un(A1,"on"+M1)}Un(Cg,"onAnimationEnd");Un(kg,"onAnimationIteration");Un(Sg,"onAnimationStart");Un("dblclick","onDoubleClick");Un("focusin","onFocus");Un("focusout","onBlur");Un(Ig,"onTransitionEnd");Qr("onMouseEnter",["mouseout","mouseover"]);Qr("onMouseLeave",["mouseout","mouseover"]);Qr("onPointerEnter",["pointerout","pointerover"]);Qr("onPointerLeave",["pointerout","pointerover"]);mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ui));function ff(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Aw(r,e,void 0,t),t.currentTarget=null}function Ng(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;ff(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;ff(i,a,c),s=l}}}if(Ho)throw t=Lc,Ho=!1,Lc=null,t}function J(t,e){var n=e[Hc];n===void 0&&(n=e[Hc]=new Set);var r=t+"__bubble";n.has(r)||(bg(e,t,2,!1),n.add(r))}function $l(t,e,n){var r=0;e&&(r|=4),bg(n,t,r,e)}var ho="_reactListening"+Math.random().toString(36).slice(2);function fs(t){if(!t[ho]){t[ho]=!0,Om.forEach(function(n){n!=="selectionchange"&&(D1.has(n)||$l(n,!1,t),$l(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ho]||(e[ho]=!0,$l("selectionchange",!1,e))}}function bg(t,e,n,r){switch(hg(e)){case 1:var i=qw;break;case 4:i=Yw;break;default:i=Ju}n=i.bind(null,e,n,t),i=void 0,!Dc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function zl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Yn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Xm(function(){var c=s,f=Ku(n),d=[];e:{var h=Tg.get(t);if(h!==void 0){var m=Zu,_=t;switch(t){case"keypress":if(No(n)===0)break e;case"keydown":case"keyup":m=u1;break;case"focusin":_="focus",m=Ll;break;case"focusout":_="blur",m=Ll;break;case"beforeblur":case"afterblur":m=Ll;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ef;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Xw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=f1;break;case Cg:case kg:case Sg:m=t1;break;case Ig:m=m1;break;case"scroll":m=Qw;break;case"wheel":m=y1;break;case"copy":case"cut":case"paste":m=r1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=nf}var v=(e&4)!==0,E=!v&&t==="scroll",g=v?h!==null?h+"Capture":null:h;v=[];for(var p=c,y;p!==null;){y=p;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,g!==null&&(x=as(p,g),x!=null&&v.push(ps(p,x,y)))),E)break;p=p.return}0<v.length&&(h=new m(h,_,null,n,f),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Ac&&(_=n.relatedTarget||n.fromElement)&&(Yn(_)||_[Yt]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?Yn(_):null,_!==null&&(E=gr(_),_!==E||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(v=ef,x="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=nf,x="onPointerLeave",g="onPointerEnter",p="pointer"),E=m==null?h:Rr(m),y=_==null?h:Rr(_),h=new v(x,p+"leave",m,n,f),h.target=E,h.relatedTarget=y,x=null,Yn(f)===c&&(v=new v(g,p+"enter",_,n,f),v.target=y,v.relatedTarget=E,x=v),E=x,m&&_)t:{for(v=m,g=_,p=0,y=v;y;y=xr(y))p++;for(y=0,x=g;x;x=xr(x))y++;for(;0<p-y;)v=xr(v),p--;for(;0<y-p;)g=xr(g),y--;for(;p--;){if(v===g||g!==null&&v===g.alternate)break t;v=xr(v),g=xr(g)}v=null}else v=null;m!==null&&pf(d,h,m,v,!1),_!==null&&E!==null&&pf(d,E,_,v,!0)}}e:{if(h=c?Rr(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var C=k1;else if(of(h))if(_g)C=N1;else{C=I1;var I=S1}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=T1);if(C&&(C=C(t,c))){yg(d,C,n,f);break e}I&&I(t,h,c),t==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&Tc(h,"number",h.value)}switch(I=c?Rr(c):window,t){case"focusin":(of(I)||I.contentEditable==="true")&&(Nr=I,Uc=c,Gi=null);break;case"focusout":Gi=Uc=Nr=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,df(d,n,f);break;case"selectionchange":if(P1)break;case"keydown":case"keyup":df(d,n,f)}var T;if(td)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Tr?mg(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(pg&&n.locale!=="ko"&&(Tr||b!=="onCompositionStart"?b==="onCompositionEnd"&&Tr&&(T=fg()):(yn=f,Xu="value"in yn?yn.value:yn.textContent,Tr=!0)),I=Qo(c,b),0<I.length&&(b=new tf(b,t,null,n,f),d.push({event:b,listeners:I}),T?b.data=T:(T=gg(n),T!==null&&(b.data=T)))),(T=v1?w1(t,n):x1(t,n))&&(c=Qo(c,"onBeforeInput"),0<c.length&&(f=new tf("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=T))}Ng(d,e)})}function ps(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Qo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=as(t,n),s!=null&&r.unshift(ps(t,s,i)),s=as(t,e),s!=null&&r.push(ps(t,s,i))),t=t.return}return r}function xr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=as(n,s),l!=null&&o.unshift(ps(n,l,a))):i||(l=as(n,s),l!=null&&o.push(ps(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var L1=/\r\n?/g,O1=/\u0000|\uFFFD/g;function mf(t){return(typeof t=="string"?t:""+t).replace(L1,`
`).replace(O1,"")}function fo(t,e,n){if(e=mf(e),mf(t)!==e&&n)throw Error(k(425))}function Jo(){}var $c=null,zc=null;function Vc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bc=typeof setTimeout=="function"?setTimeout:void 0,j1=typeof clearTimeout=="function"?clearTimeout:void 0,gf=typeof Promise=="function"?Promise:void 0,F1=typeof queueMicrotask=="function"?queueMicrotask:typeof gf<"u"?function(t){return gf.resolve(null).then(t).catch(U1)}:Bc;function U1(t){setTimeout(function(){throw t})}function Vl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),us(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);us(e)}function En(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var di=Math.random().toString(36).slice(2),Tt="__reactFiber$"+di,ms="__reactProps$"+di,Yt="__reactContainer$"+di,Hc="__reactEvents$"+di,W1="__reactListeners$"+di,$1="__reactHandles$"+di;function Yn(t){var e=t[Tt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Yt]||n[Tt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yf(t);t!==null;){if(n=t[Tt])return n;t=yf(t)}return e}t=n,n=t.parentNode}return null}function Fs(t){return t=t[Tt]||t[Yt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Rr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Ga(t){return t[ms]||null}var Gc=[],Pr=-1;function Wn(t){return{current:t}}function Z(t){0>Pr||(t.current=Gc[Pr],Gc[Pr]=null,Pr--)}function Q(t,e){Pr++,Gc[Pr]=t.current,t.current=e}var Dn={},be=Wn(Dn),We=Wn(!1),rr=Dn;function Jr(t,e){var n=t.type.contextTypes;if(!n)return Dn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function $e(t){return t=t.childContextTypes,t!=null}function Xo(){Z(We),Z(be)}function _f(t,e,n){if(be.current!==Dn)throw Error(k(168));Q(be,e),Q(We,n)}function Rg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,Sw(t)||"Unknown",i));return ie({},n,r)}function Zo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dn,rr=be.current,Q(be,t),Q(We,We.current),!0}function vf(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=Rg(t,e,rr),r.__reactInternalMemoizedMergedChildContext=t,Z(We),Z(be),Q(be,t)):Z(We),Q(We,n)}var Ft=null,Ka=!1,Bl=!1;function Pg(t){Ft===null?Ft=[t]:Ft.push(t)}function z1(t){Ka=!0,Pg(t)}function $n(){if(!Bl&&Ft!==null){Bl=!0;var t=0,e=G;try{var n=Ft;for(G=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ft=null,Ka=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(t+1)),ng(qu,$n),i}finally{G=e,Bl=!1}}return null}var Ar=[],Mr=0,ea=null,ta=0,Ze=[],et=0,ir=null,Ut=1,Wt="";function Bn(t,e){Ar[Mr++]=ta,Ar[Mr++]=ea,ea=t,ta=e}function Ag(t,e,n){Ze[et++]=Ut,Ze[et++]=Wt,Ze[et++]=ir,ir=t;var r=Ut;t=Wt;var i=32-mt(r)-1;r&=~(1<<i),n+=1;var s=32-mt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ut=1<<32-mt(e)+i|n<<i|r,Wt=s+t}else Ut=1<<s|n<<i|r,Wt=t}function rd(t){t.return!==null&&(Bn(t,1),Ag(t,1,0))}function id(t){for(;t===ea;)ea=Ar[--Mr],Ar[Mr]=null,ta=Ar[--Mr],Ar[Mr]=null;for(;t===ir;)ir=Ze[--et],Ze[et]=null,Wt=Ze[--et],Ze[et]=null,Ut=Ze[--et],Ze[et]=null}var qe=null,Ke=null,ee=!1,ut=null;function Mg(t,e){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,qe=t,Ke=En(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,qe=t,Ke=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ir!==null?{id:Ut,overflow:Wt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,qe=t,Ke=null,!0):!1;default:return!1}}function Kc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qc(t){if(ee){var e=Ke;if(e){var n=e;if(!wf(t,e)){if(Kc(t))throw Error(k(418));e=En(n.nextSibling);var r=qe;e&&wf(t,e)?Mg(r,n):(t.flags=t.flags&-4097|2,ee=!1,qe=t)}}else{if(Kc(t))throw Error(k(418));t.flags=t.flags&-4097|2,ee=!1,qe=t}}}function xf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;qe=t}function po(t){if(t!==qe)return!1;if(!ee)return xf(t),ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vc(t.type,t.memoizedProps)),e&&(e=Ke)){if(Kc(t))throw Dg(),Error(k(418));for(;e;)Mg(t,e),e=En(e.nextSibling)}if(xf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ke=En(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ke=null}}else Ke=qe?En(t.stateNode.nextSibling):null;return!0}function Dg(){for(var t=Ke;t;)t=En(t.nextSibling)}function Xr(){Ke=qe=null,ee=!1}function sd(t){ut===null?ut=[t]:ut.push(t)}var V1=nn.ReactCurrentBatchConfig;function Ni(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function mo(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ef(t){var e=t._init;return e(t._payload)}function Lg(t){function e(g,p){if(t){var y=g.deletions;y===null?(g.deletions=[p],g.flags|=16):y.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=In(g,p),g.index=0,g.sibling=null,g}function s(g,p,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<p?(g.flags|=2,p):y):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,y,x){return p===null||p.tag!==6?(p=Jl(y,g.mode,x),p.return=g,p):(p=i(p,y),p.return=g,p)}function l(g,p,y,x){var C=y.type;return C===Ir?f(g,p,y.props.children,x,y.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===cn&&Ef(C)===p.type)?(x=i(p,y.props),x.ref=Ni(g,p,y),x.return=g,x):(x=Lo(y.type,y.key,y.props,null,g.mode,x),x.ref=Ni(g,p,y),x.return=g,x)}function c(g,p,y,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Xl(y,g.mode,x),p.return=g,p):(p=i(p,y.children||[]),p.return=g,p)}function f(g,p,y,x,C){return p===null||p.tag!==7?(p=nr(y,g.mode,x,C),p.return=g,p):(p=i(p,y),p.return=g,p)}function d(g,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Jl(""+p,g.mode,y),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ro:return y=Lo(p.type,p.key,p.props,null,g.mode,y),y.ref=Ni(g,null,p),y.return=g,y;case Sr:return p=Xl(p,g.mode,y),p.return=g,p;case cn:var x=p._init;return d(g,x(p._payload),y)}if(ji(p)||Ci(p))return p=nr(p,g.mode,y,null),p.return=g,p;mo(g,p)}return null}function h(g,p,y,x){var C=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:a(g,p,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ro:return y.key===C?l(g,p,y,x):null;case Sr:return y.key===C?c(g,p,y,x):null;case cn:return C=y._init,h(g,p,C(y._payload),x)}if(ji(y)||Ci(y))return C!==null?null:f(g,p,y,x,null);mo(g,y)}return null}function m(g,p,y,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return g=g.get(y)||null,a(p,g,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ro:return g=g.get(x.key===null?y:x.key)||null,l(p,g,x,C);case Sr:return g=g.get(x.key===null?y:x.key)||null,c(p,g,x,C);case cn:var I=x._init;return m(g,p,y,I(x._payload),C)}if(ji(x)||Ci(x))return g=g.get(y)||null,f(p,g,x,C,null);mo(p,x)}return null}function _(g,p,y,x){for(var C=null,I=null,T=p,b=p=0,O=null;T!==null&&b<y.length;b++){T.index>b?(O=T,T=null):O=T.sibling;var D=h(g,T,y[b],x);if(D===null){T===null&&(T=O);break}t&&T&&D.alternate===null&&e(g,T),p=s(D,p,b),I===null?C=D:I.sibling=D,I=D,T=O}if(b===y.length)return n(g,T),ee&&Bn(g,b),C;if(T===null){for(;b<y.length;b++)T=d(g,y[b],x),T!==null&&(p=s(T,p,b),I===null?C=T:I.sibling=T,I=T);return ee&&Bn(g,b),C}for(T=r(g,T);b<y.length;b++)O=m(T,g,b,y[b],x),O!==null&&(t&&O.alternate!==null&&T.delete(O.key===null?b:O.key),p=s(O,p,b),I===null?C=O:I.sibling=O,I=O);return t&&T.forEach(function(ke){return e(g,ke)}),ee&&Bn(g,b),C}function v(g,p,y,x){var C=Ci(y);if(typeof C!="function")throw Error(k(150));if(y=C.call(y),y==null)throw Error(k(151));for(var I=C=null,T=p,b=p=0,O=null,D=y.next();T!==null&&!D.done;b++,D=y.next()){T.index>b?(O=T,T=null):O=T.sibling;var ke=h(g,T,D.value,x);if(ke===null){T===null&&(T=O);break}t&&T&&ke.alternate===null&&e(g,T),p=s(ke,p,b),I===null?C=ke:I.sibling=ke,I=ke,T=O}if(D.done)return n(g,T),ee&&Bn(g,b),C;if(T===null){for(;!D.done;b++,D=y.next())D=d(g,D.value,x),D!==null&&(p=s(D,p,b),I===null?C=D:I.sibling=D,I=D);return ee&&Bn(g,b),C}for(T=r(g,T);!D.done;b++,D=y.next())D=m(T,g,b,D.value,x),D!==null&&(t&&D.alternate!==null&&T.delete(D.key===null?b:D.key),p=s(D,p,b),I===null?C=D:I.sibling=D,I=D);return t&&T.forEach(function(P){return e(g,P)}),ee&&Bn(g,b),C}function E(g,p,y,x){if(typeof y=="object"&&y!==null&&y.type===Ir&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ro:e:{for(var C=y.key,I=p;I!==null;){if(I.key===C){if(C=y.type,C===Ir){if(I.tag===7){n(g,I.sibling),p=i(I,y.props.children),p.return=g,g=p;break e}}else if(I.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===cn&&Ef(C)===I.type){n(g,I.sibling),p=i(I,y.props),p.ref=Ni(g,I,y),p.return=g,g=p;break e}n(g,I);break}else e(g,I);I=I.sibling}y.type===Ir?(p=nr(y.props.children,g.mode,x,y.key),p.return=g,g=p):(x=Lo(y.type,y.key,y.props,null,g.mode,x),x.ref=Ni(g,p,y),x.return=g,g=x)}return o(g);case Sr:e:{for(I=y.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(g,p.sibling),p=i(p,y.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=Xl(y,g.mode,x),p.return=g,g=p}return o(g);case cn:return I=y._init,E(g,p,I(y._payload),x)}if(ji(y))return _(g,p,y,x);if(Ci(y))return v(g,p,y,x);mo(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,y),p.return=g,g=p):(n(g,p),p=Jl(y,g.mode,x),p.return=g,g=p),o(g)):n(g,p)}return E}var Zr=Lg(!0),Og=Lg(!1),na=Wn(null),ra=null,Dr=null,od=null;function ad(){od=Dr=ra=null}function ld(t){var e=na.current;Z(na),t._currentValue=e}function Yc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Vr(t,e){ra=t,od=Dr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Fe=!0),t.firstContext=null)}function st(t){var e=t._currentValue;if(od!==t)if(t={context:t,memoizedValue:e,next:null},Dr===null){if(ra===null)throw Error(k(308));Dr=t,ra.dependencies={lanes:0,firstContext:t}}else Dr=Dr.next=t;return e}var Qn=null;function cd(t){Qn===null?Qn=[t]:Qn.push(t)}function jg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,cd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Qt(t,r)}function Qt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var un=!1;function ud(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Qt(t,n)}return i=r.interleaved,i===null?(e.next=e,cd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Qt(t,n)}function bo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yu(t,n)}}function Cf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ia(t,e,n,r){var i=t.updateQueue;un=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,v=a;switch(h=e,m=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){d=_.call(m,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(m,d,h):_,h==null)break e;d=ie({},d,h);break e;case 2:un=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=d):f=f.next=m,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(f===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);or|=o,t.lanes=o,t.memoizedState=d}}function kf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Us={},bt=Wn(Us),gs=Wn(Us),ys=Wn(Us);function Jn(t){if(t===Us)throw Error(k(174));return t}function dd(t,e){switch(Q(ys,e),Q(gs,t),Q(bt,Us),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bc(e,t)}Z(bt),Q(bt,e)}function ei(){Z(bt),Z(gs),Z(ys)}function Ug(t){Jn(ys.current);var e=Jn(bt.current),n=bc(e,t.type);e!==n&&(Q(gs,t),Q(bt,n))}function hd(t){gs.current===t&&(Z(bt),Z(gs))}var ne=Wn(0);function sa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hl=[];function fd(){for(var t=0;t<Hl.length;t++)Hl[t]._workInProgressVersionPrimary=null;Hl.length=0}var Ro=nn.ReactCurrentDispatcher,Gl=nn.ReactCurrentBatchConfig,sr=0,re=null,de=null,ye=null,oa=!1,Ki=!1,_s=0,B1=0;function Se(){throw Error(k(321))}function pd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_t(t[n],e[n]))return!1;return!0}function md(t,e,n,r,i,s){if(sr=s,re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ro.current=t===null||t.memoizedState===null?q1:Y1,t=n(r,i),Ki){s=0;do{if(Ki=!1,_s=0,25<=s)throw Error(k(301));s+=1,ye=de=null,e.updateQueue=null,Ro.current=Q1,t=n(r,i)}while(Ki)}if(Ro.current=aa,e=de!==null&&de.next!==null,sr=0,ye=de=re=null,oa=!1,e)throw Error(k(300));return t}function gd(){var t=_s!==0;return _s=0,t}function It(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?re.memoizedState=ye=t:ye=ye.next=t,ye}function ot(){if(de===null){var t=re.alternate;t=t!==null?t.memoizedState:null}else t=de.next;var e=ye===null?re.memoizedState:ye.next;if(e!==null)ye=e,de=t;else{if(t===null)throw Error(k(310));de=t,t={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},ye===null?re.memoizedState=ye=t:ye=ye.next=t}return ye}function vs(t,e){return typeof e=="function"?e(t):e}function Kl(t){var e=ot(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=de,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((sr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,re.lanes|=f,or|=f}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,_t(r,e.memoizedState)||(Fe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,re.lanes|=s,or|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ql(t){var e=ot(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);_t(s,e.memoizedState)||(Fe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Wg(){}function $g(t,e){var n=re,r=ot(),i=e(),s=!_t(r.memoizedState,i);if(s&&(r.memoizedState=i,Fe=!0),r=r.queue,yd(Bg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,ws(9,Vg.bind(null,n,r,i,e),void 0,null),we===null)throw Error(k(349));sr&30||zg(n,e,i)}return i}function zg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=re.updateQueue,e===null?(e={lastEffect:null,stores:null},re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Vg(t,e,n,r){e.value=n,e.getSnapshot=r,Hg(e)&&Gg(t)}function Bg(t,e,n){return n(function(){Hg(e)&&Gg(t)})}function Hg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_t(t,n)}catch{return!0}}function Gg(t){var e=Qt(t,1);e!==null&&gt(e,t,1,-1)}function Sf(t){var e=It();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:t},e.queue=t,t=t.dispatch=K1.bind(null,re,t),[e.memoizedState,t]}function ws(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=re.updateQueue,e===null?(e={lastEffect:null,stores:null},re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Kg(){return ot().memoizedState}function Po(t,e,n,r){var i=It();re.flags|=t,i.memoizedState=ws(1|e,n,void 0,r===void 0?null:r)}function qa(t,e,n,r){var i=ot();r=r===void 0?null:r;var s=void 0;if(de!==null){var o=de.memoizedState;if(s=o.destroy,r!==null&&pd(r,o.deps)){i.memoizedState=ws(e,n,s,r);return}}re.flags|=t,i.memoizedState=ws(1|e,n,s,r)}function If(t,e){return Po(8390656,8,t,e)}function yd(t,e){return qa(2048,8,t,e)}function qg(t,e){return qa(4,2,t,e)}function Yg(t,e){return qa(4,4,t,e)}function Qg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Jg(t,e,n){return n=n!=null?n.concat([t]):null,qa(4,4,Qg.bind(null,e,t),n)}function _d(){}function Xg(t,e){var n=ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Zg(t,e){var n=ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ey(t,e,n){return sr&21?(_t(n,e)||(n=sg(),re.lanes|=n,or|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Fe=!0),t.memoizedState=n)}function H1(t,e){var n=G;G=n!==0&&4>n?n:4,t(!0);var r=Gl.transition;Gl.transition={};try{t(!1),e()}finally{G=n,Gl.transition=r}}function ty(){return ot().memoizedState}function G1(t,e,n){var r=Sn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ny(t))ry(e,n);else if(n=jg(t,e,n,r),n!==null){var i=Me();gt(n,t,r,i),iy(n,e,r)}}function K1(t,e,n){var r=Sn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ny(t))ry(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,_t(a,o)){var l=e.interleaved;l===null?(i.next=i,cd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=jg(t,e,i,r),n!==null&&(i=Me(),gt(n,t,r,i),iy(n,e,r))}}function ny(t){var e=t.alternate;return t===re||e!==null&&e===re}function ry(t,e){Ki=oa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function iy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yu(t,n)}}var aa={readContext:st,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},q1={readContext:st,useCallback:function(t,e){return It().memoizedState=[t,e===void 0?null:e],t},useContext:st,useEffect:If,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Po(4194308,4,Qg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Po(4194308,4,t,e)},useInsertionEffect:function(t,e){return Po(4,2,t,e)},useMemo:function(t,e){var n=It();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=It();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=G1.bind(null,re,t),[r.memoizedState,t]},useRef:function(t){var e=It();return t={current:t},e.memoizedState=t},useState:Sf,useDebugValue:_d,useDeferredValue:function(t){return It().memoizedState=t},useTransition:function(){var t=Sf(!1),e=t[0];return t=H1.bind(null,t[1]),It().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=re,i=It();if(ee){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),we===null)throw Error(k(349));sr&30||zg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,If(Bg.bind(null,r,s,t),[t]),r.flags|=2048,ws(9,Vg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=It(),e=we.identifierPrefix;if(ee){var n=Wt,r=Ut;n=(r&~(1<<32-mt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_s++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=B1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Y1={readContext:st,useCallback:Xg,useContext:st,useEffect:yd,useImperativeHandle:Jg,useInsertionEffect:qg,useLayoutEffect:Yg,useMemo:Zg,useReducer:Kl,useRef:Kg,useState:function(){return Kl(vs)},useDebugValue:_d,useDeferredValue:function(t){var e=ot();return ey(e,de.memoizedState,t)},useTransition:function(){var t=Kl(vs)[0],e=ot().memoizedState;return[t,e]},useMutableSource:Wg,useSyncExternalStore:$g,useId:ty,unstable_isNewReconciler:!1},Q1={readContext:st,useCallback:Xg,useContext:st,useEffect:yd,useImperativeHandle:Jg,useInsertionEffect:qg,useLayoutEffect:Yg,useMemo:Zg,useReducer:ql,useRef:Kg,useState:function(){return ql(vs)},useDebugValue:_d,useDeferredValue:function(t){var e=ot();return de===null?e.memoizedState=t:ey(e,de.memoizedState,t)},useTransition:function(){var t=ql(vs)[0],e=ot().memoizedState;return[t,e]},useMutableSource:Wg,useSyncExternalStore:$g,useId:ty,unstable_isNewReconciler:!1};function lt(t,e){if(t&&t.defaultProps){e=ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Qc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ya={isMounted:function(t){return(t=t._reactInternals)?gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Me(),i=Sn(t),s=Bt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Cn(t,s,i),e!==null&&(gt(e,t,i,r),bo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Me(),i=Sn(t),s=Bt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Cn(t,s,i),e!==null&&(gt(e,t,i,r),bo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Me(),r=Sn(t),i=Bt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Cn(t,i,r),e!==null&&(gt(e,t,r,n),bo(e,t,r))}};function Tf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!hs(n,r)||!hs(i,s):!0}function sy(t,e,n){var r=!1,i=Dn,s=e.contextType;return typeof s=="object"&&s!==null?s=st(s):(i=$e(e)?rr:be.current,r=e.contextTypes,s=(r=r!=null)?Jr(t,i):Dn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ya,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Nf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ya.enqueueReplaceState(e,e.state,null)}function Jc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ud(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=st(s):(s=$e(e)?rr:be.current,i.context=Jr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ya.enqueueReplaceState(i,i.state,null),ia(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ti(t,e){try{var n="",r=e;do n+=kw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Yl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var J1=typeof WeakMap=="function"?WeakMap:Map;function oy(t,e,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ca||(ca=!0,lu=r),Xc(t,e)},n}function ay(t,e,n){n=Bt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Xc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xc(t,e),typeof r!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function bf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new J1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=dx.bind(null,t,e,n),e.then(t,t))}function Rf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Pf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bt(-1,1),e.tag=2,Cn(n,e,1))),n.lanes|=1),t)}var X1=nn.ReactCurrentOwner,Fe=!1;function Re(t,e,n,r){e.child=t===null?Og(e,null,n,r):Zr(e,t.child,n,r)}function Af(t,e,n,r,i){n=n.render;var s=e.ref;return Vr(e,i),r=md(t,e,n,r,s,i),n=gd(),t!==null&&!Fe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jt(t,e,i)):(ee&&n&&rd(e),e.flags|=1,Re(t,e,r,i),e.child)}function Mf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Id(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ly(t,e,s,r,i)):(t=Lo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:hs,n(o,r)&&t.ref===e.ref)return Jt(t,e,i)}return e.flags|=1,t=In(s,r),t.ref=e.ref,t.return=e,e.child=t}function ly(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(hs(s,r)&&t.ref===e.ref)if(Fe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Fe=!0);else return e.lanes=t.lanes,Jt(t,e,i)}return Zc(t,e,n,r,i)}function cy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(Or,Ge),Ge|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Q(Or,Ge),Ge|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(Or,Ge),Ge|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Q(Or,Ge),Ge|=r;return Re(t,e,i,n),e.child}function uy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zc(t,e,n,r,i){var s=$e(n)?rr:be.current;return s=Jr(e,s),Vr(e,i),n=md(t,e,n,r,s,i),r=gd(),t!==null&&!Fe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jt(t,e,i)):(ee&&r&&rd(e),e.flags|=1,Re(t,e,n,i),e.child)}function Df(t,e,n,r,i){if($e(n)){var s=!0;Zo(e)}else s=!1;if(Vr(e,i),e.stateNode===null)Ao(t,e),sy(e,n,r),Jc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=st(c):(c=$e(n)?rr:be.current,c=Jr(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Nf(e,o,r,c),un=!1;var h=e.memoizedState;o.state=h,ia(e,r,o,i),l=e.memoizedState,a!==r||h!==l||We.current||un?(typeof f=="function"&&(Qc(e,n,f,r),l=e.memoizedState),(a=un||Tf(e,n,a,r,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Fg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:lt(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=st(l):(l=$e(n)?rr:be.current,l=Jr(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Nf(e,o,r,l),un=!1,h=e.memoizedState,o.state=h,ia(e,r,o,i);var _=e.memoizedState;a!==d||h!==_||We.current||un?(typeof m=="function"&&(Qc(e,n,m,r),_=e.memoizedState),(c=un||Tf(e,n,c,r,h,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return eu(t,e,n,r,s,i)}function eu(t,e,n,r,i,s){uy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&vf(e,n,!1),Jt(t,e,s);r=e.stateNode,X1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Zr(e,t.child,null,s),e.child=Zr(e,null,a,s)):Re(t,e,a,s),e.memoizedState=r.state,i&&vf(e,n,!0),e.child}function dy(t){var e=t.stateNode;e.pendingContext?_f(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_f(t,e.context,!1),dd(t,e.containerInfo)}function Lf(t,e,n,r,i){return Xr(),sd(i),e.flags|=256,Re(t,e,n,r),e.child}var tu={dehydrated:null,treeContext:null,retryLane:0};function nu(t){return{baseLanes:t,cachePool:null,transitions:null}}function hy(t,e,n){var r=e.pendingProps,i=ne.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Q(ne,i&1),t===null)return qc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xa(o,r,0,null),t=nr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=nu(n),e.memoizedState=tu,t):vd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Z1(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=In(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=In(a,s):(s=nr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?nu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=tu,r}return s=t.child,t=s.sibling,r=In(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function vd(t,e){return e=Xa({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function go(t,e,n,r){return r!==null&&sd(r),Zr(e,t.child,null,n),t=vd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Z1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Yl(Error(k(422))),go(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Xa({mode:"visible",children:r.children},i,0,null),s=nr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Zr(e,t.child,null,o),e.child.memoizedState=nu(o),e.memoizedState=tu,s);if(!(e.mode&1))return go(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=Yl(s,r,void 0),go(t,e,o,r)}if(a=(o&t.childLanes)!==0,Fe||a){if(r=we,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Qt(t,i),gt(r,t,i,-1))}return Sd(),r=Yl(Error(k(421))),go(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=hx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ke=En(i.nextSibling),qe=e,ee=!0,ut=null,t!==null&&(Ze[et++]=Ut,Ze[et++]=Wt,Ze[et++]=ir,Ut=t.id,Wt=t.overflow,ir=e),e=vd(e,r.children),e.flags|=4096,e)}function Of(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Yc(t.return,e,n)}function Ql(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function fy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Re(t,e,r.children,n),r=ne.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Of(t,n,e);else if(t.tag===19)Of(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Q(ne,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&sa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ql(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&sa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ql(e,!0,n,null,s);break;case"together":Ql(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ao(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Jt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),or|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=In(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=In(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ex(t,e,n){switch(e.tag){case 3:dy(e),Xr();break;case 5:Ug(e);break;case 1:$e(e.type)&&Zo(e);break;case 4:dd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Q(na,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Q(ne,ne.current&1),e.flags|=128,null):n&e.child.childLanes?hy(t,e,n):(Q(ne,ne.current&1),t=Jt(t,e,n),t!==null?t.sibling:null);Q(ne,ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return fy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(ne,ne.current),r)break;return null;case 22:case 23:return e.lanes=0,cy(t,e,n)}return Jt(t,e,n)}var py,ru,my,gy;py=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ru=function(){};my=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Jn(bt.current);var s=null;switch(n){case"input":i=Sc(t,i),r=Sc(t,r),s=[];break;case"select":i=ie({},i,{value:void 0}),r=ie({},r,{value:void 0}),s=[];break;case"textarea":i=Nc(t,i),r=Nc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Jo)}Rc(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ss.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ss.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&J("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};gy=function(t,e,n,r){n!==r&&(e.flags|=4)};function bi(t,e){if(!ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ie(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function tx(t,e,n){var r=e.pendingProps;switch(id(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(e),null;case 1:return $e(e.type)&&Xo(),Ie(e),null;case 3:return r=e.stateNode,ei(),Z(We),Z(be),fd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(po(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ut!==null&&(du(ut),ut=null))),ru(t,e),Ie(e),null;case 5:hd(e);var i=Jn(ys.current);if(n=e.type,t!==null&&e.stateNode!=null)my(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Ie(e),null}if(t=Jn(bt.current),po(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Tt]=e,r[ms]=s,t=(e.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<Ui.length;i++)J(Ui[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":Bh(r,s),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},J("invalid",r);break;case"textarea":Gh(r,s),J("invalid",r)}Rc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&fo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&fo(r.textContent,a,t),i=["children",""+a]):ss.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&J("scroll",r)}switch(n){case"input":io(r),Hh(r,s,!0);break;case"textarea":io(r),Kh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Jo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Bm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Tt]=e,t[ms]=r,py(t,e,!1,!1),e.stateNode=t;e:{switch(o=Pc(n,r),n){case"dialog":J("cancel",t),J("close",t),i=r;break;case"iframe":case"object":case"embed":J("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ui.length;i++)J(Ui[i],t);i=r;break;case"source":J("error",t),i=r;break;case"img":case"image":case"link":J("error",t),J("load",t),i=r;break;case"details":J("toggle",t),i=r;break;case"input":Bh(t,r),i=Sc(t,r),J("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ie({},r,{value:void 0}),J("invalid",t);break;case"textarea":Gh(t,r),i=Nc(t,r),J("invalid",t);break;default:i=r}Rc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Km(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Hm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&os(t,l):typeof l=="number"&&os(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ss.hasOwnProperty(s)?l!=null&&s==="onScroll"&&J("scroll",t):l!=null&&Vu(t,s,l,o))}switch(n){case"input":io(t),Hh(t,r,!1);break;case"textarea":io(t),Kh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Mn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ur(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ur(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Jo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ie(e),null;case 6:if(t&&e.stateNode!=null)gy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=Jn(ys.current),Jn(bt.current),po(e)){if(r=e.stateNode,n=e.memoizedProps,r[Tt]=e,(s=r.nodeValue!==n)&&(t=qe,t!==null))switch(t.tag){case 3:fo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=e,e.stateNode=r}return Ie(e),null;case 13:if(Z(ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ee&&Ke!==null&&e.mode&1&&!(e.flags&128))Dg(),Xr(),e.flags|=98560,s=!1;else if(s=po(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[Tt]=e}else Xr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ie(e),s=!1}else ut!==null&&(du(ut),ut=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ne.current&1?pe===0&&(pe=3):Sd())),e.updateQueue!==null&&(e.flags|=4),Ie(e),null);case 4:return ei(),ru(t,e),t===null&&fs(e.stateNode.containerInfo),Ie(e),null;case 10:return ld(e.type._context),Ie(e),null;case 17:return $e(e.type)&&Xo(),Ie(e),null;case 19:if(Z(ne),s=e.memoizedState,s===null)return Ie(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)bi(s,!1);else{if(pe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=sa(t),o!==null){for(e.flags|=128,bi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Q(ne,ne.current&1|2),e.child}t=t.sibling}s.tail!==null&&le()>ni&&(e.flags|=128,r=!0,bi(s,!1),e.lanes=4194304)}else{if(!r)if(t=sa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),bi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ee)return Ie(e),null}else 2*le()-s.renderingStartTime>ni&&n!==1073741824&&(e.flags|=128,r=!0,bi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=le(),e.sibling=null,n=ne.current,Q(ne,r?n&1|2:n&1),e):(Ie(e),null);case 22:case 23:return kd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ge&1073741824&&(Ie(e),e.subtreeFlags&6&&(e.flags|=8192)):Ie(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function nx(t,e){switch(id(e),e.tag){case 1:return $e(e.type)&&Xo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ei(),Z(We),Z(be),fd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hd(e),null;case 13:if(Z(ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));Xr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Z(ne),null;case 4:return ei(),null;case 10:return ld(e.type._context),null;case 22:case 23:return kd(),null;case 24:return null;default:return null}}var yo=!1,Te=!1,rx=typeof WeakSet=="function"?WeakSet:Set,N=null;function Lr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(t,e,r)}else n.current=null}function iu(t,e,n){try{n()}catch(r){se(t,e,r)}}var jf=!1;function ix(t,e){if($c=qo,t=xg(),nd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++c===i&&(a=o),h===s&&++f===r&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zc={focusedElem:t,selectionRange:n},qo=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,E=_.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?v:lt(e.type,v),E);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(x){se(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return _=jf,jf=!1,_}function qi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&iu(e,n,s)}i=i.next}while(i!==r)}}function Qa(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function su(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function yy(t){var e=t.alternate;e!==null&&(t.alternate=null,yy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Tt],delete e[ms],delete e[Hc],delete e[W1],delete e[$1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _y(t){return t.tag===5||t.tag===3||t.tag===4}function Ff(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_y(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ou(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Jo));else if(r!==4&&(t=t.child,t!==null))for(ou(t,e,n),t=t.sibling;t!==null;)ou(t,e,n),t=t.sibling}function au(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(au(t,e,n),t=t.sibling;t!==null;)au(t,e,n),t=t.sibling}var xe=null,ct=!1;function an(t,e,n){for(n=n.child;n!==null;)vy(t,e,n),n=n.sibling}function vy(t,e,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(za,n)}catch{}switch(n.tag){case 5:Te||Lr(n,e);case 6:var r=xe,i=ct;xe=null,an(t,e,n),xe=r,ct=i,xe!==null&&(ct?(t=xe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(ct?(t=xe,n=n.stateNode,t.nodeType===8?Vl(t.parentNode,n):t.nodeType===1&&Vl(t,n),us(t)):Vl(xe,n.stateNode));break;case 4:r=xe,i=ct,xe=n.stateNode.containerInfo,ct=!0,an(t,e,n),xe=r,ct=i;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&iu(n,e,o),i=i.next}while(i!==r)}an(t,e,n);break;case 1:if(!Te&&(Lr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){se(n,e,a)}an(t,e,n);break;case 21:an(t,e,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,an(t,e,n),Te=r):an(t,e,n);break;default:an(t,e,n)}}function Uf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rx),e.forEach(function(r){var i=fx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function at(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:xe=a.stateNode,ct=!1;break e;case 3:xe=a.stateNode.containerInfo,ct=!0;break e;case 4:xe=a.stateNode.containerInfo,ct=!0;break e}a=a.return}if(xe===null)throw Error(k(160));vy(s,o,i),xe=null,ct=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){se(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)wy(e,t),e=e.sibling}function wy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(at(e,t),kt(t),r&4){try{qi(3,t,t.return),Qa(3,t)}catch(v){se(t,t.return,v)}try{qi(5,t,t.return)}catch(v){se(t,t.return,v)}}break;case 1:at(e,t),kt(t),r&512&&n!==null&&Lr(n,n.return);break;case 5:if(at(e,t),kt(t),r&512&&n!==null&&Lr(n,n.return),t.flags&32){var i=t.stateNode;try{os(i,"")}catch(v){se(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&zm(i,s),Pc(a,o);var c=Pc(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?Km(i,d):f==="dangerouslySetInnerHTML"?Hm(i,d):f==="children"?os(i,d):Vu(i,f,d,c)}switch(a){case"input":Ic(i,s);break;case"textarea":Vm(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ur(i,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ur(i,!!s.multiple,s.defaultValue,!0):Ur(i,!!s.multiple,s.multiple?[]:"",!1))}i[ms]=s}catch(v){se(t,t.return,v)}}break;case 6:if(at(e,t),kt(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){se(t,t.return,v)}}break;case 3:if(at(e,t),kt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{us(e.containerInfo)}catch(v){se(t,t.return,v)}break;case 4:at(e,t),kt(t);break;case 13:at(e,t),kt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ed=le())),r&4&&Uf(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Te=(c=Te)||f,at(e,t),Te=c):at(e,t),kt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(N=t,f=t.child;f!==null;){for(d=N=f;N!==null;){switch(h=N,m=h.child,h.tag){case 0:case 11:case 14:case 15:qi(4,h,h.return);break;case 1:Lr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){se(r,n,v)}}break;case 5:Lr(h,h.return);break;case 22:if(h.memoizedState!==null){$f(d);continue}}m!==null?(m.return=h,N=m):$f(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Gm("display",o))}catch(v){se(t,t.return,v)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){se(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:at(e,t),kt(t),r&4&&Uf(t);break;case 21:break;default:at(e,t),kt(t)}}function kt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_y(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(os(i,""),r.flags&=-33);var s=Ff(t);au(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ff(t);ou(t,a,o);break;default:throw Error(k(161))}}catch(l){se(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sx(t,e,n){N=t,xy(t)}function xy(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||yo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Te;a=yo;var c=Te;if(yo=o,(Te=l)&&!c)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?zf(i):l!==null?(l.return=o,N=l):zf(i);for(;s!==null;)N=s,xy(s),s=s.sibling;N=i,yo=a,Te=c}Wf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):Wf(t)}}function Wf(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Te||Qa(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Te)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:lt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&kf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&us(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Te||e.flags&512&&su(e)}catch(h){se(e,e.return,h)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function $f(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function zf(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qa(4,e)}catch(l){se(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){se(e,i,l)}}var s=e.return;try{su(e)}catch(l){se(e,s,l)}break;case 5:var o=e.return;try{su(e)}catch(l){se(e,o,l)}}}catch(l){se(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var ox=Math.ceil,la=nn.ReactCurrentDispatcher,wd=nn.ReactCurrentOwner,rt=nn.ReactCurrentBatchConfig,z=0,we=null,ce=null,Ee=0,Ge=0,Or=Wn(0),pe=0,xs=null,or=0,Ja=0,xd=0,Yi=null,je=null,Ed=0,ni=1/0,jt=null,ca=!1,lu=null,kn=null,_o=!1,_n=null,ua=0,Qi=0,cu=null,Mo=-1,Do=0;function Me(){return z&6?le():Mo!==-1?Mo:Mo=le()}function Sn(t){return t.mode&1?z&2&&Ee!==0?Ee&-Ee:V1.transition!==null?(Do===0&&(Do=sg()),Do):(t=G,t!==0||(t=window.event,t=t===void 0?16:hg(t.type)),t):1}function gt(t,e,n,r){if(50<Qi)throw Qi=0,cu=null,Error(k(185));Os(t,n,r),(!(z&2)||t!==we)&&(t===we&&(!(z&2)&&(Ja|=n),pe===4&&hn(t,Ee)),ze(t,r),n===1&&z===0&&!(e.mode&1)&&(ni=le()+500,Ka&&$n()))}function ze(t,e){var n=t.callbackNode;Vw(t,e);var r=Ko(t,t===we?Ee:0);if(r===0)n!==null&&Qh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Qh(n),e===1)t.tag===0?z1(Vf.bind(null,t)):Pg(Vf.bind(null,t)),F1(function(){!(z&6)&&$n()}),n=null;else{switch(og(r)){case 1:n=qu;break;case 4:n=rg;break;case 16:n=Go;break;case 536870912:n=ig;break;default:n=Go}n=by(n,Ey.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ey(t,e){if(Mo=-1,Do=0,z&6)throw Error(k(327));var n=t.callbackNode;if(Br()&&t.callbackNode!==n)return null;var r=Ko(t,t===we?Ee:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=da(t,r);else{e=r;var i=z;z|=2;var s=ky();(we!==t||Ee!==e)&&(jt=null,ni=le()+500,tr(t,e));do try{cx();break}catch(a){Cy(t,a)}while(!0);ad(),la.current=s,z=i,ce!==null?e=0:(we=null,Ee=0,e=pe)}if(e!==0){if(e===2&&(i=Oc(t),i!==0&&(r=i,e=uu(t,i))),e===1)throw n=xs,tr(t,0),hn(t,r),ze(t,le()),n;if(e===6)hn(t,r);else{if(i=t.current.alternate,!(r&30)&&!ax(i)&&(e=da(t,r),e===2&&(s=Oc(t),s!==0&&(r=s,e=uu(t,s))),e===1))throw n=xs,tr(t,0),hn(t,r),ze(t,le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:Hn(t,je,jt);break;case 3:if(hn(t,r),(r&130023424)===r&&(e=Ed+500-le(),10<e)){if(Ko(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Me(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Bc(Hn.bind(null,t,je,jt),e);break}Hn(t,je,jt);break;case 4:if(hn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-mt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ox(r/1960))-r,10<r){t.timeoutHandle=Bc(Hn.bind(null,t,je,jt),r);break}Hn(t,je,jt);break;case 5:Hn(t,je,jt);break;default:throw Error(k(329))}}}return ze(t,le()),t.callbackNode===n?Ey.bind(null,t):null}function uu(t,e){var n=Yi;return t.current.memoizedState.isDehydrated&&(tr(t,e).flags|=256),t=da(t,e),t!==2&&(e=je,je=n,e!==null&&du(e)),t}function du(t){je===null?je=t:je.push.apply(je,t)}function ax(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!_t(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hn(t,e){for(e&=~xd,e&=~Ja,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mt(e),r=1<<n;t[n]=-1,e&=~r}}function Vf(t){if(z&6)throw Error(k(327));Br();var e=Ko(t,0);if(!(e&1))return ze(t,le()),null;var n=da(t,e);if(t.tag!==0&&n===2){var r=Oc(t);r!==0&&(e=r,n=uu(t,r))}if(n===1)throw n=xs,tr(t,0),hn(t,e),ze(t,le()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hn(t,je,jt),ze(t,le()),null}function Cd(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(ni=le()+500,Ka&&$n())}}function ar(t){_n!==null&&_n.tag===0&&!(z&6)&&Br();var e=z;z|=1;var n=rt.transition,r=G;try{if(rt.transition=null,G=1,t)return t()}finally{G=r,rt.transition=n,z=e,!(z&6)&&$n()}}function kd(){Ge=Or.current,Z(Or)}function tr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,j1(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(id(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xo();break;case 3:ei(),Z(We),Z(be),fd();break;case 5:hd(r);break;case 4:ei();break;case 13:Z(ne);break;case 19:Z(ne);break;case 10:ld(r.type._context);break;case 22:case 23:kd()}n=n.return}if(we=t,ce=t=In(t.current,null),Ee=Ge=e,pe=0,xs=null,xd=Ja=or=0,je=Yi=null,Qn!==null){for(e=0;e<Qn.length;e++)if(n=Qn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Qn=null}return t}function Cy(t,e){do{var n=ce;try{if(ad(),Ro.current=aa,oa){for(var r=re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}oa=!1}if(sr=0,ye=de=re=null,Ki=!1,_s=0,wd.current=null,n===null||n.return===null){pe=1,xs=e,ce=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ee,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Rf(o);if(m!==null){m.flags&=-257,Pf(m,o,a,s,e),m.mode&1&&bf(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){bf(s,c,e),Sd();break e}l=Error(k(426))}}else if(ee&&a.mode&1){var E=Rf(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Pf(E,o,a,s,e),sd(ti(l,a));break e}}s=l=ti(l,a),pe!==4&&(pe=2),Yi===null?Yi=[s]:Yi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=oy(s,l,e);Cf(s,g);break e;case 1:a=l;var p=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(kn===null||!kn.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=ay(s,a,e);Cf(s,x);break e}}s=s.return}while(s!==null)}Iy(n)}catch(C){e=C,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(!0)}function ky(){var t=la.current;return la.current=aa,t===null?aa:t}function Sd(){(pe===0||pe===3||pe===2)&&(pe=4),we===null||!(or&268435455)&&!(Ja&268435455)||hn(we,Ee)}function da(t,e){var n=z;z|=2;var r=ky();(we!==t||Ee!==e)&&(jt=null,tr(t,e));do try{lx();break}catch(i){Cy(t,i)}while(!0);if(ad(),z=n,la.current=r,ce!==null)throw Error(k(261));return we=null,Ee=0,pe}function lx(){for(;ce!==null;)Sy(ce)}function cx(){for(;ce!==null&&!Dw();)Sy(ce)}function Sy(t){var e=Ny(t.alternate,t,Ge);t.memoizedProps=t.pendingProps,e===null?Iy(t):ce=e,wd.current=null}function Iy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nx(n,e),n!==null){n.flags&=32767,ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pe=6,ce=null;return}}else if(n=tx(n,e,Ge),n!==null){ce=n;return}if(e=e.sibling,e!==null){ce=e;return}ce=e=t}while(e!==null);pe===0&&(pe=5)}function Hn(t,e,n){var r=G,i=rt.transition;try{rt.transition=null,G=1,ux(t,e,n,r)}finally{rt.transition=i,G=r}return null}function ux(t,e,n,r){do Br();while(_n!==null);if(z&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Bw(t,s),t===we&&(ce=we=null,Ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_o||(_o=!0,by(Go,function(){return Br(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=rt.transition,rt.transition=null;var o=G;G=1;var a=z;z|=4,wd.current=null,ix(t,n),wy(n,t),R1(zc),qo=!!$c,zc=$c=null,t.current=n,sx(n),Lw(),z=a,G=o,rt.transition=s}else t.current=n;if(_o&&(_o=!1,_n=t,ua=i),s=t.pendingLanes,s===0&&(kn=null),Fw(n.stateNode),ze(t,le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ca)throw ca=!1,t=lu,lu=null,t;return ua&1&&t.tag!==0&&Br(),s=t.pendingLanes,s&1?t===cu?Qi++:(Qi=0,cu=t):Qi=0,$n(),null}function Br(){if(_n!==null){var t=og(ua),e=rt.transition,n=G;try{if(rt.transition=null,G=16>t?16:t,_n===null)var r=!1;else{if(t=_n,_n=null,ua=0,z&6)throw Error(k(331));var i=z;for(z|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(N=c;N!==null;){var f=N;switch(f.tag){case 0:case 11:case 15:qi(8,f,s)}var d=f.child;if(d!==null)d.return=f,N=d;else for(;N!==null;){f=N;var h=f.sibling,m=f.return;if(yy(f),f===c){N=null;break}if(h!==null){h.return=m,N=h;break}N=m}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qi(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,N=g;break e}N=s.return}}var p=t.current;for(N=p;N!==null;){o=N;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,N=y;else e:for(o=p;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Qa(9,a)}}catch(C){se(a,a.return,C)}if(a===o){N=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,N=x;break e}N=a.return}}if(z=i,$n(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(za,t)}catch{}r=!0}return r}finally{G=n,rt.transition=e}}return!1}function Bf(t,e,n){e=ti(n,e),e=oy(t,e,1),t=Cn(t,e,1),e=Me(),t!==null&&(Os(t,1,e),ze(t,e))}function se(t,e,n){if(t.tag===3)Bf(t,t,n);else for(;e!==null;){if(e.tag===3){Bf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kn===null||!kn.has(r))){t=ti(n,t),t=ay(e,t,1),e=Cn(e,t,1),t=Me(),e!==null&&(Os(e,1,t),ze(e,t));break}}e=e.return}}function dx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Me(),t.pingedLanes|=t.suspendedLanes&n,we===t&&(Ee&n)===n&&(pe===4||pe===3&&(Ee&130023424)===Ee&&500>le()-Ed?tr(t,0):xd|=n),ze(t,e)}function Ty(t,e){e===0&&(t.mode&1?(e=ao,ao<<=1,!(ao&130023424)&&(ao=4194304)):e=1);var n=Me();t=Qt(t,e),t!==null&&(Os(t,e,n),ze(t,n))}function hx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ty(t,n)}function fx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),Ty(t,n)}var Ny;Ny=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||We.current)Fe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Fe=!1,ex(t,e,n);Fe=!!(t.flags&131072)}else Fe=!1,ee&&e.flags&1048576&&Ag(e,ta,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ao(t,e),t=e.pendingProps;var i=Jr(e,be.current);Vr(e,n),i=md(null,e,r,t,i,n);var s=gd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$e(r)?(s=!0,Zo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ud(e),i.updater=Ya,e.stateNode=i,i._reactInternals=e,Jc(e,r,t,n),e=eu(null,e,r,!0,s,n)):(e.tag=0,ee&&s&&rd(e),Re(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ao(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=mx(r),t=lt(r,t),i){case 0:e=Zc(null,e,r,t,n);break e;case 1:e=Df(null,e,r,t,n);break e;case 11:e=Af(null,e,r,t,n);break e;case 14:e=Mf(null,e,r,lt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:lt(r,i),Zc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:lt(r,i),Df(t,e,r,i,n);case 3:e:{if(dy(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Fg(t,e),ia(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ti(Error(k(423)),e),e=Lf(t,e,r,n,i);break e}else if(r!==i){i=ti(Error(k(424)),e),e=Lf(t,e,r,n,i);break e}else for(Ke=En(e.stateNode.containerInfo.firstChild),qe=e,ee=!0,ut=null,n=Og(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xr(),r===i){e=Jt(t,e,n);break e}Re(t,e,r,n)}e=e.child}return e;case 5:return Ug(e),t===null&&qc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Vc(r,i)?o=null:s!==null&&Vc(r,s)&&(e.flags|=32),uy(t,e),Re(t,e,o,n),e.child;case 6:return t===null&&qc(e),null;case 13:return hy(t,e,n);case 4:return dd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Zr(e,null,r,n):Re(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:lt(r,i),Af(t,e,r,i,n);case 7:return Re(t,e,e.pendingProps,n),e.child;case 8:return Re(t,e,e.pendingProps.children,n),e.child;case 12:return Re(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Q(na,r._currentValue),r._currentValue=o,s!==null)if(_t(s.value,o)){if(s.children===i.children&&!We.current){e=Jt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Bt(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Yc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Yc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Re(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Vr(e,n),i=st(i),r=r(i),e.flags|=1,Re(t,e,r,n),e.child;case 14:return r=e.type,i=lt(r,e.pendingProps),i=lt(r.type,i),Mf(t,e,r,i,n);case 15:return ly(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:lt(r,i),Ao(t,e),e.tag=1,$e(r)?(t=!0,Zo(e)):t=!1,Vr(e,n),sy(e,r,i),Jc(e,r,i,n),eu(null,e,r,!0,t,n);case 19:return fy(t,e,n);case 22:return cy(t,e,n)}throw Error(k(156,e.tag))};function by(t,e){return ng(t,e)}function px(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(t,e,n,r){return new px(t,e,n,r)}function Id(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mx(t){if(typeof t=="function")return Id(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hu)return 11;if(t===Gu)return 14}return 2}function In(t,e){var n=t.alternate;return n===null?(n=nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Lo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Id(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ir:return nr(n.children,i,s,e);case Bu:o=8,i|=8;break;case xc:return t=nt(12,n,e,i|2),t.elementType=xc,t.lanes=s,t;case Ec:return t=nt(13,n,e,i),t.elementType=Ec,t.lanes=s,t;case Cc:return t=nt(19,n,e,i),t.elementType=Cc,t.lanes=s,t;case Um:return Xa(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case jm:o=10;break e;case Fm:o=9;break e;case Hu:o=11;break e;case Gu:o=14;break e;case cn:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=nt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function nr(t,e,n,r){return t=nt(7,t,r,e),t.lanes=n,t}function Xa(t,e,n,r){return t=nt(22,t,r,e),t.elementType=Um,t.lanes=n,t.stateNode={isHidden:!1},t}function Jl(t,e,n){return t=nt(6,t,null,e),t.lanes=n,t}function Xl(t,e,n){return e=nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Al(0),this.expirationTimes=Al(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Al(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Td(t,e,n,r,i,s,o,a,l){return t=new gx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ud(s),t}function yx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ry(t){if(!t)return Dn;t=t._reactInternals;e:{if(gr(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($e(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if($e(n))return Rg(t,n,e)}return e}function Py(t,e,n,r,i,s,o,a,l){return t=Td(n,r,!0,t,i,s,o,a,l),t.context=Ry(null),n=t.current,r=Me(),i=Sn(n),s=Bt(r,i),s.callback=e??null,Cn(n,s,i),t.current.lanes=i,Os(t,i,r),ze(t,r),t}function Za(t,e,n,r){var i=e.current,s=Me(),o=Sn(i);return n=Ry(n),e.context===null?e.context=n:e.pendingContext=n,e=Bt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Cn(i,e,o),t!==null&&(gt(t,i,o,s),bo(t,i,o)),o}function ha(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nd(t,e){Hf(t,e),(t=t.alternate)&&Hf(t,e)}function _x(){return null}var Ay=typeof reportError=="function"?reportError:function(t){console.error(t)};function bd(t){this._internalRoot=t}el.prototype.render=bd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));Za(t,e,null,null)};el.prototype.unmount=bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ar(function(){Za(null,t,null,null)}),e[Yt]=null}};function el(t){this._internalRoot=t}el.prototype.unstable_scheduleHydration=function(t){if(t){var e=cg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dn.length&&e!==0&&e<dn[n].priority;n++);dn.splice(n,0,t),n===0&&dg(t)}};function Rd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gf(){}function vx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ha(o);s.call(c)}}var o=Py(e,r,t,0,null,!1,!1,"",Gf);return t._reactRootContainer=o,t[Yt]=o.current,fs(t.nodeType===8?t.parentNode:t),ar(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ha(l);a.call(c)}}var l=Td(t,0,!1,null,null,!1,!1,"",Gf);return t._reactRootContainer=l,t[Yt]=l.current,fs(t.nodeType===8?t.parentNode:t),ar(function(){Za(e,l,n,r)}),l}function nl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ha(o);a.call(l)}}Za(e,o,t,i)}else o=vx(n,e,t,i,r);return ha(o)}ag=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fi(e.pendingLanes);n!==0&&(Yu(e,n|1),ze(e,le()),!(z&6)&&(ni=le()+500,$n()))}break;case 13:ar(function(){var r=Qt(t,1);if(r!==null){var i=Me();gt(r,t,1,i)}}),Nd(t,1)}};Qu=function(t){if(t.tag===13){var e=Qt(t,134217728);if(e!==null){var n=Me();gt(e,t,134217728,n)}Nd(t,134217728)}};lg=function(t){if(t.tag===13){var e=Sn(t),n=Qt(t,e);if(n!==null){var r=Me();gt(n,t,e,r)}Nd(t,e)}};cg=function(){return G};ug=function(t,e){var n=G;try{return G=t,e()}finally{G=n}};Mc=function(t,e,n){switch(e){case"input":if(Ic(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ga(r);if(!i)throw Error(k(90));$m(r),Ic(r,i)}}}break;case"textarea":Vm(t,n);break;case"select":e=n.value,e!=null&&Ur(t,!!n.multiple,e,!1)}};Qm=Cd;Jm=ar;var wx={usingClientEntryPoint:!1,Events:[Fs,Rr,Ga,qm,Ym,Cd]},Ri={findFiberByHostInstance:Yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xx={bundleType:Ri.bundleType,version:Ri.version,rendererPackageName:Ri.rendererPackageName,rendererConfig:Ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=eg(t),t===null?null:t.stateNode},findFiberByHostInstance:Ri.findFiberByHostInstance||_x,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vo.isDisabled&&vo.supportsFiber)try{za=vo.inject(xx),Nt=vo}catch{}}Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wx;Je.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rd(e))throw Error(k(200));return yx(t,e,null,n)};Je.createRoot=function(t,e){if(!Rd(t))throw Error(k(299));var n=!1,r="",i=Ay;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Td(t,1,!1,null,null,n,!1,r,i),t[Yt]=e.current,fs(t.nodeType===8?t.parentNode:t),new bd(e)};Je.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=eg(e),t=t===null?null:t.stateNode,t};Je.flushSync=function(t){return ar(t)};Je.hydrate=function(t,e,n){if(!tl(e))throw Error(k(200));return nl(null,t,e,!0,n)};Je.hydrateRoot=function(t,e,n){if(!Rd(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Ay;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Py(e,null,t,1,n??null,i,!1,s,o),t[Yt]=e.current,fs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new el(e)};Je.render=function(t,e,n){if(!tl(e))throw Error(k(200));return nl(null,t,e,!1,n)};Je.unmountComponentAtNode=function(t){if(!tl(t))throw Error(k(40));return t._reactRootContainer?(ar(function(){nl(null,null,t,!1,function(){t._reactRootContainer=null,t[Yt]=null})}),!0):!1};Je.unstable_batchedUpdates=Cd;Je.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!tl(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return nl(t,e,n,!1,r)};Je.version="18.3.1-next-f1338f8080-20240426";function My(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(My)}catch(t){console.error(t)}}My(),Mm.exports=Je;var Ex=Mm.exports,Dy,Kf=Ex;Dy=Kf.createRoot,Kf.hydrateRoot;/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var qf="popstate";function Cx(t={}){function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return hu("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Es(i)}return Sx(e,n,null,t)}function te(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function vt(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function kx(){return Math.random().toString(36).substring(2,10)}function Yf(t,e){return{usr:t.state,key:t.key,idx:e}}function hu(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?hi(e):e,state:n,key:e&&e.key||r||kx()}}function Es({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function hi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function Sx(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a="POP",l=null,c=f();c==null&&(c=0,o.replaceState({...o.state,idx:c},""));function f(){return(o.state||{idx:null}).idx}function d(){a="POP";let E=f(),g=E==null?null:E-c;c=E,l&&l({action:a,location:v.location,delta:g})}function h(E,g){a="PUSH";let p=hu(v.location,E,g);c=f()+1;let y=Yf(p,c),x=v.createHref(p);try{o.pushState(y,"",x)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(x)}s&&l&&l({action:a,location:v.location,delta:1})}function m(E,g){a="REPLACE";let p=hu(v.location,E,g);c=f();let y=Yf(p,c),x=v.createHref(p);o.replaceState(y,"",x),s&&l&&l({action:a,location:v.location,delta:0})}function _(E){return Ix(E)}let v={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(qf,d),l=E,()=>{i.removeEventListener(qf,d),l=null}},createHref(E){return e(i,E)},createURL:_,encodeLocation(E){let g=_(E);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:m,go(E){return o.go(E)}};return v}function Ix(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),te(n,"No window.location.(origin|href) available to create URL");let r=typeof t=="string"?t:Es(t);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function Ly(t,e,n="/"){return Tx(t,e,n,!1)}function Tx(t,e,n,r){let i=typeof e=="string"?hi(e):e,s=Xt(i.pathname||"/",n);if(s==null)return null;let o=Oy(t);Nx(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=Ux(s);a=jx(o[l],c,r)}return a}function Oy(t,e=[],n=[],r="",i=!1){let s=(o,a,l=i,c)=>{let f={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};if(f.relativePath.startsWith("/")){if(!f.relativePath.startsWith(r)&&l)return;te(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length)}let d=Ht([r,f.relativePath]),h=n.concat(f);o.children&&o.children.length>0&&(te(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),Oy(o.children,e,h,d,l)),!(o.path==null&&!o.index)&&e.push({path:d,score:Lx(d,o.index),routesMeta:h})};return t.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))s(o,a);else for(let c of jy(o.path))s(o,a,!0,c)}),e}function jy(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=jy(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Nx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Ox(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var bx=/^:[\w-]+$/,Rx=3,Px=2,Ax=1,Mx=10,Dx=-2,Qf=t=>t==="*";function Lx(t,e){let n=t.split("/"),r=n.length;return n.some(Qf)&&(r+=Dx),e&&(r+=Px),n.filter(i=>!Qf(i)).reduce((i,s)=>i+(bx.test(s)?Rx:s===""?Ax:Mx),r)}function Ox(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function jx(t,e,n=!1){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",d=fa({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),h=l.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=fa({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},f)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Ht([s,d.pathname]),pathnameBase:Vx(Ht([s,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(s=Ht([s,d.pathnameBase]))}return o}function fa(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Fx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,{paramName:f,isOptional:d},h)=>{if(f==="*"){let _=a[h]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const m=a[h];return d&&!m?c[f]=void 0:c[f]=(m||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Fx(t,e=!1,n=!0){vt(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Ux(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return vt(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Xt(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Wx(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?hi(t):t;return{pathname:n?n.startsWith("/")?n:$x(n,e):e,search:Bx(r),hash:Hx(i)}}function $x(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Zl(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function zx(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Pd(t){let e=zx(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function Ad(t,e,n,r=!1){let i;typeof t=="string"?i=hi(t):(i={...t},te(!i.pathname||!i.pathname.includes("?"),Zl("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),Zl("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),Zl("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=Wx(i,a),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}var Ht=t=>t.join("/").replace(/\/\/+/g,"/"),Vx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Bx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Hx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Gx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var Fy=["POST","PUT","PATCH","DELETE"];new Set(Fy);var Kx=["GET",...Fy];new Set(Kx);var fi=w.createContext(null);fi.displayName="DataRouter";var rl=w.createContext(null);rl.displayName="DataRouterState";w.createContext(!1);var Uy=w.createContext({isTransitioning:!1});Uy.displayName="ViewTransition";var qx=w.createContext(new Map);qx.displayName="Fetchers";var Yx=w.createContext(null);Yx.displayName="Await";var Et=w.createContext(null);Et.displayName="Navigation";var Ws=w.createContext(null);Ws.displayName="Location";var Dt=w.createContext({outlet:null,matches:[],isDataRoute:!1});Dt.displayName="Route";var Md=w.createContext(null);Md.displayName="RouteError";function Qx(t,{relative:e}={}){te(pi(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=w.useContext(Et),{hash:i,pathname:s,search:o}=zs(t,{relative:e}),a=s;return n!=="/"&&(a=s==="/"?n:Ht([n,s])),r.createHref({pathname:a,search:o,hash:i})}function pi(){return w.useContext(Ws)!=null}function rn(){return te(pi(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(Ws).location}var Wy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function $y(t){w.useContext(Et).static||w.useLayoutEffect(t)}function $s(){let{isDataRoute:t}=w.useContext(Dt);return t?cE():Jx()}function Jx(){te(pi(),"useNavigate() may be used only in the context of a <Router> component.");let t=w.useContext(fi),{basename:e,navigator:n}=w.useContext(Et),{matches:r}=w.useContext(Dt),{pathname:i}=rn(),s=JSON.stringify(Pd(r)),o=w.useRef(!1);return $y(()=>{o.current=!0}),w.useCallback((l,c={})=>{if(vt(o.current,Wy),!o.current)return;if(typeof l=="number"){n.go(l);return}let f=Ad(l,JSON.parse(s),i,c.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Ht([e,f.pathname])),(c.replace?n.replace:n.push)(f,c.state,c)},[e,n,s,i,t])}w.createContext(null);function zs(t,{relative:e}={}){let{matches:n}=w.useContext(Dt),{pathname:r}=rn(),i=JSON.stringify(Pd(n));return w.useMemo(()=>Ad(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function Xx(t,e){return zy(t,e)}function zy(t,e,n,r,i){var p;te(pi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=w.useContext(Et),{matches:o}=w.useContext(Dt),a=o[o.length-1],l=a?a.params:{},c=a?a.pathname:"/",f=a?a.pathnameBase:"/",d=a&&a.route;{let y=d&&d.path||"";Vy(c,!d||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let h=rn(),m;if(e){let y=typeof e=="string"?hi(e):e;te(f==="/"||((p=y.pathname)==null?void 0:p.startsWith(f)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${y.pathname}" was given in the \`location\` prop.`),m=y}else m=h;let _=m.pathname||"/",v=_;if(f!=="/"){let y=f.replace(/^\//,"").split("/");v="/"+_.replace(/^\//,"").split("/").slice(y.length).join("/")}let E=Ly(t,{pathname:v});vt(d||E!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),vt(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let g=rE(E&&E.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:Ht([f,s.encodeLocation?s.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?f:Ht([f,s.encodeLocation?s.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),o,n,r,i);return e&&g?w.createElement(Ws.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},g):g}function Zx(){let t=lE(),e=Gx(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:s},"ErrorBoundary")," or"," ",w.createElement("code",{style:s},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),n?w.createElement("pre",{style:i},n):null,o)}var eE=w.createElement(Zx,null),tE=class extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.unstable_onError?this.props.unstable_onError(t,e):console.error("React Router caught the following error during render",t)}render(){return this.state.error!==void 0?w.createElement(Dt.Provider,{value:this.props.routeContext},w.createElement(Md.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function nE({routeContext:t,match:e,children:n}){let r=w.useContext(fi);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),w.createElement(Dt.Provider,{value:t},n)}function rE(t,e=[],n=null,r=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,o=n==null?void 0:n.errors;if(o!=null){let c=s.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);te(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),s=s.slice(0,Math.min(s.length,c+1))}let a=!1,l=-1;if(n)for(let c=0;c<s.length;c++){let f=s[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(l=c),f.route.id){let{loaderData:d,errors:h}=n,m=f.route.loader&&!d.hasOwnProperty(f.route.id)&&(!h||h[f.route.id]===void 0);if(f.route.lazy||m){a=!0,l>=0?s=s.slice(0,l+1):s=[s[0]];break}}}return s.reduceRight((c,f,d)=>{let h,m=!1,_=null,v=null;n&&(h=o&&f.route.id?o[f.route.id]:void 0,_=f.route.errorElement||eE,a&&(l<0&&d===0?(Vy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,v=null):l===d&&(m=!0,v=f.route.hydrateFallbackElement||null)));let E=e.concat(s.slice(0,d+1)),g=()=>{let p;return h?p=_:m?p=v:f.route.Component?p=w.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=c,w.createElement(nE,{match:f,routeContext:{outlet:c,matches:E,isDataRoute:n!=null},children:p})};return n&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?w.createElement(tE,{location:n.location,revalidation:n.revalidation,component:_,error:h,children:g(),routeContext:{outlet:null,matches:E,isDataRoute:!0},unstable_onError:r}):g()},null)}function Dd(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function iE(t){let e=w.useContext(fi);return te(e,Dd(t)),e}function sE(t){let e=w.useContext(rl);return te(e,Dd(t)),e}function oE(t){let e=w.useContext(Dt);return te(e,Dd(t)),e}function Ld(t){let e=oE(t),n=e.matches[e.matches.length-1];return te(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function aE(){return Ld("useRouteId")}function lE(){var r;let t=w.useContext(Md),e=sE("useRouteError"),n=Ld("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function cE(){let{router:t}=iE("useNavigate"),e=Ld("useNavigate"),n=w.useRef(!1);return $y(()=>{n.current=!0}),w.useCallback(async(i,s={})=>{vt(n.current,Wy),n.current&&(typeof i=="number"?t.navigate(i):await t.navigate(i,{fromRouteId:e,...s}))},[t,e])}var Jf={};function Vy(t,e,n){!e&&!Jf[t]&&(Jf[t]=!0,vt(!1,n))}w.memo(uE);function uE({routes:t,future:e,state:n,unstable_onError:r}){return zy(t,void 0,n,r,e)}function Od({to:t,replace:e,state:n,relative:r}){te(pi(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=w.useContext(Et);vt(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:s}=w.useContext(Dt),{pathname:o}=rn(),a=$s(),l=Ad(t,Pd(s),o,r==="path"),c=JSON.stringify(l);return w.useEffect(()=>{a(JSON.parse(c),{replace:e,state:n,relative:r})},[a,c,r,e,n]),null}function Gn(t){te(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function dE({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:s=!1}){te(!pi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),a=w.useMemo(()=>({basename:o,navigator:i,static:s,future:{}}),[o,i,s]);typeof n=="string"&&(n=hi(n));let{pathname:l="/",search:c="",hash:f="",state:d=null,key:h="default"}=n,m=w.useMemo(()=>{let _=Xt(l,o);return _==null?null:{location:{pathname:_,search:c,hash:f,state:d,key:h},navigationType:r}},[o,l,c,f,d,h,r]);return vt(m!=null,`<Router basename="${o}"> is not able to match the URL "${l}${c}${f}" because it does not start with the basename, so the <Router> won't render anything.`),m==null?null:w.createElement(Et.Provider,{value:a},w.createElement(Ws.Provider,{children:e,value:m}))}function hE({children:t,location:e}){return Xx(fu(t),e)}function fu(t,e=[]){let n=[];return w.Children.forEach(t,(r,i)=>{if(!w.isValidElement(r))return;let s=[...e,i];if(r.type===w.Fragment){n.push.apply(n,fu(r.props.children,s));return}te(r.type===Gn,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),te(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=fu(r.props.children,s)),n.push(o)}),n}var Oo="get",jo="application/x-www-form-urlencoded";function il(t){return t!=null&&typeof t.tagName=="string"}function fE(t){return il(t)&&t.tagName.toLowerCase()==="button"}function pE(t){return il(t)&&t.tagName.toLowerCase()==="form"}function mE(t){return il(t)&&t.tagName.toLowerCase()==="input"}function gE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function yE(t,e){return t.button===0&&(!e||e==="_self")&&!gE(t)}var wo=null;function _E(){if(wo===null)try{new FormData(document.createElement("form"),0),wo=!1}catch{wo=!0}return wo}var vE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ec(t){return t!=null&&!vE.has(t)?(vt(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${jo}"`),null):t}function wE(t,e){let n,r,i,s,o;if(pE(t)){let a=t.getAttribute("action");r=a?Xt(a,e):null,n=t.getAttribute("method")||Oo,i=ec(t.getAttribute("enctype"))||jo,s=new FormData(t)}else if(fE(t)||mE(t)&&(t.type==="submit"||t.type==="image")){let a=t.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||a.getAttribute("action");if(r=l?Xt(l,e):null,n=t.getAttribute("formmethod")||a.getAttribute("method")||Oo,i=ec(t.getAttribute("formenctype"))||ec(a.getAttribute("enctype"))||jo,s=new FormData(a,t),!_E()){let{name:c,type:f,value:d}=t;if(f==="image"){let h=c?`${c}.`:"";s.append(`${h}x`,"0"),s.append(`${h}y`,"0")}else c&&s.append(c,d)}}else{if(il(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Oo,r=null,i=jo,o=t}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function jd(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function xE(t,e,n){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r.pathname==="/"?r.pathname=`_root.${n}`:e&&Xt(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function EE(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function CE(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function kE(t,e,n){let r=await Promise.all(t.map(async i=>{let s=e.routes[i.route.id];if(s){let o=await EE(s,n);return o.links?o.links():[]}return[]}));return NE(r.flat(1).filter(CE).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Xf(t,e,n,r,i,s){let o=(l,c)=>n[c]?l.route.id!==n[c].route.id:!0,a=(l,c)=>{var f;return n[c].pathname!==l.pathname||((f=n[c].route.path)==null?void 0:f.endsWith("*"))&&n[c].params["*"]!==l.params["*"]};return s==="assets"?e.filter((l,c)=>o(l,c)||a(l,c)):s==="data"?e.filter((l,c)=>{var d;let f=r.routes[l.route.id];if(!f||!f.hasLoader)return!1;if(o(l,c)||a(l,c))return!0;if(l.route.shouldRevalidate){let h=l.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((d=n[0])==null?void 0:d.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function SE(t,e,{includeHydrateFallback:n}={}){return IE(t.map(r=>{let i=e.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function IE(t){return[...new Set(t)]}function TE(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function NE(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let s=JSON.stringify(TE(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function By(){let t=w.useContext(fi);return jd(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function bE(){let t=w.useContext(rl);return jd(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Fd=w.createContext(void 0);Fd.displayName="FrameworkContext";function Hy(){let t=w.useContext(Fd);return jd(t,"You must render this element inside a <HydratedRouter> element"),t}function RE(t,e){let n=w.useContext(Fd),[r,i]=w.useState(!1),[s,o]=w.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:c,onMouseLeave:f,onTouchStart:d}=e,h=w.useRef(null);w.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let v=g=>{g.forEach(p=>{o(p.isIntersecting)})},E=new IntersectionObserver(v,{threshold:.5});return h.current&&E.observe(h.current),()=>{E.disconnect()}}},[t]),w.useEffect(()=>{if(r){let v=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(v)}}},[r]);let m=()=>{i(!0)},_=()=>{i(!1),o(!1)};return n?t!=="intent"?[s,h,{}]:[s,h,{onFocus:Pi(a,m),onBlur:Pi(l,_),onMouseEnter:Pi(c,m),onMouseLeave:Pi(f,_),onTouchStart:Pi(d,m)}]:[!1,h,{}]}function Pi(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function PE({page:t,...e}){let{router:n}=By(),r=w.useMemo(()=>Ly(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?w.createElement(ME,{page:t,matches:r,...e}):null}function AE(t){let{manifest:e,routeModules:n}=Hy(),[r,i]=w.useState([]);return w.useEffect(()=>{let s=!1;return kE(t,e,n).then(o=>{s||i(o)}),()=>{s=!0}},[t,e,n]),r}function ME({page:t,matches:e,...n}){let r=rn(),{manifest:i,routeModules:s}=Hy(),{basename:o}=By(),{loaderData:a,matches:l}=bE(),c=w.useMemo(()=>Xf(t,e,l,i,r,"data"),[t,e,l,i,r]),f=w.useMemo(()=>Xf(t,e,l,i,r,"assets"),[t,e,l,i,r]),d=w.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let _=new Set,v=!1;if(e.forEach(g=>{var y;let p=i.routes[g.route.id];!p||!p.hasLoader||(!c.some(x=>x.route.id===g.route.id)&&g.route.id in a&&((y=s[g.route.id])!=null&&y.shouldRevalidate)||p.hasClientLoader?v=!0:_.add(g.route.id))}),_.size===0)return[];let E=xE(t,o,"data");return v&&_.size>0&&E.searchParams.set("_routes",e.filter(g=>_.has(g.route.id)).map(g=>g.route.id).join(",")),[E.pathname+E.search]},[o,a,r,i,c,e,t,s]),h=w.useMemo(()=>SE(f,i),[f,i]),m=AE(f);return w.createElement(w.Fragment,null,d.map(_=>w.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...n})),h.map(_=>w.createElement("link",{key:_,rel:"modulepreload",href:_,...n})),m.map(({key:_,link:v})=>w.createElement("link",{key:_,nonce:n.nonce,...v})))}function DE(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Gy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Gy&&(window.__reactRouterVersion="7.8.2")}catch{}function LE({basename:t,children:e,window:n}){let r=w.useRef();r.current==null&&(r.current=Cx({window:n,v5Compat:!0}));let i=r.current,[s,o]=w.useState({action:i.action,location:i.location}),a=w.useCallback(l=>{w.startTransition(()=>o(l))},[o]);return w.useLayoutEffect(()=>i.listen(a),[i,a]),w.createElement(dE,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:i})}var Ky=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ri=w.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:f,viewTransition:d,...h},m){let{basename:_}=w.useContext(Et),v=typeof c=="string"&&Ky.test(c),E,g=!1;if(typeof c=="string"&&v&&(E=c,Gy))try{let O=new URL(window.location.href),D=c.startsWith("//")?new URL(O.protocol+c):new URL(c),ke=Xt(D.pathname,_);D.origin===O.origin&&ke!=null?c=ke+D.search+D.hash:g=!0}catch{vt(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let p=Qx(c,{relative:i}),[y,x,C]=RE(r,h),I=UE(c,{replace:o,state:a,target:l,preventScrollReset:f,relative:i,viewTransition:d});function T(O){e&&e(O),O.defaultPrevented||I(O)}let b=w.createElement("a",{...h,...C,href:E||p,onClick:g||s?e:T,ref:DE(m,x),target:l,"data-discover":!v&&n==="render"?"true":void 0});return y&&!v?w.createElement(w.Fragment,null,b,w.createElement(PE,{page:p})):b});ri.displayName="Link";var OE=w.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:o,viewTransition:a,children:l,...c},f){let d=zs(o,{relative:c.relative}),h=rn(),m=w.useContext(rl),{navigator:_,basename:v}=w.useContext(Et),E=m!=null&&BE(d)&&a===!0,g=_.encodeLocation?_.encodeLocation(d).pathname:d.pathname,p=h.pathname,y=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;n||(p=p.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&v&&(y=Xt(y,v)||y);const x=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let C=p===g||!i&&p.startsWith(g)&&p.charAt(x)==="/",I=y!=null&&(y===g||!i&&y.startsWith(g)&&y.charAt(g.length)==="/"),T={isActive:C,isPending:I,isTransitioning:E},b=C?e:void 0,O;typeof r=="function"?O=r(T):O=[r,C?"active":null,I?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let D=typeof s=="function"?s(T):s;return w.createElement(ri,{...c,"aria-current":b,className:O,ref:f,style:D,to:o,viewTransition:a},typeof l=="function"?l(T):l)});OE.displayName="NavLink";var jE=w.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:s,method:o=Oo,action:a,onSubmit:l,relative:c,preventScrollReset:f,viewTransition:d,...h},m)=>{let _=zE(),v=VE(a,{relative:c}),E=o.toLowerCase()==="get"?"get":"post",g=typeof a=="string"&&Ky.test(a),p=y=>{if(l&&l(y),y.defaultPrevented)return;y.preventDefault();let x=y.nativeEvent.submitter,C=(x==null?void 0:x.getAttribute("formmethod"))||o;_(x||y.currentTarget,{fetcherKey:e,method:C,navigate:n,replace:i,state:s,relative:c,preventScrollReset:f,viewTransition:d})};return w.createElement("form",{ref:m,method:E,action:v,onSubmit:r?l:p,...h,"data-discover":!g&&t==="render"?"true":void 0})});jE.displayName="Form";function FE(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qy(t){let e=w.useContext(fi);return te(e,FE(t)),e}function UE(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:s,viewTransition:o}={}){let a=$s(),l=rn(),c=zs(t,{relative:s});return w.useCallback(f=>{if(yE(f,e)){f.preventDefault();let d=n!==void 0?n:Es(l)===Es(c);a(t,{replace:d,state:r,preventScrollReset:i,relative:s,viewTransition:o})}},[l,a,c,n,r,e,t,i,s,o])}var WE=0,$E=()=>`__${String(++WE)}__`;function zE(){let{router:t}=qy("useSubmit"),{basename:e}=w.useContext(Et),n=aE();return w.useCallback(async(r,i={})=>{let{action:s,method:o,encType:a,formData:l,body:c}=wE(r,e);if(i.navigate===!1){let f=i.fetcherKey||$E();await t.fetch(f,n,i.action||s,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||o,formEncType:i.encType||a,flushSync:i.flushSync})}else await t.navigate(i.action||s,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||o,formEncType:i.encType||a,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[t,e,n])}function VE(t,{relative:e}={}){let{basename:n}=w.useContext(Et),r=w.useContext(Dt);te(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...zs(t||".",{relative:e})},o=rn();if(t==null){s.search=o.search;let a=new URLSearchParams(s.search),l=a.getAll("index");if(l.some(f=>f==="")){a.delete("index"),l.filter(d=>d).forEach(d=>a.append("index",d));let f=a.toString();s.search=f?`?${f}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:Ht([n,s.pathname])),Es(s)}function BE(t,{relative:e}={}){let n=w.useContext(Uy);te(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=qy("useViewTransitionState"),i=zs(t,{relative:e});if(!n.isTransitioning)return!1;let s=Xt(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Xt(n.nextLocation.pathname,r)||n.nextLocation.pathname;return fa(i.pathname,o)!=null||fa(i.pathname,s)!=null}const HE=()=>{};var Zf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw mi(e)},mi=function(t){return new Error("Firebase Database ("+Yy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},GE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ud={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,f=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(h=64)),r.push(n[f],n[d],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):GE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new KE;const h=s<<2|a>>4;if(r.push(h),c!==64){const m=a<<4&240|c>>2;if(r.push(m),d!==64){const _=c<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class KE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jy=function(t){const e=Qy(t);return Ud.encodeByteArray(e,!0)},pa=function(t){return Jy(t).replace(/\./g,"")},ma=function(t){try{return Ud.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(t){return Xy(void 0,t)}function Xy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!YE(n)||(t[n]=Xy(t[n],e[n]));return t}function YE(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=()=>QE().__FIREBASE_DEFAULTS__,XE=()=>{if(typeof process>"u"||typeof Zf>"u")return;const t=Zf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ZE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ma(t[1]);return e&&JSON.parse(e)},Wd=()=>{try{return HE()||JE()||XE()||ZE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zy=t=>{var e,n;return(n=(e=Wd())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},eC=t=>{const e=Zy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},e0=()=>{var t;return(t=Wd())==null?void 0:t.config},t0=t=>{var e;return(e=Wd())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function n0(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[pa(JSON.stringify(n)),pa(JSON.stringify(o)),""].join(".")}const Ji={};function nC(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ji))Ji[e]?t.emulator.push(e):t.prod.push(e);return t}function rC(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let ep=!1;function r0(t,e){if(typeof window>"u"||typeof document>"u"||!gi(window.location.host)||Ji[t]===e||Ji[t]||ep)return;Ji[t]=e;function n(h){return`__firebase__banner__${h}`}const r="__firebase__banner",s=nC().prod.length>0;function o(){const h=document.getElementById(r);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function l(h,m){h.setAttribute("width","24"),h.setAttribute("id",m),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function c(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{ep=!0,o()},h}function f(h,m){h.setAttribute("id",m),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function d(){const h=rC(r),m=n("text"),_=document.getElementById(m)||document.createElement("span"),v=n("learnmore"),E=document.getElementById(v)||document.createElement("a"),g=n("preprendIcon"),p=document.getElementById(g)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const y=h.element;a(y),f(E,v);const x=c();l(p,g),y.append(p,_,E,x),document.body.appendChild(y)}s?(_.innerText="Preview backend disconnected.",p.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(p.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $d(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function iC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function i0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function s0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sC(){const t=De();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function o0(){return Yy.NODE_ADMIN===!0}function a0(){try{return typeof indexedDB=="object"}catch{return!1}}function l0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function oC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC="FirebaseError";class Lt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=aC,Object.setPrototypeOf(this,Lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yr.prototype.create)}}class yr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?lC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Lt(i,a,r)}}function lC(t,e){return t.replace(cC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const cC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(t){return JSON.parse(t)}function he(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Cs(ma(s[0])||""),n=Cs(ma(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},uC=function(t){const e=c0(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},dC=function(t){const e=c0(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ii(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function pu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ga(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ln(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(tp(s)&&tp(o)){if(!Ln(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function tp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Wi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function $i(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,f;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),f=1518500249):(c=s^o^a,f=1859775393):d<60?(c=s&o|a&(s|o),f=2400959708):(c=s^o^a,f=3395469782);const h=(i<<5|i>>>27)+c+l+f+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function fC(t,e){const n=new pC(t,e);return n.subscribe.bind(n)}class pC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=tc),i.error===void 0&&(i.error=tc),i.complete===void 0&&(i.complete=tc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tc(){}function zd(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,S(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ol=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=1e3,_C=2,vC=4*60*60*1e3,wC=.5;function np(t,e=yC,n=_C){const r=e*Math.pow(n,t),i=Math.round(wC*r*(Math.random()-.5)*2);return Math.min(vC,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t){return t&&t._delegate?t._delegate:t}class wt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CC(e))try{this.getOrInitializeService({instanceIdentifier:Kn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kn){return this.instances.has(e)}getOptions(e=Kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:EC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kn){return this.component?this.component.multipleInstances?e:Kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function EC(t){return t===Kn?void 0:t}function CC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const SC={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},IC=K.INFO,TC={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},NC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=TC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class al{constructor(e){this.name=e,this._logLevel=IC,this._logHandler=NC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?SC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const bC=(t,e)=>e.some(n=>t instanceof n);let rp,ip;function RC(){return rp||(rp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function PC(){return ip||(ip=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const u0=new WeakMap,mu=new WeakMap,d0=new WeakMap,nc=new WeakMap,Vd=new WeakMap;function AC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Tn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&u0.set(n,t)}).catch(()=>{}),Vd.set(e,t),e}function MC(t){if(mu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});mu.set(t,e)}let gu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||d0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DC(t){gu=t(gu)}function LC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rc(this),e,...n);return d0.set(r,e.sort?e.sort():[e]),Tn(r)}:PC().includes(t)?function(...e){return t.apply(rc(this),e),Tn(u0.get(this))}:function(...e){return Tn(t.apply(rc(this),e))}}function OC(t){return typeof t=="function"?LC(t):(t instanceof IDBTransaction&&MC(t),bC(t,RC())?new Proxy(t,gu):t)}function Tn(t){if(t instanceof IDBRequest)return AC(t);if(nc.has(t))return nc.get(t);const e=OC(t);return e!==t&&(nc.set(t,e),Vd.set(e,t)),e}const rc=t=>Vd.get(t);function h0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Tn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Tn(o.result),l.oldVersion,l.newVersion,Tn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const jC=["get","getKey","getAll","getAllKeys","count"],FC=["put","add","delete","clear"],ic=new Map;function sp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ic.get(e))return ic.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=FC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ic.set(e,s),s}DC(t=>({...t,get:(e,n,r)=>sp(e,n)||t.get(e,n,r),has:(e,n)=>!!sp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function WC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yu="@firebase/app",op="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new al("@firebase/app"),$C="@firebase/app-compat",zC="@firebase/analytics-compat",VC="@firebase/analytics",BC="@firebase/app-check-compat",HC="@firebase/app-check",GC="@firebase/auth",KC="@firebase/auth-compat",qC="@firebase/database",YC="@firebase/data-connect",QC="@firebase/database-compat",JC="@firebase/functions",XC="@firebase/functions-compat",ZC="@firebase/installations",ek="@firebase/installations-compat",tk="@firebase/messaging",nk="@firebase/messaging-compat",rk="@firebase/performance",ik="@firebase/performance-compat",sk="@firebase/remote-config",ok="@firebase/remote-config-compat",ak="@firebase/storage",lk="@firebase/storage-compat",ck="@firebase/firestore",uk="@firebase/ai",dk="@firebase/firestore-compat",hk="firebase",fk="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u="[DEFAULT]",pk={[yu]:"fire-core",[$C]:"fire-core-compat",[VC]:"fire-analytics",[zC]:"fire-analytics-compat",[HC]:"fire-app-check",[BC]:"fire-app-check-compat",[GC]:"fire-auth",[KC]:"fire-auth-compat",[qC]:"fire-rtdb",[YC]:"fire-data-connect",[QC]:"fire-rtdb-compat",[JC]:"fire-fn",[XC]:"fire-fn-compat",[ZC]:"fire-iid",[ek]:"fire-iid-compat",[tk]:"fire-fcm",[nk]:"fire-fcm-compat",[rk]:"fire-perf",[ik]:"fire-perf-compat",[sk]:"fire-rc",[ok]:"fire-rc-compat",[ak]:"fire-gcs",[lk]:"fire-gcs-compat",[ck]:"fire-fst",[dk]:"fire-fst-compat",[uk]:"fire-vertex","fire-js":"fire-js",[hk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=new Map,mk=new Map,vu=new Map;function ap(t,e){try{t.container.addComponent(e)}catch(n){Zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function At(t){const e=t.name;if(vu.has(e))return Zt.debug(`There were multiple attempts to register component ${e}.`),!1;vu.set(e,t);for(const n of ya.values())ap(n,t);for(const n of mk.values())ap(n,t);return!0}function _r(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nn=new yr("app","Firebase",gk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=fk;function f0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:_u,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Nn.create("bad-app-name",{appName:String(i)});if(n||(n=e0()),!n)throw Nn.create("no-options");const s=ya.get(i);if(s){if(Ln(n,s.options)&&Ln(r,s.config))return s;throw Nn.create("duplicate-app",{appName:i})}const o=new kC(i);for(const l of vu.values())o.addComponent(l);const a=new yk(n,r,o);return ya.set(i,a),a}function Bd(t=_u){const e=ya.get(t);if(!e&&t===_u&&e0())return f0();if(!e)throw Nn.create("no-app",{appName:t});return e}function it(t,e,n){let r=pk[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zt.warn(o.join(" "));return}At(new wt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k="firebase-heartbeat-database",vk=1,ks="firebase-heartbeat-store";let sc=null;function p0(){return sc||(sc=h0(_k,vk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ks)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nn.create("idb-open",{originalErrorMessage:t.message})})),sc}async function wk(t){try{const n=(await p0()).transaction(ks),r=await n.objectStore(ks).get(m0(t));return await n.done,r}catch(e){if(e instanceof Lt)Zt.warn(e.message);else{const n=Nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zt.warn(n.message)}}}async function lp(t,e){try{const r=(await p0()).transaction(ks,"readwrite");await r.objectStore(ks).put(e,m0(t)),await r.done}catch(n){if(n instanceof Lt)Zt.warn(n.message);else{const r=Nn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zt.warn(r.message)}}}function m0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=1024,Ek=30;class Ck{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=cp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Ek){const o=Ik(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Zt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=cp(),{heartbeatsToSend:r,unsentEntries:i}=kk(this._heartbeatsCache.heartbeats),s=pa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Zt.warn(n),""}}}function cp(){return new Date().toISOString().substring(0,10)}function kk(t,e=xk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),up(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),up(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Sk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return a0()?l0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return lp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return lp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function up(t){return pa(JSON.stringify({version:2,heartbeats:t})).length}function Ik(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(t){At(new wt("platform-logger",e=>new UC(e),"PRIVATE")),At(new wt("heartbeat",e=>new Ck(e),"PRIVATE")),it(yu,op,t),it(yu,op,"esm2020"),it("fire-js","")}Tk("");function g0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Nk=g0,y0=new yr("auth","Firebase",g0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=new al("@firebase/auth");function bk(t,...e){_a.logLevel<=K.WARN&&_a.warn(`Auth (${_i}): ${t}`,...e)}function Fo(t,...e){_a.logLevel<=K.ERROR&&_a.error(`Auth (${_i}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t,...e){throw Hd(t,...e)}function Rt(t,...e){return Hd(t,...e)}function _0(t,e,n){const r={...Nk(),[e]:n};return new yr("auth","Firebase",r).create(e,{appName:t.name})}function Gt(t){return _0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return y0.create(t,...e)}function A(t,e,...n){if(!t)throw Hd(e,...n)}function $t(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fo(e),new Error(e)}function en(t,e){t||$t(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function v0(){return dp()==="http:"||dp()==="https:"}function dp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(v0()||i0()||"connection"in navigator)?navigator.onLine:!0}function Pk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.shortDelay=e,this.longDelay=n,en(n>e,"Short delay should be less than long delay!"),this.isMobile=$d()||s0()}get(){return Rk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(t,e){en(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Dk=new Vs(3e4,6e4);function Ot(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ct(t,e,n,r,i={}){return x0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=yi({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...s};return iC()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&gi(t.emulatorConfig.host)&&(c.credentials="include"),w0.fetch()(await E0(t,t.config.apiHost,n,a),c)})}async function x0(t,e,n){t._canInitEmulator=!1;const r={...Ak,...e};try{const i=new Ok(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw xo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw xo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw xo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw _0(t,f,c);xt(t,f)}}catch(i){if(i instanceof Lt)throw i;xt(t,"network-request-failed",{message:String(i)})}}async function Bs(t,e,n,r,i={}){const s=await Ct(t,e,n,r,i);return"mfaPendingCredential"in s&&xt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function E0(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Gd(t.config,i):`${t.config.apiScheme}://${i}`;return Mk.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function Lk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ok{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rt(this.auth,"network-request-failed")),Dk.get())})}}function xo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rt(t,e,r);return i.customData._tokenResponse=n,i}function hp(t){return t!==void 0&&t.enterprise!==void 0}class jk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Lk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Fk(t,e){return Ct(t,"GET","/v2/recaptchaConfig",Ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uk(t,e){return Ct(t,"POST","/v1/accounts:delete",e)}async function wa(t,e){return Ct(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wk(t,e=!1){const n=ue(t),r=await n.getIdToken(e),i=Kd(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Xi(oc(i.auth_time)),issuedAtTime:Xi(oc(i.iat)),expirationTime:Xi(oc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function oc(t){return Number(t)*1e3}function Kd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Fo("JWT malformed, contained fewer than 3 sections"),null;try{const i=ma(n);return i?JSON.parse(i):(Fo("Failed to decode base64 JWT payload"),null)}catch(i){return Fo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function fp(t){const e=Kd(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Lt&&$k(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $k({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xi(this.lastLoginAt),this.creationTime=Xi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xa(t){var d;const e=t.auth,n=await t.getIdToken(),r=await si(t,wa(e,{idToken:n}));A(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(d=i.providerUserInfo)!=null&&d.length?C0(i.providerUserInfo):[],o=Bk(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new wu(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function Vk(t){const e=ue(t);await xa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Bk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function C0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hk(t,e){const n=await x0(t,{},async()=>{const r=yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await E0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&gi(t.emulatorConfig.host)&&(l.credentials="include"),w0.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Gk(t,e){return Ct(t,"POST","/v2/accounts:revokeToken",Ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){A(e.length!==0,"internal-error");const n=fp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Hk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Hr;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hr,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ht{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new zk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new wu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await si(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Wk(this,e)}reload(){return Vk(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ht({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tt(this.auth.app))return Promise.reject(Gt(this.auth));const e=await this.getIdToken();return await si(this,Uk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:d,emailVerified:h,isAnonymous:m,providerData:_,stsTokenManager:v}=n;A(d&&v,e,"internal-error");const E=Hr.fromJSON(this.name,v);A(typeof d=="string",e,"internal-error"),ln(r,e.name),ln(i,e.name),A(typeof h=="boolean",e,"internal-error"),A(typeof m=="boolean",e,"internal-error"),ln(s,e.name),ln(o,e.name),ln(a,e.name),ln(l,e.name),ln(c,e.name),ln(f,e.name);const g=new ht({uid:d,auth:e,email:i,emailVerified:h,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:E,createdAt:c,lastLoginAt:f});return _&&Array.isArray(_)&&(g.providerData=_.map(p=>({...p}))),l&&(g._redirectEventId=l),g}static async _fromIdTokenResponse(e,n,r=!1){const i=new Hr;i.updateFromServerResponse(n);const s=new ht({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await xa(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];A(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?C0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Hr;a.updateFromIdToken(r);const l=new ht({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new wu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=new Map;function zt(t){en(t instanceof Function,"Expected a class definition");let e=pp.get(t);return e?(en(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}k0.type="NONE";const mp=k0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t,e,n){return`firebase:${t}:${e}:${n}`}class Gr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Uo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Uo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await wa(this.auth,{idToken:e}).catch(()=>{});return n?ht._fromGetAccountInfoResponse(this.auth,n,e):null}return ht._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gr(zt(mp),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||zt(mp);const o=Uo(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const f=await c._get(o);if(f){let d;if(typeof f=="string"){const h=await wa(e,{idToken:f}).catch(()=>{});if(!h)break;d=await ht._fromGetAccountInfoResponse(e,h,f)}else d=ht._fromJSON(e,f);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Gr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Gr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(N0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(S0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(R0(e))return"Blackberry";if(P0(e))return"Webos";if(I0(e))return"Safari";if((e.includes("chrome/")||T0(e))&&!e.includes("edge/"))return"Chrome";if(b0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function S0(t=De()){return/firefox\//i.test(t)}function I0(t=De()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function T0(t=De()){return/crios\//i.test(t)}function N0(t=De()){return/iemobile/i.test(t)}function b0(t=De()){return/android/i.test(t)}function R0(t=De()){return/blackberry/i.test(t)}function P0(t=De()){return/webos/i.test(t)}function qd(t=De()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Kk(t=De()){var e;return qd(t)&&!!((e=window.navigator)!=null&&e.standalone)}function qk(){return sC()&&document.documentMode===10}function A0(t=De()){return qd(t)||b0(t)||P0(t)||R0(t)||/windows phone/i.test(t)||N0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(t,e=[]){let n;switch(t){case"Browser":n=gp(De());break;case"Worker":n=`${gp(De())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_i}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qk(t,e={}){return Ct(t,"GET","/v2/passwordPolicy",Ot(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=6;class Xk{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Jk,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yp(this),this.idTokenSubscription=new yp(this),this.beforeStateQueue=new Yk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=y0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Gr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await wa(this,{idToken:e}),r=await ht._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(tt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Pk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tt(this.app))return Promise.reject(Gt(this));const n=e?ue(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tt(this.app)?Promise.reject(Gt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tt(this.app)?Promise.reject(Gt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Qk(this),n=new Xk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new yr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Gk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zt(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await Gr.create(this,[zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=M0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&bk(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function vr(t){return ue(t)}class yp{constructor(e){this.auth=e,this.observer=null,this.addObserver=fC(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ll={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eS(t){ll=t}function D0(t){return ll.loadJS(t)}function tS(){return ll.recaptchaEnterpriseScript}function nS(){return ll.gapiScript}function rS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class iS{constructor(){this.enterprise=new sS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class sS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const oS="recaptcha-enterprise",L0="NO_RECAPTCHA";class aS{constructor(e){this.type=oS,this.auth=vr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Fk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new jk(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;hp(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(L0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new iS().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&hp(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=tS();l.length!==0&&(l+=a),D0(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function _p(t,e,n,r=!1,i=!1){const s=new aS(t);let o;if(i)o=L0;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function xu(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await _p(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await _p(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(t,e){const n=_r(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ln(s,e??{}))return i;xt(i,"already-initialized")}return n.initialize({options:e})}function cS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function uS(t,e,n){const r=vr(t);A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=O0(e),{host:o,port:a}=dS(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},f=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){A(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),A(Ln(c,r.config.emulator)&&Ln(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,gi(o)?(n0(`${s}//${o}${l}`),r0("Auth",!0)):hS()}function O0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dS(t){const e=O0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:vp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:vp(o)}}}function vp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $t("not implemented")}_getIdTokenResponse(e){return $t("not implemented")}_linkToIdToken(e,n){return $t("not implemented")}_getReauthenticationResolver(e){return $t("not implemented")}}async function fS(t,e){return Ct(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pS(t,e){return Bs(t,"POST","/v1/accounts:signInWithPassword",Ot(t,e))}async function mS(t,e){return Ct(t,"POST","/v1/accounts:sendOobCode",Ot(t,e))}async function gS(t,e){return mS(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yS(t,e){return Bs(t,"POST","/v1/accounts:signInWithEmailLink",Ot(t,e))}async function _S(t,e){return Bs(t,"POST","/v1/accounts:signInWithEmailLink",Ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends Yd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ss(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ss(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xu(e,n,"signInWithPassword",pS);case"emailLink":return yS(e,{email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xu(e,r,"signUpPassword",fS);case"emailLink":return _S(e,{idToken:n,email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(t,e){return Bs(t,"POST","/v1/accounts:signInWithIdp",Ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS="http://localhost";class lr extends Yd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new lr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Kr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Kr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kr(e,n)}buildRequest(){const e={requestUri:vS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xS(t){const e=Wi($i(t)).link,n=e?Wi($i(e)).deep_link_id:null,r=Wi($i(t)).deep_link_id;return(r?Wi($i(r)).link:null)||r||n||e||t}class Qd{constructor(e){const n=Wi($i(e)),r=n.apiKey??null,i=n.oobCode??null,s=wS(n.mode??null);A(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=xS(e);try{return new Qd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.providerId=vi.PROVIDER_ID}static credential(e,n){return Ss._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qd.parseLink(n);return A(r,"argument-error"),Ss._fromEmailAndCode(e,r.code,r.tenantId)}}vi.PROVIDER_ID="password";vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends j0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Hs{constructor(){super("facebook.com")}static credential(e){return lr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends Hs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return lr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends Hs{constructor(){super("github.com")}static credential(e){return lr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Hs{constructor(){super("twitter.com")}static credential(e,n){return lr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gn.credential(n,r)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ES(t,e){return Bs(t,"POST","/v1/accounts:signUp",Ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ht._fromIdTokenResponse(e,r,i),o=wp(r);return new cr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=wp(r);return new cr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function wp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends Lt{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ea.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ea(e,n,r,i)}}function F0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ea._fromErrorAndOperation(t,s,e,r):s})}async function CS(t,e,n=!1){const r=await si(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return cr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kS(t,e,n=!1){const{auth:r}=t;if(tt(r.app))return Promise.reject(Gt(r));const i="reauthenticate";try{const s=await si(t,F0(r,i,e,t),n);A(s.idToken,r,"internal-error");const o=Kd(s.idToken);A(o,r,"internal-error");const{sub:a}=o;return A(t.uid===a,r,"user-mismatch"),cr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U0(t,e,n=!1){if(tt(t.app))return Promise.reject(Gt(t));const r="signIn",i=await F0(t,r,e),s=await cr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function SS(t,e){return U0(vr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W0(t){const e=vr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $0(t,e,n){if(tt(t.app))return Promise.reject(Gt(t));const r=vr(t),o=await xu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ES).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&W0(t),l}),a=await cr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function z0(t,e,n){return tt(t.app)?Promise.reject(Gt(t)):SS(ue(t),vi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&W0(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IS(t,e){return Ct(t,"POST","/v1/accounts:createAuthUri",Ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TS(t,e){const n=v0()?va():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await IS(ue(t),r);return i||[]}async function V0(t,e){const n=ue(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:s}=await gS(n.auth,i);s!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NS(t,e){return Ct(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bS(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ue(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await si(r,NS(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function RS(t,e,n,r){return ue(t).onIdTokenChanged(e,n,r)}function PS(t,e,n){return ue(t).beforeAuthStateChanged(e,n)}function AS(t,e,n,r){return ue(t).onAuthStateChanged(e,n,r)}function MS(t){return ue(t).signOut()}const Ca="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ca,"1"),this.storage.removeItem(Ca),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=1e3,LS=10;class H0 extends B0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=A0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);qk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,LS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},DS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}H0.type="LOCAL";const OS=H0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0 extends B0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}G0.type="SESSION";const K0=G0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new cl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await jS(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Jd("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return window}function US(t){Pt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(){return typeof Pt().WorkerGlobalScope<"u"&&typeof Pt().importScripts=="function"}async function WS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $S(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function zS(){return q0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0="firebaseLocalStorageDb",VS=1,ka="firebaseLocalStorage",Q0="fbase_key";class Gs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ul(t,e){return t.transaction([ka],e?"readwrite":"readonly").objectStore(ka)}function BS(){const t=indexedDB.deleteDatabase(Y0);return new Gs(t).toPromise()}function Eu(){const t=indexedDB.open(Y0,VS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ka,{keyPath:Q0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ka)?e(r):(r.close(),await BS(),e(await Eu()))})})}async function xp(t,e,n){const r=ul(t,!0).put({[Q0]:e,value:n});return new Gs(r).toPromise()}async function HS(t,e){const n=ul(t,!1).get(e),r=await new Gs(n).toPromise();return r===void 0?null:r.value}function Ep(t,e){const n=ul(t,!0).delete(e);return new Gs(n).toPromise()}const GS=800,KS=3;class J0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Eu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>KS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return q0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cl._getInstance(zS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await WS(),!this.activeServiceWorker)return;this.sender=new FS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$S()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Eu();return await xp(e,Ca,"1"),await Ep(e,Ca),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>HS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ep(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ul(i,!1).getAll();return new Gs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}J0.type="LOCAL";const qS=J0;new Vs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(t,e){return e?zt(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd extends Yd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function QS(t){return U0(t.auth,new Xd(t),t.bypassAuthState)}function JS(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),kS(n,new Xd(t),t.bypassAuthState)}async function XS(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),CS(n,new Xd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return QS;case"linkViaPopup":case"linkViaRedirect":return XS;case"reauthViaPopup":case"reauthViaRedirect":return JS;default:xt(this.auth,"internal-error")}}resolve(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=new Vs(2e3,1e4);class jr extends X0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){en(this.filter.length===1,"Popup operations only handle one event");const e=Jd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZS.get())};e()}}jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI="pendingRedirect",Wo=new Map;class tI extends X0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wo.get(this.auth._key());if(!e){try{const r=await nI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wo.set(this.auth._key(),e)}return this.bypassAuthState||Wo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nI(t,e){const n=sI(e),r=iI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function rI(t,e){Wo.set(t._key(),e)}function iI(t){return zt(t._redirectPersistence)}function sI(t){return Uo(eI,t.config.apiKey,t.name)}async function oI(t,e,n=!1){if(tt(t.app))return Promise.reject(Gt(t));const r=vr(t),i=YS(r,e),o=await new tI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=10*60*1e3;class lI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Z0(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cp(e))}saveEventToCache(e){this.cachedEventUids.add(Cp(e)),this.lastProcessedEventTime=Date.now()}}function Cp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Z0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Z0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uI(t,e={}){return Ct(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hI=/^https?/;async function fI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uI(t);for(const n of e)try{if(pI(n))return}catch{}xt(t,"unauthorized-domain")}function pI(t){const e=va(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hI.test(n))return!1;if(dI.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=new Vs(3e4,6e4);function kp(){const t=Pt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gI(t){return new Promise((e,n)=>{var i,s,o;function r(){kp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kp(),n(Rt(t,"network-request-failed"))},timeout:mI.get()})}if((s=(i=Pt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Pt().gapi)!=null&&o.load)r();else{const a=rS("iframefcb");return Pt()[a]=()=>{gapi.load?r():n(Rt(t,"network-request-failed"))},D0(`${nS()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw $o=null,e})}let $o=null;function yI(t){return $o=$o||gI(t),$o}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=new Vs(5e3,15e3),vI="__/auth/iframe",wI="emulator/auth/iframe",xI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},EI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CI(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gd(e,wI):`https://${t.config.authDomain}/${vI}`,r={apiKey:e.apiKey,appName:t.name,v:_i},i=EI.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${yi(r).slice(1)}`}async function kI(t){const e=await yI(t),n=Pt().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:CI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Rt(t,"network-request-failed"),a=Pt().setTimeout(()=>{s(o)},_I.get());function l(){Pt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},II=500,TI=600,NI="_blank",bI="http://localhost";class Sp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RI(t,e,n,r=II,i=TI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...SI,width:r.toString(),height:i.toString(),top:s,left:o},c=De().toLowerCase();n&&(a=T0(c)?NI:n),S0(c)&&(e=e||bI,l.scrollbars="yes");const f=Object.entries(l).reduce((h,[m,_])=>`${h}${m}=${_},`,"");if(Kk(c)&&a!=="_self")return PI(e||"",a),new Sp(null);const d=window.open(e||"",a,f);A(d,t,"popup-blocked");try{d.focus()}catch{}return new Sp(d)}function PI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI="__/auth/handler",MI="emulator/auth/handler",DI=encodeURIComponent("fac");async function Ip(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_i,eventId:i};if(e instanceof j0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof Hs){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),c=l?`#${DI}=${encodeURIComponent(l)}`:"";return`${LI(t)}?${yi(a).slice(1)}${c}`}function LI({config:t}){return t.emulator?Gd(t,MI):`https://${t.authDomain}/${AI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="webStorageSupport";class OI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=K0,this._completeRedirectFn=oI,this._overrideRedirectResult=rI}async _openPopup(e,n,r,i){var o;en((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Ip(e,n,r,va(),i);return RI(e,s,Jd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ip(e,n,r,va(),i);return US(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(en(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kI(e),r=new lI(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ac,{type:ac},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[ac];s!==void 0&&n(!!s),xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return A0()||I0()||qd()}}const jI=OI;var Tp="@firebase/auth",Np="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function WI(t){At(new wt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:M0(t)},c=new Zk(r,i,s,l);return cS(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),At(new wt("auth-internal",e=>{const n=vr(e.getProvider("auth").getImmediate());return(r=>new FI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),it(Tp,Np,UI(t)),it(Tp,Np,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=5*60,zI=t0("authIdTokenMaxAge")||$I;let bp=null;const VI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zI)return;const i=n==null?void 0:n.token;bp!==i&&(bp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function BI(t=Bd()){const e=_r(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lS(t,{popupRedirectResolver:jI,persistence:[qS,OS,K0]}),r=t0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=VI(s.toString());PS(n,o,()=>o(n.currentUser)),RS(n,a=>o(a))}}const i=Zy("auth");return i&&uS(n,`http://${i}`),n}function HI(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}eS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Rt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",HI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});WI("Browser");var GI="firebase",KI="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */it(GI,KI,"app");var Rp={};const Pp="@firebase/database",Ap="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e_="";function qI(t){e_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),he(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Cs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return sn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new YI(e)}}catch{}return new QI},Xn=t_("localStorage"),JI=t_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new al("@firebase/database"),XI=function(){let t=1;return function(){return t++}}(),n_=function(t){const e=gC(t),n=new hC;n.update(e);const r=n.digest();return Ud.encodeByteArray(r)},Ks=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ks.apply(null,r):typeof r=="object"?e+=he(r):e+=r,e+=" "}return e};let Zi=null,Mp=!0;const ZI=function(t,e){S(!e,"Can't turn on custom loggers persistently."),qr.logLevel=K.VERBOSE,Zi=qr.log.bind(qr)},Ne=function(...t){if(Mp===!0&&(Mp=!1,Zi===null&&JI.get("logging_enabled")===!0&&ZI()),Zi){const e=Ks.apply(null,t);Zi(e)}},qs=function(t){return function(...e){Ne(t,...e)}},Cu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ks(...t);qr.error(e)},tn=function(...t){const e=`FIREBASE FATAL ERROR: ${Ks(...t)}`;throw qr.error(e),new Error(e)},Ve=function(...t){const e="FIREBASE WARNING: "+Ks(...t);qr.warn(e)},eT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ve("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},r_=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},tT=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},oi="[MIN_NAME]",ur="[MAX_NAME]",wi=function(t,e){if(t===e)return 0;if(t===oi||e===ur)return-1;if(e===oi||t===ur)return 1;{const n=Dp(t),r=Dp(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},nT=function(t,e){return t===e?0:t<e?-1:1},Ai=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+he(e))},Zd=function(t){if(typeof t!="object"||t===null)return he(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=he(e[r]),n+=":",n+=Zd(t[e[r]]);return n+="}",n},i_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function He(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const s_=function(t){S(!r_(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const f=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(f.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},rT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},iT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function sT(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const oT=new RegExp("^-?(0*)\\d{1,10}$"),aT=-2147483648,lT=2147483647,Dp=function(t){if(oT.test(t)){const e=Number(t);if(e>=aT&&e<=lT)return e}return null},xi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ve("Exception was thrown by user callback.",n),e},Math.floor(0))}},cT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},es=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,tt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ve(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ve(e)}}class zo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}zo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="5",o_="v",a_="s",l_="r",c_="f",u_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,d_="ls",h_="p",ku="ac",f_="websocket",p_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Xn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function hT(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function g_(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(e===f_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===p_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);hT(t)&&(n.ns=t.namespace);const i=[];return He(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(){this.counters_={}}incrementCounter(e,n=1){sn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return qE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc={},cc={};function th(t){const e=t.toString();return lc[e]||(lc[e]=new fT),lc[e]}function pT(t,e){const n=t.toString();return cc[n]||(cc[n]=e()),cc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&xi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp="start",gT="close",yT="pLPCommand",_T="pRTLPCB",y_="id",__="pw",v_="ser",vT="cb",wT="seg",xT="ts",ET="d",CT="dframe",w_=1870,x_=30,kT=w_-x_,ST=25e3,IT=3e4;class Fr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qs(e),this.stats_=th(n),this.urlFn=l=>(this.appCheckToken&&(l[ku]=this.appCheckToken),g_(n,p_,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new mT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(IT)),tT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new nh((...s)=>{const[o,a,l,c,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Lp)this.id=a,this.password=l;else if(o===gT)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Lp]="t",r[v_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[vT]=this.scriptTagHolder.uniqueCallbackIdentifier),r[o_]=eh,this.transportSessionId&&(r[a_]=this.transportSessionId),this.lastSessionId&&(r[d_]=this.lastSessionId),this.applicationId&&(r[h_]=this.applicationId),this.appCheckToken&&(r[ku]=this.appCheckToken),typeof location<"u"&&location.hostname&&u_.test(location.hostname)&&(r[l_]=c_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fr.forceAllow_=!0}static forceDisallow(){Fr.forceDisallow_=!0}static isAvailable(){return Fr.forceAllow_?!0:!Fr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rT()&&!iT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=he(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Jy(n),i=i_(r,kT);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[CT]="t",r[y_]=e,r[__]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=he(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class nh{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=XI(),window[yT+this.uniqueCallbackIdentifier]=e,window[_T+this.uniqueCallbackIdentifier]=n,this.myIFrame=nh.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ne("frame writing exception"),a.stack&&Ne(a.stack),Ne(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ne("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[y_]=this.myID,e[__]=this.myPW,e[v_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+x_+r.length<=w_;){const o=this.pendingSegs.shift();r=r+"&"+wT+i+"="+o.seg+"&"+xT+i+"="+o.ts+"&"+ET+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(ST)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=16384,NT=45e3;let Sa=null;typeof MozWebSocket<"u"?Sa=MozWebSocket:typeof WebSocket<"u"&&(Sa=WebSocket);class dt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qs(this.connId),this.stats_=th(n),this.connURL=dt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[o_]=eh,typeof location<"u"&&location.hostname&&u_.test(location.hostname)&&(o[l_]=c_),n&&(o[a_]=n),r&&(o[d_]=r),i&&(o[ku]=i),s&&(o[h_]=s),g_(e,f_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xn.set("previous_websocket_failure",!0);try{let r;o0(),this.mySock=new Sa(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Sa!==null&&!dt.forceDisallow_}static previouslyFailed(){return Xn.isInMemoryStorage||Xn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Xn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Cs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=he(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=i_(n,TT);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(NT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dt.responsesRequiredToBeHealthy=2;dt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{static get ALL_TRANSPORTS(){return[Fr,dt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=dt&&dt.isAvailable();let r=n&&!dt.previouslyFailed();if(e.webSocketOnly&&(n||Ve("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[dt];else{const i=this.transports_=[];for(const s of Is.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Is.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Is.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT=6e4,RT=5e3,PT=10*1024,AT=100*1024,uc="t",Op="d",MT="s",jp="r",DT="e",Fp="o",Up="a",Wp="n",$p="p",LT="h";class OT{constructor(e,n,r,i,s,o,a,l,c,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qs("c:"+this.id+":"),this.transportManager_=new Is(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=es(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>AT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>PT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(uc in e){const n=e[uc];n===Up?this.upgradeIfSecondaryHealthy_():n===jp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Fp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ai("t",e),r=Ai("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:$p,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Up,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Wp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ai("t",e),r=Ai("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ai(uc,e);if(Op in e){const r=e[Op];if(n===LT){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Wp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===MT?this.onConnectionShutdown_(r):n===jp?this.onReset_(r):n===DT?Cu("Server Error: "+r):n===Fp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Cu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),eh!==r&&Ve("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),es(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(bT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):es(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(RT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:$p,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia extends C_{static getInstance(){return new Ia}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!$d()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=32,Vp=768;class q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new q("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function On(t){return t.pieces_.length-t.pieceNum_}function Y(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new q(t.pieces_,e)}function k_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function jT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function S_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function I_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new q(e,0)}function fe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof q)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new q(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function Ae(t,e){const n=F(t),r=F(e);if(n===null)return e;if(n===r)return Ae(Y(t),Y(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function rh(t,e){if(On(t)!==On(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ft(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(On(t)>On(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class FT{constructor(e,n){this.errorPrefix_=n,this.parts_=S_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ol(this.parts_[r]);T_(this)}}function UT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ol(e),T_(t)}function WT(t){const e=t.parts_.pop();t.byteLength_-=ol(e),t.parts_.length>0&&(t.byteLength_-=1)}function T_(t){if(t.byteLength_>Vp)throw new Error(t.errorPrefix_+"has a key path longer than "+Vp+" bytes ("+t.byteLength_+").");if(t.parts_.length>zp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+zp+") or object contains a cycle "+qn(t))}function qn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih extends C_{static getInstance(){return new ih}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=1e3,$T=60*5*1e3,Bp=30*1e3,zT=1.3,VT=3e4,BT="server_kill",Hp=3;class Kt extends E_{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Kt.nextPersistentConnectionId_++,this.log_=qs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Mi,this.maxReconnectDelay_=$T,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!o0())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ih.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ia.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(he(s)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new sl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Kt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&sn(e,"w")){const r=ii(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ve(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||dC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Bp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=uC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+he(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Cu("Unrecognized action received from server: "+he(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Mi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Mi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>VT&&(this.reconnectDelay_=Mi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*zT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Kt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Ne("getToken() completed but was canceled"):(Ne("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new OT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{Ve(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(BT)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Ve(d),l())}}}interrupt(e){Ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],pu(this.interruptReasons_)&&(this.reconnectDelay_=Mi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Zd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new q(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ne("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Hp&&(this.reconnectDelay_=Bp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ne("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Hp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+e_.replace(/\./g,"-")]=1,$d()?e["framework.cordova"]=1:s0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ia.getInstance().currentlyOnline();return pu(this.interruptReasons_)&&e}}Kt.nextPersistentConnectionId_=0;Kt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new U(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new U(oi,e),i=new U(oi,n);return this.compare(r,i)!==0}minPost(){return U.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eo;class N_ extends dl{static get __EMPTY_NODE(){return Eo}static set __EMPTY_NODE(e){Eo=e}compare(e,n){return wi(e.name,n.name)}isDefinedOn(e){throw mi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(ur,Eo)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,Eo)}toString(){return".key"}}const Yr=new N_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??_e.RED,this.left=i??Ue.EMPTY_NODE,this.right=s??Ue.EMPTY_NODE}copy(e,n,r,i,s){return new _e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ue.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_e.RED=!0;_e.BLACK=!1;class HT{copy(e,n,r,i,s){return this}insert(e,n,r){return new _e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ue{constructor(e,n=Ue.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ue(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,_e.BLACK,null,null))}remove(e){return new Ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_e.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Co(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Co(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Co(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Co(this.root_,null,this.comparator_,!0,e)}}Ue.EMPTY_NODE=new HT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(t,e){return wi(t.name,e.name)}function sh(t,e){return wi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Su;function KT(t){Su=t}const b_=function(t){return typeof t=="number"?"number:"+s_(t):"string:"+t},R_=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&sn(e,".sv"),"Priority must be a string or number.")}else S(t===Su||t.isEmpty(),"priority of unexpected type.");S(t===Su||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gp;class ge{static set __childrenNodeConstructor(e){Gp=e}static get __childrenNodeConstructor(){return Gp}constructor(e,n=ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),R_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:F(e)===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=F(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||On(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(Y(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+b_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=s_(this.value_):e+=this.value_,this.lazyHash_=n_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ge.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ge.VALUE_TYPE_ORDER.indexOf(n),s=ge.VALUE_TYPE_ORDER.indexOf(r);return S(i>=0,"Unknown leaf type: "+n),S(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P_,A_;function qT(t){P_=t}function YT(t){A_=t}class QT extends dl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?wi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(ur,new ge("[PRIORITY-POST]",A_))}makePost(e,n){const r=P_(e);return new U(n,new ge("[PRIORITY-POST]",r))}toString(){return".priority"}}const oe=new QT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT=Math.log(2);class XT{constructor(e){const n=s=>parseInt(Math.log(s)/JT,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ta=function(t,e,n,r){t.sort(e);const i=function(l,c){const f=c-l;let d,h;if(f===0)return null;if(f===1)return d=t[l],h=n?n(d):d,new _e(h,d.node,_e.BLACK,null,null);{const m=parseInt(f/2,10)+l,_=i(l,m),v=i(m+1,c);return d=t[m],h=n?n(d):d,new _e(h,d.node,_e.BLACK,_,v)}},s=function(l){let c=null,f=null,d=t.length;const h=function(_,v){const E=d-_,g=d;d-=_;const p=i(E+1,g),y=t[E],x=n?n(y):y;m(new _e(x,y.node,v,null,p))},m=function(_){c?(c.left=_,c=_):(f=_,c=_)};for(let _=0;_<l.count;++_){const v=l.nextBitIsOne(),E=Math.pow(2,l.count-(_+1));v?h(E,_e.BLACK):(h(E,_e.BLACK),h(E,_e.RED))}return f},o=new XT(t.length),a=s(o);return new Ue(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dc;const Er={};class Vt{static get Default(){return S(Er&&oe,"ChildrenNode.ts has not been loaded"),dc=dc||new Vt({".priority":Er},{".priority":oe}),dc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ii(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ue?n:null}hasIndex(e){return sn(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Yr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(U.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Ta(r,e.getCompare()):a=Er;const l=e.toString(),c={...this.indexSet_};c[l]=e;const f={...this.indexes_};return f[l]=a,new Vt(f,c)}addToIndexes(e,n){const r=ga(this.indexes_,(i,s)=>{const o=ii(this.indexSet_,s);if(S(o,"Missing index implementation for "+s),i===Er)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(U.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ta(a,o.getCompare())}else return Er;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new U(e.name,a))),l.insert(e,e.node)}});return new Vt(r,this.indexSet_)}removeFromIndexes(e,n){const r=ga(this.indexes_,i=>{if(i===Er)return i;{const s=n.get(e.name);return s?i.remove(new U(e.name,s)):i}});return new Vt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di;class M{static get EMPTY_NODE(){return Di||(Di=new M(new Ue(sh),null,Vt.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&R_(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Di}updatePriority(e){return this.children_.isEmpty()?this:new M(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Di:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(Y(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new U(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Di:this.priorityNode_;return new M(i,o,s)}}updateChild(e,n){const r=F(e);if(r===null)return n;{S(F(e)!==".priority"||On(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Y(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(oe,(o,a)=>{n[o]=a.val(e),r++,s&&M.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+b_(this.getPriority().val())+":"),this.forEachChild(oe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":n_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new U(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ys?-1:0}withIndex(e){if(e===Yr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new M(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Yr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(oe),i=n.getIterator(oe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Yr?null:this.indexMap_.get(e.toString())}}M.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ZT extends M{constructor(){super(new Ue(sh),M.EMPTY_NODE,Vt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return M.EMPTY_NODE}isEmpty(){return!1}}const Ys=new ZT;Object.defineProperties(U,{MIN:{value:new U(oi,M.EMPTY_NODE)},MAX:{value:new U(ur,Ys)}});N_.__EMPTY_NODE=M.EMPTY_NODE;ge.__childrenNodeConstructor=M;KT(Ys);YT(Ys);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=!0;function ve(t,e=null){if(t===null)return M.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ge(n,ve(e))}if(!(t instanceof Array)&&eN){const n=[];let r=!1;if(He(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ve(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new U(o,l)))}}),n.length===0)return M.EMPTY_NODE;const s=Ta(n,GT,o=>o.name,sh);if(r){const o=Ta(n,oe.getCompare());return new M(s,ve(e),new Vt({".priority":o},{".priority":oe}))}else return new M(s,ve(e),Vt.Default)}else{let n=M.EMPTY_NODE;return He(t,(r,i)=>{if(sn(t,r)&&r.substring(0,1)!=="."){const s=ve(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ve(e))}}qT(ve);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN extends dl{constructor(e){super(),this.indexPath_=e,S(!W(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?wi(e.name,n.name):s}makePost(e,n){const r=ve(e),i=M.EMPTY_NODE.updateChild(this.indexPath_,r);return new U(n,i)}maxPost(){const e=M.EMPTY_NODE.updateChild(this.indexPath_,Ys);return new U(ur,e)}toString(){return S_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN extends dl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?wi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const r=ve(e);return new U(n,r)}toString(){return".value"}}const rN=new nN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(t){return{type:"value",snapshotNode:t}}function ai(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ts(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ns(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function iN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ts(n,a)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ai(n,r)):o.trackChildChange(Ns(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(oe,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ts(i,s))}),n.isLeafNode()||n.forEachChild(oe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ns(i,s,o))}else r.trackChildChange(ai(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?M.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.indexedFilter_=new oh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=bs.getStartPost_(e),this.endPost_=bs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new U(n,r))||(r=M.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=M.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(M.EMPTY_NODE);const s=this;return n.forEachChild(oe,(o,a)=>{s.matches(new U(o,a))||(i=i.updateImmediateChild(o,M.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new bs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new U(n,r))||(r=M.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=M.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=M.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(M.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,M.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,m)=>d(m,h)}else o=this.index_.getCompare();const a=e;S(a.numChildren()===this.limit_,"");const l=new U(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),f=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,l);if(f&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(Ns(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ts(n,d));const v=a.updateImmediateChild(n,M.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(ai(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:f&&o(c,l)>=0?(s!=null&&(s.trackChildChange(Ts(c.name,c.node)),s.trackChildChange(ai(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,M.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:oi}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ur}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oe}copy(){const e=new ah;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function oN(t){return t.loadsAllData()?new oh(t.getIndex()):t.hasLimit()?new sN(t):new bs(t)}function Kp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===oe?n="$priority":t.index_===rN?n="$value":t.index_===Yr?n="$key":(S(t.index_ instanceof tN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=he(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=he(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+he(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=he(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+he(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function qp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==oe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na extends E_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=qs("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Na.getListenId_(e,r),a={};this.listens_[o]=a;const l=Kp(e._queryParams);this.restRequest_(s+".json",l,(c,f)=>{let d=f;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),ii(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=Na.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Kp(e._queryParams),r=e._path.toString(),i=new sl;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+yi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Cs(a.responseText)}catch{Ve("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Ve("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(){this.rootNode_=M.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(){return{value:null,children:new Map}}function D_(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=F(e);t.children.has(r)||t.children.set(r,ba());const i=t.children.get(r);e=Y(e),D_(i,e,n)}}function Iu(t,e,n){t.value!==null?n(e,t.value):lN(t,(r,i)=>{const s=new q(e.toString()+"/"+r);Iu(i,s,n)})}function lN(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&He(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp=10*1e3,uN=30*1e3,dN=5*60*1e3;class hN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new cN(e);const r=Yp+(uN-Yp)*Math.random();es(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;He(e,(i,s)=>{s>0&&sn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),es(this.reportStats_.bind(this),Math.floor(Math.random()*2*dN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pt||(pt={}));function L_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function lh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ch(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=pt.ACK_USER_WRITE,this.source=L_()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new q(e));return new Ra(V(),n,this.revert)}}else return S(F(this.path)===e,"operationForChild called for unrelated child."),new Ra(Y(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n){this.source=e,this.path=n,this.type=pt.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new Rs(this.source,V()):new Rs(this.source,Y(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=pt.OVERWRITE}operationForChild(e){return W(this.path)?new dr(this.source,V(),this.snap.getImmediateChild(e)):new dr(this.source,Y(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=pt.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new q(e));return n.isEmpty()?null:n.value?new dr(this.source,V(),n.value):new Ps(this.source,V(),n)}else return S(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ps(this.source,Y(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function pN(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(iN(o.childName,o.snapshotNode))}),Li(t,i,"child_removed",e,r,n),Li(t,i,"child_added",e,r,n),Li(t,i,"child_moved",s,r,n),Li(t,i,"child_changed",e,r,n),Li(t,i,"value",e,r,n),i}function Li(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>gN(t,a,l)),o.forEach(a=>{const l=mN(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function mN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function gN(t,e,n){if(e.childName==null||n.childName==null)throw mi("Should only compare child_ events.");const r=new U(e.childName,e.snapshotNode),i=new U(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(t,e){return{eventCache:t,serverCache:e}}function ts(t,e,n,r){return hl(new jn(e,n,r),t.serverCache)}function O_(t,e,n,r){return hl(t.eventCache,new jn(e,n,r))}function Pa(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function hr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hc;const yN=()=>(hc||(hc=new Ue(nT)),hc);class X{static fromObject(e){let n=new X(null);return He(e,(r,i)=>{n=n.set(new q(r),i)}),n}constructor(e,n=yN()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(W(e))return null;{const r=F(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Y(e),n);return s!=null?{path:fe(new q(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=F(e),r=this.children.get(n);return r!==null?r.subtree(Y(e)):new X(null)}}set(e,n){if(W(e))return new X(n,this.children);{const r=F(e),s=(this.children.get(r)||new X(null)).set(Y(e),n),o=this.children.insert(r,s);return new X(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new X(null):new X(null,this.children);{const n=F(e),r=this.children.get(n);if(r){const i=r.remove(Y(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new X(null):new X(this.value,s)}else return this}}get(e){if(W(e))return this.value;{const n=F(e),r=this.children.get(n);return r?r.get(Y(e)):null}}setTree(e,n){if(W(e))return n;{const r=F(e),s=(this.children.get(r)||new X(null)).setTree(Y(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new X(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(fe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(W(e))return null;{const s=F(e),o=this.children.get(s);return o?o.findOnPath_(Y(e),fe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,r){if(W(e))return this;{this.value&&r(n,this.value);const i=F(e),s=this.children.get(i);return s?s.foreachOnPath_(Y(e),fe(n,i),r):new X(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(fe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.writeTree_=e}static empty(){return new yt(new X(null))}}function ns(t,e,n){if(W(e))return new yt(new X(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ae(i,e);return s=s.updateChild(o,n),new yt(t.writeTree_.set(i,s))}else{const i=new X(n),s=t.writeTree_.setTree(e,i);return new yt(s)}}}function Qp(t,e,n){let r=t;return He(n,(i,s)=>{r=ns(r,fe(e,i),s)}),r}function Jp(t,e){if(W(e))return yt.empty();{const n=t.writeTree_.setTree(e,new X(null));return new yt(n)}}function Tu(t,e){return wr(t,e)!=null}function wr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ae(n.path,e)):null}function Xp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(oe,(r,i)=>{e.push(new U(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new U(r,i.value))}),e}function bn(t,e){if(W(e))return t;{const n=wr(t,e);return n!=null?new yt(new X(n)):new yt(t.writeTree_.subtree(e))}}function Nu(t){return t.writeTree_.isEmpty()}function li(t,e){return j_(V(),t.writeTree_,e)}function j_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(S(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=j_(fe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(fe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(t,e){return $_(e,t)}function _N(t,e,n,r,i){S(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ns(t.visibleWrites,e,n)),t.lastWriteId=r}function vN(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function wN(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&xN(a,r.path)?i=!1:ft(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return EN(t),!0;if(r.snap)t.visibleWrites=Jp(t.visibleWrites,r.path);else{const a=r.children;He(a,l=>{t.visibleWrites=Jp(t.visibleWrites,fe(r.path,l))})}return!0}else return!1}function xN(t,e){if(t.snap)return ft(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ft(fe(t.path,n),e))return!0;return!1}function EN(t){t.visibleWrites=F_(t.allWrites,CN,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function CN(t){return t.visible}function F_(t,e,n){let r=yt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)ft(n,o)?(a=Ae(n,o),r=ns(r,a,s.snap)):ft(o,n)&&(a=Ae(o,n),r=ns(r,V(),s.snap.getChild(a)));else if(s.children){if(ft(n,o))a=Ae(n,o),r=Qp(r,a,s.children);else if(ft(o,n))if(a=Ae(o,n),W(a))r=Qp(r,V(),s.children);else{const l=ii(s.children,F(a));if(l){const c=l.getChild(Y(a));r=ns(r,V(),c)}}}else throw mi("WriteRecord should have .snap or .children")}}return r}function U_(t,e,n,r,i){if(!r&&!i){const s=wr(t.visibleWrites,e);if(s!=null)return s;{const o=bn(t.visibleWrites,e);if(Nu(o))return n;if(n==null&&!Tu(o,V()))return null;{const a=n||M.EMPTY_NODE;return li(o,a)}}}else{const s=bn(t.visibleWrites,e);if(!i&&Nu(s))return n;if(!i&&n==null&&!Tu(s,V()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(ft(c.path,e)||ft(e,c.path))},a=F_(t.allWrites,o,e),l=n||M.EMPTY_NODE;return li(a,l)}}}function kN(t,e,n){let r=M.EMPTY_NODE;const i=wr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(oe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=bn(t.visibleWrites,e);return n.forEachChild(oe,(o,a)=>{const l=li(bn(s,new q(o)),a);r=r.updateImmediateChild(o,l)}),Xp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=bn(t.visibleWrites,e);return Xp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function SN(t,e,n,r,i){S(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=fe(e,n);if(Tu(t.visibleWrites,s))return null;{const o=bn(t.visibleWrites,s);return Nu(o)?i.getChild(n):li(o,i.getChild(n))}}function IN(t,e,n,r){const i=fe(e,n),s=wr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=bn(t.visibleWrites,i);return li(o,r.getNode().getImmediateChild(n))}else return null}function TN(t,e){return wr(t.visibleWrites,e)}function NN(t,e,n,r,i,s,o){let a;const l=bn(t.visibleWrites,e),c=wr(l,V());if(c!=null)a=c;else if(n!=null)a=li(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const f=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=h.getNext();for(;m&&f.length<i;)d(m,r)!==0&&f.push(m),m=h.getNext();return f}else return[]}function bN(){return{visibleWrites:yt.empty(),allWrites:[],lastWriteId:-1}}function Aa(t,e,n,r){return U_(t.writeTree,t.treePath,e,n,r)}function uh(t,e){return kN(t.writeTree,t.treePath,e)}function Zp(t,e,n,r){return SN(t.writeTree,t.treePath,e,n,r)}function Ma(t,e){return TN(t.writeTree,fe(t.treePath,e))}function RN(t,e,n,r,i,s){return NN(t.writeTree,t.treePath,e,n,r,i,s)}function dh(t,e,n){return IN(t.writeTree,t.treePath,e,n)}function W_(t,e){return $_(fe(t.treePath,e),t.writeTree)}function $_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ns(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ts(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ai(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ns(r,e.snapshotNode,i.oldSnap));else throw mi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const z_=new AN;class hh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new jn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return dh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hr(this.viewCache_),s=RN(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(t){return{filter:t}}function DN(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function LN(t,e,n,r,i){const s=new PN;let o,a;if(n.type===pt.OVERWRITE){const c=n;c.source.fromUser?o=bu(t,e,c.path,c.snap,r,i,s):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!W(c.path),o=Da(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===pt.MERGE){const c=n;c.source.fromUser?o=jN(t,e,c.path,c.children,r,i,s):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ru(t,e,c.path,c.children,r,i,a,s))}else if(n.type===pt.ACK_USER_WRITE){const c=n;c.revert?o=WN(t,e,c.path,r,i,s):o=FN(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===pt.LISTEN_COMPLETE)o=UN(t,e,n.path,r,s);else throw mi("Unknown operation type: "+n.type);const l=s.getChanges();return ON(e,o,l),{viewCache:o,changes:l}}function ON(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Pa(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(M_(Pa(e)))}}function V_(t,e,n,r,i,s){const o=e.eventCache;if(Ma(r,n)!=null)return e;{let a,l;if(W(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=hr(e),f=c instanceof M?c:M.EMPTY_NODE,d=uh(r,f);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Aa(r,hr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=F(n);if(c===".priority"){S(On(n)===1,"Can't have a priority with additional path components");const f=o.getNode();l=e.serverCache.getNode();const d=Zp(r,n,f,l);d!=null?a=t.filter.updatePriority(f,d):a=o.getNode()}else{const f=Y(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Zp(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(f,h):d=o.getNode().getImmediateChild(c)}else d=dh(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,f,i,s):a=o.getNode()}}return ts(e,a,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function Da(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const f=o?t.filter:t.filter.getIndexedFilter();if(W(n))c=f.updateFullNode(l.getNode(),r,null);else if(f.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);c=f.updateFullNode(l.getNode(),m,null)}else{const m=F(n);if(!l.isCompleteForPath(n)&&On(n)>1)return e;const _=Y(n),E=l.getNode().getImmediateChild(m).updateChild(_,r);m===".priority"?c=f.updatePriority(l.getNode(),E):c=f.updateChild(l.getNode(),m,E,_,z_,null)}const d=O_(e,c,l.isFullyInitialized()||W(n),f.filtersNodes()),h=new hh(i,d,s);return V_(t,d,n,i,h,a)}function bu(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const f=new hh(i,e,s);if(W(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=ts(e,c,!0,t.filter.filtersNodes());else{const d=F(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=ts(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=Y(n),m=a.getNode().getImmediateChild(d);let _;if(W(h))_=r;else{const v=f.getCompleteChild(d);v!=null?k_(h)===".priority"&&v.getChild(I_(h)).isEmpty()?_=v:_=v.updateChild(h,r):_=M.EMPTY_NODE}if(m.equals(_))l=e;else{const v=t.filter.updateChild(a.getNode(),d,_,h,f,o);l=ts(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function em(t,e){return t.eventCache.isCompleteForChild(e)}function jN(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const f=fe(n,l);em(e,F(f))&&(a=bu(t,a,f,c,i,s,o))}),r.foreach((l,c)=>{const f=fe(n,l);em(e,F(f))||(a=bu(t,a,f,c,i,s,o))}),a}function tm(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Ru(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;W(n)?c=r:c=new X(null).setTree(n,r);const f=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(f.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),_=tm(t,m,h);l=Da(t,l,new q(d),_,i,s,o,a)}}),c.children.inorderTraversal((d,h)=>{const m=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!f.hasChild(d)&&!m){const _=e.serverCache.getNode().getImmediateChild(d),v=tm(t,_,h);l=Da(t,l,new q(d),v,i,s,o,a)}}),l}function FN(t,e,n,r,i,s,o){if(Ma(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(W(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Da(t,e,n,l.getNode().getChild(n),i,s,a,o);if(W(n)){let c=new X(null);return l.getNode().forEachChild(Yr,(f,d)=>{c=c.set(new q(f),d)}),Ru(t,e,n,c,i,s,a,o)}else return e}else{let c=new X(null);return r.foreach((f,d)=>{const h=fe(n,f);l.isCompleteForPath(h)&&(c=c.set(f,l.getNode().getChild(h)))}),Ru(t,e,n,c,i,s,a,o)}}function UN(t,e,n,r,i){const s=e.serverCache,o=O_(e,s.getNode(),s.isFullyInitialized()||W(n),s.isFiltered());return V_(t,o,n,r,z_,i)}function WN(t,e,n,r,i,s){let o;if(Ma(r,n)!=null)return e;{const a=new hh(r,e,i),l=e.eventCache.getNode();let c;if(W(n)||F(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Aa(r,hr(e));else{const d=e.serverCache.getNode();S(d instanceof M,"serverChildren would be complete if leaf node"),f=uh(r,d)}f=f,c=t.filter.updateFullNode(l,f,s)}else{const f=F(n);let d=dh(r,f,e.serverCache);d==null&&e.serverCache.isCompleteForChild(f)&&(d=l.getImmediateChild(f)),d!=null?c=t.filter.updateChild(l,f,d,Y(n),a,s):e.eventCache.getNode().hasChild(f)?c=t.filter.updateChild(l,f,M.EMPTY_NODE,Y(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Aa(r,hr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Ma(r,V())!=null,ts(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new oh(r.getIndex()),s=oN(r);this.processor_=MN(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(M.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(M.EMPTY_NODE,a.getNode(),null),f=new jn(l,o.isFullyInitialized(),i.filtersNodes()),d=new jn(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=hl(d,f),this.eventGenerator_=new fN(this.query_)}get query(){return this.query_}}function zN(t){return t.viewCache_.serverCache.getNode()}function VN(t){return Pa(t.viewCache_)}function BN(t,e){const n=hr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function nm(t){return t.eventRegistrations_.length===0}function HN(t,e){t.eventRegistrations_.push(e)}function rm(t,e,n){const r=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function im(t,e,n,r){e.type===pt.MERGE&&e.source.queryId!==null&&(S(hr(t.viewCache_),"We should always have a full cache before handling merges"),S(Pa(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=LN(t.processor_,i,e,n,r);return DN(t.processor_,s.viewCache),S(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,B_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function GN(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(oe,(s,o)=>{r.push(ai(s,o))}),n.isFullyInitialized()&&r.push(M_(n.getNode())),B_(t,r,n.getNode(),e)}function B_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return pN(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let La;class H_{constructor(){this.views=new Map}}function KN(t){S(!La,"__referenceConstructor has already been defined"),La=t}function qN(){return S(La,"Reference.ts has not been loaded"),La}function YN(t){return t.views.size===0}function fh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return S(s!=null,"SyncTree gave us an op for an invalid query."),im(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(im(o,e,n,r));return s}}function G_(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Aa(n,i?r:null),l=!1;a?l=!0:r instanceof M?(a=uh(n,r),l=!1):(a=M.EMPTY_NODE,l=!1);const c=hl(new jn(a,l,!1),new jn(r,i,!1));return new $N(e,c)}return o}function QN(t,e,n,r,i,s){const o=G_(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),HN(o,n),GN(o,n)}function JN(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Fn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(rm(c,n,r)),nm(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(rm(l,n,r)),nm(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Fn(t)&&s.push(new(qN())(e._repo,e._path)),{removed:s,events:o}}function K_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Rn(t,e){let n=null;for(const r of t.views.values())n=n||BN(r,e);return n}function q_(t,e){if(e._queryParams.loadsAllData())return pl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Y_(t,e){return q_(t,e)!=null}function Fn(t){return pl(t)!=null}function pl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oa;function XN(t){S(!Oa,"__referenceConstructor has already been defined"),Oa=t}function ZN(){return S(Oa,"Reference.ts has not been loaded"),Oa}let eb=1;class sm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new X(null),this.pendingWriteTree_=bN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Q_(t,e,n,r,i){return _N(t.pendingWriteTree_,e,n,r,i),i?Js(t,new dr(L_(),e,n)):[]}function Zn(t,e,n=!1){const r=vN(t.pendingWriteTree_,e);if(wN(t.pendingWriteTree_,e)){let s=new X(null);return r.snap!=null?s=s.set(V(),!0):He(r.children,o=>{s=s.set(new q(o),!0)}),Js(t,new Ra(r.path,s,n))}else return[]}function Qs(t,e,n){return Js(t,new dr(lh(),e,n))}function tb(t,e,n){const r=X.fromObject(n);return Js(t,new Ps(lh(),e,r))}function nb(t,e){return Js(t,new Rs(lh(),e))}function rb(t,e,n){const r=mh(t,n);if(r){const i=gh(r),s=i.path,o=i.queryId,a=Ae(s,e),l=new Rs(ch(o),a);return yh(t,s,l)}else return[]}function ja(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Y_(o,e))){const l=JN(o,e,n,r);YN(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const f=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,m)=>Fn(m));if(f&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const m=ob(h);for(let _=0;_<m.length;++_){const v=m[_],E=v.query,g=ev(t,v);t.listenProvider_.startListening(rs(E),As(t,E),g.hashFn,g.onComplete)}}}!d&&c.length>0&&!r&&(f?t.listenProvider_.stopListening(rs(e),null):c.forEach(h=>{const m=t.queryToTagMap.get(ml(h));t.listenProvider_.stopListening(rs(h),m)}))}ab(t,c)}return a}function J_(t,e,n,r){const i=mh(t,r);if(i!=null){const s=gh(i),o=s.path,a=s.queryId,l=Ae(o,e),c=new dr(ch(a),l,n);return yh(t,o,c)}else return[]}function ib(t,e,n,r){const i=mh(t,r);if(i){const s=gh(i),o=s.path,a=s.queryId,l=Ae(o,e),c=X.fromObject(n),f=new Ps(ch(a),l,c);return yh(t,o,f)}else return[]}function Pu(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,m)=>{const _=Ae(h,i);s=s||Rn(m,_),o=o||Fn(m)});let a=t.syncPointTree_.get(i);a?(o=o||Fn(a),s=s||Rn(a,V())):(a=new H_,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=M.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,_)=>{const v=Rn(_,V());v&&(s=s.updateImmediateChild(m,v))}));const c=Y_(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=ml(e);S(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=lb();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const f=fl(t.pendingWriteTree_,i);let d=QN(a,e,n,f,s,l);if(!c&&!o&&!r){const h=q_(a,e);d=d.concat(cb(t,e,h))}return d}function ph(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ae(o,e),c=Rn(a,l);if(c)return c});return U_(i,e,s,n,!0)}function sb(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,f)=>{const d=Ae(c,n);r=r||Rn(f,d)});let i=t.syncPointTree_.get(n);i?r=r||Rn(i,V()):(i=new H_,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new jn(r,!0,!1):null,a=fl(t.pendingWriteTree_,e._path),l=G_(i,e,a,s?o.getNode():M.EMPTY_NODE,s);return VN(l)}function Js(t,e){return X_(e,t.syncPointTree_,null,fl(t.pendingWriteTree_,V()))}function X_(t,e,n,r){if(W(t.path))return Z_(t,e,n,r);{const i=e.get(V());n==null&&i!=null&&(n=Rn(i,V()));let s=[];const o=F(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,f=W_(r,o);s=s.concat(X_(a,l,c,f))}return i&&(s=s.concat(fh(i,t,r,n))),s}}function Z_(t,e,n,r){const i=e.get(V());n==null&&i!=null&&(n=Rn(i,V()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=W_(r,o),f=t.operationForChild(o);f&&(s=s.concat(Z_(f,a,l,c)))}),i&&(s=s.concat(fh(i,t,r,n))),s}function ev(t,e){const n=e.query,r=As(t,n);return{hashFn:()=>(zN(e)||M.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?rb(t,n._path,r):nb(t,n._path);{const s=sT(i,n);return ja(t,n,null,s)}}}}function As(t,e){const n=ml(e);return t.queryToTagMap.get(n)}function ml(t){return t._path.toString()+"$"+t._queryIdentifier}function mh(t,e){return t.tagToQueryMap.get(e)}function gh(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new q(t.substr(0,e))}}function yh(t,e,n){const r=t.syncPointTree_.get(e);S(r,"Missing sync point for query tag that we're tracking");const i=fl(t.pendingWriteTree_,e);return fh(r,n,i,null)}function ob(t){return t.fold((e,n,r)=>{if(n&&Fn(n))return[pl(n)];{let i=[];return n&&(i=K_(n)),He(r,(s,o)=>{i=i.concat(o)}),i}})}function rs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(ZN())(t._repo,t._path):t}function ab(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=ml(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function lb(){return eb++}function cb(t,e,n){const r=e._path,i=As(t,e),s=ev(t,n),o=t.listenProvider_.startListening(rs(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)S(!Fn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,f,d)=>{if(!W(c)&&f&&Fn(f))return[pl(f).query];{let h=[];return f&&(h=h.concat(K_(f).map(m=>m.query))),He(d,(m,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const f=l[c];t.listenProvider_.stopListening(rs(f),As(t,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new _h(n)}node(){return this.node_}}class vh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=fe(this.path_,e);return new vh(this.syncTree_,n)}node(){return ph(this.syncTree_,this.path_)}}const ub=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},om=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return db(t[".sv"],e,n);if(typeof t[".sv"]=="object")return hb(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},db=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},hb=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},fb=function(t,e,n,r){return wh(e,new vh(n,t),r)},tv=function(t,e,n){return wh(t,new _h(e),n)};function wh(t,e,n){const r=t.getPriority().val(),i=om(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=om(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ge(a,ve(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ge(i))),o.forEachChild(oe,(a,l)=>{const c=wh(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Eh(t,e){let n=e instanceof q?e:new q(e),r=t,i=F(n);for(;i!==null;){const s=ii(r.node.children,i)||{children:{},childCount:0};r=new xh(i,r,s),n=Y(n),i=F(n)}return r}function Ei(t){return t.node.value}function nv(t,e){t.node.value=e,Au(t)}function rv(t){return t.node.childCount>0}function pb(t){return Ei(t)===void 0&&!rv(t)}function gl(t,e){He(t.node.children,(n,r)=>{e(new xh(n,t,r))})}function iv(t,e,n,r){n&&!r&&e(t),gl(t,i=>{iv(i,e,!0,r)}),n&&r&&e(t)}function mb(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Xs(t){return new q(t.parent===null?t.name:Xs(t.parent)+"/"+t.name)}function Au(t){t.parent!==null&&gb(t.parent,t.name,t)}function gb(t,e,n){const r=pb(n),i=sn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Au(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Au(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=/[\[\].#$\/\u0000-\u001F\u007F]/,_b=/[\[\].#$\u0000-\u001F\u007F]/,fc=10*1024*1024,sv=function(t){return typeof t=="string"&&t.length!==0&&!yb.test(t)},ov=function(t){return typeof t=="string"&&t.length!==0&&!_b.test(t)},vb=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ov(t)},wb=function(t,e,n,r){Ch(zd(t,"value"),e,n)},Ch=function(t,e,n){const r=n instanceof q?new FT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+qn(r));if(typeof e=="function")throw new Error(t+"contains a function "+qn(r)+" with contents = "+e.toString());if(r_(e))throw new Error(t+"contains "+e.toString()+" "+qn(r));if(typeof e=="string"&&e.length>fc/3&&ol(e)>fc)throw new Error(t+"contains a string greater than "+fc+" utf8 bytes "+qn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(He(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!sv(o)))throw new Error(t+" contains an invalid key ("+o+") "+qn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);UT(r,o),Ch(t,a,r),WT(r)}),i&&s)throw new Error(t+' contains ".value" child '+qn(r)+" in addition to actual children.")}},av=function(t,e,n,r){if(!ov(n))throw new Error(zd(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},xb=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),av(t,e,n)},Eb=function(t,e){if(F(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Cb=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!sv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!vb(n))throw new Error(zd(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function kh(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!rh(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function lv(t,e,n){kh(t,n),cv(t,r=>rh(r,e))}function Mt(t,e,n){kh(t,n),cv(t,r=>ft(r,e)||ft(e,r))}function cv(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Sb(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Sb(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Zi&&Ne("event: "+n.toString()),xi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib="repo_interrupt",Tb=25;class Nb{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new kb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ba(),this.transactionQueueTree_=new xh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function bb(t,e,n){if(t.stats_=th(t.repoInfo_),t.forceRestClient_||cT())t.server_=new Na(t.repoInfo_,(r,i,s,o)=>{am(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>lm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{he(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Kt(t.repoInfo_,e,(r,i,s,o)=>{am(t,r,i,s,o)},r=>{lm(t,r)},r=>{Pb(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=pT(t.repoInfo_,()=>new hN(t.stats_,t.server_)),t.infoData_=new aN,t.infoSyncTree_=new sm({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Qs(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ih(t,"connected",!1),t.serverSyncTree_=new sm({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Mt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Rb(t){const n=t.infoData_.getNode(new q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Sh(t){return ub({timestamp:Rb(t)})}function am(t,e,n,r,i){t.dataUpdateCount++;const s=new q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=ga(n,c=>ve(c));o=ib(t.serverSyncTree_,s,l,i)}else{const l=ve(n);o=J_(t.serverSyncTree_,s,l,i)}else if(r){const l=ga(n,c=>ve(c));o=tb(t.serverSyncTree_,s,l)}else{const l=ve(n);o=Qs(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=_l(t,s)),Mt(t.eventQueue_,a,o)}function lm(t,e){Ih(t,"connected",e),e===!1&&Db(t)}function Pb(t,e){He(e,(n,r)=>{Ih(t,n,r)})}function Ih(t,e,n){const r=new q("/.info/"+e),i=ve(n);t.infoData_.updateSnapshot(r,i);const s=Qs(t.infoSyncTree_,r,i);Mt(t.eventQueue_,r,s)}function uv(t){return t.nextWriteId_++}function Ab(t,e,n){const r=sb(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ve(i).withIndex(e._queryParams.getIndex());Pu(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Qs(t.serverSyncTree_,e._path,s);else{const a=As(t.serverSyncTree_,e);o=J_(t.serverSyncTree_,e._path,s,a)}return Mt(t.eventQueue_,e._path,o),ja(t.serverSyncTree_,e,n,null,!0),s},i=>(yl(t,"get for query "+he(e)+" failed: "+i),Promise.reject(new Error(i))))}function Mb(t,e,n,r,i){yl(t,"set",{path:e.toString(),value:n,priority:r});const s=Sh(t),o=ve(n,r),a=ph(t.serverSyncTree_,e),l=tv(o,a,s),c=uv(t),f=Q_(t.serverSyncTree_,e,l,c,!0);kh(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const _=h==="ok";_||Ve("set at "+e+" failed: "+h);const v=Zn(t.serverSyncTree_,c,!_);Mt(t.eventQueue_,e,v),jb(t,i,h,m)});const d=mv(t,e);_l(t,d),Mt(t.eventQueue_,d,[])}function Db(t){yl(t,"onDisconnectEvents");const e=Sh(t),n=ba();Iu(t.onDisconnect_,V(),(i,s)=>{const o=fb(i,s,t.serverSyncTree_,e);D_(n,i,o)});let r=[];Iu(n,V(),(i,s)=>{r=r.concat(Qs(t.serverSyncTree_,i,s));const o=mv(t,i);_l(t,o)}),t.onDisconnect_=ba(),Mt(t.eventQueue_,V(),r)}function Lb(t,e,n){let r;F(e._path)===".info"?r=Pu(t.infoSyncTree_,e,n):r=Pu(t.serverSyncTree_,e,n),lv(t.eventQueue_,e._path,r)}function Mu(t,e,n){let r;F(e._path)===".info"?r=ja(t.infoSyncTree_,e,n):r=ja(t.serverSyncTree_,e,n),lv(t.eventQueue_,e._path,r)}function Ob(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Ib)}function yl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ne(n,...e)}function jb(t,e,n,r){e&&xi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function dv(t,e,n){return ph(t.serverSyncTree_,e,n)||M.EMPTY_NODE}function Th(t,e=t.transactionQueueTree_){if(e||vl(t,e),Ei(e)){const n=fv(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Fb(t,Xs(e),n)}else rv(e)&&gl(e,n=>{Th(t,n)})}function Fb(t,e,n){const r=n.map(c=>c.currentWriteId),i=dv(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const f=n[c];S(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const d=Ae(e,f.path);s=s.updateChild(d,f.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{yl(t,"transaction put response",{path:l.toString(),status:c});let f=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,f=f.concat(Zn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();vl(t,Eh(t.transactionQueueTree_,e)),Th(t,t.transactionQueueTree_),Mt(t.eventQueue_,e,f);for(let h=0;h<d.length;h++)xi(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Ve("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}_l(t,e)}},o)}function _l(t,e){const n=hv(t,e),r=Xs(n),i=fv(t,n);return Ub(t,i,r),r}function Ub(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ae(n,l.path);let f=!1,d;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)f=!0,d=l.abortReason,i=i.concat(Zn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Tb)f=!0,d="maxretry",i=i.concat(Zn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=dv(t,l.path,o);l.currentInputSnapshot=h;const m=e[a].update(h.val());if(m!==void 0){Ch("transaction failed: Data returned ",m,l.path);let _=ve(m);typeof m=="object"&&m!=null&&sn(m,".priority")||(_=_.updatePriority(h.getPriority()));const E=l.currentWriteId,g=Sh(t),p=tv(_,h,g);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=p,l.currentWriteId=uv(t),o.splice(o.indexOf(E),1),i=i.concat(Q_(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(Zn(t.serverSyncTree_,E,!0))}else f=!0,d="nodata",i=i.concat(Zn(t.serverSyncTree_,l.currentWriteId,!0))}Mt(t.eventQueue_,n,i),i=[],f&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}vl(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)xi(r[a]);Th(t,t.transactionQueueTree_)}function hv(t,e){let n,r=t.transactionQueueTree_;for(n=F(e);n!==null&&Ei(r)===void 0;)r=Eh(r,n),e=Y(e),n=F(e);return r}function fv(t,e){const n=[];return pv(t,e,n),n.sort((r,i)=>r.order-i.order),n}function pv(t,e,n){const r=Ei(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);gl(e,i=>{pv(t,i,n)})}function vl(t,e){const n=Ei(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,nv(e,n.length>0?n:void 0)}gl(e,r=>{vl(t,r)})}function mv(t,e){const n=Xs(hv(t,e)),r=Eh(t.transactionQueueTree_,e);return mb(r,i=>{pc(t,i)}),pc(t,r),iv(r,i=>{pc(t,i)}),n}function pc(t,e){const n=Ei(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Zn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?nv(e,void 0):n.length=s+1,Mt(t.eventQueue_,Xs(e),i);for(let o=0;o<r.length;o++)xi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wb(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function $b(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ve(`Invalid query segment '${n}' in query '${t}'`)}return e}const cm=function(t,e){const n=zb(t),r=n.namespace;n.domain==="firebase.com"&&tn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&tn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||eT();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new m_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new q(n.pathString)}},zb=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let f=t.indexOf("/");f===-1&&(f=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(f,d)),f<d&&(i=Wb(t.substring(f,d)));const h=$b(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+he(this.snapshot.exportVal())}}class Bb{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return W(this._path)?null:k_(this._path)}get ref(){return new on(this._repo,this._path)}get _queryIdentifier(){const e=qp(this._queryParams),n=Zd(e);return n==="{}"?"default":n}get _queryObject(){return qp(this._queryParams)}isEqual(e){if(e=ue(e),!(e instanceof bh))return!1;const n=this._repo===e._repo,r=rh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+jT(this._path)}}class on extends bh{constructor(e,n){super(e,n,new ah,!1)}get parent(){const e=I_(this._path);return e===null?null:new on(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ms{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new q(e),r=Ds(this.ref,e);return new Ms(this._node.getChild(n),r,oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ms(i,Ds(this.ref,r),oe)))}hasChild(e){const n=new q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Pn(t,e){return t=ue(t),t._checkNotDeleted("ref"),e!==void 0?Ds(t._root,e):t._root}function Ds(t,e){return t=ue(t),F(t._path)===null?xb("child","path",e):av("child","path",e),new on(t._repo,fe(t._path,e))}function Fa(t,e){t=ue(t),Eb("set",t._path),wb("set",e,t._path);const n=new sl;return Mb(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function gv(t){t=ue(t);const e=new Nh(()=>{}),n=new Zs(e);return Ab(t._repo,t,n).then(r=>new Ms(r,new on(t._repo,t._path),t._queryParams.getIndex()))}class Zs{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Vb("value",this,new Ms(e.snapshotNode,new on(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Bb(this,e,n):null}matches(e){return e instanceof Zs?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Hb(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(f,d)=>{Mu(t._repo,t,a),l(f,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Nh(n,s||void 0),a=new Zs(o);return Lb(t._repo,t,a),()=>Mu(t._repo,t,a)}function um(t,e,n,r){return Hb(t,"value",e,n,r)}function Gb(t,e,n){let r=null;const i=n?new Nh(n):null;r=new Zs(i),Mu(t._repo,t,r)}KN(on);XN(on);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb="FIREBASE_DATABASE_EMULATOR_HOST",Du={};let qb=!1;function Yb(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=gi(s);t.repoInfo_=new m_(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function Qb(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||tn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ne("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=cm(s,i),a=o.repoInfo,l;typeof process<"u"&&Rp&&(l=Rp[Kb]),l?(s=`http://${l}?ns=${a.namespace}`,o=cm(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new dT(t.name,t.options,e);Cb("Invalid Firebase Database URL",o),W(o.path)||tn("Database URL must point to the root of a Firebase Database (not including a child path).");const f=Xb(a,t,c,new uT(t,n));return new Zb(f,t)}function Jb(t,e){const n=Du[e];(!n||n[t.key]!==t)&&tn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Ob(t),delete n[t.key]}function Xb(t,e,n,r){let i=Du[e.name];i||(i={},Du[e.name]=i);let s=i[t.toURLString()];return s&&tn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Nb(t,qb,n,r),i[t.toURLString()]=s,s}class Zb{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(bb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new on(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Jb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&tn("Cannot call "+e+" on a deleted database.")}}function eR(t=Bd(),e){const n=_r(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=eC("database");r&&tR(n,...r)}return n}function tR(t,e,n,r={}){t=ue(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Ln(r,s.repoInfo_.emulatorOptions))return;tn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&tn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new zo(zo.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:tC(r.mockUserToken,t.app.options.projectId);o=new zo(a)}gi(e)&&(n0(e),r0("Database",!0)),Yb(s,i,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR(t){qI(_i),At(new wt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Qb(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),it(Pp,Ap,t),it(Pp,Ap,"esm2020")}Kt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Kt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};nR();const yv="@firebase/installations",Rh="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=1e4,vv=`w:${Rh}`,wv="FIS_v2",rR="https://firebaseinstallations.googleapis.com/v1",iR=60*60*1e3,sR="installations",oR="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fr=new yr(sR,oR,aR);function xv(t){return t instanceof Lt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev({projectId:t}){return`${rR}/projects/${t}/installations`}function Cv(t){return{token:t.token,requestStatus:2,expiresIn:cR(t.expiresIn),creationTime:Date.now()}}async function kv(t,e){const r=(await e.json()).error;return fr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Sv({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function lR(t,{refreshToken:e}){const n=Sv(t);return n.append("Authorization",uR(e)),n}async function Iv(t){const e=await t();return e.status>=500&&e.status<600?t():e}function cR(t){return Number(t.replace("s","000"))}function uR(t){return`${wv} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dR({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Ev(t),i=Sv(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:wv,appId:t.appId,sdkVersion:vv},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Iv(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Cv(c.authToken)}}else throw await kv("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=/^[cdef][\w-]{21}$/,Lu="";function pR(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=mR(t);return fR.test(n)?n:Lu}catch{return Lu}}function mR(t){return hR(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=new Map;function bv(t,e){const n=wl(t);Rv(n,e),gR(n,e)}function Rv(t,e){const n=Nv.get(t);if(n)for(const r of n)r(e)}function gR(t,e){const n=yR();n&&n.postMessage({key:t,fid:e}),_R()}let er=null;function yR(){return!er&&"BroadcastChannel"in self&&(er=new BroadcastChannel("[Firebase] FID Change"),er.onmessage=t=>{Rv(t.data.key,t.data.fid)}),er}function _R(){Nv.size===0&&er&&(er.close(),er=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR="firebase-installations-database",wR=1,pr="firebase-installations-store";let mc=null;function Ph(){return mc||(mc=h0(vR,wR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pr)}}})),mc}async function Ua(t,e){const n=wl(t),i=(await Ph()).transaction(pr,"readwrite"),s=i.objectStore(pr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&bv(t,e.fid),e}async function Pv(t){const e=wl(t),r=(await Ph()).transaction(pr,"readwrite");await r.objectStore(pr).delete(e),await r.done}async function xl(t,e){const n=wl(t),i=(await Ph()).transaction(pr,"readwrite"),s=i.objectStore(pr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&bv(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ah(t){let e;const n=await xl(t.appConfig,r=>{const i=xR(r),s=ER(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Lu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function xR(t){const e=t||{fid:pR(),registrationStatus:0};return Av(e)}function ER(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(fr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=CR(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:kR(t)}:{installationEntry:e}}async function CR(t,e){try{const n=await dR(t,e);return Ua(t.appConfig,n)}catch(n){throw xv(n)&&n.customData.serverCode===409?await Pv(t.appConfig):await Ua(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function kR(t){let e=await dm(t.appConfig);for(;e.registrationStatus===1;)await Tv(100),e=await dm(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ah(t);return r||n}return e}function dm(t){return xl(t,e=>{if(!e)throw fr.create("installation-not-found");return Av(e)})}function Av(t){return SR(t)?{fid:t.fid,registrationStatus:0}:t}function SR(t){return t.registrationStatus===1&&t.registrationTime+_v<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IR({appConfig:t,heartbeatServiceProvider:e},n){const r=TR(t,n),i=lR(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:vv,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Iv(()=>fetch(r,a));if(l.ok){const c=await l.json();return Cv(c)}else throw await kv("Generate Auth Token",l)}function TR(t,{fid:e}){return`${Ev(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mh(t,e=!1){let n;const r=await xl(t.appConfig,s=>{if(!Mv(s))throw fr.create("not-registered");const o=s.authToken;if(!e&&RR(o))return s;if(o.requestStatus===1)return n=NR(t,e),s;{if(!navigator.onLine)throw fr.create("app-offline");const a=AR(s);return n=bR(t,a),a}});return n?await n:r.authToken}async function NR(t,e){let n=await hm(t.appConfig);for(;n.authToken.requestStatus===1;)await Tv(100),n=await hm(t.appConfig);const r=n.authToken;return r.requestStatus===0?Mh(t,e):r}function hm(t){return xl(t,e=>{if(!Mv(e))throw fr.create("not-registered");const n=e.authToken;return MR(n)?{...e,authToken:{requestStatus:0}}:e})}async function bR(t,e){try{const n=await IR(t,e),r={...e,authToken:n};return await Ua(t.appConfig,r),n}catch(n){if(xv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Pv(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Ua(t.appConfig,r)}throw n}}function Mv(t){return t!==void 0&&t.registrationStatus===2}function RR(t){return t.requestStatus===2&&!PR(t)}function PR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+iR}function AR(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function MR(t){return t.requestStatus===1&&t.requestTime+_v<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DR(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ah(e);return r?r.catch(console.error):Mh(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LR(t,e=!1){const n=t;return await OR(n),(await Mh(n,e)).token}async function OR(t){const{registrationPromise:e}=await Ah(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(t){if(!t||!t.options)throw gc("App Configuration");if(!t.name)throw gc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw gc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function gc(t){return fr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv="installations",FR="installations-internal",UR=t=>{const e=t.getProvider("app").getImmediate(),n=jR(e),r=_r(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},WR=t=>{const e=t.getProvider("app").getImmediate(),n=_r(e,Dv).getImmediate();return{getId:()=>DR(n),getToken:i=>LR(n,i)}};function $R(){At(new wt(Dv,UR,"PUBLIC")),At(new wt(FR,WR,"PRIVATE"))}$R();it(yv,Rh);it(yv,Rh,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="analytics",zR="firebase_id",VR="origin",BR=60*1e3,HR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Dh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be=new al("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ye=new yr("analytics","Analytics",GR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(t){if(!t.startsWith(Dh)){const e=Ye.create("invalid-gtag-resource",{gtagURL:t});return Be.warn(e.message),""}return t}function Lv(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function qR(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function YR(t,e){const n=qR("firebase-js-sdk-policy",{createScriptURL:KR}),r=document.createElement("script"),i=`${Dh}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function QR(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function JR(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await Lv(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){Be.error(a)}t("config",i,s)}async function XR(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Lv(n);for(const l of o){const c=a.find(d=>d.measurementId===l),f=c&&e[c.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Be.error(s)}}function ZR(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await XR(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await JR(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Be.error(a)}}return i}function eP(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=ZR(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function tP(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Dh)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP=30,rP=1e3;class iP{constructor(e={},n=rP){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ov=new iP;function sP(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function oP(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:sP(n)},i=HR.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();(o=l.error)!=null&&o.message&&(a=l.error.message)}catch{}throw Ye.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function aP(t,e=Ov,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ye.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ye.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new uP;return setTimeout(async()=>{a.abort()},BR),jv({appId:r,apiKey:i,measurementId:s},o,a,e)}async function jv(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Ov){var a;const{appId:s,measurementId:o}=t;try{await lP(r,e)}catch(l){if(o)return Be.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:o};throw l}try{const l=await oP(t);return i.deleteThrottleMetadata(s),l}catch(l){const c=l;if(!cP(c)){if(i.deleteThrottleMetadata(s),o)return Be.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:o};throw l}const f=Number((a=c==null?void 0:c.customData)==null?void 0:a.httpStatus)===503?np(n,i.intervalMillis,nP):np(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,d),Be.debug(`Calling attemptFetch again in ${f} millis`),jv(t,d,r,i)}}function lP(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ye.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function cP(t){if(!(t instanceof Lt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class uP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function dP(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hP(){if(a0())try{await l0()}catch(t){return Be.warn(Ye.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Be.warn(Ye.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function fP(t,e,n,r,i,s,o){const a=aP(t);a.then(h=>{n[h.measurementId]=h.appId,t.options.measurementId&&h.measurementId!==t.options.measurementId&&Be.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>Be.error(h)),e.push(a);const l=hP().then(h=>{if(h)return r.getId()}),[c,f]=await Promise.all([a,l]);tP(s)||YR(s,c.measurementId),i("js",new Date);const d=(o==null?void 0:o.config)??{};return d[VR]="firebase",d.update=!0,f!=null&&(d[zR]=f),i("config",c.measurementId,d),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e){this.app=e}_delete(){return delete is[this.app.options.appId],Promise.resolve()}}let is={},fm=[];const pm={};let yc="dataLayer",mP="gtag",mm,Fv,gm=!1;function gP(){const t=[];if(i0()&&t.push("This is a browser extension environment."),oC()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ye.create("invalid-analytics-context",{errorInfo:e});Be.warn(n.message)}}function yP(t,e,n){gP();const r=t.options.appId;if(!r)throw Ye.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Be.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ye.create("no-api-key");if(is[r]!=null)throw Ye.create("already-exists",{id:r});if(!gm){QR(yc);const{wrappedGtag:s,gtagCore:o}=eP(is,fm,pm,yc,mP);Fv=s,mm=o,gm=!0}return is[r]=fP(t,fm,pm,e,mm,yc,n),new pP(t)}function Uv(t=Bd()){t=ue(t);const e=_r(t,Wa);return e.isInitialized()?e.getImmediate():_P(t)}function _P(t,e={}){const n=_r(t,Wa);if(n.isInitialized()){const i=n.getImmediate();if(Ln(e,n.getOptions()))return i;throw Ye.create("already-initialized")}return n.initialize({options:e})}function vP(t,e,n,r){t=ue(t),dP(Fv,is[t.app.options.appId],e,n,r).catch(i=>Be.error(i))}const ym="@firebase/analytics",_m="0.10.18";function wP(){At(new wt(Wa,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return yP(r,i,n)},"PUBLIC")),At(new wt("analytics-internal",t,"PRIVATE")),it(ym,_m),it(ym,_m,"esm2020");function t(e){try{const n=e.getProvider(Wa).getImmediate();return{logEvent:(r,i,s)=>vP(n,r,i,s)}}catch(n){throw Ye.create("interop-component-reg-failed",{reason:n})}}}wP();const xP={apiKey:"AIzaSyBlLsorZJMl6f6TnVy4SEC5GzjWkTJUCEw",authDomain:"smartwastesystem1-c2cbe.firebaseapp.com",databaseURL:"https://smartwastesystem1-c2cbe-default-rtdb.firebaseio.com",projectId:"smartwastesystem1-c2cbe",storageBucket:"smartwastesystem1-c2cbe.firebasestorage.app",messagingSenderId:"471984293877",appId:"1:471984293877:web:94df26a099fb65447142bc",measurementId:"G-CNSFEJC7LD"},El=f0(xP),An=eR(El),Pe=BI(El);try{Uv(El)}catch{console.log("Analytics not supported in this environment")}try{Uv(El)}catch{console.log("Analytics not supported in this environment")}const EP=async(t,e)=>{try{console.log("Attempting to sign in with:",t);const n=await z0(Pe,t,e),{uid:r}=n.user;console.log("Firebase auth successful for user:",r);const i=await gv(Ds(Pn(An),`users/${r}`));if(i.exists()){console.log("User data found in database");const s=i.val();return s.lastLogin=new Date().getTime(),await Fa(Pn(An,`users/${r}/lastLogin`),s.lastLogin),s}else{console.error("User auth successful but data not found in database");const s={id:r,email:n.user.email||"",name:n.user.displayName||"",createdAt:Date.now(),lastLogin:Date.now()};return await Fa(Pn(An,`users/${r}`),s),s}}catch(n){throw console.error("Error signing in:",n),n}},Wv=async t=>{try{console.log("Checking if email exists:",t);const e=await TS(Pe,t);return console.log("Sign-in methods for email:",e),e.length>0}catch(e){if(console.error("Error checking user existence:",e),e.code==="auth/user-not-found")return!1;throw e}},CP=async()=>{try{return await MS(Pe),!0}catch(t){return console.error("Error signing out:",t.message),!1}},kP=()=>new Promise(t=>{const e=AS(Pe,async n=>{if(e(),n){const r=await gv(Ds(Pn(An),`users/${n.uid}`));r.exists()?t(r.val()):t(null)}else t(null)})}),SP=async()=>{try{const t=Pe.currentUser;return t&&!t.emailVerified?(await V0(t),!0):!1}catch(t){return console.error("Error sending verification email:",t.message),!1}},$v=t=>{try{const n=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t);return console.log(`Email validation for ${t}: ${n?"VALID":"INVALID"}`),n}catch(e){return console.error("Error validating email:",e),!0}},IP=async(t,e,n)=>{try{if(console.log("Starting user creation with verification for:",e),!$v(e))throw console.error("Invalid email format:",e),new Error("Please enter a valid email address");try{if(await Wv(e))throw console.warn(`User with email ${e} already exists`),new Error("Email already in use. Please try a different email or login instead.")}catch(a){if(a.code!=="auth/user-not-found")throw console.error("Error checking if user exists:",a),a}console.log("Creating Firebase Auth user...");let r;try{r=await $0(Pe,e,n)}catch(a){throw console.error("Error creating user in Firebase Auth:",a),a.code==="auth/email-already-in-use"?new Error("This email is already registered. Please use a different email or login instead."):a.code==="auth/invalid-email"?new Error("Please enter a valid email address."):a.code==="auth/weak-password"?new Error("Password is too weak. Please choose a stronger password."):new Error(a.message||"Failed to create account. Please try again later.")}const{uid:i}=r.user;console.log("User created successfully with ID:",i),console.log("Sending verification email...");try{await V0(r.user),console.log("Verification email sent successfully")}catch(a){console.error("Error sending verification email:",a)}const s=new Date().getTime(),o={id:i,email:e,name:t,createdAt:s,lastLogin:s};try{await Fa(Pn(An,`users/${i}`),o),console.log("User data saved to database successfully")}catch(a){console.error("Error saving user data to database:",a)}return o}catch(r){throw console.error("Error creating user with verification:",r),r}},zv=w.createContext(void 0),Lh=()=>{const t=w.useContext(zv);if(t===void 0)throw new Error("useAuth must be used within an AuthProvider");return t},TP=({children:t})=>{const[e,n]=w.useState(null),[r,i]=w.useState(!0),[s,o]=w.useState(!1);w.useEffect(()=>{console.log("Setting up auth state listener");let d=!0;const h=Pe.onAuthStateChanged(async m=>{if(console.log("Auth state changed:",m?`User ${m.uid}`:"No user"),!!d){i(!0);try{if(m){console.log("Current Firebase user:",{uid:m.uid,email:m.email,emailVerified:m.emailVerified,displayName:m.displayName,isAnonymous:m.isAnonymous,providerData:m.providerData});try{await m.reload(),console.log("User reloaded. Updated email verified status:",m.emailVerified)}catch(v){console.error("Error reloading user:",v)}if(!d)return;o(m.emailVerified);const _=await kP();if(_)console.log("User data retrieved from database:",_),d&&n(_);else{console.log("User authenticated but no database record found");const v={id:m.uid,email:m.email||"",name:m.displayName||"",createdAt:Date.now(),lastLogin:Date.now()};d&&n(v)}}else console.log("No authenticated user, clearing state"),d&&(n(null),o(!1))}catch(_){console.error("Error processing auth state change:",_),d&&(n(null),o(!1))}finally{d&&i(!1)}}});return()=>{d=!1,h()}},[]);const a=async(d,h)=>{var m;i(!0);try{console.log("Starting login process for:",d);const _=await EP(d,h);if(_){if(console.log("User data received:",_),n(_),Pe.currentUser)try{await Pe.currentUser.reload(),console.log("User reloaded after login. Email verified:",Pe.currentUser.emailVerified)}catch(E){console.error("Failed to reload user after login:",E)}const v=((m=Pe.currentUser)==null?void 0:m.emailVerified)||!1;return console.log("Final email verified status:",v),o(v),!0}return console.log("No user data returned from signInUser"),!1}catch(_){throw console.error("Login error:",_),_}finally{i(!1)}},l=async(d,h,m)=>{i(!0);try{if(!d||!h||!m)throw console.error("Missing required registration fields"),new Error("Please fill in all required fields");if(console.log("Starting registration process for:",h),!$v(h))throw console.error("Invalid email format:",h),new Error("Please enter a valid email address");console.log("Creating new user account with verification...");const _=await IP(d,h,m);if(_)return console.log("User registered successfully:",_),n(_),o(!1),console.log("Checking if verification email was sent..."),Pe.currentUser?console.log("Current user exists, email verified status:",Pe.currentUser.emailVerified):console.warn("User created but auth.currentUser is null after registration"),!0;throw console.error("Registration failed - no user data returned"),new Error("Registration failed. Please try again.")}catch(_){throw console.error("Registration error:",_),_}finally{i(!1)}},c=async()=>{try{console.log("Sending verification email...");const d=await SP();return console.log("Verification email sending result:",d),d}catch(d){return console.error("Error sending verification email:",d),!1}},f=async()=>{i(!0);try{console.log("Attempting to log out user");const d=await CP();return d?(console.log("Logout successful"),n(null),o(!1)):console.log("Logout failed but no exception was thrown"),d}catch(d){return console.error("Logout error:",d),!1}};return u.jsx(zv.Provider,{value:{user:e,login:a,register:l,logout:f,loading:r,checkUserExists:Wv,sendVerificationEmail:c,isEmailVerified:s},children:t})},Vv=w.createContext(void 0),NP=({children:t})=>{const[e,n]=w.useState(()=>{const i=localStorage.getItem("theme");return i==="dark"||i==="light"?i:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"});w.useEffect(()=>{const i=window.document.documentElement;i.classList.remove("dark","light"),i.classList.add(e),localStorage.setItem("theme",e)},[e]);const r=()=>{n(i=>i==="light"?"dark":"light")};return u.jsx(Vv.Provider,{value:{theme:e,toggleTheme:r},children:t})},Bv=()=>{const t=w.useContext(Vv);if(t===void 0)throw new Error("useTheme must be used within a ThemeProvider");return t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var bP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RP=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),B=(t,e)=>{const n=w.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},f)=>w.createElement("svg",{ref:f,...bP,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${RP(t)}`,a].join(" "),...c},[...e.map(([d,h])=>w.createElement(d,h)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PP=B("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=B("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=B("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AP=B("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MP=B("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=B("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=B("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DP=B("Factory",[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"159hny"}],["path",{d:"M17 18h1",key:"uldtlt"}],["path",{d:"M12 18h1",key:"s9uhes"}],["path",{d:"M7 18h1",key:"1neino"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LP=B("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OP=B("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jP=B("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FP=B("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UP=B("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=B("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WP=B("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=B("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $P=B("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zP=B("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=B("Recycle",[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VP=B("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BP=B("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HP=B("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GP=B("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KP=B("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qP=B("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YP=B("TreePine",[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",key:"cpyugq"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=B("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=B("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QP=B("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=B("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JP=B("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),XP=({className:t=""})=>{const{theme:e,toggleTheme:n}=Bv();return u.jsx("button",{onClick:n,className:`p-2 rounded-lg transition-colors duration-200 ${t} ${e==="dark"?"bg-gray-700 text-yellow-300 hover:bg-gray-600":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,title:e==="dark"?"Switch to light mode":"Switch to dark mode","aria-label":e==="dark"?"Switch to light mode":"Switch to dark mode",children:e==="dark"?u.jsx(HP,{className:"h-5 w-5"}):u.jsx($P,{className:"h-5 w-5"})})},_c=({children:t})=>{const{user:e,logout:n}=Lh(),r=$s(),i=rn(),s=()=>{n(),r("/login")},o=[{name:"Dashboard",href:"/dashboard",icon:OP},{name:"Analytics",href:"/analytics",icon:Oh},{name:"About",href:"/about",icon:jP}],a=l=>i.pathname===l;return e?(Bv(),u.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200",children:[u.jsxs("nav",{className:"bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700",children:[u.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"flex justify-between items-center h-16",children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx("div",{className:"flex-shrink-0",children:u.jsx(Cl,{className:"h-8 w-8 text-green-600 dark:text-green-500"})}),u.jsxs("div",{children:[u.jsx("h1",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Waste Management"}),u.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Environmental Monitoring System"})]})]}),u.jsx("div",{className:"hidden md:block",children:u.jsx("div",{className:"flex space-x-1",children:o.map(l=>{const c=l.icon;return u.jsxs(ri,{to:l.href,className:`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${a(l.href)?"bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 shadow-sm":"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"}`,children:[u.jsx(c,{className:"h-4 w-4"}),u.jsx("span",{children:l.name})]},l.name)})})}),u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsx(XP,{}),u.jsxs("div",{className:"flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300",children:[u.jsx(qv,{className:"h-4 w-4"}),u.jsx("span",{className:"hidden sm:inline",children:e.name})]}),u.jsx("button",{onClick:s,className:"p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200",title:"Logout",children:u.jsx(WP,{className:"h-5 w-5"})})]})]})}),u.jsx("div",{className:"md:hidden px-4 pb-3 space-y-1",children:o.map(l=>{const c=l.icon;return u.jsxs(ri,{to:l.href,className:`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 flex items-center space-x-2 ${a(l.href)?"bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300":"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"}`,children:[u.jsx(c,{className:"h-5 w-5"}),u.jsx("span",{children:l.name})]},l.name)})})]}),u.jsx("main",{className:"flex-1",children:t})]})):u.jsx(u.Fragment,{children:t})},ZP=()=>{const[t,e]=w.useState(""),[n,r]=w.useState(""),[i,s]=w.useState(!1),[o,a]=w.useState(""),[l,c]=w.useState(!1),f=$s(),d=async h=>{if(h.preventDefault(),a(""),c(!0),!t||!n){a("Please fill in all fields"),c(!1);return}try{console.log("Attempting to log in with email using direct Firebase auth:",t);const m=await z0(Pe,t,n);console.log("Login successful:",m.user.uid),console.log("Login successful, forcing navigation to dashboard..."),f("/dashboard",{replace:!0})}catch(m){console.error("Login error:",m),m.code==="auth/user-not-found"?a("No account found with this email. Please sign up first."):m.code==="auth/wrong-password"?a("Invalid password. Please try again."):m.code==="auth/too-many-requests"?a("Too many failed login attempts. Please try again later or reset your password."):m.code==="auth/invalid-credential"?a("Invalid email or password. Please check your credentials and try again."):m.code==="auth/operation-not-allowed"?a("Email/Password authentication is not enabled in Firebase console. Please contact your administrator or try using a different authentication method."):a(m.message||"An error occurred during login. Please try again.")}finally{c(!1)}};return u.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex items-center justify-center p-4",children:u.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden",children:[u.jsxs("div",{className:"bg-gradient-to-r from-green-600 to-blue-600 px-8 py-6 text-center",children:[u.jsx("div",{className:"flex justify-center mb-4",children:u.jsx("div",{className:"bg-white dark:bg-gray-700 rounded-full p-3",children:u.jsx(Cl,{className:"h-8 w-8 text-green-600 dark:text-green-500"})})}),u.jsx("h1",{className:"text-2xl font-bold text-white",children:"Welcome Back"}),u.jsx("p",{className:"text-green-100 mt-1",children:"Sign in to your account"})]}),u.jsxs("div",{className:"p-8",children:[o&&u.jsx("div",{className:"mb-4 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-lg text-sm",children:o}),u.jsxs("form",{onSubmit:d,className:"space-y-6",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Email Address"}),u.jsxs("div",{className:"relative",children:[u.jsx(Kv,{className:"h-5 w-5 text-gray-400 dark:text-gray-500 absolute left-3 top-3"}),u.jsx("input",{type:"email",value:t,onChange:h=>e(h.target.value),className:"w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200",placeholder:"Enter your email"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Password"}),u.jsxs("div",{className:"relative",children:[u.jsx(Ou,{className:"h-5 w-5 text-gray-400 dark:text-gray-500 absolute left-3 top-3"}),u.jsx("input",{type:i?"text":"password",value:n,onChange:h=>r(h.target.value),className:"w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200",placeholder:"Enter your password"}),u.jsx("button",{type:"button",onClick:()=>s(!i),className:"absolute right-3 top-3 text-gray-400 hover:text-gray-600",children:i?u.jsx(Hv,{className:"h-5 w-5"}):u.jsx(Gv,{className:"h-5 w-5"})})]})]}),u.jsx("button",{type:"submit",disabled:l,className:"w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-green-700 hover:to-blue-700 focus:ring-4 focus:ring-green-200 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed",children:l?"Signing in...":"Sign In"})]}),u.jsx("div",{className:"mt-6 text-center",children:u.jsxs("p",{className:"text-gray-600",children:["Don't have an account?"," ",u.jsx(ri,{to:"/register",className:"text-green-600 hover:text-green-700 font-medium",children:"Sign up"})]})})]})]})})},eA=()=>{const[t,e]=w.useState(""),[n,r]=w.useState(""),[i,s]=w.useState(""),[o,a]=w.useState(""),[l,c]=w.useState(!1),[f,d]=w.useState(""),[h,m]=w.useState(!1),_=$s(),v=async E=>{if(E.preventDefault(),d(""),m(!0),!t||!n||!i||!o){d("Please fill in all fields"),m(!1);return}if(i!==o){d("Passwords do not match"),m(!1);return}if(i.length<6){d("Password must be at least 6 characters"),m(!1);return}try{console.log("Attempting to register with email using direct Firebase auth:",n);const p=(await $0(Pe,n,i)).user;await bS(p,{displayName:t});const y=new Date().getTime();await Fa(Pn(An,`users/${p.uid}`),{id:p.uid,email:n,name:t,createdAt:y,lastLogin:y}),console.log("Registration successful, user created with ID:",p.uid),console.log("Registration successful, forcing navigation to dashboard..."),_("/dashboard",{replace:!0})}catch(g){console.error("Registration error:",g),g.code==="auth/email-already-in-use"?d("This email is already registered. Please use a different email or login instead."):g.code==="auth/invalid-email"?d("Please enter a valid email address."):g.code==="auth/weak-password"?d("Password is too weak. Please choose a stronger password."):g.code==="auth/operation-not-allowed"?d("Email/Password authentication is not enabled in Firebase console. Please contact your administrator to enable Email/Password authentication in the Firebase console."):d(g.message||"An error occurred during registration. Please try again.")}finally{m(!1)}};return u.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4",children:u.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden",children:[u.jsxs("div",{className:"bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6 text-center",children:[u.jsx("div",{className:"flex justify-center mb-4",children:u.jsx("div",{className:"bg-white dark:bg-gray-700 rounded-full p-3",children:u.jsx(Cl,{className:"h-8 w-8 text-purple-600"})})}),u.jsx("h1",{className:"text-2xl font-bold text-white",children:"Create Account"}),u.jsx("p",{className:"text-purple-100 mt-1",children:"Join our environmental monitoring system"})]}),u.jsxs("div",{className:"p-8",children:[f&&u.jsx("div",{className:"mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm",children:f}),u.jsxs("form",{onSubmit:v,className:"space-y-5",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name"}),u.jsxs("div",{className:"relative",children:[u.jsx(qv,{className:"h-5 w-5 text-gray-400 absolute left-3 top-3"}),u.jsx("input",{type:"text",value:t,onChange:E=>e(E.target.value),className:"w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200",placeholder:"Enter your full name"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),u.jsxs("div",{className:"relative",children:[u.jsx(Kv,{className:"h-5 w-5 text-gray-400 absolute left-3 top-3"}),u.jsx("input",{type:"email",value:n,onChange:E=>r(E.target.value),className:"w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200",placeholder:"Enter your email"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Password"}),u.jsxs("div",{className:"relative",children:[u.jsx(Ou,{className:"h-5 w-5 text-gray-400 absolute left-3 top-3"}),u.jsx("input",{type:l?"text":"password",value:i,onChange:E=>s(E.target.value),className:"w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200",placeholder:"Create a password"}),u.jsx("button",{type:"button",onClick:()=>c(!l),className:"absolute right-3 top-3 text-gray-400 hover:text-gray-600",children:l?u.jsx(Hv,{className:"h-5 w-5"}):u.jsx(Gv,{className:"h-5 w-5"})})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Confirm Password"}),u.jsxs("div",{className:"relative",children:[u.jsx(Ou,{className:"h-5 w-5 text-gray-400 absolute left-3 top-3"}),u.jsx("input",{type:l?"text":"password",value:o,onChange:E=>a(E.target.value),className:"w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200",placeholder:"Confirm your password"})]})]}),u.jsx("button",{type:"submit",disabled:h,className:"w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 focus:ring-4 focus:ring-purple-200 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed",children:h?"Creating account...":"Create Account"})]}),u.jsx("div",{className:"mt-6 text-center",children:u.jsxs("p",{className:"text-gray-600",children:["Already have an account?"," ",u.jsx(ri,{to:"/login",className:"text-purple-600 hover:text-purple-700 font-medium",children:"Sign in"})]})})]})]})})},tA=t=>{if(t.length===0)return{pollution:0,globalWarmingImpact:0,suggestions:["No data available for analysis"]};const e=t.reduce((m,_)=>m+_.organicWeight,0)/t.length,n=t.reduce((m,_)=>m+_.inorganicWeight,0)/t.length,r=t.reduce((m,_)=>m+(_.methane||0),0)/t.length,i=t.reduce((m,_)=>m+(_.carbonMonoxide||0),0)/t.length,s=t.reduce((m,_)=>m+(_.ammonia||0),0)/t.length,o=t.reduce((m,_)=>m+(_.sulfide||0),0)/t.length,a=t.reduce((m,_)=>m+(_.benzene||0),0)/t.length,l=t.reduce((m,_)=>m+_.temperature,0)/t.length,c=t.reduce((m,_)=>m+_.humidity,0)/t.length,f=(n*.4+i*.3+s*.2+o*.1+a*.1+l*.05-c*.02)*1.2,d=(e*.3+n*.5+r*.15+i*.05+l*.1)*.8,h=[];return f>60?(h.push("High pollution detected! Consider immediate waste reduction measures."),h.push("Implement better waste segregation practices."),h.push("Increase frequency of waste collection in high-pollution areas.")):f>40?(h.push("Moderate pollution levels. Monitor waste disposal patterns."),h.push("Consider implementing recycling programs.")):(h.push("Pollution levels are within acceptable range."),h.push("Continue current waste management practices.")),d>50?(h.push("High global warming impact! Focus on organic waste composting."),h.push("Reduce inorganic waste generation through reuse initiatives.")):d>30?h.push("Moderate environmental impact. Consider green waste management."):h.push("Environmental impact is minimal. Good waste management practices."),r>50&&h.push("High methane levels detected. Improve ventilation in waste storage areas."),i>45&&h.push("Elevated carbon monoxide levels. Check for combustion sources near waste containers."),s>40&&h.push("Air quality concerns detected. High ammonia levels. Consider air purification systems."),o>40&&h.push("Elevated hydrogen sulfide levels detected. Ensure proper waste containment."),{pollution:Math.max(0,Math.min(100,Math.round(f*100)/100)),globalWarmingImpact:Math.max(0,Math.min(100,Math.round(d*100)/100)),suggestions:h.slice(0,5)}},kr=()=>{const t=[],e=new Date,n=["A001","A002","A003","A004","A005"];for(let r=0;r<30;r++){const i=new Date(e.getTime()-r*24*60*60*1e3),s=Math.random()<.3,o=Math.round((Math.random()*60+10)*100)/100,a=Math.round((Math.random()*45+15)*100)/100,l=Math.round((Math.random()*40+10)*100)/100,c=Math.round((Math.random()*35+5)*100)/100,f=Math.round((Math.random()*50+5)*100)/100;let d,h;if(s){const m=o>0||a>0||l>0||c>0,_=f>0;m&&!_?(d=Math.round(Math.random()*25*100)/100,h=0):!m&&_?(d=0,h=Math.round(Math.random()*25*100)/100):m&&_?Math.random()<.5?(d=Math.round(Math.random()*25*100)/100,h=0):(d=0,h=Math.round(Math.random()*25*100)/100):(d=0,h=0)}else d=Math.round((Math.random()*50+10)*100)/100,h=Math.round((Math.random()*40+5)*100)/100;t.push({id:`waste-${r}`,timestamp:i,organicWeight:d,inorganicWeight:h,totalWeight:Math.round((d+h)*100)/100,humidity:Math.round((Math.random()*40+30)*100)/100,temperature:Math.round((Math.random()*20+15)*100)/100,methane:o,ammonia:a,sulfide:l,benzene:c,carbonMonoxide:f,areaCode:n[r%n.length]})}return t.reverse()};let St=[];const Yv={subscribeToRealtimeData(t){try{const e=Pn(An,"waste_data"),n=um(e,r=>{if(r.exists()){const i=r.val();console.log("Firebase data structure:",i);const s=[];Object.keys(i).forEach(o=>{const a=i[o];Object.keys(a).forEach(l=>{const c=a[l];Object.keys(c).forEach(f=>{const d=c[f],h=Number(d.weight||0);let m=0,_=0;if(h===0){const E=Math.random()*25;l==="wet"?(Number(d.ammonia||0)>0||Number(d.sulfide||0)>0||Number(d.benzene||0)>0||Number(d.methane||0)>0)&&(m=Math.round(E*100)/100,console.log(`Generated random weight ${m}kg for wet waste based on gas sensors`)):l==="dry"&&Number(d.carbonMonoxide||0)>0&&(_=Math.round(E*100)/100,console.log(`Generated random weight ${_}kg for dry waste based on gas sensors`))}else l==="wet"?m=h:l==="dry"&&(_=h);let v={id:f,timestamp:new Date(d.timestamp.replace(" ","T")),organicWeight:m,inorganicWeight:_,totalWeight:m+_,humidity:Number(d.humidity||0),temperature:Number(d.temperature||0),areaCode:o};l==="wet"?v={...v,ammonia:Number(d.ammonia||0),sulfide:Number(d.sulfide||0),benzene:Number(d.benzene||0),methane:Number(d.methane||0)}:l==="dry"&&(v={...v,carbonMonoxide:Number(d.carbonMonoxide||0)}),s.push(v)})})}),console.log("Formatted data:",s),St=s,t(s)}else{console.warn("Firebase not configured properly, using mock data");const i=kr();St=i,t(i)}},r=>{console.error("Firebase error, using mock data:",r);const i=kr();St=i,t(i)});return()=>Gb(e,"value",n)}catch(e){console.error("Firebase connection error, using mock data:",e);const n=kr();return St=n,t(n),()=>{}}},async getAnalyticsData(t,e){if(await new Promise(a=>setTimeout(a,800)),St.length===0){console.log("Analytics page: No dashboard data found. Loading data from Firebase...");try{await new Promise(a=>{const l=Pn(An,"waste_data");um(l,c=>{if(c.exists()){const f=c.val(),d=[];Object.keys(f).forEach(h=>{const m=f[h];Object.keys(m).forEach(_=>{const v=m[_];Object.keys(v).forEach(E=>{const g=v[E],p=Number(g.weight||0);let y=0,x=0;if(p===0){const I=Math.random()*25;_==="wet"?(Number(g.ammonia||0)>0||Number(g.sulfide||0)>0||Number(g.benzene||0)>0||Number(g.methane||0)>0)&&(y=Math.round(I*100)/100,console.log(`Analytics: Generated random weight ${y}kg for wet waste based on gas sensors`)):_==="dry"&&Number(g.carbonMonoxide||0)>0&&(x=Math.round(I*100)/100,console.log(`Analytics: Generated random weight ${x}kg for dry waste based on gas sensors`))}else _==="wet"?y=p:_==="dry"&&(x=p);let C={id:E,timestamp:new Date(g.timestamp.replace(" ","T")),organicWeight:y,inorganicWeight:x,totalWeight:y+x,humidity:Number(g.humidity||0),temperature:Number(g.temperature||0),areaCode:h};_==="wet"?C={...C,ammonia:Number(g.ammonia||0),sulfide:Number(g.sulfide||0),benzene:Number(g.benzene||0),methane:Number(g.methane||0)}:_==="dry"&&(C={...C,carbonMonoxide:Number(g.carbonMonoxide||0)}),d.push(C)})})}),St=d}else console.warn("Firebase not configured properly, using mock data"),St=kr();a()},c=>{console.error("Firebase error, using mock data:",c),St=kr(),a()})})}catch(a){console.error("Firebase connection error, using mock data:",a),St=kr()}}const n=new Date(t),r=new Date(e);let i=St.filter(a=>{const l=new Date(a.timestamp);return l>=n&&l<=r});if(console.log(`Analytics service: Filtered data for range ${t} to ${e}:`,i.length,"records"),i.length===0){console.log("No data found for selected date range, generating sample data");const a=[],l=(r.getTime()-n.getTime())/(1e3*60*60*24),c=Math.max(3,Math.min(10,Math.ceil(l)));for(let f=0;f<c;f++){const d=new Date(n.getTime()+f*(r.getTime()-n.getTime())/(c-1)),h=Math.round((Math.random()*60+10)*100)/100,m=Math.round((Math.random()*45+15)*100)/100,_=Math.round((Math.random()*40+10)*100)/100,v=Math.round((Math.random()*35+5)*100)/100,E=Math.round((Math.random()*50+5)*100)/100,g=Math.random()<.3;let p,y;if(g){const x=h>0||m>0||_>0||v>0,C=E>0;x&&!C?(p=Math.round(Math.random()*25*100)/100,y=0):!x&&C?(p=0,y=Math.round(Math.random()*25*100)/100):x&&C?Math.random()<.5?(p=Math.round(Math.random()*25*100)/100,y=0):(p=0,y=Math.round(Math.random()*25*100)/100):(p=0,y=0)}else p=Math.round((Math.random()*50+10)*100)/100,y=Math.round((Math.random()*40+5)*100)/100;a.push({id:`mock-${f}`,timestamp:d,organicWeight:p,inorganicWeight:y,totalWeight:p+y,humidity:Math.round((Math.random()*40+30)*100)/100,temperature:Math.round((Math.random()*20+15)*100)/100,methane:h,ammonia:m,sulfide:_,benzene:v,carbonMonoxide:E,areaCode:["A001","A002","A003","A004","A005"][Math.floor(Math.random()*5)]})}i=a}const s=tA(i),o=i.map(a=>({date:a.timestamp.toISOString().split("T")[0],organicWeight:a.organicWeight,inorganicWeight:a.inorganicWeight,totalWeight:a.totalWeight,pollution:0,globalWarmingImpact:0}));return o.forEach(a=>{a.pollution=s.pollution+(Math.random()-.5)*10,a.globalWarmingImpact=s.globalWarmingImpact+(Math.random()-.5)*8,a.pollution=Math.max(0,Math.min(100,Math.round(a.pollution*100)/100)),a.globalWarmingImpact=Math.max(0,Math.min(100,Math.round(a.globalWarmingImpact*100)/100))}),{data:o,analysis:s}}},nA=()=>{const[t,e]=w.useState([]),[n,r]=w.useState(!0),[i,s]=w.useState(new Date),[o,a]=w.useState("connecting");w.useEffect(()=>{a("connecting");const P=Yv.subscribeToRealtimeData(H=>{e(H),s(new Date),r(!1),a("connected")});return()=>{P(),a("disconnected")}},[]);const l=t.reduce((P,H)=>P+H.organicWeight,0),c=t.reduce((P,H)=>P+H.inorganicWeight,0),f=t.length>0?t.reduce((P,H)=>P+H.temperature,0)/t.length:0,d=t.length>0?t.reduce((P,H)=>P+H.humidity,0)/t.length:0,h=t.length>0?t.reduce((P,H)=>P+(H.methane||0),0)/t.length:0,m=t.length>0?t.reduce((P,H)=>P+(H.ammonia||0),0)/t.length:0,_=t.length>0?t.reduce((P,H)=>P+(H.sulfide||0),0)/t.length:0,v=t.length>0?t.reduce((P,H)=>P+(H.benzene||0),0)/t.length:0,E=t.length>0?t.reduce((P,H)=>P+(H.carbonMonoxide||0),0)/t.length:0,g=500,p=300,y=200,x=150,C=400,I=h/g*100,T=m/p*100,b=_/y*100,O=v/x*100,D=E/C*100,ke=[{title:"Total Wet Waste",value:`${l.toFixed(1)} kg`,icon:YP,color:"bg-green-500",bgColor:"bg-green-50"},{title:"Total Dry Waste",value:`${c.toFixed(1)} kg`,icon:DP,color:"bg-blue-500",bgColor:"bg-blue-50"},{title:"Avg. Temperature",value:`${f.toFixed(1)}°C`,icon:KP,color:"bg-red-500",bgColor:"bg-red-50"},{title:"Avg. Humidity",value:`${d.toFixed(1)}%`,icon:MP,color:"bg-cyan-500",bgColor:"bg-cyan-50"},{title:"Methane",value:`${I.toFixed(1)}%`,icon:Cr,color:I>70?"bg-red-500":I>40?"bg-yellow-500":"bg-green-500",bgColor:I>70?"bg-red-50":I>40?"bg-yellow-50":"bg-green-50"},{title:"Ammonia",value:`${T.toFixed(1)}%`,icon:Cr,color:T>70?"bg-red-500":T>40?"bg-yellow-500":"bg-green-500",bgColor:T>70?"bg-red-50":T>40?"bg-yellow-50":"bg-green-50"},{title:"Sulfide",value:`${b.toFixed(1)}%`,icon:Cr,color:b>70?"bg-red-500":b>40?"bg-yellow-500":"bg-green-500",bgColor:b>70?"bg-red-50":b>40?"bg-yellow-50":"bg-green-50"},{title:"Benzene",value:`${O.toFixed(1)}%`,icon:Cr,color:O>70?"bg-red-500":O>40?"bg-yellow-500":"bg-green-500",bgColor:O>70?"bg-red-50":O>40?"bg-yellow-50":"bg-green-50"},{title:"Carbon Monoxide",value:`${D.toFixed(1)}%`,icon:Cr,color:D>70?"bg-red-500":D>40?"bg-yellow-500":"bg-green-500",bgColor:D>70?"bg-red-50":D>40?"bg-yellow-50":"bg-green-50"}];return u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[u.jsxs("div",{className:"mb-8",children:[u.jsxs("div",{className:"flex justify-between items-center mb-4",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Waste Management Dashboard"}),u.jsx("p",{className:"text-gray-600 dark:text-gray-300 mt-1",children:"Real-time monitoring of waste containers"})]}),u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("div",{className:`w-3 h-3 rounded-full ${o==="connected"?"bg-green-500":o==="connecting"?"bg-yellow-500":"bg-red-500"}`}),u.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-300 capitalize",children:o})]}),u.jsxs("div",{className:"flex items-center space-x-2 text-gray-600 dark:text-gray-300",children:[u.jsx(Cr,{className:"h-4 w-4"}),u.jsx("span",{className:"text-sm",children:"Firebase Realtime"})]})]})]}),u.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:["Last updated: ",i.toLocaleString()]})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8",children:ke.map(P=>{const H=P.icon;return u.jsx("div",{className:`${P.bgColor} dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700`,children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-sm font-medium text-gray-600 dark:text-gray-300 mb-1",children:P.title}),u.jsx("p",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:P.value})]}),u.jsx("div",{className:`${P.color} p-3 rounded-lg`,children:u.jsx(H,{className:"h-6 w-6 text-white"})})]})},P.title)})}),u.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden",children:[u.jsx("div",{className:"px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx(qP,{className:"h-5 w-5 text-gray-600 dark:text-gray-300"}),u.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Real-time Sensor Data"})]}),u.jsxs("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:[t.length," records"]})]})}),u.jsx("div",{className:"overflow-x-auto",children:n?u.jsxs("div",{className:"p-8 text-center",children:[u.jsx(VP,{className:"h-8 w-8 text-gray-400 dark:text-gray-500 animate-spin mx-auto mb-4"}),u.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"Connecting to Firebase..."})]}):u.jsxs("table",{className:"w-full",children:[u.jsx("thead",{className:"bg-gray-50 dark:bg-gray-900",children:u.jsxs("tr",{children:[u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Timestamp"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Area Name"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Wet Waste Container Weight (kg)"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Dry Waste Container Weight (kg)"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Total Weight (kg)"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Humidity (%)"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Temperature (°C)"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Methane (ppm)"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Ammonia (ppm)"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Sulfide (ppm)"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Benzene (ppm)"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Carbon Monoxide (ppm)"})]})}),u.jsx("tbody",{className:"bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700",children:t.map((P,H)=>u.jsxs("tr",{className:H%2===0?"bg-white dark:bg-gray-800":"bg-gray-50 dark:bg-gray-700",children:[u.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200",children:P.timestamp.toLocaleString()}),u.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400",children:P.areaCode}),u.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400 font-medium",children:P.organicWeight}),u.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-blue-600 dark:text-blue-400 font-medium",children:P.inorganicWeight}),u.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200 font-medium",children:P.totalWeight}),u.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-cyan-600 dark:text-cyan-400 font-medium",children:[P.humidity,"%"]}),u.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-red-600 dark:text-red-400 font-medium",children:[P.temperature,"°C"]}),u.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:u.jsx("span",{className:`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${(P.methane||0)>50?"bg-red-100 text-red-800":(P.methane||0)>30?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:P.methane||0})}),u.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:u.jsx("span",{className:`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${(P.ammonia||0)>45?"bg-red-100 text-red-800":(P.ammonia||0)>25?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:P.ammonia||0})}),u.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:u.jsx("span",{className:`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${(P.sulfide||0)>40?"bg-red-100 text-red-800":(P.sulfide||0)>25?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:P.sulfide||0})}),u.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:u.jsx("span",{className:`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${(P.benzene||0)>35?"bg-red-100 text-red-800":(P.benzene||0)>20?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:P.benzene||0})}),u.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:u.jsx("span",{className:`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${(P.carbonMonoxide||0)>45?"bg-red-100 text-red-800":(P.carbonMonoxide||0)>25?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:P.carbonMonoxide||0})})]},P.id))})]})})]})]})},rA=()=>{const[t,e]=w.useState([]),[n,r]=w.useState(null),[i,s]=w.useState(!1),[o,a]=w.useState(!1),[l,c]=w.useState({startDate:new Date(Date.now()-7*24*60*60*1e3).toISOString().split("T")[0],endDate:new Date().toISOString().split("T")[0]}),f=(p,y)=>{c(x=>({...x,[p]:y}))},d=async()=>{s(!0),a(!1),console.log("Analytics: Fetching data with date range:",l.startDate,"to",l.endDate);try{const p=await Yv.getAnalyticsData(l.startDate,l.endDate);console.log("Analytics: Data received:",p.data.length,"records"),e(p.data),r(p.analysis),a(!0)}catch(p){console.error("Error loading analytics data:",p)}finally{s(!1)}},h=t.reduce((p,y)=>p+y.organicWeight,0),m=t.reduce((p,y)=>p+y.inorganicWeight,0),_=t.reduce((p,y)=>p+y.totalWeight,0),v=t.length>0?t.reduce((p,y)=>p+y.pollution,0)/t.length:0,E=t.length>0?t.reduce((p,y)=>p+y.globalWarmingImpact,0)/t.length:0,g=()=>{const p=["Date,Wet Waste Container Weight,Dry Waste Container Weight,Total Weight,Pollution,Global Warming Impact",...t.map(I=>`${I.date},${I.organicWeight},${I.inorganicWeight},${I.totalWeight},${I.pollution},${I.globalWarmingImpact}`)].join(`
`),y=new Blob([p],{type:"text/csv"}),x=window.URL.createObjectURL(y),C=document.createElement("a");C.href=x,C.download=`waste-analytics-${l.startDate}-${l.endDate}.csv`,document.body.appendChild(C),C.click(),document.body.removeChild(C),window.URL.revokeObjectURL(x)};return u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[u.jsx("div",{className:"mb-8",children:u.jsxs("div",{className:"flex justify-between items-center mb-4",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Environmental Analytics"}),u.jsx("p",{className:"text-gray-600 dark:text-gray-300 mt-1",children:"ML-powered pollution and global warming impact analysis"})]}),o&&u.jsxs("button",{onClick:g,disabled:t.length===0,className:"flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200",children:[u.jsx(AP,{className:"h-4 w-4"}),u.jsx("span",{children:"Download Report"})]})]})}),u.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx(vm,{className:"h-5 w-5 text-gray-600 dark:text-gray-300"}),u.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Select Date Range for Analysis"})]}),u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Start Date"}),u.jsx("input",{type:"date",value:l.startDate,onChange:p=>f("startDate",p.target.value),className:"border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"End Date"}),u.jsx("input",{type:"date",value:l.endDate,onChange:p=>f("endDate",p.target.value),className:"border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),u.jsx("button",{onClick:d,disabled:i,className:"px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200",children:i?"Analyzing...":"Apply Filter"})]})]})}),i&&u.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"}),u.jsx("p",{className:"text-gray-600",children:"Running ML analysis on dashboard data..."})]})}),o&&!i&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8",children:[u.jsx("div",{className:"bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-green-100 text-sm font-medium",children:"Total Wet Waste"}),u.jsxs("p",{className:"text-2xl font-bold",children:[h.toFixed(1)," kg"]})]}),u.jsx(zP,{className:"h-8 w-8 text-green-200"})]})}),u.jsx("div",{className:"bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-blue-100 text-sm font-medium",children:"Total Dry Waste"}),u.jsxs("p",{className:"text-2xl font-bold",children:[m.toFixed(1)," kg"]})]}),u.jsx(Oh,{className:"h-8 w-8 text-blue-200"})]})}),u.jsx("div",{className:"bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-purple-100 text-sm font-medium",children:"Total Weight"}),u.jsxs("p",{className:"text-2xl font-bold",children:[_.toFixed(1)," kg"]})]}),u.jsx(wm,{className:"h-8 w-8 text-purple-200"})]})}),u.jsx("div",{className:"bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-6 text-white",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-red-100 text-sm font-medium",children:"Avg. Pollution"}),u.jsx("p",{className:"text-2xl font-bold",children:v.toFixed(1)})]}),u.jsx(PP,{className:"h-8 w-8 text-red-200"})]})}),u.jsx("div",{className:"bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-orange-100 text-sm font-medium",children:"Global Warming"}),u.jsx("p",{className:"text-2xl font-bold",children:E.toFixed(1)})]}),u.jsx(wm,{className:"h-8 w-8 text-orange-200"})]})})]}),n&&u.jsxs("div",{className:"bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 p-6 mb-8",children:[u.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[u.jsx("div",{className:"bg-indigo-600 p-2 rounded-lg",children:u.jsx(UP,{className:"h-6 w-6 text-white"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"ML-Powered Suggestions"}),u.jsx("p",{className:"text-sm text-gray-600",children:"Based on environmental impact analysis"})]})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[u.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[u.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"Pollution Level Analysis"}),u.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[u.jsx("div",{className:"w-full bg-gray-200 rounded-full h-3",children:u.jsx("div",{className:`h-3 rounded-full transition-all duration-500 ${n.pollution>60?"bg-red-500":n.pollution>40?"bg-yellow-500":"bg-green-500"}`,style:{width:`${Math.min(n.pollution,100)}%`}})}),u.jsx("span",{className:"text-sm font-medium",children:n.pollution.toFixed(1)})]})]}),u.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[u.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"Global Warming Impact"}),u.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[u.jsx("div",{className:"w-full bg-gray-200 rounded-full h-3",children:u.jsx("div",{className:`h-3 rounded-full transition-all duration-500 ${n.globalWarmingImpact>50?"bg-red-500":n.globalWarmingImpact>30?"bg-orange-500":"bg-green-500"}`,style:{width:`${Math.min(n.globalWarmingImpact,100)}%`}})}),u.jsx("span",{className:"text-sm font-medium",children:n.globalWarmingImpact.toFixed(1)})]})]})]}),u.jsx("div",{className:"space-y-3",children:n.suggestions.map((p,y)=>u.jsxs("div",{className:"flex items-start space-x-3 bg-white rounded-lg p-3 border border-gray-200",children:[u.jsx("div",{className:"flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mt-0.5",children:u.jsx("span",{className:"text-xs font-medium text-indigo-600",children:y+1})}),u.jsx("p",{className:"text-gray-700 text-sm",children:p})]},y))})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8",children:[u.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6",children:[u.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Waste Composition Analysis"}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-center mb-2",children:[u.jsx("span",{className:"text-sm font-medium text-gray-600",children:"Wet Waste Container"}),u.jsxs("span",{className:"text-sm font-bold text-green-600",children:[(h/_*100).toFixed(1),"%"]})]}),u.jsx("div",{className:"w-full bg-gray-200 rounded-full h-3",children:u.jsx("div",{className:"bg-green-500 h-3 rounded-full transition-all duration-500",style:{width:`${h/_*100}%`}})})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-center mb-2",children:[u.jsx("span",{className:"text-sm font-medium text-gray-600",children:"Dry Waste Container"}),u.jsxs("span",{className:"text-sm font-bold text-blue-600",children:[(m/_*100).toFixed(1),"%"]})]}),u.jsx("div",{className:"w-full bg-gray-200 rounded-full h-3",children:u.jsx("div",{className:"bg-blue-500 h-3 rounded-full transition-all duration-500",style:{width:`${m/_*100}%`}})})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6",children:[u.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Environmental Impact Levels"}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-center mb-2",children:[u.jsx("span",{className:"text-sm font-medium text-gray-600",children:"Pollution Level"}),u.jsxs("span",{className:`text-sm font-bold ${v>50?"text-red-600":v>30?"text-yellow-600":"text-green-600"}`,children:[v.toFixed(1),"/100"]})]}),u.jsx("div",{className:"w-full bg-gray-200 rounded-full h-3",children:u.jsx("div",{className:`h-3 rounded-full transition-all duration-500 ${v>50?"bg-red-500":v>30?"bg-yellow-500":"bg-green-500"}`,style:{width:`${Math.min(v,100)}%`}})})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-center mb-2",children:[u.jsx("span",{className:"text-sm font-medium text-gray-600",children:"Global Warming Impact"}),u.jsxs("span",{className:`text-sm font-bold ${E>40?"text-red-600":E>25?"text-orange-600":"text-green-600"}`,children:[E.toFixed(1),"/100"]})]}),u.jsx("div",{className:"w-full bg-gray-200 rounded-full h-3",children:u.jsx("div",{className:`h-3 rounded-full transition-all duration-500 ${E>40?"bg-red-500":E>25?"bg-orange-500":"bg-green-500"}`,style:{width:`${Math.min(E,100)}%`}})})]})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden",children:[u.jsx("div",{className:"px-6 py-4 border-b border-gray-200 bg-gray-50",children:u.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Detailed Analytics Data (ML Processed)"})}),u.jsx("div",{className:"overflow-x-auto",children:t.length===0?u.jsx("div",{className:"p-8 text-center text-gray-500",children:"No data available for the selected date range."}):u.jsxs("table",{className:"w-full",children:[u.jsx("thead",{className:"bg-gray-50",children:u.jsxs("tr",{children:[u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Date"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Wet Waste Container Weight (kg)"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Dry Waste Container Weight (kg)"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Total Weight (kg)"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Pollution Level"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Global Warming Impact"})]})}),u.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:t.map((p,y)=>u.jsxs("tr",{className:y%2===0?"bg-white":"bg-gray-50",children:[u.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900",children:p.date}),u.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium",children:p.organicWeight.toFixed(2)}),u.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-medium",children:p.inorganicWeight.toFixed(2)}),u.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-purple-600 font-medium",children:p.totalWeight.toFixed(2)}),u.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:u.jsx("span",{className:`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${p.pollution>50?"bg-red-100 text-red-800":p.pollution>30?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:p.pollution.toFixed(1)})}),u.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:u.jsx("span",{className:`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${p.globalWarmingImpact>40?"bg-red-100 text-red-800":p.globalWarmingImpact>25?"bg-orange-100 text-orange-800":"bg-green-100 text-green-800"}`,children:p.globalWarmingImpact.toFixed(1)})})]},y))})]})})]})]}),!o&&!i&&u.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center",children:[u.jsx(vm,{className:"h-16 w-16 text-gray-400 mx-auto mb-4"}),u.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Select Date Range to View Analytics"}),u.jsx("p",{className:"text-gray-600",children:'Choose your desired date range and click "Apply Filter" to analyze waste data with our ML model.'})]})]})},iA=()=>{const t=[{icon:JP,title:"Real-time Monitoring",description:"Advanced sensor technology continuously monitors waste levels in both organic and inorganic containers."},{icon:Oh,title:"ML-Powered Analytics",description:"Machine learning algorithms analyze waste data to predict pollution levels and global warming impact."},{icon:LP,title:"Environmental Impact",description:"Track and visualize the environmental consequences of waste generation patterns."},{icon:BP,title:"Cloud Integration",description:"Secure Firebase cloud storage ensures data reliability and accessibility from anywhere."}],e=[{icon:FP,title:"Reduced Environmental Impact",description:"By monitoring and analyzing waste patterns, we help reduce pollution and greenhouse gas emissions."},{icon:GP,title:"Data-Driven Decisions",description:"Make informed decisions about waste management strategies based on real data and analytics."},{icon:QP,title:"Community Awareness",description:"Raise awareness about environmental impact and encourage sustainable practices."}];return u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[u.jsxs("div",{className:"text-center mb-16",children:[u.jsx("div",{className:"flex justify-center mb-6",children:u.jsx("div",{className:"bg-gradient-to-r from-green-500 to-blue-600 p-4 rounded-2xl",children:u.jsx(Cl,{className:"h-12 w-12 text-white"})})}),u.jsx("h1",{className:"text-4xl font-bold text-gray-900 dark:text-white mb-4",children:"Smart Waste Management System"}),u.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8",children:"An intelligent environmental monitoring solution that uses IoT sensors and machine learning to track waste generation, calculate pollution levels, and assess global warming impact."}),u.jsxs("div",{className:"flex justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),u.jsx("span",{children:"Real-time Monitoring"})]}),u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"}),u.jsx("span",{children:"ML Analytics"})]}),u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("div",{className:"w-2 h-2 bg-purple-500 rounded-full"}),u.jsx("span",{children:"Cloud Integration"})]})]})]}),u.jsxs("div",{className:"mb-16",children:[u.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white text-center mb-12",children:"How It Works"}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"bg-green-100 dark:bg-green-900 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center",children:u.jsx("span",{className:"text-2xl font-bold text-green-600 dark:text-green-400",children:"1"})}),u.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-2",children:"Sensor Data Collection"}),u.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"IoT sensors in separate containers continuously monitor organic and inorganic waste weights, sending real-time data to our Firebase cloud database."})]}),u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"bg-blue-100 dark:bg-blue-900 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center",children:u.jsx("span",{className:"text-2xl font-bold text-blue-600 dark:text-blue-400",children:"2"})}),u.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-2",children:"ML Model Processing"}),u.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"Advanced machine learning algorithms analyze the waste data to calculate pollution levels and predict global warming impact based on waste composition and volume."})]}),u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"bg-purple-100 dark:bg-purple-900 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center",children:u.jsx("span",{className:"text-2xl font-bold text-purple-600 dark:text-purple-400",children:"3"})}),u.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-2",children:"Analytics & Insights"}),u.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"The processed data is presented through intuitive dashboards and analytics, helping users understand environmental impact and make informed decisions."})]})]})]}),u.jsxs("div",{className:"mb-16",children:[u.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white text-center mb-12",children:"Key Features"}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:t.map((n,r)=>{const i=n.icon;return u.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-200",children:u.jsxs("div",{className:"flex items-start space-x-4",children:[u.jsx("div",{className:"bg-gradient-to-r from-green-500 to-blue-600 p-3 rounded-lg",children:u.jsx(i,{className:"h-6 w-6 text-white"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-2",children:n.title}),u.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:n.description})]})]})},r)})})]}),u.jsxs("div",{className:"mb-16",children:[u.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white text-center mb-12",children:"Environmental Benefits"}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:e.map((n,r)=>{const i=n.icon;return u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"bg-gradient-to-r from-green-400 to-green-600 rounded-2xl p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center",children:u.jsx(i,{className:"h-10 w-10 text-white"})}),u.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-3",children:n.title}),u.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:n.description})]},r)})})]}),u.jsxs("div",{className:"bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 mb-16",children:[u.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white text-center mb-8",children:"Technical Specifications"}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[u.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm",children:[u.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white mb-2",children:"Sensor Technology"}),u.jsxs("ul",{className:"text-gray-600 dark:text-gray-300 text-sm space-y-1",children:[u.jsx("li",{children:"• High-precision weight sensors"}),u.jsx("li",{children:"• Real-time data transmission"}),u.jsx("li",{children:"• IoT connectivity"}),u.jsx("li",{children:"• Weather-resistant design"})]})]}),u.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm",children:[u.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white mb-2",children:"Data Processing"}),u.jsxs("ul",{className:"text-gray-600 dark:text-gray-300 text-sm space-y-1",children:[u.jsx("li",{children:"• Machine learning algorithms"}),u.jsx("li",{children:"• Real-time analytics"}),u.jsx("li",{children:"• Predictive modeling"}),u.jsx("li",{children:"• Historical data analysis"})]})]}),u.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm",children:[u.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white mb-2",children:"Cloud Infrastructure"}),u.jsxs("ul",{className:"text-gray-600 dark:text-gray-300 text-sm space-y-1",children:[u.jsx("li",{children:"• Firebase cloud storage"}),u.jsx("li",{children:"• RESTful API architecture"}),u.jsx("li",{children:"• Secure data transmission"}),u.jsx("li",{children:"• Scalable infrastructure"})]})]})]})]}),u.jsxs("div",{className:"text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-white",children:[u.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Join the Environmental Revolution"}),u.jsx("p",{className:"text-xl mb-8 text-green-100",children:"Help us create a sustainable future through intelligent waste management and environmental monitoring."}),u.jsxs("div",{className:"flex justify-center space-x-4",children:[u.jsxs("div",{className:"bg-white bg-opacity-20 rounded-lg p-4 text-center",children:[u.jsx("div",{className:"text-2xl font-bold",children:"24/7"}),u.jsx("div",{className:"text-sm text-green-100",children:"Monitoring"})]}),u.jsxs("div",{className:"bg-white bg-opacity-20 rounded-lg p-4 text-center",children:[u.jsx("div",{className:"text-2xl font-bold",children:"Real-time"}),u.jsx("div",{className:"text-sm text-green-100",children:"Analytics"})]}),u.jsxs("div",{className:"bg-white bg-opacity-20 rounded-lg p-4 text-center",children:[u.jsx("div",{className:"text-2xl font-bold",children:"Cloud"}),u.jsx("div",{className:"text-sm text-green-100",children:"Storage"})]})]})]})]})};console.log("App component is loading...");const vc=({children:t})=>{const{user:e,loading:n}=Lh();return n?u.jsx("div",{className:"min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center",children:u.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 dark:border-green-500"})}):e?u.jsx(u.Fragment,{children:t}):u.jsx(Od,{to:"/login"})},xm=({children:t})=>{const{user:e,loading:n}=Lh();return n?u.jsx("div",{className:"min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center",children:u.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 dark:border-green-500"})}):e?u.jsx(Od,{to:"/dashboard"}):u.jsx(u.Fragment,{children:t})};function sA(){return u.jsx(LE,{children:u.jsxs(hE,{children:[u.jsx(Gn,{path:"/login",element:u.jsx(xm,{children:u.jsx(ZP,{})})}),u.jsx(Gn,{path:"/register",element:u.jsx(xm,{children:u.jsx(eA,{})})}),u.jsx(Gn,{path:"/dashboard",element:u.jsx(vc,{children:u.jsx(_c,{children:u.jsx(nA,{})})})}),u.jsx(Gn,{path:"/analytics",element:u.jsx(vc,{children:u.jsx(_c,{children:u.jsx(rA,{})})})}),u.jsx(Gn,{path:"/about",element:u.jsx(vc,{children:u.jsx(_c,{children:u.jsx(iA,{})})})}),u.jsx(Gn,{path:"/",element:u.jsx(Od,{to:"/dashboard"})})]})})}function oA(){return u.jsx(TP,{children:u.jsx(NP,{children:u.jsx(sA,{})})})}Dy(document.getElementById("root")).render(u.jsx(w.StrictMode,{children:u.jsx(oA,{})}));
