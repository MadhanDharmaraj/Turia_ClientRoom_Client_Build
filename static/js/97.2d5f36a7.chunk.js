(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[97],{1308:function(e,t,n){"use strict";n.r(t);var s=n(8),c=n(25),r=n(10),l=n(0),a=n(32),i=n.n(a),j=n(183),o=n(750),b=n(281),h=n(710),u=n(13),d=(n(780),n(2));t.default=function(){var e=Object(l.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],x=Object(l.useState)(""),O=Object(r.a)(x,2),m=O[0],f=O[1],p=Object(l.useState)([]),g=Object(r.a)(p,2),v=g[0],y=g[1],N=Object(l.useState)([]),w=Object(r.a)(N,2),S=w[0],k=w[1],C=Object(o.a)({multiple:!1,onDrop:function(e){var t=new FileReader;t.onload=function(){var n=t.result,s=i.a.read(n,{type:"binary"});s.SheetNames.forEach((function(t){!function(e,t){y(e),a(t)}(i.a.utils.sheet_to_row_object_array(s.Sheets[t]),e[0].name)}))},e.length&&e[0].name.endsWith("xlsx")?t.readAsBinaryString(e[0]):j.b.error((function(){return Object(d.jsxs)("p",{className:"mb-0",children:["You can only upload ",Object(d.jsx)("span",{className:"fw-bolder",children:".xlsx"}),", ",Object(d.jsx)("span",{className:"fw-bolder",children:".xls"})," &"," ",Object(d.jsx)("span",{className:"fw-bolder",children:".csv"})," Files!."]})}),{style:{minWidth:"380px"}})}}),B=C.getRootProps,L=C.getInputProps,_=v.length?v.map((function(e,t){return 0===t?Object(c.a)(Object.keys(e)):null})):[],D=m.length?S:v.length&&!m.length?v:null;return Object(d.jsxs)(l.Fragment,{children:[Object(d.jsx)(h.a,{title:"XLSX",subTitle:"Xlsx is a parser and writer for various spreadsheet formats",link:"https://github.com/SheetJS/sheetjs"}),Object(d.jsxs)(u.ib,{className:"import-component",children:[Object(d.jsx)(u.B,{sm:"12",children:Object(d.jsx)(u.l,{children:Object(d.jsx)(u.m,{children:Object(d.jsx)(u.ib,{children:Object(d.jsx)(u.B,{sm:"12",children:Object(d.jsxs)("div",Object(s.a)(Object(s.a)({},B({className:"dropzone"})),{},{children:[Object(d.jsx)("input",Object(s.a)({},L())),Object(d.jsxs)("div",{className:"d-flex align-items-center justify-content-center flex-column",children:[Object(d.jsx)(b.a,{size:64}),Object(d.jsx)("h5",{children:"Drop Files here or click to upload"}),Object(d.jsxs)("p",{className:"text-secondary",children:["Drop files here or click"," ",Object(d.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:"browse"})," ","thorough your machine"]})]})]}))})})})})}),v.length?Object(d.jsx)(u.B,{sm:"12",children:Object(d.jsxs)(u.l,{children:[Object(d.jsxs)(u.p,{className:"justify-content-between flex-wrap",children:[Object(d.jsx)(u.v,{tag:"h4",children:n}),Object(d.jsxs)("div",{className:"d-flex align-items-center justify-content-end",children:[Object(d.jsx)(u.N,{for:"search-input",className:"me-1",children:"Search"}),Object(d.jsx)(u.K,{id:"search-input",type:"text",bsSize:"sm",value:m,onChange:function(e){return function(e){var t=v,n=[],s=e.target.value;if(f(s),!s.length)return null;n=t.filter((function(e){var t=Object.keys(e),n=t.filter((function(t){return e[t].toString().toLowerCase().startsWith(s.toLowerCase())})),c=t.filter((function(t){return e[t].toString().toLowerCase().includes(s.toLowerCase())}));return n.length?e[n]:!n&&c.length?e[c]:null})),k(n),f(s)}(e)}})]})]}),Object(d.jsxs)(u.mb,{className:"table-hover-animation",responsive:!0,children:[Object(d.jsx)("thead",{children:Object(d.jsx)("tr",{children:_.length?_[0].map((function(e,t){return Object(d.jsx)("th",{children:e},t)})):null})}),Object(d.jsx)("tbody",{children:null!==D&&D.length?D.map((function(e,t){var n=Object.keys(e).map((function(t,n){return Object(d.jsx)("td",{children:e[t]},n)}));return Object(d.jsx)("tr",{children:n},t)})):null})]})]})}):null]})]})}},710:function(e,t,n){"use strict";var s=n(13),c=n(2);t.a=function(e){return Object(c.jsx)(s.ib,{className:"mb-2",children:Object(c.jsxs)(s.B,{sm:"12",className:"ms-50",children:[Object(c.jsx)("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title",children:e.title}),e.link?Object(c.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.subTitle}):Object(c.jsx)("p",{className:"text-primary",children:e.subTitle})]})})}},780:function(e,t,n){}}]);
//# sourceMappingURL=97.2d5f36a7.chunk.js.map