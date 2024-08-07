(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[133],{1291:function(e,a,s){"use strict";s.r(a);var t=s(8),c=s(0),l=s(701),i=s(56),r=s(186),n=s(705),d=s(325),j=s(285),b=s(354),m=s(275),o=s(13),h=s(787),x=s(2),O=[{type:"Full Access",name:"Server Key 1",key:"23eaf7f0-f4f7-495e-8b86-fad3261282ac",date:"Created on 28 Apr 2020, 18:20 GTM+4:10"},{type:"Read Only",name:"Server Key 2",key:"bb98e571-a2e2-4de8-90a9-2e231b5e99",date:"Created on 12 Feb 2020, 10:30 GTM+2:30"},{type:"Full Access",name:"Server Key 3",key:"2e915e59-3105-47f2-8838-6e46bf83b711",date:"Created on 28 Apr 2020, 12:21 GTM+4:10"}],p=[{value:"full-control",label:"Full Control"},{value:"modify",label:"Modify"},{value:"read-execute",label:"Read & Execute"},{value:"list-folder",label:"List Folder Contents"},{value:"read-only",label:"Read Only"},{value:"read-write",label:"Read Write"}],u={apiKeyName:""};a.default=function(){var e=Object(n.f)({defaultValues:u}),a=e.control,s=e.setError,y=e.handleSubmit,N=e.formState.errors;return Object(x.jsxs)(c.Fragment,{children:[Object(x.jsx)(l.a,{title:"Create an API Key",data:[{title:"Pages"},{title:"Create an API Key"}]}),Object(x.jsxs)(o.l,{children:[Object(x.jsx)(o.p,{className:"pb-0",children:Object(x.jsx)(o.v,{tag:"h4",children:"Create an API Key"})}),Object(x.jsxs)(o.ib,{children:[Object(x.jsx)(o.B,{md:{size:5,order:0},xs:{size:12,order:1},children:Object(x.jsx)(o.m,{children:Object(x.jsxs)(o.H,{onSubmit:y((function(e){if(e.apiKeyName.length)return null;s("apiKeyName",{type:"manual"})})),children:[Object(x.jsxs)("div",{className:"mb-2",children:[Object(x.jsx)(o.N,{className:"form-label",children:"Choose the Api key type you want to create"}),Object(x.jsx)(r.a,{isClearable:!1,options:p,className:"react-select",classNamePrefix:"select",theme:i.g,defaultValue:p[0]})]}),Object(x.jsxs)("div",{className:"mb-2",children:[Object(x.jsx)(o.N,{className:"form-label",for:"apiKeyName",children:"Name the API key"}),Object(x.jsx)(n.a,{name:"apiKeyName",control:a,render:function(e){var a=e.field;return Object(x.jsx)(o.K,Object(t.a)({id:"apiKeyName",placeholder:"Server Key",invalid:N.apiKeyName&&!0},a))}}),N&&N.apiKeyName&&Object(x.jsx)(o.I,{children:"Please enter a valid API key name"})]}),Object(x.jsx)("div",{children:Object(x.jsx)(o.i,{block:!0,type:"submit",color:"primary",children:"Create Key"})})]})})}),Object(x.jsx)(o.B,{md:{size:7,order:1},xs:{size:12,order:0},children:Object(x.jsx)("div",{className:"text-center",children:Object(x.jsx)("img",{className:"img-fluid text-center",src:h.a,alt:"illustration",width:"310"})})})]})]}),Object(x.jsxs)(o.l,{children:[Object(x.jsx)(o.p,{children:Object(x.jsx)(o.v,{tag:"h4",children:"API Key List & Access"})}),Object(x.jsxs)(o.m,{children:[Object(x.jsx)(o.u,{children:"An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing."}),Object(x.jsx)(o.ib,{className:"gy-2",children:O.map((function(e){return Object(x.jsx)(o.B,{sm:12,children:Object(x.jsxs)("div",{className:"bg-light-secondary position-relative rounded p-2",children:[Object(x.jsxs)(o.wb,{className:"btn-pinned",children:[Object(x.jsx)(o.G,{tag:"span",className:"cursor-pointer",children:Object(x.jsx)(d.a,{size:18})}),Object(x.jsxs)(o.F,{children:[Object(x.jsxs)(o.E,{className:"d-flex align-items-center",children:[Object(x.jsx)(j.a,{size:14,className:"me-50"}),Object(x.jsx)("span",{children:"Edit"})]}),Object(x.jsxs)(o.E,{className:"d-flex align-items-center",children:[Object(x.jsx)(b.a,{size:14,className:"me-50"}),Object(x.jsx)("span",{children:"Delete"})]})]})]}),Object(x.jsxs)("div",{className:"d-flex align-items-center flex-wrap",children:[Object(x.jsx)("h4",{className:"mb-1 me-1",children:e.name}),Object(x.jsx)(o.f,{className:"mb-1",color:"light-primary",children:e.type})]}),Object(x.jsxs)("h6",{className:"d-flex align-items-center fw-bolder",children:[Object(x.jsx)("span",{className:"me-50",children:e.key}),Object(x.jsx)("span",{children:Object(x.jsx)(m.a,{size:14})})]}),Object(x.jsx)("span",{children:e.date})]})},e.key)}))})]})]})]})}},701:function(e,a,s){"use strict";var t=s(8),c=s(0),l=s(24),i=s(7),r=s.n(i),n=s(300),d=s(260),j=s(321),b=s(316),m=s(257),o=s(13),h=s(2);a.a=function(e){var a=e.data,s=e.title;return Object(h.jsxs)("div",{className:"content-header row",children:[Object(h.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(h.jsx)("div",{className:"row breadcrumbs-top",children:Object(h.jsxs)("div",{className:"col-12",children:[s?Object(h.jsx)("h2",{className:"content-header-title float-start mb-0",children:s}):"",Object(h.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(h.jsxs)(o.g,{children:[Object(h.jsx)(o.h,{tag:"li",children:Object(h.jsx)(l.b,{to:"/",children:"Home"})}),a.map((function(e,s){var i=e.link?l.b:c.Fragment,n=a.length-1===s;return Object(h.jsx)(o.h,{tag:"li",active:!n,className:r()({"text-primary":!n}),children:Object(h.jsx)(i,Object(t.a)(Object(t.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},s)}))]})})]})})}),Object(h.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(h.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(h.jsxs)(o.tb,{children:[Object(h.jsx)(o.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(h.jsx)(n.a,{size:14})}),Object(h.jsxs)(o.F,{tag:"ul",end:!0,children:[Object(h.jsxs)(o.E,{tag:l.b,to:"/apps/todo",children:[Object(h.jsx)(d.a,{className:"me-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(h.jsxs)(o.E,{tag:l.b,to:"/apps/chat",children:[Object(h.jsx)(j.a,{className:"me-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(h.jsxs)(o.E,{tag:l.b,to:"/apps/email",children:[Object(h.jsx)(b.a,{className:"me-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(h.jsxs)(o.E,{tag:l.b,to:"/apps/calendar",children:[Object(h.jsx)(m.a,{className:"me-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},787:function(e,a,s){"use strict";a.a=s.p+"static/media/pricing-Illustration.b00baee8.svg"}}]);
//# sourceMappingURL=133.fcd9c95c.chunk.js.map