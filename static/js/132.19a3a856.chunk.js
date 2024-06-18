(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[132],{1392:function(e,t,c){"use strict";c.r(t);var n=c(8),s=c(2),a=c(5),r=c(12),i=c(0),l=c(14),j=c(6),o=c(742),b=c(744),d=c(745),u=c(13),m=c(244),O=c(185),f=c.n(O),h=c(186),x=c.n(h),p=c(7),g=c.n(p),v=c(21),N=c(187),y=c(365),k=c(316),w=c(387),B=c(735),S=c(736),C=c(3),z=Object(u.b)(),R=Object(u.d)();t.default=function(){var e=x()(f.a),t=Object(i.useState)([]),c=Object(r.a)(t,2),u=c[0],O=c[1],h=Object(i.useState)(null),p=Object(r.a)(h,2),A=p[0],I=p[1],D=Object(i.useState)(!1),E=Object(r.a)(D,2),F=E[0],q=E[1],J=function(){return Object(C.jsx)(i.Fragment,{children:Object(C.jsx)(S.a,{})})},P=Object(i.useState)(!1),T=Object(r.a)(P,2),Y=T[0],H=T[1],K=Object(v.b)(),Q=b.d().shape({organizationId:b.f().default(z),name:b.f().required("Please Enter Reimbursement"),updatedBy:b.f().default(R),createdBy:b.f().default(R)}),U=Object(o.f)({resolver:Object(d.a)(Q),defaultValues:Q.cast()}),V=U.handleSubmit,$=U.formState.errors,G=U.control,L=U.reset,M=function(){j.a.post("/reimbursement/list").then((function(e){O(e.data.reimbursement)})).catch((function(e){console.log(e)}))},W=function(){H(!1),L({organizationId:z,id:"",name:""})},X=function(){var e=Object(a.a)(Object(s.a)().mark((function e(t){var c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q(!0),null===A){e.next=9;break}return e.next=4,K(Object(m.d)(t));case 4:L({name:""}),c="Added",I(null),e.next=13;break;case 9:return e.next=11,K(Object(m.a)(t));case 11:c="Updated",L({name:""});case 13:W(),q(!1),N.b.success("Reimbursement Reason ".concat(c," Succesfully"),{position:"bottom-right"}),M();case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(i.useEffect)(Object(a.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M();case 1:case"end":return e.stop()}}),e)}))),[]);return Object(C.jsx)(i.Fragment,{children:Object(C.jsx)(B.a,{blocking:F,loader:Object(C.jsx)(J,{}),children:Object(C.jsxs)(l.l,{children:[Object(C.jsxs)(l.p,{className:"d-flex justify-content-between",children:[Object(C.jsx)("h5",{children:"Reimbursement"}),Object(C.jsxs)(l.i,{color:"primary",size:"sm",onClick:function(){H(!0)},children:[" ",Object(C.jsx)(y.a,{size:15}),"Add"]})]}),Object(C.jsx)(l.m,{className:"py-25",children:Object(C.jsxs)(l.ib,{className:"gx-4",children:[Object(C.jsx)(l.B,{lg:"12",className:"mt-2 mt-lg-0",children:Object(C.jsxs)(l.mb,{className:"table table-hover table-bordered",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"Name"}),Object(C.jsx)("th",{children:"Status"}),Object(C.jsx)("th",{children:"Actions"})]})}),Object(C.jsx)("tbody",{children:u.map((function(t,c){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{className:"mb-0",children:t.name}),Object(C.jsx)("td",{children:"1"===t.status?Object(C.jsx)(l.f,{color:"light-success",className:"ms-50",children:"Active"}):Object(C.jsx)(l.f,{color:"light-danger",className:"ms-50",children:"InActive"})}),Object(C.jsx)("td",{className:"",children:null!==t.organizationid&&Object(C.jsxs)("div",{className:"d-flex",children:[Object(C.jsx)(k.a,{size:15,className:"me-75",onClick:function(){return function(e){I(e),H(!0),L({organizationId:z,id:e.id,name:e.name})}(t)},children:"Edit"}),Object(C.jsx)(w.a,{size:15,onClick:function(){var c;c=t.id,e.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(){var t=Object(a.a)(Object(s.a)().mark((function t(n){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.value){t.next=8;break}return t.next=3,K(Object(m.c)(c));case 3:return e.fire({icon:"success",title:"Deleted!",text:"Account has been deleted.",customClass:{confirmButton:"btn btn-success"}}),M(),t.abrupt("return",!0);case 8:if(n.dismiss!==e.DismissReason.cancel){t.next=10;break}return t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},children:"Delete"})]})})]},c)}))})]})}),Object(C.jsxs)(l.Q,{isOpen:Y,toggle:function(){return H(!Y)},className:"modal-dialog-centered",children:[Object(C.jsx)(l.T,{toggle:function(){return W()},children:"Reimbursement Name"}),Object(C.jsx)(l.R,{children:Object(C.jsxs)(l.ib,{lg:"12",children:[Object.keys($).map((function(e){var t;return Object(C.jsxs)(l.I,{children:["$",null===(t=$[e])||void 0===t?void 0:t.message]},e)})),Object(C.jsxs)(l.ib,{tag:l.H,className:"gx-2 gy-1",onSubmit:V(X),children:[function(e,t){var c=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return Object(C.jsxs)(l.B,{md:12,children:[Object(C.jsx)(l.N,{sm:"12",className:g()("form-label ".concat(c?"required":"")),for:t,children:e}),Object(C.jsxs)(l.B,{children:[Object(C.jsx)(o.a,{id:t,name:t,control:G,render:function(e){var c=e.field;return Object(C.jsx)(l.K,Object(n.a)({invalid:$[t]&&!0},c))}}),$[t]&&Object(C.jsx)(l.I,{children:$[t].message})]})]})}("Reimbursement Name","name"),Object(C.jsxs)(l.B,{className:"mt-2 pt-1",xs:12,children:[Object(C.jsx)(l.i,{type:"submit",className:"me-1",color:"primary",children:"Submit"}),Object(C.jsx)(l.i,{type:"button",className:"me-1",color:"warning",onClick:function(){return W()},children:"Cancel"})]})]})]})})]})]})})]})})})}},735:function(e,t,c){"use strict";var n=c(8),s=c(27),a=c(0),r=c(7),i=c.n(r),l=c(14),j=(c(738),c(3)),o=function(e){var t,c=e.children,r=e.blocking,l=e.loader,o=e.className,b=e.tag,d=e.overlayColor,u=b;return Object(j.jsxs)(u,{className:i()("ui-loader",(t={},Object(s.a)(t,o,o),Object(s.a)(t,"show",r),t)),children:[c,r?Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)("div",Object(n.a)({className:"overlay"},r&&d?{style:{backgroundColor:d}}:{})),Object(j.jsx)("div",{className:"loader",children:l})]}):null]})};t.a=o,o.defaultProps={tag:"div",blocking:!1,loader:Object(j.jsx)(l.jb,{color:"primary"})}},736:function(e,t,c){"use strict";var n=c(3);t.a=function(){return Object(n.jsx)("div",{className:"fallback-spinner",children:Object(n.jsxs)("div",{className:"loading",children:[Object(n.jsx)("div",{className:"effect-1 effects"}),Object(n.jsx)("div",{className:"effect-2 effects"}),Object(n.jsx)("div",{className:"effect-3 effects"})]})})}},738:function(e,t,c){}}]);
//# sourceMappingURL=132.19a3a856.chunk.js.map