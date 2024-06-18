(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[65],{1515:function(e,t,n){"use strict";n.r(t);var c=n(18),a=n(2),i=n(5),s=n(8),l=n(10),r=n(12),o=n(0),d=n(23),u=n(25),b=n(7),m=n.n(b),j=n(21),f=n(199),O=n(6),h=n(253),p=n(365),v=n(184),g=n(742),x=n(744),y=n(745),N=n(13),_=n(14),C=n(735),S=n(736),B=(n(746),n(481),n(737),n(743),n(185)),w=n.n(B),A=n(186),k=n.n(A),I=n(3),E=Object(N.a)(),P=Object(N.d)(),L=function(){var e,t,n=Object(o.useState)(!1),b=Object(r.a)(n,2),N=b[0],B=b[1],A=function(){return Object(I.jsx)(o.Fragment,{children:Object(I.jsx)(S.a,{})})},L={multiValue:function(e,t){return Object(l.a)(t),Object(s.a)(Object(s.a)({},e),{},{backgroundColor:"#7367f0"})}},z=k()(w.a),V=/^[0-9\- ]{10,10}$/,K=Object(d.f)({}),q=Object(j.c)((function(e){return e.client})),R=Object(j.b)(),T=Object(o.useState)([]),D=Object(r.a)(T,2),Z=D[0],M=D[1],$=Object(o.useState)([]),F=Object(r.a)($,2),G=F[0],J=F[1],Y=Object(o.useState)([]),U=Object(r.a)(Y,2),H=U[0],Q=U[1],W=Object(o.useState)([]),X=Object(r.a)(W,2),ee=X[0],te=X[1],ne=Object(o.useState)([]),ce=Object(r.a)(ne,2),ae=ce[0],ie=ce[1],se=Object(o.useState)([]),le=Object(r.a)(se,2),re=le[0],oe=le[1],de=Object(o.useState)(null),ue=Object(r.a)(de,2),be=ue[0],me=ue[1],je=Object(o.useState)({}),fe=Object(r.a)(je,2),Oe=fe[0],he=fe[1],pe=Object(o.useState)([]),ve=Object(r.a)(pe,2),ge=ve[0],xe=ve[1],ye=Object(o.useState)([]),Ne=Object(r.a)(ye,2),_e=Ne[0],Ce=Ne[1],Se=Object(o.useState)(E.countryshortname),Be=Object(r.a)(Se,2),we=Be[0],Ae=Be[1],ke=x.d().shape({updatedBy:x.f().default(P),organization:x.f().default(E.id),contactPersonName:x.f().required("Please Enter a Contact Person Name"),registrationNo:x.f().default("").nullable(),employeeList:x.a().default([]),name:x.f().required("Please Enter Business Name.").default(""),referredby:x.f().nullable().default(""),contactNumber:x.f().default("").matches(V,{message:"Phone number is not valid",excludeEmptyString:!0}).nullable(),email:x.f().email("Please Enter valid Email").default("").nullable(),countryCode:x.f().default(E.countryshortname),organizationName:x.f().default(E.name),businessEntity:x.f().when("countryCode",{is:function(e){return"IN"===e},then:x.f().required("Please Select Business Entity")}),gstRegistrationType:x.f().nullable(),gstin:x.f().nullable(),placeOfSupply:x.f().default(""),placeOfSupplyOther:x.f().default(E.stateothers||""),currency:x.f().default(E.currencyid),billingCountryCode:x.f().default(""),billingAddressLine1:x.f().nullable(),billingAddressLine2:x.f().nullable(),billingAddressCity:x.f().nullable(),billingAddressState:x.f().default(""),billingAddressStateOthers:x.f().default(E.stateothers||""),billingAddressCountry:x.f().default(E.countryid),billingAddressZip:x.f().matches(/^[0-9\- ]{6,6}$/,{message:"Zip Code is not valid",excludeEmptyString:!0}).nullable(""),contact_info:x.a().of(x.d().shape({createdBy:x.f().default(P),name:x.f().nullable(),email:x.f().email().nullable(),designation:x.f().nullable(),adharnumber:x.f().nullable(),dinnumber:x.f().nullable(),pannumber:x.f().nullable(),contactnumber:x.f().nullable().matches(V,{message:"Phone number is not valid",excludeEmptyString:!0})}))}),Ie=Object(g.f)({resolver:Object(y.a)(ke),defaultValues:ke.cast()}),Ee=Ie.handleSubmit,Pe=Ie.reset,Le=Ie.control,ze=Ie.formState.errors,Ve=Ie.setValue,Ke=Object(d.g)().id,qe=Object(g.e)({name:"contact_info",control:Le,keyName:"rowid"}),Re=qe.fields,Te=qe.append,De=qe.remove,Ze=function(){var e=Object(i.a)(Object(a.a)().mark((function e(){var t;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={rows:re},e.next=3,R(Object(f.j)(t));case 3:K("/clients/view/".concat(be));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Me=function(){var e=Object(i.a)(Object(a.a)().mark((function e(t){var n,i;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(!0),n=t.contact_info||[],delete t.contact_info,i=Oe.id,e.next=6,R(Object(f.i)({data:t,id:i}));case 6:oe((function(e){return[].concat(Object(c.a)(e),Object(c.a)(n))}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$e=function(e){return z.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(){var t=Object(i.a)(Object(a.a)().mark((function t(n){return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.value){t.next=7;break}return t.next=3,R(Object(f.d)(e));case 3:return z.fire({icon:"success",title:"Deleted!",text:"Contact has been deleted.",customClass:{confirmButton:"btn btn-success"}}),t.abrupt("return",!0);case 7:if(n.dismiss!==z.DismissReason.cancel){t.next=9;break}return t.abrupt("return",!1);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},Fe=function(){var e=Object(i.a)(Object(a.a)().mark((function e(t){var n,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===(n=Le._formValues.contact_info[t].id)){e.next=5;break}return e.next=4,$e(n);case 4:c=e.sent;case 5:c&&De(t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ge=function(){var e=Object(i.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O.a.post("/organizationusers/dropdown").then((function(e){var t=e.data;xe(t.organizationusers)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Je=function(){var e=Object(i.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(Object(f.g)(be));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ye=function(){var e=Object(i.a)(Object(a.a)().mark((function e(){var t;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(Object(f.f)(Ke));case 2:t=e.sent,he(t.payload);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ue=function(e){var t=Array.isArray(e)?e.map((function(e){return e.id})):[],n=ge.filter((function(e){var n=e.id;return t.some((function(e){return e===n}))}));Ce(n),Ve("employeeList",t)};Object(o.useEffect)((function(){Object.keys(Oe).length>0&&(Pe({updatedBy:P,uniqueIdentity:Oe.uniqueidentity,contactPersonName:Oe.contactpersonname,organization:Oe.organizationid,name:Oe.name,referredby:Oe.referredby,registrationNo:Oe.registrationno,contactNumber:Oe.contactnumber,businessEntity:Oe.businessentityid,email:Oe.email,gstRegistrationType:Oe.gstregistrationtypeid,gstin:Oe.gstin||"",placeOfSupply:Oe.placeofsupplyid||E.stateid,currency:Oe.currencyid||E.currencyid||"",billingAddressLine1:Oe.billingaddressline1||"",billingAddressLine2:Oe.billingaddressline2||"",billingAddressCountry:Oe.billingaddresscountry||E.countryid,billingAddressState:Oe.billingaddressstate||E.stateid,billingAddressZip:Oe.billingaddresszip||"",billingAddressCity:Oe.billingaddresscity||"",billingAddressStateOthers:Oe.billingaddressstateothers||"",placeOfSupplyOther:Oe.placeofsupplyothers||""}),me(Oe.id),Ae(Oe.billingaddresscountriesshorcode),function(e){var t=null!==e&&void 0!==e?e:[],n=ge.filter((function(e){var n=e.id;return t.some((function(e){return e===n}))}));Ce(n)}(null===Oe||void 0===Oe?void 0:Oe.employeelist)),null!==be&&Je()}),[be,Oe]),Object(o.useEffect)((function(){q.clientInformations.forEach((function(e){Te(e)}))}),[q.clientInformations]),Object(o.useEffect)((function(){re.length?Ze():null!==be&&K("/clients/view/".concat(be))}),[re]),Object(o.useEffect)((function(){O.a.post("/businessentities/list").then((function(e){var t=e.data;M(t.businessentities)})),Ge(),O.a.post("/countries/dropdown").then((function(e){var t=e.data;Q(t.countries)})),O.a.post("/currencies/dropdown").then((function(e){var t=e.data;te(t.currencies)})),O.a.post("/gstregistrationtypes/list").then((function(e){var t=e.data;ie(t.gstregistrationtypes)})),O.a.post("/states/list").then((function(e){var t=e.data;J(t.states)})),Ye()}),[]);var He=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return Object(I.jsxs)(_.ib,{className:"mb-0 mb-lg-1",children:[Object(I.jsx)(_.N,{sm:c?"4":"12",size:"lg",className:m()("form-label ".concat(n?"required":"")),for:t,children:e}),Object(I.jsxs)(_.B,{sm:c?"8":"12",children:[Object(I.jsx)(g.a,{id:t,name:t,control:Le,render:function(e){var n=e.field;return Object(I.jsx)(_.K,Object(s.a)({invalid:ze[t]&&!0},n))}}),ze[t]&&Object(I.jsx)(_.I,{children:ze[t].message})]})]})},Qe=function(e,t,n){var c,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];return Object(I.jsxs)(_.ib,{className:"mb-0 mb-lg-1",children:[Object(I.jsx)(_.N,{sm:i?"4":"12",size:"lg",className:m()("form-label ".concat(a?"required":"")),for:t,children:e}),Object(I.jsxs)(_.B,{sm:i?"8":"12",children:[Object(I.jsx)(g.a,{control:Le,name:t,id:t,render:function(e){var c=e.field,a=e.ref;return Object(I.jsx)(v.a,Object(s.a)(Object(s.a)({inputRef:a,className:m()("react-select",{"is-invalid":ze[t]})},c),{},{classNamePrefix:"select",options:n,value:n.find((function(e){return e.id===c.value})),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id},onChange:function(e){return"billingAddressCountry"===t&&(Ae(e.shortname),Ve("billingAddressState",null),Ve("placeOfSupply",null),Ve("billingCountryCode",e.shortname)),c.onChange(e.id)}}))}}),ze[t]&&Object(I.jsx)(_.I,{className:"text-danger",children:null===(c=ze[t])||void 0===c?void 0:c.message})]})]})},We=function(e,t,n){"primarystatus"===e&&t.target.checked?(Ve("contactPersonName",Le._formValues.contact_info[n].name),Ve("contactNumber",Le._formValues.contact_info[n].contactnumber),Ve("email",Le._formValues.contact_info[n].email)):Le._formValues.contact_info[n].primarystatus&&Ve(e,"primaryStatus"===e?t.target.checked:t)};return Object(I.jsx)(C.a,{blocking:N,loader:Object(I.jsx)(A,{}),children:Object(I.jsxs)("form",{onSubmit:Ee(Me),children:[Object(I.jsxs)(_.l,{className:"invoice-preview-card",children:[Object(I.jsxs)(_.p,{children:[Object(I.jsx)(_.v,{children:" Edit Client"}),function(){var e=Object.keys(ze),t=[];return Array.isArray(e)&&e.forEach((function(e){var n;"rows"!==e&&t.push(Object(I.jsxs)(_.I,{children:["$",null===(n=ze[e])||void 0===n?void 0:n.message]},e))})),t}()]}),Object(I.jsxs)(_.m,{className:"pb-0",children:[Object(I.jsxs)(_.ib,{children:[Object(I.jsx)(_.B,{md:"4",className:"mb-0 mb-lg-1",children:He("Business Name","name",!0,!1)}),Object(I.jsx)(_.B,{md:"4",className:"mb-0 mb-lg-1",children:Qe("Business Entity","businessEntity",Z,!0,!1)}),Object(I.jsx)(_.B,{md:"4",className:"mb-0 mb-lg-1",children:He("Registration No","registrationNo",!1,!1)})]}),Object(I.jsx)(_.ib,{className:"",children:Object(I.jsxs)(_.B,{md:"4",className:"mb-0 mb-lg-1",children:[Object(I.jsx)(_.N,{sm:"12",lg:"12",size:"lg",className:m()("form-label"),children:"Assign User"}),Object(I.jsxs)(_.B,{sm:"12",lg:"12",children:[Object(I.jsx)(g.a,{control:Le,name:"employeeList",id:"employeeList",render:function(e){var t=e.field,n=e.ref;return Object(I.jsx)(v.a,Object(s.a)(Object(s.a)({inputRef:n,className:m()("react-select",{"is-invalid":ze.employeeList})},t),{},{classNamePrefix:"select",options:ge,isMulti:!0,onChange:Ue,value:_e,getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id},styles:L}))}}),ze.employeeList&&Object(I.jsx)(_.I,{className:"text-danger",children:null===(e=ze.employeeList)||void 0===e?void 0:e.message})]})]})})]}),Object(I.jsx)("hr",{className:"invoice-spacing"}),ze.contact_info&&Object(I.jsx)("p",{className:"text-danger ms-2",children:null===(t=ze.contact_info)||void 0===t?void 0:t.message}),Object(I.jsxs)(_.m,{className:"invoice-padding invoice-product-details p-3",children:[Re.map((function(e,t){var n,c,a,i,l,r,o,d,u,b,m,j,f,O,p,v,x,y,N,C,S,B,w,A,k,E,P,L;return Object(I.jsx)("div",{className:"repeater-wrapper",children:Object(I.jsx)(_.ib,{children:Object(I.jsx)(_.B,{className:"d-lg-flex justify-content-between product-details-border position-relative",sm:"12",lg:"12",md:"12",children:Object(I.jsxs)(_.ib,{className:"align-items-center p-75",children:[Object(I.jsxs)(_.B,{className:"p-50 col-6 col-lg-2 col-md-2",children:[Object(I.jsx)(_.N,{className:"form-label mt-1",children:"PAN"}),Object(I.jsx)(g.a,{control:Le,id:"contact_info_pannumber",name:"contact_info[".concat(t,"].pannumber"),render:function(e){var n,c,a=e.field;return Object(I.jsx)(_.K,Object(s.a)({type:"text",placeholder:"PAN",onChange:function(e){a.onChange(e)},invalid:(null===(n=ze.contact_info)||void 0===n||null===(c=n[t])||void 0===c?void 0:c.pannumber)&&!0},a))}}),(null===(n=ze.contact_info)||void 0===n||null===(c=n[t])||void 0===c?void 0:c.pannumber)&&Object(I.jsx)(_.I,{children:null===(a=ze.contact_info)||void 0===a||null===(i=a[t])||void 0===i?void 0:i.pannumber.message})]}),Object(I.jsxs)(_.B,{className:"p-50 col-6 col-lg-2 col-md-2",children:[Object(I.jsx)(_.N,{className:"form-label mt-1",children:"Name"}),Object(I.jsx)(g.a,{control:Le,id:"contact_info_firstName",name:"contact_info[".concat(t,"].name"),render:function(e){var n,c,a=e.field;return Object(I.jsx)(_.K,Object(s.a)({type:"text",placeholder:"Name",onInput:function(e){We("contactPersonName",e.target.value,t)},onChange:function(e){a.onChange(e)},invalid:(null===(n=ze.contact_info)||void 0===n||null===(c=n[t])||void 0===c?void 0:c.name)&&!0},a))}}),(null===(l=ze.contact_info)||void 0===l||null===(r=l[t])||void 0===r?void 0:r.name)&&Object(I.jsx)(_.I,{children:null===(o=ze.contact_info)||void 0===o||null===(d=o[t])||void 0===d?void 0:d.name.message})]}),Object(I.jsxs)(_.B,{className:"p-50 col-6 col-lg-2 col-md-2",children:[Object(I.jsx)(_.N,{className:"form-label mt-1",children:"Mobile"}),Object(I.jsx)(g.a,{control:Le,id:"contact_info_contactnumber",name:"contact_info[".concat(t,"].contactnumber"),render:function(e){var n,c,a=e.field;return Object(I.jsx)(_.K,Object(s.a)({type:"number",placeholder:"Mobile",onInput:function(e){We("contactnumber",e.target.value,t)},onChange:function(e){a.onChange(e)},invalid:(null===(n=ze.contact_info)||void 0===n||null===(c=n[t])||void 0===c?void 0:c.contactnumber)&&!0},a))}}),(null===(u=ze.contact_info)||void 0===u||null===(b=u[t])||void 0===b?void 0:b.contactnumber)&&Object(I.jsx)(_.I,{children:null===(m=ze.contact_info)||void 0===m||null===(j=m[t])||void 0===j?void 0:j.contactnumber.message})]}),Object(I.jsxs)(_.B,{className:"p-50 col-6 col-lg-2 col-md-2",children:[Object(I.jsx)(_.N,{className:"form-label mt-1",children:"Email"}),Object(I.jsx)(g.a,{control:Le,id:"contact_info_email",name:"contact_info[".concat(t,"].email"),render:function(e){var n,c,a=e.field;return Object(I.jsx)(_.K,Object(s.a)({type:"email",placeholder:"Email",onInput:function(e){We("email",e.target.value,t)},onChange:function(e){a.onChange(e)},invalid:(null===(n=ze.contact_info)||void 0===n||null===(c=n[t])||void 0===c?void 0:c.email)&&!0},a))}}),(null===(f=ze.contact_info)||void 0===f||null===(O=f[t])||void 0===O?void 0:O.email)&&Object(I.jsx)(_.I,{children:null===(p=ze.contact_info)||void 0===p||null===(v=p[t])||void 0===v?void 0:v.email.message})]}),Object(I.jsxs)(_.B,{className:"p-50 col-6 col-lg-2 col-md-2",children:[Object(I.jsx)(_.N,{className:"form-label mt-1",children:"Designation"}),Object(I.jsx)(g.a,{control:Le,id:"contact_info_designation",name:"contact_info[".concat(t,"].designation"),render:function(e){var n,c,a=e.field;return Object(I.jsx)(_.K,Object(s.a)({type:"text",placeholder:"Designation",onChange:function(e){a.onChange(e)},invalid:(null===(n=ze.contact_info)||void 0===n||null===(c=n[t])||void 0===c?void 0:c.designation)&&!0},a))}}),(null===(x=ze.contact_info)||void 0===x||null===(y=x[t])||void 0===y?void 0:y.designation)&&Object(I.jsx)(_.I,{children:null===(N=ze.contact_info)||void 0===N||null===(C=N[t])||void 0===C?void 0:C.designation.message})]}),Object(I.jsxs)(_.B,{className:"p-50 col-6 col-lg-2 col-md-2",children:[Object(I.jsx)(_.N,{className:"form-label mt-1",children:"Aadhaar"}),Object(I.jsx)(g.a,{control:Le,id:"contact_info_adharnumber",name:"contact_info[".concat(t,"].adharnumber"),render:function(e){var n,c,a=e.field;return Object(I.jsx)(_.K,Object(s.a)({type:"text",placeholder:"Adhaar",onChange:function(e){a.onChange(e)},invalid:(null===(n=ze.contact_info)||void 0===n||null===(c=n[t])||void 0===c?void 0:c.adharnumber)&&!0},a))}}),(null===(S=ze.contact_info)||void 0===S||null===(B=S[t])||void 0===B?void 0:B.adharnumber)&&Object(I.jsx)(_.I,{children:null===(w=ze.contact_info)||void 0===w||null===(A=w[t])||void 0===A?void 0:A.adharnumber.message})]}),Object(I.jsxs)(_.B,{className:"p-50 col-6 col-lg-2 col-md-2",children:[Object(I.jsx)(_.N,{className:"form-label mt-1",children:"DIN"}),Object(I.jsx)(g.a,{control:Le,id:"contact_info_dinnumber",name:"contact_info[".concat(t,"].dinnumber"),render:function(e){var n,c,a=e.field;return Object(I.jsx)(_.K,Object(s.a)({type:"text",placeholder:"DIN",onChange:function(e){a.onChange(e)},invalid:(null===(n=ze.contact_info)||void 0===n||null===(c=n[t])||void 0===c?void 0:c.dinnumber)&&!0},a))}}),(null===(k=ze.contact_info)||void 0===k||null===(E=k[t])||void 0===E?void 0:E.dinnumber)&&Object(I.jsx)(_.I,{children:null===(P=ze.contact_info)||void 0===P||null===(L=P[t])||void 0===L?void 0:L.dinnumber.message})]}),Object(I.jsxs)(_.B,{className:"p-50 col-6 col-lg-2 col-md-2",children:[Object(I.jsx)(_.N,{className:"form-label mt-1",children:"Primary"}),Object(I.jsx)("div",{className:"form-switch form-check-primary",children:Object(I.jsx)(g.a,{control:Le,id:"contact_info_primaryStatus",name:"contact_info[".concat(t,"].primarystatus"),render:function(e){var n=e.field;return Object(I.jsx)(_.K,Object(s.a)(Object(s.a)({type:"switch",value:n.value,onInput:function(e){We("primarystatus",e,t)}},n),{},{defaultChecked:n.value}))}})})]}),Le._formValues.contact_info.length>1&&Object(I.jsx)("div",{className:"d-lg-flex width-50 justify-content-center border-start invoice-product-actions py-50 px-25",children:Object(I.jsx)(h.a,{size:18,className:"cursor-pointer",onClick:function(){Fe(t)}})})]})})})},e.id)})),Object(I.jsx)(_.ib,{className:"mt-1",children:Object(I.jsx)(_.B,{sm:"12",className:"px-0",children:Object(I.jsxs)(_.i,{color:"primary",size:"sm",className:"btn-add-new",onClick:function(){Te({id:"",name:"",email:"",contactnumber:"",contactid:Ke,organizationid:E.id,designation:"",primarystatus:!1,adharnumber:"",dinnumber:"",pannumber:""})},children:[Object(I.jsx)(p.a,{size:14,className:"me-25"})," ",Object(I.jsx)("span",{className:"align-middle",children:"Add Item"})]})})})]}),Object(I.jsx)("hr",{className:"invoice-spacing"}),Object(I.jsxs)(_.m,{children:["IN"===we&&Object(I.jsxs)(_.ib,{children:[Object(I.jsx)(_.B,{md:"6",className:"mb-0 mb-lg-1",children:Qe("GST Type","gstRegistrationType",ae)}),Object(I.jsx)(_.B,{md:"6",className:"mb-0 mb-lg-1",children:He("GSTIN","gstin")})]}),Object(I.jsxs)(_.ib,{children:[Object(I.jsx)(_.B,{md:"6",className:"mb-0 mb-lg-1",children:"IN"===we?Qe("Place of Supply","placeOfSupply",G):He("Place of Supply","placeOfSupplyOther")}),Object(I.jsx)(_.B,{md:"6",className:"mb-0 mb-lg-1",children:Qe("Currency","currency",ee,!0)})]})]}),Object(I.jsxs)(_.m,{className:"",children:[Object(I.jsx)("h4",{className:"text-primary mt-50 mt-lg-0",children:"Billing Address"}),Object(I.jsxs)(_.ib,{children:[Object(I.jsx)(_.B,{md:"6",className:"mb-0 mb-lg-1",children:He("Address Line1","billingAddressLine1")}),Object(I.jsx)(_.B,{md:"6",className:"mb-0 mb-lg-1",children:He("Address Line2","billingAddressLine2")})]}),Object(I.jsxs)(_.ib,{children:[Object(I.jsx)(_.B,{md:"6",className:"mb-0 mb-lg-1",children:He("City","billingAddressCity")}),Object(I.jsx)(_.B,{md:"6",className:"mb-0 mb-lg-1",children:"IN"===we?Qe("State","billingAddressState",G):He("State","billingAddressStateOthers")})]}),Object(I.jsxs)(_.ib,{children:[Object(I.jsx)(_.B,{md:"6",className:"mb-0 mb-lg-1",children:Qe("Country","billingAddressCountry",H,!0)}),Object(I.jsx)(_.B,{md:"6",className:"mb-0 mb-lg-1",children:He("Zip Code","billingAddressZip")})]})]})]}),Object(I.jsx)(_.l,{children:Object(I.jsx)(_.m,{children:Object(I.jsxs)("div",{className:"modal-footer border-0",children:[Object(I.jsx)(_.i,{color:"warning",outline:!0,tag:u.b,to:"/clients/view/".concat(Ke),children:"Cancel"}),Object(I.jsx)(_.i,{color:"primary",type:"submit",children:"Save"})]})})})]})})};t.default=function(){return Object(I.jsx)("div",{className:"invoice-add-wrapper",children:Object(I.jsx)(_.ib,{className:"invoice-add",children:Object(I.jsx)(_.B,{xl:12,md:12,sm:12,children:Object(I.jsx)(L,{})})})})}},735:function(e,t,n){"use strict";var c=n(8),a=n(27),i=n(0),s=n(7),l=n.n(s),r=n(14),o=(n(738),n(3)),d=function(e){var t,n=e.children,s=e.blocking,r=e.loader,d=e.className,u=e.tag,b=e.overlayColor,m=u;return Object(o.jsxs)(m,{className:l()("ui-loader",(t={},Object(a.a)(t,d,d),Object(a.a)(t,"show",s),t)),children:[n,s?Object(o.jsxs)(i.Fragment,{children:[Object(o.jsx)("div",Object(c.a)({className:"overlay"},s&&b?{style:{backgroundColor:b}}:{})),Object(o.jsx)("div",{className:"loader",children:r})]}):null]})};t.a=d,d.defaultProps={tag:"div",blocking:!1,loader:Object(o.jsx)(r.jb,{color:"primary"})}},736:function(e,t,n){"use strict";var c=n(3);t.a=function(){return Object(c.jsx)("div",{className:"fallback-spinner",children:Object(c.jsxs)("div",{className:"loading",children:[Object(c.jsx)("div",{className:"effect-1 effects"}),Object(c.jsx)("div",{className:"effect-2 effects"}),Object(c.jsx)("div",{className:"effect-3 effects"})]})})}},737:function(e,t,n){},738:function(e,t,n){},743:function(e,t,n){},746:function(e,t,n){}}]);
//# sourceMappingURL=65.4a345b6b.chunk.js.map