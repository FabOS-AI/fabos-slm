(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{268:function(t,e,s){"use strict";s.r(e);var a=s(246),n=s.n(a),o={data:()=>({selected:void 0,options:[]}),created:async function(){try{let t=await n.a.get("https://api.github.com/repos/FabOS-AI/fabos-slm/git/trees/github-pages");const e=t.data.tree.find(t=>"version"===t.path.toLowerCase());t=await n.a.get(e.url),this.options=t.data.tree.map(t=>({value:t.path,text:t.path})),this.options.sort((t,e)=>{const s=t.text.split("."),a=e.text.split(".");for(let t=0;t<s.length&&t<a.length;t++){const e=parseInt(s[t]),n=parseInt(a[t]);if(e!==n)return n-e;if(s[t]!==a[t])return a[t]-s[t]}return t.text===e.text?0:e.text<t.text?-1:1}),this.options.unshift({value:"latest",text:"latest"});const s=window.location.pathname.toLowerCase();let a=new RegExp("/version/([0-9]+.[0-9]+)");if(a.test(s)){let t=a.exec(s)[1];this.selected=t}else this.selected="latest"}catch(t){}},methods:{onChange(t){let e="";e="latest"===this.selected?"":"/version/"+this.selected;let s=window.location.pathname.toLowerCase(),a=new RegExp("/version/[0-9]+.[0-9]+");if(a.test(s)){let t=a.exec(s)[0];s=s.replace(t,e)}else s=e+s;window.location.pathname=s}}},i=s(14),l=Object(i.a)(o,(function(){var t=this,e=t._self._c;return t.options&&t.options.length>0?e("span",{staticClass:"nav-item",attrs:{"data-app":""}},[e("v-row",[e("v-col",{attrs:{cols:"3",align:"right"}},[t._v("Version:")]),t._v(" "),e("v-col",{attrs:{cols:"5",align:"left"}},[e("v-select",{attrs:{items:t.options,outlined:"",dense:""},on:{change:t.onChange},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)],1):t._e()}),[],!1,null,null,null);e.default=l.exports}}]);