(function(e){function t(t){for(var n,s,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2d5e35cf"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e);var u=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,r[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-page/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"411f":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),r("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),r("v-spacer"),r("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[r("span",{staticClass:"mr-2"},[e._v("Latest Release")]),r("v-icon",[e._v("mdi-open-in-new")])],1)],1),r("v-main",[r("router-view")],1)],1)},o=[],s={name:"App",data:function(){return{}}},i=s,c=r("2877"),u=r("6544"),l=r.n(u),p=r("7496"),d=r("40dc"),f=r("8336"),m=r("132d"),v=r("adda"),h=r("f6c4"),b=r("2fa4"),g=Object(c["a"])(i,a,o,!1,null,null,null),y=g.exports;l()(g,{VApp:p["a"],VAppBar:d["a"],VBtn:f["a"],VIcon:m["a"],VImg:v["a"],VMain:h["a"],VSpacer:b["a"]});r("d3b7"),r("3ca3"),r("ddb0");var w=r("8c4f"),R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",{staticClass:"error"},[e._v(e._s(e.error))]),r("p",{staticClass:"decode-result"},[e._v("Last result: "),r("b",[e._v(e._s(e.result))])]),r("qrcode-stream",{on:{decode:e.onDecode,init:e.onInit}})],1)},O=[],E=r("1da1"),_=(r("96cf"),r("b0c0"),r("bb6f")),j={components:{QrcodeStream:_["QrcodeStream"]},data:function(){return{result:"",error:""}},methods:{onDecode:function(e){this.result=e},onInit:function(e){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e;case 3:r.next=8;break;case 5:r.prev=5,r.t0=r["catch"](0),"NotAllowedError"===r.t0.name?t.error="ERROR: you need to grant camera access permission":"NotFoundError"===r.t0.name?t.error="ERROR: no camera on this device":"NotSupportedError"===r.t0.name?t.error="ERROR: secure context required (HTTPS, localhost)":"NotReadableError"===r.t0.name?t.error="ERROR: is the camera already in use?":"OverconstrainedError"===r.t0.name?t.error="ERROR: installed cameras are not suitable":"StreamApiNotSupportedError"===r.t0.name?t.error="ERROR: Stream API is not supported in this browser":"InsecureContextError"===r.t0.name?t.error="ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.":t.error="ERROR: Camera error (".concat(r.t0.name,")");case 8:case"end":return r.stop()}}),r,null,[[0,5]])})))()}}},x=j,S=(r("a33d"),Object(c["a"])(x,R,O,!1,null,"179df00a",null)),k=S.exports;n["a"].use(w["a"]);var P=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],C=new w["a"]({mode:"history",base:"/vue-page/",routes:P}),T=C,V=r("2f62");n["a"].use(V["a"]);var A=new V["a"].Store({state:{},mutations:{},actions:{},modules:{}}),I=r("f309");n["a"].use(I["a"]);var N=new I["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:T,store:A,vuetify:N,render:function(e){return e(y)}}).$mount("#app")},a33d:function(e,t,r){"use strict";r("411f")}});
//# sourceMappingURL=app.5c0bcf18.js.map