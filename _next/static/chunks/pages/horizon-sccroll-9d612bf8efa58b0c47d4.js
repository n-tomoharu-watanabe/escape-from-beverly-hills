(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[296],{6951:function(n,e,t){"use strict";t.r(e),t.d(e,{HorizonCcroll:function(){return u},Page:function(){return i}});var r=t(7294),c=t(5893);var l=function(){var n=(0,r.useState)(void 0),e=n[0],t=n[1];return(0,r.useEffect)((function(){document&&t(document.documentElement.getBoundingClientRect())}),[]),e},o=function(n,e,t){var c=(0,r.useRef)(0);(0,r.useEffect)((function(){c.current<n?c.current=c.current+1:e()}),t)},u=function(n){var e,t,u=n.children,i=function(){var n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(e.start,e.end,(0,r.useRef)(null)),c=(0,r.useState)(0),u=c[0],i=c[1],s=l(),a=null!==(n=null===s||void 0===s?void 0:s.width)&&void 0!==n?n:0;(0,r.useEffect)((function(){var n;null===(n=t.current)||void 0===n||n.addEventListener("scroll",(function(n){i(n.target.scrollLeft)}))}),[]);var f=(u%a<a/2?0:a)-u%a,d=Math.abs(f)<.1;return o(2,(function(){d?console.log("scroll end"):console.log("scroll start")}),[d]),t}(),s=null!==(e=(null!==u&&void 0!==u?u:{}).length)&&void 0!==e?e:0;return(0,c.jsx)("div",{ref:i,className:"flex overflow-x-auto",style:{scrollSnapType:"x mandatory"},children:(null!==(t={0:[],1:[u]}[s])&&void 0!==t?t:u).map((function(n,e){return(0,c.jsx)("div",{className:"w-screen h-screen bg-gray-".concat(e%2?700:800," flex justify-center items-center"),style:{scrollSnapAlign:"start"},children:(0,c.jsx)("div",{className:"w-screen h-screen flex justify-center items-center text-white",children:n})},e)}))})},i=function(){return(0,c.jsxs)(u,{children:[(0,c.jsx)("div",{children:"Hello1"}),(0,c.jsx)("div",{children:"Hello2"})]})};e.default=i},7966:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/horizon-sccroll",function(){return t(6951)}])}},function(n){n.O(0,[774,888,179],(function(){return e=7966,n(n.s=e);var e}));var e=n.O();_N_E=e}]);