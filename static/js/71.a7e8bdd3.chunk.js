(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[71],{1362:function(e,t,c){"use strict";c.r(t);var s=c(3),a=c(5),n=c(9),r=c(0),i=c(8),l=c(25),o=c(7),d=c.n(o),j=c(76),u=c.n(j),b=c(136),m=c(225),h=c(258),O=c(285),f=c(261),p=c(334),x=c(354),g=c(13),v=c(6),N=c(184),w=c.n(N),y=c(104),S=c(185),k=c.n(S),A=c(16),I=c(17),C=c(2),U=Object(A.a)(),R=k()(w.a),M=Object(A.d)(),z=Object(A.b)(),B=function(e){var t,o,j=Object(I.b)(),N=e.handleGroupInfoSidebarRight,w=e.userGroupInfoRight,S=e.refreshList,k=e.user,A=e.userUpdate,B=e.updateSelectedUser,L=e.store,E=L.selectedUser,G=L.contacts,D=c(194).default,T=Object(r.useState)(!1),Z=Object(n.a)(T,2),Y=Z[0],P=Z[1],J=Object(r.useState)(null===E||void 0===E?void 0:E.name),F=Object(n.a)(J,2),W=F[0],H=F[1],Q=Object(r.useState)(E.imageid),K=Object(n.a)(Q,2),X=K[0],V=K[1],q=Object(r.useState)(!1),_=Object(n.a)(q,2),$=_[0],ee=_[1],te=Object(r.useState)([]),ce=Object(n.a)(te,2),se=ce[0],ae=ce[1],ne=Object(r.useState)(G),re=Object(n.a)(ne,2),ie=re[0],le=re[1],oe=Object(r.useState)(),de=Object(n.a)(oe,2),je=de[0],ue=de[1];Object(r.useEffect)((function(){var e=B.users.map((function(e){return e.id}));ue(e),V(B.imageid),H(B.name)}),[B]);var be=function(){ee(!1)};return Object(C.jsxs)("div",{className:d()("user-profile-sidebar col-md-3 col-sm-12",{show:!0===w}),children:[Object(C.jsxs)(u.a,{className:"h-100 user-profile-sidebar-area p-1",options:{wheelPropagation:!1},children:[Object(C.jsx)("header",{className:"user-profile-header",children:Object(C.jsxs)("div",{className:"d-flex justify-content-between border-1 border pt-1 px-1 pb-50 align-items-center",children:[Object(C.jsx)("h6",{className:"text-body",children:"Group Info"}),Object(C.jsx)("span",{className:"close-icon",onClick:N,children:Object(C.jsx)(m.a,{size:14})})]})}),Object(C.jsxs)("div",{className:"header-profile-sidebar text-center m-50 border border-start-0 border-end-0 border-top-0",children:[Object(C.jsx)(b.a,{className:"box-shadow-1 avatar-border",size:"xl",img:X?"https://drive.google.com/thumbnail?id=".concat(X,"&authuser=0"):D,imgHeight:"40",imgWidth:"40"}),Object(C.jsxs)(g.i.Ripple,{size:"sm",tag:g.N,className:"cursor-pointer btn-icon rounded-circle",outline:!0,color:"flat-success",children:[Object(C.jsx)(h.a,{size:21}),Object(C.jsx)(g.K,{type:"file",onChange:function(e){var t=new FileReader,c=e.target.files;t.onload=function(){setAvatar(t.result)},t.readAsDataURL(c[0]),function(e){var t=new FormData;t.append("files[0]",e),t.append("organizationId",z),t.append("id",E.id),t.append("createdBy",M),v.a.post("/google/grouplogoUploads",t).then((function(e){V(e.data.attachment_id);var t=Object(i.a)({},E);t.imageid=e.data.attachment_id,A(t)})).catch((function(e){console.log(e)}))}(e.target.files[0])},hidden:!0,accept:"image/*"})]}),!Y&&Object(C.jsxs)("div",{className:"d-flex mt-1 justify-content-center w-100",children:[Object(C.jsx)("h5",{className:"chat-user-name",children:W}),Object(C.jsx)(O.a,{className:"ms-1",onClick:function(){H(null===k||void 0===k?void 0:k.name),P(!0)},size:14})]}),Y&&Object(C.jsxs)("div",{className:"d-flex mt-50 justify-content-center w-100 align-items-center border border-2 rounded-0 border-top-0 border-start-0 border-end-0",children:[Object(C.jsx)(g.K,{className:"border border-0",type:"text",value:W,onInput:function(e){H(e.target.value)}}),Object(C.jsx)(m.a,{className:"ms-50 cursor-pointer",onClick:function(){P(!1),H(k.name)},size:24}),Object(C.jsx)(f.a,{className:"ms-50 cursor-pointer",onClick:function(){v.a.post("/chatmessages/updategroupname",{id:E.id,groupName:W}).then((function(){P(!1),S(!0);var e=Object(i.a)({},E);e.name=W,A(e)}))},size:24})]}),Object(C.jsxs)("p",{className:"font-small-3",children:["Group. ",null===E||void 0===E||null===(t=E.users)||void 0===t?void 0:t.length," members"]})]}),Object(C.jsxs)("div",{className:"d-flex cursor-pointer justify-content-start align-items-center m-1 pb-1 border border-1 border-top-0 border-start-0 border-end-0",onClick:function(){return ee(!0)},children:[Object(C.jsx)(b.a,{className:"me-1",img:D,imgHeight:"30",imgWidth:"30"}),Object(C.jsx)("div",{className:"profile-user-info w-100",children:Object(C.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(C.jsx)(p.a,{size:15,className:""}),Object(C.jsx)("p",{className:"mb-0 ms-25",children:"Add Member"})]})})]}),null===B||void 0===B||null===(o=B.users)||void 0===o?void 0:o.map((function(e,t){return Object(C.jsxs)("div",{className:"d-flex justify-content-start align-items-center m-1",children:[Object(C.jsx)(b.a,{className:"me-1",img:null!==e&&void 0!==e&&e.imageid?"https://drive.google.com/thumbnail?id=".concat(null===e||void 0===e?void 0:e.imageid,"&authuser=0"):D,imgHeight:"30",imgWidth:"30"}),Object(C.jsx)("div",{className:"profile-user-info w-100",children:Object(C.jsxs)("div",{className:"d-flex justify-content-between w-100",children:[Object(C.jsx)("p",{className:"mb-0",children:null===e||void 0===e?void 0:e.name}),1===parseInt(U.rolelevel)&&Object(C.jsx)(x.a,{className:"text-danger mt-25",size:14,onClick:function(){!function(e){var t=Object(l.a)(ie);t.splice(t.indexOf(e),1),le(t)}(e.id)}})]})})]},t)})),Object(C.jsx)(g.ib,{className:"p-2",children:Object(C.jsx)(g.i,{outline:!0,color:"danger",onClick:function(){R.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(){var e=Object(a.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.value){e.next=5;break}return e.next=3,j(Object(y.c)({id:E.id}));case 3:N(),R.fire({icon:"success",title:"Deleted!",text:"Group has been deleted.",customClass:{confirmButton:"btn btn-success"}});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Delete"})})]}),$&&Object(C.jsxs)(g.Q,{isOpen:$,toggle:function(){ee(!$),closeAddGroup(!$)},className:"modal-dialog-centered",children:[Object(C.jsx)(g.T,{toggle:function(){return be()},children:"Add Member"}),Object(C.jsx)(g.R,{children:Object(C.jsxs)(u.a,{className:"chat-user-list-wrapper list-group",options:{wheelPropagation:!1},children:[Object(C.jsx)("h6",{className:"text-primary mt-1",children:"Users"}),Object(C.jsx)("ul",{className:"chat-users-list contact-list media-list p-0",children:ie.filter((function(e){return-1===je.indexOf(e.id)})).map((function(e){return Object(C.jsxs)("li",{className:"d-flex",children:[Object(C.jsx)(g.K,{type:"checkbox",defaultChecked:E.users.find((function(t){return t.id===e.id})),id:"user_".concat(e.id),className:"me-1",color:"priamry",value:e.id,onChange:function(e){!function(e){if(e.target.checked){var t=Object(l.a)(se);t.push(e.target.value),ae(t)}else{var c=Object(l.a)(se);c.splice(c.indexOf(e.target.value),1),ae(c)}}(e)}}),Object(C.jsx)("div",{className:"chat-info flex-grow-1 position-relative ms-50",children:Object(C.jsx)("div",{className:"d-flex justify-content-between",children:Object(C.jsx)("h5",{className:"mb-0 text-truncate font-small-4",children:e.name})})})]},e.id)}))})]})}),Object(C.jsxs)(g.S,{children:[Object(C.jsx)(g.i,{color:"warning",onClick:function(){return be()},children:"Cancel"}),Object(C.jsx)(g.i,{color:"primary",onClick:function(){v.a.post("/chatmessages/updategroup",{id:E.id,userList:[].concat(Object(l.a)(je),Object(l.a)(se))}).then((function(e){P(!1),S(!0);var t=Object(i.a)({},E);t.users=e.data.users,A(t),ee(!1)}))},children:"Save"})]})]})]})},L=c(814),E=c(42),G=c.n(E),D=c(229),T=function(e){var t=e.file,c=e.userId,i=e.item,l=Object(r.useState)(""),o=Object(n.a)(l,2),d=o[0],j=o[1],u=function(){var e=Object(a.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.load("client:auth2",Object(a.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.client.init({apiKey:"AIzaSyBScPneWv-9KTcbf-rBf-tQv62ybQNdnXo",clientId:"359131465959-9bpip5lq5p0vbd2lat644ed5kcdkjfq5.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/gmail.send"});case 2:return e.next=4,L.a.client.load("drive","v3").then((function(){try{L.a.client.drive.files.get({fileId:null===t||void 0===t?void 0:t.driveid,fields:"webContentLink,size"}).then((function(e){var t=e.result.webContentLink;j(t)})).catch((function(e){console.log(e)}))}catch(e){console.log(e)}}));case 4:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){u(t)}),[t]),Object(C.jsxs)("div",{className:"d-flex flex-wrap flex-column ".concat((null===i||void 0===i?void 0:i.touserid)!==c?"align-items-end":"align-items-start"),children:[Object(C.jsxs)(g.wb,{className:i.touserid===c?"reply-icon-left":"reply-icon",children:[Object(C.jsx)(g.G,{tag:"div",children:Object(C.jsx)(D.a,{size:15,className:"cursor-pointer text-body"})}),Object(C.jsx)(g.F,{children:Object(C.jsx)(g.E,{tag:"a",href:"/",className:"w-100",onClick:function(e){e.preventDefault(),downloadFile(t.driveid)},children:Object(C.jsx)("span",{className:"align-middle",children:"Download"})})})]}),Object(C.jsx)("div",{className:"d-flex flex-column align-items-start border border-2 rounded mb-75 p-1 bg-white",children:Object(C.jsxs)("div",{className:"d-flex flex-column alin-items-start",children:[Object(C.jsx)("a",{href:d,target:"_blank",children:Object(C.jsx)("img",{className:"width-200",src:"https://drive.google.com/thumbnail?id=".concat(t.driveid,"&authuser=0"),alt:null===t||void 0===t?void 0:t.originalfilename,referrerPolicy:"no-referrer"})}),Object(C.jsx)("span",{className:"font-small-2 m-50",children:null===t||void 0===t?void 0:t.originalfilename}),Object(C.jsxs)("p",{className:"font-small-1 ms-50 text-end mb-0",children:[G()(null===i||void 0===i?void 0:i.createdon,"x").format("hh:mm a")," "]})]})})]})},Z=c(919),Y=c(854),P=c(321),J=c(319),F=c(340),W=c(349),H=c(327),Q=c(341),K=c(748),X=c(921).default,V=Object(A.b)(),q=Object(A.d)(),_=function(e){var t=e.attachmentArr,c=e.selectedUser,o=e.setCloseAttachment,d=Object(r.useState)(0),j=Object(n.a)(d,2),u=j[0],b=j[1],h=Object(r.useState)([]),O=Object(n.a)(h,2),f=O[0],p=O[1],x=Object(r.useState)([]),N=Object(n.a)(x,2),w=N[0],S=N[1],k=Object(r.useState)(""),A=Object(n.a)(k,2),U=A[0],R=A[1],M=Object(r.useState)({}),z=Object(n.a)(M,2),B=z[0],L=z[1],E=Object(I.b)(),G=Object(r.useRef)(),D=Object(r.useState)([]),T=Object(n.a)(D,2),P=T[0],J=T[1];Object(r.useEffect)((function(){if(t.length>0){var e=t[0];p(t),L(e),S(t);var c=URL.createObjectURL(e);R(c)}}),[t]);var F=Object(r.useState)(""),_=Object(n.a)(F,2),$=_[0],ee=_[1],te={headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(e){b(Math.round(100*e.loaded/e.total))}};Object(r.useEffect)((function(){w.length>0&&function(e){var t=new FormData;e.forEach((function(e,c){t.append("files[".concat(c,"]"),e)})),t.append("organizationId",V),t.append("createdBy",q),v.a.post("/google/chatmessage",t,te).then((function(e){J([].concat(Object(l.a)(P),Object(l.a)(e.data.attachment_ids))),S([])})).catch((function(e){console.log(e)}))}(w)}),[w]);var ce=Object(K.a)({multiple:!0,onDrop:function(){var e=Object(a.a)(Object(s.a)().mark((function e(t,c){var a;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],t.forEach((function(e){e.extension=e.name.split(".").pop(),a.push(e)})),c.length?toast.error("You can only upload image Files!."):(S(a),p([].concat(Object(l.a)(f),a)));case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()}),se=ce.getRootProps,ae=ce.getInputProps,ne=function(){R(""),L({}),J([]),p([]),o(!0)},re=Object(r.useState)(!1),ie=Object(n.a)(re,2),le=ie[0],oe=ie[1],de=function(e){L(e);var t=URL.createObjectURL(e);R(t)},je=function(e){return URL.createObjectURL(e)};return Object(C.jsx)(g.l,{className:"attachment-window p-2",children:Object(C.jsxs)(g.m,{children:[Object(C.jsxs)(g.B,{className:"text-center",children:[null===B||void 0===B?void 0:B.name,Object(C.jsx)(m.a,{size:18,className:"text-end",onClick:function(){return ne()}})]}),Object(C.jsxs)("div",Object(i.a)(Object(i.a)({},se({className:"dropzone"})),{},{children:[Object(C.jsxs)(g.B,{md:"8",sm:"12",className:"m-auto",children:["png"===(null===B||void 0===B?void 0:B.extension)&&Object(C.jsx)(g.B,{className:"text-center",children:Object(C.jsx)("img",{referrerPolicy:"no-referrer",className:"img-fluid width-60-per p-2",src:U})}),"png"!==(null===B||void 0===B?void 0:B.extension)&&Object(C.jsx)(g.B,{className:"text-center",children:Object(C.jsx)("img",{referrerPolicy:"no-referrer",className:"img-fluid width-25-per p-2",src:X})})]}),Object(C.jsx)(g.B,{md:10,className:"d-flex m-auto justify-content-center",children:f.map((function(e,t){return Object(C.jsx)(r.Fragment,{children:"png"===(null===e||void 0===e?void 0:e.extension)?Object(C.jsx)("img",{className:"img-tumbnail width-15-per p-1",src:je(e),onClick:function(){de(e)}}):Object(C.jsx)("img",{src:X,className:"img-tumbnail width-10-per p-1",onClick:function(){de(e)}})},t)}))})]})),u>0&&Object(C.jsx)(g.hb,{color:u<100?"primary":"success",value:u}),Object(C.jsx)(g.H,{className:"chat-app-form",onSubmit:function(e){return function(e){e.preventDefault(),(""!==$||P.length>0)&&(E(Object(y.j)({usertype:c.usertype,toUserId:c.id,fromUserId:q,organizationId:V,message:$,attachmentIds:P})),G.current&&(G.current.innerText=""),ne(),ee(""))}(e)},children:Object(C.jsxs)(g.B,{className:"chatgroup",children:[Object(C.jsxs)("div",{className:"chattools",children:[Object(C.jsxs)("div",{className:"px-1 pt-1",children:[le&&Object(C.jsx)("div",{style:{position:"absolute",bottom:"53px"},children:Object(C.jsx)(Z.a,{data:Y,onEmojiSelect:function(e){var t="".concat(G.current.innerHTML,"<span>".concat(e.native,"</span>"));G.current.innerHTML=t,ee(t)}})}),Object(C.jsx)(W.a,{className:"cursor-pointer text-secondary",size:20,onClick:function(){return oe(!le)}})]}),Object(C.jsx)("div",{className:"px-1 pt-1",children:Object(C.jsxs)(g.N,{className:"attachment-icon mb-0",for:"attach-doc",children:[Object(C.jsx)(H.a,Object(i.a)({className:"cursor-pointer text-secondary",size:18},se({className:"dropzone"}))),Object(C.jsx)("input",Object(i.a)({},ae()))]})})]}),Object(C.jsx)("div",{className:"mainEdit w-100 me-1",children:Object(C.jsx)("div",{placeholder:"Type your message or use speech to text",ref:G,contentEditable:!0,className:"border border-s-0 border-e-0 maxheight-100 rounded-2 w-100",onInput:function(e){ee(e.currentTarget.innerHTML)}})}),Object(C.jsxs)(g.i,{className:"send",color:"primary",children:[Object(C.jsx)(Q.a,{size:14,className:"d-lg-none"}),Object(C.jsx)("span",{className:"d-none d-lg-block",children:"Send"})]})]})})]})})},$=Object(A.b)(),ee=Object(A.d)(),te=c(194).default,ce=function(e){var t=e.handleGroupInfoSidebarRight,c=e.userGroupInfoRight,o=e.handleUser,j=e.updateSelectedUser,h=e.userSidebarRight,O=e.handleUserSidebarRight,f=e.handleSidebar,p=e.store,x=e.userSidebarLeft,v=p.userProfile,N=p.selectedUser,w=p.chatObj,S=p.receivedMsg,k=Object(r.useState)([]),A=Object(n.a)(k,2),U=A[0],R=A[1],M=Object(r.useRef)(null),z=Object(r.useRef)(null),B=Object(I.b)(),L=Object(r.useState)([]),E=Object(n.a)(L,2),X=E[0],V=E[1],q=Object(r.useState)(!1),ce=Object(n.a)(q,2),se=ce[0],ae=ce[1],ne=Object(r.useState)(""),re=Object(n.a)(ne,2),ie=re[0],le=re[1],oe=Object(r.useState)(""),de=Object(n.a)(oe,2),je=de[0],ue=de[1];Object(r.useEffect)((function(){le(N.name),ue(N.imageid)}),[N]),Object(r.useEffect)((function(){le(null===j||void 0===j?void 0:j.name),ue(null===j||void 0===j?void 0:j.imageid)}),[j]);var be=Object(r.useState)(""),me=Object(n.a)(be,2),he=me[0],Oe=me[1],fe=Object(r.useRef)(),pe=Object(r.useState)(1),xe=Object(n.a)(pe,2),ge=xe[0],ve=xe[1];Object(r.useEffect)((function(){Object.keys(N).length>0&&ve(1)}),[N]),Object(r.useEffect)(Object(a.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(Object.keys(S).length>0)){e.next=4;break}return S.fromuserid!==N.id&&S.touserid!==N.id||X.find((function(e){return e.id===S.id}))||(t=[].concat(Object(l.a)(X),[S]),V(t)),e.next=4,B(Object(y.a)({id:N.id,usertype:parseInt(S.usertype),updateflg:!0}));case 4:case"end":return e.stop()}}),e)}))),[S]),Object(r.useEffect)((function(){se?function(){if(z.current&&M.current){var e,t,c=z.current,s=(M.current.offsetTop+(null!==(e=c.offsetTop)&&void 0!==e?e:1))/2;c.scrollTop=s-(null!==(t=c.clientHeight)&&void 0!==t?t:1)/2}ae(!1)}():function(){var e;null===(e=M.current)||void 0===e||e.scrollIntoView()}()}),[X]),Object(r.useEffect)((function(){var e=[];e=w.refresh?Object(l.a)(w.chats):[].concat(Object(l.a)(w.chats),Object(l.a)(X)),V(e)}),[w]);var Ne=Object(K.a)({multiple:!0,onDrop:function(){var e=Object(a.a)(Object(s.a)().mark((function e(t,c){var a;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],t.forEach((function(e){e.extension=e.name.split(".").pop(),a.push(e)})),c.length?toast.error("You can only upload image Files!."):R([].concat(Object(l.a)(U),a));case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()}),we=Ne.getRootProps,ye=Ne.getInputProps,Se=Object(r.useState)(null),ke=Object(n.a)(Se,2),Ae=ke[0],Ie=ke[1],Ce=Object(r.useState)(!1),Ue=Object(n.a)(Ce,2),Re=Ue[0],Me=Ue[1],ze=Object.keys(N).length&&null!==w&&void 0!==w&&w.chats?u.a:"div",Be=Object(r.useState)(!1),Le=Object(n.a)(Be,2),Ee=Le[0],Ge=Le[1];return Object(C.jsxs)("div",{className:"chat-app-window ".concat(h||c?"col-md-8 col-sm-12":""),style:{position:"relative"},children:[Object(C.jsxs)("div",{className:d()("start-chat-area",{"d-none":Object.keys(N).length}),children:[Object(C.jsx)("div",{className:"start-chat-icon mb-1",children:Object(C.jsx)(P.a,{})}),Object(C.jsx)("h4",{className:"sidebar-toggle start-chat-text",onClick:function(){!Object.keys(N).length&&!x&&window.innerWidth<992&&f()},children:"Start Conversation"})]}),Object.keys(N).length?Object(C.jsxs)("div",{className:d()("active-chat",{"d-none":null===N}),children:[Object(C.jsx)("div",{className:"chat-navbar",children:Object(C.jsxs)("header",{className:"chat-header",children:[Object(C.jsxs)("div",{className:"d-flex align-items-center",children:[Object(C.jsx)("div",{className:"sidebar-toggle d-block d-lg-none me-1",onClick:f,children:Object(C.jsx)(J.a,{size:21})}),Object(C.jsx)(b.a,{imgHeight:"36",imgWidth:"36",img:je?"https://drive.google.com/thumbnail?id=".concat(je,"&authuser=0"):te,className:"avatar-border user-profile-toggle m-0 me-1",onClick:function(){return e=N,void(1===parseInt(e.usertype)&&(t(),o(e)));var e}}),Object(C.jsx)("h6",{className:"mb-0",children:ie})]}),Object(C.jsx)("div",{className:"d-flex align-items-center",children:Object(C.jsx)(F.a,{size:18,className:"cursor-pointer d-sm-block d-none",onClick:function(){return e=N.contact,O(),void o(e);var e}})})]})}),Object(C.jsx)(ze,{className:"user-chats",onScroll:function(e){if(0===e.target.scrollTop){ve(ge+1);var t={id:N.id,page:ge+1,usertype:N.usertype};B(Object(y.d)(t)),ae(!0)}},onDragEnter:function(){return Ge(!0)},children:Object(C.jsxs)(g.ib,{className:"chats",ref:z,children:[X.map((function(e,t){var c,s,a,n,i,l;return Object(C.jsxs)("div",{className:d()("chat",{"chat-left":e.fromuserid!==ee}),children:[1===parseInt(N.usertype)&&Object(C.jsx)("div",{className:"chat-avatar mt-75",children:Object(C.jsx)(b.a,{imgWidth:36,imgHeight:36,className:"box-shadow-1 cursor-pointer",img:e.touserid!==ee?null!==(c=v.avatar)&&void 0!==c?c:te:null!==(s=null===(a=N.contact)||void 0===a?void 0:a.avatar)&&void 0!==s?s:te})}),Object(C.jsx)(g.ib,{className:"",children:null===e||void 0===e||null===(n=e.files)||void 0===n?void 0:n.map((function(t,c){return Object(C.jsx)(r.Fragment,{children:Object(C.jsx)(T,{ind:c,file:t,item:e,userId:ee},c)},c)}))}),Object(C.jsx)("div",{className:"chat-body me-1",children:Object(C.jsxs)("div",{className:"chat-content d-flex flex-wrap flex-column p-50",children:[e.replymessage&&Object(C.jsx)(g.l,{className:"m-0",children:Object(C.jsx)("p",{className:"font-small-2 text-body p-25 bg-light rounded",dangerouslySetInnerHTML:{__html:null===(i=e.replymessage)||void 0===i?void 0:i.replaceAll("<div><br></div>","").replace(/(\\n)/g,"")}})}),Object(C.jsxs)("div",{className:"d-flex",children:[Object(C.jsxs)("div",{className:"".concat(1===parseInt(N.usertype)&&e.fromuserid!==ee?"mt-75 d-flex justify-content-between w-100":"d-flex justify-content-between w-100"),children:[Object(C.jsx)("p",{dangerouslySetInnerHTML:{__html:null===(l=e.message)||void 0===l?void 0:l.replaceAll("<div><br></div>","").replace(/(\\n)/g,"")}}),Object(C.jsxs)("p",{className:"font-small-1 ms-50 text-end ",children:[G()(e.createdon,"x").format("MMM-DD-Y hh:mm a")," "]})]}),Object(C.jsxs)(g.wb,{className:e.touserid===ee?"reply-icon-left":"reply-icon",children:[Object(C.jsx)(g.G,{tag:"div",children:Object(C.jsx)(D.a,{size:15,className:"cursor-pointer text-body"})}),Object(C.jsx)(g.F,{children:Object(C.jsx)(g.E,{tag:"a",href:"/",className:"w-100",onClick:function(t){t.preventDefault(),Ie(e)},children:Object(C.jsx)("span",{className:"align-middle",children:"Reply"})})})]})]})]},t)})]},t)})),Object(C.jsx)("div",{ref:M})]})}),(U.length>0||Ee)&&Object(C.jsx)(_,{className:"attachment-window",attachmentArr:U,selectedUser:N,setCloseAttachment:function(){R([])}}),Object(C.jsxs)(g.H,{className:null!==Ae?"chat-app-form-with-reply chat-app-form":"chat-app-form",onSubmit:function(e){return function(e){e.preventDefault(),""!==he&&(B(Object(y.j)({usertype:N.usertype,toUserId:N.id,fromUserId:ee,organizationId:$,message:he.replaceAll("<div><br></div>",""),replyid:null===Ae||void 0===Ae?void 0:Ae.id})),Oe(""),Me(!1),Ie(null),fe.current&&(fe.current.innerText=""))}(e)},children:[null!==Ae&&Object(C.jsxs)(g.ib,{className:"d-flex  bg-light-secondary mx-1 mt-50 justify-content-center w-100 px-2 pt-50 row",children:[Object(C.jsx)(g.B,{className:"col-11",children:Object(C.jsx)("p",{className:"text-truncate mt-50 font-small-3",dangerouslySetInnerHTML:{__html:Ae.message.replace(/<\/?[^>]+(>|$)/g," ").substr(0,20)}})}),Object(C.jsx)(g.B,{children:Object(C.jsx)(m.a,{size:16,onClick:function(){Ie(null)}})})]}),Object(C.jsxs)(g.B,{className:"chatgroup",children:[Object(C.jsxs)("div",{className:"chattools",children:[Object(C.jsxs)("div",{className:"px-1 pt-1",children:[Re&&Object(C.jsx)("div",{style:{position:"absolute",bottom:"53px"},children:Object(C.jsx)(Z.a,{data:Y,onEmojiSelect:function(e){var t="".concat(fe.current.innerHTML,"<span>".concat(e.native,"</span>"));fe.current.innerHTML=t,Oe(t)}})}),Object(C.jsx)(W.a,{className:"cursor-pointer text-secondary",size:20,onClick:function(){return Me(!Re)}})]}),Object(C.jsx)("div",{className:"px-1 pt-1",children:Object(C.jsxs)(g.N,{className:"attachment-icon mb-0",for:"attach-doc",children:[Object(C.jsx)(H.a,Object(i.a)({className:"cursor-pointer text-secondary",size:18},we({className:"dropzone"}))),Object(C.jsx)("input",Object(i.a)({},ye()))]})})]}),Object(C.jsx)("div",{className:"mainEdit w-100 me-1",children:Object(C.jsx)("div",{placeholder:"Type your message or use speech to text",html:he,ref:fe,contentEditable:!0,className:"border border-s-0 border-e-0 maxheight-100 rounded-2 w-100",onInput:function(e){Oe(e.currentTarget.innerHTML)}})}),Object(C.jsxs)(g.i,{className:"send",color:"primary",children:[Object(C.jsx)(Q.a,{size:14,className:"d-lg-none"}),Object(C.jsx)("span",{className:"d-none d-lg-block",children:"Send"})]})]})]})]}):null]})},se=Object(A.d)(),ae=Object(A.b)(),ne=function(e){var t=Object(r.useState)(!1),c=Object(n.a)(t,2),s=c[0],a=c[1],i=Object(I.b)(),o=e.contacts,d=e.closeAddGroup,j=e.addgroup,b=Object(r.useState)(""),m=Object(n.a)(b,2),h=m[0],O=m[1],f=Object(r.useState)([]),p=Object(n.a)(f,2),x=p[0],N=p[1],w=Object(r.useState)(!1),S=Object(n.a)(w,2),k=S[0],U=S[1];return Object(r.useState)((function(){se=Object(A.d)(),ae=Object(A.b)(),a(j),N([se])}),[j]),Object(C.jsxs)(g.Q,{isOpen:s,toggle:function(){a(!s),d(!s)},className:"modal-dialog-centered",children:[Object(C.jsx)(g.T,{toggle:function(){return a(!1),void d(!1)},children:"Add Group"}),Object(C.jsxs)(g.R,{children:[k&&Object(C.jsx)("p",{className:"text-danger",children:"Please Enter Name, atleast to person need to create Group."}),Object(C.jsx)(g.K,{type:"text",placeholder:"Group Name *",onChange:function(e){O(e.target.value)}}),Object(C.jsxs)(u.a,{className:"chat-user-list-wrapper list-group",options:{wheelPropagation:!1},children:[Object(C.jsx)("h6",{className:"text-primary mt-1",children:"Users"}),Object(C.jsx)("ul",{className:"chat-users-list contact-list media-list p-0",children:function(){if(o&&o.length)return o.map((function(e){return Object(C.jsxs)("li",{className:"d-flex align-item-center my-1",children:[Object(C.jsx)(g.K,{type:"checkbox",defaultChecked:se===e.id,id:"user_".concat(e.id),className:"me-1",color:"priamry",value:e.id,onChange:function(e){!function(e){var t=Object(l.a)(x);e.target.checked?-1===t.indexOf(e.target.value)&&t.push(e.target.value):t.splice(t.indexOf(e.target.value),1),N(t)}(e)}}),Object(C.jsx)("div",{className:"chat-info flex-grow-1",children:Object(C.jsx)(g.N,{className:"mb-0 ms-1",for:"user_".concat(e.id),children:e.name})})]},e.name)}))}()})]})]}),Object(C.jsxs)(g.S,{children:[Object(C.jsx)(g.i,{color:"warning",onClick:function(){return d(!1)},children:"Cancel"}),Object(C.jsx)(g.i,{color:"primary",onClick:function(){return function(){if(""===h||x.length<2)U(!0);else{var e={name:h,userIds:x,createdBy:se,organizationId:ae};v.a.post("/chatmessages/creategroup",e).then((function(){i(Object(y.f)()),d(!1),U(!1)})).catch((function(){}))}}()},children:"Add"})]})]})},re=c(56),ie=c(333),le=function(e){var t=c(194).default,i=e.store,o=e.sidebar,j=e.handleSidebar,h=e.userSidebarLeft,O=i.groups,f=i.contacts,p=i.userProfile,x=i.selectedUser,v=Object(I.b)(),N=Object(r.useState)(""),w=Object(n.a)(N,2),S=w[0],k=w[1],A=Object(r.useState)(0),U=Object(n.a)(A,2),R=U[0],M=U[1],z=Object(r.useState)([]),B=Object(n.a)(z,2),L=B[0],E=B[1],D=Object(r.useState)([]),T=Object(n.a)(D,2),Z=T[0],Y=T[1],P=function(){var e=Object(a.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.id!==t.id){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,v(Object(y.i)(t));case 4:M(t.id),!0===o&&j();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){Object(re.d)(i.selectedUser)||i.selectedUser&&M(i.selectedUser.id)}),[]);var J=Object(r.useState)(!1),W=Object(n.a)(J,2),H=W[0],Q=W[1];return i?Object(C.jsxs)("div",{className:"sidebar-left",children:[H&&Object(C.jsx)(ne,{contacts:f,closeAddGroup:function(e){Q(e)},addgroup:H}),Object(C.jsxs)("div",{className:"sidebar",children:[Object(C.jsx)("div",{className:d()("chat-profile-sidebar",{show:h}),children:Object(C.jsxs)("header",{className:"chat-profile-header",children:[Object(C.jsx)("div",{className:"close-icon",children:Object(C.jsx)(m.a,{size:14})}),Object(C.jsxs)("div",{className:"header-profile-sidebar",children:[Object(C.jsx)(b.a,{className:"box-shadow-1 avatar-border",img:p.avatar||t,size:"xl"}),Object(C.jsx)("h4",{className:"chat-user-name",children:p.fullName}),Object(C.jsx)("span",{className:"user-post",children:p.role})]})]})}),Object(C.jsxs)("div",{className:d()("sidebar-content",{show:!0===o}),children:[Object(C.jsx)("div",{className:"sidebar-close-icon",onClick:j,children:Object(C.jsx)(m.a,{size:14})}),Object(C.jsx)("div",{className:"chat-fixed-search",children:Object(C.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(C.jsx)("div",{className:"sidebar-profile-toggle",children:Object.keys(p).length?Object(C.jsx)(b.a,{className:"avatar-border",img:p.driveid?"https://drive.google.com/thumbnail?id=".concat(p.driveid,"&authuser=0"):t,referrerPolicy:"no-referrer",imgHeight:"42",imgWidth:"42"}):null}),Object(C.jsxs)(g.L,{className:"input-group-merge ms-1 w-100",children:[Object(C.jsx)(g.M,{className:"round",children:Object(C.jsx)(F.a,{className:"text-muted",size:14})}),Object(C.jsx)(g.K,{value:S,className:"round",placeholder:"Search or start a new chat",onChange:function(e){k(e.target.value);var t=O.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())})),c=f.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}));E(Object(l.a)(t)),Y(Object(l.a)(c))}})]})]})}),Object(C.jsxs)(u.a,{className:"chat-user-list-wrapper list-group",options:{wheelPropagation:!1},children:[Object(C.jsxs)("div",{className:"chat-list-title d-flex justify-content-between",children:[Object(C.jsx)("h4",{className:"text-primary",children:"Groups"}),Object(C.jsx)(ie.a,{size:17,onClick:function(){Q(!0)}})]}),Object(C.jsx)("ul",{className:"chat-users-list chat-list media-list",children:0===O.length?Object(C.jsx)("li",{className:"no-results show",children:Object(C.jsx)("h6",{className:"mb-0",children:"No Groups Found"})}):(S.length&&L.length?L:O).map((function(e){var c;return Object(C.jsxs)("li",{onClick:function(){return P(e)},className:d()({active:R===e.id}),children:[Object(C.jsx)(b.a,{img:e.imageid?"https://drive.google.com/thumbnail?id=".concat(e.imageid,"&authuser=0"):t,referrerPolicy:"no-referrer",imgHeight:"42",imgWidth:"42"}),Object(C.jsxs)("div",{className:"chat-info flex-grow-1 position-relative",children:[Object(C.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(C.jsx)("h5",{className:"mb-0 text-truncate font-small-4",children:e.name}),e.createdon&&Object(C.jsxs)("span",{className:"text-end font-small-2 text-body",children:[" ",G()(e.createdon,"x").format("hh:mm a")]})]}),Object(C.jsx)(g.u,{className:"text-truncate font-small-3",children:null===(c=e.message)||void 0===c?void 0:c.replace(/(<([^>]+)>)/gi,"")}),e.unseenMsgs>=1?Object(C.jsx)(g.f,{className:"float-end chat-unreadflg",color:"danger",pill:!0,children:e.unseenMsgs}):null]})]},e.id)}))}),Object(C.jsx)("h4",{className:"chat-list-title",children:"Contacts"}),Object(C.jsx)("ul",{className:"chat-users-list contact-list media-list",children:f&&f.length?S.length&&!Z.length?Object(C.jsx)("li",{className:"no-results show",children:Object(C.jsx)("h6",{className:"mb-0",children:"No Chats Found"})}):(S.length&&Z.length?Z:f).map((function(e){var c,s;return Object(C.jsxs)("li",{className:d()({active:R===e.id}),onClick:function(){return P(e)},children:[Object(C.jsx)(b.a,{img:(s=e.imageid,s?"https://drive.google.com/thumbnail?id=".concat(s,"&authuser=0"):t),referrerPolicy:"no-referrer",imgHeight:"42",imgWidth:"42"}),Object(C.jsxs)("div",{className:"chat-info flex-grow-1 position-relative",children:[Object(C.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(C.jsx)("h5",{className:"mb-0 text-truncate font-small-4",children:e.name}),e.createdon&&Object(C.jsxs)("span",{className:"text-end font-small-2 text-body",children:[" ",G()(e.createdon,"x").format("hh:mm a")]})]}),Object(C.jsx)(g.u,{className:"text-truncate font-small-3",children:null===(c=e.message)||void 0===c?void 0:c.replace(/(<([^>]+)>)/gi,"")}),e.unseenMsgs>=1?Object(C.jsx)(g.f,{className:"float-end chat-unreadflg",color:"danger",pill:!0,children:e.unseenMsgs}):null]})]},e.id)})):null})]})]})]})]}):null},oe=Object(A.d)(),de=function(e){var t=e.handleUserSidebarRight,c=e.userSidebarRight,s=e.store,a=s.selectedUser,i=s.searchList,l=Object(I.b)(),o=Object(r.useState)([]),j=Object(n.a)(o,2),b=j[0],h=j[1];return Object(r.useEffect)((function(){h(i)}),[i]),Object(C.jsxs)("div",{className:d()("user-profile-sidebar col-md-3 col-sm-12",{show:!0===c}),children:[Object(C.jsxs)("header",{className:"user-profile-header",children:[Object(C.jsxs)("div",{className:"d-flex justify-content-between border-1 border pt-1 px-1 pb-50 align-items-center",children:[Object(C.jsx)("h6",{className:"text-body",children:"Search Messages"}),Object(C.jsx)("span",{className:"close-icon",onClick:function(){t(),h([])},children:Object(C.jsx)(m.a,{size:14})})]}),Object(C.jsx)("div",{className:"header-profile-sidebar px-1",style:{height:"55px"},children:Object(C.jsx)(g.K,{type:"text",placeholder:"Search",onInput:function(e){!function(e){var t={toUserId:null===a||void 0===a?void 0:a.id,q:e,fromUserId:oe};l(Object(y.g)(t))}(e.target.value)}})})]}),Object(C.jsx)(u.a,{className:"user-profile-sidebar-area",options:{wheelPropagation:!1},children:Object(C.jsxs)("div",{className:"more-options",children:[0===b.length&&Object(C.jsx)("p",{className:"text-center mt-2",children:"Search for message with your self"}),b.length>0&&Object(C.jsx)("ul",{className:"list-unstyled",children:b.map((function(e,t){var c;return Object(C.jsx)("li",{className:"cursor-pointer mt-50",children:Object(C.jsx)("div",{className:"chat-body me-1",children:Object(C.jsxs)("div",{className:"chat-content rounded",style:{backgroundImage:"linear-gradient(80deg, #7367f0, #9e95f5)"},children:[Object(C.jsx)("span",{className:"font-small-2 text-white pt-25 ps-25",children:G()(e.createdon,"x").fromNow()}),Object(C.jsx)("p",{className:"text-white text-truncate p-50 m-0",children:null===(c=e.message)||void 0===c?void 0:c.replace(/(<([^>]+)>)/gi,"")})]})})},t)}))})]})})]})};c(922),c(816),t.default=function(){var e=Object(I.b)(),t=Object(I.c)((function(e){return e.chat})),c=Object(r.useState)({}),i=Object(n.a)(c,2),l=i[0],o=i[1],d=Object(r.useState)(!1),j=Object(n.a)(d,2),u=j[0],b=j[1],m=Object(r.useState)(!1),h=Object(n.a)(m,2),O=h[0],f=h[1],p=Object(r.useState)(!1),x=Object(n.a)(p,2),g=x[0],v=x[1],N=Object(r.useState)(!1),w=Object(n.a)(N,2),S=w[0],k=w[1],A=Object(r.useState)({}),U=Object(n.a)(A,2),R=U[0],M=U[1],z=function(){return b(!u)},L=function(){return f(!O)},E=function(){return v(!g)},G=function(){b(!1),f(!1),k(!1)},D=function(){b(!1),v(!1)};Object(r.useEffect)((function(){M(t.selectedUser),D(),G()}),[t.selectedUser]);Object(r.useEffect)(Object(a.a)(Object(s.a)().mark((function t(){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(Object(y.e)());case 2:return t.next=4,e(Object(y.l)());case 4:return t.next=6,e(Object(y.h)());case 6:return t.next=8,e(Object(y.f)());case 8:case"end":return t.stop()}}),t)}))),[]);var T=function(){var t=Object(a.a)(Object(s.a)().mark((function t(c){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c){t.next=3;break}return t.next=3,e(Object(y.f)());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(C.jsxs)(r.Fragment,{children:[Object(C.jsx)(le,{store:t,sidebar:u,handleSidebar:z,userSidebarLeft:S,handleUserSidebarLeft:function(){return k(!S)}}),Object(C.jsx)("div",{className:"content-right",children:Object(C.jsx)("div",{className:"content-wrapper",children:Object(C.jsxs)("div",{className:"content-body",children:[Object(C.jsx)(ce,{store:t,handleUser:function(e){return o(e)},handleSidebar:z,userSidebarLeft:S,userSidebarRight:O,handleUserSidebarRight:L,userGroupInfoRight:g,updateSelectedUser:R,handleGroupInfoSidebarRight:E}),O&&Object(C.jsx)(de,{user:l,store:t,handleOverlayClick:G,userSidebarRight:O,handleUserSidebarRight:L}),g&&Object(C.jsx)(B,{user:l,userUpdate:function(e){M(e)},updateSelectedUser:R,store:t,handleOverlayClickGroupInfo:D,userGroupInfoRight:g,handleGroupInfoSidebarRight:E,refreshList:T})]})})})]})}},816:function(e,t,c){},921:function(e,t,c){"use strict";c.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABdCAYAAADzCKvfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OTk0M0M4Njk2NDUxMUU5QjgzM0NGNjBGOUVEM0JBMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OTk0M0M4Nzk2NDUxMUU5QjgzM0NGNjBGOUVEM0JBMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5OTQzQzg0OTY0NTExRTlCODMzQ0Y2MEY5RUQzQkExIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5OTQzQzg1OTY0NTExRTlCODMzQ0Y2MEY5RUQzQkExIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Zz+gIAAABj9JREFUeNrsnUto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"},922:function(e,t,c){}}]);
//# sourceMappingURL=71.a7e8bdd3.chunk.js.map