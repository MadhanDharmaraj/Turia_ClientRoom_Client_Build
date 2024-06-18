(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[184],{1455:function(e,o,t){"use strict";t.r(o);var r=t(0),n=t(14),c=t(751),i=t(739),l=t(3),a=function(){return Object(l.jsxs)("div",{className:"demo-inline-spacing",children:[Object(l.jsx)(n.i,{color:"primary",outline:!0,id:"popFocus",children:"Focus"}),Object(l.jsxs)(n.xb,{trigger:"focus",placement:"top",target:"popFocus",children:[Object(l.jsx)(n.gb,{children:"Focus Trigger"}),Object(l.jsx)(n.fb,{children:"Focusing on the trigging element makes this popover appear. Blurring (clicking away) makes it disappear. You cannot select this text as the popover will disappear when you try."})]}),Object(l.jsx)(n.i,{color:"primary",outline:!0,id:"popClick",children:"Click"}),Object(l.jsxs)(n.xb,{trigger:"click",placement:"top",target:"popClick",children:[Object(l.jsx)(n.gb,{children:"Click Trigger"}),Object(l.jsx)(n.fb,{children:"Clicking on the triggering element makes this popover appear. Clicking on it again will make it disappear. You can select this text, but clicking away (somewhere other than the triggering element) will not dismiss this popover."})]}),Object(l.jsx)(n.i,{trigger:"legacy",color:"primary",outline:!0,id:"popLegacy",children:"Legacy"}),Object(l.jsxs)(n.xb,{placement:"top",target:"popLegacy",children:[Object(l.jsx)(n.gb,{children:"Legacy Trigger"}),Object(l.jsx)(n.fb,{children:'Legacy is a reactstrap special trigger value (outside of bootstrap\'s spec/standard). Before reactstrap correctly supported click and focus, it had a hybrid which was very useful and has been brought back as trigger="legacy". One advantage of the legacy trigger is that it allows the popover text to be selected while also closing when clicking outside the triggering element and popover itself.'})]})]})},s=function(){return Object(l.jsxs)("div",{className:"demo-inline-spacing",children:[Object(l.jsx)(n.i,{color:"primary",outline:!0,id:"popTop",children:"Top"}),Object(l.jsxs)(n.xb,{placement:"top",target:"popTop",children:[Object(l.jsx)(n.gb,{children:"Popover Top"}),Object(l.jsx)(n.fb,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque."})]}),Object(l.jsx)(n.i,{color:"primary",outline:!0,id:"popRight",children:"Right"}),Object(l.jsxs)(n.xb,{placement:"right",target:"popRight",children:[Object(l.jsx)(n.gb,{children:"Popover Right"}),Object(l.jsx)(n.fb,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque."})]}),Object(l.jsx)(n.i,{color:"primary",outline:!0,id:"popBottom",children:"Bottom"}),Object(l.jsxs)(n.xb,{placement:"bottom",target:"popBottom",children:[Object(l.jsx)(n.gb,{children:"Popover Bottom"}),Object(l.jsx)(n.fb,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque."})]}),Object(l.jsx)(n.i,{color:"primary",outline:!0,id:"popLeft",children:"Left"}),Object(l.jsxs)(n.xb,{placement:"left",target:"popLeft",children:[Object(l.jsx)(n.gb,{children:"Popover Left"}),Object(l.jsx)(n.fb,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque."})]})]})},p=t(12),d=function(){var e=Object(r.useState)(!1),o=Object(p.a)(e,2),t=o[0],c=o[1];return Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)(n.i,{color:"primary",outline:!0,id:"controlledPopover",children:"Controlled"}),Object(l.jsxs)(n.eb,{placement:"top",isOpen:t,target:"controlledPopover",toggle:function(){return c(!t)},children:[Object(l.jsx)(n.gb,{children:"Controlled Popover"}),Object(l.jsx)(n.fb,{children:"Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie."})]})]})},j=function(){return Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)(n.i,{color:"primary",outline:!0,id:"uncontrolledPopover",children:"Uncontrolled"}),Object(l.jsxs)(n.xb,{placement:"top",target:"uncontrolledPopover",children:[Object(l.jsx)(n.gb,{children:"Uncontrolled Popover"}),Object(l.jsx)(n.fb,{children:"Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie."})]})]})},g=t(482),m=t.n(g),u=Object(l.jsx)("pre",{children:Object(l.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap'\n\nconst PopoverControlled = () => {\n  const [popoverOpen, setPopoverOpen] = useState(false)\n\n  return (\n    <React.Fragment>\n      <Button color='primary' outline id='controlledPopover'>\n        Controlled\n      </Button>\n      <Popover\n        placement='top'\n        target='controlledPopover'\n        isOpen={popoverOpen}\n        toggle={() => setPopoverOpen(!popoverOpen)}\n      >\n        <PopoverHeader>Controlled Popover</PopoverHeader>\n        <PopoverBody>\n          Macaroon chocolate candy. I love carrot cake gingerbread cake lemon\n          drops. Muffin sugar plum marzipan pie.\n        </PopoverBody>\n      </Popover>\n    </React.Fragment>\n  )\n}\nexport default PopoverControlled\n"})}),b=Object(l.jsx)("pre",{children:Object(l.jsx)("code",{className:"language-jsx",children:"\n\nimport {\n  Button,\n  UncontrolledPopover,\n  PopoverHeader,\n  PopoverBody\n} from 'reactstrap'\n\nconst PopoverUncontrolled = () => {\n  return (\n    <React.Fragment>\n      <Button color='primary' outline id='uncontrolledPopover'>\n        Uncontrolled\n      </Button>\n      <UncontrolledPopover placement='top' target='uncontrolledPopover'>\n        <PopoverHeader>Uncontrolled Popover</PopoverHeader>\n        <PopoverBody>\n          Macaroon chocolate candy. I love carrot cake gingerbread cake lemon\n          drops. Muffin sugar plum marzipan pie.\n        </PopoverBody>\n      </UncontrolledPopover>\n    </React.Fragment>\n  )\n}\nexport default PopoverUncontrolled\n"})}),h=Object(l.jsx)("pre",{children:Object(l.jsx)("code",{className:"language-jsx",children:"\n\nimport { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'\n\nconst PopoverPositions = () => {\n  return (\n    <div className='demo-inline-spacing'>\n      <Button color='primary' outline id='popTop'>\n        Top\n      </Button>\n      <UncontrolledPopover placement='top' target='popTop'>\n        <PopoverHeader>Popover Top</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque.</PopoverBody>\n      </UncontrolledPopover>\n\n      <Button color='primary' outline id='popRight'>\n        Right\n      </Button>\n      <UncontrolledPopover placement='right' target='popRight'>\n        <PopoverHeader>Popover Right</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque.</PopoverBody>\n      </UncontrolledPopover>\n\n      <Button color='primary' outline id='popBottom'>\n        Bottom\n      </Button>\n      <UncontrolledPopover placement='bottom' target='popBottom'>\n        <PopoverHeader>Popover Bottom</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque.</PopoverBody>\n      </UncontrolledPopover>\n\n      <Button color='primary' outline id='popLeft'>\n        Left\n      </Button>\n      <UncontrolledPopover placement='left' target='popLeft'>\n        <PopoverHeader>Popover Left</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque.</PopoverBody>\n      </UncontrolledPopover>\n    </div>\n  )\n}\n\nexport default PopoverPositions\n"})}),v=Object(l.jsx)("pre",{children:Object(l.jsx)("code",{className:"language-jsx",children:"\n\nimport { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'\n\nconst PopoverTriggers = () => {\n  return (\n    <div className='demo-inline-spacing'>\n      <Button color='primary' outline id='popFocus'>\n        Focus\n      </Button>\n      <UncontrolledPopover trigger='focus' placement='top' target='popFocus'>\n        <PopoverHeader>Focus Trigger</PopoverHeader>\n        <PopoverBody>\n          Focusing on the trigging element makes this popover appear. Blurring (clicking away) makes it disappear. You\n          cannot select this text as the popover will disappear when you try.\n        </PopoverBody>\n      </UncontrolledPopover>\n\n      <Button color='primary' outline id='popClick'>\n        Click\n      </Button>\n      <UncontrolledPopover trigger='click' placement='top' target='popClick'>\n        <PopoverHeader>Click Trigger</PopoverHeader>\n        <PopoverBody>\n          Clicking on the triggering element makes this popover appear. Clicking on it again will make it disappear. You\n          can select this text, but clicking away (somewhere other than the triggering element) will not dismiss this\n          popover.\n        </PopoverBody>\n      </UncontrolledPopover>\n\n      <Button trigger='legacy' color='primary' outline id='popLegacy'>\n        Legacy\n      </Button>\n      <UncontrolledPopover placement='top' target='popLegacy'>\n        <PopoverHeader>Legacy Trigger</PopoverHeader>\n        <PopoverBody>\n          Legacy is a reactstrap special trigger value (outside of bootstrap's spec/standard). Before reactstrap\n          correctly supported click and focus, it had a hybrid which was very useful and has been brought back as\n          trigger=\"legacy\". One advantage of the legacy trigger is that it allows the popover text to be selected while\n          also closing when clicking outside the triggering element and popover itself.\n        </PopoverBody>\n      </UncontrolledPopover>\n    </div>\n  )\n}\nexport default PopoverTriggers\n"})});o.default=function(){return Object(r.useEffect)((function(){m.a.highlightAll()}),[]),Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)(i.a,{title:"Popovers",data:[{title:"Components"},{title:"Popovers"}]}),Object(l.jsxs)(n.ib,{children:[Object(l.jsx)(n.B,{md:"6",sm:"12",children:Object(l.jsxs)(c.a,{title:"Controlled Popover",code:u,children:[Object(l.jsxs)(n.u,{children:["For controlled Popover you'll have to manage state of component. Controlled Popover require"," ",Object(l.jsx)("code",{children:"isOpen"})," and ",Object(l.jsx)("code",{children:"toggle"})," props to work."]}),Object(l.jsx)(d,{})]})}),Object(l.jsx)(n.B,{md:"6",sm:"12",children:Object(l.jsxs)(c.a,{title:"Uncontrolled Popover",code:b,children:[Object(l.jsx)(n.u,{children:"You can create an uncontrolled popover without having to manage state. All you have to do is wrap your content inside UncontrolledPopover tag."}),Object(l.jsx)(j,{})]})})]}),Object(l.jsxs)(n.ib,{children:[Object(l.jsx)(n.B,{sm:"12",children:Object(l.jsxs)(c.a,{title:"Popover Positions",code:h,children:[Object(l.jsxs)(n.u,{className:"mb-0",children:["Use prop ",Object(l.jsx)("code",{children:"placement"})," to place you popover at desired position."]}),Object(l.jsx)(s,{})]})}),Object(l.jsx)(n.B,{sm:"12",children:Object(l.jsxs)(c.a,{title:"Popover Triggers",code:v,children:[Object(l.jsxs)(n.u,{className:"mb-0",children:["Use prop ",Object(l.jsx)("code",{children:"trigger"})," for various trigger options. Trigger each popover to see information about the trigger."]}),Object(l.jsx)(a,{})]})})]})]})}},739:function(e,o,t){"use strict";var r=t(8),n=t(0),c=t(25),i=t(7),l=t.n(i),a=t(331),s=t(289),p=t(352),d=t(347),j=t(286),g=t(14),m=t(3);o.a=function(e){var o=e.data,t=e.title;return Object(m.jsxs)("div",{className:"content-header row",children:[Object(m.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(m.jsx)("div",{className:"row breadcrumbs-top",children:Object(m.jsxs)("div",{className:"col-12",children:[t?Object(m.jsx)("h2",{className:"content-header-title float-start mb-0",children:t}):"",Object(m.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(m.jsxs)(g.g,{children:[Object(m.jsx)(g.h,{tag:"li",children:Object(m.jsx)(c.b,{to:"/",children:"Home"})}),o.map((function(e,t){var i=e.link?c.b:n.Fragment,a=o.length-1===t;return Object(m.jsx)(g.h,{tag:"li",active:!a,className:l()({"text-primary":!a}),children:Object(m.jsx)(i,Object(r.a)(Object(r.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},t)}))]})})]})})}),Object(m.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(m.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(m.jsxs)(g.tb,{children:[Object(m.jsx)(g.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(m.jsx)(a.a,{size:14})}),Object(m.jsxs)(g.F,{tag:"ul",end:!0,children:[Object(m.jsxs)(g.E,{tag:c.b,to:"/apps/todo",children:[Object(m.jsx)(s.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(m.jsxs)(g.E,{tag:c.b,to:"/apps/chat",children:[Object(m.jsx)(p.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(m.jsxs)(g.E,{tag:c.b,to:"/apps/email",children:[Object(m.jsx)(d.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(m.jsxs)(g.E,{tag:c.b,to:"/apps/calendar",children:[Object(m.jsx)(j.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},751:function(e,o,t){"use strict";var r=t(12),n=t(0),c=t(302),i=t(14),l=t(3);o.a=function(e){var o=e.title,t=e.children,a=e.noBody,s=e.code,p=e.iconCode,d=Object(n.useState)(!1),j=Object(r.a)(d,2),g=j[0],m=j[1],u=p||Object(l.jsx)(c.a,{size:15}),b=a?n.Fragment:i.m;return Object(l.jsxs)(i.l,{className:"card-snippet",children:[Object(l.jsxs)(i.p,{children:[Object(l.jsx)(i.v,{tag:"h4",children:o}),Object(l.jsx)("div",{className:"views cursor-pointer",onClick:function(){return m(!g)},children:u})]}),Object(l.jsx)(b,{children:t}),Object(l.jsx)(i.C,{isOpen:g,children:Object(l.jsx)(i.m,{children:s})})]})}}}]);
//# sourceMappingURL=184.39293b7c.chunk.js.map