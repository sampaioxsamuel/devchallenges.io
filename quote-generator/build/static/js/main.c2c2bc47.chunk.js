(this["webpackJsonpquote-generator"]=this["webpackJsonpquote-generator"]||[]).push([[0],{12:function(e,t,a){e.exports={quotes:"Author_quotes__3DEhJ",loading:"Author_loading__1Eocs",author:"Author_author__y4j49",quoteTexts:"Author_quoteTexts__3c61g",backArrow:"Author_backArrow__28LUv",animation:"Author_animation__VSPKd",animationPage:"Author_animationPage__rsvOl"}},19:function(e,t,a){e.exports={header:"Header_header__3mObx",icon:"Header_icon__2X2E3",random:"Header_random__3F9u0"}},34:function(e,t,a){e.exports={footer:"Footer_footer__2NNgL"}},36:function(e,t,a){e.exports=a(81)},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),c=a.n(o),u=a(14),l=a(2),s=a(33),m=a.n(s),i=a(19),_=a.n(i),d=a(96),p=a(16),E=a.n(p),h=a(21),f=a(11),g=Object(n.createContext)(),v=function(e){var t=e.children,a=Object(n.useState)(null),o=Object(f.a)(a,2),c=o[0],u=o[1],l=Object(n.useState)(!1),s=Object(f.a)(l,2),m=s[0],i=s[1],_=function(){var e=Object(h.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,fetch("https://quote-garden.herokuapp.com/api/v2/quotes/random");case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,u(a),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),i(!0),console.log(e.t0);case 15:return e.prev=15,i(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,11,15,18]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(g.Provider,{value:{random:c,getRandomQuote:_,loading:m}},t)},q=function(){var e=r.a.useContext(g),t=e.random,a=e.getRandomQuote;return r.a.createElement("header",{className:_.a.header},r.a.createElement("div",{className:_.a.icon},r.a.createElement(d.a,{onClick:function(){a(),console.log(t)}},r.a.createElement("span",{className:_.a.span},"random ",r.a.createElement(m.a,{className:_.a.random})))))},x=a(34),b=a.n(x),N=function(){return r.a.createElement("footer",{className:b.a.footer},r.a.createElement("span",null,"Samuel Nogueira @ DevChalleges.io"))},j=a(9),w=a.n(j),k=a(24),A=function(){var e=Object(n.useContext)(g),t=e.random;return e.loading?r.a.createElement("div",{className:w.a.loading},r.a.createElement(k.Ellipsis,{color:"#F7DF94"})):null===t?null:r.a.createElement("section",{className:w.a.quotes+" "+w.a.animation},r.a.createElement("div",{className:w.a.quoteText},r.a.createElement("span",{className:w.a.block}),r.a.createElement("p",null,'"',t.quote.quoteText,'"'),r.a.createElement(u.b,{to:"author/".concat(t.quote.quoteAuthor)},r.a.createElement("div",{className:w.a.author},r.a.createElement("h2",null,t.quote.quoteAuthor," ",r.a.createElement("span",{className:w.a.arrow},"\u2192")),r.a.createElement("span",{className:w.a.genre},t.quote.quoteGenre)))))},O=a(12),Q=a.n(O),T=function(){var e=Object(l.h)().id,t=r.a.useState(null),a=Object(f.a)(t,2),n=a[0],o=a[1];return r.a.useEffect((function(){(function(){var e=Object(h.a)(E.a.mark((function e(t){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://quote-garden.herokuapp.com/api/v2/authors/".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,o(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(e)}),[e]),null===n?r.a.createElement("div",{className:Q.a.loading},r.a.createElement(k.Ellipsis,{color:"#F7DF94"})):r.a.createElement("section",{className:Q.a.quotes+" "+Q.a.animation},r.a.createElement("div",null,r.a.createElement(u.b,{to:"/"},r.a.createElement("span",{className:Q.a.backArrow},"\u2190")),r.a.createElement("h2",{className:Q.a.author},e),n.quotes.map((function(e){return r.a.createElement("p",{key:e._id,className:Q.a.quoteTexts},e.quoteText)}))))},F=(a(80),function(){return r.a.createElement("div",{className:"page-container"},r.a.createElement("div",{className:"content-wrap"},r.a.createElement(v,null,r.a.createElement(u.a,null,r.a.createElement(q,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",element:r.a.createElement(A,null)}),r.a.createElement(l.a,{path:"/author/:id",element:r.a.createElement(T,null)}))))),r.a.createElement(N,null))});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root"))},9:function(e,t,a){e.exports={quotes:"Quotes_quotes__1mCob",loading:"Quotes_loading__1bjAn",quoteText:"Quotes_quoteText__3p9tN",author:"Quotes_author__bwn9b",arrow:"Quotes_arrow__1xsDr",genre:"Quotes_genre__3O4Et",animation:"Quotes_animation__1FnD9",animationPage:"Quotes_animationPage__23dtT"}}},[[36,1,2]]]);
//# sourceMappingURL=main.c2c2bc47.chunk.js.map