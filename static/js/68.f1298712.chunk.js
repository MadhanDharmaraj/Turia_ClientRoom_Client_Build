(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[68],{1508:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(5),i=c(8),s=c(10),r=c(12),l=c(0),o=c(6),d=c(747),j=c.n(d),u=c(332),b=c(253),m=c(365),O=c(184),p=c(742),f=c(744),v=c(745),x=c(14),h=c(7),N=c.n(h),g=c(204),y=c(61),w=c(735),I=c(736),C=(c(746),c(481),c(737),c(743),c(13)),k=c(23),S=c(25),A=c(21),z=c(28),D=c.n(z),B=c(3),P=Object(C.b)(),T=Object(C.a)(),V=Object(C.d)(),q=function(){var e,t=Object(l.useState)(!1),c=Object(r.a)(t,2),d=c[0],h=c[1],C=function(){return Object(B.jsx)(l.Fragment,{children:Object(B.jsx)(I.a,{})})},z={multiValue:function(e,t){return Object(s.a)(t),Object(i.a)(Object(i.a)({},e),{},{backgroundColor:"#7367f0"})}},q=Object(l.useState)([]),_=Object(r.a)(q,2),L=_[0],E=_[1],F=Object(l.useState)([]),R=Object(r.a)(F,2),K=R[0],H=R[1],J=Object(l.useState)([]),M=Object(r.a)(J,2),G=M[0],U=M[1],$=Object(l.useState)([]),Q=Object(r.a)($,2),W=Q[0],X=Q[1],Y=Object(l.useState)(0),Z=Object(r.a)(Y,2),ee=Z[0],te=Z[1],ce=Object(l.useState)(0),ne=Object(r.a)(ce,2),ae=ne[0],ie=ne[1],se=Object(l.useState)([]),re=Object(r.a)(se,2),le=re[0],oe=re[1],de=Object(l.useState)({}),je=Object(r.a)(de,2),ue=je[0],be=je[1],me=Object(l.useState)([]),Oe=Object(r.a)(me,2),pe=Oe[0],fe=Oe[1],ve=Object(l.useState)([]),xe=Object(r.a)(ve,2),he=xe[0],Ne=xe[1],ge=Object(l.useState)([]),ye=Object(r.a)(ge,2),we=ye[0],Ie=ye[1],Ce=Object(k.f)(),ke=Object(A.b)(),Se=Object(A.c)((function(e){return e.reimbursementInvoice})),Ae=f.d().shape({createdBy:f.f().default(V),contactId:f.f().required("Please select a Client"),uniqueIdentity:f.f(),contactEmail:f.f(),contactName:f.f(),invoiceDate:f.f(),dueDate:f.f(),paymentDue:f.f(),subTotalAmount:f.f(),totalAmount:f.f(),totalTaxAmount:f.f(),organizationId:f.f().default(P),dueAmount:f.f(),accountDetails:f.d(),bankAccountId:f.f().required("Please select Bank Account"),organizationDetails:f.d(),clientdDetails:f.d(),note:f.f().default(""),status:f.c().default(11),paymentStatus:f.c().default(5),rows:f.a().of(f.d().shape({serviceId:f.f().required("Please Select Service Item"),invoiceId:f.f(),price:f.f(),description:f.f().default(""),organizationId:f.f().default(P),actualPrice:f.f().required(),subTotalAmount:f.f().required(1)}))}),ze=Object(p.f)({resolver:Object(v.a)(Ae),defaultValues:Ae.cast()}),De=ze.handleSubmit,Be=ze.formState.errors,Pe=ze.control,Te=ze.setValue,Ve=Object(p.e)({control:Pe,name:"rows"}),qe=Ve.fields,_e=Ve.append,Le=Ve.remove,Ee=function(){var e=Object(a.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.a.post("/organizationusers/dropdown").then((function(e){var t=e.data.organizationusers;Ne(t)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Fe=function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){var c;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ke(Object(g.i)(t));case 2:c=e.sent,be(c.payload);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){o.a.post("/clients/dropdown",{status:1}).then((function(e){var t=e.data;E(t.clients)})),o.a.post("/reimbursement/dropdown",{status:1}).then((function(e){var t=e.data;H(t.reimbursements)})),o.a.post("/transactionaccounts/dropdown").then((function(e){var t,c=e.data;X(c.transactionaccounts);var n=c.transactionaccounts.find((function(e){return e.isPrimary}));n||(n=c.transactionaccounts.find((function(e){return"Cash"===e.accountBusinessName}))),fe(n),Te("accountDetails",n),Te("bankAccountId",null===(t=n)||void 0===t?void 0:t.id)})),o.a.post("/states/list").then((function(e){var t=e.data;U(t.states)})),o.a.post("/organizationprefernces/getinvoiceprops").then((function(e){Te("note",e.data.organizationprefernces.invoicenote.replace(/(\\n)/g,"\n"))})),Ee();var e={addressLine1:T.addressline1,addressLine2:T.addressline2,city:T.organizationcity,state:T.statename,zipCode:T.pinzipcode,name:T.name,imageUrl:T.organizationimageid||"",stateCode:T.stateshortname};Te("organizationDetails",e)}),[]);var Re=function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){var c;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),t.invoiceDate=D()(t.invoiceDate).valueOf(),t.paymentDue=D()(t.paymentDue).valueOf(),c=t.rows,oe(c),delete t.rows,e.next=8,ke(Object(g.a)(t));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ke=function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){var c;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return le.forEach((function(e,c){le[c].invoiceId=t})),e.next=3,ke(Object(g.b)(le));case 3:if(!(we.length>0)){e.next=7;break}return c={users:we,organizationId:P,invoiceId:t},e.next=7,ke(Object(g.c)(c));case 7:Ce("/reimbursement/view/".concat(Se.invoiceId));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),He=function(){_e({invoiceId:0,organizationId:P,serviceId:"",actualPrice:0,subTotalAmount:0,taxPrice:0,description:""})};Object(l.useEffect)((function(){He()}),[]),Object(l.useEffect)(Object(a.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null!==Se.invoiceId&&le.length>0)){e.next=3;break}return e.next=3,Ke(Se.invoiceId);case 3:case"end":return e.stop()}}),e)}))),[Se.invoiceId]);var Je=function(){var e=Pe._formValues.rows,t=0,c=0;e.forEach((function(e){t=parseFloat(e.subTotalAmount)+parseFloat(t),c=parseFloat(e.price)+parseFloat(c)})),Pe._formValues.subTotalAmount=c,Pe._formValues.totalAmount=t,Pe._formValues.dueAmount=t,te(t),ie(c)},Me=function(e){var t,c=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=Pe._formValues.rows[e];if(void 0===a.serviceId||""===a.serviceId)return!1;var i=K.find((function(e){return e.id===a.serviceId}));Te("rows[".concat(e,"].serviceId"),a.serviceId),n?(t=a.price||0,Te("rows[".concat(e,"].price"),t),Te("rows[".concat(e,"].description"),i.description)):(t=a.price,Te("rows[".concat(e,"].price"),t),Te("rows[".concat(e,"].description"),c?a.description:i.description)),Te("rows[".concat(e,"].subTotalAmount"),parseFloat(t||0).toFixed(2)),Te("rows[".concat(e,"].createdBy"),V),Je()};Object(l.useEffect)((function(){if(Object.keys(ue).length>0){var e,t={city:ue.billingaddresscity||"",addressLine1:ue.billingaddressline1||"",addressLine2:ue.billingaddressline2||"",state:ue.billingaddressstatesname||"",zipCode:ue.billingaddresszip||"",contactEmail:ue.email,contactName:ue.name,placeOfSupplyId:ue.placeofsupplyid,placeOfSupply:null!==(e=ue.placeofsupplyname)&&void 0!==e?e:""};Te("placeOfSupplyId",ue.placeofsupplyid),Te("clientDetails",t);var c={currencyId:ue.currencyid||T.currencyid,currencySymbol:ue.currenciessymbol||"",currencyShortName:ue.currenciescode||"",currencyName:ue.currenciesname||""};Te("currencyDetails",c)}}),[ue]);var Ge=function(e){var t=Array.isArray(e)?e.map((function(e){return e.id})):[];Ie(t)};return Object(B.jsx)(w.a,{blocking:d,loader:Object(B.jsx)(C,{}),children:Object(B.jsx)("form",{onSubmit:De(Re),children:Object(B.jsx)(x.ib,{className:"invoice-add",children:Object(B.jsxs)(l.Fragment,{children:[Object(B.jsx)(x.B,{xl:10,md:8,sm:12,children:Object(B.jsxs)(x.l,{className:"invoice-preview-card",children:[Object(B.jsxs)(x.m,{className:"invoice-padding pb-0",children:[function(){var e=Object.keys(Be),t=[];return Array.isArray(e)&&e.forEach((function(e){var c;"rows"!==e&&t.push(Object(B.jsxs)(x.I,{children:["$",null===(c=Be[e])||void 0===c?void 0:c.message]},e))})),t}(),Object(B.jsxs)("div",{className:"d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0",children:[Object(B.jsxs)("div",{children:[Object(B.jsx)("div",{className:"logo-wrapper",children:null===T.imageid?Object(B.jsx)(y.a,{color:"primary",className:"me-50",content:null!==T.name?null===(e=T.name)||void 0===e?void 0:e.charAt(0):""}):Object(B.jsx)("img",{referrerPolicy:"no-referrer",className:"rounded me-50",height:75,width:75,src:"https://drive.google.com/thumbnail?id=".concat(T.imageid,"&authuser=0"),alt:"Organisation Logo"})}),Object(B.jsx)("h3",{className:"text-primary invoice-logo",children:T.name}),Object(B.jsx)("p",{className:"card-text mb-25",children:T.addressline1}),Object(B.jsx)("p",{className:"card-text mb-25",children:T.addressline2}),Object(B.jsxs)("p",{className:"card-text mb-0",children:[T.organizationcity," - ",T.pinzipcode]}),Object(B.jsx)("p",{className:"card-text mb-0",children:T.statename})]}),Object(B.jsxs)("div",{className:"invoice-number-date mt-md-0 mt-2",children:[Object(B.jsxs)("div",{className:"d-flex align-items-center justify-content-md-end mb-1",children:[Object(B.jsx)("h4",{className:"invoice-title",children:"Challan"}),Object(B.jsxs)(x.L,{className:"input-group-merge invoice-edit-input-group disabled",children:[Object(B.jsx)(x.M,{children:Object(B.jsx)(u.a,{size:15})}),Object(B.jsx)(x.K,{type:"number",className:"invoice-edit-input",value:3171,placeholder:"53634",disabled:!0})]})]}),Object(B.jsxs)("div",{className:"d-flex align-items-center mb-1",children:[Object(B.jsx)("span",{className:"title required",children:"Challan Date"}),Object(B.jsx)(p.a,{control:Pe,name:"invoiceDate",id:"invoiceDate",render:function(e){var t=e.field;return Object(B.jsx)(j.a,{value:t.value,onChange:function(e,c){t.onChange(c)},options:{altInput:!0},className:"form-control invoice-edit-input date-picker"})}})]}),Object(B.jsxs)("div",{className:"d-flex align-items-center",children:[Object(B.jsx)("span",{className:"title required",children:"Due Date"}),Object(B.jsx)(p.a,{control:Pe,name:"paymentDue",id:"paymentDue",render:function(e){var t=e.field;return Object(B.jsx)(j.a,{value:t.value,onChange:function(e,c){t.onChange(c)},options:{altInput:!0},className:"form-control invoice-edit-input due-date-picker"})}})]})]})]})]}),Object(B.jsx)("hr",{className:"invoice-spacing"}),Object(B.jsxs)(x.m,{className:"invoice-padding pt-0",children:[Object(B.jsxs)(x.ib,{className:"row-bill-to invoice-spacing",children:[Object(B.jsxs)(x.B,{className:"col-bill-to ps-0",xl:"6",children:[Object(B.jsx)("h6",{className:"invoice-to-title required",children:"Reimbursement To"}),Object(B.jsx)("div",{className:"invoice-customer",children:Object(B.jsx)(p.a,{control:Pe,name:"contactId",id:"contactId",render:function(e){var t=e.field,c=e.ref;return Object(B.jsx)(O.a,Object(i.a)(Object(i.a)({inputRef:c,className:N()("react-select",{"is-invalid":Be.contactId})},t),{},{classNamePrefix:"select",options:L,value:L.find((function(e){return e.id===t.value})),onChange:function(e){t.onChange(e.id),Fe(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}})}),Object(B.jsx)(x.B,{className:"pe-0 mt-xl-2",xl:"4",children:Object(B.jsx)("table",{children:Object(B.jsxs)("tbody",{children:[Object(B.jsx)("tr",{children:Object(B.jsx)("td",{children:ue.billingaddressline1})}),Object(B.jsx)("tr",{children:Object(B.jsx)("td",{children:ue.billingaddressline2})}),Object(B.jsx)("tr",{children:Object(B.jsxs)("td",{children:[ue.billingaddresscity," ",ue.billingaddresszip&&"-","  ",ue.billingaddresszip]})}),Object(B.jsx)("tr",{children:Object(B.jsx)("td",{children:ue.billingaddressstatesname})})]})})})]}),Object(B.jsx)(x.B,{className:"col-bill-to ps-0",xl:"2"}),Object(B.jsxs)(x.B,{className:"pe-0 mt-xl-0 mt-2",xl:"4",children:[Object(B.jsx)("h6",{className:"mb-2",children:"Payment Details:"}),Object(B.jsx)("table",{children:Object(B.jsxs)("tbody",{children:[Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{className:"pe-1",children:"Bank Name:"}),Object(B.jsx)("td",{children:pe.bankName&&Object(B.jsx)("span",{className:"fw-bolder",children:pe.bankName})})]}),Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{className:"pe-1",children:"Account name:"}),Object(B.jsx)("td",{children:pe.accountHolderName&&Object(B.jsx)("span",{className:"fw-bolder",children:pe.accountHolderName})})]}),Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{className:"pe-1",children:"Branch Name:"}),Object(B.jsxs)("td",{children:[" ",pe.branchAddress&&Object(B.jsx)("span",{className:"fw-bolder",children:pe.branchAddress})]})]}),Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{className:"pe-1",children:"IFSC Code:"}),Object(B.jsx)("td",{children:pe.ifscCode&&Object(B.jsxs)("span",{className:"fw-bolder",children:[pe.ifscCode," "]})})]}),Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{className:"pe-1",children:"Account Type:"}),Object(B.jsx)("td",{children:pe.accountType&&Object(B.jsxs)("span",{className:"fw-bolder",children:[["","Saving","Current"][pe.accountType]," "]})})]}),ue.currenciescode&&Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{className:"pe-1",children:"Currency code:"}),Object(B.jsx)("td",{children:ue.currenciescode})]})]})})]})]}),(null===T||void 0===T?void 0:T.isgstregistered)&&Object(B.jsxs)(x.ib,{className:"row-bill-to invoice-spacing",children:[Object(B.jsxs)(x.B,{className:"col-bill-to ps-0",xl:"6",children:[Object(B.jsx)("h6",{className:"invoice-to-title mt-2 required",children:"Place Of Supply"}),Object(B.jsx)("div",{className:"invoice-customer",children:Object(B.jsx)(p.a,{control:Pe,name:"placeOfSupplyId",id:"placeOfSupplyId",render:function(e){var t=e.field,c=e.ref;return Object(B.jsx)(O.a,Object(i.a)(Object(i.a)({inputRef:c,className:N()("react-select",{"is-invalid":Be.placeOfSupplyId})},t),{},{classNamePrefix:"select",options:G,value:G.find((function(e){return e.id===t.value})),onChange:function(e){t.onChange(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}})}),""!==ue.gstin&&void 0!==ue.gstin&&Object(B.jsxs)("div",{className:"mt-1",children:[" GSTIN : ",ue.gstin]})]}),Object(B.jsx)(x.B,{className:"col-bill-to ps-0",xl:"2"})]})]}),Object(B.jsxs)(x.m,{className:"invoice-padding invoice-product-details",children:[qe.map((function(e,t){var c,n,a,s,r,l,o,d;return Object(B.jsx)("div",{className:"repeater-wrapper",children:Object(B.jsx)(x.ib,{children:Object(B.jsxs)(x.B,{className:"d-lg-flex product-details-border position-relative pe-0",sm:"12",children:[Object(B.jsxs)(x.ib,{className:"w-100 pe-lg-0 pe-1 py-2",children:[Object(B.jsxs)(x.B,{className:"mb-lg-0 mb-2 mt-lg-0 mt-2 col-lg-4 col-sm-12",children:[Object(B.jsx)(x.u,{className:"col-title mb-md-50 mb-0",children:"Item"}),Object(B.jsx)(p.a,{control:Pe,name:"rows[".concat(t,"].serviceId"),rules:{required:!0},render:function(e){var c,n,a=e.field,s=e.ref;return Object(B.jsx)(O.a,Object(i.a)(Object(i.a)({},a),{},{inputRef:s,className:N()("react-select",{"is-invalid":null===(c=Be.rows)||void 0===c||null===(n=c[t])||void 0===n?void 0:n.serviceId}),classNamePrefix:"select",options:K,value:K.find((function(e){return e.id===a.value})),onChange:function(e){a.onChange(e.id),Me(t,!1,!0)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),(null===(c=Be.rows)||void 0===c||null===(n=c[t])||void 0===n?void 0:n.serviceId)&&Object(B.jsx)(x.I,{children:null===(a=Be.rows)||void 0===a||null===(s=a[t])||void 0===s?void 0:s.serviceId.message}),Object(B.jsx)(p.a,{id:"rows_".concat(t,"_description"),name:"rows[".concat(t,"].description"),control:Pe,render:function(e){var c,n,a=e.field;return Object(B.jsx)(x.K,Object(i.a)({className:"mt-1",invalid:(null===(c=Be.rows)||void 0===c||null===(n=c[t])||void 0===n?void 0:n.description)&&!0,onInput:function(e){a.onChange(e),Me(t,!0,!1)}},a))}})]}),Object(B.jsxs)(x.B,{className:"my-lg-0 my-2",lg:"2",sm:"12",children:[Object(B.jsx)(x.u,{className:"col-title mb-md-2 mb-0",children:"Price"}),Object(B.jsx)(p.a,{id:"rows_".concat(t,"_price"),name:"rows[".concat(t,"].price"),control:Pe,render:function(e){var c,n,a=e.field;return Object(B.jsx)(x.K,Object(i.a)(Object(i.a)({type:"number",id:"input_rows_".concat(t,"_price"),onInput:function(e){a.onChange(e),Me(t,!1,!0)}},a),{},{invalid:(null===(c=Be.rows)||void 0===c||null===(n=c[t])||void 0===n?void 0:n.price)&&!0}))}}),(null===(r=Be.rows)||void 0===r||null===(l=r[t])||void 0===l?void 0:l.price)&&Object(B.jsx)(x.I,{children:null===(o=Be.rows)||void 0===o||null===(d=o[t])||void 0===d?void 0:d.price.message})]}),Object(B.jsxs)(x.B,{className:"my-lg-0 mt-2",lg:"1",sm:"12",children:[Object(B.jsx)(x.u,{className:"col-title mb-md-50 mb-0",children:"Amount"}),Pe._formValues.rows[t].subTotalAmount]})]}),Object(B.jsx)("div",{className:"d-lg-flex justify-content-center border-start invoice-product-actions py-50 px-25",children:Object(B.jsx)(b.a,{size:18,className:"cursor-pointer",onClick:function(){Le(t),Je()}})})]})})},e.id)})),Object(B.jsx)(x.ib,{className:"mt-1",children:Object(B.jsx)(x.B,{sm:"12",className:"px-0",children:Object(B.jsxs)(x.i,{color:"primary",size:"sm",className:"btn-add-new",onClick:function(){return He()},children:[Object(B.jsx)(m.a,{size:14,className:"me-25"})," ",Object(B.jsx)("span",{className:"align-middle",children:"Add Item"})]})})})]}),Object(B.jsx)(x.m,{className:"invoice-padding",children:Object(B.jsxs)(x.ib,{className:"invoice-sales-total-wrapper",children:[Object(B.jsx)(x.B,{className:"mt-md-0 mt-3",md:{size:"6",order:1},xs:{size:12,order:2}}),Object(B.jsx)(x.B,{className:"d-flex justify-content-end",md:{size:"6",order:2},xs:{size:12,order:1},children:Object(B.jsxs)("div",{className:"invoice-total-wrapper",children:[Object(B.jsxs)("div",{className:"invoice-total-item",children:[Object(B.jsxs)("p",{className:"invoice-total-title",children:[(null===T||void 0===T?void 0:T.isgstregistered)&&"Pre Tax","  Amount:"]}),Object(B.jsx)("p",{className:"invoice-total-amount",children:ae})]}),Object(B.jsx)("hr",{className:"my-50"}),Object(B.jsxs)("div",{className:"invoice-total-item",children:[Object(B.jsx)("p",{className:"invoice-total-title",children:"Total Payable:"}),Object(B.jsx)("p",{className:"invoice-total-amount",children:ee})]})]})})]})}),Object(B.jsx)("hr",{className:"invoice-spacing mt-0"}),Object(B.jsx)(x.m,{className:"invoice-padding py-0",children:Object(B.jsx)(x.ib,{children:Object(B.jsx)(x.B,{children:Object(B.jsxs)("div",{className:"mb-2",children:[Object(B.jsx)(x.N,{for:"note",className:"form-label fw-bold",children:"Note:"}),Object(B.jsx)(p.a,{id:"note",name:"note",control:Pe,render:function(e){var t=e.field;return Object(B.jsx)(x.K,Object(i.a)({type:"textarea",value:t.value,invalid:Be.note&&!0},t))}})]})})})})]})}),Object(B.jsxs)(x.B,{xl:2,md:4,sm:12,children:[Object(B.jsx)(x.l,{className:"invoice-action-wrapper",children:Object(B.jsxs)(x.m,{children:[Object(B.jsx)(x.i,{color:"primary",type:"submit",block:!0,outline:!0,className:"mb-75",children:"Save"}),Object(B.jsx)(x.i,{color:"warning",block:!0,outline:!0,tag:S.b,to:"/reimbursement/list",children:"Cancel"})]})}),Object(B.jsx)("div",{className:"mt-2",children:Object(B.jsxs)("div",{className:"invoice-payment-option",children:[Object(B.jsx)("p",{className:"mb-50 required",children:"Accept payments via"}),Object(B.jsx)(p.a,{control:Pe,name:"bankAccountId",rules:{required:!0},render:function(e){var t=e.field,c=e.ref;return Object(B.jsx)(O.a,Object(i.a)(Object(i.a)({},t),{},{inputRef:c,className:N()("react-select mt-1",{"is-invalid":Be.bankAccountId}),classNamePrefix:"select",options:W,value:W.find((function(e){return e.id===t.value})),onChange:function(e){t.onChange(e.id),function(e){var t=W.find((function(t){return t.id===e}));fe(t),Te("accountDetails",t),Te("bankAccountId",null===t||void 0===t?void 0:t.id)}(e.id)},getOptionLabel:function(e){return e.accountHolderName},getOptionValue:function(e){return e.id}}))}})]})}),Object(B.jsx)("div",{className:"mt-2",children:Object(B.jsxs)("div",{className:"invoice-payment-option",children:[Object(B.jsx)("p",{className:"mb-50",children:"Select Employee"}),Object(B.jsx)(p.a,{control:Pe,name:"reviewer",id:"reviewer",render:function(e){var t=e.field,c=e.value,n=e.ref;return Object(B.jsx)(O.a,Object(i.a)(Object(i.a)({inputRef:n,className:N()("react-select",{"is-invalid":Be.reviewer})},t),{},{classNamePrefix:"select",options:he,isMulti:!0,value:c,onChange:Ge,getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id},styles:z}))}})]})})]})]})})})})};t.default=function(){return Object(B.jsx)("div",{className:"invoice-add-wrapper",children:Object(B.jsx)(q,{})})}},735:function(e,t,c){"use strict";var n=c(8),a=c(27),i=c(0),s=c(7),r=c.n(s),l=c(14),o=(c(738),c(3)),d=function(e){var t,c=e.children,s=e.blocking,l=e.loader,d=e.className,j=e.tag,u=e.overlayColor,b=j;return Object(o.jsxs)(b,{className:r()("ui-loader",(t={},Object(a.a)(t,d,d),Object(a.a)(t,"show",s),t)),children:[c,s?Object(o.jsxs)(i.Fragment,{children:[Object(o.jsx)("div",Object(n.a)({className:"overlay"},s&&u?{style:{backgroundColor:u}}:{})),Object(o.jsx)("div",{className:"loader",children:l})]}):null]})};t.a=d,d.defaultProps={tag:"div",blocking:!1,loader:Object(o.jsx)(l.jb,{color:"primary"})}},736:function(e,t,c){"use strict";var n=c(3);t.a=function(){return Object(n.jsx)("div",{className:"fallback-spinner",children:Object(n.jsxs)("div",{className:"loading",children:[Object(n.jsx)("div",{className:"effect-1 effects"}),Object(n.jsx)("div",{className:"effect-2 effects"}),Object(n.jsx)("div",{className:"effect-3 effects"})]})})}},737:function(e,t,c){},738:function(e,t,c){},743:function(e,t,c){},746:function(e,t,c){}}]);
//# sourceMappingURL=68.f1298712.chunk.js.map