(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4369)}])},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,s=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);a=!0);}catch(u){i=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var s,a=(s=n(7294))&&s.__esModule?s:{default:s},i=n(1003),u=n(880),l=n(9246);var c={};function d(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,r=u.useRouter(),s=a.default.useMemo((function(){var t=o(i.resolveHref(r,e.href,!0),2),n=t[0],s=t[1];return{href:n,as:e.as?i.resolveHref(r,e.as):s||n}}),[r,e.href,e.as]),f=s.href,h=s.as,p=e.children,x=e.replace,v=e.shallow,j=e.scroll,m=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var b=(t=a.default.Children.only(p))&&"object"===typeof t&&t.ref,y=o(l.useIntersection({rootMargin:"200px"}),2),g=y[0],C=y[1],S=a.default.useCallback((function(e){g(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,g]);a.default.useEffect((function(){var e=C&&n&&i.isLocalURL(f),t="undefined"!==typeof m?m:r&&r.locale,o=c[f+"%"+h+(t?"%"+t:"")];e&&!o&&d(r,f,h,{locale:t})}),[h,f,C,m,n,r]);var w={ref:S,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,s,a,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:s,locale:u,scroll:a}))}(e,r,f,h,x,v,j,m)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(f)&&d(r,f,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var A="undefined"!==typeof m?m:r&&r.locale,E=r&&r.isLocaleDomain&&i.getDomainLocale(h,A,r&&r.locales,r&&r.domainLocales);w.href=E||i.addBasePath(i.addLocale(h,A,r&&r.defaultLocale))}return a.default.cloneElement(t,w)};t.default=f},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,s=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);a=!0);}catch(u){i=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!i,c=s.useRef(),d=o(s.useState(!1),2),f=d[0],h=d[1],p=o(s.useState(t?t.current:null),2),x=p[0],v=p[1],j=s.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=u.get(r):(t=u.get(n),l.push(n));if(t)return t;var o=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(n,t={id:n,observer:s,elements:o}),t}(n),o=r.id,s=r.observer,a=r.elements;return a.set(e,t),s.observe(e),function(){if(a.delete(e),s.unobserve(e),0===a.size){s.disconnect(),u.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:x,rootMargin:n}))}),[r,x,n,f]);return s.useEffect((function(){if(!i&&!f){var e=a.requestIdleCallback((function(){return h(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),s.useEffect((function(){t&&v(t.current)}),[t]),[j,f]};var s=n(7294),a=n(4686),i="undefined"!==typeof IntersectionObserver;var u=new Map,l=[]},4369:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return f},default:function(){return h}});var r=n(4051),o=n.n(r),s=n(5893),a=n(9008),i=n(7294),u=n(1163),l=n(1664);function c(e,t,n,r,o,s,a){try{var i=e[s](a),u=i.value}catch(l){return void n(l)}i.done?t(u):Promise.resolve(u).then(r,o)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var s=e.apply(t,n);function a(e){c(s,r,o,a,i,"next",e)}function i(e){c(s,r,o,a,i,"throw",e)}a(void 0)}))}}var f=!0;function h(e){var t=e.properties,n=e.posts,r=(0,u.useRouter)(),c=(0,i.useState)(""),f=c[0],h=c[1],p=(0,i.useState)(""),x=p[0],v=p[1],j=(0,i.useState)(""),m=j[0],b=j[1],y=(0,i.useState)(""),g=y[0],C=y[1],S=(0,i.useState)(""),w=S[0],A=S[1],E=(0,i.useState)(""),N=E[0],_=E[1],L=(0,i.useState)(""),k=L[0],I=L[1],M=(0,i.useState)(""),O=M[0],T=M[1],D=(0,i.useState)(""),P=D[0],U=D[1],H=(0,i.useState)(""),R=H[0],F=H[1],J=(0,i.useState)(""),K=J[0],X=J[1],$=(0,i.useState)(""),q=$[0],z=$[1],B=(0,i.useState)(""),G=B[0],Q=B[1],V=(0,i.useState)(""),W=V[0],Y=V[1],Z=(0,i.useState)([]),ee=(Z[0],Z[1]),te=(0,i.useState)(!1),ne=(te[0],te[1]),re=(0,i.useState)(""),oe=re[0],se=re[1],ae=(0,i.useState)(""),ie=ae[0],ue=ae[1],le=(0,i.useState)(""),ce=le[0],de=le[1],fe=(0,i.useState)(""),he=fe[0],pe=fe[1],xe=(0,i.useState)(""),ve=xe[0],je=xe[1],me=(0,i.useState)(""),be=me[0],ye=me[1];(0,i.useEffect)((function(){ee(n)}),[n]);var ge=function(){var e=d(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ne(!0),t.preventDefault(),e.next=4,fetch("http://localhost:3000/api/posts",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({FirstName:he},{EmailAddress:ve},{Mobile:be})});case 4:return n=e.sent,e.next=7,n.json();case 7:n=e.sent,pe(""),je(""),ye(""),ne(!1),console.log(JSON.stringify(n)),window.location.reload(!1);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ce=function(){var e=d(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ne(!0),t.preventDefault(),e.next=4,fetch("http://localhost:3000/api/posts?index_id=".concat(ie),{method:"PUT",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0},body:ce});case 4:return n=e.sent,e.next=7,n.json();case 7:n=e.sent,ue(""),de(""),ne(!1),console.log(JSON.stringify(n)),r.push("/".concat(ce));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Se=function(){var e=d(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ne(!0),t.preventDefault(),r.push("/".concat(oe)),se(""),ne(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),we=function(){var e=d(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ne(!0),t.preventDefault(),e.next=4,fetch("http://localhost:3000/api/posts",{method:"POST",body:JSON.stringify({FirstName:f,Surname:x,Mobile:m,EmailAddress:g,HomeAddress:{firstLine:w,secondline:N,Town:k,County:O,Eircode:P},ShippingAddress:{firstLine:R,secondline:K,Town:q,County:G,Eircode:W}})});case 4:return n=e.sent,e.next=7,n.json();case 7:n=e.sent,console.log(n),h(""),v(""),C(""),b(""),ne(!1),A(""),_(""),I(""),T(""),U(""),F(""),X(""),z(""),Q(""),Y(""),window.location.reload(!1);case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,s.jsxs)("div",{children:[(0,s.jsxs)(a.default,{children:[(0,s.jsx)("title",{children:"Customer Information"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:"Navigate the site using the links below"})," ",(0,s.jsx)(l.default,{href:"/items",children:(0,s.jsx)("a",{children:"Phone Items"})})," ",(0,s.jsx)(l.default,{href:"/customeritems",children:(0,s.jsx)("a",{children:"Customer Orders"})}),(0,s.jsx)("h1",{children:"Customer Information"}),(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Customer ID"}),(0,s.jsx)("th",{children:"First Name"}),(0,s.jsx)("th",{children:"Surname"}),(0,s.jsx)("th",{children:"Mobile"}),(0,s.jsx)("th",{children:"Email Address"}),(0,s.jsx)("th",{children:"Home Address"}),(0,s.jsx)("th",{children:"Shipping Address"})]}),t&&t.map((function(e){var t,n,r,o,a,i,u,l,c,d;return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:e._id}),(0,s.jsx)("td",{children:e.FirstName}),(0,s.jsx)("td",{children:e.Surname}),(0,s.jsx)("td",{children:e.Mobile}),(0,s.jsx)("td",{children:e.EmailAddress}),(0,s.jsxs)("td",{children:[null===(t=e.HomeAddress)||void 0===t?void 0:t.firstLine,(0,s.jsx)("br",{}),null===(n=e.HomeAddress)||void 0===n?void 0:n.secondline,(0,s.jsx)("br",{}),null===(r=e.HomeAddress)||void 0===r?void 0:r.Town,(0,s.jsx)("br",{}),null===(o=e.HomeAddress)||void 0===o?void 0:o.County,(0,s.jsx)("br",{}),null===(a=e.HomeAddress)||void 0===a?void 0:a.Eircode]}),(0,s.jsxs)("td",{children:[null===(i=e.ShippingAddress)||void 0===i?void 0:i.firstLine,(0,s.jsx)("br",{}),null===(u=e.ShippingAddress)||void 0===u?void 0:u.secondline,(0,s.jsx)("br",{}),null===(l=e.ShippingAddress)||void 0===l?void 0:l.Town,(0,s.jsx)("br",{}),null===(c=e.ShippingAddress)||void 0===c?void 0:c.County,(0,s.jsx)("br",{}),null===(d=e.ShippingAddress)||void 0===d?void 0:d.Eircode]})]},e._id)}))]})})]}),(0,s.jsx)("h3",{children:"Create New Customer"}),(0,s.jsxs)("form",{children:[(0,s.jsx)("label",{children:"First Name"}),(0,s.jsx)("input",{type:"text",name:"fname",onChange:function(e){return h(e.target.value)},value:f}),(0,s.jsx)("br",{}),(0,s.jsx)("label",{children:"Surname"}),(0,s.jsx)("input",{type:"text",name:"lname",onChange:function(e){return v(e.target.value)},value:x}),(0,s.jsx)("br",{}),(0,s.jsx)("label",{children:"Mobile"}),(0,s.jsx)("input",{type:"text",name:"mobile",onChange:function(e){return b(e.target.value)},value:m}),(0,s.jsx)("br",{}),(0,s.jsx)("label",{children:"Email Address"}),(0,s.jsx)("input",{type:"text",name:"email",onChange:function(e){return C(e.target.value)},value:g}),(0,s.jsx)("br",{}),(0,s.jsx)("p",{children:(0,s.jsx)("b",{children:"Home Address"})}),(0,s.jsx)("label",{children:"First Line of Address"}),(0,s.jsx)("input",{type:"text",name:"address1",onChange:function(e){return A(e.target.value)},value:w}),(0,s.jsx)("br",{}),(0,s.jsx)("label",{children:"Second Line of Address"}),(0,s.jsx)("input",{type:"text",name:"address2",onChange:function(e){return _(e.target.value)},value:N}),(0,s.jsx)("br",{}),(0,s.jsx)("label",{children:"Town"}),(0,s.jsx)("input",{type:"text",name:"town",onChange:function(e){return I(e.target.value)},value:k}),(0,s.jsx)("br",{}),(0,s.jsx)("label",{children:"County"}),(0,s.jsx)("input",{type:"text",name:"county",onChange:function(e){return T(e.target.value)},value:O}),(0,s.jsx)("br",{}),(0,s.jsx)("label",{children:"EIRCODE"}),(0,s.jsx)("input",{type:"text",name:"eircode",onChange:function(e){return U(e.target.value)},value:P}),(0,s.jsx)("br",{}),(0,s.jsx)("p",{children:(0,s.jsx)("b",{children:"Shipping Address"})}),(0,s.jsx)("label",{children:"First Line of Address"}),(0,s.jsx)("input",{type:"text",name:"address1",onChange:function(e){return F(e.target.value)},value:R}),(0,s.jsx)("br",{}),(0,s.jsx)("label",{children:"Second Line of Address"}),(0,s.jsx)("input",{type:"text",name:"address2",onChange:function(e){return X(e.target.value)},value:K}),(0,s.jsx)("br",{}),(0,s.jsx)("label",{children:"Town"}),(0,s.jsx)("input",{type:"text",name:"town",onChange:function(e){return z(e.target.value)},value:q}),(0,s.jsx)("br",{}),(0,s.jsx)("label",{children:"County"}),(0,s.jsx)("input",{type:"text",name:"county",onChange:function(e){return Q(e.target.value)},value:G}),(0,s.jsx)("br",{}),(0,s.jsx)("label",{children:"EIRCODE"}),(0,s.jsx)("input",{type:"text",name:"eircode",onChange:function(e){return Y(e.target.value)},value:W}),(0,s.jsx)("br",{}),(0,s.jsx)("button",{onClick:we,children:"Create New User"})]}),(0,s.jsx)("h3",{children:"Search For Customer"}),(0,s.jsxs)("form",{children:[(0,s.jsx)("label",{children:"Enter Customers Name"}),(0,s.jsx)("input",{type:"text",name:"eircode",onChange:function(e){return se(e.target.value)},value:oe}),(0,s.jsx)("br",{}),(0,s.jsx)("button",{onClick:Se,children:"Search"})]}),(0,s.jsx)("h3",{children:"Update Customer Name"}),(0,s.jsxs)("form",{children:[(0,s.jsx)("label",{children:"Enter Customers Current Name"}),(0,s.jsx)("input",{type:"text",name:"eircode",onChange:function(e){return ue(e.target.value)},value:ie}),(0,s.jsx)("br",{}),(0,s.jsx)("label",{children:"Enter Customers Updated Name"}),(0,s.jsx)("input",{type:"text",name:"eircode",onChange:function(e){return de(e.target.value)},value:ce}),(0,s.jsx)("br",{}),(0,s.jsx)("button",{onClick:Ce,children:"Update"})]}),(0,s.jsx)("h3",{children:"Delete A Customer From The Database"}),(0,s.jsxs)("form",{children:[(0,s.jsx)("label",{children:"Enter Customers Name"}),(0,s.jsx)("input",{type:"text",name:"eircode",onChange:function(e){return pe(e.target.value)},value:he}),(0,s.jsx)("br",{}),(0,s.jsx)("label",{children:"Enter Customers Email"}),(0,s.jsx)("input",{type:"text",name:"eircode",onChange:function(e){return je(e.target.value)},value:ve}),(0,s.jsx)("br",{}),(0,s.jsx)("label",{children:"Enter Customers Phone"}),(0,s.jsx)("input",{type:"text",name:"eircode",onChange:function(e){return ye(e.target.value)},value:be}),(0,s.jsx)("br",{}),(0,s.jsx)("button",{onClick:ge,children:"Delete Customer"})]})]})}},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);