(function(){"use strict";var t={8151:function(t,e,a){var n=a(9242),o=a(3396);function l(t,e,a,n,l,r){const s=(0,o.up)("Nav"),i=(0,o.up)("router-view"),c=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(s),(0,o.Wm)(i),(0,o.Wm)(c)],64)}const r={class:"navbar navbar-expand-lg bg-light mb-4"},s={class:"container-fluid"},i=(0,o._)("div",{class:"col-1"},[(0,o._)("img",{src:"/El-Andariego-Logo.jpeg",class:"border border-secondary border-1 rounded-circle",alt:"Logo",width:"50",height:"50"})],-1),c=(0,o._)("button",{class:"navbar-toggler border",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse",id:"navbarSupportedContent"},d={class:"navbar-nav me-auto mb-2 mb-lg-0"},m=(0,o._)("li",{class:"nav-item"},[(0,o._)("a",{class:"nav-link active","aria-current":"page",href:"https://elandariegotruck.com/"},"Home")],-1),p={class:"nav-item"},g={class:"nav-item"},f={class:"nav-item dropdown"},b=(0,o._)("a",{class:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Contact ",-1),v={class:"dropdown-menu text-center"},h=(0,o._)("li",null,[(0,o._)("a",{class:"dropdown-item",href:"https://www.facebook.com/profile.php?id=100082710796984"},"Facebook")],-1),_=(0,o._)("li",null,[(0,o._)("a",{class:"dropdown-item",href:"https://instagram.com/el_andariegotruck"},"Instagram")],-1),w=(0,o._)("li",null,[(0,o._)("a",{class:"dropdown-item",href:"https://g.page/r/CY53oo_JlDb8EAI/review"},"Leave a review!")],-1),y=(0,o._)("li",null,[(0,o._)("hr",{class:"dropdown-divider"})],-1);function A(t,e,a,l,A,C){return(0,o.wg)(),(0,o.iD)("nav",r,[(0,o._)("div",s,[i,c,(0,o._)("div",u,[(0,o._)("ul",d,[m,(0,o._)("li",p,[(0,o._)("a",{class:"nav-link",href:"#",onClick:e[0]||(e[0]=(0,n.iM)((e=>t.$router.push("/")),["prevent"]))},"Menu")]),(0,o._)("li",g,[(0,o._)("a",{class:"nav-link",href:"#",onClick:e[1]||(e[1]=(0,n.iM)((e=>t.$router.push("/catering")),["prevent"]))}," Catering ")]),(0,o._)("li",f,[b,(0,o._)("ul",v,[h,_,w,y,(0,o._)("li",null,[(0,o._)("button",{class:"dropdown-item",onClick:e[2]||(e[2]=(...t)=>C.CopyPhone&&C.CopyPhone(...t))},"949-806-0123")])])])])])])])}var C={name:"Nav-V",methods:{async CopyPhone(){try{await navigator.clipboard.writeText("949-806-0123")}catch(t){alert("Could not copy")}}}},x=a(89);const k=(0,x.Z)(C,[["render",A]]);var j=k;const N={class:"d-flex mt-3 bg-light bg-gradient align-items-center justify-content-center",style:{height:"100px"}},S=(0,o._)("p",null,"© 2022 El Andariego",-1),E=[S];function D(t,e,a,n,l,r){return(0,o.wg)(),(0,o.iD)("div",N,E)}var H={name:"Footer-V"};const O=(0,x.Z)(H,[["render",D]]);var P=O,V={name:"App",components:{Nav:j,Footer:P}};const F=(0,x.Z)(V,[["render",l]]);var T=F,q=a(2483),L=a(7139);const U={class:"container"},$={class:"row justify-content-center mb-4"},B={class:"col-10 col-lg-7"},I=["srcset","src","alt"],G={class:"row justify-content-center mb-4"},Y={class:"col-lg-3"},z={class:"row justify-content-center ms-5 me-5"},K=["textContent"],M=(0,o._)("hr",{class:"border border-success border-2 ms-4 me-4"},null,-1),R={class:"row justify-content-evenly ms-5 me-5"},Q=["textContent"],Z=["textContent"],W=["textContent"],J=(0,o._)("p",{class:"fs-6 mt-4"},"..............................................",-1);function X(t,e,a,n,l,r){return(0,o.wg)(),(0,o.iD)("div",U,[(0,o._)("div",$,[(0,o._)("div",B,[(0,o._)("img",{srcset:`/heros/${this.$route.name}.jpeg`,src:l.placeHolderSrc,class:"img-fluid rounded-3",alt:t.HeroImage,width:"1080",height:"1080"},null,8,I)])]),(0,o._)("div",G,[(0,o._)("div",Y,[(0,o._)("button",{class:"btn btn-outline-secondary fw-bold",type:"button",onClick:e[0]||(e[0]=e=>t.$router.push("/"))}," Back To Categories ")])]),(0,o._)("div",z,[(0,o._)("span",{textContent:(0,L.zw)(t.$route.name),class:"mb-2 fs-3 text-uppercase fw-bold text-danger"},null,8,K),M]),(0,o._)("table",R,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.items,(t=>((0,o.wg)(),(0,o.iD)("tr",{key:t.name,class:"col-lg-4 col-md-6 mb-2"},[(0,o._)("div",null,[(0,o._)("span",{class:"fs-6 m-1 fw-bold text-success",textContent:(0,L.zw)(t.name)},null,8,Q),(0,o._)("span",{class:"fs-6 m-1",textContent:(0,L.zw)(" ($"+t.price+")")},null,8,Z),(0,o._)("p",{class:"fs-6 m-1",textContent:(0,L.zw)(t.content)},null,8,W),J])])))),128))])])}var tt=a(6265),et=a.n(tt);class at{static async GetItemsByCategory(t){try{const e=await et().get(`/api/items/${t}`);return e.data}catch(e){return e}}}var nt=at,ot={name:"Items-V",data(){return{items:[],placeHolderSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="}},async mounted(){this.items=await nt.GetItemsByCategory(this.$route.name)}};const lt=(0,x.Z)(ot,[["render",X]]);var rt=lt;const st={class:"container"},it=(0,o._)("div",{class:"row"},[(0,o._)("div",null,[(0,o._)("h2",{class:"fw-bold"},"Menu")])],-1),ct={class:"row justify-content-center"},ut={class:"col-10 col-sm-9 col-md-6 col-lg-5"},dt=["srcset","src","alt"],mt=(0,o._)("br",null,null,-1),pt=["textContent"],gt=["textContent"],ft={class:"row justify-content-evenly"},bt=["srcset","src","alt"],vt=(0,o._)("br",null,null,-1),ht=["textContent","onClick"],_t=["textContent"];function wt(t,e,a,n,l,r){return(0,o.wg)(),(0,o.iD)("div",st,[it,(0,o._)("div",ct,[(0,o._)("div",ut,[(0,o._)("img",{srcset:l.platillos.image,src:l.placeHolderSrc,class:"img-thumbnail p-1 border border-0 rounded-3",alt:l.platillos.name,width:"1080",height:"720"},null,8,dt),mt,(0,o._)("button",{class:"btn btn-outline-success m-2 p-1 ps-3 pe-3 fw-bold",type:"button",textContent:(0,L.zw)(l.platillos.name),onClick:e[0]||(e[0]=e=>t.$router.push(`/${l.platillos.name}`))},null,8,pt),(0,o._)("p",{textContent:(0,L.zw)(l.platillos.description)},null,8,gt)])]),(0,o._)("div",ft,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.categories,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.name,class:"col-6 col-lg-3 me-lg-1 col-md-4 mb-3 p-1"},[(0,o._)("img",{srcset:e.image,src:l.placeHolderSrc,class:"img-thumbnail rounded-3 border border-0",alt:e.name,width:"320",height:"320"},null,8,bt),vt,(0,o._)("button",{class:"btn btn-outline-success m-2 p-1 ps-3 pe-3 fw-bold",type:"button",textContent:(0,L.zw)(e.name),onClick:a=>t.$router.push(`/${e.name}`)},null,8,ht),(0,o._)("p",{textContent:(0,L.zw)(e.description)},null,8,_t)])))),128))])])}class yt{static async GetCategories(){try{const t=await et().get("/api/categories");return t.data}catch(t){return t}}static async GetPlatillos(){try{const t=await et().get("/api/categories/platillos");return t.data}catch(t){return t}}}var At=yt,Ct={name:"Home-V",data(){return{categories:[],platillos:{},placeHolderSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="}},async mounted(){this.categories=await At.GetCategories();const t=await At.GetPlatillos();this.platillos={name:t[0].name,description:t[0].description,image:t[0].image},this.categories.sort(((t,e)=>t.priority-e.priority))}};const xt=(0,x.Z)(Ct,[["render",wt]]);var kt=xt;const jt={class:"container mb-5 pb-5 pt-3"},Nt=(0,o.uE)('<div class="row"><p class="text-uppercase fs-3 fw-bold">Catering Info</p></div><div class="row d-flex flex-column align-items-center"><p class="col-12 col-md-8 col-lg-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam omnis ipsa iusto consectetur deleniti quasi voluptatem ratione qui id cum, molestiae dicta accusantium voluptate nam harum quae pariatur provident culpa? </p><p class="col-12 col-md-8 col-lg-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam omnis ipsa iusto consectetur deleniti quasi voluptatem ratione qui id cum, molestiae dicta accusantium voluptate nam harum quae pariatur provident culpa? </p></div>',2),St={class:"row d-flex justify-content-center text-start mb-2"},Et={class:"col-6 col-md-4 col-lg-3"},Dt=(0,o._)("label",{for:"FirstName",class:"form-label"},"First Name",-1),Ht={class:"col-6 col-md-4 col-lg-3"},Ot=(0,o._)("label",{for:"LastName",class:"form-label"},"Last Name",-1),Pt={class:"row d-flex justify-content-center text-start mb-2"},Vt={class:"col-7 col-md-5 col-lg-4"},Ft=(0,o._)("label",{for:"email",class:"form-label"},"Email",-1),Tt={class:"col-5 col-md-3 col-lg-2"},qt=(0,o._)("label",{for:"phone",class:"form-label"},"Phone #",-1),Lt={class:"row d-flex justify-content-center text-start mb-2"},Ut={class:"col-12 col-md-8 col-lg-6"},$t=(0,o._)("label",{for:"description",class:"form-label"},"Brief Description",-1),Bt={class:"row d-flex justify-content-center text-start mb-2"},It={class:"col-6 col-md-3 col-lg-2"},Gt=(0,o._)("label",{for:"type",class:"form-label"},"Event Type",-1),Yt=(0,o._)("option",{disabled:"",value:""},"Please Select",-1),zt=(0,o._)("option",null,"Party",-1),Kt=(0,o._)("option",null,"School",-1),Mt=(0,o._)("option",null,"Soccer",-1),Rt=(0,o._)("option",null,"Other",-1),Qt=[Yt,zt,Kt,Mt,Rt],Zt={class:"col-6 col-md-3 col-lg-2"},Wt=(0,o._)("label",{for:"date",class:"form-label"},"Date",-1),Jt=(0,o._)("div",{class:"row justify-content-center mt-4"},[(0,o._)("button",{type:"submit",class:"col-4 col-md-2 col-lg-2 btn btn-outline-success"}," Submit ")],-1);function Xt(t,e,a,l,r,s){return(0,o.wg)(),(0,o.iD)("div",jt,[Nt,(0,o._)("form",{onSubmit:e[7]||(e[7]=(...t)=>s.HandleForm&&s.HandleForm(...t))},[(0,o._)("div",St,[(0,o._)("div",Et,[Dt,(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>r.FirstName=t),class:"form-control",id:"FirstName",required:""},null,512),[[n.nr,r.FirstName]])]),(0,o._)("div",Ht,[Ot,(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>r.LastName=t),class:"form-control",id:"LastName",required:""},null,512),[[n.nr,r.LastName]])])]),(0,o._)("div",Pt,[(0,o._)("div",Vt,[Ft,(0,o.wy)((0,o._)("input",{type:"email","onUpdate:modelValue":e[2]||(e[2]=t=>r.Email=t),class:"form-control",id:"email",required:""},null,512),[[n.nr,r.Email]])]),(0,o._)("div",Tt,[qt,(0,o.wy)((0,o._)("input",{type:"tel","onUpdate:modelValue":e[3]||(e[3]=t=>r.Phone=t),class:"form-control",id:"phone",required:""},null,512),[[n.nr,r.Phone]])])]),(0,o._)("div",Lt,[(0,o._)("div",Ut,[$t,(0,o.wy)((0,o._)("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[4]||(e[4]=t=>r.Description=t),placeholder:"Number of people? Expectation? etc...",required:""},null,512),[[n.nr,r.Description]])])]),(0,o._)("div",Bt,[(0,o._)("div",It,[Gt,(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":e[5]||(e[5]=t=>r.EventType=t),class:"form-select",id:"type",required:""},Qt,512),[[n.bM,r.EventType]])]),(0,o._)("div",Zt,[Wt,(0,o.wy)((0,o._)("input",{type:"date","onUpdate:modelValue":e[6]||(e[6]=t=>Date=t),class:"form-control",id:"date",required:""},null,512),[[n.nr,Date]])])]),Jt],32)])}class te{static async FormReq(t){try{await et().post("/api/sendgrid",t)}catch(e){alert(e)}}}var ee=te,ae={name:"Catering-V",data(){return{FirstName:"",LastName:"",Email:"",Phone:"",Description:"",EventType:"",Date:null}},methods:{async HandleForm(){await ee.FormReq({first_name:this.FirstName,last_name:this.LastName,email:this.Email,phone:this.Phone,description:this.Description,event_type:this.EventType,date:this.Date}),window.location.reload()}}};const ne=(0,x.Z)(ae,[["render",Xt]]);var oe=ne;const le=[{path:"/",name:"home",component:kt},{path:"/Burritos",name:"Burritos",component:rt},{path:"/Tacos",name:"Tacos",component:rt},{path:"/Tortas",name:"Tortas",component:rt},{path:"/Sopes",name:"Sopes",component:rt},{path:"/Gorditas",name:"Gorditas",component:rt},{path:"/Huaraches",name:"Huaraches",component:rt},{path:"/Nachos",name:"Nachos",component:rt},{path:"/Quesadillas",name:"Quesadillas",component:rt},{path:"/Platillos",name:"Platillos",component:rt},{path:"/Kids",name:"Kids",component:rt},{path:"/catering",name:"Catering",component:oe}],re=(0,q.p7)({history:(0,q.r5)(),routes:le});var se=re;a(806);(0,n.ri)(T).use(se).mount("#app")}},e={};function a(n){var o=e[n];if(void 0!==o)return o.exports;var l=e[n]={exports:{}};return t[n](l,l.exports,a),l.exports}a.m=t,function(){var t=[];a.O=function(e,n,o,l){if(!n){var r=1/0;for(u=0;u<t.length;u++){n=t[u][0],o=t[u][1],l=t[u][2];for(var s=!0,i=0;i<n.length;i++)(!1&l||r>=l)&&Object.keys(a.O).every((function(t){return a.O[t](n[i])}))?n.splice(i--,1):(s=!1,l<r&&(r=l));if(s){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}l=l||0;for(var u=t.length;u>0&&t[u-1][2]>l;u--)t[u]=t[u-1];t[u]=[n,o,l]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,l,r=n[0],s=n[1],i=n[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(i)var u=i(a)}for(e&&e(n);c<r.length;c++)l=r[c],a.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return a.O(u)},n=self["webpackChunkel_andariego_menu"]=self["webpackChunkel_andariego_menu"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[772,99,698,814,564],(function(){return a(8151)}));n=a.O(n)})();
//# sourceMappingURL=app.82f5a993.js.map