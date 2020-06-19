(this["webpackJsonpaim-trainer"]=this["webpackJsonpaim-trainer"]||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/red_dot.0773aac1.png"},30:function(e,t,a){e.exports=a(46)},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),i=a(11),m=a(12),s=a(14),o=a(13),u=a(1),d=a(2),E=a(27),h=a.n(E),p=function(){return r.a.createElement("div",{unselectable:"on",className:"unselectable"},r.a.createElement("img",{src:h.a,alt:"RedDot",width:"20",height:"20"}))},v=a(10),g=a(29),k=a(18),b=a.n(k);a(38);b.a.initializeApp({apiKey:"AIzaSyDay9ZvfdxLVN3c95a4ADNqxRzXuMomDbE",authDomain:"aim-trainer-rank.firebaseapp.com",databaseURL:"https://aim-trainer-rank.firebaseio.com",projectId:"aim-trainer-rank",storageBucket:"aim-trainer-rank.appspot.com",messagingSenderId:"178091939742",appId:"1:178091939742:web:af2ea59e5bfa996c75a88f",measurementId:"G-YS4STBPEG1"});var f=b.a,y=function(e){var t=Object(n.useState)([]),a=Object(v.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=f.firestore().collection(e).orderBy("record","desc").limit(10).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(g.a)({id:e.id},e.data())}));c(t)}));return function(){return t()}}),[]),r},S=(a(7),function(e){var t=Object(n.useState)(""),a=Object(v.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(!1),m=Object(v.a)(i,2),s=m[0],o=m[1],d=y(e.sourceName);return r.a.createElement(u.a,{basename:"/"},r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Your Game Score"),r.a.createElement("h2",null,"Score: ",e.gameScore),s?r.a.createElement("h2",null,"You have submitted!"):r.a.createElement("div",null,e.gameScore>d.map((function(e){return e.record}))[d.length-1]||d.length<10?r.a.createElement("div",{className:"playerSubmit"},r.a.createElement("h3",null,"Type your name to save new record:"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),""!==c&&f.firestore().collection(e.sourceName).add({name:c,record:e.gameScore}).then((function(){l(""),o(!0)}))}},r.a.createElement("div",{className:"playerName"},r.a.createElement("input",{type:"text",value:c,onChange:function(e){return l(e.currentTarget.value)}})),r.a.createElement("button",{type:"submit"},"Submit"))):r.a.createElement("h2",null,"Keep up the good work! You will get there!")),r.a.createElement(u.b,{style:{position:"relative",marginTop:"30%"},className:"gameSetting",to:"/"+e.sourceName},r.a.createElement("h2",null,"Return")))))}),T=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).startTimer=function(){n.setState({timerTime:n.state.timerTime,timerStart:n.state.timerTime}),n.timer=setInterval((function(){var e=n.state.timerTime-10;e>=0?n.setState({timerTime:e}):(clearInterval(n.timer),clearInterval(n.track),n.stopTracking())}),10)},n.hoverOnHandler=function(){n.setState({trackTime:n.state.trackTime,trackStart:Date.now()-n.state.trackTime}),n.track=setInterval((function(){n.setState({trackTime:Date.now()-n.state.trackStart})}),10)},n.hoverOutHandler=function(){clearInterval(n.track)},n.startTracking=function(){n.setState({trackOn:!0}),n.moving=setInterval((function(){var e=n.state.posX+n.state.velocity*Math.sin(n.state.direction),t=n.state.posY+n.state.velocity*Math.cos(n.state.direction);e<10||e>1590?n.setState({direction:2*Math.PI-n.state.direction}):t<10||t>890?n.setState({direction:Math.PI-n.state.direction}):n.setState({posX:e,posY:t})}),20),n.changeDirection=setInterval((function(){n.setState({direction:Math.random()*Math.PI*2})}),2e3)},n.stopTracking=function(){n.setState({trackOn:!1,gameOver:!0,posX:800,posY:450}),clearInterval(n.moving),clearInterval(n.changeDirection)},n.handleKeyPressed=function(e){27===e.keyCode&&n.setState({keyPressed:!0})},n.state={timerStart:3e4,timerTime:3e4,trackOn:!1,trackStart:0,trackTime:0,posX:800,posY:450,velocity:5,direction:Math.PI/2,keyPressed:!1,gameOver:!1},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.startTracking(),this.startTimer(),document.addEventListener("keydown",this.handleKeyPressed)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer),clearInterval(this.track),clearInterval(this.moving),clearInterval(this.changeDirection),document.removeEventListener("keydown",this.handleKeyPressed)}},{key:"render",value:function(){var e=this.state,t=e.trackTime,a=e.keyPressed,n=e.gameOver,c=e.trackOn,l=("0"+Math.floor(t/10)%100).slice(-2),i=("0"+Math.floor(t/1e3)%60).slice(-2),m=this.state.posX+"px",s=this.state.posY+"px";return r.a.createElement(u.a,{basename:"/"},r.a.createElement("div",{className:"outerContainer"},!n&&r.a.createElement("div",null,i," : ",l),r.a.createElement("div",{className:"container"},r.a.createElement("div",{onMouseEnter:c?this.hoverOnHandler:null,onMouseLeave:c?this.hoverOutHandler:null,style:{padding:"0px",left:m,top:s,position:"absolute"}},r.a.createElement(p,null),a&&r.a.createElement(d.a,{to:"/Track"}),n&&r.a.createElement(d.a,{to:"/Track/PlayTrack/GameScore"})))),r.a.createElement(d.b,{path:"/Track/PlayTrack/GameScore",render:function(e){return r.a.createElement(S,Object.assign({},e,{sourceName:"Track",gameScore:t}))}}))}}]),a}(n.Component),N=function(e){return r.a.createElement(u.a,{basename:"/"},r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Help"),r.a.createElement("h2",null,e.text),r.a.createElement("h2",null,"\nPress Esc key to quit the game."),r.a.createElement(u.b,{className:"gameSetting",to:"/"+e.sourceName},r.a.createElement("h2",null,"Return")))))},O=function(e){var t=y(e.sourceName);return r.a.createElement(u.a,{basename:"/"},r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Top 10 Records"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Record")),t.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.record))})))),r.a.createElement(u.b,{className:"gameSetting",to:"/"+e.sourceName},r.a.createElement("h2",null,"Return")))))},P=function(){return r.a.createElement(u.a,{basename:"/"},r.a.createElement("div",null,r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Tracking"),r.a.createElement(u.b,{className:"gameSetting",to:"/Track/PlayTrack/"},r.a.createElement("h2",null,"Play")),r.a.createElement(u.b,{className:"gameSetting",to:"/Track/Help/"},r.a.createElement("h2",null,"Help")),r.a.createElement(u.b,{className:"gameSetting",to:"/Track/Rank/"},r.a.createElement("h2",null,"Rank")),r.a.createElement(u.b,{className:"gameSetting",to:"/"},r.a.createElement("h2",null,"Return"))),r.a.createElement(d.b,{path:"/Track/PlayTrack",component:T}),r.a.createElement(d.b,{path:"/Track/Help",render:function(e){return r.a.createElement(N,Object.assign({},e,{text:"After hitting Play button, you have 30 \n\nseconds to track the target. Try to keep\n\n track of the target as long as possible.\n\n Good Luck!",sourceName:"Track"}))}}),r.a.createElement(d.b,{path:"/Track/Rank",render:function(e){return r.a.createElement(O,Object.assign({},e,{sourceName:"Track"}))}}))))},A=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).startTimer=function(){e.setState({timerOn:!0,timerTime:e.state.timerTime,timerStart:e.state.timerTime}),e.timer=setInterval((function(){var t=e.state.timerTime-10;t>=0?e.setState({timerTime:t}):(clearInterval(e.timer),e.setState({timerOn:!1,posX:800,posY:450,gameOver:!0}))}),10)},e.shootHandler=function(){e.setState({posX:10+1580*Math.random(),posY:10+880*Math.random(),success:e.state.success+1})},e.handleKeyPressed=function(t){27===t.keyCode&&e.setState({keyPressed:!0})},e.state={timerOn:!0,timerStart:3e4,timerTime:3e4,posX:800,posY:450,success:0,keyPressed:!1,gameOver:!1},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.startTimer(),document.addEventListener("keydown",this.handleKeyPressed)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer),document.removeEventListener("keydown",this.handleKeyPressed)}},{key:"render",value:function(){var e=this.state,t=e.success,a=e.keyPressed,n=e.posX,c=e.posY,l=e.gameOver,i=n+"px",m=c+"px";return r.a.createElement(u.a,{basename:"/"},r.a.createElement("div",{className:"outerContainer"},!l&&r.a.createElement("div",null,t),r.a.createElement("div",{className:"container"},r.a.createElement("div",{onClick:this.state.timerOn?this.shootHandler:null,style:{padding:"0px",left:i,top:m,position:"absolute"}},r.a.createElement(p,null)),a?r.a.createElement(d.a,{to:"/Aim"}):null,l&&r.a.createElement(d.a,{to:"/Aim/PlayAim/GameScore"}))),r.a.createElement(d.b,{path:"/Aim/PlayAim/GameScore",render:function(e){return r.a.createElement(S,Object.assign({},e,{sourceName:"Aim",gameScore:t}))}}))}}]),a}(n.Component),I=function(){return r.a.createElement(u.a,{basename:"/"},r.a.createElement("div",null,r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Aiming"),r.a.createElement(u.b,{className:"gameSetting",to:"/Aim/PlayAim/"},r.a.createElement("h2",null,"Play")),r.a.createElement(u.b,{className:"gameSetting",to:"/Aim/Help/"},r.a.createElement("h2",null,"Help")),r.a.createElement(u.b,{className:"gameSetting",to:"/Aim/Rank/"},r.a.createElement("h2",null,"Rank")),r.a.createElement(u.b,{className:"gameSetting",to:"/"},r.a.createElement("h2",null,"Return"))),r.a.createElement(d.b,{path:"/Aim/PlayAim",component:A}),r.a.createElement(d.b,{path:"/Aim/Help",render:function(e){return r.a.createElement(N,Object.assign({},e,{text:"After hitting Play button, you have 30 \n\nseconds to shoot targets. Try to shoot\n\n as many targets as possible.\n\n Good Luck!",sourceName:"Aim"}))}}),r.a.createElement(d.b,{path:"/Aim/Rank",render:function(e){return r.a.createElement(O,Object.assign({},e,{sourceName:"Aim"}))}}))))},j=function(){return r.a.createElement(u.a,{basename:"/"},r.a.createElement("div",null,r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Aim Trainer"),r.a.createElement(u.b,{className:"gameSetting",to:"/Track"},r.a.createElement("h2",null,"Tracking")),r.a.createElement(u.b,{className:"gameSetting",to:"/Aim"},r.a.createElement("h2",null,"Aiming")))),r.a.createElement(d.b,{path:"/Track",component:P}),r.a.createElement(d.b,{path:"/Aim",component:I})))};l.a.render(r.a.createElement(j,null),document.getElementById("root"))},7:function(e,t,a){}},[[30,1,2]]]);
//# sourceMappingURL=main.782b208c.chunk.js.map