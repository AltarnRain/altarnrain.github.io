(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(13)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),u=n.n(o),l=n(1),c=(n(11),n(4));function i(e,t,n,a,r,o,u,l){var c=0,i=0;"up"===u?c=-1:"down"===u&&(c=1),"left"===l?i=-1:"right"===l&&(i=1);for(var s=1,m=1,d=[],f=0;f<t;f++)d.push(p(e,r+s++*c,o+m++*i,a));return d.every(function(e){return e===n})}function p(e,t,n,a){var r=a;return e.length>t&&t>-1&&e[t].length>n&&(r=e[t][n]),r}var s=function(e){return r.a.createElement("td",{style:{backgroundColor:e.color},onClick:function(){e.onClick&&e.onClick(e.colIndex)}})},m=function(e){var t="undefined"!==typeof e.setup?e.setup.gridX:7,n="undefined"!==typeof e.setup?e.setup.gridY:6,o="undefined"!==typeof e.setup?e.setup.player1Name:"player 1",u="undefined"!==typeof e.setup?e.setup.player2Name:"player 2",p="undefined"!==typeof e.setup?e.setup.winNumber:4,m=Object(a.useState)(N()),d=Object(l.a)(m,2),f=d[0],b=d[1],h=Object(a.useState)(!1),g=Object(l.a)(h,2),y=g[0],v=g[1],E=Object(a.useState)(o),w=Object(l.a)(E,2),j=w[0],k=w[1],O=Object(a.useState)("red"),C=Object(l.a)(O,2),S=C[0],x=C[1];function N(){for(var e=[],a=0;a<t;a++){"undefined"===typeof e[a]&&(e[a]=[]);for(var r=e[a],o=0;o<n;o++)r.push("white")}return e}function I(e){!function(e){if(!0!==y){for(var n=-1,a=t-1;a>-1;a--)if("white"===f[a][e]){n=a;break}if(-1!==n){var r=f.map(function(e){return Object(c.a)(e)});if(r[n][e]=S,b(r),function(e,t,n,a,r){var o=[],u=t-1;return o.push(i(e,u,r,"transparent",n,a,"up","none")),o.push(i(e,u,r,"transparent",n,a,"down","none")),o.push(i(e,u,r,"transparent",n,a,"none","left")),o.push(i(e,u,r,"transparent",n,a,"none","right")),o.push(i(e,u,r,"transparent",n,a,"up","left")),o.push(i(e,u,r,"transparent",n,a,"up","right")),o.push(i(e,u,r,"transparent",n,a,"down","left")),o.push(i(e,u,r,"transparent",n,a,"down","right")),o.some(function(e){return!0===e})}(f,p,n,e,S))return void v(!0);W()}}}(e)}function W(){j===o?(x("yellow"),k(u)):(x("red"),k(o))}return r.a.createElement("div",{style:{textAlign:"center"}},y?r.a.createElement("div",null,r.a.createElement("h1",null,j," has won the game"),r.a.createElement("button",{onClick:function(){v(!1),b(N()),W()}},"Play again?")):r.a.createElement("div",null,r.a.createElement("h2",null,"Current player: ",j),r.a.createElement("span",{style:{backgroundColor:S}},r.a.createElement("b",null,"Current color"))),r.a.createElement("br",null),r.a.createElement("table",{style:{borderColor:"blue",borderStyle:"solid",borderWidth:"2px",borderSpacing:"5px",backgroundColor:"blue",width:"1000px",height:"900px",marginLeft:"auto",marginRight:"auto"}},r.a.createElement("tbody",null,f.map(function(e,t){return r.a.createElement("tr",{key:t},e.map(function(e,t){return r.a.createElement(s,{key:t,color:e,colIndex:t,onClick:I})}))}))))},d=function(e){return r.a.createElement("div",null,r.a.createElement("span",null,e.text),r.a.createElement("input",{value:e.value,onChange:function(t){e.onChange&&e.onChange(e.name,t.target.value)}}))},f=function(e){var t=Object(a.useState)("Player 1"),n=Object(l.a)(t,2),o=n[0],u=n[1],c=Object(a.useState)("Player 2"),i=Object(l.a)(c,2),p=i[0],s=i[1],m=Object(a.useState)("6"),f=Object(l.a)(m,2),b=f[0],h=f[1],g=Object(a.useState)("7"),y=Object(l.a)(g,2),v=y[0],E=y[1],w=Object(a.useState)("4"),j=Object(l.a)(w,2),k=j[0],O=j[1];function C(e,t){switch(e){case"player1Name":u(t);break;case"player2Name":s(t);break;case"gridX":h(t);break;case"gridY":E(t);break;case"winNumber":O(t);break;default:throw new Error("".concat(e," is not supported."))}}return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to ",k," in a row"),r.a.createElement("p",null,'Feel free to setup the game to you liking. Click "Done" when you\'re done.'),r.a.createElement(d,{value:o,name:"player1Name",text:"Enter player 1's name: ",onChange:C}),r.a.createElement(d,{value:p,name:"player2Name",text:"Enter player 2's name: ",onChange:C}),r.a.createElement(d,{value:b,name:"gridX",text:"Number of rows: ",onChange:C}),r.a.createElement(d,{value:v,name:"gridY",text:"Number of columns: ",onChange:C}),r.a.createElement(d,{value:k,name:"winNumber",text:"Win number: ",onChange:C}),r.a.createElement("button",{onClick:function(){var t={player1Name:o,player2Name:p,gridX:parseInt(b,10),gridY:parseInt(v,10),winNumber:parseInt(k,10)};e.onSetup(t)}},"Done"))},b=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],o=t[1],u=Object(a.useState)(),c=Object(l.a)(u,2),i=c[0],p=c[1];return r.a.createElement("div",null,n?r.a.createElement(m,{setup:i}):r.a.createElement(f,{onSetup:function(e){p(e),o(!0)}}))};n(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[5,1,2]]]);
//# sourceMappingURL=main.962242ac.chunk.js.map