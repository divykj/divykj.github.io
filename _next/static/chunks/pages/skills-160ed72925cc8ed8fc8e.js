(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81,179],{6903:function(e,t,n){"use strict";n.d(t,{R:function(){return o},H:function(){return c}});var r=n(6156);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var o=function(e){var t=e.duration,n=void 0===t?.15:t,r=e.ease,i=void 0===r?"easeInOut":r,a=e.initialDelay,o=void 0===a?0:a,c=e.animateInDelay,s=void 0===c?.15:c;return{initial:{opacity:0,transition:{ease:i,duration:n}},animate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{opacity:1,transition:{ease:i,delay:o+e*s,duration:n}}},exit:{opacity:0,transition:{ease:i,duration:n}}}},c=function(e){var t=e.duration,n=void 0===t?.15:t,r=e.ease,i=void 0===r?"easeInOut":r,o=e.initialDelay,c=void 0===o?0:o,s=e.animateInDelay,l=void 0===s?.15:s,u=e.offset,d=void 0===u?10:u,f=e.fadeExit,p=void 0!==f&&f,m=e.exitReverse,y=void 0!==m&&m,b=e.exitDuration;return{initial:{y:-d,opacity:0,transition:{ease:i,duration:n}},animate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{y:0,opacity:1,transition:{ease:i,delay:c+e*l,duration:n}}},exit:a(a({},!p&&{y:(y?-1:1)*d}),{},{opacity:0,transition:{ease:i,duration:b||n}})}}},7922:function(e,t,n){"use strict";var r=n(7294);t.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,r.useState)(e),n=t[0],i=t[1],a=(0,r.useCallback)((function(){i(!0)}),[]),o=(0,r.useCallback)((function(){i(!1)}),[]),c=(0,r.useCallback)((function(){i((function(e){return!e}))}),[]);return(0,r.useMemo)((function(){return{value:n,on:a,off:o,toggle:c,state:n,visible:n,set:a,show:a,start:a,reset:o,hide:o,stop:o,flip:c}}),[n,a,o,c])}},1360:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return M},default:function(){return F}});var r=n(6156),i=n(5893),a=n(1664),o=n(6763),c=n(7294),s=n(3869),l=n(6049),u=n(7922),d=n(4184),f=n.n(d),p=function(e){return(0,i.jsx)("b",{children:e.displayName})},m=function(e){return e.displayName},y={initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1,transition:{duration:.15}},exit:{scale:.9,opacity:0,transition:{duration:.1}}},b=function(e){var t=e.items,n=e.value,r=e.onChange,a=e.renderPlaceholder,c=void 0===a?p:a,d=e.renderItem,b=void 0===d?m:d,v=e.className,x=(0,u.Z)(!1);return(0,i.jsxs)("div",{className:f()("relative",v),children:[(0,i.jsxs)("button",{onClick:x.toggle,className:"relative z-10 block px-4 py-2 text-sm surface focus:outline-none w-full",children:[c(n)," ",(0,i.jsx)(o.E.div,{layout:!0,animate:{rotate:x.visible?180:0},transition:{duration:x.visible?.15:.1},className:"inline-block align-middle",children:(0,i.jsx)(l.v4q,{className:"w-4 h-4"})})]}),(0,i.jsx)(s.M,{children:x.visible&&(0,i.jsx)(o.E.div,{initial:"initial",animate:"animate",exit:"exit",variants:y,className:"absolute right-0 z-20 py-2 mt-2 origin-top-right shadow-xl surface left-0 md:left-auto",children:t.map((function(e){return(0,i.jsx)("div",{onClick:function(){r(e),x.hide()},className:"block text-center md:text-left px-4 py-2 text-sm font-bold text-gray-100 w-full md:w-36 hover:bg-gray-700 hover:text-indigo-200",children:b(e)},e.key)}))})})]})},v=n(3802),x={red:"text-red-200",blue:"text-blue-200",gray:"text-gray-200",green:"text-green-200",indigo:"text-indigo-200",yellow:"text-yellow-200"};function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=(0,c.forwardRef)((function(e,t){var n=e.variant,r=void 0===n?"star":n,a=e.rating,o=(0,c.useMemo)((function(){return"star"===r?{Icon:v.r7p,colorScheme:x.yellow}:{Icon:v.h_8,colorScheme:x.red}}),[r]),s=o.Icon,l=o.colorScheme;return(0,i.jsxs)("div",j(j({},{ref:t}),{},{className:f()("inline-flex items-center text-sm font-bold",l),children:[a.toFixed(1)," ",(0,i.jsx)(s,{className:"inline w-4 h-4 ml-1"})]}))})),g=n(4040),w=n(6903);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=(0,w.H)({initialDelay:.5,duration:.1,offset:5}),D=function(e){var t=e.content,n=e.children,r=e.placement,a=void 0===r?"bottom":r,s=e.colorScheme,l=void 0===s?"gray":s,d=(0,u.Z)(!1),p=(0,c.useCallback)((function(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o.E.div,N(N({variants:k,animate:d.state?"animate":"initial",tabIndex:"-1"},e),{},{children:(0,i.jsx)("div",{className:f()(x[l],"font-bold text-sm px-3 py-1 shadow-sm bg-gray-900"),children:t})}))})}),[t,d.state]);return(0,i.jsx)(g.ZP,N(N({animation:!0,interactive:!0,render:p,onMount:d.show,onHide:d.hide,delay:!0},{placement:a}),{},{children:n}))},E=function(e){var t=(0,c.useState)(e),n=t[0],r=t[1];return(0,c.useMemo)((function(){return{value:n,set:r,bind:{value:n,onChange:r}}}),[n])};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=(0,w.H)({offset:20,duration:.5,initialDelay:.75,exitDuration:.15,fadeExit:!0}),C=(0,w.R)({duration:.15,initialDelay:1.25,animateInDelay:.1}),Z={INTEREST:{key:"interest",displayName:"interest"},PROFICIENCY:{key:"proficiency",displayName:"proficiency"}},R=function(e){return(0,i.jsxs)(i.Fragment,{children:["sort by: ",(0,i.jsx)("b",{children:e.displayName})]})},M=!0;function F(e){var t=e.skills,n=E(Z.PROFICIENCY),r=(0,c.useMemo)((function(){return t.sort((function(e,t){return t[n.value.key]-e[n.value.key]}))}),[t,n.value]);return(0,i.jsx)(o.E.main,{initial:"initial",animate:"animate",exit:"exit",variants:_,className:"py-4 custom-container",children:(0,i.jsxs)("div",{className:"space-y-4",children:[(0,i.jsxs)("div",{className:"flex flex-row flex-wrap mt-6",children:[(0,i.jsx)("h2",{className:"flex-shrink-0 page-title",children:"skills"}),(0,i.jsx)(b,I({className:"w-full mt-4 ml-auto md:w-auto md:mt-0",items:Object.values(Z),renderPlaceholder:R},n.bind))]}),(0,i.jsx)(o.E.div,{layout:!0,className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:r.map((function(e,t){return(0,i.jsx)(a.default,{href:"/skills/".concat(e.id),children:(0,i.jsxs)(o.E.div,{layoutId:e.id,variants:C,initial:"initial",animate:"animate",exit:"exit",custom:t,className:"flex flex-col p-6 space-y-2 interactive-surface",children:[(0,i.jsxs)("div",{className:"flex flex-row items-center justify-between space-x-4",children:[(0,i.jsx)("h5",{className:"text-xl font-bold",children:e.name}),(0,i.jsxs)("div",{className:"space-x-2",children:[(0,i.jsx)(D,{placement:"bottom",content:"interest",colorScheme:"red",children:(0,i.jsx)(O,{variant:"heart",rating:e.interest})}),(0,i.jsx)(D,{placement:"bottom",content:"proficiency",colorScheme:"yellow",children:(0,i.jsx)(O,{variant:"star",rating:e.proficiency})})]})]}),(0,i.jsx)("div",{className:"flex flex-row flex-wrap -mx-1 -mb-1",children:e.tags.map((function(t){return(0,i.jsx)("span",{className:f()("m-1 py-1 px-2 bg-black bg-opacity-20 text-sm font-bold",x[e.color]),children:t},t)}))}),(0,i.jsx)("p",{className:"flex-1 text-justify text-gray-300",children:e.description})]})},e.id)}))})]})})}},8413:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/skills",function(){return n(1360)}])},4453:function(){}},function(e){e.O(0,[774,691,433,829,201],(function(){return t=8413,e(e.s=t);var t}));var t=e.O();_N_E=t}]);