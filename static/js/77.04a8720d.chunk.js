(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[77],{1516:function(e,t,c){"use strict";c.r(t);var s=c(2),r=c(5),n=c(12),a=c(0),i=c(188),l=c(21),j=c(356),o=c(313),d=c(735),b=c(736),u=c(14),O=(c(481),c(741),c(13)),h=c(23),x=c(3),v=Object(O.d)(),m=Object(O.a)(),f=function(){var e,t=Object(l.b)(),c=Object(h.f)(),O=Object(l.c)((function(e){return e.task})),f=Object(a.useState)(!1),p=Object(n.a)(f,2),k=p[0],g=p[1],N=function(){return Object(x.jsx)(a.Fragment,{children:Object(x.jsx)(b.a,{})})};Object(a.useEffect)(Object(r.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,t(Object(i.q)({orguserid:1===parseInt(null===m||void 0===m?void 0:m.rolelevel)?"":v}));case 3:g(!1);case 4:case"end":return e.stop()}}),e)}))),[t]);var y=function(){var e=Object(r.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,t(Object(i.k)({orguserid:1===parseInt(null===m||void 0===m?void 0:m.rolelevel)?"":v}));case 3:g(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsx)(a.Fragment,{children:Object(x.jsx)(d.a,{blocking:k,loader:Object(x.jsx)(N,{}),children:Object(x.jsxs)(u.l,{className:"overflow-hidden",children:[Object(x.jsx)(u.B,{className:"d-flex justify-content-end p-1",children:Object(x.jsxs)(u.wb,{className:"ms-1",children:[Object(x.jsx)(u.G,{color:"secondary",caret:!0,outline:!0,children:Object(x.jsx)(j.a,{size:14})}),Object(x.jsx)(u.F,{children:Object(x.jsxs)(u.E,{onClick:function(){return y()},children:[Object(x.jsx)(o.a,{className:"me-50",size:14}),"Export"]})})]})}),Object(x.jsx)(u.ib,{children:Object(x.jsxs)(u.mb,{responsive:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Service"}),m.taskcreateapproval&&Object(x.jsx)("th",{children:"To Do"}),Object(x.jsx)("th",{children:"Pending"}),Object(x.jsx)("th",{children:"In Progress"}),Object(x.jsx)("th",{children:"Sent for Review"}),Object(x.jsx)("th",{children:"Request Changes"}),Object(x.jsx)("th",{children:"Completed"})]})}),Object(x.jsx)("tbody",{children:null===(e=function(){var e={orguserid:1===parseInt(null===m||void 0===m?void 0:m.rolelevel)?"":v},t=Object.keys(e).some((function(t){return e[t].length>0}));return O.summaryData.length>0?O.summaryData:0===O.summaryData.length&&t?[]:void 0}())||void 0===e?void 0:e.map((function(e,s){return Object(x.jsxs)("tr",{ke:s,children:[Object(x.jsx)("td",{className:"cursor-pointer text-primary",onClick:function(){t(Object(i.o)({status:m.taskcreateapproval?[1,2,6,7,8]:[1,2,6,7],service:e.serviceid})),c("/task/list")},children:e.servicename}),m.taskcreateapproval&&Object(x.jsx)("td",{className:"cursor-pointer text-primary",onClick:function(){t(Object(i.o)({status:[8],service:e.serviceid})),c("/task/list")},children:e.todo}),Object(x.jsx)("td",{className:"cursor-pointer text-primary",onClick:function(){t(Object(i.o)({status:[1],service:e.serviceid})),c("/task/list")},children:e.pending}),Object(x.jsx)("td",{className:"cursor-pointer text-primary",onClick:function(){t(Object(i.o)({status:[2],service:e.serviceid})),c("/task/list")},children:e.inprogress}),Object(x.jsx)("td",{className:"cursor-pointer text-primary",onClick:function(){t(Object(i.o)({status:[6],service:e.serviceid})),c("/task/list")},children:e.sentforreview}),Object(x.jsx)("td",{className:"cursor-pointer text-primary",onClick:function(){t(Object(i.o)({status:[7],service:e.serviceid})),c("/task/list")},children:e.requestchange}),Object(x.jsx)("td",{className:"cursor-pointer text-primary",onClick:function(){t(Object(i.o)({status:[3],service:e.serviceid})),c("/task/list")},children:e.completed})]})}))})]})})]})})})};c(792),c(752),t.default=function(){return Object(x.jsx)("div",{className:"app-user-list",children:Object(x.jsx)(f,{})})}},735:function(e,t,c){"use strict";var s=c(8),r=c(27),n=c(0),a=c(7),i=c.n(a),l=c(14),j=(c(738),c(3)),o=function(e){var t,c=e.children,a=e.blocking,l=e.loader,o=e.className,d=e.tag,b=e.overlayColor,u=d;return Object(j.jsxs)(u,{className:i()("ui-loader",(t={},Object(r.a)(t,o,o),Object(r.a)(t,"show",a),t)),children:[c,a?Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)("div",Object(s.a)({className:"overlay"},a&&b?{style:{backgroundColor:b}}:{})),Object(j.jsx)("div",{className:"loader",children:l})]}):null]})};t.a=o,o.defaultProps={tag:"div",blocking:!1,loader:Object(j.jsx)(l.jb,{color:"primary"})}},736:function(e,t,c){"use strict";var s=c(3);t.a=function(){return Object(s.jsx)("div",{className:"fallback-spinner",children:Object(s.jsxs)("div",{className:"loading",children:[Object(s.jsx)("div",{className:"effect-1 effects"}),Object(s.jsx)("div",{className:"effect-2 effects"}),Object(s.jsx)("div",{className:"effect-3 effects"})]})})}},738:function(e,t,c){},741:function(e,t,c){},752:function(e,t,c){},792:function(e,t,c){"use strict";var s=c(27),r=c(7),n=c.n(r),a=c(14),i=c(3);t.a=function(e){var t=e.icon,c=e.color,r=e.stats,l=e.renderStats,j=e.statTitle,o=e.className,d=e.statsMargin;return Object(i.jsx)(a.l,{children:Object(i.jsx)(a.m,{className:o,children:Object(i.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(i.jsxs)("div",{children:[l||Object(i.jsx)("h2",{className:n()("fw-bolder",Object(s.a)({"mb-0":!d},d,d)),children:r}),Object(i.jsx)("p",{className:"card-text",children:j})]}),Object(i.jsx)("div",{className:"avatar avatar-stats p-50 m-0 ".concat(c?"bg-light-".concat(c):"bg-light-primary"),children:Object(i.jsx)("div",{className:"avatar-content",children:t})})]})})})}}}]);
//# sourceMappingURL=77.04a8720d.chunk.js.map