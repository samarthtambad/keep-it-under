(this["webpackJsonpkeep-it-under"]=this["webpackJsonpkeep-it-under"]||[]).push([[0],{27:function(e,a,s){},28:function(e,a,s){},29:function(e,a,s){},34:function(e,a,s){},35:function(e,a,s){},36:function(e,a,s){},43:function(e,a,s){},44:function(e,a,s){"use strict";s.r(a);var n=s(1),i=s(0),g=s.n(i),t=s(8),c=s.n(t),r=(s(27),s(4)),m=s(2),u=(s(28),s(3)),l=s(12),o=s(5);s(29);function d(){var e=Object(m.a)([""]);return d=function(){return e},e}var p=u.a.div(d()),v=function(e){var a=e.id,s=e.type,g=e.data,t=e.label,c=e.validate,m=e.placeholder,u=e.onChange,l=Object(i.useState)(g[a]),o=Object(r.a)(l,2),d=o[0],p=o[1],v=Object(i.useState)(null),b=Object(r.a)(v,2),j=b[0],O=b[1];return Object(n.jsxs)("div",{className:"input-group input-group-sm mb-3",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("label",{className:"input-group-text",htmlFor:a,children:t})}),Object(n.jsx)("input",{type:s,className:"form-control ".concat(null!=j?"is-invalid":""),value:d,onChange:function(e){var n="number"===s?parseInt(e.target.value):e.target.value,i=c[a](n);p(n),O(i),u(e)},id:a,placeholder:m}),null!=j&&Object(n.jsxs)("div",{className:"invalid-feedback",children:[" ",j]})]})},b=function(e){var a=e.initialValues,s=e.validate,g=e.onSubmit,t=(e.className,Object(i.useState)(a)),c=Object(r.a)(t,2),m=c[0],u=c[1],d=Object(i.useState)(!0),b=Object(r.a)(d,2),j=b[0],O=b[1],S=function(e){var a=e.target.id,s="number"===e.target.type?parseInt(e.target.value):e.target.value;u(Object(o.a)(Object(o.a)({},m),{},Object(l.a)({},a,s)))};Object(i.useEffect)((function(){var e=!1;Object.keys(m).forEach((function(a){null!=s[a](m[a])&&(e=e||!0)})),O(e)}),[m,s]);return Object(n.jsxs)(p,{children:[Object(n.jsx)("h5",{className:"mb-3",children:"Game Information"}),Object(n.jsx)(v,{id:"firstPlayerName",type:"text",data:m,validate:s,label:"Player 1",placeholder:"Enter name",onChange:S}),Object(n.jsx)(v,{id:"secondPlayerName",type:"text",data:m,validate:s,label:"Player 2",placeholder:"Enter name",onChange:S}),Object(n.jsx)(v,{id:"goalNumber",type:"number",data:m,validate:s,label:"Goal Num (G)",placeholder:"Enter goal number",onChange:S}),Object(n.jsx)(v,{id:"numCards",type:"number",data:m,validate:s,label:"Num Cards (N)",placeholder:"Enter number of cards",onChange:S}),Object(n.jsx)("button",{className:"btn btn-primary btn-sm",type:"button",disabled:j,onClick:function(e){g(m)},children:"Start New Game"})]})},j=s(6),O=(s(34),s(7)),S=[{code:"4H",image:"/images/4H.png",images:{svg:"/images/4H.svg",png:"/images/4H.png"},value:"4",suit:"HEARTS"},{code:"0C",image:"/images/0C.png",images:{svg:"/images/0C.svg",png:"/images/0C.png"},value:"10",suit:"CLUBS"},{code:"4C",image:"/images/4C.png",images:{svg:"/images/4C.svg",png:"/images/4C.png"},value:"4",suit:"CLUBS"},{code:"AD",image:"/images/aceDiamonds.png",images:{svg:"/images/aceDiamonds.svg",png:"/images/aceDiamonds.png"},value:"ACE",suit:"DIAMONDS"},{code:"JS",image:"/images/JS.png",images:{svg:"/images/JS.svg",png:"/images/JS.png"},value:"JACK",suit:"SPADES"},{code:"JD",image:"/images/JD.png",images:{svg:"/images/JD.svg",png:"/images/JD.png"},value:"JACK",suit:"DIAMONDS"},{code:"6S",image:"/images/6S.png",images:{svg:"/images/6S.svg",png:"/images/6S.png"},value:"6",suit:"SPADES"},{code:"2H",image:"/images/2H.png",images:{svg:"/images/2H.svg",png:"/images/2H.png"},value:"2",suit:"HEARTS"},{code:"3D",image:"/images/3D.png",images:{svg:"/images/3D.svg",png:"/images/3D.png"},value:"3",suit:"DIAMONDS"},{code:"JC",image:"/images/JC.png",images:{svg:"/images/JC.svg",png:"/images/JC.png"},value:"JACK",suit:"CLUBS"},{code:"5H",image:"/images/5H.png",images:{svg:"/images/5H.svg",png:"/images/5H.png"},value:"5",suit:"HEARTS"},{code:"4S",image:"/images/4S.png",images:{svg:"/images/4S.svg",png:"/images/4S.png"},value:"4",suit:"SPADES"},{code:"8H",image:"/images/8H.png",images:{svg:"/images/8H.svg",png:"/images/8H.png"},value:"8",suit:"HEARTS"},{code:"7D",image:"/images/7D.png",images:{svg:"/images/7D.svg",png:"/images/7D.png"},value:"7",suit:"DIAMONDS"},{code:"QS",image:"/images/QS.png",images:{svg:"/images/QS.svg",png:"/images/QS.png"},value:"QUEEN",suit:"SPADES"},{code:"7C",image:"/images/7C.png",images:{svg:"/images/7C.svg",png:"/images/7C.png"},value:"7",suit:"CLUBS"},{code:"8C",image:"/images/8C.png",images:{svg:"/images/8C.svg",png:"/images/8C.png"},value:"8",suit:"CLUBS"},{code:"JH",image:"/images/JH.png",images:{svg:"/images/JH.svg",png:"/images/JH.png"},value:"JACK",suit:"HEARTS"},{code:"2C",image:"/images/2C.png",images:{svg:"/images/2C.svg",png:"/images/2C.png"},value:"2",suit:"CLUBS"},{code:"QC",image:"/images/QC.png",images:{svg:"/images/QC.svg",png:"/images/QC.png"},value:"QUEEN",suit:"CLUBS"},{code:"6C",image:"/images/6C.png",images:{svg:"/images/6C.svg",png:"/images/6C.png"},value:"6",suit:"CLUBS"},{code:"KH",image:"/images/KH.png",images:{svg:"/images/KH.svg",png:"/images/KH.png"},value:"KING",suit:"HEARTS"},{code:"5C",image:"/images/5C.png",images:{svg:"/images/5C.svg",png:"/images/5C.png"},value:"5",suit:"CLUBS"},{code:"QH",image:"/images/QH.png",images:{svg:"/images/QH.svg",png:"/images/QH.png"},value:"QUEEN",suit:"HEARTS"},{code:"AS",image:"/images/AS.png",images:{svg:"/images/AS.svg",png:"/images/AS.png"},value:"ACE",suit:"SPADES"},{code:"KS",image:"/images/KS.png",images:{svg:"/images/KS.svg",png:"/images/KS.png"},value:"KING",suit:"SPADES"},{code:"7H",image:"/images/7H.png",images:{svg:"/images/7H.svg",png:"/images/7H.png"},value:"7",suit:"HEARTS"},{code:"4D",image:"/images/4D.png",images:{svg:"/images/4D.svg",png:"/images/4D.png"},value:"4",suit:"DIAMONDS"},{code:"0S",image:"/images/0S.png",images:{svg:"/images/0S.svg",png:"/images/0S.png"},value:"10",suit:"SPADES"},{code:"8S",image:"/images/8S.png",images:{svg:"/images/8S.svg",png:"/images/8S.png"},value:"8",suit:"SPADES"},{code:"8D",image:"/images/8D.png",images:{svg:"/images/8D.svg",png:"/images/8D.png"},value:"8",suit:"DIAMONDS"},{code:"AH",image:"/images/AH.png",images:{svg:"/images/AH.svg",png:"/images/AH.png"},value:"ACE",suit:"HEARTS"},{code:"6D",image:"/images/6D.png",images:{svg:"/images/6D.svg",png:"/images/6D.png"},value:"6",suit:"DIAMONDS"},{code:"KD",image:"/images/KD.png",images:{svg:"/images/KD.svg",png:"/images/KD.png"},value:"KING",suit:"DIAMONDS"},{code:"3C",image:"/images/3C.png",images:{svg:"/images/3C.svg",png:"/images/3C.png"},value:"3",suit:"CLUBS"},{code:"3S",image:"/images/3S.png",images:{svg:"/images/3S.svg",png:"/images/3S.png"},value:"3",suit:"SPADES"},{code:"0H",image:"/images/0H.png",images:{svg:"/images/0H.svg",png:"/images/0H.png"},value:"10",suit:"HEARTS"},{code:"7S",image:"/images/7S.png",images:{svg:"/images/7S.svg",png:"/images/7S.png"},value:"7",suit:"SPADES"},{code:"6H",image:"/images/6H.png",images:{svg:"/images/6H.svg",png:"/images/6H.png"},value:"6",suit:"HEARTS"},{code:"AC",image:"/images/AC.png",images:{svg:"/images/AC.svg",png:"/images/AC.png"},value:"ACE",suit:"CLUBS"},{code:"2S",image:"/images/2S.png",images:{svg:"/images/2S.svg",png:"/images/2S.png"},value:"2",suit:"SPADES"},{code:"9D",image:"/images/9D.png",images:{svg:"/images/9D.svg",png:"/images/9D.png"},value:"9",suit:"DIAMONDS"},{code:"5S",image:"/images/5S.png",images:{svg:"/images/5S.svg",png:"/images/5S.png"},value:"5",suit:"SPADES"},{code:"0D",image:"/images/0D.png",images:{svg:"/images/0D.svg",png:"/images/0D.png"},value:"10",suit:"DIAMONDS"},{code:"9S",image:"/images/9S.png",images:{svg:"/images/9S.svg",png:"/images/9S.png"},value:"9",suit:"SPADES"},{code:"2D",image:"/images/2D.png",images:{svg:"/images/2D.svg",png:"/images/2D.png"},value:"2",suit:"DIAMONDS"},{code:"QD",image:"/images/QD.png",images:{svg:"/images/QD.svg",png:"/images/QD.png"},value:"QUEEN",suit:"DIAMONDS"},{code:"KC",image:"/images/KC.png",images:{svg:"/images/KC.svg",png:"/images/KC.png"},value:"KING",suit:"CLUBS"},{code:"9H",image:"/images/9H.png",images:{svg:"/images/9H.svg",png:"/images/9H.png"},value:"9",suit:"HEARTS"},{code:"9C",image:"/images/9C.png",images:{svg:"/images/9C.svg",png:"/images/9C.png"},value:"9",suit:"CLUBS"},{code:"3H",image:"/images/3H.png",images:{svg:"/images/3H.svg",png:"/images/3H.png"},value:"3",suit:"HEARTS"},{code:"5D",image:"/images/5D.png",images:{svg:"/images/5D.svg",png:"/images/5D.png"},value:"5",suit:"DIAMONDS"}];s(35),s(36);function f(){var e=Object(m.a)([""]);return f=function(){return e},e}var h=u.a.div(f()),D=function(e){var a=e.data,s=e.index,i=e.disabled;e.className;return Object(n.jsx)(O.b,{draggableId:a.code,isDragDisabled:i,index:s,children:function(e){return Object(n.jsx)(h,Object(o.a)(Object(o.a)(Object(o.a)({},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,children:Object(n.jsx)("div",{style:{height:100},className:"d-inline-block ml-2 mb-2",children:Object(n.jsx)("img",{className:"h-100",src:a.image,alt:"This is your card"})})}))}})};function x(){var e=Object(m.a)(["\n  display: flex;\n  overflow: scroll;\n"]);return x=function(){return e},e}function C(){var e=Object(m.a)(["\n  min-height: 140px;\n"]);return C=function(){return e},e}var N=u.a.div(C()),A=u.a.div(x()),H=function(e){var a=e.player,s=e.cards,i=e.disabled;e.className;return Object(n.jsxs)(N,{className:"border rounded p-3",children:[Object(n.jsx)("h6",{children:a.split("-").join(" ").toUpperCase()}),Object(n.jsx)(O.c,{droppableId:a,type:a,direction:"horizontal",children:function(e){return Object(n.jsxs)(A,Object(o.a)(Object(o.a)({ref:e.innerRef},e.droppableProps),{},{children:[s.map((function(e,a){return Object(n.jsx)(D,{data:e,index:a,disabled:i},"".concat(a,"-").concat(e.code))})),e.placeholder]}))}})]})};s(43);function y(){var e=Object(m.a)([""]);return y=function(){return e},e}function E(){var e=Object(m.a)([""]);return E=function(){return e},e}function I(){var e=Object(m.a)([""]);return I=function(){return e},e}function P(){var e=Object(m.a)([""]);return P=function(){return e},e}function K(){var e=Object(m.a)(["\n  min-height: 200px;\n"]);return K=function(){return e},e}function J(){var e=Object(m.a)(["\n  min-height: 200px;\n"]);return J=function(){return e},e}var G=u.a.div(J()),Q=u.a.div(K()),U=u.a.div(P()),T=u.a.div(I()),M=u.a.div(E()),R=u.a.div(y()),k=function(e){var a=e.currentPlayer,s=e.totalValue,g=e.goalNumber,t=(e.className,Object(i.useState)(a)),c=Object(r.a)(t,2),m=c[0],u=c[1];return Object(i.useEffect)((function(){"player-1"===a&&0===s?u(""):"over"!==a&&u("player-1"===a?"player-2":"player-1")}),[a,s]),Object(n.jsx)(G,{className:"border rounded mt-2 mb-2 p-3",children:Object(n.jsx)(O.c,{droppableId:"arena",type:a,direction:"horizontal",children:function(e){return Object(n.jsxs)(Q,Object(o.a)(Object(o.a)({ref:e.innerRef},e.droppableProps),{},{children:[Object(n.jsxs)(U,{className:"row ".concat(""===a?"d-none":""),children:[Object(n.jsxs)(M,{className:"col-sm-7",children:[Object(n.jsxs)(R,{className:"pb-3",children:[Object(n.jsx)("h6",{className:"d-inline-block w-50",children:"GAME ARENA"}),Object(n.jsx)("h6",{className:"d-inline-block h6 w-50 text-muted text-right",children:Object(n.jsx)("small",{children:Object(n.jsx)("i",{children:"Drop your cards into this area"})})})]}),Object(n.jsx)("h1",{className:"text-center display-1",children:s<=g?s:"Game Over!"}),Object(n.jsx)("h1",{className:"text-center text-muted",children:s<=g?"Total Value":"".concat(m.split("-").join(" ").toUpperCase()," loses")})]}),Object(n.jsxs)(T,{className:"col-sm-5 pl-5",children:[Object(n.jsxs)("h5",{className:"text-right",children:[Object(n.jsx)("span",{className:"text-muted",children:"Goal Number: "})," ",g]}),Object(n.jsxs)("h5",{className:"text-right",children:[Object(n.jsx)("span",{className:"text-muted",children:"Last Move: "})," ",m.split("-").join(" ").toUpperCase()]})]})]}),e.placeholder]}))}})})};function L(){var e=Object(m.a)([""]);return L=function(){return e},e}function w(){var e=Object(m.a)([""]);return w=function(){return e},e}var B=u.a.div(w()),F=u.a.div(L()),V=function(e){var a=e.gameInfo,s=e.startNewGame,g=e.onGameStart,t=(e.className,Object(i.useState)("")),c=Object(r.a)(t,2),m=c[0],u=c[1],l=Object(i.useState)(Array()),o=Object(r.a)(l,2),d=o[0],p=o[1],v=Object(i.useState)(Array()),b=Object(r.a)(v,2),f=b[0],h=b[1],D=Object(i.useState)(Array()),x=Object(r.a)(D,2),C=x[0],N=x[1],A=Object(i.useState)(0),y=Object(r.a)(A,2),E=y[0],I=y[1];Object(i.useEffect)((function(){if(s){for(var e=function(e){for(var a,s,n=Object(j.a)(e),i=n.length;0!==i;)s=Math.floor(Math.random()*i),a=n[i-=1],n[i]=n[s],n[s]=a;return n}(S),n=a.numCards,i=[],t=[],c=0;c<2*n;c+=2)i.push(e[c]),t.push(e[c+1]);u("player-1"),p(i),h(t),N([]),g()}}),[s,g,a]),Object(i.useEffect)((function(){var e=a.goalNumber,s=0,n=0;for(C.forEach((function(e){var a=e.value;switch(a){case"ACE":n+=1;break;case"JACK":case"QUEEN":case"KING":s+=10;break;default:s+=parseInt(a)}}));n>0;)s+11*n<=e?(s+=11*n,n=0):(s+=1,n-=1);I(s)}),[C,a]),Object(i.useEffect)((function(){var e=a.goalNumber;E>e&&u("over")}),[E,a]);return Object(n.jsx)(B,{children:Object(n.jsx)(O.a,{onDragEnd:function(e){var a=e.destination,s=e.source;e.draggableId;if(a&&(a.droppableId!==s.droppableId||a.index!==s.index))if("arena"!==a.droppableId){if(a.droppableId!==s.droppableId);else if("player-1"===s.droppableId){var n=d[s.index],i=Object(j.a)(d);i.splice(s.index,1),i.splice(a.index,0,n),p(i)}else if("player-2"===s.droppableId){var g=f[s.index],t=Object(j.a)(f);t.splice(s.index,1),t.splice(a.index,0,g),h(t)}}else if("player-1"===s.droppableId){var c=d[s.index],r=Object(j.a)(d),m=Object(j.a)(C);r.splice(s.index,1),m.push(c),p(r),N(m),u("player-2")}else if("player-2"===s.droppableId){var l=f[s.index],o=Object(j.a)(f),v=Object(j.a)(C);o.splice(s.index,1),v.push(l),h(o),N(v),u("player-1")}},children:Object(n.jsxs)(F,{className:"border rounded p-3",children:[Object(n.jsx)(H,{player:"player-1",disabled:"player-1"!==m,cards:d,className:""}),Object(n.jsx)(k,{currentPlayer:m,totalValue:E,goalNumber:a.goalNumber}),Object(n.jsx)(H,{player:"player-2",disabled:"player-2"!==m,cards:f,className:""})]})})})},z=function(e,a,s){return""===a.trim()?"".concat(e," is required"):a.trim().length<s?"".concat(e," needs to be at least ")+s+" characters":null},q=function(e,a,s,n){return a?a<s?e+" must be at least "+s:a>n?e+" must be under "+n:null:e+" is required"};function W(){var e=Object(m.a)(["\n  font-size: 12px;\n  text-align: justify;\n"]);return W=function(){return e},e}function X(){var e=Object(m.a)([""]);return X=function(){return e},e}function Y(){var e=Object(m.a)([""]);return Y=function(){return e},e}function Z(){var e=Object(m.a)([""]);return Z=function(){return e},e}function $(){var e=Object(m.a)([""]);return $=function(){return e},e}function _(){var e=Object(m.a)([""]);return _=function(){return e},e}function ee(){var e=Object(m.a)([""]);return ee=function(){return e},e}var ae=u.a.div(ee()),se=u.a.div(_()),ne=u.a.div($()),ie=u.a.div(Z()),ge=u.a.div(Y()),te=u.a.ol(X()),ce=u.a.li(W()),re=function(){var e=Object(i.useState)(!1),a=Object(r.a)(e,2),s=a[0],g=a[1],t=Object(i.useState)({firstPlayerName:"",secondPlayerName:"",goalNumber:21,numCards:10}),c=Object(r.a)(t,2),m=c[0],u=c[1],l={firstPlayerName:function(e){return z("First Player name",e,3)},secondPlayerName:function(e){return z("Second Player name",e,3)},goalNumber:function(e){return q("Goal number",e,21,120)},numCards:function(e){return q("Number of cards",e,8,26)}};return Object(n.jsxs)(ae,{className:"row p-3 ml-0 mr-0",children:[Object(n.jsxs)(se,{className:"col-sm-3 pl-0 pr-0",children:[Object(n.jsx)(ge,{className:"border rounded p-3 mb-3",children:Object(n.jsx)(b,{initialValues:m,validate:l,onSubmit:function(e){console.log("handleGameInfoFormSubmit",e),u(e),g(!0)}})}),Object(n.jsxs)(ie,{className:"border rounded p-3",children:[Object(n.jsx)("h5",{className:"",children:"Game Rules"}),Object(n.jsxs)(te,{className:"pl-3 pr-3 pt-2",children:[Object(n.jsx)(ce,{children:"Pick a goal number (G: between 21 and 120) and pick the number of cards (N: between 8 and 26) to be dealt to each player."}),Object(n.jsxs)(ce,{children:["Each player is dealt (face up) N cards randomly picked from a deck of 52 cards.",Object(n.jsx)("i",{children:"Each card has an associated value (2-10 have corresponding value, J/Q/K have value of 10 and A can have a value of 1 or 11)."})]}),Object(n.jsx)(ce,{children:"The players take turns and play a card from their hand by dragging it from their hand to the game arena."}),Object(n.jsx)(ce,{children:"The total value of cards played cannot exceed G. The player who gets the total to exceed G loses and the other player wins."})]})]})]}),Object(n.jsx)(ne,{className:"col-sm-9 pl-3 pr-0",children:Object(n.jsx)(V,{gameInfo:m,startNewGame:s,onGameStart:function(){console.log("Game Started"),g(!1)}})})]})},me=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,45)).then((function(a){var s=a.getCLS,n=a.getFID,i=a.getFCP,g=a.getLCP,t=a.getTTFB;s(e),n(e),i(e),g(e),t(e)}))};c.a.render(Object(n.jsx)(g.a.StrictMode,{children:Object(n.jsx)(re,{})}),document.getElementById("root")),me()}},[[44,1,2]]]);
//# sourceMappingURL=main.0ccb4be4.chunk.js.map