(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[127],{1021:function(e,t,c){"use strict";var s=c(12),a=c(25),n=c(0),l=c(30),i=c.n(l),r=c(7),d=c.n(r),j=c(31),b=c(371),o=c(61),h=c(14),m=c(3);t.a=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),c=t[0],l=t[1];Object(n.useEffect)((function(){i.a.get("/blog/list/data/sidebar").then((function(e){return l(e.data)}))}),[]);var r={Quote:"light-info",Fashion:"light-primary",Gaming:"light-danger",Video:"light-warning",Food:"light-success"};return Object(m.jsx)("div",{className:"sidebar-detached sidebar-right",children:Object(m.jsx)("div",{className:"sidebar",children:Object(m.jsx)("div",{className:"blog-sidebar right-sidebar my-2 my-lg-0",children:Object(m.jsxs)("div",{className:"right-sidebar-content",children:[Object(m.jsx)("div",{className:"blog-search",children:Object(m.jsxs)(h.L,{className:"input-group-merge",children:[Object(m.jsx)(h.K,{placeholder:"Search here"}),Object(m.jsx)(h.M,{children:Object(m.jsx)(b.a,{size:14})})]})}),null!==c?Object(m.jsxs)(n.Fragment,{children:[Object(m.jsxs)("div",{className:"blog-recent-posts mt-3",children:[Object(m.jsx)("h6",{className:"section-label",children:"Recent Posts"}),Object(m.jsx)("div",{className:"mt-75",children:c.recentPosts.map((function(e,t){return Object(m.jsxs)("div",{className:d()("d-flex",{"mb-2":t!==c.recentPosts.length-1}),children:[Object(m.jsx)(a.b,{className:"me-2",to:"/pages/blog/detail/".concat(e.id),children:Object(m.jsx)("img",{className:"rounded",src:e.img,alt:e.title,width:"100",height:"70"})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h6",{className:"blog-recent-post-title",children:Object(m.jsx)(a.b,{className:"text-body-heading",to:"/pages/blog/detail/".concat(e.id),children:e.title})}),Object(m.jsx)("div",{className:"text-muted mb-0",children:e.createdTime})]})]},t)}))})]}),Object(m.jsxs)("div",{className:"blog-categories mt-3",children:[Object(m.jsx)("h6",{className:"section-label",children:"Categories"}),Object(m.jsx)("div",{className:"mt-1",children:c.categories.map((function(e,t){var s=j[e.icon];return Object(m.jsxs)("div",{className:d()("d-flex justify-content-start align-items-center",{"mb-75":t!==c.categories.length-1}),children:[Object(m.jsx)("a",{className:"me-75",href:"/",onClick:function(e){return e.preventDefault()},children:Object(m.jsx)(o.a,{className:"rounded",color:r[e.category],icon:Object(m.jsx)(s,{size:15})})}),Object(m.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(m.jsx)("div",{className:"blog-category-title text-body",children:e.category})})]},t)}))})]})]}):null]})})})})}},1350:function(e,t,c){"use strict";c.r(t);var s=c(12),a=c(25),n=c(0),l=c(30),i=c.n(l),r=c(7),d=c.n(r),j=c(352),b=c(1021),o=c(61),h=c(739),m=c(14),x=(c(887),c(3));t.default=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),c=t[0],l=t[1];Object(n.useEffect)((function(){i.a.get("/blog/list/data").then((function(e){return l(e.data)}))}),[]);var r={Quote:"light-info",Fashion:"light-primary",Gaming:"light-danger",Video:"light-warning",Food:"light-success"};return Object(x.jsxs)(n.Fragment,{children:[Object(x.jsx)(h.a,{title:"Blog List",data:[{title:"Pages"},{title:"Blog"},{title:"List"}]}),Object(x.jsxs)("div",{className:"blog-wrapper",children:[Object(x.jsx)("div",{className:"content-detached content-left",children:Object(x.jsx)("div",{className:"content-body",children:null!==c?Object(x.jsxs)("div",{className:"blog-list-wrapper",children:[Object(x.jsx)(m.ib,{children:c.map((function(e){return Object(x.jsx)(m.B,{md:"6",children:Object(x.jsxs)(m.l,{children:[Object(x.jsx)(a.b,{to:"/pages/blog/detail/".concat(e.id),children:Object(x.jsx)(m.q,{className:"img-fluid",src:e.img,alt:e.title,top:!0})}),Object(x.jsxs)(m.m,{children:[Object(x.jsx)(m.v,{tag:"h4",children:Object(x.jsx)(a.b,{className:"blog-title-truncate text-body-heading",to:"/pages/blog/detail/".concat(e.id),children:e.title})}),Object(x.jsxs)("div",{className:"d-flex",children:[Object(x.jsx)(o.a,{className:"me-50",img:e.avatar,imgHeight:"24",imgWidth:"24"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("small",{className:"text-muted me-25",children:"by"}),Object(x.jsx)("small",{children:Object(x.jsx)("a",{className:"text-body",href:"/",onClick:function(e){return e.preventDefault()},children:e.userFullName})}),Object(x.jsx)("span",{className:"text-muted ms-50 me-25",children:"|"}),Object(x.jsx)("small",{className:"text-muted",children:e.blogPosted})]})]}),Object(x.jsx)("div",{className:"my-1 py-25",children:e.tags.map((function(t,c){return Object(x.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(x.jsx)(m.f,{className:d()({"me-50":c!==e.tags.length-1}),color:r[t],pill:!0,children:t})},c)}))}),Object(x.jsx)(m.u,{className:"blog-content-truncate",children:e.excerpt}),Object(x.jsx)("hr",{}),Object(x.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(x.jsxs)(a.b,{to:"/pages/blog/detail/".concat(e.id),children:[Object(x.jsx)(j.a,{size:15,className:"text-body me-50"}),Object(x.jsxs)("span",{className:"text-body fw-bold",children:[e.comment," Comments"]})]}),Object(x.jsx)(a.b,{className:"fw-bold",to:"/pages/blog/detail/".concat(e.id),children:"Read More"})]})]})]})},e.title)}))}),Object(x.jsx)(m.ib,{children:Object(x.jsx)(m.B,{sm:"12",children:Object(x.jsxs)(m.bb,{className:"d-flex justify-content-center mt-2",children:[Object(x.jsx)(m.cb,{className:"prev-item",children:Object(x.jsx)(m.db,{href:"#",onClick:function(e){return e.preventDefault()}})}),Object(x.jsx)(m.cb,{children:Object(x.jsx)(m.db,{href:"#",onClick:function(e){return e.preventDefault()},children:"1"})}),Object(x.jsx)(m.cb,{children:Object(x.jsx)(m.db,{href:"#",onClick:function(e){return e.preventDefault()},children:"2"})}),Object(x.jsx)(m.cb,{children:Object(x.jsx)(m.db,{href:"#",onClick:function(e){return e.preventDefault()},children:"3"})}),Object(x.jsx)(m.cb,{active:!0,children:Object(x.jsx)(m.db,{href:"#",onClick:function(e){return e.preventDefault()},children:"4"})}),Object(x.jsx)(m.cb,{children:Object(x.jsx)(m.db,{href:"#",onClick:function(e){return e.preventDefault()},children:"5"})}),Object(x.jsx)(m.cb,{children:Object(x.jsx)(m.db,{href:"#",onClick:function(e){return e.preventDefault()},children:"6"})}),Object(x.jsx)(m.cb,{children:Object(x.jsx)(m.db,{href:"#",onClick:function(e){return e.preventDefault()},children:"7"})}),Object(x.jsx)(m.cb,{className:"next-item",children:Object(x.jsx)(m.db,{href:"#",onClick:function(e){return e.preventDefault()}})})]})})})]}):null})}),Object(x.jsx)(b.a,{})]})]})}},739:function(e,t,c){"use strict";var s=c(8),a=c(0),n=c(25),l=c(7),i=c.n(l),r=c(331),d=c(289),j=c(352),b=c(347),o=c(286),h=c(14),m=c(3);t.a=function(e){var t=e.data,c=e.title;return Object(m.jsxs)("div",{className:"content-header row",children:[Object(m.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(m.jsx)("div",{className:"row breadcrumbs-top",children:Object(m.jsxs)("div",{className:"col-12",children:[c?Object(m.jsx)("h2",{className:"content-header-title float-start mb-0",children:c}):"",Object(m.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(m.jsxs)(h.g,{children:[Object(m.jsx)(h.h,{tag:"li",children:Object(m.jsx)(n.b,{to:"/",children:"Home"})}),t.map((function(e,c){var l=e.link?n.b:a.Fragment,r=t.length-1===c;return Object(m.jsx)(h.h,{tag:"li",active:!r,className:i()({"text-primary":!r}),children:Object(m.jsx)(l,Object(s.a)(Object(s.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},c)}))]})})]})})}),Object(m.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(m.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(m.jsxs)(h.tb,{children:[Object(m.jsx)(h.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(m.jsx)(r.a,{size:14})}),Object(m.jsxs)(h.F,{tag:"ul",end:!0,children:[Object(m.jsxs)(h.E,{tag:n.b,to:"/apps/todo",children:[Object(m.jsx)(d.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(m.jsxs)(h.E,{tag:n.b,to:"/apps/chat",children:[Object(m.jsx)(j.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(m.jsxs)(h.E,{tag:n.b,to:"/apps/email",children:[Object(m.jsx)(b.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(m.jsxs)(h.E,{tag:n.b,to:"/apps/calendar",children:[Object(m.jsx)(o.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},887:function(e,t,c){}}]);
//# sourceMappingURL=127.fc6e0ec3.chunk.js.map