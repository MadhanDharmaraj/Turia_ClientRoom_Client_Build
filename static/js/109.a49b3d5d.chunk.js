(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[109],{1326:function(e,s,a){"use strict";a.r(s);var r=a(8),c=a(3),t=a(5),n=a(21),o=a(24),i=a(22),l=a(262),d=a(724),m=a(6),j=a(708),b=a(705),u=a(709),h=a(13),p=(a(715),a(183)),f=a(2);s.default=function(){var e=Object(n.e)().search,s=new URLSearchParams(e).get("token"),a=new URLSearchParams(e).get("email"),O=Object(n.f)(),w=j.d().shape({email:j.f().email().default(a),token:j.f().default(s),password:j.f().required("Password is Required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Password must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),confirmPassword:j.f().required("Confirm Password is Required").oneOf([j.e("password"),null],"Passwords must match")}),x=Object(b.f)({resolver:Object(u.a)(w)}),N=x.control,v=x.handleSubmit,g=x.formState.errors,P=x.setError,S=function(){var e=Object(t.a)(Object(c.a)().mark((function e(s){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m.a.post("/passwordresets/resetpassword",s).then((function(){p.b.success("Password Reset Successfully...",{position:"bottom-right"}),O("/login")})).catch((function(e){console.log(e),P(e)}));case 1:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"auth-wrapper auth-basic px-2",children:Object(f.jsx)("div",{className:"auth-inner my-2",children:Object(f.jsx)(h.l,{className:"mb-0",children:Object(f.jsxs)(h.m,{children:[Object(f.jsxs)(o.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:[Object(f.jsx)("img",{src:i.a.app.appLogoImage,alt:"Turia Logo",width:45,height:35}),Object(f.jsx)("h1",{className:"brand-text text-primary",children:"Turia"})]}),Object(f.jsx)(h.v,{tag:"h4",className:"mb-1",children:"Reset Password \ud83d\udd12"}),Object(f.jsx)(h.u,{className:"mb-2",children:"Your new password must be different from previously used passwords"}),Object(f.jsxs)(h.H,{className:"auth-reset-password-form mt-2",onSubmit:v(S),children:[Object(f.jsxs)("div",{className:"mb-1",children:[Object(f.jsx)(h.N,{className:"form-label",for:"new-password",children:"New Password"}),Object(f.jsx)(b.a,{id:"password",name:"password",control:N,render:function(e){var s=e.field;return Object(f.jsx)(d.a,Object(r.a)({htmlFor:"password",className:"input-group-merge",invalid:g.password&&!0},s))}}),g.password&&Object(f.jsx)(h.I,{children:g.password.message})]}),Object(f.jsxs)("div",{className:"mb-1",children:[Object(f.jsx)(h.N,{className:"form-label",for:"confirm-password",children:"Confirm Password"}),Object(f.jsx)(b.a,{control:N,id:"confirmPassword",name:"confirmPassword",render:function(e){var s=e.field;return Object(f.jsx)(d.a,Object(r.a)({htmlFor:"confirmPassword",className:"input-group-merge",invalid:g.confirmPassword&&!0},s))}}),g.confirmPassword&&Object(f.jsx)(h.I,{children:g.confirmPassword.message})]}),Object(f.jsx)(h.i,{color:"primary",block:!0,children:"Set New Password"})]}),Object(f.jsx)("p",{className:"text-center mt-2",children:Object(f.jsxs)(o.b,{to:"/pages/login-basic",children:[Object(f.jsx)(l.a,{className:"rotate-rtl me-25",size:14}),Object(f.jsx)("span",{className:"align-middle",children:"Back to login"})]})})]})})})})}},715:function(e,s,a){},724:function(e,s,a){"use strict";var r=a(8),c=a(23),t=a(9),n=a(39),o=a(0),i=a(7),l=a.n(i),d=a(288),m=a(287),j=a(13),b=a(2),u=["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName","invalid"],h=Object(o.forwardRef)((function(e,s){var a,i=e.label,h=e.hideIcon,p=e.showIcon,f=e.visible,O=e.className,w=e.htmlFor,x=e.placeholder,N=e.iconSize,v=e.inputClassName,g=e.invalid,P=Object(n.a)(e,u),S=Object(o.useState)(f),k=Object(t.a)(S,2),y=k[0],C=k[1];return Object(b.jsxs)(o.Fragment,{children:[i?Object(b.jsx)(j.N,{className:"form-label",for:w,children:i}):null,Object(b.jsxs)(j.L,{className:l()((a={},Object(c.a)(a,O,O),Object(c.a)(a,"is-invalid",g),a)),children:[Object(b.jsx)(j.K,Object(r.a)(Object(r.a)({ref:s,invalid:g,type:!1===y?"password":"text",placeholder:x||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:l()(Object(c.a)({},v,v))},i&&w?{id:w}:{}),P)),Object(b.jsx)(j.M,{className:"cursor-pointer",onClick:function(){return C(!y)},children:function(){var e=N||14;return!1===y?h||Object(b.jsx)(d.a,{size:e}):p||Object(b.jsx)(m.a,{size:e})}()})]})]})}));s.a=h,h.defaultProps={visible:!1}}}]);
//# sourceMappingURL=109.a49b3d5d.chunk.js.map