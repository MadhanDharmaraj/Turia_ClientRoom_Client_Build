(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[57],{1414:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(5),s=c(9),i=c(0),r=c(21),l=c(192),o=c(17),j=c(13),d=c(24),b=c(25),u=c(8),m=c(183),O=c(748),x=c(6),f=(c(782),c(225)),h=c(327),p=c(325),v=c(285),g=c(355),N=c(277),y=c(136),k=c(218),w=c(184),C=c.n(w),B=c(185),F=c.n(B),z=c(16),S=c(42),I=c.n(S),D=c(702),Y=c(703),E=c(2),T=Object(z.b)(),M=Object(z.a)(),A=null===M||void 0===M?void 0:M.orguserid,P=F()(C.a),U=function(e){var t=e.tabId,c=e.selectedTask,l=function(e){var t;return Object(E.jsx)(y.a,{initials:!0,className:"me-1",color:"light-primary",content:(null===e||void 0===e||null===(t=e.username)||void 0===t?void 0:t.charAt(0))||"T"})},d=Object(i.useState)(!1),w=Object(s.a)(d,2),C=w[0],B=w[1],F=function(){return Object(E.jsx)(i.Fragment,{children:Object(E.jsx)(Y.a,{})})},z=Object(o.b)(),S=Object(r.g)().id,U=Object(i.useState)([]),K=Object(s.a)(U,2),R=K[0],J=K[1],_=Object(i.useState)([]),G=Object(s.a)(_,2),q=G[0],L=G[1],V=Object(i.useState)([]),W=Object(s.a)(V,2),H=W[0],Q=W[1],X=Object(i.useState)(""),Z=Object(s.a)(X,2),$=Z[0],ee=Z[1],te=Object(i.useState)(""),ce=Object(s.a)(te,2),ne=ce[0],ae=ce[1],se=Object(i.useState)(""),ie=Object(s.a)(se,2),re=ie[0],le=ie[1],oe=Object(i.useState)(""),je=Object(s.a)(oe,2),de=je[0],be=je[1],ue=Object(i.useState)(0),me=Object(s.a)(ue,2),Oe=me[0],xe=me[1],fe=Object(o.c)((function(e){return e.taskconversation})),he={image:"ui-attachment--image",pdf:"ui-attachment--pdf",xlsx:"ui-attachment--excel",xls:"ui-attachment--excel",docx:"ui-attachment--docx",doc:"ui-attachment--docx"},pe=function(e){return P.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(){var t=Object(a.a)(Object(n.a)().mark((function t(c){return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c.value){t.next=4;break}return t.next=3,z(Object(k.c)({id:e,taskId:S}));case 3:P.fire({icon:"success",title:"Deleted!",text:"Comments has been deleted.",customClass:{confirmButton:"btn btn-success"}});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},ve=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,c=q.map((function(c){var n,a=c.reply;2===t&&(a=null===c||void 0===c||null===(n=c.reply)||void 0===n?void 0:n.map((function(t){return t.id===e?(be(t.comment),Object(u.a)(Object(u.a)({},t),{},{editFlag:!0})):Object(u.a)(Object(u.a)({},t),{},{editFlag:!1})})));return c.id===e?(be(c.comment),Object(u.a)(Object(u.a)({},c),{},{editFlag:!0,reply:a})):Object(u.a)(Object(u.a)({},c),{},{editFlag:!1,reply:a})}));L(c)},ge=function(e){return I()(e,"x").format("YYYY, MMM-D h:m A")},Ne={headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(e){xe(Math.round(100*e.loaded/e.total))}},ye=function(e){B(!0);var t=new FormData;e.forEach((function(e,c){t.append("files[".concat(c,"]"),e)})),t.append("id",S),t.append("organizationId",T),t.append("createdBy",M.orguserid),t.append("clientId",S);var n=[localStorage.getItem("clientName"),"Task","".concat(c.servicename,"- ").concat(c.uniqueno)];t.append("folderPath",n),x.a.post("/files/upload",t,Ne).then((function(e){Q([].concat(Object(b.a)(H),Object(b.a)(e.data.attachment_ids))),B(!1)})).catch((function(){m.b.error("Upload Failed",{position:"bottom-right"}),B(!1)}))},ke=Object(O.a)({multiple:!0,onDrop:function(){var e=Object(a.a)(Object(n.a)().mark((function e(t,c){var a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=[],t.forEach((function(e){e.extension=e.name.split(".").pop(),a.push(e)})),!c.length){e.next=6;break}m.b.error("You can only upload image Files!."),e.next=9;break;case 6:return e.next=8,ye(a);case 8:J([].concat(Object(b.a)(R),a));case 9:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()}),we=ke.getRootProps,Ce=ke.getInputProps,Be=function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.comment=de,""===t.comment){e.next=6;break}return t.updatedBy=A,e.next=5,z(Object(k.e)(t));case 5:m.b.success("Comment Updated Successfully",{position:"bottom-right"});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(i.useEffect)(Object(a.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("tasknotes"!==t){e.next=3;break}return e.next=3,z(Object(k.d)(S));case 3:case"end":return e.stop()}}),e)}))),[t]),Object(i.useEffect)((function(){L((null===fe||void 0===fe?void 0:fe.data)||[])}),[null===fe||void 0===fe?void 0:fe.data]);var Fe=function(){var e=Object(a.a)(Object(n.a)().mark((function e(){var t;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(""!==ne||""!==re||H.length>0)){e.next=11;break}return t={organizationId:T,createdBy:A,updatedBy:A,comment:null===$||""===$?ne:re,attachmentIds:H,conversationId:$,taskId:S},B(!0),e.next=5,z(Object(k.a)(t));case 5:m.b.success("Comment Added Successfully",{position:"bottom-right"}),ae(""),J([]),xe(0),Q([]),B(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ze=R.map((function(e,t){return Object(E.jsxs)(j.B,{md:2,className:"d-flex align-items-center justify-content-between ui-attachment ".concat(he[e.extension]||he.image),children:[Object(E.jsx)("div",{className:"file-details d-flex align-items-center",children:Object(E.jsx)("div",{children:Object(E.jsx)("p",{className:"file-name mb-0 text-overflow-ellipsis",children:e.name.split(".")[0].length>15?"".concat(e.name.split(".")[0].substr(0,15)):e.name})})}),Object(E.jsx)(f.a,{className:"cursor-pointer",size:14,onClick:function(){return function(e,t){var c=R.filter((function(t){return t.name!==e.name}));Q(Object(b.a)(H.splice(t,1))),J(c)}(e,t)}})]},"".concat(e.name,"-").concat(t))}));return Object(E.jsx)(i.Fragment,{children:Object(E.jsx)(D.a,{blocking:C,loader:Object(E.jsx)(F,{}),children:Object(E.jsx)(j.l,{children:Object(E.jsxs)(j.m,{children:[Object(E.jsxs)("fieldset",{className:"form-label-group mb-50",children:[Object(E.jsx)(j.N,{className:"form-check-label",for:"add-comment-",children:"Add Comment"}),Object(E.jsx)(j.K,{id:"add-comment-",type:"textarea",rows:"3",placeholder:"Add Comment",value:ne,onInput:function(e){return ae(e.target.value)}})]}),Object(E.jsx)("input",Object(u.a)({},Ce())),Object(E.jsx)(j.i,Object(u.a)(Object(u.a)({type:"button",color:"primary",size:"sm"},we({})),{},{children:Object(E.jsx)(h.a,{size:14,className:""})})),Object(E.jsx)(j.i,{color:"primary",className:"ms-1",size:"sm",onClick:function(){return Fe()},children:"Post Comment"}),Oe>0&&Object(E.jsx)(j.hb,{className:"mt-md-50",color:Oe<100?"primary":"success",value:Oe}),Object(E.jsx)(j.ib,{className:"d-flex p-1",children:ze}),q.map((function(e,t){var c,n;return Object(E.jsxs)("div",{className:"d-flex align-items-start my-1",children:[l(e),Object(E.jsxs)("div",{className:"profile-user-info w-100",children:[Object(E.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(E.jsx)("h6",{className:"mb-0",children:e.username}),Object(E.jsxs)("span",{className:"d-flex text-body",children:[Object(E.jsx)("span",{className:"text-sm text-body font-small-3 mt-25",children:ge(e.createdon)}),!e.editFlag&&!e.replyFlag&&Object(E.jsxs)(j.wb,{children:[Object(E.jsx)(j.G,{tag:"span",children:Object(E.jsx)(p.a,{size:16})}),Object(E.jsxs)(j.F,{end:!0,children:[Object(E.jsx)(j.E,{children:Object(E.jsxs)(j.B,{tag:"a",href:"/",onClick:function(t){t.preventDefault(),ve(e.id,1)},children:[Object(E.jsx)(v.a,{size:13})," Edit"]})}),Object(E.jsx)(j.E,{children:Object(E.jsxs)(j.B,{tag:"a",href:"/",onClick:function(t){t.preventDefault(),pe(e.id)},children:[Object(E.jsx)(g.a,{size:13})," Delete"]})}),Object(E.jsx)(j.E,{children:Object(E.jsxs)(j.B,{tag:"a",href:"/",onClick:function(e){e.preventDefault(),function(e){var t=q.map((function(t,c){return c===e?(ee(t.id),Object(u.a)(Object(u.a)({},t),{},{replyFlag:!0})):Object(u.a)(Object(u.a)({},t),{},{replyFlag:!1})}));L(t)}(t)},children:[Object(E.jsx)(N.a,{size:13})," Reply"]})})]})]})]})]}),!e.editFlag&&Object(E.jsx)(j.ib,{className:"mt-1",children:Object(E.jsxs)("div",{className:"white-space-wrap text-body ",children:[""!==e.comment&&Object(E.jsx)("span",{className:"rounded-3 bg-light-primary chat-bubble",children:e.comment.replace(/(\\n)/g,"\n")}),Object(E.jsx)(j.ib,{children:null===e||void 0===e||null===(c=e.files)||void 0===c?void 0:c.map((function(e,t){return Object(E.jsx)(j.B,{md:"2",className:"file-details d-flex align-items-center cursor-pointer",children:Object(E.jsx)(j.P,{className:"col-12 d-flex mb-1 align-items-center ui-attachment ".concat(he[e.extension]||he.image),children:Object(E.jsx)("a",{target:"_blank",className:"file-name text-overflow-ellipsis",href:"http://docs.google.com/fileview?id=".concat(e.driveid,"&hl=en&pid=explorer&efh=false&a=v&chrome=false&embedded=true"),children:e.originalfilename.split(".")[0].length>15?"".concat(e.originalfilename.split(".")[0].substr(0,15),".").concat(e.extension):e.originalfilename})})},t)}))})]})}),e.editFlag&&Object(E.jsxs)(j.B,{className:"mt-2",children:[Object(E.jsx)(j.K,{type:"textarea",rows:"3",value:de.replace(/(\\n)/g,"\n"),onInput:function(e){be(e.target.value)}}),Object(E.jsxs)(j.B,{className:"d-flex justify-content-end mt-1",children:[Object(E.jsx)(j.i,{size:"sm",color:"warning",outline:!0,onClick:function(){return ve(-1,1)},children:"Cancel"}),Object(E.jsx)(j.i,{size:"sm",color:"primary",className:"ms-1",onClick:function(){return Be(e)},children:"Save"})]})]}),e.replyFlag&&Object(E.jsxs)(j.B,{children:[Object(E.jsxs)("fieldset",{className:"form-label-group mb-50",children:[Object(E.jsx)(j.N,{className:"form-check-label",for:"add-comment-",children:"Add Comment"}),Object(E.jsx)(j.K,{id:"add-comment-",type:"textarea",rows:"3",placeholder:"Add Comment",value:re,onInput:function(e){return le(e.target.value)}})]}),Object(E.jsx)("input",Object(u.a)({},Ce())),Object(E.jsx)(j.i,Object(u.a)(Object(u.a)({type:"button",color:"primary",size:"sm"},we({})),{},{children:Object(E.jsx)(h.a,{size:14,className:""})})),Object(E.jsx)(j.i,{color:"primary",className:"ms-1",size:"sm",onClick:function(){return Fe()},children:"Send Reply"}),Object(E.jsx)(j.i,{color:"warning",className:"ms-1",size:"sm",onClick:function(){return function(){ee(null),le("");var e=q.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{replyFlag:!1})}));L(e)}()},children:"Cancel"}),Oe>0&&Object(E.jsx)(j.hb,{className:"mt-md-50",color:Oe<100?"primary":"success",value:Oe}),Object(E.jsx)(j.ib,{className:"d-flex p-1",children:ze})]}),null===e||void 0===e||null===(n=e.reply)||void 0===n?void 0:n.map((function(t,c){var n;return null!==t&&Object(E.jsxs)("div",{className:"d-flex align-items-start my-1",children:[l(t),Object(E.jsxs)("div",{className:"profile-user-info w-100",children:[Object(E.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(E.jsx)("h6",{className:"mb-0",children:t.username}),Object(E.jsxs)("span",{className:"d-flex text-body",children:[Object(E.jsx)("span",{className:"text-sm text-body font-small-3 mt-25",children:ge(t.createdon)}),!e.editFlag&&!e.replyFlag&&Object(E.jsxs)(j.wb,{children:[Object(E.jsx)(j.G,{tag:"span",children:Object(E.jsx)(p.a,{size:16})}),Object(E.jsxs)(j.F,{end:!0,children:[Object(E.jsx)(j.E,{children:Object(E.jsxs)(j.B,{tag:"a",href:"/",onClick:function(e){e.preventDefault(),ve(t.id,2)},children:[Object(E.jsx)(v.a,{size:13})," Edit"]})}),Object(E.jsx)(j.E,{children:Object(E.jsxs)(j.B,{tag:"a",href:"/",onClick:function(e){e.preventDefault(),pe(t.id)},children:[Object(E.jsx)(g.a,{size:13})," Delete"]})})]})]})]})]}),Object(E.jsxs)(j.ib,{className:"mt-1",children:[!(null!==t&&void 0!==t&&t.editFlag)&&Object(E.jsxs)("div",{className:"white-space-wrap text-body ",children:[""!==t.comment&&Object(E.jsx)("span",{className:"rounded-3 bg-light-warning chat-bubble-reply",children:t.comment.replace(/(\\n)/g,"\n")}),Object(E.jsx)(j.ib,{children:null===t||void 0===t||null===(n=t.files)||void 0===n?void 0:n.map((function(e,t){return Object(E.jsx)(j.B,{md:"2",className:"file-details d-flex align-items-center cursor-pointer",children:Object(E.jsx)(j.P,{className:"col-12 d-flex mb-1 align-items-center ui-attachment ".concat(he[e.extension]||he.image),children:Object(E.jsx)("a",{target:"_blank",className:"file-name text-overflow-ellipsis",href:"http://docs.google.com/fileview?id=".concat(e.driveid,"&hl=en&pid=explorer&efh=false&a=v&chrome=false&embedded=true"),children:e.originalfilename.split(".")[0].length>15?"".concat(e.originalfilename.split(".")[0].substr(0,15),".").concat(e.extension):e.originalfilename})})},t)}))})]}),(null===t||void 0===t?void 0:t.editFlag)&&Object(E.jsxs)(j.B,{className:"mt-2",children:[Object(E.jsx)(j.K,{type:"textarea",rows:"3",value:de.replace(/(\\n)/g,"\n"),onInput:function(e){be(e.target.value)}}),Object(E.jsxs)(j.B,{className:"d-flex justify-content-end mt-1",children:[Object(E.jsx)(j.i,{size:"sm",color:"warning",outline:!0,onClick:function(){return ve(-1,2)},children:"Cancel"}),Object(E.jsx)(j.i,{size:"sm",color:"primary",className:"ms-1",onClick:function(){return Be(t)},children:"Save"})]})]})]})]})]},c)}))]})]},t)}))]})})})})},K=c(361),R=c(257),J=c(320),_=(c(448),function(e){var t=e.selectedTask,c=Object(r.e)().search,n=new URLSearchParams(c),a=Object(i.useState)("tasknotes"),l=Object(s.a)(a,2),o=l[0],b=l[1];Object(i.useEffect)((function(){var e=n.get("tabId");e&&b(e)}),[n]);var u=function(e){return 13===e.length?I()(e,"x").format("MMM DD, YYYY"):I.a.unix(e).format("MMM DD, YYYY")};return Object(E.jsxs)(i.Fragment,{children:[Object(E.jsx)(j.l,{children:Object(E.jsx)(j.m,{children:Object(E.jsxs)(j.mb,{responsive:!0,bordered:!0,children:[Object(E.jsx)("thead",{children:Object(E.jsxs)("tr",{children:[Object(E.jsxs)("th",{colSpan:"1",children:[Object(E.jsxs)(j.B,{tag:d.b,to:"/clients/view/".concat(t.clientid),children:[t.clientname," - "]}),Object(E.jsx)(j.B,{tag:d.b,to:"/services/view/".concat(t.serviceid),children:t.servicename})]}),Object(E.jsx)("th",{children:Object(E.jsxs)(j.ib,{className:"justify-content-end",children:[Object(E.jsx)(j.B,{className:"p-0",md:5}),Object(E.jsx)(j.B,{md:2,className:"d-flex",children:Object(E.jsx)(j.B,{tag:d.b,to:"/task/list",children:Object(E.jsx)(f.a,{size:16,className:"ms-1 cursor-pointer",id:"deletetooltip"})})})]})})]})}),Object(E.jsxs)("tbody",{children:[Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"Assigned To"}),Object(E.jsx)("td",{children:t.assigeduser.map((function(e,t){var c;return Object(E.jsxs)(j.f,{color:"light-primary",pill:!0,href:"#",children:[Object(E.jsx)(K.a,{size:14}),Object(E.jsx)("span",{className:"align-middle ms-50",children:null===(c=JSON.parse(e))||void 0===c?void 0:c.name})]},t)}))})]}),Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"Start Date"}),Object(E.jsx)("td",{children:Object(E.jsxs)("div",{className:"d-flex justify-content-between",children:[u(t.startdate),Object(E.jsx)(R.a,{size:16})]})})]}),Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"End Date"}),Object(E.jsx)("td",{children:Object(E.jsxs)("div",{className:"d-flex justify-content-between",children:[u(t.enddate),Object(E.jsx)(R.a,{size:16})]})})]})]})]})})}),Object(E.jsx)(j.U,{pills:!0,className:"flex-lg-row flex-column nav nav-left",children:Object(E.jsx)(j.V,{children:Object(E.jsxs)(j.W,{active:"tasknotes"===o,onClick:function(){var e;o!==(e="tasknotes")&&b(e)},children:[Object(E.jsx)(J.a,{className:"font-medium-3 me-50"}),Object(E.jsx)("span",{className:"fw-bold",children:"Comments"})]})})}),Object(E.jsx)(j.l,{children:Object(E.jsx)(j.m,{className:"px-0",children:Object(E.jsx)(j.ib,{className:"",children:Object(E.jsx)(i.Fragment,{children:Object(E.jsx)(j.kb,{activeTab:o,children:Object(E.jsx)(j.lb,{tabId:"tasknotes",children:Object(E.jsx)(U,{tabId:o,selectedTask:t})})})})})})})]})}),G=(c(721),Object(z.d)());t.default=function(){var e=Object(o.c)((function(e){return e.task})),t=Object(o.b)(),c=Object(i.useState)(!1),d=Object(s.a)(c,2),b=d[0],u=d[1],m=function(){return Object(E.jsx)(i.Fragment,{children:Object(E.jsx)(Y.a,{})})},O=Object(r.g)().id;return Object(i.useEffect)(Object(a.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===O){e.next=4;break}return u(!0),e.next=4,t(Object(l.d)({id:O,userId:G}));case 4:u(!1);case 5:case"end":return e.stop()}}),e)}))),[t,O]),null!==e.selectedTask&&void 0!==e.selectedTask?Object(E.jsx)(D.a,{blocking:b,loader:Object(E.jsx)(m,{}),children:Object(E.jsx)("div",{className:"app-user-view",children:Object(E.jsx)(j.ib,{children:Object(E.jsx)(j.B,{xl:"12",lg:"12",children:Object(E.jsx)(_,{selectedTask:e.selectedTask})})})})}):Object(E.jsx)(D.a,{blocking:b,loader:Object(E.jsx)(m,{})})}},702:function(e,t,c){"use strict";var n=c(8),a=c(23),s=c(0),i=c(7),r=c.n(i),l=c(13),o=(c(704),c(2)),j=function(e){var t,c=e.children,i=e.blocking,l=e.loader,j=e.className,d=e.tag,b=e.overlayColor,u=d;return Object(o.jsxs)(u,{className:r()("ui-loader",(t={},Object(a.a)(t,j,j),Object(a.a)(t,"show",i),t)),children:[c,i?Object(o.jsxs)(s.Fragment,{children:[Object(o.jsx)("div",Object(n.a)({className:"overlay"},i&&b?{style:{backgroundColor:b}}:{})),Object(o.jsx)("div",{className:"loader",children:l})]}):null]})};t.a=j,j.defaultProps={tag:"div",blocking:!1,loader:Object(o.jsx)(l.jb,{color:"primary"})}},703:function(e,t,c){"use strict";var n=c(2);t.a=function(){return Object(n.jsx)("div",{className:"fallback-spinner",children:Object(n.jsxs)("div",{className:"loading",children:[Object(n.jsx)("div",{className:"effect-1 effects"}),Object(n.jsx)("div",{className:"effect-2 effects"}),Object(n.jsx)("div",{className:"effect-3 effects"})]})})}},704:function(e,t,c){},721:function(e,t,c){}}]);
//# sourceMappingURL=57.b25c39af.chunk.js.map