(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[63,85],{1370:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(14),n=c(739),r=c(836),i=c(3);t.default=function(){return Object(i.jsxs)(a.Fragment,{children:[Object(i.jsx)(n.a,{title:"Layout without menu",data:[{title:"Layouts"},{title:"Layout without menu"}]}),Object(i.jsx)(s.e,{color:"primary",children:Object(i.jsxs)("div",{className:"alert-body",children:[Object(i.jsx)("span",{className:"fw-bold",children:"Info: "}),Object(i.jsxs)("span",{children:["Please check the"," ",Object(i.jsx)("a",{href:"https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/docs/development/page-layouts",target:"_blank",children:"Layout without menu documentation"})," ","for more details."]})]})}),Object(i.jsx)(r.default,{})]})}},739:function(e,t,c){"use strict";var a=c(8),s=c(0),n=c(25),r=c(7),i=c.n(r),l=c(331),o=c(289),d=c(352),j=c(347),u=c(286),b=c(14),m=c(3);t.a=function(e){var t=e.data,c=e.title;return Object(m.jsxs)("div",{className:"content-header row",children:[Object(m.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(m.jsx)("div",{className:"row breadcrumbs-top",children:Object(m.jsxs)("div",{className:"col-12",children:[c?Object(m.jsx)("h2",{className:"content-header-title float-start mb-0",children:c}):"",Object(m.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(m.jsxs)(b.g,{children:[Object(m.jsx)(b.h,{tag:"li",children:Object(m.jsx)(n.b,{to:"/",children:"Home"})}),t.map((function(e,c){var r=e.link?n.b:s.Fragment,l=t.length-1===c;return Object(m.jsx)(b.h,{tag:"li",active:!l,className:i()({"text-primary":!l}),children:Object(m.jsx)(r,Object(a.a)(Object(a.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},c)}))]})})]})})}),Object(m.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(m.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(m.jsxs)(b.tb,{children:[Object(m.jsx)(b.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(m.jsx)(l.a,{size:14})}),Object(m.jsxs)(b.F,{tag:"ul",end:!0,children:[Object(m.jsxs)(b.E,{tag:n.b,to:"/apps/todo",children:[Object(m.jsx)(o.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(m.jsxs)(b.E,{tag:n.b,to:"/apps/chat",children:[Object(m.jsx)(d.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(m.jsxs)(b.E,{tag:n.b,to:"/apps/email",children:[Object(m.jsx)(j.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(m.jsxs)(b.E,{tag:n.b,to:"/apps/calendar",children:[Object(m.jsx)(u.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},791:function(e,t,c){"use strict";var a=c(2),s=c(5),n=c(12),r=c(14),i=c(345),l=c(346),o=c(348),d=c(188),j=c(13),u=c(61),b=c(202),m=c(0),O=c(21),x=c(28),h=c.n(x),f=c(6),p=c(192),g=c(23),v=c(70),N=c(187),y=c(3),k=Object(j.b)(),w=Object(j.d)(),S=Object(j.c)();t.a=function(e){var t=e.margin,c=e.padding,j=e.welcomeflag,x=Object(O.b)(),Y=Object(g.f)(),B=h()().format("dddd"),z=Object(O.c)((function(e){return e.dashboard})),I=Object(O.c)((function(e){return e.organization})),M=Object(O.c)((function(e){return e.notifications})),D=Object(m.useState)(!1),C=Object(n.a)(D,2),E=C[0],T=C[1],H=Object(m.useState)(null),F=Object(n.a)(H,2),_=F[0],J=F[1],L=Object(m.useState)([]),P=Object(n.a)(L,2),R=P[0],A=P[1],q=Object(m.useState)(0),G=Object(n.a)(q,2),V=G[0],U=G[1],K=Object(m.useState)(null),Q=Object(n.a)(K,2),X=Q[0],W=Q[1],Z=Object(m.useState)(null),$=Object(n.a)(Z,2),ee=$[0],te=$[1],ce=Object(m.useState)(null),ae=Object(n.a)(ce,2),se=ae[0],ne=ae[1],re=Object(m.useState)(null),ie=Object(n.a)(re,2),le=ie[0],oe=ie[1],de=Object(m.useState)(0),je=Object(n.a)(de,2),ue=je[0],be=je[1],me=Object(m.useState)(""),Oe=Object(n.a)(me,2),xe=Oe[0],he=Oe[1],fe=Object(m.useState)(!1),pe=Object(n.a)(fe,2),ge=pe[0],ve=pe[1],Ne=Object(m.useState)(""),ye=Object(n.a)(Ne,2),ke=ye[0],we=ye[1],Se=Object(m.useState)(null),Ye=Object(n.a)(Se,2),Be=Ye[0],ze=Ye[1],Ie={color:"light-success",icon:Object(y.jsx)(i.a,{size:24})},Me={color:"light-danger",icon:Object(y.jsx)(l.a,{size:24})},De=function(e){f.a.post("/notifications/sendnotifications",{data:e})};Object(m.useEffect)((function(){var e;w===(null===M||void 0===M||null===(e=M.message)||void 0===e?void 0:e.userid)&&(J(M.message),he(M.message.locationname))}),[M.message]);var Ce=function(e,t,c){f.a.post("/employeeattendances/updatelocation",{id:c,punchoutlocation:t,location:e}).then(Object(s.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))))},Ee=function(){var e=Object(s.a)(Object(a.a)().mark((function e(t,c){var n,r,i,l,o,d=arguments;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!(d.length>2&&void 0!==d[2])||d[2],r=d.length>3?d[3]:void 0,i=new XMLHttpRequest,"GET",l="https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(t,",").concat(c,"&sensor=false&key=AIzaSyB1Mx2YS1sVJqU-K6jaFFX2epPPB4djnSU"),!0,o="",e.next=9,i.open("GET",l,true);case 9:return i.onreadystatechange=Object(s.a)(Object(a.a)().mark((function e(){var t,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:4===i.readyState&&200===i.status&&(t=JSON.parse(i.responseText),c=t.results[0],o=c.formatted_address,n?(he(o),Ce(o,"",r)):Ce("",o,r));case 1:case"end":return e.stop()}}),e)}))),e.next=12,i.send();case 12:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),Te=function(){var e=Object(s.a)(Object(a.a)().mark((function e(){var t,c,s,n,r,i,l,o,d,j,u,m;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=R.find((function(e){return JSON.parse(e).day===B})),n=JSON.parse(s),r=2,i=h()().format("H.mm"),l=n.start.split(":").join("."),Number(l)+Number(parseFloat(V).toFixed(2))<Number(i)?r=3:Number(l)-Number(parseFloat(V).toFixed(2))>Number(i)&&(r=1),o={organizationId:k,punchIn:h()().utc().valueOf(),userId:w,status:r,createdBy:w,attendancelatitude:null===I||void 0===I||null===(t=I.geoCordinate)||void 0===t?void 0:t.latitude,attendancelangtitude:null===I||void 0===I||null===(c=I.geoCordinate)||void 0===c?void 0:c.longitude,locationName:xe,actualDate:h()().startOf("day").utc().format("x")},e.next=9,x(Object(b.c)(o));case 9:if(d=e.sent,!(Object.keys(I).length>0)){e.next=13;break}return e.next=13,Ee(null===I||void 0===I||null===(j=I.geoCordinate)||void 0===j?void 0:j.latitude,null===I||void 0===I||null===(u=I.geoCordinate)||void 0===u?void 0:u.longitude,!0,null===(m=d.payload)||void 0===m?void 0:m.id);case 13:return e.next=15,De(d.payload);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),He=function(e){var t=e/1e3,c=parseInt(t/3600);t%=3600;var a=parseInt(t/60);return t%=60,"".concat(c," : ").concat(a,": ").concat(parseInt(t))},Fe=function(){var e=Object(s.a)(Object(a.a)().mark((function e(t){var c,s,n,r,i,l,o;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=h()(),s=h()(t.starttime,"x").toDate(),n=h()().valueOf(),r=h.a.duration(c.diff(s)),i=r.asHours(),l=ue*i,o={updatedBy:w,id:t.id,taskId:t.taskid,totalhours:i,amount:l,hourlyRate:ue,userId:w,endTime:n},e.next=9,x(Object(d.j)(o));case 9:return e.next=11,localStorage.removeItem("currentTask");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_e=function(){var e=Object(s.a)(Object(a.a)().mark((function e(){var t,c,n,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Be){e.next=3;break}return N.b.error("Please Stop Break Time",{position:"bottom-right"}),e.abrupt("return",!1);case 3:return t=h()(),c=h()(t,"DD/MM/YYYY HH:mm:ss").diff(h()(ee,"DD/MM/YYYY HH:mm:ss")),n={organizationId:k,punchOut:h()().valueOf(),userId:w,id:_.id,updatedBy:w,totalHours:c},e.next=8,x(Object(b.d)(n));case 8:null!==(r=JSON.parse(localStorage.getItem("currentTask")||null))&&Fe(r),navigator.geolocation.getCurrentPosition(function(){var e=Object(s.a)(Object(a.a)().mark((function e(t){var c,s,n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.coords,s=c.latitude,n=c.longitude,x(Object(p.b)({latitude:s,longitude:n})),e.next=4,Ee(s,n,!1,null===_||void 0===_?void 0:_.id);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){console.error("Error getting user location:",e)}));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(m.useEffect)((function(){if(void 0!==ee&&null!==ee){var e=h()(),t=h.a.utc(h()(e,"DD/MM/YYYY HH:mm:ss").diff(h()(ee,"DD/MM/YYYY HH:mm:ss")));ne(He(t))}}),[ee]),Object(m.useEffect)((function(){var e=JSON.parse(localStorage.getItem("loggedIn"));if(null===e)T(!1);else{T(!0),oe(e.punchout),J(e),he(e.locationname),W(h()(e.punchin,"x").format("h:m a"));var t=h()(e.punchin,"x").format("DD/MM/YYYY HH:mm:ss");te(t),e.punchout&&(T(!1),oe(h()(e.punchout,"x").format("h:m a")))}}),[]),_&&setInterval((function(){!function(){if(void 0!==ee&&null!==ee){var e=h()(),t=h.a.utc(h()(e,"DD/MM/YYYY HH:mm:ss").diff(h()(ee,"DD/MM/YYYY HH:mm:ss")));ne(He(t))}}()}),1e3),Object(m.useEffect)((function(){if(z&&z.data&&Object.keys(z.data).length>0){T(!0);var e=z.data;J(e),he(e.locationname),localStorage.setItem("loggedIn",JSON.stringify(e)),W(h()(e.punchin,"x").format("h:m a")),te(h()(e.punchin,"x").format("DD/MM/YYYY HH:mm:ss")),e.punchout&&(T(!1),oe(h()(e.punchout,"x").format("h:m a")))}else localStorage.removeItem("loggedIn"),J(null),T(!1),oe(null),W(null),te(null)}),[z.data]),Object(m.useEffect)(Object(s.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(Object(b.b)({userId:w,actualDate:h()().startOf("day").utc().format("x")}));case 2:f.a.post("/organizationprefernces/getbusinesshours").then((function(e){A(e.data.organizationprefernces.officetime);var t=parseFloat(e.data.organizationprefernces.punchingrace)<10?parseFloat(e.data.organizationprefernces.punchingrace/10).toFixed(2):parseFloat(e.data.organizationprefernces.punchingrace/100).toFixed(2);U(t)})).catch((function(){})),f.a.post("/organizationusers/getjobinfo",{id:w}).then((function(e){be(e.data.organizationusers.hourlyrate||0)})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)}))),[]),Object(m.useEffect)((function(){var e=JSON.parse(localStorage.getItem("breakLogin"));e&&ze(e)}),[]);var Je=Object(m.useState)(0),Le=Object(n.a)(Je,2),Pe=Le[0],Re=Le[1];Object(m.useEffect)((function(){Be&&setInterval((function(){!function(){var e=h()().valueOf(),t=h.a.utc(h()(e,"x").diff(h()(Be.starttime,"x")));Re(He(t))}()}),[1e3])}),[Be]);return Object(y.jsx)(r.l,{className:"card-congratulations-medal ".concat(void 0!==t?t[0]:""),children:Object(y.jsxs)(r.m,{className:"flex ".concat(c),children:[Object(y.jsxs)(r.ib,{className:"d-flex justify-content-between",children:[Object(y.jsxs)(r.B,{className:"col",md:6,sm:6,children:[!j&&Object(y.jsxs)("h5",{children:["Welcome \ud83c\udf89 ",S.name,"!"]}),Object(y.jsx)(r.B,{className:"d-flex",children:null!==R&&R.length>0&&(E?Object(y.jsx)(r.i,{color:"danger",onClick:function(){return _e()},children:"Punch Out"}):Object(y.jsx)(r.i,{color:"success",onClick:function(){return Te()},children:"Punch In"}))}),(null===R||0===R.length)&&Object(y.jsx)(v.b,{I:"read",a:"setting",children:Object(y.jsx)("p",{className:"cursor-pointer text-primary",onClick:function(){return Y("/account-settings")},children:"Click here to set Business Hours"})}),Object(y.jsxs)(r.Q,{isOpen:ge,toggle:function(){return ve(!ge)},className:"modal-dialog-centered modal-sm",children:[Object(y.jsx)(r.T,{toggle:function(){return ve(!ge)},children:"Break"}),Object(y.jsx)(r.R,{children:Object(y.jsx)(r.K,{type:"text",placeholder:"Break Name",onChange:function(e){return we(e.target.value)}})}),Object(y.jsxs)(r.S,{children:[Object(y.jsx)(r.i,{color:"warning",onClick:function(){return ve(ge)},outline:!0,children:"Cancel"}),Object(y.jsx)(r.i,{color:"primary",outline:!0,onClick:function(){!function(){var e=h()().valueOf();f.a.post("/tasktimesheets/breakentry",{userId:w,createdBy:w,starttime:e,name:ke}).then((function(e){localStorage.setItem("breakLogin",JSON.stringify(e.data.timesheet)),ze(e.data.timesheet),ve(!1)})).catch((function(e){console.log(e)}))}()},children:"Submit"})]})]})]}),null!==R&&R.length>0&&Object(y.jsxs)(r.B,{className:"col text-end",md:"6",sm:6,children:[null!==_&&Object(y.jsx)("div",{children:Object(y.jsx)(r.f,{color:["","light-primary","light-success","light-danger"][_.status],children:["","Early","Regular","Late"][_.status]})}),E&&!Be&&Object(y.jsx)(r.i,{color:"primary",onClick:function(){return ve(!0)},className:"mt-50",outline:!0,children:"Take a Break"}),E&&Be&&Object(y.jsx)(r.i,{color:"success",onClick:function(){return function(){var e=h()().valueOf();f.a.post("/tasktimesheets/breakentry",{userId:w,createdBy:w,starttime:null===Be||void 0===Be?void 0:Be.starttime,id:null===Be||void 0===Be?void 0:Be.id,endtime:e,name:Be.manualname}).then((function(){localStorage.removeItem("breakLogin"),ze(null)})).catch((function(e){console.log(e)}))}()},className:"mt-50",outline:!0,children:"End Break"})]})]}),Object(y.jsxs)(r.ib,{children:[""!==xe&&Object(y.jsxs)("a",{className:"d-flex mt-50",href:"https://www.google.com/maps/search/".concat(xe),target:"_blank",children:[Object(y.jsx)("div",{className:"text-truncate text-primary font-small-3 width-200",children:xe}),Object(y.jsx)(o.a,{size:16,className:"text-primary"})]}),Be&&Object(y.jsxs)("h6",{className:"text-danger mt-50",children:["Break Running time : ",Pe," "]})]}),Object(y.jsxs)(r.ib,{className:"pt-1",children:[Object(y.jsxs)(r.B,{className:"d-flex align-items-center col",sm:6,lg:6,children:[Object(y.jsx)(u.a,{color:Ie.color,icon:Ie.icon,className:"me-2 p-1"}),Object(y.jsxs)(r.B,{children:[Object(y.jsx)("h6",{className:"fw-bolder mb-0",children:"Punch In"}),Object(y.jsx)(r.u,{className:"font-small-3 mb-0",children:null===X?"00:00:00":X})]})]}),Object(y.jsxs)(r.B,{className:"d-flex align-items-center col",sm:6,lg:6,children:[Object(y.jsx)(u.a,{color:Me.color,icon:Me.icon,className:"me-2 p-1"}),Object(y.jsxs)(r.B,{children:[Object(y.jsx)("h6",{className:"fw-bolder mb-0",children:"Punch Out"}),Object(y.jsx)(r.u,{className:"font-small-3 mb-0",children:null===le?se:le})]})]})]})]})})}},794:function(e,t,c){},809:function(e,t,c){"use strict";var a=c(8),s=c(27),n=c(2),r=c(5),i=c(12),l=c(7),o=c.n(l),d=c(295),j=c(289),u=c(288),b=c(269),m=c(368),O=c(270),x=c(61),h=c(6),f=c(14),p=c(0),g=c(13),v=c(28),N=c.n(v),y=c(188),k=c(21),w=c(23),S=c(3),Y=Object(g.d)(),B=Object(g.a)(),z=[{status:1,title:"0",subtitle:"Pending",color:"light-primary",icon:Object(S.jsx)(d.a,{size:20})},{status:2,title:"0",subtitle:"In Progress",color:"light-warning",icon:Object(S.jsx)(j.a,{size:20})},{status:3,title:"0",subtitle:"Completed",color:"light-success",icon:Object(S.jsx)(u.a,{size:20})},{status:6,title:"0",subtitle:"Pending Review",color:"light-ocean",icon:Object(S.jsx)(b.a,{size:20})},{status:7,title:"0",subtitle:"Request Changes",color:"light-info",icon:Object(S.jsx)(m.a,{size:20})},{status:9,title:"0",subtitle:"Overdue",color:"light-danger",icon:Object(S.jsx)(O.a,{size:20})}];t.a=function(e){var t=e.cols,c=Object(k.b)(),l=Object(w.f)(),d=Object(p.useState)([]),j=Object(i.a)(d,2),u=j[0],b=j[1],m=function(){var e=Object(r.a)(Object(n.a)().mark((function e(t){var a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={status:t},e.next=3,c(Object(y.v)(a));case 3:l("/task/list");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(p.useEffect)((function(){null!==B&&function(){var e={date:N()().startOf("day").utc().format("x"),userId:Y,userType:B.organizationusersusertypeid};h.a.post("tasks/taskcountbystatus",e).then((function(e){z.forEach((function(t,c){var a=e.data.tasks.findIndex((function(e){return parseInt(e.taskstatus)===t.status}));a>-1&&(z[c].title=e.data.tasks[a].count)})),b(z)})).catch((function(e){console.log(e)}))}()}),[]);return Object(S.jsxs)(f.l,{className:"card-statistics",children:[Object(S.jsx)(f.p,{children:Object(S.jsx)(f.v,{tag:"h4",children:"Task Stats"})}),Object(S.jsx)(f.m,{className:"py-0",children:Object(S.jsx)(f.ib,{children:u.map((function(e,c){return Object(S.jsx)(f.B,Object(a.a)(Object(a.a)({},t),{},{className:o()(Object(s.a)({},"mb-2",c!==z.length-1),["col flex-50"]),children:Object(S.jsxs)("div",{className:"d-flex align-items-center cursor-pointer",onClick:function(){m([e.status])},children:[Object(S.jsx)(x.a,{color:e.color,icon:e.icon,className:"me-2"}),Object(S.jsxs)("div",{className:"my-auto",children:[Object(S.jsx)("h6",{className:"fw-bolder mb-0",children:e.title}),Object(S.jsx)(f.u,{className:"font-small-3 mb-0",children:e.subtitle})]})]})}),c)}))})})]})}},810:function(e,t,c){"use strict";var a=c(8),s=c(2),n=c(5),r=c(12),i=(c(61),c(316)),l=c(386),o=c(364),d=c(7),j=c.n(d),u=c(14),b=c(494),m=c(28),O=c.n(m),x=c(0),h=c(6),f=c(742),p=c(744),g=c(745),v=c(13),N=c(185),y=c.n(N),k=c(186),w=c.n(k),S=(c(62),c(3)),Y=Object(v.a)(),B=w()(y.a);t.a=function(){var e=p.d().shape({createdBy:p.f().default(""),id:p.f().default(""),organizationId:p.f().default(""),name:p.f().default("").required("Please Enter Name"),description:p.f().default("").required("Please Enter Description")}),t=Object(f.f)({resolver:Object(g.a)(e),defaultValues:e.cast()}),c=t.handleSubmit,d=t.formState.errors,m=t.control,v=t.setValue,N=Object(x.useState)(!1),y=Object(r.a)(N,2),k=y[0],w=y[1],z=Object(x.useState)([]),I=Object(r.a)(z,2),M=I[0],D=I[1],C=function(){h.a.post("/noticeevents/list").then((function(e){D(e.data.noticeevents)}))},E=Object(x.useState)(null),T=Object(r.a)(E,2),H=T[0],F=T[1],_=function(e){h.a.post("/noticeevents/delete",{id:e}).then((function(){C()}))},J=Object(x.useState)(0),L=Object(r.a)(J,2),P=L[0],R=L[1],A=Object(x.useState)(0),q=Object(r.a)(A,2),G=q[0],V=q[1],U=function(){V(!0)},K=function(){V(!1)};Object(x.useState)((function(){C()}));var Q=function(e,t){var c=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=arguments.length>3?arguments[3]:void 0;return Object(S.jsxs)(u.B,{md:12,children:[Object(S.jsx)(u.N,{sm:"12",className:j()("form-label ".concat(c?"required":"")),for:t,children:e}),Object(S.jsxs)(u.B,{children:[Object(S.jsx)(f.a,{id:t,name:t,control:m,render:function(e){var c=e.field;return Object(S.jsx)(u.K,Object(a.a)({type:s,invalid:d[t]&&!0},c))}}),d[t]&&Object(S.jsx)(u.I,{children:d[t].message})]})]})},X=function(){w(!1),F(null),v("id",""),v("name",""),v("description","")},W=M.map((function(e){return Object(S.jsxs)(u.A,{onExiting:U,onExited:K,className:"carousal-window scroll-example border-0",children:[Object(S.jsx)("h5",{children:e.name}),Object(S.jsx)("p",{className:"text-body white-space-wrap",children:e.description}),(1===parseInt(null===Y||void 0===Y?void 0:Y.rolelevel)||2===parseInt(null===Y||void 0===Y?void 0:Y.rolelevel))&&Object(S.jsxs)("div",{className:"carousal-action",children:[Object(S.jsx)(i.a,{size:16,onClick:function(){return t=e,w(!0),F(t),v("name",t.name),v("id",t.id),void v("description",t.description.replace(/(\\n)/g,"\n"));var t},className:"text-primary me-1 cursor-pointer"}),Object(S.jsx)(l.a,{size:16,onClick:function(){return t=e.id,B.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(){var e=Object(n.a)(Object(s.a)().mark((function e(c){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.value){e.next=4;break}return e.next=3,_(t);case 3:B.fire({icon:"success",title:"Deleted!",text:"Notice has been deleted.",customClass:{confirmButton:"btn btn-success"}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var t},className:"text-danger cursor-pointer"})]})]},e.id)}));return Object(S.jsxs)(u.l,{className:"card-developer-meetup",children:[Object(S.jsx)("div",{className:"meetup-img-wrapper rounded-top text-center",children:Object(S.jsx)("img",{src:b.default,height:"170"})}),Object(S.jsxs)(u.m,{children:[Object(S.jsxs)("div",{className:"meetup-header d-flex align-items-center mb-1",children:[Object(S.jsxs)("div",{className:"meetup-day",children:[Object(S.jsx)("h6",{className:"mb-0",children:O()().format("ddd")}),Object(S.jsx)("h3",{className:"mb-0",children:O()().format("D")})]}),Object(S.jsx)("div",{className:"my-auto w-100",children:Object(S.jsxs)(u.v,{className:"mb-25 d-flex justify-content-between",children:[Object(S.jsx)("h5",{children:"Notice Board"}),(1===parseInt(null===Y||void 0===Y?void 0:Y.rolelevel)||2===parseInt(null===Y||void 0===Y?void 0:Y.rolelevel))&&Object(S.jsx)(o.a,{size:18,className:"cursor-pointer",onClick:function(){w(!0)}})]})})]}),Object(S.jsx)("div",{className:"mb-1 p-25 bg-light-primary",children:Object(S.jsxs)(u.w,{activeIndex:P,next:function(){if(!G){var e=P===M.length-1?0:P+1;R(e)}},previous:function(){if(!G){var e=0===P?M.length-1:P-1;R(e)}},children:[Object(S.jsx)(u.z,{items:M,className:"m-0",activeIndex:P,onClickHandler:function(e){G||R(e)}}),W]})}),Object(S.jsxs)(u.Q,{isOpen:k,toggle:function(){return w(!k)},className:"modal-dialog-centered",children:[Object(S.jsx)(u.T,{toggle:function(){return X()},children:"Notice Board"}),Object(S.jsx)(u.R,{children:Object(S.jsxs)(u.ib,{className:"gx-2 gy-1",tag:u.H,onSubmit:c((function(e){h.a.post("/noticeevents/".concat(H?"update":"create"),e).then((function(){w(!1),v("name",""),v("description",""),C()}))})),children:[Q("Title","name",!0,"text"),Q("Message","description",!0,"textarea"),Object(S.jsxs)(u.B,{className:"mt-2 pt-1",xs:12,children:[Object(S.jsx)(u.i,{type:"submit",className:"me-1",color:"primary",children:"Submit"}),Object(S.jsx)(u.i,{className:"me-1",color:"warning",onClick:function(){return X()},children:"Cancel"})]})]})})]})]})]})}},811:function(e,t,c){"use strict";var a=c(12),s=c(0),n=c(6),r=c(890),i=c(14),l=c(28),o=c.n(l),d=c(3);t.a=function(){var e=o()().format("M"),t=["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar"],c=Object(s.useState)(null),l=Object(a.a)(c,2),j=l[0],u=l[1],b=Object(s.useState)(null),m=Object(a.a)(b,2),O=m[0],x=m[1],h=Object(s.useState)(parseInt(e)>3?o()().add(1,"y").format("YYYY"):o()().format("YYYY")),f=Object(a.a)(h,2),p=f[0],g=f[1],v=Object(s.useState)({id:2,name:"This Year"}),N=Object(a.a)(v,2),y=N[0],k=N[1],w=function(e){var t=String(e),c="",a="";t.includes(".")?(c=t.slice(t.indexOf(".")),a=(a=t.replace(c,"")).toString()):a=t.toString();var s=a.substring(a.length-3),n=a.substring(0,a.length-3);return""!==n&&(s=",".concat(s)),n.replace(/\B(?=(\d{2})+(?!\d))/g,",")+s+(""===c?".00":c)},S=function(e){var c={startdate:o()().set("year",e).subtract(1,"y").set("month",3).startOf("month").startOf("d").valueOf(),enddate:o()().set("year",parseInt(e)+1).set("month",2).endOf("month").endOf("d").valueOf()};return n.a.post("/taskinvoices/revenuereport",c).then((function(e){var c={labels:t,datasets:[{label:"Total",backgroundColor:"#7367f0",borderColor:"#7367f0",data:[]},{label:"Received",backgroundColor:"#28c76f",borderColor:"#28c76f",data:[]}]};t.forEach((function(t,a){var s=e.data.result.total.find((function(e){return o()(e.date).format("MMM")===t})),n=e.data.result.received.find((function(e){return o()(e.date).format("MMM")===t}));c.datasets[0].data[a]=(null===s||void 0===s?void 0:s.amount)||0,c.datasets[1].data[a]=(null===n||void 0===n?void 0:n.amount)||0})),x(c),u(e.data.result)})),function(){return u(null)}};Object(s.useEffect)((function(){S(p)}),[]);return null!==j?Object(d.jsx)(i.l,{className:"card-revenue-budget",children:Object(d.jsxs)(i.ib,{className:"mx-0",children:[Object(d.jsxs)(i.B,{className:"revenue-report-wrapper p-50 p-lg-2",md:"9",xs:"12",children:[Object(d.jsx)("div",{className:"d-sm-flex justify-content-between align-items-center mb-1",children:Object(d.jsx)(i.v,{className:"mb-50 mb-sm-0",children:"Revenue Report"})}),O&&Object(d.jsx)(r.a,{data:O,options:{scales:{x:{grid:{display:!1}},y:{ticks:{autoSkip:!0,maxTicksLimit:8},grid:{display:!1}}},plugins:{datalabels:{display:!0},legend:{display:!1},title:{display:!1}}},width:600,height:235})]}),Object(d.jsxs)(i.B,{className:"budget-wrapper",md:"3",xs:"12",children:[Object(d.jsxs)(i.tb,{children:[Object(d.jsx)(i.G,{className:"budget-dropdown",outline:!0,color:"primary",size:"sm",caret:!0,children:null===y||void 0===y?void 0:y.name}),Object(d.jsx)(i.F,{children:[{id:1,name:"Last year"},{id:2,name:"This Year"}].map((function(e,t){return Object(d.jsx)(i.E,{className:"w-100",onClick:function(){return function(e){var t;k(e),t=2===e.id?o()().add(1,"y").format("YYYY"):o()().format("YYYY"),g(t),S(t)}(e)},children:e.name},t)}))})]}),Object(d.jsxs)(i.ib,{children:[Object(d.jsx)("span",{className:"text-primary",children:"Total sale"}),Object(d.jsx)("h6",{className:"mb-25",children:w(j.total_invoice)})]}),Object(d.jsxs)(i.ib,{children:[Object(d.jsx)("span",{className:"text-success",children:"Total Receipts"}),Object(d.jsx)("h6",{className:"mb-25",children:w(j.total_received)})]})]})]})}):null}},830:function(e,t,c){},836:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c(5),n=c(12),r=c(14),i=c(791),l=c(809),o=c(61),d=c(290),j=c(356),u=c(325),b=c(25),m=c(0),O=c(6),x=c(28),h=c.n(x),f=c(13),p=c(3),g=Object(f.d)(),v=Object(f.a)(),N=function(){var e=Object(m.useState)([]),t=Object(n.a)(e,2),c=t[0],a=t[1],s=h()().startOf("day").valueOf();Object(m.useEffect)((function(){null!==v&&O.a.post("/tasks/dashboardmytasklist",{userId:g,endDate:s,userType:v.organizationusersusertypeid}).then((function(e){a(e.data.tasks)})).catch((function(e){console.log(e)}))}),[]);return Object(p.jsxs)(r.l,{className:"card-transaction",children:[Object(p.jsx)(r.p,{children:Object(p.jsxs)(r.v,{tag:"h4",children:[Object(p.jsx)(j.a,{size:18}),"Upcoming Tasks"]})}),Object(p.jsxs)(r.m,{children:[c.length>0&&c.map((function(e,t){if(t<5)return Object(p.jsxs)("div",{className:"transaction-item",children:[Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsx)(o.a,{className:"rounded",size:"sm",color:"light-primary",icon:Object(p.jsx)(d.a,{size:12})}),Object(p.jsxs)(r.B,{tag:b.b,to:"/task/view/".concat(e.id),children:[Object(p.jsx)("h6",{className:"transaction-title",children:e.servicename}),Object(p.jsx)("small",{children:e.clientname})]})]}),Object(p.jsx)("div",{className:"fw-bolder text-success",children:(c=e.enddate,13===c.length?h()(c,"x").format("MMM DD, YYYY"):h.a.unix(c).format("MMM DD, YYYY"))})]},e.id);var c})),0===c.length&&Object(p.jsxs)(r.ib,{children:[Object(p.jsx)(u.a,{}),Object(p.jsx)("p",{className:"text-center mt-2",children:"You Dont have any tasks Today"})]}),c.length>4&&Object(p.jsx)(r.B,{tag:b.b,to:"/task/list",className:"cursor-pointer text-primary",children:"View More..."})]})]})},y=Object(f.d)(),k=Object(f.a)(),w=function(){var e=h()().startOf("day").valueOf(),t=Object(m.useState)([]),c=Object(n.a)(t,2),a=c[0],s=c[1];Object(m.useEffect)((function(){null!==k&&O.a.post("/tasks/dashboardmytasklisttoday",{userId:y,endDate:e,userType:k.organizationusersusertypeid}).then((function(e){s(e.data.tasks)})).catch((function(e){console.log(e)}))}),[]);return Object(p.jsxs)(r.l,{className:"card-transaction",children:[Object(p.jsx)(r.p,{children:Object(p.jsxs)(r.v,{tag:"h4",children:[Object(p.jsx)(j.a,{size:18}),"My Task Dues Today "]})}),Object(p.jsxs)(r.m,{children:[a.length>0&&a.map((function(e,t){if(t<5)return Object(p.jsxs)("div",{className:"transaction-item",children:[Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsx)(o.a,{className:"rounded",size:"sm",color:"light-primary",icon:Object(p.jsx)(d.a,{size:12})}),Object(p.jsxs)(r.B,{tag:b.b,to:"/task/view/".concat(e.id),children:[Object(p.jsx)("h6",{className:"transaction-title",children:e.servicename}),Object(p.jsx)("small",{children:e.clientname})]})]}),Object(p.jsx)("div",{className:"fw-bolder text-success",children:(c=e.enddate,13===c.length?h()(c,"x").format("MMM DD, YYYY"):h.a.unix(c).format("MMM DD, YYYY"))})]},e.id);var c})),0===a.length&&Object(p.jsxs)(r.ib,{children:[Object(p.jsx)(u.a,{}),Object(p.jsx)("p",{className:"text-center mt-2",children:"You Dont have any tasks dues Today"})]}),a.length>4&&Object(p.jsx)(r.B,{tag:b.b,to:"/task/list",className:"cursor-pointer text-primary",children:"View More..."})]})]})},S=c(23),Y=c(188),B=c(21),z=Object(f.d)(),I=Object(f.a)(),M=function(){var e=h()().startOf("day").utc().valueOf(),t=Object(B.b)(),c=function(e){var t=h()(),c="";return c=13===e.length?h()(e,"x"):h.a.unix(e),t.diff(c,"days")},i=Object(S.f)(),l=Object(m.useState)([]),x=Object(n.a)(l,2),f=x[0],g=x[1];Object(m.useEffect)((function(){null!==I&&O.a.post("/tasks/dashboardmytaskoverdues",{userId:z,endDate:e,userType:I.organizationusersusertypeid}).then((function(e){g(e.data.tasks)})).catch((function(e){console.log(e)}))}),[]);var v=function(){var e=Object(s.a)(Object(a.a)().mark((function e(c){var s;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={status:c},e.next=3,t(Object(Y.v)(s));case 3:i("/task/list");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(r.l,{className:"card-transaction",children:[Object(p.jsx)(r.p,{children:Object(p.jsxs)(r.v,{tag:"h4",children:[Object(p.jsx)(j.a,{size:18}),"My OverDue Tasks"]})}),Object(p.jsxs)(r.m,{children:[f.length>0&&f.map((function(e,t){if(t<5)return Object(p.jsxs)("div",{className:"transaction-item",children:[Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsx)(o.a,{className:"rounded",size:"sm",color:"light-primary",icon:Object(p.jsx)(d.a,{size:12})}),Object(p.jsxs)(r.B,{tag:b.b,to:"/task/view/".concat(e.id),children:[Object(p.jsx)("h6",{className:"transaction-title",children:e.servicename}),Object(p.jsx)("small",{children:e.clientname})]})]}),Object(p.jsxs)("div",{className:"fw-bolder text-danger",children:[c(e.enddate)," Day's"]})]},e.id)})),0===f.length&&Object(p.jsxs)(r.ib,{children:[Object(p.jsx)(u.a,{}),Object(p.jsx)("p",{className:"text-center mt-2",children:"You Dont have any Overdue tasks."})]}),f.length>4&&Object(p.jsx)(r.B,{onClick:function(){v([8])},className:"cursor-pointer text-primary",children:"View More..."})]})]})},D=c(810),C=(c(764),function(){var e=Object(m.useState)([]),t=Object(n.a)(e,2),c=t[0],a=t[1];return Object(m.useEffect)((function(){O.a.post("/tasks/getcurrenttasks").then((function(e){a(e.data.users)})).catch((function(e){console.log(e)}))}),[]),Object(p.jsxs)(r.l,{className:"card-employee-task",children:[Object(p.jsx)(r.p,{children:Object(p.jsx)(r.v,{tag:"h4",children:"Open Tasks"})}),Object(p.jsx)(r.m,{className:"height-300 overflow-auto",children:c.map((function(e,t){var c,a;return Object(p.jsxs)("div",{className:"employee-task d-flex justify-content-between align-items-center",children:[Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsx)(o.a,{initials:!0,color:"light-primary",className:"me-75",content:null===(c=e.username)||void 0===c?void 0:c.charAt(0).toUpperCase()}),Object(p.jsxs)("div",{className:"my-auto",children:[Object(p.jsx)("h6",{className:"mb-0",children:e.username}),null!==e.taskid&&Object(p.jsx)("small",{children:Object(p.jsx)(b.b,{to:"/task/view/".concat(e.taskid),children:e.servicename})})]})]}),Object(p.jsx)("div",{className:"d-flex align-items-center",children:Object(p.jsx)("small",{className:"me-75 user_name text-truncate text-sm",children:(a=e.starttime,null===a?"-":h()(a,"x").format("MMM DD hh:mm A"))})})]},t)}))})]})}),E=c(811),T=function(){var e=Object(m.useState)([]),t=Object(n.a)(e,2),c=t[0],a=t[1],s=function(e){var t=String(e),c="",a="";t.includes(".")?(c=t.slice(t.indexOf(".")),a=(a=t.replace(c,"")).toString()):a=t.toString();var s=a.substring(a.length-3),n=a.substring(0,a.length-3);return""!==n&&(s=",".concat(s)),n.replace(/\B(?=(\d{2})+(?!\d))/g,",")+s};return Object(m.useEffect)((function(){O.a.post("/taskinvoices/revenuetable").then((function(e){a(e.data.output||[])}))}),[]),Object(p.jsx)(r.l,{className:"card-revenue-budget",children:Object(p.jsx)(r.ib,{className:"mx-0",children:Object(p.jsxs)(r.mb,{className:"table",responsive:!0,children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{}),Object(p.jsx)("th",{children:"Sales"}),Object(p.jsx)("th",{children:"Receipts"}),Object(p.jsx)("th",{children:"Due"})]})}),Object(p.jsx)("tbody",{children:c.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{style:{padding:"12px 10px",fontSize:"13px"},children:e.date}),Object(p.jsx)("td",{style:{padding:"12px 10px",fontSize:"13px"},children:s(e.sales)}),Object(p.jsx)("td",{style:{padding:"12px 10px",fontSize:"13px"},children:s(e.receipts)}),Object(p.jsx)("td",{style:{padding:"12px 10px",fontSize:"13px"},children:s(e.due)})]},t)}))})]})})})},H=c(193),F=(c(794),c(830),c(288)),_=Object(f.a)();t.default=function(){var e=Object(m.useContext)(H.a),t=Object(m.useState)(null),c=Object(n.a)(t,2),o=c[0],d=c[1],j=function(){return null!==o&&(o.drive_flag||o.gmail_flag||o.attendance_flag||o.leave_flag||o.invoicesetting_flag)},u=function(){return 1===parseInt(null===_||void 0===_?void 0:_.rolelevel)||2===parseInt(null===_||void 0===_?void 0:_.rolelevel)};return Object(m.useEffect)(Object(s.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,void O.a.post("/organizationprefernces/getsettingsflag").then((function(e){d(e.data.result)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)}))),[]),Object(p.jsxs)("div",{id:"dashboard-ecommerce",children:[Object(p.jsxs)(r.ib,{className:"match-height",children:[u()&&Object(p.jsx)(r.B,{xl:u()?"4":"6",md:u()?"4":"6",xs:"12",className:"d-flex",children:Object(p.jsxs)(r.ib,{children:[Object(p.jsx)(r.B,{md:12,children:Object(p.jsx)(i.a,{margin:"mt-2",padding:""})}),Object(p.jsxs)(r.B,{md:12,children:[!j()&&Object(p.jsx)(l.a,{className:"py-0",cols:{xl:(u(),"6"),sm:"6"}}),j()&&Object(p.jsxs)(r.l,{children:[Object(p.jsx)(r.p,{children:"Settings"}),Object(p.jsxs)(r.m,{children:[Object(p.jsxs)(r.B,{className:"py-50",children:[Object(p.jsx)(F.a,{size:15,className:o.drive_flag?"text-danger":"text-success"}),Object(p.jsx)(r.B,{className:"ms-75",tag:b.b,to:"/settings/integrations",children:"Link Google Drive"})]}),Object(p.jsxs)(r.B,{className:"py-50",children:[" ",Object(p.jsx)(F.a,{size:15,className:o.gmail_flag?"text-danger":"text-success"}),Object(p.jsx)(r.B,{className:"ms-75",tag:b.b,to:"/settings/integrations",children:"Link GMail"})]}),Object(p.jsxs)(r.B,{className:"py-50",children:[Object(p.jsx)(F.a,{size:15,className:o.invoicesetting_flag?"text-danger":"text-success"}),Object(p.jsx)(r.B,{className:"ms-75",tag:b.b,to:"/invoicesetting/invoiceaccount",children:"Invoice Setting"})]}),Object(p.jsxs)(r.B,{className:"py-50",children:[Object(p.jsx)(F.a,{size:15,className:o.attendance_flag?"text-danger":"text-success"}),Object(p.jsx)(r.B,{className:"ms-75",tag:b.b,to:"/attendancesetting/attendancescore",children:"Attendance Setting"})]}),Object(p.jsxs)(r.B,{className:"py-50",children:[Object(p.jsx)(F.a,{size:15,className:o.leave_flag?"text-danger":"text-success"}),Object(p.jsx)(r.B,{className:"ms-75",tag:b.b,to:"/attendancesetting/leavesetting",children:"Leave Setting"})]})]})]})]})]})}),!u()&&Object(p.jsx)(r.B,{xl:12,md:12,xs:"12",className:"d-flex",children:Object(p.jsxs)(r.ib,{className:"d-flex match-height",children:[Object(p.jsxs)(r.B,{md:6,children:[Object(p.jsx)(i.a,{margin:"mt-4"}),Object(p.jsx)(l.a,{className:"py-0",cols:{xl:"6",sm:"6"}})]}),Object(p.jsx)(r.B,{md:6,children:Object(p.jsx)(D.a,{})})]})}),u()&&Object(p.jsxs)(m.Fragment,{children:[Object(p.jsx)(r.B,{xl:"4",md:"4",xs:"12",children:Object(p.jsx)(C,{})}),Object(p.jsx)(r.B,{xl:"4",md:"4",xs:"12",children:Object(p.jsx)(D.a,{})})]})]}),1===parseInt(null===_||void 0===_?void 0:_.rolelevel)&&Object(p.jsxs)(r.ib,{children:[Object(p.jsx)(r.B,{md:4,children:Object(p.jsx)(T,{})}),Object(p.jsx)(r.B,{md:8,children:Object(p.jsx)(E.a,{success:e.colors.success.main,primary:e.colors.primary.main})})]}),Object(p.jsxs)(r.ib,{className:"match-height",children:[Object(p.jsx)(r.B,{xl:"4",md:"6",xs:"12",children:Object(p.jsx)(M,{cols:{xl:"2",sm:"6"}})}),Object(p.jsx)(r.B,{xl:"4",md:"6",xs:"12",children:Object(p.jsx)(w,{cols:{xl:"2",sm:"6"}})}),Object(p.jsx)(r.B,{xl:"4",md:"6",xs:"12",children:Object(p.jsx)(N,{})})]})]})}}}]);
//# sourceMappingURL=63.2b2b9e06.chunk.js.map