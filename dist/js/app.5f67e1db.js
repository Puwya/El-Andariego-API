(function(){"use strict";var t={9600:function(t,e,a){var o=a(9242),l=a(3396);function n(t,e,a,o,n,s){const r=(0,l.up)("Nav"),c=(0,l.up)("router-view"),i=(0,l.up)("Footer");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(r),(0,l.Wm)(c),(0,l.Wm)(i)],64)}const s={class:"navbar navbar-expand-lg bg-light py-1 pb-1 mb-4"},r={class:"container-fluid"},c={class:"me-3"},i=(0,l._)("img",{src:"/El-Andariego-Logo.jpeg",class:"border rounded-circle",alt:"Logo",width:"40",height:"40"},null,-1),d=[i],u=(0,l._)("button",{class:"navbar-toggler border p-1 m-1",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,l._)("span",{class:"navbar-toggler-icon"})],-1),m={class:"collapse navbar-collapse",id:"navbarSupportedContent"},p={class:"navbar-nav me-auto mb-2 mb-lg-0"},b={class:"nav-item"},v={class:"nav-item"},g={class:"nav-item"},f={class:"nav-item dropdown"},_=(0,l._)("a",{class:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Contact ",-1),h={class:"dropdown-menu text-center"},w=(0,l._)("li",null,[(0,l._)("a",{class:"dropdown-item",href:"https://www.facebook.com/profile.php?id=100082710796984"},"Facebook")],-1),y=(0,l._)("li",null,[(0,l._)("a",{class:"dropdown-item",href:"https://instagram.com/el_andariegotruck"},"Instagram")],-1),x=(0,l._)("li",null,[(0,l._)("a",{class:"dropdown-item",href:"https://g.page/r/CY53oo_JlDb8EAI/review"},"Leave a review!")],-1),C=(0,l._)("li",null,[(0,l._)("hr",{class:"dropdown-divider"})],-1);function A(t,e,a,n,i,A){return(0,l.wg)(),(0,l.iD)("nav",s,[(0,l._)("div",r,[(0,l._)("div",c,[(0,l._)("a",{href:"#",onClick:e[0]||(e[0]=(0,o.iM)((e=>t.$router.push("/")),["prevent"]))},d)]),u,(0,l._)("div",m,[(0,l._)("ul",p,[(0,l._)("li",b,[(0,l._)("a",{class:"nav-link",href:"#",onClick:e[1]||(e[1]=(0,o.iM)((e=>t.$router.push("/")),["prevent"]))},"Home")]),(0,l._)("li",v,[(0,l._)("a",{class:"nav-link",href:"#",onClick:e[2]||(e[2]=(0,o.iM)((e=>t.$router.push("/menu")),["prevent"]))},"Menu")]),(0,l._)("li",g,[(0,l._)("a",{class:"nav-link",href:"#",onClick:e[3]||(e[3]=(0,o.iM)((e=>t.$router.push("/catering")),["prevent"]))}," Catering ")]),(0,l._)("li",f,[_,(0,l._)("ul",h,[w,y,x,C,(0,l._)("li",null,[(0,l._)("button",{class:"dropdown-item",onClick:e[4]||(e[4]=(...t)=>A.CopyPhone&&A.CopyPhone(...t))},"949-806-0123")])])])])])])])}var k={name:"Nav-V",methods:{async CopyPhone(){try{await navigator.clipboard.writeText("949-806-0123")}catch(t){alert("Could not copy")}}}},S=a(89);const j=(0,S.Z)(k,[["render",A]]);var D=j;const H={class:"d-flex mt-3 bg-light bg-gradient align-items-center justify-content-center",style:{height:"100px"}},N=(0,l._)("p",null,"© 2022 El Andariego",-1),O=[N];function T(t,e,a,o,n,s){return(0,l.wg)(),(0,l.iD)("div",H,O)}var M={name:"Footer-V"};const V=(0,S.Z)(M,[["render",T]]);var $=V,q={name:"App",components:{Nav:D,Footer:$}};const P=(0,S.Z)(q,[["render",n]]);var E=P,F=a(2483),I=a(7139);const L={class:"container pt-5"},U={class:"row d-grid"},z=(0,l._)("header",{class:"col"},[(0,l._)("h1",{class:"text-success fw-bold"},"El Andariego Truck")],-1),B={class:"col mb-4"},Z=(0,l._)("p",{class:"m-0"},"Authentic Mexican Food",-1),Y=["textContent"],G={class:"col mb-5"},R={id:"Controls",class:"col-12 col-lg-10 col-xl-8 carousel carousel-dark slide mx-auto d-block mb-5","data-bs-ride":"carousel"},K={class:"carousel-inner"},W=(0,l._)("div",{class:"carousel-item active"},[(0,l._)("img",{src:"/home/slider/Logo.jpeg",class:"img-fluid",alt:"..."})],-1),J=["src"],Q=(0,l._)("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#Controls","data-bs-slide":"prev"},[(0,l._)("span",{class:"carousel-control-prev-icon","aria-hidden":"true"})],-1),X=(0,l._)("button",{class:"carousel-control-next",type:"button","data-bs-target":"#Controls","data-bs-slide":"next"},[(0,l._)("span",{class:"carousel-control-next-icon","aria-hidden":"true"})],-1),tt=(0,l.uE)('<div class="col"><hr class="col-1 mx-auto d-block m-2 border border-dark border-1"><p class="text-muted fs-6">Find El Andariego</p></div><div class="col-12 col-lg-10 col-xl-8 mx-auto d-block"><img src="/home/Location.png" class="img-fluid" alt="La Zanja San Juan Capistrano, CA 92675 US"></div>',2);function et(t,e,a,o,n,s){const r=(0,l.up)("Info");return(0,l.wg)(),(0,l.iD)("div",L,[(0,l._)("div",U,[z,(0,l._)("div",B,[Z,(0,l._)("p",{class:"m-0",textContent:(0,I.zw)(n.scheduleText)},null,8,Y)]),(0,l._)("div",G,[(0,l._)("button",{class:"col-4 col-md-3 col-lg-2 btn btn-outline-success",onClick:e[0]||(e[0]=e=>t.$router.push("/menu"))}," View Menu ")]),(0,l._)("div",R,[(0,l._)("div",K,[W,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.imageSlider,((t,e)=>((0,l.wg)(),(0,l.iD)("div",{key:e,class:"carousel-item"},[(0,l._)("img",{src:t,class:"img-fluid",alt:"..."},null,8,J)])))),128))]),Q,X]),tt]),(0,l.Wm)(r)])}const at={class:"container"},ot=(0,l.uE)('<div class="col mt-5 text-start" data-v-b0916bd4><label for="contact-us" class="col-12 mb-1 fw-bold" data-v-b0916bd4>Contact Us</label><p class="m-0 ms-1" data-v-b0916bd4><img src="/icons/food-truck.png" alt="truck" data-v-b0916bd4> 31345 Los Rios St, </p><p class="mb-1 ms-1" data-v-b0916bd4>San Juan Capistrano, CA 92675</p><p class="ms-1" data-v-b0916bd4><img src="/icons/phone.png" class="me-1" width="24" height="24" alt="phone#" data-v-b0916bd4> (949) 806 - 0123 </p></div><div class="col mt-2 text-start" data-v-b0916bd4><label for="hours" class="mb-1 fw-bold" data-v-b0916bd4>Business Hours</label><table class="table table-sm table-borderless" id="hours" data-v-b0916bd4><tr data-v-b0916bd4><td data-v-b0916bd4>Mon - Tue - Sat: Closed</td></tr><tr data-v-b0916bd4><td data-v-b0916bd4>Wed - Thu - Fri - Sun: 4:00 - 11:30 PM</td></tr></table></div>',2),lt=[ot];function nt(t,e,a,o,n,s){return(0,l.wg)(),(0,l.iD)("div",at,lt)}var st={name:"Info-V"};const rt=(0,S.Z)(st,[["render",nt],["__scopeId","data-v-b0916bd4"]]);var ct=rt,it={name:"Home-V",data(){return{imageSlider:["/home/slider/Platillos.jpeg","/home/slider/Tacos.jpeg"],scheduleText:"Opening at 4:00 PM"}},components:{Info:ct},mounted(){const t=new Date,e=t.getHours();this.isBetweenSchedule(e)&&(this.scheduleText="Open today until 11:30 PM")},methods:{isBetweenSchedule(t){return t>=16&&t<=23}}};const dt=(0,S.Z)(it,[["render",et]]);var ut=dt;const mt=t=>((0,l.dD)("data-v-507f2f38"),t=t(),(0,l.Cn)(),t),pt={class:"container"},bt=mt((()=>(0,l._)("div",{class:"row"},[(0,l._)("div",null,[(0,l._)("h2",{class:"text-success fw-bold"},"Menu")])],-1))),vt={class:"row justify-content-center mb-2"},gt=["srcset","src","alt"],ft={class:"card-body text-dark"},_t=["textContent"],ht=["textContent"],wt={class:"row justify-content-evenly"},yt=["onClick"],xt=["srcset","src","alt"],Ct={class:"card-body text-dark"},At=["textContent"],kt=["textContent"];function St(t,e,a,o,n,s){return(0,l.wg)(),(0,l.iD)("div",pt,[bt,(0,l._)("div",vt,[(0,l._)("button",{class:"card border-0 col-10 col-sm-9 col-md-6 col-lg-5",onClick:e[0]||(e[0]=e=>t.$router.push(`/items/${n.platillos.name}`))},[(0,l._)("img",{srcset:n.platillos.image,src:n.placeHolderSrc,class:"card-img-top pt-1",alt:n.platillos.name},null,8,gt),(0,l._)("div",ft,[(0,l._)("h5",{class:"card-title",textContent:(0,I.zw)(n.platillos.name)},null,8,_t),(0,l._)("p",{class:"card-text",textContent:(0,I.zw)(n.platillos.description)},null,8,ht)])])]),(0,l._)("div",wt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.categories,(e=>((0,l.wg)(),(0,l.iD)("button",{key:e.name,class:"card border-0 col-6 col-lg-3 me-lg-1 col-md-4 mb-3 p-1",onClick:a=>t.$router.push(`/items/${e.name}`)},[(0,l._)("img",{srcset:e.image,src:n.placeHolderSrc,class:"card-img-top",alt:e.name},null,8,xt),(0,l._)("div",Ct,[(0,l._)("h5",{class:"card-title",textContent:(0,I.zw)(e.name)},null,8,At),(0,l._)("p",{class:"card-text",textContent:(0,I.zw)(e.description)},null,8,kt)])],8,yt)))),128))])])}var jt=a(6265),Dt=a.n(jt);class Ht{static async Get(){try{const t=await Dt().get("/api/categories");return t.data}catch(t){return t}}static async GetPlatillos(){try{const t=await Dt().get("/api/categories/platillos");return t.data}catch(t){return t}}}var Nt=Ht;const Ot="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";var Tt=Ot,Mt={name:"Categories-V",data(){return{categories:[],platillos:{},placeHolderSrc:Tt}},async mounted(){this.categories=await Nt.Get();const t=await Nt.GetPlatillos();this.platillos={name:t[0].name,description:t[0].description,image:t[0].image},this.categories.sort(((t,e)=>t.priority-e.priority))}};const Vt=(0,S.Z)(Mt,[["render",St],["__scopeId","data-v-507f2f38"]]);var $t=Vt;const qt={class:"container"},Pt={class:"row justify-content-end p-0 m-0"},Et={class:"col-auto"},Ft={class:"row justify-content-center mb-2"},It={class:"col-auto"},Lt=["textContent"],Ut={class:"row justify-content-center mb-4"},zt={class:"col-10 col-lg-7 mb-4"},Bt=["srcset","src"],Zt=(0,l._)("hr",{class:"col-7 col-md-9 col-lg-9 col-xl-10 border border-success border-2 ms-4 me-4"},null,-1),Yt={class:"row justify-content-evenly ms-5 me-5"},Gt=["textContent"],Rt=["textContent"],Kt=["textContent"],Wt=(0,l._)("p",{class:"fs-6 mt-4"},"..............................................",-1);function Jt(t,e,a,o,n,s){return(0,l.wg)(),(0,l.iD)("div",qt,[(0,l._)("div",Pt,[(0,l._)("div",Et,[(0,l._)("button",{class:"btn btn-outline-secondary fw-bold pt-0 pb-0 m-0",type:"button",onClick:e[0]||(e[0]=e=>t.$router.push("/menu"))}," ‹ ")])]),(0,l._)("div",Ft,[(0,l._)("div",It,[(0,l._)("span",{textContent:(0,I.zw)(t.$route.params.item),class:"mb-2 fs-3 text-uppercase fw-bold text-danger"},null,8,Lt)])]),(0,l._)("div",Ut,[(0,l._)("div",zt,[(0,l._)("img",{srcset:`/heros/${this.$route.params.item}.jpeg`,src:n.placeHolderSrc,class:"img-fluid rounded-3",width:"1080",height:"1080"},null,8,Bt)]),Zt]),(0,l._)("table",Yt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.items,(t=>((0,l.wg)(),(0,l.iD)("tr",{key:t.name,class:"col-lg-4 col-md-6 mb-2"},[(0,l._)("div",null,[(0,l._)("span",{class:"fs-6 m-1 fw-bold text-success",textContent:(0,I.zw)(t.name)},null,8,Gt),(0,l._)("span",{class:"fs-6 m-1",textContent:(0,I.zw)(" ($"+t.price+")")},null,8,Rt),(0,l._)("p",{class:"fs-6 m-1",textContent:(0,I.zw)(t.content)},null,8,Kt),Wt])])))),128))])])}class Qt{static async GetByCategory(t){try{const e=await Dt().get(`/api/items/${t}`);return e.data}catch(e){return e}}}var Xt=Qt,te={name:"Items-V",data(){return{items:[],placeHolderSrc:Tt}},async mounted(){this.items=await Xt.GetByCategory(this.$route.params.item)}};const ee=(0,S.Z)(te,[["render",Jt]]);var ae=ee;const oe={class:"container mb-5 pb-5 pt-3"},le=(0,l.uE)('<div class="row"><p class="text-uppercase fs-3 fw-bold">Catering Info</p></div><div class="row d-flex flex-column align-items-center"><p class="col-12 col-md-8 col-lg-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam omnis ipsa iusto consectetur deleniti quasi voluptatem ratione qui id cum, molestiae dicta accusantium voluptate nam harum quae pariatur provident culpa? </p><p class="col-12 col-md-8 col-lg-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam omnis ipsa iusto consectetur deleniti quasi voluptatem ratione qui id cum, molestiae dicta accusantium voluptate nam harum quae pariatur provident culpa? </p></div>',2),ne={class:"row d-flex justify-content-center text-start mb-2"},se={class:"col-6 col-md-4 col-lg-3"},re=(0,l._)("label",{for:"firstName",class:"form-label"},"First Name",-1),ce={class:"col-6 col-md-4 col-lg-3"},ie=(0,l._)("label",{for:"lastName",class:"form-label"},"Last Name",-1),de={class:"row d-flex justify-content-center text-start mb-2"},ue={class:"col-7 col-md-5 col-lg-4"},me=(0,l._)("label",{for:"email",class:"form-label"},"email",-1),pe={class:"col-5 col-md-3 col-lg-2"},be=(0,l._)("label",{for:"phone",class:"form-label"},"phone #",-1),ve={class:"row d-flex justify-content-center text-start mb-2"},ge={class:"col-12 col-md-8 col-lg-6"},fe=(0,l._)("label",{for:"description",class:"form-label"},"Brief description",-1),_e={class:"row d-flex justify-content-center text-start mb-2"},he={class:"col-6 col-md-3 col-lg-2"},we=(0,l._)("label",{for:"type",class:"form-label"},"Event Type",-1),ye=(0,l._)("option",{disabled:"",value:""},"Please Select",-1),xe=(0,l._)("option",null,"Party",-1),Ce=(0,l._)("option",null,"School",-1),Ae=(0,l._)("option",null,"Soccer",-1),ke=(0,l._)("option",null,"Other",-1),Se=[ye,xe,Ce,Ae,ke],je={class:"col-6 col-md-3 col-lg-2"},De=(0,l._)("label",{for:"date",class:"form-label"},"date",-1),He=["value"],Ne=(0,l._)("div",{class:"row justify-content-center mt-4"},[(0,l._)("button",{type:"submit",class:"col-4 col-md-2 col-lg-2 btn btn-outline-success"}," Submit ")],-1);function Oe(t,e,a,n,s,r){return(0,l.wg)(),(0,l.iD)("div",oe,[le,(0,l._)("form",{onSubmit:e[7]||(e[7]=(...t)=>r.HandleForm&&r.HandleForm(...t))},[(0,l._)("div",ne,[(0,l._)("div",se,[re,(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>s.firstName=t),class:"form-control",id:"firstName",required:""},null,512),[[o.nr,s.firstName]])]),(0,l._)("div",ce,[ie,(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>s.lastName=t),class:"form-control",id:"lastName",required:""},null,512),[[o.nr,s.lastName]])])]),(0,l._)("div",de,[(0,l._)("div",ue,[me,(0,l.wy)((0,l._)("input",{type:"email","onUpdate:modelValue":e[2]||(e[2]=t=>s.email=t),class:"form-control",id:"email",required:""},null,512),[[o.nr,s.email]])]),(0,l._)("div",pe,[be,(0,l.wy)((0,l._)("input",{type:"tel","onUpdate:modelValue":e[3]||(e[3]=t=>s.phone=t),class:"form-control",id:"phone",required:""},null,512),[[o.nr,s.phone]])])]),(0,l._)("div",ve,[(0,l._)("div",ge,[fe,(0,l.wy)((0,l._)("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[4]||(e[4]=t=>s.description=t),placeholder:"Number of people? Expectation? etc...",required:""},null,512),[[o.nr,s.description]])])]),(0,l._)("div",_e,[(0,l._)("div",he,[we,(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":e[5]||(e[5]=t=>s.eventType=t),class:"form-select",id:"type",required:""},Se,512),[[o.bM,s.eventType]])]),(0,l._)("div",je,[De,(0,l._)("input",{type:"date",value:(new Date).toISOString().substr(0,10),class:"form-control",id:"date",onInput:e[6]||(e[6]=t=>r.HandleDate(t.target.value)),required:""},null,40,He)])]),Ne],32)])}class Te{static async FormReq(t){try{await Dt().post("/api/sendgrid",t)}catch(e){alert(e)}}}var Me=Te,Ve={name:"Catering-V",data(){return{firstName:"",lastName:"",email:"",phone:"",description:"",eventType:"",date:""}},methods:{async HandleForm(){await Me.FormReq({first_name:this.firstName,last_name:this.lastName,email:this.email,phone:this.phone,description:this.description,event_type:this.eventType,date:this.date}),window.location.reload()},HandleDate(t){this.date=t}}};const $e=(0,S.Z)(Ve,[["render",Oe]]);var qe=$e;const Pe=[{path:"/",name:"Home",component:ut},{path:"/menu",name:"Menu",component:$t},{path:"/items/:item",name:"Items",component:ae},{path:"/catering",name:"Catering",component:qe}],Ee=(0,F.p7)({history:(0,F.r5)(),routes:Pe});var Fe=Ee;a(806);(0,o.ri)(E).use(Fe).mount("#app")}},e={};function a(o){var l=e[o];if(void 0!==l)return l.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,o,l,n){if(!o){var s=1/0;for(d=0;d<t.length;d++){o=t[d][0],l=t[d][1],n=t[d][2];for(var r=!0,c=0;c<o.length;c++)(!1&n||s>=n)&&Object.keys(a.O).every((function(t){return a.O[t](o[c])}))?o.splice(c--,1):(r=!1,n<s&&(s=n));if(r){t.splice(d--,1);var i=l();void 0!==i&&(e=i)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[o,l,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var l,n,s=o[0],r=o[1],c=o[2],i=0;if(s.some((function(e){return 0!==t[e]}))){for(l in r)a.o(r,l)&&(a.m[l]=r[l]);if(c)var d=c(a)}for(e&&e(o);i<s.length;i++)n=s[i],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(d)},o=self["webpackChunkel_andariego_menu"]=self["webpackChunkel_andariego_menu"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[772,99,698,814,564],(function(){return a(9600)}));o=a.O(o)})();
//# sourceMappingURL=app.5f67e1db.js.map