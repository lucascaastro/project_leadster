(this["webpackJsonpproject-1"]=this["webpackJsonpproject-1"]||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(9),s=n.n(r),o=(n(18),n(2)),i=n.n(o),u=n(8),b=n(6),j=n(3),l=(n(20),n(21),n(22),n(0)),d=function(e){e.title;var t=e.cover;e.id;return Object(l.jsx)("div",{className:"photo",style:{backgroundImage:"url(".concat(t,")")}})},h=function(e){var t=e.data;return Object(l.jsx)("div",{className:"photos",children:!!t.length&&t.map((function(e){var t=1e3*Math.random();return Object(l.jsx)(d,{cover:e.src.original},t)}))})},f=function(){var e=Object(b.a)(i.a.mark((function e(t,n){var c,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"563492ad6f91700001000001b6d497b1222b4550bf96a3a556435bc5",c="https://api.pexels.com/v1/search?query="+n+"&page="+t,a={headers:{Authorization:"563492ad6f91700001000001b6d497b1222b4550bf96a3a556435bc5"}},e.next=5,fetch(c,a).then((function(e){return e.json()}));case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=n(10),p=n(11),v=n(13),m=n(12),x=(n(24),function(e){Object(v.a)(n,e);var t=Object(m.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props,t=e.text,n=e.onClick,c=e.disabled;return Object(l.jsx)("button",{className:"button",onClick:n,disabled:c,children:t})}}]),n}(c.Component)),g=x,k=(n(25),function(e){return Object(l.jsx)("header",{children:Object(l.jsx)("h1",{className:"title",children:"Photos"})})}),N=(n(26),function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(j.a)(r,2),o=s[0],d=s[1],O=Object(c.useState)(15),p=Object(j.a)(O,1)[0],v=Object(c.useState)(0),m=Object(j.a)(v,2),x=m[0],N=m[1],w=Object(c.useState)(!1),y=Object(j.a)(w,2),C=y[0],S=y[1];Object(c.useEffect)((function(){d(0),I(0,"cool")}),[]);var P=Object(c.useRef)(null),q=o*p>=x,E=function(){""!=P.current.value.trim()?(d(0),a([]),N(0),I(0,P.current.value)):window.alert("Por favor informe uma categoria")},I=function(){var e=Object(b.a)(i.a.mark((function e(t,c){var r,s,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.next=3,f(t,c);case 3:r=e.sent,s=r.photos,o=r.total_results,s.length&&(a([].concat(Object(u.a)(n),Object(u.a)(s))),N(o)),S(!1);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(k,{}),Object(l.jsxs)("div",{className:"container-search",children:[Object(l.jsx)("input",{className:"input-search",placeholder:"Categoria de imagens",ref:P,onKeyDown:function(e){13==e.keyCode&&E()}}),Object(l.jsx)("button",{className:"btn-search",onClick:E,disabled:!1,children:"Pesquisar!"})]}),!C&&!!n.length&&Object(l.jsx)(h,{data:n}),!C&&null!==o&&!n.length&&Object(l.jsx)("div",{className:"noPhotos",children:"N\xe3o existem imagens para essa categoria\ud83d\ude2d"}),!C&&null!==o&&x>0&&Object(l.jsx)("section",{className:"container",children:Object(l.jsxs)("div",{className:"button-container",children:[Object(l.jsx)("br",{}),Object(l.jsx)(g,{text:"Carregar mais",onClick:function(){var e=o+1;d(e),I(e,P.current.value)},disabled:q})]})})]})});s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.f31fa27f.chunk.js.map