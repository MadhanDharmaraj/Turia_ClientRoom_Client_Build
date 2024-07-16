(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[82],{1417:function(e,t,c){"use strict";c.r(t);var n=c(8),a=c(16),r=c(3),s=c(5),l=c(10),i=c(13),o=c(0),d=c(184),u=c(7),j=c.n(u),b=c(6),f=c(71),O=c(11),m=c(712),x=c(713),p=c(334),h=c(288),v=c(285),g=c(354),N=c(707),k=c(185),w=c.n(k),y=c(186),C=c.n(y),R=c(4),S=c(19),B=Object(S.d)(),I=Object(R.b)("appRole/getData",function(){var e=Object(s.a)(Object(r.a)().mark((function e(t){var c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/roles/list",t);case 2:return c=e.sent,e.abrupt("return",{params:t,data:c.data.roles});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),K=Object(R.b)("appRole/addRole",function(){var e=Object(s.a)(Object(r.a)().mark((function e(t,c){var n,a,s;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.dispatch,a=c.getState,e.next=3,b.a.post("/roles/create",t);case 3:return s=e.sent,e.next=6,n(I(a().role.params));case 6:return e.abrupt("return",s.data.role);case 7:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()),A=Object(R.b)("appRole/updateRole",function(){var e=Object(s.a)(Object(r.a)().mark((function e(t,c){var n,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.dispatch,a=c.getState,e.next=3,b.a.post("/roles/update",t);case 3:return e.next=5,n(I(a().role.params));case 5:return e.abrupt("return",[]);case 6:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()),D=Object(R.b)("appRole/addRolePermissions",function(){var e=Object(s.a)(Object(r.a)().mark((function e(t,c){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(i.a)(c),e.next=3,b.a.post("/rolepermissions/create",t);case 3:return e.abrupt("return",[]);case 4:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()),E=Object(R.b)("appRole/updateRolePermissions",function(){var e=Object(s.a)(Object(r.a)().mark((function e(t,c){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(i.a)(c),e.next=3,b.a.post("/rolepermissions/update",t);case 3:return e.abrupt("return",[]);case 4:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()),P=Object(R.b)("appRole/deleteRole",function(){var e=Object(s.a)(Object(r.a)().mark((function e(t,c){var n,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.dispatch,a=c.getState,e.next=3,b.a.post("/roles/delete",{id:t,updatedBy:B});case 3:return e.next=5,n(I(a().role.params));case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()),z=(Object(R.c)({name:"appRole",initialState:{data:[],total:1,params:{},allData:[]},reducers:{},extraReducers:function(e){e.addCase(I.fulfilled,(function(e,t){e.data=t.payload.data,e.params=t.payload.params}))}}).reducer,c(20)),L=c(183),F=c(2),T=function(e){var t=e.roleId,c=Object(o.useState)([]),n=Object(l.a)(c,2),a=n[0],r=n[1],s=Object(o.useState)([]),i=Object(l.a)(s,2),d=i[0],u=i[1];return Object(o.useEffect)((function(){null!==t&&(r([]),null!==t&&b.a.post("/rolepermissions/list",{roleId:t}).then((function(e){u(e.data.rolepermission.permissions.split(","))})).catch((function(){})),b.a.post("/modules/list").then((function(e){r(e.data.modules)})).catch((function(){})))}),[t]),Object(F.jsx)(o.Fragment,{children:Object(F.jsx)(O.ib,{children:Object(F.jsx)(O.B,{xs:12,children:Object(F.jsx)(O.mb,{className:"table-flush-spacing",responsive:!0,children:Object(F.jsx)("tbody",{children:d.length>0&&a.map((function(e,t){return Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{className:"text-nowrap fw-bolder",children:e.name}),Object(F.jsx)("td",{children:Object(F.jsxs)("div",{className:"d-flex",children:[Object(F.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(F.jsx)(O.K,{type:"checkbox",id:"read-".concat(e.slug),value:"".concat(e.slug,"-read"),defaultChecked:d.indexOf("".concat(e.slug,"-read"))>-1,disabled:!0}),Object(F.jsx)(O.N,{className:"form-check-label",for:"read-".concat(e.slug),children:"Read"})]}),Object(F.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(F.jsx)(O.K,{type:"checkbox",id:"write-".concat(e.slug),value:"".concat(e.slug,"-write"),defaultChecked:d.indexOf("".concat(e.slug,"-write"))>-1,disabled:!0}),Object(F.jsx)(O.N,{className:"form-check-label",for:"write-".concat(e.slug),children:"Write"})]}),Object(F.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(F.jsx)(O.K,{type:"checkbox",id:"delete-".concat(e.slug),value:"".concat(e.slug,"-delete"),defaultChecked:d.indexOf("".concat(e.slug,"-delete"))>-1,disabled:!0}),Object(F.jsx)(O.N,{className:"form-check-label",for:"delete-".concat(e.slug),children:"Delete"})]}),Object(F.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(F.jsx)(O.K,{type:"checkbox",id:"import-".concat(e.slug),value:"".concat(e.slug,"-import"),defaultChecked:d.indexOf("".concat(e.slug,"-import"))>-1,disabled:!0}),Object(F.jsx)(O.N,{className:"form-check-label",for:"import-".concat(e.slug),children:"import"})]}),Object(F.jsxs)("div",{className:"form-check",children:[Object(F.jsx)(O.K,{type:"checkbox",id:"export-".concat(e.slug),value:"".concat(e.slug,"-export"),defaultChecked:d.indexOf("".concat(e.slug,"-export"))>-1,disabled:!0}),Object(F.jsx)(O.N,{className:"form-check-label",for:"export-".concat(e.slug),children:"Export"})]})]})})]},t)}))})})})})})},V=c(703),J=c(704),Q=Object(S.b)(),U=Object(S.d)();t.default=function(e){Object(i.a)(e);var t=C()(w.a),c=Object(o.useState)(!1),u=Object(l.a)(c,2),k=u[0],y=u[1],R=Object(o.useState)([]),S=Object(l.a)(R,2),B=S[0],W=S[1],Y=Object(o.useState)("Add New"),q=Object(l.a)(Y,2),G=q[0],H=q[1],M=Object(z.c)((function(e){return e.role})),X=Object(z.b)(),Z=Object(o.useState)([]),$=Object(l.a)(Z,2),_=$[0],ee=$[1],te=Object(o.useState)([]),ce=Object(l.a)(te,2),ne=ce[0],ae=ce[1],re=Object(o.useState)(!1),se=Object(l.a)(re,2),le=se[0],ie=se[1],oe=Object(o.useState)(null),de=Object(l.a)(oe,2),ue=de[0],je=de[1],be=Object(o.useState)([]),fe=Object(l.a)(be,2),Oe=fe[0],me=fe[1],xe=Object(o.useState)(!1),pe=Object(l.a)(xe,2),he=pe[0],ve=pe[1],ge=[{id:1,name:"Level 1"},{id:2,name:"Level 2"},{id:3,name:"Level 3"}],Ne=function(){return Object(F.jsx)(o.Fragment,{children:Object(F.jsx)(J.a,{})})},ke=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t){var c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/rolepermissions/list",{roleId:t});case 2:return c=e.sent,e.next=5,me(c.data.rolepermission.permissions.split(","));case 5:return e.next=7,ae(c.data.rolepermission.permissions.split(","));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),we=m.d().shape({organizationId:m.f().default(Q),name:m.f().required("Please Enter Role"),description:m.f().nullable(),panel:m.f().default("client"),role:m.f().default("client"),isDefault:m.c().default(3),isAdminRole:m.b().default(!1),updatedBy:m.f().default(U),createdBy:m.f().default(U),permissionsArr:m.a().min("1")}),ye=Object(N.f)({resolver:Object(x.a)(we),defaultValues:we.cast()}),Ce=ye.handleSubmit,Re=ye.formState.errors,Se=ye.control,Be=ye.reset,Ie=ye.setValue,Ke=function(){var e=Object(s.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!1),e.next=3,X(I());case 3:Be({id:"",name:"",description:""});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t){var c,n,a,s,l;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ve(!0),"Edit"!==G){e.next=10;break}return e.next=4,X(A(t));case 4:return n={organizationId:Q,roleId:t.id,permissions:ne.toString(),updatedBy:U},e.next=7,X(E(n));case 7:c="Updated",e.next=17;break;case 10:return e.next=12,X(K(t));case 12:return s=e.sent,l={organizationId:Q,roleId:null===s||void 0===s||null===(a=s.payload)||void 0===a?void 0:a.id,permissions:ne.toString(),createdBy:U},e.next=16,X(D(l));case 16:c="Added";case 17:ve(!1),L.b.success("Role ".concat(c," Successfully"),{position:"bottom-right"}),Ke();case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),De=function(e,t,c){var n="".concat(t,"-").concat(c),r=Object(a.a)(ne);e.target.checked?r=[].concat(Object(a.a)(ne),[n]):r.splice(ne.indexOf(n),1),ae(r),Ie("permissionsArr",r)};Object(o.useEffect)((function(){W(M.data)}),[M.data]);var Ee=function(){return _.map((function(e,t){var c=e.transactions.split(",");return Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{className:"text-nowrap fw-bolder",children:e.name}),Object(F.jsx)("td",{children:Object(F.jsxs)("div",{className:"d-flex",children:[Object(F.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(F.jsx)(O.K,{type:"checkbox",id:"read-".concat(e.slug),onChange:function(t){return De(t,e.slug,"read")},value:"".concat(e.slug,"-read"),defaultChecked:Oe.indexOf("".concat(e.slug,"-read"))>-1,disabled:-1===c.indexOf("read")}),Object(F.jsx)(O.N,{className:"form-check-label",for:"read-".concat(e.slug),children:"Read"})]}),Object(F.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(F.jsx)(O.K,{type:"checkbox",id:"write-".concat(e.slug),onChange:function(t){return De(t,e.slug,"write")},value:"".concat(e.slug,"-write"),defaultChecked:Oe.indexOf("".concat(e.slug,"-write"))>-1,disabled:-1===c.indexOf("write")}),Object(F.jsx)(O.N,{className:"form-check-label",for:"write-".concat(e.slug),children:"Write"})]}),Object(F.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(F.jsx)(O.K,{type:"checkbox",id:"delete-".concat(e.slug),onChange:function(t){return De(t,e.slug,"delete")},value:"".concat(e.slug,"-delete"),defaultChecked:Oe.indexOf("".concat(e.slug,"-delete"))>-1,disabled:-1===c.indexOf("delete")}),Object(F.jsx)(O.N,{className:"form-check-label",for:"delete-".concat(e.slug),children:"Delete"})]}),Object(F.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(F.jsx)(O.K,{type:"checkbox",id:"import-".concat(e.slug),onChange:function(t){return De(t,e.slug,"import")},value:"".concat(e.slug,"-import"),defaultChecked:Oe.indexOf("".concat(e.slug,"-import"))>-1,disabled:-1===c.indexOf("import")}),Object(F.jsx)(O.N,{className:"form-check-label",for:"import-".concat(e.slug),children:"import"})]}),Object(F.jsxs)("div",{className:"form-check",children:[Object(F.jsx)(O.K,{type:"checkbox",id:"export-".concat(e.slug),onChange:function(t){return De(t,e.slug,"export")},value:"".concat(e.slug,"-export"),defaultChecked:Oe.indexOf("".concat(e.slug,"-export"))>-1,disabled:-1===c.indexOf("export")}),Object(F.jsx)(O.N,{className:"form-check-label",for:"export-".concat(e.slug),children:"Export"})]})]})})]},t)}))},Pe=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Be(t),Ie("rolelevel",parseInt(t.rolelevel)),e.next=4,je(t.id);case 4:return e.next=6,ke(t.id);case 6:return e.next=8,H("Edit");case 8:y(!0),Ee();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.useEffect)(Object(s.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X(I());case 2:b.a.post("/modules/list").then((function(e){ee(e.data.modules)})).catch((function(){}));case 3:case"end":return e.stop()}}),e)}))),[]),Object(F.jsxs)(o.Fragment,{children:[Object(F.jsx)(O.l,{children:Object(F.jsx)(O.m,{children:Object(F.jsxs)(O.ib,{children:[Object(F.jsx)(O.ib,{children:Object(F.jsx)(f.b,{I:"write",a:"role",children:Object(F.jsx)(O.B,{children:Object(F.jsxs)(O.i,{color:"primary",size:"sm",onClick:function(){y(!0)},children:[" ",Object(F.jsx)(p.a,{size:15}),"Add"]})})})}),Object(F.jsxs)(O.mb,{className:"table table-bordered table-hover",children:[Object(F.jsx)("thead",{children:Object(F.jsxs)("tr",{children:[Object(F.jsx)("th",{children:"Name"}),Object(F.jsx)("th",{children:"Level"}),Object(F.jsx)("th",{children:"Status"}),Object(F.jsx)("th",{children:"No of Users"}),Object(F.jsx)("th",{children:"Actions"})]})}),Object(F.jsx)("tbody",{children:B.map((function(e,c){return Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{className:"fw-bolder",children:e.name}),Object(F.jsxs)("td",{className:"fw-bolder",children:["Level ",e.rolelevel]}),Object(F.jsx)("td",{children:1===e.status?Object(F.jsx)(O.f,{color:"light-success",className:"ms-50",children:"Active"}):Object(F.jsx)(O.f,{color:"light-danger",className:"ms-50",children:"InActive"})}),Object(F.jsx)("td",{children:e.noofusers}),Object(F.jsx)("td",{children:Object(F.jsx)(f.b,{I:"write",a:"role",children:Object(F.jsxs)("div",{className:"d-flex",children:[Object(F.jsx)(h.a,{size:15,className:"me-1",onClick:function(){je(e.id),ie(!0)}}),!e.isdefault&&Object(F.jsxs)("div",{className:"d-flex",children:[Object(F.jsx)(v.a,{size:15,className:"me-1",onClick:function(){Pe(e)}}),Object(F.jsx)(g.a,{size:15,onClick:function(){return c=e.id,t.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(){var e=Object(s.a)(Object(r.a)().mark((function e(n){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.value){e.next=9;break}return e.next=3,X(P(c));case 3:return t.fire({icon:"success",title:"Deleted!",text:"Department has been deleted.",customClass:{confirmButton:"btn btn-success"}}),e.next=6,X(I());case 6:return e.abrupt("return",!0);case 9:if(n.dismiss!==t.DismissReason.cancel){e.next=11;break}return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var c}})]})]})})})]},c)}))})]})]})})}),Object(F.jsxs)(O.Q,{isOpen:le,toggle:function(){return ie(!le)},className:"modal-dialog-centered modal-lg",children:[Object(F.jsx)(O.T,{className:"bg-transparent",toggle:function(){return ie(!le)},children:"Role Permissions"}),Object(F.jsx)(O.R,{children:Object(F.jsx)(T,{roleId:ue})})]}),Object(F.jsx)(O.Q,{isOpen:k,onClosed:function(){H("Add New")},toggle:function(){return y(!k)},className:"modal-dialog-centered modal-lg",children:Object(F.jsxs)(V.a,{blocking:he,loader:Object(F.jsx)(Ne,{}),children:[Object(F.jsx)(O.T,{className:"bg-transparent",toggle:function(){return y(!k)}}),Object(F.jsxs)(O.R,{className:"px-2",children:[Object(F.jsx)("div",{className:"text-center mb-1",children:Object(F.jsxs)("h1",{children:[G," Role"]})}),Object(F.jsxs)(O.ib,{tag:"form",onSubmit:Ce(Ae),children:[Object(F.jsxs)(O.B,{xs:12,children:[Object(F.jsx)(O.N,{className:"form-label",for:"name",children:"Role Name"}),Object(F.jsx)(N.a,{name:"name",control:Se,render:function(e){var t=e.field;return Object(F.jsx)(O.K,Object(n.a)(Object(n.a)({},t),{},{id:"name",placeholder:"Enter Role name",invalid:Re.name&&!0}))}}),Re.name&&Object(F.jsx)(O.I,{children:"Please enter a valid role name"})]}),Object(F.jsxs)(O.B,{xs:12,className:"mt-1",children:[Object(F.jsx)(O.N,{className:"form-label",for:"name",children:"Level"}),Object(F.jsx)(N.a,{name:"rolelevel",control:Se,render:function(e){var t=e.field,c=e.ref;return Object(F.jsx)(d.a,Object(n.a)(Object(n.a)({inputRef:c,className:j()("react-select",{"is-invalid":Re.rolelevel})},t),{},{classNamePrefix:"select",options:ge,onChange:function(e){return Ie("rolelevel",e.id)},value:ge.find((function(e){return e.id===t.value})),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),Re.rolelevel&&Object(F.jsx)(O.I,{children:"Please Select Role Level"})]}),Object(F.jsxs)(O.B,{xs:12,className:"mt-1",children:[Object(F.jsx)(O.N,{className:"form-label",for:"description",children:"Description"}),Object(F.jsx)(N.a,{name:"description",control:Se,render:function(e){var t=e.field;return Object(F.jsx)(O.K,Object(n.a)(Object(n.a)({},t),{},{id:"description",placeholder:"Enter Description",invalid:Re.description&&!0}))}})]}),Object(F.jsxs)(O.B,{xs:12,children:[Object(F.jsx)("h4",{className:"mt-2 pt-50",children:"Role Permissions"}),Object(F.jsx)(O.mb,{className:"table-flush-spacing",responsive:!0,children:Object(F.jsx)("tbody",{children:Ee()})})]}),Object(F.jsxs)(O.B,{className:"text-center mt-2",xs:12,children:[Object(F.jsx)(O.i,{type:"submit",color:"primary",className:"me-1",children:"Submit"}),Object(F.jsx)(O.i,{type:"button",color:"warning",onClick:Ke,children:"Cancel"})]})]})]})]})})]})}},703:function(e,t,c){"use strict";var n=c(8),a=c(25),r=c(0),s=c(7),l=c.n(s),i=c(11),o=(c(705),c(2)),d=function(e){var t,c=e.children,s=e.blocking,i=e.loader,d=e.className,u=e.tag,j=e.overlayColor,b=u;return Object(o.jsxs)(b,{className:l()("ui-loader",(t={},Object(a.a)(t,d,d),Object(a.a)(t,"show",s),t)),children:[c,s?Object(o.jsxs)(r.Fragment,{children:[Object(o.jsx)("div",Object(n.a)({className:"overlay"},s&&j?{style:{backgroundColor:j}}:{})),Object(o.jsx)("div",{className:"loader",children:i})]}):null]})};t.a=d,d.defaultProps={tag:"div",blocking:!1,loader:Object(o.jsx)(i.jb,{color:"primary"})}},704:function(e,t,c){"use strict";var n=c(2);t.a=function(){return Object(n.jsx)("div",{className:"fallback-spinner",children:Object(n.jsxs)("div",{className:"loading",children:[Object(n.jsx)("div",{className:"effect-1 effects"}),Object(n.jsx)("div",{className:"effect-2 effects"}),Object(n.jsx)("div",{className:"effect-3 effects"})]})})}},705:function(e,t,c){}}]);
//# sourceMappingURL=82.e88bdc82.chunk.js.map