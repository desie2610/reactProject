var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ee(e,t){return E(e.type,t,e.props)}function te(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function D(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function re(e,t){return typeof e==`object`&&e&&e.key!=null?D(``+e.key):t.toString(36)}function ie(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ae(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ae(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+re(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ne,`$&/`)+`/`),ae(o,r,i,``,function(e){return e})):o!=null&&(te(o)&&(o=ee(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+re(a,u),c+=ae(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+re(a,u++),c+=ae(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ae(ie(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function oe(e,t,n){if(e==null)return e;var r=[],i=0;return ae(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function se(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},k={map:oe,forEach:function(e,t,n){oe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oe(e,function(){t++}),t},toArray:function(e){return oe(e,function(e){return e})||[]},only:function(e){if(!te(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=k,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=te,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:se}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,O)}catch(e){O(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,te());else{var t=n(l);t!==null&&re(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function ee(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&re(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?te():S=!1}}}var te;if(typeof y==`function`)te=function(){y(ee)};else if(typeof MessageChannel<`u`){var D=new MessageChannel,ne=D.port2;D.port1.onmessage=ee,te=function(){ne.postMessage(null)}}else te=function(){_(ee,0)};function re(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,re(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,te()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),ee=Symbol.for(`react.memo`),te=Symbol.for(`react.lazy`),D=Symbol.for(`react.activity`),ne=Symbol.for(`react.memo_cache_sentinel`),re=Symbol.iterator;function ie(e){return typeof e!=`object`||!e?null:(e=re&&e[re]||e[`@@iterator`],typeof e==`function`?e:null)}var ae=Symbol.for(`react.client.reference`);function oe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case D:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ee:return t=e.displayName||null,t===null?oe(e.type)||`Memo`:t;case te:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var se=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},le=[],ue=-1;function de(e){return{current:e}}function fe(e){0>ue||(e.current=le[ue],le[ue]=null,ue--)}function A(e,t){ue++,le[ue]=e.current,e.current=t}var pe=de(null),me=de(null),he=de(null),ge=de(null);function _e(e,t){switch(A(he,t),A(me,e),A(pe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}fe(pe),A(pe,e)}function ve(){fe(pe),fe(me),fe(he)}function ye(e){e.memoizedState!==null&&A(ge,e);var t=pe.current,n=Hd(t,e.type);t!==n&&(A(me,e),A(pe,n))}function be(e){me.current===e&&(fe(pe),fe(me)),ge.current===e&&(fe(ge),Qf._currentValue=ce)}var xe,Se;function Ce(e){if(xe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);xe=t&&t[1]||``,Se=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+xe+e+Se}var we=!1;function j(e,t){if(!e||we)return``;we=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{we=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ce(n):``}function Te(e,t){switch(e.tag){case 26:case 27:case 5:return Ce(e.type);case 16:return Ce(`Lazy`);case 13:return e.child!==t&&t!==null?Ce(`Suspense Fallback`):Ce(`Suspense`);case 19:return Ce(`SuspenseList`);case 0:case 15:return j(e.type,!1);case 11:return j(e.type.render,!1);case 1:return j(e.type,!0);case 31:return Ce(`Activity`);default:return``}}function Ee(e){try{var t=``,n=null;do t+=Te(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var De=Object.prototype.hasOwnProperty,Oe=t.unstable_scheduleCallback,ke=t.unstable_cancelCallback,Ae=t.unstable_shouldYield,je=t.unstable_requestPaint,Me=t.unstable_now,Ne=t.unstable_getCurrentPriorityLevel,Pe=t.unstable_ImmediatePriority,Fe=t.unstable_UserBlockingPriority,Ie=t.unstable_NormalPriority,Le=t.unstable_LowPriority,Re=t.unstable_IdlePriority,ze=t.log,Be=t.unstable_setDisableYieldValue,Ve=null,He=null;function Ue(e){if(typeof ze==`function`&&Be(e),He&&typeof He.setStrictMode==`function`)try{He.setStrictMode(Ve,e)}catch{}}var We=Math.clz32?Math.clz32:qe,Ge=Math.log,Ke=Math.LN2;function qe(e){return e>>>=0,e===0?32:31-(Ge(e)/Ke|0)|0}var Je=256,Ye=262144,Xe=4194304;function Ze(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ze(n))):i=Ze(o):i=Ze(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ze(n))):i=Ze(o)):i=Ze(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function $e(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function et(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tt(){var e=Xe;return Xe<<=1,!(Xe&62914560)&&(Xe=4194304),e}function nt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function it(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-We(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&at(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function at(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-We(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ot(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function st(e,t){var n=t&-t;return n=n&42?1:ct(n),(n&(e.suspendedLanes|t))===0?n:0}function ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ut(){var e=k.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function dt(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var ft=Math.random().toString(36).slice(2),pt=`__reactFiber$`+ft,mt=`__reactProps$`+ft,ht=`__reactContainer$`+ft,gt=`__reactEvents$`+ft,_t=`__reactListeners$`+ft,vt=`__reactHandles$`+ft,yt=`__reactResources$`+ft,bt=`__reactMarker$`+ft;function xt(e){delete e[pt],delete e[mt],delete e[gt],delete e[_t],delete e[vt]}function St(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[pt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Ct(e){if(e=e[pt]||e[ht]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function M(e){var t=e[yt];return t||=e[yt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Tt(e){e[bt]=!0}var Et=new Set,Dt={};function Ot(e,t){kt(e,t),kt(e+`Capture`,t)}function kt(e,t){for(Dt[e]=t,e=0;e<t.length;e++)Et.add(t[e])}var At=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),jt={},N={};function Mt(e){return De.call(N,e)?!0:De.call(jt,e)?!1:At.test(e)?N[e]=!0:(jt[e]=!0,!1)}function Nt(e,t,n){if(Mt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Pt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Ft(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function It(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Lt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Rt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zt(e){if(!e._valueTracker){var t=Lt(e)?`checked`:`value`;e._valueTracker=Rt(e,t,``+e[t])}}function Bt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Lt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Vt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Ht=/[\n"\\]/g;function Ut(e){return e.replace(Ht,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Wt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+It(t)):e.value!==``+It(t)&&(e.value=``+It(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Gt(e,o,It(n)):Gt(e,o,It(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+It(s):e.removeAttribute(`name`)}function P(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){zt(e);return}n=n==null?``:``+It(n),t=t==null?n:``+It(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),zt(e)}function Gt(e,t,n){t===`number`&&Vt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Kt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+It(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function qt(e,t,n){if(t!=null&&(t=``+It(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+It(n)}function Jt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(se(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=It(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),zt(e)}function Yt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Zt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Xt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Qt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Zt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Zt(e,o,t[o])}function $t(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var en=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),tn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nn(e){return tn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function F(){}var rn=null;function an(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var on=null,sn=null;function cn(e){var t=Ct(e);if(t&&(e=t.stateNode)){var n=e[mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Wt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Ut(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[mt]||null;if(!a)throw Error(i(90));Wt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Bt(r)}break a;case`textarea`:qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Kt(e,!!n.multiple,t,!1)}}}var ln=!1;function un(e,t,n){if(ln)return e(t,n);ln=!0;try{return e(t)}finally{if(ln=!1,(on!==null||sn!==null)&&(bu(),on&&(t=on,e=sn,sn=on=null,cn(t),e)))for(t=0;t<e.length;t++)cn(e[t])}}function dn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var fn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),pn=!1;if(fn)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){pn=!0}}),window.addEventListener(`test`,mn,mn),window.removeEventListener(`test`,mn,mn)}catch{pn=!1}var hn=null,gn=null,_n=null;function vn(){if(_n)return _n;var e,t=gn,n=t.length,r,i=`value`in hn?hn.value:hn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return _n=i.slice(e,1<r?1-r:void 0)}function yn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bn(){return!0}function xn(){return!1}function Sn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?bn:xn,this.isPropagationStopped=xn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=bn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=bn)},persist:function(){},isPersistent:bn}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wn=Sn(Cn),Tn=h({},Cn,{view:0,detail:0}),En=Sn(Tn),Dn,On,kn,An=h({},Tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==kn&&(kn&&e.type===`mousemove`?(Dn=e.screenX-kn.screenX,On=e.screenY-kn.screenY):On=Dn=0,kn=e),Dn)},movementY:function(e){return`movementY`in e?e.movementY:On}}),jn=Sn(An),Mn=Sn(h({},An,{dataTransfer:0})),Nn=Sn(h({},Tn,{relatedTarget:0})),Pn=Sn(h({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0})),Fn=Sn(h({},Cn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),In=Sn(h({},Cn,{data:0})),Ln={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Rn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},zn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Bn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zn[e])?!!t[e]:!1}function Vn(){return Bn}var Hn=Sn(h({},Tn,{key:function(e){if(e.key){var t=Ln[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=yn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Rn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vn,charCode:function(e){return e.type===`keypress`?yn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?yn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Un=Sn(h({},An,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Wn=Sn(h({},Tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vn})),Gn=Sn(h({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Kn=Sn(h({},An,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),qn=Sn(h({},Cn,{newState:0,oldState:0})),Jn=[9,13,27,32],Yn=fn&&`CompositionEvent`in window,Xn=null;fn&&`documentMode`in document&&(Xn=document.documentMode);var Zn=fn&&`TextEvent`in window&&!Xn,Qn=fn&&(!Yn||Xn&&8<Xn&&11>=Xn),$n=` `,er=!1;function tr(e,t){switch(e){case`keyup`:return Jn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function nr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var rr=!1;function ir(e,t){switch(e){case`compositionend`:return nr(t);case`keypress`:return t.which===32?(er=!0,$n):null;case`textInput`:return e=t.data,e===$n&&er?null:e;default:return null}}function ar(e,t){if(rr)return e===`compositionend`||!Yn&&tr(e,t)?(e=vn(),_n=gn=hn=null,rr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Qn&&t.locale!==`ko`?null:t.data;default:return null}}var or={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!or[e.type]:t===`textarea`}function cr(e,t,n,r){on?sn?sn.push(r):sn=[r]:on=r,t=Ed(t,`onChange`),0<t.length&&(n=new wn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var lr=null,ur=null;function dr(e){yd(e,0)}function fr(e){if(Bt(wt(e)))return e}function pr(e,t){if(e===`change`)return t}var mr=!1;if(fn){var hr;if(fn){var gr=`oninput`in document;if(!gr){var _r=document.createElement(`div`);_r.setAttribute(`oninput`,`return;`),gr=typeof _r.oninput==`function`}hr=gr}else hr=!1;mr=hr&&(!document.documentMode||9<document.documentMode)}function vr(){lr&&(lr.detachEvent(`onpropertychange`,yr),ur=lr=null)}function yr(e){if(e.propertyName===`value`&&fr(ur)){var t=[];cr(t,ur,e,an(e)),un(dr,t)}}function br(e,t,n){e===`focusin`?(vr(),lr=t,ur=n,lr.attachEvent(`onpropertychange`,yr)):e===`focusout`&&vr()}function xr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return fr(ur)}function Sr(e,t){if(e===`click`)return fr(t)}function Cr(e,t){if(e===`input`||e===`change`)return fr(t)}function wr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Tr=typeof Object.is==`function`?Object.is:wr;function Er(e,t){if(Tr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!De.call(t,i)||!Tr(e[i],t[i]))return!1}return!0}function Dr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Or(e,t){var n=Dr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Dr(n)}}function kr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ar(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vt(e.document)}return t}function jr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Mr=fn&&`documentMode`in document&&11>=document.documentMode,Nr=null,Pr=null,Fr=null,Ir=!1;function Lr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ir||Nr==null||Nr!==Vt(r)||(r=Nr,`selectionStart`in r&&jr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fr&&Er(Fr,r)||(Fr=r,r=Ed(Pr,`onSelect`),0<r.length&&(t=new wn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Nr)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var zr={animationend:Rr(`Animation`,`AnimationEnd`),animationiteration:Rr(`Animation`,`AnimationIteration`),animationstart:Rr(`Animation`,`AnimationStart`),transitionrun:Rr(`Transition`,`TransitionRun`),transitionstart:Rr(`Transition`,`TransitionStart`),transitioncancel:Rr(`Transition`,`TransitionCancel`),transitionend:Rr(`Transition`,`TransitionEnd`)},Br={},Vr={};fn&&(Vr=document.createElement(`div`).style,`AnimationEvent`in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),`TransitionEvent`in window||delete zr.transitionend.transition);function Hr(e){if(Br[e])return Br[e];if(!zr[e])return e;var t=zr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vr)return Br[e]=t[n];return e}var Ur=Hr(`animationend`),Wr=Hr(`animationiteration`),Gr=Hr(`animationstart`),Kr=Hr(`transitionrun`),qr=Hr(`transitionstart`),Jr=Hr(`transitioncancel`),Yr=Hr(`transitionend`),Xr=new Map,Zr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Zr.push(`scrollEnd`);function Qr(e,t){Xr.set(e,t),Ot(t,[e])}var $r=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ei=[],ti=0,ni=0;function ri(){for(var e=ti,t=ni=ti=0;t<e;){var n=ei[t];ei[t++]=null;var r=ei[t];ei[t++]=null;var i=ei[t];ei[t++]=null;var a=ei[t];if(ei[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&si(n,i,a)}}function ii(e,t,n,r){ei[ti++]=e,ei[ti++]=t,ei[ti++]=n,ei[ti++]=r,ni|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ai(e,t,n,r){return ii(e,t,n,r),ci(e)}function oi(e,t){return ii(e,null,null,t),ci(e)}function si(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-We(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ci(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var li={};function ui(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(e,t,n,r){return new ui(e,t,n,r)}function fi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pi(e,t){var n=e.alternate;return n===null?(n=di(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function mi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)fi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,pe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case D:return e=di(31,n,t,a),e.elementType=D,e.lanes=o,e;case y:return gi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=di(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=di(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=di(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ee:s=14;break a;case te:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=di(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function gi(e,t,n,r){return e=di(7,e,r,t),e.lanes=n,e}function _i(e,t,n){return e=di(6,e,null,t),e.lanes=n,e}function vi(e){var t=di(18,null,null,0);return t.stateNode=e,t}function yi(e,t,n){return t=di(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var bi=new WeakMap;function xi(e,t){if(typeof e==`object`&&e){var n=bi.get(e);return n===void 0?(t={value:e,source:t,stack:Ee(t)},bi.set(e,t),t):n}return{value:e,source:t,stack:Ee(t)}}var Si=[],Ci=0,wi=null,Ti=0,Ei=[],Di=0,Oi=null,ki=1,Ai=``;function ji(e,t){Si[Ci++]=Ti,Si[Ci++]=wi,wi=e,Ti=t}function I(e,t,n){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,Oi=e;var r=ki;e=Ai;var i=32-We(r)-1;r&=~(1<<i),n+=1;var a=32-We(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ki=1<<32-We(t)+i|n<<i|r,Ai=a+e}else ki=1<<a|n<<i|r,Ai=e}function Mi(e){e.return!==null&&(ji(e,1),I(e,1,0))}function Ni(e){for(;e===wi;)wi=Si[--Ci],Si[Ci]=null,Ti=Si[--Ci],Si[Ci]=null;for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,Ai=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null}function Pi(e,t){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,ki=t.id,Ai=t.overflow,Oi=e}var Fi=null,L=null,R=!1,Ii=null,Li=!1,Ri=Error(i(519));function zi(e){throw Gi(xi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ri}function Bi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[pt]=e,t[mt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),P(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Jt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=F),t=!0):t=!1,t||zi(e,!0)}function Vi(e){for(Fi=e.return;Fi;)switch(Fi.tag){case 5:case 31:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:Fi=Fi.return}}function Hi(e){if(e!==Fi)return!1;if(!R)return Vi(e),R=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&L&&zi(e),Vi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));L=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));L=uf(e)}else t===27?(t=L,Zd(e.type)?(e=lf,lf=null,L=e):L=t):L=Fi?cf(e.stateNode.nextSibling):null;return!0}function Ui(){L=Fi=null,R=!1}function Wi(){var e=Ii;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Ii=null),e}function Gi(e){Ii===null?Ii=[e]:Ii.push(e)}var Ki=de(null),qi=null,Ji=null;function Yi(e,t,n){A(Ki,t._currentValue),t._currentValue=n}function Xi(e){e._currentValue=Ki.current,fe(Ki)}function Zi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Qi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Zi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Zi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function $i(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Tr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ge.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Qi(t,e,n,r),t.flags|=262144}function ea(e){for(e=e.firstContext;e!==null;){if(!Tr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ta(e){qi=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function na(e){return ia(qi,e)}function ra(e,t){return qi===null&&ta(e),ia(e,t)}function ia(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ji===null){if(e===null)throw Error(i(308));Ji=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ji=Ji.next=t;return n}var aa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},oa=t.unstable_scheduleCallback,sa=t.unstable_NormalPriority,ca={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function la(){return{controller:new aa,data:new Map,refCount:0}}function ua(e){e.refCount--,e.refCount===0&&oa(sa,function(){e.controller.abort()})}var da=null,fa=0,pa=0,ma=null;function ha(e,t){if(da===null){var n=da=[];fa=0,pa=dd(),ma={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return fa++,t.then(ga,ga),t}function ga(){if(--fa===0&&da!==null){ma!==null&&(ma.status=`fulfilled`);var e=da;da=null,pa=0,ma=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _a(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var va=O.S;O.S=function(e,t){eu=Me(),typeof t==`object`&&t&&typeof t.then==`function`&&ha(e,t),va!==null&&va(e,t)};var ya=de(null);function ba(){var e=ya.current;return e===null?Rl.pooledCache:e}function xa(e,t){t===null?A(ya,ya.current):A(ya,t.pool)}function Sa(){var e=ba();return e===null?null:{parent:ca._currentValue,pool:e}}var Ca=Error(i(460)),wa=Error(i(474)),Ta=Error(i(542)),Ea={then:function(){}};function Da(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Oa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(F,F),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ma(e),e;default:if(typeof t.status==`string`)t.then(F,F);else{if(e=Rl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ma(e),e}throw Aa=t,Ca}}function ka(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Aa=e,Ca):e}}var Aa=null;function ja(){if(Aa===null)throw Error(i(459));var e=Aa;return Aa=null,e}function Ma(e){if(e===Ca||e===Ta)throw Error(i(483))}var Na=null,Pa=0;function Fa(e){var t=Pa;return Pa+=1,Na===null&&(Na=[]),Oa(Na,e,t)}function Ia(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function La(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ra(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=pi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=_i(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===te&&ka(i)===t.type)?(t=a(t,n.props),Ia(t,n),t.return=e,t):(t=hi(n.type,n.key,n.props,null,e.mode,r),Ia(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=gi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=_i(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=hi(t.type,t.key,t.props,null,e.mode,n),Ia(n,t),n.return=e,n;case v:return t=yi(t,e.mode,n),t.return=e,t;case te:return t=ka(t),f(e,t,n)}if(se(t)||ie(t))return t=gi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Fa(t),n);if(t.$$typeof===C)return f(e,ra(e,t),n);La(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case te:return n=ka(n),p(e,t,n,r)}if(se(n)||ie(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Fa(n),r);if(n.$$typeof===C)return p(e,t,ra(e,n),r);La(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case te:return r=ka(r),m(e,t,n,r,i)}if(se(r)||ie(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Fa(r),i);if(r.$$typeof===C)return m(e,t,n,ra(t,r),i);La(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),R&&ji(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return R&&ji(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),R&&ji(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),R&&ji(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return R&&ji(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),R&&ji(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===te&&ka(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ia(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=gi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=hi(o.type,o.key,o.props,null,e.mode,c),Ia(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=yi(o,e.mode,c),c.return=e,e=c}return s(e);case te:return o=ka(o),b(e,r,o,c)}if(se(o))return h(e,r,o,c);if(ie(o)){if(l=ie(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Fa(o),c);if(o.$$typeof===C)return b(e,r,ra(e,o),c);La(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=_i(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Pa=0;var i=b(e,t,n,r);return Na=null,i}catch(t){if(t===Ca||t===Ta)throw t;var a=di(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var za=Ra(!0),Ba=Ra(!1),Va=!1;function Ha(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ua(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ci(e),si(e,null,n),t}return ii(e,r,t,n),ci(e)}function Ka(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}function qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ja=!1;function Ya(){if(Ja){var e=ma;if(e!==null)throw e}}function Xa(e,t,n,r){Ja=!1;var i=e.updateQueue;Va=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===pa&&(Ja=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Va=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Za(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Qa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Za(n[e],t)}var $a=de(null),eo=de(0);function to(e,t){e=Ul,A(eo,e),A($a,t),Ul=e|t.baseLanes}function no(){A(eo,Ul),A($a,$a.current)}function z(){Ul=eo.current,fe($a),fe(eo)}var B=de(null),V=null;function ro(e){var t=e.alternate;A(W,W.current&1),A(B,e),V===null&&(t===null||$a.current!==null||t.memoizedState!==null)&&(V=e)}function io(e){A(W,W.current),A(B,e),V===null&&(V=e)}function H(e){e.tag===22?(A(W,W.current),A(B,e),V===null&&(V=e)):ao(e)}function ao(){A(W,W.current),A(B,B.current)}function U(e){fe(B),V===e&&(V=null),fe(W)}var W=de(0);function oo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var so=0,G=null,K=null,co=null,lo=!1,uo=!1,fo=!1,po=0,mo=0,ho=null,go=0;function _o(){throw Error(i(321))}function vo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tr(e[n],t[n]))return!1;return!0}function yo(e,t,n,r,i,a){return so=a,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Is:Ls,fo=!1,a=n(r,i),fo=!1,uo&&(a=xo(t,n,r,i)),bo(e),a}function bo(e){O.H=Fs;var t=K!==null&&K.next!==null;if(so=0,co=K=G=null,lo=!1,mo=0,ho=null,t)throw Error(i(300));e===null||ec||(e=e.dependencies,e!==null&&ea(e)&&(ec=!0))}function xo(e,t,n,r){G=e;var a=0;do{if(uo&&(ho=null),mo=0,uo=!1,25<=a)throw Error(i(301));if(a+=1,co=K=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}O.H=Rs,o=t(n,r)}while(uo);return o}function So(){var e=O.H,t=e.useState()[0];return t=typeof t.then==`function`?ko(t):t,e=e.useState()[0],(K===null?null:K.memoizedState)!==e&&(G.flags|=1024),t}function Co(){var e=po!==0;return po=0,e}function wo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function To(e){if(lo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}lo=!1}so=0,co=K=G=null,uo=!1,mo=po=0,ho=null}function Eo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return co===null?G.memoizedState=co=e:co=co.next=e,co}function Do(){if(K===null){var e=G.alternate;e=e===null?null:e.memoizedState}else e=K.next;var t=co===null?G.memoizedState:co.next;if(t!==null)co=t,K=e;else{if(e===null)throw G.alternate===null?Error(i(467)):Error(i(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},co===null?G.memoizedState=co=e:co=co.next=e}return co}function Oo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ko(e){var t=mo;return mo+=1,ho===null&&(ho=[]),e=Oa(ho,e,t),t=G,(co===null?t.memoizedState:co.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Is:Ls),e}function Ao(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return ko(e);if(e.$$typeof===C)return na(e)}throw Error(i(438,String(e)))}function jo(e){var t=null,n=G.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=G.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Oo(),G.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ne;return t.index++,n}function Mo(e,t){return typeof t==`function`?t(e):t}function No(e){return Po(Do(),K,e)}function Po(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(so&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===pa&&(d=!0);else if((so&p)===p){u=u.next,p===pa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,G.lanes|=p,Gl|=p;f=u.action,fo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,G.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Tr(o,e.memoizedState)&&(ec=!0,d&&(n=ma,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Fo(e){var t=Do(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Tr(o,t.memoizedState)||(ec=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Io(e,t,n){var r=G,a=Do(),o=R;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Tr((K||a).memoizedState,n);if(s&&(a.memoizedState=n,ec=!0),a=a.queue,ss(zo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||co!==null&&co.memoizedState.tag&1){if(r.flags|=2048,ns(9,{destroy:void 0},Ro.bind(null,r,a,n,t),null),Rl===null)throw Error(i(349));o||so&127||Lo(r,t,n)}return n}function Lo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t=Oo(),G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ro(e,t,n,r){t.value=n,t.getSnapshot=r,Bo(t)&&Vo(e)}function zo(e,t,n){return n(function(){Bo(t)&&Vo(e)})}function Bo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tr(e,n)}catch{return!0}}function Vo(e){var t=oi(e,2);t!==null&&hu(t,e,2)}function Ho(e){var t=Eo();if(typeof e==`function`){var n=e;if(e=n(),fo){Ue(!0);try{n()}finally{Ue(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:e},t}function Uo(e,t,n,r){return e.baseState=n,Po(e,K,typeof r==`function`?r:Mo)}function Wo(e,t,n,r,a){if(Ms(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};O.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Go(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Go(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=O.T,o={};O.T=o;try{var s=n(i,r),c=O.S;c!==null&&c(o,s),Ko(e,t,s)}catch(n){Jo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),O.T=a}}else try{a=n(i,r),Ko(e,t,a)}catch(n){Jo(e,t,n)}}function Ko(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){qo(e,t,n)},function(n){return Jo(e,t,n)}):qo(e,t,n)}function qo(e,t,n){t.status=`fulfilled`,t.value=n,Yo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Go(e,n)))}function Jo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Yo(t),t=t.next;while(t!==r)}e.action=null}function Yo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Xo(e,t){return t}function Zo(e,t){if(R){var n=Rl.formState;if(n!==null){a:{var r=G;if(R){if(L){b:{for(var i=L,a=Li;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){L=cf(i.nextSibling),r=i.data===`F!`;break a}}zi(r)}r=!1}r&&(t=n[0])}}return n=Eo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:t},n.queue=r,n=ks.bind(null,G,r),r.dispatch=n,r=Ho(!1),a=js.bind(null,G,!1,r.queue),r=Eo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Wo.bind(null,G,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Qo(e){return $o(Do(),K,e)}function $o(e,t,n){if(t=Po(e,t,Xo)[0],e=No(Mo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=ko(t)}catch(e){throw e===Ca?Ta:e}else r=t;t=Do();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(G.flags|=2048,ns(9,{destroy:void 0},es.bind(null,i,n),null)),[r,a,e]}function es(e,t){e.action=t}function ts(e){var t=Do(),n=K;if(n!==null)return $o(t,n,e);Do(),t=t.memoizedState,n=Do();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ns(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=G.updateQueue,t===null&&(t=Oo(),G.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function rs(){return Do().memoizedState}function is(e,t,n,r){var i=Eo();G.flags|=e,i.memoizedState=ns(1|t,{destroy:void 0},n,r===void 0?null:r)}function as(e,t,n,r){var i=Do();r=r===void 0?null:r;var a=i.memoizedState.inst;K!==null&&r!==null&&vo(r,K.memoizedState.deps)?i.memoizedState=ns(t,a,n,r):(G.flags|=e,i.memoizedState=ns(1|t,a,n,r))}function os(e,t){is(8390656,8,e,t)}function ss(e,t){as(2048,8,e,t)}function cs(e){G.flags|=4;var t=G.updateQueue;if(t===null)t=Oo(),G.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ls(e){var t=Do().memoizedState;return cs({ref:t,nextImpl:e}),function(){if(q&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function us(e,t){return as(4,2,e,t)}function ds(e,t){return as(4,4,e,t)}function fs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ps(e,t,n){n=n==null?null:n.concat([e]),as(4,4,fs.bind(null,t,e),n)}function ms(){}function hs(e,t){var n=Do();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&vo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gs(e,t){var n=Do();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&vo(t,r[1]))return r[0];if(r=e(),fo){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r}function _s(e,t,n){return n===void 0||so&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),G.lanes|=e,Gl|=e,n)}function vs(e,t,n,r){return Tr(n,t)?n:$a.current===null?!(so&42)||so&1073741824&&!(Y&261930)?(ec=!0,e.memoizedState=n):(e=mu(),G.lanes|=e,Gl|=e,t):(e=_s(e,n,r),Tr(e,t)||(ec=!0),e)}function ys(e,t,n,r,i){var a=k.p;k.p=a!==0&&8>a?a:8;var o=O.T,s={};O.T=s,js(e,!1,t,n);try{var c=i(),l=O.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?As(e,t,_a(c,r),pu(e)):As(e,t,r,pu(e))}catch(n){As(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{k.p=a,o!==null&&s.types!==null&&(o.types=s.types),O.T=o}}function bs(){}function xs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ss(e).queue;ys(e,a,t,ce,n===null?bs:function(){return Cs(e),n(r)})}function Ss(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:ce},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Cs(e){var t=Ss(e);t.next===null&&(t=e.alternate.memoizedState),As(e,t.next.queue,{},pu())}function ws(){return na(Qf)}function Ts(){return Do().memoizedState}function Es(){return Do().memoizedState}function Ds(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Wa(n);var r=Ga(t,e,n);r!==null&&(hu(r,t,n),Ka(r,t,n)),t={cache:la()},e.payload=t;return}t=t.return}}function Os(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ms(e)?Ns(t,n):(n=ai(e,t,n,r),n!==null&&(hu(n,e,r),Ps(n,t,r)))}function ks(e,t,n){As(e,t,n,pu())}function As(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ms(e))Ns(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Tr(s,o))return ii(e,t,i,0),Rl===null&&ri(),!1}catch{}if(n=ai(e,t,i,r),n!==null)return hu(n,e,r),Ps(n,t,r),!0}return!1}function js(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ms(e)){if(t)throw Error(i(479))}else t=ai(e,n,r,2),t!==null&&hu(t,e,2)}function Ms(e){var t=e.alternate;return e===G||t!==null&&t===G}function Ns(e,t){uo=lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ps(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}var Fs={readContext:na,use:Ao,useCallback:_o,useContext:_o,useEffect:_o,useImperativeHandle:_o,useLayoutEffect:_o,useInsertionEffect:_o,useMemo:_o,useReducer:_o,useRef:_o,useState:_o,useDebugValue:_o,useDeferredValue:_o,useTransition:_o,useSyncExternalStore:_o,useId:_o,useHostTransitionStatus:_o,useFormState:_o,useActionState:_o,useOptimistic:_o,useMemoCache:_o,useCacheRefresh:_o};Fs.useEffectEvent=_o;var Is={readContext:na,use:Ao,useCallback:function(e,t){return Eo().memoizedState=[e,t===void 0?null:t],e},useContext:na,useEffect:os,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),is(4194308,4,fs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return is(4194308,4,e,t)},useInsertionEffect:function(e,t){is(4,2,e,t)},useMemo:function(e,t){var n=Eo();t=t===void 0?null:t;var r=e();if(fo){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Eo();if(n!==void 0){var i=n(t);if(fo){Ue(!0);try{n(t)}finally{Ue(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Os.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Eo();return e={current:e},t.memoizedState=e},useState:function(e){e=Ho(e);var t=e.queue,n=ks.bind(null,G,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ms,useDeferredValue:function(e,t){return _s(Eo(),e,t)},useTransition:function(){var e=Ho(!1);return e=ys.bind(null,G,e.queue,!0,!1),Eo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=G,a=Eo();if(R){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Rl===null)throw Error(i(349));Y&127||Lo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,os(zo.bind(null,r,o,e),[e]),r.flags|=2048,ns(9,{destroy:void 0},Ro.bind(null,r,o,n,t),null),n},useId:function(){var e=Eo(),t=Rl.identifierPrefix;if(R){var n=Ai,r=ki;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=po++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=go++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ws,useFormState:Zo,useActionState:Zo,useOptimistic:function(e){var t=Eo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=js.bind(null,G,!0,n),n.dispatch=t,[e,t]},useMemoCache:jo,useCacheRefresh:function(){return Eo().memoizedState=Ds.bind(null,G)},useEffectEvent:function(e){var t=Eo(),n={impl:e};return t.memoizedState=n,function(){if(q&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ls={readContext:na,use:Ao,useCallback:hs,useContext:na,useEffect:ss,useImperativeHandle:ps,useInsertionEffect:us,useLayoutEffect:ds,useMemo:gs,useReducer:No,useRef:rs,useState:function(){return No(Mo)},useDebugValue:ms,useDeferredValue:function(e,t){return vs(Do(),K.memoizedState,e,t)},useTransition:function(){var e=No(Mo)[0],t=Do().memoizedState;return[typeof e==`boolean`?e:ko(e),t]},useSyncExternalStore:Io,useId:Ts,useHostTransitionStatus:ws,useFormState:Qo,useActionState:Qo,useOptimistic:function(e,t){return Uo(Do(),K,e,t)},useMemoCache:jo,useCacheRefresh:Es};Ls.useEffectEvent=ls;var Rs={readContext:na,use:Ao,useCallback:hs,useContext:na,useEffect:ss,useImperativeHandle:ps,useInsertionEffect:us,useLayoutEffect:ds,useMemo:gs,useReducer:Fo,useRef:rs,useState:function(){return Fo(Mo)},useDebugValue:ms,useDeferredValue:function(e,t){var n=Do();return K===null?_s(n,e,t):vs(n,K.memoizedState,e,t)},useTransition:function(){var e=Fo(Mo)[0],t=Do().memoizedState;return[typeof e==`boolean`?e:ko(e),t]},useSyncExternalStore:Io,useId:Ts,useHostTransitionStatus:ws,useFormState:ts,useActionState:ts,useOptimistic:function(e,t){var n=Do();return K===null?(n.baseState=e,[e,n.queue.dispatch]):Uo(n,K,e,t)},useMemoCache:jo,useCacheRefresh:Es};Rs.useEffectEvent=ls;function zs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Wa(r);i.payload=t,n!=null&&(i.callback=n),t=Ga(e,i,r),t!==null&&(hu(t,e,r),Ka(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Wa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ga(e,i,r),t!==null&&(hu(t,e,r),Ka(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Wa(n);r.tag=2,t!=null&&(r.callback=t),t=Ga(e,r,n),t!==null&&(hu(t,e,n),Ka(t,e,n))}};function Vs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Er(n,r)||!Er(i,a):!0}function Hs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bs.enqueueReplaceState(t,t.state,null)}function Us(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ws(e){$r(e)}function Gs(e){console.error(e)}function Ks(e){$r(e)}function qs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Js(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Ys(e,t,n){return n=Wa(n),n.tag=3,n.payload={element:null},n.callback=function(){qs(e,t)},n}function Xs(e){return e=Wa(e),e.tag=3,e}function Zs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Js(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Js(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Qs(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&$i(t,n,a,!0),n=B.current,n!==null){switch(n.tag){case 31:case 13:return V===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ea?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Ea?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(R)return t=B.current,t===null?(r!==Ri&&(t=Error(i(423),{cause:r}),Gi(xi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=xi(r,n),a=Ys(e.stateNode,r,a),qa(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ri&&(e=Error(i(422),{cause:r}),Gi(xi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=xi(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=xi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ys(n.stateNode,r,e),qa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Xs(a),Zs(a,e,n,r),qa(n,a),!1}n=n.return}while(n!==null);return!1}var $s=Error(i(461)),ec=!1;function tc(e,t,n,r){t.child=e===null?Ba(t,null,n,r):za(t,e.child,n,r)}function nc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ta(t),r=yo(e,t,n,o,a,i),s=Co(),e!==null&&!ec?(wo(e,t,i),Ec(e,t,i)):(R&&s&&Mi(t),t.flags|=1,tc(e,t,r,i),t.child)}function rc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!fi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ic(e,t,a,r,i)):(e=hi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Dc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Er:n,n(o,r)&&e.ref===t.ref)return Ec(e,t,i)}return t.flags|=1,e=pi(a,r),e.ref=t.ref,e.return=t,t.child=e}function ic(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Er(a,r)&&e.ref===t.ref){if(ec=!1,t.pendingProps=r=a,Dc(e,i))e.flags&131072&&(ec=!0);else return t.lanes=e.lanes,Ec(e,t,i)}}return fc(e,t,n,r,i)}function ac(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return sc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&xa(t,a===null?null:a.cachePool),a===null?no():to(t,a),H(t);else return r=t.lanes=536870912,sc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&xa(t,null),no(),ao(t)):(xa(t,a.cachePool),to(t,a),ao(t),t.memoizedState=null);return tc(e,t,i,n),t.child}function oc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function sc(e,t,n,r,i){var a=ba();return a=a===null?null:{parent:ca._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&xa(t,null),no(),H(t),e!==null&&$i(e,t,r,!0),t.childLanes=i,null}function cc(e,t){return t=xc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function lc(e,t,n){return za(t,e.child,null,n),e=cc(t,t.pendingProps),e.flags|=2,U(t),t.memoizedState=null,e}function uc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(R){if(r.mode===`hidden`)return e=cc(t,r),t.lanes=536870912,oc(null,e);if(io(t),(e=L)?(e=rf(e,Li),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,Fi=t,L=null)):e=null,e===null)throw zi(t);return t.lanes=536870912,null}return cc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(io(t),a){if(t.flags&256)t.flags&=-257,t=lc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(ec||$i(e,t,n,!1),a=(n&e.childLanes)!==0,ec||a){if(r=Rl,r!==null&&(s=st(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,oi(e,s),hu(r,e,s),$s;Du(),t=lc(e,t,n)}else e=o.treeContext,L=cf(s.nextSibling),Fi=t,R=!0,Ii=null,Li=!1,e!==null&&Pi(t,e),t=cc(t,r),t.flags|=4096;return t}return e=pi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function dc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function fc(e,t,n,r,i){return ta(t),n=yo(e,t,n,r,void 0,i),r=Co(),e!==null&&!ec?(wo(e,t,i),Ec(e,t,i)):(R&&r&&Mi(t),t.flags|=1,tc(e,t,n,i),t.child)}function pc(e,t,n,r,i,a){return ta(t),t.updateQueue=null,n=xo(t,r,n,i),bo(e),r=Co(),e!==null&&!ec?(wo(e,t,a),Ec(e,t,a)):(R&&r&&Mi(t),t.flags|=1,tc(e,t,n,a),t.child)}function mc(e,t,n,r,i){if(ta(t),t.stateNode===null){var a=li,o=n.contextType;typeof o==`object`&&o&&(a=na(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Bs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ha(t),o=n.contextType,a.context=typeof o==`object`&&o?na(o):li,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(zs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Bs.enqueueReplaceState(a,a.state,null),Xa(t,r,a,i),Ya(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Us(n,s);a.props=c;var l=a.context,u=n.contextType;o=li,typeof u==`object`&&u&&(o=na(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Hs(t,a,r,o),Va=!1;var f=t.memoizedState;a.state=f,Xa(t,r,a,i),Ya(),l=t.memoizedState,s||f!==l||Va?(typeof d==`function`&&(zs(t,n,d,r),l=t.memoizedState),(c=Va||Vs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ua(e,t),o=t.memoizedProps,u=Us(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=li,typeof l==`object`&&l&&(c=na(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Hs(t,a,r,c),Va=!1,f=t.memoizedState,a.state=f,Xa(t,r,a,i),Ya();var p=t.memoizedState;o!==d||f!==p||Va||e!==null&&e.dependencies!==null&&ea(e.dependencies)?(typeof s==`function`&&(zs(t,n,s,r),p=t.memoizedState),(u=Va||Vs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ea(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,dc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=za(t,e.child,null,i),t.child=za(t,null,n,i)):tc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ec(e,t,i),e}function hc(e,t,n,r){return Ui(),t.flags|=256,tc(e,t,n,r),t.child}var gc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _c(e){return{baseLanes:e,cachePool:Sa()}}function vc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function yc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(W.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(R){if(a?ro(t):ao(t),(e=L)?(e=rf(e,Li),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,Fi=t,L=null)):e=null,e===null)throw zi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(ao(t),a=t.mode,c=xc({mode:`hidden`,children:c},a),r=gi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=_c(n),r.childLanes=vc(e,s,n),t.memoizedState=gc,oc(null,r)):(ro(t),bc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(ro(t),t.flags&=-257,t=Sc(e,t,n)):t.memoizedState===null?(ao(t),c=r.fallback,a=t.mode,r=xc({mode:`visible`,children:r.children},a),c=gi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,za(t,e.child,null,n),r=t.child,r.memoizedState=_c(n),r.childLanes=vc(e,s,n),t.memoizedState=gc,t=oc(null,r)):(ao(t),t.child=e.child,t.flags|=128,t=null);else if(ro(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Gi({value:r,source:null,stack:null}),t=Sc(e,t,n)}else if(ec||$i(e,t,n,!1),s=(n&e.childLanes)!==0,ec||s){if(s=Rl,s!==null&&(r=st(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,oi(e,r),hu(s,e,r),$s;af(c)||Du(),t=Sc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,L=cf(c.nextSibling),Fi=t,R=!0,Ii=null,Li=!1,e!==null&&Pi(t,e),t=bc(t,r.children),t.flags|=4096);return t}return a?(ao(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=pi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=gi(c,a,n,null),c.flags|=2):c=pi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,oc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=_c(n):(a=c.cachePool,a===null?a=Sa():(l=ca._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=vc(e,s,n),t.memoizedState=gc,oc(e.child,r)):(ro(t),n=e.child,e=n.sibling,n=pi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function bc(e,t){return t=xc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function xc(e,t){return e=di(22,e,null,t),e.lanes=0,e}function Sc(e,t,n){return za(t,e.child,null,n),e=bc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zi(e.return,t,n)}function wc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Tc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=W.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,A(W,o),tc(e,t,r,n),r=R?Ti:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cc(e,n,t);else if(e.tag===19)Cc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&oo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),wc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&oo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}wc(t,!0,n,null,a,r);break;case`together`:wc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ec(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if($i(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=pi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Dc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ea(e)))}function Oc(e,t,n){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),Yi(t,ca,e.memoizedState.cache),Ui();break;case 27:case 5:ye(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:Yi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,io(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(ro(t),e=Ec(e,t,n),e===null?null:e.sibling):yc(e,t,n):(ro(t),t.flags|=128,null);ro(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=($i(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Tc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(W,W.current),r)break;return null;case 22:return t.lanes=0,ac(e,t,n,t.pendingProps);case 24:Yi(t,ca,e.memoizedState.cache)}return Ec(e,t,n)}function kc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)ec=!0;else{if(!Dc(e,n)&&!(t.flags&128))return ec=!1,Oc(e,t,n);ec=!!(e.flags&131072)}}else ec=!1,R&&t.flags&1048576&&I(t,Ti,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ka(t.elementType),t.type=e,typeof e==`function`)fi(e)?(r=Us(e,r),t.tag=1,t=mc(null,t,e,r,n)):(t.tag=0,t=fc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=nc(null,t,e,r,n);break a}if(a===ee){t.tag=14,t=rc(null,t,e,r,n);break a}}throw t=oe(e)||e,Error(i(306,t,``))}}return t;case 0:return fc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Us(r,t.pendingProps),mc(e,t,r,a,n);case 3:a:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ua(e,t),Xa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Yi(t,ca,r),r!==o.cache&&Qi(t,[ca],n,!0),Ya(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=hc(e,t,r,n);break a}if(r!==a){a=xi(Error(i(424)),t),Gi(a),t=hc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(L=cf(e.firstChild),Fi=t,R=!0,Ii=null,Li=!0,n=Ba(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ui(),r===a){t=Ec(e,t,n);break a}tc(e,t,r,n)}t=t.child}return t;case 26:return dc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:R||(n=t.type,e=t.pendingProps,r=Bd(he.current).createElement(n),r[pt]=t,r[mt]=e,Pd(r,n,e),Tt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ye(t),e===null&&R&&(r=t.stateNode=ff(t.type,t.pendingProps,he.current),Fi=t,Li=!0,a=L,Zd(t.type)?(lf=a,L=cf(r.firstChild)):L=a),tc(e,t,t.pendingProps.children,n),dc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&R&&((a=r=L)&&(r=tf(r,t.type,t.pendingProps,Li),r===null?a=!1:(t.stateNode=r,Fi=t,L=cf(r.firstChild),Li=!1,a=!0)),a||zi(t)),ye(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=yo(e,t,So,null,null,n),Qf._currentValue=a),dc(e,t),tc(e,t,r,n),t.child;case 6:return e===null&&R&&((e=n=L)&&(n=nf(n,t.pendingProps,Li),n===null?e=!1:(t.stateNode=n,Fi=t,L=null,e=!0)),e||zi(t)),null;case 13:return yc(e,t,n);case 4:return _e(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=za(t,null,r,n):tc(e,t,r,n),t.child;case 11:return nc(e,t,t.type,t.pendingProps,n);case 7:return tc(e,t,t.pendingProps,n),t.child;case 8:return tc(e,t,t.pendingProps.children,n),t.child;case 12:return tc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Yi(t,t.type,r.value),tc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ta(t),a=na(a),r=r(a),t.flags|=1,tc(e,t,r,n),t.child;case 14:return rc(e,t,t.type,t.pendingProps,n);case 15:return ic(e,t,t.type,t.pendingProps,n);case 19:return Tc(e,t,n);case 31:return uc(e,t,n);case 22:return ac(e,t,n,t.pendingProps);case 24:return ta(t),r=na(ca),e===null?(a=ba(),a===null&&(a=Rl,o=la(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ha(t),Yi(t,ca,a)):((e.lanes&n)!==0&&(Ua(e,t),Xa(t,null,null,n),Ya()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Yi(t,ca,r),r!==a.cache&&Qi(t,[ca],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Yi(t,ca,r))),tc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Ac(e){e.flags|=4}function jc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Aa=Ea,wa}}else e.flags&=-16777217}function Mc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw Aa=Ea,wa}}function Nc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:tt(),e.lanes|=t,Yl|=t)}function Pc(e,t){if(!R)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Fc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ic(e,t,n){var r=t.pendingProps;switch(Ni(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fc(t),null;case 1:return Fc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Xi(ca),ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Hi(t)?Ac(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Wi())),Fc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Ac(t),o===null?(Fc(t),jc(t,a,null,r,n)):(Fc(t),Mc(t,o))):o?o===e.memoizedState?(Fc(t),t.flags&=-16777217):(Ac(t),Fc(t),Mc(t,o)):(e=e.memoizedProps,e!==r&&Ac(t),Fc(t),jc(t,a,e,r,n)),null;case 27:if(be(t),n=he.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ac(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Fc(t),null}e=pe.current,Hi(t)?Bi(t,e):(e=ff(a,r,n),t.stateNode=e,Ac(t))}return Fc(t),null;case 5:if(be(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ac(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Fc(t),null}if(o=pe.current,Hi(t))Bi(t,o);else{var s=Bd(he.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[pt]=t,o[mt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ac(t)}}return Fc(t),jc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ac(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=he.current,Hi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Fi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||zi(t,!0)}else e=Bd(e).createTextNode(r),e[pt]=t,t.stateNode=e}return Fc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Hi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[pt]=t}else Ui(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fc(t),e=!1}else n=Wi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(U(t),t):(U(t),null);if(t.flags&128)throw Error(i(558))}return Fc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Hi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[pt]=t}else Ui(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fc(t),a=!1}else a=Wi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(U(t),t):(U(t),null)}return U(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Nc(t,t.updateQueue),Fc(t),null);case 4:return ve(),e===null&&Sd(t.stateNode.containerInfo),Fc(t),null;case 10:return Xi(t.type),Fc(t),null;case 19:if(fe(W),r=t.memoizedState,r===null)return Fc(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Pc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=oo(e),o!==null){for(t.flags|=128,Pc(r,!1),e=o.updateQueue,t.updateQueue=e,Nc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)mi(n,e),n=n.sibling;return A(W,W.current&1|2),R&&ji(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Me()>tu&&(t.flags|=128,a=!0,Pc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=oo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Nc(t,e),Pc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!R)return Fc(t),null}else 2*Me()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Pc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Fc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Me(),e.sibling=null,n=W.current,A(W,a?n&1|2:n&1),R&&ji(t,r.treeForkCount),e);case 22:case 23:return U(t),z(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Fc(t),t.subtreeFlags&6&&(t.flags|=8192)):Fc(t),n=t.updateQueue,n!==null&&Nc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&fe(ya),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Xi(ca),Fc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Lc(e,t){switch(Ni(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xi(ca),ve(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return be(t),null;case 31:if(t.memoizedState!==null){if(U(t),t.alternate===null)throw Error(i(340));Ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(U(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(W),null;case 4:return ve(),null;case 10:return Xi(t.type),null;case 22:case 23:return U(t),z(),e!==null&&fe(ya),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Xi(ca),null;case 25:return null;default:return null}}function Rc(e,t){switch(Ni(t),t.tag){case 3:Xi(ca),ve();break;case 26:case 27:case 5:be(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&U(t);break;case 13:U(t);break;case 19:fe(W);break;case 10:Xi(t.type);break;case 22:case 23:U(t),z(),e!==null&&fe(ya);break;case 24:Xi(ca)}}function zc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Bc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Vc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Qa(t,n)}catch(t){Z(e,e.return,t)}}}function Hc(e,t,n){n.props=Us(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Uc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Wc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Gc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Kc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[mt]=t}catch(t){Z(e,e.return,t)}}function qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Jc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=F));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Yc(e,t,n),e=e.sibling;e!==null;)Yc(e,t,n),e=e.sibling}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[pt]=e,t[mt]=n}catch(t){Z(e,e.return,t)}}var Qc=!1,$c=!1,el=!1,tl=typeof WeakSet==`function`?WeakSet:Set,nl=null;function rl(e,t){if(e=e.containerInfo,Rd=sp,e=Ar(e),jr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,nl=t;nl!==null;)if(t=nl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,nl=e;else for(;nl!==null;){switch(t=nl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Us(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,nl=e;break}nl=t.return}}function il(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:yl(e,n),r&4&&zc(5,n);break;case 1:if(yl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Us(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Vc(n),r&512&&Uc(n,n.return);break;case 3:if(yl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Qa(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Zc(n);case 26:case 5:yl(e,n),t===null&&r&4&&Gc(n),r&512&&Uc(n,n.return);break;case 12:yl(e,n);break;case 31:yl(e,n),r&4&&ul(e,n);break;case 13:yl(e,n),r&4&&dl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||Qc,!r){t=t!==null&&t.memoizedState!==null||$c,i=Qc;var a=$c;Qc=r,($c=t)&&!a?xl(e,n,!!(n.subtreeFlags&8772)):yl(e,n),Qc=i,$c=a}break;case 30:break;default:yl(e,n)}}function al(e){var t=e.alternate;t!==null&&(e.alternate=null,al(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ol=null,sl=!1;function cl(e,t,n){for(n=n.child;n!==null;)ll(e,t,n),n=n.sibling}function ll(e,t,n){if(He&&typeof He.onCommitFiberUnmount==`function`)try{He.onCommitFiberUnmount(Ve,n)}catch{}switch(n.tag){case 26:$c||Wc(n,t),cl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:$c||Wc(n,t);var r=ol,i=sl;Zd(n.type)&&(ol=n.stateNode,sl=!1),cl(e,t,n),pf(n.stateNode),ol=r,sl=i;break;case 5:$c||Wc(n,t);case 6:if(r=ol,i=sl,ol=null,cl(e,t,n),ol=r,sl=i,ol!==null){if(sl)try{(ol.nodeType===9?ol.body:ol.nodeName===`HTML`?ol.ownerDocument.body:ol).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{ol.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:ol!==null&&(sl?(e=ol,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(ol,n.stateNode));break;case 4:r=ol,i=sl,ol=n.stateNode.containerInfo,sl=!0,cl(e,t,n),ol=r,sl=i;break;case 0:case 11:case 14:case 15:Bc(2,n,t),$c||Bc(4,n,t),cl(e,t,n);break;case 1:$c||(Wc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Hc(n,t,r)),cl(e,t,n);break;case 21:cl(e,t,n);break;case 22:$c=(r=$c)||n.memoizedState!==null,cl(e,t,n),$c=r;break;default:cl(e,t,n)}}function ul(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function fl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new tl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new tl),t;default:throw Error(i(435,e.tag))}}function pl(e,t){var n=fl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function ml(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){ol=c.stateNode,sl=!1;break a}break;case 5:ol=c.stateNode,sl=!1;break a;case 3:case 4:ol=c.stateNode.containerInfo,sl=!0;break a}c=c.return}if(ol===null)throw Error(i(160));ll(o,s,a),ol=null,sl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)gl(t,e),t=t.sibling}var hl=null;function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ml(t,e),_l(e),r&4&&(Bc(3,e,e.return),zc(3,e),Bc(5,e,e.return));break;case 1:ml(t,e),_l(e),r&512&&($c||n===null||Wc(n,n.return)),r&64&&Qc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=hl;if(ml(t,e),_l(e),r&512&&($c||n===null||Wc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[bt]||o[pt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[pt]=e,Tt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[pt]=e,Tt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Kc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:ml(t,e),_l(e),r&512&&($c||n===null||Wc(n,n.return)),n!==null&&r&4&&Kc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ml(t,e),_l(e),r&512&&($c||n===null||Wc(n,n.return)),e.flags&32){a=e.stateNode;try{Yt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Kc(e,a,n===null?a:n.memoizedProps)),r&1024&&(el=!0);break;case 6:if(ml(t,e),_l(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=hl,hl=gf(t.containerInfo),ml(t,e),hl=a,_l(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}el&&(el=!1,vl(e));break;case 4:r=hl,hl=gf(e.stateNode.containerInfo),ml(t,e),_l(e),hl=r;break;case 12:ml(t,e),_l(e);break;case 31:ml(t,e),_l(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,pl(e,r)));break;case 13:ml(t,e),_l(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Me()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,pl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Qc,d=$c;if(Qc=u||a,$c=d||l,ml(t,e),$c=d,Qc=u,_l(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Qc||$c||bl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,pl(e,n))));break;case 19:ml(t,e),_l(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,pl(e,r)));break;case 30:break;case 21:break;default:ml(t,e),_l(e)}}function _l(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(qc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Xc(e,Jc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Yt(o,``),n.flags&=-33),Xc(e,Jc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Yc(e,Jc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;vl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function yl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)il(e,t.alternate,t),t=t.sibling}function bl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Bc(4,t,t.return),bl(t);break;case 1:Wc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Hc(t,t.return,n),bl(t);break;case 27:pf(t.stateNode);case 26:case 5:Wc(t,t.return),bl(t);break;case 22:t.memoizedState===null&&bl(t);break;case 30:bl(t);break;default:bl(t)}e=e.sibling}}function xl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:xl(i,a,n),zc(4,a);break;case 1:if(xl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Za(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Vc(a),Uc(a,a.return);break;case 27:Zc(a);case 26:case 5:xl(i,a,n),n&&r===null&&o&4&&Gc(a),Uc(a,a.return);break;case 12:xl(i,a,n);break;case 31:xl(i,a,n),n&&o&4&&ul(i,a);break;case 13:xl(i,a,n),n&&o&4&&dl(i,a);break;case 22:a.memoizedState===null&&xl(i,a,n),Uc(a,a.return);break;case 30:break;default:xl(i,a,n)}t=t.sibling}}function Sl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ua(n))}function Cl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ua(e))}function wl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Tl(e,t,n,r),t=t.sibling}function Tl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:wl(e,t,n,r),i&2048&&zc(9,t);break;case 1:wl(e,t,n,r);break;case 3:wl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ua(e)));break;case 12:if(i&2048){wl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else wl(e,t,n,r);break;case 31:wl(e,t,n,r);break;case 13:wl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?wl(e,t,n,r):(a._visibility|=2,El(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?wl(e,t,n,r):Dl(e,t),i&2048&&Sl(o,t);break;case 24:wl(e,t,n,r),i&2048&&Cl(t.alternate,t);break;default:wl(e,t,n,r)}}function El(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:El(a,o,s,c,i),zc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,El(a,o,s,c,i)):u._visibility&2?El(a,o,s,c,i):Dl(a,o),i&&l&2048&&Sl(o.alternate,o);break;case 24:El(a,o,s,c,i),i&&l&2048&&Cl(o.alternate,o);break;default:El(a,o,s,c,i)}t=t.sibling}}function Dl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Dl(n,r),i&2048&&Sl(r.alternate,r);break;case 24:Dl(n,r),i&2048&&Cl(r.alternate,r);break;default:Dl(n,r)}t=t.sibling}}var Ol=8192;function kl(e,t,n){if(e.subtreeFlags&Ol)for(e=e.child;e!==null;)Al(e,t,n),e=e.sibling}function Al(e,t,n){switch(e.tag){case 26:kl(e,t,n),e.flags&Ol&&e.memoizedState!==null&&Gf(n,hl,e.memoizedState,e.memoizedProps);break;case 5:kl(e,t,n);break;case 3:case 4:var r=hl;hl=gf(e.stateNode.containerInfo),kl(e,t,n),hl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ol,Ol=16777216,kl(e,t,n),Ol=r):kl(e,t,n));break;default:kl(e,t,n)}}function jl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ml(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];nl=r,Fl(r,e)}jl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nl(e),e=e.sibling}function Nl(e){switch(e.tag){case 0:case 11:case 15:Ml(e),e.flags&2048&&Bc(9,e,e.return);break;case 3:Ml(e);break;case 12:Ml(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Pl(e)):Ml(e);break;default:Ml(e)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];nl=r,Fl(r,e)}jl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Bc(8,t,t.return),Pl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Pl(t));break;default:Pl(t)}e=e.sibling}}function Fl(e,t){for(;nl!==null;){var n=nl;switch(n.tag){case 0:case 11:case 15:Bc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ua(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,nl=r;else a:for(n=e;nl!==null;){r=nl;var i=r.sibling,a=r.return;if(al(r),r===n){nl=null;break a}if(i!==null){i.return=a,nl=i;break a}nl=a}}}var Il={getCacheForType:function(e){var t=na(ca),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return na(ca).controller.signal}},Ll=typeof WeakMap==`function`?WeakMap:Map,q=0,Rl=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return q&2&&Y!==0?Y&-Y:O.T===null?ut():dd()}function mu(){if(Jl===0){if(!(Y&536870912)||R){var e=Ye;Ye<<=1,!(Ye&3932160)&&(Ye=262144),Jl=e}else Jl=536870912}return e=B.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===Rl&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),rt(e,n),(!(q&2)||e!==Rl)&&(e===Rl&&(!(q&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(q&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||$e(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Me(),10<a)){if(yu(r,t,Jl,!Bl),Qe(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:F},Al(t,a,d);var m=(a&62914560)===a?$l-Me():(a&4194048)===a?eu-Me():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Tr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-We(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&at(e,n,t)}function bu(){return q&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Ji=qi=null,To(e),Na=null,Pa=0,e=J;for(;e!==null;)Rc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),Rl=e,J=n=pi(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=$e(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-We(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,ri(),n}function Cu(e,t){G=null,O.H=Fs,t===Ca||t===Ta?(t=ja(),X=3):t===wa?(t=ja(),X=4):X=t===$s?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,qs(e,xi(t,e.current)))}function wu(){var e=B.current;return e===null?!0:(Y&4194048)===Y?V===null:(Y&62914560)===Y||Y&536870912?e===V:!1}function Tu(){var e=O.H;return O.H=Fs,e===null?Fs:e}function Eu(){var e=O.A;return O.A=Il,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&B.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||Rl===null||yu(Rl,Y,Jl,!1)}function Ou(e,t,n){var r=q;q|=2;var i=Tu(),a=Eu();(Rl!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:B.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ji=qi=null,q=r,O.H=i,O.A=a,J===null&&(Rl=null,Y=0,ri()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=q;q|=2;var r=Tu(),a=Eu();Rl!==e||Y!==t?(nu=null,tu=Me()+500,Su(e,t)):Vl=$e(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Da(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||Rl!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Da(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Ji=qi=null,O.H=r,O.A=a,q=n,J===null?(Rl=null,Y=0,ri(),Wl):0}function ju(){for(;J!==null&&!Ae();)Mu(J)}function Mu(e){var t=kc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=pc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=pc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:To(t);default:Rc(n,t),t=J=mi(t,Ul),t=kc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Ji=qi=null,To(t),Na=null,Pa=0;var i=t.return;try{if(Qs(e,i,t,n,Y)){Wl=1,qs(e,xi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,qs(e,xi(n,e.current)),J=null;return}t.flags&32768?(R||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=B.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Ic(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Lc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(q&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ni,it(e,n,o,s,c,l),e===Rl&&(J=Rl=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Ie,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=O.T,O.T=null,a=k.p,k.p=2,s=q,q|=4;try{rl(e,t,n)}finally{q=s,k.p=a,O.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=q;q|=4;try{gl(t,e);var a=zd,o=Ar(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&kr(s.ownerDocument.documentElement,s)){if(c!==null&&jr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Or(s,h),v=Or(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{q=i,k.p=r,O.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=q;q|=4;try{il(e,t.alternate,t)}finally{q=i,k.p=r,O.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,je();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),lt(n),t=t.stateNode,He&&typeof He.onCommitFiberRoot==`function`)try{He.onCommitFiberRoot(Ve,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=O.T,i=k.p,k.p=2,O.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{O.T=t,k.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ua(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=lt(su),r=O.T,a=k.p;try{k.p=32>n?32:n,O.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,q&6)throw Error(i(331));var c=q;if(q|=4,Nl(o.current),Tl(o,o.current,s,n),q=c,id(0,!1),He&&typeof He.onPostCommitFiberRoot==`function`)try{He.onPostCommitFiberRoot(Ve,o)}catch{}return!0}finally{k.p=a,O.T=r,Vu(e,t)}}function Wu(e,t,n){t=xi(n,t),t=Ys(e.stateNode,t,2),e=Ga(e,t,2),e!==null&&(rt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=xi(n,e),n=Xs(2),r=Ga(t,n,2),r!==null&&(Zs(n,r,t,e),rt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ll;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Rl===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>Me()-$l?!(q&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=tt()),e=oi(e,t),e!==null&&(rt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Oe(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-We(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Qe(r,r===Rl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||$e(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Me(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-We(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=et(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Rl,n=Y,n=Qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ke(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||$e(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ke(r),lt(n)){case 2:case 8:n=Fe;break;case 32:n=Ie;break;case 268435456:n=Re;break;default:n=Ie}return r=cd.bind(null,e),n=Oe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ke(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Qe(e,e===Rl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Me()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){q&6?Oe(Pe,ad):od()})}function dd(){if(nd===0){var e=pa;e===0&&(e=Je,Je<<=1,!(Je&261888)&&(Je=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:nn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[mt]||null).action),o=r.submitter;o&&(t=(t=o[mt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new wn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);xs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),xs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Zr.length;hd++){var gd=Zr[hd];Qr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Qr(Ur,`onAnimationEnd`),Qr(Wr,`onAnimationIteration`),Qr(Gr,`onAnimationStart`),Qr(`dblclick`,`onDoubleClick`),Qr(`focusin`,`onFocus`),Qr(`focusout`,`onBlur`),Qr(Kr,`onTransitionRun`),Qr(qr,`onTransitionStart`),Qr(Jr,`onTransitionCancel`),Qr(Yr,`onTransitionEnd`),kt(`onMouseEnter`,[`mouseout`,`mouseover`]),kt(`onMouseLeave`,[`mouseout`,`mouseover`]),kt(`onPointerEnter`,[`pointerout`,`pointerover`]),kt(`onPointerLeave`,[`pointerout`,`pointerover`]),Ot(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Ot(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Ot(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Ot(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Ot(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Ot(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){$r(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){$r(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[gt];n===void 0&&(n=t[gt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Et.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!pn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=St(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}un(function(){var r=a,i=an(n),s=[];a:{var c=Xr.get(e);if(c!==void 0){var l=wn,u=e;switch(e){case`keypress`:if(yn(n)===0)break a;case`keydown`:case`keyup`:l=Hn;break;case`focusin`:u=`focus`,l=Nn;break;case`focusout`:u=`blur`,l=Nn;break;case`beforeblur`:case`afterblur`:l=Nn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=jn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Mn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Wn;break;case Ur:case Wr:case Gr:l=Pn;break;case Yr:l=Gn;break;case`scroll`:case`scrollend`:l=En;break;case`wheel`:l=Kn;break;case`copy`:case`cut`:case`paste`:l=Fn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Un;break;case`toggle`:case`beforetoggle`:l=qn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=dn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==rn&&(u=n.relatedTarget||n.fromElement)&&(St(u)||u[ht]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?St(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=jn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Un,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:wt(l),h=u==null?c:wt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,St(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?wt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=pr;else if(sr(c)){if(mr)v=Cr;else{v=xr;var y=br}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&$t(r.elementType)&&(v=pr):v=Sr;if(v&&=v(e,r)){cr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Gt(c,`number`,c.value)}switch(y=r?wt(r):window,e){case`focusin`:(sr(y)||y.contentEditable===`true`)&&(Nr=y,Pr=r,Fr=null);break;case`focusout`:Fr=Pr=Nr=null;break;case`mousedown`:Ir=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Ir=!1,Lr(s,n,i);break;case`selectionchange`:if(Mr)break;case`keydown`:case`keyup`:Lr(s,n,i)}var b;if(Yn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else rr?tr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Qn&&n.locale!==`ko`&&(rr||x!==`onCompositionStart`?x===`onCompositionEnd`&&rr&&(b=vn()):(hn=i,gn=`value`in hn?hn.value:hn.textContent,rr=!0)),y=Ed(r,x),0<y.length&&(x=new In(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=nr(n),b!==null&&(x.data=b)))),(b=Zn?ir(e,n):ar(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new In(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=dn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=dn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=dn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=dn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Yt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Yt(e,``+r);break;case`className`:Pt(e,`class`,r);break;case`tabIndex`:Pt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Pt(e,n,r);break;case`style`:Qt(e,r,o);break;case`data`:if(t!==`object`){Pt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=nn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=nn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=F);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=nn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Nt(e,`popover`,r);break;case`xlinkActuate`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Nt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=en.get(n)||n,Nt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Qt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Yt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Yt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=F);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Dt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[mt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Nt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}P(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Kt(e,!!r,n,!0):Kt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Jt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if($t(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Wt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Kt(e,!!n,n?[]:``,!1):Kt(e,!!n,t,!0)):Kt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if($t(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[bt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),xt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[bt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=k.d;k.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Ct(e);t!==null&&t.tag===5&&t.type===`form`?Cs(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Ut(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Tt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Ut(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Ut(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Ut(n.imageSizes)+`"]`)):i+=`[href="`+Ut(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Tt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Ut(r)+`"][href="`+Ut(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Tt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=M(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Tt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=M(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Tt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=M(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Tt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=he.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=M(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=M(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=M(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Ut(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Tt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Ut(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Ut(n.href)+`"]`);if(r)return t.instance=r,Tt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Tt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Tt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Tt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Tt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Tt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[bt]||a[pt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Tt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Tt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nt(0),this.hiddenUpdates=nt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=di(3,null,null,t),e.current=a,a.stateNode=e,t=la(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ha(a),e}function tp(e){return e?(e=li,e):li}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Wa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ga(e,r,t),n!==null&&(hu(n,e,t),Ka(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=oi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ct(t);var n=oi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=2,up(e,t,n,r)}finally{k.p=a,O.T=i}}function lp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=8,up(e,t,n,r)}finally{k.p=a,O.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Ct(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ze(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-We(o);s.entanglements[1]|=c,o&=~c}rd(a),!(q&6)&&(tu=Me()+500,id(0,!1))}}break;case 31:case 13:s=oi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=an(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=St(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ne()){case Pe:return 2;case Fe:return 8;case Ie:case Le:return 32;case Re:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ct(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=St(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);rn=r,n.target.dispatchEvent(r),rn=null}else return t=Ct(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Ct(n);a!==null&&(e.splice(t,3),t-=3,xs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[mt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[mt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ht]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ut();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:O,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ve=zp.inject(Rp),He=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ws,s=Gs,c=Ks;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ht]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g();function y(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`){if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=y(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n)}return r}function b(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=y(e))&&(r&&(r+=` `),r+=t);return r}var x=e=>typeof e==`number`&&!isNaN(e),S=e=>typeof e==`string`,C=e=>typeof e==`function`,w=e=>S(e)||x(e),T=e=>S(e)||C(e)?e:null,E=(e,t)=>e===!1||x(e)&&e>0?e:t,ee=e=>(0,_.isValidElement)(e)||S(e)||C(e)||x(e);function te(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight=`initial`,i.height=r+`px`,i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height=`0`,i.padding=`0`,i.margin=`0`,setTimeout(t,n)})})}function D({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:a,position:o,preventExitTransition:s,done:c,nodeRef:l,isIn:u,playToast:d}){let f=n?`${e}--${o}`:e,p=n?`${t}--${o}`:t,m=(0,_.useRef)(0);return(0,_.useLayoutEffect)(()=>{let e=l.current,t=f.split(` `),n=r=>{r.target===l.current&&(d(),e.removeEventListener(`animationend`,n),e.removeEventListener(`animationcancel`,n),m.current===0&&r.type!==`animationcancel`&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener(`animationend`,n),e.addEventListener(`animationcancel`,n)},[]),(0,_.useEffect)(()=>{let e=l.current,t=()=>{e.removeEventListener(`animationend`,t),r?te(e,c,i):c()};u||(s?t():(m.current=1,e.className+=` ${p}`,e.addEventListener(`animationend`,t)))},[u]),_.createElement(_.Fragment,null,a)}}function ne(e,t){return{content:re(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function re(e,t,n=!1){return(0,_.isValidElement)(e)&&!S(e.type)?(0,_.cloneElement)(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):C(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function ie({closeToast:e,theme:t,ariaLabel:n=`close`}){return _.createElement(`button`,{className:`Toastify__close-button Toastify__close-button--${t}`,type:`button`,onClick:t=>{t.stopPropagation(),e(!0)},"aria-label":n},_.createElement(`svg`,{"aria-hidden":`true`,viewBox:`0 0 14 16`},_.createElement(`path`,{fillRule:`evenodd`,d:`M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z`})))}function ae({delay:e,isRunning:t,closeToast:n,type:r=`default`,hide:i,className:a,controlledProgress:o,progress:s,rtl:c,isIn:l,theme:u}){let d=i||o&&s===0,f={animationDuration:`${e}ms`,animationPlayState:t?`running`:`paused`};o&&(f.transform=`scaleX(${s})`);let p=b(`Toastify__progress-bar`,o?`Toastify__progress-bar--controlled`:`Toastify__progress-bar--animated`,`Toastify__progress-bar-theme--${u}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":c}),m=C(a)?a({rtl:c,type:r,defaultClassName:p}):b(p,a),h={[o&&s>=1?`onTransitionEnd`:`onAnimationEnd`]:o&&s<1?null:()=>{l&&n()}};return _.createElement(`div`,{className:`Toastify__progress-bar--wrp`,"data-hidden":d},_.createElement(`div`,{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${u} Toastify__progress-bar--${r}`}),_.createElement(`div`,{role:`progressbar`,"aria-hidden":d?`true`:`false`,"aria-label":`notification timer`,"aria-valuenow":o?Math.round(s*100):void 0,"aria-valuemin":0,"aria-valuemax":100,className:m,style:f,...h}))}var oe=1,se=()=>`${oe++}`;function O(e,t,n){let r=1,i=0,a=[],o=[],s=t,c=new Map,l=new Set,u=e=>(l.add(e),()=>l.delete(e)),d=()=>{o=Array.from(c.values()),l.forEach(e=>e())},f=({containerId:t,toastId:n,updateId:r})=>{let i=t?t!==e:e!==1,a=c.has(n)&&r==null;return i||a},p=(e,t)=>{c.forEach(n=>{var r;(t==null||t===n.props.toastId)&&((r=n.toggle)==null||r.call(n,e))})},m=e=>{var t,r;e.isActive&&((r=(t=e.props)?.onClose)==null||r.call(t,e.removalReason),e.isActive=!1,n(ne(e,`removed`)))},h=e=>{if(e==null)c.forEach(m);else{let t=c.get(e);t&&m(t)}d()},g=()=>{i-=a.length,a=[]},_=e=>{var t,r;let{toastId:i,updateId:a}=e.props,o=a==null;e.staleId&&c.delete(e.staleId),e.isActive=!0,c.set(i,e),d(),n(ne(e,o?`added`:`updated`)),o&&((r=(t=e.props).onOpen)==null||r.call(t))};return{id:e,props:s,observe:u,toggle:p,removeToast:h,toasts:c,clearQueue:g,buildToast:(e,t)=>{if(f(t))return;let{toastId:n,updateId:o,data:l,staleId:u,delay:p}=t,m=o==null;m&&i++;let g={...s,style:s.toastStyle,key:r++,...Object.fromEntries(Object.entries(t).filter(([e,t])=>t!=null)),toastId:n,updateId:o,data:l,isIn:!1,className:T(t.className||s.toastClassName),progressClassName:T(t.progressClassName||s.progressClassName),autoClose:!t.isLoading&&E(t.autoClose,s.autoClose),closeToast(e){let t=c.get(n);t&&(t.removalReason=e,h(n))},deleteToast(){if(c.get(n)!=null){if(c.delete(n),i--,i<0&&(i=0),a.length>0){_(a.shift());return}d()}}};g.closeButton=s.closeButton,t.closeButton===!1||ee(t.closeButton)?g.closeButton=t.closeButton:t.closeButton===!0&&(g.closeButton=!ee(s.closeButton)||s.closeButton);let v={content:e,props:g,staleId:u};s.limit&&s.limit>0&&i>s.limit&&m?a.push(v):x(p)?setTimeout(()=>{_(v)},p):_(v)},setProps(e){s=e},setToggle:(e,t)=>{let n=c.get(e);n&&(n.toggle=t)},isToastActive:e=>c.get(e)?.isActive,getSnapshot:()=>o}}var k=new Map,ce=[],le=new Set,ue=e=>le.forEach(t=>t(e)),de=()=>k.size>0;function fe(){ce.forEach(e=>ge(e.content,e.options)),ce=[]}var A=(e,{containerId:t})=>k.get(t||1)?.toasts.get(e);function pe(e,t){var n;if(t)return!!((n=k.get(t))!=null&&n.isToastActive(e));let r=!1;return k.forEach(t=>{t.isToastActive(e)&&(r=!0)}),r}function me(e){if(!de()){ce=ce.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||w(e))k.forEach(t=>{t.removeToast(e)});else if(e&&(`containerId`in e||`id`in e)){let t=k.get(e.containerId);t?t.removeToast(e.id):k.forEach(t=>{t.removeToast(e.id)})}}var he=(e={})=>{k.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function ge(e,t){ee(e)&&(de()||ce.push({content:e,options:t}),k.forEach(n=>{n.buildToast(e,t)}))}function _e(e){var t;(t=k.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function ve(e,t){k.forEach(n=>{(t==null||!(t!=null&&t.containerId)||t?.containerId===n.id)&&n.toggle(e,t?.id)})}function ye(e){let t=e.containerId||1;return{subscribe(n){let r=O(t,e,ue);k.set(t,r);let i=r.observe(n);return fe(),()=>{i(),k.delete(t)}},setProps(e){var n;(n=k.get(t))==null||n.setProps(e)},getSnapshot(){return k.get(t)?.getSnapshot()}}}function be(e){return le.add(e),()=>{le.delete(e)}}function xe(e){return e&&(S(e.toastId)||x(e.toastId))?e.toastId:se()}function Se(e,t){return ge(e,t),t.toastId}function Ce(e,t){return{...t,type:t&&t.type||e,toastId:xe(t)}}function we(e){return(t,n)=>Se(t,Ce(e,n))}function j(e,t){return Se(e,Ce(`default`,t))}j.loading=(e,t)=>Se(e,Ce(`default`,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function Te(e,{pending:t,error:n,success:r},i){let a;t&&(a=S(t)?j.loading(t,i):j.loading(t.render,{...i,...t}));let o={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},s=(e,t,n)=>{if(t==null){j.dismiss(a);return}let r={type:e,...o,...i,data:n},s=S(t)?{render:t}:t;return a?j.update(a,{...r,...s}):j(s.render,{...r,...s}),n},c=C(e)?e():e;return c.then(e=>s(`success`,r,e)).catch(e=>s(`error`,n,e)),c}j.promise=Te,j.success=we(`success`),j.info=we(`info`),j.error=we(`error`),j.warning=we(`warning`),j.warn=j.warning,j.dark=(e,t)=>Se(e,Ce(`default`,{theme:`dark`,...t}));function Ee(e){me(e)}j.dismiss=Ee,j.clearWaitingQueue=he,j.isActive=pe,j.update=(e,t={})=>{let n=A(e,t);if(n){let{props:r,content:i}=n,a={delay:100,...r,...t,toastId:t.toastId||e,updateId:se()};a.toastId!==e&&(a.staleId=e);let o=a.render||i;delete a.render,Se(o,a)}},j.done=e=>{j.update(e,{progress:1})},j.onChange=be,j.play=e=>ve(!0,e),j.pause=e=>ve(!1,e);function De(e){let{subscribe:t,getSnapshot:n,setProps:r}=(0,_.useRef)(ye(e)).current;r(e);let i=(0,_.useSyncExternalStore)(t,n,n)?.slice();function a(t){if(!i)return[];let n=new Map;return e.newestOnTop&&i.reverse(),i.forEach(e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))}return{getToastToRender:a,isToastActive:pe,count:i?.length}}function Oe(e){let[t,n]=(0,_.useState)(!1),[r,i]=(0,_.useState)(!1),a=(0,_.useRef)(null),o=(0,_.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:s,pauseOnHover:c,closeToast:l,onClick:u,closeOnClick:d}=e;_e({id:e.toastId,containerId:e.containerId,fn:n}),(0,_.useEffect)(()=>{if(e.pauseOnFocusLoss)return f(),()=>{p()}},[e.pauseOnFocusLoss]);function f(){document.hasFocus()||v(),window.addEventListener(`focus`,g),window.addEventListener(`blur`,v)}function p(){window.removeEventListener(`focus`,g),window.removeEventListener(`blur`,v)}function m(t){if(e.draggable===!0||e.draggable===t.pointerType){y();let n=a.current;o.canCloseOnClick=!0,o.canDrag=!0,n.style.transition=`none`,e.draggableDirection===`x`?(o.start=t.clientX,o.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(o.start=t.clientY,o.removalDistance=n.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function h(t){let{top:n,bottom:r,left:i,right:o}=a.current.getBoundingClientRect();t.pointerType===`mouse`&&e.pauseOnHover&&t.clientX>=i&&t.clientX<=o&&t.clientY>=n&&t.clientY<=r?v():g()}function g(){n(!0)}function v(){n(!1)}function y(){o.didMove=!1,document.addEventListener(`pointermove`,x),document.addEventListener(`pointerup`,S)}function b(){document.removeEventListener(`pointermove`,x),document.removeEventListener(`pointerup`,S)}function x(n){let r=a.current;if(o.canDrag&&r){o.didMove=!0,t&&v(),e.draggableDirection===`x`?o.delta=n.clientX-o.start:o.delta=n.clientY-o.start,o.start!==n.clientX&&(o.canCloseOnClick=!1);let i=e.draggableDirection===`x`?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`;r.style.transform=`translate3d(${i},0)`,r.style.opacity=`${1-Math.abs(o.delta/o.removalDistance)}`}}function S(){b();let t=a.current;if(o.canDrag&&o.didMove&&t){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}t.style.transition=`transform 0.2s, opacity 0.2s`,t.style.removeProperty(`transform`),t.style.removeProperty(`opacity`)}}let C={onPointerDown:m,onPointerUp:h};return s&&c&&(C.onMouseEnter=v,e.stacked||(C.onMouseLeave=g)),d&&(C.onClick=e=>{u&&u(e),o.canCloseOnClick&&l(!0)}),{playToast:g,pauseToast:v,isRunning:t,preventExitTransition:r,toastRef:a,eventHandlers:C}}var ke=typeof window<`u`?_.useLayoutEffect:_.useEffect,Ae=({theme:e,type:t,isLoading:n,...r})=>_.createElement(`svg`,{viewBox:`0 0 24 24`,width:`100%`,height:`100%`,fill:e===`colored`?`currentColor`:`var(--toastify-icon-color-${t})`,...r});function je(e){return _.createElement(Ae,{...e},_.createElement(`path`,{d:`M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z`}))}function Me(e){return _.createElement(Ae,{...e},_.createElement(`path`,{d:`M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z`}))}function Ne(e){return _.createElement(Ae,{...e},_.createElement(`path`,{d:`M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z`}))}function Pe(e){return _.createElement(Ae,{...e},_.createElement(`path`,{d:`M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z`}))}function Fe(){return _.createElement(`div`,{className:`Toastify__spinner`})}var Ie={info:Me,warning:je,success:Ne,error:Pe,spinner:Fe},Le=e=>e in Ie;function Re({theme:e,type:t,isLoading:n,icon:r}){let i=null,a={theme:e,type:t};return r===!1||(C(r)?i=r({...a,isLoading:n}):(0,_.isValidElement)(r)?i=(0,_.cloneElement)(r,a):n?i=Ie.spinner():Le(t)&&(i=Ie[t](a))),i}var ze=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:a}=Oe(e),{closeButton:o,children:s,autoClose:c,onClick:l,type:u,hideProgressBar:d,closeToast:f,transition:p,position:m,className:h,style:g,progressClassName:v,updateId:y,role:x,progress:S,rtl:w,toastId:T,deleteToast:E,isIn:ee,isLoading:te,closeOnClick:D,theme:ne,ariaLabel:oe}=e,se=b(`Toastify__toast`,`Toastify__toast-theme--${ne}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":w},{"Toastify__toast--close-on-click":D}),O=C(h)?h({rtl:w,position:m,type:u,defaultClassName:se}):b(se,h),k=Re(e),ce=!!S||!c,le={closeToast:f,type:u,theme:ne},ue=null;return o===!1||(ue=C(o)?o(le):(0,_.isValidElement)(o)?(0,_.cloneElement)(o,le):ie(le)),_.createElement(p,{isIn:ee,done:E,position:m,preventExitTransition:n,nodeRef:r,playToast:a},_.createElement(`div`,{id:T,tabIndex:0,onClick:l,"data-in":ee,className:O,...i,style:g,ref:r,...ee&&{role:x,"aria-label":oe}},k!=null&&_.createElement(`div`,{className:b(`Toastify__toast-icon`,{"Toastify--animate-icon Toastify__zoom-enter":!te})},k),re(s,e,!t),ue,!e.customProgressBar&&_.createElement(ae,{...y&&!ce?{key:`p-${y}`}:{},rtl:w,theme:ne,delay:c,isRunning:t,isIn:ee,closeToast:f,hide:d,type:u,className:v,controlledProgress:ce,progress:S||0})))},Be=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),Ve=D(Be(`bounce`,!0));D(Be(`slide`,!0)),D(Be(`zoom`)),D(Be(`flip`));var He={position:`top-right`,transition:Ve,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:`touch`,draggablePercent:80,draggableDirection:`x`,role:`alert`,theme:`light`,"aria-label":`Notifications Alt+T`,hotKeys:e=>e.altKey&&e.code===`KeyT`};function Ue(e){let t={...He,...e},n=e.stacked,[r,i]=(0,_.useState)(!0),a=(0,_.useRef)(null),{getToastToRender:o,isToastActive:s,count:c}=De(t),{className:l,style:u,rtl:d,containerId:f,hotKeys:p}=t;function m(e){let t=b(`Toastify__toast-container`,`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":d});return C(l)?l({position:e,rtl:d,defaultClassName:t}):b(t,T(l))}function h(){n&&(i(!0),j.play())}return ke(()=>{if(n){let e=a.current.querySelectorAll(`[data-in="true"]`),n=t.position?.includes(`top`),i=0,o=0;Array.from(e).reverse().forEach((e,t)=>{let a=e;a.classList.add(`Toastify__toast--stacked`),t>0&&(a.dataset.collapsed=`${r}`),a.dataset.pos||(a.dataset.pos=n?`top`:`bot`);let s=i*(r?.2:1)+(r?0:12*t),c=Math.max(.5,1-(r?o:0));a.style.setProperty(`--y`,`${n?s:s*-1}px`),a.style.setProperty(`--g`,`12`),a.style.setProperty(`--s`,`${c}`),i+=a.offsetHeight,o+=.025})}},[r,c,n]),(0,_.useEffect)(()=>{function e(e){var t;let n=a.current;p(e)&&((t=n?.querySelector(`[tabIndex="0"]`))==null||t.focus(),i(!1),j.pause()),e.key===`Escape`&&(document.activeElement===n||n!=null&&n.contains(document.activeElement))&&(i(!0),j.play())}return document.addEventListener(`keydown`,e),()=>{document.removeEventListener(`keydown`,e)}},[p]),_.createElement(`section`,{ref:a,className:`Toastify`,id:f,onMouseEnter:()=>{n&&(i(!1),j.pause())},onMouseLeave:h,"aria-live":`polite`,"aria-atomic":`false`,"aria-relevant":`additions text`,"aria-label":t[`aria-label`]},o((e,t)=>{let r=t.length?{...u}:{...u,pointerEvents:`none`};return _.createElement(`div`,{tabIndex:-1,className:m(e),"data-stacked":n,style:r,key:`c-${e}`},t.map(({content:e,props:t})=>_.createElement(ze,{...t,stacked:n,collapseAll:h,isIn:s(t.toastId,t.containerId),key:`t-${t.key}`},e)))}))}var We=`:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: hsl(6, 78%, 57%);
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-container-width: fit-content;
  --toastify-toast-width: 320px;
  --toastify-toast-offset: 16px;
  --toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));
  --toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));
  --toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));
  --toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));
  --toastify-toast-background: #fff;
  --toastify-toast-padding: 14px;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-toast-bd-radius: 6px;
  --toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;
  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  /* Used only for colored theme */
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;
  --toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
  /* used to control the opacity of the progress trail */
  --toastify-color-progress-bgo: 0.2;
}

.Toastify__toast-container {
  z-index: var(--toastify-z-index);
  -webkit-transform: translate3d(0, 0, var(--toastify-z-index));
  position: fixed;
  width: var(--toastify-container-width);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.Toastify__toast-container--top-left {
  top: var(--toastify-toast-top);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--top-center {
  top: var(--toastify-toast-top);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--top-right {
  top: var(--toastify-toast-top);
  right: var(--toastify-toast-right);
  align-items: end;
}
.Toastify__toast-container--bottom-left {
  bottom: var(--toastify-toast-bottom);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--bottom-center {
  bottom: var(--toastify-toast-bottom);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--bottom-right {
  bottom: var(--toastify-toast-bottom);
  right: var(--toastify-toast-right);
  align-items: end;
}

.Toastify__toast {
  --y: 0px;
  position: relative;
  touch-action: none;
  width: var(--toastify-toast-width);
  min-height: var(--toastify-toast-min-height);
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: var(--toastify-toast-padding);
  border-radius: var(--toastify-toast-bd-radius);
  box-shadow: var(--toastify-toast-shadow);
  max-height: var(--toastify-toast-max-height);
  font-family: var(--toastify-font-family);
  /* webkit only issue #791 */
  z-index: 0;
  /* inner swag */
  display: flex;
  flex: 1 auto;
  align-items: center;
  word-break: break-word;
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container {
    width: 100vw;
    left: env(safe-area-inset-left);
    margin: 0;
  }
  .Toastify__toast-container--top-left,
  .Toastify__toast-container--top-center,
  .Toastify__toast-container--top-right {
    top: env(safe-area-inset-top);
    transform: translateX(0);
  }
  .Toastify__toast-container--bottom-left,
  .Toastify__toast-container--bottom-center,
  .Toastify__toast-container--bottom-right {
    bottom: env(safe-area-inset-bottom);
    transform: translateX(0);
  }
  .Toastify__toast-container--rtl {
    right: env(safe-area-inset-right);
    left: initial;
  }
  .Toastify__toast {
    --toastify-toast-width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
}

.Toastify__toast-container[data-stacked='true'] {
  width: var(--toastify-toast-width);
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container[data-stacked='true'] {
    width: 100vw;
  }
}

.Toastify__toast--stacked {
  position: absolute;
  width: 100%;
  transform: translate3d(0, var(--y), 0) scale(var(--s));
  transition: transform 0.3s;
}

.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,
.Toastify__toast--stacked[data-collapsed] .Toastify__close-button {
  transition: opacity 0.1s;
}

.Toastify__toast--stacked[data-collapsed='false'] {
  overflow: visible;
}

.Toastify__toast--stacked[data-collapsed='true']:not(:last-child) > * {
  opacity: 0;
}

.Toastify__toast--stacked:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: calc(var(--g) * 1px);
  bottom: 100%;
}

.Toastify__toast--stacked[data-pos='top'] {
  top: 0;
}

.Toastify__toast--stacked[data-pos='bot'] {
  bottom: 0;
}

.Toastify__toast--stacked[data-pos='bot'].Toastify__toast--stacked:before {
  transform-origin: top;
}

.Toastify__toast--stacked[data-pos='top'].Toastify__toast--stacked:before {
  transform-origin: bottom;
}

.Toastify__toast--stacked:before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  transform: scaleY(3);
  z-index: -1;
}

.Toastify__toast--rtl {
  direction: rtl;
}

.Toastify__toast--close-on-click {
  cursor: pointer;
}

.Toastify__toast-icon {
  margin-inline-end: 10px;
  width: 22px;
  flex-shrink: 0;
  display: flex;
}

.Toastify--animate {
  animation-fill-mode: both;
  animation-duration: 0.5s;
}

.Toastify--animate-icon {
  animation-fill-mode: both;
  animation-duration: 0.3s;
}

.Toastify__toast-theme--dark {
  background: var(--toastify-color-dark);
  color: var(--toastify-text-color-dark);
}

.Toastify__toast-theme--light {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--default {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--info {
  color: var(--toastify-text-color-info);
  background: var(--toastify-color-info);
}

.Toastify__toast-theme--colored.Toastify__toast--success {
  color: var(--toastify-text-color-success);
  background: var(--toastify-color-success);
}

.Toastify__toast-theme--colored.Toastify__toast--warning {
  color: var(--toastify-text-color-warning);
  background: var(--toastify-color-warning);
}

.Toastify__toast-theme--colored.Toastify__toast--error {
  color: var(--toastify-text-color-error);
  background: var(--toastify-color-error);
}

.Toastify__progress-bar-theme--light {
  background: var(--toastify-color-progress-light);
}

.Toastify__progress-bar-theme--dark {
  background: var(--toastify-color-progress-dark);
}

.Toastify__progress-bar--info {
  background: var(--toastify-color-progress-info);
}

.Toastify__progress-bar--success {
  background: var(--toastify-color-progress-success);
}

.Toastify__progress-bar--warning {
  background: var(--toastify-color-progress-warning);
}

.Toastify__progress-bar--error {
  background: var(--toastify-color-progress-error);
}

.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
  background: var(--toastify-color-transparent);
}

.Toastify__close-button {
  color: #fff;
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  z-index: 1;
}

.Toastify__toast--rtl .Toastify__close-button {
  left: 6px;
  right: unset;
}

.Toastify__close-button--light {
  color: #000;
  opacity: 0.3;
}

.Toastify__close-button > svg {
  fill: currentColor;
  height: 16px;
  width: 14px;
}

.Toastify__close-button:hover,
.Toastify__close-button:focus {
  opacity: 1;
}

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

.Toastify__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
  transform-origin: left;
}

.Toastify__progress-bar--animated {
  animation: Toastify__trackProgress linear 1 forwards;
}

.Toastify__progress-bar--controlled {
  transition: transform 0.2s;
}

.Toastify__progress-bar--rtl {
  right: 0;
  left: initial;
  transform-origin: right;
  border-bottom-left-radius: initial;
}

.Toastify__progress-bar--wrp {
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: var(--toastify-toast-bd-radius);
  border-bottom-right-radius: var(--toastify-toast-bd-radius);
}

.Toastify__progress-bar--wrp[data-hidden='true'] {
  opacity: 0;
}

.Toastify__progress-bar--bg {
  opacity: var(--toastify-color-progress-bgo);
  width: 100%;
  height: 100%;
}

.Toastify__spinner {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: var(--toastify-spinner-color-empty-area);
  border-right-color: var(--toastify-spinner-color);
  animation: Toastify__spin 0.65s linear infinite;
}

@keyframes Toastify__bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes Toastify__bounceOutUp {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes Toastify__bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutDown {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.Toastify__bounce-enter--top-left,
.Toastify__bounce-enter--bottom-left {
  animation-name: Toastify__bounceInLeft;
}

.Toastify__bounce-enter--top-right,
.Toastify__bounce-enter--bottom-right {
  animation-name: Toastify__bounceInRight;
}

.Toastify__bounce-enter--top-center {
  animation-name: Toastify__bounceInDown;
}

.Toastify__bounce-enter--bottom-center {
  animation-name: Toastify__bounceInUp;
}

.Toastify__bounce-exit--top-left,
.Toastify__bounce-exit--bottom-left {
  animation-name: Toastify__bounceOutLeft;
}

.Toastify__bounce-exit--top-right,
.Toastify__bounce-exit--bottom-right {
  animation-name: Toastify__bounceOutRight;
}

.Toastify__bounce-exit--top-center {
  animation-name: Toastify__bounceOutUp;
}

.Toastify__bounce-exit--bottom-center {
  animation-name: Toastify__bounceOutDown;
}

@keyframes Toastify__zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

@keyframes Toastify__zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translate3d(0, var(--y), 0) scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}

.Toastify__zoom-enter {
  animation-name: Toastify__zoomIn;
}

.Toastify__zoom-exit {
  animation-name: Toastify__zoomOut;
}

@keyframes Toastify__flipIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

@keyframes Toastify__flipOut {
  from {
    transform: translate3d(0, var(--y), 0) perspective(400px);
  }
  30% {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.Toastify__flip-enter {
  animation-name: Toastify__flipIn;
}

.Toastify__flip-exit {
  animation-name: Toastify__flipOut;
}

@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInLeft {
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInUp {
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInDown {
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutLeft {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutDown {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0);
  }
}

@keyframes Toastify__slideOutUp {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0);
  }
}

.Toastify__slide-enter--top-left,
.Toastify__slide-enter--bottom-left {
  animation-name: Toastify__slideInLeft;
}

.Toastify__slide-enter--top-right,
.Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight;
}

.Toastify__slide-enter--top-center {
  animation-name: Toastify__slideInDown;
}

.Toastify__slide-enter--bottom-center {
  animation-name: Toastify__slideInUp;
}

.Toastify__slide-exit--top-left,
.Toastify__slide-exit--bottom-left {
  animation-name: Toastify__slideOutLeft;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-right,
.Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-center {
  animation-name: Toastify__slideOutUp;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--bottom-center {
  animation-name: Toastify__slideOutDown;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes Toastify__spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`,Ge=new Map,Ke=(e,t)=>{ke(()=>{if(!e||typeof document>`u`)return;let n=document,r=Ge.get(n);if(r){t&&r.setAttribute(`nonce`,t);return}let i=n.createElement(`style`);i.textContent=e,t&&i.setAttribute(`nonce`,t),n.head.appendChild(i),Ge.set(n,i)},[t])};function qe(e){return Ke(We,e.nonce),_.createElement(Ue,{...e})}var Je={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ye=_.createContext&&_.createContext(Je),Xe=[`attr`,`size`,`title`];function Ze(e,t){if(e==null)return{};var n,r,i=Qe(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Qe(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function $e(){return $e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$e.apply(null,arguments)}function et(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function tt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?et(Object(n),!0).forEach(function(t){nt(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):et(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function nt(e,t,n){return(t=rt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rt(e){var t=it(e,`string`);return typeof t==`symbol`?t:t+``}function it(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function at(e){return e&&e.map((e,t)=>_.createElement(e.tag,tt({key:t},e.attr),at(e.child)))}function ot(e){return t=>_.createElement(st,$e({attr:tt({},e.attr)},t),at(e.child))}function st(e){var t=t=>{var n=e.attr,r=e.size,i=e.title,a=Ze(e,Xe),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),_.createElement(`svg`,$e({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:tt(tt({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&_.createElement(`title`,null,i),e.children)};return Ye===void 0?t(Je):_.createElement(Ye.Consumer,null,e=>t(e))}function ct(e){return ot({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`18`,y1:`6`,x2:`6`,y2:`18`},child:[]},{tag:`line`,attr:{x1:`6`,y1:`6`,x2:`18`,y2:`18`},child:[]}]})(e)}function lt(e){return ot({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`7`,r:`4`},child:[]}]})(e)}function ut(e){return ot({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`3 6 5 6 21 6`},child:[]},{tag:`path`,attr:{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`},child:[]},{tag:`line`,attr:{x1:`10`,y1:`11`,x2:`10`,y2:`17`},child:[]},{tag:`line`,attr:{x1:`14`,y1:`11`,x2:`14`,y2:`17`},child:[]}]})(e)}function dt(e){return ot({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`11`,cy:`11`,r:`8`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`},child:[]}]})(e)}function ft(e){return ot({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`23 4 23 10 17 10`},child:[]},{tag:`polyline`,attr:{points:`1 20 1 14 7 14`},child:[]},{tag:`path`,attr:{d:`M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15`},child:[]}]})(e)}function pt(e){return ot({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`12`,y1:`5`,x2:`12`,y2:`19`},child:[]},{tag:`line`,attr:{x1:`5`,y1:`12`,x2:`19`,y2:`12`},child:[]}]})(e)}function mt(e){return ot({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`10`,r:`3`},child:[]}]})(e)}function ht(e){return ot({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z`},child:[]}]})(e)}function gt(e){return ot({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z`},child:[]},{tag:`line`,attr:{x1:`16`,y1:`8`,x2:`2`,y2:`22`},child:[]},{tag:`line`,attr:{x1:`17.5`,y1:`15`,x2:`9`,y2:`15`},child:[]}]})(e)}function _t(e){return ot({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z`},child:[]}]})(e)}function vt(e){return ot({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`20 6 9 17 4 12`},child:[]}]})(e)}function yt(e){return ot({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`13`,r:`4`},child:[]}]})(e)}function bt(e){return ot({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`12`,y1:`19`,x2:`12`,y2:`5`},child:[]},{tag:`polyline`,attr:{points:`5 12 12 5 19 12`},child:[]}]})(e)}function xt(e){return ot({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`5`,y1:`12`,x2:`19`,y2:`12`},child:[]},{tag:`polyline`,attr:{points:`12 5 19 12 12 19`},child:[]}]})(e)}function St(e){return ot({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`19`,y1:`12`,x2:`5`,y2:`12`},child:[]},{tag:`polyline`,attr:{points:`12 19 5 12 12 5`},child:[]}]})(e)}var Ct=`/reactProject/assets/logo--nZl-i6T.png`,wt=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),M=o(((e,t)=>{t.exports=wt()}))(),Tt={en:{whoWeAre:`Who we are`,contacts:`Contacts`,menu:`Menu`,signUp:`Sign up`,customizeBackground:`Customize background`,weatherDashboard:`Weather dashboard`,heroDescription:`Create your personal list of favorite cities and always be aware of the weather.`,searchLocation:`Search location...`,hourlyForecast:`Hourly forecast`,weeklyForecast:`Weekly forecast`,seeMore:`See more`,address:`Address`,contactUs:`Contact us`,aboutUs:`About us`,allRightsReserved:`All rights reserved.`,customizeTitle:`Customize background`,customizeDescription:`Choose a color or enter your own HEX code.`,addColor:`Add color`,reset:`Reset`,apply:`Apply`,total:`Total:`,default:`Default`,username:`Username`,password:`Password`,email:`E-Mail`,alreadyHaveAccount:`Already have an account?`,logIn:`Log In`},uk:{whoWeAre:`Про нас`,contacts:`Контакти`,menu:`Меню`,signUp:`Реєстрація`,customizeBackground:`Налаштувати фон`,weatherDashboard:`Панель погоди`,heroDescription:`Створюйте власний список улюблених міст і завжди знайте погоду.`,searchLocation:`Пошук міста...`,hourlyForecast:`Погодинний прогноз`,weeklyForecast:`Прогноз на тиждень`,seeMore:`Детальніше`,address:`Адреса`,contactUs:`Зв’язатися`,aboutUs:`Про нас`,allRightsReserved:`Усі права захищені.`,customizeTitle:`Налаштувати фон`,customizeDescription:`Виберіть колір або введіть свій HEX-код.`,addColor:`Додати колір`,reset:`Скинути`,apply:`Застосувати`,total:`Разом:`,default:`За замовчуванням`,username:`Ім’я користувача`,password:`Пароль`,email:`Ел. пошта`,alreadyHaveAccount:`Вже маєте акаунт?`,logIn:`Увійти`},es:{whoWeAre:`Quiénes somos`,contacts:`Contacto`,menu:`Menú`,signUp:`Registrarse`,customizeBackground:`Personalizar fondo`,weatherDashboard:`Panel del tiempo`,heroDescription:`Crea tu lista de ciudades favoritas y consulta siempre el tiempo.`,searchLocation:`Buscar ciudad...`,hourlyForecast:`Previsión por horas`,weeklyForecast:`Previsión semanal`,seeMore:`Ver más`,address:`Dirección`,contactUs:`Contáctanos`,aboutUs:`Sobre nosotros`,allRightsReserved:`Todos los derechos reservados.`,customizeTitle:`Personalizar fondo`,customizeDescription:`Elige un color o introduce tu código HEX.`,addColor:`Añadir color`,reset:`Restablecer`,apply:`Aplicar`,total:`Total:`,default:`Predeterminado`,username:`Usuario`,password:`Contraseña`,email:`Correo electrónico`,alreadyHaveAccount:`¿Ya tienes cuenta?`,logIn:`Iniciar sesión`},de:{whoWeAre:`Über uns`,contacts:`Kontakt`,menu:`Menü`,signUp:`Registrieren`,customizeBackground:`Hintergrund anpassen`,weatherDashboard:`Wetterübersicht`,heroDescription:`Erstelle deine Liste mit Lieblingsstädten und behalte das Wetter im Blick.`,searchLocation:`Ort suchen...`,hourlyForecast:`Stündliche Vorhersage`,weeklyForecast:`Wochenvorhersage`,seeMore:`Mehr sehen`,address:`Adresse`,contactUs:`Kontakt`,aboutUs:`Über uns`,allRightsReserved:`Alle Rechte vorbehalten.`,customizeTitle:`Hintergrund anpassen`,customizeDescription:`Wähle eine Farbe oder gib deinen HEX-Code ein.`,addColor:`Farbe hinzufügen`,reset:`Zurücksetzen`,apply:`Anwenden`,total:`Gesamt:`,default:`Standard`,username:`Benutzername`,password:`Passwort`,email:`E-Mail`,alreadyHaveAccount:`Bereits ein Konto?`,logIn:`Anmelden`}},Et=(0,_.createContext)(null),Dt={en:`en-US`,uk:`uk-UA`,es:`es-ES`,de:`de-DE`};function Ot({children:e}){let[t,n]=(0,_.useState)(()=>localStorage.getItem(`weatherLanguage`)||`en`);return(0,M.jsx)(Et.Provider,{value:{language:t,changeLanguage:e=>{n(e),localStorage.setItem(`weatherLanguage`,e)},t:e=>Tt[t]?.[e]||Tt.en[e]||e},children:e})}function kt(){return(0,_.useContext)(Et)}var At=`-ms-`,jt=`-moz-`,N=`-webkit-`,Mt=`comm`,Nt=`rule`,Pt=`decl`,Ft=`@import`,It=`@namespace`,Lt=`@keyframes`,Rt=`@layer`,zt=Math.abs,Bt=String.fromCharCode,Vt=Object.assign;function Ht(e,t){return Kt(e,0)^45?(((t<<2^Kt(e,0))<<2^Kt(e,1))<<2^Kt(e,2))<<2^Kt(e,3):0}function Ut(e){return e.trim()}function Wt(e,t){return(e=t.exec(e))?e[0]:e}function P(e,t,n){return e.replace(t,n)}function Gt(e,t,n){return e.indexOf(t,n)}function Kt(e,t){return e.charCodeAt(t)|0}function qt(e,t,n){return e.slice(t,n)}function Jt(e){return e.length}function Yt(e){return e.length}function Xt(e,t){return t.push(e),e}function Zt(e,t){return e.map(t).join(``)}function Qt(e,t){return e.filter(function(e){return!Wt(e,t)})}var $t=1,en=1,tn=0,nn=0,F=0,rn=``;function an(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:$t,column:en,length:o,return:``,siblings:s}}function on(e,t){return Vt(an(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function sn(e){for(;e.root;)e=on(e.root,{children:[e]});Xt(e,e.siblings)}function cn(){return F}function ln(){return F=nn>0?Kt(rn,--nn):0,en--,F===10&&(en=1,$t--),F}function un(){return F=nn<tn?Kt(rn,nn++):0,en++,F===10&&(en=1,$t++),F}function dn(){return Kt(rn,nn)}function fn(){return nn}function pn(e,t){return qt(rn,e,t)}function mn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function hn(e){return $t=en=1,tn=Jt(rn=e),nn=0,[]}function gn(e){return rn=``,e}function _n(e){return Ut(pn(nn-1,bn(e===91?e+2:e===40?e+1:e)))}function vn(e){for(;(F=dn())&&F<33;)un();return mn(e)>2||mn(F)>3?``:` `}function yn(e,t){for(;--t&&un()&&!(F<48||F>102||F>57&&F<65||F>70&&F<97););return pn(e,fn()+(t<6&&dn()==32&&un()==32))}function bn(e){for(;un();)switch(F){case e:return nn;case 34:case 39:e!==34&&e!==39&&bn(F);break;case 40:e===41&&bn(e);break;case 92:un();break}return nn}function xn(e,t){for(;un()&&e+F!==57&&(e+F!==84||dn()!==47););return`/*`+pn(t,nn-1)+`*`+Bt(e===47?e:un())}function Sn(e){for(;!mn(dn());)un();return pn(e,nn)}function Cn(e){return gn(wn(``,null,null,null,[``],e=hn(e),0,[0],e))}function wn(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=un()){case 40:if(m!=108&&Kt(C,d-1)==58){Gt(C+=P(_n(v),`&`,`&\f`),`&\f`,zt(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=_n(v);break;case 9:case 10:case 13:case 32:C+=vn(m);break;case 92:C+=yn(fn()-1,7);continue;case 47:switch(dn()){case 42:case 47:Xt(En(xn(un(),fn()),t,n,c),c),(mn(m||1)==5||mn(dn()||1)==5)&&Jt(C)&&qt(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=Jt(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=P(C,/\f/g,``)),p>0&&(Jt(C)-d||h===0&&m===47)&&Xt(p>32?Dn(C+`;`,r,n,d-1,c):Dn(P(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(Xt(S=Tn(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123){if(u===0)wn(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(Kt(C,3)===110)break;case 108:if(Kt(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?wn(e,S,S,r&&Xt(Tn(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):wn(C,S,S,S,[``],x,0,s,x)}}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+Jt(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&ln()==125)continue}switch(C+=Bt(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(Jt(C)-1)*_,_=1;break;case 64:dn()===45&&(C+=_n(un())),f=dn(),u=d=Jt(y=C+=Sn(fn())),v++;break;case 45:m===45&&Jt(C)==2&&(h=0)}}return a}function Tn(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=Yt(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=qt(e,f+1,f=zt(g=o[h])),b=e;v<m;++v)(b=Ut(g>0?p[v]+` `+y:P(y,/&\f/g,p[v])))&&(c[_++]=b);return an(e,t,n,i===0?Nt:s,c,l,u,d)}function En(e,t,n,r){return an(e,t,n,Mt,Bt(cn()),qt(e,2,-2),0,r)}function Dn(e,t,n,r,i){return an(e,t,n,Pt,qt(e,0,r),qt(e,r+1,-1),r,i)}function On(e,t,n){switch(Ht(e,t)){case 5103:return N+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return N+e+e;case 4855:return N+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return jt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return N+e+jt+e+At+e+e;case 5936:switch(Kt(e,t+11)){case 114:return N+e+At+P(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return N+e+At+P(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return N+e+At+P(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return N+e+At+e+e;case 6165:return N+e+At+`flex-`+e+e;case 5187:return N+e+P(e,/(\w+).+(:[^]+)/,N+`box-$1$2`+At+`flex-$1$2`)+e;case 5443:return N+e+At+`flex-item-`+P(e,/flex-|-self/g,``)+(Wt(e,/flex-|baseline/)?``:At+`grid-row-`+P(e,/flex-|-self/g,``))+e;case 4675:return N+e+At+`flex-line-pack`+P(e,/align-content|flex-|-self/g,``)+e;case 5548:return N+e+At+P(e,`shrink`,`negative`)+e;case 5292:return N+e+At+P(e,`basis`,`preferred-size`)+e;case 6060:return N+`box-`+P(e,`-grow`,``)+N+e+At+P(e,`grow`,`positive`)+e;case 4554:return N+P(e,/([^-])(transform)/g,`$1`+N+`$2`)+e;case 6187:return P(P(P(e,/(zoom-|grab)/,N+`$1`),/(image-set)/,N+`$1`),e,``)+e;case 5495:case 3959:return P(e,/(image-set\([^]*)/,N+"$1$`$1");case 4968:return P(P(e,/(.+:)(flex-)?(.*)/,N+`box-pack:$3`+At+`flex-pack:$3`),/space-between/,`justify`)+N+e+e;case 4200:if(!Wt(e,/flex-|baseline/))return At+`grid-column-align`+qt(e,t)+e;break;case 2592:case 3360:return At+P(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Wt(e.props,/grid-\w+-end/)})?~Gt(e+(n=n[t].value),`span`,0)?e:At+P(e,`-start`,``)+e+At+`grid-row-span:`+(~Gt(n,`span`,0)?Wt(n,/\d+/):Wt(n,/\d+/)-+Wt(e,/\d+/))+`;`:At+P(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return Wt(e.props,/grid-\w+-start/)})?e:At+P(P(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return P(e,/(.+)-inline(.+)/,N+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jt(e)-1-t>6)switch(Kt(e,t+1)){case 109:if(Kt(e,t+4)!==45)break;case 102:return P(e,/(.+:)(.+)-([^]+)/,`$1`+N+`$2-$3$1`+jt+(Kt(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~Gt(e,`stretch`,0)?On(P(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return P(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return At+n+`:`+r+s+(i?At+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(Kt(e,t+6)===121)return P(e,`:`,`:`+N)+e;break;case 6444:switch(Kt(e,Kt(e,14)===45?18:11)){case 120:return P(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+N+(Kt(e,14)===45?`inline-`:``)+`box$3$1`+N+`$2$3$1`+At+`$2box$3`)+e;case 100:return P(e,`:`,`:`+At)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return P(e,`scroll-`,`scroll-snap-`)+e}return e}function kn(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function An(e,t,n,r){switch(e.type){case Rt:if(e.children.length)break;case Ft:case It:case Pt:return e.return=e.return||e.value;case Mt:return``;case Lt:return e.return=e.value+`{`+kn(e.children,r)+`}`;case Nt:if(!Jt(e.value=e.props.join(`,`)))return``}return Jt(n=kn(e.children,r))?e.return=e.value+`{`+n+`}`:``}function jn(e){var t=Yt(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Mn(e){return function(t){t.root||(t=t.return)&&e(t)}}function Nn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Pt:e.return=On(e.value,e.length,n);return;case Lt:return kn([on(e,{value:P(e.value,`@`,`@`+N)})],r);case Nt:if(e.length)return Zt(n=e.props,function(t){switch(Wt(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:sn(on(e,{props:[P(t,/:(read-\w+)/,`:`+jt+`$1`)]})),sn(on(e,{props:[t]})),Vt(e,{props:Qt(n,r)});break;case`::placeholder`:sn(on(e,{props:[P(t,/:(plac\w+)/,`:`+N+`input-$1`)]})),sn(on(e,{props:[P(t,/:(plac\w+)/,`:`+jt+`$1`)]})),sn(on(e,{props:[P(t,/:(plac\w+)/,At+`input-$1`)]})),sn(on(e,{props:[t]})),Vt(e,{props:Qt(n,r)})}return``})}}var Pn=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Fn=`active`,In=`data-styled-version`,Ln=`6.5.1`,Rn=`/*!sc*/
`,zn=typeof window<`u`&&typeof document<`u`;function Bn(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var Vn=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:Bn(`REACT_APP_SC_DISABLE_SPEEDY`)??Bn(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),Hn=`sc-keyframes-`,Un={};function Wn(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var Gn=new Map,Kn=new Map,qn=1,Jn=e=>{if(Gn.has(e))return Gn.get(e);for(;Kn.has(qn);)qn++;let t=qn++;return Gn.set(e,t),Kn.set(t,e),t},Yn=e=>Kn.get(e),Xn=(e,t)=>{qn=t+1,Gn.set(e,t),Kn.set(t,e)},Zn=Object.freeze([]),Qn=Object.freeze({});function $n(e,t,n=Qn){return e.theme!==n.theme&&e.theme||t||n.theme}var er=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,tr=/(^-|-$)/g;function nr(e){return e.replace(er,`-`).replace(tr,``)}var rr=/(a)(d)/gi,ir=e=>String.fromCharCode(e+(e>25?39:97));function ar(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=ir(t%52)+n;return(ir(t%52)+n).replace(rr,`$1-$2`)}var or=5381,sr=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},cr=e=>sr(or,e);function lr(e){return ar(cr(e)>>>0)}function ur(e){return e.displayName||e.name||`Component`}function dr(e){return typeof e==`string`&&!0}function fr(e){return dr(e)?`styled.${e}`:`Styled(${ur(e)})`}var pr=Symbol.for(`react.memo`),mr=Symbol.for(`react.forward_ref`),hr={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},gr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_r={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vr={[mr]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[pr]:_r};function yr(e){return(`type`in(t=e)&&t.type.$$typeof)===pr?_r:`$$typeof`in e?vr[e.$$typeof]:hr;var t}var br=Object.defineProperty,xr=Object.getOwnPropertyNames,Sr=Object.getOwnPropertySymbols,Cr=Object.getOwnPropertyDescriptor,wr=Object.getPrototypeOf,Tr=Object.prototype;function Er(e,t,n){if(typeof t!=`string`){let r=wr(t);r&&r!==Tr&&Er(e,r,n);let i=xr(t).concat(Sr(t)),a=yr(e),o=yr(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in gr||n&&n[s]||o&&s in o||a&&s in a)){let n=Cr(t,s);try{br(e,s,n)}catch{}}}}return e}function Dr(e){return typeof e==`function`}var Or=Symbol.for(`react.forward_ref`);function kr(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===Or&&`styledComponentId`in e}function Ar(e,t){return e&&t?e+` `+t:e||t||``}function jr(e,t){return e.join(t||``)}function Mr(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Nr(e,t,n=!1){if(!n&&!Mr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=Nr(e[n],t[n]);else if(Mr(t))for(let n in t)e[n]=Nr(e[n],t[n]);return e}function Pr(e,t){Object.defineProperty(e,"toString",{value:t})}var Fr=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw Wn(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+Rn;return t}},Ir=`style[${Pn}][${In}="${Ln}"]`,Lr=RegExp(`^${Pn}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Rr=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,zr=e=>{if(!e)return document;if(Rr(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(Rr(t))return t}return document},Br=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},Vr=(e,t)=>{let n=(t.textContent??``).split(Rn),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(Lr);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(Xn(n,t),Br(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},Hr=e=>{let t=zr(e.options.target).querySelectorAll(Ir);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(Pn)!==Fn&&(Vr(e,r),r.parentNode&&r.parentNode.removeChild(r))}},Ur=!1;function Wr(){if(!1!==Ur)return Ur;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return Ur=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return Ur=t.getAttribute(`content`)||void 0}return Ur=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var Gr=(e,t)=>{let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${Pn}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(Pn,Fn),i.setAttribute(In,Ln);let s=t||Wr();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},Kr=class{constructor(e,t){this.element=Gr(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw Wn(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},qr=class{constructor(e,t){this.element=Gr(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},Jr=zn,Yr={isServer:!zn,useCSSOMInjection:!Vn},Xr=class e{static registerId(e){return Jn(e)}constructor(e=Qn,t={},n){this.options=Object.assign(Object.assign({},Yr),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&zn&&Jr&&(Jr=!1,Hr(this)),Pr(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=Yn(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=Pn+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&zn&&Hr(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&zn&&t.target!==this.options.target&&zr(this.options.target)!==zr(t.target)&&Hr(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new Kr(t,n):new qr(t,n))(this.options),new Fr(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){Jn(e),e.startsWith(Hn)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(Jn(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(Jn(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},Zr=new WeakSet,Qr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function $r(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in Qr||e.startsWith(`--`)?String(t).trim():t+`px`}var ei=47;function ti(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var ni=Symbol.for(`sc-keyframes`);function ri(e){return typeof e==`object`&&!!e&&ni in e}function ii(e){return Dr(e)&&!(e.prototype&&e.prototype.isReactComponent)}var ai=e=>e==null||!1===e||e===``,oi=Symbol.for(`react.client.reference`);function si(e){return e.$$typeof===oi}function ci(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!ai(r)&&(Array.isArray(r)&&Zr.has(r)||Dr(r)?t.push(ti(n)+`:`,r,`;`):Mr(r)?(t.push(n+` {`),ci(r,t),t.push(`}`)):t.push(ti(n)+`: `+$r(n,r)+`;`))}}function li(e,t,n,r,i=[]){if(ai(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return si(e)?i:ii(e)&&t?li(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)li(e[a],t,n,r,i);return i}return kr(e)?(i.push(`.${e.styledComponentId}`),i):ri(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):si(e)?i:Mr(e)&&e.toString===Object.prototype.toString?(ci(e,i),i):(i.push(e.toString()),i)}var ui=cr(Ln),di=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=sr(ui,t),this.baseStyle=n,Xr.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a){if(ii(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=jr(li(r,e,t,n)))}else i+=jr(li(a,e,t,n))}}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=ar(sr(sr(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Ar(r,a)}}return r}},fi=/&/g;function pi(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function mi(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==ei||e.charCodeAt(c+1)!==42){if(o)l===42&&e.charCodeAt(c+1)===ei&&(o=!1,c++);else if(l!==34&&l!==39||pi(e,c)){if(a===0){if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}}else a===0?a=l:a===l&&(a=0)}else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function hi(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&hi(a.children,t)}return e}function gi({options:e=Qn,plugins:t=Zn}=Qn){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(fi,r).replace(i,a))}),e.prefix&&o.push(Nn),o.push(An);let s=[],c=jn(o.concat(Mn(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return mi(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||pi(e,o)){if(s===0){if(t===ei&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==ei);)o++;o+=2}else if(t!==40){if(t!==41){if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===ei)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===ei&&o+1<r&&e.charCodeAt(o+1)===ei){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++}else c>0&&c--,o++}else c++,o++}else o++}else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:mi(i)):l===0?e:mi(e)}(t),d=Cn(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=hi(d,e.namespace)),s=[],kn(d,c),s},u=e,d=or;for(let e=0;e<t.length;e++)t[e].name||Wn(15),d=sr(d,t[e].name);return u!=null&&u.namespace&&(d=sr(d,u.namespace)),u!=null&&u.prefix&&(d=sr(d,`p`)),l.hash=d===or?``:d.toString(),l}var _i=new Xr,vi=gi(),yi=_.createContext({shouldForwardProp:void 0,styleSheet:_i,stylis:vi,stylisPlugins:void 0});yi.Consumer;function bi(){return _.useContext(yi)}var xi=_.createContext(void 0);xi.Consumer;var Si=Object.prototype.hasOwnProperty,Ci={};function wi(e,t){let n=typeof e==`string`?nr(e):`sc`;Ci[n]=(Ci[n]||0)+1;let r=n+`-`+lr(Ln+n+Ci[n]);return t?t+`-`+r:r}function Ti(e,t,n){let r=kr(e),i=e,a=!dr(e),{attrs:o=Zn,componentId:s=wi(t.displayName,t.parentComponentId),displayName:c=fr(e)}=t,l=t.displayName&&t.componentId?nr(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new di(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=_.useContext(xi),u=bi(),d=e.shouldForwardProp||u.shouldForwardProp,f=$n(t,l,a)||Qn,p,m;{let e=_.useRef(null),n=e.current;if(n!==null&&n[1]===f&&n[2]===u.styleSheet&&n[3]===u.stylis&&n[7]===i&&function(e,t,n){let r=e,i=t,a=0;for(let e in i)if(Si.call(i,e)&&(a++,r[e]!==i[e]))return!1;return a===n}(n[0],t,n[4]))p=n[5],m=n[6];else{p=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let n=0;n<e.length;n++){let a=e[n],o=Dr(a)?a(i?Object.assign({},r):r):a;for(let e in o)e===`className`?r.className=Ar(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):e in t&&t[e]===void 0||(r[e]=o[e])}return`className`in t&&typeof t.className==`string`&&(r.className=Ar(r.className,t.className)),r}(r,t,f),m=i.generateAndInjectStyles(p,u.styleSheet,u.stylis);let n=0;for(let e in t)Si.call(t,e)&&n++;e.current=[t,f,u.styleSheet,u.stylis,n,p,m,i]}}let h=p.as||c,g=function(e,t,n,r){let i={};for(let a in e)e[a]===void 0||a[0]===`$`||a===`as`||a===`theme`&&e.theme===n||(a===`forwardedAs`?i.as=e.forwardedAs:r&&!r(a,t)||(i[a]=e[a]));return i}(p,h,f,d),v=Ar(o,s);return m&&(v+=` `+m),p.className&&(v+=` `+p.className),g[dr(h)&&h.includes(`-`)?`class`:`className`]=v,n&&(g.ref=n),(0,_.createElement)(h,g)}(m,e,t)}p.displayName=c;let m=_.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?Ar(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)Nr(e,n,!0);return e}({},i.defaultProps,e):e}}),Pr(m,()=>`.${m.styledComponentId}`),a&&Er(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var Ei=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function Di(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Oi=e=>(Zr.add(e),e);function ki(e,...t){if(Dr(e)||Mr(e))return Oi(li(Di(Zn,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?li(n):Oi(li(Di(n,t)))}function Ai(e,t,n=Qn){if(!t)throw Wn(1,t);let r=(r,...i)=>e(t,n,ki(r,...i));return r.attrs=r=>Ai(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>Ai(e,t,Object.assign(Object.assign({},n),r)),r}var ji=e=>Ai(Ti,e),I=ji;Ei.forEach(e=>{I[e]=ji(e)});var Mi=class{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){let n=e[t];if(Dr(n)&&!kr(n))return!1}return!0}(e),Xr.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,n,r){let i=this.componentId;if(this.isStatic){if(n.hasNameForId(i,i+e))this.instanceRules.has(e)||this.computeRules(e,t,n,r);else{let a=this.computeRules(e,t,n,r);n.insertRules(i,a.name,a.rules)}return}let a=this.instanceRules.get(e);if(this.computeRules(e,t,n,r),!n.server&&a){let t=a.rules,n=this.instanceRules.get(e).rules;if(t.length===n.length){let e=!0;for(let r=0;r<t.length;r++)if(t[r]!==n[r]){e=!1;break}if(e)return}}this.rebuildGroup(n)}computeRules(e,t,n,r){let i=jr(li(this.rules,t,n,r)),a={name:this.componentId+e,rules:r(i,``)};return this.instanceRules.set(e,a),a}rebuildGroup(e){let t=this.componentId;e.clearRules(t);for(let n of this.instanceRules.values())e.insertRules(t,n.name,n.rules)}};function Ni(e,...t){let n=ki(e,...t),r=`sc-global-${lr(JSON.stringify(n))}`,i=new Mi(n,r),a=e=>{let t=bi(),n=_.useContext(xi),a;{let e=_.useRef(null);e.current===null&&(e.current=t.styleSheet.allocateGSInstance(r)),a=e.current}t.styleSheet.server&&o(a,e,t.styleSheet,n,t.stylis);{let s=i.isStatic?[a,t.styleSheet,i]:[a,e,t.styleSheet,n,t.stylis,i],c=_.useRef(i);_.useLayoutEffect(()=>{t.styleSheet.server||(c.current!==i&&(t.styleSheet.clearRules(r),c.current=i),o(a,e,t.styleSheet,n,t.stylis))},s),_.useLayoutEffect(()=>()=>{t.styleSheet.server||i.removeStyles(a,t.styleSheet)},[a,t.styleSheet,i])}return t.styleSheet.server&&i.instanceRules.delete(a),null};function o(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,Un,n,o);else{let s=Object.assign(Object.assign({},t),{theme:$n(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return _.memo(a)}var Pi,Fi=class{constructor(e,t){this[Pi]=!0,this.inject=(e,t=vi)=>{let n=this.getName(t);if(!e.hasNameForId(this.id,n)){let r=t(this.rules,n,`@keyframes`);e.insertRules(this.id,n,r)}},this.name=e,this.id=Hn+e,this.rules=t,Jn(this.id),Pr(this,()=>{throw Wn(12,String(this.name))})}getName(e=vi){return e.hash?this.name+ar(e.hash>>>0):this.name}};function L(e,...t){let n=jr(ki(e,...t));return new Fi(lr(n),n)}Pi=ni,`${Pn}`,`${Pn}`,`${Pn}`;var R=L`
  0% {
    transform:
      translate(-15%, -10%)
      scale(1);
  }

  50% {
    transform:
      translate(25%, 8%)
      scale(1.25);
  }

  100% {
    transform:
      translate(-15%, -10%)
      scale(1);
  }
`,Ii=L`
  0% {
    transform:
      translate(12%, 0)
      scale(1);
  }

  50% {
    transform:
      translate(-25%, -8%)
      scale(1.2);
  }

  100% {
    transform:
      translate(12%, 0)
      scale(1);
  }
`,Li=I.header`
  position: fixed;

  top: 0;
  left: 0;

  z-index: 1000;

  width: 100%;
  height: 82px;

  display: flex;
  align-items: center;

  padding: 0 64px;

  overflow: hidden;

  background: transparent;

  border-bottom:
    1px solid
    rgba(255, 255, 255, 0.35);

  box-sizing: border-box;

  backdrop-filter: blur(20px);

  isolation: isolate;

  & > *:not(:first-child) {
    position: relative;
    z-index: 2;
  }
`,Ri=I.div`
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  overflow: hidden;

  pointer-events: none;

  z-index: 0;

  background: rgba(
    255,
    255,
    255,
    0.12
  );
`,zi=I.div`
  position: absolute;

  width: ${({$percentage:e})=>Math.max(420,420+e*2)}px;

  height: ${({$percentage:e})=>Math.max(420,420+e*2)}px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle at center,
      ${({$color:e})=>e} 0%,
      ${({$color:e})=>e} 28%,
      transparent 72%
    );

  opacity: ${({$percentage:e})=>Math.max(.25,Math.min(.7,.3+e/180))};

  filter: blur(65px);

  will-change: transform;

  animation: ${({$index:e})=>e%2==0?ki`
          ${R}
          14s
          ease-in-out
          infinite
        `:ki`
          ${Ii}
          17s
          ease-in-out
          infinite
        `};

  left: ${({$index:e})=>e===0?`-12%`:e===1?`20%`:e===2?`52%`:`72%`};

  top: ${({$index:e})=>e===0?`-180px`:e===1?`-230px`:e===2?`-160px`:`-240px`};
`,Bi=I.a`
  position: relative;

  z-index: 2;

  width: 82px;
  height: 56px;

  display: flex;
  align-items: center;

  text-decoration: none;

  img {
    width: 82px;
    height: 56px;

    display: block;

    object-fit: contain;
  }
`,Vi=I.nav`
  position: relative;

  z-index: 2;

  display: flex;
  align-items: center;

  gap: 42px;

  margin-left: auto;
  margin-right: 50px;
`,Hi=I.a`
  position: relative;

  color: #FFE0C2;

  font-size: 14px;
  font-weight: 500;

  text-decoration: none;

  transition: color 0.2s ease;

  &::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: -7px;

    width: 0;
    height: 2px;

    border-radius: 2px;

    background: var(--theme-button-gradient);

    transition: width 0.2s ease;
  }

  &:hover {
    color: #ff9d4d;
  }

  &:hover::after {
    width: 100%;
  }
`,Ui=I.div`
  position: relative;

  z-index: 2;

  display: flex;
  align-items: center;

  gap: 20px;
`,Wi=I.button`
  width: 74px;
  height: 38px;

  border: none;

  border-radius: 9px;

  background: var(--theme-button-gradient);

  color: #111111;

  font-size: 13px;
  font-weight: 500;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: var(--theme-primary-strong);

    transform: translateY(-1px);

    box-shadow:
      0 5px 14px
      rgba(255, 179, 108, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`,Gi=I.button`
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border:
    1px solid
    rgba(17, 17, 17, 0.12);

  border-radius: 50%;

  background:
    rgba(255, 255, 255, 0.4);

  color: #555555;

  cursor: pointer;

  backdrop-filter: blur(10px);

  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: var(--theme-button-gradient);

    color: #111111;

    border-color: var(--theme-primary);

    transform: translateY(-1px);

    box-shadow:
      0 5px 14px
      rgba(255, 179, 108, 0.25);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,Ki=I.div`
  position: relative;

  z-index: 2;

  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  border:
    1px solid
    rgba(17, 17, 17, 0.12);

  border-radius: 50%;

  background:
    rgba(255, 255, 255, 0.4);

  color: #555555;

  cursor: pointer;

  backdrop-filter: blur(10px);

  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: var(--theme-button-gradient);

    color: #111111;

    border-color: var(--theme-primary);

    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`,qi=I.img`
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
`,Ji=I.select`
  height: 34px;
  padding: 0 7px;
  border: 1px solid rgba(17, 17, 17, 0.14);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.45);
  color: #111111;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  outline: none;

  &:focus { border-color: var(--theme-primary); }
`;function Yi({user:e,avatar:t,onSignUp:n,onProfile:r,onTheme:i,themeColors:a}){let{language:o,changeLanguage:s,t:c}=kt();return(0,M.jsxs)(Li,{children:[(0,M.jsx)(Ri,{children:a?.map((e,t)=>(0,M.jsx)(zi,{$color:e.color,$percentage:Number(e.percentage||0),$index:t},e.id))}),(0,M.jsx)(Bi,{href:`/`,children:(0,M.jsx)(`img`,{src:Ct,alt:`24 forecast`})}),(0,M.jsxs)(Vi,{children:[(0,M.jsx)(Hi,{href:`#about`,children:c(`whoWeAre`)}),(0,M.jsx)(Hi,{href:`#contacts`,children:c(`contacts`)}),(0,M.jsx)(Hi,{href:`#menu`,children:c(`menu`)})]}),(0,M.jsxs)(Ui,{children:[!e&&(0,M.jsx)(Wi,{type:`button`,onClick:n,children:c(`signUp`)}),(0,M.jsxs)(Ji,{value:o,onChange:e=>s(e.target.value),"aria-label":`Language`,children:[(0,M.jsx)(`option`,{value:`en`,children:`EN`}),(0,M.jsx)(`option`,{value:`uk`,children:`UA`}),(0,M.jsx)(`option`,{value:`es`,children:`ES`}),(0,M.jsx)(`option`,{value:`de`,children:`DE`})]}),(0,M.jsx)(Gi,{type:`button`,onClick:i,"aria-label":c(`customizeBackground`),title:c(`customizeBackground`),children:(0,M.jsx)(gt,{size:20})}),(0,M.jsx)(Ki,{onClick:r,role:`button`,tabIndex:0,"aria-label":`Open profile`,children:t?(0,M.jsx)(qi,{src:t,alt:`Profile`}):(0,M.jsx)(lt,{size:22})})]})]})}var Xi=`/reactProject/assets/weather-B4Nk2iEj.png`,Zi=I.section`
  position: relative;

  width: 100%;
  height: calc(100vh - 80px);
  min-height: 650px;

  margin: 0;

  overflow: hidden;

  display: flex;
  justify-content: center;

  background: transparent;
`,Qi=I.div`
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &::after {
    content: "";

    position: absolute;

    inset: 0;

    background: rgba(0, 0, 0, 0.48);
  }
`,$i=I.div`
  position: relative;

  z-index: 1;

  width: 100%;
  max-width: 1100px;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  box-sizing: border-box;
`,ea=I.h1`
  margin: 0;

  color: #ffffff;

  font-size: 42px;
  font-weight: 700;
  line-height: 1.2;

  text-align: center;
`,ta=I.div`
  margin-top: 55px;

  display: flex;

  align-items: center;
  justify-content: center;

  gap: 40px;
`,na=I.p`
  margin: 0;

  color: #ffffff;

  font-size: 20px;
  font-weight: 400;
  line-height: 1.15;

  text-align: right;
`,ra=I.div`
  width: 2px;
  height: 110px;

  flex-shrink: 0;

  background: #ffffff;
`,ia=I.p`
  margin: 0;

  color: #ffffff;

  font-size: 20px;
  font-weight: 400;
  line-height: 1.15;

  text-align: left;

  sup {
    position: relative;

    top: -3px;

    font-size: 12px;
  }
`,aa=I.form`
  width: 625px;
  height: 42px;

  margin-top: 90px;

  display: flex;

  align-items: stretch;

  overflow: hidden;

  border-radius: 8px;

  background: #ffffff;

  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
`,oa=I.input`
  flex: 1;

  width: 100%;
  min-width: 0;
  height: 42px;

  padding: 0 20px;

  border: none;
  outline: none;

  background: #ffffff;
  color: #222222;

  font-size: 14px;
  font-weight: 400;

  box-sizing: border-box;

  &::placeholder {
    color: #999999;
  }

  &:focus {
    background: #ffffff;
  }
`,sa=I.button`
  width: 42px;
  height: 42px;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 0;

  border: none;

  background: var(--theme-button-gradient);
  color: #111111;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: var(--theme-primary-strong);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,ca=`1d77f7419475b60e6e45e6ad79184d4f`;function la({onCityAdd:e,user:t,onRequireAuth:n}){let{language:r,t:i}=kt(),[a,o]=(0,_.useState)(``),[s,c]=(0,_.useState)(new Date);(0,_.useEffect)(()=>{let e=setInterval(()=>{c(new Date)},1e3);return()=>clearInterval(e)},[]);let l=async()=>{if(!t){n?.();return}let i=a.trim();if(!i){console.log(`Введіть назву місста для пошуку`);return}try{let t=await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(i)}&limit=1&appid=${ca}&lang=${r}`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let n=await t.json();if(console.log(`Результати пошуку:`,n),n.length===0){console.log(`Місто не знайдено`);return}let a=n[0],s=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${a.lat}&lon=${a.lon}&appid=${ca}&units=metric&lang=${r}`);if(!s.ok)throw Error(`Weather HTTP error: ${s.status}`);let c=await s.json(),l={id:`${a.lat}-${a.lon}`,name:i,country:a.country,temperature:c.main.temp,icon:c.weather[0].icon,description:c.weather[0].description,weatherCode:c.weather[0].id,timezone:c.timezone,latitude:a.lat,longitude:a.lon};e&&e(l),o(``)}catch(e){console.error(`Помилка пошуку:`,e)}},u=e=>{e.preventDefault(),l()},d=new Date,f=d.toLocaleString(Dt[r],{month:`long`}),p=d.getFullYear(),m=d.toLocaleString(Dt[r],{weekday:`long`}),h=d.getDate(),g=e=>{if(e>=11&&e<=13)return`th`;switch(e%10){case 1:return`st`;case 2:return`nd`;case 3:return`rd`;default:return`th`}},v=String(s.getHours()).padStart(2,`0`),y=String(s.getMinutes()).padStart(2,`0`);return(0,M.jsxs)(Zi,{children:[(0,M.jsx)(Qi,{style:{backgroundImage:`url(${Xi})`}}),(0,M.jsxs)($i,{children:[(0,M.jsx)(ea,{children:i(`weatherDashboard`)}),(0,M.jsxs)(ta,{children:[(0,M.jsx)(na,{children:i(`heroDescription`)}),(0,M.jsx)(ra,{}),(0,M.jsxs)(ia,{children:[f,` `,p,(0,M.jsx)(`br`,{}),m,`, `,h,(0,M.jsx)(`sup`,{children:g(h)}),(0,M.jsx)(`br`,{}),v,`:`,y]})]}),(0,M.jsxs)(aa,{onSubmit:u,children:[(0,M.jsx)(oa,{type:`text`,value:a,onChange:e=>o(e.target.value),placeholder:i(`searchLocation`)}),(0,M.jsx)(sa,{type:`submit`,children:(0,M.jsx)(dt,{})})]})]})]})}function ua(e){return e+.5|0}var da=(e,t,n)=>Math.max(Math.min(e,n),t);function fa(e){return da(ua(e*2.55),0,255)}function pa(e){return da(ua(e*255),0,255)}function ma(e){return da(ua(e/2.55)/100,0,1)}function ha(e){return da(ua(e*100),0,100)}var ga={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},_a=[...`0123456789ABCDEF`],va=e=>_a[e&15],ya=e=>_a[(e&240)>>4]+_a[e&15],ba=e=>(e&240)>>4==(e&15),xa=e=>ba(e.r)&&ba(e.g)&&ba(e.b)&&ba(e.a);function Sa(e){var t=e.length,n;return e[0]===`#`&&(t===4||t===5?n={r:255&ga[e[1]]*17,g:255&ga[e[2]]*17,b:255&ga[e[3]]*17,a:t===5?ga[e[4]]*17:255}:(t===7||t===9)&&(n={r:ga[e[1]]<<4|ga[e[2]],g:ga[e[3]]<<4|ga[e[4]],b:ga[e[5]]<<4|ga[e[6]],a:t===9?ga[e[7]]<<4|ga[e[8]]:255})),n}var Ca=(e,t)=>e<255?t(e):``;function wa(e){var t=xa(e)?va:ya;return e?`#`+t(e.r)+t(e.g)+t(e.b)+Ca(e.a,t):void 0}var Ta=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Ea(e,t,n){let r=t*Math.min(n,1-n),i=(t,i=(t+e/30)%12)=>n-r*Math.max(Math.min(i-3,9-i,1),-1);return[i(0),i(8),i(4)]}function Da(e,t,n){let r=(r,i=(r+e/60)%6)=>n-n*t*Math.max(Math.min(i,4-i,1),0);return[r(5),r(3),r(1)]}function Oa(e,t,n){let r=Ea(e,1,.5),i;for(t+n>1&&(i=1/(t+n),t*=i,n*=i),i=0;i<3;i++)r[i]*=1-t-n,r[i]+=t;return r}function ka(e,t,n,r,i){return e===i?(t-n)/r+(t<n?6:0):t===i?(n-e)/r+2:(e-t)/r+4}function Aa(e){let t=e.r/255,n=e.g/255,r=e.b/255,i=Math.max(t,n,r),a=Math.min(t,n,r),o=(i+a)/2,s,c,l;return i!==a&&(l=i-a,c=o>.5?l/(2-i-a):l/(i+a),s=ka(t,n,r,l,i),s=s*60+.5),[s|0,c||0,o]}function ja(e,t,n,r){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,r)).map(pa)}function Ma(e,t,n){return ja(Ea,e,t,n)}function Na(e,t,n){return ja(Oa,e,t,n)}function Pa(e,t,n){return ja(Da,e,t,n)}function Fa(e){return(e%360+360)%360}function Ia(e){let t=Ta.exec(e),n=255,r;if(!t)return;t[5]!==r&&(n=t[6]?fa(+t[5]):pa(+t[5]));let i=Fa(+t[2]),a=t[3]/100,o=t[4]/100;return r=t[1]===`hwb`?Na(i,a,o):t[1]===`hsv`?Pa(i,a,o):Ma(i,a,o),{r:r[0],g:r[1],b:r[2],a:n}}function La(e,t){var n=Aa(e);n[0]=Fa(n[0]+t),n=Ma(n),e.r=n[0],e.g=n[1],e.b=n[2]}function Ra(e){if(!e)return;let t=Aa(e),n=t[0],r=ha(t[1]),i=ha(t[2]);return e.a<255?`hsla(${n}, ${r}%, ${i}%, ${ma(e.a)})`:`hsl(${n}, ${r}%, ${i}%)`}var za={x:`dark`,Z:`light`,Y:`re`,X:`blu`,W:`gr`,V:`medium`,U:`slate`,A:`ee`,T:`ol`,S:`or`,B:`ra`,C:`lateg`,D:`ights`,R:`in`,Q:`turquois`,E:`hi`,P:`ro`,O:`al`,N:`le`,M:`de`,L:`yello`,F:`en`,K:`ch`,G:`arks`,H:`ea`,I:`ightg`,J:`wh`},Ba={OiceXe:`f0f8ff`,antiquewEte:`faebd7`,aqua:`ffff`,aquamarRe:`7fffd4`,azuY:`f0ffff`,beige:`f5f5dc`,bisque:`ffe4c4`,black:`0`,blanKedOmond:`ffebcd`,Xe:`ff`,XeviTet:`8a2be2`,bPwn:`a52a2a`,burlywood:`deb887`,caMtXe:`5f9ea0`,KartYuse:`7fff00`,KocTate:`d2691e`,cSO:`ff7f50`,cSnflowerXe:`6495ed`,cSnsilk:`fff8dc`,crimson:`dc143c`,cyan:`ffff`,xXe:`8b`,xcyan:`8b8b`,xgTMnPd:`b8860b`,xWay:`a9a9a9`,xgYF:`6400`,xgYy:`a9a9a9`,xkhaki:`bdb76b`,xmagFta:`8b008b`,xTivegYF:`556b2f`,xSange:`ff8c00`,xScEd:`9932cc`,xYd:`8b0000`,xsOmon:`e9967a`,xsHgYF:`8fbc8f`,xUXe:`483d8b`,xUWay:`2f4f4f`,xUgYy:`2f4f4f`,xQe:`ced1`,xviTet:`9400d3`,dAppRk:`ff1493`,dApskyXe:`bfff`,dimWay:`696969`,dimgYy:`696969`,dodgerXe:`1e90ff`,fiYbrick:`b22222`,flSOwEte:`fffaf0`,foYstWAn:`228b22`,fuKsia:`ff00ff`,gaRsbSo:`dcdcdc`,ghostwEte:`f8f8ff`,gTd:`ffd700`,gTMnPd:`daa520`,Way:`808080`,gYF:`8000`,gYFLw:`adff2f`,gYy:`808080`,honeyMw:`f0fff0`,hotpRk:`ff69b4`,RdianYd:`cd5c5c`,Rdigo:`4b0082`,ivSy:`fffff0`,khaki:`f0e68c`,lavFMr:`e6e6fa`,lavFMrXsh:`fff0f5`,lawngYF:`7cfc00`,NmoncEffon:`fffacd`,ZXe:`add8e6`,ZcSO:`f08080`,Zcyan:`e0ffff`,ZgTMnPdLw:`fafad2`,ZWay:`d3d3d3`,ZgYF:`90ee90`,ZgYy:`d3d3d3`,ZpRk:`ffb6c1`,ZsOmon:`ffa07a`,ZsHgYF:`20b2aa`,ZskyXe:`87cefa`,ZUWay:`778899`,ZUgYy:`778899`,ZstAlXe:`b0c4de`,ZLw:`ffffe0`,lime:`ff00`,limegYF:`32cd32`,lRF:`faf0e6`,magFta:`ff00ff`,maPon:`800000`,VaquamarRe:`66cdaa`,VXe:`cd`,VScEd:`ba55d3`,VpurpN:`9370db`,VsHgYF:`3cb371`,VUXe:`7b68ee`,VsprRggYF:`fa9a`,VQe:`48d1cc`,VviTetYd:`c71585`,midnightXe:`191970`,mRtcYam:`f5fffa`,mistyPse:`ffe4e1`,moccasR:`ffe4b5`,navajowEte:`ffdead`,navy:`80`,Tdlace:`fdf5e6`,Tive:`808000`,TivedBb:`6b8e23`,Sange:`ffa500`,SangeYd:`ff4500`,ScEd:`da70d6`,pOegTMnPd:`eee8aa`,pOegYF:`98fb98`,pOeQe:`afeeee`,pOeviTetYd:`db7093`,papayawEp:`ffefd5`,pHKpuff:`ffdab9`,peru:`cd853f`,pRk:`ffc0cb`,plum:`dda0dd`,powMrXe:`b0e0e6`,purpN:`800080`,YbeccapurpN:`663399`,Yd:`ff0000`,Psybrown:`bc8f8f`,PyOXe:`4169e1`,saddNbPwn:`8b4513`,sOmon:`fa8072`,sandybPwn:`f4a460`,sHgYF:`2e8b57`,sHshell:`fff5ee`,siFna:`a0522d`,silver:`c0c0c0`,skyXe:`87ceeb`,UXe:`6a5acd`,UWay:`708090`,UgYy:`708090`,snow:`fffafa`,sprRggYF:`ff7f`,stAlXe:`4682b4`,tan:`d2b48c`,teO:`8080`,tEstN:`d8bfd8`,tomato:`ff6347`,Qe:`40e0d0`,viTet:`ee82ee`,JHt:`f5deb3`,wEte:`ffffff`,wEtesmoke:`f5f5f5`,Lw:`ffff00`,LwgYF:`9acd32`};function Va(){let e={},t=Object.keys(Ba),n=Object.keys(za),r,i,a,o,s;for(r=0;r<t.length;r++){for(o=s=t[r],i=0;i<n.length;i++)a=n[i],s=s.replace(a,za[a]);a=parseInt(Ba[o],16),e[s]=[a>>16&255,a>>8&255,a&255]}return e}var Ha;function Ua(e){Ha||(Ha=Va(),Ha.transparent=[0,0,0,0]);let t=Ha[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}var Wa=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Ga(e){let t=Wa.exec(e),n=255,r,i,a;if(t){if(t[7]!==r){let e=+t[7];n=t[8]?fa(e):da(e*255,0,255)}return r=+t[1],i=+t[3],a=+t[5],r=255&(t[2]?fa(r):da(r,0,255)),i=255&(t[4]?fa(i):da(i,0,255)),a=255&(t[6]?fa(a):da(a,0,255)),{r,g:i,b:a,a:n}}}function Ka(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${ma(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}var qa=e=>e<=.0031308?e*12.92:e**(1/2.4)*1.055-.055,Ja=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function Ya(e,t,n){let r=Ja(ma(e.r)),i=Ja(ma(e.g)),a=Ja(ma(e.b));return{r:pa(qa(r+n*(Ja(ma(t.r))-r))),g:pa(qa(i+n*(Ja(ma(t.g))-i))),b:pa(qa(a+n*(Ja(ma(t.b))-a))),a:e.a+n*(t.a-e.a)}}function Xa(e,t,n){if(e){let r=Aa(e);r[t]=Math.max(0,Math.min(r[t]+r[t]*n,t===0?360:1)),r=Ma(r),e.r=r[0],e.g=r[1],e.b=r[2]}}function Za(e,t){return e&&Object.assign(t||{},e)}function Qa(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=pa(e[3]))):(t=Za(e,{r:0,g:0,b:0,a:1}),t.a=pa(t.a)),t}function $a(e){return e.charAt(0)===`r`?Ga(e):Ia(e)}var eo=class e{constructor(t){if(t instanceof e)return t;let n=typeof t,r;n===`object`?r=Qa(t):n===`string`&&(r=Sa(t)||Ua(t)||$a(t)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var e=Za(this._rgb);return e&&(e.a=ma(e.a)),e}set rgb(e){this._rgb=Qa(e)}rgbString(){return this._valid?Ka(this._rgb):void 0}hexString(){return this._valid?wa(this._rgb):void 0}hslString(){return this._valid?Ra(this._rgb):void 0}mix(e,t){if(e){let n=this.rgb,r=e.rgb,i,a=t===i?.5:t,o=2*a-1,s=n.a-r.a,c=((o*s===-1?o:(o+s)/(1+o*s))+1)/2;i=1-c,n.r=255&c*n.r+i*r.r+.5,n.g=255&c*n.g+i*r.g+.5,n.b=255&c*n.b+i*r.b+.5,n.a=a*n.a+(1-a)*r.a,this.rgb=n}return this}interpolate(e,t){return e&&(this._rgb=Ya(this._rgb,e._rgb,t)),this}clone(){return new e(this.rgb)}alpha(e){return this._rgb.a=pa(e),this}clearer(e){let t=this._rgb;return t.a*=1-e,this}greyscale(){let e=this._rgb;return e.r=e.g=e.b=ua(e.r*.3+e.g*.59+e.b*.11),this}opaquer(e){let t=this._rgb;return t.a*=1+e,this}negate(){let e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return Xa(this._rgb,2,e),this}darken(e){return Xa(this._rgb,2,-e),this}saturate(e){return Xa(this._rgb,1,e),this}desaturate(e){return Xa(this._rgb,1,-e),this}rotate(e){return La(this._rgb,e),this}};function to(){}var no=(()=>{let e=0;return()=>e++})();function z(e){return e==null}function B(e){if(Array.isArray&&Array.isArray(e))return!0;let t=Object.prototype.toString.call(e);return t.slice(0,7)===`[object`&&t.slice(-6)===`Array]`}function V(e){return e!==null&&Object.prototype.toString.call(e)===`[object Object]`}function ro(e){return(typeof e==`number`||e instanceof Number)&&isFinite(+e)}function io(e,t){return ro(e)?e:t}function H(e,t){return e===void 0?t:e}var ao=(e,t)=>typeof e==`string`&&e.endsWith(`%`)?parseFloat(e)/100*t:+e;function U(e,t,n){if(e&&typeof e.call==`function`)return e.apply(n,t)}function W(e,t,n,r){let i,a,o;if(B(e)){if(a=e.length,r)for(i=a-1;i>=0;i--)t.call(n,e[i],i);else for(i=0;i<a;i++)t.call(n,e[i],i)}else if(V(e))for(o=Object.keys(e),a=o.length,i=0;i<a;i++)t.call(n,e[o[i]],o[i])}function oo(e,t){let n,r,i,a;if(!e||!t||e.length!==t.length)return!1;for(n=0,r=e.length;n<r;++n)if(i=e[n],a=t[n],i.datasetIndex!==a.datasetIndex||i.index!==a.index)return!1;return!0}function so(e){if(B(e))return e.map(so);if(V(e)){let t=Object.create(null),n=Object.keys(e),r=n.length,i=0;for(;i<r;++i)t[n[i]]=so(e[n[i]]);return t}return e}function G(e){return[`__proto__`,`prototype`,`constructor`].indexOf(e)===-1}function K(e,t,n,r){if(!G(e))return;let i=t[e],a=n[e];V(i)&&V(a)?co(i,a,r):t[e]=so(a)}function co(e,t,n){let r=B(t)?t:[t],i=r.length;if(!V(e))return e;n||={};let a=n.merger||K,o;for(let t=0;t<i;++t){if(o=r[t],!V(o))continue;let i=Object.keys(o);for(let t=0,r=i.length;t<r;++t)a(i[t],e,o,n)}return e}function lo(e,t){return co(e,t,{merger:uo})}function uo(e,t,n){if(!G(e))return;let r=t[e],i=n[e];V(r)&&V(i)?lo(r,i):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=so(i))}var fo={"":e=>e,x:e=>e.x,y:e=>e.y};function po(e){let t=e.split(`.`),n=[],r=``;for(let e of t)r+=e,r.endsWith(`\\`)?r=r.slice(0,-1)+`.`:(n.push(r),r=``);return n}function mo(e){let t=po(e);return e=>{for(let n of t){if(n===``)break;e&&=e[n]}return e}}function ho(e,t){return(fo[t]||(fo[t]=mo(t)))(e)}function go(e){return e.charAt(0).toUpperCase()+e.slice(1)}var _o=e=>e!==void 0,vo=e=>typeof e==`function`,yo=(e,t)=>{if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0};function bo(e){return e.type===`mouseup`||e.type===`click`||e.type===`contextmenu`}var xo=Math.PI,So=2*xo,Co=So+xo,wo=1/0,To=xo/180,Eo=xo/2,Do=xo/4,Oo=xo*2/3,ko=Math.log10,Ao=Math.sign;function jo(e,t,n){return Math.abs(e-t)<n}function Mo(e){let t=Math.round(e);e=jo(e,t,e/1e3)?t:e;let n=10**Math.floor(ko(e)),r=e/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function No(e){let t=[],n=Math.sqrt(e),r;for(r=1;r<n;r++)e%r===0&&(t.push(r),t.push(e/r));return n===(n|0)&&t.push(n),t.sort((e,t)=>e-t).pop(),t}function Po(e){return typeof e==`symbol`||typeof e==`object`&&!!e&&!(Symbol.toPrimitive in e||`toString`in e||`valueOf`in e)}function Fo(e){return!Po(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function Io(e,t){let n=Math.round(e);return n-t<=e&&n+t>=e}function Lo(e,t,n){let r,i,a;for(r=0,i=e.length;r<i;r++)a=e[r][n],isNaN(a)||(t.min=Math.min(t.min,a),t.max=Math.max(t.max,a))}function Ro(e){return xo/180*e}function zo(e){return 180/xo*e}function Bo(e){if(!ro(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function Vo(e,t){let n=t.x-e.x,r=t.y-e.y,i=Math.sqrt(n*n+r*r),a=Math.atan2(r,n);return a<-.5*xo&&(a+=So),{angle:a,distance:i}}function Ho(e,t){return Math.sqrt((t.x-e.x)**2+(t.y-e.y)**2)}function Uo(e,t){return(e-t+Co)%So-xo}function Wo(e){return(e%So+So)%So}function Go(e,t,n,r){let i=Wo(e),a=Wo(t),o=Wo(n),s=Wo(a-i),c=Wo(o-i),l=Wo(i-a),u=Wo(i-o);return i===a||i===o||r&&a===o||s>c&&l<u}function Ko(e,t,n){return Math.max(t,Math.min(n,e))}function qo(e){return Ko(e,-32768,32767)}function Jo(e,t,n,r=1e-6){return e>=Math.min(t,n)-r&&e<=Math.max(t,n)+r}function Yo(e,t,n){n||=(n=>e[n]<t);let r=e.length-1,i=0,a;for(;r-i>1;)a=i+r>>1,n(a)?i=a:r=a;return{lo:i,hi:r}}var Xo=(e,t,n,r)=>Yo(e,n,r?r=>{let i=e[r][t];return i<n||i===n&&e[r+1][t]===n}:r=>e[r][t]<n),Zo=(e,t,n)=>Yo(e,n,r=>e[r][t]>=n);function Qo(e,t,n){let r=0,i=e.length;for(;r<i&&e[r]<t;)r++;for(;i>r&&e[i-1]>n;)i--;return r>0||i<e.length?e.slice(r,i):e}var $o=[`push`,`pop`,`shift`,`splice`,`unshift`];function es(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),$o.forEach(t=>{let n=`_onData`+go(t),r=e[t];Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value(...t){let i=r.apply(this,t);return e._chartjs.listeners.forEach(e=>{typeof e[n]==`function`&&e[n](...t)}),i}})})}function ts(e,t){let n=e._chartjs;if(!n)return;let r=n.listeners,i=r.indexOf(t);i!==-1&&r.splice(i,1),!(r.length>0)&&($o.forEach(t=>{delete e[t]}),delete e._chartjs)}function ns(e){let t=new Set(e);return t.size===e.length?e:Array.from(t)}var rs=function(){return typeof window>`u`?function(e){return e()}:window.requestAnimationFrame}();function is(e,t){let n=[],r=!1;return function(...i){n=i,r||(r=!0,rs.call(window,()=>{r=!1,e.apply(t,n)}))}}function as(e,t){let n;return function(...r){return t?(clearTimeout(n),n=setTimeout(e,t,r)):e.apply(this,r),t}}var os=e=>e===`start`?`left`:e===`end`?`right`:`center`,ss=(e,t,n)=>e===`start`?t:e===`end`?n:(t+n)/2;function cs(e,t,n){let r=t.length,i=0,a=r;if(e._sorted){let{iScale:o,vScale:s,_parsed:c}=e,l=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null,u=o.axis,{min:d,max:f,minDefined:p,maxDefined:m}=o.getUserBounds();if(p){if(i=Math.min(Xo(c,u,d).lo,n?r:Xo(t,u,o.getPixelForValue(d)).lo),l){let e=c.slice(0,i+1).reverse().findIndex(e=>!z(e[s.axis]));i-=Math.max(0,e)}i=Ko(i,0,r-1)}if(m){let e=Math.max(Xo(c,o.axis,f,!0).hi+1,n?0:Xo(t,u,o.getPixelForValue(f),!0).hi+1);if(l){let t=c.slice(e-1).findIndex(e=>!z(e[s.axis]));e+=Math.max(0,t)}a=Ko(e,i,r)-i}else a=r-i}return{start:i,count:a}}function ls(e){let{xScale:t,yScale:n,_scaleRanges:r}=e,i={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!r)return e._scaleRanges=i,!0;let a=r.xmin!==t.min||r.xmax!==t.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,i),a}var us=e=>e===0||e===1,ds=(e,t,n)=>-(2**(10*--e)*Math.sin((e-t)*So/n)),fs=(e,t,n)=>2**(-10*e)*Math.sin((e-t)*So/n)+1,ps={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-(--e*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>--e*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*Eo)+1,easeOutSine:e=>Math.sin(e*Eo),easeInOutSine:e=>-.5*(Math.cos(xo*e)-1),easeInExpo:e=>e===0?0:2**(10*(e-1)),easeOutExpo:e=>e===1?1:-(2**(-10*e))+1,easeInOutExpo:e=>us(e)?e:e<.5?.5*2**(10*(e*2-1)):.5*(-(2**(-10*(e*2-1)))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1- --e*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>us(e)?e:ds(e,.075,.3),easeOutElastic:e=>us(e)?e:fs(e,.075,.3),easeInOutElastic(e){let t=.1125,n=.45;return us(e)?e:e<.5?.5*ds(e*2,t,n):.5+.5*fs(e*2-1,t,n)},easeInBack(e){return e*e*(2.70158*e-1.70158)},easeOutBack(e){return--e*e*(2.70158*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-ps.easeOutBounce(1-e),easeOutBounce(e){let t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},easeInOutBounce:e=>e<.5?ps.easeInBounce(e*2)*.5:ps.easeOutBounce(e*2-1)*.5+.5};function ms(e){if(e&&typeof e==`object`){let t=e.toString();return t===`[object CanvasPattern]`||t===`[object CanvasGradient]`}return!1}function hs(e){return ms(e)?e:new eo(e)}function gs(e){return ms(e)?e:new eo(e).saturate(.5).darken(.1).hexString()}var _s=[`x`,`y`,`borderWidth`,`radius`,`tension`],vs=[`color`,`borderColor`,`backgroundColor`];function ys(e){e.set(`animation`,{delay:void 0,duration:1e3,easing:`easeOutQuart`,fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe(`animation`,{_fallback:!1,_indexable:!1,_scriptable:e=>e!==`onProgress`&&e!==`onComplete`&&e!==`fn`}),e.set(`animations`,{colors:{type:`color`,properties:vs},numbers:{type:`number`,properties:_s}}),e.describe(`animations`,{_fallback:`animation`}),e.set(`transitions`,{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:`transparent`},visible:{type:`boolean`,duration:0}}},hide:{animations:{colors:{to:`transparent`},visible:{type:`boolean`,easing:`linear`,fn:e=>e|0}}}})}function bs(e){e.set(`layout`,{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}var xs=new Map;function Ss(e,t){t||={};let n=e+JSON.stringify(t),r=xs.get(n);return r||(r=new Intl.NumberFormat(e,t),xs.set(n,r)),r}function Cs(e,t,n){return Ss(t,n).format(e)}var ws={values(e){return B(e)?e:``+e},numeric(e,t,n){if(e===0)return`0`;let r=this.chart.options.locale,i,a=e;if(n.length>1){let t=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(t<1e-4||t>0x38d7ea4c68000)&&(i=`scientific`),a=Ts(e,n)}let o=ko(Math.abs(a)),s=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:i,minimumFractionDigits:s,maximumFractionDigits:s};return Object.assign(c,this.options.ticks.format),Cs(e,r,c)},logarithmic(e,t,n){if(e===0)return`0`;let r=n[t].significand||e/10**Math.floor(ko(e));return[1,2,3,5,10,15].includes(r)||t>.8*n.length?ws.numeric.call(this,e,t,n):``}};function Ts(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var Es={formatters:ws};function Ds(e){e.set(`scale`,{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:`ticks`,clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,t)=>t.lineWidth,tickColor:(e,t)=>t.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:``,padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:``,padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Es.formatters.values,minor:{},major:{},align:`center`,crossAlign:`near`,showLabelBackdrop:!1,backdropColor:`rgba(255, 255, 255, 0.75)`,backdropPadding:2}}),e.route(`scale.ticks`,`color`,``,`color`),e.route(`scale.grid`,`color`,``,`borderColor`),e.route(`scale.border`,`color`,``,`borderColor`),e.route(`scale.title`,`color`,``,`color`),e.describe(`scale`,{_fallback:!1,_scriptable:e=>!e.startsWith(`before`)&&!e.startsWith(`after`)&&e!==`callback`&&e!==`parser`,_indexable:e=>e!==`borderDash`&&e!==`tickBorderDash`&&e!==`dash`}),e.describe(`scales`,{_fallback:`scale`}),e.describe(`scale.ticks`,{_scriptable:e=>e!==`backdropPadding`&&e!==`callback`,_indexable:e=>e!==`backdropPadding`})}var Os=Object.create(null),ks=Object.create(null);function As(e,t){if(!t)return e;let n=t.split(`.`);for(let t=0,r=n.length;t<r;++t){let r=n[t];e=e[r]||(e[r]=Object.create(null))}return e}function js(e,t,n){return typeof t==`string`?co(As(e,t),n):co(As(e,``),t)}var Ms=new class{constructor(e,t){this.animation=void 0,this.backgroundColor=`rgba(0,0,0,0.1)`,this.borderColor=`rgba(0,0,0,0.1)`,this.color=`#666`,this.datasets={},this.devicePixelRatio=e=>e.chart.platform.getDevicePixelRatio(),this.elements={},this.events=[`mousemove`,`mouseout`,`click`,`touchstart`,`touchmove`],this.font={family:`'Helvetica Neue', 'Helvetica', 'Arial', sans-serif`,size:12,style:`normal`,lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(e,t)=>gs(t.backgroundColor),this.hoverBorderColor=(e,t)=>gs(t.borderColor),this.hoverColor=(e,t)=>gs(t.color),this.indexAxis=`x`,this.interaction={mode:`nearest`,intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(t)}set(e,t){return js(this,e,t)}get(e){return As(this,e)}describe(e,t){return js(ks,e,t)}override(e,t){return js(Os,e,t)}route(e,t,n,r){let i=As(this,e),a=As(this,n),o=`_`+t;Object.defineProperties(i,{[o]:{value:i[t],writable:!0},[t]:{enumerable:!0,get(){let e=this[o],t=a[r];return V(e)?Object.assign({},t,e):H(e,t)},set(e){this[o]=e}}})}apply(e){e.forEach(e=>e(this))}}({_scriptable:e=>!e.startsWith(`on`),_indexable:e=>e!==`events`,hover:{_fallback:`interaction`},interaction:{_scriptable:!1,_indexable:!1}},[ys,bs,Ds]);function Ns(e){return!e||z(e.size)||z(e.family)?null:(e.style?e.style+` `:``)+(e.weight?e.weight+` `:``)+e.size+`px `+e.family}function Ps(e,t,n,r,i){let a=t[i];return a||(a=t[i]=e.measureText(i).width,n.push(i)),a>r&&(r=a),r}function Fs(e,t,n,r){r||={};let i=r.data=r.data||{},a=r.garbageCollect=r.garbageCollect||[];r.font!==t&&(i=r.data={},a=r.garbageCollect=[],r.font=t),e.save(),e.font=t;let o=0,s=n.length,c,l,u,d,f;for(c=0;c<s;c++)if(d=n[c],d!=null&&!B(d))o=Ps(e,i,a,o,d);else if(B(d))for(l=0,u=d.length;l<u;l++)f=d[l],f!=null&&!B(f)&&(o=Ps(e,i,a,o,f));e.restore();let p=a.length/2;if(p>n.length){for(c=0;c<p;c++)delete i[a[c]];a.splice(0,p)}return o}function Is(e,t,n){let r=e.currentDevicePixelRatio,i=n===0?0:Math.max(n/2,.5);return Math.round((t-i)*r)/r+i}function Ls(e,t){!t&&!e||(t||=e.getContext(`2d`),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function Rs(e,t,n,r){zs(e,t,n,r,null)}function zs(e,t,n,r,i){let a,o,s,c,l,u,d,f,p=t.pointStyle,m=t.rotation,h=t.radius,g=(m||0)*To;if(p&&typeof p==`object`&&(a=p.toString(),a===`[object HTMLImageElement]`||a===`[object HTMLCanvasElement]`)){e.save(),e.translate(n,r),e.rotate(g),e.drawImage(p,-p.width/2,-p.height/2,p.width,p.height),e.restore();return}if(!(isNaN(h)||h<=0)){switch(e.beginPath(),p){default:i?e.ellipse(n,r,i/2,h,0,0,So):e.arc(n,r,h,0,So),e.closePath();break;case`triangle`:u=i?i/2:h,e.moveTo(n+Math.sin(g)*u,r-Math.cos(g)*h),g+=Oo,e.lineTo(n+Math.sin(g)*u,r-Math.cos(g)*h),g+=Oo,e.lineTo(n+Math.sin(g)*u,r-Math.cos(g)*h),e.closePath();break;case`rectRounded`:l=h*.516,c=h-l,o=Math.cos(g+Do)*c,d=Math.cos(g+Do)*(i?i/2-l:c),s=Math.sin(g+Do)*c,f=Math.sin(g+Do)*(i?i/2-l:c),e.arc(n-d,r-s,l,g-xo,g-Eo),e.arc(n+f,r-o,l,g-Eo,g),e.arc(n+d,r+s,l,g,g+Eo),e.arc(n-f,r+o,l,g+Eo,g+xo),e.closePath();break;case`rect`:if(!m){c=Math.SQRT1_2*h,u=i?i/2:c,e.rect(n-u,r-c,2*u,2*c);break}g+=Do;case`rectRot`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+f,r-o),e.lineTo(n+d,r+s),e.lineTo(n-f,r+o),e.closePath();break;case`crossRot`:g+=Do;case`cross`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o);break;case`star`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o),g+=Do,d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o);break;case`line`:o=i?i/2:Math.cos(g)*h,s=Math.sin(g)*h,e.moveTo(n-o,r-s),e.lineTo(n+o,r+s);break;case`dash`:e.moveTo(n,r),e.lineTo(n+Math.cos(g)*(i?i/2:h),r+Math.sin(g)*h);break;case!1:e.closePath()}e.fill(),t.borderWidth>0&&e.stroke()}}function Bs(e,t,n){return n||=.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function Vs(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function Hs(e){e.restore()}function Us(e,t,n,r,i){if(!t)return e.lineTo(n.x,n.y);if(i===`middle`){let r=(t.x+n.x)/2;e.lineTo(r,t.y),e.lineTo(r,n.y)}else i===`after`==!!r?e.lineTo(n.x,t.y):e.lineTo(t.x,n.y);e.lineTo(n.x,n.y)}function Ws(e,t,n,r){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(r?t.cp1x:t.cp2x,r?t.cp1y:t.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function Gs(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),z(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function Ks(e,t,n,r,i){if(i.strikethrough||i.underline){let a=e.measureText(r),o=t-a.actualBoundingBoxLeft,s=t+a.actualBoundingBoxRight,c=n-a.actualBoundingBoxAscent,l=n+a.actualBoundingBoxDescent,u=i.strikethrough?(c+l)/2:l;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=i.decorationWidth||2,e.moveTo(o,u),e.lineTo(s,u),e.stroke()}}function qs(e,t){let n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function Js(e,t,n,r,i,a={}){let o=B(t)?t:[t],s=a.strokeWidth>0&&a.strokeColor!==``,c,l;for(e.save(),e.font=i.string,Gs(e,a),c=0;c<o.length;++c)l=o[c],a.backdrop&&qs(e,a.backdrop),s&&(a.strokeColor&&(e.strokeStyle=a.strokeColor),z(a.strokeWidth)||(e.lineWidth=a.strokeWidth),e.strokeText(l,n,r,a.maxWidth)),e.fillText(l,n,r,a.maxWidth),Ks(e,n,r,l,a),r+=Number(i.lineHeight);e.restore()}function Ys(e,t){let{x:n,y:r,w:i,h:a,radius:o}=t;e.arc(n+o.topLeft,r+o.topLeft,o.topLeft,1.5*xo,xo,!0),e.lineTo(n,r+a-o.bottomLeft),e.arc(n+o.bottomLeft,r+a-o.bottomLeft,o.bottomLeft,xo,Eo,!0),e.lineTo(n+i-o.bottomRight,r+a),e.arc(n+i-o.bottomRight,r+a-o.bottomRight,o.bottomRight,Eo,0,!0),e.lineTo(n+i,r+o.topRight),e.arc(n+i-o.topRight,r+o.topRight,o.topRight,0,-Eo,!0),e.lineTo(n+o.topLeft,r)}var Xs=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Zs=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function Qs(e,t){let n=(``+e).match(Xs);if(!n||n[1]===`normal`)return t*1.2;switch(e=+n[2],n[3]){case`px`:return e;case`%`:e/=100}return t*e}var $s=e=>+e||0;function ec(e,t){let n={},r=V(t),i=r?Object.keys(t):t,a=V(e)?r?n=>H(e[n],e[t[n]]):t=>e[t]:()=>e;for(let e of i)n[e]=$s(a(e));return n}function tc(e){return ec(e,{top:`y`,right:`x`,bottom:`y`,left:`x`})}function nc(e){return ec(e,[`topLeft`,`topRight`,`bottomLeft`,`bottomRight`])}function rc(e){let t=tc(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function ic(e,t){e||={},t||=Ms.font;let n=H(e.size,t.size);typeof n==`string`&&(n=parseInt(n,10));let r=H(e.style,t.style);r&&!(``+r).match(Zs)&&(console.warn(`Invalid font style specified: "`+r+`"`),r=void 0);let i={family:H(e.family,t.family),lineHeight:Qs(H(e.lineHeight,t.lineHeight),n),size:n,style:r,weight:H(e.weight,t.weight),string:``};return i.string=Ns(i),i}function ac(e,t,n,r){let i=!0,a,o,s;for(a=0,o=e.length;a<o;++a)if(s=e[a],s!==void 0&&(t!==void 0&&typeof s==`function`&&(s=s(t),i=!1),n!==void 0&&B(s)&&(s=s[n%s.length],i=!1),s!==void 0))return r&&!i&&(r.cacheable=!1),s}function oc(e,t,n){let{min:r,max:i}=e,a=ao(t,(i-r)/2),o=(e,t)=>n&&e===0?0:e+t;return{min:o(r,-Math.abs(a)),max:o(i,a)}}function sc(e,t){return Object.assign(Object.create(e),t)}function cc(e,t=[``],n,r,i=()=>e[0]){let a=n||e;return r===void 0&&(r=wc(`_fallback`,e)),new Proxy({[Symbol.toStringTag]:`Object`,_cacheable:!0,_scopes:e,_rootScopes:a,_fallback:r,_getTarget:i,override:n=>cc([n,...e],t,a,r)},{deleteProperty(t,n){return delete t[n],delete t._keys,delete e[0][n],!0},get(n,r){return pc(n,r,()=>Cc(r,t,e,n))},getOwnPropertyDescriptor(e,t){return Reflect.getOwnPropertyDescriptor(e._scopes[0],t)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(e,t){return Tc(e).includes(t)},ownKeys(e){return Tc(e)},set(e,t,n){let r=e._storage||=i();return e[t]=r[t]=n,delete e._keys,!0}})}function lc(e,t,n,r){let i={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:uc(e,r),setContext:t=>lc(e,t,n,r),override:i=>lc(e.override(i),t,n,r)};return new Proxy(i,{deleteProperty(t,n){return delete t[n],delete e[n],!0},get(e,t,n){return pc(e,t,()=>mc(e,t,n))},getOwnPropertyDescriptor(t,n){return t._descriptors.allKeys?Reflect.has(e,n)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,n)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(t,n){return Reflect.has(e,n)},ownKeys(){return Reflect.ownKeys(e)},set(t,n,r){return e[n]=r,delete t[n],!0}})}function uc(e,t={scriptable:!0,indexable:!0}){let{_scriptable:n=t.scriptable,_indexable:r=t.indexable,_allKeys:i=t.allKeys}=e;return{allKeys:i,scriptable:n,indexable:r,isScriptable:vo(n)?n:()=>n,isIndexable:vo(r)?r:()=>r}}var dc=(e,t)=>e?e+go(t):t,fc=(e,t)=>V(t)&&e!==`adapters`&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function pc(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t)||t===`constructor`)return e[t];let r=n();return e[t]=r,r}function mc(e,t,n){let{_proxy:r,_context:i,_subProxy:a,_descriptors:o}=e,s=r[t];return vo(s)&&o.isScriptable(t)&&(s=hc(t,s,e,n)),B(s)&&s.length&&(s=gc(t,s,e,o.isIndexable)),fc(t,s)&&(s=lc(s,i,a&&a[t],o)),s}function hc(e,t,n,r){let{_proxy:i,_context:a,_subProxy:o,_stack:s}=n;if(s.has(e))throw Error(`Recursion detected: `+Array.from(s).join(`->`)+`->`+e);s.add(e);let c=t(a,o||r);return s.delete(e),fc(e,c)&&(c=bc(i._scopes,i,e,c)),c}function gc(e,t,n,r){let{_proxy:i,_context:a,_subProxy:o,_descriptors:s}=n;if(a.index!==void 0&&r(e))return t[a.index%t.length];if(V(t[0])){let n=t,r=i._scopes.filter(e=>e!==n);t=[];for(let c of n){let n=bc(r,i,e,c);t.push(lc(n,a,o&&o[e],s))}}return t}function _c(e,t,n){return vo(e)?e(t,n):e}var vc=(e,t)=>e===!0?t:typeof e==`string`?ho(t,e):void 0;function yc(e,t,n,r,i){for(let a of t){let t=vc(n,a);if(t){e.add(t);let a=_c(t._fallback,n,i);if(a!==void 0&&a!==n&&a!==r)return a}else if(t===!1&&r!==void 0&&n!==r)return null}return!1}function bc(e,t,n,r){let i=t._rootScopes,a=_c(t._fallback,n,r),o=[...e,...i],s=new Set;s.add(r);let c=xc(s,o,n,a||n,r);return c===null||a!==void 0&&a!==n&&(c=xc(s,o,a,c,r),c===null)?!1:cc(Array.from(s),[``],i,a,()=>Sc(t,n,r))}function xc(e,t,n,r,i){for(;n;)n=yc(e,t,n,r,i);return n}function Sc(e,t,n){let r=e._getTarget();t in r||(r[t]={});let i=r[t];return B(i)&&V(n)?n:i||{}}function Cc(e,t,n,r){let i;for(let a of t)if(i=wc(dc(a,e),n),i!==void 0)return fc(e,i)?bc(n,r,e,i):i}function wc(e,t){for(let n of t){if(!n)continue;let t=n[e];if(t!==void 0)return t}}function Tc(e){let t=e._keys;return t||=e._keys=Ec(e._scopes),t}function Ec(e){let t=new Set;for(let n of e)for(let e of Object.keys(n).filter(e=>!e.startsWith(`_`)))t.add(e);return Array.from(t)}var Dc=2**-52||1e-14,Oc=(e,t)=>t<e.length&&!e[t].skip&&e[t],kc=e=>e===`x`?`y`:`x`;function Ac(e,t,n,r){let i=e.skip?t:e,a=t,o=n.skip?t:n,s=Ho(a,i),c=Ho(o,a),l=s/(s+c),u=c/(s+c);l=isNaN(l)?0:l,u=isNaN(u)?0:u;let d=r*l,f=r*u;return{previous:{x:a.x-d*(o.x-i.x),y:a.y-d*(o.y-i.y)},next:{x:a.x+f*(o.x-i.x),y:a.y+f*(o.y-i.y)}}}function jc(e,t,n){let r=e.length,i,a,o,s,c,l=Oc(e,0);for(let u=0;u<r-1;++u)if(c=l,l=Oc(e,u+1),!(!c||!l)){if(jo(t[u],0,Dc)){n[u]=n[u+1]=0;continue}i=n[u]/t[u],a=n[u+1]/t[u],s=i**2+a**2,!(s<=9)&&(o=3/Math.sqrt(s),n[u]=i*o*t[u],n[u+1]=a*o*t[u])}}function Mc(e,t,n=`x`){let r=kc(n),i=e.length,a,o,s,c=Oc(e,0);for(let l=0;l<i;++l){if(o=s,s=c,c=Oc(e,l+1),!s)continue;let i=s[n],u=s[r];o&&(a=(i-o[n])/3,s[`cp1${n}`]=i-a,s[`cp1${r}`]=u-a*t[l]),c&&(a=(c[n]-i)/3,s[`cp2${n}`]=i+a,s[`cp2${r}`]=u+a*t[l])}}function Nc(e,t=`x`){let n=kc(t),r=e.length,i=Array(r).fill(0),a=Array(r),o,s,c,l=Oc(e,0);for(o=0;o<r;++o)if(s=c,c=l,l=Oc(e,o+1),c){if(l){let e=l[t]-c[t];i[o]=e===0?0:(l[n]-c[n])/e}a[o]=s?l?Ao(i[o-1])===Ao(i[o])?(i[o-1]+i[o])/2:0:i[o-1]:i[o]}jc(e,i,a),Mc(e,a,t)}function Pc(e,t,n){return Math.max(Math.min(e,n),t)}function Fc(e,t){let n,r,i,a,o,s=Bs(e[0],t);for(n=0,r=e.length;n<r;++n)o=a,a=s,s=n<r-1&&Bs(e[n+1],t),a&&(i=e[n],o&&(i.cp1x=Pc(i.cp1x,t.left,t.right),i.cp1y=Pc(i.cp1y,t.top,t.bottom)),s&&(i.cp2x=Pc(i.cp2x,t.left,t.right),i.cp2y=Pc(i.cp2y,t.top,t.bottom)))}function Ic(e,t,n,r,i){let a,o,s,c;if(t.spanGaps&&(e=e.filter(e=>!e.skip)),t.cubicInterpolationMode===`monotone`)Nc(e,i);else{let n=r?e[e.length-1]:e[0];for(a=0,o=e.length;a<o;++a)s=e[a],c=Ac(n,s,e[Math.min(a+1,o-+!r)%o],t.tension),s.cp1x=c.previous.x,s.cp1y=c.previous.y,s.cp2x=c.next.x,s.cp2y=c.next.y,n=s}t.capBezierPoints&&Fc(e,n)}function Lc(){return typeof window<`u`&&typeof document<`u`}function Rc(e){let t=e.parentNode;return t&&t.toString()===`[object ShadowRoot]`&&(t=t.host),t}function zc(e,t,n){let r;return typeof e==`string`?(r=parseInt(e,10),e.indexOf(`%`)!==-1&&(r=r/100*t.parentNode[n])):r=e,r}var Bc=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function Vc(e,t){return Bc(e).getPropertyValue(t)}var Hc=[`top`,`right`,`bottom`,`left`];function Uc(e,t,n){let r={};n=n?`-`+n:``;for(let i=0;i<4;i++){let a=Hc[i];r[a]=parseFloat(e[t+`-`+a+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}var Wc=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function Gc(e,t){let n=e.touches,r=n&&n.length?n[0]:e,{offsetX:i,offsetY:a}=r,o=!1,s,c;if(Wc(i,a,e.target))s=i,c=a;else{let e=t.getBoundingClientRect();s=r.clientX-e.left,c=r.clientY-e.top,o=!0}return{x:s,y:c,box:o}}function Kc(e,t){if(`native`in e)return e;let{canvas:n,currentDevicePixelRatio:r}=t,i=Bc(n),a=i.boxSizing===`border-box`,o=Uc(i,`padding`),s=Uc(i,`border`,`width`),{x:c,y:l,box:u}=Gc(e,n),d=o.left+(u&&s.left),f=o.top+(u&&s.top),{width:p,height:m}=t;return a&&(p-=o.width+s.width,m-=o.height+s.height),{x:Math.round((c-d)/p*n.width/r),y:Math.round((l-f)/m*n.height/r)}}function qc(e,t,n){let r,i;if(t===void 0||n===void 0){let a=e&&Rc(e);if(!a)t=e.clientWidth,n=e.clientHeight;else{let e=a.getBoundingClientRect(),o=Bc(a),s=Uc(o,`border`,`width`),c=Uc(o,`padding`);t=e.width-c.width-s.width,n=e.height-c.height-s.height,r=zc(o.maxWidth,a,`clientWidth`),i=zc(o.maxHeight,a,`clientHeight`)}}return{width:t,height:n,maxWidth:r||wo,maxHeight:i||wo}}var Jc=e=>Math.round(e*10)/10;function Yc(e,t,n,r){let i=Bc(e),a=Uc(i,`margin`),o=zc(i.maxWidth,e,`clientWidth`)||wo,s=zc(i.maxHeight,e,`clientHeight`)||wo,c=qc(e,t,n),{width:l,height:u}=c;if(i.boxSizing===`content-box`){let e=Uc(i,`border`,`width`),t=Uc(i,`padding`);l-=t.width+e.width,u-=t.height+e.height}return l=Math.max(0,l-a.width),u=Math.max(0,r?l/r:u-a.height),l=Jc(Math.min(l,o,c.maxWidth)),u=Jc(Math.min(u,s,c.maxHeight)),l&&!u&&(u=Jc(l/2)),(t!==void 0||n!==void 0)&&r&&c.height&&u>c.height&&(u=c.height,l=Jc(Math.floor(u*r))),{width:l,height:u}}function Xc(e,t,n){let r=t||1,i=Jc(e.height*r),a=Jc(e.width*r);e.height=Jc(e.height),e.width=Jc(e.width);let o=e.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${e.height}px`,o.style.width=`${e.width}px`),e.currentDevicePixelRatio!==r||o.height!==i||o.width!==a?(e.currentDevicePixelRatio=r,o.height=i,o.width=a,e.ctx.setTransform(r,0,0,r,0,0),!0):!1}var Zc=function(){let e=!1;try{let t={get passive(){return e=!0,!1}};Lc()&&(window.addEventListener(`test`,null,t),window.removeEventListener(`test`,null,t))}catch{}return e}();function Qc(e,t){let n=Vc(e,t),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function $c(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function el(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:r===`middle`?n<.5?e.y:t.y:r===`after`?n<1?e.y:t.y:n>0?t.y:e.y}}function tl(e,t,n,r){let i={x:e.cp2x,y:e.cp2y},a={x:t.cp1x,y:t.cp1y},o=$c(e,i,n),s=$c(i,a,n),c=$c(a,t,n);return $c($c(o,s,n),$c(s,c,n),n)}var nl=function(e,t){return{x(n){return e+e+t-n},setWidth(e){t=e},textAlign(e){return e===`center`?e:e===`right`?`left`:`right`},xPlus(e,t){return e-t},leftForLtr(e,t){return e-t}}},rl=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function il(e,t,n){return e?nl(t,n):rl()}function al(e,t){let n,r;(t===`ltr`||t===`rtl`)&&(n=e.canvas.style,r=[n.getPropertyValue(`direction`),n.getPropertyPriority(`direction`)],n.setProperty(`direction`,t,`important`),e.prevTextDirection=r)}function ol(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty(`direction`,t[0],t[1]))}function sl(e){return e===`angle`?{between:Go,compare:Uo,normalize:Wo}:{between:Jo,compare:(e,t)=>e-t,normalize:e=>e}}function cl({start:e,end:t,count:n,loop:r,style:i}){return{start:e%n,end:t%n,loop:r&&(t-e+1)%n===0,style:i}}function ll(e,t,n){let{property:r,start:i,end:a}=n,{between:o,normalize:s}=sl(r),c=t.length,{start:l,end:u,loop:d}=e,f,p;if(d){for(l+=c,u+=c,f=0,p=c;f<p&&o(s(t[l%c][r]),i,a);++f)l--,u--;l%=c,u%=c}return u<l&&(u+=c),{start:l,end:u,loop:d,style:e.style}}function ul(e,t,n){if(!n)return[e];let{property:r,start:i,end:a}=n,o=t.length,{compare:s,between:c,normalize:l}=sl(r),{start:u,end:d,loop:f,style:p}=ll(e,t,n),m=[],h=!1,g=null,_,v,y,b=()=>c(i,y,_)&&s(i,y)!==0,x=()=>s(a,_)===0||c(a,y,_),S=()=>h||b(),C=()=>!h||x();for(let e=u,n=u;e<=d;++e)v=t[e%o],!v.skip&&(_=l(v[r]),_!==y&&(h=c(_,i,a),g===null&&S()&&(g=s(_,i)===0?e:n),g!==null&&C()&&(m.push(cl({start:g,end:e,loop:f,count:o,style:p})),g=null),n=e,y=_));return g!==null&&m.push(cl({start:g,end:d,loop:f,count:o,style:p})),m}function dl(e,t){let n=[],r=e.segments;for(let i=0;i<r.length;i++){let a=ul(r[i],e.points,t);a.length&&n.push(...a)}return n}function fl(e,t,n,r){let i=0,a=t-1;if(n&&!r)for(;i<t&&!e[i].skip;)i++;for(;i<t&&e[i].skip;)i++;for(i%=t,n&&(a+=i);a>i&&e[a%t].skip;)a--;return a%=t,{start:i,end:a}}function pl(e,t,n,r){let i=e.length,a=[],o=t,s=e[t],c;for(c=t+1;c<=n;++c){let n=e[c%i];n.skip||n.stop?s.skip||(r=!1,a.push({start:t%i,end:(c-1)%i,loop:r}),t=o=n.stop?c:null):(o=c,s.skip&&(t=c)),s=n}return o!==null&&a.push({start:t%i,end:o%i,loop:r}),a}function ml(e,t){let n=e.points,r=e.options.spanGaps,i=n.length;if(!i)return[];let a=!!e._loop,{start:o,end:s}=fl(n,i,a,r);return r===!0?hl(e,[{start:o,end:s,loop:a}],n,t):hl(e,pl(n,o,s<o?s+i:s,!!e._fullLoop&&o===0&&s===i-1),n,t)}function hl(e,t,n,r){return!r||!r.setContext||!n?t:gl(e,t,n,r)}function gl(e,t,n,r){let i=e._chart.getContext(),a=_l(e.options),{_datasetIndex:o,options:{spanGaps:s}}=e,c=n.length,l=[],u=a,d=t[0].start,f=d;function p(e,t,r,i){let a=s?-1:1;if(e!==t){for(e+=c;n[e%c].skip;)e-=a;for(;n[t%c].skip;)t+=a;e%c!==t%c&&(l.push({start:e%c,end:t%c,loop:r,style:i}),u=i,d=t%c)}}for(let e of t){d=s?d:e.start;let t=n[d%c],a;for(f=d+1;f<=e.end;f++){let s=n[f%c];a=_l(r.setContext(sc(i,{type:`segment`,p0:t,p1:s,p0DataIndex:(f-1)%c,p1DataIndex:f%c,datasetIndex:o}))),vl(a,u)&&p(d,f-1,e.loop,u),t=s,u=a}d<f-1&&p(d,f-1,e.loop,u)}return l}function _l(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function vl(e,t){if(!t)return!1;let n=[],r=function(e,t){return ms(t)?(n.includes(t)||n.push(t),n.indexOf(t)):t};return JSON.stringify(e,r)!==JSON.stringify(t,r)}function yl(e,t,n){return e.options.clip?e[n]:t[n]}function bl(e,t){let{xScale:n,yScale:r}=e;return n&&r?{left:yl(n,t,`left`),right:yl(n,t,`right`),top:yl(r,t,`top`),bottom:yl(r,t,`bottom`)}:t}function xl(e,t){let n=t._clip;if(n.disabled)return!1;let r=bl(t,e.chartArea);return{left:n.left===!1?0:r.left-(n.left===!0?0:n.left),right:n.right===!1?e.width:r.right+(n.right===!0?0:n.right),top:n.top===!1?0:r.top-(n.top===!0?0:n.top),bottom:n.bottom===!1?e.height:r.bottom+(n.bottom===!0?0:n.bottom)}}var Sl=new class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,t,n,r){let i=t.listeners[r],a=t.duration;i.forEach(r=>r({chart:e,initial:t.initial,numSteps:a,currentStep:Math.min(n-t.start,a)}))}_refresh(){this._request||=(this._running=!0,rs.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let t=0;this._charts.forEach((n,r)=>{if(!n.running||!n.items.length)return;let i=n.items,a=i.length-1,o=!1,s;for(;a>=0;--a)s=i[a],s._active?(s._total>n.duration&&(n.duration=s._total),s.tick(e),o=!0):(i[a]=i[i.length-1],i.pop());o&&(r.draw(),this._notify(r,n,e,`progress`)),i.length||(n.running=!1,this._notify(r,n,e,`complete`),n.initial=!1),t+=i.length}),this._lastDate=e,t===0&&(this._running=!1)}_getAnims(e){let t=this._charts,n=t.get(e);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},t.set(e,n)),n}listen(e,t,n){this._getAnims(e).listeners[t].push(n)}add(e,t){!t||!t.length||this._getAnims(e).items.push(...t)}has(e){return this._getAnims(e).items.length>0}start(e){let t=this._charts.get(e);t&&(t.running=!0,t.start=Date.now(),t.duration=t.items.reduce((e,t)=>Math.max(e,t._duration),0),this._refresh())}running(e){if(!this._running)return!1;let t=this._charts.get(e);return!(!t||!t.running||!t.items.length)}stop(e){let t=this._charts.get(e);if(!t||!t.items.length)return;let n=t.items,r=n.length-1;for(;r>=0;--r)n[r].cancel();t.items=[],this._notify(e,t,Date.now(),`complete`)}remove(e){return this._charts.delete(e)}},Cl=`transparent`,wl={boolean(e,t,n){return n>.5?t:e},color(e,t,n){let r=hs(e||Cl),i=r.valid&&hs(t||Cl);return i&&i.valid?i.mix(r,n).hexString():t},number(e,t,n){return e+(t-e)*n}},Tl=class{constructor(e,t,n,r){let i=t[n];r=ac([e.to,r,i,e.from]);let a=ac([e.from,i,r]);this._active=!0,this._fn=e.fn||wl[e.type||typeof a],this._easing=ps[e.easing]||ps.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=t,this._prop=n,this._from=a,this._to=r,this._promises=void 0}active(){return this._active}update(e,t,n){if(this._active){this._notify(!1);let r=this._target[this._prop],i=n-this._start,a=this._duration-i;this._start=n,this._duration=Math.floor(Math.max(a,e.duration)),this._total+=i,this._loop=!!e.loop,this._to=ac([e.to,t,r,e.from]),this._from=ac([e.from,r,t])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){let t=e-this._start,n=this._duration,r=this._prop,i=this._from,a=this._loop,o=this._to,s;if(this._active=i!==o&&(a||t<n),!this._active){this._target[r]=o,this._notify(!0);return}if(t<0){this._target[r]=i;return}s=t/n%2,s=a&&s>1?2-s:s,s=this._easing(Math.min(1,Math.max(0,s))),this._target[r]=this._fn(i,o,s)}wait(){let e=this._promises||=[];return new Promise((t,n)=>{e.push({res:t,rej:n})})}_notify(e){let t=e?`res`:`rej`,n=this._promises||[];for(let e=0;e<n.length;e++)n[e][t]()}},El=class{constructor(e,t){this._chart=e,this._properties=new Map,this.configure(t)}configure(e){if(!V(e))return;let t=Object.keys(Ms.animation),n=this._properties;Object.getOwnPropertyNames(e).forEach(r=>{let i=e[r];if(!V(i))return;let a={};for(let e of t)a[e]=i[e];(B(i.properties)&&i.properties||[r]).forEach(e=>{(e===r||!n.has(e))&&n.set(e,a)})})}_animateOptions(e,t){let n=t.options,r=Ol(e,n);if(!r)return[];let i=this._createAnimations(r,n);return n.$shared&&Dl(e.options.$animations,n).then(()=>{e.options=n},()=>{}),i}_createAnimations(e,t){let n=this._properties,r=[],i=e.$animations||={},a=Object.keys(t),o=Date.now(),s;for(s=a.length-1;s>=0;--s){let c=a[s];if(c.charAt(0)===`$`)continue;if(c===`options`){r.push(...this._animateOptions(e,t));continue}let l=t[c],u=i[c],d=n.get(c);if(u){if(d&&u.active()){u.update(d,l,o);continue}u.cancel()}if(!d||!d.duration){e[c]=l;continue}i[c]=u=new Tl(d,e,c,l),r.push(u)}return r}update(e,t){if(this._properties.size===0){Object.assign(e,t);return}let n=this._createAnimations(e,t);if(n.length)return Sl.add(this._chart,n),!0}};function Dl(e,t){let n=[],r=Object.keys(t);for(let t=0;t<r.length;t++){let i=e[r[t]];i&&i.active()&&n.push(i.wait())}return Promise.all(n)}function Ol(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function kl(e,t){let n=e&&e.options||{},r=n.reverse,i=n.min===void 0?t:0,a=n.max===void 0?t:0;return{start:r?a:i,end:r?i:a}}function Al(e,t,n){if(n===!1)return!1;let r=kl(e,n),i=kl(t,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}}function jl(e){let t,n,r,i;return V(e)?(t=e.top,n=e.right,r=e.bottom,i=e.left):t=n=r=i=e,{top:t,right:n,bottom:r,left:i,disabled:e===!1}}function Ml(e,t){let n=[],r=e._getSortedDatasetMetas(t),i,a;for(i=0,a=r.length;i<a;++i)n.push(r[i].index);return n}function Nl(e,t,n,r={}){let i=e.keys,a=r.mode===`single`,o,s,c,l;if(t===null)return;let u=!1;for(o=0,s=i.length;o<s;++o){if(c=+i[o],c===n){if(u=!0,r.all)continue;break}l=e.values[c],ro(l)&&(a||t===0||Ao(t)===Ao(l))&&(t+=l)}return!u&&!r.all?0:t}function Pl(e,t){let{iScale:n,vScale:r}=t,i=n.axis===`x`?`x`:`y`,a=r.axis===`x`?`x`:`y`,o=Object.keys(e),s=Array(o.length),c,l,u;for(c=0,l=o.length;c<l;++c)u=o[c],s[c]={[i]:u,[a]:e[u]};return s}function Fl(e,t){let n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function Il(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function Ll(e){let{min:t,max:n,minDefined:r,maxDefined:i}=e.getUserBounds();return{min:r?t:-1/0,max:i?n:1/0}}function q(e,t,n){let r=e[t]||(e[t]={});return r[n]||(r[n]={})}function Rl(e,t,n,r){for(let i of t.getMatchingVisibleMetas(r).reverse()){let t=e[i.index];if(n&&t>0||!n&&t<0)return i.index}return null}function J(e,t){let{chart:n,_cachedMeta:r}=e,i=n._stacks||={},{iScale:a,vScale:o,index:s}=r,c=a.axis,l=o.axis,u=Il(a,o,r),d=t.length,f;for(let e=0;e<d;++e){let n=t[e],{[c]:a,[l]:d}=n,p=n._stacks||={};f=p[l]=q(i,u,a),f[s]=d,f._top=Rl(f,o,!0,r.type),f._bottom=Rl(f,o,!1,r.type);let m=f._visualValues||(f._visualValues={});m[s]=d}}function Y(e,t){let n=e.scales;return Object.keys(n).filter(e=>n[e].axis===t).shift()}function X(e,t){return sc(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:`default`,type:`dataset`})}function zl(e,t,n){return sc(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:`default`,type:`data`})}function Bl(e,t){let n=e.controller.index,r=e.vScale&&e.vScale.axis;if(r){t||=e._parsed;for(let e of t){let t=e._stacks;if(!t||t[r]===void 0||t[r][n]===void 0)return;delete t[r][n],t[r]._visualValues!==void 0&&t[r]._visualValues[n]!==void 0&&delete t[r]._visualValues[n]}}}var Vl=e=>e===`reset`||e===`none`,Hl=(e,t)=>t?e:Object.assign({},e),Ul=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:Ml(n,!0),values:null},Wl=class{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(e,t){this.chart=e,this._ctx=e.ctx,this.index=t,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){let e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=Fl(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled(`filler`)&&console.warn(`Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options`)}updateIndex(e){this.index!==e&&Bl(this._cachedMeta),this.index=e}linkScales(){let e=this.chart,t=this._cachedMeta,n=this.getDataset(),r=(e,t,n,r)=>e===`x`?t:e===`r`?r:n,i=t.xAxisID=H(n.xAxisID,Y(e,`x`)),a=t.yAxisID=H(n.yAxisID,Y(e,`y`)),o=t.rAxisID=H(n.rAxisID,Y(e,`r`)),s=t.indexAxis,c=t.iAxisID=r(s,i,a,o),l=t.vAxisID=r(s,a,i,o);t.xScale=this.getScaleForId(i),t.yScale=this.getScaleForId(a),t.rScale=this.getScaleForId(o),t.iScale=this.getScaleForId(c),t.vScale=this.getScaleForId(l)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){let t=this._cachedMeta;return e===t.iScale?t.vScale:t.iScale}reset(){this._update(`reset`)}_destroy(){let e=this._cachedMeta;this._data&&ts(this._data,this),e._stacked&&Bl(e)}_dataCheck(){let e=this.getDataset(),t=e.data||=[],n=this._data;if(V(t)){let e=this._cachedMeta;this._data=Pl(t,e)}else if(n!==t){if(n){ts(n,this);let e=this._cachedMeta;Bl(e),e._parsed=[]}t&&Object.isExtensible(t)&&es(t,this),this._syncList=[],this._data=t}}addElements(){let e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){let t=this._cachedMeta,n=this.getDataset(),r=!1;this._dataCheck();let i=t._stacked;t._stacked=Fl(t.vScale,t),t.stack!==n.stack&&(r=!0,Bl(t),t.stack=n.stack),this._resyncElements(e),(r||i!==t._stacked)&&(J(this,t._parsed),t._stacked=Fl(t.vScale,t))}configure(){let e=this.chart.config,t=e.datasetScopeKeys(this._type),n=e.getOptionScopes(this.getDataset(),t,!0);this.options=e.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,t){let{_cachedMeta:n,_data:r}=this,{iScale:i,_stacked:a}=n,o=i.axis,s=e===0&&t===r.length||n._sorted,c=e>0&&n._parsed[e-1],l,u,d;if(this._parsing===!1)n._parsed=r,n._sorted=!0,d=r;else{d=B(r[e])?this.parseArrayData(n,r,e,t):V(r[e])?this.parseObjectData(n,r,e,t):this.parsePrimitiveData(n,r,e,t);let i=()=>u[o]===null||c&&u[o]<c[o];for(l=0;l<t;++l)n._parsed[l+e]=u=d[l],s&&(i()&&(s=!1),c=u);n._sorted=s}a&&J(this,d)}parsePrimitiveData(e,t,n,r){let{iScale:i,vScale:a}=e,o=i.axis,s=a.axis,c=i.getLabels(),l=i===a,u=Array(r),d,f,p;for(d=0,f=r;d<f;++d)p=d+n,u[d]={[o]:l||i.parse(c[p],p),[s]:a.parse(t[p],p)};return u}parseArrayData(e,t,n,r){let{xScale:i,yScale:a}=e,o=Array(r),s,c,l,u;for(s=0,c=r;s<c;++s)l=s+n,u=t[l],o[s]={x:i.parse(u[0],l),y:a.parse(u[1],l)};return o}parseObjectData(e,t,n,r){let{xScale:i,yScale:a}=e,{xAxisKey:o=`x`,yAxisKey:s=`y`}=this._parsing,c=Array(r),l,u,d,f;for(l=0,u=r;l<u;++l)d=l+n,f=t[d],c[l]={x:i.parse(ho(f,o),d),y:a.parse(ho(f,s),d)};return c}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,t,n){let r=this.chart,i=this._cachedMeta,a=t[e.axis];return Nl({keys:Ml(r,!0),values:t._stacks[e.axis]._visualValues},a,i.index,{mode:n})}updateRangeFromParsed(e,t,n,r){let i=n[t.axis],a=i===null?NaN:i,o=r&&n._stacks[t.axis];r&&o&&(r.values=o,a=Nl(r,i,this._cachedMeta.index)),e.min=Math.min(e.min,a),e.max=Math.max(e.max,a)}getMinMax(e,t){let n=this._cachedMeta,r=n._parsed,i=n._sorted&&e===n.iScale,a=r.length,o=this._getOtherScale(e),s=Ul(t,n,this.chart),c={min:1/0,max:-1/0},{min:l,max:u}=Ll(o),d,f;function p(){f=r[d];let t=f[o.axis];return!ro(f[e.axis])||l>t||u<t}for(d=0;d<a&&!(!p()&&(this.updateRangeFromParsed(c,e,f,s),i));++d);if(i){for(d=a-1;d>=0;--d)if(!p()){this.updateRangeFromParsed(c,e,f,s);break}}return c}getAllParsedValues(e){let t=this._cachedMeta._parsed,n=[],r,i,a;for(r=0,i=t.length;r<i;++r)a=t[r][e.axis],ro(a)&&n.push(a);return n}getMaxOverflow(){return!1}getLabelAndValue(e){let t=this._cachedMeta,n=t.iScale,r=t.vScale,i=this.getParsed(e);return{label:n?``+n.getLabelForValue(i[n.axis]):``,value:r?``+r.getLabelForValue(i[r.axis]):``}}_update(e){let t=this._cachedMeta;this.update(e||`default`),t._clip=jl(H(this.options.clip,Al(t.xScale,t.yScale,this.getMaxOverflow())))}update(e){}draw(){let e=this._ctx,t=this.chart,n=this._cachedMeta,r=n.data||[],i=t.chartArea,a=[],o=this._drawStart||0,s=this._drawCount||r.length-o,c=this.options.drawActiveElementsOnTop,l;for(n.dataset&&n.dataset.draw(e,i,o,s),l=o;l<o+s;++l){let t=r[l];t.hidden||(t.active&&c?a.push(t):t.draw(e,i))}for(l=0;l<a.length;++l)a[l].draw(e,i)}getStyle(e,t){let n=t?`active`:`default`;return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(e||0,n)}getContext(e,t,n){let r=this.getDataset(),i;if(e>=0&&e<this._cachedMeta.data.length){let t=this._cachedMeta.data[e];i=t.$context||=zl(this.getContext(),e,t),i.parsed=this.getParsed(e),i.raw=r.data[e],i.index=i.dataIndex=e}else i=this.$context||=X(this.chart.getContext(),this.index),i.dataset=r,i.index=i.datasetIndex=this.index;return i.active=!!t,i.mode=n,i}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,t){return this._resolveElementOptions(this.dataElementType.id,t,e)}_resolveElementOptions(e,t=`default`,n){let r=t===`active`,i=this._cachedDataOpts,a=e+`-`+t,o=i[a],s=this.enableOptionSharing&&_o(n);if(o)return Hl(o,s);let c=this.chart.config,l=c.datasetElementScopeKeys(this._type,e),u=r?[`${e}Hover`,`hover`,e,``]:[e,``],d=c.getOptionScopes(this.getDataset(),l),f=Object.keys(Ms.elements[e]),p=c.resolveNamedOptions(d,f,()=>this.getContext(n,r,t),u);return p.$shared&&(p.$shared=s,i[a]=Object.freeze(Hl(p,s))),p}_resolveAnimations(e,t,n){let r=this.chart,i=this._cachedDataOpts,a=`animation-${t}`,o=i[a];if(o)return o;let s;if(r.options.animation!==!1){let r=this.chart.config,i=r.datasetAnimationScopeKeys(this._type,t),a=r.getOptionScopes(this.getDataset(),i);s=r.createResolver(a,this.getContext(e,n,t))}let c=new El(r,s&&s.animations);return s&&s._cacheable&&(i[a]=Object.freeze(c)),c}getSharedOptions(e){if(e.$shared)return this._sharedOptions||=Object.assign({},e)}includeOptions(e,t){return!t||Vl(e)||this.chart._animationsDisabled}_getSharedOptions(e,t){let n=this.resolveDataElementOptions(e,t),r=this._sharedOptions,i=this.getSharedOptions(n),a=this.includeOptions(t,i)||i!==r;return this.updateSharedOptions(i,t,n),{sharedOptions:i,includeOptions:a}}updateElement(e,t,n,r){Vl(r)?Object.assign(e,n):this._resolveAnimations(t,r).update(e,n)}updateSharedOptions(e,t,n){e&&!Vl(t)&&this._resolveAnimations(void 0,t).update(e,n)}_setStyle(e,t,n,r){e.active=r;let i=this.getStyle(t,r);this._resolveAnimations(t,n,r).update(e,{options:!r&&this.getSharedOptions(i)||i})}removeHoverStyle(e,t,n){this._setStyle(e,n,`active`,!1)}setHoverStyle(e,t,n){this._setStyle(e,n,`active`,!0)}_removeDatasetHoverStyle(){let e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,`active`,!1)}_setDatasetHoverStyle(){let e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,`active`,!0)}_resyncElements(e){let t=this._data,n=this._cachedMeta.data;for(let[e,t,n]of this._syncList)this[e](t,n);this._syncList=[];let r=n.length,i=t.length,a=Math.min(i,r);a&&this.parse(0,a),i>r?this._insertElements(r,i-r,e):i<r&&this._removeElements(i,r-i)}_insertElements(e,t,n=!0){let r=this._cachedMeta,i=r.data,a=e+t,o,s=e=>{for(e.length+=t,o=e.length-1;o>=a;o--)e[o]=e[o-t]};for(s(i),o=e;o<a;++o)i[o]=new this.dataElementType;this._parsing&&s(r._parsed),this.parse(e,t),n&&this.updateElements(i,e,t,`reset`)}updateElements(e,t,n,r){}_removeElements(e,t){let n=this._cachedMeta;if(this._parsing){let r=n._parsed.splice(e,t);n._stacked&&Bl(n,r)}n.data.splice(e,t)}_sync(e){if(this._parsing)this._syncList.push(e);else{let[t,n,r]=e;this[t](n,r)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){let e=arguments.length;this._sync([`_insertElements`,this.getDataset().data.length-e,e])}_onDataPop(){this._sync([`_removeElements`,this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync([`_removeElements`,0,1])}_onDataSplice(e,t){t&&this._sync([`_removeElements`,e,t]);let n=arguments.length-2;n&&this._sync([`_insertElements`,e,n])}_onDataUnshift(){this._sync([`_insertElements`,0,arguments.length])}},Gl=class extends Wl{static id=`line`;static defaults={datasetElementType:`line`,dataElementType:`point`,showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:`category`},_value_:{type:`linear`}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){let t=this._cachedMeta,{dataset:n,data:r=[],_dataset:i}=t,a=this.chart._animationsDisabled,{start:o,count:s}=cs(t,r,a);this._drawStart=o,this._drawCount=s,ls(t)&&(o=0,s=r.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!i._decimated,n.points=r;let c=this.resolveDatasetElementOptions(e);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(n,void 0,{animated:!a,options:c},e),this.updateElements(r,o,s,e)}updateElements(e,t,n,r){let i=r===`reset`,{iScale:a,vScale:o,_stacked:s,_dataset:c}=this._cachedMeta,{sharedOptions:l,includeOptions:u}=this._getSharedOptions(t,r),d=a.axis,f=o.axis,{spanGaps:p,segment:m}=this.options,h=Fo(p)?p:1/0,g=this.chart._animationsDisabled||i||r===`none`,_=t+n,v=e.length,y=t>0&&this.getParsed(t-1);for(let n=0;n<v;++n){let p=e[n],v=g?p:{};if(n<t||n>=_){v.skip=!0;continue}let b=this.getParsed(n),x=z(b[f]),S=v[d]=a.getPixelForValue(b[d],n),C=v[f]=i||x?o.getBasePixel():o.getPixelForValue(s?this.applyStack(o,b,s):b[f],n);v.skip=isNaN(S)||isNaN(C)||x,v.stop=n>0&&Math.abs(b[d]-y[d])>h,m&&(v.parsed=b,v.raw=c.data[n]),u&&(v.options=l||this.resolveDataElementOptions(n,p.active?`active`:r)),g||this.updateElement(p,n,v,r),y=b}}getMaxOverflow(){let e=this._cachedMeta,t=e.dataset,n=t.options&&t.options.borderWidth||0,r=e.data||[];if(!r.length)return n;let i=r[0].size(this.resolveDataElementOptions(0)),a=r[r.length-1].size(this.resolveDataElementOptions(r.length-1));return Math.max(n,i,a)/2}draw(){let e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}};function Kl(){throw Error(`This method is not implemented: Check that a complete date adapter is provided.`)}var ql={_date:class e{static override(t){Object.assign(e.prototype,t)}options;constructor(e){this.options=e||{}}init(){}formats(){return Kl()}parse(){return Kl()}format(){return Kl()}add(){return Kl()}diff(){return Kl()}startOf(){return Kl()}endOf(){return Kl()}}};function Jl(e,t,n,r){let{controller:i,data:a,_sorted:o}=e,s=i._cachedMeta.iScale,c=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null;if(s&&t===s.axis&&t!==`r`&&o&&a.length){let o=s._reversePixels?Zo:Xo;if(!r){let r=o(a,t,n);if(c){let{vScale:t}=i._cachedMeta,{_parsed:n}=e,a=n.slice(0,r.lo+1).reverse().findIndex(e=>!z(e[t.axis]));r.lo-=Math.max(0,a);let o=n.slice(r.hi).findIndex(e=>!z(e[t.axis]));r.hi+=Math.max(0,o)}return r}if(i._sharedOptions){let e=a[0],r=typeof e.getRange==`function`&&e.getRange(t);if(r){let e=o(a,t,n-r),i=o(a,t,n+r);return{lo:e.lo,hi:i.hi}}}}return{lo:0,hi:a.length-1}}function Yl(e,t,n,r,i){let a=e.getSortedVisibleDatasetMetas(),o=n[t];for(let e=0,n=a.length;e<n;++e){let{index:n,data:s}=a[e],{lo:c,hi:l}=Jl(a[e],t,o,i);for(let e=c;e<=l;++e){let t=s[e];t.skip||r(t,n,e)}}}function Xl(e){let t=e.indexOf(`x`)!==-1,n=e.indexOf(`y`)!==-1;return function(e,r){let i=t?Math.abs(e.x-r.x):0,a=n?Math.abs(e.y-r.y):0;return Math.sqrt(i**2+a**2)}}function Zl(e,t,n,r,i){let a=[];return!i&&!e.isPointInArea(t)||Yl(e,n,t,function(n,o,s){!i&&!Bs(n,e.chartArea,0)||n.inRange(t.x,t.y,r)&&a.push({element:n,datasetIndex:o,index:s})},!0),a}function Ql(e,t,n,r){let i=[];function a(e,n,a){let{startAngle:o,endAngle:s}=e.getProps([`startAngle`,`endAngle`],r),{angle:c}=Vo(e,{x:t.x,y:t.y});Go(c,o,s)&&i.push({element:e,datasetIndex:n,index:a})}return Yl(e,n,t,a),i}function $l(e,t,n,r,i,a){let o=[],s=Xl(n),c=1/0;function l(n,l,u){let d=n.inRange(t.x,t.y,i);if(r&&!d)return;let f=n.getCenterPoint(i);if(!(a||e.isPointInArea(f))&&!d)return;let p=s(t,f);p<c?(o=[{element:n,datasetIndex:l,index:u}],c=p):p===c&&o.push({element:n,datasetIndex:l,index:u})}return Yl(e,n,t,l),o}function eu(e,t,n,r,i,a){return!a&&!e.isPointInArea(t)?[]:n===`r`&&!r?Ql(e,t,n,i):$l(e,t,n,r,i,a)}function tu(e,t,n,r,i){let a=[],o=n===`x`?`inXRange`:`inYRange`,s=!1;return Yl(e,n,t,(e,r,c)=>{e[o]&&e[o](t[n],i)&&(a.push({element:e,datasetIndex:r,index:c}),s||=e.inRange(t.x,t.y,i))}),r&&!s?[]:a}var nu={evaluateInteractionItems:Yl,modes:{index(e,t,n,r){let i=Kc(t,e),a=n.axis||`x`,o=n.includeInvisible||!1,s=n.intersect?Zl(e,i,a,r,o):eu(e,i,a,!1,r,o),c=[];return s.length?(e.getSortedVisibleDatasetMetas().forEach(e=>{let t=s[0].index,n=e.data[t];n&&!n.skip&&c.push({element:n,datasetIndex:e.index,index:t})}),c):[]},dataset(e,t,n,r){let i=Kc(t,e),a=n.axis||`xy`,o=n.includeInvisible||!1,s=n.intersect?Zl(e,i,a,r,o):eu(e,i,a,!1,r,o);if(s.length>0){let t=s[0].datasetIndex,n=e.getDatasetMeta(t).data;s=[];for(let e=0;e<n.length;++e)s.push({element:n[e],datasetIndex:t,index:e})}return s},point(e,t,n,r){return Zl(e,Kc(t,e),n.axis||`xy`,r,n.includeInvisible||!1)},nearest(e,t,n,r){let i=Kc(t,e),a=n.axis||`xy`,o=n.includeInvisible||!1;return eu(e,i,a,n.intersect,r,o)},x(e,t,n,r){return tu(e,Kc(t,e),`x`,n.intersect,r)},y(e,t,n,r){return tu(e,Kc(t,e),`y`,n.intersect,r)}}},ru=[`left`,`top`,`right`,`bottom`];function iu(e,t){return e.filter(e=>e.pos===t)}function au(e,t){return e.filter(e=>ru.indexOf(e.pos)===-1&&e.box.axis===t)}function ou(e,t){return e.sort((e,n)=>{let r=t?n:e,i=t?e:n;return r.weight===i.weight?r.index-i.index:r.weight-i.weight})}function su(e){let t=[],n,r,i,a,o,s;for(n=0,r=(e||[]).length;n<r;++n)i=e[n],{position:a,options:{stack:o,stackWeight:s=1}}=i,t.push({index:n,box:i,pos:a,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&a+o,stackWeight:s});return t}function cu(e){let t={};for(let n of e){let{stack:e,pos:r,stackWeight:i}=n;if(!e||!ru.includes(r))continue;let a=t[e]||(t[e]={count:0,placed:0,weight:0,size:0});a.count++,a.weight+=i}return t}function lu(e,t){let n=cu(e),{vBoxMaxWidth:r,hBoxMaxHeight:i}=t,a,o,s;for(a=0,o=e.length;a<o;++a){s=e[a];let{fullSize:o}=s.box,c=n[s.stack],l=c&&s.stackWeight/c.weight;s.horizontal?(s.width=l?l*r:o&&t.availableWidth,s.height=i):(s.width=r,s.height=l?l*i:o&&t.availableHeight)}return n}function uu(e){let t=su(e),n=ou(t.filter(e=>e.box.fullSize),!0),r=ou(iu(t,`left`),!0),i=ou(iu(t,`right`)),a=ou(iu(t,`top`),!0),o=ou(iu(t,`bottom`)),s=au(t,`x`),c=au(t,`y`);return{fullSize:n,leftAndTop:r.concat(a),rightAndBottom:i.concat(c).concat(o).concat(s),chartArea:iu(t,`chartArea`),vertical:r.concat(i).concat(c),horizontal:a.concat(o).concat(s)}}function du(e,t,n,r){return Math.max(e[n],t[n])+Math.max(e[r],t[r])}function fu(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function pu(e,t,n,r){let{pos:i,box:a}=n,o=e.maxPadding;if(!V(i)){n.size&&(e[i]-=n.size);let t=r[n.stack]||{size:0,count:1};t.size=Math.max(t.size,n.horizontal?a.height:a.width),n.size=t.size/t.count,e[i]+=n.size}a.getPadding&&fu(o,a.getPadding());let s=Math.max(0,t.outerWidth-du(o,e,`left`,`right`)),c=Math.max(0,t.outerHeight-du(o,e,`top`,`bottom`)),l=s!==e.w,u=c!==e.h;return e.w=s,e.h=c,n.horizontal?{same:l,other:u}:{same:u,other:l}}function mu(e){let t=e.maxPadding;function n(n){let r=Math.max(t[n]-e[n],0);return e[n]+=r,r}e.y+=n(`top`),e.x+=n(`left`),n(`right`),n(`bottom`)}function hu(e,t){let n=t.maxPadding;function r(e){let r={left:0,top:0,right:0,bottom:0};return e.forEach(e=>{r[e]=Math.max(t[e],n[e])}),r}return r(e?[`left`,`right`]:[`top`,`bottom`])}function gu(e,t,n,r){let i=[],a,o,s,c,l,u;for(a=0,o=e.length,l=0;a<o;++a){s=e[a],c=s.box,c.update(s.width||t.w,s.height||t.h,hu(s.horizontal,t));let{same:o,other:d}=pu(t,n,s,r);l|=o&&i.length,u||=d,c.fullSize||i.push(s)}return l&&gu(i,t,n,r)||u}function _u(e,t,n,r,i){e.top=n,e.left=t,e.right=t+r,e.bottom=n+i,e.width=r,e.height=i}function vu(e,t,n,r){let i=n.padding,{x:a,y:o}=t;for(let s of e){let e=s.box,c=r[s.stack]||{count:1,placed:0,weight:1},l=s.stackWeight/c.weight||1;if(s.horizontal){let r=t.w*l,a=c.size||e.height;_o(c.start)&&(o=c.start),e.fullSize?_u(e,i.left,o,n.outerWidth-i.right-i.left,a):_u(e,t.left+c.placed,o,r,a),c.start=o,c.placed+=r,o=e.bottom}else{let r=t.h*l,o=c.size||e.width;_o(c.start)&&(a=c.start),e.fullSize?_u(e,a,i.top,o,n.outerHeight-i.bottom-i.top):_u(e,a,t.top+c.placed,o,r),c.start=a,c.placed+=r,a=e.right}}t.x=a,t.y=o}var yu={addBox(e,t){e.boxes||=[],t.fullSize=t.fullSize||!1,t.position=t.position||`top`,t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},e.boxes.push(t)},removeBox(e,t){let n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,r){if(!e)return;let i=rc(e.options.layout.padding),a=Math.max(t-i.width,0),o=Math.max(n-i.height,0),s=uu(e.boxes),c=s.vertical,l=s.horizontal;W(e.boxes,e=>{typeof e.beforeLayout==`function`&&e.beforeLayout()});let u=c.reduce((e,t)=>t.box.options&&t.box.options.display===!1?e:e+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:n,padding:i,availableWidth:a,availableHeight:o,vBoxMaxWidth:a/2/u,hBoxMaxHeight:o/2}),f=Object.assign({},i);fu(f,rc(r));let p=Object.assign({maxPadding:f,w:a,h:o,x:i.left,y:i.top},i),m=lu(c.concat(l),d);gu(s.fullSize,p,d,m),gu(c,p,d,m),gu(l,p,d,m)&&gu(c,p,d,m),mu(p),vu(s.leftAndTop,p,d,m),p.x+=p.w,p.y+=p.h,vu(s.rightAndBottom,p,d,m),e.chartArea={left:p.left,top:p.top,right:p.left+p.w,bottom:p.top+p.h,height:p.h,width:p.w},W(s.chartArea,t=>{let n=t.box;Object.assign(n,e.chartArea),n.update(p.w,p.h,{left:0,top:0,right:0,bottom:0})})}},bu=class{acquireContext(e,t){}releaseContext(e){return!1}addEventListener(e,t,n){}removeEventListener(e,t,n){}getDevicePixelRatio(){return 1}getMaximumSize(e,t,n,r){return t=Math.max(0,t||e.width),n||=e.height,{width:t,height:Math.max(0,r?Math.floor(t/r):n)}}isAttached(e){return!0}updateConfig(e){}},xu=class extends bu{acquireContext(e){return e&&e.getContext&&e.getContext(`2d`)||null}updateConfig(e){e.options.animation=!1}},Su=`$chartjs`,Cu={touchstart:`mousedown`,touchmove:`mousemove`,touchend:`mouseup`,pointerenter:`mouseenter`,pointerdown:`mousedown`,pointermove:`mousemove`,pointerup:`mouseup`,pointerleave:`mouseout`,pointerout:`mouseout`},wu=e=>e===null||e===``;function Tu(e,t){let n=e.style,r=e.getAttribute(`height`),i=e.getAttribute(`width`);if(e[Su]={initial:{height:r,width:i,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||`block`,n.boxSizing=n.boxSizing||`border-box`,wu(i)){let t=Qc(e,`width`);t!==void 0&&(e.width=t)}if(wu(r)){if(e.style.height===``)e.height=e.width/(t||2);else{let t=Qc(e,`height`);t!==void 0&&(e.height=t)}}return e}var Eu=Zc?{passive:!0}:!1;function Du(e,t,n){e&&e.addEventListener(t,n,Eu)}function Ou(e,t,n){e&&e.canvas&&e.canvas.removeEventListener(t,n,Eu)}function ku(e,t){let n=Cu[e.type]||e.type,{x:r,y:i}=Kc(e,t);return{type:n,chart:t,native:e,x:r===void 0?null:r,y:i===void 0?null:i}}function Au(e,t){for(let n of e)if(n===t||n.contains(t))return!0}function ju(e,t,n){let r=e.canvas,i=new MutationObserver(e=>{let t=!1;for(let n of e)t||=Au(n.addedNodes,r),t&&=!Au(n.removedNodes,r);t&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}function Mu(e,t,n){let r=e.canvas,i=new MutationObserver(e=>{let t=!1;for(let n of e)t||=Au(n.removedNodes,r),t&&=!Au(n.addedNodes,r);t&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}var Nu=new Map,Pu=0;function Fu(){let e=window.devicePixelRatio;e!==Pu&&(Pu=e,Nu.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function Iu(e,t){Nu.size||window.addEventListener(`resize`,Fu),Nu.set(e,t)}function Lu(e){Nu.delete(e),Nu.size||window.removeEventListener(`resize`,Fu)}function Ru(e,t,n){let r=e.canvas,i=r&&Rc(r);if(!i)return;let a=is((e,t)=>{let r=i.clientWidth;n(e,t),r<i.clientWidth&&n()},window),o=new ResizeObserver(e=>{let t=e[0],n=t.contentRect.width,r=t.contentRect.height;(n!==0||r!==0)&&a(n,r)});return o.observe(i),Iu(e,a),o}function zu(e,t,n){n&&n.disconnect(),t===`resize`&&Lu(e)}function Bu(e,t,n){let r=e.canvas,i=is(t=>{e.ctx!==null&&n(ku(t,e))},e);return Du(r,t,i),i}var Vu=class extends bu{acquireContext(e,t){let n=e&&e.getContext&&e.getContext(`2d`);return n&&n.canvas===e?(Tu(e,t),n):null}releaseContext(e){let t=e.canvas;if(!t[Su])return!1;let n=t[Su].initial;[`height`,`width`].forEach(e=>{let r=n[e];z(r)?t.removeAttribute(e):t.setAttribute(e,r)});let r=n.style||{};return Object.keys(r).forEach(e=>{t.style[e]=r[e]}),t.width=t.width,delete t[Su],!0}addEventListener(e,t,n){this.removeEventListener(e,t);let r=e.$proxies||={};r[t]=({attach:ju,detach:Mu,resize:Ru}[t]||Bu)(e,t,n)}removeEventListener(e,t){let n=e.$proxies||={},r=n[t];r&&(({attach:zu,detach:zu,resize:zu}[t]||Ou)(e,t,r),n[t]=void 0)}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,t,n,r){return Yc(e,t,n,r)}isAttached(e){let t=e&&Rc(e);return!!(t&&t.isConnected)}};function Hu(e){return!Lc()||typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas?xu:Vu}var Uu=class{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(e){let{x:t,y:n}=this.getProps([`x`,`y`],e);return{x:t,y:n}}hasValue(){return Fo(this.x)&&Fo(this.y)}getProps(e,t){let n=this.$animations;if(!t||!n)return this;let r={};return e.forEach(e=>{r[e]=n[e]&&n[e].active()?n[e]._to:this[e]}),r}};function Wu(e,t){let n=e.options.ticks,r=Z(e),i=Math.min(n.maxTicksLimit||r,r),a=n.major.enabled?Ku(t):[],o=a.length,s=a[0],c=a[o-1],l=[];if(o>i)return qu(t,l,a,o/i),l;let u=Gu(a,t,i);if(o>0){let e,n,r=o>1?Math.round((c-s)/(o-1)):null;for(Ju(t,l,u,z(r)?0:s-r,s),e=0,n=o-1;e<n;e++)Ju(t,l,u,a[e],a[e+1]);return Ju(t,l,u,c,z(r)?t.length:c+r),l}return Ju(t,l,u),l}function Z(e){let t=e.options.offset,n=e._tickSize(),r=e._length/n+ +!t,i=e._maxLength/n;return Math.floor(Math.min(r,i))}function Gu(e,t,n){let r=Yu(e),i=t.length/n;if(!r)return Math.max(i,1);let a=No(r);for(let e=0,t=a.length-1;e<t;e++){let t=a[e];if(t>i)return t}return Math.max(i,1)}function Ku(e){let t=[],n,r;for(n=0,r=e.length;n<r;n++)e[n].major&&t.push(n);return t}function qu(e,t,n,r){let i=0,a=n[0],o;for(r=Math.ceil(r),o=0;o<e.length;o++)o===a&&(t.push(e[o]),i++,a=n[i*r])}function Ju(e,t,n,r,i){let a=H(r,0),o=Math.min(H(i,e.length),e.length),s=0,c,l,u;for(n=Math.ceil(n),i&&(c=i-r,n=c/Math.floor(c/n)),u=a;u<0;)s++,u=Math.round(a+s*n);for(l=Math.max(a,0);l<o;l++)l===u&&(t.push(e[l]),s++,u=Math.round(a+s*n))}function Yu(e){let t=e.length,n,r;if(t<2)return!1;for(r=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==r)return!1;return r}var Xu=e=>e===`left`?`right`:e===`right`?`left`:e,Zu=(e,t,n)=>t===`top`||t===`left`?e[t]+n:e[t]-n,Qu=(e,t)=>Math.min(t||e,e);function $u(e,t){let n=[],r=e.length/t,i=e.length,a=0;for(;a<i;a+=r)n.push(e[Math.floor(a)]);return n}function ed(e,t,n){let r=e.ticks.length,i=Math.min(t,r-1),a=e._startPixel,o=e._endPixel,s=1e-6,c=e.getPixelForTick(i),l;if(!(n&&(l=r===1?Math.max(c-a,o-c):t===0?(e.getPixelForTick(1)-c)/2:(c-e.getPixelForTick(i-1))/2,c+=i<t?l:-l,c<a-s||c>o+s)))return c}function td(e,t){W(e,e=>{let n=e.gc,r=n.length/2,i;if(r>t){for(i=0;i<r;++i)delete e.data[n[i]];n.splice(0,r)}})}function nd(e){return e.drawTicks?e.tickLength:0}function rd(e,t){if(!e.display)return 0;let n=ic(e.font,t),r=rc(e.padding);return(B(e.text)?e.text.length:1)*n.lineHeight+r.height}function id(e,t){return sc(e,{scale:t,type:`scale`})}function ad(e,t,n){return sc(e,{tick:n,index:t,type:`tick`})}function od(e,t,n){let r=os(e);return(n&&t!==`right`||!n&&t===`right`)&&(r=Xu(r)),r}function sd(e,t,n,r){let{top:i,left:a,bottom:o,right:s,chart:c}=e,{chartArea:l,scales:u}=c,d=0,f,p,m,h=o-i,g=s-a;if(e.isHorizontal()){if(p=ss(r,a,s),V(n)){let e=Object.keys(n)[0],r=n[e];m=u[e].getPixelForValue(r)+h-t}else m=n===`center`?(l.bottom+l.top)/2+h-t:Zu(e,n,t);f=s-a}else{if(V(n)){let e=Object.keys(n)[0],r=n[e];p=u[e].getPixelForValue(r)-g+t}else p=n===`center`?(l.left+l.right)/2-g+t:Zu(e,n,t);m=ss(r,o,i),d=n===`left`?-Eo:Eo}return{titleX:p,titleY:m,maxWidth:f,rotation:d}}var cd=class e extends Uu{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,t){return e}getUserBounds(){let{_userMin:e,_userMax:t,_suggestedMin:n,_suggestedMax:r}=this;return e=io(e,1/0),t=io(t,-1/0),n=io(n,1/0),r=io(r,-1/0),{min:io(e,n),max:io(t,r),minDefined:ro(e),maxDefined:ro(t)}}getMinMax(e){let{min:t,max:n,minDefined:r,maxDefined:i}=this.getUserBounds(),a;if(r&&i)return{min:t,max:n};let o=this.getMatchingVisibleMetas();for(let s=0,c=o.length;s<c;++s)a=o[s].controller.getMinMax(this,e),r||(t=Math.min(t,a.min)),i||(n=Math.max(n,a.max));return t=i&&t>n?n:t,n=r&&t>n?t:n,{min:io(t,io(n,t)),max:io(n,io(t,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||=this._computeLabelItems(e)}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){U(this.options.beforeUpdate,[this])}update(e,t,n){let{beginAtZero:r,grace:i,ticks:a}=this.options,o=a.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=t,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||=(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=oc(this,i,r),!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let s=o<this.ticks.length;this._convertTicksToLabels(s?$u(this.ticks,o):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),a.display&&(a.autoSkip||a.source===`auto`)&&(this.ticks=Wu(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),s&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,t,n;this.isHorizontal()?(t=this.left,n=this.right):(t=this.top,n=this.bottom,e=!e),this._startPixel=t,this._endPixel=n,this._reversePixels=e,this._length=n-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){U(this.options.afterUpdate,[this])}beforeSetDimensions(){U(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){U(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),U(this.options[e],[this])}beforeDataLimits(){this._callHooks(`beforeDataLimits`)}determineDataLimits(){}afterDataLimits(){this._callHooks(`afterDataLimits`)}beforeBuildTicks(){this._callHooks(`beforeBuildTicks`)}buildTicks(){return[]}afterBuildTicks(){this._callHooks(`afterBuildTicks`)}beforeTickToLabelConversion(){U(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){let t=this.options.ticks,n,r,i;for(n=0,r=e.length;n<r;n++)i=e[n],i.label=U(t.callback,[i.value,n,e],this)}afterTickToLabelConversion(){U(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){U(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let e=this.options,t=e.ticks,n=Qu(this.ticks.length,e.ticks.maxTicksLimit),r=t.minRotation||0,i=t.maxRotation,a=r,o,s,c;if(!this._isVisible()||!t.display||r>=i||n<=1||!this.isHorizontal()){this.labelRotation=r;return}let l=this._getLabelSizes(),u=l.widest.width,d=l.highest.height,f=Ko(this.chart.width-u,0,this.maxWidth);o=e.offset?this.maxWidth/n:f/(n-1),u+6>o&&(o=f/(n-(e.offset?.5:1)),s=this.maxHeight-nd(e.grid)-t.padding-rd(e.title,this.chart.options.font),c=Math.sqrt(u*u+d*d),a=zo(Math.min(Math.asin(Ko((l.highest.height+6)/o,-1,1)),Math.asin(Ko(s/c,-1,1))-Math.asin(Ko(d/c,-1,1)))),a=Math.max(r,Math.min(i,a))),this.labelRotation=a}afterCalculateLabelRotation(){U(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){U(this.options.beforeFit,[this])}fit(){let e={width:0,height:0},{chart:t,options:{ticks:n,title:r,grid:i}}=this,a=this._isVisible(),o=this.isHorizontal();if(a){let a=rd(r,t.options.font);if(o?(e.width=this.maxWidth,e.height=nd(i)+a):(e.height=this.maxHeight,e.width=nd(i)+a),n.display&&this.ticks.length){let{first:t,last:r,widest:i,highest:a}=this._getLabelSizes(),s=n.padding*2,c=Ro(this.labelRotation),l=Math.cos(c),u=Math.sin(c);if(o){let t=n.mirror?0:u*i.width+l*a.height;e.height=Math.min(this.maxHeight,e.height+t+s)}else{let t=n.mirror?0:l*i.width+u*a.height;e.width=Math.min(this.maxWidth,e.width+t+s)}this._calculatePadding(t,r,u,l)}}this._handleMargins(),o?(this.width=this._length=t.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=t.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,t,n,r){let{ticks:{align:i,padding:a},position:o}=this.options,s=this.labelRotation!==0,c=o!==`top`&&this.axis===`x`;if(this.isHorizontal()){let o=this.getPixelForTick(0)-this.left,l=this.right-this.getPixelForTick(this.ticks.length-1),u=0,d=0;s?c?(u=r*e.width,d=n*t.height):(u=n*e.height,d=r*t.width):i===`start`?d=t.width:i===`end`?u=e.width:i!==`inner`&&(u=e.width/2,d=t.width/2),this.paddingLeft=Math.max((u-o+a)*this.width/(this.width-o),0),this.paddingRight=Math.max((d-l+a)*this.width/(this.width-l),0)}else{let n=t.height/2,r=e.height/2;i===`start`?(n=0,r=e.height):i===`end`&&(n=t.height,r=0),this.paddingTop=n+a,this.paddingBottom=r+a}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){U(this.options.afterFit,[this])}isHorizontal(){let{axis:e,position:t}=this.options;return t===`top`||t===`bottom`||e===`x`}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let t,n;for(t=0,n=e.length;t<n;t++)z(e[t].label)&&(e.splice(t,1),n--,t--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){let t=this.options.ticks.sampleSize,n=this.ticks;t<n.length&&(n=$u(n,t)),this._labelSizes=e=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,t,n){let{ctx:r,_longestTextCache:i}=this,a=[],o=[],s=Math.floor(t/Qu(t,n)),c=0,l=0,u,d,f,p,m,h,g,_,v,y,b;for(u=0;u<t;u+=s){if(p=e[u].label,m=this._resolveTickFontOptions(u),r.font=h=m.string,g=i[h]=i[h]||{data:{},gc:[]},_=m.lineHeight,v=y=0,!z(p)&&!B(p))v=Ps(r,g.data,g.gc,v,p),y=_;else if(B(p))for(d=0,f=p.length;d<f;++d)b=p[d],!z(b)&&!B(b)&&(v=Ps(r,g.data,g.gc,v,b),y+=_);a.push(v),o.push(y),c=Math.max(v,c),l=Math.max(y,l)}td(i,t);let x=a.indexOf(c),S=o.indexOf(l),C=e=>({width:a[e]||0,height:o[e]||0});return{first:C(0),last:C(t-1),widest:C(x),highest:C(S),widths:a,heights:o}}getLabelForValue(e){return e}getPixelForValue(e,t){return NaN}getValueForPixel(e){}getPixelForTick(e){let t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);let t=this._startPixel+e*this._length;return qo(this._alignToPixels?Is(this.chart,t,0):t)}getDecimalForPixel(e){let t=(e-this._startPixel)/this._length;return this._reversePixels?1-t:t}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:e,max:t}=this;return e<0&&t<0?t:e>0&&t>0?e:0}getContext(e){let t=this.ticks||[];if(e>=0&&e<t.length){let n=t[e];return n.$context||=ad(this.getContext(),e,n)}return this.$context||=id(this.chart.getContext(),this)}_tickSize(){let e=this.options.ticks,t=Ro(this.labelRotation),n=Math.abs(Math.cos(t)),r=Math.abs(Math.sin(t)),i=this._getLabelSizes(),a=e.autoSkipPadding||0,o=i?i.widest.width+a:0,s=i?i.highest.height+a:0;return this.isHorizontal()?s*n>o*r?o/n:s/r:s*r<o*n?s/n:o/r}_isVisible(){let e=this.options.display;return e===`auto`?this.getMatchingVisibleMetas().length>0:!!e}_computeGridLineItems(e){let t=this.axis,n=this.chart,r=this.options,{grid:i,position:a,border:o}=r,s=i.offset,c=this.isHorizontal(),l=this.ticks.length+ +!!s,u=nd(i),d=[],f=o.setContext(this.getContext()),p=f.display?f.width:0,m=p/2,h=function(e){return Is(n,e,p)},g,_,v,y,b,x,S,C,w,T,E,ee;if(a===`top`)g=h(this.bottom),x=this.bottom-u,C=g-m,T=h(e.top)+m,ee=e.bottom;else if(a===`bottom`)g=h(this.top),T=e.top,ee=h(e.bottom)-m,x=g+m,C=this.top+u;else if(a===`left`)g=h(this.right),b=this.right-u,S=g-m,w=h(e.left)+m,E=e.right;else if(a===`right`)g=h(this.left),w=e.left,E=h(e.right)-m,b=g+m,S=this.left+u;else if(t===`x`){if(a===`center`)g=h((e.top+e.bottom)/2+.5);else if(V(a)){let e=Object.keys(a)[0],t=a[e];g=h(this.chart.scales[e].getPixelForValue(t))}T=e.top,ee=e.bottom,x=g+m,C=x+u}else if(t===`y`){if(a===`center`)g=h((e.left+e.right)/2);else if(V(a)){let e=Object.keys(a)[0],t=a[e];g=h(this.chart.scales[e].getPixelForValue(t))}b=g-m,S=b-u,w=e.left,E=e.right}let te=H(r.ticks.maxTicksLimit,l),D=Math.max(1,Math.ceil(l/te));for(_=0;_<l;_+=D){let e=this.getContext(_),t=i.setContext(e),r=o.setContext(e),a=t.lineWidth,l=t.color,u=r.dash||[],f=r.dashOffset,p=t.tickWidth,m=t.tickColor,h=t.tickBorderDash||[],g=t.tickBorderDashOffset;v=ed(this,_,s),v!==void 0&&(y=Is(n,v,a),c?b=S=w=E=y:x=C=T=ee=y,d.push({tx1:b,ty1:x,tx2:S,ty2:C,x1:w,y1:T,x2:E,y2:ee,width:a,color:l,borderDash:u,borderDashOffset:f,tickWidth:p,tickColor:m,tickBorderDash:h,tickBorderDashOffset:g}))}return this._ticksLength=l,this._borderValue=g,d}_computeLabelItems(e){let t=this.axis,n=this.options,{position:r,ticks:i}=n,a=this.isHorizontal(),o=this.ticks,{align:s,crossAlign:c,padding:l,mirror:u}=i,d=nd(n.grid),f=d+l,p=u?-l:f,m=-Ro(this.labelRotation),h=[],g,_,v,y,b,x,S,C,w,T,E,ee,te=`middle`;if(r===`top`)x=this.bottom-p,S=this._getXAxisLabelAlignment();else if(r===`bottom`)x=this.top+p,S=this._getXAxisLabelAlignment();else if(r===`left`){let e=this._getYAxisLabelAlignment(d);S=e.textAlign,b=e.x}else if(r===`right`){let e=this._getYAxisLabelAlignment(d);S=e.textAlign,b=e.x}else if(t===`x`){if(r===`center`)x=(e.top+e.bottom)/2+f;else if(V(r)){let e=Object.keys(r)[0],t=r[e];x=this.chart.scales[e].getPixelForValue(t)+f}S=this._getXAxisLabelAlignment()}else if(t===`y`){if(r===`center`)b=(e.left+e.right)/2-f;else if(V(r)){let e=Object.keys(r)[0],t=r[e];b=this.chart.scales[e].getPixelForValue(t)}S=this._getYAxisLabelAlignment(d).textAlign}t===`y`&&(s===`start`?te=`top`:s===`end`&&(te=`bottom`));let D=this._getLabelSizes();for(g=0,_=o.length;g<_;++g){v=o[g],y=v.label;let e=i.setContext(this.getContext(g));C=this.getPixelForTick(g)+i.labelOffset,w=this._resolveTickFontOptions(g),T=w.lineHeight,E=B(y)?y.length:1;let t=E/2,n=e.color,s=e.textStrokeColor,l=e.textStrokeWidth,d=S;a?(b=C,S===`inner`&&(d=g===_-1?this.options.reverse?`left`:`right`:g===0?this.options.reverse?`right`:`left`:`center`),ee=r===`top`?c===`near`||m!==0?-E*T+T/2:c===`center`?-D.highest.height/2-t*T+T:-D.highest.height+T/2:c===`near`||m!==0?T/2:c===`center`?D.highest.height/2-t*T:D.highest.height-E*T,u&&(ee*=-1),m!==0&&!e.showLabelBackdrop&&(b+=T/2*Math.sin(m))):(x=C,ee=(1-E)*T/2);let f;if(e.showLabelBackdrop){let t=rc(e.backdropPadding),n=D.heights[g],r=D.widths[g],i=ee-t.top,a=0-t.left;switch(te){case`middle`:i-=n/2;break;case`bottom`:i-=n}switch(S){case`center`:a-=r/2;break;case`right`:a-=r;break;case`inner`:g===_-1?a-=r:g>0&&(a-=r/2)}f={left:a,top:i,width:r+t.width,height:n+t.height,color:e.backdropColor}}h.push({label:y,font:w,textOffset:ee,options:{rotation:m,color:n,strokeColor:s,strokeWidth:l,textAlign:d,textBaseline:te,translation:[b,x],backdrop:f}})}return h}_getXAxisLabelAlignment(){let{position:e,ticks:t}=this.options;if(-Ro(this.labelRotation))return e===`top`?`left`:`right`;let n=`center`;return t.align===`start`?n=`left`:t.align===`end`?n=`right`:t.align===`inner`&&(n=`inner`),n}_getYAxisLabelAlignment(e){let{position:t,ticks:{crossAlign:n,mirror:r,padding:i}}=this.options,a=this._getLabelSizes(),o=e+i,s=a.widest.width,c,l;return t===`left`?r?(l=this.right+i,n===`near`?c=`left`:n===`center`?(c=`center`,l+=s/2):(c=`right`,l+=s)):(l=this.right-o,n===`near`?c=`right`:n===`center`?(c=`center`,l-=s/2):(c=`left`,l=this.left)):t===`right`?r?(l=this.left+i,n===`near`?c=`right`:n===`center`?(c=`center`,l-=s/2):(c=`left`,l-=s)):(l=this.left+o,n===`near`?c=`left`:n===`center`?(c=`center`,l+=s/2):(c=`right`,l=this.right)):c=`right`,{textAlign:c,x:l}}_computeLabelArea(){if(this.options.ticks.mirror)return;let e=this.chart,t=this.options.position;if(t===`left`||t===`right`)return{top:0,left:this.left,bottom:e.height,right:this.right};if(t===`top`||t===`bottom`)return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){let{ctx:e,options:{backgroundColor:t},left:n,top:r,width:i,height:a}=this;t&&(e.save(),e.fillStyle=t,e.fillRect(n,r,i,a),e.restore())}getLineWidthForValue(e){let t=this.options.grid;if(!this._isVisible()||!t.display)return 0;let n=this.ticks.findIndex(t=>t.value===e);return n>=0?t.setContext(this.getContext(n)).lineWidth:0}drawGrid(e){let t=this.options.grid,n=this.ctx,r=this._gridLineItems||=this._computeGridLineItems(e),i,a,o=(e,t,r)=>{!r.width||!r.color||(n.save(),n.lineWidth=r.width,n.strokeStyle=r.color,n.setLineDash(r.borderDash||[]),n.lineDashOffset=r.borderDashOffset,n.beginPath(),n.moveTo(e.x,e.y),n.lineTo(t.x,t.y),n.stroke(),n.restore())};if(t.display)for(i=0,a=r.length;i<a;++i){let e=r[i];t.drawOnChartArea&&o({x:e.x1,y:e.y1},{x:e.x2,y:e.y2},e),t.drawTicks&&o({x:e.tx1,y:e.ty1},{x:e.tx2,y:e.ty2},{color:e.tickColor,width:e.tickWidth,borderDash:e.tickBorderDash,borderDashOffset:e.tickBorderDashOffset})}}drawBorder(){let{chart:e,ctx:t,options:{border:n,grid:r}}=this,i=n.setContext(this.getContext()),a=n.display?i.width:0;if(!a)return;let o=r.setContext(this.getContext(0)).lineWidth,s=this._borderValue,c,l,u,d;this.isHorizontal()?(c=Is(e,this.left,a)-a/2,l=Is(e,this.right,o)+o/2,u=d=s):(u=Is(e,this.top,a)-a/2,d=Is(e,this.bottom,o)+o/2,c=l=s),t.save(),t.lineWidth=i.width,t.strokeStyle=i.color,t.beginPath(),t.moveTo(c,u),t.lineTo(l,d),t.stroke(),t.restore()}drawLabels(e){if(!this.options.ticks.display)return;let t=this.ctx,n=this._computeLabelArea();n&&Vs(t,n);let r=this.getLabelItems(e);for(let e of r){let n=e.options,r=e.font,i=e.label,a=e.textOffset;Js(t,i,0,a,r,n)}n&&Hs(t)}drawTitle(){let{ctx:e,options:{position:t,title:n,reverse:r}}=this;if(!n.display)return;let i=ic(n.font),a=rc(n.padding),o=n.align,s=i.lineHeight/2;t===`bottom`||t===`center`||V(t)?(s+=a.bottom,B(n.text)&&(s+=i.lineHeight*(n.text.length-1))):s+=a.top;let{titleX:c,titleY:l,maxWidth:u,rotation:d}=sd(this,s,t,o);Js(e,n.text,0,0,i,{color:n.color,maxWidth:u,rotation:d,textAlign:od(o,t,r),textBaseline:`middle`,translation:[c,l]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){let t=this.options,n=t.ticks&&t.ticks.z||0,r=H(t.grid&&t.grid.z,-1),i=H(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==e.prototype.draw?[{z:n,draw:e=>{this.draw(e)}}]:[{z:r,draw:e=>{this.drawBackground(),this.drawGrid(e),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:n,draw:e=>{this.drawLabels(e)}}]}getMatchingVisibleMetas(e){let t=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+`AxisID`,r=[],i,a;for(i=0,a=t.length;i<a;++i){let a=t[i];a[n]===this.id&&(!e||a.type===e)&&r.push(a)}return r}_resolveTickFontOptions(e){return ic(this.options.ticks.setContext(this.getContext(e)).font)}_maxDigits(){let e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}},ld=class{constructor(e,t,n){this.type=e,this.scope=t,this.override=n,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){let t=Object.getPrototypeOf(e),n;fd(t)&&(n=this.register(t));let r=this.items,i=e.id,a=this.scope+`.`+i;if(!i)throw Error(`class does not have id: `+e);return i in r?a:(r[i]=e,ud(e,a,n),this.override&&Ms.override(e.id,e.overrides),a)}get(e){return this.items[e]}unregister(e){let t=this.items,n=e.id,r=this.scope;n in t&&delete t[n],r&&n in Ms[r]&&(delete Ms[r][n],this.override&&delete Os[n])}};function ud(e,t,n){let r=co(Object.create(null),[n?Ms.get(n):{},Ms.get(t),e.defaults]);Ms.set(t,r),e.defaultRoutes&&dd(t,e.defaultRoutes),e.descriptors&&Ms.describe(t,e.descriptors)}function dd(e,t){Object.keys(t).forEach(n=>{let r=n.split(`.`),i=r.pop(),a=[e].concat(r).join(`.`),o=t[n].split(`.`),s=o.pop(),c=o.join(`.`);Ms.route(a,i,c,s)})}function fd(e){return`id`in e&&`defaults`in e}var pd=new class{constructor(){this.controllers=new ld(Wl,`datasets`,!0),this.elements=new ld(Uu,`elements`),this.plugins=new ld(Object,`plugins`),this.scales=new ld(cd,`scales`),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each(`register`,e)}remove(...e){this._each(`unregister`,e)}addControllers(...e){this._each(`register`,e,this.controllers)}addElements(...e){this._each(`register`,e,this.elements)}addPlugins(...e){this._each(`register`,e,this.plugins)}addScales(...e){this._each(`register`,e,this.scales)}getController(e){return this._get(e,this.controllers,`controller`)}getElement(e){return this._get(e,this.elements,`element`)}getPlugin(e){return this._get(e,this.plugins,`plugin`)}getScale(e){return this._get(e,this.scales,`scale`)}removeControllers(...e){this._each(`unregister`,e,this.controllers)}removeElements(...e){this._each(`unregister`,e,this.elements)}removePlugins(...e){this._each(`unregister`,e,this.plugins)}removeScales(...e){this._each(`unregister`,e,this.scales)}_each(e,t,n){[...t].forEach(t=>{let r=n||this._getRegistryForType(t);n||r.isForType(t)||r===this.plugins&&t.id?this._exec(e,r,t):W(t,t=>{let r=n||this._getRegistryForType(t);this._exec(e,r,t)})})}_exec(e,t,n){let r=go(e);U(n[`before`+r],[],n),t[e](n),U(n[`after`+r],[],n)}_getRegistryForType(e){for(let t=0;t<this._typedRegistries.length;t++){let n=this._typedRegistries[t];if(n.isForType(e))return n}return this.plugins}_get(e,t,n){let r=t.get(e);if(r===void 0)throw Error(`"`+e+`" is not a registered `+n+`.`);return r}},md=class{constructor(){this._init=void 0}notify(e,t,n,r){if(t===`beforeInit`&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,`install`)),this._init===void 0)return;let i=r?this._descriptors(e).filter(r):this._descriptors(e),a=this._notify(i,e,t,n);return t===`afterDestroy`&&(this._notify(i,e,`stop`),this._notify(this._init,e,`uninstall`),this._init=void 0),a}_notify(e,t,n,r){r||={};for(let i of e){let e=i.plugin,a=e[n];if(U(a,[t,r,i.options],e)===!1&&r.cancelable)return!1}return!0}invalidate(){z(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;let t=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),t}_createDescriptors(e,t){let n=e&&e.config,r=H(n.options&&n.options.plugins,{}),i=hd(n);return r===!1&&!t?[]:_d(e,i,r,t)}_notifyStateChanges(e){let t=this._oldCache||[],n=this._cache,r=(e,t)=>e.filter(e=>!t.some(t=>e.plugin.id===t.plugin.id));this._notify(r(t,n),e,`stop`),this._notify(r(n,t),e,`start`)}};function hd(e){let t={},n=[],r=Object.keys(pd.plugins.items);for(let e=0;e<r.length;e++)n.push(pd.getPlugin(r[e]));let i=e.plugins||[];for(let e=0;e<i.length;e++){let r=i[e];n.indexOf(r)===-1&&(n.push(r),t[r.id]=!0)}return{plugins:n,localIds:t}}function gd(e,t){return!t&&e===!1?null:e===!0?{}:e}function _d(e,{plugins:t,localIds:n},r,i){let a=[],o=e.getContext();for(let s of t){let t=s.id,c=gd(r[t],i);c!==null&&a.push({plugin:s,options:vd(e.config,{plugin:s,local:n[t]},c,o)})}return a}function vd(e,{plugin:t,local:n},r,i){let a=e.pluginScopeKeys(t),o=e.getOptionScopes(r,a);return n&&t.defaults&&o.push(t.defaults),e.createResolver(o,i,[``],{scriptable:!1,indexable:!1,allKeys:!0})}function yd(e,t){let n=Ms.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||`x`}function Q(e,t){let n=e;return e===`_index_`?n=t:e===`_value_`&&(n=t===`x`?`y`:`x`),n}function bd(e,t){return e===t?`_index_`:`_value_`}function xd(e){if(e===`x`||e===`y`||e===`r`)return e}function Sd(e){if(e===`top`||e===`bottom`)return`x`;if(e===`left`||e===`right`)return`y`}function Cd(e,...t){if(xd(e))return e;for(let n of t){let t=n.axis||Sd(n.position)||e.length>1&&xd(e[0].toLowerCase());if(t)return t}throw Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function wd(e,t,n){if(n[t+`AxisID`]===e)return{axis:t}}function Td(e,t){if(t.data&&t.data.datasets){let n=t.data.datasets.filter(t=>t.xAxisID===e||t.yAxisID===e);if(n.length)return wd(e,`x`,n[0])||wd(e,`y`,n[0])}return{}}function Ed(e,t){let n=Os[e.type]||{scales:{}},r=t.scales||{},i=yd(e.type,t),a=Object.create(null);return Object.keys(r).forEach(t=>{let o=r[t];if(!V(o))return console.error(`Invalid scale configuration for scale: ${t}`);if(o._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${t}`);let s=Cd(t,o,Td(t,e),Ms.scales[o.type]),c=bd(s,i),l=n.scales||{};a[t]=lo(Object.create(null),[{axis:s},o,l[s],l[c]])}),e.data.datasets.forEach(n=>{let i=n.type||e.type,o=n.indexAxis||yd(i,t),s=(Os[i]||{}).scales||{};Object.keys(s).forEach(e=>{let t=Q(e,o),i=n[t+`AxisID`]||t;a[i]=a[i]||Object.create(null),lo(a[i],[{axis:t},r[i],s[e]])})}),Object.keys(a).forEach(e=>{let t=a[e];lo(t,[Ms.scales[t.type],Ms.scale])}),a}function Dd(e){let t=e.options||={};t.plugins=H(t.plugins,{}),t.scales=Ed(e,t)}function Od(e){return e||={},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function kd(e){return e||={},e.data=Od(e.data),Dd(e),e}var Ad=new Map,jd=new Set;function Md(e,t){let n=Ad.get(e);return n||(n=t(),Ad.set(e,n),jd.add(n)),n}var $=(e,t,n)=>{let r=ho(t,n);r!==void 0&&e.add(r)},Nd=class{constructor(e){this._config=kd(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=Od(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){let e=this._config;this.clearCache(),Dd(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return Md(e,()=>[[`datasets.${e}`,``]])}datasetAnimationScopeKeys(e,t){return Md(`${e}.transition.${t}`,()=>[[`datasets.${e}.transitions.${t}`,`transitions.${t}`],[`datasets.${e}`,``]])}datasetElementScopeKeys(e,t){return Md(`${e}-${t}`,()=>[[`datasets.${e}.elements.${t}`,`datasets.${e}`,`elements.${t}`,``]])}pluginScopeKeys(e){let t=e.id,n=this.type;return Md(`${n}-plugin-${t}`,()=>[[`plugins.${t}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,t){let n=this._scopeCache,r=n.get(e);return(!r||t)&&(r=new Map,n.set(e,r)),r}getOptionScopes(e,t,n){let{options:r,type:i}=this,a=this._cachedScopes(e,n),o=a.get(t);if(o)return o;let s=new Set;t.forEach(t=>{e&&(s.add(e),t.forEach(t=>$(s,e,t))),t.forEach(e=>$(s,r,e)),t.forEach(e=>$(s,Os[i]||{},e)),t.forEach(e=>$(s,Ms,e)),t.forEach(e=>$(s,ks,e))});let c=Array.from(s);return c.length===0&&c.push(Object.create(null)),jd.has(t)&&a.set(t,c),c}chartOptionScopes(){let{options:e,type:t}=this;return[e,Os[t]||{},Ms.datasets[t]||{},{type:t},Ms,ks]}resolveNamedOptions(e,t,n,r=[``]){let i={$shared:!0},{resolver:a,subPrefixes:o}=Pd(this._resolverCache,e,r),s=a;if(Id(a,t)){i.$shared=!1,n=vo(n)?n():n;let t=this.createResolver(e,n,o);s=lc(a,n,t)}for(let e of t)i[e]=s[e];return i}createResolver(e,t,n=[``],r){let{resolver:i}=Pd(this._resolverCache,e,n);return V(t)?lc(i,t,void 0,r):i}};function Pd(e,t,n){let r=e.get(t);r||(r=new Map,e.set(t,r));let i=n.join(),a=r.get(i);return a||(a={resolver:cc(t,n),subPrefixes:n.filter(e=>!e.toLowerCase().includes(`hover`))},r.set(i,a)),a}var Fd=e=>V(e)&&Object.getOwnPropertyNames(e).some(t=>vo(e[t]));function Id(e,t){let{isScriptable:n,isIndexable:r}=uc(e);for(let i of t){let t=n(i),a=r(i),o=(a||t)&&e[i];if(t&&(vo(o)||Fd(o))||a&&B(o))return!0}return!1}var Ld=`4.5.1`,Rd=[`top`,`bottom`,`left`,`right`,`chartArea`];function zd(e,t){return e===`top`||e===`bottom`||Rd.indexOf(e)===-1&&t===`x`}function Bd(e,t){return function(n,r){return n[e]===r[e]?n[t]-r[t]:n[e]-r[e]}}function Vd(e){let t=e.chart,n=t.options.animation;t.notifyPlugins(`afterRender`),U(n&&n.onComplete,[e],t)}function Hd(e){let t=e.chart,n=t.options.animation;U(n&&n.onProgress,[e],t)}function Ud(e){return Lc()&&typeof e==`string`?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}var Wd={},Gd=e=>{let t=Ud(e);return Object.values(Wd).filter(e=>e.canvas===t).pop()};function Kd(e,t,n){let r=Object.keys(e);for(let i of r){let r=+i;if(r>=t){let a=e[i];delete e[i],(n>0||r>t)&&(e[r+n]=a)}}}function qd(e,t,n,r){return!n||e.type===`mouseout`?null:r?t:e}var Jd=class{static defaults=Ms;static instances=Wd;static overrides=Os;static registry=pd;static version=Ld;static getChart=Gd;static register(...e){pd.add(...e),Yd()}static unregister(...e){pd.remove(...e),Yd()}constructor(e,t){let n=this.config=new Nd(t),r=Ud(e),i=Gd(r);if(i)throw Error(`Canvas is already in use. Chart with ID '`+i.id+`' must be destroyed before the canvas with ID '`+i.canvas.id+`' can be reused.`);let a=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||(Hu(r))),this.platform.updateConfig(n);let o=this.platform.acquireContext(r,a.aspectRatio),s=o&&o.canvas,c=s&&s.height,l=s&&s.width;if(this.id=no(),this.ctx=o,this.canvas=s,this.width=l,this.height=c,this._options=a,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new md,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=as(e=>this.update(e),a.resizeDelay||0),this._dataChanges=[],Wd[this.id]=this,!o||!s){console.error(`Failed to create chart: can't acquire context from the given item`);return}Sl.listen(this,`complete`,Vd),Sl.listen(this,`progress`,Hd),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:e,maintainAspectRatio:t},width:n,height:r,_aspectRatio:i}=this;return z(e)?t&&i?i:r?n/r:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return pd}_initialize(){return this.notifyPlugins(`beforeInit`),this.options.responsive?this.resize():Xc(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins(`afterInit`),this}clear(){return Ls(this.canvas,this.ctx),this}stop(){return Sl.stop(this),this}resize(e,t){Sl.running(this)?this._resizeBeforeDraw={width:e,height:t}:this._resize(e,t)}_resize(e,t){let n=this.options,r=this.canvas,i=n.maintainAspectRatio&&this.aspectRatio,a=this.platform.getMaximumSize(r,e,t,i),o=n.devicePixelRatio||this.platform.getDevicePixelRatio(),s=this.width?`resize`:`attach`;this.width=a.width,this.height=a.height,this._aspectRatio=this.aspectRatio,Xc(this,o,!0)&&(this.notifyPlugins(`resize`,{size:a}),U(n.onResize,[this,a],this),this.attached&&this._doResize(s)&&this.render())}ensureScalesHaveIDs(){W(this.options.scales||{},(e,t)=>{e.id=t})}buildOrUpdateScales(){let e=this.options,t=e.scales,n=this.scales,r=Object.keys(n).reduce((e,t)=>(e[t]=!1,e),{}),i=[];t&&(i=i.concat(Object.keys(t).map(e=>{let n=t[e],r=Cd(e,n),i=r===`r`,a=r===`x`;return{options:n,dposition:i?`chartArea`:a?`bottom`:`left`,dtype:i?`radialLinear`:a?`category`:`linear`}}))),W(i,t=>{let i=t.options,a=i.id,o=Cd(a,i),s=H(i.type,t.dtype);(i.position===void 0||zd(i.position,o)!==zd(t.dposition))&&(i.position=t.dposition),r[a]=!0;let c=null;a in n&&n[a].type===s?c=n[a]:(c=new(pd.getScale(s))({id:a,type:s,ctx:this.ctx,chart:this}),n[c.id]=c),c.init(i,e)}),W(r,(e,t)=>{e||delete n[t]}),W(n,e=>{yu.configure(this,e,e.options),yu.addBox(this,e)})}_updateMetasets(){let e=this._metasets,t=this.data.datasets.length,n=e.length;if(e.sort((e,t)=>e.index-t.index),n>t){for(let e=t;e<n;++e)this._destroyDatasetMeta(e);e.splice(t,n-t)}this._sortedMetasets=e.slice(0).sort(Bd(`order`,`index`))}_removeUnreferencedMetasets(){let{_metasets:e,data:{datasets:t}}=this;e.length>t.length&&delete this._stacks,e.forEach((e,n)=>{t.filter(t=>t===e._dataset).length===0&&this._destroyDatasetMeta(n)})}buildOrUpdateControllers(){let e=[],t=this.data.datasets,n,r;for(this._removeUnreferencedMetasets(),n=0,r=t.length;n<r;n++){let r=t[n],i=this.getDatasetMeta(n),a=r.type||this.config.type;if(i.type&&i.type!==a&&(this._destroyDatasetMeta(n),i=this.getDatasetMeta(n)),i.type=a,i.indexAxis=r.indexAxis||yd(a,this.options),i.order=r.order||0,i.index=n,i.label=``+r.label,i.visible=this.isDatasetVisible(n),i.controller)i.controller.updateIndex(n),i.controller.linkScales();else{let t=pd.getController(a),{datasetElementType:r,dataElementType:o}=Ms.datasets[a];Object.assign(t,{dataElementType:pd.getElement(o),datasetElementType:r&&pd.getElement(r)}),i.controller=new t(this,n),e.push(i.controller)}}return this._updateMetasets(),e}_resetElements(){W(this.data.datasets,(e,t)=>{this.getDatasetMeta(t).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins(`reset`)}update(e){let t=this.config;t.update();let n=this._options=t.createResolver(t.chartOptionScopes(),this.getContext()),r=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins(`beforeUpdate`,{mode:e,cancelable:!0})===!1)return;let i=this.buildOrUpdateControllers();this.notifyPlugins(`beforeElementsUpdate`);let a=0;for(let e=0,t=this.data.datasets.length;e<t;e++){let{controller:t}=this.getDatasetMeta(e),n=!r&&i.indexOf(t)===-1;t.buildOrUpdateElements(n),a=Math.max(+t.getMaxOverflow(),a)}a=this._minPadding=n.layout.autoPadding?a:0,this._updateLayout(a),r||W(i,e=>{e.reset()}),this._updateDatasets(e),this.notifyPlugins(`afterUpdate`,{mode:e}),this._layers.sort(Bd(`z`,`_idx`));let{_active:o,_lastEvent:s}=this;s?this._eventHandler(s,!0):o.length&&this._updateHoverStyles(o,o,!0),this.render()}_updateScales(){W(this.scales,e=>{yu.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let e=this.options;(!yo(new Set(Object.keys(this._listeners)),new Set(e.events))||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:e}=this,t=this._getUniformDataChanges()||[];for(let{method:n,start:r,count:i}of t)Kd(e,r,n===`_removeElements`?-i:i)}_getUniformDataChanges(){let e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];let t=this.data.datasets.length,n=t=>new Set(e.filter(e=>e[0]===t).map((e,t)=>t+`,`+e.splice(1).join(`,`))),r=n(0);for(let e=1;e<t;e++)if(!yo(r,n(e)))return;return Array.from(r).map(e=>e.split(`,`)).map(e=>({method:e[1],start:+e[2],count:+e[3]}))}_updateLayout(e){if(this.notifyPlugins(`beforeLayout`,{cancelable:!0})===!1)return;yu.update(this,this.width,this.height,e);let t=this.chartArea,n=t.width<=0||t.height<=0;this._layers=[],W(this.boxes,e=>{n&&e.position===`chartArea`||(e.configure&&e.configure(),this._layers.push(...e._layers()))},this),this._layers.forEach((e,t)=>{e._idx=t}),this.notifyPlugins(`afterLayout`)}_updateDatasets(e){if(this.notifyPlugins(`beforeDatasetsUpdate`,{mode:e,cancelable:!0})!==!1){for(let e=0,t=this.data.datasets.length;e<t;++e)this.getDatasetMeta(e).controller.configure();for(let t=0,n=this.data.datasets.length;t<n;++t)this._updateDataset(t,vo(e)?e({datasetIndex:t}):e);this.notifyPlugins(`afterDatasetsUpdate`,{mode:e})}}_updateDataset(e,t){let n=this.getDatasetMeta(e),r={meta:n,index:e,mode:t,cancelable:!0};this.notifyPlugins(`beforeDatasetUpdate`,r)!==!1&&(n.controller._update(t),r.cancelable=!1,this.notifyPlugins(`afterDatasetUpdate`,r))}render(){this.notifyPlugins(`beforeRender`,{cancelable:!0})!==!1&&(Sl.has(this)?this.attached&&!Sl.running(this)&&Sl.start(this):(this.draw(),Vd({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){let{width:e,height:t}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(e,t)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins(`beforeDraw`,{cancelable:!0})===!1)return;let t=this._layers;for(e=0;e<t.length&&t[e].z<=0;++e)t[e].draw(this.chartArea);for(this._drawDatasets();e<t.length;++e)t[e].draw(this.chartArea);this.notifyPlugins(`afterDraw`)}_getSortedDatasetMetas(e){let t=this._sortedMetasets,n=[],r,i;for(r=0,i=t.length;r<i;++r){let i=t[r];(!e||i.visible)&&n.push(i)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins(`beforeDatasetsDraw`,{cancelable:!0})===!1)return;let e=this.getSortedVisibleDatasetMetas();for(let t=e.length-1;t>=0;--t)this._drawDataset(e[t]);this.notifyPlugins(`afterDatasetsDraw`)}_drawDataset(e){let t=this.ctx,n={meta:e,index:e.index,cancelable:!0},r=xl(this,e);this.notifyPlugins(`beforeDatasetDraw`,n)!==!1&&(r&&Vs(t,r),e.controller.draw(),r&&Hs(t),n.cancelable=!1,this.notifyPlugins(`afterDatasetDraw`,n))}isPointInArea(e){return Bs(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,t,n,r){let i=nu.modes[t];return typeof i==`function`?i(this,e,n,r):[]}getDatasetMeta(e){let t=this.data.datasets[e],n=this._metasets,r=n.filter(e=>e&&e._dataset===t).pop();return r||(r={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:t&&t.order||0,index:e,_dataset:t,_parsed:[],_sorted:!1},n.push(r)),r}getContext(){return this.$context||=sc(null,{chart:this,type:`chart`})}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){let t=this.data.datasets[e];if(!t)return!1;let n=this.getDatasetMeta(e);return typeof n.hidden==`boolean`?!n.hidden:!t.hidden}setDatasetVisibility(e,t){let n=this.getDatasetMeta(e);n.hidden=!t}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,t,n){let r=n?`show`:`hide`,i=this.getDatasetMeta(e),a=i.controller._resolveAnimations(void 0,r);_o(t)?(i.data[t].hidden=!n,this.update()):(this.setDatasetVisibility(e,n),a.update(i,{visible:n}),this.update(t=>t.datasetIndex===e?r:void 0))}hide(e,t){this._updateVisibility(e,t,!1)}show(e,t){this._updateVisibility(e,t,!0)}_destroyDatasetMeta(e){let t=this._metasets[e];t&&t.controller&&t.controller._destroy(),delete this._metasets[e]}_stop(){let e,t;for(this.stop(),Sl.remove(this),e=0,t=this.data.datasets.length;e<t;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins(`beforeDestroy`);let{canvas:e,ctx:t}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),Ls(e,t),this.platform.releaseContext(t),this.canvas=null,this.ctx=null),delete Wd[this.id],this.notifyPlugins(`afterDestroy`)}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let e=this._listeners,t=this.platform,n=(n,r)=>{t.addEventListener(this,n,r),e[n]=r},r=(e,t,n)=>{e.offsetX=t,e.offsetY=n,this._eventHandler(e)};W(this.options.events,e=>n(e,r))}bindResponsiveEvents(){this._responsiveListeners||={};let e=this._responsiveListeners,t=this.platform,n=(n,r)=>{t.addEventListener(this,n,r),e[n]=r},r=(n,r)=>{e[n]&&(t.removeEventListener(this,n,r),delete e[n])},i=(e,t)=>{this.canvas&&this.resize(e,t)},a,o=()=>{r(`attach`,o),this.attached=!0,this.resize(),n(`resize`,i),n(`detach`,a)};a=()=>{this.attached=!1,r(`resize`,i),this._stop(),this._resize(0,0),n(`attach`,o)},t.isAttached(this.canvas)?o():a()}unbindEvents(){W(this._listeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._listeners={},W(this._responsiveListeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,t,n){let r=n?`set`:`remove`,i,a,o,s;for(t===`dataset`&&(i=this.getDatasetMeta(e[0].datasetIndex),i.controller[`_`+r+`DatasetHoverStyle`]()),o=0,s=e.length;o<s;++o){a=e[o];let t=a&&this.getDatasetMeta(a.datasetIndex).controller;t&&t[r+`HoverStyle`](a.element,a.datasetIndex,a.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){let t=this._active||[],n=e.map(({datasetIndex:e,index:t})=>{let n=this.getDatasetMeta(e);if(!n)throw Error(`No dataset found at index `+e);return{datasetIndex:e,element:n.data[t],index:t}});oo(n,t)||(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,t))}notifyPlugins(e,t,n){return this._plugins.notify(this,e,t,n)}isPluginEnabled(e){return this._plugins._cache.filter(t=>t.plugin.id===e).length===1}_updateHoverStyles(e,t,n){let r=this.options.hover,i=(e,t)=>e.filter(e=>!t.some(t=>e.datasetIndex===t.datasetIndex&&e.index===t.index)),a=i(t,e),o=n?e:i(e,t);a.length&&this.updateHoverStyle(a,r.mode,!1),o.length&&r.mode&&this.updateHoverStyle(o,r.mode,!0)}_eventHandler(e,t){let n={event:e,replay:t,cancelable:!0,inChartArea:this.isPointInArea(e)},r=t=>(t.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins(`beforeEvent`,n,r)===!1)return;let i=this._handleEvent(e,t,n.inChartArea);return n.cancelable=!1,this.notifyPlugins(`afterEvent`,n,r),(i||n.changed)&&this.render(),this}_handleEvent(e,t,n){let{_active:r=[],options:i}=this,a=t,o=this._getActiveElements(e,r,n,a),s=bo(e),c=qd(e,this._lastEvent,n,s);n&&(this._lastEvent=null,U(i.onHover,[e,o,this],this),s&&U(i.onClick,[e,o,this],this));let l=!oo(o,r);return(l||t)&&(this._active=o,this._updateHoverStyles(o,r,t)),this._lastEvent=c,l}_getActiveElements(e,t,n,r){if(e.type===`mouseout`)return[];if(!n)return t;let i=this.options.hover;return this.getElementsAtEventForMode(e,i.mode,i,r)}};function Yd(){return W(Jd.instances,e=>e._plugins.invalidate())}function Xd(e,t,n=t){e.lineCap=H(n.borderCapStyle,t.borderCapStyle),e.setLineDash(H(n.borderDash,t.borderDash)),e.lineDashOffset=H(n.borderDashOffset,t.borderDashOffset),e.lineJoin=H(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=H(n.borderWidth,t.borderWidth),e.strokeStyle=H(n.borderColor,t.borderColor)}function Zd(e,t,n){e.lineTo(n.x,n.y)}function Qd(e){return e.stepped?Us:e.tension||e.cubicInterpolationMode===`monotone`?Ws:Zd}function $d(e,t,n={}){let r=e.length,{start:i=0,end:a=r-1}=n,{start:o,end:s}=t,c=Math.max(i,o),l=Math.min(a,s),u=i<o&&a<o||i>s&&a>s;return{count:r,start:c,loop:t.loop,ilen:l<c&&!u?r+l-c:l-c}}function ef(e,t,n,r){let{points:i,options:a}=t,{count:o,start:s,loop:c,ilen:l}=$d(i,n,r),u=Qd(a),{move:d=!0,reverse:f}=r||{},p,m,h;for(p=0;p<=l;++p)m=i[(s+(f?l-p:p))%o],!m.skip&&(d?(e.moveTo(m.x,m.y),d=!1):u(e,h,m,f,a.stepped),h=m);return c&&(m=i[(s+(f?l:0))%o],u(e,h,m,f,a.stepped)),!!c}function tf(e,t,n,r){let i=t.points,{count:a,start:o,ilen:s}=$d(i,n,r),{move:c=!0,reverse:l}=r||{},u=0,d=0,f,p,m,h,g,_,v=e=>(o+(l?s-e:e))%a,y=()=>{h!==g&&(e.lineTo(u,g),e.lineTo(u,h),e.lineTo(u,_))};for(c&&(p=i[v(0)],e.moveTo(p.x,p.y)),f=0;f<=s;++f){if(p=i[v(f)],p.skip)continue;let t=p.x,n=p.y,r=t|0;r===m?(n<h?h=n:n>g&&(g=n),u=(d*u+t)/++d):(y(),e.lineTo(t,n),m=r,d=0,h=g=n),_=n}y()}function nf(e){let t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!==`monotone`&&!t.stepped&&!n?tf:ef}function rf(e){return e.stepped?el:e.tension||e.cubicInterpolationMode===`monotone`?tl:$c}function af(e,t,n,r){let i=t._path;i||(i=t._path=new Path2D,t.path(i,n,r)&&i.closePath()),Xd(e,t.options),e.stroke(i)}function of(e,t,n,r){let{segments:i,options:a}=t,o=nf(t);for(let s of i)Xd(e,a,s.style),e.beginPath(),o(e,t,s,{start:n,end:n+r-1})&&e.closePath(),e.stroke()}var sf=typeof Path2D==`function`;function cf(e,t,n,r){sf&&!t.options.segment?af(e,t,n,r):of(e,t,n,r)}var lf=class extends Uu{static id=`line`;static defaults={borderCapStyle:`butt`,borderDash:[],borderDashOffset:0,borderJoinStyle:`miter`,borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:`default`,fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:`backgroundColor`,borderColor:`borderColor`};static descriptors={_scriptable:!0,_indexable:e=>e!==`borderDash`&&e!==`fill`};constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,t){let n=this.options;if((n.tension||n.cubicInterpolationMode===`monotone`)&&!n.stepped&&!this._pointsUpdated){let r=n.spanGaps?this._loop:this._fullLoop;Ic(this._points,n,e,r,t),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||=ml(this,this.options.segment)}first(){let e=this.segments,t=this.points;return e.length&&t[e[0].start]}last(){let e=this.segments,t=this.points,n=e.length;return n&&t[e[n-1].end]}interpolate(e,t){let n=this.options,r=e[t],i=this.points,a=dl(this,{property:t,start:r,end:r});if(!a.length)return;let o=[],s=rf(n),c,l;for(c=0,l=a.length;c<l;++c){let{start:l,end:u}=a[c],d=i[l],f=i[u];if(d===f){o.push(d);continue}let p=s(d,f,Math.abs((r-d[t])/(f[t]-d[t])),n.stepped);p[t]=e[t],o.push(p)}return o.length===1?o[0]:o}pathSegment(e,t,n){return nf(this)(e,this,t,n)}path(e,t,n){let r=this.segments,i=nf(this),a=this._loop;t||=0,n||=this.points.length-t;for(let o of r)a&=i(e,this,o,{start:t,end:t+n-1});return!!a}draw(e,t,n,r){let i=this.options||{};(this.points||[]).length&&i.borderWidth&&(e.save(),cf(e,this,n,r),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}};function uf(e,t,n,r){let i=e.options,{[n]:a}=e.getProps([n],r);return Math.abs(t-a)<i.radius+i.hitRadius}var df=class extends Uu{static id=`point`;parsed;skip;stop;static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:`circle`,radius:3,rotation:0};static defaultRoutes={backgroundColor:`backgroundColor`,borderColor:`borderColor`};constructor(e){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,t,n){let r=this.options,{x:i,y:a}=this.getProps([`x`,`y`],n);return(e-i)**2+(t-a)**2<(r.hitRadius+r.radius)**2}inXRange(e,t){return uf(this,e,`x`,t)}inYRange(e,t){return uf(this,e,`y`,t)}getCenterPoint(e){let{x:t,y:n}=this.getProps([`x`,`y`],e);return{x:t,y:n}}size(e){e=e||this.options||{};let t=e.radius||0;t=Math.max(t,t&&e.hoverRadius||0);let n=t&&e.borderWidth||0;return(t+n)*2}draw(e,t){let n=this.options;this.skip||n.radius<.1||!Bs(this,t,this.size(n)/2)||(e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.fillStyle=n.backgroundColor,Rs(e,n,this.x,this.y))}getRange(){let e=this.options||{};return e.radius+e.hitRadius}},ff={average(e){if(!e.length)return!1;let t,n,r=new Set,i=0,a=0;for(t=0,n=e.length;t<n;++t){let n=e[t].element;if(n&&n.hasValue()){let e=n.tooltipPosition();r.add(e.x),i+=e.y,++a}}return a===0||r.size===0?!1:{x:[...r].reduce((e,t)=>e+t)/r.size,y:i/a}},nearest(e,t){if(!e.length)return!1;let n=t.x,r=t.y,i=1/0,a,o,s;for(a=0,o=e.length;a<o;++a){let n=e[a].element;if(n&&n.hasValue()){let e=Ho(t,n.getCenterPoint());e<i&&(i=e,s=n)}}if(s){let e=s.tooltipPosition();n=e.x,r=e.y}return{x:n,y:r}}};function pf(e,t){return t&&(B(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function mf(e){return(typeof e==`string`||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function hf(e,t){let{element:n,datasetIndex:r,index:i}=t,a=e.getDatasetMeta(r).controller,{label:o,value:s}=a.getLabelAndValue(i);return{chart:e,label:o,parsed:a.getParsed(i),raw:e.data.datasets[r].data[i],formattedValue:s,dataset:a.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function gf(e,t){let n=e.chart.ctx,{body:r,footer:i,title:a}=e,{boxWidth:o,boxHeight:s}=t,c=ic(t.bodyFont),l=ic(t.titleFont),u=ic(t.footerFont),d=a.length,f=i.length,p=r.length,m=rc(t.padding),h=m.height,g=0,_=r.reduce((e,t)=>e+t.before.length+t.lines.length+t.after.length,0);if(_+=e.beforeBody.length+e.afterBody.length,d&&(h+=d*l.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),_){let e=t.displayColors?Math.max(s,c.lineHeight):c.lineHeight;h+=p*e+(_-p)*c.lineHeight+(_-1)*t.bodySpacing}f&&(h+=t.footerMarginTop+f*u.lineHeight+(f-1)*t.footerSpacing);let v=0,y=function(e){g=Math.max(g,n.measureText(e).width+v)};return n.save(),n.font=l.string,W(e.title,y),n.font=c.string,W(e.beforeBody.concat(e.afterBody),y),v=t.displayColors?o+2+t.boxPadding:0,W(r,e=>{W(e.before,y),W(e.lines,y),W(e.after,y)}),v=0,n.font=u.string,W(e.footer,y),n.restore(),g+=m.width,{width:g,height:h}}function _f(e,t){let{y:n,height:r}=t;return n<r/2?`top`:n>e.height-r/2?`bottom`:`center`}function vf(e,t,n,r){let{x:i,width:a}=r,o=n.caretSize+n.caretPadding;if(e===`left`&&i+a+o>t.width||e===`right`&&i-a-o<0)return!0}function yf(e,t,n,r){let{x:i,width:a}=n,{width:o,chartArea:{left:s,right:c}}=e,l=`center`;return r===`center`?l=i<=(s+c)/2?`left`:`right`:i<=a/2?l=`left`:i>=o-a/2&&(l=`right`),vf(l,e,t,n)&&(l=`center`),l}function bf(e,t,n){let r=n.yAlign||t.yAlign||_f(e,n);return{xAlign:n.xAlign||t.xAlign||yf(e,t,n,r),yAlign:r}}function xf(e,t){let{x:n,width:r}=e;return t===`right`?n-=r:t===`center`&&(n-=r/2),n}function Sf(e,t,n){let{y:r,height:i}=e;return t===`top`?r+=n:r-=t===`bottom`?i+n:i/2,r}function Cf(e,t,n,r){let{caretSize:i,caretPadding:a,cornerRadius:o}=e,{xAlign:s,yAlign:c}=n,l=i+a,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:p}=nc(o),m=xf(t,s),h=Sf(t,c,l);return c===`center`?s===`left`?m+=l:s===`right`&&(m-=l):s===`left`?m-=Math.max(u,f)+i:s===`right`&&(m+=Math.max(d,p)+i),{x:Ko(m,0,r.width-t.width),y:Ko(h,0,r.height-t.height)}}function wf(e,t,n){let r=rc(n.padding);return t===`center`?e.x+e.width/2:t===`right`?e.x+e.width-r.right:e.x+r.left}function Tf(e){return pf([],mf(e))}function Ef(e,t,n){return sc(e,{tooltip:t,tooltipItems:n,type:`tooltip`})}function Df(e,t){let n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}var Of={beforeTitle:to,title(e){if(e.length>0){let t=e[0],n=t.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode===`dataset`)return t.dataset.label||``;if(t.label)return t.label;if(r>0&&t.dataIndex<r)return n[t.dataIndex]}return``},afterTitle:to,beforeBody:to,beforeLabel:to,label(e){if(this&&this.options&&this.options.mode===`dataset`)return e.label+`: `+e.formattedValue||e.formattedValue;let t=e.dataset.label||``;t&&(t+=`: `);let n=e.formattedValue;return z(n)||(t+=n),t},labelColor(e){let t=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:t.borderColor,backgroundColor:t.backgroundColor,borderWidth:t.borderWidth,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){let t=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:t.pointStyle,rotation:t.rotation}},afterLabel:to,afterBody:to,beforeFooter:to,footer:to,afterFooter:to};function kf(e,t,n,r){let i=e[t].call(n,r);return i===void 0?Of[t].call(n,r):i}var Af=class extends Uu{static positioners=ff;constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let e=this._cachedAnimations;if(e)return e;let t=this.chart,n=this.options.setContext(this.getContext()),r=n.enabled&&t.options.animation&&n.animations,i=new El(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(i)),i}getContext(){return this.$context||=Ef(this.chart.getContext(),this,this._tooltipItems)}getTitle(e,t){let{callbacks:n}=t,r=kf(n,`beforeTitle`,this,e),i=kf(n,`title`,this,e),a=kf(n,`afterTitle`,this,e),o=[];return o=pf(o,mf(r)),o=pf(o,mf(i)),o=pf(o,mf(a)),o}getBeforeBody(e,t){return Tf(kf(t.callbacks,`beforeBody`,this,e))}getBody(e,t){let{callbacks:n}=t,r=[];return W(e,e=>{let t={before:[],lines:[],after:[]},i=Df(n,e);pf(t.before,mf(kf(i,`beforeLabel`,this,e))),pf(t.lines,kf(i,`label`,this,e)),pf(t.after,mf(kf(i,`afterLabel`,this,e))),r.push(t)}),r}getAfterBody(e,t){return Tf(kf(t.callbacks,`afterBody`,this,e))}getFooter(e,t){let{callbacks:n}=t,r=kf(n,`beforeFooter`,this,e),i=kf(n,`footer`,this,e),a=kf(n,`afterFooter`,this,e),o=[];return o=pf(o,mf(r)),o=pf(o,mf(i)),o=pf(o,mf(a)),o}_createItems(e){let t=this._active,n=this.chart.data,r=[],i=[],a=[],o=[],s,c;for(s=0,c=t.length;s<c;++s)o.push(hf(this.chart,t[s]));return e.filter&&(o=o.filter((t,r,i)=>e.filter(t,r,i,n))),e.itemSort&&(o=o.sort((t,r)=>e.itemSort(t,r,n))),W(o,t=>{let n=Df(e.callbacks,t);r.push(kf(n,`labelColor`,this,t)),i.push(kf(n,`labelPointStyle`,this,t)),a.push(kf(n,`labelTextColor`,this,t))}),this.labelColors=r,this.labelPointStyles=i,this.labelTextColors=a,this.dataPoints=o,o}update(e,t){let n=this.options.setContext(this.getContext()),r=this._active,i,a=[];if(!r.length)this.opacity!==0&&(i={opacity:0});else{let e=ff[n.position].call(this,r,this._eventPosition);a=this._createItems(n),this.title=this.getTitle(a,n),this.beforeBody=this.getBeforeBody(a,n),this.body=this.getBody(a,n),this.afterBody=this.getAfterBody(a,n),this.footer=this.getFooter(a,n);let t=this._size=gf(this,n),o=Object.assign({},e,t),s=bf(this.chart,n,o),c=Cf(n,o,s,this.chart);this.xAlign=s.xAlign,this.yAlign=s.yAlign,i={opacity:1,x:c.x,y:c.y,width:t.width,height:t.height,caretX:e.x,caretY:e.y}}this._tooltipItems=a,this.$context=void 0,i&&this._resolveAnimations().update(this,i),e&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:t})}drawCaret(e,t,n,r){let i=this.getCaretPosition(e,n,r);t.lineTo(i.x1,i.y1),t.lineTo(i.x2,i.y2),t.lineTo(i.x3,i.y3)}getCaretPosition(e,t,n){let{xAlign:r,yAlign:i}=this,{caretSize:a,cornerRadius:o}=n,{topLeft:s,topRight:c,bottomLeft:l,bottomRight:u}=nc(o),{x:d,y:f}=e,{width:p,height:m}=t,h,g,_,v,y,b;return i===`center`?(y=f+m/2,r===`left`?(h=d,g=h-a,v=y+a,b=y-a):(h=d+p,g=h+a,v=y-a,b=y+a),_=h):(g=r===`left`?d+Math.max(s,l)+a:r===`right`?d+p-Math.max(c,u)-a:this.caretX,i===`top`?(v=f,y=v-a,h=g-a,_=g+a):(v=f+m,y=v+a,h=g+a,_=g-a),b=v),{x1:h,x2:g,x3:_,y1:v,y2:y,y3:b}}drawTitle(e,t,n){let r=this.title,i=r.length,a,o,s;if(i){let c=il(n.rtl,this.x,this.width);for(e.x=wf(this,n.titleAlign,n),t.textAlign=c.textAlign(n.titleAlign),t.textBaseline=`middle`,a=ic(n.titleFont),o=n.titleSpacing,t.fillStyle=n.titleColor,t.font=a.string,s=0;s<i;++s)t.fillText(r[s],c.x(e.x),e.y+a.lineHeight/2),e.y+=a.lineHeight+o,s+1===i&&(e.y+=n.titleMarginBottom-o)}}_drawColorBox(e,t,n,r,i){let a=this.labelColors[n],o=this.labelPointStyles[n],{boxHeight:s,boxWidth:c}=i,l=ic(i.bodyFont),u=wf(this,`left`,i),d=r.x(u),f=s<l.lineHeight?(l.lineHeight-s)/2:0,p=t.y+f;if(i.usePointStyle){let t={radius:Math.min(c,s)/2,pointStyle:o.pointStyle,rotation:o.rotation,borderWidth:1},n=r.leftForLtr(d,c)+c/2,l=p+s/2;e.strokeStyle=i.multiKeyBackground,e.fillStyle=i.multiKeyBackground,Rs(e,t,n,l),e.strokeStyle=a.borderColor,e.fillStyle=a.backgroundColor,Rs(e,t,n,l)}else{e.lineWidth=V(a.borderWidth)?Math.max(...Object.values(a.borderWidth)):a.borderWidth||1,e.strokeStyle=a.borderColor,e.setLineDash(a.borderDash||[]),e.lineDashOffset=a.borderDashOffset||0;let t=r.leftForLtr(d,c),n=r.leftForLtr(r.xPlus(d,1),c-2),o=nc(a.borderRadius);Object.values(o).some(e=>e!==0)?(e.beginPath(),e.fillStyle=i.multiKeyBackground,Ys(e,{x:t,y:p,w:c,h:s,radius:o}),e.fill(),e.stroke(),e.fillStyle=a.backgroundColor,e.beginPath(),Ys(e,{x:n,y:p+1,w:c-2,h:s-2,radius:o}),e.fill()):(e.fillStyle=i.multiKeyBackground,e.fillRect(t,p,c,s),e.strokeRect(t,p,c,s),e.fillStyle=a.backgroundColor,e.fillRect(n,p+1,c-2,s-2))}e.fillStyle=this.labelTextColors[n]}drawBody(e,t,n){let{body:r}=this,{bodySpacing:i,bodyAlign:a,displayColors:o,boxHeight:s,boxWidth:c,boxPadding:l}=n,u=ic(n.bodyFont),d=u.lineHeight,f=0,p=il(n.rtl,this.x,this.width),m=function(n){t.fillText(n,p.x(e.x+f),e.y+d/2),e.y+=d+i},h=p.textAlign(a),g,_,v,y,b,x,S;for(t.textAlign=a,t.textBaseline=`middle`,t.font=u.string,e.x=wf(this,h,n),t.fillStyle=n.bodyColor,W(this.beforeBody,m),f=o&&h!==`right`?a===`center`?c/2+l:c+2+l:0,y=0,x=r.length;y<x;++y){for(g=r[y],_=this.labelTextColors[y],t.fillStyle=_,W(g.before,m),v=g.lines,o&&v.length&&(this._drawColorBox(t,e,y,p,n),d=Math.max(u.lineHeight,s)),b=0,S=v.length;b<S;++b)m(v[b]),d=u.lineHeight;W(g.after,m)}f=0,d=u.lineHeight,W(this.afterBody,m),e.y-=i}drawFooter(e,t,n){let r=this.footer,i=r.length,a,o;if(i){let s=il(n.rtl,this.x,this.width);for(e.x=wf(this,n.footerAlign,n),e.y+=n.footerMarginTop,t.textAlign=s.textAlign(n.footerAlign),t.textBaseline=`middle`,a=ic(n.footerFont),t.fillStyle=n.footerColor,t.font=a.string,o=0;o<i;++o)t.fillText(r[o],s.x(e.x),e.y+a.lineHeight/2),e.y+=a.lineHeight+n.footerSpacing}}drawBackground(e,t,n,r){let{xAlign:i,yAlign:a}=this,{x:o,y:s}=e,{width:c,height:l}=n,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:p}=nc(r.cornerRadius);t.fillStyle=r.backgroundColor,t.strokeStyle=r.borderColor,t.lineWidth=r.borderWidth,t.beginPath(),t.moveTo(o+u,s),a===`top`&&this.drawCaret(e,t,n,r),t.lineTo(o+c-d,s),t.quadraticCurveTo(o+c,s,o+c,s+d),a===`center`&&i===`right`&&this.drawCaret(e,t,n,r),t.lineTo(o+c,s+l-p),t.quadraticCurveTo(o+c,s+l,o+c-p,s+l),a===`bottom`&&this.drawCaret(e,t,n,r),t.lineTo(o+f,s+l),t.quadraticCurveTo(o,s+l,o,s+l-f),a===`center`&&i===`left`&&this.drawCaret(e,t,n,r),t.lineTo(o,s+u),t.quadraticCurveTo(o,s,o+u,s),t.closePath(),t.fill(),r.borderWidth>0&&t.stroke()}_updateAnimationTarget(e){let t=this.chart,n=this.$animations,r=n&&n.x,i=n&&n.y;if(r||i){let n=ff[e.position].call(this,this._active,this._eventPosition);if(!n)return;let a=this._size=gf(this,e),o=Object.assign({},n,this._size),s=bf(t,e,o),c=Cf(e,o,s,t);(r._to!==c.x||i._to!==c.y)&&(this.xAlign=s.xAlign,this.yAlign=s.yAlign,this.width=a.width,this.height=a.height,this.caretX=n.x,this.caretY=n.y,this._resolveAnimations().update(this,c))}}_willRender(){return!!this.opacity}draw(e){let t=this.options.setContext(this.getContext()),n=this.opacity;if(!n)return;this._updateAnimationTarget(t);let r={width:this.width,height:this.height},i={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;let a=rc(t.padding),o=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;t.enabled&&o&&(e.save(),e.globalAlpha=n,this.drawBackground(i,e,r,t),al(e,t.textDirection),i.y+=a.top,this.drawTitle(i,e,t),this.drawBody(i,e,t),this.drawFooter(i,e,t),ol(e,t.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,t){let n=this._active,r=e.map(({datasetIndex:e,index:t})=>{let n=this.chart.getDatasetMeta(e);if(!n)throw Error(`Cannot find a dataset at index `+e);return{datasetIndex:e,element:n.data[t],index:t}}),i=!oo(n,r),a=this._positionChanged(r,t);(i||a)&&(this._active=r,this._eventPosition=t,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,t,n=!0){if(t&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let r=this.options,i=this._active||[],a=this._getActiveElements(e,i,t,n),o=this._positionChanged(a,e),s=t||!oo(a,i)||o;return s&&(this._active=a,(r.enabled||r.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,t))),s}_getActiveElements(e,t,n,r){let i=this.options;if(e.type===`mouseout`)return[];if(!r)return t.filter(e=>this.chart.data.datasets[e.datasetIndex]&&this.chart.getDatasetMeta(e.datasetIndex).controller.getParsed(e.index)!==void 0);let a=this.chart.getElementsAtEventForMode(e,i.mode,i,n);return i.reverse&&a.reverse(),a}_positionChanged(e,t){let{caretX:n,caretY:r,options:i}=this,a=ff[i.position].call(this,e,t);return a!==!1&&(n!==a.x||r!==a.y)}},jf={id:`tooltip`,_element:Af,positioners:ff,afterInit(e,t,n){n&&(e.tooltip=new Af({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){let t=e.tooltip;if(t&&t._willRender()){let n={tooltip:t};if(e.notifyPlugins(`beforeTooltipDraw`,{...n,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins(`afterTooltipDraw`,n)}},afterEvent(e,t){if(e.tooltip){let n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:`average`,backgroundColor:`rgba(0,0,0,0.8)`,titleColor:`#fff`,titleFont:{weight:`bold`},titleSpacing:2,titleMarginBottom:6,titleAlign:`left`,bodyColor:`#fff`,bodySpacing:2,bodyFont:{},bodyAlign:`left`,footerColor:`#fff`,footerSpacing:2,footerMarginTop:6,footerFont:{weight:`bold`},footerAlign:`left`,padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:`#fff`,displayColors:!0,boxPadding:0,borderColor:`rgba(0,0,0,0)`,borderWidth:0,animation:{duration:400,easing:`easeOutQuart`},animations:{numbers:{type:`number`,properties:[`x`,`y`,`width`,`height`,`caretX`,`caretY`]},opacity:{easing:`linear`,duration:200}},callbacks:Of},defaultRoutes:{bodyFont:`font`,footerFont:`font`,titleFont:`font`},descriptors:{_scriptable:e=>e!==`filter`&&e!==`itemSort`&&e!==`external`,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:`animation`}},additionalOptionScopes:[`interaction`]},Mf=(e,t,n,r)=>(typeof t==`string`?(n=e.push(t)-1,r.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function Nf(e,t,n,r){let i=e.indexOf(t);return i===-1?Mf(e,t,n,r):i===e.lastIndexOf(t)?i:n}var Pf=(e,t)=>e===null?null:Ko(Math.round(e),0,t);function Ff(e){let t=this.getLabels();return e>=0&&e<t.length?t[e]:e}var If=class extends cd{static id=`category`;static defaults={ticks:{callback:Ff}};constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){let t=this._addedLabels;if(t.length){let e=this.getLabels();for(let{index:n,label:r}of t)e[n]===r&&e.splice(n,1);this._addedLabels=[]}super.init(e)}parse(e,t){if(z(e))return null;let n=this.getLabels();return t=isFinite(t)&&n[t]===e?t:Nf(n,e,H(t,e),this._addedLabels),Pf(t,n.length-1)}determineDataLimits(){let{minDefined:e,maxDefined:t}=this.getUserBounds(),{min:n,max:r}=this.getMinMax(!0);this.options.bounds===`ticks`&&(e||(n=0),t||(r=this.getLabels().length-1)),this.min=n,this.max=r}buildTicks(){let e=this.min,t=this.max,n=this.options.offset,r=[],i=this.getLabels();i=e===0&&t===i.length-1?i:i.slice(e,t+1),this._valueRange=Math.max(i.length-+!n,1),this._startValue=this.min-(n?.5:0);for(let n=e;n<=t;n++)r.push({value:n});return r}getLabelForValue(e){return Ff.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!=`number`&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){let t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}};function Lf(e,t){let n=[],{bounds:r,step:i,min:a,max:o,precision:s,count:c,maxTicks:l,maxDigits:u,includeBounds:d}=e,f=i||1,p=l-1,{min:m,max:h}=t,g=!z(a),_=!z(o),v=!z(c),y=(h-m)/(u+1),b=Mo((h-m)/p/f)*f,x,S,C,w;if(b<1e-14&&!g&&!_)return[{value:m},{value:h}];w=Math.ceil(h/b)-Math.floor(m/b),w>p&&(b=Mo(w*b/p/f)*f),z(s)||(x=10**s,b=Math.ceil(b*x)/x),r===`ticks`?(S=Math.floor(m/b)*b,C=Math.ceil(h/b)*b):(S=m,C=h),g&&_&&i&&Io((o-a)/i,b/1e3)?(w=Math.round(Math.min((o-a)/b,l)),b=(o-a)/w,S=a,C=o):v?(S=g?a:S,C=_?o:C,w=c-1,b=(C-S)/w):(w=(C-S)/b,w=jo(w,Math.round(w),b/1e3)?Math.round(w):Math.ceil(w));let T=Math.max(Bo(b),Bo(S));x=10**(z(s)?T:s),S=Math.round(S*x)/x,C=Math.round(C*x)/x;let E=0;for(g&&(d&&S!==a?(n.push({value:a}),S<a&&E++,jo(Math.round((S+E*b)*x)/x,a,Rf(a,y,e))&&E++):S<a&&E++);E<w;++E){let e=Math.round((S+E*b)*x)/x;if(_&&e>o)break;n.push({value:e})}return _&&d&&C!==o?n.length&&jo(n[n.length-1].value,o,Rf(o,y,e))?n[n.length-1].value=o:n.push({value:o}):(!_||C===o)&&n.push({value:C}),n}function Rf(e,t,{horizontal:n,minRotation:r}){let i=Ro(r),a=(n?Math.sin(i):Math.cos(i))||.001,o=.75*t*(``+e).length;return Math.min(t/a,o)}var zf=class extends cd{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,t){return z(e)||(typeof e==`number`||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){let{beginAtZero:e}=this.options,{minDefined:t,maxDefined:n}=this.getUserBounds(),{min:r,max:i}=this,a=e=>r=t?r:e,o=e=>i=n?i:e;if(e){let e=Ao(r),t=Ao(i);e<0&&t<0?o(0):e>0&&t>0&&a(0)}if(r===i){let t=i===0?1:Math.abs(i*.05);o(i+t),e||a(r-t)}this.min=r,this.max=i}getTickLimit(){let{maxTicksLimit:e,stepSize:t}=this.options.ticks,n;return t?(n=Math.ceil(this.max/t)-Math.floor(this.min/t)+1,n>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${t} would result generating up to ${n} ticks. Limiting to 1000.`),n=1e3)):(n=this.computeTickLimit(),e||=11),e&&(n=Math.min(e,n)),n}computeTickLimit(){return 1/0}buildTicks(){let e=this.options,t=e.ticks,n=this.getTickLimit();n=Math.max(2,n);let r=Lf({maxTicks:n,bounds:e.bounds,min:e.min,max:e.max,precision:t.precision,step:t.stepSize,count:t.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:t.minRotation||0,includeBounds:t.includeBounds!==!1},this._range||this);return e.bounds===`ticks`&&Lo(r,this,`value`),e.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}configure(){let e=this.ticks,t=this.min,n=this.max;if(super.configure(),this.options.offset&&e.length){let r=(n-t)/Math.max(e.length-1,1)/2;t-=r,n+=r}this._startValue=t,this._endValue=n,this._valueRange=n-t}getLabelForValue(e){return Cs(e,this.chart.options.locale,this.options.ticks.format)}},Bf=class extends zf{static id=`linear`;static defaults={ticks:{callback:Es.formatters.numeric}};determineDataLimits(){let{min:e,max:t}=this.getMinMax(!0);this.min=ro(e)?e:0,this.max=ro(t)?t:1,this.handleTickRangeOptions()}computeTickLimit(){let e=this.isHorizontal(),t=e?this.width:this.height,n=Ro(this.options.ticks.minRotation),r=(e?Math.sin(n):Math.cos(n))||.001,i=this._resolveTickFontOptions(0);return Math.ceil(t/Math.min(40,i.lineHeight/r))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}},Vf=e=>Math.floor(ko(e)),Hf=(e,t)=>10**(Vf(e)+t);function Uf(e){return e/10**Vf(e)==1}function Wf(e,t,n){let r=10**n,i=Math.floor(e/r);return Math.ceil(t/r)-i}function Gf(e,t){let n=Vf(t-e);for(;Wf(e,t,n)>10;)n++;for(;Wf(e,t,n)<10;)n--;return Math.min(n,Vf(e))}function Kf(e,{min:t,max:n}){t=io(e.min,t);let r=[],i=Vf(t),a=Gf(t,n),o=a<0?10**Math.abs(a):1,s=10**a,c=i>a?10**i:0,l=Math.round((t-c)*o)/o,u=Math.floor((t-c)/s/10)*s*10,d=Math.floor((l-u)/10**a),f=io(e.min,Math.round((c+u+d*10**a)*o)/o);for(;f<n;)r.push({value:f,major:Uf(f),significand:d}),d>=10?d=d<15?15:20:d++,d>=20&&(a++,d=2,o=a>=0?1:o),f=Math.round((c+u+d*10**a)*o)/o;let p=io(e.max,f);return r.push({value:p,major:Uf(p),significand:d}),r}(class extends cd{static id=`logarithmic`;static defaults={ticks:{callback:Es.formatters.logarithmic,major:{enabled:!0}}};constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,t){let n=zf.prototype.parse.apply(this,[e,t]);if(n===0){this._zero=!0;return}return ro(n)&&n>0?n:null}determineDataLimits(){let{min:e,max:t}=this.getMinMax(!0);this.min=ro(e)?Math.max(0,e):null,this.max=ro(t)?Math.max(0,t):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!ro(this._userMin)&&(this.min=e===Hf(this.min,0)?Hf(this.min,-1):Hf(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:e,maxDefined:t}=this.getUserBounds(),n=this.min,r=this.max,i=t=>n=e?n:t,a=e=>r=t?r:e;n===r&&(n<=0?(i(1),a(10)):(i(Hf(n,-1)),a(Hf(r,1)))),n<=0&&i(Hf(r,-1)),r<=0&&a(Hf(n,1)),this.min=n,this.max=r}buildTicks(){let e=this.options,t=Kf({min:this._userMin,max:this._userMax},this);return e.bounds===`ticks`&&Lo(t,this,`value`),e.reverse?(t.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),t}getLabelForValue(e){return e===void 0?`0`:Cs(e,this.chart.options.locale,this.options.ticks.format)}configure(){let e=this.min;super.configure(),this._startValue=ko(e),this._valueRange=ko(this.max)-ko(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(ko(e)-this._startValue)/this._valueRange)}getValueForPixel(e){let t=this.getDecimalForPixel(e);return 10**(this._startValue+t*this._valueRange)}});function qf(e){let t=e.ticks;if(t.display&&e.display){let e=rc(t.backdropPadding);return H(t.font&&t.font.size,Ms.font.size)+e.height}return 0}function Jf(e,t,n){return n=B(n)?n:[n],{w:Fs(e,t.string,n),h:n.length*t.lineHeight}}function Yf(e,t,n,r,i){return e===r||e===i?{start:t-n/2,end:t+n/2}:e<r||e>i?{start:t-n,end:t}:{start:t,end:t+n}}function Xf(e){let t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},n=Object.assign({},t),r=[],i=[],a=e._pointLabels.length,o=e.options.pointLabels,s=o.centerPointLabels?xo/a:0;for(let c=0;c<a;c++){let a=o.setContext(e.getPointLabelContext(c));i[c]=a.padding;let l=e.getPointPosition(c,e.drawingArea+i[c],s),u=ic(a.font),d=Jf(e.ctx,u,e._pointLabels[c]);r[c]=d;let f=Wo(e.getIndexAngle(c)+s),p=Math.round(zo(f));Zf(n,t,f,Yf(p,l.x,d.w,0,180),Yf(p,l.y,d.h,90,270))}e.setCenterPoint(t.l-n.l,n.r-t.r,t.t-n.t,n.b-t.b),e._pointLabelItems=ep(e,r,i)}function Zf(e,t,n,r,i){let a=Math.abs(Math.sin(n)),o=Math.abs(Math.cos(n)),s=0,c=0;r.start<t.l?(s=(t.l-r.start)/a,e.l=Math.min(e.l,t.l-s)):r.end>t.r&&(s=(r.end-t.r)/a,e.r=Math.max(e.r,t.r+s)),i.start<t.t?(c=(t.t-i.start)/o,e.t=Math.min(e.t,t.t-c)):i.end>t.b&&(c=(i.end-t.b)/o,e.b=Math.max(e.b,t.b+c))}function Qf(e,t,n){let r=e.drawingArea,{extra:i,additionalAngle:a,padding:o,size:s}=n,c=e.getPointPosition(t,r+i+o,a),l=Math.round(zo(Wo(c.angle+Eo))),u=rp(c.y,s.h,l),d=tp(l),f=np(c.x,s.w,d);return{visible:!0,x:c.x,y:u,textAlign:d,left:f,top:u,right:f+s.w,bottom:u+s.h}}function $f(e,t){if(!t)return!0;let{left:n,top:r,right:i,bottom:a}=e;return!(Bs({x:n,y:r},t)||Bs({x:n,y:a},t)||Bs({x:i,y:r},t)||Bs({x:i,y:a},t))}function ep(e,t,n){let r=[],i=e._pointLabels.length,a=e.options,{centerPointLabels:o,display:s}=a.pointLabels,c={extra:qf(a)/2,additionalAngle:o?xo/i:0},l;for(let a=0;a<i;a++){c.padding=n[a],c.size=t[a];let i=Qf(e,a,c);r.push(i),s===`auto`&&(i.visible=$f(i,l),i.visible&&(l=i))}return r}function tp(e){return e===0||e===180?`center`:e<180?`left`:`right`}function np(e,t,n){return n===`right`?e-=t:n===`center`&&(e-=t/2),e}function rp(e,t,n){return n===90||n===270?e-=t/2:(n>270||n<90)&&(e-=t),e}function ip(e,t,n){let{left:r,top:i,right:a,bottom:o}=n,{backdropColor:s}=t;if(!z(s)){let n=nc(t.borderRadius),c=rc(t.backdropPadding);e.fillStyle=s;let l=r-c.left,u=i-c.top,d=a-r+c.width,f=o-i+c.height;Object.values(n).some(e=>e!==0)?(e.beginPath(),Ys(e,{x:l,y:u,w:d,h:f,radius:n}),e.fill()):e.fillRect(l,u,d,f)}}function ap(e,t){let{ctx:n,options:{pointLabels:r}}=e;for(let i=t-1;i>=0;i--){let t=e._pointLabelItems[i];if(!t.visible)continue;let a=r.setContext(e.getPointLabelContext(i));ip(n,a,t);let o=ic(a.font),{x:s,y:c,textAlign:l}=t;Js(n,e._pointLabels[i],s,c+o.lineHeight/2,o,{color:a.color,textAlign:l,textBaseline:`middle`})}}function op(e,t,n,r){let{ctx:i}=e;if(n)i.arc(e.xCenter,e.yCenter,t,0,So);else{let n=e.getPointPosition(0,t);i.moveTo(n.x,n.y);for(let a=1;a<r;a++)n=e.getPointPosition(a,t),i.lineTo(n.x,n.y)}}function sp(e,t,n,r,i){let a=e.ctx,o=t.circular,{color:s,lineWidth:c}=t;!o&&!r||!s||!c||n<0||(a.save(),a.strokeStyle=s,a.lineWidth=c,a.setLineDash(i.dash||[]),a.lineDashOffset=i.dashOffset,a.beginPath(),op(e,n,o,r),a.closePath(),a.stroke(),a.restore())}function cp(e,t,n){return sc(e,{label:n,index:t,type:`pointLabel`})}(class extends zf{static id=`radialLinear`;static defaults={display:!0,animate:!0,position:`chartArea`,angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Es.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":`borderColor`,"pointLabels.color":`color`,"ticks.color":`color`};static descriptors={angleLines:{_fallback:`grid`}};constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let e=this._padding=rc(qf(this.options)/2),t=this.width=this.maxWidth-e.width,n=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+t/2+e.left),this.yCenter=Math.floor(this.top+n/2+e.top),this.drawingArea=Math.floor(Math.min(t,n)/2)}determineDataLimits(){let{min:e,max:t}=this.getMinMax(!1);this.min=ro(e)&&!isNaN(e)?e:0,this.max=ro(t)&&!isNaN(t)?t:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/qf(this.options))}generateTickLabels(e){zf.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((e,t)=>{let n=U(this.options.pointLabels.callback,[e,t],this);return n||n===0?n:``}).filter((e,t)=>this.chart.getDataVisibility(t))}fit(){let e=this.options;e.display&&e.pointLabels.display?Xf(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,t,n,r){this.xCenter+=Math.floor((e-t)/2),this.yCenter+=Math.floor((n-r)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,t,n,r))}getIndexAngle(e){let t=So/(this._pointLabels.length||1),n=this.options.startAngle||0;return Wo(e*t+Ro(n))}getDistanceFromCenterForValue(e){if(z(e))return NaN;let t=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*t:(e-this.min)*t}getValueForDistanceFromCenter(e){if(z(e))return NaN;let t=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-t:this.min+t}getPointLabelContext(e){let t=this._pointLabels||[];if(e>=0&&e<t.length){let n=t[e];return cp(this.getContext(),e,n)}}getPointPosition(e,t,n=0){let r=this.getIndexAngle(e)-Eo+n;return{x:Math.cos(r)*t+this.xCenter,y:Math.sin(r)*t+this.yCenter,angle:r}}getPointPositionForValue(e,t){return this.getPointPosition(e,this.getDistanceFromCenterForValue(t))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){let{left:t,top:n,right:r,bottom:i}=this._pointLabelItems[e];return{left:t,top:n,right:r,bottom:i}}drawBackground(){let{backgroundColor:e,grid:{circular:t}}=this.options;if(e){let n=this.ctx;n.save(),n.beginPath(),op(this,this.getDistanceFromCenterForValue(this._endValue),t,this._pointLabels.length),n.closePath(),n.fillStyle=e,n.fill(),n.restore()}}drawGrid(){let e=this.ctx,t=this.options,{angleLines:n,grid:r,border:i}=t,a=this._pointLabels.length,o,s,c;if(t.pointLabels.display&&ap(this,a),r.display&&this.ticks.forEach((e,t)=>{if(t!==0||t===0&&this.min<0){s=this.getDistanceFromCenterForValue(e.value);let n=this.getContext(t),o=r.setContext(n),c=i.setContext(n);sp(this,o,s,a,c)}}),n.display){for(e.save(),o=a-1;o>=0;o--){let r=n.setContext(this.getPointLabelContext(o)),{color:i,lineWidth:a}=r;!a||!i||(e.lineWidth=a,e.strokeStyle=i,e.setLineDash(r.borderDash),e.lineDashOffset=r.borderDashOffset,s=this.getDistanceFromCenterForValue(t.reverse?this.min:this.max),c=this.getPointPosition(o,s),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(c.x,c.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){let e=this.ctx,t=this.options,n=t.ticks;if(!n.display)return;let r=this.getIndexAngle(0),i,a;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(r),e.textAlign=`center`,e.textBaseline=`middle`,this.ticks.forEach((r,o)=>{if(o===0&&this.min>=0&&!t.reverse)return;let s=n.setContext(this.getContext(o)),c=ic(s.font);if(i=this.getDistanceFromCenterForValue(this.ticks[o].value),s.showLabelBackdrop){e.font=c.string,a=e.measureText(r.label).width,e.fillStyle=s.backdropColor;let t=rc(s.backdropPadding);e.fillRect(-a/2-t.left,-i-c.size/2-t.top,a+t.width,c.size+t.height)}Js(e,r.label,0,-i,c,{color:s.color,strokeColor:s.textStrokeColor,strokeWidth:s.textStrokeWidth})}),e.restore()}drawTitle(){}});var lp={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},up=Object.keys(lp);function dp(e,t){return e-t}function fp(e,t){if(z(t))return null;let n=e._adapter,{parser:r,round:i,isoWeekday:a}=e._parseOpts,o=t;return typeof r==`function`&&(o=r(o)),ro(o)||(o=typeof r==`string`?n.parse(o,r):n.parse(o)),o===null?null:(i&&(o=i===`week`&&(Fo(a)||a===!0)?n.startOf(o,`isoWeek`,a):n.startOf(o,i)),+o)}function pp(e,t,n,r){let i=up.length;for(let a=up.indexOf(e);a<i-1;++a){let e=lp[up[a]],i=e.steps?e.steps:2**53-1;if(e.common&&Math.ceil((n-t)/(i*e.size))<=r)return up[a]}return up[i-1]}function mp(e,t,n,r,i){for(let a=up.length-1;a>=up.indexOf(n);a--){let n=up[a];if(lp[n].common&&e._adapter.diff(i,r,n)>=t-1)return n}return up[n?up.indexOf(n):0]}function hp(e){for(let t=up.indexOf(e)+1,n=up.length;t<n;++t)if(lp[up[t]].common)return up[t]}function gp(e,t,n){if(!n)e[t]=!0;else if(n.length){let{lo:r,hi:i}=Yo(n,t),a=n[r]>=t?n[r]:n[i];e[a]=!0}}function _p(e,t,n,r){let i=e._adapter,a=+i.startOf(t[0].value,r),o=t[t.length-1].value,s,c;for(s=a;s<=o;s=+i.add(s,1,r))c=n[s],c>=0&&(t[c].major=!0);return t}function vp(e,t,n){let r=[],i={},a=t.length,o,s;for(o=0;o<a;++o)s=t[o],i[s]=o,r.push({value:s,major:!1});return a===0||!n?r:_p(e,r,i,n)}var yp=class extends cd{static id=`time`;static defaults={bounds:`data`,adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:`millisecond`,displayFormats:{}},ticks:{source:`auto`,callback:!1,major:{enabled:!1}}};constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit=`day`,this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,t={}){let n=e.time||={},r=this._adapter=new ql._date(e.adapters.date);r.init(t),lo(n.displayFormats,r.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(e),this._normalized=t.normalized}parse(e,t){return e===void 0?null:fp(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let e=this.options,t=this._adapter,n=e.time.unit||`day`,{min:r,max:i,minDefined:a,maxDefined:o}=this.getUserBounds();function s(e){!a&&!isNaN(e.min)&&(r=Math.min(r,e.min)),!o&&!isNaN(e.max)&&(i=Math.max(i,e.max))}(!a||!o)&&(s(this._getLabelBounds()),(e.bounds!==`ticks`||e.ticks.source!==`labels`)&&s(this.getMinMax(!1))),r=ro(r)&&!isNaN(r)?r:+t.startOf(Date.now(),n),i=ro(i)&&!isNaN(i)?i:+t.endOf(Date.now(),n)+1,this.min=Math.min(r,i-1),this.max=Math.max(r+1,i)}_getLabelBounds(){let e=this.getLabelTimestamps(),t=1/0,n=-1/0;return e.length&&(t=e[0],n=e[e.length-1]),{min:t,max:n}}buildTicks(){let e=this.options,t=e.time,n=e.ticks,r=n.source===`labels`?this.getLabelTimestamps():this._generate();e.bounds===`ticks`&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);let i=this.min,a=this.max,o=Qo(r,i,a);return this._unit=t.unit||(n.autoSkip?pp(t.minUnit,this.min,this.max,this._getLabelCapacity(i)):mp(this,o.length,t.minUnit,this.min,this.max)),this._majorUnit=!n.major.enabled||this._unit===`year`?void 0:hp(this._unit),this.initOffsets(r),e.reverse&&o.reverse(),vp(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let t=0,n=0,r,i;this.options.offset&&e.length&&(r=this.getDecimalForValue(e[0]),t=e.length===1?1-r:(this.getDecimalForValue(e[1])-r)/2,i=this.getDecimalForValue(e[e.length-1]),n=e.length===1?i:(i-this.getDecimalForValue(e[e.length-2]))/2);let a=e.length<3?.5:.25;t=Ko(t,0,a),n=Ko(n,0,a),this._offsets={start:t,end:n,factor:1/(t+1+n)}}_generate(){let e=this._adapter,t=this.min,n=this.max,r=this.options,i=r.time,a=i.unit||pp(i.minUnit,t,n,this._getLabelCapacity(t)),o=H(r.ticks.stepSize,1),s=a===`week`&&i.isoWeekday,c=Fo(s)||s===!0,l={},u=t,d,f;if(c&&(u=+e.startOf(u,`isoWeek`,s)),u=+e.startOf(u,c?`day`:a),e.diff(n,t,a)>1e5*o)throw Error(t+` and `+n+` are too far apart with stepSize of `+o+` `+a);let p=r.ticks.source===`data`&&this.getDataTimestamps();for(d=u,f=0;d<n;d=+e.add(d,o,a),f++)gp(l,d,p);return(d===n||r.bounds===`ticks`||f===1)&&gp(l,d,p),Object.keys(l).sort(dp).map(e=>+e)}getLabelForValue(e){let t=this._adapter,n=this.options.time;return n.tooltipFormat?t.format(e,n.tooltipFormat):t.format(e,n.displayFormats.datetime)}format(e,t){let n=this.options.time.displayFormats,r=this._unit,i=t||n[r];return this._adapter.format(e,i)}_tickFormatFunction(e,t,n,r){let i=this.options,a=i.ticks.callback;if(a)return U(a,[e,t,n],this);let o=i.time.displayFormats,s=this._unit,c=this._majorUnit,l=s&&o[s],u=c&&o[c],d=n[t],f=c&&u&&d&&d.major;return this._adapter.format(e,r||(f?u:l))}generateTickLabels(e){let t,n,r;for(t=0,n=e.length;t<n;++t)r=e[t],r.label=this._tickFormatFunction(r.value,t,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){let t=this._offsets,n=this.getDecimalForValue(e);return this.getPixelForDecimal((t.start+n)*t.factor)}getValueForPixel(e){let t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return this.min+n*(this.max-this.min)}_getLabelSize(e){let t=this.options.ticks,n=this.ctx.measureText(e).width,r=Ro(this.isHorizontal()?t.maxRotation:t.minRotation),i=Math.cos(r),a=Math.sin(r),o=this._resolveTickFontOptions(0).size;return{w:n*i+o*a,h:n*a+o*i}}_getLabelCapacity(e){let t=this.options.time,n=t.displayFormats,r=n[t.unit]||n.millisecond,i=this._tickFormatFunction(e,0,vp(this,[e],this._majorUnit),r),a=this._getLabelSize(i),o=Math.floor(this.isHorizontal()?this.width/a.w:this.height/a.h)-1;return o>0?o:1}getDataTimestamps(){let e=this._cache.data||[],t,n;if(e.length)return e;let r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(t=0,n=r.length;t<n;++t)e=e.concat(r[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){let e=this._cache.labels||[],t,n;if(e.length)return e;let r=this.getLabels();for(t=0,n=r.length;t<n;++t)e.push(fp(this,r[t]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return ns(e.sort(dp))}};function bp(e,t,n){let r=0,i=e.length-1,a,o,s,c;n?(t>=e[r].pos&&t<=e[i].pos&&({lo:r,hi:i}=Xo(e,`pos`,t)),{pos:a,time:s}=e[r],{pos:o,time:c}=e[i]):(t>=e[r].time&&t<=e[i].time&&({lo:r,hi:i}=Xo(e,`time`,t)),{time:a,pos:s}=e[r],{time:o,pos:c}=e[i]);let l=o-a;return l?s+(c-s)*(t-a)/l:s}(class extends yp{static id=`timeseries`;static defaults=yp.defaults;constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let e=this._getTimestampsForTable(),t=this._table=this.buildLookupTable(e);this._minPos=bp(t,this.min),this._tableRange=bp(t,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){let{min:t,max:n}=this,r=[],i=[],a,o,s,c,l;for(a=0,o=e.length;a<o;++a)c=e[a],c>=t&&c<=n&&r.push(c);if(r.length<2)return[{time:t,pos:0},{time:n,pos:1}];for(a=0,o=r.length;a<o;++a)l=r[a+1],s=r[a-1],c=r[a],Math.round((l+s)/2)!==c&&i.push({time:c,pos:a/(o-1)});return i}_generate(){let e=this.min,t=this.max,n=super.getDataTimestamps();return(!n.includes(e)||!n.length)&&n.splice(0,0,e),(!n.includes(t)||n.length===1)&&n.push(t),n.sort((e,t)=>e-t)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;let t=this.getDataTimestamps(),n=this.getLabelTimestamps();return e=t.length&&n.length?this.normalize(t.concat(n)):t.length?t:n,e=this._cache.all=e,e}getDecimalForValue(e){return(bp(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){let t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return bp(this._table,n*this._tableRange+this._minPos,!0)}});var xp=I.section`
  width: 100%;
  max-width: 1150px;

  margin: 10px auto 0;

  padding: 22px 30px 30px;

  box-sizing: border-box;

  border-radius: 18px;

  background: #e9e9e9;

  box-shadow:
    0 8px 25px rgba(0, 0, 0, 0.06);

  animation: forecastIn 0.45s
    cubic-bezier(0.22, 1, 0.36, 1);

  @keyframes forecastIn {
    from {
      opacity: 0;
      transform: translateY(18px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    margin-top: 20px;

    padding: 18px 18px 22px;

    border-radius: 15px;
  }
`,Sp=I.div`
  width: 100%;

  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 10px;
`,Cp=I.h2`
  margin: 0;

  color: #111111;

  font-size: 20px;
  font-weight: 500;

  line-height: 1.2;
`,wp=I.p`
  margin: 5px 0 0;

  color: #666666;

  font-size: 12px;
  font-weight: 400;
`,Tp=I.button`
  width: 34px;
  height: 34px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  margin: 0;

  border: none;
  border-radius: 50%;

  background: transparent;
  color: #111111;

  cursor: pointer;

  box-sizing: border-box;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  span {
    position: absolute;

    top: 50%;
    left: 50%;

    width: 24px;
    height: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0;

    font-size: 25px;
    font-weight: 300;
    line-height: 24px;

    transform: translate(-50%, -53%);

    transition: transform 0.2s ease;
  }

  &:hover {
    background: rgba(255, 179, 108, 0.35);
  }

  &:hover span {
    transform:
      translate(-50%, -53%)
      scale(1.1);
  }

  &:active span {
    transform:
      translate(-50%, -53%)
      scale(0.9);
  }
`,Ep=I.div`
  position: relative;

  width: 100%;
  height: 330px;

  margin-top: 5px;

  box-sizing: border-box;

  @media (max-width: 768px) {
    height: 270px;
  }
`,Dp=I.div`
  width: 100%;
  height: 100%;

  display: flex;

  align-items: center;
  justify-content: center;

  color: #666666;

  font-size: 13px;
`,Op=I.div`
  width: 100%;
  height: 100%;

  display: flex;

  align-items: center;
  justify-content: center;

  color: #666666;

  font-size: 13px;
`;Jd.register(Gl,lf,df,Bf,If,jf);var kp=`1d77f7419475b60e6e45e6ad79184d4f`;function Ap({city:e,onClose:t}){let{language:n}=kt(),r=(0,_.useRef)(null),i=(0,_.useRef)(null),[a,o]=(0,_.useState)([]),[s,c]=(0,_.useState)(!0),[l,u]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{(async()=>{try{c(!0),u(!1);let t=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${e.latitude}&lon=${e.longitude}&appid=${kp}&units=metric&lang=${n}`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let r=await t.json();if(!r.list||!Array.isArray(r.list))throw Error(`Forecast data is unavailable`);o(r.list.slice(0,16))}catch(e){console.error(`Ошибка загрузки почасового прогноза:`,e),u(!0)}finally{c(!1)}})()},[e,n]),(0,_.useEffect)(()=>{if(s||l||a.length===0||!r.current)return;i.current&&=(i.current.destroy(),null);let e=a.map(e=>new Date(e.dt*1e3).toLocaleTimeString(Dt[n],{hour:`numeric`,hour12:!0})),t=a.map(e=>Math.round(e.main.temp)),o=r.current.getContext(`2d`);return i.current=new Jd(o,{type:`line`,data:{labels:e,datasets:[{data:t,borderColor:`#ffb36c`,borderWidth:2,backgroundColor:`rgba(255, 179, 108, 0.08)`,pointBackgroundColor:`#ffb36c`,pointBorderColor:`#ffb36c`,pointRadius:3,pointHoverRadius:5,tension:.4,fill:!0}]},options:{responsive:!0,maintainAspectRatio:!1,animation:{duration:700,easing:`easeOutQuart`},interaction:{intersect:!1,mode:`index`},plugins:{legend:{display:!1},tooltip:{enabled:!0,displayColors:!1,backgroundColor:`#111111`,titleColor:`#ffffff`,bodyColor:`#ffffff`,padding:10,cornerRadius:8,callbacks:{title:e=>e[0]?.label||``,label:e=>`${e.raw}°C`}}},scales:{x:{grid:{display:!1},border:{display:!1},ticks:{color:`#111111`,font:{size:9},maxRotation:0,autoSkip:!1}},y:{grid:{color:`rgba(17, 17, 17, 0.08)`},border:{display:!1},ticks:{color:`#111111`,font:{size:9},callback:e=>`${e}°`}}}}}),()=>{i.current&&=(i.current.destroy(),null)}},[a,s,l]),(0,M.jsxs)(xp,{children:[(0,M.jsxs)(Sp,{children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(Cp,{children:`Hourly forecast`}),(0,M.jsx)(wp,{children:e.name})]}),(0,M.jsx)(Tp,{type:`button`,onClick:t,"aria-label":`Close hourly forecast`,children:(0,M.jsx)(`span`,{children:`×`})})]}),(0,M.jsxs)(Ep,{children:[s&&(0,M.jsx)(Dp,{children:`Loading...`}),l&&!s&&(0,M.jsx)(Op,{children:`Failed to load forecast.`}),!s&&!l&&a.length>0&&(0,M.jsx)(`canvas`,{ref:r})]})]})}var jp=I.section`
  width: 100%;
  max-width: 1200px;

  margin: 15px auto 0;

  padding: 27px 35px 35px;

  box-sizing: border-box;

  border-radius: 20px;

  background: #e9e9e9;

  box-shadow:
    0 8px 25px rgba(0, 0, 0, 0.06);

  animation: weeklyIn 0.45s
    cubic-bezier(0.22, 1, 0.36, 1);

  @keyframes weeklyIn {
    from {
      opacity: 0;
      transform: translateY(18px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    margin-top: 20px;

    padding: 22px 22px 28px;

    border-radius: 17px;
  }
`,Mp=I.div`
  width: 100%;

  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 18px;
`,Np=I.h2`
  margin: 0;

  color: #111111;

  font-size: 16px;
  font-weight: 500;

  line-height: 1.2;
`,Pp=I.p`
  margin: 6px 0 0;

  color: #666666;

  font-size: 13px;
  font-weight: 400;
`,Fp=I.button`
  width: 36px;
  height: 36px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  margin: 0;

  border: none;
  border-radius: 50%;

  background: transparent;

  color: #111111;

  cursor: pointer;

  box-sizing: border-box;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  span {
    position: absolute;

    top: 50%;
    left: 50%;

    width: 25px;
    height: 25px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0;

    font-size: 26px;
    font-weight: 300;
    line-height: 25px;

    transform: translate(-50%, -53%);

    transition: transform 0.2s ease;
  }

  &:hover {
    background: rgba(255, 179, 108, 0.35);
  }

  &:hover span {
    transform:
      translate(-50%, -53%)
      scale(1.1);
  }

  &:active span {
    transform:
      translate(-50%, -53%)
      scale(0.9);
  }
`,Ip=I.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 9px;
`,Lp=I.div`
  width: 100%;
  min-height: 43px;

  display: grid;

  grid-template-columns:
    1fr 240px 1fr;

  align-items: center;

  padding: 0 42px;

  box-sizing: border-box;

  border-radius: 10px;

  background: #dcdcdc;

  color: #111111;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #d6d6d6;

    transform: translateX(2px);
  }

  @media (max-width: 768px) {
    grid-template-columns:
      1fr 160px 1fr;

    padding: 0 20px;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr 100px;

    min-height: 52px;

    padding: 0 12px;
  }
`,Rp=I.div`
  color: #111111;

  font-size: 14px;
  font-weight: 400;

  text-align: left;
`,zp=I.div`
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 9px;
`,Bp=I.img`
  width: 48px;
  height: 48px;

  object-fit: contain;

  flex-shrink: 0;
`,Vp=I.span`
  color: #111111;

  font-size: 14px;
  font-weight: 400;

  white-space: nowrap;
`,Hp=I.div`
  color: #111111;

  font-size: 14px;
  font-weight: 400;

  text-align: right;

  text-transform: lowercase;

  @media (max-width: 550px) {
    display: none;
  }
`,Up=I.div`
  width: 100%;
  min-height: 280px;

  display: flex;

  align-items: center;
  justify-content: center;

  color: #666666;

  font-size: 14px;
`,Wp=I.div`
  width: 100%;
  min-height: 280px;

  display: flex;

  align-items: center;
  justify-content: center;

  color: #666666;

  font-size: 14px;
`,Gp=`1d77f7419475b60e6e45e6ad79184d4f`;function Kp({city:e,onClose:t}){let{language:n}=kt(),[r,i]=(0,_.useState)([]),[a,o]=(0,_.useState)(!0),[s,c]=(0,_.useState)(!1);(0,_.useEffect)(()=>{(async()=>{try{o(!0),c(!1);let t=await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${e.latitude}&lon=${e.longitude}&exclude=current,minutely,hourly,alerts&appid=${Gp}&units=metric&lang=${n}`);if(t.ok){let e=await t.json();if(Array.isArray(e.daily)&&e.daily.length>0){let t=e.daily.slice(0,8).map(e=>({date:new Date(e.dt*1e3),icon:e.weather?.[0]?.icon,description:e.weather?.[0]?.description||``,maxTemp:Math.round(e.temp.max),minTemp:Math.round(e.temp.min)}));i(t);return}}let r=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${e.latitude}&lon=${e.longitude}&appid=${Gp}&units=metric&lang=${n}`);if(!r.ok)throw Error(`HTTP error: ${r.status}`);let a=await r.json();if(!Array.isArray(a.list)||a.list.length===0)throw Error(`Forecast data is unavailable`);let s={};a.list.forEach(e=>{let t=new Date(e.dt*1e3).toLocaleDateString(`en-CA`);s[t]||(s[t]=[]),s[t].push(e)});let l=Object.values(s).slice(0,5).map(e=>{let t=e.map(e=>e.main.temp),n=e[Math.floor(e.length/2)];return{date:new Date(n.dt*1e3),icon:n.weather?.[0]?.icon,description:n.weather?.[0]?.description||``,maxTemp:Math.round(Math.max(...t)),minTemp:Math.round(Math.min(...t))}});i(l)}catch(e){console.error(`Ошибка загрузки недельного прогноза:`,e),c(!0)}finally{o(!1)}})()},[e,n]);let l=e=>e.toLocaleDateString(Dt[n],{weekday:`long`,month:`long`,day:`numeric`});return(0,M.jsxs)(jp,{children:[(0,M.jsxs)(Mp,{children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(Np,{children:`5-day forecast`}),(0,M.jsx)(Pp,{children:e.name})]}),(0,M.jsx)(Fp,{type:`button`,onClick:t,"aria-label":`Close weekly forecast`,children:(0,M.jsx)(`span`,{children:`×`})})]}),a&&(0,M.jsx)(Up,{children:`Loading...`}),s&&!a&&(0,M.jsx)(Wp,{children:`Failed to load forecast.`}),!a&&!s&&r.length>0&&(0,M.jsx)(Ip,{children:r.map((e,t)=>(0,M.jsxs)(Lp,{children:[(0,M.jsx)(Rp,{children:l(e.date)}),(0,M.jsxs)(zp,{children:[(0,M.jsx)(Bp,{src:`https://openweathermap.org/img/wn/${e.icon}@2x.png`,alt:e.description}),(0,M.jsxs)(Vp,{children:[e.maxTemp,`° /`,e.minTemp,`°C`]})]}),(0,M.jsx)(Hp,{children:e.description})]},`${e.date.getTime()}-${t}`))})]})}var qp=`/reactProject/assets/ice-BVuotkio.png`,Jp=`/reactProject/assets/hot-shw1z_Oz.png`,Yp=`/reactProject/assets/ideal-DsCCYThy.png`,Xp=I.section`
    position: relative;

    width: 100%;
    max-width: 668px;

    margin: 35px auto 0;
    padding: 24px 45px;

    box-sizing: border-box;

    border-radius: 10px;

    background: #e9e9e9;

    animation: showMoreWeather 0.3s ease;

    @keyframes showMoreWeather {
      from {
        opacity: 0;
        transform: translateY(10px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,Zp=I.div`
    display: flex;

    align-items: center;
    justify-content: space-between;

    margin-bottom: 18px;
  `,Qp=I.h2`
    margin: 0;

    font-size: 18px;
    font-weight: 500;

    color: #111;
  `,$p=I.p`
    margin: 4px 0 0;

    font-size: 13px;

    color: #555;
  `,em=I.button`
    width: 32px;
    height: 32px;

    display: flex;

    align-items: center;
    justify-content: center;

    padding: 0;

    border: none;
    border-radius: 50%;

    background: transparent;

    color: #111;

    cursor: pointer;

    font-size: 22px;

    transition:
      background 0.2s ease,
      transform 0.2s ease;

    &:hover {
      background: #d5d5d5;

      transform: rotate(90deg);
    }
  `,tm=I.div`
    display: grid;

    grid-template-columns:
      repeat(3, 170px);

    grid-template-rows:
      repeat(2, 127px);

    gap: 23px 34px;

    justify-content: center;
  `,nm=I.div`
    width: 170px;
    height: 127px;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: flex-start;

    padding-top: 12px;

    box-sizing: border-box;

    border-radius: 6px;

    background: rgb(217, 217, 217);
  `,rm=I.span`
    font-size: 11px;

    line-height: 1;

    color: #111;

    margin-bottom: 7px;
  `,im=I.span`
    font-size: 19px;

    line-height: 1;

    color: #111;
  `,am=I.div`
    margin-top: 9px;

    height: 50px;

    display: flex;

    align-items: center;
    justify-content: center;

    img {
      width: 55px;
      height: 55px;

      object-fit: contain;
    }
  `,om=I.div`
    min-height: 276px;

    display: flex;

    align-items: center;
    justify-content: center;

    color: #555;
  `,sm=I.div`
    min-height: 276px;

    display: flex;

    align-items: center;
    justify-content: center;

    color: #555;
  `,cm=`1d77f7419475b60e6e45e6ad79184d4f`;function lm({city:e,onClose:t}){let{language:n}=kt(),[r,i]=(0,_.useState)(null),[a,o]=(0,_.useState)(!0),[s,c]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{(async()=>{try{o(!0),c(!1);let t=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e.latitude}&lon=${e.longitude}&appid=${cm}&units=metric&lang=${n}`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let r=await t.json(),a=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${e.latitude}&lon=${e.longitude}&appid=${cm}&units=metric&lang=${n}`);if(!a.ok)throw Error(`HTTP error: ${a.status}`);let s=await a.json(),l=new Date,u=s.list.filter(e=>{let t=new Date(e.dt*1e3);return t.getDate()===l.getDate()&&t.getMonth()===l.getMonth()&&t.getFullYear()===l.getFullYear()}).map(e=>e.main.temp),d=u.length>0?Math.min(...u):r.main.temp_min,f=u.length>0?Math.max(...u):r.main.temp_max;i({feelsLike:r.main.feels_like,minTemp:d,maxTemp:f,humidity:r.main.humidity,pressure:r.main.pressure,windSpeed:r.wind.speed,visibility:r.visibility})}catch(e){console.error(`Ошибка загрузки подробной информации:`,e),c(!0)}finally{o(!1)}})()},[e,n]),(0,M.jsxs)(Xp,{children:[(0,M.jsxs)(Zp,{children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(Qp,{children:`Weather details`}),(0,M.jsx)($p,{children:e.name})]}),(0,M.jsx)(em,{type:`button`,onClick:t,"aria-label":`Close weather details`,children:(0,M.jsx)(ct,{})})]}),a&&(0,M.jsx)(om,{children:`Loading...`}),s&&!a&&(0,M.jsx)(sm,{children:`Failed to load weather details.`}),r&&!a&&!s&&(0,M.jsxs)(tm,{children:[(0,M.jsxs)(nm,{children:[(0,M.jsx)(rm,{children:`Feels like`}),(0,M.jsxs)(im,{children:[r.feelsLike.toFixed(1),`°C`]}),(0,M.jsx)(am,{children:(0,M.jsx)(`img`,{src:(e=>e<16?qp:e<=19?Yp:Jp)(r.feelsLike),alt:`Temperature`})})]}),(0,M.jsxs)(nm,{children:[(0,M.jsx)(rm,{children:`Min °C`}),(0,M.jsxs)(im,{children:[r.minTemp.toFixed(1),`°C`]}),(0,M.jsx)(rm,{children:`Max °C`}),(0,M.jsxs)(im,{children:[r.maxTemp.toFixed(1),`°C`]})]}),(0,M.jsxs)(nm,{children:[(0,M.jsx)(rm,{children:`Humidity`}),(0,M.jsxs)(im,{children:[r.humidity,`%`]}),(0,M.jsx)(am,{children:(0,M.jsx)(`img`,{src:`/reactProject/assets/humidity-CUjCCt5g.png`,alt:`Humidity`})})]}),(0,M.jsxs)(nm,{children:[(0,M.jsx)(rm,{children:`Pressure`}),(0,M.jsxs)(im,{children:[r.pressure,` Pa`]}),(0,M.jsx)(am,{children:(0,M.jsx)(`img`,{src:`/reactProject/assets/pressure-DNGAfX5a.png`,alt:`Pressure`})})]}),(0,M.jsxs)(nm,{children:[(0,M.jsx)(rm,{children:`Wind speed`}),(0,M.jsxs)(im,{children:[r.windSpeed.toFixed(2),` `,`m/s`]}),(0,M.jsx)(am,{children:(0,M.jsx)(`img`,{src:`/reactProject/assets/wind-CthuVuVu.png`,alt:`Wind speed`})})]}),(0,M.jsxs)(nm,{children:[(0,M.jsx)(rm,{children:`Visibility`}),(0,M.jsx)(im,{children:r.visibility>=1e4?`Unlimited`:`${(r.visibility/1e3).toFixed(1)} km`}),(0,M.jsx)(am,{children:(0,M.jsx)(`img`,{src:`/reactProject/assets/visibility-CQs0Kbtj.png`,alt:`Visibility`})})]})]})]})}var um=`/reactProject/assets/so-hot-DOkDWlu7.gif`,dm=`/reactProject/assets/so-cold-DRes0mmY.gif`,fm=`/reactProject/assets/rain-BAFao_xQ.gif`,pm=`/reactProject/assets/another-day-B0ZAobZ7.gif`,mm=I.section`
  width: 100%;

  padding: 45px 0 60px;

  background: transparent;

  box-sizing: border-box;
`,hm=I.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  gap: 70px;

  padding: 0 20px;

  box-sizing: border-box;

  @media (max-width: 950px) {
    flex-wrap: wrap;

    gap: 40px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;

    gap: 25px;
  }
`,gm=I.article`
  position: relative;

  width: 375px;
  height: 500px;

  flex-shrink: 0;

  padding: 16px 30px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  border-radius: 18px;

  background-color: #e9e9e9;
  background-image:
    linear-gradient(
      rgba(255, 255, 255, 0.34),
      rgba(255, 255, 255, 0.34)
    ),
    url(${({$background:e})=>e});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`,_m=I.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`,vm=I.span`
  color: #111111;

  font-size: 16px;
  font-weight: 400;

  line-height: 1;
`,ym=I.span`
  color: #111111;

  font-size: 16px;
  font-weight: 400;

  line-height: 1;

  text-align: right;
`,bm=I.div`
  margin-top: 24px;

  color: #111111;

  font-size: 28px;
  font-weight: 400;

  line-height: 1;
`,xm=I.div`
  margin-top: 17px;

  display: flex;
  align-items: center;

  gap: 30px;
`,Sm=I.button`
  width: 134px;
  height: 34px;

  padding: 0;

  border: none;
  border-radius: 11px;

  background: var(--theme-button-gradient);
  color: #111111;

  font-size: 12px;
  font-weight: 400;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: var(--theme-primary-strong);
  }

  &:active {
    transform: scale(0.97);
  }
`,Cm=I.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 13px;

  color: #111111;

  font-size: 14px;
  font-weight: 400;

  line-height: 1;
`,wm=I.span`
  width: 1px;
  height: 18px;

  background: #111111;
`,Tm=I.img`
  width: 125px;
  height: 125px;

  margin-top: 17px;

  object-fit: contain;
`,Em=I.div`
  margin-top: 3px;

  color: #111111;

  font-size: 36px;
  font-weight: 400;

  line-height: 1;
`,Dm=I.div`
  width: 100%;

  margin-top: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`,Om=I.button`
  width: 34px;
  height: 34px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: none;

  background: transparent;
  color: #111111;

  cursor: pointer;

  svg {
    width: 28px;
    height: 28px;

    stroke-width: 2;
  }

  &:hover {
    transform: rotate(180deg);
  }
`,km=I.button`
  width: 34px;
  height: 34px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: none;

  background: transparent;

  color: #ff4141;

  cursor: pointer;

  svg {
    width: 31px;
    height: 31px;

    stroke-width: 1.8;

    fill: ${e=>e.$active?`#ff4141`:`transparent`};
  }
`,Am=I.button`
  width: 116px;
  height: 33px;

  padding: 0;

  border: none;
  border-radius: 11px;

  background: var(--theme-button-gradient);
  color: #111111;

  font-size: 12px;
  font-weight: 400;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: var(--theme-primary-strong);
  }

  &:active {
    transform: scale(0.97);
  }
`,jm=I.button`
  width: 34px;
  height: 34px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: none;

  background: transparent;
  color: #111111;

  cursor: pointer;

  svg {
    width: 28px;
    height: 28px;

    stroke-width: 2;
  }

  &:hover {
    color: #ff4141;
  }
`;function Mm({cities:e,favorites:t,onRefresh:n,onFavorite:r,onDelete:i}){let{language:a,t:o}=kt(),[s,c]=(0,_.useState)(new Date),[l,u]=(0,_.useState)(null),[d,f]=(0,_.useState)(null),[p,m]=(0,_.useState)(null);(0,_.useEffect)(()=>{let e=setInterval(()=>{c(new Date)},1e3);return()=>clearInterval(e)},[]);let h=e=>{let t=s.getTime()+s.getTimezoneOffset()*6e4;return new Date(t+e*1e3)},g=e=>e.toLocaleTimeString(Dt[a],{hour:`2-digit`,minute:`2-digit`,hour12:!1}),v=e=>`${String(e.getDate()).padStart(2,`0`)}.${String(e.getMonth()+1).padStart(2,`0`)}.${e.getFullYear()}`,y=e=>e.toLocaleDateString(Dt[a],{weekday:`long`}),b=e=>{let t=e.weatherCode,n=[`09`,`10`,`11`].some(t=>e.icon?.startsWith(t));return t>=200&&t<600||n?fm:e.temperature>=27?um:e.temperature<=5?dm:pm};return e.length===0?null:(0,M.jsxs)(mm,{children:[(0,M.jsx)(hm,{children:e.map(e=>{let a=h(e.timezone),s=t.some(t=>t.id===e.id);return(0,M.jsxs)(gm,{$background:b(e),children:[(0,M.jsxs)(_m,{children:[(0,M.jsx)(vm,{children:e.name}),(0,M.jsx)(ym,{children:e.country})]}),(0,M.jsx)(bm,{children:g(a)}),(0,M.jsxs)(xm,{children:[(0,M.jsx)(Sm,{type:`button`,onClick:()=>{u(e),f(null),m(null)},children:o(`hourlyForecast`)}),(0,M.jsx)(Sm,{type:`button`,onClick:()=>{f(e),u(null),m(null)},children:o(`weeklyForecast`)})]}),(0,M.jsxs)(Cm,{children:[(0,M.jsx)(`span`,{children:v(a)}),(0,M.jsx)(wm,{}),(0,M.jsx)(`span`,{children:y(a)})]}),(0,M.jsx)(Tm,{src:`https://openweathermap.org/img/wn/${e.icon}@2x.png`,alt:e.description}),(0,M.jsxs)(Em,{children:[Math.round(e.temperature),`°C`]}),(0,M.jsxs)(Dm,{children:[(0,M.jsx)(Om,{type:`button`,onClick:()=>n(e),children:(0,M.jsx)(ft,{})}),(0,M.jsx)(km,{type:`button`,$active:s,onClick:()=>r(e.id),children:(0,M.jsx)(ht,{})}),(0,M.jsx)(Am,{type:`button`,onClick:()=>{m(p?.id===e.id?null:e),u(null),f(null)},children:o(`seeMore`)}),(0,M.jsx)(jm,{type:`button`,onClick:()=>i(e.id),children:(0,M.jsx)(ut,{})})]})]},e.id)})}),l&&(0,M.jsx)(Ap,{city:l,onClose:()=>u(null)}),d&&(0,M.jsx)(Kp,{city:d,onClose:()=>f(null)}),p&&(0,M.jsx)(lm,{city:p,onClose:()=>m(null)})]})}var Nm=I.section`
  width: 100%;

  padding: 80px 20px;

  box-sizing: border-box;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 0% 0%,
      rgba(255, 179, 108, 0.22) 10%,
      rgba(255, 179, 108, 0.08) 22%,
      rgba(255, 179, 108, 0) 48%
    ),
    transparent;
`,Pm=I.div`
  width: 100%;

  max-width: 1100px;

  min-height: 500px;

  margin: 0 auto;

  display: grid;

  grid-template-columns: 1fr 1fr;

  align-items: center;

  gap: 70px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    gap: 40px;
  }
`,Fm=I.div`
  opacity: 0;

  transform: translateX(-50px);

  transition:
    opacity 1.4s ease,
    transform 1.4s ease;

  &.visible {
    opacity: 1;

    transform: translateX(0);
  }
`,Im=I.span`
  display: inline-block;

  margin-bottom: 18px;

  font-size: 12px;

  font-weight: 700;

  letter-spacing: 2px;

  text-transform: uppercase;

  color: #ffb36c;
`,Lm=I.h2`
  margin: 0 0 22px;

  max-width: 520px;

  color: #111111;

  font-size: 34px;

  font-weight: 700;

  line-height: 1.15;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`,Rm=I.p`
  max-width: 500px;

  margin: 0 0 28px;

  color: #666666;

  font-size: 15px;

  font-weight: 400;

  line-height: 1.6;
`,zm=I.div`
  display: flex;

  align-items: center;

  gap: 12px;
`,Bm=I.button`
  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 10px;

  height: 42px;

  padding: 0 20px;

  border: none;

  border-radius: 7px;

  background: #111111;

  color: #ffffff;

  font-size: 13px;

  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.25s ease,
    transform 0.25s ease,
    opacity 0.25s ease;

  &:hover {
    background: var(--theme-primary);

    color: #111111;

    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.35;

    cursor: default;

    transform: none;
  }

  svg {
    width: 16px;

    height: 16px;

    transition:
      transform 0.25s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }

  &:first-child:hover svg {
    transform: translateX(-3px);
  }
`,Vm=I.div`
  position: relative;

  width: 100%;

  height: 500px;

  display: flex;

  align-items: center;

  justify-content: center;

  overflow: visible;

  opacity: 0;

  transform: translateX(50px);

  transition:
    opacity 1.4s ease,
    transform 1.4s ease;

  &.visible {
    opacity: 1;

    transform: translateX(0);
  }

  @media (max-width: 768px) {
    height: 400px;
  }
`,Hm=I.img`
  position: absolute;

  width: 76%;

  height: 390px;

  object-fit: cover;

  border-radius: 16px;

  background: #eeeeee;

  opacity: 0.75;

  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.12);

  z-index: 1;

  will-change: transform, opacity;

  backface-visibility: hidden;

  transition:
    transform 0.7s
      cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.7s ease,
    filter 0.7s ease;

  &.previous {
    left: -5px;

    top: 80px;

    transform:
      rotate(-4deg)
      scale(0.94);

    filter: brightness(0.92);
  }

  &.next {
    right: -5px;

    top: 80px;

    transform:
      rotate(4deg)
      scale(0.94);

    filter: brightness(0.92);
  }

  @media (max-width: 768px) {
    width: 70%;

    height: 300px;

    &.previous {
      left: 0;

      top: 70px;
    }

    &.next {
      right: 0;

      top: 70px;
    }
  }
`,Um=I.img`
  position: relative;

  display: block;

  width: 82%;

  height: 430px;

  object-fit: cover;

  border-radius: 16px;

  background: #eeeeee;

  z-index: 3;

  box-shadow:
    0 18px 45px rgba(0, 0, 0, 0.2);

  opacity: 0;

  transform:
    translate3d(45px, 0, 0)
    scale(0.96);

  will-change: transform, opacity;

  backface-visibility: hidden;

  &.loaded {
    animation:
      newsImageIn 1.4s
      cubic-bezier(0.22, 1, 0.36, 1)
      forwards;
  }

  @keyframes newsImageIn {
    0% {
      opacity: 0;

      transform:
        translate3d(45px, 0, 0)
        scale(0.96);
    }

    100% {
      opacity: 1;

      transform:
        translate3d(0, 0, 0)
        scale(1);
    }
  }

  @media (max-width: 768px) {
    width: 80%;

    height: 340px;
  }
`,Wm=`https://reactproject-gsav.onrender.com/api/news`;function Gm(){let{language:e}=kt(),[t,n]=(0,_.useState)([]),[r,i]=(0,_.useState)(0),[a,o]=(0,_.useState)(1),[s,c]=(0,_.useState)(!0),[l,u]=(0,_.useState)(!1),[d,f]=(0,_.useState)(!1),p=(0,_.useRef)(null),[m,h]=(0,_.useState)(!1);(0,_.useEffect)(()=>{let e=new IntersectionObserver(([t])=>{t.isIntersecting&&(h(!0),e.disconnect())},{threshold:.25});return p.current&&e.observe(p.current),()=>e.disconnect()},[]);let g=async(t=1)=>{try{t===1?c(!0):u(!0),f(!1);let r=await fetch(`${Wm}?page=${t}&lang=${e===`uk`?`en`:e}`);if(!r.ok)throw Error(`HTTP error: ${r.status}`);let i=await r.json();if(i.status!==`ok`||!Array.isArray(i.articles)||i.articles.length===0)throw Error(`Новости не найдены`);n(e=>{if(t===1)return i.articles;let n=new Set(e.map(e=>e.url)),r=i.articles.filter(e=>e.url&&!n.has(e.url));return[...e,...r]}),o(t)}catch(e){console.error(`Ошибка загрузки новостей:`,e),t===1&&f(!0)}finally{c(!1),u(!1)}};(0,_.useEffect)(()=>{t.slice(Math.max(0,r-1),r+3).forEach(e=>{if(!e?.urlToImage)return;let t=new Image;t.src=e.urlToImage})},[t,r]),(0,_.useEffect)(()=>{g(1)},[e]);let v=async()=>{if(l)return;let s=r+1;if(s<t.length){i(s);return}let c=a+1;try{u(!0);let r=await fetch(`${Wm}?page=${c}&lang=${e===`uk`?`en`:e}`);if(!r.ok)throw Error(`HTTP error: ${r.status}`);let a=await r.json();if(a.status!==`ok`||!Array.isArray(a.articles)||a.articles.length===0){console.log(`Більше новин немає.`);return}let s=new Set(t.map(e=>e.url)),l=a.articles.filter(e=>e.url&&!s.has(e.url));if(l.length===0){console.log(`Нових унікальних новин немає.`);return}let d=t.length;n(e=>[...e,...l]),o(c),i(d),l.slice(0,3).forEach(e=>{if(!e?.urlToImage)return;let t=new Image;t.src=e.urlToImage})}catch(e){console.error(`Помилка завантаження наступної сторінки:`,e)}finally{u(!1)}},y=()=>{l||r>0&&i(r-1)},b=t[r],x=r>0?t[r-1]:null,S=r<t.length-1?t[r+1]:null;return(0,M.jsx)(Nm,{ref:p,children:(0,M.jsxs)(Pm,{children:[(0,M.jsxs)(Fm,{className:m?`visible`:``,children:[(0,M.jsx)(Im,{children:`NEWS`}),s?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(Lm,{children:`Loading...`}),(0,M.jsx)(Rm,{children:`Please wait while we load the latest news.`})]}):d?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(Lm,{children:`Something went wrong`}),(0,M.jsx)(Rm,{children:`We couldn't load the latest news.`}),(0,M.jsxs)(Bm,{type:`button`,onClick:()=>g(1),children:[`Try again`,(0,M.jsx)(xt,{})]})]}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(Lm,{children:b?.title||`News`}),(0,M.jsx)(Rm,{children:b?.description||`Read the latest news and interesting stories.`}),(0,M.jsxs)(zm,{children:[(0,M.jsxs)(Bm,{type:`button`,onClick:y,disabled:l||r===0,children:[(0,M.jsx)(St,{}),`Back`]}),(0,M.jsxs)(Bm,{type:`button`,onClick:v,disabled:l,children:[l?`Loading...`:`See more`,(0,M.jsx)(xt,{})]})]})]})]}),(0,M.jsxs)(Vm,{className:m?`visible`:``,children:[x?.urlToImage&&(0,M.jsx)(Hm,{className:`previous`,src:x.urlToImage,alt:x.title||`Previous news`}),S?.urlToImage&&(0,M.jsx)(Hm,{className:`next`,src:S.urlToImage,alt:S.title||`Next news`}),b?.urlToImage&&(0,M.jsx)(Um,{src:b.urlToImage,alt:b.title||`News`,onLoad:e=>{e.currentTarget.classList.add(`loaded`)}},b.urlToImage)]})]})})}L`
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
`;var Km=L`
  0% {
    transform: translate(0, 0) scale(1);
  }

  50% {
    transform: translate(150px, 60px) scale(1.2);
  }

  100% {
    transform: translate(0, 0) scale(1);
  }
`,qm=L`
  0% {
    transform: translate(0, 0) scale(1);
  }

  50% {
    transform: translate(-120px, -80px) scale(1.15);
  }

  100% {
    transform: translate(0, 0) scale(1);
  }
`,Jm=I.section`
  position: relative;

  width: 100vw;

  margin-left: calc(50% - 50vw);

  margin-top: 60px;

  padding: 55px 0 65px;

  box-sizing: border-box;

  overflow: hidden;

  background: transparent;

  border-top: 1px solid #ffffff;

  border-bottom: 1px solid #e5e5e5;

  box-shadow:
    0 -10px 35px rgba(0, 0, 0, 0.04),
    0 10px 35px rgba(0, 0, 0, 0.05);

  &::before {
    content: "";

    position: absolute;

    width: 450px;
    height: 450px;

    top: -220px;
    left: -160px;

    border-radius: 50%;

    background: rgba(255, 255, 255, 0.65);

    filter: blur(35px);

    animation: ${({$visible:e})=>e?`${Km} 12s ease-in-out infinite`:`none`};

    pointer-events: none;
  }

  &::after {
    content: "";

    position: absolute;

    width: 500px;
    height: 500px;

    right: -220px;
    bottom: -280px;

    border-radius: 50%;

    background: rgba(210, 225, 220, 0.5);

    filter: blur(40px);

    animation: ${({$visible:e})=>e?`${qm} 15s ease-in-out infinite`:`none`};

    pointer-events: none;
  }
`,Ym=I.h2`
  position: relative;

  z-index: 10;

  width: calc(100% - 80px);

  margin: 0 auto 40px;

  font-size: 28px;

  font-weight: 500;

  line-height: 1.2;

  letter-spacing: 2px;

  color: #111111;

  opacity: 1;

  transform: none;

  filter: none;

  transition:
    letter-spacing 0.5s ease,
    transform 0.5s ease;

  &::after {
    content: "";

    position: absolute;

    left: 0;

    bottom: -14px;

    width: 70px;

    height: 2px;

    border-radius: 10px;

    background: #111111;

    transform: scaleX(1);

    transform-origin: left;

    transition: transform 0.7s ease;
  }

  &:hover {
    letter-spacing: 3px;

    transform: translateX(4px);
  }
`,Xm=I.div`
  position: relative;

  z-index: 5;

  width: 100%;

  height: 390px;

  display: flex;

  align-items: center;

  justify-content: center;

  overflow: visible;
`,Zm=I.div`
  position: absolute;

  left: 50%;

  width: ${({$position:e})=>e===0?`590px`:`340px`};

  height: ${({$position:e})=>e===0?`350px`:`220px`};

  overflow: hidden;

  cursor: pointer;

  border-radius: 18px;

  background: #dddddd;

  transform:
    translateX(
      ${({$position:e})=>e===0?`-50%`:e===-1?`calc(-50% - 390px)`:e===1?`calc(-50% + 390px)`:e===-2?`calc(-50% - 780px)`:`calc(-50% + 780px)`}
    )
    scale(
      ${({$position:e})=>e===0?`1`:`0.86`}
    );

  opacity: ${({$position:e})=>Math.abs(e)>2?`0`:e===0?`1`:`0.65`};

  z-index: ${({$position:e})=>20-Math.abs(e)};

  filter: ${({$position:e})=>e===0?`none`:`brightness(0.72)`};

  box-shadow: ${({$position:e})=>e===0?`0 30px 70px rgba(0, 0, 0, 0.25)`:`0 12px 30px rgba(0, 0, 0, 0.12)`};

  transition:
    transform 0.7s ease,
    width 0.7s ease,
    height 0.7s ease,
    opacity 0.6s ease,
    filter 0.6s ease,
    box-shadow 0.7s ease;

  &::before {
    content: "";

    position: absolute;

    inset: 0;

    z-index: 2;

    pointer-events: none;

    background:
      linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.18),
        transparent 35%,
        transparent 65%,
        rgba(255, 255, 255, 0.08)
      );
  }

  &::after {
    content: "";

    position: absolute;

    inset: 0;

    z-index: 3;

    pointer-events: none;

    background: ${({$position:e})=>e===0?`linear-gradient(to bottom, transparent 55%, rgba(0, 0, 0, 0.2))`:`rgba(0, 0, 0, 0.08)`};
  }

  img {
    width: 100%;

    height: 100%;

    display: block;

    object-fit: cover;

    transition:
      transform 0.8s ease;
  }

  &:hover img {
    transform: scale(1.06);
  }

  &:hover {
    box-shadow:
      0 35px 80px rgba(0, 0, 0, 0.28);
  }
`,Qm=I.div`
  position: relative;

  z-index: 5;

  width: 100%;

  height: 390px;

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 15px;

  color: #555555;
`,$m=I.div`
  position: relative;

  z-index: 5;

  width: 100%;

  height: 390px;

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 15px;

  color: #555555;
`,eh=`54251373-2a4c32186818dc40d01b0d483`;function th(){let{language:e}=kt(),[t,n]=(0,_.useState)([]),[r,i]=(0,_.useState)(2),[a,o]=(0,_.useState)(!0),[s,c]=(0,_.useState)(!1);(0,_.useEffect)(()=>{(async()=>{try{o(!0),c(!1);let t=await fetch(`https://pixabay.com/api/?key=${eh}&q=beautiful+nature&lang=${e===`uk`?`en`:e}&image_type=photo&orientation=horizontal&per_page=7&safesearch=true`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let r=await t.json();if(!Array.isArray(r.hits)||r.hits.length===0)throw Error(`Nature images not found`);n(r.hits.map(e=>({id:e.id,url:e.webformatURL,largeUrl:e.largeImageURL,alt:e.tags||`Beautiful nature`})))}catch(e){console.error(`Ошибка загрузки фотографий природы:`,e),c(!0)}finally{o(!1)}})()},[e]),(0,_.useEffect)(()=>{if(t.length===0)return;let e=setInterval(()=>{i(e=>e===t.length-1?0:e+1)},4e3);return()=>clearInterval(e)},[t]);let l=e=>{let n=e-r;return n>t.length/2&&(n-=t.length),n<-t.length/2&&(n+=t.length),n};return a?(0,M.jsxs)(Jm,{children:[(0,M.jsx)(Ym,{children:`Beautiful nature`}),(0,M.jsx)(Qm,{children:`Loading...`})]}):s?(0,M.jsxs)(Jm,{children:[(0,M.jsx)(Ym,{children:`Beautiful nature`}),(0,M.jsx)($m,{children:`Failed to load images.`})]}):(0,M.jsxs)(Jm,{children:[(0,M.jsx)(Ym,{children:`Beautiful nature`}),(0,M.jsx)(Xm,{children:t.map((e,t)=>{let n=l(t);return(0,M.jsx)(Zm,{$position:n,onClick:()=>i(t),children:(0,M.jsx)(`img`,{src:e.url,alt:e.alt})},e.id)})})]})}var nh=I.footer`
  width: 100%;

  position: relative;
  overflow: hidden;

  background: ${({$themeColors:e})=>e?.length?`linear-gradient(120deg, ${e.map(e=>e.color).join(`, `)})`:`#FFB56B`};

  color: #111111;

  border-top: 1px solid rgba(0, 0, 0, 0.08);
`,rh=I.div`
  width: 100%;
  max-width: 1440px;

  min-height: 190px;

  margin: 0 auto;
  padding: 42px 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 80px;

  position: relative;
  z-index: 1;

  @media (max-width: 1000px) {
    padding: 40px 50px;

    gap: 50px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;

    padding: 40px 30px;

    gap: 35px;
  }
`,ih=I.div`
  display: flex;
  align-items: center;

  min-width: 180px;
`,ah=I.img`
  width: 82px;
  height: 56px;

  object-fit: contain;

  display: block;
`,oh=I.div`
  display: flex;
  flex-direction: column;

  min-width: 170px;
`,sh=I.h3`
  margin: 0 0 12px;

  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;

  color: #111111;
`,ch=I.p`
  margin: 0;

  display: flex;
  align-items: flex-start;
  gap: 8px;

  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 400;

  line-height: 1.6;

  color: #111111;

  svg {
    margin-top: 3px;
    flex: 0 0 auto;
  }
`,lh=I.div`
  display: flex;
  align-items: center;

  gap: 14px;
`,uh=I.a`
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  border: 1px solid rgba(255, 255, 255, 0.42);

  background: color-mix(in srgb, var(--theme-primary) 24%, white);

  text-decoration: none;

  transition:
    transform 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);

    background: color-mix(in srgb, var(--theme-primary) 48%, white);

    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.12);
  }

  &:focus-visible {
    outline: 3px solid rgba(17, 17, 17, 0.35);
    outline-offset: 3px;
  }
`,dh=I.img`
  width: 22px;
  height: 22px;

  object-fit: contain;

  display: block;
`,fh=I.div`
  width: 100%;

  position: relative;
  z-index: 1;

  border-top: 1px solid rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 13px 30px;

  @media (max-width: 520px) {
    padding: 13px 20px;
  }
`,ph=I.p`
  margin: 0;

  font-family: "Poppins", sans-serif;
  font-size: 11px;
  font-weight: 400;

  color: rgba(17, 17, 17, 0.65);

  text-align: center;

  span {
    color: #111111;
    font-weight: 600;
  }
`,mh=I.a`
  margin-left: auto;

  color: rgba(17, 17, 17, 0.72);

  font-family: "Poppins", sans-serif;
  font-size: 11px;
  font-weight: 600;

  text-decoration: none;

  transition: color 0.2s ease;

  &:hover { color: #111111; }
`,hh=I.button`
  width: 34px;
  height: 34px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  margin-left: 14px;
  padding: 0;

  border: 1px solid rgba(17, 17, 17, 0.16);
  border-radius: 50%;

  background: var(--theme-button-gradient);
  color: #111111;

  cursor: pointer;

  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: var(--theme-primary-strong);
    box-shadow: 0 5px 12px rgba(101, 55, 13, 0.16);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid rgba(17, 17, 17, 0.35);
    outline-offset: 2px;
  }
`,gh=`/reactProject/assets/logo--nZl-i6T.png`,_h=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAACU1JREFUeAHtmHtwVNUdx7/nPvaZTTYhISY8wiNQQYeKFQuFQQQqDuKDIlBsmTIFOuLgFDutjg/qlLbI1LaICH9UGcvYjm3DQB2RKpRCmLEyVq0gYIEwJCaEvJMl2ezufZzT331sstndNBvKn56ZM/eec8+553O+5/f7nXMv8GWyE8P/ma73BRJlviq0pHiaNvPbk5VpD4cxaookAnkal2VTeIwuHm1u5FdOf45Tr10y33nvOI6bbl+BYabhQsoW3IGCHdtmKrM2tfAetcPsZYZQoFM2hAyDu/ec7u06FSFRigQ3r1aLg+tew/pD7nvMXAfNFdJ+6cnil7ffrEzZVKu3cBpcMlwwnbvXQUGdZyZXRaGYyI7i1YV78Ogxa8K5DJ4LpPJ83tKizYXrmy5rDZwLVTZcAAdqeKBWGSLP8EH7dB0mzEAOqipDAMpnyn724AR1fFWLcRleSSZA05m/bZUpLQcrZ6k3eFSJCNy2D1y8gvkq2avFYeA6IOXWsS+uCzJ1V4K3MoVZTcWQALmCgitKvbjEN+JdvQZ3BxrwAQYDHQxSPl6+Zn6Bgt2m2SvZgMMCyBlUqhf1fAdO9C6DapkeQxbvz2aTbN68efKx2GJddEbBNcu25AzbM3QZ8UgCminZz3SolB071MnM7Hu3TsheSB6/0zfDRq0+zCzFTZ2PIH9krpAwHniuFa29RVLMK6HXMxCUABKdvcjfuxK+RePB/AqGCn2JFg0XttXh05dq4Q8WQNOlDFC6NzvQuHkL5v4KaY6UDikfnnvvfQsKx+9nUVVGrwoLsg9Up+bfnAzf68tpqQhMyjGCCWcajJq/6f87VDmUFXSEGI1VCEpIm3XGKOKJjUJcjaEf0L3GvRDjRkJ651FqJCA0ju4fHUH8oyZSV+lTOTlwMpuKirK1lRi9YRyEIUAeiDfYYXh9+RlLr3OJd4vI3mcwc20qaCok2zpn2p1PTb/1n6xHlhDzDAQ9FwHrfJUWgkOcb0X37b8BLy2DbiaBHFA9OXBKHNUDDO1tUTwY/w6sCNb+fheqF52mNfVkgI7gE7Bc+AeIJ6UWHpk7bgdT4gx+HfBrQICuAfe69BZbQRC/ecsv4Lmp0NIPtO9AkUzI8V6grR3sWgSivRMy1+1nzBPHnIaHMGP7LHw4/wQYjVg8NwwjESV/dvoq1pWZdrlLqhPLsfmuVAFTQ5CoGKt+XdTrmbbGOdjDdzpGdaYB8pgQ3Zp9ayEIqOjMY5DLQ31deg7Woeb+t+HJD6Nx6xlc3nIWvQmzb+jCsT4k2oyM8GRAw2x2/0+rxM8XZii55GtlxZxHYavo051rUlEr53udhpFrQIFJIYVUVAQ8kwtQWPck5NI8Z6amY0rBe0bjNrER6O5C2/bP4CN/8LD+QOkNwFZPIbUHKmqw8XLlrFSb7FPyvqmBaUwih/GryEicFJBd5ayd1jIBRYZ0vgNyzTO2nWpv/Bvd6w9Al30wAirKazYBxH1rw/dxbtKbUP0Bipr9G4oFpCah0wK+ykx/6vB9Sk4co06HmqpgmqKyOzHFdG01AbZ7mR2KxMk68B+/BW95AXwjA6RaAA3FL5A9ylDKAvDmCVcpPQXS7LPDdEU5u4apmJeXAalLxij4aKbeLKBWlt1ZW7CWkrwbuHuKY79P7YMa8vQ5gAXjLw0j8d5l2wbD91Y4yqXEaOvedrqsoNQf3b6M5ZZUFzDb5sGlFEjuQCZsOZw6moxto1p/F0HrxuSkEhaQA5NMsqtktj1dEQZVcZZS5STmEVdsJS3VvFkUTUJKrpLF1PXkJ3ZYYr9dRUvR6YDaipBjNTXCs3C8PWm9+ryrpJG23K6SaYp6KTdBimZAnmuMnULAcACzgSZt0oK0ytRWvPyKE5amVoD9egXQ2gCpuRlKpB35nVtJbQNmXReV466jpDuOkRU0T1JxFR/3Ziz32ab4JwiTWmaWI52lvJJcbtOFpq6TRkBsehbspV9SsP8G2Ldm256uUMCnrYcMT0J0wjZ4RpdS0bTPRKlKmpKZ9VgnC01DWrWd9lRd62Bl3FHPl6aoVTa6nYahAqqLO6BeMszueoiHVgNXmt1JOK8UR87CUH8Iz7hCRzXLKXg/pByLOSpKZpqipmjAJesEnHXHQevV+L+KPcodyDh4qBAX94NNWQKUTwZilwh2av/jInq+4QmgmSDiFKW7yGPCpZAnFIJpVGd5EMEHF4x1tlbLRC62QS0tythxJArEx/TjzyPFhVP3bvbHfd0/EEFaAtXMVLTxkPNyQV773N9o3ztPahr9NltCm8DEMDA+CHwlnyZh2A6WdCa5pRGhw2vIHAS0E1/AW+RzFTYHKDpRKWEvxndWp0qUeVTrqYiL88ILjWZPp28kaPA4Ca7RaUgmB3mgCu6GDRx4gRS+4LZxc8xtnzxFaV6wFXReWDvLtldL0Q72LMxRpRmnpwSXzKgp/jSrc81qDHJUs5X9y87wkqULAgfkmCJlgNIBCYVzwBbsciCZhJwT5/ZwsfDTMItLYBis/1PEBR0hjUFB46IM4dJH4Sse73pbH4VO7jE4PGlL76PJRU5C/G4sxOWjNIG4Y2MWsJ2Fk3lqpvquHoitb0EEH4enJESBQhsQdqzllpguao0LP0GW1R3kQwzef/y1PIZ6KmnWUqcpmrBUpXJHBLBCrvuJ0X9I9jr3UfcqyEbVor7n6R93mikbfrmsK79+ZUkWHsjZKmtrIe65Xaouv1lZLWmC9c2FuZ5p39NVJSfx0RnSb+U8JwcoB4NOziNPD1ltPANVoLgrubseCc+LfBWyr3ZFcBDRBv3uNmeviFQ3fi49VlLk3SV3GDJucLLsTEkI7vOVS4svPu1zWYb1c8AGLZ/Suafu/aL20ZO8VazZsD/4cIMSHcgMxTdOueP0Ts/HqOH4H/+DhvoXZFTM7ti/Znmw7PU/F1w1PrN/Nw3DpbMmwSVJRNXguXD1hq8ihx9WuQzIf18VbWVSI2sS+m5WQW9UKSJnC/jeQc6jzr3gAY2zsqB5KPKfu8LVW6bDWZkh/1MOd/nsfzUX3x25rXJG3pNoYRAt5EFaqterzjVhB3Zhl9UQi8W8LQdO1Kz97tEPDiLzFDnkoNedFs8I3rTpe6FllZWBlSX5/koPvAWgTUDSFL2njXVc+cL46OSpyN4/fBg/cry2NuF2G/bv6C/TjUr/BYAx1ubkm1GFAAAAAElFTkSuQmCC`,vh=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABedJREFUeAHNWG1sU1UYfu9nP7d2H90GbAuwyfhYZgxoQEUd6hJFwhhbmAthGhLB6B8gxl/60wQT4Z8ZRNEZcRPoBhr5QTAbgmIUooh0MAZCKG7r19p17drbe+/xnK6b7bZ2PW1NfJLb3px733Oe+57347wvA/Rg8IVK6xpKzMZVrcbCiq2ixlTLsrwJASPiRwxCICGkeBTJPzg+dtfquveD1W2/9hAyAEPxLltdXS3kr9j7UcGi2jfDwTFGlUPpyCOe14GgMzHjzptHf/123x4yF77UNGTTIsjhS1nf/IlVZyjZFg64sBRD82H/MgWkavUWNhL09Fw62b4dD/H4kiELglxd/fvPlVRtPB/02ZUY2eyBVEVvruBGb3//8vULB8/hEQUoCUbHn2nrOqkqcqOqyrkhNnsRTpCx7Z66+FVrGxAFJyMyzxjatOvMzVDQVQUMy8N/CIRUVWMoutXf2bgakpCZM1bffsYWnnA9AiybseYQSlRISrNVVUU0Ft/u79xKSKJUBLln27q/jEjBFjwjNTlJUsA3EYbGF1dAzfLimck1IgcfHr0MRoOYXBjbpSAYei90tbZCnE3GE+RWb3q3odBS942qSlTbSpRz/+9x6P24BdbWls2rrQ3Nn+ENSe2T2JpUv2Og4Y++D/qnSbJxz5VFy58/S0uOwOWZhEtft8Nja8qSbqWK0ILzIFVmS6rqz0OcBqcJMk+3fN4z6X2gACUIn6fWlUNFWT5wKTTEpJkTgl678mTzp6cgFtKmCSJBX7gN65ja7gIBCd57a2PC9inqlLZcY0FwuIPg84exbYbSm5ABTmOw4CC+Osolup2Pbzl0BIcUFX8lC5TwYYKVi00JY0STprqDUFFuntFAkVk/x7OTAWcrtHbz64evfvfO21H5vOJVb2RCjkDF2ppt/L/bRqGm2gImowbyYle65KLAhmwurSM5G7FF5RuWREI+CumFEVEUqlPIfJBCY2xpVUMJW7r0ie2KPAm5BJM1PWzHkUnIX7xyB28oWNoEdMcu7AQqeLyhqAd7sRPMhhRRwOkJgCDEfA7vj9mkA56jWobJNy1rZNY3HxtmGaaMRnIpNv7jhxrjCKOEEEPMbXY43Ln/NPxl9wINkKKMYvtmCoESAp/oT7Pj33yx2j4yDrRgOc5MVhJpBVEGLjXiCgAtSAmBCTIZeTAtyVCYOklFF8GBGkn4VkMjNzDkhGGnH0IhBSRZgZplhQk5OCzJYB/2z4yNuicg30i9UQT4YKDKPmD5EhopUeRh8+7uKAFiW45f9ic8H7jjhp0HToPIT3kxx7GQZ6AnqCJ5jJfCfpuoK6AiSLKCXidE76f/40EUp9PwIArZVQoRKXCT9Xvv98L/EbgEDLjv9rDe4YFujtflNNVBDmbjRT04b13oYUfvnHOIenNOCSISILLMdoI2n3G7rz0kcZDxDv/ZQXfcSI1sZ8JUVN+I7Qi5JwTR1XvH9uHSL/sMP7MAZAWd0cJeOXtgL7mfylk2m4wPiVaET3eQI2T8tbi6CwfdVohxm06q6k+ndjcbTJUZHVrnLkJ+MqOoN1dyP554rRlizaV4QpzjTt8LpPQDGsyznSw+VqEMXJllBeXB0LmXIK4HNKdw39jW3aVIgaZ0C6gQTmt729YCG3Nb8n/5NzvcuO0EGmC/UHjBeOJi145dENfxStH6cFZjVaRVI6OZn9gElLuLuclao2Wwr3NrLSzQ+phBffvpG+GApyaTFgglOUVjKB7s/2L+5lFSp+jrbKzlBMMJrMQMzknpAbfeVF5r7MHk1iR9J4U8Ivbgsd94RW8qj34q5Aq4gW3Ac3oc1xsuHm99FVIkx3SsJdqm3dDSadXqC5tCQQcu8NmMwhHOEEhrLGImJ1zWn3FYg1h7OZUMjTlHG5vrthzuMFlW7iG1tCxNplVjcoIOidoCnL6ud1wZ7DgAQ0PyQsTiF80IReWPLrEsq28y5Fc2Cdq8lRzLFyBS30xVdBJuG/uksM824XrQ63UOdJNDyfRH0qzzD+bDR7GNxUL7AAAAAElFTkSuQmCC`,yh=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAACGJJREFUeAG9WAtwVNUZ/u+9+7rZbJLdzYYk7K5BNjZugq2gph1Li05LeQQkQRK10HYGR0Cp7ciMrdM6004f1qlUCx2IWGitWG1CHgOWjq1FrFXRDIg8Fggx5LUh2SS7SXazj7t77/U/JyEkZLP3Bg3/zZ3s3j33nO/8j+///8PAzIXBW75tw/yc/FLLA5aitPuMVkMJp2MzZRl05Hf8L0BC8ocD8eb+C8G61trWuuYjA164DmFmMJZ1uVza0l327fZS25YRf4SJj4iK78v4p0/ngLcamO6mgT377317E5kLbwlUiBqAHN7iIyeW1ZkcfHmwJwIMClyHoGaljByeDQ5E6190H16LjzR4J+BzAOTW7L9zSdGaeW/5W4Miw1Kwn1tkURat80zcmdrOFYc2Hvs3PhJhhgDp863nV9VKrLRGFKQvBNi1gn6b0LDcgR2ugw8B9YZpgCR5Jj/RWX4+5I/MZzhGA7MoqE3JaOYvPO9scCf7nU32cFtHxbngQMQ12+CI4BosKuKWJ3BNSKKwawFyj7eU/T0YCBeyGmZWzJpMyFohf7jwh82rawAm+/lEgNyql7+6NCHJ9+Oubhi4K8IgSBHEijIMSpgAcpJKfzq0Tg50hmAmwuAlyDEIJgYBg5M+YzHcTVwm6FkePV+e0XyWAhM8k17DXJ1/7P9mz8o6KSGtVkslhAp7Y15YmPF1WJ//ONgN80DDaOlvsiyBN9YGB3pegnf8/4Rcg5M+UyOyhLtMyI17Fr5ZhV+vZoJtvRVyqC+iahJRTkCWNht+d8vfECgL5AqLIfDHfZgeJDBrbGDSZI6Pf6b1R3AhdAoMHK9q/vQcHv61pF7v8YBAAW44cs+LaTbDw6hPVunlCAKpytsCy7Ir0ZQcaunP8Gr3TuC5NASQRsdExTBEpTCszH4INjp+ggqJw/Gh/8ML7U9BpsaitARIsiyHeiK7X/v2O1spwCeDa+Wh9rDii6h7WG37PgUXlwVYd3IROA3zp/Uzotn2yEXYt+C/kK3LhePD70J1x69AxxoU18pypIvPZtZqWHuZfW54QFD0ZGJKHcPDClsVGlGEyjFwJECmA0jM7eDnw+azK9H8feivi6GA/5IaQ0E4EGFJxcSWLM1bK4QSii8MCD3wfFENEO6uPHkHOBCcT7gMvy7cC7cav0KjeTqZo58LPzi9BINIA0+7dkGP0Km4nhASIf9rWVWs7baMckZFVZOvv4ku8L/AYcjTO2FEDMLuYoxQ/Pyo8xfQhxtIJU6DC331T7SkuStzCagQJtuduYbVm7VFSiOJqQiVkKDY0/Eb+owAzNHlUc1pGR24029POQdxg7revdRVqnI308BREj5LW8yyHKMYVuFECAqNC+gyUWmUigjYhDzqGoQTm0dOK02DPqyj0W033AwhcUhxPKdls1i0rU5pIAkEI2eiQPVjEWjV5kBD7z6kBAlawmfHn6cSA2aWYcw4OlaPHYGy35MWgoSTcgTjRcxMzDMxYv9xuZpqhETm3ebvUBqi41GjQwn/lHkkfPdKMDEqinmyFotzCUoDyc7D6HM8Zxw3MREb+uADn5TS4NlofxI5cgP0xLrgcqQD/rLgCBL6ZvzeCVdqj4g4AmatDYk8AhpWq7Qs2YLAYrWs6AwGBHYCMwERYtqJO7Tr50H5iS9T+llhexAaFn4Cu0reoGT8TUsZNC48TXM2Eaye6WZawmdoMaEkoiAHWCRpj9JAYoz93TsQjgQ/LvjtpAgkps/TO2D1cTd4Qieo6fKRetgxMia5n2gQsxelIzJ+n/f3NMiUJDqcOM8GLoYaQIUk8CLmc6cvor40Ucii+YYC+GP7z6Dy4zsxeP4KXdFW+CDwH1j78e1gxTTXH++BxeblEBej4I1eUlwPrSP7PIP1mq73/a/fvGzOC0o9LtEIFpRUQ0OJAbBp86aMIeWWRWeDN/tr4VDfftAiQeQaHHApfB4O39FMXeKxc/eBBd1EqU7Um7TQdqCtnj31yqe+dDOvGMnD8UHqbz7BCwbMyf2YOUiRKkixpON1jJ66hF/oo+BIMfuydzvdhJoilrfqGXIaQZoipvNDX7Uxn9+SqiEvSCukExM/e9q1GwrTiqkfEYLe0f5zGq0kAJBj0IwxrF7yYOtNv4QF6aX0/b1dz0LT0NHxojaVkAbfe2zgJfKZAnK73brlbxfFpitYCbDvYqpbbF42zl+E/0h0OnkXjE7E0BKMjB3V3qiWCDE/5lmFUZuhuvg32Xh4bk49XYi2lR6PJ3G311HHaNhyhp1aCwXQTN9ABz8TbII3+l7F4vNdymMkI5DoXJf7CCzKXIyVdDbVYF/8MpwMvg+vde9C0DFKKWp7E3LqEOqPNsLY+c0kkz4VWif726Y2TcSUPqGbApiu4SMELkhRsgQC52nqU5MtrhWLE5umjKtN06S281xj17fwOGJKd0O4LFs7B1J1oyTbZGjMeFvo5+sBx+lZ8WzNpeUwoe2cCFBsXP/BUS3DYXcni3CDRULTogJqDj7c9BZMOExKejazraPcEwzcmKMPIrIoJUyWtObtjoYSuKZ4SdYcyNudDbciNzbL4uxrklgrw2y8iOCKIUllNW338gdnQ4neqK3hdNysgcSCVDIYdfXPOeuLpxuTqr2Sd7oOfa/tvd4yi8MEX6Q2yekBOeLoaPIt3Vl48EFIUZOqCTV6TLvJs6LOZOUrhnvDUjKuVAlMzshNY4a7RurwaON+GDteTvXOTLiAHmyuP3JPdf5d1k2R/pgcw3ZVTUeoNXJyupWXOo71VX/06NFtLS209FZlkes6DCdiv9c6t6SyoMLqMlVgYi9C/jQTjiYZA1sDQRLEocig4PGdHWzo+bD79VOv9PqubHIm63wGiDNt8r1lE8wAAAAASUVORK5CYII=`;function bh({themeColors:e}){let{t}=kt();return(0,M.jsxs)(nh,{id:`contacts`,$themeColors:e,children:[(0,M.jsxs)(rh,{children:[(0,M.jsx)(ih,{children:(0,M.jsx)(ah,{src:gh,alt:`247 forecast`})}),(0,M.jsxs)(oh,{children:[(0,M.jsx)(sh,{children:t(`address`)}),(0,M.jsxs)(ch,{children:[(0,M.jsx)(mt,{"aria-hidden":`true`}),(0,M.jsxs)(`span`,{children:[`Svobody str. 35`,(0,M.jsx)(`br`,{}),`Kyiv, Ukraine`]})]})]}),(0,M.jsxs)(oh,{children:[(0,M.jsx)(sh,{children:t(`contactUs`)}),(0,M.jsxs)(lh,{children:[(0,M.jsx)(uh,{href:`#`,target:`_blank`,rel:`noopener noreferrer`,children:(0,M.jsx)(dh,{src:_h,alt:`Instagram`})}),(0,M.jsx)(uh,{href:`#`,target:`_blank`,rel:`noopener noreferrer`,children:(0,M.jsx)(dh,{src:vh,alt:`Facebook`})}),(0,M.jsx)(uh,{href:`#`,target:`_blank`,rel:`noopener noreferrer`,children:(0,M.jsx)(dh,{src:yh,alt:`WhatsApp`})})]})]})]}),(0,M.jsxs)(fh,{children:[(0,M.jsxs)(ph,{children:[`© 2025 `,(0,M.jsx)(`span`,{children:`247 forecast`}),`. All rights reserved.`]}),(0,M.jsx)(mh,{href:`#about`,children:t(`aboutUs`)}),(0,M.jsx)(hh,{type:`button`,onClick:()=>{window.scrollTo({top:0,behavior:`smooth`})},"aria-label":`Back to top`,title:`Back to top`,children:(0,M.jsx)(bt,{size:17})})]})]})}var xh=function(e){return Sh(e)&&!Ch(e)};function Sh(e){return!!e&&typeof e==`object`}function Ch(e){var t=Object.prototype.toString.call(e);return t===`[object RegExp]`||t===`[object Date]`||Th(e)}var wh=typeof Symbol==`function`&&Symbol.for?Symbol.for(`react.element`):60103;function Th(e){return e.$$typeof===wh}function Eh(e){return Array.isArray(e)?[]:{}}function Dh(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Ah(Eh(e),e,t):e}function Oh(e,t,n){return e.concat(t).map(function(e){return Dh(e,n)})}function kh(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(t){r[t]=Dh(e[t],n)}),Object.keys(t).forEach(function(i){r[i]=!n.isMergeableObject(t[i])||!e[i]?Dh(t[i],n):Ah(e[i],t[i],n)}),r}function Ah(e,t,n){n||={},n.arrayMerge=n.arrayMerge||Oh,n.isMergeableObject=n.isMergeableObject||xh;var r=Array.isArray(t);return r===Array.isArray(e)?r?n.arrayMerge(e,t,n):kh(e,t,n):Dh(t,n)}Ah.all=function(e,t){if(!Array.isArray(e))throw Error(`first argument should be an array`);return e.reduce(function(e,n){return Ah(e,n,t)},{})};var jh=Ah,Mh=typeof global==`object`&&global&&global.Object===Object&&global,Nh=typeof self==`object`&&self&&self.Object===Object&&self,Ph=Mh||Nh||Function(`return this`)(),Fh=Ph.Symbol,Ih=Object.prototype,Lh=Ih.hasOwnProperty,Rh=Ih.toString,zh=Fh?Fh.toStringTag:void 0;function Bh(e){var t=Lh.call(e,zh),n=e[zh];try{e[zh]=void 0;var r=!0}catch{}var i=Rh.call(e);return r&&(t?e[zh]=n:delete e[zh]),i}var Vh=Object.prototype.toString;function Hh(e){return Vh.call(e)}var Uh=`[object Null]`,Wh=`[object Undefined]`,Gh=Fh?Fh.toStringTag:void 0;function Kh(e){return e==null?e===void 0?Wh:Uh:Gh&&Gh in Object(e)?Bh(e):Hh(e)}function qh(e,t){return function(n){return e(t(n))}}var Jh=qh(Object.getPrototypeOf,Object);function Yh(e){return typeof e==`object`&&!!e}var Xh=`[object Object]`,Zh=Function.prototype,Qh=Object.prototype,$h=Zh.toString,eg=Qh.hasOwnProperty,tg=$h.call(Object);function ng(e){if(!Yh(e)||Kh(e)!=Xh)return!1;var t=Jh(e);if(t===null)return!0;var n=eg.call(t,`constructor`)&&t.constructor;return typeof n==`function`&&n instanceof n&&$h.call(n)==tg}function rg(){this.__data__=[],this.size=0}function ig(e,t){return e===t||e!==e&&t!==t}function ag(e,t){for(var n=e.length;n--;)if(ig(e[n][0],t))return n;return-1}var og=Array.prototype.splice;function sg(e){var t=this.__data__,n=ag(t,e);return n<0?!1:(n==t.length-1?t.pop():og.call(t,n,1),--this.size,!0)}function cg(e){var t=this.__data__,n=ag(t,e);return n<0?void 0:t[n][1]}function lg(e){return ag(this.__data__,e)>-1}function ug(e,t){var n=this.__data__,r=ag(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function dg(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}dg.prototype.clear=rg,dg.prototype.delete=sg,dg.prototype.get=cg,dg.prototype.has=lg,dg.prototype.set=ug;function fg(){this.__data__=new dg,this.size=0}function pg(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function mg(e){return this.__data__.get(e)}function hg(e){return this.__data__.has(e)}function gg(e){var t=typeof e;return e!=null&&(t==`object`||t==`function`)}var _g=`[object AsyncFunction]`,vg=`[object Function]`,yg=`[object GeneratorFunction]`,bg=`[object Proxy]`;function xg(e){if(!gg(e))return!1;var t=Kh(e);return t==vg||t==yg||t==_g||t==bg}var Sg=Ph[`__core-js_shared__`],Cg=function(){var e=/[^.]+$/.exec(Sg&&Sg.keys&&Sg.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}();function wg(e){return!!Cg&&Cg in e}var Tg=Function.prototype.toString;function Eg(e){if(e!=null){try{return Tg.call(e)}catch{}try{return e+``}catch{}}return``}var Dg=/[\\^$.*+?()[\]{}|]/g,Og=/^\[object .+?Constructor\]$/,kg=Function.prototype,Ag=Object.prototype,jg=kg.toString,Mg=Ag.hasOwnProperty,Ng=RegExp(`^`+jg.call(Mg).replace(Dg,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`);function Pg(e){return!gg(e)||wg(e)?!1:(xg(e)?Ng:Og).test(Eg(e))}function Fg(e,t){return e?.[t]}function Ig(e,t){var n=Fg(e,t);return Pg(n)?n:void 0}var Lg=Ig(Ph,`Map`),Rg=Ig(Object,`create`);function zg(){this.__data__=Rg?Rg(null):{},this.size=0}function Bg(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=+!!t,t}var Vg=`__lodash_hash_undefined__`,Hg=Object.prototype.hasOwnProperty;function Ug(e){var t=this.__data__;if(Rg){var n=t[e];return n===Vg?void 0:n}return Hg.call(t,e)?t[e]:void 0}var Wg=Object.prototype.hasOwnProperty;function Gg(e){var t=this.__data__;return Rg?t[e]!==void 0:Wg.call(t,e)}var Kg=`__lodash_hash_undefined__`;function qg(e,t){var n=this.__data__;return this.size+=+!this.has(e),n[e]=Rg&&t===void 0?Kg:t,this}function Jg(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Jg.prototype.clear=zg,Jg.prototype.delete=Bg,Jg.prototype.get=Ug,Jg.prototype.has=Gg,Jg.prototype.set=qg;function Yg(){this.size=0,this.__data__={hash:new Jg,map:new(Lg||dg),string:new Jg}}function Xg(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}function Zg(e,t){var n=e.__data__;return Xg(t)?n[typeof t==`string`?`string`:`hash`]:n.map}function Qg(e){var t=Zg(this,e).delete(e);return this.size-=+!!t,t}function $g(e){return Zg(this,e).get(e)}function e_(e){return Zg(this,e).has(e)}function t_(e,t){var n=Zg(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function n_(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}n_.prototype.clear=Yg,n_.prototype.delete=Qg,n_.prototype.get=$g,n_.prototype.has=e_,n_.prototype.set=t_;var r_=200;function i_(e,t){var n=this.__data__;if(n instanceof dg){var r=n.__data__;if(!Lg||r.length<r_-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new n_(r)}return n.set(e,t),this.size=n.size,this}function a_(e){var t=this.__data__=new dg(e);this.size=t.size}a_.prototype.clear=fg,a_.prototype.delete=pg,a_.prototype.get=mg,a_.prototype.has=hg,a_.prototype.set=i_;function o_(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var s_=function(){try{var e=Ig(Object,`defineProperty`);return e({},``,{}),e}catch{}}();function c_(e,t,n){t==`__proto__`&&s_?s_(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var l_=Object.prototype.hasOwnProperty;function u_(e,t,n){var r=e[t];(!(l_.call(e,t)&&ig(r,n))||n===void 0&&!(t in e))&&c_(e,t,n)}function d_(e,t,n,r){var i=!n;n||={};for(var a=-1,o=t.length;++a<o;){var s=t[a],c=r?r(n[s],e[s],s,n,e):void 0;c===void 0&&(c=e[s]),i?c_(n,s,c):u_(n,s,c)}return n}function f_(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var p_=`[object Arguments]`;function m_(e){return Yh(e)&&Kh(e)==p_}var h_=Object.prototype,g_=h_.hasOwnProperty,__=h_.propertyIsEnumerable,v_=m_(function(){return arguments}())?m_:function(e){return Yh(e)&&g_.call(e,`callee`)&&!__.call(e,`callee`)},y_=Array.isArray;function b_(){return!1}var x_=typeof exports==`object`&&exports&&!exports.nodeType&&exports,S_=x_&&typeof module==`object`&&module&&!module.nodeType&&module,C_=S_&&S_.exports===x_?Ph.Buffer:void 0,w_=(C_?C_.isBuffer:void 0)||b_,T_=9007199254740991,E_=/^(?:0|[1-9]\d*)$/;function D_(e,t){var n=typeof e;return t??=T_,!!t&&(n==`number`||n!=`symbol`&&E_.test(e))&&e>-1&&e%1==0&&e<t}var O_=9007199254740991;function k_(e){return typeof e==`number`&&e>-1&&e%1==0&&e<=O_}var A_=`[object Arguments]`,j_=`[object Array]`,M_=`[object Boolean]`,N_=`[object Date]`,P_=`[object Error]`,F_=`[object Function]`,I_=`[object Map]`,L_=`[object Number]`,R_=`[object Object]`,z_=`[object RegExp]`,B_=`[object Set]`,V_=`[object String]`,H_=`[object WeakMap]`,U_=`[object ArrayBuffer]`,W_=`[object DataView]`,G_=`[object Float32Array]`,K_=`[object Float64Array]`,q_=`[object Int8Array]`,J_=`[object Int16Array]`,Y_=`[object Int32Array]`,X_=`[object Uint8Array]`,Z_=`[object Uint8ClampedArray]`,Q_=`[object Uint16Array]`,$_=`[object Uint32Array]`,ev={};ev[G_]=ev[K_]=ev[q_]=ev[J_]=ev[Y_]=ev[X_]=ev[Z_]=ev[Q_]=ev[$_]=!0,ev[A_]=ev[j_]=ev[U_]=ev[M_]=ev[W_]=ev[N_]=ev[P_]=ev[F_]=ev[I_]=ev[L_]=ev[R_]=ev[z_]=ev[B_]=ev[V_]=ev[H_]=!1;function tv(e){return Yh(e)&&k_(e.length)&&!!ev[Kh(e)]}function nv(e){return function(t){return e(t)}}var rv=typeof exports==`object`&&exports&&!exports.nodeType&&exports,iv=rv&&typeof module==`object`&&module&&!module.nodeType&&module,av=iv&&iv.exports===rv&&Mh.process,ov=function(){try{return iv&&iv.require&&iv.require(`util`).types||av&&av.binding&&av.binding(`util`)}catch{}}(),sv=ov&&ov.isTypedArray,cv=sv?nv(sv):tv,lv=Object.prototype.hasOwnProperty;function uv(e,t){var n=y_(e),r=!n&&v_(e),i=!n&&!r&&w_(e),a=!n&&!r&&!i&&cv(e),o=n||r||i||a,s=o?f_(e.length,String):[],c=s.length;for(var l in e)(t||lv.call(e,l))&&!(o&&(l==`length`||i&&(l==`offset`||l==`parent`)||a&&(l==`buffer`||l==`byteLength`||l==`byteOffset`)||D_(l,c)))&&s.push(l);return s}var dv=Object.prototype;function fv(e){var t=e&&e.constructor;return e===(typeof t==`function`&&t.prototype||dv)}var pv=qh(Object.keys,Object),mv=Object.prototype.hasOwnProperty;function hv(e){if(!fv(e))return pv(e);var t=[];for(var n in Object(e))mv.call(e,n)&&n!=`constructor`&&t.push(n);return t}function gv(e){return e!=null&&k_(e.length)&&!xg(e)}function _v(e){return gv(e)?uv(e):hv(e)}function vv(e,t){return e&&d_(t,_v(t),e)}function yv(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var bv=Object.prototype.hasOwnProperty;function xv(e){if(!gg(e))return yv(e);var t=fv(e),n=[];for(var r in e)r==`constructor`&&(t||!bv.call(e,r))||n.push(r);return n}function Sv(e){return gv(e)?uv(e,!0):xv(e)}function Cv(e,t){return e&&d_(t,Sv(t),e)}var wv=typeof exports==`object`&&exports&&!exports.nodeType&&exports,Tv=wv&&typeof module==`object`&&module&&!module.nodeType&&module,Ev=Tv&&Tv.exports===wv?Ph.Buffer:void 0,Dv=Ev?Ev.allocUnsafe:void 0;function Ov(e,t){if(t)return e.slice();var n=e.length,r=Dv?Dv(n):new e.constructor(n);return e.copy(r),r}function kv(e,t){var n=-1,r=e.length;for(t||=Array(r);++n<r;)t[n]=e[n];return t}function Av(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}function jv(){return[]}var Mv=Object.prototype.propertyIsEnumerable,Nv=Object.getOwnPropertySymbols,Pv=Nv?function(e){return e==null?[]:(e=Object(e),Av(Nv(e),function(t){return Mv.call(e,t)}))}:jv;function Fv(e,t){return d_(e,Pv(e),t)}function Iv(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var Lv=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)Iv(t,Pv(e)),e=Jh(e);return t}:jv;function Rv(e,t){return d_(e,Lv(e),t)}function zv(e,t,n){var r=t(e);return y_(e)?r:Iv(r,n(e))}function Bv(e){return zv(e,_v,Pv)}function Vv(e){return zv(e,Sv,Lv)}var Hv=Ig(Ph,`DataView`),Uv=Ig(Ph,`Promise`),Wv=Ig(Ph,`Set`),Gv=Ig(Ph,`WeakMap`),Kv=`[object Map]`,qv=`[object Object]`,Jv=`[object Promise]`,Yv=`[object Set]`,Xv=`[object WeakMap]`,Zv=`[object DataView]`,Qv=Eg(Hv),$v=Eg(Lg),ey=Eg(Uv),ty=Eg(Wv),ny=Eg(Gv),ry=Kh;(Hv&&ry(new Hv(new ArrayBuffer(1)))!=Zv||Lg&&ry(new Lg)!=Kv||Uv&&ry(Uv.resolve())!=Jv||Wv&&ry(new Wv)!=Yv||Gv&&ry(new Gv)!=Xv)&&(ry=function(e){var t=Kh(e),n=t==qv?e.constructor:void 0,r=n?Eg(n):``;if(r)switch(r){case Qv:return Zv;case $v:return Kv;case ey:return Jv;case ty:return Yv;case ny:return Xv}return t});var iy=ry,ay=Object.prototype.hasOwnProperty;function oy(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]==`string`&&ay.call(e,`index`)&&(n.index=e.index,n.input=e.input),n}var sy=Ph.Uint8Array;function cy(e){var t=new e.constructor(e.byteLength);return new sy(t).set(new sy(e)),t}function ly(e,t){var n=t?cy(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var uy=/\w*$/;function dy(e){var t=new e.constructor(e.source,uy.exec(e));return t.lastIndex=e.lastIndex,t}var fy=Fh?Fh.prototype:void 0,py=fy?fy.valueOf:void 0;function my(e){return py?Object(py.call(e)):{}}function hy(e,t){var n=t?cy(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var gy=`[object Boolean]`,_y=`[object Date]`,vy=`[object Map]`,yy=`[object Number]`,by=`[object RegExp]`,xy=`[object Set]`,Sy=`[object String]`,Cy=`[object Symbol]`,wy=`[object ArrayBuffer]`,Ty=`[object DataView]`,Ey=`[object Float32Array]`,Dy=`[object Float64Array]`,Oy=`[object Int8Array]`,ky=`[object Int16Array]`,Ay=`[object Int32Array]`,jy=`[object Uint8Array]`,My=`[object Uint8ClampedArray]`,Ny=`[object Uint16Array]`,Py=`[object Uint32Array]`;function Fy(e,t,n){var r=e.constructor;switch(t){case wy:return cy(e);case gy:case _y:return new r(+e);case Ty:return ly(e,n);case Ey:case Dy:case Oy:case ky:case Ay:case jy:case My:case Ny:case Py:return hy(e,n);case vy:return new r;case yy:case Sy:return new r(e);case by:return dy(e);case xy:return new r;case Cy:return my(e)}}var Iy=Object.create,Ly=function(){function e(){}return function(t){if(!gg(t))return{};if(Iy)return Iy(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function Ry(e){return typeof e.constructor==`function`&&!fv(e)?Ly(Jh(e)):{}}var zy=`[object Map]`;function By(e){return Yh(e)&&iy(e)==zy}var Vy=ov&&ov.isMap,Hy=Vy?nv(Vy):By,Uy=`[object Set]`;function Wy(e){return Yh(e)&&iy(e)==Uy}var Gy=ov&&ov.isSet,Ky=Gy?nv(Gy):Wy,qy=1,Jy=2,Yy=4,Xy=`[object Arguments]`,Zy=`[object Array]`,Qy=`[object Boolean]`,$y=`[object Date]`,eb=`[object Error]`,tb=`[object Function]`,nb=`[object GeneratorFunction]`,rb=`[object Map]`,ib=`[object Number]`,ab=`[object Object]`,ob=`[object RegExp]`,sb=`[object Set]`,cb=`[object String]`,lb=`[object Symbol]`,ub=`[object WeakMap]`,db=`[object ArrayBuffer]`,fb=`[object DataView]`,pb=`[object Float32Array]`,mb=`[object Float64Array]`,hb=`[object Int8Array]`,gb=`[object Int16Array]`,_b=`[object Int32Array]`,vb=`[object Uint8Array]`,yb=`[object Uint8ClampedArray]`,bb=`[object Uint16Array]`,xb=`[object Uint32Array]`,Sb={};Sb[Xy]=Sb[Zy]=Sb[db]=Sb[fb]=Sb[Qy]=Sb[$y]=Sb[pb]=Sb[mb]=Sb[hb]=Sb[gb]=Sb[_b]=Sb[rb]=Sb[ib]=Sb[ab]=Sb[ob]=Sb[sb]=Sb[cb]=Sb[lb]=Sb[vb]=Sb[yb]=Sb[bb]=Sb[xb]=!0,Sb[eb]=Sb[tb]=Sb[ub]=!1;function Cb(e,t,n,r,i,a){var o,s=t&qy,c=t&Jy,l=t&Yy;if(n&&(o=i?n(e,r,i,a):n(e)),o!==void 0)return o;if(!gg(e))return e;var u=y_(e);if(u){if(o=oy(e),!s)return kv(e,o)}else{var d=iy(e),f=d==tb||d==nb;if(w_(e))return Ov(e,s);if(d==ab||d==Xy||f&&!i){if(o=c||f?{}:Ry(e),!s)return c?Rv(e,Cv(o,e)):Fv(e,vv(o,e))}else{if(!Sb[d])return i?e:{};o=Fy(e,d,s)}}a||=new a_;var p=a.get(e);if(p)return p;a.set(e,o),Ky(e)?e.forEach(function(r){o.add(Cb(r,t,n,r,e,a))}):Hy(e)&&e.forEach(function(r,i){o.set(i,Cb(r,t,n,i,e,a))});var m=u?void 0:(l?c?Vv:Bv:c?Sv:_v)(e);return o_(m||e,function(r,i){m&&(i=r,r=e[i]),u_(o,i,Cb(r,t,n,i,e,a))}),o}var wb=1,Tb=4;function Eb(e){return Cb(e,wb|Tb)}var Db=c(o(((e,t)=>{var n=Array.isArray,r=Object.keys,i=Object.prototype.hasOwnProperty,a=typeof Element<`u`;function o(e,t){if(e===t)return!0;if(e&&t&&typeof e==`object`&&typeof t==`object`){var s=n(e),c=n(t),l,u,d;if(s&&c){if(u=e.length,u!=t.length)return!1;for(l=u;l--!==0;)if(!o(e[l],t[l]))return!1;return!0}if(s!=c)return!1;var f=e instanceof Date,p=t instanceof Date;if(f!=p)return!1;if(f&&p)return e.getTime()==t.getTime();var m=e instanceof RegExp,h=t instanceof RegExp;if(m!=h)return!1;if(m&&h)return e.toString()==t.toString();var g=r(e);if(u=g.length,u!==r(t).length)return!1;for(l=u;l--!==0;)if(!i.call(t,g[l]))return!1;if(a&&e instanceof Element&&t instanceof Element)return e===t;for(l=u;l--!==0;)if(d=g[l],!(d===`_owner`&&e.$$typeof)&&!o(e[d],t[d]))return!1;return!0}return e!==e&&t!==t}t.exports=function(e,t){try{return o(e,t)}catch(e){if(e.message&&e.message.match(/stack|recursion/i)||e.number===-2146828260)return console.warn(`Warning: react-fast-compare does not handle circular references.`,e.name,e.message),!1;throw e}}}))()),Ob=4;function kb(e){return Cb(e,Ob)}function Ab(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var jb=`[object Symbol]`;function Mb(e){return typeof e==`symbol`||Yh(e)&&Kh(e)==jb}var Nb=`Expected a function`;function Pb(e,t){if(typeof e!=`function`||t!=null&&typeof t!=`function`)throw TypeError(Nb);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Pb.Cache||n_),n}Pb.Cache=n_;var Fb=500;function Ib(e){var t=Pb(e,function(e){return n.size===Fb&&n.clear(),e}),n=t.cache;return t}var Lb=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Rb=/\\(\\)?/g,zb=Ib(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(``),e.replace(Lb,function(e,n,r,i){t.push(r?i.replace(Rb,`$1`):n||e)}),t}),Bb=1/0;function Vb(e){if(typeof e==`string`||Mb(e))return e;var t=e+``;return t==`0`&&1/e==-Bb?`-0`:t}var Hb=1/0,Ub=Fh?Fh.prototype:void 0,Wb=Ub?Ub.toString:void 0;function Gb(e){if(typeof e==`string`)return e;if(y_(e))return Ab(e,Gb)+``;if(Mb(e))return Wb?Wb.call(e):``;var t=e+``;return t==`0`&&1/e==-Hb?`-0`:t}function Kb(e){return e==null?``:Gb(e)}function qb(e){return y_(e)?Ab(e,Vb):Mb(e)?[e]:kv(zb(Kb(e)))}var Jb=o((e=>{var t=typeof Symbol==`function`&&Symbol.for,n=t?Symbol.for(`react.element`):60103,r=t?Symbol.for(`react.portal`):60106,i=t?Symbol.for(`react.fragment`):60107,a=t?Symbol.for(`react.strict_mode`):60108,o=t?Symbol.for(`react.profiler`):60114,s=t?Symbol.for(`react.provider`):60109,c=t?Symbol.for(`react.context`):60110,l=t?Symbol.for(`react.async_mode`):60111,u=t?Symbol.for(`react.concurrent_mode`):60111,d=t?Symbol.for(`react.forward_ref`):60112,f=t?Symbol.for(`react.suspense`):60113,p=t?Symbol.for(`react.suspense_list`):60120,m=t?Symbol.for(`react.memo`):60115,h=t?Symbol.for(`react.lazy`):60116,g=t?Symbol.for(`react.block`):60121,_=t?Symbol.for(`react.fundamental`):60117,v=t?Symbol.for(`react.responder`):60118,y=t?Symbol.for(`react.scope`):60119;function b(e){if(typeof e==`object`&&e){var t=e.$$typeof;switch(t){case n:switch(e=e.type,e){case l:case u:case i:case o:case a:case f:return e;default:switch(e&&=e.$$typeof,e){case c:case d:case h:case m:case s:return e;default:return t}}case r:return t}}}function x(e){return b(e)===u}e.AsyncMode=l,e.ConcurrentMode=u,e.ContextConsumer=c,e.ContextProvider=s,e.Element=n,e.ForwardRef=d,e.Fragment=i,e.Lazy=h,e.Memo=m,e.Portal=r,e.Profiler=o,e.StrictMode=a,e.Suspense=f,e.isAsyncMode=function(e){return x(e)||b(e)===l},e.isConcurrentMode=x,e.isContextConsumer=function(e){return b(e)===c},e.isContextProvider=function(e){return b(e)===s},e.isElement=function(e){return typeof e==`object`&&!!e&&e.$$typeof===n},e.isForwardRef=function(e){return b(e)===d},e.isFragment=function(e){return b(e)===i},e.isLazy=function(e){return b(e)===h},e.isMemo=function(e){return b(e)===m},e.isPortal=function(e){return b(e)===r},e.isProfiler=function(e){return b(e)===o},e.isStrictMode=function(e){return b(e)===a},e.isSuspense=function(e){return b(e)===f},e.isValidElementType=function(e){return typeof e==`string`||typeof e==`function`||e===i||e===u||e===o||e===a||e===f||e===p||typeof e==`object`&&!!e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===_||e.$$typeof===v||e.$$typeof===y||e.$$typeof===g)},e.typeOf=b})),Yb=o(((e,t)=>{t.exports=Jb()}));o(((e,t)=>{var n=Yb(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[n.ForwardRef]=a,s[n.Memo]=o;function c(e){return n.isMemo(e)?o:s[e.$$typeof]||r}var l=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;function h(e,t,n){if(typeof t!=`string`){if(m){var r=p(t);r&&r!==m&&h(e,r,n)}var a=u(t);d&&(a=a.concat(d(t)));for(var o=c(e),s=c(t),g=0;g<a.length;++g){var _=a[g];if(!i[_]&&!(n&&n[_])&&!(s&&s[_])&&!(o&&o[_])){var v=f(t,_);try{l(e,_,v)}catch{}}}}return e}t.exports=h}))();function Xb(){return Xb=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xb.apply(this,arguments)}function Zb(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function Qb(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function $b(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}var ex=(0,_.createContext)(void 0);ex.displayName=`FormikContext`,ex.Provider,ex.Consumer;function tx(){return(0,_.useContext)(ex)}var nx=function(e){return Array.isArray(e)&&e.length===0},rx=function(e){return typeof e==`function`},ix=function(e){return typeof e==`object`&&!!e},ax=function(e){return String(Math.floor(Number(e)))===e},ox=function(e){return Object.prototype.toString.call(e)===`[object String]`},sx=function(e){return _.Children.count(e)===0},cx=function(e){return ix(e)&&rx(e.then)};function lx(e,t,n,r){r===void 0&&(r=0);for(var i=qb(t);e&&r<i.length;)e=e[i[r++]];return r!==i.length&&!e||e===void 0?n:e}function ux(e,t,n){for(var r=kb(e),i=r,a=0,o=qb(t);a<o.length-1;a++){var s=o[a],c=lx(e,o.slice(0,a+1));if(c&&(ix(c)||Array.isArray(c)))i=i[s]=kb(c);else{var l=o[a+1];i=i[s]=ax(l)&&Number(l)>=0?[]:{}}}return(a===0?e:i)[o[a]]===n?e:(n===void 0?delete i[o[a]]:i[o[a]]=n,a===0&&n===void 0&&delete r[o[a]],r)}function dx(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,a=Object.keys(e);i<a.length;i++){var o=a[i],s=e[o];ix(s)?n.get(s)||(n.set(s,!0),r[o]=Array.isArray(s)?[]:{},dx(s,t,n,r[o])):r[o]=t}return r}function fx(e,t){switch(t.type){case`SET_VALUES`:return Xb({},e,{values:t.payload});case`SET_TOUCHED`:return Xb({},e,{touched:t.payload});case`SET_ERRORS`:return(0,Db.default)(e.errors,t.payload)?e:Xb({},e,{errors:t.payload});case`SET_STATUS`:return Xb({},e,{status:t.payload});case`SET_ISSUBMITTING`:return Xb({},e,{isSubmitting:t.payload});case`SET_ISVALIDATING`:return Xb({},e,{isValidating:t.payload});case`SET_FIELD_VALUE`:return Xb({},e,{values:ux(e.values,t.payload.field,t.payload.value)});case`SET_FIELD_TOUCHED`:return Xb({},e,{touched:ux(e.touched,t.payload.field,t.payload.value)});case`SET_FIELD_ERROR`:return Xb({},e,{errors:ux(e.errors,t.payload.field,t.payload.value)});case`RESET_FORM`:return Xb({},e,t.payload);case`SET_FORMIK_STATE`:return t.payload(e);case`SUBMIT_ATTEMPT`:return Xb({},e,{touched:dx(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case`SUBMIT_FAILURE`:return Xb({},e,{isSubmitting:!1});case`SUBMIT_SUCCESS`:return Xb({},e,{isSubmitting:!1});default:return e}}var px={},mx={};function hx(e){var t=e.validateOnChange,n=t===void 0||t,r=e.validateOnBlur,i=r===void 0||r,a=e.validateOnMount,o=a!==void 0&&a,s=e.isInitialValid,c=e.enableReinitialize,l=c!==void 0&&c,u=e.onSubmit,d=Qb(e,[`validateOnChange`,`validateOnBlur`,`validateOnMount`,`isInitialValid`,`enableReinitialize`,`onSubmit`]),f=Xb({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:u},d),p=(0,_.useRef)(f.initialValues),m=(0,_.useRef)(f.initialErrors||px),h=(0,_.useRef)(f.initialTouched||mx),g=(0,_.useRef)(f.initialStatus),v=(0,_.useRef)(!1),y=(0,_.useRef)({});(0,_.useEffect)(function(){return v.current=!0,function(){v.current=!1}},[]);var b=(0,_.useState)(0)[1],x=(0,_.useRef)({values:Eb(f.initialValues),errors:Eb(f.initialErrors)||px,touched:Eb(f.initialTouched)||mx,status:Eb(f.initialStatus),isSubmitting:!1,isValidating:!1,submitCount:0}),S=x.current,C=(0,_.useCallback)(function(e){var t=x.current;x.current=fx(t,e),t!==x.current&&b(function(e){return e+1})},[]),w=(0,_.useCallback)(function(e,t){return new Promise(function(n,r){var i=f.validate(e,t);i==null?n(px):cx(i)?i.then(function(e){n(e||px)},function(e){r(e)}):n(i)})},[f.validate]),T=(0,_.useCallback)(function(e,t){var n=f.validationSchema,r=rx(n)?n(t):n,i=t&&r.validateAt?r.validateAt(t,e):_x(e,r);return new Promise(function(e,t){i.then(function(){e(px)},function(n){n.name===`ValidationError`?e(gx(n)):t(n)})})},[f.validationSchema]),E=(0,_.useCallback)(function(e,t){return new Promise(function(n){return n(y.current[e].validate(t))})},[]),ee=(0,_.useCallback)(function(e){var t=Object.keys(y.current).filter(function(e){return rx(y.current[e].validate)}),n=t.length>0?t.map(function(t){return E(t,lx(e,t))}):[Promise.resolve(`DO_NOT_DELETE_YOU_WILL_BE_FIRED`)];return Promise.all(n).then(function(e){return e.reduce(function(e,n,r){return n===`DO_NOT_DELETE_YOU_WILL_BE_FIRED`||n&&(e=ux(e,t[r],n)),e},{})})},[E]),te=(0,_.useCallback)(function(e){return Promise.all([ee(e),f.validationSchema?T(e):{},f.validate?w(e):{}]).then(function(e){var t=e[0],n=e[1],r=e[2];return jh.all([t,n,r],{arrayMerge:yx})})},[f.validate,f.validationSchema,ee,w,T]),D=Cx(function(e){return e===void 0&&(e=S.values),C({type:`SET_ISVALIDATING`,payload:!0}),te(e).then(function(e){return v.current&&(C({type:`SET_ISVALIDATING`,payload:!1}),C({type:`SET_ERRORS`,payload:e})),e})});(0,_.useEffect)(function(){o&&v.current===!0&&(0,Db.default)(p.current,f.initialValues)&&D(p.current)},[o,D]);var ne=(0,_.useCallback)(function(e){var t=e&&e.values?e.values:p.current,n=e&&e.errors?e.errors:m.current?m.current:f.initialErrors||{},r=e&&e.touched?e.touched:h.current?h.current:f.initialTouched||{},i=e&&e.status?e.status:g.current?g.current:f.initialStatus;p.current=t,m.current=n,h.current=r,g.current=i;var a=function(){C({type:`RESET_FORM`,payload:{isSubmitting:!!e&&!!e.isSubmitting,errors:n,touched:r,status:i,values:t,isValidating:!!e&&!!e.isValidating,submitCount:e&&e.submitCount&&typeof e.submitCount==`number`?e.submitCount:0}})};if(f.onReset){var o=f.onReset(S.values,ve);cx(o)?o.then(a):a()}else a()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);(0,_.useEffect)(function(){v.current===!0&&!(0,Db.default)(p.current,f.initialValues)&&l&&(p.current=f.initialValues,ne(),o&&D(p.current))},[l,f.initialValues,ne,o,D]),(0,_.useEffect)(function(){l&&v.current===!0&&!(0,Db.default)(m.current,f.initialErrors)&&(m.current=f.initialErrors||px,C({type:`SET_ERRORS`,payload:f.initialErrors||px}))},[l,f.initialErrors]),(0,_.useEffect)(function(){l&&v.current===!0&&!(0,Db.default)(h.current,f.initialTouched)&&(h.current=f.initialTouched||mx,C({type:`SET_TOUCHED`,payload:f.initialTouched||mx}))},[l,f.initialTouched]),(0,_.useEffect)(function(){l&&v.current===!0&&!(0,Db.default)(g.current,f.initialStatus)&&(g.current=f.initialStatus,C({type:`SET_STATUS`,payload:f.initialStatus}))},[l,f.initialStatus,f.initialTouched]);var re=Cx(function(e){if(y.current[e]&&rx(y.current[e].validate)){var t=lx(S.values,e),n=y.current[e].validate(t);return cx(n)?(C({type:`SET_ISVALIDATING`,payload:!0}),n.then(function(e){return e}).then(function(t){C({type:`SET_FIELD_ERROR`,payload:{field:e,value:t}}),C({type:`SET_ISVALIDATING`,payload:!1})})):(C({type:`SET_FIELD_ERROR`,payload:{field:e,value:n}}),Promise.resolve(n))}return f.validationSchema?(C({type:`SET_ISVALIDATING`,payload:!0}),T(S.values,e).then(function(e){return e}).then(function(t){C({type:`SET_FIELD_ERROR`,payload:{field:e,value:lx(t,e)}}),C({type:`SET_ISVALIDATING`,payload:!1})})):Promise.resolve()}),ie=(0,_.useCallback)(function(e,t){var n=t.validate;y.current[e]={validate:n}},[]),ae=(0,_.useCallback)(function(e){delete y.current[e]},[]),oe=Cx(function(e,t){return C({type:`SET_TOUCHED`,payload:e}),(t===void 0?i:t)?D(S.values):Promise.resolve()}),se=(0,_.useCallback)(function(e){C({type:`SET_ERRORS`,payload:e})},[]),O=Cx(function(e,t){var r=rx(e)?e(S.values):e;return C({type:`SET_VALUES`,payload:r}),(t===void 0?n:t)?D(r):Promise.resolve()}),k=(0,_.useCallback)(function(e,t){C({type:`SET_FIELD_ERROR`,payload:{field:e,value:t}})},[]),ce=Cx(function(e,t,r){var i=rx(t)?t(lx(S.values,e)):t;return C({type:`SET_FIELD_VALUE`,payload:{field:e,value:i}}),(r===void 0?n:r)?D(ux(S.values,e,i)):Promise.resolve()}),le=(0,_.useCallback)(function(e,t){var n=t,r=e,i;if(!ox(e)){e.persist&&e.persist();var a=e.target?e.target:e.currentTarget,o=a.type,s=a.name,c=a.id,l=a.value,u=a.checked;a.outerHTML;var d=a.options,f=a.multiple;n=t||s||c,r=/number|range/.test(o)?(i=parseFloat(l),isNaN(i)?``:i):/checkbox/.test(o)?xx(lx(S.values,n),u,l):d&&f?bx(d):l}n&&ce(n,r)},[ce,S.values]),ue=Cx(function(e){if(ox(e))return function(t){return le(t,e)};le(e)}),de=Cx(function(e,t,n){return t===void 0&&(t=!0),C({type:`SET_FIELD_TOUCHED`,payload:{field:e,value:t}}),(n===void 0?i:n)?D(S.values):Promise.resolve()}),fe=(0,_.useCallback)(function(e,t){e.persist&&e.persist();var n=e.target,r=n.name,i=n.id;n.outerHTML,de(t||r||i,!0)},[de]),A=Cx(function(e){if(ox(e))return function(t){return fe(t,e)};fe(e)}),pe=(0,_.useCallback)(function(e){rx(e)?C({type:`SET_FORMIK_STATE`,payload:e}):C({type:`SET_FORMIK_STATE`,payload:function(){return e}})},[]),me=(0,_.useCallback)(function(e){C({type:`SET_STATUS`,payload:e})},[]),he=(0,_.useCallback)(function(e){C({type:`SET_ISSUBMITTING`,payload:e})},[]),ge=Cx(function(){return C({type:`SUBMIT_ATTEMPT`}),D().then(function(e){var t=e instanceof Error;if(!t&&Object.keys(e).length===0){var n;try{if(n=ye(),n===void 0)return}catch(e){throw e}return Promise.resolve(n).then(function(e){return v.current&&C({type:`SUBMIT_SUCCESS`}),e}).catch(function(e){if(v.current)throw C({type:`SUBMIT_FAILURE`}),e})}if(v.current&&(C({type:`SUBMIT_FAILURE`}),t))throw e})}),_e=Cx(function(e){e&&e.preventDefault&&rx(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&rx(e.stopPropagation)&&e.stopPropagation(),ge().catch(function(e){console.warn(`Warning: An unhandled error was caught from submitForm()`,e)})}),ve={resetForm:ne,validateForm:D,validateField:re,setErrors:se,setFieldError:k,setFieldTouched:de,setFieldValue:ce,setStatus:me,setSubmitting:he,setTouched:oe,setValues:O,setFormikState:pe,submitForm:ge},ye=Cx(function(){return u(S.values,ve)}),be=Cx(function(e){e&&e.preventDefault&&rx(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&rx(e.stopPropagation)&&e.stopPropagation(),ne()}),xe=(0,_.useCallback)(function(e){return{value:lx(S.values,e),error:lx(S.errors,e),touched:!!lx(S.touched,e),initialValue:lx(p.current,e),initialTouched:!!lx(h.current,e),initialError:lx(m.current,e)}},[S.errors,S.touched,S.values]),Se=(0,_.useCallback)(function(e){return{setValue:function(t,n){return ce(e,t,n)},setTouched:function(t,n){return de(e,t,n)},setError:function(t){return k(e,t)}}},[ce,de,k]),Ce=(0,_.useCallback)(function(e){var t=ix(e),n=t?e.name:e,r=lx(S.values,n),i={name:n,value:r,onChange:ue,onBlur:A};if(t){var a=e.type,o=e.value,s=e.as,c=e.multiple;a===`checkbox`?o===void 0?i.checked=!!r:(i.checked=!!(Array.isArray(r)&&~r.indexOf(o)),i.value=o):a===`radio`?(i.checked=r===o,i.value=o):s===`select`&&c&&(i.value=i.value||[],i.multiple=!0)}return i},[A,ue,S.values]),we=(0,_.useMemo)(function(){return!(0,Db.default)(p.current,S.values)},[p.current,S.values]),j=(0,_.useMemo)(function(){return s===void 0||we?S.errors&&Object.keys(S.errors).length===0:s!==!1&&rx(s)?s(f):s},[s,we,S.errors,f]);return Xb({},S,{initialValues:p.current,initialErrors:m.current,initialTouched:h.current,initialStatus:g.current,handleBlur:A,handleChange:ue,handleReset:be,handleSubmit:_e,resetForm:ne,setErrors:se,setFormikState:pe,setFieldTouched:de,setFieldValue:ce,setFieldError:k,setStatus:me,setSubmitting:he,setTouched:oe,setValues:O,submitForm:ge,validateForm:D,validateField:re,isValid:j,dirty:we,unregisterField:ae,registerField:ie,getFieldProps:Ce,getFieldMeta:xe,getFieldHelpers:Se,validateOnBlur:i,validateOnChange:n,validateOnMount:o})}function gx(e){var t={};if(e.inner){if(e.inner.length===0)return ux(t,e.path,e.message);for(var n=e.inner,r=Array.isArray(n),i=0,n=r?n:n[Symbol.iterator]();;){var a;if(r){if(i>=n.length)break;a=n[i++]}else{if(i=n.next(),i.done)break;a=i.value}var o=a;lx(t,o.path)||(t=ux(t,o.path,o.message))}}return t}function _x(e,t,n,r){n===void 0&&(n=!1);var i=vx(e);return t[n?`validateSync`:`validate`](i,{abortEarly:!1,context:r||i})}function vx(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);t[r]=Array.isArray(e[r])===!0?e[r].map(function(e){return Array.isArray(e)===!0||ng(e)?vx(e):e===``?void 0:e}):ng(e[r])?vx(e[r]):e[r]===``?void 0:e[r]}return t}function yx(e,t,n){var r=e.slice();return t.forEach(function(t,i){r[i]===void 0?r[i]=n.clone!==!1&&n.isMergeableObject(t)?jh(Array.isArray(t)?[]:{},t,n):t:n.isMergeableObject(t)?r[i]=jh(e[i],t,n):e.indexOf(t)===-1&&r.push(t)}),r}function bx(e){return Array.from(e).filter(function(e){return e.selected}).map(function(e){return e.value})}function xx(e,t,n){if(typeof e==`boolean`)return!!t;var r=[],i=!1,a=-1;if(Array.isArray(e))r=e,a=e.indexOf(n),i=a>=0;else if(!n||n==`true`||n==`false`)return!!t;return t&&n&&!i?r.concat(n):i?r.slice(0,a).concat(r.slice(a+1)):r}var Sx=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0?_.useLayoutEffect:_.useEffect;function Cx(e){var t=(0,_.useRef)(e);return Sx(function(){t.current=e}),(0,_.useCallback)(function(){var e=[...arguments];return t.current.apply(void 0,e)},[])}var wx=(0,_.forwardRef)(function(e,t){var n=e.action,r=Qb(e,[`action`]),i=n??`#`,a=tx(),o=a.handleReset,s=a.handleSubmit;return(0,_.createElement)(`form`,Xb({onSubmit:s,ref:t,onReset:o,action:i},r))});wx.displayName=`Form`;var Tx=function(e,t,n){var r=kx(e),i=r[t];return r.splice(t,1),r.splice(n,0,i),r},Ex=function(e,t,n){var r=kx(e),i=r[t];return r[t]=r[n],r[n]=i,r},Dx=function(e,t,n){var r=kx(e);return r.splice(t,0,n),r},Ox=function(e,t,n){var r=kx(e);return r[t]=n,r},kx=function(e){if(!e)return[];if(Array.isArray(e))return[].concat(e);var t=Object.keys(e).map(function(e){return parseInt(e)}).reduce(function(e,t){return t>e?t:e},0);return Array.from(Xb({},e,{length:t+1}))},Ax=function(e,t){var n=typeof e==`function`?e:t;return function(e){return Array.isArray(e)||ix(e)?n(kx(e)):e}},jx=function(e){Zb(t,e);function t(t){var n=e.call(this,t)||this;return n.updateArrayField=function(e,t,r){var i=n.props,a=i.name,o=i.formik.setFormikState;o(function(n){var i=Ax(r,e),o=Ax(t,e),s=ux(n.values,a,e(lx(n.values,a))),c=r?i(lx(n.errors,a)):void 0,l=t?o(lx(n.touched,a)):void 0;return nx(c)&&(c=void 0),nx(l)&&(l=void 0),Xb({},n,{values:s,errors:r?ux(n.errors,a,c):n.errors,touched:t?ux(n.touched,a,l):n.touched})})},n.push=function(e){return n.updateArrayField(function(t){return[].concat(kx(t),[Eb(e)])},!1,!1)},n.handlePush=function(e){return function(){return n.push(e)}},n.swap=function(e,t){return n.updateArrayField(function(n){return Ex(n,e,t)},!0,!0)},n.handleSwap=function(e,t){return function(){return n.swap(e,t)}},n.move=function(e,t){return n.updateArrayField(function(n){return Tx(n,e,t)},!0,!0)},n.handleMove=function(e,t){return function(){return n.move(e,t)}},n.insert=function(e,t){return n.updateArrayField(function(n){return Dx(n,e,t)},function(t){return Dx(t,e,null)},function(t){return Dx(t,e,null)})},n.handleInsert=function(e,t){return function(){return n.insert(e,t)}},n.replace=function(e,t){return n.updateArrayField(function(n){return Ox(n,e,t)},!1,!1)},n.handleReplace=function(e,t){return function(){return n.replace(e,t)}},n.unshift=function(e){var t=-1;return n.updateArrayField(function(n){var r=n?[e].concat(n):[e];return t=r.length,r},function(e){return e?[null].concat(e):[null]},function(e){return e?[null].concat(e):[null]}),t},n.handleUnshift=function(e){return function(){return n.unshift(e)}},n.handleRemove=function(e){return function(){return n.remove(e)}},n.handlePop=function(){return function(){return n.pop()}},n.remove=n.remove.bind($b(n)),n.pop=n.pop.bind($b(n)),n}var n=t.prototype;return n.componentDidUpdate=function(e){this.props.validateOnChange&&this.props.formik.validateOnChange&&!(0,Db.default)(lx(e.formik.values,e.name),lx(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},n.remove=function(e){var t;return this.updateArrayField(function(n){var r=n?kx(n):[];return t||=r[e],rx(r.splice)&&r.splice(e,1),rx(r.every)&&r.every(function(e){return e===void 0})?[]:r},!0,!0),t},n.pop=function(){var e;return this.updateArrayField(function(t){var n=t.slice();return e||=n&&n.pop&&n.pop(),n},!0,!0),e},n.render=function(){var e={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},t=this.props,n=t.component,r=t.render,i=t.children,a=t.name,o=t.formik,s=Qb(o,[`validate`,`validationSchema`]),c=Xb({},e,{form:s,name:a});return n?(0,_.createElement)(n,c):r?r(c):i?typeof i==`function`?i(c):sx(i)?null:_.Children.only(i):null},t}(_.Component);jx.defaultProps={validateOnChange:!0};var Mx=I.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  background: rgba(17, 17, 17, 0.45);
  backdrop-filter: blur(5px);
`,Nx=I.div`
  position: relative;
  width: 100%;
  max-width: 430px;
  padding: 42px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 18px;
  box-sizing: border-box;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.18);
  animation: modalAppear 0.2s ease;

  @keyframes modalAppear {
    from {
      opacity: 0;
      transform: translateY(10px) scale(0.98);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`,Px=I.button`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: #f7f7f7;
  color: #333333;
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #eeeeee;

    transform: rotate(90deg);
  }
`,Fx=I.h2`
  margin: 0 0 30px;
  color: #111111;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: -0.8px;
  text-align: center;
`,Ix=I.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,Lx=I.input`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  border: 1px solid #dddddd;
  border-radius: 8px;
  outline: none;
  background: #fafafa;
  color: #111111;
  font-size: 15px;
  box-sizing: border-box;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: #999999;
  }

  &:focus {
    background: #ffffff;

    border-color: var(--theme-primary);

    box-shadow: 0 0 0 3px rgba(255, 179, 108, 0.15);
  }
`,Rx=I.button`
  width: 100%;
  height: 50px;
  margin-top: 6px;
  border: none;
  border-radius: 8px;
  background: var(--theme-button-gradient);
  color: #111111;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(255, 179, 108, 0.25);

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: var(--theme-primary-strong);

    transform: translateY(-1px);

    box-shadow: 0 8px 22px rgba(255, 179, 108, 0.35);
  }

  &:active {
    transform: translateY(0);
  }
`,zx=I.p`
  margin: 22px 0 0;
  color: #888888;
  font-size: 14px;
  text-align: center;
`,Bx=I.a`
  color: #111111;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    color: #ff9d4d;
  }
`;function Vx({onClose:e,onSubmit:t}){let{t:n}=kt(),r=hx({initialValues:{username:``,email:``,password:``},onSubmit:(n,{resetForm:r})=>{t?t(n):(localStorage.setItem(`weatherUser`,JSON.stringify(n)),j.success(`Registration successful!`)),r(),e()}});return(0,M.jsx)(Mx,{onClick:t=>{t.target===t.currentTarget&&e()},children:(0,M.jsxs)(Nx,{children:[(0,M.jsx)(Px,{type:`button`,onClick:e,"aria-label":`Close`,children:(0,M.jsx)(ct,{size:24})}),(0,M.jsx)(Fx,{children:n(`signUp`)}),(0,M.jsxs)(Ix,{onSubmit:r.handleSubmit,children:[(0,M.jsx)(Lx,{type:`text`,name:`username`,placeholder:n(`username`),value:r.values.username,onChange:r.handleChange,required:!0}),(0,M.jsx)(Lx,{type:`email`,name:`email`,placeholder:n(`email`),value:r.values.email,onChange:r.handleChange,required:!0}),(0,M.jsx)(Lx,{type:`password`,name:`password`,placeholder:n(`password`),value:r.values.password,onChange:r.handleChange,required:!0}),(0,M.jsx)(Rx,{type:`submit`,children:n(`signUp`)})]}),(0,M.jsxs)(zx,{children:[n(`alreadyHaveAccount`),` `,` `,(0,M.jsx)(Bx,{href:`#login`,children:n(`logIn`)})]})]})})}var Hx=I.div`
  position: fixed;
  inset: 0;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  background: rgba(17, 17, 17, 0.45);
  backdrop-filter: blur(5px);
`,Ux=I.div`
  position: relative;
  width: 100%;
  max-width: 460px;
  padding: 42px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.18);

  animation: profileAppear 0.2s ease;

  @keyframes profileAppear {
    from {
      opacity: 0;
      transform: translateY(10px) scale(0.98);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`,Wx=I.button`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  background: #f7f7f7;
  color: #333333;
  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #eeeeee;

    transform: rotate(90deg);
  }
`,Gx=I.h2`
  margin: 0 0 30px;
  color: #111111;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: -0.8px;
  text-align: center;
`,Kx=I.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 30px;
`,qx=I.img`
  width: 120px;
  height: 120px;
  display: block;
  object-fit: cover;
  border: 4px solid #ffffff;
  border-radius: 50%;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
`,Jx=I.div`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--theme-button-gradient);
  color: #111111;
  font-size: 44px;
  font-weight: 800;
  box-shadow: 0 8px 25px rgba(255, 179, 108, 0.25);
`,Yx=I.label`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #ffffff;
  border-radius: 50%;
  background: var(--theme-button-gradient);
  color: #111111;
  cursor: pointer;

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.12);

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: var(--theme-primary-strong);

    transform: scale(1.08);
  }
`,Xx=I.input`
  display: none;
`,Zx=I.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Qx=I.div`
  padding: 14px 16px;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  background: #fafafa;

  transition:
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    background: #ffffff;
    border-color: #ffcfaa;
  }
`,$x=I.div`
  margin-bottom: 6px;
  color: #999999;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,eS=I.div`
  color: #111111;
  font-size: 15px;
  font-weight: 600;
  word-break: break-word;
`,tS=I.input`
  width: 100%;
  height: 42px;
  padding: 0 12px;
  border: 1px solid #dddddd;
  border-radius: 7px;
  outline: none;
  background: #ffffff;
  color: #111111;
  font-size: 15px;
  box-sizing: border-box;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    border-color: var(--theme-primary);

    box-shadow: 0 0 0 3px rgba(255, 179, 108, 0.15);
  }
`,nS=I.button`
  width: 100%;
  height: 48px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 8px;
  background: var(--theme-button-gradient);
  color: #111111;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: var(--theme-primary-strong);

    transform: translateY(-1px);
  }
`,rS=I.button`
  width: 100%;
  height: 48px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 8px;
  background: var(--theme-button-gradient);
  color: #111111;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: var(--theme-primary-strong);

    transform: translateY(-1px);
  }
`,iS=I.button`
  width: 100%;
  height: 48px;
  margin-top: 12px;
  border: 1px solid #ff6b6b;
  border-radius: 8px;
  background: #ffffff;
  color: #ff6b6b;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #ff6b6b;
    color: #ffffff;

    transform: translateY(-1px);
  }
`;function aS({onClose:e,onAvatarChange:t,onUserUpdate:n,onLogout:r}){let i=JSON.parse(localStorage.getItem(`weatherUser`))||{},[a,o]=(0,_.useState)(i),[s,c]=(0,_.useState)(localStorage.getItem(`weatherAvatar`)||null),[l,u]=(0,_.useState)(!1),[d,f]=(0,_.useState)({username:i.username||``,email:i.email||``,password:i.password||``}),p=e=>{let n=e.target.files[0];if(!n)return;if(!n.type.startsWith(`image/`)){j.error(`Please select an image`);return}let r=new FileReader;r.onloadend=()=>{let e=r.result;localStorage.setItem(`weatherAvatar`,e),c(e),t&&t(e),j.success(`Avatar updated!`)},r.readAsDataURL(n)},m=e=>{let{name:t,value:n}=e.target;f(e=>({...e,[t]:n}))};return(0,M.jsx)(Hx,{onClick:t=>{t.target===t.currentTarget&&e()},children:(0,M.jsxs)(Ux,{children:[(0,M.jsx)(Wx,{type:`button`,onClick:e,"aria-label":`Close`,children:(0,M.jsx)(ct,{size:24})}),(0,M.jsx)(Gx,{children:`My profile`}),(0,M.jsxs)(Kx,{children:[s?(0,M.jsx)(qx,{src:s,alt:`Profile avatar`}):(0,M.jsx)(Jx,{children:a.username?.charAt(0).toUpperCase()||`U`}),(0,M.jsx)(Yx,{htmlFor:`avatar-upload`,children:(0,M.jsx)(yt,{size:18})}),(0,M.jsx)(Xx,{id:`avatar-upload`,type:`file`,accept:`image/*`,onChange:p})]}),(0,M.jsxs)(Zx,{children:[(0,M.jsxs)(Qx,{children:[(0,M.jsx)($x,{children:`Username`}),l?(0,M.jsx)(tS,{type:`text`,name:`username`,value:d.username,onChange:m,placeholder:`Username`}):(0,M.jsx)(eS,{children:a.username||`—`})]}),(0,M.jsxs)(Qx,{children:[(0,M.jsx)($x,{children:`E-Mail`}),l?(0,M.jsx)(tS,{type:`email`,name:`email`,value:d.email,onChange:m,placeholder:`E-Mail`}):(0,M.jsx)(eS,{children:a.email||`—`})]}),(0,M.jsxs)(Qx,{children:[(0,M.jsx)($x,{children:`Password`}),l?(0,M.jsx)(tS,{type:`password`,name:`password`,value:d.password,onChange:m,placeholder:`Password`}):(0,M.jsx)(eS,{children:a.password?`•`.repeat(a.password.length):`—`})]})]}),l?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(rS,{type:`button`,onClick:()=>{if(!d.username.trim()||!d.email.trim()||!d.password.trim()){j.error(`Please fill in all fields`);return}let e={username:d.username.trim(),email:d.email.trim(),password:d.password};localStorage.setItem(`weatherUser`,JSON.stringify(e)),o(e),n&&n(e),u(!1),j.success(`Profile updated!`)},children:[(0,M.jsx)(vt,{size:18}),`Save changes`]}),(0,M.jsx)(nS,{type:`button`,onClick:()=>{f({username:a.username||``,email:a.email||``,password:a.password||``}),u(!1)},children:`Cancel`})]}):(0,M.jsxs)(nS,{type:`button`,onClick:()=>u(!0),children:[(0,M.jsx)(_t,{size:18}),`Edit profile`]}),(0,M.jsx)(iS,{type:`button`,onClick:()=>{r&&r()},children:`Log out`})]})})}var oS=I.div`
  position: fixed;
  inset: 0;
  z-index: 2000;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;

  background: rgba(17, 17, 17, 0.45);
  backdrop-filter: blur(8px);

  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`,sS=I.div`
  width: 100%;
  max-width: 500px;

  padding: 28px;

  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 24px;

  background: rgba(255, 255, 255, 0.96);

  box-shadow:
    0 25px 70px rgba(0, 0, 0, 0.18),
    0 8px 25px rgba(0, 0, 0, 0.08);

  box-sizing: border-box;

  animation: modalOpen 0.25s ease;

  @keyframes modalOpen {
    from {
      opacity: 0;
      transform: translateY(12px) scale(0.97);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`,cS=I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;
`,lS=I.h2`
  margin: 0;

  color: #111111;

  font-size: 22px;
  font-weight: 600;
  line-height: 1.2;
`,uS=I.button`
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border: none;
  border-radius: 50%;

  background: #f3f3f3;
  color: #555555;

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: var(--theme-button-gradient);
    color: #111111;
    transform: rotate(90deg);
  }

  &:active {
    transform: rotate(90deg) scale(0.95);
  }
`,dS=I.p`
  margin: 10px 0 18px;

  color: #777777;

  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
`,fS=I.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  margin-bottom: 18px;
`,pS=I.button`
  min-height: 58px;
  padding: 8px 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: 1px solid #e9e9e9;
  border-radius: 12px;
  background: #fafafa;
  color: #555555;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
  &:hover { border-color: var(--theme-primary); background: var(--theme-primary-soft); transform: translateY(-2px); }
  &:focus-visible { outline: 3px solid rgba(255, 179, 108, 0.32); outline-offset: 2px; }
`,mS=I.span`
  display: flex;
  overflow: hidden;
  width: 30px;
  height: 14px;
  border-radius: 999px;
  box-shadow: inset 0 0 0 1px rgba(17, 17, 17, 0.08);
`,hS=I.span`
  flex: 1;
  background: ${({$color:e})=>e};
`,gS=I.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,_S=I.div`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 100%;
  min-height: 58px;

  padding: 8px 10px;

  border: 1px solid #eeeeee;
  border-radius: 14px;

  background: #fafafa;

  box-sizing: border-box;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;

  &:focus-within {
    border-color: var(--theme-primary);
    background: #ffffff;
    box-shadow:
      0 0 0 3px
      rgba(255, 179, 108, 0.12);
  }
`,vS=I.div`
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border-radius: 10px;

  overflow: hidden;
`,yS=I.input`
  width: 42px;
  height: 42px;

  padding: 0;

  border: none;
  border-radius: 10px;

  background: transparent;

  cursor: pointer;

  appearance: none;
  overflow: hidden;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &::-webkit-color-swatch {
    border: none;
    border-radius: 10px;
  }

  &::-moz-color-swatch {
    border: none;
    border-radius: 10px;
  }
`,bS=I.input`
  width: 100px;
  height: 40px;

  padding: 0 12px;

  border: 1px solid #e6e6e6;
  border-radius: 10px;

  outline: none;

  background: #ffffff;
  color: #111111;

  font-size: 13px;
  font-weight: 500;

  text-transform: uppercase;

  box-sizing: border-box;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: #aaaaaa;
  }

  &:focus {
    border-color: var(--theme-primary);

    box-shadow:
      0 0 0 3px
      rgba(255, 179, 108, 0.12);
  }
`,xS=I.div`
  position: relative;

  display: flex;
  align-items: center;

  margin-left: auto;
`,SS=I.input`
  width: 82px;
  height: 40px;

  padding: 0 28px 0 12px;

  border: 1px solid #e6e6e6;
  border-radius: 10px;

  outline: none;

  background: #ffffff;
  color: #111111;

  font-size: 14px;
  font-weight: 500;

  box-sizing: border-box;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    border-color: var(--theme-primary);

    box-shadow:
      0 0 0 3px
      rgba(255, 179, 108, 0.12);
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    margin: 0;
    appearance: none;
  }

  &[type="number"] {
    appearance: textfield;
  }
`,CS=I.span`
  position: absolute;
  right: 11px;

  color: #888888;

  font-size: 13px;
  font-weight: 500;

  pointer-events: none;
`,wS=I.button`
  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border: none;
  border-radius: 10px;

  background: transparent;
  color: #999999;

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: #ffe7e7;
    color: #e05252;
  }
`,TS=I.button`
  width: 100%;
  height: 46px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  margin-top: 14px;

  border: 1px dashed #d8d8d8;
  border-radius: 12px;

  background: #ffffff;
  color: #666666;

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: var(--theme-primary);
    background: #fffaf5;
    color: #111111;
  }

  &:active {
    transform: scale(0.99);
  }
`,ES=I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 16px;

  margin-top: 26px;

  & > div:last-child { display: flex; align-items: center; }

  @media (max-width: 480px) {
    align-items: flex-start;
    flex-direction: column;
    & > div:last-child { width: 100%; }
  }
`,DS=I.div`
  display: flex;
  align-items: center;
  gap: 7px;

  color: #777777;

  font-size: 14px;
  font-weight: 500;
`,OS=I.span`
  color: ${({$valid:e})=>e?`#4b9b67`:`#e05252`};

  font-weight: 600;
`,kS=I.button`
  height: 42px;

  padding: 0 16px;

  margin-right: 8px;

  border: none;
  border-radius: 10px;

  background: #f3f3f3;
  color: #555555;

  font-size: 13px;
  font-weight: 500;

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: #e9e9e9;
    color: #111111;
  }
`,AS=I.button`
  height: 42px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 7px;

  padding: 0 18px;

  border: none;
  border-radius: 10px;

  background: var(--theme-button-gradient);
  color: #111111;

  font-size: 13px;
  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease;

  &:hover:not(:disabled) {
    background: var(--theme-primary-strong);
    transform: translateY(-1px);
    box-shadow:
      0 5px 16px
      rgba(255, 179, 108, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,jS=4,MS=[{id:1,color:`#ffffff`,percentage:100}],NS=[{name:`default`,colors:MS},{name:`Sunset`,colors:[{id:1,color:`#FFD6A5`,percentage:55},{id:2,color:`#FF9E80`,percentage:45}]},{name:`Ocean`,colors:[{id:1,color:`#BDE0FE`,percentage:60},{id:2,color:`#CDB4DB`,percentage:40}]},{name:`Nature`,colors:[{id:1,color:`#D8F3DC`,percentage:65},{id:2,color:`#B7E4C7`,percentage:35}]}];function PS({isOpen:e,onClose:t,onApply:n}){let{t:r}=kt(),[i,a]=(0,_.useState)(MS),[o,s]=(0,_.useState)(!0);if((0,_.useEffect)(()=>{if(!e)return;let t=localStorage.getItem(`weatherTheme`);if(!t){a(MS),s(!0);return}try{let e=JSON.parse(t);Array.isArray(e)&&e.length>0&&e.length<=jS?(a(e),s(!1)):(a(MS),s(!0))}catch{a(MS),s(!0)}},[e]),!e)return null;let c=i.reduce((e,t)=>e+Number(t.percentage||0),0),l=e=>/^#[0-9A-Fa-f]{6}$/.test(e),u=(e,t)=>{s(!1),a(n=>n.map(n=>n.id===e?{...n,color:t.toUpperCase()}:n))},d=(e,t)=>{s(!1);let n=t;n.length>0&&!n.startsWith(`#`)&&(n=`#`+n),n=n.replace(/[^#0-9A-Fa-f]/g,``).slice(0,7),a(t=>t.map(t=>t.id===e?{...t,color:n.toUpperCase()}:t))},f=(e,t)=>{if(s(!1),t===``){a(t=>t.map(t=>t.id===e?{...t,percentage:``}:t));return}let n=Math.max(0,Math.min(100,Number(t)));a(t=>t.map(t=>t.id===e?{...t,percentage:n}:t))},p=()=>{i.length>=jS||(s(!1),a(e=>[...e,{id:Date.now(),color:`#FFB36C`,percentage:0}]))},m=e=>{i.length!==1&&(s(!1),a(t=>t.filter(t=>t.id!==e)))},h=e=>{s(!1),a(e.colors.map((e,t)=>({...e,id:Date.now()+t})))},g=()=>{a(MS),s(!0),localStorage.removeItem(`weatherTheme`),n&&n(null)};return(0,M.jsx)(oS,{onMouseDown:t,children:(0,M.jsxs)(sS,{onMouseDown:e=>e.stopPropagation(),children:[(0,M.jsxs)(cS,{children:[(0,M.jsx)(lS,{children:r(`customizeTitle`)}),(0,M.jsx)(uS,{type:`button`,onClick:t,"aria-label":`Close`,children:(0,M.jsx)(ct,{size:20})})]}),(0,M.jsx)(dS,{children:r(`customizeDescription`)}),(0,M.jsx)(fS,{"aria-label":`Theme presets`,children:NS.map(e=>(0,M.jsxs)(pS,{type:`button`,onClick:()=>e.name==="default"?g():h(e),children:[(0,M.jsx)(mS,{children:e.colors.map(e=>(0,M.jsx)(hS,{$color:e.color},e.color))}),e.name==="default"?r(`default`):e.name]},e.name))}),(0,M.jsx)(gS,{children:i.map((e,t)=>(0,M.jsxs)(_S,{children:[(0,M.jsx)(vS,{children:(0,M.jsx)(yS,{type:`color`,value:l(e.color)?e.color:`#ffffff`,onChange:t=>u(e.id,t.target.value),"aria-label":`Color ${t+1}`})}),(0,M.jsx)(bS,{type:`text`,value:e.color,onChange:t=>d(e.id,t.target.value),maxLength:7,placeholder:`#FFFFFF`,"aria-label":`HEX color ${t+1}`}),(0,M.jsxs)(xS,{children:[(0,M.jsx)(SS,{type:`number`,min:`0`,max:`100`,value:e.percentage,onChange:t=>f(e.id,t.target.value),"aria-label":`Percentage ${t+1}`}),(0,M.jsx)(CS,{children:`%`})]}),i.length>1&&(0,M.jsx)(wS,{type:`button`,onClick:()=>m(e.id),"aria-label":`Remove color`,children:(0,M.jsx)(ct,{size:17})})]},e.id))}),i.length<jS&&(0,M.jsxs)(TS,{type:`button`,onClick:p,children:[(0,M.jsx)(pt,{size:18}),r(`addColor`)]}),(0,M.jsxs)(ES,{children:[(0,M.jsxs)(DS,{children:[r(`total`),(0,M.jsxs)(OS,{$valid:c===100&&i.every(e=>l(e.color)),children:[c,`%`]})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(kS,{type:`button`,onClick:g,children:r(`reset`)}),(0,M.jsxs)(AS,{type:`button`,onClick:()=>{if(o){localStorage.removeItem(`weatherTheme`),n?.(null),t();return}let e=i.every(e=>l(e.color));if(c!==100||!e)return;let r=i.map(e=>({...e,color:e.color.toUpperCase(),percentage:Number(e.percentage)}));localStorage.setItem(`weatherTheme`,JSON.stringify(r)),n&&n(r),t()},disabled:c!==100||!i.every(e=>l(e.color)),children:[(0,M.jsx)(vt,{size:17}),r(`apply`)]})]})]})]})})}var FS=Ni`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;

    font-family:
      Inter,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      sans-serif;

    background: #ffffff;
    color: #111111;

    -webkit-font-smoothing: antialiased;
  }

  button,
  input {
    font-family: inherit;
  }

  button {
    -webkit-tap-highlight-color: transparent;
  }

  a {
    -webkit-tap-highlight-color: transparent;
  }
`,IS=L`
  0% {
    transform:
      translate(-8%, -5%)
      scale(1);
  }

  25% {
    transform:
      translate(18%, 8%)
      scale(1.15);
  }

  50% {
    transform:
      translate(35%, -10%)
      scale(1.3);
  }

  75% {
    transform:
      translate(10%, 18%)
      scale(1.12);
  }

  100% {
    transform:
      translate(-8%, -5%)
      scale(1);
  }
`,LS=L`
  0% {
    transform:
      translate(8%, 5%)
      scale(1);
  }

  25% {
    transform:
      translate(-15%, 18%)
      scale(1.2);
  }

  50% {
    transform:
      translate(-30%, -5%)
      scale(1.3);
  }

  75% {
    transform:
      translate(-5%, -18%)
      scale(1.08);
  }

  100% {
    transform:
      translate(8%, 5%)
      scale(1);
  }
`,RS=L`
  0% {
    transform:
      translate(0, 10%)
      scale(1);
  }

  30% {
    transform:
      translate(20%, -12%)
      scale(1.2);
  }

  60% {
    transform:
      translate(-20%, 4%)
      scale(1.3);
  }

  100% {
    transform:
      translate(0, 10%)
      scale(1);
  }
`,zS=I.div`
  position: relative;

  min-height: 100vh;
  width: 100%;

  color: #111111;

  --theme-primary: ${({$primaryColor:e})=>e};
  --theme-primary-strong: color-mix(
    in srgb,
    var(--theme-primary) 82%,
    #111111
  );
  --theme-button-gradient: linear-gradient(
    135deg,
    var(--theme-primary),
    var(--theme-primary-strong)
  );
  --theme-primary-soft: color-mix(
    in srgb,
    var(--theme-primary) 22%,
    transparent
  );

  box-sizing: border-box;

  overflow-x: hidden;

  isolation: isolate;
`,BS=I.div`
  position: fixed;

  inset: 0;

  width: 100%;
  height: 100%;

  overflow: hidden;

  pointer-events: none;

  z-index: -1;

  background: #ffffff;
`,VS=I.div`
  position: absolute;

  width: ${({$percentage:e})=>Math.max(55,Math.min(100,55+e*.45))}vw;

  height: ${({$percentage:e})=>Math.max(55,Math.min(100,55+e*.45))}vw;

  border-radius: 50%;

  background:
    radial-gradient(
      circle at center,
      ${({$color:e})=>e} 0%,
      ${({$color:e})=>e} 32%,
      transparent 72%
    );

  opacity: ${({$percentage:e})=>Math.max(.32,Math.min(.85,.35+e/150))};

  filter: blur(85px);

  mix-blend-mode: normal;

  will-change:
    transform,
    opacity;

  animation: ${({$index:e})=>e%3==0?ki`
          ${IS}
          18s
          ease-in-out
          infinite
        `:e%3==1?ki`
          ${LS}
          21s
          ease-in-out
          infinite
        `:ki`
          ${RS}
          24s
          ease-in-out
          infinite
        `};

  left: ${({$index:e,$count:t})=>t===1?`15%`:t===2?e===0?`-15%`:`55%`:t===3?e===0?`-20%`:e===1?`35%`:`60%`:e===0?`-20%`:e===1?`20%`:e===2?`55%`:`15%`};

  top: ${({$index:e,$count:t})=>t===1?`10%`:t===2?e===0?`-20%`:`35%`:t===3?e===0?`-15%`:e===1?`5%`:`55%`:e===0?`-20%`:e===1?`5%`:e===2?`50%`:`70%`};
`;I.main`
  width: 100%;

  min-height: calc(100vh - 82px);

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 40px 64px;

  box-sizing: border-box;

  background: transparent;
`;function HS(){let{language:e}=kt(),[t,n]=(0,_.useState)(null),[r,i]=(0,_.useState)(null),[a,o]=(0,_.useState)([]),[s,c]=(0,_.useState)([]),[l,u]=(0,_.useState)(!1),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)(!1),[h,g]=(0,_.useState)(!1),[v,y]=(0,_.useState)(null);(0,_.useEffect)(()=>{let e=localStorage.getItem(`weatherUser`),t=localStorage.getItem(`weatherAvatar`),r=localStorage.getItem(`weatherFavorites`),a=localStorage.getItem(`weatherTheme`);if(e&&n(JSON.parse(e)),t&&i(t),r){let e=JSON.parse(r);c(e),o(e)}if(a)try{let e=JSON.parse(a);Array.isArray(e)&&e.length>0&&e.length<=4&&y(e)}catch(e){console.error(`Помилка завантаження теми:`,e)}u(!0)},[]),(0,_.useEffect)(()=>{l&&localStorage.setItem(`weatherFavorites`,JSON.stringify(s))},[s,l]);let b=e=>{localStorage.setItem(`weatherUser`,JSON.stringify(e)),n(e),f(!1),j.success(`Account created successfully!`)},x=e=>{localStorage.setItem(`weatherUser`,JSON.stringify(e)),n(e),j.success(`Profile updated!`)},S=e=>{localStorage.setItem(`weatherAvatar`,e),i(e),j.success(`Avatar updated!`)},C=()=>{localStorage.removeItem(`weatherUser`),localStorage.removeItem(`weatherAvatar`),n(null),i(null),m(!1),j.success(`You have logged out.`)},w=()=>{f(!0)};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(FS,{}),(0,M.jsxs)(zS,{$primaryColor:v?.[0]?.color||`#FFB36C`,children:[(0,M.jsx)(BS,{children:(v||[]).map((e,t)=>(0,M.jsx)(VS,{$color:e.color,$percentage:Number(e.percentage||0),$index:t,$count:v.length},e.id))}),(0,M.jsx)(Yi,{user:t,avatar:r,onSignUp:w,onProfile:()=>{t?m(!0):f(!0)},onTheme:()=>{if(!t){f(!0);return}g(!0)},themeColors:v}),(0,M.jsx)(la,{onCityAdd:e=>{o(t=>t.some(t=>t.id===e.id)?(j.info(`This city is already added.`),t):(j.success(`${e.name} added successfully!`),[...t,e]))},user:t,onRequireAuth:w}),(0,M.jsx)(Mm,{cities:a,favorites:s,onRefresh:async t=>{try{let n=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${t.latitude}&lon=${t.longitude}&appid=1d77f7419475b60e6e45e6ad79184d4f&units=metric&lang=${e}`);if(!n.ok)throw Error(`HTTP error: ${n.status}`);let r=await n.json(),i={...t,temperature:r.main.temp,icon:r.weather[0].icon,description:r.weather[0].description,weatherCode:r.weather[0].id,timezone:r.timezone};o(e=>e.map(e=>e.id===t.id?i:e)),c(e=>e.map(e=>e.id===t.id?i:e)),j.success(`Weather updated!`)}catch(e){console.error(`Помилка оновлення погоди:`,e),j.error(`Failed to update weather.`)}},onFavorite:e=>{c(t=>{if(t.some(t=>t.id===e)){let n=t.filter(t=>t.id!==e);return localStorage.setItem(`weatherFavorites`,JSON.stringify(n)),n}let n=a.find(t=>t.id===e);if(!n)return t;let r=[...t,n];return localStorage.setItem(`weatherFavorites`,JSON.stringify(r)),r})},onDelete:e=>{o(t=>t.filter(t=>t.id!==e)),c(t=>t.filter(t=>t.id!==e))}}),(0,M.jsx)(Gm,{}),(0,M.jsx)(th,{}),(0,M.jsx)(bh,{themeColors:v}),d&&(0,M.jsx)(Vx,{onClose:()=>{f(!1)},onSubmit:b}),p&&t&&(0,M.jsx)(aS,{user:t,avatar:r,onClose:()=>{m(!1)},onUserUpdate:x,onAvatarChange:S,onLogout:C}),(0,M.jsx)(PS,{isOpen:h,onClose:()=>{g(!1)},onApply:e=>{y(e),e?localStorage.setItem(`weatherTheme`,JSON.stringify(e)):localStorage.removeItem(`weatherTheme`)}}),(0,M.jsx)(qe,{position:`top-right`,autoClose:2500,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,pauseOnHover:!0})]})]})}(0,v.createRoot)(document.getElementById(`root`)).render((0,M.jsx)(_.StrictMode,{children:(0,M.jsx)(Ot,{children:(0,M.jsx)(HS,{})})}));