(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[143],{1525:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(5),c=a(12),s=a(0),o=a(24),i=a(9),l=a(61),u=a(28),d=a.n(u),m=a(3),j=function(e){var t;return Object(m.jsx)(l.a,{initials:!0,className:"me-1",color:"light-primary",content:e.username?null===(t=e.username)||void 0===t?void 0:t.charAt(0):"T"})},h=function(e){var t=e.totalhours,a=parseFloat(t);a=60*a*60;var n=Math.floor(a/3600);a-=60*n*60;var r=Math.floor(a/60);return n<10&&(n="0".concat(n)),r<10&&(r="0".concat(r)),"".concat(n,"Hrs : ").concat(r,"Mins")},f=function(e){return e?13===e.length?d()(e,"x").format("hh:mm A"):d.a.unix(e).format("hh:mm A"):"-"},b=[{name:"Name",sortable:!1,maxWidth:"300px",cell:function(e){return Object(m.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[j(e),Object(m.jsx)("div",{className:"user-info text-truncate",children:Object(m.jsx)("span",{className:"d-block fw-bold text-truncate",children:e.username})})]})}},{name:"Client",sortable:!1,minWidth:"200px",cell:function(e){return Object(m.jsx)("span",{children:e.clientname?e.clientname:"N/A"})}},{name:"Service",sortable:!1,maxWidth:"2508px",selector:function(e){return e.taskname}},{name:"Date",sortable:!1,minWidth:"132px",selector:function(e){return e.clientname},cell:function(e){return Object(m.jsx)("span",{className:"text-capitalize",children:(t=e.createdon,t?13===t.length?d()(t,"x").format("MMM DD, YYYY"):d.a.unix(t).format("MMM DD, YYYY"):"-")});var t}},{name:"Start Time",minWidth:"132px",sortable:!1,selector:function(e){return e.servicename},cell:function(e){return Object(m.jsx)("span",{className:"text-capitalize",children:f(e.starttime)})}},{name:"End Time",minWidth:"132x",sortable:!1,selector:function(e){return e.priority},cell:function(e){return Object(m.jsx)("span",{className:"text-capitalize",children:f(e.endtime)})}},{name:"Total Hours",minWidth:"138px",sortable:!1,cell:function(e){return Object(m.jsx)("span",{children:h(e)})}}],p=a(747),x=a.n(p),O=(a(737),a(6)),v=a(184),g=a(753),w=a.n(g),N=a(356),y=a(313),D=a(257),S=a(55),k=a(14),M=(a(481),a(741),a(23)),Y=function(e){var t=e.handlePerPage,a=e.rowsPerPage,n=e.handleFilter,r=e.searchTerm,c=e.exportList;return Object(m.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(m.jsxs)(k.ib,{children:[Object(m.jsx)(k.B,{xl:"6",md:"6",sm:"6",className:"d-flex align-items-center p-0",children:Object(m.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(m.jsx)("label",{htmlFor:"rows-per-page",children:"Show"}),Object(m.jsxs)(k.K,{className:"mx-50",type:"select",id:"rows-per-page",value:a,onChange:t,style:{width:"5rem"},children:[Object(m.jsx)("option",{value:"10",children:"10"}),Object(m.jsx)("option",{value:"25",children:"25"}),Object(m.jsx)("option",{value:"50",children:"50"})]}),Object(m.jsx)("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),Object(m.jsxs)(k.B,{xl:"6",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[Object(m.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(m.jsx)("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),Object(m.jsx)(k.K,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:r,onChange:function(e){return n(e.target.value)}})]}),Object(m.jsx)("div",{className:"d-flex align-items-center table-header-actions",children:Object(m.jsxs)(k.wb,{className:"ms-1",children:[Object(m.jsx)(k.G,{color:"secondary",caret:!0,outline:!0,children:Object(m.jsx)(N.a,{className:"font-small-4 me-50"})}),Object(m.jsx)(k.F,{children:Object(m.jsxs)(k.E,{onClick:function(){c()},className:"w-100",children:[Object(m.jsx)(y.a,{className:"font-small-4 me-50"}),Object(m.jsx)("span",{className:"align-middle",children:"Export"})]})})]})})]})]})})};t.default=function(){var e=Object(M.g)().id,t=Object(s.useState)("desc"),a=Object(c.a)(t,2),l=a[0],u=a[1],j=Object(s.useState)(""),h=Object(c.a)(j,2),f=h[0],p=h[1],g=Object(s.useState)([]),N=Object(c.a)(g,2),y=N[0],C=N[1],P=Object(s.useState)(d()().startOf("day").valueOf()),T=Object(c.a)(P,2),F=T[0],I=T[1],E=Object(s.useState)(d()().endOf("day").valueOf()),q=Object(c.a)(E,2),A=q[0],H=q[1],W=Object(s.useState)("createdon"),_=Object(c.a)(W,2),z=_[0],B=_[1],L=Object(s.useState)(10),J=Object(c.a)(L,2),K=J[0],G=J[1],R=Object(s.useState)({id:"",name:"Select Employee"}),U=Object(c.a)(R,2),V=U[0],Q=U[1],X=Object(s.useState)([]),Z=Object(c.a)(X,2),$=Z[0],ee=Z[1],te=function(){var t=Object(r.a)(Object(n.a)().mark((function t(){return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O.a.post("/organizationusers/dropdown").then((function(t){var a=t.data.organizationusers;a.unshift({id:"",name:"Select Employee"}),ee(a),Q(a.find((function(t){return t.id===e})))})).catch((function(e){console.log(e)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ae=function(e){O.a.post("/tasktimesheets/logs",e).then((function(e){C(e.data.tasktimesheets)})).catch((function(e){console.log(e)}))},ne=function(e){var t=e.totalhours,a=parseFloat(t);a=60*a*60;var n=Math.floor(a/3600);a-=60*n*60;var r=Math.floor(a/60);return n<10&&(n="0".concat(n)),r<10&&(r="0".concat(r)),"".concat(n,"Hrs : ").concat(r,"Mins")},re=function(e){return e?13===e.length?d()(e,"x").format("hh:mm A"):d.a.unix(e).format("hh:mm A"):"-"};Object(s.useEffect)((function(){te()}),[]),Object(s.useEffect)(Object(r.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae({sort:l,sortColumn:z,q:f,perPage:K,userId:V.id,startDate:F,endDate:A});case 2:case"end":return e.stop()}}),e)}))),[y.length,l,z]);var ce=function(){var e=Object(r.a)(Object(n.a)().mark((function e(t){var a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=parseInt(t.currentTarget.value),e.next=3,ae({sort:l,sortColumn:z,q:f,perPage:a,userId:V.id,startDate:F,endDate:A});case 3:G(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(r.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t={sort:l,sortColumn:z,q:f,userId:V.id,startDate:F,endDate:A,export:!0},void O.a.post("/tasktimesheets/logs",t).then(function(){var e=Object(r.a)(Object(n.a)().mark((function e(t){var a,r,c,s,l,u;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.data.tasktimesheets.tasktimesheets.map((function(e){var t,a={};return a.username=e.username,a.date=(t=e.createdon)?13===t.length?d()(t,"x").format("MMM DD, YYYY"):d.a.unix(t).format("MMM DD, YYYY"):"-",a.starttime=re(e.starttime),a.endtime=re(e.endtime),a.totalhours=ne(e),a}));case 2:return a=e.sent,e.next=5,i.utils.json_to_sheet(a,{origin:"A2",skipHeader:!0});case 5:r=e.sent,c=[["Name","Date","Start Time","End Time","Total Hours"]],i.utils.sheet_add_aoa(r,c),s={Sheets:{data:r},SheetNames:["data"]},l=i.write(s,{bookType:"xlsx",type:"array"}),u=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"}),o.saveAs(u,"TimeSheet_Logs_Report.xlsx");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}var t}),e)})));return function(){return e.apply(this,arguments)}}(),oe=function(){var e=Object(r.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(t),e.next=3,ae({sort:l,q:t,sortColumn:z,perPage:K,userId:V.id,startDate:F,endDate:A});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(r.a)(Object(n.a)().mark((function e(t,a){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(a),B(t.sortField),e.next=4,ae({sort:l,sortColumn:z,q:f,perPage:K,userId:V.id,startDate:F,endDate:A});case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return Object(m.jsxs)(s.Fragment,{children:[Object(m.jsx)(k.l,{children:Object(m.jsx)(k.m,{children:Object(m.jsxs)(k.ib,{children:[Object(m.jsx)(k.B,{md:"3",children:Object(m.jsx)(v.a,{placeholder:"Select Employee",isClearable:!1,value:V,options:$,className:"react-select",classNamePrefix:"select",theme:S.g,getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id},onChange:function(){var e=Object(r.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Q(t),e.next=3,ae({sort:l,sortColumn:z,q:f,perPage:K,userId:t.id,startDate:F,endDate:A});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})}),Object(m.jsx)(k.B,{md:3,children:Object(m.jsx)(x.a,{placeholder:"Select Date",onChange:function(e){!function(e){var t=d()(new Date(e[0])).startOf("d").valueOf(),a=d()(new Date(e[0])).endOf("d").valueOf();I(t),H(a),""!==t&&""!==a&&ae({sort:l,sortColumn:z,q:f,perPage:K,userId:V.id,startDate:t,endDate:a})}(e)},value:F,options:{altInput:!0,altFormat:"M j, Y",dateFormat:"M j, Y"},className:"due-date-picker"})})]})})}),Object(m.jsx)(k.l,{className:"overflow-hidden",children:Object(m.jsx)("div",{className:"react-dataTable",children:Object(m.jsx)(w.a,{noHeader:!0,subHeader:!0,sortServer:!0,responsive:!0,columns:b,onSort:ie,sortIcon:Object(m.jsx)(D.a,{}),className:"react-dataTable",data:function(){var e={userId:V.id,q:f},t=Object.keys(e).some((function(t){return e[t].length>0}));return y.length>0?y:0===y.length&&t?[]:void 0}(),subHeaderComponent:Object(m.jsx)(Y,{searchTerm:f,rowsPerPage:K,handleFilter:oe,handlePerPage:ce,exportList:se})})})})]})}},737:function(e,t,a){},741:function(e,t,a){}}]);
//# sourceMappingURL=143.c2af0d0f.chunk.js.map