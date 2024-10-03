(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[3286],{240684:(e,t,r)=>{"use strict";r.d(t,{TA:()=>E,ZP:()=>x});var n=r(667294),o=r(263366),s=r(487462),i=r(497326),a=r(875068),c=r(659864),u=r(108679),l=r.n(u);function f(e){console.warn("loadable: "+e)}var p=n.createContext(),d={initialChunks:{}},y="PENDING",h="REJECTED",m=function(e){return e};function v(e){var t=e.defaultResolveComponent,r=void 0===t?m:t,u=e.render,f=e.onLoad;function v(e,t){void 0===t&&(t={});var m,v="function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e,b={};function _(e){return t.cacheKey?t.cacheKey(e):v.resolve?v.resolve(e):"static"}function S(e,n,o){var s=t.resolveComponent?t.resolveComponent(e,n):r(e);if(t.resolveComponent&&!(0,c.isValidElementType)(s))throw Error("resolveComponent returned something that is not a React component!");return l()(o,s,{preload:!0}),s}var g=(m=function(e){function r(r){var n;return((n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:_(r)},function(e,t){if(!e){var r=Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}(!r.__chunkExtractor||v.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor)?(!1===t.ssr||(v.requireAsync(r).catch(function(){return null}),n.loadSync(),r.__chunkExtractor.addChunk(v.chunkName(r))),(0,i.Z)(n)):(!1!==t.ssr&&(v.isReady&&v.isReady(r)||v.chunkName&&d.initialChunks[v.chunkName(r)])&&n.loadSync(),n)}(0,a.Z)(r,e),r.getDerivedStateFromProps=function(e,t){var r=_(e);return(0,s.Z)({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var n=r.prototype;return n.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===h&&this.setCache(),this.state.loading&&this.loadAsync()},n.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},n.componentWillUnmount=function(){this.mounted=!1},n.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},n.getCacheKey=function(){return _(this.props)},n.getCache=function(){return b[this.getCacheKey()]},n.setCache=function(e){void 0===e&&(e=void 0),b[this.getCacheKey()]=e},n.triggerOnLoad=function(){var e=this;f&&setTimeout(function(){f(e.state.result,e.props)})},n.loadSync=function(){if(this.state.loading)try{var e=v.requireSync(this.props),t=S(e,this.props,C);this.state.result=t,this.state.loading=!1}catch(e){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:v.resolve(this.props),chunkName:v.chunkName(this.props),error:e?e.message:e}),this.state.error=e}},n.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then(function(t){var r=S(t,e.props,{Loadable:C});e.safeSetState({result:r,loading:!1},function(){return e.triggerOnLoad()})}).catch(function(t){return e.safeSetState({error:t,loading:!1})}),t},n.resolveAsync=function(){var e=this,t=this.props,r=(t.__chunkExtractor,t.forwardedRef,(0,o.Z)(t,["__chunkExtractor","forwardedRef"])),n=this.getCache();return n||((n=v.requireAsync(r)).status=y,this.setCache(n),n.then(function(){n.status="RESOLVED"},function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:v.resolve(e.props),chunkName:v.chunkName(e.props),error:t?t.message:t}),n.status=h})),n},n.render=function(){var e=this.props,r=e.forwardedRef,n=e.fallback,i=(e.__chunkExtractor,(0,o.Z)(e,["forwardedRef","fallback","__chunkExtractor"])),a=this.state,c=a.error,l=a.loading,f=a.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===y)throw this.loadAsync();if(c)throw c;var p=n||t.fallback||null;return l?p:u({fallback:p,result:f,options:t,props:(0,s.Z)({},i,{ref:r})})},r}(n.Component),function(e){return n.createElement(p.Consumer,null,function(t){return n.createElement(m,Object.assign({__chunkExtractor:t},e))})}),C=n.forwardRef(function(e,t){return n.createElement(g,Object.assign({forwardedRef:t},e))});return C.preload=function(e){v.requireAsync(e)},C.load=function(e){return v.requireAsync(e)},C}return{loadable:v,lazy:function(e,t){return v(e,(0,s.Z)({},t,{suspense:!0}))}}}var b=v({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,r=e.props;return n.createElement(t,r)}}),_=b.loadable,S=b.lazy,g=v({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.props;return r.children?r.children(t):null}}),C=g.loadable,w=g.lazy,O="undefined"!=typeof window;function E(e,t){void 0===e&&(e=function(){});var r=(void 0===t?{}:t).namespace;if(!O)return f("`loadableReady()` must be called in browser only"),e(),Promise.resolve();var n=null;if(O){var o=""+(void 0===r?"":r)+"__LOADABLE_REQUIRED_CHUNKS__",s=document.getElementById(o);if(s){n=JSON.parse(s.textContent);var i=document.getElementById(o+"_ext");if(i)JSON.parse(i.textContent).namedChunks.forEach(function(e){d.initialChunks[e]=!0});else throw Error("loadable-component: @loadable/server does not match @loadable/component")}}if(!n)return f("`loadableReady()` requires state, please use `getScriptTags` or `getScriptElements` server-side"),e(),Promise.resolve();var a=!1;return new Promise(function(e){window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[];var t=window.__LOADABLE_LOADED_CHUNKS__,r=t.push.bind(t);function o(){n.every(function(e){return t.some(function(t){return t[0].indexOf(e)>-1})})&&!a&&(a=!0,e())}t.push=function(){r.apply(void 0,arguments),o()},o()}).then(e)}_.lib=C,S.lib=w;let x=_},108679:(e,t,r)=>{"use strict";var n=r(121296),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function c(e){return n.isMemo(e)?i:a[e.$$typeof]||o}a[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[n.Memo]=i;var u=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(y){var o=d(r);o&&o!==y&&e(t,o,n)}var i=l(r);f&&(i=i.concat(f(r)));for(var a=c(t),h=c(r),m=0;m<i.length;++m){var v=i[m];if(!s[v]&&!(n&&n[v])&&!(h&&h[v])&&!(a&&a[v])){var b=p(r,v);try{u(t,v,b)}catch(e){}}}}return t}},396103:(e,t)=>{"use strict";/** @license React v16.8.4
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116;function m(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case l:case f:case s:case a:case i:case d:return e;default:switch(e=e&&e.$$typeof){case u:case p:case c:return e;default:return t}}case h:case y:case o:return t}}}function v(e){return m(e)===f}t.typeOf=m,t.AsyncMode=l,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=c,t.Element=n,t.ForwardRef=p,t.Fragment=s,t.Lazy=h,t.Memo=y,t.Portal=o,t.Profiler=a,t.StrictMode=i,t.Suspense=d,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===f||e===a||e===i||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===y||e.$$typeof===c||e.$$typeof===u||e.$$typeof===p)},t.isAsyncMode=function(e){return v(e)||m(e)===l},t.isConcurrentMode=v,t.isContextConsumer=function(e){return m(e)===u},t.isContextProvider=function(e){return m(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return m(e)===p},t.isFragment=function(e){return m(e)===s},t.isLazy=function(e){return m(e)===h},t.isMemo=function(e){return m(e)===y},t.isPortal=function(e){return m(e)===o},t.isProfiler=function(e){return m(e)===a},t.isStrictMode=function(e){return m(e)===i},t.isSuspense=function(e){return m(e)===d}},121296:(e,t,r)=>{"use strict";e.exports=r(396103)},892703:(e,t,r)=>{"use strict";var n=r(150414);function o(){}e.exports=function(){function e(e,t,r,o,s,i){if(i!==n){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=o,r.PropTypes=r,r}},45697:(e,t,r)=>{e.exports=r(892703)()},150414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},869921:(e,t)=>{"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,_=r?Symbol.for("react.responder"):60118,S=r?Symbol.for("react.scope"):60119;function g(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case l:case f:case s:case a:case i:case d:return e;default:switch(e=e&&e.$$typeof){case u:case p:case m:case h:case c:return e;default:return t}}case o:return t}}}function C(e){return g(e)===f}t.AsyncMode=l,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=c,t.Element=n,t.ForwardRef=p,t.Fragment=s,t.Lazy=m,t.Memo=h,t.Portal=o,t.Profiler=a,t.StrictMode=i,t.Suspense=d,t.isAsyncMode=function(e){return C(e)||g(e)===l},t.isConcurrentMode=C,t.isContextConsumer=function(e){return g(e)===u},t.isContextProvider=function(e){return g(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return g(e)===p},t.isFragment=function(e){return g(e)===s},t.isLazy=function(e){return g(e)===m},t.isMemo=function(e){return g(e)===h},t.isPortal=function(e){return g(e)===o},t.isProfiler=function(e){return g(e)===a},t.isStrictMode=function(e){return g(e)===i},t.isSuspense=function(e){return g(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===f||e===a||e===i||e===d||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===c||e.$$typeof===u||e.$$typeof===p||e.$$typeof===b||e.$$typeof===_||e.$$typeof===S||e.$$typeof===v)},t.typeOf=g},659864:(e,t,r)=>{"use strict";e.exports=r(869921)},78273:(e,t,r)=>{"use strict";function n(e){return"/"===e.charAt(0)}function o(e,t){for(var r=t,n=r+1,o=e.length;n<o;r+=1,n+=1)e[r]=e[n];e.pop()}r.d(t,{Z:()=>s});let s=function(e,t){void 0===t&&(t="");var r,s=e&&e.split("/")||[],i=t&&t.split("/")||[],a=e&&n(e),c=t&&n(t),u=a||c;if(e&&n(e)?i=s:s.length&&(i.pop(),i=i.concat(s)),!i.length)return"/";if(i.length){var l=i[i.length-1];r="."===l||".."===l||""===l}else r=!1;for(var f=0,p=i.length;p>=0;p--){var d=i[p];"."===d?o(i,p):".."===d?(o(i,p),f++):f&&(o(i,p),f--)}if(!u)for(;f--;f)i.unshift("..");!u||""===i[0]||i[0]&&n(i[0])||i.unshift("");var y=i.join("/");return r&&"/"!==y.substr(-1)&&(y+="/"),y}},702177:(e,t,r)=>{"use strict";function n(e,t){if(!e)throw Error("Invariant failed")}r.d(t,{Z:()=>n})},495429:(e,t,r)=>{"use strict";function n(e){return e.valueOf?e.valueOf():Object.prototype.valueOf.call(e)}r.d(t,{Z:()=>o});let o=function e(t,r){if(t===r)return!0;if(null==t||null==r)return!1;if(Array.isArray(t))return Array.isArray(r)&&t.length===r.length&&t.every(function(t,n){return e(t,r[n])});if("object"==typeof t||"object"==typeof r){var o=n(t),s=n(r);return o!==t||s!==r?e(o,s):Object.keys(Object.assign({},t,r)).every(function(n){return e(t[n],r[n])})}return!1}},655767:(e,t,r)=>{(window.__PWS_LOADED_HANDLERS__=window.__PWS_LOADED_HANDLERS__||{})["www/news_hub/[id]"]=function(){return r(516519).Z}},5859:(e,t,r)=>{"use strict";r.d(t,{B:()=>f,LC:()=>u,P2:()=>c,fH:()=>l,gf:()=>p});var n=r(667294),o=r(642190),s=r(520893),i=r(785893);let a=(0,n.createContext)();function c({children:e,initialValue:t}){let[r,c]=(0,n.useState)(t),u=(0,n.useMemo)(()=>({requestContext:r,updateRequestContext:e=>{let t={...r,...e};(0,s.Z)(r,e)||c(t),(0,o.J)(t)}}),[r]);return(0,i.jsx)(a.Provider,{value:u,children:e})}let u=({children:e})=>{let t=(0,n.useContext)(a);if(!t)throw Error("RequestContextConsumer must be used within a RequestContextProvider");return e(t.requestContext)},l=({children:e})=>{let t=(0,n.useContext)(a);if(!t)throw Error("RequestContextConsumer must be used within a RequestContextProvider");return e(t.requestContext)};function f(){let e=(0,n.useContext)(a);if(!e)throw Error("useRequestContext must be used within a RequestContextProvider");return e.requestContext}function p(){let e=(0,n.useContext)(a);if(!e)throw Error("useUpdateRequestContext must be used within a RequestContextProvider");return e.updateRequestContext}},642190:(e,t,r)=>{"use strict";let n;function o(e){n=e}function s(){return n}r.d(t,{J:()=>o,l:()=>s})},520893:(e,t,r)=>{"use strict";function n(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;let r=Object.keys(e),n=Object.keys(t);return r.length===n.length&&r.every(r=>e[r]===t[r])}r.d(t,{Z:()=>n})},554786:(e,t,r)=>{"use strict";r.d(t,{HG:()=>f,Kf:()=>i,Mq:()=>o,Wb:()=>l,ZP:()=>p,dA:()=>a,ds:()=>c,ml:()=>u});var n=r(5859);function o(e){let{isMobile:t,isTablet:r}=e.userAgent;return r?"tablet":t?"phone":"desktop"}let s=()=>o((0,n.B)()),i=e=>"phone"===e,a=e=>"tablet"===e,c=e=>"desktop"===e,u=()=>i(s()),l=()=>a(s()),f=()=>c(s()),p=s},898850:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(616550),o=r(240684),s=r(5859),i=r(554786),a=r(785893);let c=(0,o.ZP)({resolved:{},chunkName:()=>"app-www-pages-duplo-NotificationDetailsPage",isReady(e){let t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:()=>Promise.all([r.e(97270),r.e(83119),r.e(96515),r.e(18320),r.e(70290)]).then(r.bind(r,846699)),requireAsync(e){let t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){return r(this.resolve(e))},resolve:()=>846699}),u=(0,o.ZP)({resolved:{},chunkName:()=>"app-common-react-components-growth-news-NewsHub-NewsHubLandingPage",isReady(e){let t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:()=>Promise.all([r.e(97270),r.e(83119),r.e(58119),r.e(84798),r.e(45672)]).then(r.bind(r,786410)),requireAsync(e){let t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){return r(this.resolve(e))},resolve:()=>786410});function l(){let e=(0,i.ZP)(),{isAuthenticated:t}=(0,s.B)();return t?"desktop"===e?(0,a.jsx)(u,{}):(0,a.jsx)(c,{}):(0,a.jsx)(n.l_,{to:"/"})}},516519:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});let n=r(898850).Z},497326:(e,t,r)=>{"use strict";function n(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,{Z:()=>n})},487462:(e,t,r)=>{"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:()=>n})},875068:(e,t,r)=>{"use strict";function n(e,t){return(n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,n(e,t)}r.d(t,{Z:()=>o})},263366:(e,t,r)=>{"use strict";function n(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}r.d(t,{Z:()=>n})}},e=>{var t=t=>e(e.s=t);e.O(0,[97270],()=>t(655767)),e.O()}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/www/news_hub/[id]-bf24dc5b7b1639df.mjs.map