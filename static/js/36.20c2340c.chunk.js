(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[36],{1381:function(e,c,s){"use strict";s.r(c);var t=s(3),n=s(5),l=s(10),a=s(0),r=s(24),i=s(78),j=s(16),d=s(13),b=s(701),o=s(702),m=s(311),x=s(21),O=s(2),h=[{name:"Name",sortable:!1,minWidth:"80px",selector:function(e){return e.name},cell:function(e){return Object(O.jsxs)(d.B,{className:"",children:[e.name||"",e.primarystatus&&Object(O.jsx)(d.f,{className:"ms-75",color:"primary",children:"Primary"})]})}},{name:"Email",minWidth:"230px",sortable:!1,selector:function(e){return e.email},cell:function(e){return Object(O.jsx)("span",{children:e.email||""})}},{name:"Contact",sortable:!1,minWidth:"180px",cell:function(e){return Object(O.jsx)("span",{children:e.contactnumber})}},{name:"Designation",minWidth:"138px",sortable:!0,cell:function(e){return Object(O.jsx)("span",{children:e.designation})}},{name:"Adhar",minWidth:"138px",sortable:!0,cell:function(e){return Object(O.jsx)("span",{children:e.adharnumber})}},{name:"DIN",minWidth:"138px",sortable:!0,cell:function(e){return Object(O.jsx)("span",{children:e.dinnumber})}},{name:"PAN",minWidth:"138px",sortable:!0,cell:function(e){return Object(O.jsx)("span",{children:e.pannumber})}}],u=s(731),f=s.n(u),N=s(228),p=(s(746),s(717),function(e){var c=Object(j.b)(),s=Object(j.c)((function(e){return e.client.clientInformations})),t=Object(x.g)().id;Object(a.useEffect)((function(){"contactInformation"===e.tabId&&c(Object(i.c)(t))}),[e.tabId]);return Object(O.jsx)("div",{className:"invoice-list-wrapper",children:Object(O.jsx)(d.l,{children:Object(O.jsx)("div",{className:"invoice-list-dataTable react-dataTable",children:Object(O.jsx)(f.a,{noHeader:!0,sortServer:!0,columns:h,responsive:!0,data:s,sortIcon:Object(O.jsx)(N.a,{}),className:"react-dataTable",defaultSortField:"invoiceId"})})})})}),g=function(e){var c=e.active,s=e.toggleTab;return Object(O.jsxs)(a.Fragment,{children:[Object(O.jsx)(d.U,{pills:!0,className:"flex-lg-row flex-column mb-2 nav nav-left",children:Object(O.jsx)(d.V,{children:Object(O.jsxs)(d.W,{active:"contactInformation"===c,onClick:function(){return s("contactInformation")},children:[Object(O.jsx)(m.a,{className:"font-medium-3 me-50"}),Object(O.jsx)("span",{className:"fw-bold",children:"Contacts"})]})})}),Object(O.jsx)(d.l,{children:Object(O.jsx)(d.m,{className:"p-1",children:Object(O.jsx)(d.kb,{activeTab:c,children:Object(O.jsx)(d.lb,{tabId:"contactInformation",children:Object(O.jsx)(p,{tabId:c})})})})})]})},w=s(52),v=s(285),y=s(224),C=(s(447),function(e){var c,s,t=e.selectedClient;return Object(O.jsx)(a.Fragment,{children:Object(O.jsxs)(d.l,{children:[Object(O.jsx)(d.p,{children:Object(O.jsxs)(d.B,{className:"d-flex justify-content-between align-items-center border-bottom",children:[Object(O.jsx)("h4",{className:"fw-bolder pb-50 text-primary",children:t.name}),Object(O.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(O.jsx)(w.b,{I:"write",a:"client",children:Object(O.jsx)(d.B,{tag:r.b,to:"/clients/edit/".concat(t.id),children:Object(O.jsx)(v.a,{className:"cursor-pointer",size:16})})}),Object(O.jsx)(d.B,{tag:r.b,to:"/clients/list",children:Object(O.jsx)(y.a,{className:"cursor-pointer ms-1",size:16})})]})]})}),Object(O.jsx)(d.m,{children:Object(O.jsxs)(d.ib,{children:[Object(O.jsx)(d.B,{className:"info-container border-end",md:6,sm:12,lg:6,children:null!==t?Object(O.jsxs)("ul",{className:"list-unstyled",children:[Object(O.jsxs)("li",{className:"mb-75 row",children:[Object(O.jsx)("span",{className:"fw-bolder col-6",children:"Contact Person Name:"}),Object(O.jsx)("span",{className:"col-6 text-end",children:t.contactpersonname})]}),Object(O.jsxs)("li",{className:"mb-75 row",children:[Object(O.jsx)("span",{className:"fw-bolder col-6",children:"Registration No:"}),Object(O.jsx)("span",{className:"col-6 text-end",children:t.registrationno})]}),Object(O.jsxs)("li",{className:"mb-75 row",children:[Object(O.jsx)("span",{className:"fw-bolder col-6",children:"Referred By:"}),Object(O.jsx)("span",{className:"col-6 text-end",children:t.referredby||""})]}),Object(O.jsxs)("li",{className:"mb-75 row",children:[Object(O.jsx)("span",{className:"fw-bolder col-6",children:"Email:"}),Object(O.jsx)("span",{className:"col-6 text-end",children:t.email})]}),Object(O.jsxs)("li",{className:"mb-75 row",children:[Object(O.jsx)("span",{className:"fw-bolder col-6",children:"Contact:"}),Object(O.jsx)("span",{className:"col-6 text-end",children:t.contactnumber})]}),Object(O.jsxs)("li",{className:"mb-75 row",children:[Object(O.jsx)("span",{className:"fw-bolder col-6",children:"Business Entity:"}),Object(O.jsx)("span",{className:"col-6 text-end",children:t.businessentitiesname})]})]}):null}),Object(O.jsx)(d.B,{className:"info-container",md:6,sm:12,lg:6,children:Object(O.jsxs)("ul",{className:"list-unstyled",children:[Object(O.jsxs)("li",{className:"mb-75 row",children:[Object(O.jsx)("span",{className:"fw-bolder col-6",children:"Currency:"}),Object(O.jsxs)("span",{className:"col-6 text-end",children:[t.currenciesname," ",t.currenciescode]})]}),Object(O.jsxs)("li",{className:"mb-75 row",children:[Object(O.jsx)("span",{className:"fw-bolder col-6",children:"Place of Supply:"}),Object(O.jsx)("span",{className:"col-6 text-end",children:"IN"===t.billingaddresscountriesshorcode?null!==(c=t.placeofsupplyname)&&void 0!==c?c:"":t.placeofsupplyothers})]}),Object(O.jsxs)("li",{className:"mb-75 row",children:[Object(O.jsx)("span",{className:"fw-bolder col-6",children:"GSTIN Register Type:"}),Object(O.jsx)("span",{className:"col-6 text-end",children:t.gstregistrationtypesname})]}),Object(O.jsxs)("li",{className:"mb-75 row",children:[Object(O.jsx)("span",{className:"fw-bolder col-6",children:"GSTIN:"}),Object(O.jsx)("span",{className:"col-6 text-end",children:t.gstin})]}),Object(O.jsxs)("li",{className:"mb-75 row",children:[Object(O.jsx)("span",{className:"fw-bolder col-6",children:"Address Line 1:"}),Object(O.jsx)("span",{className:"col-6 text-end",children:t.billingaddressline1})]}),Object(O.jsxs)("li",{className:"mb-75 row",children:[Object(O.jsx)("span",{className:"fw-bolder col-6",children:"Address Line 2:"}),Object(O.jsx)("span",{className:"col-6 text-end",children:t.billingaddressline2})]}),Object(O.jsx)("li",{className:"mb-75 row",children:Object(O.jsxs)(d.ib,{className:"d-flex justify-content-between",children:[Object(O.jsxs)(d.B,{children:[Object(O.jsx)("span",{className:"fw-bolder col-6",children:"City:"}),Object(O.jsx)("span",{className:"col-6 text-end",children:t.billingaddresscity})]}),Object(O.jsxs)(d.B,{children:[Object(O.jsx)("span",{className:"fw-bolder col-6",children:"Zip Code:"}),Object(O.jsx)("span",{className:"col-6 text-end",children:t.billingaddresszip})]})]})}),Object(O.jsx)("li",{className:"mb-75 row",children:Object(O.jsxs)(d.ib,{className:"d-flex justify-content-between",children:[Object(O.jsxs)(d.B,{children:[Object(O.jsx)("span",{className:"fw-bolder col-6",children:"State:"}),Object(O.jsx)("span",{className:"col-6 text-end",children:"IN"===t.billingaddresscountriesshorcode?null!==(s=t.billingaddressstatesname)&&void 0!==s?s:"":t.billingaddressstateothers})]}),Object(O.jsxs)(d.B,{children:[Object(O.jsx)("span",{className:"fw-bolder col-6",children:"Country:"}),Object(O.jsx)("span",{className:"col-6 text-end",children:t.billingaddresscountriesname})]})]})})]})})]})})]})})});s(720),c.default=function(){var e=Object(a.useState)(!1),c=Object(l.a)(e,2),s=c[0],m=c[1],x=function(){return Object(O.jsx)(a.Fragment,{children:Object(O.jsx)(o.a,{})})},h=Object(j.c)((function(e){return e.client})),u=Object(j.b)(),f=localStorage.getItem("clientId");Object(a.useEffect)(Object(n.a)(Object(t.a)().mark((function e(){return Object(t.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===f){e.next=5;break}return m(!0),e.next=4,u(Object(i.b)(f));case 4:m(!1);case 5:case"end":return e.stop()}}),e)}))),[u]);var N=Object(a.useState)("contactInformation"),p=Object(l.a)(N,2),w=p[0],v=p[1];return null!==h.selectedClient&&void 0!==h.selectedClient?Object(O.jsx)(b.a,{blocking:s,loader:Object(O.jsx)(x,{}),children:Object(O.jsx)("div",{className:"app-user-view",children:Object(O.jsxs)(d.ib,{children:[Object(O.jsx)(d.B,{xl:"12",lg:"12",xs:{order:0},md:{order:0,size:5},sm:{order:0},children:Object(O.jsx)(C,{selectedClient:h.selectedClient})}),Object(O.jsx)(d.B,{xl:"12",lg:"12",xs:{order:1},md:{order:1,size:7},sm:{order:1},children:Object(O.jsx)(g,{active:w,toggleTab:function(e){w!==e&&v(e)},selectedClient:h.selectedClient})})]})})}):Object(O.jsx)(b.a,{blocking:s,loader:Object(O.jsx)(x,{}),children:Object(O.jsxs)(d.e,{color:"danger",children:[Object(O.jsx)("h4",{className:"alert-heading",children:"Client not found"}),Object(O.jsxs)("div",{className:"alert-body",children:["Client with id: ",f," doesn't exist. Check list of all Clients: ",Object(O.jsx)(r.b,{to:"/clients/list",children:"Clients List"})]})]})})}},701:function(e,c,s){"use strict";var t=s(8),n=s(23),l=s(0),a=s(7),r=s.n(a),i=s(13),j=(s(703),s(2)),d=function(e){var c,s=e.children,a=e.blocking,i=e.loader,d=e.className,b=e.tag,o=e.overlayColor,m=b;return Object(j.jsxs)(m,{className:r()("ui-loader",(c={},Object(n.a)(c,d,d),Object(n.a)(c,"show",a),c)),children:[s,a?Object(j.jsxs)(l.Fragment,{children:[Object(j.jsx)("div",Object(t.a)({className:"overlay"},a&&o?{style:{backgroundColor:o}}:{})),Object(j.jsx)("div",{className:"loader",children:i})]}):null]})};c.a=d,d.defaultProps={tag:"div",blocking:!1,loader:Object(j.jsx)(i.jb,{color:"primary"})}},702:function(e,c,s){"use strict";var t=s(2);c.a=function(){return Object(t.jsx)("div",{className:"fallback-spinner",children:Object(t.jsxs)("div",{className:"loading",children:[Object(t.jsx)("div",{className:"effect-1 effects"}),Object(t.jsx)("div",{className:"effect-2 effects"}),Object(t.jsx)("div",{className:"effect-3 effects"})]})})}},703:function(e,c,s){},717:function(e,c,s){},720:function(e,c,s){},746:function(e,c,s){}}]);
//# sourceMappingURL=36.20c2340c.chunk.js.map