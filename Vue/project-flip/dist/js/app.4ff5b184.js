(function(e){function t(t){for(var r,c,l=t[0],u=t[1],i=t[2],d=0,f=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&f.push(n[c][0]),n[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,c=1;c<a.length;c++){var u=a[c];0!==n[u]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var r={},n={app:0},o=[];function c(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"3150c677"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var i=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(d);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,a[1](i)}n[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(a,r,function(t){return e[t]}.bind(null,r));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var s=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"29ff":function(e,t,a){"use strict";a("919f")},"406a":function(e,t,a){"use strict";a("5466")},5466:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23"),n={id:"nav"},o=Object(r["g"])("Home"),c=Object(r["g"])(" | "),l=Object(r["g"])("About");function u(e,t){var a=Object(r["w"])("router-link"),u=Object(r["w"])("router-view");return Object(r["q"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("div",n,[Object(r["h"])(a,{to:"/"},{default:Object(r["B"])((function(){return[o]})),_:1}),c,Object(r["h"])(a,{to:"/about"},{default:Object(r["B"])((function(){return[l]})),_:1})]),Object(r["h"])(u)],64)}a("29ff");var i=a("6b0d"),d=a.n(i);const s={},f=d()(s,[["render",u]]);var v=f,b=a("9483");Object(b["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("d3b7"),a("3ca3"),a("ddb0");var p=a("6c02"),h=a("cf05"),g=a.n(h),j={class:"home"},m=Object(r["e"])("img",{alt:"Vue logo",src:g.a},null,-1);function O(e,t,a,n,o,c){var l=Object(r["w"])("HelloWorld");return Object(r["q"])(),Object(r["d"])("div",j,[m,Object(r["h"])(l,{msg:"Welcome to Your Vue.js App"})])}var k={class:"hello"},w=Object(r["f"])('<p data-v-204fbcdc> For a guide and recipes on how to configure / customize this project,<br data-v-204fbcdc> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-204fbcdc>vue-cli documentation</a>. </p><h3 data-v-204fbcdc>Installed CLI Plugins</h3><ul data-v-204fbcdc><li data-v-204fbcdc><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-204fbcdc>babel</a></li><li data-v-204fbcdc><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener" data-v-204fbcdc>pwa</a></li><li data-v-204fbcdc><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-204fbcdc>router</a></li><li data-v-204fbcdc><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-204fbcdc>vuex</a></li><li data-v-204fbcdc><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-204fbcdc>eslint</a></li><li data-v-204fbcdc><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest" target="_blank" rel="noopener" data-v-204fbcdc>unit-jest</a></li><li data-v-204fbcdc><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-nightwatch" target="_blank" rel="noopener" data-v-204fbcdc>e2e-nightwatch</a></li></ul><h3 data-v-204fbcdc>Essential Links</h3><ul data-v-204fbcdc><li data-v-204fbcdc><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-204fbcdc>Core Docs</a></li><li data-v-204fbcdc><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-204fbcdc>Forum</a></li><li data-v-204fbcdc><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-204fbcdc>Community Chat</a></li><li data-v-204fbcdc><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-204fbcdc>Twitter</a></li><li data-v-204fbcdc><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-204fbcdc>News</a></li></ul><h3 data-v-204fbcdc>Ecosystem</h3><ul data-v-204fbcdc><li data-v-204fbcdc><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-204fbcdc>vue-router</a></li><li data-v-204fbcdc><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-204fbcdc>vuex</a></li><li data-v-204fbcdc><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-204fbcdc>vue-devtools</a></li><li data-v-204fbcdc><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-204fbcdc>vue-loader</a></li><li data-v-204fbcdc><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-204fbcdc>awesome-vue</a></li></ul>',7);function _(e,t,a,n,o,c){return Object(r["q"])(),Object(r["d"])("div",k,[Object(r["e"])("h1",null,Object(r["y"])(a.msg),1),w])}var y={name:"HelloWorld",props:{msg:String}};a("406a");const x=d()(y,[["render",_],["__scopeId","data-v-204fbcdc"]]);var P=x,A={name:"Home",components:{HelloWorld:P}};const C=d()(A,[["render",O]]);var S=C,E=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],H=Object(p["a"])({history:Object(p["b"])("/"),routes:E}),q=H,T=a("5502"),F=Object(T["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["c"])(v).use(F).use(q).mount("#app")},"919f":function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.feaeca2f.png"}});
//# sourceMappingURL=app.4ff5b184.js.map