(()=>{"use strict";let t=document.querySelector("body"),i={length:3,timesHit:0,sunk:!1,hit:function(t=1){this.timesHit+=t,this.isSunk()},isSunk:function(){this.timesHit>=this.length&&(this.sunk=!0)}};i.hit(1),t.textContent=JSON.stringify(i),i.hit(1),i.hit(1),t.textContent+=JSON.stringify(i);let e=function(t=10){var i={boardstate:[]};for(let e=0;e<t;e++)for(let n=0;n<t;n++)i.boardstate.push([e,n]);return i}(10);t.textContent+=JSON.stringify(e.boardstate)})();