(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[41],{1281:function(e,t,a){},1390:function(e,t,a){"use strict";a.r(t);var n=a(10),c=a(21),s=a(0),r=a(3),i=a(5),l=a(7),o=a.n(l),d=a(136),u=a(315),h=a(2),f=function(e){var t=e.mail,a=e.handleMailClick,n=e.handleMailReadUpdate;return Object(h.jsxs)("li",{onClick:function(){return t.id,a(t.id),void n([t.id],!0)},className:o()("d-flex user-mail ",{"mail-read":t.isRead}),children:[Object(h.jsxs)("div",{className:"mail-left pe-50",children:[Object(h.jsx)(d.a,{color:"light-primary",icon:Object(h.jsx)(u.a,{size:22,className:"text-success ms-50 mt-50"})}),Object(h.jsx)("div",{className:"user-action"})]}),Object(h.jsxs)("div",{className:"mail-body",children:[Object(h.jsx)("div",{className:"mail-details",children:Object(h.jsx)("div",{className:"mail-items",children:Object(h.jsx)("h5",{className:"mb-25",children:t.name})})}),Object(h.jsx)("div",{className:"mail-message",children:Object(h.jsx)("div",{className:"mail-message text-truncate",dangerouslySetInnerHTML:{__html:t.description.replace(/(<([^>]+)>)/gi,"")}})})]})]})},j=a(757),m=a(753),O=a(321),p=a(317),b=a(224),g=a(13),x=a(6),v=(a(736),a(447),a(762)),y=a.n(v),N=a(19),C=a(183),T=a(701),S=a(702),I=Object(N.d)(),R=function(e){var t=e.composeOpen,a=e.toggleCompose,c=e.mail,l=Object(s.useState)(""),o=Object(n.a)(l,2),d=o[0],u=o[1],f=Object(s.useState)(""),v=Object(n.a)(f,2),N=v[0],R=v[1],E=Object(s.useState)(!1),M=Object(n.a)(E,2),w=M[0],L=M[1],k=function(){return Object(h.jsx)(s.Fragment,{children:Object(h.jsx)(S.a,{})})},F=function(e){var t=m.EditorState.createWithContent(m.ContentState.createFromBlockArray(Object(m.convertFromHTML)(e)));u(t),R(e)};Object(s.useEffect)((function(){null!==c&&F(c.description)}),[c]);var A=function(){var e=Object(i.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("/emailtemplates/get",{id:c.id}).then((function(e){F(e.data.emailtemplates.description),a(),C.b.success("Template Update Successfully",{position:"bottom-right"})})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(e){null===e||void 0===e||e.preventDefault(),A()},D=function(){var e=Object(i.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={updatedBy:I,description:N,id:c.id},L(!0),e.next=4,x.a.post("/emailtemplates/update",t).then(Object(i.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:L(!1);case 3:case"end":return e.stop()}}),e)})))).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(g.Q,{scrollable:!0,fade:!1,keyboard:!1,backdrop:!1,id:"compose-mail",container:".content-body",className:"modal-lg",isOpen:t,contentClassName:"p-0",toggle:a,modalClassName:"modal-sticky",children:Object(h.jsxs)(T.a,{blocking:w,loader:Object(h.jsx)(k,{}),children:[Object(h.jsxs)("div",{className:"modal-header",children:[Object(h.jsx)("h5",{className:"modal-title",children:"Email Format"}),Object(h.jsxs)("div",{className:"modal-actions",children:[Object(h.jsx)("a",{href:"/",className:"text-body me-75",onClick:U,children:Object(h.jsx)(O.a,{size:14})}),Object(h.jsx)("a",{href:"/",className:"text-body me-75",onClick:function(e){return e.preventDefault()},children:Object(h.jsx)(p.a,{size:14})}),Object(h.jsx)("a",{href:"/",className:"text-body",onClick:U,children:Object(h.jsx)(b.a,{size:14})})]})]}),Object(h.jsx)(g.R,{className:"flex-grow-1 p-0",children:Object(h.jsxs)(g.H,{className:"compose-form",onSubmit:function(e){return e.preventDefault()},children:[Object(h.jsxs)("div",{className:"compose-mail-form-field",children:[Object(h.jsx)(g.N,{for:"email-to",className:"form-label",children:"To:"}),Object(h.jsx)("div",{className:"flex-grow-1",children:Object(h.jsx)(g.K,{type:"text",disabled:!0})})]}),Object(h.jsxs)("div",{className:"compose-mail-form-field",children:[Object(h.jsx)(g.N,{for:"email-subject",className:"form-label",children:"Subject:"}),Object(h.jsx)(g.K,{id:"email-subject",placeholder:"Subject",defaultValue:c.name})]}),Object(h.jsx)("div",{id:"message-editor",children:Object(h.jsx)(j.Editor,{placeholder:"Message",toolbarClassName:"rounded-0",wrapperClassName:"toolbar-bottom",editorState:d,onEditorStateChange:function(e){u(e),R(y()(Object(m.convertToRaw)(e.getCurrentContent())))},editorClassName:"rounded-0 border-0",toolbar:{options:["inline","textAlign"],inline:{inDropdown:!1,options:["bold","italic","underline","strikethrough"]}}})}),Object(h.jsx)(g.B,{className:"px-1 py-50",children:Object(h.jsx)(g.i,{outline:!0,color:"primary",onClick:function(){D()},children:"Save"})})]})})]})})},E=a(261),M=a(285),w=a(76),L=a.n(w),k=function(e){var t,a=e.mail,c=e.openMail,r=e.setOpenMail,i=Object(s.useState)(!1),l=Object(n.a)(i,2),d=l[0],u=l[1];return Object(h.jsxs)("div",{className:o()("email-app-details w-100",{show:c}),children:[null!==a&&void 0!==a?Object(h.jsxs)(s.Fragment,{children:[Object(h.jsxs)("div",{className:"email-detail-header",children:[Object(h.jsxs)("div",{className:"email-header-left d-flex align-items-center",children:[Object(h.jsx)("span",{className:"go-back me-1",onClick:function(){r(!1)},children:Object(h.jsx)(E.a,{size:20})}),Object(h.jsx)("h4",{className:"email-subject mb-0",children:a.name})]}),Object(h.jsx)("div",{className:"email-header-right ms-2 ps-1",children:Object(h.jsx)("ul",{className:"list-inline m-0",children:Object(h.jsx)("li",{className:"list-inline-item me-1",children:Object(h.jsx)("span",{className:"action-icon favorite",onClick:function(){u(!d)},children:Object(h.jsx)(M.a,{size:18,className:o()({"text-warning fill-current":a.isStarred})})})})})})]}),Object(h.jsx)(L.a,{className:"email-scroll-area",options:{wheelPropagation:!1},children:Object(h.jsx)(g.ib,{children:Object(h.jsx)(g.B,{sm:"12",children:Object(h.jsx)("div",{className:"email-label",children:(t=a,Object(h.jsx)(g.l,{children:Object(h.jsx)(g.m,{className:"mail-message-wrapper pt-2",children:Object(h.jsx)("div",{className:"mail-message",dangerouslySetInnerHTML:{__html:t.description}})})}))})})})})]}):null,null!==a&&d&&Object(h.jsx)(R,{composeOpen:d,toggleCompose:function(){return u(!d)},mail:a})]})},F=a(56),A=a(339),U=function(e){var t=e.query,a=e.store,c=e.openMail,l=e.setQuery,o=e.dispatch,d=e.selectMail,u=e.updateMails,j=e.setOpenMail,m=e.paginateMail,O=e.selectAllMail,p=e.updateMailLabel,b=e.resetSelectedMail,v=e.divClassName,y=a.selectedMails,N={personal:"success",company:"primary",important:"warning",private:"danger"},C=Object(s.useState)([]),T=Object(n.a)(C,2),S=T[0],I=T[1],R=Object(s.useState)(null),E=Object(n.a)(R,2),M=E[0],w=E[1];Object(s.useEffect)(Object(i.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x.a.post("/emailtemplates/list").then(function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(I(t.data.emailtemplates),0!==t.data.emailtemplates.length){e.next=4;break}return e.next=4,void x.a.post("/emailtemplates/clone").then(function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:I(t.data.emailtemplates);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)}))),[]);var U=function(e){var t=S.find((function(t){return t.id===e}));w(t),j(!0)},D=function(e,t){o(u({emailIds:e,dataToUpdate:{isRead:t}})).then((function(){return o(b())})),o(O(!1))};return Object(h.jsx)(s.Fragment,{children:Object(h.jsxs)(g.l,{children:[Object(h.jsxs)("div",{className:"email-app-list",children:[Object(h.jsx)("h5",{className:"my-1 ms-2",children:"Email Templates"}),Object(h.jsx)("div",{className:"app-fixed-search d-flex align-items-center",children:Object(h.jsx)("div",{className:"d-flex align-content-center justify-content-between w-100",children:Object(h.jsxs)(g.L,{className:"input-group-merge mx-2",children:[Object(h.jsx)(g.M,{children:Object(h.jsx)(A.a,{className:"text-muted",size:14})}),Object(h.jsx)(g.K,{id:"email-search",placeholder:"Search email",value:t,onChange:function(e){return l(e.target.value)}})]})})}),Object(h.jsx)(L.a,{className:"email-user-list",options:{wheelPropagation:!1},children:S.length?Object(h.jsx)("ul",{className:"email-media-list",children:function(){if(S.length)return S.map((function(e,t){return Object(h.jsx)(f,{mail:e,dispatch:o,selectMail:d,updateMails:u,labelColors:N,selectedMails:y,handleMailClick:U,handleMailReadUpdate:D,formatDateToMonthShort:F.a},t)}))}()}):Object(h.jsx)("div",{className:"no-results d-block",children:Object(h.jsx)("h5",{children:"No Items Found"})})})]}),Object(h.jsx)(k,{divClassName:v,openMail:c,dispatch:o,mail:M,labelColors:N,setOpenMail:j,updateMails:u,paginateMail:m,updateMailLabel:p,handleMailToTrash:function(e){o(u({emailIds:e,dataToUpdate:{folder:"trash"}})),o(b())},handleFolderUpdate:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y;e.preventDefault(),o(u({emailIds:a,dataToUpdate:{folder:t}})),o(b())},handleLabelsUpdate:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y;e.preventDefault(),o(p({emailIds:a,label:t})),o(b())},handleMailReadUpdate:D,formatDateToMonthShort:F.a})]})})},D=a(16),B=a(215);a(1281),t.default=function(){var e=Object(s.useState)(""),t=Object(n.a)(e,2),a=t[0],r=t[1],i=Object(s.useState)(!1),l=Object(n.a)(i,2),o=l[0],d=l[1],u=Object(s.useState)(!1),f=Object(n.a)(u,2),j=f[0],m=f[1],O=Object(D.b)(),p=Object(D.c)((function(e){return e.email})),b=Object(c.g)();return Object(s.useEffect)((function(){O(Object(B.b)({q:a||"",folder:b.folder||"inbox",label:b.label||""}))}),[a,b.folder,b.label]),Object(h.jsx)("div",{className:"email-application",children:Object(h.jsx)("div",{className:"content-area-wrapper",children:Object(h.jsx)(s.Fragment,{children:Object(h.jsx)("div",{className:"col-md-12",children:Object(h.jsx)("div",{className:"content-body",children:Object(h.jsx)(U,{store:p,query:a,setQuery:r,dispatch:O,getMails:B.b,divClassName:"col-md-12",openMail:o,selectMail:B.g,setOpenMail:d,updateMails:B.i,composeOpen:j,paginateMail:B.c,selectAllMail:B.e,toggleCompose:function(){return m(!j)},updateMailLabel:B.h,selectCurrentMail:B.f,resetSelectedMail:B.d})})})})})})}},701:function(e,t,a){"use strict";var n=a(8),c=a(23),s=a(0),r=a(7),i=a.n(r),l=a(13),o=(a(703),a(2)),d=function(e){var t,a=e.children,r=e.blocking,l=e.loader,d=e.className,u=e.tag,h=e.overlayColor,f=u;return Object(o.jsxs)(f,{className:i()("ui-loader",(t={},Object(c.a)(t,d,d),Object(c.a)(t,"show",r),t)),children:[a,r?Object(o.jsxs)(s.Fragment,{children:[Object(o.jsx)("div",Object(n.a)({className:"overlay"},r&&h?{style:{backgroundColor:h}}:{})),Object(o.jsx)("div",{className:"loader",children:l})]}):null]})};t.a=d,d.defaultProps={tag:"div",blocking:!1,loader:Object(o.jsx)(l.jb,{color:"primary"})}},702:function(e,t,a){"use strict";var n=a(2);t.a=function(){return Object(n.jsx)("div",{className:"fallback-spinner",children:Object(n.jsxs)("div",{className:"loading",children:[Object(n.jsx)("div",{className:"effect-1 effects"}),Object(n.jsx)("div",{className:"effect-2 effects"}),Object(n.jsx)("div",{className:"effect-3 effects"})]})})}},703:function(e,t,a){},736:function(e,t,a){},762:function(e,t,a){e.exports=function(){"use strict";function e(e,t){if(e)for(var a in e)({}).hasOwnProperty.call(e,a)&&t(a,e[a])}function t(e){return void 0===e||null===e||0===e.length||0===e.trim().length}var a={unstyled:"p","header-one":"h1","header-two":"h2","header-three":"h3","header-four":"h4","header-five":"h5","header-six":"h6","unordered-list-item":"ul","ordered-list-item":"ol",blockquote:"blockquote",code:"pre"};function n(e){return e&&a[e]}function c(t){var a="";return e(t,(function(e,t){t&&(a+="".concat(e,":").concat(t,";"))})),a}function s(e,t){var a=[];if(t)for(var n=0,c=0,s=e,r=t.trigger||"#",i=t.separator||" ";s.length>0&&c>=0;)if(s[0]===r?(c=0,n=0,s=s.substr(r.length)):(c=s.indexOf(i+r))>=0&&(s=s.substr(c+(i+r).length),n+=c+i.length),c>=0){var l=s.indexOf(i)>=0?s.indexOf(i):s.length,o=s.substr(0,l);o&&o.length>0&&a.push({offset:n,length:o.length+r.length,type:"HASHTAG"}),n+=r.length}return a}function r(e,t){var a=[],n=0,c=e.entityRanges.map((function(e){return{offset:e.offset,length:e.length,key:e.key,type:"ENTITY"}}));return(c=(c=c.concat(s(e.text,t))).sort((function(e,t){return e.offset-t.offset}))).forEach((function(e){e.offset>n&&a.push({start:n,end:e.offset}),a.push({start:e.offset,end:e.offset+e.length,entityKey:e.key,type:e.type}),n=e.offset+e.length})),n<e.text.length&&a.push({start:n,end:e.text.length}),a}function i(e){return!(!(e.entityRanges.length>0)||!t(e.text)&&"atomic"!==e.type)}function l(e){var t=e.text,a=e.inlineStyleRanges,n={BOLD:new Array(t.length),ITALIC:new Array(t.length),UNDERLINE:new Array(t.length),STRIKETHROUGH:new Array(t.length),CODE:new Array(t.length),SUPERSCRIPT:new Array(t.length),SUBSCRIPT:new Array(t.length),COLOR:new Array(t.length),BGCOLOR:new Array(t.length),FONTSIZE:new Array(t.length),FONTFAMILY:new Array(t.length),length:t.length};return a&&a.length>0&&a.forEach((function(e){for(var t=e.offset,a=t+e.length,c=t;c<a;c+=1)0===e.style.indexOf("color-")?n.COLOR[c]=e.style.substring(6):0===e.style.indexOf("bgcolor-")?n.BGCOLOR[c]=e.style.substring(8):0===e.style.indexOf("fontsize-")?n.FONTSIZE[c]=e.style.substring(9):0===e.style.indexOf("fontfamily-")?n.FONTFAMILY[c]=e.style.substring(11):n[e.style]&&(n[e.style][c]=!0)})),n}function o(e,t){var a={};return e.COLOR[t]&&(a.COLOR=e.COLOR[t]),e.BGCOLOR[t]&&(a.BGCOLOR=e.BGCOLOR[t]),e.FONTSIZE[t]&&(a.FONTSIZE=e.FONTSIZE[t]),e.FONTFAMILY[t]&&(a.FONTFAMILY=e.FONTFAMILY[t]),e.UNDERLINE[t]&&(a.UNDERLINE=!0),e.ITALIC[t]&&(a.ITALIC=!0),e.BOLD[t]&&(a.BOLD=!0),e.STRIKETHROUGH[t]&&(a.STRIKETHROUGH=!0),e.CODE[t]&&(a.CODE=!0),e.SUBSCRIPT[t]&&(a.SUBSCRIPT=!0),e.SUPERSCRIPT[t]&&(a.SUPERSCRIPT=!0),a}function d(e,t,a){var n=!0;return a>0&&a<e.length?t.forEach((function(t){n=n&&e[t][a]===e[t][a-1]})):n=!1,n}function u(e,t){return"BOLD"===e?"<strong>".concat(t,"</strong>"):"ITALIC"===e?"<em>".concat(t,"</em>"):"UNDERLINE"===e?"<ins>".concat(t,"</ins>"):"STRIKETHROUGH"===e?"<del>".concat(t,"</del>"):"CODE"===e?"<code>".concat(t,"</code>"):"SUPERSCRIPT"===e?"<sup>".concat(t,"</sup>"):"SUBSCRIPT"===e?"<sub>".concat(t,"</sub>"):t}function h(e){return e&&e.length>0?e.map((function(e){switch(e){case"\n":return"<br>";case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return e}})).join(""):""}function f(e,t){if(e&&(e.COLOR||e.BGCOLOR||e.FONTSIZE||e.FONTFAMILY)){var a='style="';return e.COLOR&&(a+="color: ".concat(e.COLOR,";")),e.BGCOLOR&&(a+="background-color: ".concat(e.BGCOLOR,";")),e.FONTSIZE&&(a+="font-size: ".concat(e.FONTSIZE).concat(/^\d+$/.test(e.FONTSIZE)?"px":"",";")),e.FONTFAMILY&&(a+="font-family: ".concat(e.FONTFAMILY,";")),"<span ".concat(a+='"',">").concat(t,"</span>")}return t}function j(e,t,a,n){var c=e[t];if("function"===typeof n){var s=n(c,a);if(s)return s}if("MENTION"===c.type)return'<a href="'.concat(c.data.url,'" class="wysiwyg-mention" data-mention data-value="').concat(c.data.value,'">').concat(a,"</a>");if("LINK"===c.type){var r=c.data.targetOption||"_self";return'<a href="'.concat(c.data.url,'" target="').concat(r,'">').concat(a,"</a>")}if("IMAGE"===c.type){var i=c.data.alignment;return i&&i.length?'<div style="text-align:'.concat(i,';"><img src="').concat(c.data.src,'" alt="').concat(c.data.alt,'" style="height: ').concat(c.data.height,";width: ").concat(c.data.width,'"/></div>'):'<img src="'.concat(c.data.src,'" alt="').concat(c.data.alt,'" style="height: ').concat(c.data.height,";width: ").concat(c.data.width,'"/>')}return"EMBEDDED_LINK"===c.type?'<iframe width="'.concat(c.data.width,'" height="').concat(c.data.height,'" src="').concat(c.data.src,'" frameBorder="0"></iframe>'):a}function m(e,t,a,n){var c=[],s=Array.from(e.text);if(s.length>0)for(var r,i=l(e),u=a;u<n;u+=1)u!==a&&d(i,t,u)?(r.text.push(s[u]),r.end=u+1):(r={styles:o(i,u),text:[s[u]],start:u,end:u+1},c.push(r));return c}function O(e){if(e){for(var t=e,a=0;a<t.length&&" "===e[a];a+=1)t=t.replace(" ","&nbsp;");return t}return e}function p(e){if(e){for(var t=e,a=t.length-1;a>=0&&" "===t[a];a-=1)t="".concat(t.substring(0,a),"&nbsp;").concat(t.substring(a+1));return t}return e}function b(t){var a=t.styles,n=h(t.text);return e(a,(function(e,t){n=u(e,n)})),n}function g(e,t){var a=m(e,["BOLD","ITALIC","UNDERLINE","STRIKETHROUGH","CODE","SUPERSCRIPT","SUBSCRIPT"],t.start,t.end),n="";return a.forEach((function(e){n+=b(e)})),n=f(t.styles,n)}function x(e,t,a,n){var c=[];m(e,["COLOR","BGCOLOR","FONTSIZE","FONTFAMILY"],a.start,a.end).forEach((function(t){c.push(g(e,t))}));var s=c.join("");return"ENTITY"===a.type?void 0!==a.entityKey&&null!==a.entityKey&&(s=j(t,a.entityKey,s,n)):"HASHTAG"===a.type&&(s='<a href="'.concat(s,'" class="wysiwyg-hashtag">').concat(s,"</a>")),s}function v(e,t,a,n){var c=[],s=r(e,a);return s.forEach((function(a,r){var i=x(e,t,a,n);0===r&&(i=O(i)),r===s.length-1&&(i=p(i)),c.push(i)})),c.join("")}function y(e,t,a,s,r){var l=[];if(i(e))l.push(j(t,e.entityRanges[0].key,void 0,r));else{var o=n(e.type);if(o){l.push("<".concat(o));var d=c(e.data);d&&l.push(' style="'.concat(d,'"')),s&&l.push(' dir = "auto"'),l.push(">"),l.push(v(e,t,a,r)),l.push("</".concat(o,">"))}}return l.push("\n"),l.join("")}function N(e){return"unordered-list-item"===e||"ordered-list-item"===e}function C(e,t,a,s,r){var i,l=[],o=[];return e.forEach((function(e){var d=!1;if(i?i.type!==e.type?(l.push("</".concat(n(i.type),">\n")),l.push("<".concat(n(e.type),">\n"))):i.depth===e.depth?o&&o.length>0&&(l.push(C(o,t,a,s,r)),o=[]):(d=!0,o.push(e)):l.push("<".concat(n(e.type),">\n")),!d){l.push("<li");var u=c(e.data);u&&l.push(' style="'.concat(u,'"')),s&&l.push(' dir = "auto"'),l.push(">"),l.push(v(e,t,a,r)),l.push("</li>\n"),i=e}})),o&&o.length>0&&l.push(C(o,t,a,s,r)),l.push("</".concat(n(i.type),">\n")),l.join("")}function T(e,t,a,n){var c=[];if(e){var s=e.blocks,r=e.entityMap;if(s&&s.length>0){var i=[];if(s.forEach((function(e){if(N(e.type))i.push(e);else{if(i.length>0){var s=C(i,r,t,n);c.push(s),i=[]}var l=y(e,r,t,a,n);c.push(l)}})),i.length>0){var l=C(i,r,t,a,n);c.push(l),i=[]}}}return c.join("")}return T}()}}]);
//# sourceMappingURL=41.e0c57686.chunk.js.map