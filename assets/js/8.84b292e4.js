(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{265:function(t,e,n){"use strict";n.r(e);var s=n(243),o=n.n(s),a={data:()=>({selected:void 0,options:[]}),created:async function(){try{let t=await o.a.get("https://api.github.com/repos/FabOS-AI/fabos-slm/git/trees/github-pages");const e=t.data.tree.find(t=>"version"===t.path.toLowerCase());t=await o.a.get(e.url),this.options=t.data.tree.map(t=>({value:t.path,text:t.path})),this.options.sort((t,e)=>{const n=t.text.split("."),s=e.text.split(".");for(let t=0;t<n.length&&t<s.length;t++){const e=parseInt(n[t]),o=parseInt(s[t]);if(e!==o)return o-e;if(n[t]!==s[t])return s[t]-n[t]}return t.text===e.text?0:e.text<t.text?-1:1}),this.options.unshift({value:"main",text:"main"});const n=window.location.pathname.toLowerCase();if(n.startsWith("/vuepress-test/version/")){const t=18,e=n.indexOf("/",t);this.selected=n.substring(t,e)}else this.selected="main"}catch(t){}},methods:{onChange(t){let e="";e="main"===this.selected?"":`/version/${this.selected}/`;let n=window.location.pathname.toLowerCase();console.log("Old Path:"+n);let s=new RegExp("/version/[0-9]+.[0-9]+/");if(s.test(n)){let t=s.exec(n)[0];n=n.replace(t,e),console.log("New path:"+n)}else n=e+n,console.log("New path:"+n);window.location.pathname=n}}},i=n(13),l=Object(i.a)(a,(function(){var t=this,e=t._self._c;return t.options&&t.options.length>0?e("span",{staticClass:"nav-item"},[t._v("\n  Version:\n  "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selected=e.target.multiple?n:n[0]},t.onChange]}},t._l(t.options,(function(n){return e("option",{domProps:{value:n.value}},[t._v("\n      "+t._s(n.text)+"\n    ")])})),0)]):t._e()}),[],!1,null,null,null);e.default=l.exports}}]);