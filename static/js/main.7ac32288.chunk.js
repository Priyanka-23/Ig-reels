(this["webpackJsonpig-reels"]=this["webpackJsonpig-reels"]||[]).push([[0],{47:function(e,a,t){e.exports=t(72)},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},61:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t.n(l),o=(t(52),t(26)),s=(t(53),t(54),t(55),t(34)),i=t.n(s),m=t(39),u=t.n(m);var d=function(){return r.a.createElement("div",{className:"videoHeader"},r.a.createElement(i.a,null),r.a.createElement("h3",null,"Reels"),r.a.createElement(u.a,null))},v=(t(61),t(87)),p=t(86),E=t(41),f=t.n(E),h=t(40),g=t(29),N=t.n(g),b=t(43),w=t.n(b),k=t(42),S=t.n(k),_=t(28),F=t.n(_);var j=function(e){var a=e.channel,t=e.song,n=e.likes,l=e.shares,c=e.avatarSrc;return r.a.createElement("div",{className:"videoFooter"},r.a.createElement("div",{className:"videoFooter_text"},r.a.createElement(v.a,{src:c}),r.a.createElement("h3",null,a," \u2022 ",r.a.createElement(p.a,null," Follow "))),r.a.createElement("div",{className:"videoFooter_ticker"},r.a.createElement(f.a,{className:"videoFooter_icon"}),r.a.createElement(h.a,{mode:"smooth"},(function(e){e.index;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,t))}))),r.a.createElement("div",{className:"videoFooter_actions"},r.a.createElement("div",{className:"videoFooter_actionsLeft"},r.a.createElement(F.a,null),r.a.createElement(N.a,null),r.a.createElement(S.a,null),r.a.createElement(w.a,null)),r.a.createElement("div",{className:"videoFooter_actionsRight"},r.a.createElement("div",{className:"videoFooter_stat"},r.a.createElement(F.a,{fontSize:"medium"}),r.a.createElement("p",null,n)),r.a.createElement("div",{className:"videoFooter_stat"},r.a.createElement(N.a,{fontSize:"small"}),r.a.createElement("p",null,l)))))};var I=function(e){var a=e.url,t=e.likes,l=e.shares,c=e.channel,s=e.avatarSrc,i=e.song,m=Object(n.useState)(!1),u=Object(o.a)(m,2),v=u[0],p=u[1],E=Object(n.useRef)(null);return r.a.createElement("div",{className:"videocard"},r.a.createElement(d,null),r.a.createElement("video",{ref:E,onClick:function(){v?(E.current.pause(),p(!1)):(E.current.play(),p(!0))},className:"videocard_player",src:a,alt:"IG reels video",loop:!0}),r.a.createElement(j,{channel:c,likes:t,shares:l,avatarSrc:s,song:i}))},y=t(44),O=t.n(y).a.initializeApp({apiKey:"AIzaSyCE2oosZGmrjtLadwk7MuNp0ksUfYD86p8",authDomain:"ig-reels-38330.firebaseapp.com",databaseURL:"https://ig-reels-38330.firebaseio.com",projectId:"ig-reels-38330",storageBucket:"ig-reels-38330.appspot.com",messagingSenderId:"1011215090526",appId:"1:1011215090526:web:a8e49fb6302eb49e0145cf",measurementId:"G-4NJQ80XL6M"}).firestore();var L=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){O.collection("reels").onSnapshot((function(e){l(e.docs.map((function(e){return e.data()})))}))}),[]),r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app_top"},r.a.createElement("img",{src:"https://www.transparentpng.com/thumb/logo-instagram/C3469L-new-logo-instagram-clipart-photos.png",className:"app_logo"}),r.a.createElement("h1",null,"Reels")),r.a.createElement("div",{className:"app_videos"},t.map((function(e){var a=e.channel,t=e.avatarSrc,n=e.likes,l=e.shares,c=e.url,o=e.song;return r.a.createElement(I,{channel:a,avatarSrc:t,song:o,url:c,likes:n,shares:l})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.7ac32288.chunk.js.map