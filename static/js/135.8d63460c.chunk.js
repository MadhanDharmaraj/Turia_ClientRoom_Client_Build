(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[135],{1396:function(e,t,c){"use strict";c.r(t);var n=c(8),s=c(2),a=c(5),r=c(12),i=c(10),l=c(0),j=c(70),b=c(14),o=c(742),d=c(744),u=c(745),O=c(13),m=c(245),f=c(185),x=c.n(f),h=c(186),g=c.n(h),p=c(7),v=c.n(p),N=c(21),y=c(365),k=c(319),w=c(316),B=c(387),C=c(735),S=c(736),z=c(3),I=Object(O.b)(),D=Object(O.d)();t.default=function(e){Object(i.a)(e);var t=g()(x.a),c=Object(l.useState)([]),O=Object(r.a)(c,2),f=O[0],h=O[1],p=Object(l.useState)(null),A=Object(r.a)(p,2),E=A[0],F=A[1],q=Object(l.useState)(!1),J=Object(r.a)(q,2),P=J[0],R=J[1],T=Object(N.b)(),Y=Object(N.c)((function(e){return e.designation})),H=Object(l.useState)(!1),K=Object(r.a)(H,2),M=K[0],Q=K[1],U=function(){return Object(z.jsx)(l.Fragment,{children:Object(z.jsx)(S.a,{})})},V=d.d().shape({organizationId:d.f().default(I),name:d.f().required("Please Enter Designation"),updatedBy:d.f().default(D),createdBy:d.f().default(D)}),$=Object(o.f)({resolver:Object(u.a)(V),defaultValues:V.cast()}),G=$.handleSubmit,L=$.formState.errors,W=$.control,X=$.reset,Z=function(){var e=Object(a.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:X({organizationId:I,id:null,name:""}),R(!1),F(null);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(a.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Q(!0),null===E){e.next=8;break}return e.next=4,T(Object(m.e)(t));case 4:Z(),F(null),e.next=11;break;case 8:return e.next=10,T(Object(m.a)(t));case 10:Z();case 11:return e.next=13,T(Object(m.d)());case 13:Q(!1);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(l.useEffect)(Object(a.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(Object(m.d)());case 2:case"end":return e.stop()}}),e)}))),[]);return Object(l.useEffect)((function(){h(Y.data)}),[Y.data]),Object(z.jsx)(l.Fragment,{children:Object(z.jsx)(b.l,{children:Object(z.jsx)(b.m,{className:"py-25",children:Object(z.jsxs)(b.ib,{className:"gx-4",children:[Object(z.jsx)(b.ib,{className:"mb-50",children:Object(z.jsx)(b.B,{children:Object(z.jsxs)(b.i,{color:"primary",size:"sm",onClick:function(){R(!0)},children:[" ",Object(z.jsx)(y.a,{size:15}),"Add"]})})}),Object(z.jsx)(b.B,{lg:"12",className:"mt-2 mt-lg-0",children:Object(z.jsxs)(b.mb,{className:"table table-bordered table-hover",children:[Object(z.jsx)("thead",{children:Object(z.jsxs)("tr",{children:[Object(z.jsx)("th",{children:"Name"}),Object(z.jsx)("th",{children:"Status"}),Object(z.jsx)("th",{children:"No of Users"}),Object(z.jsx)("th",{children:"Actions"})]})}),Object(z.jsx)("tbody",{children:f.map((function(e,c){return Object(z.jsxs)("tr",{className:v()("cardMaster rounded border p-2"),children:[Object(z.jsx)("td",{className:"mb-0",children:e.name}),Object(z.jsx)("td",{children:1===e.status?Object(z.jsx)(b.f,{color:"light-success",className:"ms-50",children:"Active"}):Object(z.jsx)(b.f,{color:"light-danger",className:"ms-50",children:"InActive"})}),Object(z.jsx)("td",{children:e.noofusers}),Object(z.jsx)("td",{children:Object(z.jsx)(j.b,{I:"write",a:"designation",children:Object(z.jsxs)("div",{className:"d-flex",children:[Object(z.jsx)(k.a,{size:15,className:"me-75"}),!e.isdefault&&Object(z.jsxs)("div",{className:"d-flex order-sm-0 order-1 mt-1 mt-sm-0",children:[Object(z.jsx)(w.a,{size:15,className:"me-75",onClick:function(){return function(e){F(e),R(!0),X({organizationId:I,id:e.id,name:e.name})}(e)}}),Object(z.jsx)(B.a,{size:15,outline:!0,onClick:function(){var c;c=e.id,t.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(){var e=Object(a.a)(Object(s.a)().mark((function e(n){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.value){e.next=9;break}return e.next=3,T(Object(m.c)(c));case 3:return t.fire({icon:"success",title:"Deleted!",text:"Designation has been deleted.",customClass:{confirmButton:"btn btn-success"}}),e.next=6,T(Object(m.d)());case 6:return e.abrupt("return",!0);case 9:if(n.dismiss!==t.DismissReason.cancel){e.next=11;break}return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}})]})]})})})]},c)}))})]})}),Object(z.jsx)(b.Q,{isOpen:P,toggle:function(){return R(!P)},className:"modal-dialog-centered modal-lg",children:Object(z.jsxs)(C.a,{blocking:M,loader:Object(z.jsx)(U,{}),children:[Object(z.jsx)(b.T,{className:"bg-transparent",toggle:function(){return R(!P)},children:"Designation"}),Object(z.jsxs)(b.R,{children:[Object.keys(L).map((function(e){var t;return Object(z.jsxs)(b.I,{children:["$",null===(t=L[e])||void 0===t?void 0:t.message]},e)})),Object(z.jsxs)(b.ib,{tag:b.H,className:"gx-2 gy-1",onSubmit:G(_),children:[function(e,t){var c=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return Object(z.jsxs)(b.B,{md:12,children:[Object(z.jsx)(b.N,{sm:"12",className:v()("form-label ".concat(c?"required":"")),for:t,children:e}),Object(z.jsxs)(b.B,{children:[Object(z.jsx)(o.a,{id:t,name:t,control:W,render:function(e){var c=e.field;return Object(z.jsx)(b.K,Object(n.a)({invalid:L[t]&&!0},c))}}),L[t]&&Object(z.jsx)(b.I,{children:L[t].message})]})]})}("Designation","name"),Object(z.jsxs)(b.B,{className:"mt-2 pt-1",xs:12,children:[Object(z.jsx)(b.i,{type:"submit",className:"me-1",color:"primary",children:"Submit"}),Object(z.jsx)(b.i,{type:"button",color:"warning",onClick:Z,children:"Cancel"})]})]})]})]})})]})})})})}},735:function(e,t,c){"use strict";var n=c(8),s=c(27),a=c(0),r=c(7),i=c.n(r),l=c(14),j=(c(738),c(3)),b=function(e){var t,c=e.children,r=e.blocking,l=e.loader,b=e.className,o=e.tag,d=e.overlayColor,u=o;return Object(j.jsxs)(u,{className:i()("ui-loader",(t={},Object(s.a)(t,b,b),Object(s.a)(t,"show",r),t)),children:[c,r?Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)("div",Object(n.a)({className:"overlay"},r&&d?{style:{backgroundColor:d}}:{})),Object(j.jsx)("div",{className:"loader",children:l})]}):null]})};t.a=b,b.defaultProps={tag:"div",blocking:!1,loader:Object(j.jsx)(l.jb,{color:"primary"})}},736:function(e,t,c){"use strict";var n=c(3);t.a=function(){return Object(n.jsx)("div",{className:"fallback-spinner",children:Object(n.jsxs)("div",{className:"loading",children:[Object(n.jsx)("div",{className:"effect-1 effects"}),Object(n.jsx)("div",{className:"effect-2 effects"}),Object(n.jsx)("div",{className:"effect-3 effects"})]})})}},738:function(e,t,c){}}]);
//# sourceMappingURL=135.8d63460c.chunk.js.map