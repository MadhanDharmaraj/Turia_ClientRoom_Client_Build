(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[48],{1419:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(5),s=a(10),i=a(0),c=a(135),l=a(69),o=a(217),u=a(21),p=a(705),d=a.n(p),f=a(700),b=a(701),m=a(184),g=a.n(m),h=a(185),j=a.n(h),v=a(13),x=(a(446),a(42)),O=a.n(x),y=a(323),N=a(280),C=a(2),k=function(e){var t=e.handlePerPage,a=e.rowsPerPage;return Object(C.jsxs)("div",{className:"d-flex flex-wrap flex-md-nowrap p-2 p-md-1 my-75",children:[Object(C.jsx)(v.B,{className:"col-12 col-md-6 d-flex align-items-center px-1",children:Object(C.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(C.jsx)("label",{htmlFor:"rows-per-page",children:"Show"}),Object(C.jsxs)(v.K,{className:"mx-50",type:"select",id:"rows-per-page",value:a,onChange:t,style:{width:"5rem"},children:[Object(C.jsx)("option",{value:"10",children:"10"}),Object(C.jsx)("option",{value:"25",children:"25"}),Object(C.jsx)("option",{value:"50",children:"50"})]}),Object(C.jsx)("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),Object(C.jsx)(v.B,{className:"col-12 col-md-6 d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:Object(C.jsx)(v.B,{className:"d-flex justify-content-start justify-content-lg-end align-items-center table-header-actions col-12 col-md-2",children:Object(C.jsxs)(v.wb,{className:"ms-1",children:[Object(C.jsx)(v.G,{color:"secondary",caret:!0,outline:!0,className:"px-1",children:Object(C.jsx)(y.a,{className:"font-small-4"})}),Object(C.jsx)(v.F,{children:Object(C.jsx)(l.b,{I:"write",a:"digital-signature",children:Object(C.jsxs)(v.E,{className:"w-100",onClick:function(){},children:[Object(C.jsx)(N.a,{className:"font-small-4 me-50"}),Object(C.jsx)("span",{className:"align-middle",children:"Export"})]})})})]})})})]})},P=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.digitalsignature})),a=Object(i.useState)("desc"),l=Object(s.a)(a,1)[0],p=Object(i.useState)(""),m=Object(s.a)(p,2),h=m[0],x=m[1],y=Object(i.useState)(1),N=Object(s.a)(y,2),P=N[0],L=N[1],w=Object(i.useState)("createdon"),E=Object(s.a)(w,1)[0],S=Object(i.useState)(25),R=Object(s.a)(S,2),D=R[0],_=R[1],B=Object(i.useState)({id:"",name:"Select Status"}),T=Object(s.a)(B,2),A=T[0],q=T[1],I=Object(i.useState)({id:"",name:"All"}),H=Object(s.a)(I,1)[0],M=["","Office","With Client"],V=["","light-primary","light-success","light-danger"],F=["","Active","Inactive","Expired"],Y=function(e){return Object(C.jsx)(c.a,{initials:!0,className:"me-1",color:"light-primary",content:e.name||""})},G=function(e){return 13===e.length?O()(e,"x").format("MMM DD, YYYY"):O.a.unix(e).format("MMM DD, YYYY")},J=Object(i.useState)(!1),K=Object(s.a)(J,2),W=K[0],z=K[1],U=function(){return Object(C.jsx)(i.Fragment,{children:Object(C.jsx)(b.a,{})})};Object(i.useEffect)(Object(n.a)(Object(r.a)().mark((function t(){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return z(!0),t.next=3,e(Object(o.b)({sort:l,sortColumn:E,q:h,page:P,perPage:D,status:A.id,location:H.id}));case 3:z(!1);case 4:case"end":return t.stop()}}),t)}))),[e]);var Q=function(){var t=Object(n.a)(Object(r.a)().mark((function t(a){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return z(!0),t.next=3,e(Object(o.b)({sort:l,sortColumn:E,q:h,perPage:D,page:a.selected+1,status:A.id,location:H.id}));case 3:z(!1),L(a.selected+1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),X=function(){var t=Object(n.a)(Object(r.a)().mark((function t(a){var n;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=parseInt(a.currentTarget.value),z(!0),t.next=4,e(Object(o.b)({sort:l,sortColumn:E,q:h,perPage:n,page:P,status:A.id,location:H.id}));case 4:_(n),z(!1);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Z=function(){var t=Object(n.a)(Object(r.a)().mark((function t(a){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x(a),z(!0),t.next=4,e(Object(o.b)({sort:l,q:a,sortColumn:E,page:P,perPage:D,status:A.id,location:H.id}));case 4:z(!1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),$=function(){var t=Object(n.a)(Object(r.a)().mark((function t(a){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return q(a),z(!0),t.next=4,e(Object(o.b)({sort:l,q:h,sortColumn:E,page:P,perPage:D,status:a.id,location:H.id}));case 4:z(!1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ee=function(){var e=Number(Math.ceil(t.total/D));return Object(C.jsx)(d.a,{previousLabel:"",nextLabel:"",pageCount:e||1,activeClassName:"active",forcePage:0!==P?P-1:0,onPageChange:function(e){return Q(e)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})};j()(g.a);return Object(C.jsx)(i.Fragment,{children:Object(C.jsx)(f.a,{blocking:W,loader:Object(C.jsx)(U,{}),children:Object(C.jsx)(v.l,{className:"overflow-hidden",children:Object(C.jsxs)(v.ib,{children:[Object(C.jsx)(k,{searchTerm:h,rowsPerPage:D,handleFilter:Z,handlePerPage:X,statusArrOptions:[{id:0,name:"Select All"},{id:1,name:"Active"},{id:2,name:"Inactive"},{id:3,name:"Expired"}],currentStatus:A,handleStatus:$}),Object(C.jsxs)(v.mb,{responsive:!0,className:"table tabel-bordered table-hover",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"Id"}),Object(C.jsx)("th",{children:"Name"}),Object(C.jsx)("th",{children:"Contact"}),Object(C.jsx)("th",{children:"Issued Date"}),Object(C.jsx)("th",{children:"Expiry Date"}),Object(C.jsx)("th",{children:"Location"}),Object(C.jsx)("th",{children:"Password"}),Object(C.jsx)("th",{children:"Status"})]})}),Object(C.jsx)("tbody",{children:function(){var e={status:A.id,q:h},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.data.length>0?t.data:0===t.data.length&&a?[]:t.allData.slice(0,D)}().map((function(e,t){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:Object(C.jsx)("div",{className:"d-flex justify-content-left align-items-center",children:Object(C.jsx)("span",{className:"text-capitalize fw-bolder font-small-3",children:e.uniqueidentity})})}),Object(C.jsx)("td",{children:Object(C.jsxs)("div",{className:"d-flex justify-content-left align-items-center font-small-5",children:[Y(e),Object(C.jsxs)("div",{className:"d-flex flex-column",children:[Object(C.jsx)("span",{className:"fw-bolder font-small-5",children:e.name}),Object(C.jsx)("small",{className:"text-truncate mb-0 font-small-3",children:e.email})]})]})}),Object(C.jsx)("td",{children:e.contact}),Object(C.jsx)("td",{className:"font-small-3",children:G(e.issueddate)}),Object(C.jsx)("td",{className:"font-small-3",children:G(e.expirydate)}),Object(C.jsx)("td",{children:Object(C.jsx)(v.f,{className:"text-capitalize",color:V[e.dsclocation],pill:!0,children:M[e.dsclocation]})}),Object(C.jsx)("td",{children:e.password}),Object(C.jsx)("td",{children:Object(C.jsx)(v.f,{className:"text-capitalize",color:V[e.status],pill:!0,children:F[e.status]})})]},t)}))})]}),Object(C.jsx)(ee,{})]})})})})};a(721),t.default=function(){return Object(C.jsx)("div",{className:"app-user-list",children:Object(C.jsx)(P,{})})}},700:function(e,t,a){"use strict";var r=a(8),n=a(24),s=a(0),i=a(7),c=a.n(i),l=a(13),o=(a(702),a(2)),u=function(e){var t,a=e.children,i=e.blocking,l=e.loader,u=e.className,p=e.tag,d=e.overlayColor,f=p;return Object(o.jsxs)(f,{className:c()("ui-loader",(t={},Object(n.a)(t,u,u),Object(n.a)(t,"show",i),t)),children:[a,i?Object(o.jsxs)(s.Fragment,{children:[Object(o.jsx)("div",Object(r.a)({className:"overlay"},i&&d?{style:{backgroundColor:d}}:{})),Object(o.jsx)("div",{className:"loader",children:l})]}):null]})};t.a=u,u.defaultProps={tag:"div",blocking:!1,loader:Object(o.jsx)(l.jb,{color:"primary"})}},701:function(e,t,a){"use strict";var r=a(2);t.a=function(){return Object(r.jsx)("div",{className:"fallback-spinner",children:Object(r.jsxs)("div",{className:"loading",children:[Object(r.jsx)("div",{className:"effect-1 effects"}),Object(r.jsx)("div",{className:"effect-2 effects"}),Object(r.jsx)("div",{className:"effect-3 effects"})]})})}},702:function(e,t,a){},705:function(e,t,a){(function(r){var n;e.exports=(n=a(0),function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=n},function(e,t,a){"use strict";var r=a(3);function n(){}function s(){}s.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,s,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:n};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,a,r){"use strict";r.r(a);var n=r(1),s=r.n(n),i=r(0),c=r.n(i);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var o=function(e){var t=e.pageClassName,a=e.pageLinkClassName,r=e.page,n=e.selected,i=e.activeClassName,c=e.activeLinkClassName,o=e.getEventListener,u=e.pageSelectedHandler,p=e.href,d=e.extraAriaContext,f=e.ariaLabel||"Page "+r+(d?" "+d:""),b=null;return n&&(b="page",f=e.ariaLabel||"Page "+r+" is your current page",t=void 0!==t?t+" "+i:i,void 0!==a?void 0!==c&&(a=a+" "+c):a=c),s.a.createElement("li",{className:t},s.a.createElement("a",l({role:"button",className:a,href:p,tabIndex:"0","aria-label":f,"aria-current":b,onKeyPress:u},o(u)),r))};o.propTypes={pageSelectedHandler:c.a.func.isRequired,selected:c.a.bool.isRequired,pageClassName:c.a.string,pageLinkClassName:c.a.string,activeClassName:c.a.string,activeLinkClassName:c.a.string,extraAriaContext:c.a.string,href:c.a.string,ariaLabel:c.a.string,page:c.a.number.isRequired,getEventListener:c.a.func.isRequired};var u=o;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var d=function(e){var t=e.breakLabel,a=e.breakClassName,r=e.breakLinkClassName,n=e.breakHandler,i=e.getEventListener,c=a||"break";return s.a.createElement("li",{className:c},s.a.createElement("a",p({className:r,role:"button",tabIndex:"0",onKeyPress:n},i(n)),t))};d.propTypes={breakLabel:c.a.oneOfType([c.a.string,c.a.node]),breakClassName:c.a.string,breakLinkClassName:c.a.string,breakHandler:c.a.func.isRequired,getEventListener:c.a.func.isRequired};var f=d;function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function g(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=O(e);if(t){var n=O(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return v(this,a)}}function v(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(i,e);var t,a,r,n=j(i);function i(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),y(x(t=n.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),y(x(t),"handleNextPage",(function(e){var a=t.state.selected,r=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<r-1&&t.handlePageSelected(a+1,e)})),y(x(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),y(x(t),"getEventListener",(function(e){return y({},t.props.eventListener,e)})),y(x(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var r=t.state.selected;t.handlePageSelected(r<e?t.getForwardJump():t.getBackwardJump(),a)})),y(x(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),y(x(t),"pagination",(function(){var e=[],a=t.props,r=a.pageRangeDisplayed,n=a.pageCount,i=a.marginPagesDisplayed,c=a.breakLabel,l=a.breakClassName,o=a.breakLinkClassName,u=t.state.selected;if(n<=r)for(var p=0;p<n;p++)e.push(t.getPageElement(p));else{var d,b,m,g=r/2,h=r-g;u>n-r/2?g=r-(h=n-u):u<r/2&&(h=r-(g=u));var j=function(e){return t.getPageElement(e)};for(d=0;d<n;d++)(b=d+1)<=i||b>n-i||d>=u-g&&d<=u+h?e.push(j(d)):c&&e[e.length-1]!==m&&(m=s.a.createElement(f,{key:d,breakLabel:c,breakClassName:l,breakLinkClassName:o,breakHandler:t.handleBreakClick.bind(null,d),getEventListener:t.getEventListener}),e.push(m))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=i,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,r=e.extraAriaContext;void 0===t||a||this.callCallback(t),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,r=e+t.pageRangeDisplayed;return r>=a?a-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,r=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<r)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,r=a.pageClassName,n=a.pageLinkClassName,i=a.activeClassName,c=a.activeLinkClassName,l=a.extraAriaContext;return s.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:r,pageLinkClassName:n,activeClassName:i,activeLinkClassName:c,extraAriaContext:l,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,r=e.containerClassName,n=e.previousLabel,i=e.previousClassName,c=e.previousLinkClassName,l=e.previousAriaLabel,o=e.prevRel,u=e.nextLabel,p=e.nextClassName,d=e.nextLinkClassName,f=e.nextAriaLabel,b=e.nextRel,g=this.state.selected,h=i+(0===g?" ".concat(t):""),j=p+(g===a-1?" ".concat(t):""),v=0===g?"true":"false",x=g===a-1?"true":"false";return s.a.createElement("ul",{className:r},s.a.createElement("li",{className:h},s.a.createElement("a",m({className:c,href:this.hrefBuilder(g-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":v,"aria-label":l,rel:o},this.getEventListener(this.handlePreviousPage)),n)),this.pagination(),s.a.createElement("li",{className:j},s.a.createElement("a",m({className:d,href:this.hrefBuilder(g+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":x,"aria-label":f,rel:b},this.getEventListener(this.handleNextPage)),u)))}}])&&g(t.prototype,a),r&&g(t,r),i}(n.Component);y(N,"propTypes",{pageCount:c.a.number.isRequired,pageRangeDisplayed:c.a.number.isRequired,marginPagesDisplayed:c.a.number.isRequired,previousLabel:c.a.node,previousAriaLabel:c.a.string,prevRel:c.a.string,nextLabel:c.a.node,nextAriaLabel:c.a.string,nextRel:c.a.string,breakLabel:c.a.oneOfType([c.a.string,c.a.node]),hrefBuilder:c.a.func,onPageChange:c.a.func,initialPage:c.a.number,forcePage:c.a.number,disableInitialCallback:c.a.bool,containerClassName:c.a.string,pageClassName:c.a.string,pageLinkClassName:c.a.string,activeClassName:c.a.string,activeLinkClassName:c.a.string,previousClassName:c.a.string,nextClassName:c.a.string,previousLinkClassName:c.a.string,nextLinkClassName:c.a.string,disabledClassName:c.a.string,breakClassName:c.a.string,breakLinkClassName:c.a.string,extraAriaContext:c.a.string,ariaLabelBuilder:c.a.func,eventListener:c.a.string}),y(N,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),a.default=N,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,a(36))},721:function(e,t,a){}}]);
//# sourceMappingURL=48.c5f9c6ab.chunk.js.map