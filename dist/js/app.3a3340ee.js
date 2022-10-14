(function(){"use strict";var e={9783:function(e,t,a){var s=a(9242),n=a(3396);const o={id:"main"};function l(e,t,a,s,l,c){const r=(0,n.up)("Nav"),i=(0,n.up)("router-view"),d=(0,n.up)("Footer");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(r),(0,n._)("div",o,[(0,n.Wm)(i)]),(0,n.Wm)(d)],64)}var c=a(7139);const r=e=>((0,n.dD)("data-v-0cd7b408"),e=e(),(0,n.Cn)(),e),i={class:"navbar bg-light p-0"},d={class:"container-fluid"},u=r((()=>(0,n._)("img",{src:"/El-Andariego-Logo.jpeg",class:"border rounded-circle",alt:"Logo",width:"40",height:"40"},null,-1))),m=[u],p=r((()=>(0,n._)("button",{id:"navBurger",class:"btn fa-bounce border border-0",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-controls":"offcanvasNavbar"},[(0,n._)("i",{class:"fa-solid fa-bars fa-lg"})],-1))),f={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel"},v=r((()=>(0,n._)("div",{class:"offcanvas-header bg-light pt-1 pb-1"},[(0,n._)("img",{src:"/El-Andariego-Logo.jpeg",class:"offcanvas-title border rounded-circle",alt:"Logo",width:"40",height:"40"}),(0,n._)("button",{class:"btn border border-0",type:"button","data-bs-dismiss":"offcanvas","aria-label":"Close"},[(0,n._)("i",{class:"fa-solid fa-xmark fa-lg"})])],-1))),b={class:"offcanvas-body pt-1 pe-0 ps-0 ms-0 me-0"},g={class:"navbar-nav justify-content-end flex-grow-1 pe-3"},h={class:"nav-item mt-1 mb-1 ms-3 fw-bold"},_=r((()=>(0,n._)("hr",{class:"p-0 m-0"},null,-1))),w={class:"nav-item mt-1 mb-1 ms-3 fw-bold"},y=r((()=>(0,n._)("hr",{class:"p-0 m-0"},null,-1))),x={class:"nav-item mt-1 mb-1 ms-3 fw-bold"},C=r((()=>(0,n._)("hr",{class:"p-0 m-0"},null,-1))),k={class:"nav-item dropdown mt-1 mb-1 ms-3 fw-bold"},S=r((()=>(0,n._)("a",{class:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Contact ",-1))),A={class:"dropdown-menu text-center"},D=r((()=>(0,n._)("li",null,[(0,n._)("a",{class:"dropdown-item",href:"https://www.facebook.com/profile.php?id=100082710796984",target:"_blank"},"Facebook")],-1))),j=r((()=>(0,n._)("li",null,[(0,n._)("a",{class:"dropdown-item",href:"https://instagram.com/el_andariegotruck",target:"_blank"},"Instagram")],-1))),N=r((()=>(0,n._)("li",null,[(0,n._)("a",{class:"dropdown-item",href:"https://g.page/r/CY53oo_JlDb8EAI/review",target:"_blank"},"Leave a review!")],-1))),I=r((()=>(0,n._)("li",null,[(0,n._)("hr",{class:"dropdown-divider"})],-1))),M=r((()=>(0,n._)("hr",{class:"p-0 m-0 mb-2"},null,-1))),H={class:"d-flex mt-1 ms-3 me-3",role:"search"},O={key:0,class:"mt-3"},$=["onClick"],P=["textContent"],V=["textContent"];function E(e,t,a,o,l,r){return(0,n.wg)(),(0,n.iD)("nav",i,[(0,n._)("div",d,[(0,n._)("a",{class:"navbar-brand",href:"#",onClick:t[0]||(t[0]=(0,s.iM)((t=>e.$router.push("/")),["prevent"]))},m),p,(0,n._)("div",f,[v,(0,n._)("div",b,[(0,n._)("ul",g,[(0,n._)("li",h,[(0,n._)("a",{class:"nav-link",href:"#",onClick:t[1]||(t[1]=(0,s.iM)((t=>e.$router.push("/")),["prevent"])),"data-bs-dismiss":"offcanvas","aria-label":"Close"},"Home")]),_,(0,n._)("li",w,[(0,n._)("a",{class:"nav-link",href:"#",onClick:t[2]||(t[2]=(0,s.iM)((t=>e.$router.push("/menu")),["prevent"])),"data-bs-dismiss":"offcanvas","aria-label":"Close"},"Menu")]),y,(0,n._)("li",x,[(0,n._)("a",{class:"nav-link",href:"#",onClick:t[3]||(t[3]=(0,s.iM)((t=>e.$router.push("/catering")),["prevent"])),"data-bs-dismiss":"offcanvas","aria-label":"Close"}," Catering ")]),C,(0,n._)("li",k,[S,(0,n._)("ul",A,[D,j,N,I,(0,n._)("li",null,[(0,n._)("button",{class:"dropdown-item",onClick:t[4]||(t[4]=(...e)=>r.CopyPhone&&r.CopyPhone(...e))},"949-806-0123")])])]),M]),(0,n._)("form",H,[(0,n.wy)((0,n._)("input",{class:"form-control me-2",type:"text",placeholder:"Search","aria-label":"Search","onUpdate:modelValue":t[5]||(t[5]=e=>l.itemSearch=e)},null,512),[[s.nr,l.itemSearch]])]),l.itemSearch?((0,n.wg)(),(0,n.iD)("div",O,[(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.searchResult,(t=>((0,n.wg)(),(0,n.iD)("li",{key:t,class:"pt-2 ps-3 border"},[(0,n._)("a",{href:"#",onClick:(0,s.iM)((a=>e.$router.push(`/menu/items/${t.category}`)),["prevent"]),"data-bs-dismiss":"offcanvas","aria-label":"Close"},[(0,n._)("h6",{textContent:(0,c.zw)(t.name)},null,8,P),(0,n._)("p",{id:"searchPrice",class:"mb-1",textContent:(0,c.zw)("$"+t.price)},null,8,V)],8,$)])))),128))])])):(0,n.kq)("",!0)])])])])}var T=a(6265),L=a.n(T);async function q(e){try{const t=await L().get(`/api/search/${e}`);return t.data}catch(t){alert(t)}}var U={name:"Nav-V",data(){return{itemSearch:"",searchResult:[]}},watch:{async itemSearch(){if(this.searchResult=[],this.itemSearch){const e=await q(this.itemSearch);this.searchResult=e}}},methods:{async CopyPhone(){try{await navigator.clipboard.writeText("949-806-0123")}catch(e){alert("Could not copy")}}}},Y=a(89);const z=(0,Y.Z)(U,[["render",E],["__scopeId","data-v-0cd7b408"]]);var F=z;const R=e=>((0,n.dD)("data-v-751db006"),e=e(),(0,n.Cn)(),e),Z={id:"footer",class:"row mt-3 bg-light bg-gradient align-items-center"},B=R((()=>(0,n._)("p",{class:"text-center mt-3"},"© 2022 El Andariego",-1))),W=[B];function K(e,t,a,s,o,l){return(0,n.wg)(),(0,n.iD)("footer",Z,W)}var J={name:"Footer-V"};const Q=(0,Y.Z)(J,[["render",K],["__scopeId","data-v-751db006"]]);var G=Q,X={name:"App",components:{Nav:F,Footer:G}};const ee=(0,Y.Z)(X,[["render",l]]);var te=ee,ae=a(2483);const se={class:"container pt-5"},ne={class:"row d-grid"},oe=(0,n._)("header",{class:"col"},[(0,n._)("h1",{class:"text-center text-success fw-bold"},"El Andariego Truck")],-1),le={class:"col mb-4 text-center"},ce=(0,n._)("p",{class:"m-0"},"Authentic Mexican Food",-1),re=["textContent"],ie={class:"col mb-5"},de={id:"Home-Slider",class:"col-12 col-lg-10 col-xl-8 carousel carousel-dark slide mx-auto d-block mb-5","data-bs-ride":"carousel"},ue={class:"carousel-inner"},me=(0,n._)("div",{class:"carousel-item active"},[(0,n._)("img",{src:"/home/slider/Logo.jpeg",class:"img-fluid",alt:"..."})],-1),pe=["src"],fe=(0,n._)("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#Home-Slider","data-bs-slide":"prev"},[(0,n._)("span",{class:"carousel-control-prev-icon","aria-hidden":"true"})],-1),ve=(0,n._)("button",{class:"carousel-control-next",type:"button","data-bs-target":"#Home-Slider","data-bs-slide":"next"},[(0,n._)("span",{class:"carousel-control-next-icon","aria-hidden":"true"})],-1),be=(0,n.uE)('<div class="col"><hr class="col-1 mx-auto d-block m-2 border border-dark border-1"><p class="text-center text-muted fs-6">Find El Andariego</p></div><div class="col-12 col-lg-10 col-xl-8 mx-auto d-block"><img src="/home/Location.png" class="img-fluid" alt="La Zanja San Juan Capistrano, CA 92675 US"></div>',2);function ge(e,t,a,s,o,l){const r=(0,n.up)("Info");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",se,[(0,n._)("div",ne,[oe,(0,n._)("div",le,[ce,(0,n._)("p",{class:"m-0",textContent:(0,c.zw)(o.schedule)},null,8,re)]),(0,n._)("div",ie,[(0,n._)("button",{class:"col-4 col-md-3 col-lg-2 btn btn-success mx-auto d-block",onClick:t[0]||(t[0]=t=>e.$router.push("/menu"))}," View Menu ")]),(0,n._)("div",de,[(0,n._)("div",ue,[me,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.sliderImages,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:t,class:"carousel-item"},[(0,n._)("img",{src:e,class:"img-fluid",alt:"..."},null,8,pe)])))),128))]),fe,ve]),be])]),(0,n.Wm)(r)],64)}const he={class:"container-fluid ms-1 ms-sm-2 ms-md-3 ms-lg-3 ms-xl-3"},_e=(0,n.uE)('<div class="col mt-5 text-start" data-v-49e6cc80><label for="contact-us" class="col-12 mb-1 fw-bold" data-v-49e6cc80>Contact Us</label><p class="m-0 ms-1" data-v-49e6cc80><i class="fa-solid fa-truck fa-lg me-1" data-v-49e6cc80></i> 31345 Los Rios St, </p><p class="mb-1 ms-1" data-v-49e6cc80>San Juan Capistrano, CA 92675</p><p class="ms-1" data-v-49e6cc80><i class="fa-solid fa-phone fa-shake fa-lg me-1" data-v-49e6cc80></i> (949) 806 - 0123 </p></div><div class="col mt-2 text-start" data-v-49e6cc80><label for="hours" class="mb-1 fw-bold" data-v-49e6cc80>Business Hours</label><table class="table table-sm table-borderless mb-1" id="hours" data-v-49e6cc80><tr data-v-49e6cc80><td data-v-49e6cc80>Mon - Tue - Sat: Closed</td></tr><tr data-v-49e6cc80><td data-v-49e6cc80>Wed - Thu - Fri - Sun: 4:00 - 11:30 PM</td></tr></table></div><div class="d-flex justify-content-start" data-v-49e6cc80><a href="https://www.facebook.com/profile.php?id=100082710796984" class="me-2" target="_blank" data-v-49e6cc80><i class="fa-brands fa-facebook fa-lg" data-v-49e6cc80></i></a><a href="https://instagram.com/el_andariegotruck" class="me-2" target="_blank" data-v-49e6cc80><i class="fa-brands fa-instagram fa-lg" data-v-49e6cc80></i></a><a href="https://g.page/r/CY53oo_JlDb8EAI/review" class="me-2" target="_blank" data-v-49e6cc80><i class="fa-brands fa-google fa-md" data-v-49e6cc80></i></a></div>',3),we=[_e];function ye(e,t,a,s,o,l){return(0,n.wg)(),(0,n.iD)("div",he,we)}var xe={name:"Info-V"};const Ce=(0,Y.Z)(xe,[["render",ye],["__scopeId","data-v-49e6cc80"]]);var ke=Ce;const Se={Sunday:0,Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6};var Ae=Se,De={name:"Home-V",data(){return{sliderImages:["/home/slider/Tacos.jpeg","/home/slider/Cubana.png"],schedule:"Opening at 4:00 PM"}},components:{Info:ke},watch:{schedule:{immediate:!0,handler(){this.setSchedule()}}},methods:{setSchedule(){const e=(new Date).getDay();switch(e){case Ae.Monday:case Ae.Tuesday:return void(this.schedule="Closed, Opening Wednesday at 4:00 PM");case Ae.Saturday:return void(this.schedule="Closed, Opening Sunday at 4:00 PM");default:break}this.isWorkSchedule()&&(this.schedule="Open today until 11:30 PM")},isWorkSchedule(){const e=(new Date).getHours(),t=16,a=23;return e>=t&&e<=a}}};const je=(0,Y.Z)(De,[["render",ge]]);var Ne=je;const Ie=e=>((0,n.dD)("data-v-2e9e4ce2"),e=e(),(0,n.Cn)(),e),Me={class:"container"},He={class:"row mt-4 mb-5"},Oe=Ie((()=>(0,n._)("header",null,[(0,n._)("h1",{id:"title",class:"text-center text-success text-uppercase"},"Menu")],-1))),$e=Ie((()=>(0,n._)("div",{class:"text-center"},[(0,n._)("p",{class:"mt-3 mb-0 text-center fw-bold text-uppercase"},"Categories"),(0,n._)("i",{class:"fa-solid fa-angle-down"})],-1))),Pe={id:"horizontal-scroll",class:"col-8 col-lg-4 mt-1 mx-auto"},Ve=["onClick"],Ee=["textContent"];function Te(e,t,a,s,o,l){const r=(0,n.up)("categories");return(0,n.wg)(),(0,n.iD)("div",Me,[(0,n._)("div",He,[Oe,$e,(0,n._)("div",Pe,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.categories,(t=>((0,n.wg)(),(0,n.iD)("a",{key:t.name,class:"mx-1",onClick:a=>e.$router.push(`/menu/items/${t.name}`)},[(0,n._)("span",{textContent:(0,c.zw)(t.name)},null,8,Ee)],8,Ve)))),128))])]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.menu,(e=>((0,n.wg)(),(0,n.j4)(r,{key:e.category,list:e.list,category:e.category},null,8,["list","category"])))),128))])}class Le{static async get(){try{const e=await L().get("/api/menu");return e.data}catch(e){alert(e)}}static async getCategories(){try{const e=await L().get("/api/menu/categories");return e.data}catch(e){alert(e)}}static async getItemsByCategory(e){try{const t=await L().get(`/api/menu/items/${e}`);return t.data}catch(t){alert(t)}}}var qe=Le;const Ue=e=>((0,n.dD)("data-v-7b4c5d82"),e=e(),(0,n.Cn)(),e),Ye={class:"mt-2"},ze={class:"mt-2 mb-5"},Fe=["textContent"],Re={class:"row justify-content-evenly ms-5 me-5"},Ze={class:"text-center"},Be=["textContent"],We=["textContent"],Ke=["textContent"],Je=Ue((()=>(0,n._)("p",{class:"fs-6 mt-4"},"..............................................",-1)));function Qe(e,t,a,s,o,l){return(0,n.wg)(),(0,n.iD)("div",Ye,[(0,n._)("div",ze,[(0,n._)("p",{id:"subtitle",textContent:(0,c.zw)(a.category),class:"text-center text-danger"},null,8,Fe)]),(0,n._)("table",Re,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.list,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e.name,class:"col-lg-4 col-md-6 mb-2"},[(0,n._)("div",Ze,[(0,n._)("span",{class:"fs-6 m-1 fw-bold text-success",textContent:(0,c.zw)(e.name)},null,8,Be),(0,n._)("span",{class:"fs-6 m-1",textContent:(0,c.zw)(" ($"+e.price+")")},null,8,We),(0,n._)("p",{class:"fs-6 m-1",textContent:(0,c.zw)(e.content)},null,8,Ke),Je])])))),128))])])}var Ge={name:"Categories-C",props:{list:{type:Array,default:null},category:{type:String,default:null}}};const Xe=(0,Y.Z)(Ge,[["render",Qe],["__scopeId","data-v-7b4c5d82"]]);var et=Xe;const tt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";var at=tt,st={name:"Menu-V",data(){return{menu:[],categories:[],placeHolderSrc:at}},components:{categories:et},mounted(){this.getMenu(),this.getCategories()},methods:{async getMenu(){this.menu=await qe.get(),this.menu.sort(((e,t)=>e.priority-t.priority))},async getCategories(){this.categories=await qe.getCategories(),this.categories.sort(((e,t)=>e.priority-t.priority))}}};const nt=(0,Y.Z)(st,[["render",Te],["__scopeId","data-v-2e9e4ce2"]]);var ot=nt;const lt=e=>((0,n.dD)("data-v-624094cc"),e=e(),(0,n.Cn)(),e),ct={class:"container"},rt={class:"col-10 col-lg-7 mx-auto justify-content-center mt-4 mb-2"},it={class:"d-flex"},dt={class:"col-auto text-center pt-1",id:"hidden"},ut=lt((()=>(0,n._)("i",{class:"fa-solid fa-arrow-left"},null,-1))),mt=[ut],pt={class:"col-auto mx-auto text-center"},ft=["textContent"],vt={class:"col-auto text-center pt-1"},bt=lt((()=>(0,n._)("i",{class:"fa-solid fa-arrow-left"},null,-1))),gt=[bt],ht={class:"row justify-content-center mb-4"},_t={class:"col-10 col-lg-7 mb-4"},wt=["srcset","src"],yt=lt((()=>(0,n._)("hr",{class:"col-7 col-md-9 col-lg-9 col-xl-10 border border-success border-2 ms-4 me-4"},null,-1))),xt={class:"row justify-content-evenly ms-5 me-5"},Ct={class:"text-center"},kt=["textContent"],St=["textContent"],At=["textContent"],Dt=lt((()=>(0,n._)("p",{class:"fs-6 mt-4"},"..............................................",-1)));function jt(e,t,a,s,o,l){return(0,n.wg)(),(0,n.iD)("div",ct,[(0,n._)("div",rt,[(0,n._)("div",it,[(0,n._)("div",dt,[(0,n._)("button",{class:"btn btn-outline-secondary fw-bold pt-0 pb-0 ms-2",type:"button",onClick:t[0]||(t[0]=t=>e.$router.push("/menu"))},mt)]),(0,n._)("div",pt,[(0,n._)("span",{textContent:(0,c.zw)(e.$route.params.item),class:"fs-3 text-uppercase fw-bold text-danger"},null,8,ft)]),(0,n._)("div",vt,[(0,n._)("button",{class:"btn btn-outline-secondary fw-bold pt-0 pb-0 me-2",type:"button",onClick:t[1]||(t[1]=t=>e.$router.push("/menu"))},gt)])])]),(0,n._)("div",ht,[(0,n._)("div",_t,[(0,n._)("img",{srcset:`/heros/${this.$route.params.item}.jpeg`,src:o.placeHolderSrc,class:"img-fluid rounded-3",width:"1080",height:"1080"},null,8,wt)]),yt]),(0,n._)("table",xt,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.items,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e.name,class:"col-lg-4 col-md-6 mb-2"},[(0,n._)("div",Ct,[(0,n._)("span",{class:"fs-6 m-1 fw-bold text-success",textContent:(0,c.zw)(e.name)},null,8,kt),(0,n._)("span",{class:"fs-6 m-1",textContent:(0,c.zw)(" ($"+e.price+")")},null,8,St),(0,n._)("p",{class:"fs-6 m-1",textContent:(0,c.zw)(e.content)},null,8,At),Dt])])))),128))])])}var Nt={name:"Items-V",data(){return{items:[],placeHolderSrc:at}},async mounted(){this.items=await qe.getItemsByCategory(this.$route.params.item)},watch:{async $route(e){"/menu"!==e.path&&(this.items=await qe.getItemsByCategory(e.params.item))}}};const It=(0,Y.Z)(Nt,[["render",jt],["__scopeId","data-v-624094cc"]]);var Mt=It;const Ht={class:"container mb-5 pb-5 pt-3"},Ot=(0,n.uE)('<div class="row text-center"><p class="text-uppercase fs-3 fw-bold">Catering Info</p></div><div class="row d-flex flex-column align-items-center text-center"><p class="col-12 col-md-8 col-lg-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam omnis ipsa iusto consectetur deleniti quasi voluptatem ratione qui id cum, molestiae dicta accusantium voluptate nam harum quae pariatur provident culpa? </p><p class="col-12 col-md-8 col-lg-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam omnis ipsa iusto consectetur deleniti quasi voluptatem ratione qui id cum, molestiae dicta accusantium voluptate nam harum quae pariatur provident culpa? </p></div>',2),$t={class:"row d-flex justify-content-center text-start mb-2"},Pt={class:"col-6 col-md-4 col-lg-3"},Vt=(0,n._)("label",{for:"firstName",class:"form-label"},"First Name",-1),Et={class:"col-6 col-md-4 col-lg-3"},Tt=(0,n._)("label",{for:"lastName",class:"form-label"},"Last Name",-1),Lt={class:"row d-flex justify-content-center text-start mb-2"},qt={class:"col-7 col-md-5 col-lg-4"},Ut=(0,n._)("label",{for:"email",class:"form-label"},"Email",-1),Yt={class:"col-5 col-md-3 col-lg-2"},zt=(0,n._)("label",{for:"phone",class:"form-label"},"Phone #",-1),Ft={class:"row d-flex justify-content-center text-start mb-2"},Rt={class:"col-12 col-md-8 col-lg-6"},Zt=(0,n._)("label",{for:"description",class:"form-label"},"Brief description",-1),Bt={class:"row d-flex justify-content-center text-start mb-2"},Wt={class:"col-6 col-md-3 col-lg-2"},Kt=(0,n._)("label",{for:"type",class:"form-label"},"Event Type",-1),Jt=(0,n._)("option",{disabled:"",value:""},"Please Select",-1),Qt=(0,n._)("option",null,"Party",-1),Gt=(0,n._)("option",null,"School",-1),Xt=(0,n._)("option",null,"Soccer",-1),ea=(0,n._)("option",null,"Other",-1),ta=[Jt,Qt,Gt,Xt,ea],aa={class:"col-6 col-md-3 col-lg-2"},sa=(0,n._)("label",{for:"date",class:"form-label"},"Date",-1),na=["value"],oa=(0,n._)("div",{class:"row justify-content-center mt-4"},[(0,n._)("button",{type:"submit",class:"col-4 col-md-2 col-lg-2 btn btn-outline-success"}," Submit ")],-1);function la(e,t,a,o,l,c){return(0,n.wg)(),(0,n.iD)("div",Ht,[Ot,(0,n._)("form",{onSubmit:t[7]||(t[7]=(...e)=>c.sendgridSave&&c.sendgridSave(...e))},[(0,n._)("div",$t,[(0,n._)("div",Pt,[Vt,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>l.firstName=e),class:"form-control",id:"firstName",required:""},null,512),[[s.nr,l.firstName]])]),(0,n._)("div",Et,[Tt,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>l.lastName=e),class:"form-control",id:"lastName",required:""},null,512),[[s.nr,l.lastName]])])]),(0,n._)("div",Lt,[(0,n._)("div",qt,[Ut,(0,n.wy)((0,n._)("input",{type:"email","onUpdate:modelValue":t[2]||(t[2]=e=>l.email=e),class:"form-control",id:"email",required:""},null,512),[[s.nr,l.email]])]),(0,n._)("div",Yt,[zt,(0,n.wy)((0,n._)("input",{type:"tel","onUpdate:modelValue":t[3]||(t[3]=e=>l.phone=e),class:"form-control",id:"phone",required:""},null,512),[[s.nr,l.phone]])])]),(0,n._)("div",Ft,[(0,n._)("div",Rt,[Zt,(0,n.wy)((0,n._)("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":t[4]||(t[4]=e=>l.description=e),placeholder:"Number of people? Expectation? etc...",required:""},null,512),[[s.nr,l.description]])])]),(0,n._)("div",Bt,[(0,n._)("div",Wt,[Kt,(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":t[5]||(t[5]=e=>l.eventType=e),class:"form-select",id:"type",required:""},ta,512),[[s.bM,l.eventType]])]),(0,n._)("div",aa,[sa,(0,n._)("input",{type:"date",value:(new Date).toISOString().substr(0,10),class:"form-control",id:"date",onInput:t[6]||(t[6]=e=>c.HandleDate(e.target.value)),required:""},null,40,na)])]),oa],32)])}class ca{static async save(e){try{await L().post("/sendgrid/save",e)}catch(t){alert(t)}}}var ra=ca,ia={name:"Catering-V",data(){return{firstName:"",lastName:"",email:"",phone:"",description:"",eventType:"",date:""}},methods:{async sendgridSave(){const e={first_name:this.firstName,last_name:this.lastName,email:this.email,phone:this.phone,description:this.description,event_type:this.eventType,date:this.date};await ra.save(e),window.location.reload()},HandleDate(e){this.date=e}}};const da=(0,Y.Z)(ia,[["render",la]]);var ua=da;const ma={class:"container"},pa=(0,n.uE)('<div class="row justify-content-center mt-3" data-v-1c3e4a42><h5 class="text-center fw-bold" data-v-1c3e4a42>SORRY, Page Not Found!</h5><p class="text-muted text-center" data-v-1c3e4a42> If you typed the URL directly, please make sure the spelling is correct. </p><div class="text-center" data-v-1c3e4a42><span data-v-1c3e4a42><a href="#" data-v-1c3e4a42><span class="fw-bold" data-v-1c3e4a42> Back To Homepage </span></a></span><span data-v-1c3e4a42><i class="fa-solid fa-arrow-left fa-beat ms-1" data-v-1c3e4a42></i></span></div></div>',1),fa=[pa];function va(e,t,a,s,o,l){return(0,n.wg)(),(0,n.iD)("div",ma,fa)}var ba={name:"PageNotFound-V"};const ga=(0,Y.Z)(ba,[["render",va],["__scopeId","data-v-1c3e4a42"]]);var ha=ga;const _a=[{path:"/",name:"Home",component:Ne},{path:"/menu",name:"Menu",component:ot},{path:"/menu/items/:item",name:"Items",component:Mt},{path:"/catering",name:"Catering",component:ua},{path:"/:pathMatch(.*)*",name:"PageNotFound",component:ha},{path:"/items/undefined",name:"Undefined",component:ha}],wa=(0,ae.p7)({history:(0,ae.r5)(),routes:_a});var ya=wa;a(806);(0,s.ri)(te).use(ya).mount("#app")}},t={};function a(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,s,n,o){if(!s){var l=1/0;for(d=0;d<e.length;d++){s=e[d][0],n=e[d][1],o=e[d][2];for(var c=!0,r=0;r<s.length;r++)(!1&o||l>=o)&&Object.keys(a.O).every((function(e){return a.O[e](s[r])}))?s.splice(r--,1):(c=!1,o<l&&(l=o));if(c){e.splice(d--,1);var i=n();void 0!==i&&(t=i)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[s,n,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,o,l=s[0],c=s[1],r=s[2],i=0;if(l.some((function(t){return 0!==e[t]}))){for(n in c)a.o(c,n)&&(a.m[n]=c[n]);if(r)var d=r(a)}for(t&&t(s);i<l.length;i++)o=l[i],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},s=self["webpackChunkel_andariego_menu"]=self["webpackChunkel_andariego_menu"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[772,99,698,814,564],(function(){return a(9783)}));s=a.O(s)})();
//# sourceMappingURL=app.3a3340ee.js.map