(this.webpackJsonpweb_personal=this.webpackJsonpweb_personal||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),s=(a(11),a(1)),i=a.n(s),l=a(5),u=a(2),m=(a(13),a(14),r.a.createContext({})),p=m.Provider,f=m;function v(){var e=Object(n.useContext)(f);return r.a.createElement("div",{className:"cardUserInfo"},r.a.createElement("img",{className:"cardUserInfo__avatar",src:e.userInfo.avatar_url,alt:""}),r.a.createElement("p",null,e.userInfo.bio))}a(15);function d(){var e=Object(n.useContext)(f);return r.a.createElement("div",{className:"navBar"},r.a.createElement("h2",{className:"navBar__title"},e.userInfo.name))}a(16);function E(e){var t=e.text;return r.a.createElement("button",{className:"btnLink"},t)}a(17);function h(e){var t=e.name,a=e.description,n=e.url;return r.a.createElement("div",{className:"project"},r.a.createElement("p",{className:"project__title"},t),r.a.createElement("p",{className:"project__description"},a),r.a.createElement("div",{className:"project__buttons"},r.a.createElement("a",{href:n,target:"_blank"},r.a.createElement(E,{text:"Ir al repo"})),r.a.createElement("a",{href:"https://franruedaesq.github.io/".concat(t),target:"_blank"},r.a.createElement(E,{text:"Ir a web"}))))}a(18);function b(){var e=Object(n.useContext)(f);return r.a.createElement("div",{className:"projectsContainer"},r.a.createElement("h2",{className:"projectsContainer__title"},"Projects"),r.a.createElement("div",{className:"projectsContainer__container"},e.repos.map((function(e){return r.a.createElement(h,{name:e.name,description:e.description,key:e.id,url:e.html_url})}))))}var _=function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),s=Object(u.a)(o,2),m=s[0],f=s[1];Object(n.useEffect)((function(){E("https://api.github.com/users/franruedaesq",c),E("https://api.github.com/users/franruedaesq/repos",f)}),[]);var E=function(){var e=Object(l.a)(i.a.mark((function e(t,a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,a(r);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),h={userInfo:a,repos:m};return r.a.createElement(p,{value:h},r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(v,null),r.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.69ad9c82.chunk.js.map