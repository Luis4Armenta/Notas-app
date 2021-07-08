(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{168:function(e,t,n){},169:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(32),r=n.n(c),i=n(29),s="[Auth] Login",o="[Auth] Logout",u="[UI] Set Error",l="[UI] Remove Error",d="[UI] Start Loading",j="[UI] Finish Loading",b="[NOTES] New note",p="[NOTES] Set active note",m="[NOTES] Load notes",h="[NOTES] Update note",O="[NOTES] Delete note",f="[Notes] LogoutCleaning",x=n(64),v=n(6),_={loading:!1,msgError:null},g=n(45),y={notes:[],active:null},N="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,w=Object(i.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return{uid:t.payload.uid,name:t.payload.displayName};case o:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(v.a)(Object(v.a)({},e),{},{msgError:t.payload});case l:return Object(v.a)(Object(v.a)({},e),{},{msgError:null});case d:return Object(v.a)(Object(v.a)({},e),{},{loading:!0});case j:return Object(v.a)(Object(v.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(v.a)(Object(v.a)({},e),{},{active:Object(v.a)({},t.payload)});case b:return Object(v.a)(Object(v.a)({},e),{},{notes:[t.payload].concat(Object(g.a)(e.notes))});case m:return Object(v.a)(Object(v.a)({},e),{},{notes:Object(g.a)(t.payload)});case h:return Object(v.a)(Object(v.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case O:return Object(v.a)(Object(v.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case f:return Object(v.a)(Object(v.a)({},e),{},{active:null,notes:[]});default:return e}}}),k=Object(i.d)(w,N(Object(i.a)(x.a))),S=n(8),C=n(20),E=n(23),I=n(21),A=n(10),L=n(9),D=n.n(L),P=n(15),T=n(22),U=n.n(T);n(170),n(85);E.a.initializeApp({apiKey:"AIzaSyADcRagFv3UXRH9CFDZnXjQjOejHSqSTO8",authDomain:"react-app-curso-26908.firebaseapp.com",projectId:"react-app-curso-26908",storageBucket:"react-app-curso-26908.appspot.com",messagingSenderId:"34199529605",appId:"1:34199529605:web:b4520daa23cab9fcca21ec"});var R=E.a.firestore(),W=new E.a.auth.GoogleAuthProvider,z=function(){var e=Object(P.a)(D.a.mark((function e(t){var n,a,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/laarm/upload",(n=new FormData).append("upload_preset","react-journal"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/laarm/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.next=17,a.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(P.a)(D.a.mark((function e(t){var n,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.collection("".concat(t,"/journal/notes")).get();case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(v.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(e,t){return{type:p,payload:Object(v.a)({id:e},t)}},q=function(e,t){return{type:b,payload:Object(v.a)({id:e},t)}},B=function(e){return{type:m,payload:e}},G=function(e){return function(){var t=Object(P.a)(D.a.mark((function t(n,a){var c,r;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,e.url||delete e.url,delete(r=Object(v.a)({},e)).id,t.next=6,R.doc("".concat(c,"/journal/notes/").concat(e.id)).update(r);case 6:n(J(e.id,r)),U.a.fire("Saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},J=function(e,t){return{type:h,payload:{id:e,note:Object(v.a)({id:e},t)}}},H=function(e){return{type:O,payload:e}},M=n(34),K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(C.a)(t,2),c=n[0],r=n[1],i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},s=function(e){var t=e.target;r(Object(v.a)(Object(v.a)({},c),{},Object(M.a)({},t.name,t.value)))};return[c,s,i]},Q=n(1),V=function(){var e=Object(S.b)(),t=Object(S.c)((function(e){return e.notes})).active;return Object(Q.jsxs)("div",{className:"notes__appbar",children:[Object(Q.jsx)("span",{children:"28 de agosto 2021"}),Object(Q.jsx)("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(P.a)(D.a.mark((function t(n,a){var c,r;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,U.a.fire({icon:"info",title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,onBeforeOpen:function(){U.a.showLoading()}}),t.next=4,z(e);case 4:r=t.sent,c.url=r,n(G(c)),r&&U.a.fire({icon:"success",title:"Image uploaded"});case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(Q.jsxs)("div",{children:[Object(Q.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Picture"}),Object(Q.jsx)("button",{className:"btn",onClick:function(){e(G(t))},children:"Save"})]})]})},Z=function(){var e=Object(S.b)(),t=Object(S.c)((function(e){return e.notes})).active,n=K(t),c=Object(C.a)(n,3),r=c[0],i=c[1],s=c[2],o=r.body,u=r.title,l=r.id,d=Object(a.useRef)(t.id);Object(a.useEffect)((function(){t.id!==d.current&&(s(t),d.current=t.id)}),[t,s]),Object(a.useEffect)((function(){e(X(r.id,Object(v.a)({},r)))}),[r,e]);return Object(Q.jsxs)("div",{className:"notes__main-content",children:[Object(Q.jsx)(V,{}),Object(Q.jsxs)("div",{className:"notes_content",children:[Object(Q.jsx)("input",{type:"text",name:"title",placeholder:"Some awesome title",className:"notes__title-input",autoComplete:"off",value:u,onChange:i}),Object(Q.jsx)("textarea",{placeholder:"What happened today",className:"notes__textarea",name:"body",value:o,onChange:i}),t.url&&Object(Q.jsx)("div",{className:"notes__image",children:Object(Q.jsx)("img",{src:t.url,alt:"imagen"})})]}),Object(Q.jsx)("button",{className:"btn btn-danger",style:{fontSize:"1.5em"},onClick:function(){e(function(e){return function(){var t=Object(P.a)(D.a.mark((function t(n,a){var c;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,t.next=3,R.doc("".concat(c,"/journal/notes/").concat(e)).delete();case 3:n(H(e));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(l))},children:"Delete"})]})},Y=function(){return Object(Q.jsxs)("div",{className:"nothing__main-content",children:[Object(Q.jsxs)("p",{children:["Select Something",Object(Q.jsx)("br",{}),"or create a entry!"]}),Object(Q.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},$=function(e){return{type:u,payload:e}},ee=function(){return{type:j}},te=function(e,t){return function(n){n({type:d}),E.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(ee()),n(ne(t.uid,t.displayName))})).catch((function(e){n(ee()),U.a.fire("Error",e.message,"error")}))}},ne=function(e,t){return{type:s,payload:{uid:e,displayName:t}}},ae=function(){return{type:o}},ce=n(42),re=n.n(ce),ie=n(88);re.a.extend(ie);var se=function(e){var t=e.id,n=e.date,a=e.title,c=e.body,r=e.url,i=re()(n),s=Object(S.b)();return Object(Q.jsxs)("div",{className:"journal__entry pointer animate__animated animate__backInRight animate__faster",onClick:function(){s(X(t,{date:n,title:a,body:c,url:r}))},children:[r&&Object(Q.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(r,")")}}),Object(Q.jsxs)("div",{className:"journal__entry-body",children:[Object(Q.jsx)("p",{className:"journal__entry-title",children:a}),Object(Q.jsx)("p",{className:"journal__entry-content",children:c})]}),Object(Q.jsxs)("div",{className:"journal__entry-date-box",children:[Object(Q.jsx)("span",{children:i.format("dddd")}),Object(Q.jsx)("h4",{children:i.format("Do")})]})]})},oe=function(){var e=Object(S.c)((function(e){return e.notes})).notes;return Object(Q.jsx)("div",{className:"journal__entries",children:e.map((function(e){return Object(Q.jsx)(se,Object(v.a)({},e),e.id)}))})},ue=function(){var e=Object(S.b)(),t=Object(S.c)((function(e){return e.auth})).name;return Object(Q.jsxs)("aside",{className:"journal__sidebar",children:[Object(Q.jsxs)("div",{className:"jorunal__sidebar-navbar",children:[Object(Q.jsxs)("h3",{className:"mt-5",children:[Object(Q.jsx)("i",{className:"fa fa-moon"}),Object(Q.jsxs)("span",{children:[" ",t]})]}),Object(Q.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(P.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.auth().signOut();case 2:t(ae()),t({type:f});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(Q.jsxs)("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(P.a)(D.a.mark((function e(t,n){var a,c,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.next=4,R.collection("".concat(a,"/journal/notes")).add(c);case 4:r=e.sent,t(X(r.id,c)),t(q(r.id,c));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(Q.jsx)("i",{className:"fa fa-calendar-plus fa-5x"}),Object(Q.jsx)("p",{className:"mt-5",children:"New entry"})]}),Object(Q.jsx)(oe,{})]})},le=function(){var e=Object(S.c)((function(e){return e.notes})).active;return Object(Q.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster",children:[Object(Q.jsx)(ue,{}),Object(Q.jsx)("main",{children:e?Object(Q.jsx)(Z,{}):Object(Q.jsx)(Y,{})})]})},de=function(){var e=Object(S.b)(),t=Object(S.c)((function(e){return e.ui})).loading,n=K({email:"example@email.com",password:"123456"}),a=Object(C.a)(n,2),c=a[0],r=a[1],i=c.email,s=c.password;return Object(Q.jsxs)("div",{children:[Object(Q.jsx)("h3",{className:"auth__title",children:"Login"}),Object(Q.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(te(i,s))},className:"animate__animated animate__fadeIn animate__faster",children:[Object(Q.jsx)("input",{type:"email",placeholder:"example@email.com",name:"email",autoComplete:"off",className:"auth__input",value:i,onChange:r}),Object(Q.jsx)("input",{type:"password",placeholder:"password",name:"password",className:"auth__input",value:s,onChange:r}),Object(Q.jsx)("button",{disabled:t,type:"submit",className:"btn btn-primary btn-block",children:"Login"}),Object(Q.jsxs)("div",{className:"auth__social-networks",children:[Object(Q.jsx)("p",{children:"Login With social networks"}),Object(Q.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){E.a.auth().signInWithPopup(W).then((function(t){var n=t.user;e(ne(n.uid,n.displayName))}))}))},children:[Object(Q.jsx)("div",{className:"google-icon-wrapper",children:Object(Q.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(Q.jsx)("p",{className:"btn-text",children:Object(Q.jsx)("b",{children:"Sign in with google"})})]})]}),Object(Q.jsx)(I.b,{to:"/auth/register",className:"link",children:"Create new account"})]})]})},je=n(65),be=n.n(je),pe=function(){var e=Object(S.b)(),t=Object(S.c)((function(e){return e.ui})).msgError,n=K({name:"Jos\xe9 Mar\xeda",email:"example@email.com",password:"123456",password2:"123456"}),a=Object(C.a)(n,2),c=a[0],r=a[1],i=c.name,s=c.email,o=c.password,u=c.password2,d=function(){return 0===i.trim().length?(e($("Name is required")),!1):be.a.isEmail(s)?!o===u||o.length<5?(e($("Password should be at least 6 characters and match eatch other")),!1):(e({type:l}),!0):(e($("Email is not valid")),!1)};return Object(Q.jsxs)("div",{children:[Object(Q.jsx)("h3",{className:"auth__title",children:"Register"}),Object(Q.jsxs)("form",{onSubmit:function(t){t.preventDefault(),d()&&e(function(e,t,n){return function(a){E.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(P.a)(D.a.mark((function e(t){var c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:n});case 3:a(ne(c.uid,c.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){U.a.fire("Error",e.message,"error")}))}}(s,o,i))},className:"animate__animated animate__fadeIn animate__faster",children:[t&&Object(Q.jsx)("div",{className:"auth__alert-error",children:t}),Object(Q.jsx)("input",{type:"text",placeholder:"Name",name:"name",autoComplete:"off",className:"auth__input",value:i,onChange:r}),Object(Q.jsx)("input",{type:"email",placeholder:"email",name:"email",autoComplete:"off",className:"auth__input",value:s,onChange:r}),Object(Q.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:o,onChange:r}),Object(Q.jsx)("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",value:u,onChange:r}),Object(Q.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",children:"Register"}),Object(Q.jsx)(I.b,{to:"/auth/login",className:"link",children:"Already registered?"})]})]})},me=function(){return Object(Q.jsx)("div",{className:"auth__main",children:Object(Q.jsx)("div",{className:"auth__box-container",children:Object(Q.jsxs)(A.d,{children:[Object(Q.jsx)(A.b,{exact:!0,path:"/auth/login",component:de}),Object(Q.jsx)(A.b,{exact:!0,path:"/auth/register",component:pe}),Object(Q.jsx)(A.a,{to:"auth/login"})]})})})},he=n(36),Oe=(n(63),function(e){var t=e.isAuthenticated,n=e.component,a=Object(he.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",a.location.pathname),Object(Q.jsx)(A.b,Object(v.a)(Object(v.a)({},a),{},{component:function(e){return t?Object(Q.jsx)(n,Object(v.a)({},e)):Object(Q.jsx)(A.a,{to:"/auth/login"})}}))}),fe=function(e){var t=e.isAuthenticated,n=e.component,a=Object(he.a)(e,["isAuthenticated","component"]);return Object(Q.jsx)(A.b,Object(v.a)(Object(v.a)({},a),{},{component:function(e){return t?Object(Q.jsx)(A.a,{to:"/"}):Object(Q.jsx)(n,Object(v.a)({},e))}}))},xe=function(){var e=Object(S.b)(),t=Object(a.useState)(!0),n=Object(C.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(!1),s=Object(C.a)(i,2),o=s[0],u=s[1];return Object(a.useEffect)((function(){E.a.auth().onAuthStateChanged((function(t){var n;(null===t||void 0===t?void 0:t.uid)?(e(ne(t.uid,t.displayName)),u(!0),e((n=t.uid,function(){var e=Object(P.a)(D.a.mark((function e(t){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(n);case 2:a=e.sent,t(B(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))):u(!1),r(!1)}))}),[e,r,u]),c?Object(Q.jsx)("h1",{children:"Wait.."}):Object(Q.jsx)(I.a,{children:Object(Q.jsx)("div",{children:Object(Q.jsxs)(A.d,{children:[Object(Q.jsx)(fe,{isAuthenticated:o,path:"/auth",component:me}),Object(Q.jsx)(Oe,{exact:!0,isAuthenticated:o,path:"/",component:le}),Object(Q.jsx)(A.a,{to:"auth/login"})]})})})},ve=function(){return Object(Q.jsx)(S.a,{store:k,children:Object(Q.jsx)(xe,{})})};n(168);r.a.render(Object(Q.jsx)(ve,{}),document.getElementById("root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.3c8be4a8.chunk.js.map