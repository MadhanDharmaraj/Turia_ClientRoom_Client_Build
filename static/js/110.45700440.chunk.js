(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[110],{1037:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u}));var c=n(10),a=n(2),r=n(5),s=n(4),i=n(6),o=Object(s.b)("appInvoiceSetting/getData",function(){var e=Object(r.a)(Object(a.a)().mark((function e(t){var n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("/organizationprefernces/get",{organizationId:t});case 2:return n=e.sent,e.abrupt("return",{data:n.data.organizationprefernces});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),u=Object(s.b)("appInvoiceSetting/addOrgPreference",function(){var e=Object(r.a)(Object(a.a)().mark((function e(t,n){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(c.a)(n),e.next=3,i.a.post("/organizationprefernces/createandupdate",t);case 3:return e.abrupt("return","");case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());Object(s.c)({name:"appInvoiceSetting",initialState:{accounts:[],total:1,params:{},allData:[]},reducers:{},extraReducers:function(e){e.addCase(o.fulfilled,(function(e,t){e.accounts=t.payload.data,e.params=t.payload.params}))}}).reducer},1390:function(e,t,n){"use strict";n.r(t);var c=n(8),a=n(2),r=n(5),s=n(12),i=n(14),o=n(744),u=n(745),l=n(185),d=n.n(l),j=n(186),b=n.n(j),f=n(6),O=n(0),p=n(187),h=n(1037),x=n(742),m=n(21),g=n(7),v=n.n(g),y=n(316),N=n(387),k=n(13),w=n(735),S=n(736),I=n(3),B=Object(k.b)(),C=Object(k.d)(),z=Object(k.a)(),D=b()(d.a);t.default=function(){var e=Object(O.useState)(!1),t=Object(s.a)(e,2),n=t[0],l=t[1],d=Object(O.useState)(null),j=Object(s.a)(d,2),b=j[0],g=j[1],k=Object(O.useState)(!1),P=Object(s.a)(k,2),T=P[0],R=P[1],A=function(){return Object(I.jsx)(O.Fragment,{children:Object(I.jsx)(S.a,{})})},E=o.d().shape({name:o.f().required("Please Enter Name"),percentage:o.f().required("Please Enter Tax Percentage"),id:o.f(),createdby:o.f().default(C),updatedby:o.f().default(C),organizationId:o.f().default(B)}),q=Object(x.f)({resolver:Object(u.a)(E),defaultValues:E.cast()}),F=q.handleSubmit,J=q.formState.errors,K=q.control,U=q.setValue,V=Object(m.b)(),Y=Object(O.useState)([]),H=Object(s.a)(Y,2),Q=H[0],$=H[1],G=Object(O.useState)(null),L=Object(s.a)(G,2),M=L[0],W=L[1],X=function(){f.a.post("/taxgroups/list",{country:z.countryshortname}).then((function(e){$(e.data.taxgroups)})).catch((function(e){console.log(e)}))};Object(O.useEffect)(Object(r.a)(Object(a.a)().mark((function e(){var t,n,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(Object(h.b)(B));case 2:return n=e.sent,c=null===(t=n.payload)||void 0===t?void 0:t.data,W((null===c||void 0===c?void 0:c.defaulttaxid)||""),e.next=7,X();case 7:case"end":return e.stop()}}),e)}))),[]);var Z=function(){U("name",""),U("percentge",""),U("id",""),U("organizationId",B),U("createdby",C),U("updatedby",C)},_=function(){l(!1),Z()},ee=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return Object(I.jsxs)(i.B,{md:12,children:[Object(I.jsx)(i.N,{sm:"12",className:v()("form-label ".concat(n?"required":"")),for:t,children:e}),Object(I.jsxs)(i.B,{children:[Object(I.jsx)(x.a,{id:t,name:t,control:K,render:function(e){var n=e.field;return Object(I.jsx)(i.K,Object(c.a)({invalid:J[t]&&!0},n))}}),J[t]&&Object(I.jsx)(i.I,{children:J[t].message})]})]})},te=function(){var e=Object(r.a)(Object(a.a)().mark((function e(t){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==b?(f.a.post("/taxgroups/update",t).then((function(){X(),_(),p.b.success("Documents Place Updated Successfully",{position:"bottom-right"})})).catch((function(e){console.log(e)})),g(null)):f.a.post("/taxgroups/create",t).then((function(){X(),_(),p.b.success("Document Place Added Successfully",{position:"bottom-right"})})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsx)(w.a,{blocking:T,loader:Object(I.jsx)(A,{}),children:Object(I.jsxs)(i.l,{children:[Object(I.jsx)(i.m,{className:"py-25",children:Object(I.jsxs)(i.B,{className:"d-flex justify-content-between",children:[Object(I.jsx)("h5",{children:"Tax Rates"}),"IN"!==z.countryshortname&&Object(I.jsx)(i.i,{size:"sm",color:"primary",outline:!0,onClick:function(){return l(!0),void Z()},children:"Add"})]})}),Object(I.jsxs)(i.m,{children:[Object(I.jsxs)(i.mb,{children:[Object(I.jsx)("thead",{children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{children:"Default"}),Object(I.jsx)("th",{children:"Tax Rate"}),Object(I.jsx)("th",{children:"Percentage"}),"IN"!==z.countryshortname&&Object(I.jsx)("th",{children:"Actions"})]})}),Object(I.jsx)("tbody",{children:Q.map((function(e,t){return Object(I.jsxs)("tr",{children:[Object(I.jsx)("td",{children:Object(I.jsx)(i.K,{type:"radio",value:e.id,name:"taxrate",defaultChecked:M===e.id,onChange:function(){var t;t=e.id,R(!0),f.a.post("/organizationprefernces/createandupdate",{organizationId:B,updatedBy:C,defaultTaxId:t}).then((function(){R(!1),p.b.success("Tax Rate Upated Successfully",{position:"bottom-right"})})).catch((function(){p.b.error("Event Failed!",{position:"bottom-right"})}))}})}),Object(I.jsx)("td",{children:e.name}),Object(I.jsxs)("td",{children:[e.percentage||0," %"]}),"IN"!==z.countryshortname&&Object(I.jsx)("td",{children:Object(I.jsxs)("div",{className:"d-flex",children:[Object(I.jsx)(i.B,{onClick:function(){var t;g(t=e),l(!0),U("name",t.groupname),U("id",t.id),U("percentage",t.percentage),U("organizationId",B),U("createdby",C),U("updatedby",C)},className:"cursor-pointer",children:Object(I.jsx)(y.a,{size:16})}),Object(I.jsx)(i.B,{onClick:function(){var t;t=e.id,D.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(){var e=Object(r.a)(Object(a.a)().mark((function e(n){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.value){e.next=8;break}return e.next=3,f.a.post("/taxgroups/delete",{id:t,updatedBy:C});case 3:return X(),D.fire({icon:"success",title:"Deleted!",text:"Document Status has been deleted.",customClass:{confirmButton:"btn btn-success"}}),e.abrupt("return",!0);case 8:if(n.dismiss!==D.DismissReason.cancel){e.next=10;break}return e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},className:"cursor-pointer",children:Object(I.jsx)(N.a,{size:16})})]})})]},t)}))})]}),0===Q.length&&Object(I.jsx)(i.ib,{className:"text-center mt-1",children:Object(I.jsx)("h5",{children:"No Records"})}),Object(I.jsxs)(i.Q,{isOpen:n,toggle:function(){return l(!n)},className:"modal-dialog-centered",children:[Object(I.jsx)(i.T,{toggle:function(){return _()},children:"Document In - Out"}),Object(I.jsxs)(i.R,{children:[Object.keys(J).map((function(e){var t;return Object(I.jsxs)(i.I,{children:["$",null===(t=J[e])||void 0===t?void 0:t.message]},e)})),Object(I.jsxs)(i.ib,{tag:i.H,className:"gx-2 gy-1",onSubmit:F(te),children:[ee("Tax Name","name",!0),ee("Tax Percentage","percentage",!0),Object(I.jsxs)(i.B,{className:"mt-2 pt-1",xs:12,children:[Object(I.jsx)(i.i,{type:"submit",className:"me-1",color:"primary",children:"Submit"}),Object(I.jsx)(i.i,{className:"me-1",color:"warning",onClick:function(){return _()},children:"Cancel"})]})]})]})]})]})]})})}},735:function(e,t,n){"use strict";var c=n(8),a=n(27),r=n(0),s=n(7),i=n.n(s),o=n(14),u=(n(738),n(3)),l=function(e){var t,n=e.children,s=e.blocking,o=e.loader,l=e.className,d=e.tag,j=e.overlayColor,b=d;return Object(u.jsxs)(b,{className:i()("ui-loader",(t={},Object(a.a)(t,l,l),Object(a.a)(t,"show",s),t)),children:[n,s?Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)("div",Object(c.a)({className:"overlay"},s&&j?{style:{backgroundColor:j}}:{})),Object(u.jsx)("div",{className:"loader",children:o})]}):null]})};t.a=l,l.defaultProps={tag:"div",blocking:!1,loader:Object(u.jsx)(o.jb,{color:"primary"})}},736:function(e,t,n){"use strict";var c=n(3);t.a=function(){return Object(c.jsx)("div",{className:"fallback-spinner",children:Object(c.jsxs)("div",{className:"loading",children:[Object(c.jsx)("div",{className:"effect-1 effects"}),Object(c.jsx)("div",{className:"effect-2 effects"}),Object(c.jsx)("div",{className:"effect-3 effects"})]})})}},738:function(e,t,n){}}]);
//# sourceMappingURL=110.45700440.chunk.js.map