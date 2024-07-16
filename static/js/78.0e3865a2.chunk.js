(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[78],{1428:function(e,t,n){"use strict";n.r(t);var c=n(8),a=n(3),r=n(5),s=n(10),i=n(0),u=n(11),o=n(6),l=n(707),b=n(712),d=n(713),j=n(19),m=n(4),f=Object(j.d)(),O=Object(m.b)("appInvoiceSetting/getData",function(){var e=Object(r.a)(Object(a.a)().mark((function e(t){var n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("/transactionaccounts/list",t);case 2:return n=e.sent,e.abrupt("return",{params:t,data:n.data.exemptionreason});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=Object(m.b)("appInvoiceSetting/addReimbursement",function(){var e=Object(r.a)(Object(a.a)().mark((function e(t,n){var c,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.dispatch,r=n.getState,e.next=3,o.a.post("/reimbursement/create",t);case 3:return e.next=5,c(O(r().reimbursement.params));case 5:return e.abrupt("return",[]);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),x=Object(m.b)("appInvoiceSetting/updateReimbursement",function(){var e=Object(r.a)(Object(a.a)().mark((function e(t,n){var c,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.dispatch,r=n.getState,e.next=3,o.a.post("/reimbursement/update",t);case 3:return e.next=5,c(O(r().reimbursement.params));case 5:return e.abrupt("return",[]);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),h=Object(m.b)("appInvoiceSetting/deleteReimbursement",function(){var e=Object(r.a)(Object(a.a)().mark((function e(t,n){var c,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.dispatch,r=n.getState,e.next=3,o.a.post("/reimbursement/delete",{id:t,updatedBy:f});case 3:return e.next=5,c(O(r().reimbursement.params));case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),v=(Object(m.c)({name:"appInvoiceSetting",initialState:{data:[],total:1,params:{},allData:[]},reducers:{},extraReducers:function(e){e.addCase(O.fulfilled,(function(e,t){e.data=t.payload.data,e.params=t.payload.params}))}}).reducer,n(185)),g=n.n(v),y=n(186),N=n.n(y),k=n(7),w=n.n(k),S=n(20),B=n(183),R=n(334),C=n(285),I=n(355),z=n(703),A=n(704),D=n(2),E=Object(j.b)(),F=Object(j.d)();t.default=function(){var e=N()(g.a),t=Object(i.useState)([]),n=Object(s.a)(t,2),j=n[0],m=n[1],f=Object(i.useState)(null),O=Object(s.a)(f,2),v=O[0],y=O[1],k=Object(i.useState)(!1),q=Object(s.a)(k,2),J=q[0],P=q[1],T=function(){return Object(D.jsx)(i.Fragment,{children:Object(D.jsx)(A.a,{})})},Y=Object(i.useState)(!1),H=Object(s.a)(Y,2),K=H[0],Q=H[1],U=Object(S.b)(),V=b.d().shape({organizationId:b.f().default(E),name:b.f().required("Please Enter Reimbursement"),updatedBy:b.f().default(F),createdBy:b.f().default(F)}),$=Object(l.f)({resolver:Object(d.a)(V),defaultValues:V.cast()}),G=$.handleSubmit,L=$.formState.errors,M=$.control,W=$.reset,X=function(){o.a.post("/reimbursement/list").then((function(e){m(e.data.reimbursement)})).catch((function(e){console.log(e)}))},Z=function(){Q(!1),W({organizationId:E,id:"",name:""})},_=function(){var e=Object(r.a)(Object(a.a)().mark((function e(t){var n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(P(!0),null===v){e.next=9;break}return e.next=4,U(x(t));case 4:W({name:""}),n="Added",y(null),e.next=13;break;case 9:return e.next=11,U(p(t));case 11:n="Updated",W({name:""});case 13:Z(),P(!1),B.b.success("Reimbursement Reason ".concat(n," Succesfully"),{position:"bottom-right"}),X();case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(i.useEffect)(Object(r.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:X();case 1:case"end":return e.stop()}}),e)}))),[]);return Object(D.jsx)(i.Fragment,{children:Object(D.jsx)(z.a,{blocking:J,loader:Object(D.jsx)(T,{}),children:Object(D.jsxs)(u.l,{children:[Object(D.jsxs)(u.p,{className:"d-flex justify-content-between",children:[Object(D.jsx)("h5",{children:"Reimbursement"}),Object(D.jsxs)(u.i,{color:"primary",size:"sm",onClick:function(){Q(!0)},children:[" ",Object(D.jsx)(R.a,{size:15}),"Add"]})]}),Object(D.jsx)(u.m,{className:"py-25",children:Object(D.jsxs)(u.ib,{className:"gx-4",children:[Object(D.jsx)(u.B,{lg:"12",className:"mt-2 mt-lg-0",children:Object(D.jsxs)(u.mb,{className:"table table-hover table-bordered",children:[Object(D.jsx)("thead",{children:Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{children:"Name"}),Object(D.jsx)("th",{children:"Status"}),Object(D.jsx)("th",{children:"Actions"})]})}),Object(D.jsx)("tbody",{children:j.map((function(t,n){return Object(D.jsxs)("tr",{children:[Object(D.jsx)("td",{className:"mb-0",children:t.name}),Object(D.jsx)("td",{children:"1"===t.status?Object(D.jsx)(u.f,{color:"light-success",className:"ms-50",children:"Active"}):Object(D.jsx)(u.f,{color:"light-danger",className:"ms-50",children:"InActive"})}),Object(D.jsx)("td",{className:"",children:null!==t.organizationid&&Object(D.jsxs)("div",{className:"d-flex",children:[Object(D.jsx)(C.a,{size:15,className:"me-75",onClick:function(){return function(e){y(e),Q(!0),W({organizationId:E,id:e.id,name:e.name})}(t)},children:"Edit"}),Object(D.jsx)(I.a,{size:15,onClick:function(){var n;n=t.id,e.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(){var t=Object(r.a)(Object(a.a)().mark((function t(c){return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c.value){t.next=8;break}return t.next=3,U(h(n));case 3:return e.fire({icon:"success",title:"Deleted!",text:"Account has been deleted.",customClass:{confirmButton:"btn btn-success"}}),X(),t.abrupt("return",!0);case 8:if(c.dismiss!==e.DismissReason.cancel){t.next=10;break}return t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},children:"Delete"})]})})]},n)}))})]})}),Object(D.jsxs)(u.Q,{isOpen:K,toggle:function(){return Q(!K)},className:"modal-dialog-centered",children:[Object(D.jsx)(u.T,{toggle:function(){return Z()},children:"Reimbursement Name"}),Object(D.jsx)(u.R,{children:Object(D.jsxs)(u.ib,{lg:"12",children:[Object.keys(L).map((function(e){var t;return Object(D.jsxs)(u.I,{children:["$",null===(t=L[e])||void 0===t?void 0:t.message]},e)})),Object(D.jsxs)(u.ib,{tag:u.H,className:"gx-2 gy-1",onSubmit:G(_),children:[function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return Object(D.jsxs)(u.B,{md:12,children:[Object(D.jsx)(u.N,{sm:"12",className:w()("form-label ".concat(n?"required":"")),for:t,children:e}),Object(D.jsxs)(u.B,{children:[Object(D.jsx)(l.a,{id:t,name:t,control:M,render:function(e){var n=e.field;return Object(D.jsx)(u.K,Object(c.a)({invalid:L[t]&&!0},n))}}),L[t]&&Object(D.jsx)(u.I,{children:L[t].message})]})]})}("Reimbursement Name","name"),Object(D.jsxs)(u.B,{className:"mt-2 pt-1",xs:12,children:[Object(D.jsx)(u.i,{type:"submit",className:"me-1",color:"primary",children:"Submit"}),Object(D.jsx)(u.i,{type:"button",className:"me-1",color:"warning",onClick:function(){return Z()},children:"Cancel"})]})]})]})})]})]})})]})})})}},703:function(e,t,n){"use strict";var c=n(8),a=n(25),r=n(0),s=n(7),i=n.n(s),u=n(11),o=(n(705),n(2)),l=function(e){var t,n=e.children,s=e.blocking,u=e.loader,l=e.className,b=e.tag,d=e.overlayColor,j=b;return Object(o.jsxs)(j,{className:i()("ui-loader",(t={},Object(a.a)(t,l,l),Object(a.a)(t,"show",s),t)),children:[n,s?Object(o.jsxs)(r.Fragment,{children:[Object(o.jsx)("div",Object(c.a)({className:"overlay"},s&&d?{style:{backgroundColor:d}}:{})),Object(o.jsx)("div",{className:"loader",children:u})]}):null]})};t.a=l,l.defaultProps={tag:"div",blocking:!1,loader:Object(o.jsx)(u.jb,{color:"primary"})}},704:function(e,t,n){"use strict";var c=n(2);t.a=function(){return Object(c.jsx)("div",{className:"fallback-spinner",children:Object(c.jsxs)("div",{className:"loading",children:[Object(c.jsx)("div",{className:"effect-1 effects"}),Object(c.jsx)("div",{className:"effect-2 effects"}),Object(c.jsx)("div",{className:"effect-3 effects"})]})})}},705:function(e,t,n){}}]);
//# sourceMappingURL=78.0e3865a2.chunk.js.map