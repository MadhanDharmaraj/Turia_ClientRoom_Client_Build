(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[38],{1406:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a(5),s=a(10),r=a(0),i=a(25),l=a(22),o=a(135),j=a(69),b=a(195),u=a(21),d=a(183),m=a(756),x=a(761),O=a.n(x),h=a(751),p=a(13),f=a(6),v=a(700),g=a(701),N=a(224),w=a(354),k=(a(735),a(20)),y=a(182),C=a(2),S=Object(k.a)(),P=function(e){var t=e.open,a=e.toggleSidebar,c=e.invite,n=Object(r.useState)(""),i=Object(s.a)(n,2),l=i[0],o=i[1],j=Object(r.useState)(""),b=Object(s.a)(j,2),u=b[0],d=b[1],x=Object(r.useState)([]),k=Object(s.a)(x,2),P=k[0],B=k[1],I=Object(r.useState)(!1),z=Object(s.a)(I,2),D=z[0],F=z[1],q=Object(r.useState)(null),E=Object(s.a)(q,2),A=E[0],T=E[1],L=function(){return Object(C.jsx)(r.Fragment,{children:Object(C.jsx)(g.a,{})})};Object(r.useEffect)((function(){Object.keys(c).length>0&&(!function(){var e="<p>Dear {invitename}!</p><p>You have been Invited to join <b>{inviteorganizationname} </b></p><p>You can start exploring the resources or showcasing your work.</p><p>Kindly click below button to Join</p>\n    <a style='background-color:#7367f0;padding:12px;color:#fff'target='_blank' href={invitelink} >Join</a>".replace("{invitename}",c.name).replace("{inviteorganizationname}",S.name||"");o(e),T("".concat(S.name," is inviting you to use Turia "));var t=h.EditorState.createWithContent(h.ContentState.createFromBlockArray(Object(h.convertFromHTML)(e)));d(t)}(),B(c.email))}),[c]);return Object(C.jsx)("div",{className:"email-application",children:Object(C.jsx)("div",{className:"content-area-wrapper",children:Object(C.jsx)("div",{className:"col-md-12",children:Object(C.jsx)("div",{className:"content-body",children:Object(C.jsx)(p.Q,{scrollable:!0,fade:!1,keyboard:!1,backdrop:!1,id:"compose-mail",container:".content-body",className:"modal-lg",isOpen:t,contentClassName:"p-0",toggle:a,modalClassName:"modal-sticky",children:Object(C.jsxs)(v.a,{blocking:D,loader:Object(C.jsx)(L,{}),children:[Object(C.jsxs)("div",{className:"modal-header",children:[Object(C.jsx)("h5",{className:"modal-title",children:"Invite Mail"}),Object(C.jsx)("div",{className:"modal-actions",children:Object(C.jsx)("a",{href:"/",className:"text-body",onClick:function(e){e.preventDefault(),a()},children:Object(C.jsx)(N.a,{size:14})})})]}),Object(C.jsx)(p.R,{className:"flex-grow-1 p-0",children:Object(C.jsxs)(p.H,{className:"compose-form",onSubmit:function(e){return e.preventDefault()},children:[Object(C.jsxs)("div",{className:"compose-mail-form-field",children:[Object(C.jsx)(p.N,{for:"email-to",className:"form-label",children:"To:"}),Object(C.jsx)("div",{className:"flex-grow-1",children:Object(C.jsx)(p.K,{type:"text",value:P,disabled:!0})})]}),Object(C.jsxs)("div",{className:"compose-mail-form-field",children:[Object(C.jsx)(p.N,{for:"email-subject",className:"form-label",children:"Subject:"}),Object(C.jsx)(p.K,{id:"email-subject",placeholder:"Subject",onChange:function(e){T(e.target.value)},value:A})]}),Object(C.jsx)("div",{id:"message-editor",children:Object(C.jsx)(m.Editor,{placeholder:"Message",toolbarClassName:"rounded-0",wrapperClassName:"toolbar-bottom",editorState:u,onEditorStateChange:function(e){d(e),o(O()(Object(h.convertToRaw)(e.getCurrentContent())))},editorClassName:"rounded-0 border-0",toolbar:{options:["inline","textAlign"],inline:{inDropdown:!1,options:["bold","italic","underline","strikethrough"]}}})}),Object(C.jsxs)("div",{className:"compose-footer-wrapper",children:[Object(C.jsx)("div",{className:"btn-wrapper d-flex align-items-center",children:Object(C.jsx)(p.i,{outline:!0,color:"primary",onClick:function(){F(!0),f.a.post("/invitations/invitationmail",{content:l,id:c.id,subject:A}).then((function(){a(!1),y.b.success("Invitation send Successfuly",{position:"bottom-right"}),F(!1)})),console.log((function(){F(!1)}))},children:"Send"})}),Object(C.jsx)("div",{className:"footer-action d-flex align-items-center",children:Object(C.jsx)(w.a,{className:"cursor-pointer",size:18,onClick:a})})]})]})})]})})})})})})},B=a(705),I=a.n(B),z=a(323),D=a(358),F=a(286),q=a(353),E=a(283),A=a(184),T=a.n(A),L=a(185),J=a.n(L),K=a(55),M=(a(446),a(716),J()(T.a)),R=function(e){var t=e.handlePerPage,a=e.rowsPerPage,c=e.handleFilter,n=e.searchTerm;return Object(C.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(C.jsxs)(p.ib,{children:[Object(C.jsx)(p.B,{xl:"6",md:"6",sm:"6",className:"d-flex align-items-center p-0",children:Object(C.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(C.jsx)("label",{htmlFor:"rows-per-page",children:"Show"}),Object(C.jsxs)(p.K,{className:"mx-50",type:"select",id:"rows-per-page",value:a,onChange:t,style:{width:"5rem"},children:[Object(C.jsx)("option",{value:"10",children:"10"}),Object(C.jsx)("option",{value:"25",children:"25"}),Object(C.jsx)("option",{value:"50",children:"50"})]}),Object(C.jsx)("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),Object(C.jsxs)(p.B,{md:"6",sm:"6",xl:"6",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[Object(C.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(C.jsx)("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),Object(C.jsx)(p.K,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:n,onChange:function(e){return c(e.target.value)}})]}),Object(C.jsxs)("div",{className:"d-flex align-items-center table-header-actions",children:[Object(C.jsx)(j.b,{I:"write",a:"team",children:Object(C.jsx)(p.i,{color:"primary",tag:i.b,to:"/team/add",children:"Add Employee"})}),Object(C.jsxs)(p.wb,{className:"ms-1",children:[Object(C.jsx)(p.G,{color:"secondary",caret:!0,outline:!0,children:Object(C.jsx)(z.a,{className:"font-small-4 me-50"})}),Object(C.jsx)(p.F,{children:Object(C.jsx)(j.b,{I:"import",a:"team",children:Object(C.jsxs)(p.E,{tag:i.b,to:"/import/team",className:"w-100",children:[Object(C.jsx)(D.a,{className:"font-small-4 me-50"}),Object(C.jsx)("span",{className:"align-middle",children:"Import"})]})})})]})]})]})]})})},U=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.team})),a=Object(r.useState)(""),m=Object(s.a)(a,2),x=m[0],O=m[1],h=Object(r.useState)(1),N=Object(s.a)(h,2),w=N[0],k=N[1],y=Object(r.useState)(50),S=Object(s.a)(y,2),B=S[0],D=S[1],A=Object(r.useState)({value:"1",label:"Active",number:0}),T=Object(s.a)(A,2),L=T[0],J=T[1],U=Object(r.useState)(!1),Y=Object(s.a)(U,2),G=Y[0],H=Y[1],_=Object(l.f)(),Q=function(e){return Object(C.jsx)(o.a,{initials:!0,className:"me-1",color:"light-primary",content:e.name||"John Doe"})},W=Object(r.useState)(!1),V=Object(s.a)(W,2),X=V[0],Z=V[1],$=function(){return Object(C.jsx)(r.Fragment,{children:Object(C.jsx)(g.a,{})})},ee=function(){var e=Object(n.a)(Object(c.a)().mark((function e(t){var a;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/organizationusers/userstaskstatus",{id:t});case 2:return a=e.sent,e.abrupt("return",a.data.result);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(){var t=Object(n.a)(Object(c.a)().mark((function t(a){var s;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ee(a.id);case 2:if(!((s=t.sent).clientcount>0||s.taskcount>0)){t.next=5;break}return t.abrupt("return",M.fire({title:"Info!",text:"User have ".concat(s.taskcount," pending task and ").concat(s.clientcount," client, Please reassing to Other Users"),icon:"info",confirmButtonText:"Re Assign!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1,showCancelButton:!0}).then(function(){var e=Object(n.a)(Object(c.a)().mark((function e(t){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.value){e.next=5;break}return s.taskcount>0?_("/team/view/".concat(a.id,"?tab=teamtasks")):_("/team/view/".concat(a.id,"?tab=teamclients")),e.abrupt("return",!1);case 5:return e.abrupt("return",!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:return t.abrupt("return",M.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(){var t=Object(n.a)(Object(c.a)().mark((function t(n){var s;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.value){t.next=12;break}if(s="1"===a.usertype?"User":"invitation","1"!==a.usertype){t.next=9;break}return t.next=5,e(Object(b.d)(a.id));case 5:return t.next=7,updateSubscription();case 7:t.next=11;break;case 9:return t.next=11,e(Object(b.c)(a.id));case 11:M.fire({icon:"success",title:"Deleted!",text:"".concat(s," has been deleted."),customClass:{confirmButton:"btn btn-success"}});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ae=["","light-primary","light-warning","","light-danger"],ce=["","light-success","light-warning","","light-danger"],ne=["","Invited","Inactive","","Deleted"],se=["","Active","Inactive","","Deleted"];Object(r.useEffect)(Object(n.a)(Object(c.a)().mark((function t(){return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Z(!0),"3"!==L.value){t.next=6;break}return t.next=4,e(Object(b.f)({q:x,page:w,perPage:B,status:L.value}));case 4:t.next=8;break;case 6:return t.next=8,e(Object(b.h)({q:x,page:w,perPage:B,status:L.value}));case 8:Z(!1);case 9:case"end":return t.stop()}}),t)}))),[e]);var re=function(){var t=Object(n.a)(Object(c.a)().mark((function t(a){return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Z(!0),"3"!==L.value){t.next=6;break}return t.next=4,e(Object(b.f)({q:x,perPage:B,page:a.selected+1,status:L.value}));case 4:t.next=8;break;case 6:return t.next=8,e(Object(b.h)({q:x,perPage:B,page:a.selected+1,status:L.value}));case 8:Z(!1),k(a.selected+1);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ie=function(){var t=Object(n.a)(Object(c.a)().mark((function t(a){var n;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=parseInt(a.currentTarget.value),Z(!0),"3"!==L.value){t.next=7;break}return t.next=5,e(Object(b.f)({q:x,perPage:n,page:w,status:L.value}));case 5:t.next=9;break;case 7:return t.next=9,e(Object(b.h)({q:x,perPage:n,page:w,status:L.value}));case 9:Z(!1),D(n);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),le=function(){var t=Object(n.a)(Object(c.a)().mark((function t(a){return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(O(a),Z(!0),"3"!==L.value){t.next=7;break}return t.next=5,e(Object(b.f)({q:a,page:w,perPage:B,status:L.value}));case 5:t.next=9;break;case 7:return t.next=9,e(Object(b.h)({q:a,page:w,perPage:B,status:L.value}));case 9:Z(!1);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),oe=function(){var e=Number(Math.ceil(t.total/B));return Object(C.jsx)(I.a,{previousLabel:"",nextLabel:"",pageCount:e||1,activeClassName:"active",forcePage:0!==w?w-1:0,onPageChange:function(e){return re(e)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})};return Object(C.jsxs)(r.Fragment,{children:[Object(C.jsx)(p.l,{children:Object(C.jsx)(p.m,{children:Object(C.jsx)(p.ib,{children:Object(C.jsxs)(p.B,{md:"3",children:[Object(C.jsx)(p.N,{for:"status-select",children:"Status"}),Object(C.jsx)(d.a,{theme:K.g,isClearable:!1,className:"react-select",classNamePrefix:"select",options:[{value:"",label:"Select All"},{value:"1",label:"Active"},{value:"-1",label:"Deleted"}],value:L,onChange:function(){var t=Object(n.a)(Object(c.a)().mark((function t(a){return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(J(a),Z(!0),"3"!==a.value){t.next=7;break}return t.next=5,e(Object(b.f)({q:x,page:w,status:a.value,perPage:B}));case 5:t.next=9;break;case 7:return t.next=9,e(Object(b.h)({q:x,page:w,status:a.value,perPage:B}));case 9:Z(!1);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})]})})})}),Object(C.jsx)(v.a,{blocking:X,loader:Object(C.jsx)($,{}),children:Object(C.jsxs)(p.l,{className:"overflow-hidden",children:[Object(C.jsxs)("div",{className:"react-dataTable px-2",children:[Object(C.jsx)(R,{store:t,searchTerm:x,rowsPerPage:B,handleFilter:le,handlePerPage:ie}),Object(C.jsxs)(p.mb,{className:"table-hover",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"User"}),Object(C.jsx)("th",{children:"Role"}),Object(C.jsx)("th",{children:"Designation"}),Object(C.jsx)("th",{children:"Department"}),Object(C.jsx)("th",{children:"Status"}),Object(C.jsx)("th",{children:"Action"})]})}),Object(C.jsx)("tbody",{children:function(){var e={status:L.value,q:x};Object.keys(e).some((function(t){return e[t].length>0}));return t.data.length>0?t.data:(t.data.length,[])}().map((function(e,t){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:Object(C.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[Q(e),Object(C.jsxs)("div",{className:"d-flex flex-column",children:[Object(C.jsx)(i.b,{to:"/team/view/".concat(e.id,"?tab=teamjobinfo"),className:"user_name text-truncate text-body",children:Object(C.jsx)("span",{className:"fw-bolder",children:e.name})}),Object(C.jsx)("small",{className:"text-truncate text-muted mb-0",children:e.email})]})]})}),Object(C.jsx)("td",{children:Object(C.jsx)("span",{className:"text-capitalize",children:e.rolename})}),Object(C.jsxs)("td",{children:[" ",Object(C.jsx)("span",{className:"text-capitalize",children:e.designationname})]}),Object(C.jsxs)("td",{children:[" ",Object(C.jsx)("span",{className:"text-capitalize",children:e.departmentname})]}),Object(C.jsx)("td",{children:Object(C.jsx)(p.f,{className:"text-capitalize",color:"1"===e.usertype?ce[-1===e.status?4:e.status]:ae[e.status],pill:!0,children:"1"===e.usertype?se[-1===e.status?4:e.status]:ne[-1===e.status?4:e.status]})}),Object(C.jsx)("td",{children:Object(C.jsxs)("div",{className:"column-action d-flex align-items-center",children:[Object(C.jsx)(j.b,{I:"read",a:"team",children:Object(C.jsx)(p.B,{tag:i.b,to:"/team/view/".concat(e.id,"?tab=teamjobinfo"),children:Object(C.jsx)(F.a,{className:"cursor-pointer mt-0",size:16})})}),Object(C.jsxs)(p.wb,{children:[Object(C.jsx)(p.G,{tag:"div",className:"btn btn-sm",children:Object(C.jsx)(z.a,{size:14,className:"cursor-pointer"})}),Object(C.jsxs)(p.F,{children:[Object(C.jsx)(j.b,{I:"delete",a:"team",children:Object(C.jsxs)(p.E,{tag:"a",href:"/",className:"w-50",onClick:function(t){t.preventDefault(),te(e)},children:[Object(C.jsx)(q.a,{size:14,className:"me-50"}),Object(C.jsx)("span",{className:"align-middle",children:"Delete"})]})}),Object(C.jsx)(j.b,{I:"write",a:"team",children:Object(C.jsxs)(p.E,{tag:i.b,to:"/team/edit/".concat(e.id),className:"w-50",children:[Object(C.jsx)(E.a,{size:14,className:"me-50"}),Object(C.jsx)("span",{className:"align-middle",children:"Edit"})]})})]})]})]})})]},t)}))})]}),Object(C.jsx)(oe,{})]}),G&&Object(C.jsx)(P,{toggleSidebar:function(){return H(!G)},open:G})]})})]})};a(721),t.default=function(){return Object(C.jsx)("div",{className:"app-user-list",children:Object(C.jsx)(U,{})})}},700:function(e,t,a){"use strict";var c=a(8),n=a(24),s=a(0),r=a(7),i=a.n(r),l=a(13),o=(a(702),a(2)),j=function(e){var t,a=e.children,r=e.blocking,l=e.loader,j=e.className,b=e.tag,u=e.overlayColor,d=b;return Object(o.jsxs)(d,{className:i()("ui-loader",(t={},Object(n.a)(t,j,j),Object(n.a)(t,"show",r),t)),children:[a,r?Object(o.jsxs)(s.Fragment,{children:[Object(o.jsx)("div",Object(c.a)({className:"overlay"},r&&u?{style:{backgroundColor:u}}:{})),Object(o.jsx)("div",{className:"loader",children:l})]}):null]})};t.a=j,j.defaultProps={tag:"div",blocking:!1,loader:Object(o.jsx)(l.jb,{color:"primary"})}},701:function(e,t,a){"use strict";var c=a(2);t.a=function(){return Object(c.jsx)("div",{className:"fallback-spinner",children:Object(c.jsxs)("div",{className:"loading",children:[Object(c.jsx)("div",{className:"effect-1 effects"}),Object(c.jsx)("div",{className:"effect-2 effects"}),Object(c.jsx)("div",{className:"effect-3 effects"})]})})}},702:function(e,t,a){},716:function(e,t,a){},721:function(e,t,a){},735:function(e,t,a){}}]);
//# sourceMappingURL=38.7444dd89.chunk.js.map