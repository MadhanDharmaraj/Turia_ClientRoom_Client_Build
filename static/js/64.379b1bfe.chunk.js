(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[64],{1307:function(e,t,o){"use strict";o.r(t);var n=o(10),r=o(0),c=o(183),a=o(846),i=o(710),l=o(13),s=o(2);t.default=function(){var e=Object(r.useState)("Copy Me!"),t=Object(n.a)(e,2),o=t[0],u=t[1],p=Object(r.useState)(!1),f=Object(n.a)(p,2),b=f[0],d=f[1];return Object(s.jsxs)(r.Fragment,{children:[Object(s.jsx)(i.a,{title:"React Copy To Clipboard",subTitle:"Copy to clipboard React component",link:"https://github.com/nkbt/react-copy-to-clipboard"}),Object(s.jsx)(l.ib,{children:Object(s.jsx)(l.B,{sm:"12",children:Object(s.jsxs)(l.l,{children:[Object(s.jsx)(l.p,{children:Object(s.jsx)(l.v,{tag:"h4",children:"Clipboard"})}),Object(s.jsx)(l.m,{children:Object(s.jsxs)(l.ib,{children:[Object(s.jsx)(l.B,{xl:"3",md:"4",sm:"6",className:"pe-sm-0 mb-md-0 mb-1",children:Object(s.jsx)(l.K,{value:o,onChange:function(e){var t=e.target.value;u(t),b&&d(!1)}})}),Object(s.jsx)(l.B,{md:"2",sm:"12",children:Object(s.jsx)(a.CopyToClipboard,{onCopy:function(){d(!0),c.b.success("Copied To Clipboard !")},text:o,children:Object(s.jsx)(l.i,{color:"primary",outline:!0,children:"Copy!"})})})]})})]})})})]})}},710:function(e,t,o){"use strict";var n=o(13),r=o(2);t.a=function(e){return Object(r.jsx)(n.ib,{className:"mb-2",children:Object(r.jsxs)(n.B,{sm:"12",className:"ms-50",children:[Object(r.jsx)("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title",children:e.title}),e.link?Object(r.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.subTitle}):Object(r.jsx)("p",{className:"text-primary",children:e.subTitle})]})})}},846:function(e,t,o){"use strict";var n=o(847).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},847:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=c(o(0)),r=c(o(848));function c(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)o=c[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)o=c[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function s(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function b(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var d=function(e){function t(){var e,o,c,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,s=new Array(l),f=0;f<l;f++)s[f]=arguments[f];return c=this,i=(e=u(t)).call.apply(e,[this].concat(s)),o=!i||"object"!==a(i)&&"function"!==typeof i?p(c):i,b(p(o),"onClick",(function(e){var t=o.props,c=t.text,a=t.onCopy,i=t.children,l=t.options,s=n.default.Children.only(i),u=(0,r.default)(c,l);a&&a(c,u),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e)})),o}var o,c,d;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),o=t,c=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),o=l(e,["text","onCopy","options","children"]),r=n.default.Children.only(t);return n.default.cloneElement(r,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(o,!0).forEach((function(t){b(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},o,{onClick:this.onClick}))}}],c&&s(o.prototype,c),d&&s(o,d),t}(n.default.PureComponent);t.CopyToClipboard=d,b(d,"defaultProps",{onCopy:void 0,options:void 0})},848:function(e,t,o){"use strict";var n=o(849),r={"text/plain":"Text","text/html":"Url",default:"Text"},c="Copy to clipboard: #{key}, Enter";e.exports=function(e,t){var o,a,i,l,s,u,p=!1;t||(t={}),o=t.debug||!1;try{if(i=n(),l=document.createRange(),s=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var c=r[t.format]||r.default;window.clipboardData.setData(c,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(u),l.selectNodeContents(u),s.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");p=!0}catch(f){o&&console.error("unable to copy using execCommand: ",f),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(f){o&&console.error("unable to copy using clipboardData: ",f),o&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:c),window.prompt(a,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(l):s.removeAllRanges()),u&&document.body.removeChild(u),i()}return p}},849:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],n=0;n<e.rangeCount;n++)o.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=64.379b1bfe.chunk.js.map