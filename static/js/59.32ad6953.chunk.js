(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[59],{1400:function(e,t,n){"use strict";n.r(t);var a=n(882),i=n(14),r=(n(737),n(743),n(3));t.default=function(){return Object(r.jsx)("div",{className:"invoice-add-wrapper",children:Object(r.jsx)(i.ib,{className:"invoice-add",children:Object(r.jsx)(i.B,{xl:12,md:12,sm:12,children:Object(r.jsx)(a.a,{})})})})}},735:function(e,t,n){"use strict";var a=n(8),i=n(27),r=n(0),l=n(7),c=n.n(l),s=n(14),d=(n(738),n(3)),o=function(e){var t,n=e.children,l=e.blocking,s=e.loader,o=e.className,u=e.tag,m=e.overlayColor,j=u;return Object(d.jsxs)(j,{className:c()("ui-loader",(t={},Object(i.a)(t,o,o),Object(i.a)(t,"show",l),t)),children:[n,l?Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)("div",Object(a.a)({className:"overlay"},l&&m?{style:{backgroundColor:m}}:{})),Object(d.jsx)("div",{className:"loader",children:s})]}):null]})};t.a=o,o.defaultProps={tag:"div",blocking:!1,loader:Object(d.jsx)(s.jb,{color:"primary"})}},736:function(e,t,n){"use strict";var a=n(3);t.a=function(){return Object(a.jsx)("div",{className:"fallback-spinner",children:Object(a.jsxs)("div",{className:"loading",children:[Object(a.jsx)("div",{className:"effect-1 effects"}),Object(a.jsx)("div",{className:"effect-2 effects"}),Object(a.jsx)("div",{className:"effect-3 effects"})]})})}},737:function(e,t,n){},738:function(e,t,n){},743:function(e,t,n){},746:function(e,t,n){},882:function(e,t,n){"use strict";var a=n(2),i=n(5),r=n(12),l=n(8),c=n(10),s=n(0),d=n(742),o=n(744),u=n(745),m=n(185),j=n.n(m),v=n(186),f=n.n(v),b=n(735),O=n(736),g=n(13),x=n(14),h=n(21),p=n(184),D=n(6),N=n(195),y=n(7),I=n.n(y),S=n(747),w=n.n(S),C=(n(746),n(481),n(737),n(743),n(28)),F=n.n(C),k=n(3),B=(f()(j.a),Object(g.b)()),q=Object(g.d)(),A=[{id:1,name:"Low"},{id:2,name:"Medium"},{id:3,name:"High"}],P=[{id:1,name:"Monthly"},{id:2,name:"Yearly"},{id:3,name:"Quarterly"},{id:4,name:"Daily"},{id:5,name:"Weekly"}],E={multiValue:function(e,t){return Object(c.a)(t),Object(l.a)(Object(l.a)({},e),{},{backgroundColor:"#7367f0"})}};t.a=function(e){var t,n,c,m,j,v,f,g,y,S,C,R,V=Object(s.useState)(!1),L=Object(r.a)(V,2),Y=L[0],M=L[1],J=Object(s.useState)(!1),Q=Object(r.a)(J,2),T=Q[0],z=Q[1],U=function(){return Object(k.jsx)(s.Fragment,{children:Object(k.jsx)(O.a,{})})},H=Object(h.b)(),K=e.id,W=e.editTaskFlag,G=e.selTask,X=e.selectedService,Z=e.setEditClose,$=e.refreshTaskList,_=o.d().shape({clientId:o.f().required("Please Select Client"),updatedBy:o.f().default(q),id:o.f().default(null===G||void 0===G?void 0:G.id),organizationId:o.f().default(B),serviceId:o.f().default(K),invoiceFlag:o.b().default(!1),recurringId:o.c().default(1).required("Please Select Frequency"),priority:o.c().default(1).required("Please Select Priority"),startDate:o.f().when("recurringId",{is:function(e){return 1===e||2===e||5===e},then:o.f().required("Please Enter Start Date")}),endDate:o.f().when("recurringId",{is:function(e){return 1===e||2===e||5===e},then:o.f().required("Please Enter End Date")}),assigneeId:o.a().min(1,"Atleast require ine Selection"),reviewerId:o.a(),invoiceAmount:o.f().default("0.00").nullable(),quarterlyDates:o.a().of(o.d().shape({startDate:o.f().when("duration",{is:function(e){return 3===parseInt(e)},then:o.f().required("Please Enter Start Date")}),endDate:o.f().when("duration",{is:function(e){return 3===parseInt(e)},then:o.f().required("Please Enter End Date")})}))}),ee=Object(d.f)({resolver:Object(u.a)(_),defaultValues:_.cast()}),te=ee.handleSubmit,ne=ee.formState.errors,ae=ee.control,ie=ee.setValue,re=Object(s.useState)([]),le=Object(r.a)(re,2),ce=le[0],se=le[1],de=Object(s.useState)([]),oe=Object(r.a)(de,2),ue=oe[0],me=oe[1],je=Object(s.useState)([]),ve=Object(r.a)(je,2),fe=ve[0],be=ve[1],Oe=[{id:0,name:"Sunday"},{id:1,name:"Monday"},{id:2,name:"Tuesday"},{id:3,name:"Wednesday  "},{id:4,name:"Thursday"},{id:5,name:"Friday"},{id:6,name:"Saturday"}];Object(s.useEffect)((function(){be(Array(30).fill().map((function(e,t){return{id:t+1,name:t+1}})))}),[]);var ge=Object(s.useState)([]),xe=Object(r.a)(ge,2),he=xe[0],pe=xe[1],De=Object(s.useState)(1),Ne=Object(r.a)(De,2),ye=Ne[0],Ie=Ne[1],Se=Object(s.useState)([]),we=Object(r.a)(Se,2),Ce=we[0],Fe=we[1],ke=Object(s.useState)(),Be=Object(r.a)(ke,2),qe=Be[0],Ae=Be[1],Pe=Object(s.useState)(),Ee=Object(r.a)(Pe,2),Re=Ee[0],Ve=Ee[1];Object(s.useEffect)((function(){pe(ce),Fe(ce)}),[ce]);var Le=function(e,t,n){var a=F()(e[0]).startOf("d").valueOf();ie("quarterlyDates[".concat(n,"].").concat(t),a)},Ye=function(e,t,n){var a="",i=F()().format("D");if(2===ye)a=F()(e[0]).startOf("d").valueOf();else if(5===ye){var r=F()().format("d");a=parseInt(r)>=e?F()().set(e,"d").add(1,"w").startOf("d").valueOf():F()().set(e,"d").startOf("d").valueOf()}else 1===ye&&(a=parseInt(i)<=e?F()().set("D",e).startOf("d").valueOf():F()().set("D",e).add(1,"M").startOf("d").valueOf());if(ie("".concat(t),a),n)return a},Me=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Ae(e);var n,a=[];n=(a=t?Array.isArray(e)?e.map((function(e){return e.userid})):[]:Array.isArray(e)?e.map((function(e){return e.id})):[]).length>0?ce.filter((function(e){var t=e.id;return!a.some((function(e){return e===t}))})):ce,Fe(n),ie("assigneeId",a)},Je=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Ve(e);var n,a=[];n=(a=t?Array.isArray(e)?e.map((function(e){return e.userid})):[]:Array.isArray(e)?e.map((function(e){return e.id})):[]).length>0?ce.filter((function(e){var t=e.id;return!a.some((function(e){return e===t}))})):ce,pe(n),ie("reviewerId",a)},Qe=function(){var e=Object(i.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D.a.post("/organizationusers/dropdown").then((function(e){var t=e.data;se(t.organizationusers),Fe(t.organizationusers),pe(t.organizationusers)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){if(G){var e,t;if(ie("clientId",null===G||void 0===G?void 0:G.clientid),ie("id",null===G||void 0===G?void 0:G.id),ie("invoiceFlag",null===G||void 0===G?void 0:G.invoiceflag),ie("recurringId",parseInt(null===G||void 0===G?void 0:G.recurringid)),ie("priority",parseInt(null===G||void 0===G?void 0:G.priority)),ie("invoiceAmount",null===G||void 0===G?void 0:G.taskprice),Ie(parseInt(null===G||void 0===G?void 0:G.recurringid)),1===parseInt(null===G||void 0===G?void 0:G.recurringid))e=F()(null===G||void 0===G?void 0:G.nextrecurringstartdate,"x").format("D"),t=F()(null===G||void 0===G?void 0:G.nextrecurringenddate,"x").format("D"),ie("startDate",parseInt(e)),ie("endDate",parseInt(t));else if(5===parseInt(null===G||void 0===G?void 0:G.recurringid))e=F()(null===G||void 0===G?void 0:G.nextrecurringstartdate,"x").format("d"),t=F()(null===G||void 0===G?void 0:G.nextrecurringenddate,"x").format("d"),ie("startDate",parseInt(e)),ie("endDate",parseInt(t));else{var n;e=String((null===G||void 0===G?void 0:G.nextrecurringstartdate)/1e3),t=String((null===G||void 0===G?void 0:G.nextrecurringenddate)/1e3),ie("startDate",e),ie("endDate",t);var a=[];(null===G||void 0===G||null===(n=G.quarterlydates)||void 0===n?void 0:n.length)>0&&(a=null===G||void 0===G?void 0:G.quarterlydates.map((function(e){var t=JSON.parse(e);return t.startDate=String((null===t||void 0===t?void 0:t.startDate)/1e3),t.endDate=String((null===t||void 0===t?void 0:t.endDate)/1e3),t}))),ie("quarterlyDates",a)}Me(null===G||void 0===G?void 0:G.assignee,!0),Je(null===G||void 0===G?void 0:G.reviewer,!0)}}),[G]),Object(s.useEffect)(Object(i.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Qe();case 2:return e.next=4,M(!0),void D.a.post("/clients/dropdown",{status:1}).then((function(e){var t=e.data;M(!1),me(t.clients)}));case 4:case"end":return e.stop()}}),e)}))),[]),Object(s.useEffect)((function(){z(W)}),[W]);var Te=function(){var e=Object(i.a)(Object(a.a)().mark((function e(t){var n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],null===G||void 0===G||G.assignee.forEach((function(e){t.assigneeId.includes(e.id)||n.push(e.id)})),null===G||void 0===G||G.reviewer.forEach((function(e){t.reviewerId.includes(e.id)||n.push(e.id)})),t.deletedIds=n,M(!0),3===ye?t.quarterlyDates=null===t||void 0===t?void 0:t.quarterlyDates.map((function(e){var t=e;return t.startDate=10===String(null===t||void 0===t?void 0:t.startDate).length?1e3*(null===t||void 0===t?void 0:t.startDate):null===t||void 0===t?void 0:t.startDate,t.endDate=10===String(null===t||void 0===t?void 0:t.endDate).length?1e3*(null===t||void 0===t?void 0:t.endDate):null===t||void 0===t?void 0:t.endDate,t})):13!==t.startDate.length&&10!==t.startDate.length&&(t.startDate=Ye(parseInt(t.startDate),"startDate",!0),t.endDate=Ye(parseInt(t.endDate),"endDate",!0)),e.next=8,H(Object(N.f)(t));case 8:z(!1),Z(!1),$(!0),M(!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ze={control:function(e){return Object(l.a)(Object(l.a)({},e),{},{minHeight:"30px",height:"30px"})}};return Object(k.jsx)(s.Fragment,{children:Object(k.jsx)(x.Q,{scrollable:!0,className:"modal-dialog-centered modal-xl",isOpen:T,toggle:function(){return z(!T)},children:Object(k.jsxs)(x.R,{children:[Object(k.jsx)(x.B,{className:"d-flex justify-content-between",children:Object(k.jsx)(x.B,{children:Object(k.jsxs)("h5",{children:["Add Recurring Task - ",Object(k.jsx)("span",{className:"text-primary",children:null===X||void 0===X?void 0:X.name})]})})}),Object(k.jsxs)("form",{onSubmit:te(Te),children:[Object.keys(ne).map((function(e,t){return Object(k.jsxs)(x.I,{children:[" ",e]},t)})),Object(k.jsx)("div",{className:"invoice-add",children:Object(k.jsx)("div",{className:"invoice-preview-card",children:Object(k.jsx)(b.a,{blocking:Y,loader:Object(k.jsx)(U,{}),children:Object(k.jsx)(x.m,{className:"invoice-padding invoice-product-details",children:Object(k.jsx)("div",{className:"repeater-wrapper",children:Object(k.jsx)(x.ib,{children:Object(k.jsx)(x.B,{className:"d-lg-flex border p-2 position-relative rounded flex-wrap",sm:"12",children:Object(k.jsxs)(s.Fragment,{children:[Object(k.jsxs)(x.B,{className:"me-50 mb-lg-0 mb-2 mt-lg-0 mt-2 col-lg-2 col-sm-3",children:[Object(k.jsx)(x.u,{className:"col-title mb-md-50 mb-0",children:"Client"}),Object(k.jsx)(d.a,{control:ae,name:"clientId",id:"clientId",render:function(e){var t=e.field,n=e.ref;return Object(k.jsx)(p.a,Object(l.a)(Object(l.a)({},t),{},{inputRef:n,className:I()("react-select",{"is-invalid":null===ne||void 0===ne?void 0:ne.clientId}),classNamePrefix:"select",options:ue,placeholder:"Select Client",value:ue.find((function(e){return e.id===t.value})),onChange:function(e){t.onChange(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id},styles:E}))}}),(null===ne||void 0===ne?void 0:ne.clientId)&&Object(k.jsx)(x.I,{className:"text-danger",children:null===ne||void 0===ne||null===(t=ne.clientId)||void 0===t?void 0:t.message})]}),Object(k.jsxs)(x.B,{className:"me-50 mb-lg-0 mb-2 mt-lg-0 mt-2 col-lg-1 col-sm-3",children:[Object(k.jsx)(x.u,{className:"col-title mb-md-50 mb-0",children:"Priority"}),Object(k.jsx)(d.a,{control:ae,name:"priority",id:"priority",render:function(e){var t=e.field,n=e.ref;return Object(k.jsx)(p.a,Object(l.a)(Object(l.a)({},t),{},{inputRef:n,className:I()("react-select",{"is-invalid":null===ne||void 0===ne?void 0:ne.priority}),classNamePrefix:"select",placeholder:"Priority",options:A,value:A.find((function(e){return e.id===t.value})),onChange:function(e){return t.onChange(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),(null===ne||void 0===ne?void 0:ne.priority)&&Object(k.jsx)(x.I,{className:"text-danger",children:null===ne||void 0===ne||null===(n=ne.priority)||void 0===n?void 0:n.message})]}),Object(k.jsxs)(x.B,{className:"me-50 mb-lg-0 mb-2 mt-lg-0 mt-2 col-lg-3 col-sm-4",children:[Object(k.jsx)(x.u,{className:"col-title mb-md-50 mb-0",children:"Assignee"}),Object(k.jsx)(d.a,{control:ae,name:"assignee",id:"assignee",render:function(e){var t=e.field,n=e.ref;return Object(k.jsx)(p.a,Object(l.a)(Object(l.a)({inputRef:n,className:I()("react-select",{"is-invalid":null===ne||void 0===ne?void 0:ne.assignee})},t),{},{classNamePrefix:"select",options:he,isMulti:!0,value:qe,placeholder:"Select Assignee",onChange:function(e){Me(e)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id},styles:E}))}}),(null===ne||void 0===ne?void 0:ne.assignee)&&Object(k.jsx)(x.I,{className:"text-danger",children:null===ne||void 0===ne||null===(c=ne.assignee)||void 0===c?void 0:c.message})]}),Object(k.jsxs)(x.B,{className:"me-50 mb-lg-0 mb-2 mt-lg-0 mt-2 col-lg-3 col-sm-4",children:[Object(k.jsx)(x.u,{className:"col-title mb-md-50 mb-0",children:"Reviewer"}),Object(k.jsx)(d.a,{control:ae,name:"reviewer",id:"reviewer",render:function(e){var t=e.field,n=e.ref;return Object(k.jsx)(p.a,Object(l.a)(Object(l.a)({inputRef:n,className:I()("react-select",{"is-invalid":null===ne||void 0===ne?void 0:ne.reviewer})},t),{},{classNamePrefix:"select",options:Ce,isMulti:!0,value:Re,placeholder:"Select Reviewer",onChange:function(e){Je(e)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id},styles:E}))}}),(null===ne||void 0===ne?void 0:ne.reviewer)&&Object(k.jsx)(x.I,{className:"text-danger",children:null===ne||void 0===ne||null===(m=ne.reviewer)||void 0===m?void 0:m.message})]}),Object(k.jsxs)(x.B,{children:[Object(k.jsx)(x.u,{className:"col-title mb-md-50 mb-0",children:"Recurring Invoice"}),Object(k.jsx)("div",{className:"form-switch form-check-primary",children:Object(k.jsx)(d.a,{control:ae,name:"invoiceFlag",id:"invoiceFlag",render:function(e){var t=e.field;return Object(k.jsx)(x.K,Object(l.a)(Object(l.a)({defaultChecked:null===G||void 0===G?void 0:G.invoiceflag,type:"switch"},t),{},{name:"invoiceFlag"}))}})})]}),Object(k.jsxs)(x.B,{className:"me-50 mb-lg-0 mb-2 mt-lg-0 mt-2 col-lg-1 col-sm-2",children:[Object(k.jsx)(x.u,{className:"col-title mb-md-50 mb-0",children:"Amount"}),Object(k.jsx)(d.a,{control:ae,name:"invoiceAmount",id:"invoiceAmount",render:function(e){var t=e.field,n=e.value;return Object(k.jsx)(x.K,Object(l.a)({placeholder:"Amount",value:n,type:"text"},t))}}),(null===ne||void 0===ne?void 0:ne.invoiceAmount)&&Object(k.jsx)("p",{className:"text-danger",children:null===ne||void 0===ne||null===(j=ne.invoiceAmount)||void 0===j?void 0:j.message})]}),Object(k.jsxs)(x.B,{className:"mt-1 d-flex",md:12,children:[Object(k.jsxs)(x.B,{className:"me-50 mb-lg-0 mb-2 mt-lg-0 mt-2 col-lg-2 col-sm-3",children:[Object(k.jsx)(d.a,{control:ae,name:"recurringId",id:"recurringId",render:function(e){var t=e.field,n=e.ref;return Object(k.jsx)(p.a,Object(l.a)(Object(l.a)({},t),{},{inputRef:n,className:I()("react-select",{"is-invalid":null===ne||void 0===ne?void 0:ne.recurringId}),classNamePrefix:"select",options:P,placeholder:"Select Frequency",value:P.find((function(e){return e.id===t.value})),onChange:function(e){t.onChange(e.id),function(e){Ie(e),ie("startDate",null),ie("endDate",null)}(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id},styles:ze}))}}),(null===ne||void 0===ne?void 0:ne.recurringId)&&Object(k.jsx)(x.I,{className:"text-danger",children:null===ne||void 0===ne||null===(v=ne.recurringId)||void 0===v?void 0:v.message})]}),1===ye&&Object(k.jsxs)(s.Fragment,{children:[Object(k.jsxs)(x.B,{className:"me-50 mb-lg-0 mb-2 mt-lg-0 mt-2 col-lg-2 col-sm-3",children:[Object(k.jsx)(d.a,{control:ae,name:"startDate",id:"startDate",render:function(e){var t=e.field,n=e.ref;return Object(k.jsx)(p.a,Object(l.a)(Object(l.a)({},t),{},{inputRef:n,className:I()("react-select",{"is-invalid":null===ne||void 0===ne?void 0:ne.startDate}),classNamePrefix:"select",options:fe,placeholder:"Select Date",value:fe.find((function(e){return e.id===t.value})),onChange:function(e){t.onChange(e.id),Ye(e.id,"startDate")},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id},styles:ze}))}}),(null===ne||void 0===ne?void 0:ne.startDate)&&Object(k.jsx)(x.I,{className:"text-danger",children:null===ne||void 0===ne||null===(f=ne.startDate)||void 0===f?void 0:f.message})]}),Object(k.jsxs)(x.B,{className:"me-50 mb-lg-0 mb-2 mt-lg-0 mt-2 col-lg-2 col-sm-3",children:[Object(k.jsx)(d.a,{control:ae,name:"endDate",id:"endDate",render:function(e){var t=e.field,n=e.ref;return Object(k.jsx)(p.a,Object(l.a)(Object(l.a)({inputRef:n,className:I()("react-select",{"is-invalid":null===ne||void 0===ne?void 0:ne.endDate})},t),{},{classNamePrefix:"select",placeholder:"Select Date",options:fe,value:fe.find((function(e){return e.id===t.value})),onChange:function(e){t.onChange(e.id),Ye(e.id,"endDate")},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),(null===ne||void 0===ne?void 0:ne.endDate)&&Object(k.jsx)(x.I,{className:"text-danger",children:null===ne||void 0===ne||null===(g=ne.endDate)||void 0===g?void 0:g.message})]})]}),5===ye&&Object(k.jsxs)(s.Fragment,{children:[Object(k.jsxs)(x.B,{className:"me-50 mb-lg-0 mb-2 mt-lg-0 mt-2 col-lg-2 col-sm-3",children:[Object(k.jsx)(d.a,{control:ae,name:"startDate",id:"startDate",render:function(e){var t=e.field,n=e.ref;return Object(k.jsx)(p.a,Object(l.a)(Object(l.a)({},t),{},{inputRef:n,className:I()("react-select",{"is-invalid":null===ne||void 0===ne?void 0:ne.startDate}),classNamePrefix:"select",options:Oe,placeholder:"Select Date",value:Oe.find((function(e){return e.id===t.value})),onChange:function(e){t.onChange(e.id),Ye(e.id,"startDate")},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),(null===ne||void 0===ne?void 0:ne.startDate)&&Object(k.jsx)(x.I,{className:"text-danger",children:null===ne||void 0===ne||null===(y=ne.startDate)||void 0===y?void 0:y.message})]}),Object(k.jsxs)(x.B,{className:"me-50 mb-lg-0 mb-2 mt-lg-0 mt-2 col-lg-2 col-sm-3",children:[Object(k.jsx)(d.a,{control:ae,name:"endDate",id:"endDate",render:function(e){var t=e.field,n=e.ref;return Object(k.jsx)(p.a,Object(l.a)(Object(l.a)({},t),{},{inputRef:n,className:I()("react-select",{"is-invalid":null===ne||void 0===ne?void 0:ne.endDate}),classNamePrefix:"select",placeholder:"Select Date",options:Oe,value:Oe.find((function(e){return e.id===t.value})),onChange:function(e){t.onChange(e.id),Ye(e.id,"endDate")},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),(null===ne||void 0===ne?void 0:ne.endDate)&&Object(k.jsx)(x.I,{className:"text-danger",children:null===ne||void 0===ne||null===(S=ne.endDate)||void 0===S?void 0:S.message})]})]}),2===ye&&Object(k.jsxs)(s.Fragment,{children:[Object(k.jsxs)(x.B,{className:"me-50 mb-lg-0 mb-2 mt-lg-0 mt-2 col-lg-2 col-sm-3",children:[Object(k.jsx)(d.a,{name:"startDate",id:"startDate",control:ae,rules:{required:!0},options:{dateFormat:"d-m-Y"},render:function(e){var t=e.field;return Object(k.jsx)(w.a,{min:F()().add(1,"D").format("Y-m-d"),value:t.value,placeholder:"Select Date",onChange:function(e,n){t.onChange(n),Ye(e,"startDate")},options:{altInput:!0,altFormat:"F j, Y",dateFormat:"U"},className:I()("due-date-picker",{"flatpickr-input is-invalid":ne.startDate})})}}),(null===ne||void 0===ne?void 0:ne.startDate)&&Object(k.jsx)(x.I,{className:"text-danger",children:null===ne||void 0===ne||null===(C=ne.startDate)||void 0===C?void 0:C.message})]}),Object(k.jsxs)(x.B,{className:"me-50 mb-lg-0 mb-2 mt-lg-0 mt-2 col-lg-2 col-sm-3",children:[Object(k.jsx)(d.a,{onChange:function(e){return setDate(e)},name:"endDate",id:"endDate",control:ae,rules:{required:!0},options:{dateFormat:"d-m-Y"},render:function(e){var t=e.field;return Object(k.jsx)(w.a,{min:F()().add(1,"D").format("Y-m-d"),value:t.value,placeholder:"Select Date",onChange:function(e,n){t.onChange(n),Ye(e,"endDate")},options:{altInput:!0,altFormat:"F j, Y",dateFormat:"U"},className:I()("due-date-picker",{"flatpickr-input is-invalid":ne.endDate})})}}),(null===ne||void 0===ne?void 0:ne.endDate)&&Object(k.jsx)(x.I,{className:"text-danger",children:null===ne||void 0===ne||null===(R=ne.endDate)||void 0===R?void 0:R.message})]})]}),3===ye&&Object(k.jsx)(x.B,{md:6,children:[{label:"Quarter (Apr - Jun)",startDate:null,endDate:null},{label:"Quarter (Jul - Sep)",startDate:null,endDate:null},{label:"Quarter (Oct - Dec)",startDate:null,endDate:null},{label:"Quarter (Jan - Mar)",startDate:null,endDate:null}].map((function(e,t){var n,a;return Object(k.jsxs)(x.B,{className:"d-flex mb-1",children:[Object(k.jsxs)(x.B,{className:"me-50 mb-lg-0 mb-2 mt-lg-0 mt-2 col-lg-4 col-sm-3",children:[Object(k.jsx)(d.a,{name:"quarterlyDates[".concat(t,"].startDate"),id:"quarterlyDates[".concat(t,"].startDate"),control:ae,rules:{required:!0},options:{dateFormat:"d-m-Y"},render:function(e){var n=e.field;return Object(k.jsx)(w.a,{value:n.value,placeholder:"Select Date",onChange:function(e,a){n.onChange(a),Le(e,"startDate",t)},options:{altInput:!0,altFormat:"F j, Y",dateFormat:"U"},className:I()("due-date-picker",{"flatpickr-input is-invalid":ne.startDate})})}}),(null===ne||void 0===ne?void 0:ne.startDate)&&Object(k.jsx)(x.I,{className:"text-danger",children:null===ne||void 0===ne||null===(n=ne.startDate)||void 0===n?void 0:n.message})]}),Object(k.jsxs)(x.B,{className:"me-50 mb-lg-0 mb-2 mt-lg-0 mt-2 col-lg-4 col-sm-3",children:[Object(k.jsx)(d.a,{onChange:function(e){return setDate(e)},name:"quarterlyDates[".concat(t,"].endDate"),id:"quarterlyDates[".concat(t,"].endDate"),control:ae,rules:{required:!0},options:{dateFormat:"d-m-Y"},render:function(e){var n=e.field;return Object(k.jsx)(w.a,{value:n.value,placeholder:"Select Date",onChange:function(e,a){n.onChange(a),Le(e,"endDate",t)},options:{altInput:!0,altFormat:"F j, Y",dateFormat:"U"},className:I()("due-date-picker",{"flatpickr-input is-invalid":ne.endDate})})}}),(null===ne||void 0===ne?void 0:ne.endDate)&&Object(k.jsx)(x.I,{className:"text-danger",children:null===ne||void 0===ne||null===(a=ne.endDate)||void 0===a?void 0:a.message})]}),Object(k.jsx)(x.B,{children:e.label})]},t)}))})]})]})})})})})})})}),Object(k.jsx)(x.S,{children:Object(k.jsxs)(x.B,{className:"d-flex justify-content-between",children:[Object(k.jsx)(x.B,{}),Object(k.jsxs)(x.B,{className:"d-flex justify-content-between",children:[Object(k.jsx)(x.B,{}),Object(k.jsxs)(x.B,{children:[Object(k.jsx)(x.i,{color:"warning",onClick:function(){z(!1),Z(!1),$(!1)},children:"Cancel"}),Object(k.jsx)(x.i,{color:"primary",className:"ms-50",type:"submit",children:"Submit"})]})]})]})})]})]})})})}}}]);
//# sourceMappingURL=59.32ad6953.chunk.js.map