(window.webpackJsonpsnake=window.webpackJsonpsnake||[]).push([[0],{11:function(e,t,r){e.exports=r(16)},16:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(4),i=r.n(o),s=r(2),c=r(5),u=r(6),l=r(9),h=r(7),f=r(1),p=r(10),d=51,y=51,g={x:25,y:25},m=3,b=r(8);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(r,!0).forEach(function(t){Object(b.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function v(e){switch(e){case"background":return"green";case"fruit":return"red";case"player":return"yellow"}}function O(){return{x:Math.ceil(Math.random()*(d-1)),y:Math.ceil(Math.random()*(y-1))}}var C=function(e){var t={backgroundColor:v(e.actor),width:"".concat(15,"px"),height:"".concat(15,"px"),left:15*e.row,top:15*e.column,position:"absolute"};return a.a.createElement("div",{style:t})},j=function(e){return a.a.createElement(a.a.Fragment,null,e.actors.map(function(t,r){return a.a.createElement(C,{key:r,row:e.row,column:r,actor:t})}))},x=function(e){function t(e){var r;Object(c.a)(this,t),(r=Object(l.a)(this,Object(h.a)(t).call(this,e))).gameTickTimer=void 0,r.direction="up",r.playerCoordinates=function(){for(var e=[g],t=1;t<m;t++){var r=w({},e[t-1]);r.y++,e.push(r)}return e}(),r.fruitCoordinates=O();var n=function(){for(var e=[],t=0;t<d;t++){for(var r=[],n=0;n<y;n++)r.push("background");e.push(r)}return e}();return r.playerCoordinates.forEach(function(e){return n[e.x][e.y]="player"}),n[r.fruitCoordinates.x][r.fruitCoordinates.y]="fruit",r.state={gridActors:n,snakeLength:m,gameLost:!1},r.onKeyUp=r.onKeyUp.bind(Object(f.a)(r)),r.gameTick=r.gameTick.bind(Object(f.a)(r)),r}return Object(p.a)(t,e),Object(u.a)(t,[{key:"setNewFruitPosition",value:function(){this.fruitCoordinates=O()}},{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.onKeyUp),this.gameTickTimer=window.setInterval(this.gameTick,200)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.onKeyUp),window.clearInterval(this.gameTickTimer)}},{key:"gameTick",value:function(){if(!this.state.gameLost){var e=Object(s.a)(this.state.gridActors);this.playerCoordinates.forEach(function(t){return e[t.x][t.y]="background"});var t=function(e,t){var r=w({},e);switch(t){case"left":r.x--;break;case"up":r.y--;break;case"right":r.x++;break;case"down":r.y++}return r}(this.playerCoordinates[0],this.direction);if(t.x<0||t.x>=y||t.y<0||t.y>=d)this.setState({gameLost:!0,gameLostMessage:"You went outside the play field."});else{this.playerCoordinates.some(function(e){return e.x===t.x&&e.y===t.y})&&this.setState({gameLost:!0,gameLostMessage:"You hit your tail."});var r=this.state.snakeLength;"fruit"===e[t.x][t.y]?(r++,e[this.fruitCoordinates.x][this.fruitCoordinates.y]="background",this.setNewFruitPosition(),e[this.fruitCoordinates.x][this.fruitCoordinates.y]="fruit",this.playerCoordinates=[t].concat(Object(s.a)(this.playerCoordinates))):(this.playerCoordinates.pop(),this.playerCoordinates=[t].concat(Object(s.a)(this.playerCoordinates))),this.playerCoordinates.forEach(function(t){return e[t.x][t.y]="player"}),this.setState({gridActors:e,snakeLength:r})}}}},{key:"onKeyUp",value:function(e){if(e){var t=function(e){switch(e){case 37:return"left";case 38:return"up";case 39:return"right";case 40:return"down"}}(e.keyCode);r=t,n=this.direction,function(e){switch(e){case"up":return"down";case"down":return"up";case"left":return"right";case"right":return"left"}}(r)!==n&&(this.direction=t)}var r,n}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.state.gameLost?a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,this.state.gameLostMessage),a.a.createElement("p",null,"The length of the snake was: ",this.state.snakeLength.toString())):this.state.gridActors.map(function(e,t){return a.a.createElement(j,{key:t,row:t,actors:e})}))}}]),t}(a.a.Component);i.a.render(a.a.createElement(x,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.44f02d51.chunk.js.map