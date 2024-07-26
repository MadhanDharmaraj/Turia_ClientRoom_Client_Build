(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[43],{1420:function(e,t,n){"use strict";n.r(t);var c=n(8),a=n(3),s=n(5),i=n(19),r=n(10),l=n(12),o=n(0),d=n(715),u=n.n(d),j=n(13),b=n(704),m=n(707),f=n(708),x=n(20),h=(n(709),n(184)),O=n.n(h),p=n(185),g=n.n(p),v=n(6),y=n(7),N=n.n(y),k=n(42),w=n.n(k),C=n(182),D=n(224),M=n(332),S=n(283),Y=n(353),B=n(754),I=n(700),z=n(701),E=n(2),F=Object(x.b)(),A=Object(x.d)(),L=function(e){var t;Object(l.a)(e);var n=g()(O.a),d=Object(o.useState)([]),x=Object(r.a)(d,2),h=x[0],p=x[1],y=localStorage.getItem("clientId"),k=["","Active","","Expired"],L=["","light-primary","","light-danger"],P=Object(o.useState)(!1),q=Object(r.a)(P,2),T=q[0],R=q[1],J=Object(o.useState)(null),U=Object(r.a)(J,2),V=U[0],_=U[1],H=Object(o.useState)([]),K=Object(r.a)(H,2),Q=K[0],X=K[1],$=Object(o.useState)([]),G=Object(r.a)($,2),W=G[0],Z=G[1],ee=Object(o.useState)(0),te=Object(r.a)(ee,2),ne=te[0],ce=te[1],ae={image:"ui-attachment--image",pdf:"ui-attachment--pdf",xlsx:"ui-attachment--excel",xls:"ui-attachment--excel",docx:"ui-attachment--docx",doc:"ui-attachment--docx"},se=m.d().shape({name:m.f().required("Please Enter Name"),id:m.f(),contactid:m.f().default(y),createdby:m.f().default(A),updatedby:m.f().default(A),organizationid:m.f().default(F),licenseno:m.f().required("Please Enter License Number"),issueddate:m.f().default("").required("Please Enter Issued Date"),expirydate:m.f().default("")}),ie=Object(b.f)({resolver:Object(f.a)(se),defaultValues:se.cast()}),re=ie.handleSubmit,le=ie.formState.errors,oe=ie.control,de=ie.setValue,ue=function(){de("name",""),de("issueddate",""),de("expirydate",""),de("licenseno",""),de("contactid",y),de("id",""),de("attachmentIds",[]),de("organizationid",F),de("createdby",A),de("updatedby",A)},je=function(){R(!1),ue()},be=function(){v.a.post("/digitalsignatures/listbyclient",{contactid:y,licenseType:!1}).then((function(e){p(e.data.digitalsignatures)})).catch((function(e){console.log(e)}))},me={headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(e){ce(Math.round(100*e.loaded/e.total))}},fe=Object(o.useState)(!1),xe=Object(r.a)(fe,2),he=xe[0],Oe=xe[1],pe=function(){return Object(E.jsx)(o.Fragment,{children:Object(E.jsx)(z.a,{})})},ge=function(e){var t=new FormData;e.forEach((function(e,n){t.append("files[".concat(n,"]"),e)})),t.append("id",y),t.append("organizationId",F),t.append("createdBy",A),Oe(!0),v.a.post("/google/licensefolders",t,me).then((function(e){Z([].concat(Object(i.a)(W),Object(i.a)(e.data.attachment_ids))),Oe(!1)})).catch((function(e){console.log(e),Oe(!1)}))},ve=Object(B.a)({multiple:!0,onDrop:function(){var e=Object(s.a)(Object(a.a)().mark((function e(t,n){var c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=[],t.forEach((function(e){e.extension=e.name.split(".").pop(),c.push(e)})),!n.length){e.next=6;break}C.b.error("You can only upload image Files!."),e.next=9;break;case 6:return e.next=8,ge(c);case 8:X([].concat(Object(i.a)(Q),c));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}),ye=ve.getRootProps,Ne=ve.getInputProps,ke=Q.map((function(e,t){return Object(E.jsxs)(j.B,{md:6,className:"d-flex align-items-center justify-content-between ui-attachment ".concat(ae[e.extension]||ae.image),children:[Object(E.jsx)("div",{className:"file-details d-flex align-items-center",children:Object(E.jsx)("div",{children:Object(E.jsx)("p",{className:"file-name mb-0 text-overflow-ellipsis",children:e.name.split(".")[0].length>15?"".concat(e.name.split(".")[0].substr(0,15)):e.name})})}),Object(E.jsx)(D.a,{size:14,className:"cursor-pointer",onClick:function(){return function(e,t){var n=Q.filter((function(t){return t.name!==e.name}));Z(Object(i.a)(W.splice(t,1))),X(n)}(e,t)}})]},"".concat(e.name,"-").concat(t))})),we=function(){var e=Object(s.a)(Object(a.a)().mark((function e(t){var n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.issueddate=w()(t.issueddate).valueOf(),t.expirydate=""!==t.expirydate?w()(t.expirydate).valueOf():0,t.attachmentIds=W,n=w()().startOf("d").valueOf(),t.status=n>t.expirydate?3:1,null!==V?(v.a.post("/digitalsignatures/updatelicenses",t).then((function(){be(),R(!1),C.b.success("License Updated Successfully",{position:"bottom-right"}),X([]),ce(0),Z([])})).catch((function(e){console.log(e)})),_(null)):v.a.post("/digitalsignatures/addlicenses",t).then(Object(s.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:be(),R(!1),X([]),Z([]),C.b.success("License Added Successfully",{position:"bottom-right"});case 5:case"end":return e.stop()}}),e)})))).catch((function(e){console.log(e)})),ue();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ce=function(e){return null===e||void 0===e?"":13===e.length?w()(e,"x").format("MMM DD, YYYY"):w.a.unix(e).format("MMM DD, YYYY")};Object(o.useEffect)((function(){be()}),[]);var De=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return Object(E.jsxs)(j.B,{md:12,children:[Object(E.jsx)(j.N,{sm:"12",className:N()("form-label ".concat(n?"required":"")),for:t,children:e}),Object(E.jsxs)(j.B,{children:[Object(E.jsx)(b.a,{id:t,name:t,control:oe,render:function(e){var n=e.field;return Object(E.jsx)(j.K,Object(c.a)({invalid:le[t]&&!0},n))}}),le[t]&&Object(E.jsx)(j.I,{children:le[t].message})]})]})};return Object(E.jsxs)(j.l,{children:[Object(E.jsx)(j.m,{children:Object(E.jsxs)(j.v,{className:"align-items-end card-title d-flex justify-content-between mb-0",tag:"h5",children:["Licenses",Object(E.jsx)("div",{className:"d-flex",children:Object(E.jsxs)(j.i,{size:"sm",className:"me-1",color:"primary",onClick:function(){R(!0),ue()},children:[Object(E.jsx)(M.a,{size:14}),"Add New"]})})]})}),Object(E.jsxs)(j.mb,{className:"text-nowrap text-center border-bottom",responsive:!0,children:[Object(E.jsx)("thead",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{className:"text-start",children:"Name"}),Object(E.jsx)("th",{children:"Number"}),Object(E.jsx)("th",{children:"Start Date"}),Object(E.jsx)("th",{children:"Expiry Date"}),Object(E.jsx)("th",{children:"Files"}),Object(E.jsx)("th",{children:"Status"}),Object(E.jsx)("th",{children:"Action"})]})}),Object(E.jsx)("tbody",{children:h.map((function(e,t){var c;return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{className:"text-start",children:e.name}),Object(E.jsx)("td",{children:e.licenseno}),Object(E.jsx)("td",{children:void 0!==e.issueddate?Ce(e.issueddate):""}),Object(E.jsx)("td",{children:e.expirydate>0?Ce(e.expirydate):""}),Object(E.jsx)("td",{className:"text-start",children:null===(c=e.files)||void 0===c?void 0:c.map((function(e,t){return Object(E.jsx)(j.f,{className:"ms-25",color:"primary",children:Object(E.jsx)("a",{target:"_blank",className:"file-name text-overflow-ellipsis",href:"http://docs.google.com/fileview?id=".concat(e.driveid,"&hl=en&pid=explorer&efh=false&a=v&chrome=false&embedded=true"),children:e.originalfilename.split(".")[0].length>1?"".concat(e.originalfilename.split(".")[0].substr(0,10),".").concat(e.extension):e.originalfilename})},t)}))}),Object(E.jsx)("td",{children:Object(E.jsxs)(j.f,{color:L[e.status],children:[" ",k[e.status]]})}),Object(E.jsx)("td",{children:Object(E.jsxs)("div",{className:"column-action d-flex align-items-center",children:[Object(E.jsx)(j.B,{onClick:function(){!function(e){var t;_(e),R(!0);var n=w()(e.issueddate,"x").format("MMM DD, Y"),c=w()(e.expirydate,"x").format("MMM DD, Y");de("name",e.name),de("issueddate",n),de("expirydate",c),de("licenseno",e.licenseno),de("contactid",y),de("id",e.id),de("organizationid",F),de("createdby",A),de("updatedby",A),de("attachmentIds",null!==(t=e.attachmentids)&&void 0!==t?t:[]),Z(e.attachmentids)}(e)},children:Object(E.jsx)(S.a,{className:"cursor-pointer mt-0",size:16})}),Object(E.jsx)(j.B,{lg:4,onClick:function(){!function(e){n.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(){var t=Object(s.a)(Object(a.a)().mark((function t(c){return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c.value){t.next=8;break}return t.next=3,v.a.post("/digitalsignatures/delete",{id:e,updatedBy:A});case 3:return be(),n.fire({icon:"success",title:"Deleted!",text:"License has been deleted.",customClass:{confirmButton:"btn btn-success"}}),t.abrupt("return",!0);case 8:if(c.dismiss!==n.DismissReason.cancel){t.next=10;break}return t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}(e.id)},children:Object(E.jsx)(Y.a,{className:"cursor-pointer ms-1 mt-0",size:16})})]})})]},t)}))})]}),Object(E.jsxs)(j.Q,{isOpen:T,toggle:function(){return R(!T)},className:"modal-dialog-centered",children:[Object(E.jsx)(j.T,{toggle:function(){return je()},children:"Licenses"}),Object(E.jsx)(j.R,{children:Object(E.jsxs)(I.a,{blocking:he,loader:Object(E.jsx)(pe,{}),children:[Object.keys(le).map((function(e){var t;return Object(E.jsxs)(j.I,{children:["$",null===(t=le[e])||void 0===t?void 0:t.message]},e)})),Object(E.jsxs)(j.ib,{tag:j.H,className:"gx-2 gy-1",onSubmit:re(we),children:[De("Name","name",!0),De("License No","licenseno",!0),Object(E.jsxs)(j.B,{md:12,children:[Object(E.jsx)(j.N,{className:"form-label required",for:"comments",children:"Issued Date"}),Object(E.jsx)(b.a,{control:oe,name:"issueddate",id:"issueddate",render:function(e){var t=e.field;return Object(E.jsx)(u.a,{value:t.value,onChange:function(e,n){t.onChange(n)},options:{altInput:!0,altFormat:"M j, Y",dateFormat:"M j, Y"},className:"form-control invoice-edit-input date-picker"})}}),le.issueddate&&Object(E.jsx)("p",{className:"text-danger",children:le.issueddate.message})]}),Object(E.jsxs)(j.B,{md:12,children:[Object(E.jsx)(j.N,{className:"form-label",for:"comments",children:"Expiry Date"}),Object(E.jsx)(b.a,{control:oe,name:"expirydate",id:"expirydate",render:function(e){var t=e.field;return Object(E.jsx)(u.a,{value:t.value,onChange:function(e,n){t.onChange(n)},options:{altInput:!0,altFormat:"M j, Y",dateFormat:"M j, Y"},className:"form-control invoice-edit-input date-picker"})}}),le.expirydate&&Object(E.jsx)(j.I,{children:le.expirydate.message})]}),Object(E.jsxs)(j.B,{children:[Object(E.jsx)("input",Object(c.a)({},Ne())),Object(E.jsx)(j.i,Object(c.a)(Object(c.a)({color:"primary"},ye({})),{},{children:"Add Attachments"}))]}),ne>0&&Object(E.jsx)(j.hb,{color:ne<100?"primary":"success",value:ne}),Object(E.jsx)(j.ib,{className:"d-flex p-1",children:ke}),Object(E.jsx)(j.ib,{className:"d-flex col-12",children:null===V||void 0===V||null===(t=V.files)||void 0===t?void 0:t.map((function(e,t){return Object(E.jsxs)(j.f,{color:"primary",className:"me-1 mt-1 col-4",onClick:function(){return function(e){var t,n=Object(i.a)(W);n.splice(n.indexOf(e),1),Z(n);var a=Object(i.a)(V.files).filter((function(t){return t.id!==e})),s=Object(c.a)({},V);s.files=a,_(s),de("attachmentIds",null!==(t=a.map((function(e){return e.id})))&&void 0!==t?t:[])}(e.id)},children:[e.originalfilename.split(".")[0].length>15?"".concat(e.originalfilename.split(".")[0].substr(0,15)):e.originalfilename," X"]},t)}))}),Object(E.jsxs)(j.B,{className:"mt-2 pt-1",xs:12,children:[Object(E.jsx)(j.i,{type:"submit",className:"me-1",color:"primary",children:"Submit"}),Object(E.jsx)(j.i,{className:"me-1",color:"warning",onClick:function(){return je()},children:"Cancel"})]})]})]})})]})]})};n(721),t.default=function(){return Object(E.jsx)("div",{className:"app-user-list",children:Object(E.jsx)(L,{})})}},700:function(e,t,n){"use strict";var c=n(8),a=n(24),s=n(0),i=n(7),r=n.n(i),l=n(13),o=(n(702),n(2)),d=function(e){var t,n=e.children,i=e.blocking,l=e.loader,d=e.className,u=e.tag,j=e.overlayColor,b=u;return Object(o.jsxs)(b,{className:r()("ui-loader",(t={},Object(a.a)(t,d,d),Object(a.a)(t,"show",i),t)),children:[n,i?Object(o.jsxs)(s.Fragment,{children:[Object(o.jsx)("div",Object(c.a)({className:"overlay"},i&&j?{style:{backgroundColor:j}}:{})),Object(o.jsx)("div",{className:"loader",children:l})]}):null]})};t.a=d,d.defaultProps={tag:"div",blocking:!1,loader:Object(o.jsx)(l.jb,{color:"primary"})}},701:function(e,t,n){"use strict";var c=n(2);t.a=function(){return Object(c.jsx)("div",{className:"fallback-spinner",children:Object(c.jsxs)("div",{className:"loading",children:[Object(c.jsx)("div",{className:"effect-1 effects"}),Object(c.jsx)("div",{className:"effect-2 effects"}),Object(c.jsx)("div",{className:"effect-3 effects"})]})})}},702:function(e,t,n){},709:function(e,t,n){},721:function(e,t,n){}}]);
//# sourceMappingURL=43.2f06b652.chunk.js.map