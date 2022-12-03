(function(){"use strict";var e={8782:function(e,t,a){var s=a(9242),n=a(3396);const o={id:"main"};function l(e,t,a,s,l,r){const c=(0,n.up)("Nav"),i=(0,n.up)("router-view"),d=(0,n.up)("Footer");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(c),(0,n._)("div",o,[(0,n.Wm)(i)]),(0,n.Wm)(d)],64)}var r=a(7139);const c=e=>((0,n.dD)("data-v-49758d81"),e=e(),(0,n.Cn)(),e),i={class:"navbar bg-light p-0"},d={class:"container-fluid"},u=c((()=>(0,n._)("img",{src:"/logo/El-Andariego-Logo.jpeg",class:"border rounded-circle",alt:"Logo",width:"40",height:"40"},null,-1))),m=[u],f=c((()=>(0,n._)("button",{id:"navBurger",class:"btn fa-bounce border border-0",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-controls":"offcanvasNavbar"},[(0,n._)("i",{class:"fa-solid fa-bars fa-lg"})],-1))),p={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel"},v=c((()=>(0,n._)("div",{class:"offcanvas-header bg-light pt-1 pb-1"},[(0,n._)("img",{src:"/logo/El-Andariego-Logo.jpeg",class:"offcanvas-title border rounded-circle",alt:"Logo",width:"40",height:"40"}),(0,n._)("button",{class:"btn border border-0",type:"button","data-bs-dismiss":"offcanvas","aria-label":"Close"},[(0,n._)("i",{class:"fa-solid fa-xmark fa-lg"})])],-1))),g={class:"offcanvas-body pt-1 pe-0 ps-0 ms-0 me-0"},b={class:"navbar-nav justify-content-end flex-grow-1 pe-3"},h={class:"nav-item mt-1 mb-1 ms-3 fw-bold"},_=c((()=>(0,n._)("hr",{class:"p-0 m-0"},null,-1))),w={class:"nav-item mt-1 mb-1 ms-3 fw-bold"},y=c((()=>(0,n._)("hr",{class:"p-0 m-0"},null,-1))),x={class:"nav-item mt-1 mb-1 ms-3 fw-bold"},C=c((()=>(0,n._)("hr",{class:"p-0 m-0"},null,-1))),k={class:"nav-item dropdown mt-1 mb-1 ms-3 fw-bold"},A=c((()=>(0,n._)("a",{class:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Contact ",-1))),S={class:"dropdown-menu text-center"},D=c((()=>(0,n._)("li",null,[(0,n._)("a",{class:"dropdown-item",href:"https://www.facebook.com/profile.php?id=100082710796984",target:"_blank"},"Facebook")],-1))),j=c((()=>(0,n._)("li",null,[(0,n._)("a",{class:"dropdown-item",href:"https://instagram.com/el_andariegotruck",target:"_blank"},"Instagram")],-1))),N=c((()=>(0,n._)("li",null,[(0,n._)("a",{class:"dropdown-item",href:"https://g.page/r/CY53oo_JlDb8EAI/review",target:"_blank"},"Leave a review!")],-1))),I=c((()=>(0,n._)("li",null,[(0,n._)("hr",{class:"dropdown-divider"})],-1))),M=c((()=>(0,n._)("hr",{class:"p-0 m-0 mb-2"},null,-1))),H={class:"d-flex mt-1 ms-3 me-3",role:"search"},O={key:0,class:"mt-3"},$=["onClick"],E=["textContent"],T=["textContent"];function V(e,t,a,o,l,c){return(0,n.wg)(),(0,n.iD)("nav",i,[(0,n._)("div",d,[(0,n._)("a",{class:"navbar-brand",href:"#",onClick:t[0]||(t[0]=(0,s.iM)((t=>e.$router.push("/")),["prevent"]))},m),f,(0,n._)("div",p,[v,(0,n._)("div",g,[(0,n._)("ul",b,[(0,n._)("li",h,[(0,n._)("a",{class:"nav-link",href:"#",onClick:t[1]||(t[1]=(0,s.iM)((t=>e.$router.push("/")),["prevent"])),"data-bs-dismiss":"offcanvas","aria-label":"Close"},"Home")]),_,(0,n._)("li",w,[(0,n._)("a",{class:"nav-link",href:"#",onClick:t[2]||(t[2]=(0,s.iM)((t=>e.$router.push("/menu")),["prevent"])),"data-bs-dismiss":"offcanvas","aria-label":"Close"},"Menu")]),y,(0,n._)("li",x,[(0,n._)("a",{class:"nav-link",href:"#",onClick:t[3]||(t[3]=(0,s.iM)((t=>e.$router.push("/catering")),["prevent"])),"data-bs-dismiss":"offcanvas","aria-label":"Close"}," Catering ")]),C,(0,n._)("li",k,[A,(0,n._)("ul",S,[D,j,N,I,(0,n._)("li",null,[(0,n._)("button",{class:"dropdown-item",onClick:t[4]||(t[4]=(...e)=>c.CopyPhone&&c.CopyPhone(...e))},"949-806-0123")])])]),M]),(0,n._)("form",H,[(0,n.wy)((0,n._)("input",{class:"form-control me-2",type:"text",placeholder:"Search","aria-label":"Search","onUpdate:modelValue":t[5]||(t[5]=e=>l.itemSearch=e)},null,512),[[s.nr,l.itemSearch]])]),l.itemSearch?((0,n.wg)(),(0,n.iD)("div",O,[(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.searchResult,(t=>((0,n.wg)(),(0,n.iD)("li",{key:t,class:"pt-2 ps-3 border"},[(0,n._)("a",{href:"#",onClick:(0,s.iM)((a=>e.$router.push(`/menu/items/${t.category}`)),["prevent"]),"data-bs-dismiss":"offcanvas","aria-label":"Close"},[(0,n._)("h6",{textContent:(0,r.zw)(t.name)},null,8,E),(0,n._)("p",{id:"searchPrice",class:"mb-1",textContent:(0,r.zw)("$"+t.price)},null,8,T)],8,$)])))),128))])])):(0,n.kq)("",!0)])])])])}var L=a(6265),P=a.n(L);async function U(e){try{const t=await P().get(`/api/search/${e}`);return t.data}catch(t){}}var Y={name:"Nav-V",data(){return{itemSearch:"",searchResult:[]}},watch:{async itemSearch(){if(this.searchResult=[],this.itemSearch){const e=await U(this.itemSearch);this.searchResult=e}}},methods:{async CopyPhone(){try{await navigator.clipboard.writeText("949-806-0123")}catch(e){alert("Could not copy")}}}},q=a(89);const R=(0,q.Z)(Y,[["render",V],["__scopeId","data-v-49758d81"]]);var z=R;const F=e=>((0,n.dD)("data-v-95b09e2c"),e=e(),(0,n.Cn)(),e),Z={id:"footer",class:"row mt-3 bg-light bg-gradient align-items-center"},B=F((()=>(0,n._)("p",{class:"text-center mt-3"},"© 2022 El Andariego",-1))),W=[B];function K(e,t,a,s,o,l){return(0,n.wg)(),(0,n.iD)("footer",Z,W)}var J={name:"Footer-V"};const Q=(0,q.Z)(J,[["render",K],["__scopeId","data-v-95b09e2c"]]);var G=Q,X={name:"App",components:{Nav:z,Footer:G}};const ee=(0,q.Z)(X,[["render",l]]);var te=ee,ae=a(2483);const se={class:"container pt-5"},ne={class:"row d-grid"},oe=(0,n._)("header",{class:"col"},[(0,n._)("h1",{class:"text-center text-success fw-bold"},"El Andariego Truck")],-1),le={class:"col mb-2 text-center"},re=(0,n._)("p",{class:"m-0"},"Authentic Mexican Food",-1),ce=["textContent"],ie={class:"col-lg-9 col-xl-7 my-3 mx-auto"},de={class:"card text-center"},ue=(0,n._)("div",{class:"card-header fw-bold"},"NEW SATURDAY LOCATION",-1),me=(0,n._)("div",{class:"card-body"},[(0,n._)("h5",{class:"card-title"},"Village San Juan Capistrano"),(0,n._)("p",{class:"card-text"},[(0,n.Uk)(" El Andariego is coming to Village San Juan Capistrano, we will be stationed at: "),(0,n._)("br"),(0,n.Uk)(" 26295 Marina Rd, San Juan Capistrano, CA 92675 ")])],-1),fe={class:"my-3"},pe={id:"Home-Slider",class:"col-12 col-lg-10 col-xl-8 carousel carousel-dark slide mx-auto d-block mb-5","data-bs-ride":"carousel"},ve={class:"carousel-inner"},ge=(0,n._)("div",{class:"carousel-item active"},[(0,n._)("img",{src:"/home/slider/Logo.jpeg",class:"img-fluid",alt:"..."})],-1),be=["src"],he=(0,n._)("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#Home-Slider","data-bs-slide":"prev"},[(0,n._)("span",{class:"carousel-control-prev-icon","aria-hidden":"true"})],-1),_e=(0,n._)("button",{class:"carousel-control-next",type:"button","data-bs-target":"#Home-Slider","data-bs-slide":"next"},[(0,n._)("span",{class:"carousel-control-next-icon","aria-hidden":"true"})],-1),we=(0,n.uE)('<div class="col"><hr class="col-1 mx-auto d-block m-2 border border-dark border-1"><p class="text-center text-muted fs-6">Find El Andariego</p></div><div class="col-12 col-lg-10 col-xl-8 mx-auto d-block"><img src="/home/Location.png" class="img-fluid" alt="La Zanja San Juan Capistrano, CA 92675 US"></div>',2);function ye(e,t,a,s,o,l){const c=(0,n.up)("Info");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",se,[(0,n._)("div",ne,[oe,(0,n._)("div",le,[re,(0,n._)("p",{class:"m-0",textContent:(0,r.zw)(o.schedule)},null,8,ce)]),(0,n._)("div",ie,[(0,n._)("div",de,[ue,me,(0,n._)("div",fe,[(0,n._)("button",{class:"col-3 btn btn-success mx-auto d-block",onClick:t[0]||(t[0]=t=>e.$router.push("/menu"))}," View Menu ")])])]),(0,n._)("div",pe,[(0,n._)("div",ve,[ge,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.sliderImages,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:t,class:"carousel-item"},[(0,n._)("img",{src:e,class:"img-fluid",alt:"..."},null,8,be)])))),128))]),he,_e]),we])]),(0,n.Wm)(c)],64)}const xe={class:"container-fluid ms-1 ms-sm-2 ms-md-3 ms-lg-3 ms-xl-3"},Ce=(0,n.uE)('<div class="col mt-5 text-start" data-v-22675f64><label for="contact-us" class="col-12 mb-1 fw-bold" data-v-22675f64>Contact Us</label><p class="m-0 ms-1" data-v-22675f64><i class="fa-solid fa-truck fa-lg me-1" data-v-22675f64></i> 31345 Los Rios St, </p><p class="mb-1 ms-1" data-v-22675f64>San Juan Capistrano, CA 92675</p><p class="ms-1" data-v-22675f64><i class="fa-solid fa-phone fa-shake fa-lg me-1" data-v-22675f64></i> (949) 806 - 0123 </p></div><div class="col mt-2 text-start" data-v-22675f64><label for="hours" class="mb-1 fw-bold" data-v-22675f64>Business Hours</label><table class="table table-sm table-borderless mb-1" id="hours" data-v-22675f64><tr data-v-22675f64><td data-v-22675f64>Mon - Tue - Sat: Closed</td></tr><tr data-v-22675f64><td data-v-22675f64>Wed - Thu - Fri - Sun: 4:00 - 11:30 PM</td></tr></table></div><div class="d-flex justify-content-start" data-v-22675f64><a href="https://www.facebook.com/profile.php?id=100082710796984" class="me-2" target="_blank" data-v-22675f64><i class="fa-brands fa-facebook fa-lg" data-v-22675f64></i></a><a href="https://instagram.com/el_andariegotruck" class="me-2" target="_blank" data-v-22675f64><i class="fa-brands fa-instagram fa-lg" data-v-22675f64></i></a><a href="https://g.page/r/CY53oo_JlDb8EAI/review" class="me-2" target="_blank" data-v-22675f64><i class="fa-brands fa-google fa-md" data-v-22675f64></i></a></div>',3),ke=[Ce];function Ae(e,t,a,s,o,l){return(0,n.wg)(),(0,n.iD)("div",xe,ke)}var Se={name:"Info-V"};const De=(0,q.Z)(Se,[["render",Ae],["__scopeId","data-v-22675f64"]]);var je=De;const Ne={Sunday:0,Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6};var Ie=Ne,Me={name:"Home-V",data(){return{sliderImages:["/home/slider/Tacos.jpeg","/home/slider/Cubana.png"],schedule:"Opening at 4:30 PM"}},components:{Info:je},watch:{schedule:{immediate:!0,handler(){this.setSchedule()}}},methods:{setSchedule(){const e=(new Date).getDay();switch(e){case Ie.Monday:case Ie.Tuesday:return void(this.schedule="Closed, Opening Wednesday at 4:30 PM");default:break}this.isWorkSchedule()&&(this.schedule="Open today until 11:30 PM")},isWorkSchedule(){const e=(new Date).getHours()+(new Date).getMinutes(),t=46,a=53;return e>=t&&e<=a}}};const He=(0,q.Z)(Me,[["render",ye]]);var Oe=He;const $e=e=>((0,n.dD)("data-v-1df1475f"),e=e(),(0,n.Cn)(),e),Ee={class:"container"},Te={class:"row mt-4 mb-5"},Ve=$e((()=>(0,n._)("header",null,[(0,n._)("h1",{id:"title",class:"text-center text-success text-uppercase"},"Menu")],-1))),Le=$e((()=>(0,n._)("div",{class:"text-center"},[(0,n._)("p",{class:"mt-3 mb-0 text-center fw-bold text-uppercase"},"Categories"),(0,n._)("i",{class:"fa-solid fa-angle-down"})],-1))),Pe={class:"hidden-scroll col-8 col-lg-4 mt-1 mx-auto"},Ue=["onClick"],Ye=["textContent"];function qe(e,t,a,s,o,l){const c=(0,n.up)("categories");return(0,n.wg)(),(0,n.iD)("div",Ee,[(0,n._)("div",Te,[Ve,Le,(0,n._)("div",Pe,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.categories,(t=>((0,n.wg)(),(0,n.iD)("a",{key:t.name,class:"mx-1",onClick:a=>e.$router.push(`/menu/items/${t.name}`)},[(0,n._)("span",{textContent:(0,r.zw)(t.name)},null,8,Ye)],8,Ue)))),128))])]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.menu,(e=>((0,n.wg)(),(0,n.j4)(c,{key:e.category,list:e.list,category:e.category},null,8,["list","category"])))),128))])}class Re{static async get(){try{const e=await P().get("/api/menu");return e.data}catch(e){}}static async getCategories(){try{const e=await P().get("/api/menu/categories");return e.data}catch(e){}}static async getItemsByCategory(e){try{const t=await P().get(`/api/menu/items/${e}`);return t.data}catch(t){}}}var ze=Re;const Fe=e=>((0,n.dD)("data-v-0e74b4be"),e=e(),(0,n.Cn)(),e),Ze={class:"mt-2"},Be={class:"mt-2 mb-5"},We=["textContent"],Ke={class:"row justify-content-evenly ms-5 me-5"},Je={class:"text-center"},Qe=["textContent"],Ge=["textContent"],Xe=["textContent"],et=Fe((()=>(0,n._)("p",{class:"fs-6 mt-4"},"..............................................",-1)));function tt(e,t,a,s,o,l){return(0,n.wg)(),(0,n.iD)("div",Ze,[(0,n._)("div",Be,[(0,n._)("p",{id:"subtitle",textContent:(0,r.zw)(a.category),class:"text-center text-danger"},null,8,We)]),(0,n._)("table",Ke,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.list,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e.name,class:"col-lg-4 col-md-6 mb-2"},[(0,n._)("div",Je,[(0,n._)("span",{class:"fs-6 m-1 fw-bold text-success",textContent:(0,r.zw)(e.name)},null,8,Qe),(0,n._)("span",{class:"fs-6 m-1",textContent:(0,r.zw)(" ($"+e.price+")")},null,8,Ge),(0,n._)("p",{class:"fs-6 m-1",textContent:(0,r.zw)(e.content)},null,8,Xe),et])])))),128))])])}var at={name:"Categories-C",props:{list:{type:Array,default:null},category:{type:String,default:null}}};const st=(0,q.Z)(at,[["render",tt],["__scopeId","data-v-0e74b4be"]]);var nt=st;const ot="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";var lt=ot,rt={name:"Menu-V",data(){return{menu:[],categories:[],placeHolderSrc:lt}},components:{categories:nt},mounted(){this.getMenu(),this.getCategories()},methods:{async getMenu(){this.menu=await ze.get(),this.menu.sort(((e,t)=>e.priority-t.priority))},async getCategories(){this.categories=await ze.getCategories(),this.categories.sort(((e,t)=>e.priority-t.priority))}}};const ct=(0,q.Z)(rt,[["render",qe],["__scopeId","data-v-1df1475f"]]);var it=ct;const dt=e=>((0,n.dD)("data-v-78c31e1e"),e=e(),(0,n.Cn)(),e),ut={class:"container"},mt={class:"col-10 col-lg-7 mx-auto justify-content-center mt-4 mb-2"},ft={class:"d-flex"},pt={class:"col-auto text-center pt-1",id:"hidden"},vt=dt((()=>(0,n._)("i",{class:"fa-solid fa-arrow-left"},null,-1))),gt=[vt],bt={class:"col-auto mx-auto text-center"},ht=["textContent"],_t={class:"col-auto text-center pt-1"},wt=dt((()=>(0,n._)("i",{class:"fa-solid fa-arrow-left"},null,-1))),yt=[wt],xt={class:"row justify-content-center mb-4"},Ct={class:"col-10 col-lg-7 mb-4"},kt=["srcset","src"],At=dt((()=>(0,n._)("hr",{class:"col-7 col-md-9 col-lg-9 col-xl-10 border border-success border-2 ms-4 me-4"},null,-1))),St={class:"row justify-content-evenly ms-5 me-5"},Dt={class:"text-center"},jt=["textContent"],Nt=["textContent"],It=["textContent"],Mt=dt((()=>(0,n._)("p",{class:"fs-6 mt-4"},"..............................................",-1)));function Ht(e,t,a,s,o,l){return(0,n.wg)(),(0,n.iD)("div",ut,[(0,n._)("div",mt,[(0,n._)("div",ft,[(0,n._)("div",pt,[(0,n._)("button",{class:"btn btn-outline-secondary fw-bold pt-0 pb-0 ms-2",type:"button",onClick:t[0]||(t[0]=t=>e.$router.push("/menu"))},gt)]),(0,n._)("div",bt,[(0,n._)("span",{textContent:(0,r.zw)(e.$route.params.item),class:"fs-3 text-uppercase fw-bold text-danger"},null,8,ht)]),(0,n._)("div",_t,[(0,n._)("button",{class:"btn btn-outline-secondary fw-bold pt-0 pb-0 me-2",type:"button",onClick:t[1]||(t[1]=t=>e.$router.push("/menu"))},yt)])])]),(0,n._)("div",xt,[(0,n._)("div",Ct,[(0,n._)("img",{srcset:`/heros/${this.$route.params.item}.jpeg`,src:o.placeHolderSrc,class:"img-fluid rounded-3",width:"1080",height:"1080"},null,8,kt)]),At]),(0,n._)("table",St,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.items,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e.name,class:"col-lg-4 col-md-6 mb-2"},[(0,n._)("div",Dt,[(0,n._)("span",{class:"fs-6 m-1 fw-bold text-success",textContent:(0,r.zw)(e.name)},null,8,jt),(0,n._)("span",{class:"fs-6 m-1",textContent:(0,r.zw)(" ($"+e.price+")")},null,8,Nt),(0,n._)("p",{class:"fs-6 m-1",textContent:(0,r.zw)(e.content)},null,8,It),Mt])])))),128))])])}var Ot={name:"Items-V",data(){return{items:[],placeHolderSrc:lt}},async mounted(){this.items=await ze.getItemsByCategory(this.$route.params.item)},watch:{async $route(e){"/menu"!==e.path&&(this.items=await ze.getItemsByCategory(e.params.item))}}};const $t=(0,q.Z)(Ot,[["render",Ht],["__scopeId","data-v-78c31e1e"]]);var Et=$t;const Tt={class:"container mb-5 pb-5 pt-3"},Vt=(0,n.uE)('<div class="row text-center"><p class="text-uppercase fs-3 fw-bold">Catering Info</p></div><div class="row d-flex flex-column align-items-center text-center"><p class="col-12 col-md-8 col-lg-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam omnis ipsa iusto consectetur deleniti quasi voluptatem ratione qui id cum, molestiae dicta accusantium voluptate nam harum quae pariatur provident culpa? </p><p class="col-12 col-md-8 col-lg-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam omnis ipsa iusto consectetur deleniti quasi voluptatem ratione qui id cum, molestiae dicta accusantium voluptate nam harum quae pariatur provident culpa? </p></div>',2),Lt={class:"row d-flex justify-content-center text-start mb-2"},Pt={class:"col-6 col-md-4 col-lg-3"},Ut=(0,n._)("label",{for:"firstName",class:"form-label"},"First Name",-1),Yt={class:"col-6 col-md-4 col-lg-3"},qt=(0,n._)("label",{for:"lastName",class:"form-label"},"Last Name",-1),Rt={class:"row d-flex justify-content-center text-start mb-2"},zt={class:"col-7 col-md-5 col-lg-4"},Ft=(0,n._)("label",{for:"email",class:"form-label"},"Email",-1),Zt={class:"col-5 col-md-3 col-lg-2"},Bt=(0,n._)("label",{for:"phone",class:"form-label"},"Phone #",-1),Wt={class:"row d-flex justify-content-center text-start mb-2"},Kt={class:"col-12 col-md-8 col-lg-6"},Jt=(0,n._)("label",{for:"description",class:"form-label"},"Brief description",-1),Qt={class:"row d-flex justify-content-center text-start mb-2"},Gt={class:"col-6 col-md-3 col-lg-2"},Xt=(0,n._)("label",{for:"type",class:"form-label"},"Event Type",-1),ea=(0,n._)("option",{disabled:"",value:""},"Please Select",-1),ta=(0,n._)("option",null,"Party",-1),aa=(0,n._)("option",null,"School",-1),sa=(0,n._)("option",null,"Soccer",-1),na=(0,n._)("option",null,"Other",-1),oa=[ea,ta,aa,sa,na],la={class:"col-6 col-md-3 col-lg-2"},ra=(0,n._)("label",{for:"date",class:"form-label"},"Date",-1),ca=["value"],ia=(0,n._)("div",{class:"row justify-content-center mt-4"},[(0,n._)("button",{type:"submit",class:"col-4 col-md-2 col-lg-2 btn btn-outline-success"}," Submit ")],-1);function da(e,t,a,o,l,r){return(0,n.wg)(),(0,n.iD)("div",Tt,[Vt,(0,n._)("form",{onSubmit:t[7]||(t[7]=(...e)=>r.sendgridSave&&r.sendgridSave(...e))},[(0,n._)("div",Lt,[(0,n._)("div",Pt,[Ut,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>l.firstName=e),class:"form-control",id:"firstName",required:""},null,512),[[s.nr,l.firstName]])]),(0,n._)("div",Yt,[qt,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>l.lastName=e),class:"form-control",id:"lastName",required:""},null,512),[[s.nr,l.lastName]])])]),(0,n._)("div",Rt,[(0,n._)("div",zt,[Ft,(0,n.wy)((0,n._)("input",{type:"email","onUpdate:modelValue":t[2]||(t[2]=e=>l.email=e),class:"form-control",id:"email",required:""},null,512),[[s.nr,l.email]])]),(0,n._)("div",Zt,[Bt,(0,n.wy)((0,n._)("input",{type:"tel","onUpdate:modelValue":t[3]||(t[3]=e=>l.phone=e),class:"form-control",id:"phone",required:""},null,512),[[s.nr,l.phone]])])]),(0,n._)("div",Wt,[(0,n._)("div",Kt,[Jt,(0,n.wy)((0,n._)("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":t[4]||(t[4]=e=>l.description=e),placeholder:"Number of people? Expectation? etc...",required:""},null,512),[[s.nr,l.description]])])]),(0,n._)("div",Qt,[(0,n._)("div",Gt,[Xt,(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":t[5]||(t[5]=e=>l.eventType=e),class:"form-select",id:"type",required:""},oa,512),[[s.bM,l.eventType]])]),(0,n._)("div",la,[ra,(0,n._)("input",{type:"date",value:(new Date).toISOString().substr(0,10),class:"form-control",id:"date",onInput:t[6]||(t[6]=e=>r.HandleDate(e.target.value)),required:""},null,40,ca)])]),ia],32)])}class ua{static async save(e){try{await P().post("/sendgrid/save",e)}catch(t){}}}var ma=ua,fa={name:"Catering-V",data(){return{firstName:"",lastName:"",email:"",phone:"",description:"",eventType:"",date:""}},methods:{async sendgridSave(){const e={first_name:this.firstName,last_name:this.lastName,email:this.email,phone:this.phone,description:this.description,event_type:this.eventType,date:this.date};await ma.save(e),window.location.reload()},HandleDate(e){this.date=e}}};const pa=(0,q.Z)(fa,[["render",da]]);var va=pa;const ga={class:"container"},ba=(0,n.uE)('<div class="row justify-content-center mt-3" data-v-fefd44a0><h5 class="text-center fw-bold" data-v-fefd44a0>SORRY, Page Not Found!</h5><p class="text-muted text-center" data-v-fefd44a0> If you typed the URL directly, please make sure the spelling is correct. </p><div class="text-center" data-v-fefd44a0><span data-v-fefd44a0><a href="#" data-v-fefd44a0><span class="fw-bold" data-v-fefd44a0> Back To Homepage </span></a></span><span data-v-fefd44a0><i class="fa-solid fa-arrow-left fa-beat ms-1" data-v-fefd44a0></i></span></div></div>',1),ha=[ba];function _a(e,t,a,s,o,l){return(0,n.wg)(),(0,n.iD)("div",ga,ha)}var wa={name:"page-not-found"};const ya=(0,q.Z)(wa,[["render",_a],["__scopeId","data-v-fefd44a0"]]);var xa=ya;const Ca=[{path:"/",name:"Home",component:Oe},{path:"/menu",name:"Menu",component:it},{path:"/menu/items/:item",name:"Items",component:Et},{path:"/catering",name:"Catering",component:va},{path:"/:pathMatch(.*)*",name:"PageNotFound",component:xa},{path:"/items/undefined",name:"Undefined",component:xa}],ka=(0,ae.p7)({history:(0,ae.r5)(),routes:Ca});var Aa=ka;a(806);(0,s.ri)(te).use(Aa).mount("#app")}},t={};function a(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,s,n,o){if(!s){var l=1/0;for(d=0;d<e.length;d++){s=e[d][0],n=e[d][1],o=e[d][2];for(var r=!0,c=0;c<s.length;c++)(!1&o||l>=o)&&Object.keys(a.O).every((function(e){return a.O[e](s[c])}))?s.splice(c--,1):(r=!1,o<l&&(l=o));if(r){e.splice(d--,1);var i=n();void 0!==i&&(t=i)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[s,n,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,o,l=s[0],r=s[1],c=s[2],i=0;if(l.some((function(t){return 0!==e[t]}))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(c)var d=c(a)}for(t&&t(s);i<l.length;i++)o=l[i],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},s=self["webpackChunkel_andariego_menu"]=self["webpackChunkel_andariego_menu"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[772,99,698,814,564],(function(){return a(8782)}));s=a.O(s)})();
//# sourceMappingURL=app.a2e5bb3b.js.map