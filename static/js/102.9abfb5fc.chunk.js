(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[102],{1318:function(e,t,a){"use strict";a.r(t);var r=a(8),s=a(3),n=a(5),c=a(10),i=a(22),o=a(24),l=a(6),d=a(723),j=a(712),b=a(713),u=a(11),m=a(107),f=(a(716),a(0)),O=a(707),p=a(20),h=a(2),x=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;t.default=function(){var e,t=Object(i.g)().uniquekey,a=Object(f.useState)({}),v=Object(c.a)(a,2),g=v[0],w=v[1],N=Object(p.b)(),y=Object(i.f)({}),P=Object(p.c)((function(e){return e.register})),C=j.d().shape({uniquekey:j.f().default(t),name:j.f(),email:j.f().email().required(),password:j.f().required("Password").matches(x,"Password must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),confirmPassword:j.f().required("Confirm Password is Required").oneOf([j.e("password"),null],"Passwords must match")}),k=Object(O.f)({defaultValues:C.cast(),resolver:Object(b.a)(C)}),F=k.control,E=k.handleSubmit,L=k.formState.errors,I=k.setValue,q=function(){var e=Object(n.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(Object(m.c)(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(n.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(Object(m.f)(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.useEffect)(Object(n.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P.registerSuccess&&y("/login");case 1:case"end":return e.stop()}}),e)}))),[P.registerSuccess,P.activeOrganization]),Object(f.useEffect)(Object(n.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==P.loginError&&(L.email=P.loginError.email);case 1:case"end":return e.stop()}}),e)}))),[N,P.loginError]),Object(f.useEffect)(Object(n.a)(Object(s.a)().mark((function e(){var t,a;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===P.loginUser){e.next=16;break}return t={},a="".concat(g.firstname," ").concat(g.lastname),t.name=a,t.email=g.email,t.contact=g.contactno,t.createBy=P.loginUser.id,t.userId=P.loginUser.id,t.email=g.email,t.departmentId=g.designationid,t.designationId=g.departmentid,t.userTypeId=g.usertypeid,t.organizationId=g.organizationid,t.roleId=g.roleid,e.next=16,q(t);case 16:case"end":return e.stop()}}),e)}))),[P.loginUser]),Object(f.useEffect)((function(){t&&l.a.post("/invitations/getinvitation",{uniquekey:t}).then((function(e){w(e.data.invitation),I("email",e.data.invitation.email),I("name","".concat(e.data.invitation.firstname," ").concat(e.data.invitation.lastname))})).catch((function(e){console.log(e)}))}),[t]),Object(h.jsx)("div",{className:"auth-wrapper auth-basic px-2",children:Object(h.jsx)("div",{className:"auth-inner my-2",children:Object(h.jsx)(u.l,{className:"mb-0",children:Object(h.jsxs)(u.m,{children:[Object(h.jsxs)(o.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:[Object(h.jsxs)("svg",{viewBox:"0 0 139 95",version:"1.1",height:"28",children:[Object(h.jsxs)("defs",{children:[Object(h.jsxs)("linearGradient",{x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%",id:"linearGradient-1",children:[Object(h.jsx)("stop",{stopColor:"#000000",offset:"0%"}),Object(h.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]}),Object(h.jsxs)("linearGradient",{x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%",id:"linearGradient-2",children:[Object(h.jsx)("stop",{stopColor:"#EEEEEE",stopOpacity:"0",offset:"0%"}),Object(h.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]})]}),Object(h.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(h.jsx)("g",{id:"Artboard",transform:"translate(-400.000000, -178.000000)",children:Object(h.jsxs)("g",{id:"Group",transform:"translate(400.000000, 178.000000)",children:[Object(h.jsx)("path",{d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",id:"Path",className:"text-primary",style:{fill:"currentColor"}}),Object(h.jsx)("path",{d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",id:"Path",fill:"url(#linearGradient-1)",opacity:"0.2"}),Object(h.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}),Object(h.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}),Object(h.jsx)("polygon",{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"})]})})})]}),Object(h.jsx)("h2",{className:"brand-text text-primary ms-1",children:"Turia"})]}),Object(h.jsx)(u.v,{tag:"h4",className:"mb-1",children:"Welcome to Turia! \ud83d\udc4b"}),Object(h.jsx)(u.u,{className:"mb-2",children:"Please sign-in to your account and start the adventure"}),Object(h.jsxs)(u.H,{className:"auth-login-form mt-2",onSubmit:E(S),children:[Object(h.jsxs)("div",{className:"mb-1",children:[Object(h.jsx)(u.N,{className:"form-label required",for:"login-email",children:"Email"}),Object(h.jsx)(O.a,{id:"loginEmail",name:"email",control:F,render:function(e){var t=e.field;return Object(h.jsx)(u.K,Object(r.a)({autoFocus:!0,type:"email",disabled:!0,placeholder:"john@example.com",invalid:L.loginEmail&&!0},t))}})]}),Object(h.jsxs)("div",{className:"mb-1",children:[Object(h.jsx)("div",{className:"d-flex justify-content-between",children:Object(h.jsx)(u.N,{className:"form-label required",for:"login-password",children:"Password"})}),Object(h.jsx)(O.a,{id:"password",name:"password",control:F,render:function(e){var t=e.field;return Object(h.jsx)(d.a,Object(r.a)({className:"input-group-merge",invalid:L.password&&!0},t))}}),L.password&&Object(h.jsx)(u.I,{children:null===(e=L.password)||void 0===e?void 0:e.message})]}),Object(h.jsxs)("div",{className:"mb-1",children:[Object(h.jsx)("div",{className:"d-flex justify-content-between",children:Object(h.jsx)(u.N,{className:"form-label required",for:"login-password",children:"Confirm Password"})}),Object(h.jsx)(O.a,{control:F,id:"confirmPassword",name:"confirmPassword",render:function(e){var t=e.field;return Object(h.jsx)(d.a,Object(r.a)({htmlFor:"confirmPassword",className:"input-group-merge",invalid:L.confirmPassword&&!0},t))}}),L.confirmPassword&&Object(h.jsx)(u.I,{children:L.confirmPassword.message})]}),Object(h.jsxs)("div",{className:"form-check mb-1",children:[Object(h.jsx)(u.K,{type:"checkbox",id:"remember-me"}),Object(h.jsx)(u.N,{className:"form-check-label",for:"remember-me",children:"Remember Me"})]}),Object(h.jsx)(u.i,{color:"primary",block:!0,children:"Sign in"})]})]})})})})}},716:function(e,t,a){},723:function(e,t,a){"use strict";var r=a(8),s=a(25),n=a(10),c=a(40),i=a(0),o=a(7),l=a.n(o),d=a(288),j=a(287),b=a(11),u=a(2),m=["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName","invalid"],f=Object(i.forwardRef)((function(e,t){var a,o=e.label,f=e.hideIcon,O=e.showIcon,p=e.visible,h=e.className,x=e.htmlFor,v=e.placeholder,g=e.iconSize,w=e.inputClassName,N=e.invalid,y=Object(c.a)(e,m),P=Object(i.useState)(p),C=Object(n.a)(P,2),k=C[0],F=C[1];return Object(u.jsxs)(i.Fragment,{children:[o?Object(u.jsx)(b.N,{className:"form-label",for:x,children:o}):null,Object(u.jsxs)(b.L,{className:l()((a={},Object(s.a)(a,h,h),Object(s.a)(a,"is-invalid",N),a)),children:[Object(u.jsx)(b.K,Object(r.a)(Object(r.a)({ref:t,invalid:N,type:!1===k?"password":"text",placeholder:v||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:l()(Object(s.a)({},w,w))},o&&x?{id:x}:{}),y)),Object(u.jsx)(b.M,{className:"cursor-pointer",onClick:function(){return F(!k)},children:function(){var e=g||14;return!1===k?f||Object(u.jsx)(d.a,{size:e}):O||Object(u.jsx)(j.a,{size:e})}()})]})]})}));t.a=f,f.defaultProps={visible:!1}}}]);
//# sourceMappingURL=102.9abfb5fc.chunk.js.map