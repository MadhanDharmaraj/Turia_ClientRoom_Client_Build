(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[68],{1330:function(e,t,c){"use strict";c.r(t);var a=c(8),n=c(3),r=c(5),i=c(10),s=c(0),o=c(186),l=c(13),d=c(708),u=c(852),j=c(709),b=c(6),m=c(7),f=c.n(m),O=c(704),h=c(19),v=c(16),p=c(183),x=c(701),g=c(702),y=c(260),N=c(2),S=Object(h.b)(),I=Object(h.a)(),w=Object(h.d)(),k=[{id:1,name:"Every Days"},{id:2,name:"Every 2 Days"},{id:3,name:"Every 3 Days"},{id:4,name:"Every 4 Days"},{id:5,name:"Every 5 Days"},{id:6,name:"Every 6 Days"},{id:7,name:"Never"}];t.default=function(){var e=Object(v.b)(),t=Object(s.useState)(!1),c=Object(i.a)(t,2),m=c[0],h=c[1],B=Object(s.useState)("00001"),C=Object(i.a)(B,2),z=C[0],D=C[1],E=Object(s.useState)("INV"),P=Object(i.a)(E,2),R=P[0],K=P[1],F=Object(s.useState)(!1),L=Object(i.a)(F,2),U=L[0],V=L[1],$=Object(s.useState)(null),q=Object(i.a)($,2),A=q[0],J=q[1],W=function(){return Object(N.jsx)(s.Fragment,{children:Object(N.jsx)(g.a,{})})},G=d.d().shape({organizationId:d.f().default(S),invoiceNote:d.f().required("Please Enter Invoice Note"),invoiceReminderInterval:d.f().nullable(),desiredProfitLimit:d.f().default(""),criticalLimit:d.f().default(""),updatedBy:d.f().default(w),createdBy:d.f().default(w)}),H=Object(O.f)({resolver:Object(j.a)(G),defaultValues:G.cast()}),Y=H.handleSubmit,Z=H.formState.errors,_=H.control,M=H.reset,Q=function(){var t=Object(r.a)(Object(n.a)().mark((function t(c){return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h(!0),t.next=3,e(Object(u.a)(c));case 3:h(!1),p.b.success("General Setting Updated Succesfully",{position:"bottom-right"});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(s.useEffect)(Object(r.a)(Object(n.a)().mark((function t(){var c,a,r,i,s;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(Object(u.b)(S));case 2:i=t.sent,void 0!==(s=i.payload.data)&&M({organizationId:S,invoiceNote:s.invoicenote.replace(/(\\n)/g,"\n"),invoiceReminderInterval:parseInt(s.invoicereminderinterval),desiredProfitLimit:s.desiredprofitlimit,criticalLimit:s.criticallimit,updatedBy:w,createdBy:w}),J(I.signatureimageid),D(null!==(c=null===I||void 0===I?void 0:I.invoicestartingno)&&void 0!==c?c:"00001"),K(null!==(a=null===I||void 0===I?void 0:I.invoiceprefix)&&void 0!==a?a:"INV"),V(null!==(r=null===I||void 0===I?void 0:I.signatureflag)&&void 0!==r&&r);case 9:case"end":return t.stop()}}),t)}))),[]);return Object(N.jsx)(s.Fragment,{children:Object(N.jsxs)(x.a,{blocking:m,loader:Object(N.jsx)(W,{}),children:[Object(N.jsx)(l.l,{children:Object(N.jsxs)(l.m,{className:"py-1",children:[Object(N.jsxs)(l.ib,{className:"col-lg-7 col-sm-12",children:[Object(N.jsx)("h4",{style:{fontWeight:"900"},children:"Invoice No"}),Object(N.jsx)("p",{children:"Your invoice numbers are set on auto-generate mode to save your time. "}),Object(N.jsxs)(l.ib,{className:"col-12",children:[Object(N.jsxs)(l.B,{children:[Object(N.jsx)(l.u,{children:"Prefix"}),Object(N.jsx)(l.K,{type:"text",value:R,onChange:function(e){/(^$)|(^[a-zA-Z]+$)/.test(e.target.value)&&K(e.target.value)}})]}),Object(N.jsxs)(l.B,{children:[Object(N.jsx)(l.u,{children:"Next Number"}),Object(N.jsx)(l.K,{type:"text",value:z,onChange:function(e){var t=String(parseInt(""===e.target.value?0:e.target.value));/(^$)|(^[0-9]+$)/.test(t)&&D(t.padStart(5,"0"))}})]})]}),Object(N.jsx)(l.ib,{className:"col-12 mt-1",children:Object(N.jsxs)(l.B,{children:[Object(N.jsx)(l.u,{children:"Invoice starting number"}),Object(N.jsx)(l.K,{type:"text",value:"".concat(R,"- ").concat(z),readOnly:!0})]})})]}),Object(N.jsxs)(l.ib,{className:"col-lg-6 col-sm-12 mt-2",children:[Object(N.jsx)("h4",{style:{fontWeight:"900"},children:"Signature"}),Object(N.jsxs)("div",{className:"d-flex my-1 align-items-center",children:["Add signature in the invoice.",Object(N.jsx)("div",{className:"form-switch form-check-primary ms-1",children:U?Object(N.jsx)(l.K,{type:"switch",id:"switch-priamry",defaultChecked:!0,onChange:function(e){V(e.target.checked)}}):Object(N.jsx)(l.K,{type:"switch",id:"switch-priamry",onChange:function(e){V(e.target.checked)}})}),A&&U&&Object(N.jsx)("img",{className:"img-fluid width-15-per ms-2",referrerPolicy:"no-referrer",src:"https://drive.google.com/thumbnail?id=".concat(A,"&authuser=0")})]}),Object(N.jsx)(l.ib,{className:"col-12",children:Object(N.jsx)(l.B,{children:Object(N.jsxs)(l.i,{tag:l.N,className:"mb-75 me-75",size:"sm",color:"primary",children:["Upload Signature",Object(N.jsx)(l.K,{type:"file",onChange:function(e){var t=new FileReader,c=e.target.files;t.readAsDataURL(c[0]),function(e){var t=new FormData;t.append("files[0]",e),t.append("organizationId",S),t.append("createdBy",w),h(!0),b.a.post("/google/signatureupload",t).then((function(e){h(!1),p.b.success("Signature Uploaded Successfully"),J(e.data.attachment_id)})).catch((function(e){console.log(e)}))}(e.target.files[0])},hidden:!0,accept:"image/*"})]})})})]}),Object(N.jsx)(l.B,{className:"pb-1",children:Object(N.jsxs)(l.i,{color:"primary",size:"sm",className:"mt-2",onClick:function(){!function(){h(!0);var e={signatureFlag:U,prefix:R,startingNo:z};b.a.post("/organizations/updateinvoicesetting",e).then((function(){h(!1),p.b.success("Invoice setting done Successfully")})).catch((function(e){console.log(e)}))}()},children:[" ",Object(N.jsx)(y.a,{size:16})," Submit"]})})]})}),Object(N.jsxs)(l.l,{children:[Object(N.jsx)("h4",{className:"m-2",children:"Invoice Notes:"}),Object(N.jsx)(l.m,{children:Object(N.jsx)(l.ib,{className:"",children:Object(N.jsx)(l.B,{lg:"12",children:Object(N.jsxs)(l.ib,{tag:l.H,className:"gx-2 gy-1",onSubmit:Y(Q),children:[Object(N.jsxs)(l.ib,{children:[function(e,t){var c=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return Object(N.jsxs)(l.B,{md:10,className:"d-flex mt-2",children:[Object(N.jsx)(l.N,{md:"3",className:f()("form-label ".concat(c?"required":"")),for:t,children:e}),Object(N.jsxs)(l.B,{md:"7",children:[Object(N.jsx)(O.a,{id:t,name:t,control:_,render:function(e){var c=e.field;return Object(N.jsx)(l.K,Object(a.a)({type:"invoiceNote"===t?"textarea":"text",invalid:Z[t]&&!0},c))}}),Z[t]&&Object(N.jsx)(l.I,{children:Z[t].message})]})]})}("Default invoiceNote","invoiceNote",!1),function(e,t,c){var n,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return Object(N.jsxs)(l.B,{md:10,className:"d-flex mt-2",children:[Object(N.jsx)(l.N,{md:"3",className:f()("form-label ".concat(r?"required":"")),for:t,children:e}),Object(N.jsxs)(l.B,{md:"7",children:[Object(N.jsx)(O.a,{control:_,name:t,id:t,render:function(e){var n=e.field,r=e.ref;return Object(N.jsx)(o.a,Object(a.a)(Object(a.a)({inputRef:r,className:f()("react-select",{"is-invalid":Z[t]})},n),{},{classNamePrefix:"select",options:c,value:c.find((function(e){return e.id===n.value})),onChange:function(e){return n.onChange(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),Z[t]&&Object(N.jsx)(l.I,{className:"text-danger",children:null===(n=Z[t])||void 0===n?void 0:n.message})]})]})}("Set automatic Reminder","invoiceReminderInterval",k,!1)]}),Object(N.jsxs)(l.B,{className:"mt-2 pt-1",xs:12,children:[Object(N.jsx)(l.i,{type:"submit",className:"me-1",color:"primary",children:"Submit"}),Object(N.jsx)(l.i,{color:"secondary",outline:!0,children:"Cancel"})]})]})})})})]})]})})}},701:function(e,t,c){"use strict";var a=c(8),n=c(23),r=c(0),i=c(7),s=c.n(i),o=c(13),l=(c(703),c(2)),d=function(e){var t,c=e.children,i=e.blocking,o=e.loader,d=e.className,u=e.tag,j=e.overlayColor,b=u;return Object(l.jsxs)(b,{className:s()("ui-loader",(t={},Object(n.a)(t,d,d),Object(n.a)(t,"show",i),t)),children:[c,i?Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)("div",Object(a.a)({className:"overlay"},i&&j?{style:{backgroundColor:j}}:{})),Object(l.jsx)("div",{className:"loader",children:o})]}):null]})};t.a=d,d.defaultProps={tag:"div",blocking:!1,loader:Object(l.jsx)(o.jb,{color:"primary"})}},702:function(e,t,c){"use strict";var a=c(2);t.a=function(){return Object(a.jsx)("div",{className:"fallback-spinner",children:Object(a.jsxs)("div",{className:"loading",children:[Object(a.jsx)("div",{className:"effect-1 effects"}),Object(a.jsx)("div",{className:"effect-2 effects"}),Object(a.jsx)("div",{className:"effect-3 effects"})]})})}},703:function(e,t,c){},852:function(e,t,c){"use strict";c.d(t,"b",(function(){return o})),c.d(t,"a",(function(){return l}));var a=c(11),n=c(3),r=c(5),i=c(4),s=c(6),o=Object(i.b)("appInvoiceSetting/getData",function(){var e=Object(r.a)(Object(n.a)().mark((function e(t){var c;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/organizationprefernces/get",{organizationId:t});case 2:return c=e.sent,e.abrupt("return",{data:c.data.organizationprefernces});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),l=Object(i.b)("appInvoiceSetting/addOrgPreference",function(){var e=Object(r.a)(Object(n.a)().mark((function e(t,c){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(a.a)(c),e.next=3,s.a.post("/organizationprefernces/createandupdate",t);case 3:return e.abrupt("return","");case 4:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}());Object(i.c)({name:"appInvoiceSetting",initialState:{accounts:[],total:1,params:{},allData:[]},reducers:{},extraReducers:function(e){e.addCase(o.fulfilled,(function(e,t){e.accounts=t.payload.data,e.params=t.payload.params}))}}).reducer}}]);
//# sourceMappingURL=68.347cd540.chunk.js.map