(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[224],{1417:function(e,t,l){"use strict";l.r(t);var n=l(12),i=l(0),r=l.n(i),o=l(14),a=l(65);function s(e){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,l){return t&&b(e.prototype,t),l&&b(e,l),e}function j(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},d.apply(this,arguments)}function h(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{},n=Object.keys(l);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(l).filter((function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable})))),n.forEach((function(t){j(e,t,l[t])}))}return e}function f(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?y(e):t}var x={display:"inline-block",borderRadius:"50%",border:"5px double white",width:30,height:30},v={empty:h({},x,{backgroundColor:"#ccc"}),full:h({},x,{backgroundColor:"black"}),placeholder:h({},x,{backgroundColor:"red"})},g=function(e){return r.a.isValidElement(e)?e:"object"===s(e)&&null!==e?r.a.createElement("span",{style:e}):"[object String]"===Object.prototype.toString.call(e)?r.a.createElement("span",{className:e}):void 0},k=function(e){function t(){return c(this,t),O(this,p(t).apply(this,arguments))}return f(t,e),u(t,[{key:"render",value:function(){var e,t=this.props,l=t.index,n=t.inactiveIcon,i=t.activeIcon,o=t.percent,a=t.direction,s=t.readonly,c=t.onClick,b=t.onMouseMove,u=g(n),d=o<100?{}:{visibility:"hidden"},h=g(i),f=(j(e={display:"inline-block",position:"absolute",overflow:"hidden",top:0},"rtl"===a?"right":"left",0),j(e,"width","".concat(o,"%")),e),p={cursor:s?"inherit":"pointer",display:"inline-block",position:"relative"};function m(e){b&&b(l,e)}function y(e){c&&(e.preventDefault(),c(l,e))}return r.a.createElement("span",{style:p,onClick:y,onMouseMove:m,onTouchMove:m,onTouchEnd:y},r.a.createElement("span",{style:d},u),r.a.createElement("span",{style:f},h))}}]),t}(r.a.PureComponent),S=function(e){function t(e){var l;return c(this,t),(l=O(this,p(t).call(this,e))).state={displayValue:l.props.value,interacting:!1},l.onMouseLeave=l.onMouseLeave.bind(y(y(l))),l.symbolMouseMove=l.symbolMouseMove.bind(y(y(l))),l.symbolClick=l.symbolClick.bind(y(y(l))),l}return f(t,e),u(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.props.value!==e.value;this.setState((function(l){return{displayValue:t?e.value:l.displayValue}}))}},{key:"componentDidUpdate",value:function(e,t){if(e.value===this.props.value)return t.interacting&&!this.state.interacting?this.props.onHover():void(this.state.interacting&&this.props.onHover(this.state.displayValue))}},{key:"symbolClick",value:function(e,t){var l=this.calculateDisplayValue(e,t);this.props.onClick(l,t)}},{key:"symbolMouseMove",value:function(e,t){var l=this.calculateDisplayValue(e,t);this.setState({interacting:!this.props.readonly,displayValue:l})}},{key:"onMouseLeave",value:function(){this.setState({displayValue:this.props.value,interacting:!1})}},{key:"calculateDisplayValue",value:function(e,t){var l=this.calculateHoverPercentage(t),n=Math.ceil(l%1*this.props.fractions)/this.props.fractions,i=Math.pow(10,3),r=e+(Math.floor(l)+Math.floor(n*i)/i);return r>0?r>this.props.totalSymbols?this.props.totalSymbols:r:1/this.props.fractions}},{key:"calculateHoverPercentage",value:function(e){var t=e.nativeEvent.type.indexOf("touch")>-1?e.nativeEvent.type.indexOf("touchend")>-1?e.changedTouches[0].clientX:e.touches[0].clientX:e.clientX,l=e.target.getBoundingClientRect(),n="rtl"===this.props.direction?l.right-t:t-l.left;return n<0?0:n/l.width}},{key:"render",value:function(){var e,t=this.props,l=t.readonly,n=t.quiet,i=t.totalSymbols,o=t.value,a=t.placeholderValue,s=t.direction,c=t.emptySymbol,b=t.fullSymbol,u=t.placeholderSymbol,j=t.className,f=t.id,p=t.style,m=t.tabIndex,y=this.state,O=y.displayValue,x=y.interacting,v=[],g=[].concat(c),S=[].concat(b),C=[].concat(u),w=0!==a&&0===o&&!x;e=w?a:n?o:O;for(var M=Math.floor(e),V=0;V<i;V++){var z=void 0;z=V-M<0?100:V-M===0?100*(e-V):0,v.push(r.a.createElement(k,d({key:V,index:V,readonly:l,inactiveIcon:g[V%g.length],activeIcon:w?C[V%S.length]:S[V%S.length],percent:z,direction:s},!l&&{onClick:this.symbolClick,onMouseMove:this.symbolMouseMove,onTouchMove:this.symbolMouseMove,onTouchEnd:this.symbolClick})))}return r.a.createElement("span",d({id:f,style:h({},p,{display:"inline-block",direction:s}),className:j,tabIndex:m,"aria-label":this.props["aria-label"]},!l&&{onMouseLeave:this.onMouseLeave}),v)}}]),t}(r.a.PureComponent);function C(){}C._name="react_rating_noop";var w=function(e){function t(e){var l;return c(this,t),(l=O(this,p(t).call(this,e))).state={value:e.initialRating},l.handleClick=l.handleClick.bind(y(y(l))),l.handleHover=l.handleHover.bind(y(y(l))),l}return f(t,e),u(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({value:e.initialRating})}},{key:"handleClick",value:function(e,t){var l=this,n=this.translateDisplayValueToValue(e);this.props.onClick(n),this.state.value!==n&&this.setState({value:n},(function(){return l.props.onChange(l.state.value)}))}},{key:"handleHover",value:function(e){var t=void 0===e?e:this.translateDisplayValueToValue(e);this.props.onHover(t)}},{key:"translateDisplayValueToValue",value:function(e){var t=e*this.props.step+this.props.start;return t===this.props.start?t+1/this.props.fractions:t}},{key:"tranlateValueToDisplayValue",value:function(e){return void 0===e?0:(e-this.props.start)/this.props.step}},{key:"render",value:function(){var e=this.props,t=e.step,l=e.emptySymbol,n=e.fullSymbol,i=e.placeholderSymbol,o=e.readonly,a=e.quiet,s=e.fractions,c=e.direction,b=e.start,u=e.stop,j=e.id,d=e.className,h=e.style,f=e.tabIndex;return r.a.createElement(S,{id:j,style:h,className:d,tabIndex:f,"aria-label":this.props["aria-label"],totalSymbols:function(e,t,l){return Math.floor((t-e)/l)}(b,u,t),value:this.tranlateValueToDisplayValue(this.state.value),placeholderValue:this.tranlateValueToDisplayValue(this.props.placeholderRating),readonly:o,quiet:a,fractions:s,direction:c,emptySymbol:l,fullSymbol:n,placeholderSymbol:i,onClick:this.handleClick,onHover:this.handleHover})}}]),t}(r.a.PureComponent);w.defaultProps={start:0,stop:5,step:1,readonly:!1,quiet:!1,fractions:1,direction:"ltr",onHover:C,onClick:C,onChange:C,emptySymbol:v.empty,fullSymbol:v.full,placeholderSymbol:v.placeholder};var M=w,V=l(383),z=l(3),N=function(e){var t=e.filledColor,l=e.dir;return Object(z.jsxs)(o.l,{children:[Object(z.jsx)(o.p,{children:Object(z.jsx)(o.v,{tag:"h4",children:"Basic"})}),Object(z.jsx)(o.m,{children:Object(z.jsx)(M,{direction:l,initialRating:2,emptySymbol:Object(z.jsx)(V.a,{size:32,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(z.jsx)(V.a,{size:32,fill:t,stroke:t})})})]})},R=function(e){var t=e.filledColor,l=e.dir;return Object(z.jsxs)(o.l,{children:[Object(z.jsx)(o.p,{children:Object(z.jsx)(o.v,{tag:"h4",children:"Sizes"})}),Object(z.jsxs)(o.m,{children:[Object(z.jsx)("h6",{children:"Large"}),Object(z.jsx)(M,{direction:l,emptySymbol:Object(z.jsx)(V.a,{size:42,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(z.jsx)(V.a,{size:42,fill:t,stroke:t})}),Object(z.jsx)("h6",{className:"mt-2",children:"Default"}),Object(z.jsx)(M,{direction:l,emptySymbol:Object(z.jsx)(V.a,{size:32,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(z.jsx)(V.a,{size:32,fill:t,stroke:t})}),Object(z.jsx)("h6",{className:"mt-2",children:"Small"}),Object(z.jsx)(M,{direction:l,emptySymbol:Object(z.jsx)(V.a,{size:20,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(z.jsx)(V.a,{size:20,fill:t,stroke:t})})]})]})},E=function(e){var t=e.filledColor,l=e.dir,r=Object(i.useState)(0),o=Object(n.a)(r,2),a=o[0],s=o[1];return Object(z.jsxs)(i.Fragment,{children:[Object(z.jsx)(M,{direction:l,id:"ratings-hover",initialRating:a,onHover:function(e){return function(e){void 0!==e&&s(e)}(e)},onChange:function(e){return s(e)},emptySymbol:Object(z.jsx)(V.a,{size:32,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(z.jsx)(V.a,{size:32,fill:t,stroke:t})}),Object(z.jsx)("div",{className:"counter-wrapper mt-1",children:Object(z.jsxs)("span",{className:"fw-bold",children:["Ratings: ",a]})})]})},P=function(e){var t=e.filledColor,l=e.dir;return Object(z.jsxs)(o.l,{children:[Object(z.jsx)(o.p,{children:Object(z.jsx)(o.v,{tag:"h4",children:"Events"})}),Object(z.jsx)(o.m,{children:Object(z.jsxs)(o.ib,{children:[Object(z.jsxs)(o.B,{md:"6",className:"d-flex flex-column align-items-start mb-md-0 mb-1",children:[Object(z.jsx)(o.u,{className:"fw-semibold mb-25",children:"On Change"}),Object(z.jsx)(M,{direction:l,onChange:function(e){return alert(e)},emptySymbol:Object(z.jsx)(V.a,{size:32,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(z.jsx)(V.a,{size:32,fill:t,stroke:t})})]}),Object(z.jsxs)(o.B,{md:"6",className:"d-flex flex-column align-items-start",children:[Object(z.jsx)(o.u,{className:"fw-semibold mb-25",children:"On Hover"}),Object(z.jsx)(E,{filledColor:t,dir:l})]})]})})]})},T=function(e){return Object(z.jsxs)(o.l,{children:[Object(z.jsx)(o.p,{children:Object(z.jsx)(o.v,{tag:"h4",children:"Numbers"})}),Object(z.jsx)(o.m,{children:Object(z.jsx)(M,{direction:e.dir,emptySymbol:Object(z.jsx)("span",{className:"font-medium-3 me-50",children:"-"}),fullSymbol:[1,2,3,4,5].map((function(e){return Object(z.jsx)("span",{className:"font-medium-3 me-50",children:e})}))})})]})},_=function(e){var t=e.filledColor,l=e.dir;return Object(z.jsxs)(o.l,{children:[Object(z.jsx)(o.p,{children:Object(z.jsx)(o.v,{tag:"h4",children:"Readonly"})}),Object(z.jsx)(o.m,{children:Object(z.jsx)(M,{readonly:!0,direction:l,initialRating:2,emptySymbol:Object(z.jsx)(V.a,{size:32,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(z.jsx)(V.a,{size:32,fill:t,stroke:t})})})]})},B=l(265),D=l(301),H=l(299),I=l(300),L=l(298),F=function(e){var t=e.dir;return Object(z.jsxs)(o.l,{children:[Object(z.jsx)(o.p,{children:Object(z.jsx)(o.v,{tag:"h4",children:"Custom SVG"})}),Object(z.jsx)(o.m,{children:Object(z.jsx)(M,{emptySymbol:Object(z.jsx)(B.a,{size:32,stroke:"#babfc7"}),fullSymbol:[Object(z.jsx)(D.a,{size:32,stroke:"#babfc7"}),Object(z.jsx)(H.a,{size:32,stroke:"#babfc7"}),Object(z.jsx)(I.a,{size:32,stroke:"#babfc7"}),Object(z.jsx)(L.a,{size:32,stroke:"#babfc7"})],stop:4,direction:t})})]})},q=function(e){var t=e.filledColor,l=e.dir;return Object(z.jsxs)(o.l,{children:[Object(z.jsx)(o.p,{children:Object(z.jsx)(o.v,{tag:"h4",children:"Fractional"})}),Object(z.jsx)(o.m,{children:Object(z.jsx)(M,{fractions:2,direction:l,initialRating:2.5,emptySymbol:Object(z.jsx)(V.a,{size:32,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(z.jsx)(V.a,{size:32,fill:t,stroke:t})})})]})},A=function(e){var t=e.filledColor,l=e.dir,r=Object(i.useState)(0),a=Object(n.a)(r,2),s=a[0],c=a[1];return Object(z.jsxs)(o.l,{children:[Object(z.jsx)(o.p,{children:Object(z.jsx)(o.v,{tag:"h4",children:"Controlled Ratings"})}),Object(z.jsxs)(o.m,{children:[Object(z.jsx)(M,{direction:l,initialRating:s,onChange:function(e){return c(e)},emptySymbol:Object(z.jsx)(V.a,{size:32,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(z.jsx)(V.a,{size:32,fill:t,stroke:t})}),Object(z.jsxs)("div",{className:"demo-inline-spacing",children:[Object(z.jsx)(o.i,{color:"primary",onClick:function(){return c(0)},outline:!0,children:"Reset"}),Object(z.jsx)(o.i,{color:"primary",onClick:function(){return alert(s)},outline:!0,children:"Get Ratings"}),Object(z.jsx)(o.i,{color:"primary",onClick:function(){return c(3)},outline:!0,children:"Set Ratings to 3"})]})]})]})},U=l(754),X=l(193);t.default=function(){var e=Object(a.a)(),t=Object(n.a)(e,1)[0],l=Object(i.useContext)(X.a);return Object(z.jsxs)(i.Fragment,{children:[Object(z.jsx)(U.a,{title:"React Rating",subTitle:"A rating react component with custom symbols",link:"https://github.com/dreyescat/react-rating"}),Object(z.jsxs)(o.ib,{className:"match-height",children:[Object(z.jsx)(o.B,{lg:6,xs:12,children:Object(z.jsx)(N,{dir:t?"rtl":"ltr",filledColor:l.colors.warning.main})}),Object(z.jsx)(o.B,{lg:6,xs:12,children:Object(z.jsx)(_,{dir:t?"rtl":"ltr",filledColor:l.colors.warning.main})}),Object(z.jsx)(o.B,{lg:6,xs:12,children:Object(z.jsx)(q,{dir:t?"rtl":"ltr",filledColor:l.colors.warning.main})}),Object(z.jsx)(o.B,{lg:6,xs:12,children:Object(z.jsx)(F,{dir:t?"rtl":"ltr",filledColor:l.colors.warning.main})}),Object(z.jsx)(o.B,{lg:6,xs:12,children:Object(z.jsx)(T,{dir:t?"rtl":"ltr",filledColor:l.colors.warning.main})}),Object(z.jsx)(o.B,{lg:6,xs:12,children:Object(z.jsx)(P,{dir:t?"rtl":"ltr",filledColor:l.colors.warning.main})}),Object(z.jsx)(o.B,{lg:6,xs:12,children:Object(z.jsx)(A,{dir:t?"rtl":"ltr",filledColor:l.colors.warning.main})}),Object(z.jsx)(o.B,{lg:6,xs:12,children:Object(z.jsx)(R,{dir:t?"rtl":"ltr",filledColor:l.colors.warning.main})})]})]})}},754:function(e,t,l){"use strict";var n=l(14),i=l(3);t.a=function(e){return Object(i.jsx)(n.ib,{className:"mb-2",children:Object(i.jsxs)(n.B,{sm:"12",className:"ms-50",children:[Object(i.jsx)("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title",children:e.title}),e.link?Object(i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.subTitle}):Object(i.jsx)("p",{className:"text-primary",children:e.subTitle})]})})}}}]);
//# sourceMappingURL=224.4296adff.chunk.js.map