(this["webpackJsonpaim-trainer"]=this["webpackJsonpaim-trainer"]||[]).push([[0],{14:function(t,e,a){},21:function(t,e,a){t.exports=a.p+"static/media/red_dot.0773aac1.png"},22:function(t,e,a){t.exports=a(32)},32:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(19),s=a.n(i),c=a(8),o=(a(14),function(){return r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Aim Trainer"),r.a.createElement(c.b,{to:"/Track"},r.a.createElement("button",{className:"gameSetting"},"Track Training")),r.a.createElement(c.b,{to:"/Aim"},r.a.createElement("button",{className:"gameSetting"},"Aim Training"))))}),m=a(9),l=a(10),u=a(12),h=a(11),p=a(21),d=a.n(p),v=function(){return r.a.createElement("div",{unselectable:"on",className:"unselectable"},r.a.createElement("img",{src:d.a,alt:"RedDot",width:"20",height:"20"}))},f=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={timerOn:!1,timerStart:0,timerTime:0,trackStart:!1,posX:800,posY:450,velocity:5,direction:Math.PI/2},t.hoverOnHandler=function(){t.setState({timerOn:!0,timerTime:t.state.timerTime,timerStart:Date.now()-t.state.timerTime}),t.timer=setInterval((function(){t.setState({timerTime:Date.now()-t.state.timerStart})}),10)},t.hoverOutHandler=function(){t.setState({timerOn:!1}),clearInterval(t.timer)},t.resetTimer=function(){t.setState({timerStart:0,timerTime:0})},t.startTracking=function(){t.setState({trackStart:!0}),t.moving=setInterval((function(){var e=t.state.posX+t.state.velocity*Math.sin(t.state.direction),a=t.state.posY+t.state.velocity*Math.cos(t.state.direction);e<10||e>1590?t.setState({direction:2*Math.PI-t.state.direction}):a<10||a>890?t.setState({direction:Math.PI-t.state.direction}):t.setState({posX:e,posY:a})}),20),t.changeDirection=setInterval((function(){t.setState({direction:Math.random()*Math.PI*2})}),2e3)},t.stopTracking=function(){t.setState({trackStart:!1,posX:800,posY:450}),clearInterval(t.moving),clearInterval(t.changeDirection)},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state.timerTime,e=("0"+Math.floor(t/10)%100).slice(-2),a=("0"+Math.floor(t/1e3)%60).slice(-2),n=("0"+Math.floor(t/6e4)%60).slice(-2),i=("0"+Math.floor(t/36e5)).slice(-2),s=this.state.posX+"px",c=this.state.posY+"px";return r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",null,r.a.createElement("button",{onClick:this.startTracking},"Start"),r.a.createElement("button",{onClick:this.stopTracking},"Stop"),!1===this.state.timerOn&&this.state.timerTime>0&&r.a.createElement("button",{onClick:this.resetTimer},"Reset")),r.a.createElement("div",null,i," : ",n," : ",a," : ",e),r.a.createElement("div",{className:"container"},r.a.createElement("div",{onMouseEnter:this.state.trackStart&&this.hoverOnHandler,onMouseLeave:this.state.trackStart&&this.hoverOutHandler,style:{padding:"0px",left:s,top:c,position:"absolute"}},r.a.createElement(v,null))))}}]),a}(n.Component),S=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={timerOn:!1,timerStart:3e4,timerTime:3e4,posX:800,posY:450,success:0},t.startTimer=function(){t.setState({timerOn:!0,timerTime:t.state.timerTime,timerStart:t.state.timerTime}),t.timer=setInterval((function(){var e=t.state.timerTime-10;e>=0?t.setState({timerTime:e}):(clearInterval(t.timer),t.setState({timerOn:!1}),alert("Success: "+t.state.success))}),10)},t.stopTimer=function(){clearInterval(t.timer),t.setState({timerOn:!1}),alert("Success: "+t.state.success)},t.resetTimer=function(){!1===t.state.timerOn&&t.setState({timerTime:3e4,timerStart:3e4,posX:800,posY:450,success:0})},t.shootHandler=function(){t.setState({posX:10+1580*Math.random(),posY:10+880*Math.random(),success:t.state.success+1})},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.timerTime,a=t.timerStart,n=t.timerOn,i=("0"+Math.floor(e/1e3%60)%60).slice(-2),s=("0"+Math.floor(e/6e4%60)).slice(-2),c=("0"+Math.floor(e/36e5%60)).slice(-2),o=this.state.posX+"px",m=this.state.posY+"px";return r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"Countdown"},c," : ",s," : ",i,!1===n&&(0===a||e===a)&&r.a.createElement("button",{className:"Button-start",onClick:this.startTimer},"Start"),!0===n&&e>=1e3&&r.a.createElement("button",{className:"Button-stop",onClick:this.stopTimer},"Stop"),!1===n&&0!==a&&a!==e&&0!==e&&r.a.createElement("button",{className:"Button-start",onClick:this.startTimer},"Resume"),(!1===n||e<1e3)&&a!==e&&a>0&&r.a.createElement("button",{className:"Button-reset",onClick:this.resetTimer},"Reset")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{onClick:this.state.timerOn&&this.shootHandler,style:{padding:"0px",left:o,top:m,position:"absolute"}},r.a.createElement(v,null))))}}]),a}(n.Component),T=a(1),E=function(){return r.a.createElement(c.a,null,r.a.createElement(T.a,{path:"/",exact:!0,component:o}),r.a.createElement(T.a,{path:"/Track",component:f}),r.a.createElement(T.a,{path:"/Aim",component:S}))};s.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.22450171.chunk.js.map