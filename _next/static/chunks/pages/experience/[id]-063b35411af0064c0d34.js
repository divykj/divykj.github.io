(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[497],{6903:function(t,e,n){"use strict";n.d(e,{R:function(){return o},H:function(){return c}});var i=n(6156);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var o=function(t){var e=t.duration,n=void 0===e?.15:e,i=t.ease,a=void 0===i?"easeInOut":i,r=t.initialDelay,o=void 0===r?0:r,c=t.animateInDelay,s=void 0===c?.15:c;return{initial:{opacity:0,transition:{ease:a,duration:n}},animate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{opacity:1,transition:{ease:a,delay:o+t*s,duration:n}}},exit:{opacity:0,transition:{ease:a,duration:n}}}},c=function(t){var e=t.duration,n=void 0===e?.15:e,i=t.ease,a=void 0===i?"easeInOut":i,o=t.initialDelay,c=void 0===o?0:o,s=t.animateInDelay,u=void 0===s?.15:s,l=t.offset,d=void 0===l?10:l,f=t.fadeExit,p=void 0!==f&&f,y=t.exitReverse,v=void 0!==y&&y,x=t.exitDuration;return{initial:{y:-d,opacity:0,transition:{ease:a,duration:n}},animate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{y:0,opacity:1,transition:{ease:a,delay:c+t*u,duration:n}}},exit:r(r({},!p&&{y:(v?-1:1)*d}),{},{opacity:0,transition:{ease:a,duration:x||n}})}}},2720:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return c},default:function(){return s}});var i=n(5893),a=n(6763),r=n(6903),o=(0,r.H)({offset:20,duration:.5,initialDelay:.75,exitDuration:.15,fadeExit:!0}),c=((0,r.R)({duration:.15,initialDelay:1.25,animateInDelay:.1}),!0);function s(t){var e=t.experience;return(0,i.jsxs)(a.E.main,{initial:"initial",animate:"animate",exit:"exit",variants:o,className:"py-4 space-y-4 custom-container",children:[(0,i.jsx)("h2",{className:"inline-block text-3xl mt-6 font-bold text-black",children:e.name}),(0,i.jsx)("div",{className:"flex flex-row flex-wrap -m-2",children:e.tags.map((function(t){return(0,i.jsx)("span",{className:"mx-2 my-0.5 text-".concat(e.color,"-600 bg-").concat(e.color,"-100 font-bold"),children:t},t)}))}),(0,i.jsx)("p",{className:"text-gray-600",children:e.description})]})}},7592:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/experience/[id]",function(){return n(2720)}])}},function(t){t.O(0,[774,691],(function(){return e=7592,t(t.s=e);var e}));var e=t.O();_N_E=e}]);