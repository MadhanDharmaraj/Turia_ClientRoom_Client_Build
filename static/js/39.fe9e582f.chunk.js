(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[39],{1407:function(t,n,c){"use strict";c.r(n);var a=c(3),s=c(5),r=c(10),i=c(0),l=c(24),o=c(61),d=c(129),u=c(192),j=c(11),b=c(2),m=function(e){return Object(b.jsx)(o.a,{initials:!0,className:"me-1",color:"light-primary",content:e?null===e||void 0===e?void 0:e.charAt(0).toUpperCase():""})},f=["","light-primary","light-warning"],x=["","Active","Inactive"],O=function(e){return e.length>=20?"".concat(e.substr(0,20),"..."):e},h=[{name:"Business Name",minWidth:"240px",sortable:!0,sortField:"name",selector:function(e){return e.name},cell:function(e){return""!==e.name?Object(b.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[m(e.name),Object(b.jsx)("div",{className:"d-flex flex-column",children:Object(b.jsx)(l.b,{to:"/master/".concat(e.id),className:"user_name text-truncate text-body",onClick:function(){localStorage.setItem("clientId",e.id),d.a.dispatch(Object(u.b)(e.id))},children:Object(b.jsx)("span",{className:"fw-bolder",children:""===e.name?O(e.contactpersonname||""):O(e.name||"")})})})]}):Object(b.jsx)("span",{children:"-"})}},{name:"Contact Person",sortable:!0,minWidth:"240px",sortField:"email",selector:function(e){return e.contactpersonname},cell:function(e){return Object(b.jsx)(l.b,{to:"/master/".concat(e.id),children:Object(b.jsxs)("div",{className:"d-flex justify-content-left text-body",children:[m(e.contactpersonname),Object(b.jsxs)("div",{className:"d-flex flex-column",children:[Object(b.jsx)("span",{className:"fw-bolder text-start",children:O(e.contactpersonname||"")}),Object(b.jsx)("small",{className:"text-truncate text-muted mb-0",children:O(e.email||"")})]})]})})}},{name:"Business Entity",minWidth:"158px",maxWidth:"248px",sortable:!0,sortField:"entityname",selector:function(e){return e.entityname},cell:function(e){return Object(b.jsxs)(l.b,{to:"/master/".concat(e.id),children:[" ",Object(b.jsx)("span",{className:"text-capitalize text-body",children:O(e.entityname||"")})]})}},{name:"Contact",minWidth:"138px",maxWidth:"150px",sortable:!0,sortField:"contactnumber",selector:function(e){return e.contactnumber},cell:function(e){return Object(b.jsxs)(l.b,{to:"/master/".concat(e.id),children:[" ",Object(b.jsx)("span",{className:"text-capitalize text-body",children:e.contactnumber})]})}},{name:"Status",minWidth:"138px",maxWidth:"150px",sortable:!0,sortField:"status",selector:function(e){return x[e.status]},cell:function(e){return Object(b.jsx)(l.b,{to:"/master/".concat(e.id),children:Object(b.jsx)(j.f,{className:"text-capitalize",color:f[e.status],pill:!0,children:x[e.status]})})}}],v=c(703),p=c(704),g=(c(71),c(20)),N=c(733),y=c.n(N),C=c(340),I=c(229),w=c(185),k=c.n(w),S=c(186),F=c.n(S),W=(c(448),c(718),c(19)),q=c(22),z=(F()(k.a),Object(W.a)()),H=Object(W.d)(),E=function(){var t=Object(g.b)(),n=Object(g.c)((function(e){return e.client})),l=Object(i.useState)(!1),o=Object(r.a)(l,2),d=o[0],m=o[1],f=function(){return Object(b.jsx)(i.Fragment,{children:Object(b.jsx)(p.a,{})})},x=Object(q.f)(),O=Object(i.useState)("desc"),N=Object(r.a)(O,2),w=N[0],k=N[1],S=Object(i.useState)(""),F=Object(r.a)(S,2),W=F[0],E=F[1],D="createdon";Object(i.useEffect)((function(){var e,t=null===(e=localStorage.getItem("activeOrganization"))||void 0===e?void 0:e.clientId;t&&x("/master/".concat(t))}),[]),Object(i.useEffect)(Object(s.a)(Object(a.a)().mark((function e(){var n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,t(Object(u.d)({sort:w,sortColumn:D,q:W,assignflag:null!==(n=null===z||void 0===z?void 0:z.assignuserflag)&&void 0!==n&&n,userId:1===parseInt(null===z||void 0===z?void 0:z.rolelevel)?"":H}));case 3:m(!1);case 4:case"end":return e.stop()}}),e)}))),[t]);var L=function(){var n=Object(s.a)(Object(a.a)().mark((function n(){var c;return Object(a.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m(!0),n.next=3,t(Object(u.d)({sort:w,sortColumn:D,q:W,assignflag:null!==(c=null===z||void 0===z?void 0:z.assignuserflag)&&void 0!==c&&c,userId:1===parseInt(null===z||void 0===z?void 0:z.rolelevel)?"":H}));case 3:m(!1),E(e.target.value);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),P=function(){var e=Object(s.a)(Object(a.a)().mark((function e(n,c){var s;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),k(c),setSortColumn(n.sortField),e.next=5,t(Object(u.d)({sort:w,sortColumn:D,q:W,status:currentStatus.id,assignflag:null!==(s=null===z||void 0===z?void 0:z.assignuserflag)&&void 0!==s&&s,userId:1===parseInt(null===z||void 0===z?void 0:z.rolelevel)?"":H}));case 5:m(!1);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){z.clientid&&(localStorage.setItem("clientId",z.clientid),x("/master/".concat(z.clientid)))}),[]),Object(b.jsx)(i.Fragment,{children:Object(b.jsx)(j.l,{className:"faq-search",style:{backgroundImage:"url(".concat(c(764).default,")")},children:Object(b.jsxs)(j.m,{className:"text-center",children:[Object(b.jsx)("h2",{className:"text-primary",children:"ClientPortal"}),Object(b.jsx)(j.u,{className:"mb-2",children:"Client Data, Documents, Licenses, Filing History, DSC, Tasks & Invoices"}),Object(b.jsxs)(j.L,{className:"input-group-merge",children:[Object(b.jsx)(j.M,{children:Object(b.jsx)(C.a,{size:14})}),Object(b.jsx)(j.K,{value:W,onChange:function(e){return L(e)},placeholder:"search faq..."})]}),Object(b.jsx)("div",{className:"react-dataTable",children:Object(b.jsx)(v.a,{blocking:d,loader:Object(b.jsx)(f,{}),children:Object(b.jsx)(y.a,{noHeader:!0,subHeader:!0,sortServer:!0,responsive:!0,highlightOnHover:!0,columns:h,onSort:P,sortIcon:Object(b.jsx)(I.a,{}),className:"react-dataTable",data:n.data.length>0?n.data:[],subHeaderComponent:Object(b.jsx)("div",{className:"d-flex flex-wrap flex-md-nowrap flex-start mb-75 mt-3 w-100",children:Object(b.jsx)("h5",{children:"Client List"})})})})})]})})})};c(724),n.default=function(){return Object(b.jsx)("div",{className:"app-user-list",children:Object(b.jsx)(E,{})})}},703:function(e,t,n){"use strict";var c=n(8),a=n(25),s=n(0),r=n(7),i=n.n(r),l=n(11),o=(n(705),n(2)),d=function(e){var t,n=e.children,r=e.blocking,l=e.loader,d=e.className,u=e.tag,j=e.overlayColor,b=u;return Object(o.jsxs)(b,{className:i()("ui-loader",(t={},Object(a.a)(t,d,d),Object(a.a)(t,"show",r),t)),children:[n,r?Object(o.jsxs)(s.Fragment,{children:[Object(o.jsx)("div",Object(c.a)({className:"overlay"},r&&j?{style:{backgroundColor:j}}:{})),Object(o.jsx)("div",{className:"loader",children:l})]}):null]})};t.a=d,d.defaultProps={tag:"div",blocking:!1,loader:Object(o.jsx)(l.jb,{color:"primary"})}},704:function(e,t,n){"use strict";var c=n(2);t.a=function(){return Object(c.jsx)("div",{className:"fallback-spinner",children:Object(c.jsxs)("div",{className:"loading",children:[Object(c.jsx)("div",{className:"effect-1 effects"}),Object(c.jsx)("div",{className:"effect-2 effects"}),Object(c.jsx)("div",{className:"effect-3 effects"})]})})}},705:function(e,t,n){},718:function(e,t,n){},724:function(e,t,n){},764:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/banner.06ea9907.png"}}]);
//# sourceMappingURL=39.fe9e582f.chunk.js.map