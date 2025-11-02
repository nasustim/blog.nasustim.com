import{a as v,r as E}from"./index.DK-fsZOb.js";/* empty css                       */var l={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function d(){if(x)return u;x=1;var r=v(),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),e=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function p(a,o,_){var s,f={},c=null,m=null;_!==void 0&&(c=""+_),o.key!==void 0&&(c=""+o.key),o.ref!==void 0&&(m=o.ref);for(s in o)e.call(o,s)&&!S.hasOwnProperty(s)&&(f[s]=o[s]);if(a&&a.defaultProps)for(s in o=a.defaultProps,o)f[s]===void 0&&(f[s]=o[s]);return{$$typeof:n,type:a,key:c,ref:m,props:f,_owner:i.current}}return u.Fragment=t,u.jsx=p,u.jsxs=p,u}var y;function I(){return y||(y=1,l.exports=d()),l.exports}var T=I();function R(r){var n,t,e="";if(typeof r=="string"||typeof r=="number")e+=r;else if(typeof r=="object")if(Array.isArray(r)){var i=r.length;for(n=0;n<i;n++)r[n]&&(t=R(r[n]))&&(e&&(e+=" "),e+=t)}else for(t in r)r[t]&&(e&&(e+=" "),e+=t);return e}function O(){for(var r,n,t=0,e="",i=arguments.length;t<i;t++)(r=arguments[t])&&(n=R(r))&&(e&&(e+=" "),e+=n);return e}const g="https",h="blog.nasustim.com",k=`${g}://${h}`,q="NASUSTIM",A="Mitsuhiro HIBINO";var L="rnrds60",b="rnrds61";const J=({to:r,children:n,noStyle:t=!1})=>{const e=E.useMemo(()=>r.origin!==k?{target:"_blank",rel:"noreferrer"}:{},[r]);return T.jsx("a",{className:O(t?L:b),href:r.toString(),...e,children:n})};export{J as L,k as S,q as T,A as a,O as c,T as j};
