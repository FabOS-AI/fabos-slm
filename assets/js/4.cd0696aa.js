(window.webpackJsonp=window.webpackJsonp||[]).push([[4,8],{237:function(t,e,a){},252:function(t,e,a){},265:function(t,e,a){"use strict";a.r(e);var n=a(243),s=a.n(n),i={data:()=>({selected:void 0,options:[]}),created:async function(){try{let t=await s.a.get("https://api.github.com/repos/FabOS-AI/fabos-slm/git/trees/github-pages");const e=t.data.tree.find(t=>"version"===t.path.toLowerCase());t=await s.a.get(e.url),this.options=t.data.tree.map(t=>({value:t.path,text:t.path})),this.options.sort((t,e)=>{const a=t.text.split("."),n=e.text.split(".");for(let t=0;t<a.length&&t<n.length;t++){const e=parseInt(a[t]),s=parseInt(n[t]);if(e!==s)return s-e;if(a[t]!==n[t])return n[t]-a[t]}return t.text===e.text?0:e.text<t.text?-1:1}),this.options.unshift({value:"main",text:"main"});const a=window.location.pathname.toLowerCase();if(a.startsWith("/vuepress-test/version/")){const t=18,e=a.indexOf("/",t);this.selected=a.substring(t,e)}else this.selected="main"}catch(t){}},methods:{onChange(t){const e="main"===this.selected?"":"version/"+this.selected,a=window.location.pathname.toLowerCase();let n=9;const s=a.indexOf("/version/");s>=0&&(n=s+9);const i=a.indexOf("/",n);window.location.pathname=window.location.pathname+e+window.location.pathname.substring(i)}}},o=a(13),r=Object(o.a)(i,(function(){var t=this,e=t._self._c;return t.options&&t.options.length>0?e("span",{staticClass:"nav-item"},[t._v("\n    Version:\n    "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selected=e.target.multiple?a:a[0]},t.onChange]}},t._l(t.options,(function(a){return e("option",{domProps:{value:a.value}},[t._v("\n        "+t._s(a.text)+"\n      ")])})),0)]):t._e()}),[],!1,null,null,null);e.default=r.exports},267:function(t,e,a){"use strict";a(237)},291:function(t,e,a){"use strict";a(252)},303:function(t,e,a){"use strict";var n={name:"Home",components:{NavLink:a(236).a},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},s=(a(267),a(13)),i=Object(s.a)(n,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.tagline?e("p",{staticClass:"description"},[t._v("\n        "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n      ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(a,n){return e("div",{key:n,staticClass:"feature"},[e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",{domProps:{innerHTML:t._s(a.details)}})])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?e("div",{staticClass:"footer",domProps:{innerHTML:t._s(t.data.footer)}}):t._e()],1)}),[],!1,null,null,null);e.a=i.exports},304:function(t,e,a){"use strict";var n=a(302),s=a(305),i=a(264),o=a(265);function r(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var l={name:"Navbar",components:{SidebarButton:s.a,NavLinks:i.a,SearchBox:n.a,Versions:o.default},data:()=>({linksWrapMaxWidth:null}),mounted(){const t=parseInt(r(this.$el,"paddingLeft"))+parseInt(r(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},c=(a(291),a(13)),u=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e()]),t._v(" "),e("versions"),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);e.a=u.exports}}]);