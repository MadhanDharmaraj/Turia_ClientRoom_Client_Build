(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[28],{1418:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(5),i=n(10),s=n(0),r=n(22),o=n(25),l=n(6),d=n(13),u=n(8),b=n(12),j=n(715),m=n.n(j),f=n(299),p=n(224),v=n(332),O=n(183),x=n(704),h=n(707),g=n(708),N=n(7),y=n.n(N),w=n(187),I=n(700),A=n(701),k=(n(723),n(446),n(709),n(719),n(774)),C=n(20),S=n(743),z=n(21),B=n(184),P=n.n(B),T=n(185),F=n.n(T),_=n(42),D=n.n(_),V=n(2),L=Object(C.b)(),q=Object(C.a)(),E=Object(C.d)(),R=function(e){var t,n,j,N=e.data,C=Object(s.useState)(!1),B=Object(i.a)(C,2),T=B[0],_=B[1],R=function(){return Object(V.jsx)(s.Fragment,{children:Object(V.jsx)(A.a,{})})},G={multiValue:function(e,t){return Object(b.a)(t),Object(u.a)(Object(u.a)({},e),{},{backgroundColor:"#7367f0"})}},Y=Object(r.g)().id,H=F()(P.a),J=Object(s.useState)([]),M=Object(i.a)(J,2),U=M[0],K=M[1],Z=Object(s.useState)([]),Q=Object(i.a)(Z,2),W=Q[0],X=Q[1],$=Object(s.useState)([]),ee=Object(i.a)($,2),te=ee[0],ne=ee[1],ae=Object(s.useState)([]),ce=Object(i.a)(ae,2),ie=ce[0],se=ce[1],re=Object(s.useState)([]),oe=Object(i.a)(re,2),le=oe[0],de=oe[1],ue=Object(s.useState)(0),be=Object(i.a)(ue,2),je=be[0],me=be[1],fe=Object(s.useState)(0),pe=Object(i.a)(fe,2),ve=pe[0],Oe=pe[1],xe=Object(s.useState)(0),he=Object(i.a)(xe,2),ge=he[0],Ne=he[1],ye=Object(s.useState)(0),we=Object(i.a)(ye,2),Ie=we[0],Ae=we[1],ke=Object(s.useState)([]),Ce=Object(i.a)(ke,2),Se=Ce[0],ze=Ce[1],Be=Object(s.useState)([]),Pe=Object(i.a)(Be,2),Te=Pe[0],Fe=Pe[1],_e=Object(s.useState)([]),De=Object(i.a)(_e,2),Ve=De[0],Le=De[1],qe=Object(s.useState)({}),Ee=Object(i.a)(qe,2),Re=Ee[0],Ge=Ee[1],Ye=Object(s.useState)([]),He=Object(i.a)(Ye,2),Je=He[0],Me=He[1],Ue=Object(s.useState)([]),Ke=Object(i.a)(Ue,2),Ze=Ke[0],Qe=Ke[1],We=Object(s.useState)([]),Xe=Object(i.a)(We,2),$e=Xe[0],et=Xe[1],tt=Object(s.useState)([]),nt=Object(i.a)(tt,2),at=nt[0],ct=nt[1],it=Object(s.useState)([]),st=Object(i.a)(it,2),rt=st[0],ot=st[1],lt=Object(r.f)(),dt=Object(z.b)(),ut=h.d().shape({createdBy:h.f().default(E),contactId:h.f().required("Please select a Client"),uniqueIdentity:h.f(),contactEmail:h.f(),contactName:h.f(),invoiceDate:h.f(),paymentDue:h.f(),placeOfSupplyId:h.f().required("Please select a Place Of Supply"),subTotalAmount:h.f(),totalAmount:h.f(),placeOfSupplyOthers:h.f().default(""),totalTaxAmount:h.f(),organizationId:h.f().default(L),isRcmApplicable:h.b().default(!1),isgstregistered:h.b().default(!0),dueAmount:h.f(),billingAddressLine1:h.f(),billingAddressLine2:h.f(),billingAddressState:h.f(),billingAddressCity:h.f(),billingAddressZipCode:h.f(),billingCurrencyId:h.f().default(q.currencyid),bankAccountBankName:h.f(),bankAccountBranchName:h.f(),bankAccountHolderName:h.f(),bankAccountId:h.f().required("Please Select Account"),billingAddressStateOthers:h.f().default(""),bankAccountIfscCode:h.f(),bankAccountNumber:h.f(),organizationAddressLine1:h.f().default(q.addressline1),organizationAddressLine2:h.f().default(q.addressline2),organizationCity:h.f().default(q.organizationcity),organizationState:h.f().default(q.statename),organizationStateOthers:h.f().default(null!==(t=q.stateothers)&&void 0!==t?t:""),organizationZipCode:h.f().default(q.pinzipcode),convertionAmount:h.f().default(0),organizationName:h.f().default(q.name),organizationImageUrl:h.f().default(q.organizationimageid||""),organizationStateCode:h.f().default(q.stateshortname),organizationGstin:h.f().default(q.gstin),gstin:h.f(),note:h.f().default(""),status:h.c().default(4),calculateTaxes:h.f(),paymentStatus:h.c().default(5),rows:h.a().of(h.d().shape({serviceId:h.f().required("Please Select Service Item"),invoiceId:h.f(),sacCode:h.f(),price:h.f(),organizationId:h.f().default(L),exemptionReasonId:h.f().default(""),isTaxApplicable:h.b().default(!0),actualPrice:h.f().required(),taxGroupId:h.f().required("Pleace Select Tax"),subTotalAmount:h.f().required(1),taxes:h.f()}))}),bt=Object(x.f)({resolver:Object(g.a)(ut),defaultValues:ut.cast()}),jt=bt.handleSubmit,mt=bt.formState.errors,ft=bt.control,pt=bt.setValue,vt=bt.reset,Ot=Object(x.e)({control:ft,name:"rows",keyName:"rowid"}),xt=Ot.fields,ht=Ot.append,gt=Ot.remove,Nt=Object(z.c)((function(e){return e.invoice})),yt=function(){var e=Object(c.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l.a.post("/organizationusers/dropdown").then((function(e){var t=e.data.organizationusers;Le(t)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),wt=function(e){return H.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(){var t=Object(c.a)(Object(a.a)().mark((function t(n){return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.value){t.next=7;break}return t.next=3,dt(Object(w.g)(e));case 3:return H.fire({icon:"success",title:"Deleted!",text:"Conatct has been deleted.",customClass:{confirmButton:"btn btn-success"}}),t.abrupt("return",!0);case 7:if(n.dismiss!==H.DismissReason.cancel){t.next=9;break}return t.abrupt("return",!1);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())};Object(s.useEffect)((function(){l.a.post("/clients/dropdown",{status:1}).then((function(e){var t=e.data;K(t.clients)})),l.a.post("/services/dropdown",{status:1}).then((function(e){var t=e.data;X(t.services)})),l.a.post("/taxgroups/dropdown").then((function(e){var t=e.data;ne(t.taxgroups)})),l.a.post("/states/list").then((function(e){var t=e.data;se(t.states)})),l.a.post("/transactionaccounts/dropdown").then((function(e){var t=e.data;de(t.transactionaccounts);var n=t.transactionaccounts.find((function(e){return e.isPrimary}));n||(n=t.transactionaccounts.find((function(e){return"Cash"===e.accountBusinessName}))),Qe(n),pt("bankAccountBankName",n.bankName),pt("bankAccountBranchName",n.branchAddress),pt("bankAccountHolderName",n.accountHolderName),pt("bankAccountId",n.id),pt("bankAccountIfscCode",n.ifscCode),pt("bankAccountNumber",n.accountNumber)})),l.a.post("/exemptionreasons/dropdown").then((function(e){var t=e.data;et(t.exemptionreasons)})),yt(),l.a.post("/taskinvoices/getparticipants",{invoiceId:Y}).then((function(e){var t=e.data.taskinvoiceparticipants.map((function(e){return e.id}));ct(t),ot(e.data.taskinvoiceparticipants)})).catch((function(e){console.log(e)}))}),[]);var It=function(){ht({invoiceId:0,organizationId:L,serviceId:"",exemptionReasonId:0,isTaxApplicable:!0,sacCode:"",actualPrice:0,taxGroupId:"",subTotalAmount:0,taxPrice:0,description:""})},At=function(){var e=Object(c.a)(Object(a.a)().mark((function e(t){var n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,dt(Object(w.i)(t));case 2:n=e.sent,Ge(n.payload),gt(),""!==n.payload.gstin?ht({invoiceId:0,organizationId:L,serviceId:"",exemptionReasonId:0,isTaxApplicable:!0,sacCode:"",actualPrice:0,taxGroupId:"",subTotalAmount:0,taxPrice:0,description:""}):ht({invoiceId:0,organizationId:L,serviceId:"",exemptionReasonId:0,isTaxApplicable:!1,sacCode:"",actualPrice:0,taxGroupId:"",subTotalAmount:0,taxPrice:0,description:""});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),kt=function(){var e=Object(c.a)(Object(a.a)().mark((function e(t){var n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.invoiceDate=D()(t.invoiceDate).startOf("D").valueOf(),t.paymentDue=D()(t.paymentDue).startOf("D").valueOf(),_(!0),n=t.rows,ze(n),delete t.rows,e.next=8,dt(Object(w.a)(t));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ct=function(){var e=Object(c.a)(Object(a.a)().mark((function e(t){var n,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Se.forEach((function(e,n){Se[n].invoiceId=t,Se[n].updatedBy=E})),e.next=3,dt(Object(w.b)(Se));case 3:if(!(at.length>0)){e.next=9;break}return n=[],at.forEach((function(e){var t=rt.findIndex((function(t){return t.id===e}));-1!==t&&n.push(rt[t].id)})),c={users:at,organizationId:L,invoiceId:t,deletedUser:n},e.next=9,dt(Object(w.c)(c));case 9:lt("/proposal/view/".concat(Nt.invoiceId));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(s.useEffect)(Object(c.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null!==Nt.invoiceId&&Se.length>0)){e.next=3;break}return e.next=3,Ct(Nt.invoiceId);case 3:case"end":return e.stop()}}),e)}))),[Nt.invoiceId,Se]),Object(s.useEffect)((function(){It()}),[]);var St=function(){var e=ft._formValues.rows,t=0,n=0,a=0;e.forEach((function(e){t=parseFloat(e.subTotalAmount)+parseFloat(t),n=parseFloat(e.price)+parseFloat(n),a=parseFloat(a)+parseFloat(e.taxPrice)})),ft._formValues.subTotalAmount=n,ft._formValues.totalAmount=t,ft._formValues.dueAmount=t,ft._formValues.totalTaxAmount=a,me(t),Ae(parseFloat(ge*t).toFixed(2)),Oe(n),function(){var e;e=ft._formValues.rows.map((function(e){return e.taxes?Object(S.b)(e.taxes):[]})).flat().reduce((function(e,t){if(void 0!==t){var n=e.find((function(e){return t.taxName===e.taxName}));n?(n.taxAmount=parseFloat(n.taxAmount)+parseFloat(t.taxAmount),n.taxAmount=String(n.taxAmount)):e.push(Object.assign({},t))}return e}),[]),Fe(e),pt("calculateTaxes",JSON.stringify(e))}()},zt=function(){var e=Object(c.a)(Object(a.a)().mark((function e(t){var n,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===(n=ft._formValues.rows[t].id)){e.next=5;break}return e.next=4,wt(n);case 4:c=e.sent;case 5:c&&gt(t),St();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Bt=function(e){var t,n,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],c=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=ft._formValues.rows[e];if(void 0===o.serviceId||""===o.serviceId)return!1;if(0===W.length)return!1;var l=W.find((function(e){return e.id===o.serviceId}));pt("rows[".concat(e,"].serviceId"),o.serviceId),r?(pt("rows[".concat(e,"].sacCode"),l.saccode||""),t=l.sellingprice||0,n=l.taxgroupid,pt("rows[".concat(e,"].actualPrice"),t),pt("rows[".concat(e,"].price"),String(l.sellingprice)||0),pt("rows[".concat(e,"].taxGroupId"),n),pt("rows[".concat(e,"].description"),l.description),pt("rows[".concat(e,"].exemptionReasonId"),l.exemptionreasonid||"")):(pt("rows[".concat(e,"].sacCode"),i?o.sacCode:l.saccode),t=c?o.price:l.sellingprice||0,n=s?o.taxGroupId:l.taxgroupid,pt("rows[".concat(e,"].price"),t),pt("rows[".concat(e,"].actualPrice"),String(l.sellingprice)||0),pt("rows[".concat(e,"].taxGroupId"),n),pt("rows[".concat(e,"].description"),a?o.description:l.description),pt("rows[".concat(e,"].exemptionReasonId"),l.exemptionreasonid||""));var d=0,u=[],b=te.find((function(e){return e.id===n})),j=void 0!==b?!b.nontaxableflag:l.istaxapplicable||!1;j=j&&(null===q||void 0===q?void 0:q.isgstregistered)&&(null===q||void 0===q?void 0:q.isgstregistered)&&"IN"===Re.billingaddresscountriesshorcode,pt("rows[".concat(e,"].isTaxApplicable"),j),j&&void 0!==b&&Je.forEach((function(e){if(e.taxid===n){var a;a=Object(S.a)(t,e.percentage,2),d=parseFloat(d)+parseFloat(a);var c={};c.taxName="".concat(e.name," (").concat(e.percentage,"%)"),c.taxId=parseInt(e.id),c.taxNameValue=e.name,c.taxPercentage=String(e.percentage),c.taxAmount=String(a),u.push(c)}})),pt("rows[".concat(e,"].subTotalAmount"),parseFloat(parseFloat(d||0)+parseFloat(t||0)).toFixed(2)),pt("rows[".concat(e,"].taxPrice"),parseFloat(d).toFixed(2)),pt("rows[".concat(e,"].taxes"),JSON.stringify(u)),pt("rows[".concat(e,"].updatedBy"),E),St()},Pt=function(){var e=1;q.stateid===ft._formValues.placeOfSupplyId&&(e=2),function(e){var t={type:e};l.a.post("/taxvalues/list",t).then((function(e){var t=e.data;Me(t.taxvalues)}))}(e)};Object(s.useEffect)((function(){Je.length>0&&"object"===typeof ft._formValues.rows&&ft._formValues.rows.forEach((function(e,t){Bt(t,!0,!0,!0,!0,!1)}))}),[Je]);var Tt=function(e){var t=le.find((function(t){return t.id===e}));void 0!==t&&(Qe(t),pt("bankAccountBankName",t.bankName),pt("bankAccountBranchName",t.branchAddress),pt("bankAccountHolderName",t.accountHolderName),pt("bankAccountIfscCode",t.ifscCode),pt("bankAccountNumber",t.accountNumber))};Object(s.useEffect)((function(){le.length>0&&Tt(ft._formValues.bankAccountId)}),[le]),Object(s.useEffect)(Object(c.a)(Object(a.a)().mark((function e(){var t,n,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(Object.keys(Re).length>0)){e.next=24;break}if(pt("billingAddressCity",Re.billingaddresscity||""),pt("billingAddressLine1",Re.billingaddressline1||""),pt("billingAddressLine2",Re.billingaddressline2||""),pt("billingAddressState",Re.billingaddressstatesname||""),pt("billingAddressZipCode",Re.billingaddresszip||""),pt("billingCurrencyId",Re.currencyid||q.currencyid),pt("billingCurrencySymbol",Re.currenciessymbol||""),pt("billingCurrencyShortName",Re.currenciescode||""),pt("billingCurrencyName",Re.currenciesname||""),pt("contactEmail",Re.email||""),pt("gstin",Re.gstin||""),pt("contactName",Re.name||""),pt("placeOfSupplyId",Re.placeofsupplyid||""),pt("convertionAmount",0),gt(),It(),null!==q&&void 0!==q&&q.isgstregistered&&"IN"===Re.billingaddresscountriesshorcode?Pt():(pt("billingAddressStateOthers",null!==(t=Re.billingaddressstateothers)&&void 0!==t?t:""),pt("placeOfSupplyOthers",null!==(n=Re.placeofsupplyothers)&&void 0!==n?n:"")),"IN"===Re.billingaddresscountriesshorcode){e.next=24;break}return e.next=21,Object(k.a)(Re.currenciescode.toUpperCase(),q.currencycode);case 21:c=e.sent,Ne(c),pt("convertionAmount",c);case 24:case"end":return e.stop()}}),e)}))),[Re]);var Ft=function(){var e=Object(c.a)(Object(a.a)().mark((function e(t){var n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===t){e.next=5;break}return e.next=3,dt(Object(w.k)(t));case 3:n=e.sent,pt("rows",n.payload);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(s.useEffect)(Object(c.a)(Object(a.a)().mark((function e(){var t;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(Object.keys(N).length>0)){e.next=7;break}return vt({contactId:(t=N).contactid,uniqueIdentity:t.uniqueno,contactEmail:t.contactemail,contactName:t.contactname,invoiceDate:D()(t.invoicedate,"x").format("MMM DD, YYYY"),paymentDue:D()(t.paymentdue,"x").format("MMM DD, YYYY"),placeOfSupplyId:t.placeofsupplyid,subTotalAmount:t.subtotalamount,totalAmount:t.totalamount,totalTaxAmount:t.totaltaxamount,isRcmApplicable:t.isrcmapplicable,dueAmount:t.dueamount,billingAddressLine1:t.billingaddressline1||"",billingAddressLine2:t.billingaddressline2||"",billingAddressState:t.billingaddressstate||"",billingAddressCity:t.billingaddresscity||"",billingAddressZipCode:t.billingaddresszipcode||"",billingCurrencyId:t.billingcurrencyid||"",bankAccountBankName:t.bankaccountbankname,bankAccountBranchName:t.bankaccountbranchname,bankAccountHolderName:t.bankaccountholdername,bankAccountId:t.bankaccountid,bankAccountIfscCode:t.bankaccountifsccode,bankAccountNumber:t.bankaccountnumber,organizationAddressLine1:""===t.organizationaddressline1?q.addressline1:t.organizationaddressline1,organizationAddressLine2:""===t.organizationaddressline2?q.addressline2:t.organizationaddressline2,organizationCity:""===t.organizationcity?q.organizationcity:t.organizationcity,organizationState:""===t.organizationstate?q.statename:t.organizationstate,organizationZipCode:""===t.organizationzipcode?q.pinzipcode:t.organizationzipcode,organizationName:""===t.organizationname?q.name:t.organizationname,organizationImageUrl:null===t.organizationimageurl?q.organizationimageid:t.organizationimageurl,organizationStateCode:t.organizationstatecode||"",organizationGstin:""===t.organizationgstin?q.gstin:t.gstin,gstin:t.gstin,note:t.note}),e.next=5,At(t.contactid);case 5:return e.next=7,Ft(t.id);case 7:case"end":return e.stop()}}),e)}))),[N]);var _t=function(e){var t=Array.isArray(e)?e.map((function(e){return e.id})):[];ct(t)};return Object(V.jsx)(I.a,{blocking:T,loader:Object(V.jsx)(R,{}),children:Object(V.jsx)("form",{onSubmit:jt(kt),children:Object(V.jsx)(d.ib,{className:"invoice-add",children:Object(V.jsxs)(s.Fragment,{children:[Object(V.jsx)(d.B,{xl:10,md:8,sm:12,children:Object(V.jsxs)(d.l,{className:"invoice-preview-card",children:[Object(V.jsxs)(d.m,{className:"invoice-padding pb-0",children:[function(){var e=Object.keys(mt),t=[];return Array.isArray(e)&&e.forEach((function(e){var n;"rows"!==e&&t.push(Object(V.jsxs)(d.I,{children:["$",null===(n=mt[e])||void 0===n?void 0:n.message]},e))})),t}(),Object(V.jsxs)("div",{className:"d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0",children:[Object(V.jsxs)("div",{children:[Object(V.jsx)("div",{className:"logo-wrapper",children:null===q.imageid?Object(V.jsx)(Avatar,{color:"primary",className:"me-50",content:null!==q.name?null===(n=q.name)||void 0===n?void 0:n.charAt(0):""}):Object(V.jsx)("img",{referrerPolicy:"no-referrer",className:"rounded me-50",height:75,width:75,src:"https://drive.google.com/thumbnail?id=".concat(q.imageid,"&authuser=0"),alt:"Organisation Logo"})}),Object(V.jsx)("h3",{className:"text-primary invoice-logo",children:q.name}),Object(V.jsx)("p",{className:"card-text mb-25",children:q.addressline1}),Object(V.jsx)("p",{className:"card-text mb-25",children:q.addressline2}),Object(V.jsxs)("p",{className:"card-text mb-0",children:[q.organizationcity," - ",q.pinzipcode]}),Object(V.jsx)("p",{className:"card-text mb-0",children:q.statename})]}),Object(V.jsxs)("div",{className:"invoice-number-date mt-md-0 mt-2",children:[Object(V.jsxs)("div",{className:"d-flex align-items-center justify-content-md-end mb-1",children:[Object(V.jsx)("h4",{className:"invoice-title",children:"Profoma Invoice"}),Object(V.jsxs)(d.L,{className:"input-group-merge invoice-edit-input-group disabled",children:[Object(V.jsx)(d.M,{children:Object(V.jsx)(f.a,{size:15})}),Object(V.jsx)(d.K,{type:"number",className:"invoice-edit-input",value:3171,placeholder:"53634",disabled:!0})]})]}),Object(V.jsxs)("div",{className:"d-flex align-items-center justify-content-md-between mb-1",children:[Object(V.jsx)("span",{className:"title required",children:"Profoma Invoice Date"}),Object(V.jsx)(x.a,{control:ft,name:"invoiceDate",id:"invoiceDate",render:function(e){var t=e.field;return Object(V.jsx)(m.a,{value:t.value,onChange:function(e,n){t.onChange(n)},options:{altInput:!0},className:"form-control invoice-edit-input date-picker"})}})]}),Object(V.jsxs)("div",{className:"d-flex align-items-center justify-content-md-between",children:[Object(V.jsx)("span",{className:"title required",children:"Due Date"}),Object(V.jsx)(x.a,{control:ft,name:"paymentDue",id:"paymentDue",render:function(e){var t=e.field;return Object(V.jsx)(m.a,{value:t.value,onChange:function(e,n){t.onChange(n)},options:{altInput:!0},className:"form-control invoice-edit-input due-date-picker"})}})]})]})]})]}),Object(V.jsx)("hr",{className:"invoice-spacing"}),Object(V.jsxs)(d.m,{className:"invoice-padding pt-0",children:[Object(V.jsxs)(d.ib,{className:"row-bill-to invoice-spacing",children:[Object(V.jsxs)(d.B,{className:"col-bill-to ps-0",xl:"6",children:[Object(V.jsx)("h6",{className:"invoice-to-title required",children:"Profoma Invoice To"}),Object(V.jsx)("div",{className:"invoice-customer",children:Object(V.jsx)(x.a,{control:ft,name:"contactId",id:"contactId",render:function(e){var t=e.field,n=e.ref;return Object(V.jsx)(O.a,Object(u.a)(Object(u.a)({inputRef:n,className:y()("react-select",{"is-invalid":mt.contactId})},t),{},{classNamePrefix:"select",options:U,value:U.find((function(e){return e.id===t.value})),onChange:function(e){t.onChange(e.id),At(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}})}),Object(V.jsx)(d.B,{className:"pe-0 mt-xl-2",xl:"4",children:Object(V.jsx)("table",{children:Object(V.jsxs)("tbody",{children:[Object(V.jsx)("tr",{children:Object(V.jsx)("td",{children:Re.billingaddressline1})}),Object(V.jsx)("tr",{children:Object(V.jsx)("td",{children:Re.billingaddressline2})}),Object(V.jsx)("tr",{children:Object(V.jsxs)("td",{children:[Re.billingaddresscity," ",Re.billingaddresszip&&"-","  ",Re.billingaddresszip]})}),Object(V.jsx)("tr",{children:Object(V.jsx)("td",{children:null!==(j=Re.billingaddressstatesname)&&void 0!==j?j:Re.billingaddressstateothers})})]})})})]}),Object(V.jsx)(d.B,{className:"col-bill-to ps-0",xl:"2"}),Object(V.jsxs)(d.B,{className:"pe-0 mt-xl-0 mt-2",xl:"4",children:[Object(V.jsx)("h6",{className:"mb-2",children:"Payment Details:"}),Object(V.jsx)("table",{children:Object(V.jsxs)("tbody",{children:[Object(V.jsxs)("tr",{children:[Object(V.jsx)("td",{className:"pe-1",children:"Bank Name:"}),Object(V.jsx)("td",{children:Ze.bankName&&Object(V.jsx)("span",{className:"fw-bolder",children:Ze.bankName})})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("td",{className:"pe-1",children:"Account name:"}),Object(V.jsx)("td",{children:Ze.accountHolderName&&Object(V.jsx)("span",{className:"fw-bolder",children:Ze.accountHolderName})})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("td",{className:"pe-1",children:"Branch Name:"}),Object(V.jsxs)("td",{children:[" ",Ze.branchAddress&&Object(V.jsx)("span",{className:"fw-bolder",children:Ze.branchAddress})]})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("td",{className:"pe-1",children:"IFSC Code:"}),Object(V.jsx)("td",{children:Ze.ifscCode&&Object(V.jsxs)("span",{className:"fw-bolder",children:[Ze.ifscCode," "]})})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("td",{className:"pe-1",children:"Account Type:"}),Object(V.jsx)("td",{children:Ze.accountType&&Object(V.jsxs)("span",{className:"fw-bolder",children:[accountTypeArr[Ze.accountType]," "]})})]})]})})]})]}),(null===q||void 0===q?void 0:q.isgstregistered)&&Object(V.jsxs)(d.ib,{className:"row-bill-to invoice-spacing",children:[Object(V.jsxs)(d.B,{className:"col-bill-to ps-0",xl:"6",children:[Object(V.jsx)("h6",{className:"invoice-to-title mt-2 required",children:"Place Of Supply"}),Object(V.jsxs)("div",{className:"invoice-customer",children:[(null===q||void 0===q?void 0:q.isgstregistered)&&"IN"===Re.billingaddresscountriesshorcode&&Object(V.jsx)(x.a,{control:ft,name:"placeOfSupplyId",id:"placeOfSupplyId",render:function(e){var t=e.field,n=e.ref;return Object(V.jsx)(O.a,Object(u.a)(Object(u.a)({inputRef:n,className:y()("react-select",{"is-invalid":mt.placeOfSupplyId})},t),{},{classNamePrefix:"select",options:ie,value:ie.find((function(e){return e.id===t.value})),onChange:function(e){t.onChange(e.id),Pt()},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),(null===q||void 0===q?void 0:q.isgstregistered)&&"IN"!==Re.billingaddresscountriesshorcode&&(null===Re||void 0===Re?void 0:Re.placeofsupplyothers)]}),(null===q||void 0===q?void 0:q.isgstregistered)&&"IN"===Re.billingaddresscountriesshorcode&&Object(V.jsxs)("div",{className:"mt-1",children:[" GSTIN : ",Re.gstin]})]}),Object(V.jsx)(d.B,{className:"col-bill-to ps-0",xl:"2"}),Object(V.jsx)(d.B,{className:"pe-0 mt-xl-0 mt-2",xl:"4",children:Object(V.jsx)("table",{children:Object(V.jsx)("tbody",{children:Object(V.jsxs)("tr",{children:[Object(V.jsx)("td",{className:"invoice-to-title mt-2 ",children:"Currency Code:"}),Object(V.jsx)("td",{children:Re.currenciescode})]})})})})]})]}),Object(V.jsxs)(d.m,{className:"invoice-padding invoice-product-details",children:[xt.map((function(e,t){var n,a,c,i,s,r,o,l,b,j,m,f,v,h,g,N;return Object(V.jsx)("div",{className:"repeater-wrapper",children:Object(V.jsx)(d.ib,{children:Object(V.jsxs)(d.B,{className:"d-lg-flex product-details-border position-relative pe-0",sm:"12",children:[Object(V.jsxs)(d.ib,{className:"w-100 pe-lg-0 pe-1 py-2",children:[Object(V.jsxs)(d.B,{className:"mb-lg-0 mb-2 mt-lg-0 mt-2 col-lg-4 col-sm-12",children:[Object(V.jsx)(d.u,{className:"col-title mb-md-50 mb-0",children:"Item"}),Object(V.jsx)(x.a,{control:ft,name:"rows[".concat(t,"].serviceId"),rules:{required:!0},render:function(e){var n,a,c=e.field,i=e.ref;return Object(V.jsx)(O.a,Object(u.a)(Object(u.a)({},c),{},{inputRef:i,className:y()("react-select",{"is-invalid":null===(n=mt.rows)||void 0===n||null===(a=n[t])||void 0===a?void 0:a.serviceId}),classNamePrefix:"select",options:W,value:W.find((function(e){return e.id===c.value})),onChange:function(e){c.onChange(e.id),Bt(t,!1,!1,!1,!1,!0)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),(null===(n=mt.rows)||void 0===n||null===(a=n[t])||void 0===a?void 0:a.serviceId)&&Object(V.jsx)(d.I,{children:null===(c=mt.rows)||void 0===c||null===(i=c[t])||void 0===i?void 0:i.serviceId.message}),Object(V.jsx)(x.a,{id:"rows_".concat(t,"_description"),name:"rows[".concat(t,"].description"),control:ft,render:function(e){var n,a,c=e.field;return Object(V.jsx)(d.K,Object(u.a)({className:"mt-1",invalid:(null===(n=mt.rows)||void 0===n||null===(a=n[t])||void 0===a?void 0:a.description)&&!0,onInput:function(e){c.onChange(e),Bt(t,!0,!1,!1,!1,!1)}},c))}})]}),e.isTaxApplicable&&Object(V.jsxs)(d.B,{className:"my-lg-0 my-2 col-lg-2 col-sm-12",children:[Object(V.jsx)(d.u,{className:"col-title mb-md-2 mb-0",children:"SAC Code"}),Object(V.jsx)(x.a,{id:"rows_".concat(t,"_sacCode"),name:"rows[".concat(t,"].sacCode"),control:ft,render:function(e){var n,a,c=e.field;return Object(V.jsx)(d.K,Object(u.a)({type:"text",invalid:(null===(n=mt.rows)||void 0===n||null===(a=n[t])||void 0===a?void 0:a.sacCode)&&!0,onInput:function(e){c.onChange(e),Bt(t,!1,!0,!0,!1,!1)}},c))}}),(null===(s=mt.rows)||void 0===s||null===(r=s[t])||void 0===r?void 0:r.sacCode)&&Object(V.jsx)(d.I,{children:null===(o=mt.rows)||void 0===o||null===(l=o[t])||void 0===l?void 0:l.sacCode.message})]}),Object(V.jsxs)(d.B,{className:"my-lg-0 my-2",lg:"2",sm:"12",children:[Object(V.jsx)(d.u,{className:"col-title mb-md-2 mb-0",children:"Price"}),Object(V.jsx)(x.a,{id:"rows_".concat(t,"_price"),name:"rows[".concat(t,"].price"),control:ft,render:function(e){var n,a,c=e.field;return Object(V.jsx)(d.K,Object(u.a)(Object(u.a)({type:"number",id:"input_rows_".concat(t,"_price"),onInput:function(e){c.onChange(e),Bt(t,!1,!0,!1,!1,!1)}},c),{},{invalid:(null===(n=mt.rows)||void 0===n||null===(a=n[t])||void 0===a?void 0:a.price)&&!0}))}}),(null===(b=mt.rows)||void 0===b||null===(j=b[t])||void 0===j?void 0:j.price)&&Object(V.jsx)(d.I,{children:null===(m=mt.rows)||void 0===m||null===(f=m[t])||void 0===f?void 0:f.price.message})]}),e.isTaxApplicable&&Object(V.jsxs)(d.B,{className:"my-lg-0 mt-2",lg:"2",sm:"12",children:[Object(V.jsx)(d.u,{className:"col-title mb-md-50 mb-0",children:"Tax Rate"}),Object(V.jsx)(x.a,{control:ft,name:"rows[".concat(t,"].taxGroupId"),rules:{required:!0},render:function(e){var n,a,c=e.field,i=e.ref;return Object(V.jsx)(O.a,Object(u.a)(Object(u.a)({},c),{},{inputRef:i,className:y()("react-select",{"is-invalid":null===(n=mt.rows)||void 0===n||null===(a=n[t])||void 0===a?void 0:a.taxGroupId}),classNamePrefix:"select",options:te,value:te.find((function(e){return e.id===c.value})),onChange:function(e){c.onChange(e.id),Bt(t,!1,!0,!1,!0,!1)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),(null===(v=mt.rows)||void 0===v||null===(h=v[t])||void 0===h?void 0:h.taxGroupId)&&Object(V.jsx)(d.I,{children:null===(g=mt.rows)||void 0===g||null===(N=g[t])||void 0===N?void 0:N.taxGroupId.message}),!e.isTaxApplicable&&Object(V.jsx)(x.a,{control:ft,name:"rows[".concat(t,"].exemptionReasonId"),rules:{required:!0},render:function(e){var n,a,c=e.field,i=e.ref;return Object(V.jsx)(O.a,Object(u.a)(Object(u.a)({},c),{},{inputRef:i,className:y()("react-select mt-1",{"is-invalid":null===(n=mt.rows)||void 0===n||null===(a=n[t])||void 0===a?void 0:a.taxGroupId}),classNamePrefix:"select",options:$e,value:$e.find((function(e){return e.id===c.value})),onChange:function(e){c.onChange(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}})]}),Object(V.jsxs)(d.B,{className:"my-lg-0 mt-2",lg:"1",sm:"12",children:[Object(V.jsx)(d.u,{className:"col-title mb-md-50 mb-0",children:"Amount"}),ft._formValues.rows[t].subTotalAmount," ",null===Re||void 0===Re?void 0:Re.currenciessymbol]})]}),Object(V.jsx)("div",{className:"d-lg-flex justify-content-center border-start invoice-product-actions py-50 px-25",children:Object(V.jsx)(p.a,{size:18,className:"cursor-pointer",onClick:function(){zt(t)}})})]})})},e.id)})),Object(V.jsx)(d.ib,{className:"mt-1",children:Object(V.jsx)(d.B,{sm:"12",className:"px-0",children:Object(V.jsxs)(d.i,{color:"primary",size:"sm",className:"btn-add-new",onClick:function(){return It()},children:[Object(V.jsx)(v.a,{size:14,className:"me-25"})," ",Object(V.jsx)("span",{className:"align-middle",children:"Add Item"})]})})})]}),Object(V.jsx)(d.m,{className:"invoice-padding",children:Object(V.jsxs)(d.ib,{className:"invoice-sales-total-wrapper",children:[Object(V.jsx)(d.B,{className:"mt-md-0 mt-3",md:{size:"6",order:1},xs:{size:12,order:2},children:"IN"!==Re.billingaddresscountriesname&&Object(V.jsxs)("p",{children:["Amount in ",q.currencycode," : ",Ie," "]})}),Object(V.jsx)(d.B,{className:"d-flex justify-content-end",md:{size:"6",order:2},xs:{size:12,order:1},children:Object(V.jsxs)("div",{className:"invoice-total-wrapper",children:[Object(V.jsxs)("div",{className:"invoice-total-item",children:[Object(V.jsxs)("p",{className:"invoice-total-title",children:[(null===q||void 0===q?void 0:q.isgstregistered)&&(null===q||void 0===q?void 0:q.isgstregistered)&&"IN"===Re.billingaddresscountriesshorcode&&"Pre Tax","  Amount:"]}),Object(V.jsxs)("p",{className:"invoice-total-amount",children:[ve," ",null===Re||void 0===Re?void 0:Re.currenciessymbol]})]}),(null===q||void 0===q?void 0:q.isgstregistered)&&(null===q||void 0===q?void 0:q.isgstregistered)&&"IN"===Re.billingaddresscountriesshorcode&&Object(V.jsx)("div",{children:Te.map((function(e,t){return Object(V.jsxs)("div",{className:"invoice-total-item",children:[Object(V.jsx)("p",{className:"invoice-total-title",children:null===e||void 0===e?void 0:e.taxName}),Object(V.jsxs)("p",{className:"invoice-total-amount",children:[null===e||void 0===e?void 0:e.taxAmount," ",null===Re||void 0===Re?void 0:Re.currenciessymbol]})]},t)}))}),Object(V.jsx)("hr",{className:"my-50"}),Object(V.jsxs)("div",{className:"invoice-total-item",children:[Object(V.jsx)("p",{className:"invoice-total-title",children:"Total Payable:"}),Object(V.jsxs)("p",{className:"invoice-total-amount",children:[je," ",null===Re||void 0===Re?void 0:Re.currenciessymbol]})]})]})})]})}),Object(V.jsx)("hr",{className:"invoice-spacing mt-0"}),Object(V.jsx)(d.m,{className:"invoice-padding py-0",children:Object(V.jsx)(d.ib,{children:Object(V.jsx)(d.B,{children:Object(V.jsxs)("div",{className:"mb-2",children:[Object(V.jsx)(d.N,{for:"note",className:"form-label fw-bold",children:"Note:"}),Object(V.jsx)(x.a,{id:"note",name:"note",control:ft,render:function(e){var t=e.field;return Object(V.jsx)(d.K,Object(u.a)({type:"textarea",value:t.value,invalid:mt.note&&!0},t))}})]})})})})]})}),Object(V.jsxs)(d.B,{xl:2,md:4,sm:12,children:[Object(V.jsx)(d.l,{className:"invoice-action-wrapper",children:Object(V.jsxs)(d.m,{children:[Object(V.jsx)(d.i,{color:"primary",type:"submit",block:!0,outline:!0,className:"mb-75",children:"Save"}),Object(V.jsx)(d.i,{color:"warning",block:!0,outline:!0,tag:o.b,to:"/invoice/list",children:"Cancel"})]})}),Object(V.jsx)("div",{className:"mt-2",children:Object(V.jsxs)("div",{className:"invoice-payment-option",children:[Object(V.jsx)("p",{className:"mb-50 required",children:"Accept payments via"}),Object(V.jsx)(x.a,{control:ft,name:"bankAccountId",rules:{required:!0},render:function(e){var t=e.field,n=e.ref;return Object(V.jsx)(O.a,Object(u.a)(Object(u.a)({},t),{},{inputRef:n,className:y()("react-select mt-1",{"is-invalid":mt.bankAccountId}),classNamePrefix:"select",options:le,value:le.find((function(e){return e.id===t.value})),onChange:function(e){t.onChange(e.id),Tt(e.id)},getOptionLabel:function(e){return e.accountHolderName},getOptionValue:function(e){return e.id}}))}})]})}),Object(V.jsx)("div",{className:"mt-2",children:Object(V.jsxs)("div",{className:"invoice-payment-option",children:[Object(V.jsx)("p",{className:"mb-50",children:"Select Employee"}),Object(V.jsx)(x.a,{control:ft,name:"reviewer",id:"reviewer",render:function(e){var t=e.field,n=e.value,a=e.ref;return Object(V.jsx)(O.a,Object(u.a)(Object(u.a)({inputRef:a,className:y()("react-select",{"is-invalid":mt.reviewer})},t),{},{classNamePrefix:"select",options:Ve,isMulti:!0,value:n,onChange:_t,getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id},styles:G}))}})]})})]})]})})})})};t.default=function(){var e=Object(r.g)().id,t=Object(s.useState)(null),n=Object(i.a)(t,2),u=n[0],b=n[1],j=function(){var t=Object(c.a)(Object(a.a)().mark((function t(){return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l.a.post("/taskinvoices/get",{id:e}).then((function(e){b(e.data.taskinvoices)})).catch((function(e){console.log(e)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){j()}),[]),null!==u&&void 0!==u?Object(V.jsx)("div",{className:"invoice-edit-wrapper",children:Object(V.jsx)(d.ib,{className:"invoice-edit",children:Object(V.jsx)(d.B,{xl:12,md:8,sm:12,children:Object(V.jsx)(R,{data:u})})})}):Object(V.jsxs)(d.e,{color:"danger",children:[Object(V.jsx)("h4",{className:"alert-heading",children:"Invoice not found"}),Object(V.jsxs)("div",{className:"alert-body",children:["Invoice with id: ",e," doesn't exist. Check list of all invoices:"," ",Object(V.jsx)(o.b,{to:"/apps/invoice/list",children:"Invoice List"})]})]})}},700:function(e,t,n){"use strict";var a=n(8),c=n(24),i=n(0),s=n(7),r=n.n(s),o=n(13),l=(n(702),n(2)),d=function(e){var t,n=e.children,s=e.blocking,o=e.loader,d=e.className,u=e.tag,b=e.overlayColor,j=u;return Object(l.jsxs)(j,{className:r()("ui-loader",(t={},Object(c.a)(t,d,d),Object(c.a)(t,"show",s),t)),children:[n,s?Object(l.jsxs)(i.Fragment,{children:[Object(l.jsx)("div",Object(a.a)({className:"overlay"},s&&b?{style:{backgroundColor:b}}:{})),Object(l.jsx)("div",{className:"loader",children:o})]}):null]})};t.a=d,d.defaultProps={tag:"div",blocking:!1,loader:Object(l.jsx)(o.jb,{color:"primary"})}},701:function(e,t,n){"use strict";var a=n(2);t.a=function(){return Object(a.jsx)("div",{className:"fallback-spinner",children:Object(a.jsxs)("div",{className:"loading",children:[Object(a.jsx)("div",{className:"effect-1 effects"}),Object(a.jsx)("div",{className:"effect-2 effects"}),Object(a.jsx)("div",{className:"effect-3 effects"})]})})}},702:function(e,t,n){},709:function(e,t,n){},719:function(e,t,n){},723:function(e,t,n){},743:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var a=function(e,t,n){var a=0;return 1===n?a=parseFloat(e)-parseFloat(e)*(100/(100+parseFloat(t))):2===n&&(a=parseFloat(e)*parseFloat(t)/100),parseFloat(a)},c=function(e){return JSON.parse(Array.isArray(e)?JSON.stringify(e).replace(/\\/g,""):e.replace(/\\/g,""))}},774:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(3),c=n(5),i=n(6),s=function(){var e=Object(c.a)(Object(a.a)().mark((function e(t,n){var c,s;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_C8lWFFJJ2Q2soCa9lcN99U1dc8yl7A4gUoXNyjhj&base_currency=".concat(t,"&currencies=").concat(n));case 2:return s=e.sent,e.abrupt("return",null===s||void 0===s||null===(c=s.data)||void 0===c?void 0:c.data[n]);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=28.c0006d66.chunk.js.map