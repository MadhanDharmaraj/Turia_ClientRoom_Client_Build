(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[205],{1315:function(e,n,t){},891:function(e,n,t){"use strict";t.d(n,"a",(function(){return T})),t.d(n,"b",(function(){return O})),t.d(n,"c",(function(){return R})),t.d(n,"d",(function(){return _})),t.d(n,"e",(function(){return b}));var i=t(0),r=t.n(i);function o(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=o(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}var c=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=o(e))&&(i&&(i+=" "),i+=n);return i};function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},a.apply(this,arguments)}function u(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}var s=Object(i.createContext)({});function l(){return Object(i.useContext)(s)}var f=function(e){return r.a.createElement(s.Provider,{value:e.refTracker},e.children)};function d(){var e=new Map;return{on:function(n,t){var i;return e.has(n)?null==(i=e.get(n))||i.add(t):e.set(n,new Set([t])),this},off:function(n,t){return t?e.get(n).delete(t):e.delete(n),this},emit:function(n,t){if("production"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BASENAME:"",REACT_APP_API_URL:"https://clientroom.booksturia.xyz/",REACT_APP_PARENTDOMAIN:"turia.in",REACT_APP_WS_API_URL:"wss://ec2-15-206-185-237.ap-south-1.compute.amazonaws.com",REACT_APP_CLIENTDOMAIN:"app.turia.in",REACT_APP_GOOGLE_CLIENT_ID:"359131465959-9bpip5lq5p0vbd2lat644ed5kcdkjfq5.apps.googleusercontent.com",REACT_APP_GOOGLE_API_KEY:"AIzaSyBScPneWv-9KTcbf-rBf-tQv62ybQNdnXo",REACT_APP_RAZORPAY_ID:"rzp_live_54bLvIArSIcuEr",REACT_APP_RAZORPAY_SECRET:"sFQ0b3zmyh9mN5uWRYVGh7ff",REACT_APP_DEMO_ORGANIZATION:"fb3bbf14-1e97-449c-9bc2-6dfa1b41e55b"}).NODE){var i=n;e.has(n)||0===i||console.error("It seems that the menu you are trying to display is not renderer or you have a menu id mismatch.","You used the menu id: "+n)}return e.has(n)&&e.get(n).forEach((function(e){e(t)})),this}}}var v=d();function m(){return Object(i.useRef)(new Map).current}var p={show:function(e){var n=e.id,t=e.event,i=e.props,r=e.position;t.preventDefault&&t.preventDefault(),v.emit(0).emit(n,{event:t.nativeEvent||t,props:i,position:r})},hideAll:function(){v.emit(0)}};function b(e){return{show:function(n,t){p.show({id:(null==t?void 0:t.id)||(null==e?void 0:e.id),props:(null==t?void 0:t.props)||(null==e?void 0:e.props),event:n,position:null==t?void 0:t.position})},hideAll:function(){p.hideAll()}}}function g(){var e,n,t,i,r=new Map,o=!1;function c(){i[e].node.focus()}function a(){return-1!==e||(u(),!1)}function u(){e+1<i.length?e++:e+1===i.length&&(e=0),o&&s(),c()}function s(){if(a()&&!t){var u=r.get(n),s=u.isRoot,l=u.items,f=u.focusedIndex,d=u.parentNode;n.classList.remove("react-contexify__submenu--is-open"),i=l,n=d,s&&(t=!0,r.clear()),o||(e=f,c())}}return{init:function(n){i=n,e=-1,t=!0},moveDown:u,moveUp:function(){-1===e||0===e?e=i.length-1:e-1<i.length&&e--,o&&s(),c()},openSubmenu:function(){if(a()&&e>=0&&i[e].isSubmenu){var u=Array.from(i[e].submenuRefTracker.values()),s=i[e].node;return r.set(s,{isRoot:t,focusedIndex:e,parentNode:n||s,items:i}),s.classList.add("react-contexify__submenu--is-open"),n=s,u.length>0?(e=0,i=u):o=!0,t=!1,c(),!0}return!1},closeSubmenu:s}}var _={fade:"fade",flip:"flip",scale:"scale",slide:"slide"},h=function(){};function E(e){return"function"===typeof e}function y(e){return"string"===typeof e}function w(e,n){return i.Children.map(i.Children.toArray(e).filter(Boolean),(function(e){return Object(i.cloneElement)(e,n)}))}function A(e,n){return E(e)?e(n):e}function x(e,n){return E(n)?a({},e,n(e)):a({},e,n)}var O=function(e){var n,t=e.id,o=e.theme,s=e.style,l=e.className,d=e.children,p=e.animation,b=void 0===p?"scale":p,_=e.onHidden,E=void 0===_?h:_,A=e.onShown,O=void 0===A?h:A,T=u(e,["id","theme","style","className","children","animation","onHidden","onShown"]),R=Object(i.useReducer)(x,{x:0,y:0,visible:!1,triggerEvent:{},propsFromTrigger:null,willLeave:!1}),P=R[0],L=R[1],N=Object(i.useRef)(null),S=Object(i.useRef)(!1),j=function(e){var n=Object(i.useRef)();return Object(i.useEffect)((function(){n.current=e}),[e]),n.current}(P.visible),k=m(),C=Object(i.useState)((function(){return g()}))[0];function I(e){var n=e.event,t=e.props,i=e.position;n.stopPropagation();var r=i||function(e){var n={x:0,y:0};return function(e){return"touchend"===e.type}(e)&&e.changedTouches&&e.changedTouches.length>0?(n.x=e.changedTouches[0].clientX,n.y=e.changedTouches[0].clientY):(n.x=e.clientX,n.y=e.clientY),(!n.x||n.x<0)&&(n.x=0),(!n.y||n.y<0)&&(n.y=0),n}(n),o=r.x,c=r.y;setTimeout((function(){L({visible:!0,willLeave:!1,x:o,y:c,triggerEvent:n,propsFromTrigger:t})}),0)}function D(e){var n=e;("undefined"===typeof n||2!==n.button&&!0!==n.ctrlKey||"contextmenu"===n.type)&&(!function(e){return!(!e||!(y(e)||"exit"in e&&e.exit))}(b)?L((function(e){return{visible:!e.visible&&e.visible}})):L((function(e){return{willLeave:e.visible}})))}Object(i.useEffect)((function(){return S.current=!0,v.on(t,I).on(0,D),function(){v.off(t,I).off(0,D)}}),[t]),Object(i.useEffect)((function(){S.current&&P.visible!==j&&(P.visible?O():E())}),[P.visible,E,O]),Object(i.useEffect)((function(){P.visible?C.init(Array.from(k.values())):k.clear()}),[P.visible,C,k]),Object(i.useEffect)((function(){if(P.visible){var e=window,n=e.innerWidth,t=e.innerHeight,i=N.current,r=i.offsetWidth,o=i.offsetHeight,c=P.x,a=P.y;c+r>n&&(c-=c+r-n),a+o>t&&(a-=a+o-t),L({x:c,y:a})}}),[P.visible]),Object(i.useEffect)((function(){function e(e){switch(e.preventDefault(),e.key){case"Enter":C.openSubmenu()||D();break;case"Escape":D();break;case"ArrowUp":C.moveUp();break;case"ArrowDown":C.moveDown();break;case"ArrowRight":C.openSubmenu();break;case"ArrowLeft":C.closeSubmenu()}}return P.visible&&(window.addEventListener("resize",D),window.addEventListener("contextmenu",D),window.addEventListener("click",D),window.addEventListener("scroll",D),window.addEventListener("keydown",e),window.addEventListener("blur",D)),function(){window.removeEventListener("resize",D),window.removeEventListener("contextmenu",D),window.removeEventListener("click",D),window.removeEventListener("scroll",D),window.removeEventListener("keydown",e),window.removeEventListener("blur",D)}}),[P.visible,C]);var F=P.visible,W=P.triggerEvent,H=P.propsFromTrigger,z=P.x,K=P.y,M=P.willLeave,U=c("react-contexify",l,((n={})["react-contexify__theme--"+o]=o,n),function(){return b?y(b)?c(((e={})["react-contexify__will-enter--"+b]=b&&F&&!M,e["react-contexify__will-leave--"+b+" react-contexify__will-leave--'disabled'"]=b&&F&&M,e)):"enter"in b&&"exit"in b?c(((n={})["react-contexify__will-enter--"+b.enter]=b.enter&&F&&!M,n["react-contexify__will-leave--"+b.exit+" react-contexify__will-leave--'disabled'"]=b.exit&&F&&M,n)):null:null;var e,n}()),Y=a({},s,{left:z,top:K,opacity:1});return r.a.createElement(f,{refTracker:k},F&&r.a.createElement("div",Object.assign({},T,{className:U,onAnimationEnd:function(){P.willLeave&&P.visible&&L({visible:!1,willLeave:!1})},style:Y,ref:N,role:"menu"}),w(d,{propsFromTrigger:H,triggerEvent:W})))},T=function(e){var n,t=e.children,i=e.className,o=e.style,a=e.triggerEvent,s=e.data,f=e.propsFromTrigger,d=e.onClick,v=void 0===d?h:d,m=e.disabled,p=void 0!==m&&m,b=e.hidden,g=void 0!==b&&b,_=u(e,["children","className","style","triggerEvent","data","propsFromTrigger","onClick","disabled","hidden"]),E=l(),y={data:s,triggerEvent:a,props:f},w=A(p,y);if(A(g,y))return null;var x=c("react-contexify__item",i,((n={})["react-contexify__item--disabled"]=w,n));return r.a.createElement("div",Object.assign({},_,{className:x,style:o,onClick:function(e){y.event=e,w?e.stopPropagation():v(y)},onKeyDown:function(e){"Enter"===e.key&&(y.event=e,v(y))},ref:function(e){e&&!w&&E.set(e,{node:e,isSubmenu:!1})},tabIndex:-1,role:"menuitem","aria-disabled":w}),r.a.createElement("div",{className:"react-contexify__item__content"},t))};var R=function(e){var n,t=e.arrow,o=void 0===t?"\u25b6":t,s=e.children,d=e.disabled,v=void 0!==d&&d,p=e.hidden,b=void 0!==p&&p,g=e.label,_=e.className,h=e.triggerEvent,E=e.propsFromTrigger,y=e.style,x=u(e,["arrow","children","disabled","hidden","label","className","triggerEvent","propsFromTrigger","style"]),O=l(),T=m(),R=Object(i.useRef)(null),P=Object(i.useState)({left:"100%",top:0,bottom:"initial"}),L=P[0],N=P[1],S={triggerEvent:h,props:E},j=A(v,S),k=A(b,S);if(Object(i.useEffect)((function(){if(R.current){var e=window,n=e.innerWidth,t=e.innerHeight,i=R.current.getBoundingClientRect(),r={};i.right<n?(r.left="100%",r.right=void 0):(r.right="100%",r.left=void 0),i.bottom>t?(r.bottom=0,r.top="initial"):r.bottom="initial",N(r)}}),[]),k)return null;var C=c("react-contexify__item",_,((n={})["react-contexify__item--disabled"]=j,n)),I=a({},y,L);return r.a.createElement(f,{refTracker:T},r.a.createElement("div",Object.assign({},x,{className:C,ref:function(e){e&&!j&&O.set(e,{node:e,isSubmenu:!0,submenuRefTracker:T})},tabIndex:-1,role:"menuitem","aria-haspopup":!0,"aria-disabled":j}),r.a.createElement("div",{className:"react-contexify__item__content",onClick:function(e){e.stopPropagation()}},g,r.a.createElement("span",{className:"react-contexify__submenu-arrow"},o)),r.a.createElement("div",{className:"react-contexify react-contexify__submenu",ref:R,style:I},w(s,{propsFromTrigger:E,triggerEvent:h}))))}}}]);
//# sourceMappingURL=205.c2b916f6.chunk.js.map