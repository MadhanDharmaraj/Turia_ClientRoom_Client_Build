(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[84],{1404:function(e,t,n){"use strict";n.r(t);var a=n(16),c=n(10),s=n(0),l=n(7),r=n.n(l),d=n(11),o=n(8),i=(n(34),n(1286)),b=n(923),f=n(854),v=n(926),u=n(928),p=n(183),j=n(262),m=n(263),h=n(319),x=n(22),O=n(19),g=n(2),k=["",["","#7367f01f","#28c76f1f","#28c76f1f","#00cfe81f","#ff9f431f","#ea54551f","#5e318d1f"],"#c13ab41f","#e366de1f","#67bda61f"],y=["",["","#7367f0","#28c76f","#28c76f","#00cfe8","#ff9f43","#ea5455","#5e318d"],"#c13ab4","#e366de","#67bda6"],w=n(817).default,N=Object(O.d)(),C=function(e){var t=Object(x.f)(),n=function(e){t(e)},a=Object(s.useRef)(null),l=e.store,r=e.isRtl,O=e.dispatch,C=e.calendarApi,P=e.setCalendarApi,E=e.blankEvent,T=e.toggleSidebar,A=e.selectEvent,R=e.updateEvent,D=e.dateChange;Object(s.useEffect)((function(){null===C&&P(a.current.getApi())}),[C]);var M=Object(s.useState)(window.innerWidth),S=Object(c.a)(M,2),L=S[0],z=S[1],F=function(){z(window.innerWidth)};Object(s.useEffect)((function(){return window.addEventListener("resize",F),function(){window.removeEventListener("resize",F)}}),[]);var H={events:l.events.length?l.events:[],plugins:[u.a,f.b,v.a,b.a],initialView:L>=768?"dayGridMonth":"listMonth",headerToolbar:{start:"customprev, title, customnext",end:L>=768?"dayGridMonth,listMonth":""},editable:!0,displayEventTime:!1,eventDisplay:"block",eventResizableFromStart:!0,dragScroll:!0,dayMaxEvents:2,navLinks:!0,eventContent:function(e){e.backgroundColor="1"!==e.event.extendedProps.eventtype?k[e.event.extendedProps.eventtype]:k[e.event.extendedProps.eventtype][e.event.extendedProps.taskstatus],e.borderColor="1"!==e.event.extendedProps.eventtype?k[e.event.extendedProps.eventtype]:k[e.event.extendedProps.eventtype][e.event.extendedProps.taskstatus];var t=document.createElement("div");return t.innerHTML="\n        <span class='d-flex ".concat("listMonth"===e.view.type?"":"text-white"," ' style='color: ").concat("1"!==e.event.extendedProps.eventtype?y[e.event.extendedProps.eventtype]:y[e.event.extendedProps.eventtype][e.event.extendedProps.taskstatus]," !important'>          \n        ").concat(e.event.extendedProps.recurringflag?'<img class="image-repeat width-10-per" src="'.concat(w,'" />'):""," \n          <p class='mb-0 ms-25 text-truncate'>").concat(e.event.title,"<p>\n        </span>"),{domNodes:[t]}},eventClick:function(e){var t=e.event;"5"===t.extendedProps.eventtype?n("/compliance/view/".concat(t.id)):"1"===t.extendedProps.eventtype?n("/task/view/".concat(t.id)):"4"===t.extendedProps.eventtype?n("/profile/view/".concat(N,"?tabId=profileholidays")):"3"===t.extendedProps.eventtype&&n("/todo")},customButtons:{customprev:{text:Object(g.jsx)(j.a,{}),click:function(){var e=a.current.getApi();e.prev(),D(e.getDate())}},customnext:{text:Object(g.jsx)(m.a,{}),click:function(){var e=a.current.getApi();e.next(),D(e.getDate())}},sidebarToggle:{text:Object(g.jsx)(h.a,{className:"d-xl-none d-block"}),click:function(){T(!0)}}},dateClick:function(e){var t=null!==E&&void 0!==E?E:{};t.start=e.date,t.end=e.date,O(A(t))},eventDrop:function(e){var t=e.event;"2"===t.extendedProps.eventtype?(t.remove(),p.b.error("Recurring Task can't set date in Calendar. Please Update in Service tab.")):p.b.success("Event Updated"),O(R(t))},eventResize:function(e){var t=e.event;O(R(t)),p.b.success("Event Updated")},ref:a,direction:r?"rtl":"ltr"};return Object(g.jsx)(d.l,{className:"shadow-none border-0 mb-0 rounded-0",children:Object(g.jsxs)(d.m,{className:"pb-0",children:[Object(g.jsx)(i.a,Object(o.a)({},H))," "]})})},P=Object(s.memo)(C),E=n(25),T=n(20),A=n(200),R=n(818),D=[{label:"Tasks",color:"primary",className:"form-check-primary mb-1"},{label:"Recurring Tasks",color:"color-code2",className:"form-check-color-code1 mb-1"},{label:"To Do",color:"color-code2",className:"form-check-color-code2 mb-1"},{label:"Holidays",color:"color-code3",className:"form-check-color-code3 mb-1"}],M=function(e){var t=e.store,n=e.filterLable,a=Object(T.b)();return Object(g.jsxs)(s.Fragment,{children:[Object(g.jsx)("div",{className:"sidebar-wrapper",children:Object(g.jsxs)(d.m,{children:[Object(g.jsx)("h5",{className:"section-label mb-1",children:Object(g.jsx)("span",{className:"align-middle",children:"Filter"})}),Object(g.jsxs)("div",{className:"form-check mb-1",children:[Object(g.jsx)(d.K,{id:"view-all",type:"checkbox",label:"View All",onChange:function(e){!function(e){e.target.checked?a(Object(A.c)(["To Do","Holidays","Recurring Task","Tasks"])):a(Object(A.c)([]))}(e)},className:"select-all",defaultChecked:t.selectedCalendars.length===D.length}),Object(g.jsx)(d.N,{className:"form-check-label",for:"view-all",children:"View All"})]}),Object(g.jsx)("div",{className:"calendar-events-filter",children:D.length&&D.map((function(e){return Object(g.jsxs)("div",{className:r()("form-check",Object(E.a)({},e.className,e.className)),children:[Object(g.jsx)(d.K,{type:"checkbox",color:e.color,label:e.label,className:"input-filter",id:"".concat(e.label,"-event"),defaultChecked:t.selectedCalendars.includes(e.label),onChange:function(){var t;t=e.label,n(t)}},e.label),Object(g.jsx)(d.N,{className:"form-check-label",for:"".concat(e.label,"-event"),children:e.label})]},"".concat(e.label,"-key"))}))})]})}),Object(g.jsx)("div",{className:"mt-auto",children:Object(g.jsx)("img",{className:"img-fluid",src:R.default,alt:"illustration"})})]})},S=n(65),L=(n(929),n(39)),z=n.n(L),F=Object(O.d)(),H={Reminders:"primary",Holidays:"success","Compliance Alerts":"danger",Tasks:"warning"};t.default=function(){var e=Object(T.b)(),t=Object(T.c)((function(e){return e.calendar})),n=Object(s.useState)(null),l=Object(c.a)(n,2),o=l[0],i=l[1],b=Object(s.useState)(t.selectedCalendars),f=Object(c.a)(b,2),v=f[0],u=f[1],p=Object(S.a)(),j=Object(c.a)(p,1)[0],m=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,a={userId:F,filter:0===v.length?t.selectedCalendars:v,startdate:z()(n).startOf("month").startOf("d").valueOf(),enddate:z()(n).endOf("month").endOf("d").valueOf()};e(Object(A.b)(a))};Object(s.useEffect)((function(){m(o?o.getDate():void 0)}),[v]);return Object(g.jsx)(s.Fragment,{children:Object(g.jsx)("div",{className:"app-calendar overflow-hidden border",children:Object(g.jsxs)(d.ib,{className:"g-0",children:[Object(g.jsx)(d.B,{id:"app-calendar-sidebar",className:r()("col app-calendar-sidebar flex-grow-0 overflow-hidden d-flex flex-column"),children:Object(g.jsx)(M,{store:t,dispatch:e,filterLable:function(e){if(-1===v.indexOf(e))u([].concat(Object(a.a)(v),[e]));else{var t=v.indexOf(e),n=Object(a.a)(v);n.splice(parseInt(t),1),u(Object(a.a)(n))}}})}),Object(g.jsx)(d.B,{className:"position-relative",children:Object(g.jsx)(P,{isRtl:j,store:t,dispatch:e,calendarApi:o,selectEvent:A.d,updateEvent:A.e,dateChange:function(e){m(e)},calendarsColor:H,setCalendarApi:i})})]})})})}},817:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/repeat.56237a69.svg"},818:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/calendar-illustration.42be42ce.png"},929:function(e,t,n){}}]);
//# sourceMappingURL=84.eb1ac9a4.chunk.js.map