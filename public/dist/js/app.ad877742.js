(function(){"use strict";var t={6844:function(t,e,n){var o=n(9242),s=n(3396);const r=(0,s._)("div",{class:"mt-3 bg-light bg-gradient",style:{height:"100px"}},[(0,s._)("span",{class:"align-self-center"})],-1);function a(t,e,n,o,a,l){const i=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(i),r],64)}var l={name:"App"},i=n(89);const c=(0,i.Z)(l,[["render",a]]);var u=c,m=n(2483),d=n(7139);const p={class:"container"},g=(0,s._)("div",{class:"row justify-content-center mb-3 mt-2"},[(0,s._)("div",{class:"col-3 col-lg-2"},[(0,s._)("img",{src:"/El-Andariego-Logo.jpeg",class:"border border-secondary border-1 rounded-circle w-75",alt:"Logo"})])],-1),f={class:"row justify-content-center mb-4"},b={class:"col-10 col-lg-7"},h=["alt"],v={class:"row justify-content-center mb-4"},w={class:"col-lg-3"},_={class:"row justify-content-center ms-5 me-5"},y=["textContent"],x=(0,s._)("hr",{class:"border border-success border-2 ms-4 me-4"},null,-1),C={class:"row justify-content-evenly ms-5 me-5"},j=["textContent"],k=["textContent"],O=["textContent"],$=(0,s._)("p",{class:"fs-6 mt-4"},"..............................................",-1);function H(t,e,n,o,r,a){return(0,s.wg)(),(0,s.iD)("div",p,[g,(0,s._)("div",f,[(0,s._)("div",b,[(0,s._)("img",{src:"",ref:"HeroImage",class:"img-fluid rounded-3",alt:t.HeroImage},null,8,h)])]),(0,s._)("div",v,[(0,s._)("div",w,[(0,s._)("button",{class:"btn btn-outline-secondary fw-bold",type:"button",onClick:e[0]||(e[0]=e=>t.$router.push("/"))}," Back To Categories ")])]),(0,s._)("div",_,[(0,s._)("span",{textContent:(0,d.zw)(t.$route.name),class:"mb-2 fs-3 text-uppercase fw-bold text-danger"},null,8,y),x]),(0,s._)("table",C,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.items,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.name,class:"col-lg-4 col-md-6 mb-2"},[(0,s._)("div",null,[(0,s._)("span",{class:"fs-6 m-1 fw-bold text-success",textContent:(0,d.zw)(t.name)},null,8,j),(0,s._)("span",{class:"fs-6 m-1",textContent:(0,d.zw)(" ($"+t.price+")")},null,8,k),(0,s._)("p",{class:"fs-6 m-1",textContent:(0,d.zw)(t.content)},null,8,O),$])])))),128))])])}var z=n(6265),T=n.n(z);class D{static async GetItemsByCategory(t){try{const e=await T().get(`/api/items/${t}`);return e.data}catch(e){return e}}}var P=D,S={name:"Items-View",data(){return{items:[]}},async mounted(){this.items=await P.GetItemsByCategory(this.$route.name),this.$refs.HeroImage.src=`/heros/${this.$route.name}.jpeg`}};const G=(0,i.Z)(S,[["render",H]]);var I=G;const B=(0,s._)("header",{class:"container-fluid mb-3 p-0"},[(0,s._)("div",{class:"p-2 ps-3 bg-image text-start text-white fw-bold fs-3 text-uppercase",style:{"background-image":"url(/Header-bg.jpeg)",height:"150px","background-size":"cover"}}," El Andariego ")],-1),E={class:"container"},K=(0,s._)("div",{class:"row"},[(0,s._)("div",null,[(0,s._)("h2",{class:"fw-bold"},"Menu")])],-1),M={class:"row justify-content-center"},Y={class:"col-10 col-sm-9 col-md-6 col-lg-5"},A=["src","alt"],Z=(0,s._)("br",null,null,-1),L=["textContent"],N=["textContent"],Q={class:"row justify-content-evenly"},V=["src","alt"],F=(0,s._)("br",null,null,-1),W=["textContent","onClick"],q=["textContent"];function J(t,e,n,o,r,a){return(0,s.wg)(),(0,s.iD)(s.HY,null,[B,(0,s._)("div",E,[K,(0,s._)("div",M,[(0,s._)("div",Y,[(0,s._)("img",{src:r.platillos.image,class:"img-thumbnail p-1 border border-0 rounded-3",alt:r.platillos.name},null,8,A),Z,(0,s._)("button",{class:"btn btn-outline-success m-2 p-1 ps-3 pe-3 fw-bold",type:"button",textContent:(0,d.zw)(r.platillos.name),onClick:e[0]||(e[0]=e=>t.$router.push(`/${r.platillos.name}`))},null,8,L),(0,s._)("p",{textContent:(0,d.zw)(r.platillos.description)},null,8,N)])]),(0,s._)("div",Q,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.categories,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e.name,class:"col-6 col-lg-3 me-lg-1 col-md-4 mb-3 p-1"},[(0,s._)("img",{src:e.image,class:"img-thumbnail rounded-3 border border-0",alt:e.name},null,8,V),F,(0,s._)("button",{class:"btn btn-outline-success m-2 p-1 ps-3 pe-3 fw-bold",type:"button",textContent:(0,d.zw)(e.name),onClick:n=>t.$router.push(`/${e.name}`)},null,8,W),(0,s._)("p",{textContent:(0,d.zw)(e.description)},null,8,q)])))),128))])])],64)}class R{static async GetCategories(){try{const t=await T().get("/api/categories");return t.data}catch(t){return t}}}var U=R,X={name:"HomeView",data(){return{categories:[],platillos:{}}},async mounted(){this.categories=await U.GetCategories();for(let t=0;t<this.categories.length;t++)if("Platillos"===this.categories[t].name){this.platillos=this.categories[t],this.categories.splice(t,1);break}this.categories.forEach((t=>{t.description=t.description.substring(0,t.description.length/2)}))}};const tt=(0,i.Z)(X,[["render",J]]);var et=tt;const nt=[{path:"/",name:"home",component:et},{path:"/Burritos",name:"Burritos",component:I},{path:"/Tacos",name:"Tacos",component:I},{path:"/Tortas",name:"Tortas",component:I},{path:"/Sopes",name:"Sopes",component:I},{path:"/Gorditas",name:"Gorditas",component:I},{path:"/Huaraches",name:"Huaraches",component:I},{path:"/Nachos",name:"Nachos",component:I},{path:"/Quesadillas",name:"Quesadillas",component:I},{path:"/Platillos",name:"Platillos",component:I},{path:"/Kids",name:"Kids",component:I}],ot=(0,m.p7)({history:(0,m.r5)(),routes:nt});var st=ot;n(2166);(0,o.ri)(u).use(st).mount("#app")}},e={};function n(o){var s=e[o];if(void 0!==s)return s.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,s,r){if(!o){var a=1/0;for(u=0;u<t.length;u++){o=t[u][0],s=t[u][1],r=t[u][2];for(var l=!0,i=0;i<o.length;i++)(!1&r||a>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[i])}))?o.splice(i--,1):(l=!1,r<a&&(a=r));if(l){t.splice(u--,1);var c=s();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[o,s,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,r,a=o[0],l=o[1],i=o[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(s in l)n.o(l,s)&&(n.m[s]=l[s]);if(i)var u=i(n)}for(e&&e(o);c<a.length;c++)r=a[c],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(u)},o=self["webpackChunkel_andariego_menu"]=self["webpackChunkel_andariego_menu"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6844)}));o=n.O(o)})();
//# sourceMappingURL=app.ad877742.js.map