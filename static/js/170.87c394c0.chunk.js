(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[170],{1419:function(e,t,n){"use strict";n.r(t);var a=n(10),c=n(0),o=n(25),l=n(21),r=n(222),i=n(56),s=n(2),b=Object(c.lazy)((function(){return Promise.all([n.e(2),n.e(13)]).then(n.bind(null,1292))})),j=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(57)]).then(n.bind(null,1334))})),u=Object(c.lazy)((function(){return Promise.all([n.e(2),n.e(14)]).then(n.bind(null,1298))})),d=function(e){var t=e.allRoutes;return Object(l.i)([{path:"/",index:!0,element:Object(s.jsx)(l.a,{replace:!0,to:function(){var e=Object(i.c)();return e?Object(i.b)(e.role):"/login"}()})},{path:"/login",element:Object(s.jsx)(r.a,{}),children:[{path:"/login",element:Object(s.jsx)(j,{})}]},{path:"/auth/not-auth",element:Object(s.jsx)(r.a,{}),children:[{path:"/auth/not-auth",element:Object(s.jsx)(u,{})}]},{path:"*",element:Object(s.jsx)(r.a,{}),children:[{path:"*",element:Object(s.jsx)(b,{})}]}].concat(Object(o.a)(t)))},O=n(180),g=n(89),m=n(13),h=n(238),f=n(24),p=n(193),x=n(19),v=n(42),y=n.n(v),S=n(16),w=Object(x.a)();t.default=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],o=t[1],l=Object(c.useState)(),r=Object(a.a)(l,2),i=r[0],b=r[1],j=Object(c.useState)(!1),u=Object(a.a)(j,2),x=u[0],v=u[1],N=Object(S.c)((function(e){return e.organization})),k=Object(S.b)(),F=Object(g.a)().layout,I=y()().startOf("D").valueOf();Object(c.useEffect)((function(){o(Object(O.b)(F))}),[F]);var M=function(e){e.detail?(b(e.detail),v(!0),console.log("Showing refresh button.")):console.warn("No worker data found!")},P=Object(c.useState)(!1),z=Object(a.a)(P,2),E=z[0],C=z[1];return Object(c.useEffect)((function(){document.addEventListener("swUpdated",M,{once:!0}),navigator.serviceWorker&&navigator.serviceWorker.addEventListener("controllerchange",(function(){x||(v(!0),console.log("controllerchange triggered, -> auto refresh!!"),window.location.reload())})),navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,n=t.latitude,a=t.longitude;k(Object(p.b)({latitude:n,longitude:a}))}),(function(e){console.error("Error getting user location:",e)})),I>(null===w||void 0===w?void 0:w.nextpaymentdate)&&(localStorage.getItem("paymentFlag")?(C(JSON.parse(localStorage.getItem("paymentFlag"))),k(Object(p.e)(JSON.parse(localStorage.getItem("paymentFlag"))))):(C(!0),k(Object(p.e)(!0)))),"Notification"in window?Notification.requestPermission():console.log("Browser does not support desktop notification")}),[]),Object(c.useEffect)((function(){N.paymentStausFlag?localStorage.setItem("paymentFlag",!0):localStorage.removeItem("paymentFlag"),C(N.paymentStausFlag)}),[N.paymentStausFlag]),Object(s.jsxs)("div",{children:[x&&Object(s.jsx)("div",{className:"app-refresh-box",children:Object(s.jsx)(m.e,{color:"bg-waring",isOpen:x,className:"bg-success",children:Object(s.jsxs)("div",{className:"alert-body",children:[Object(s.jsx)(h.a,{size:15})," ","New version Available, Click Refresh ","  ",Object(s.jsx)(m.i,{size:"sm",color:"primary",onClick:function(){v(!1),i&&i.postMessage({type:"SKIP_WAITING"})},children:"Refresh"})]})})}),Object(s.jsxs)(c.Suspense,{fallback:null,children:[w&&"fb3bbf14-1e97-449c-9bc2-6dfa1b41e55b"!==w.id&&Object(s.jsx)(c.Fragment,{children:E&&("Admin"===(null===w||void 0===w?void 0:w.rolename)||"Manager"===(null===w||void 0===w?void 0:w.rolename))&&Object(s.jsx)(m.B,{lg:12,className:"billing-notification-bar",children:Object(s.jsx)(m.B,{lg:12,sm:12,className:"text-center font-small-3",children:Object(s.jsxs)(m.e,{color:"warning",className:"p-50 mb-0 d-flex justify-content-center",children:[Object(s.jsx)("p",{}),Object(s.jsxs)("p",{children:["Your ",y()().format("MMMM")," month Bill has been generated for Current Month. Click here to",Object(s.jsx)(f.b,{to:"/settings/billing",className:"ms-50 text-decoration-underline",children:"Pay Now"})]})]})})})}),Object(s.jsx)(d,{allRoutes:n})]})]})}}}]);
//# sourceMappingURL=170.87c394c0.chunk.js.map