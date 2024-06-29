(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[75],{1491:function(e,t,c){"use strict";c.r(t);var a=c(8),s=c(2),n=c(5),r=c(12),i=c(23),l=c(25),d=c(7),o=c.n(d),j=c(0),m=c(6),b=c(14),u=c(3),f=function(e){var t=e.permissions,c=Object(j.useState)([]),a=Object(r.a)(c,2),s=a[0],n=a[1];return Object(j.useEffect)((function(){n([]),m.a.post("/modules/list").then((function(e){n(e.data.modules)})).catch((function(){}))}),[t]),Object(u.jsx)(j.Fragment,{children:Object(u.jsx)(b.l,{children:Object(u.jsx)(b.m,{className:"p-0",children:Object(u.jsx)(b.ib,{children:Object(u.jsxs)(b.B,{xs:12,children:[Object(u.jsx)("h4",{className:"mt-2 pt-50",children:"Role Permissions"}),Object(u.jsx)(b.mb,{className:"table-flush-spacing",responsive:!0,children:Object(u.jsx)("tbody",{children:s.map((function(e,c){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"text-nowrap fw-bolder",children:e.name}),Object(u.jsx)("td",{children:Object(u.jsxs)("div",{className:"d-flex",children:[Object(u.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(u.jsx)(b.K,{type:"checkbox",id:"read-".concat(e.slug),value:"".concat(e.slug,"-read"),defaultChecked:t.indexOf("".concat(e.slug,"-read"))>-1,disabled:!0}),Object(u.jsx)(b.N,{className:"form-check-label",for:"read-".concat(e.slug),children:"Read"})]}),Object(u.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(u.jsx)(b.K,{type:"checkbox",id:"write-".concat(e.slug),value:"".concat(e.slug,"-write"),defaultChecked:t.indexOf("".concat(e.slug,"-write"))>-1,disabled:!0}),Object(u.jsx)(b.N,{className:"form-check-label",for:"write-".concat(e.slug),children:"Write"})]}),Object(u.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(u.jsx)(b.K,{type:"checkbox",id:"delete-".concat(e.slug),value:"".concat(e.slug,"-delete"),defaultChecked:t.indexOf("".concat(e.slug,"-delete"))>-1,disabled:!0}),Object(u.jsx)(b.N,{className:"form-check-label",for:"delete-".concat(e.slug),children:"Delete"})]}),Object(u.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(u.jsx)(b.K,{type:"checkbox",id:"import-".concat(e.slug),value:"".concat(e.slug,"-import"),defaultChecked:t.indexOf("".concat(e.slug,"-import"))>-1,disabled:!0}),Object(u.jsx)(b.N,{className:"form-check-label",for:"import-".concat(e.slug),children:"import"})]}),Object(u.jsxs)("div",{className:"form-check",children:[Object(u.jsx)(b.K,{type:"checkbox",id:"export-".concat(e.slug),value:"".concat(e.slug,"-export"),defaultChecked:t.indexOf("".concat(e.slug,"-export"))>-1,disabled:!0}),Object(u.jsx)(b.N,{className:"form-check-label",for:"export-".concat(e.slug),children:"Export"})]})]})})]},c)}))})})]})})})})})},O=c(184),x=c(742),h=c(744),N=c(745),p=c(206),g=c(735),v=c(736),I=(c(746),c(481),c(737),c(743),c(13)),k=c(21),w=Object(I.b)(),y=Object(I.d)(),B=function(){var e,t,c,d=Object(j.useState)(!1),I=Object(r.a)(d,2),B=I[0],C=I[1],S=function(){return Object(u.jsx)(j.Fragment,{children:Object(u.jsx)(v.a,{})})},q=Object(k.b)(),E=Object(i.f)(),P=Object(i.g)().id,z=h.d().shape({updatedBy:h.f().default(y),organizationId:h.f().default(w),firstName:h.f().required("Please Enter a First Name"),lastName:h.f().nullable().default(""),name:h.f().default(""),contact:h.f().required("Please Enter a Conatct No").max(10).min(10,"Invalid Contact No"),email:h.f().email("Please Enter valid Email").required("Please Enter valid Email"),designationId:h.f().required("Please Select Designation"),roleId:h.f().required("Please Select Role"),departmentId:h.f().required("Please Select Department")}),K=Object(x.f)({resolver:Object(N.a)(z),defaultValues:z.cast()}),R=K.handleSubmit,V=K.control,D=K.formState.errors,F=K.reset,L=Object(k.c)((function(e){return e.team})),U=Object(j.useState)([]),J=Object(r.a)(U,2),_=J[0],W=J[1],A=Object(j.useState)([]),G=Object(r.a)(A,2),H=G[0],M=G[1],Q=Object(j.useState)([]),T=Object(r.a)(Q,2),X=T[0],Y=T[1],Z=Object(j.useState)([]),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ce=Object(j.useState)(""),ae=Object(r.a)(ce,2),se=ae[0],ne=ae[1];Object(j.useEffect)(Object(n.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,void m.a.post("/designations/dropdown").then((function(e){M(e.data.designations)})).catch((function(){}));case 2:return e.next=4,void m.a.post("/departments/dropdown").then((function(e){W(e.data.departments)})).catch((function(){}));case 4:return e.next=6,void m.a.post("/roles/dropdown").then((function(e){Y(e.data.roles)})).catch((function(){}));case 6:return e.next=8,q(Object(p.e)(P));case 8:case"end":return e.stop()}}),e)}))),[]),Object(j.useEffect)((function(){""!==se&&m.a.post("/rolepermissions/list",{roleId:se}).then((function(e){te(e.data.rolepermission.permissions.split(","))})).catch((function(){}))}),[se]),Object(j.useEffect)(Object(n.a)(Object(s.a)().mark((function e(){var t,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==L.selectedUser&&(t=L.selectedUser,c=null!==t.name?t.name.split(" "):"",F({updatedBy:y,organizationId:w,firstName:c[0]||"",lastName:c[1]||"",name:t.name||"",id:P,contact:t.contactno||"",email:t.email,designationId:t.designationid||"",roleId:t.roleid||"",departmentId:t.departmentid||""}),ne(t.roleid));case 1:case"end":return e.stop()}}),e)}))),[L.selectedUser]);var re=function(){var e=Object(n.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),t.name="".concat(V._formValues.firstName," ").concat(V._formValues.lastName),e.next=4,q(Object(p.g)(t));case 4:E("/team/view/".concat(P));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)(g.a,{blocking:B,loader:Object(u.jsx)(S,{}),children:Object(u.jsxs)("form",{onSubmit:R(re),children:[Object(u.jsxs)(b.l,{className:"invoice-preview-card",children:[Object.keys(D).map((function(e,t){var c;return Object(u.jsxs)(b.I,{children:[" ",null===(c=D[e])||void 0===c?void 0:c.message]},t)})),Object(u.jsxs)(b.m,{className:"pb-0",children:[Object(u.jsxs)(b.ib,{children:[Object(u.jsx)(b.B,{md:"6",className:"mb-1",children:Object(u.jsxs)(b.ib,{className:"mb-1",children:[Object(u.jsx)(b.N,{sm:"3",size:"lg",className:"form-label required",for:"firstName",children:"First Name"}),Object(u.jsxs)(b.B,{sm:"9",children:[Object(u.jsx)(x.a,{id:"firstName",name:"firstName",control:V,render:function(e){var t=e.field;return Object(u.jsx)(b.K,Object(a.a)({invalid:D.firstName&&!0},t))}}),D.firstName&&Object(u.jsx)(b.I,{children:D.firstName.message})]})]})}),Object(u.jsx)(b.B,{md:"6",className:"mb-1",children:Object(u.jsxs)(b.ib,{className:"mb-1",children:[Object(u.jsx)(b.N,{sm:"3",size:"lg",className:"form-label",for:"lastName",children:"Last Name"}),Object(u.jsxs)(b.B,{sm:"9",children:[Object(u.jsx)(x.a,{control:V,id:"lastName",name:"lastName",render:function(e){var t=e.field;return Object(u.jsx)(b.K,Object(a.a)({type:"text",invalid:D.lastName&&!0},t))}}),D.lastName&&Object(u.jsx)(b.I,{children:D.lastName.message})]})]})})]}),Object(u.jsxs)(b.ib,{children:[Object(u.jsx)(b.B,{md:"6",className:"mb-1",children:Object(u.jsxs)(b.ib,{className:"mb-1",children:[Object(u.jsx)(b.N,{sm:"3",size:"lg",className:"form-label required",for:"contact",children:"Conatct No"}),Object(u.jsxs)(b.B,{sm:"9",children:[Object(u.jsx)(x.a,{id:"contact",name:"contact",control:V,render:function(e){var t=e.field;return Object(u.jsx)(b.K,Object(a.a)({invalid:D.contact&&!0},t))}}),D.contact&&Object(u.jsx)(b.I,{children:D.contact.message})]})]})}),Object(u.jsx)(b.B,{md:"6",className:"mb-1",children:Object(u.jsxs)(b.ib,{className:"mb-1",children:[Object(u.jsx)(b.N,{sm:"3",size:"lg",className:"form-label required",for:"email",children:"Email"}),Object(u.jsxs)(b.B,{sm:"9",children:[Object(u.jsx)(x.a,{control:V,id:"email",name:"email",render:function(e){var t=e.field;return Object(u.jsx)(b.K,Object(a.a)(Object(a.a)({type:"email",invalid:D.email&&!0},t),{},{disabled:!0}))}}),D.email&&Object(u.jsx)(b.I,{children:D.email.message})]})]})})]}),Object(u.jsxs)(b.ib,{children:[Object(u.jsx)(b.B,{md:"6",className:"mb-1",children:Object(u.jsxs)(b.ib,{className:"mb-1",children:[Object(u.jsx)(b.N,{sm:"3",size:"lg",className:"form-label required",for:"designationId",children:"Designation"}),Object(u.jsxs)(b.B,{sm:"9",children:[Object(u.jsx)(x.a,{control:V,name:"designationId",id:"designationId",render:function(e){var t=e.field,c=e.ref;return Object(u.jsx)(O.a,Object(a.a)(Object(a.a)({},t),{},{inputRef:c,className:o()("react-select",{"is-invalid":D.designationId}),classNamePrefix:"select",options:H,value:H.find((function(e){return e.id===t.value})),onChange:function(e){return t.onChange(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),D.designationId&&Object(u.jsx)(b.I,{className:"text-danger",children:null===(e=D.designationId)||void 0===e?void 0:e.message})]})]})}),Object(u.jsx)(b.B,{md:"6",className:"mb-1",children:Object(u.jsxs)(b.ib,{className:"mb-1",children:[Object(u.jsx)(b.N,{sm:"3",size:"lg",className:"form-label required",for:"roleId",children:"Role"}),Object(u.jsxs)(b.B,{sm:"9",children:[Object(u.jsx)(x.a,{control:V,name:"roleId",id:"roleId",render:function(e){var t=e.field,c=e.ref;return Object(u.jsx)(O.a,Object(a.a)(Object(a.a)({},t),{},{inputRef:c,className:o()("react-select",{"is-invalid":D.roleId}),classNamePrefix:"select",options:X,value:X.find((function(e){return e.id===t.value})),onChange:function(e){return ne(e.id),t.onChange(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),D.roleId&&Object(u.jsx)(b.I,{className:"text-danger",children:null===(t=D.roleId)||void 0===t?void 0:t.message})]})]})})]}),Object(u.jsx)(b.ib,{children:Object(u.jsx)(b.B,{md:"6",className:"mb-1",children:Object(u.jsxs)(b.ib,{className:"mb-1",children:[Object(u.jsx)(b.N,{sm:"3",size:"lg",className:"form-label required",for:"departmentId",children:"Department"}),Object(u.jsxs)(b.B,{sm:"9",children:[Object(u.jsx)(x.a,{control:V,name:"departmentId",id:"departmentId",render:function(e){var t=e.field,c=e.ref;return Object(u.jsx)(O.a,Object(a.a)(Object(a.a)({},t),{},{inputRef:c,className:o()("react-select",{"is-invalid":D.departmentId}),classNamePrefix:"select",options:_,value:_.find((function(e){return e.id===t.value})),onChange:function(e){return t.onChange(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),D.departmentId&&Object(u.jsx)(b.I,{className:"text-danger",children:null===(c=D.departmentId)||void 0===c?void 0:c.message})]})]})})})]}),ee.length>0&&Object(u.jsx)(b.m,{className:"invoice-padding",children:Object(u.jsx)(f,{permissions:ee})})]}),Object(u.jsx)(b.l,{children:Object(u.jsx)(b.m,{children:Object(u.jsxs)("div",{className:"modal-footer border-0",children:[Object(u.jsx)(b.i,{color:"warning",outline:!0,tag:l.b,to:"/team/list",children:"Cancel"}),Object(u.jsx)(b.i,{color:"primary",type:"submit",children:"Save"})]})})})]})})};t.default=function(){return Object(u.jsx)("div",{className:"invoice-add-wrapper",children:Object(u.jsx)(b.ib,{className:"invoice-add",children:Object(u.jsx)(b.B,{xl:12,md:12,sm:12,children:Object(u.jsx)(B,{})})})})}},735:function(e,t,c){"use strict";var a=c(8),s=c(27),n=c(0),r=c(7),i=c.n(r),l=c(14),d=(c(738),c(3)),o=function(e){var t,c=e.children,r=e.blocking,l=e.loader,o=e.className,j=e.tag,m=e.overlayColor,b=j;return Object(d.jsxs)(b,{className:i()("ui-loader",(t={},Object(s.a)(t,o,o),Object(s.a)(t,"show",r),t)),children:[c,r?Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)("div",Object(a.a)({className:"overlay"},r&&m?{style:{backgroundColor:m}}:{})),Object(d.jsx)("div",{className:"loader",children:l})]}):null]})};t.a=o,o.defaultProps={tag:"div",blocking:!1,loader:Object(d.jsx)(l.jb,{color:"primary"})}},736:function(e,t,c){"use strict";var a=c(3);t.a=function(){return Object(a.jsx)("div",{className:"fallback-spinner",children:Object(a.jsxs)("div",{className:"loading",children:[Object(a.jsx)("div",{className:"effect-1 effects"}),Object(a.jsx)("div",{className:"effect-2 effects"}),Object(a.jsx)("div",{className:"effect-3 effects"})]})})}},737:function(e,t,c){},738:function(e,t,c){},743:function(e,t,c){},746:function(e,t,c){}}]);
//# sourceMappingURL=75.05cc43fe.chunk.js.map