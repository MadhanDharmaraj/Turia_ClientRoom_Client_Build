(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[62],{1300:function(e,t,c){"use strict";c.r(t);var a=c(25),s=c(23),n=c(10),r=c(21),l=c(24),i=c(0),d=c(27),j=c.n(d),o=c(34),b=c(7),m=c.n(b),h=c(700),u=c(841),O=c(13),x=(c(842),c(2));t.default=function(){var e=Object(i.useState)(null),t=Object(n.a)(e,2),c=t[0],d=t[1],b=Object(i.useState)([]),g=Object(n.a)(b,2),p=g[0],f=g[1],N=Object(i.useState)(""),v=Object(n.a)(N,2),k=v[0],w=v[1];Object(i.useEffect)((function(){j.a.get("/faq/data/category").then((function(e){return d(e.data)}))}),[]);var y=Object(r.g)(),C=function(e){var t=e.item,c=o[t.icon];return Object(x.jsx)(O.B,{className:"kb-search-content",md:"4",sm:"6",children:Object(x.jsx)(O.l,{children:Object(x.jsxs)(O.m,{children:[Object(x.jsxs)("h6",{className:"kb-title",children:[Object(x.jsx)(c,{size:20,className:m()("me-50",Object(s.a)({},t.iconColor,t.iconColor))}),Object(x.jsxs)("span",{children:[t.title," ","(".concat(t.questions.length,")")]})]}),Object(x.jsx)(O.O,{className:"list-group-circle mt-2",children:t.questions.map((function(e){return Object(x.jsx)(O.P,{tag:l.b,to:"/pages/knowledge-base/".concat(y.category,"/").concat(e.slug),className:"text-body",children:e.question},e.id)}))})]})})})};return Object(x.jsxs)(i.Fragment,{children:[Object(x.jsx)(h.a,{title:"Knowledge Base",data:[{title:"Pages"},{title:"Knowledge Base"},{title:"Category"}]}),Object(x.jsx)(u.a,{searchTerm:k,setSearchTerm:w,handleFilter:function(e){var t=e.target.value,s=e.target.value.toLowerCase();w(e.target.value);var n=[];t.length&&(n=c.filter((function(e){return e.title.toLowerCase().includes(s)||e.questions.filter((function(e){return e.question.toLowerCase().includes(s)})).length}))),f(Object(a.a)(n))}}),null!==c?Object(x.jsx)("div",{id:"knowledge-base-category",children:Object(x.jsx)(O.ib,{className:"kb-search-content-info match-height",children:(k.length?p:c).map((function(e){return Object(x.jsx)(C,{item:e},e.id)}))})}):null]})}},700:function(e,t,c){"use strict";var a=c(8),s=c(0),n=c(24),r=c(7),l=c.n(r),i=c(299),d=c(259),j=c(320),o=c(315),b=c(256),m=c(13),h=c(2);t.a=function(e){var t=e.data,c=e.title;return Object(h.jsxs)("div",{className:"content-header row",children:[Object(h.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(h.jsx)("div",{className:"row breadcrumbs-top",children:Object(h.jsxs)("div",{className:"col-12",children:[c?Object(h.jsx)("h2",{className:"content-header-title float-start mb-0",children:c}):"",Object(h.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(h.jsxs)(m.g,{children:[Object(h.jsx)(m.h,{tag:"li",children:Object(h.jsx)(n.b,{to:"/",children:"Home"})}),t.map((function(e,c){var r=e.link?n.b:s.Fragment,i=t.length-1===c;return Object(h.jsx)(m.h,{tag:"li",active:!i,className:l()({"text-primary":!i}),children:Object(h.jsx)(r,Object(a.a)(Object(a.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},c)}))]})})]})})}),Object(h.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(h.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(h.jsxs)(m.tb,{children:[Object(h.jsx)(m.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(h.jsx)(i.a,{size:14})}),Object(h.jsxs)(m.F,{tag:"ul",end:!0,children:[Object(h.jsxs)(m.E,{tag:n.b,to:"/apps/todo",children:[Object(h.jsx)(d.a,{className:"me-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(h.jsxs)(m.E,{tag:n.b,to:"/apps/chat",children:[Object(h.jsx)(j.a,{className:"me-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(h.jsxs)(m.E,{tag:n.b,to:"/apps/email",children:[Object(h.jsx)(o.a,{className:"me-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(h.jsxs)(m.E,{tag:n.b,to:"/apps/calendar",children:[Object(h.jsx)(b.a,{className:"me-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},763:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/banner.06ea9907.png"},841:function(e,t,c){"use strict";var a=c(339),s=c(13),n=c(2);t.a=function(e){var t=e.searchTerm,r=e.setSearchTerm,l=e.handleFilter;return Object(n.jsx)("div",{id:"knowledge-base-search",children:Object(n.jsx)(s.l,{className:"knowledge-base-bg",style:{backgroundImage:"url(".concat(c(763).default,")")},children:Object(n.jsxs)(s.m,{className:"text-center",children:[Object(n.jsx)("h2",{className:"text-primary",children:"Dedicated Source Used on Website"}),Object(n.jsxs)(s.u,{className:"mb-2",children:["Popular searches: ",Object(n.jsx)("span",{className:"fw-bolder",children:"Sales automation, Email marketing"})]}),Object(n.jsx)(s.H,{className:"kb-search-input",onSubmit:function(e){return e.preventDefault()},children:Object(n.jsxs)(s.L,{className:"input-group-merge",children:[Object(n.jsx)(s.M,{children:Object(n.jsx)(a.a,{size:14})}),Object(n.jsx)(s.K,{value:t,onChange:function(e){return function(e){l?l(e):r(e.target.value)}(e)},placeholder:"Ask a question..."})]})})]})})})}},842:function(e,t,c){}}]);
//# sourceMappingURL=62.ac7fd583.chunk.js.map