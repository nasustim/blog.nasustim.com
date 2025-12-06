import{r as p}from"./index.D55ewHcJ.js";/* empty css                       */var l={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function E(){if(x)return i;x=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(t,s,o){var a=null;if(o!==void 0&&(a=""+o),s.key!==void 0&&(a=""+s.key),"key"in s){o={};for(var u in s)u!=="key"&&(o[u]=s[u])}else o=s;return s=o.ref,{$$typeof:r,type:t,key:a,ref:s!==void 0?s:null,props:o}}return i.Fragment=e,i.jsx=n,i.jsxs=n,i}var c;function v(){return c||(c=1,l.exports=E()),l.exports}var R=v();function f(r){var e,n,t="";if(typeof r=="string"||typeof r=="number")t+=r;else if(typeof r=="object")if(Array.isArray(r)){var s=r.length;for(e=0;e<s;e++)r[e]&&(n=f(r[e]))&&(t&&(t+=" "),t+=n)}else for(n in r)r[n]&&(t&&(t+=" "),t+=n);return t}function T(){for(var r,e,n=0,t="",s=arguments.length;n<s;n++)(r=arguments[n])&&(e=f(r))&&(t&&(t+=" "),t+=e);return t}const m="https",S="blog.nasustim.com",_=`${m}://${S}`,A="NASUSTIM",h="Mitsuhiro HIBINO";var d="rnrds60",k="rnrds61";const L=({to:r,children:e,noStyle:n=!1})=>{const t=p.useMemo(()=>r.origin!==_?{target:"_blank",rel:"noreferrer"}:{},[r]);return R.jsx("a",{className:T(n?d:k),href:r.toString(),...t,children:e})};export{L,_ as S,A as T,h as a,T as c,R as j};
