(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[190],{1467:function(t,e,o){"use strict";o.r(e);var n=o(0),l=o(14),c=o(482),i=o.n(c),r=o(751),s=o(739),a=o(3),d=function(){return Object(a.jsxs)("div",{className:"demo-inline-spacing",children:[Object(a.jsx)(l.i,{color:"primary",outline:!0,id:"positionTop",children:"Top"}),Object(a.jsx)(l.yb,{placement:"top",target:"positionTop",children:"Tooltip on Top"}),Object(a.jsx)(l.i,{color:"primary",outline:!0,id:"positionRight",children:"Right"}),Object(a.jsx)(l.yb,{placement:"right",target:"positionRight",children:"Tooltip on Right"}),Object(a.jsx)(l.i,{color:"primary",outline:!0,id:"positionBottom",children:"Bottom"}),Object(a.jsx)(l.yb,{placement:"bottom",target:"positionBottom",children:"Tooltip on Bottom"}),Object(a.jsx)(l.i,{color:"primary",outline:!0,id:"positionLeft",children:"Left"}),Object(a.jsx)(l.yb,{placement:"left",target:"positionLeft",children:"Tooltip on Left"})]})},p=o(12),j=function(){var t=Object(n.useState)(!1),e=Object(p.a)(t,2),o=e[0],c=e[1];return Object(a.jsxs)(n.Fragment,{children:[Object(a.jsx)(l.i,{color:"primary",id:"ControlledExample",children:"Controlled"}),Object(a.jsx)(l.qb,{placement:"top",isOpen:o,target:"ControlledExample",toggle:function(){return c(!o)},children:"Hello World !"})]})},b=function(){return Object(a.jsxs)(n.Fragment,{children:[Object(a.jsx)(l.i,{color:"primary",id:"UnControlledExample",children:"Uncontrolled"}),Object(a.jsx)(l.yb,{placement:"top",target:"UnControlledExample",children:"Hello World !"})]})},m=Object(a.jsx)("pre",{children:Object(a.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport { Button, Tooltip } from 'reactstrap'\n\nconst TooltipControlled = () => {\n  const [tooltipOpen, setTooltipOpen] = useState(false)\n\n  return (\n    <React.Fragment>\n      <Button color='primary' id='ControlledExample'>\n        Controlled\n      </Button>\n      <Tooltip\n        placement='top'\n        isOpen={tooltipOpen}\n        target='ControlledExample'\n        toggle={() => setTooltipOpen(!tooltipOpen)}\n      >\n        Hello World !\n      </Tooltip>\n    </React.Fragment>\n  )\n}\nexport default TooltipControlled\n"})}),h=Object(a.jsx)("pre",{children:Object(a.jsx)("code",{className:"language-jsx",children:"\n\nimport { Button, UncontrolledTooltip } from 'reactstrap'\n\nconst TooltipUncontrolled = () => {\n  return (\n    <React.Fragment>\n      <Button color='primary' id='UnControlledExample'>\n        Uncontrolled\n      </Button>\n      <UncontrolledTooltip placement='top' target='UnControlledExample'>\n        Hello World !\n      </UncontrolledTooltip>\n    </React.Fragment>\n  )\n}\nexport default TooltipUncontrolled\n"})}),x=Object(a.jsx)("pre",{children:Object(a.jsx)("code",{className:"language-jsx",children:"\n\nimport { Button, UncontrolledTooltip } from 'reactstrap'\n\nconst TooltipPosition = () => {\n  return (\n    <div className='demo-inline-spacing'>\n      <Button color='primary' outline id='positionTop'>\n        Top\n      </Button>\n      <UncontrolledTooltip placement='top' target='positionTop'>\n        Tooltip on Top\n      </UncontrolledTooltip>\n\n      <Button color='primary' outline id='positionRight'>\n        Right\n      </Button>\n      <UncontrolledTooltip placement='right' target='positionRight'>\n        Tooltip on Right\n      </UncontrolledTooltip>\n\n      <Button color='primary' outline id='positionBottom'>\n        Bottom\n      </Button>\n      <UncontrolledTooltip placement='bottom' target='positionBottom'>\n        Tooltip on Bottom\n      </UncontrolledTooltip>\n\n      <Button color='primary' outline id='positionLeft'>\n        Left\n      </Button>\n      <UncontrolledTooltip placement='left' target='positionLeft'>\n        Tooltip on Left\n      </UncontrolledTooltip>\n    </div>\n  )\n}\nexport default TooltipPosition\n"})});e.default=function(){return Object(n.useEffect)((function(){i.a.highlightAll()}),[]),Object(a.jsxs)(n.Fragment,{children:[Object(a.jsx)(s.a,{title:"Tooltips",data:[{title:"Components"},{title:"Tooltips"}]}),Object(a.jsxs)(l.ib,{children:[Object(a.jsx)(l.B,{xl:"6",lg:"12",children:Object(a.jsxs)(r.a,{title:"Controlled Tooltip",code:m,children:[Object(a.jsxs)(l.u,{children:["For controlled tooltips you'll have to manage state of component.controlled tooltips require"," ",Object(a.jsx)("code",{children:"isOpen"})," and ",Object(a.jsx)("code",{children:"toggle"})," props to work."]}),Object(a.jsx)(j,{})]})}),Object(a.jsx)(l.B,{xl:"6",lg:"12",children:Object(a.jsxs)(r.a,{title:"Uncontrolled Tooltip",code:h,children:[Object(a.jsxs)(l.u,{children:["UncontrolledTooltip does not require ",Object(a.jsx)("code",{children:"isOpen"})," nor ",Object(a.jsx)("code",{children:"toggle"})," props to work.All you have to do is provide a valid target to tooltip."]}),Object(a.jsx)(b,{})]})})]}),Object(a.jsx)(l.ib,{children:Object(a.jsx)(l.B,{sm:"12",children:Object(a.jsxs)(r.a,{title:"Tooltip Positions",code:x,children:[Object(a.jsxs)(l.u,{className:"mb-0",children:["Use prop ",Object(a.jsx)("code",{children:"placement"})," to change position of tooltip."]}),Object(a.jsx)(d,{})]})})})]})}},739:function(t,e,o){"use strict";var n=o(8),l=o(0),c=o(25),i=o(7),r=o.n(i),s=o(331),a=o(289),d=o(352),p=o(347),j=o(286),b=o(14),m=o(3);e.a=function(t){var e=t.data,o=t.title;return Object(m.jsxs)("div",{className:"content-header row",children:[Object(m.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(m.jsx)("div",{className:"row breadcrumbs-top",children:Object(m.jsxs)("div",{className:"col-12",children:[o?Object(m.jsx)("h2",{className:"content-header-title float-start mb-0",children:o}):"",Object(m.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(m.jsxs)(b.g,{children:[Object(m.jsx)(b.h,{tag:"li",children:Object(m.jsx)(c.b,{to:"/",children:"Home"})}),e.map((function(t,o){var i=t.link?c.b:l.Fragment,s=e.length-1===o;return Object(m.jsx)(b.h,{tag:"li",active:!s,className:r()({"text-primary":!s}),children:Object(m.jsx)(i,Object(n.a)(Object(n.a)({},t.link?{to:t.link}:{}),{},{children:t.title}))},o)}))]})})]})})}),Object(m.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(m.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(m.jsxs)(b.tb,{children:[Object(m.jsx)(b.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(m.jsx)(s.a,{size:14})}),Object(m.jsxs)(b.F,{tag:"ul",end:!0,children:[Object(m.jsxs)(b.E,{tag:c.b,to:"/apps/todo",children:[Object(m.jsx)(a.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(m.jsxs)(b.E,{tag:c.b,to:"/apps/chat",children:[Object(m.jsx)(d.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(m.jsxs)(b.E,{tag:c.b,to:"/apps/email",children:[Object(m.jsx)(p.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(m.jsxs)(b.E,{tag:c.b,to:"/apps/calendar",children:[Object(m.jsx)(j.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},751:function(t,e,o){"use strict";var n=o(12),l=o(0),c=o(302),i=o(14),r=o(3);e.a=function(t){var e=t.title,o=t.children,s=t.noBody,a=t.code,d=t.iconCode,p=Object(l.useState)(!1),j=Object(n.a)(p,2),b=j[0],m=j[1],h=d||Object(r.jsx)(c.a,{size:15}),x=s?l.Fragment:i.m;return Object(r.jsxs)(i.l,{className:"card-snippet",children:[Object(r.jsxs)(i.p,{children:[Object(r.jsx)(i.v,{tag:"h4",children:e}),Object(r.jsx)("div",{className:"views cursor-pointer",onClick:function(){return m(!b)},children:h})]}),Object(r.jsx)(x,{children:o}),Object(r.jsx)(i.C,{isOpen:b,children:Object(r.jsx)(i.m,{children:a})})]})}}}]);
//# sourceMappingURL=190.0dc25477.chunk.js.map