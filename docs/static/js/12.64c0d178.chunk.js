(this["webpackJsonptemplate-react"]=this["webpackJsonptemplate-react"]||[]).push([[12,31,38,52],{16:function(t,e,n){"use strict";n.r(e);n(0);var a=n(3);e.default=function(t){var e=t.children,n=t.attr,r=t.id,c=n.x,o=n.y,i=n.w,u=n.h,s=n.deg,f=n.opacity,l={width:i||0,height:u||0,left:c||0,top:o||0,transform:"rotate(".concat(s||0,"deg)"),opacity:f||1};return Object(a.jsx)("div",{style:l,className:"absolute","data-id":r,children:e})}},20:function(t,e,n){"use strict";n.r(e),n.d(e,"Number2",(function(){return i}));var a=n(4),r=n(0),c=n(56),o=(n(92),n(3)),i=function(t){var e=t.data,n=(t.isThousands,t.maxLength),c=void 0===n?10:n,i=(t.isShowFloat,t.color),u=void 0===i?"rgba(93,128,255, 1)":i,s=t.backgroundColor,f=void 0===s?"rgba(93,128,255, 0.2)":s,l=Object(r.useState)([]),d=Object(a.a)(l,2),h=d[0],v=d[1],b=Object(r.useRef)(null),p=Object(r.useRef)([]),m=!0,j=function(t){p.current.push(t)},g=function(t){return/^\d$/.test(t)};Object(r.useEffect)((function(){var t=function(t){var e="",n="".concat(t).split(".");e=n.length>1?1===n[1].length?"".concat(n[0],".").concat(n[1],"0"):"".concat(t):"".concat(n[0],".00");for(var a="",r=c-n[0].length,o=1;o<=r;o++)a+="0";return{chars:function(t){for(var e=t.split(".")[0],n=t.split(".")[1],a=[],r=0,c=e.length-1;c>-1;c--){var o=e[c];3===r&&(a.unshift(","),r=0),a.unshift(o),r+=1}a.push(".");for(var i=0;i<n.length;i++){var u=n[i];a.push(u)}return a}(e="".concat(a).concat(e)),zeroAddCout:r}}(e),n=t.chars;t.zeroAddCout;v(n),setTimeout((function(){!function(t,e){for(var n=t.filter((function(t){return g(t)})),a=p.current,r=0;r<n.length;r++){var c=n[r];a[r].style.transform="translate(-50%, -".concat(10*c,"%)")}}(n)}),100)}),[e]);var O=function(t){return"0"===t||","===t||"."===t?!m&&(m=!1,!0):(m=!1,!0)};return Object(o.jsx)("span",{className:"Number2Container",ref:b,children:h.map((function(t,e){return Object(o.jsx)("div",{className:(n=h.length,a=e,a===n-1||a===n-2?"numberItem floatItem":"numberItem"),style:{color:u,marginRight:g(t)?"3px":"0",opacity:O(t)?1:.2},children:g(t)?Object(o.jsx)("span",{ref:j,style:{backgroundColor:f},children:"0123456789"}):Object(o.jsx)("i",{children:t})},e);var n,a}))})};e.default=Object(c.WithContainer)(i)},56:function(t,e,n){"use strict";n.r(e),n.d(e,"WithContainer",(function(){return f}));var a=n(1),r=n(4),c=n(0),o=n(16),i=n(48),u=n(8),s=n(3);function f(t){return function(e){var n=e.config,f=e.cacheRepeatRequest,l=n.config,d=n.attr,h=n.data,v=n.data.source,b=n.id,p=Object(c.useState)(v),m=Object(r.a)(p,2),j=m[0],g=m[1];return Object(c.useEffect)((function(){var t=h.autoUpdate,e=h.api,n=void 0===e?{url:"",method:"get",staleTime:5e3,handleRes:function(t){return t}}:e,a=n.url,r=n.method,c=n.staleTime,o=n.handleRes,s=function(t){t.appendUrl(a),i.a[r](a).then((function(e){if("00000"===e.code){t.updateUrlRes(a,e);var n=o?o(e.data):e.data;g(n)}}))};if(t&&"number"===typeof t){var l=setInterval((function(){if(f){var t=u.RequestThrottle.getUrlFromUrls(a);if(t)if("pendding"===t.status)u.RequestThrottle.subscribe(a,(function(t){if("00000"===t.code){var e=o?o(t.data):t.data;g(e)}}));else if((new Date).getTime()-t.startTime>=c)s(u.RequestThrottle);else{var e=t.res;if("00000"===e.code){var n=o?o(e.data):e.data;g(n)}}else s(u.RequestThrottle)}else i.a[r](a).then((function(t){if("00000"===t.code){var e=o?o(t.data):t.data;g(e)}}))}),t);return function(){clearInterval(l)}}}),[]),Object(s.jsx)(o.default,{attr:d,id:b,children:Object(s.jsx)(t,Object(a.a)(Object(a.a)({},l),{},{data:j}))})}}},92:function(t,e,n){}}]);
//# sourceMappingURL=12.64c0d178.chunk.js.map