(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[218],{1358:function(e,t,s){"use strict";s.r(t);var c=s(12),a=s(0),n=s(30),l=s.n(n),i=s(338),d=s(380),r=s(739),j=s(14),b=s(3);t.default=function(){var e=Object(a.useState)(null),t=Object(c.a)(e,2),s=t[0],n=t[1];Object(a.useEffect)((function(){l.a.get("/faq/data/question").then((function(e){return n(e.data)}))}),[]);return Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)(r.a,{title:"Knowledge Base",data:[{title:"Pages"},{title:"Knowledge Base"},{title:"Category"},{title:"Question"}]}),null!==s?Object(b.jsx)("div",{id:"knowledge-base-question",children:Object(b.jsxs)(j.ib,{children:[Object(b.jsx)(j.B,{lg:"3",md:{size:5,order:1},sm:{size:12},xs:{order:2},children:Object(b.jsx)(j.l,{children:Object(b.jsxs)(j.m,{children:[Object(b.jsxs)("h6",{className:"kb-title",children:[Object(b.jsx)(i.a,{size:20,className:"me-50"}),Object(b.jsx)("span",{children:"Related Questions"})]}),Object(b.jsx)(j.O,{className:"list-group-circle mt-1",children:s.relatedQuestions.map((function(e){return Object(b.jsx)(j.P,{className:"text-body",tag:"a",href:"/",onClick:function(e){return e.preventDefault()},children:e.question},e.id)}))})]})})}),Object(b.jsx)(j.B,{lg:"9",md:{size:7,order:2},sm:{size:12},xs:{order:1},children:Object(b.jsx)(j.l,{children:Object(b.jsxs)(j.m,{children:[Object(b.jsxs)(j.v,{className:"mb-1",children:[Object(b.jsx)(d.a,{className:"font-medium-5  me-25"})," ",Object(b.jsx)("span",{children:s.title})]}),Object(b.jsxs)("p",{className:"mb-2",children:["Last updated on ",s.lastUpdated]}),Object(b.jsx)("div",{dangerouslySetInnerHTML:{__html:s.content}})]})})})]})}):null]})}},739:function(e,t,s){"use strict";var c=s(8),a=s(0),n=s(25),l=s(7),i=s.n(l),d=s(331),r=s(289),j=s(352),b=s(347),o=s(286),m=s(14),h=s(3);t.a=function(e){var t=e.data,s=e.title;return Object(h.jsxs)("div",{className:"content-header row",children:[Object(h.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(h.jsx)("div",{className:"row breadcrumbs-top",children:Object(h.jsxs)("div",{className:"col-12",children:[s?Object(h.jsx)("h2",{className:"content-header-title float-start mb-0",children:s}):"",Object(h.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(h.jsxs)(m.g,{children:[Object(h.jsx)(m.h,{tag:"li",children:Object(h.jsx)(n.b,{to:"/",children:"Home"})}),t.map((function(e,s){var l=e.link?n.b:a.Fragment,d=t.length-1===s;return Object(h.jsx)(m.h,{tag:"li",active:!d,className:i()({"text-primary":!d}),children:Object(h.jsx)(l,Object(c.a)(Object(c.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},s)}))]})})]})})}),Object(h.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(h.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(h.jsxs)(m.tb,{children:[Object(h.jsx)(m.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(h.jsx)(d.a,{size:14})}),Object(h.jsxs)(m.F,{tag:"ul",end:!0,children:[Object(h.jsxs)(m.E,{tag:n.b,to:"/apps/todo",children:[Object(h.jsx)(r.a,{className:"me-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(h.jsxs)(m.E,{tag:n.b,to:"/apps/chat",children:[Object(h.jsx)(j.a,{className:"me-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(h.jsxs)(m.E,{tag:n.b,to:"/apps/email",children:[Object(h.jsx)(b.a,{className:"me-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(h.jsxs)(m.E,{tag:n.b,to:"/apps/calendar",children:[Object(h.jsx)(o.a,{className:"me-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}}}]);
//# sourceMappingURL=218.5eeae6d4.chunk.js.map