(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[72],{1495:function(e,t,c){"use strict";c.r(t);var s=c(2),r=c(5),n=c(8),a=c(10),i=c(12),l=c(184),o=c(23),j=c(25),b=c(21),d=c(742),u=c(744),m=c(745),O=c(191),f=c(6),x=c(7),p=c.n(x),h=c(14),v=(c(746),c(481),c(737),c(743),c(0)),g=c(13),N=c(735),y=c(736),S=c(3),w=Object(g.b)(),I=Object(g.a)(),B=Object(g.d)(),k=function(){var e,t=Object(o.g)().id,c=Object(b.c)((function(e){return e.service})),x=Object(v.useState)(!1),g=Object(i.a)(x,2),k=g[0],E=g[1],A=function(){return Object(S.jsx)(v.Fragment,{children:Object(S.jsx)(y.a,{})})},C={multiValue:function(e,t){return Object(a.a)(t),Object(n.a)(Object(n.a)({},e),{},{backgroundColor:"#7367f0"})}},P=Object(o.f)({}),T=Object(b.b)(),z=Object(v.useState)([]),R=Object(i.a)(z,2),F=R[0],V=R[1],q=Object(v.useState)([]),G=Object(i.a)(q,2),K=G[0],D=G[1],J=Object(v.useState)([]),L=Object(i.a)(J,2),$=L[0],M=L[1],H=Object(v.useState)(!0),Q=Object(i.a)(H,2),U=Q[0],W=Q[1],X=Object(v.useState)([]),Y=Object(i.a)(X,2),Z=Y[0],_=Y[1],ee=Object(v.useState)([]),te=Object(i.a)(ee,2),ce=te[0],se=te[1],re=u.d().shape({updatedBy:u.f().default(B),id:u.f().default(t),tat:u.c().default(0),categoryId:u.f().nullable(),categoryType:u.c().default(1),name:u.f().required("Please Enter Service Name"),organizationId:u.f().default(w),taxGroupId:u.f().nullable(),sellingPrice:u.f().nullable(),isTaxApplicable:u.b().default(!1),exemptionReasonId:u.f().nullable(),sacCode:u.f().nullable(),description:u.f().default("").nullable()}),ne=Object(d.f)({resolver:Object(m.a)(re),defaultValues:re.cast()}),ae=ne.handleSubmit,ie=ne.control,le=ne.reset,oe=ne.formState.errors,je=ne.setValue,be=ne.setError,de=function(){var e=Object(r.a)(Object(s.a)().mark((function e(){var c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(Object(O.h)(t));case 2:c=e.sent,D(c.payload);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(e){e.nontaxableflag?(W(!1),je("isTaxApplicable",!1)):(W(!0),je("isTaxApplicable",!0),je("exemptionReasonId",null))};Object(v.useEffect)((function(){if(Object.keys(K).length>0){le({name:K.name,organizationId:K.organizationid,sellingPrice:K.sellingprice,sacCode:K.saccode,taxGroupId:K.taxgroupid,description:K.description,tat:K.tat,isTaxApplicable:K.istaxapplicable||!1,exemptionReasonId:K.exemptionreasonid});var e=K.formslist.map((function(e){return Z.find((function(t){return t.id===e}))}));se(e),je("formslist",K.formslist),W(K.istaxapplicable)}}),[K]),Object(v.useEffect)((function(){f.a.post("/taxgroups/dropdown").then((function(e){var t=e.data;V(t.taxgroups)})),f.a.post("/exemptionreasons/dropdown").then((function(e){var t=e.data;M(t.exemptionreasons)})),f.a.post("/serviceforms/dropdown").then((function(e){var t=e.data;_(t.serviceforms)})),void 0!==t&&de()}),[]),Object(v.useEffect)((function(){null!==c.Errors&&(E(!1),Object.keys(c.Errors).map((function(e){be(e,{type:"custom",message:c.Errors[e][0]})})))}),[c.Errors]);var me=function(){var e=Object(r.a)(Object(s.a)().mark((function e(c){var r;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,T(Object(O.k)(c));case 3:r=e.sent,r.payload.service.id&&P("/services/view/".concat(t));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Oe=function(e){se(e);var t=Array.isArray(e)?e.map((function(e){return e.id})):[];je("formslist",t)},fe=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(S.jsxs)(h.ib,{className:"mb-0 mb-lg-1",children:[Object(S.jsx)(h.N,{sm:"3",size:"lg",className:p()("form-label ".concat(c?"required":"")),for:t,children:e}),Object(S.jsxs)(h.B,{sm:"9",children:[Object(S.jsx)(d.a,{id:t,name:t,control:ie,render:function(e){var c=e.field;return Object(S.jsx)(h.K,Object(n.a)({invalid:oe[t]&&!0},c))}}),oe[t]&&Object(S.jsx)(h.I,{children:oe[t].message})]})]})},xe=function(e,t,c){var s,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return Object(S.jsxs)(h.ib,{className:"mb-0 mb-lg-1",children:[Object(S.jsx)(h.N,{sm:"3",size:"lg",className:p()("form-label ".concat(r?"required":"")),for:t,children:e}),Object(S.jsxs)(h.B,{sm:"9",children:[Object(S.jsx)(d.a,{control:ie,name:t,id:t,render:function(e){var s=e.field,r=e.ref;return Object(S.jsx)(l.a,Object(n.a)(Object(n.a)({inputRef:r,className:p()("react-select",{"is-invalid":oe[t]})},s),{},{classNamePrefix:"select",options:c,value:c.find((function(e){return e.id===s.value})),onChange:function(e){s.onChange(e.id),"taxGroupId"===t&&ue(e)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),oe[t]&&Object(S.jsx)(h.I,{className:"text-danger",children:null===(s=oe[t])||void 0===s?void 0:s.message})]})]})};return Object(S.jsx)(N.a,{blocking:k,loader:Object(S.jsx)(A,{}),children:Object(S.jsxs)("form",{onSubmit:ae(me),children:[Object(S.jsxs)(h.l,{className:"invoice-preview-card",children:[Object(S.jsxs)(h.p,{children:[Object(S.jsx)(h.v,{children:"Edit Service"}),function(){var e=Object.keys(oe),t=[];return Array.isArray(e)&&e.forEach((function(e){var c;t.push(Object(S.jsxs)(h.I,{children:["$",null===(c=oe[e])||void 0===c?void 0:c.message]},e))})),t}()]}),Object(S.jsx)(h.m,{className:"pb-0",children:Object(S.jsxs)(h.ib,{lg:12,sm:12,children:[Object(S.jsxs)(h.B,{lg:6,sm:12,className:"border border-start-0 border-top-0 border-bottom-0",children:[Object(S.jsx)(h.ib,{children:Object(S.jsx)(h.B,{md:"12",className:"mb-0 mb-lg-1",children:fe("Service Name","name",!0)})}),Object(S.jsx)(h.ib,{children:Object(S.jsx)(h.B,{md:"12",className:"mb-0 mb-lg-1",children:fe("Professional Fee","sellingPrice",!1)})}),I.isgstregistered&&Object(S.jsxs)(v.Fragment,{children:[Object(S.jsx)(h.ib,{children:Object(S.jsx)(h.B,{md:"12",className:"mb-0 mb-lg-1",children:xe("Tax Rate","taxGroupId",F,!1)})}),!U&&Object(S.jsx)(h.ib,{children:Object(S.jsx)(h.B,{md:"12",className:"mb-0 mb-lg-1",children:xe("Exemption Reason","exemptionReasonId",$,!1)})}),Object(S.jsx)(h.ib,{children:Object(S.jsx)(h.B,{md:"12",className:"mb-0 mb-lg-1",children:fe("SAC Code","sacCode",!1)})})]})]}),Object(S.jsxs)(h.B,{lg:6,sm:12,children:[Object(S.jsxs)(h.ib,{className:"mb-2",children:[Object(S.jsx)(h.N,{sm:"3",size:"lg",className:p()("form-label"),for:"formslist",children:"Forms"}),Object(S.jsxs)(h.B,{sm:"9",children:[Object(S.jsx)(d.a,{control:ie,name:"formslist",id:"formslist",render:function(e){var t=e.field,c=e.ref;return Object(S.jsx)(l.a,Object(n.a)(Object(n.a)({inputRef:c,className:p()("react-select",{"is-invalid":oe.formslist})},t),{},{classNamePrefix:"select",options:Z,isMulti:!0,onChange:Oe,value:ce,getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id},styles:C}))}}),oe.formslist&&Object(S.jsx)(h.I,{className:"text-danger",children:null===(e=oe.formslist)||void 0===e?void 0:e.message})]})]}),Object(S.jsx)(h.ib,{children:Object(S.jsx)(h.B,{md:"12",className:"mb-0 mb-lg-1",children:fe("Turn Around Time(TAT)","tat",!1)})}),Object(S.jsx)(h.ib,{children:Object(S.jsx)(h.B,{md:"12",className:"mb-0 mb-lg-1",children:Object(S.jsxs)(h.ib,{className:"mb-0 mb-lg-1",children:[Object(S.jsx)(h.N,{sm:"3",size:"lg",className:"form-label",for:"description",children:"Description"}),Object(S.jsxs)(h.B,{sm:"9",children:[Object(S.jsx)(d.a,{id:"description",name:"description",control:ie,render:function(e){var t=e.field;return Object(S.jsx)(h.K,Object(n.a)({type:"textarea",invalid:oe.description&&!0},t))}}),oe.description&&Object(S.jsx)(h.I,{children:oe.description.message})]})]})})})]})]})})]}),Object(S.jsx)(h.l,{children:Object(S.jsx)(h.m,{children:Object(S.jsxs)("div",{className:"modal-footer border-0",children:[Object(S.jsx)(h.i,{color:"warning",outline:!0,tag:j.b,to:"/services/view/".concat(t),children:"Cancel"}),Object(S.jsx)(h.i,{color:"primary",type:"submit",children:"Save"})]})})})]})})},E=Object(g.b)(),A=Object(g.d)(),C=function(){var e=Object(o.g)().id,t=Object(v.useState)(!1),c=Object(i.a)(t,2),a=c[0],l=c[1],f=function(){return Object(S.jsx)(v.Fragment,{children:Object(S.jsx)(y.a,{})})},x=Object(o.f)({}),g=Object(b.b)(),w=Object(v.useState)([]),I=Object(i.a)(w,2),B=I[0],k=I[1],C=u.d().shape({updatedBy:u.f().default(A),id:u.f().default(e),categoryType:u.c().default(1),name:u.f().required("Please Enter Service Name"),organizationId:u.f().default(E),sellingPrice:u.f().nullable(),isTaxApplicable:u.b().default(!1),description:u.f().nullable()}),P=Object(d.f)({resolver:Object(m.a)(C),defaultValues:C.cast()}),T=P.handleSubmit,z=P.control,R=P.reset,F=P.formState.errors,V=function(){var t=Object(r.a)(Object(s.a)().mark((function t(){var c;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(Object(O.h)(e));case 2:c=t.sent,k(c.payload);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(v.useEffect)((function(){Object.keys(B).length>0&&R({name:B.name,organizationId:B.organizationid,sellingPrice:B.sellingprice,description:B.description,isTaxApplicable:B.istaxapplicable||!1})}),[B]),Object(v.useEffect)((function(){void 0!==e&&V()}),[]);var q=function(){var t=Object(r.a)(Object(s.a)().mark((function t(c){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(!0),t.next=3,g(Object(O.k)(c));case 3:return t.next=5,x("/services/view/".concat(e));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),G=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(S.jsxs)(h.ib,{className:"mb-1",children:[Object(S.jsx)(h.N,{sm:"3",size:"lg",className:p()("form-label ".concat(c?"required":"")),for:t,children:e}),Object(S.jsxs)(h.B,{sm:"9",children:[Object(S.jsx)(d.a,{id:t,name:t,control:z,render:function(e){var c=e.field;return Object(S.jsx)(h.K,Object(n.a)({invalid:F[t]&&!0},c))}}),F[t]&&Object(S.jsx)(h.I,{children:F[t].message})]})]})};return Object(S.jsx)(N.a,{blocking:a,loader:Object(S.jsx)(f,{}),children:Object(S.jsxs)("form",{onSubmit:T(q),children:[Object(S.jsxs)(h.l,{className:"invoice-preview-card",children:[Object(S.jsxs)(h.p,{children:[Object(S.jsx)(h.v,{children:"Edit Service"}),function(){var e=Object.keys(F),t=[];return Array.isArray(e)&&e.forEach((function(e){var c;t.push(Object(S.jsxs)(h.I,{children:["$",null===(c=F[e])||void 0===c?void 0:c.message]},e))})),t}()]}),Object(S.jsxs)(h.m,{className:"pb-0",children:[Object(S.jsx)(h.ib,{children:Object(S.jsx)(h.B,{md:"6",className:"mb-1",children:G("Service Name","name",!0)})}),Object(S.jsx)(h.ib,{children:Object(S.jsx)(h.B,{md:"6",className:"mb-1",children:G("Professional Fee","sellingPrice",!1)})}),Object(S.jsx)(h.ib,{children:Object(S.jsx)(h.B,{md:"6",className:"mb-1",children:Object(S.jsxs)(h.ib,{className:"mb-1",children:[Object(S.jsx)(h.N,{sm:"3",size:"lg",className:"form-label",for:"description",children:"Description"}),Object(S.jsxs)(h.B,{sm:"9",children:[Object(S.jsx)(d.a,{id:"description",name:"description",control:z,render:function(e){var t=e.field;return Object(S.jsx)(h.K,Object(n.a)({type:"textarea",invalid:F.description&&!0},t))}}),F.description&&Object(S.jsx)(h.I,{children:F.description.message})]})]})})})]})]}),Object(S.jsx)(h.l,{children:Object(S.jsx)(h.m,{children:Object(S.jsxs)("div",{className:"modal-footer border-0",children:[Object(S.jsx)(h.i,{color:"warning",outline:!0,tag:j.b,to:"/services/view/".concat(e),children:"Cancel"}),Object(S.jsx)(h.i,{color:"primary",type:"submit",children:"Save"})]})})})]})})},P=Object(g.a)();t.default=function(){return Object(S.jsx)("div",{className:"invoice-add-wrapper",children:Object(S.jsx)(h.ib,{className:"invoice-add",children:Object(S.jsx)(h.B,{xl:12,md:12,sm:12,children:"IN"===P.countryshortname?Object(S.jsx)(k,{}):Object(S.jsx)(C,{})})})})}},735:function(e,t,c){"use strict";var s=c(8),r=c(27),n=c(0),a=c(7),i=c.n(a),l=c(14),o=(c(738),c(3)),j=function(e){var t,c=e.children,a=e.blocking,l=e.loader,j=e.className,b=e.tag,d=e.overlayColor,u=b;return Object(o.jsxs)(u,{className:i()("ui-loader",(t={},Object(r.a)(t,j,j),Object(r.a)(t,"show",a),t)),children:[c,a?Object(o.jsxs)(n.Fragment,{children:[Object(o.jsx)("div",Object(s.a)({className:"overlay"},a&&d?{style:{backgroundColor:d}}:{})),Object(o.jsx)("div",{className:"loader",children:l})]}):null]})};t.a=j,j.defaultProps={tag:"div",blocking:!1,loader:Object(o.jsx)(l.jb,{color:"primary"})}},736:function(e,t,c){"use strict";var s=c(3);t.a=function(){return Object(s.jsx)("div",{className:"fallback-spinner",children:Object(s.jsxs)("div",{className:"loading",children:[Object(s.jsx)("div",{className:"effect-1 effects"}),Object(s.jsx)("div",{className:"effect-2 effects"}),Object(s.jsx)("div",{className:"effect-3 effects"})]})})}},737:function(e,t,c){},738:function(e,t,c){},743:function(e,t,c){},746:function(e,t,c){}}]);
//# sourceMappingURL=72.02bdcfad.chunk.js.map