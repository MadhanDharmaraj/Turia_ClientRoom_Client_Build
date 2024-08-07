(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[80],{1427:function(e,t,n){"use strict";n.r(t);var c=n(8),a=n(3),r=n(5),s=n(9),i=n(0),o=n(13),u=n(6),l=n(705),d=n(708),j=n(709),b=n(16),m=n(4),p=Object(b.d)(),f=Object(m.b)("appInvoiceSetting/getData",function(){var e=Object(r.a)(Object(a.a)().mark((function e(t){var n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("/transactionaccounts/list",t);case 2:return n=e.sent,e.abrupt("return",{params:t,data:n.data.exemptionreason});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),O=Object(m.b)("appInvoiceSetting/addExemption",function(){var e=Object(r.a)(Object(a.a)().mark((function e(t,n){var c,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.dispatch,r=n.getState,e.next=3,u.a.post("/exemptionreasons/create",t);case 3:return e.next=5,c(f(r().invoiceaccount.params));case 5:return e.abrupt("return",[]);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),x=Object(m.b)("appInvoiceSetting/updateExemption",function(){var e=Object(r.a)(Object(a.a)().mark((function e(t,n){var c,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.dispatch,r=n.getState,e.next=3,u.a.post("/exemptionreasons/update",t);case 3:return e.next=5,c(f(r().invoiceaccount.params));case 5:return e.abrupt("return",[]);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),h=Object(m.b)("appInvoiceSetting/deleteExemption",function(){var e=Object(r.a)(Object(a.a)().mark((function e(t,n){var c,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.dispatch,r=n.getState,e.next=3,u.a.post("/exemptionreasons/delete",{id:t,updatedBy:p});case 3:return e.next=5,c(f(r().invoiceaccount.params));case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),v=(Object(m.c)({name:"appInvoiceSetting",initialState:{data:[],total:1,params:{},allData:[]},reducers:{},extraReducers:function(e){e.addCase(f.fulfilled,(function(e,t){e.data=t.payload.data,e.params=t.payload.params}))}}).reducer,n(184)),g=n.n(v),y=n(185),N=n.n(y),k=n(7),w=n.n(k),S=n(17),B=n(183),C=n(334),E=n(286),I=n(355),z=n(702),R=n(703),A=n(2),D=Object(b.b)(),F=Object(b.d)();t.default=function(){var e=N()(g.a),t=Object(i.useState)([]),n=Object(s.a)(t,2),b=n[0],m=n[1],p=Object(i.useState)(null),f=Object(s.a)(p,2),v=f[0],y=f[1],k=Object(i.useState)(!1),q=Object(s.a)(k,2),J=q[0],P=q[1],T=function(){return Object(A.jsx)(i.Fragment,{children:Object(A.jsx)(R.a,{})})},Y=Object(i.useState)(!1),H=Object(s.a)(Y,2),K=H[0],Q=H[1],U=Object(S.b)(),V=d.d().shape({organizationId:d.f().default(D),name:d.f().required("Please Enter Exemption"),updatedBy:d.f().default(F),createdBy:d.f().default(F)}),$=Object(l.f)({resolver:Object(j.a)(V),defaultValues:V.cast()}),G=$.handleSubmit,L=$.formState.errors,M=$.control,W=$.reset,X=function(){u.a.post("/exemptionreasons/list").then((function(e){m(e.data.exemptionreasons)})).catch((function(e){console.log(e)}))},Z=function(){Q(!1),W({organizationId:D,id:"",name:""})},_=function(){var e=Object(r.a)(Object(a.a)().mark((function e(t){var n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(P(!0),null===v){e.next=9;break}return e.next=4,U(x(t));case 4:W({name:""}),n="Added",y(null),e.next=13;break;case 9:return e.next=11,U(O(t));case 11:n="Updated",W({name:""});case 13:Z(),P(!1),B.b.success("Exemption Reason ".concat(n," Succesfully"),{position:"bottom-right"}),X();case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(i.useEffect)(Object(r.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:X();case 1:case"end":return e.stop()}}),e)}))),[]);return Object(A.jsx)(i.Fragment,{children:Object(A.jsx)(z.a,{blocking:J,loader:Object(A.jsx)(T,{}),children:Object(A.jsxs)(o.l,{children:[Object(A.jsxs)(o.p,{children:[Object(A.jsx)("h5",{children:"Exemption Reason"}),Object(A.jsxs)(o.i,{color:"primary",size:"sm",onClick:function(){Q(!0)},children:[" ",Object(A.jsx)(C.a,{size:15}),"Add Reason"]})]}),Object(A.jsx)(o.m,{className:"py-25",children:Object(A.jsxs)(o.ib,{className:"gx-4",children:[Object(A.jsx)(o.B,{lg:"12",className:"mt-2 mt-lg-0",children:Object(A.jsxs)(o.mb,{className:"table table-hover table-bordered",children:[Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{children:"Name"}),Object(A.jsx)("th",{children:"Status"}),Object(A.jsx)("th",{children:"Actions"})]})}),Object(A.jsx)("tbody",{children:b.map((function(t,n){return Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{className:"mb-0",children:t.name}),Object(A.jsx)("td",{children:1===t.status?Object(A.jsx)(o.f,{color:"light-success",className:"ms-50",children:"Active"}):Object(A.jsx)(o.f,{color:"light-danger",className:"ms-50",children:"InActive"})}),Object(A.jsx)("td",{className:"",children:null!==t.organizationid&&Object(A.jsxs)("div",{className:"d-flex",children:[Object(A.jsx)(E.a,{size:15,className:"me-75",onClick:function(){return function(e){y(e),Q(!0),W({organizationId:D,id:e.id,name:e.name})}(t)},children:"Edit"}),Object(A.jsx)(I.a,{size:15,onClick:function(){var n;n=t.id,e.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(){var t=Object(r.a)(Object(a.a)().mark((function t(c){return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c.value){t.next=8;break}return t.next=3,U(h(n));case 3:return e.fire({icon:"success",title:"Deleted!",text:"Account has been deleted.",customClass:{confirmButton:"btn btn-success"}}),X(),t.abrupt("return",!0);case 8:if(c.dismiss!==e.DismissReason.cancel){t.next=10;break}return t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},children:"Delete"})]})})]},n)}))})]})}),Object(A.jsxs)(o.Q,{isOpen:K,toggle:function(){return Q(!K)},className:"modal-dialog-centered",children:[Object(A.jsx)(o.T,{toggle:function(){return Z()},children:"Exemption Reason"}),Object(A.jsx)(o.R,{children:Object(A.jsxs)(o.ib,{lg:"12",children:[Object.keys(L).map((function(e){var t;return Object(A.jsxs)(o.I,{children:["$",null===(t=L[e])||void 0===t?void 0:t.message]},e)})),Object(A.jsxs)(o.ib,{tag:o.H,className:"gx-2 gy-1",onSubmit:G(_),children:[function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return Object(A.jsxs)(o.B,{md:12,children:[Object(A.jsx)(o.N,{sm:"12",className:w()("form-label ".concat(n?"required":"")),for:t,children:e}),Object(A.jsxs)(o.B,{children:[Object(A.jsx)(l.a,{id:t,name:t,control:M,render:function(e){var n=e.field;return Object(A.jsx)(o.K,Object(c.a)({invalid:L[t]&&!0},n))}}),L[t]&&Object(A.jsx)(o.I,{children:L[t].message})]})]})}("Exemption Reason","name"),Object(A.jsxs)(o.B,{className:"mt-2 pt-1",xs:12,children:[Object(A.jsx)(o.i,{type:"submit",className:"me-1",color:"primary",children:"Submit"}),Object(A.jsx)(o.i,{type:"button",className:"me-1",color:"warning",onClick:function(){return Z()},children:"Cancel"})]})]})]})})]})]})})]})})})}},702:function(e,t,n){"use strict";var c=n(8),a=n(23),r=n(0),s=n(7),i=n.n(s),o=n(13),u=(n(704),n(2)),l=function(e){var t,n=e.children,s=e.blocking,o=e.loader,l=e.className,d=e.tag,j=e.overlayColor,b=d;return Object(u.jsxs)(b,{className:i()("ui-loader",(t={},Object(a.a)(t,l,l),Object(a.a)(t,"show",s),t)),children:[n,s?Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)("div",Object(c.a)({className:"overlay"},s&&j?{style:{backgroundColor:j}}:{})),Object(u.jsx)("div",{className:"loader",children:o})]}):null]})};t.a=l,l.defaultProps={tag:"div",blocking:!1,loader:Object(u.jsx)(o.jb,{color:"primary"})}},703:function(e,t,n){"use strict";var c=n(2);t.a=function(){return Object(c.jsx)("div",{className:"fallback-spinner",children:Object(c.jsxs)("div",{className:"loading",children:[Object(c.jsx)("div",{className:"effect-1 effects"}),Object(c.jsx)("div",{className:"effect-2 effects"}),Object(c.jsx)("div",{className:"effect-3 effects"})]})})}},704:function(e,t,n){}}]);
//# sourceMappingURL=80.4a79055e.chunk.js.map