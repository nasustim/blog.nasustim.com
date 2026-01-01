import{r as c}from"./index.WFquGv8Z.js";/* empty css                       */var l={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function v(){if(x)return i;x=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function n(t,e,o){var a=null;if(o!==void 0&&(a=""+o),e.key!==void 0&&(a=""+e.key),"key"in e){o={};for(var u in e)u!=="key"&&(o[u]=e[u])}else o=e;return e=o.ref,{$$typeof:r,type:t,key:a,ref:e!==void 0?e:null,props:o}}return i.Fragment=s,i.jsx=n,i.jsxs=n,i}var f;function E(){return f||(f=1,l.exports=v()),l.exports}var R=E();function p(r){var s,n,t="";if(typeof r=="string"||typeof r=="number")t+=r;else if(typeof r=="object")if(Array.isArray(r)){var e=r.length;for(s=0;s<e;s++)r[s]&&(n=p(r[s]))&&(t&&(t+=" "),t+=n)}else for(n in r)r[n]&&(t&&(t+=" "),t+=n);return t}function m(){for(var r,s,n=0,t="",e=arguments.length;n<e;n++)(r=arguments[n])&&(s=p(r))&&(t&&(t+=" "),t+=s);return t}const d="https",k="blog.nasustim.com",S=`${d}://${k}`;var _="rnrds60",T="rnrds61";const h=({to:r,children:s,noStyle:n=!1,className:t})=>{const e=c.useMemo(()=>r.origin!==S?{target:"_blank",rel:"noreferrer"}:{},[r]);return R.jsx("a",{className:m(n?_:T,t??""),href:r.toString(),...e,children:s})};export{h as L,S,m as c,R as j};
