(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[60],{1298:function(e,t,c){"use strict";c.r(t);var a=c(10),s=c(25),n=c(0),l=c(27),r=c.n(l),i=c(699),d=c(839),j=c(13),b=(c(840),c(2));t.default=function(){var e=Object(n.useState)(null),t=Object(a.a)(e,2),c=t[0],l=t[1],o=Object(n.useState)(""),m=Object(a.a)(o,2),h=m[0],u=m[1];Object(n.useEffect)((function(){r.a.get("/faq/data/knowledge_base").then((function(e){return l(e.data)}))}),[]);var x=function(e){var t=e.item;return Object(b.jsx)(j.B,{className:"kb-search-content",md:"4",sm:"6",children:Object(b.jsx)(j.l,{children:Object(b.jsxs)(s.b,{to:"/pages/knowledge-base/".concat(t.category),children:[Object(b.jsx)(j.q,{src:t.img,alt:"knowledge-base-image",top:!0}),Object(b.jsxs)(j.m,{className:"text-center",children:[Object(b.jsx)("h4",{children:t.title}),Object(b.jsx)("p",{className:"text-body mt-1 mb-0",children:t.desc})]})]})})},t.id)};return Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)(i.a,{title:"Knowledge Base",data:[{title:"Pages"},{title:"Knowledge Base"}]}),Object(b.jsx)(d.a,{searchTerm:h,setSearchTerm:u}),null!==c?Object(b.jsx)("div",{id:"knowledge-base-content",children:Object(b.jsx)(j.ib,{className:"kb-search-content-info match-height",children:c.map((function(e){var t=e.title.toLowerCase().includes(h.toLowerCase()),c=e.desc.toLowerCase().includes(h.toLowerCase());return h.length<1||t||c?Object(b.jsx)(x,{item:e},e.id):null}))})}):null]})}},699:function(e,t,c){"use strict";var a=c(8),s=c(0),n=c(25),l=c(7),r=c.n(l),i=c(298),d=c(258),j=c(319),b=c(314),o=c(255),m=c(13),h=c(2);t.a=function(e){var t=e.data,c=e.title;return Object(h.jsxs)("div",{className:"content-header row",children:[Object(h.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(h.jsx)("div",{className:"row breadcrumbs-top",children:Object(h.jsxs)("div",{className:"col-12",children:[c?Object(h.jsx)("h2",{className:"content-header-title float-start mb-0",children:c}):"",Object(h.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(h.jsxs)(m.g,{children:[Object(h.jsx)(m.h,{tag:"li",children:Object(h.jsx)(n.b,{to:"/",children:"Home"})}),t.map((function(e,c){var l=e.link?n.b:s.Fragment,i=t.length-1===c;return Object(h.jsx)(m.h,{tag:"li",active:!i,className:r()({"text-primary":!i}),children:Object(h.jsx)(l,Object(a.a)(Object(a.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},c)}))]})})]})})}),Object(h.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(h.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(h.jsxs)(m.tb,{children:[Object(h.jsx)(m.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(h.jsx)(i.a,{size:14})}),Object(h.jsxs)(m.F,{tag:"ul",end:!0,children:[Object(h.jsxs)(m.E,{tag:n.b,to:"/apps/todo",children:[Object(h.jsx)(d.a,{className:"me-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(h.jsxs)(m.E,{tag:n.b,to:"/apps/chat",children:[Object(h.jsx)(j.a,{className:"me-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(h.jsxs)(m.E,{tag:n.b,to:"/apps/email",children:[Object(h.jsx)(b.a,{className:"me-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(h.jsxs)(m.E,{tag:n.b,to:"/apps/calendar",children:[Object(h.jsx)(o.a,{className:"me-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},762:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/banner.06ea9907.png"},839:function(e,t,c){"use strict";var a=c(338),s=c(13),n=c(2);t.a=function(e){var t=e.searchTerm,l=e.setSearchTerm,r=e.handleFilter;return Object(n.jsx)("div",{id:"knowledge-base-search",children:Object(n.jsx)(s.l,{className:"knowledge-base-bg",style:{backgroundImage:"url(".concat(c(762).default,")")},children:Object(n.jsxs)(s.m,{className:"text-center",children:[Object(n.jsx)("h2",{className:"text-primary",children:"Dedicated Source Used on Website"}),Object(n.jsxs)(s.u,{className:"mb-2",children:["Popular searches: ",Object(n.jsx)("span",{className:"fw-bolder",children:"Sales automation, Email marketing"})]}),Object(n.jsx)(s.H,{className:"kb-search-input",onSubmit:function(e){return e.preventDefault()},children:Object(n.jsxs)(s.L,{className:"input-group-merge",children:[Object(n.jsx)(s.M,{children:Object(n.jsx)(a.a,{size:14})}),Object(n.jsx)(s.K,{value:t,onChange:function(e){return function(e){r?r(e):l(e.target.value)}(e)},placeholder:"Ask a question..."})]})})]})})})}},840:function(e,t,c){}}]);
//# sourceMappingURL=60.744cc3e0.chunk.js.map