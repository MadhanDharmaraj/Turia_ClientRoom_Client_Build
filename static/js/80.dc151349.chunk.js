(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[80],{1433:function(e,t,a){"use strict";a.r(t);var n=a(8),c=a(3),r=a(5),s=a(10),i=a(13),u=a(0),l=a(71),o=a(11),j=a(707),d=a(712),b=a(713),m=a(19),p=a(4),O=a(6),f=Object(m.d)(),x=Object(p.b)("appDepartment/getData",function(){var e=Object(r.a)(Object(c.a)().mark((function e(t){var a;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("/departments/list",t);case 2:return a=e.sent,e.abrupt("return",{params:t,data:a.data.departments});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h=Object(p.b)("appDepartment/addDepartment",function(){var e=Object(r.a)(Object(c.a)().mark((function e(t,a){var n,r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,e.next=3,O.a.post("/departments/create",t);case 3:return e.next=5,n(x(r().invoiceaccount.params));case 5:return e.abrupt("return",[]);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),v=Object(p.b)("appDepartment/updateDepartment",function(){var e=Object(r.a)(Object(c.a)().mark((function e(t,a){var n,r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,e.next=3,O.a.post("/departments/update",t);case 3:return e.next=5,n(x(r().invoiceaccount.params));case 5:return e.abrupt("return",[]);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),g=Object(p.b)("appDepartment/updateDepartment",function(){var e=Object(r.a)(Object(c.a)().mark((function e(t,a){var n,r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,e.next=3,O.a.post("/departments/delete",{id:t,updatedBy:f});case 3:return e.next=5,n(x(r().invoiceaccount.params));case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),N=(Object(p.c)({name:"appDepartment",initialState:{data:[],total:1,params:{},allData:[]},reducers:{},extraReducers:function(e){e.addCase(x.fulfilled,(function(e,t){e.data=t.payload.data,e.params=t.payload.params}))}}).reducer,a(185)),y=a.n(N),k=a(186),w=a.n(k),D=a(703),B=a(704),S=a(7),C=a.n(S),z=a(20),I=a(334),A=a(288),E=a(285),F=a(355),R=a(2),q=Object(m.b)(),J=Object(m.d)();t.default=function(e){Object(i.a)(e);var t=w()(y.a),a=Object(u.useState)([]),m=Object(s.a)(a,2),p=m[0],O=m[1],f=Object(u.useState)(null),N=Object(s.a)(f,2),k=N[0],S=N[1],P=Object(u.useState)(!1),T=Object(s.a)(P,2),Y=T[0],H=T[1],K=Object(z.b)(),Q=Object(z.c)((function(e){return e.department})),U=Object(u.useState)(!1),V=Object(s.a)(U,2),$=V[0],G=V[1],L=function(){return Object(R.jsx)(u.Fragment,{children:Object(R.jsx)(B.a,{})})},M=d.d().shape({organizationId:d.f().default(q),name:d.f().required("Please Enter Department"),updatedBy:d.f().default(J),createdBy:d.f().default(J)}),W=Object(j.f)({resolver:Object(b.a)(M),defaultValues:M.cast()}),X=W.handleSubmit,Z=W.formState.errors,_=W.control,ee=W.reset,te=function(){var e=Object(r.a)(Object(c.a)().mark((function e(){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ee({organizationId:q,id:null,name:""}),H(!1),S(null);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(r.a)(Object(c.a)().mark((function e(t){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(G(!0),null===k){e.next=8;break}return e.next=4,K(v(t));case 4:te(),S(null),e.next=11;break;case 8:return e.next=10,K(h(t));case 10:te();case 11:return e.next=13,K(x());case 13:G(!1);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(u.useEffect)(Object(r.a)(Object(c.a)().mark((function e(){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K(x());case 2:case"end":return e.stop()}}),e)}))),[]);return Object(u.useEffect)((function(){O(Q.data)}),[Q.data]),Object(R.jsx)(u.Fragment,{children:Object(R.jsx)(o.l,{children:Object(R.jsx)(o.m,{className:"py-25",children:Object(R.jsxs)(o.ib,{className:"gx-4",children:[Object(R.jsx)(o.ib,{className:"mb-50",children:Object(R.jsx)(o.B,{children:Object(R.jsxs)(o.i,{color:"primary",size:"sm",onClick:function(){H(!0)},children:[" ",Object(R.jsx)(I.a,{size:15}),"Add"]})})}),Object(R.jsx)(o.B,{lg:"12",className:"mt-2 mt-lg-0",children:Object(R.jsxs)(o.mb,{className:"table table-bordered table-hover",children:[Object(R.jsx)("thead",{children:Object(R.jsxs)("tr",{children:[Object(R.jsx)("th",{children:"Name"}),Object(R.jsx)("th",{children:"Status"}),Object(R.jsx)("th",{children:"No of Users"}),Object(R.jsx)("th",{children:"Actions"})]})}),Object(R.jsx)("tbody",{children:p.map((function(e,a){return Object(R.jsxs)("tr",{children:[Object(R.jsx)("td",{className:"mb-0",children:e.name}),Object(R.jsx)("td",{children:1===e.status?Object(R.jsx)(o.f,{color:"light-success",className:"ms-50",children:"Active"}):Object(R.jsx)(o.f,{color:"light-danger",className:"ms-50",children:"InActive"})}),Object(R.jsx)("td",{children:e.noofusers}),Object(R.jsx)("td",{children:Object(R.jsx)(l.b,{I:"write",a:"role",children:Object(R.jsxs)("div",{className:"d-flex ",children:[Object(R.jsx)(A.a,{size:15,className:"me-1"}),!e.isdefault&&Object(R.jsxs)("div",{className:"d-flex",children:[Object(R.jsx)(E.a,{size:15,className:"me-75",onClick:function(){return function(e){H(!0),S(e),ee({organizationId:q,id:e.id,name:e.name})}(e)},children:"Edit"}),Object(R.jsx)(F.a,{size:15,onClick:function(){var a;a=e.id,t.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(){var e=Object(r.a)(Object(c.a)().mark((function e(n){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.value){e.next=9;break}return e.next=3,K(g(a));case 3:return t.fire({icon:"success",title:"Deleted!",text:"Department has been deleted.",customClass:{confirmButton:"btn btn-success"}}),e.next=6,K(x());case 6:return e.abrupt("return",!0);case 9:if(n.dismiss!==t.DismissReason.cancel){e.next=11;break}return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Delete"})]})]})})})]},a)}))})]})}),Object(R.jsx)(o.Q,{isOpen:Y,toggle:function(){return H(!Y)},className:"modal-dialog-centered modal-lg",children:Object(R.jsxs)(D.a,{blocking:$,loader:Object(R.jsx)(L,{}),children:[Object(R.jsx)(o.T,{className:"bg-transparent",toggle:function(){return H(!Y)},children:"Department"}),Object(R.jsx)(o.R,{children:Object(R.jsxs)(o.B,{children:[Object.keys(Z).map((function(e){var t;return Object(R.jsxs)(o.I,{children:["$",null===(t=Z[e])||void 0===t?void 0:t.message]},e)})),Object(R.jsxs)(o.ib,{tag:o.H,className:"gx-2 gy-1",onSubmit:X(ae),children:[function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return Object(R.jsxs)(o.B,{md:12,children:[Object(R.jsx)(o.N,{sm:"12",className:C()("form-label ".concat(a?"required":"")),for:t,children:e}),Object(R.jsxs)(o.B,{children:[Object(R.jsx)(j.a,{id:t,name:t,control:_,render:function(e){var a=e.field;return Object(R.jsx)(o.K,Object(n.a)({invalid:Z[t]&&!0},a))}}),Z[t]&&Object(R.jsx)(o.I,{children:Z[t].message})]})]})}("Department Name","name"),Object(R.jsxs)(o.B,{className:"mt-2 pt-1",xs:12,children:[Object(R.jsx)(o.i,{type:"submit",className:"me-1",color:"primary",children:"Submit"}),Object(R.jsx)(o.i,{type:"button",color:"warning",onClick:te,children:"Cancel"})]})]})]})})]})})]})})})})}},703:function(e,t,a){"use strict";var n=a(8),c=a(25),r=a(0),s=a(7),i=a.n(s),u=a(11),l=(a(705),a(2)),o=function(e){var t,a=e.children,s=e.blocking,u=e.loader,o=e.className,j=e.tag,d=e.overlayColor,b=j;return Object(l.jsxs)(b,{className:i()("ui-loader",(t={},Object(c.a)(t,o,o),Object(c.a)(t,"show",s),t)),children:[a,s?Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)("div",Object(n.a)({className:"overlay"},s&&d?{style:{backgroundColor:d}}:{})),Object(l.jsx)("div",{className:"loader",children:u})]}):null]})};t.a=o,o.defaultProps={tag:"div",blocking:!1,loader:Object(l.jsx)(u.jb,{color:"primary"})}},704:function(e,t,a){"use strict";var n=a(2);t.a=function(){return Object(n.jsx)("div",{className:"fallback-spinner",children:Object(n.jsxs)("div",{className:"loading",children:[Object(n.jsx)("div",{className:"effect-1 effects"}),Object(n.jsx)("div",{className:"effect-2 effects"}),Object(n.jsx)("div",{className:"effect-3 effects"})]})})}},705:function(e,t,a){}}]);
//# sourceMappingURL=80.dc151349.chunk.js.map