System.register(["single-spa"],(function(e,t){var r={};return{setters:[function(e){r.registerApplication=e.registerApplication,r.start=e.start}],execute:function(){e((()=>{var e={722:(e,t,r)=>{const o=r(905).R;t.s=function(e){if(e||(e=1),!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=o(r.y.meta.url,e)}},905:(e,t,r)=>{t.R=function(e,t){var r=document.createElement("a");r.href=e;for(var o="/"===r.pathname[0]?r.pathname:"/"+r.pathname,n=0,a=o.length;n!==t&&a>=0;)"/"===o[--a]&&n++;if(n!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+n+") in the URL path "+e);var s=o.slice(0,a+1);return r.protocol+"//"+r.host+s};Number.isInteger},645:e=>{"use strict";e.exports=r}},o={};function n(t){var r=o[t];if(void 0!==r)return r.exports;var a=o[t]={exports:{}};return e[t](a,a.exports,n),a.exports}n.y=t,n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var a={};return(0,n(722).s)(1),(()=>{"use strict";n.r(a);var e=n(645);JSON.parse('{"r":[{"name":"@colors/navbar","package":"@colors/navbar","activeWhen":true},{"name":"@colors/boxes","package":"@colors/boxes","activeWhen":"/"},{"name":"@colors/blue","package":"@colors/blue","activeWhen":"/blue"},{"name":"@colors/gold","package":"@colors/gold","activeWhen":"/gold"},{"name":"@single-spa/welcome","package":"https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js","activeWhen":"/welcome"}]}').r.forEach((function(t){(0,e.registerApplication)({name:t.name,app:function(){return System.import(t.package)},activeWhen:function(e){return!0===t.activeWhen||e.pathname===t.activeWhen}})})),(0,e.start)({urlRerouteOnly:!0})})(),a})())}}}));
//# sourceMappingURL=colors-root-config.js.map