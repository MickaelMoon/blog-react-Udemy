(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},23:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(8),r=a.n(c),i=(a(23),a(4)),o=(a(25),a(5));function u(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(window.innerWidth),u=Object(i.a)(r,2),m=u[0],s=u[1];return Object(n.useEffect)(function(){var e=function(){s(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]),l.a.createElement("nav",null,(a||m>500)&&l.a.createElement("ul",{className:"liste"},l.a.createElement("li",{className:"items"},l.a.createElement(o.b,{to:"/"},"Accueil")),l.a.createElement("li",{className:"items"},l.a.createElement(o.b,{to:"/ecrire"},"Ecrire")),l.a.createElement("li",{className:"items"},l.a.createElement(o.b,{to:"/contact"},"Contact"))),l.a.createElement("button",{onClick:function(){c(!a)},className:"btn"},"BTN"))}var m=a(7);a(27),a(29);function s(e){return l.a.createElement("div",{className:"card"},e.children)}var E=a(6),b=a(17),d={articles:[]};var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADDARTICLE":var a=Object(b.a)(e.articles);return a.unshift(t.payload),{articles:a};case"LOADARTICLES":return{articles:t.payload}}return e},p=function(){return function(e){fetch("https://jsonplaceholder.typicode.com/posts").then(function(e){return e.json()}).then(function(t){e({type:"LOADARTICLES",payload:t})})}},v=a(15);function h(){var e=Object(E.c)(function(e){return Object(m.a)({},e.articleReducer)}).articles,t=Object(E.b)();return Object(n.useEffect)(function(){0===e.length&&t(p())},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"home-title"},"Tous les articles"),l.a.createElement("div",{className:"container-cards"},e.map(function(e){return l.a.createElement(s,{key:Object(v.v4)()},l.a.createElement("h2",null,e.title),l.a.createElement(o.b,{to:"articles/".concat(e.title.replace(/\s+/g,"-").trim()),state:{title:e.title,body:e.body}},"Lire l'article"))})))}var j=a(0);a(36);function O(){var e=Object(n.useState)({title:"",body:""}),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(E.b)(),o=function(e){if(e.target.classList.contains("inp-title")){var t=Object(m.a)({},a,{title:e.target.value});c(t)}else if(e.target.classList.contains("inp-body")){var n=Object(m.a)({},a,{body:e.target.value});c(n)}};return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"title-form"},"Ecrivez un article"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r({type:"ADDARTICLE",payload:a}),c({title:"",body:""})},className:"container-form"},l.a.createElement("label",{htmlFor:"title"},"Titre"),l.a.createElement("input",{onChange:o,value:a.title,type:"text",id:"title",placeholder:"Entrez votre nom",className:"inp-title"}),l.a.createElement("label",{htmlFor:"title"},"Titre"),l.a.createElement("textarea",{onChange:o,value:a.body,id:"article",placeholder:"Votre article",className:"inp-body"}),l.a.createElement("button",null,"Envoyez l'article")))}function y(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(O,null))}a(38);function g(){var e=Object(j.e)();return console.log(e),l.a.createElement("div",{className:"article-content"},l.a.createElement("h2",null,"Votre article : ",e.state.title),l.a.createElement("p",null,e.state.body))}a(40);function w(){return l.a.createElement("div",{className:"container-contact"},l.a.createElement("h1",null,"Contactez-nous"),l.a.createElement("p",null,"Par mail : blogreact@gmail.com"),l.a.createElement("p",null,"Part t\xe9l\xe9phone : XX-XX-XX-XX"),l.a.createElement("p",null,"Rejoignez-nous sur les r\xe9seaux"),l.a.createElement("ul",null,l.a.createElement("li",null,"Facebook"),l.a.createElement("li",null,"Twitter"),l.a.createElement("li",null,"Youtube")))}var N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement(j.c,null,l.a.createElement(j.a,{path:"/",element:l.a.createElement(h,null)}),l.a.createElement(j.a,{path:"/ecrire",element:l.a.createElement(y,null)}),l.a.createElement(j.a,{path:"/contact",element:l.a.createElement(w,null)}),l.a.createElement(j.a,{path:"/articles/:slug",element:l.a.createElement(g,null)})))},L=a(9),A=a(16),C=Object(L.b)({articleReducer:f}),T=Object(L.c)(C,Object(L.a)(A.a));r.a.render(l.a.createElement(o.a,null,l.a.createElement(E.a,{store:T},l.a.createElement(N,null))),document.getElementById("root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.af6cb5f3.chunk.js.map