/*! For license information please see 101.8eeb9e5e.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[101],{1203:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1204),c=r.__importStar(n(0)),i=function(e){function t(t){var n=e.call(this,t)||this;return n.outerRef=null,n.handleRef=function(e){if(n.outerRef=e,n.props.forwardedRef)if("function"===typeof n.props.forwardedRef)n.props.forwardedRef(e);else{if("object"!==typeof n.props.forwardedRef)throw new Error("Invalid forwardedRef "+n.props.forwardedRef);n.props.forwardedRef.current=e}},n.handleTransitionEnd=function(e){e.target===n.outerRef&&"height"===e.propertyName&&(n.state.childrenLeaving?n.setState({children:null,childrenLeaving:!1},(function(){return n.endTransition()})):n.endTransition())},n.state={children:t.children,childrenLeaving:!1},n}return r.__extends(t,e),t.prototype.componentDidMount=function(){this.outerRef&&(this.props.closed||!this.props.children?(this.outerRef.classList.add("closed"),this.outerRef.style.height="0px"):this.props.transitionOnAppear?this.startTransition("0px"):this.outerRef.style.height="auto")},t.prototype.getSnapshotBeforeUpdate=function(){return this.outerRef?this.outerRef.getBoundingClientRect().height+"px":null},t.getDerivedStateFromProps=function(e,t){return e.children?{children:e.children,childrenLeaving:!1}:t.children?{children:t.children,childrenLeaving:!0}:null},t.prototype.componentDidUpdate=function(e,t,n){this.outerRef&&this.startTransition(n)},t.prototype.startTransition=function(e){var t="0px";this.props.closed||this.state.childrenLeaving||!this.state.children||(this.outerRef.classList.remove("closed"),this.outerRef.style.height="auto",t=getComputedStyle(this.outerRef).height),parseFloat(t).toFixed(2)!==parseFloat(e).toFixed(2)&&(this.outerRef.classList.add("transitioning"),this.outerRef.style.height=e,this.outerRef.offsetHeight,this.outerRef.style.transitionProperty="height",this.outerRef.style.height=t)},t.prototype.endTransition=function(){this.outerRef.classList.remove("transitioning"),this.outerRef.style.transitionProperty="none",this.outerRef.style.height=this.props.closed?"0px":"auto",!this.props.closed&&this.state.children||this.outerRef.classList.add("closed")},t.prototype.render=function(){var e=this.props,t=e.as,n=void 0===t?"div":t,i=(e.children,e.className),o=(e.closed,e.transitionOnAppear,e.forwardedRef,r.__rest(e,["as","children","className","closed","transitionOnAppear","forwardedRef"])),a=i?"react-slidedown "+i:"react-slidedown";return c.default.createElement(n,r.__assign({ref:this.handleRef,className:a,onTransitionEnd:this.handleTransitionEnd},o),this.state.children)},t.defaultProps={transitionOnAppear:!0,closed:!1},t}(c.Component);t.SlideDown=c.forwardRef((function(e,t){return c.default.createElement(i,r.__assign({},e,{forwardedRef:t}))})),t.default=t.SlideDown},1204:function(e,t,n){"use strict";n.r(t),n.d(t,"__extends",(function(){return c})),n.d(t,"__assign",(function(){return i})),n.d(t,"__rest",(function(){return o})),n.d(t,"__decorate",(function(){return a})),n.d(t,"__param",(function(){return s})),n.d(t,"__metadata",(function(){return l})),n.d(t,"__awaiter",(function(){return d})),n.d(t,"__generator",(function(){return u})),n.d(t,"__createBinding",(function(){return f})),n.d(t,"__exportStar",(function(){return h})),n.d(t,"__values",(function(){return m})),n.d(t,"__read",(function(){return j})),n.d(t,"__spread",(function(){return b})),n.d(t,"__spreadArrays",(function(){return p})),n.d(t,"__await",(function(){return O})),n.d(t,"__asyncGenerator",(function(){return x})),n.d(t,"__asyncDelegator",(function(){return y})),n.d(t,"__asyncValues",(function(){return v})),n.d(t,"__makeTemplateObject",(function(){return g})),n.d(t,"__importStar",(function(){return w})),n.d(t,"__importDefault",(function(){return _})),n.d(t,"__classPrivateFieldGet",(function(){return N})),n.d(t,"__classPrivateFieldSet",(function(){return R}));var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)};function c(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e},i.apply(this,arguments)};function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n}function a(e,t,n,r){var c,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(c=e[a])&&(o=(i<3?c(o):i>3?c(t,n,o):c(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o}function s(e,t){return function(n,r){t(n,r,e)}}function l(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)}function d(e,t,n,r){return new(n||(n=Promise))((function(c,i){function o(e){try{s(r.next(e))}catch(t){i(t)}}function a(e){try{s(r.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}s((r=r.apply(e,t||[])).next())}))}function u(e,t){var n,r,c,i,o={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(c=2&i[0]?r.return:i[0]?r.throw||((c=r.return)&&c.call(r),0):r.next)&&!(c=c.call(r,i[1])).done)return c;switch(r=0,c&&(i=[2&i[0],c.value]),i[0]){case 0:case 1:c=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(c=(c=o.trys).length>0&&c[c.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!c||i[1]>c[0]&&i[1]<c[3])){o.label=i[1];break}if(6===i[0]&&o.label<c[1]){o.label=c[1],c=i;break}if(c&&o.label<c[2]){o.label=c[2],o.ops.push(i);break}c[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(a){i=[6,a],r=0}finally{n=c=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}function f(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}function h(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||(t[n]=e[n])}function m(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function j(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,c,i=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)o.push(r.value)}catch(a){c={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(c)throw c.error}}return o}function b(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(j(arguments[t]));return e}function p(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),c=0;for(t=0;t<n;t++)for(var i=arguments[t],o=0,a=i.length;o<a;o++,c++)r[c]=i[o];return r}function O(e){return this instanceof O?(this.v=e,this):new O(e)}function x(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,c=n.apply(e,t||[]),i=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(e){c[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||a(e,t)}))})}function a(e,t){try{(n=c[e](t)).value instanceof O?Promise.resolve(n.value.v).then(s,l):d(i[0][2],n)}catch(r){d(i[0][3],r)}var n}function s(e){a("next",e)}function l(e){a("throw",e)}function d(e,t){e(t),i.shift(),i.length&&a(i[0][0],i[0][1])}}function y(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,c){t[r]=e[r]?function(t){return(n=!n)?{value:O(e[r](t)),done:"return"===r}:c?c(t):t}:c}}function v(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=m(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,c){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,c,(t=e[n](t)).done,t.value)}))}}}function g(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function w(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function _(e){return e&&e.__esModule?e:{default:e}}function N(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function R(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}},1475:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(739),i=n(14),o=n(12),a=n(253),s=n(365),l=n(8),d=n(41),u=n(3),f=["count","tag","children"],h=function(e){for(var t=e.count,n=e.tag,r=e.children,c=Object(d.a)(e,f),i=n,o=[],a=0;a<t;a++)o.push(r(a));return Object(u.jsx)(i,Object(l.a)(Object(l.a)({},c),{},{children:o}))};h.defaultProps={tag:"div"};var m=h,j=function(){var e=Object(r.useState)(1),t=Object(o.a)(e,2),n=t[0],c=t[1],l=function(e){e.preventDefault(),e.target.closest("form").remove()};return Object(u.jsxs)(i.l,{children:[Object(u.jsx)(i.p,{children:Object(u.jsx)("h4",{className:"card-title",children:"Repeating Forms"})}),Object(u.jsxs)(i.m,{children:[Object(u.jsx)(m,{count:n,children:function(e){return Object(u.jsx)(i.H,{children:Object(u.jsxs)(i.ib,{className:"justify-content-between align-items-center",children:[Object(u.jsxs)(i.B,{md:4,className:"mb-md-0 mb-1",children:[Object(u.jsx)(i.N,{className:"form-label",for:"item-name-".concat(e),children:"Item Name"}),Object(u.jsx)(i.K,{type:"text",id:"item-name-".concat(e),placeholder:"Turia Admin Template"})]}),Object(u.jsxs)(i.B,{md:2,className:"mb-md-0 mb-1",children:[Object(u.jsx)(i.N,{className:"form-label",for:"cost-".concat(e),children:"Cost"}),Object(u.jsx)(i.K,{type:"number",id:"cost-".concat(e),placeholder:"32"})]}),Object(u.jsxs)(i.B,{md:2,className:"mb-md-0 mb-1",children:[Object(u.jsx)(i.N,{className:"form-label",for:"quantity-".concat(e),children:"Quantity"}),Object(u.jsx)(i.K,{type:"number",id:"quantity-".concat(e),placeholder:"1"})]}),Object(u.jsxs)(i.B,{md:2,className:"mb-md-0 mb-1",children:[Object(u.jsx)(i.N,{className:"form-label",for:"price-".concat(e),children:"Price"}),Object(u.jsx)("input",{readOnly:!0,disabled:!0,value:"$32",placeholder:"$32",id:"price-".concat(e),className:"form-control-plaintext"})]}),Object(u.jsx)(i.B,{md:2,children:Object(u.jsxs)(i.i,{color:"danger",className:"text-nowrap px-1",onClick:l,outline:!0,children:[Object(u.jsx)(a.a,{size:14,className:"me-50"}),Object(u.jsx)("span",{children:"Delete"})]})}),Object(u.jsx)(i.B,{sm:12,children:Object(u.jsx)("hr",{})})]})},e)}}),Object(u.jsxs)(i.i,{className:"btn-icon",color:"primary",onClick:function(){c(n+1)},children:[Object(u.jsx)(s.a,{size:14}),Object(u.jsx)("span",{className:"align-middle ms-25",children:"Add New"})]})]})]})},b=n(1203),p=function(){var e=Object(r.useState)(1),t=Object(o.a)(e,2),n=t[0],c=t[1],l=function(e){e.preventDefault();var t=e.target.closest(".react-slidedown"),n=e.target.closest("form");t?t.remove():n.remove()};return Object(u.jsxs)(i.l,{children:[Object(u.jsx)(i.p,{children:Object(u.jsx)("h4",{className:"card-title",children:"With Animation"})}),Object(u.jsxs)(i.m,{children:[Object(u.jsxs)(i.u,{children:["Use we're using ",Object(u.jsx)("code",{children:"react-slidedown"})," component for slidedown animation. Refer this"," ",Object(u.jsx)("a",{href:"https://github.com/frankwallis/react-slidedown",target:"_blank",rel:"noopener noreferrer",children:"link"})," ","for more info."]}),Object(u.jsx)(m,{count:n,children:function(e){var t=0===e?"div":b.SlideDown;return Object(u.jsx)(t,{children:Object(u.jsx)(i.H,{children:Object(u.jsxs)(i.ib,{className:"justify-content-between align-items-center",children:[Object(u.jsxs)(i.B,{md:4,className:"mb-md-0 mb-1",children:[Object(u.jsx)(i.N,{className:"form-label",for:"animation-item-name-".concat(e),children:"Item Name"}),Object(u.jsx)(i.K,{type:"text",id:"animation-item-name-".concat(e),placeholder:"Turia Admin Template"})]}),Object(u.jsxs)(i.B,{md:2,className:"mb-md-0 mb-1",children:[Object(u.jsx)(i.N,{className:"form-label",for:"animation-cost-".concat(e),children:"Cost"}),Object(u.jsx)(i.K,{type:"number",id:"animation-cost-".concat(e),placeholder:"32"})]}),Object(u.jsxs)(i.B,{md:2,className:"mb-md-0 mb-1",children:[Object(u.jsx)(i.N,{className:"form-label",for:"animation-quantity-".concat(e),children:"Quantity"}),Object(u.jsx)(i.K,{type:"number",id:"animation-quantity-".concat(e),placeholder:"1"})]}),Object(u.jsxs)(i.B,{md:2,className:"mb-md-0 mb-1",children:[Object(u.jsx)(i.N,{className:"form-label",for:"animation-price-".concat(e),children:"Price"}),Object(u.jsx)("input",{readOnly:!0,disabled:!0,value:"$32",placeholder:"$32",id:"animation-price-".concat(e),className:"form-control-plaintext"})]}),Object(u.jsx)(i.B,{md:2,children:Object(u.jsxs)(i.i,{color:"danger",className:"text-nowrap px-1",onClick:l,outline:!0,children:[Object(u.jsx)(a.a,{size:14,className:"me-50"}),Object(u.jsx)("span",{children:"Delete"})]})}),Object(u.jsx)(i.B,{sm:12,children:Object(u.jsx)("hr",{})})]})})},e)}}),Object(u.jsxs)(i.i,{className:"btn-icon",color:"primary",onClick:function(){c(n+1)},children:[Object(u.jsx)(s.a,{size:14}),Object(u.jsx)("span",{className:"align-middle ms-25",children:"Add New"})]})]})]})};n(746),t.default=function(){return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)(c.a,{title:"Form Repeater",data:[{title:"Form"},{title:"Form Repeater"}]}),Object(u.jsxs)(i.ib,{children:[Object(u.jsx)(i.B,{sm:12,children:Object(u.jsx)(j,{})}),Object(u.jsx)(i.B,{sm:12,children:Object(u.jsx)(p,{})})]})]})}},739:function(e,t,n){"use strict";var r=n(8),c=n(0),i=n(25),o=n(7),a=n.n(o),s=n(331),l=n(289),d=n(352),u=n(347),f=n(286),h=n(14),m=n(3);t.a=function(e){var t=e.data,n=e.title;return Object(m.jsxs)("div",{className:"content-header row",children:[Object(m.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(m.jsx)("div",{className:"row breadcrumbs-top",children:Object(m.jsxs)("div",{className:"col-12",children:[n?Object(m.jsx)("h2",{className:"content-header-title float-start mb-0",children:n}):"",Object(m.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(m.jsxs)(h.g,{children:[Object(m.jsx)(h.h,{tag:"li",children:Object(m.jsx)(i.b,{to:"/",children:"Home"})}),t.map((function(e,n){var o=e.link?i.b:c.Fragment,s=t.length-1===n;return Object(m.jsx)(h.h,{tag:"li",active:!s,className:a()({"text-primary":!s}),children:Object(m.jsx)(o,Object(r.a)(Object(r.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},n)}))]})})]})})}),Object(m.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(m.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(m.jsxs)(h.tb,{children:[Object(m.jsx)(h.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(m.jsx)(s.a,{size:14})}),Object(m.jsxs)(h.F,{tag:"ul",end:!0,children:[Object(m.jsxs)(h.E,{tag:i.b,to:"/apps/todo",children:[Object(m.jsx)(l.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(m.jsxs)(h.E,{tag:i.b,to:"/apps/chat",children:[Object(m.jsx)(d.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(m.jsxs)(h.E,{tag:i.b,to:"/apps/email",children:[Object(m.jsx)(u.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(m.jsxs)(h.E,{tag:i.b,to:"/apps/calendar",children:[Object(m.jsx)(f.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},746:function(e,t,n){}}]);
//# sourceMappingURL=101.8eeb9e5e.chunk.js.map