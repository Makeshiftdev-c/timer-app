(this.webpackJsonptimer_app=this.webpackJsonptimer_app||[]).push([[0],{12:function(t,e,n){t.exports=n.p+"static/media/pauseon.31e795f1.mp3"},13:function(t,e,n){t.exports=n.p+"static/media/pauseoff.f4303252.mp3"},14:function(t,e,n){t.exports=n(23)},19:function(t,e,n){},20:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),o=n(10),r=n.n(o),s=(n(19),n(6)),c=n(1),l=n(2),p=n(4),m=n(3);n(20);window.helpers=function(){function t(t){var n=Math.floor(t/1e3%60),i=Math.floor(t/1e3/60%60);return[e(Math.floor(t/1e3/60/60).toString(),2),e(i.toString(),2),e(n.toString(),2)].join(":")}function e(t,e){for(var n=t;n.length<e;)n="0".concat(n);return n}return{millisecondsToHuman:t,newTimer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={title:t.title||"Timer",project:t.project||"",id:uuid.v4(),elapsed:0};return e},findById:function(t,e,n){t.forEach((function(t){t.id!==e||n(t)}))},renderElapsedString:function(e,n){var i=e;return n&&(i+=Date.now()-n),t(i)}}}();var u=window.helpers,h=n(11),d=n.n(h),f=n(5),b=n.n(f),C=n(12),k=n.n(C),v=n(13),S=n.n(v),j=new b.a(k.a),O=new b.a(S.a),g=function(t){Object(p.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={timers:[{title:"Timer",project:"Project",id:d.a.v4(),elapsed:0,runningSince:null,position:0,numberOfTimers:0}]},t.handleCreateFormSubmit=function(e){t.createTimer(e)},t.handleEditFormSubmit=function(e){t.updateTimer(e)},t.handleTrashClick=function(e,n){t.deleteTimer(e,n)},t.handleStartClick=function(e){t.startTimer(e)},t.handleStopClick=function(e){t.stopTimer(e)},t.handleUpClick=function(e,n){t.moveTimerUp(e,n)},t.handleDownClick=function(e,n){t.moveTimerDown(e,n)},t.createTimer=function(e){var n=u.newTimer(e);n.position=t.state.timers.length,n.numberOfTimers=0,t.setState({timers:t.state.timers.concat(n).map((function(e){return Object.assign({},e,{numberOfTimers:t.state.timers.length})}))})},t.updateTimer=function(e){t.setState({timers:t.state.timers.map((function(t){return t.id===e.id?Object.assign({},t,{title:e.title,project:e.project}):t}))})},t.deleteTimer=function(e,n){t.setState({timers:t.state.timers.map((function(e){return e.position>=n?(console.log(t.state.timers.length),Object.assign({},e,{position:e.position-1})):e})).filter((function(t){return t.id!==e})).map((function(t){return Object.assign({},t,{numberOfTimers:t.numberOfTimers-1})}))})},t.startTimer=function(e){var n=Date.now();t.setState({timers:t.state.timers.map((function(t){return t.id===e?Object.assign({},t,{runningSince:n}):t}))})},t.stopTimer=function(e){var n=Date.now();t.setState({timers:t.state.timers.map((function(t){if(t.id===e){var i=n-t.runningSince;return Object.assign({},t,{elapsed:t.elapsed+i,runningSince:null})}return t}))})},t.moveTimerUp=function(e,n){t.setState({timers:Object(s.a)(t.state.timers).map((function(t){return t.id===e&&n>0?Object.assign({},t,{position:t.position-1}):t.id!==e&&t.position===n-1?Object.assign({},t,{position:t.position+1}):t}))})},t.moveTimerDown=function(e,n){t.setState({timers:Object(s.a)(t.state.timers).map((function(i){return i.id===e&&n<t.state.timers.length-1?Object.assign({},i,{position:i.position+1}):i.id!==e&&i.position===n+1?Object.assign({},i,{position:i.position-1}):i}))})},t}return Object(l.a)(n,[{key:"render",value:function(){this.state.timers.sort((function(t,e){return t.position-e.position}));return a.a.createElement("div",{className:"ui three column centered grid"},a.a.createElement("div",{className:"column"},a.a.createElement(E,{timers:this.state.timers,onFormSubmit:this.handleEditFormSubmit,onTrashClick:this.handleTrashClick,onStartClick:this.handleStartClick,onStopClick:this.handleStopClick,onUpClick:this.handleUpClick,onDownClick:this.handleDownClick}),a.a.createElement(F,{onFormSubmit:this.handleCreateFormSubmit})))}}]),n}(a.a.Component),E=function(t){Object(p.a)(n,t);var e=Object(m.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.props.timers.map((function(e){return a.a.createElement(w,{key:e.id,id:e.id,title:e.title,project:e.project,elapsed:e.elapsed,position:e.position,numberOfTimers:e.numberOfTimers,runningSince:e.runningSince,onFormSubmit:t.props.onFormSubmit,onTrashClick:t.props.onTrashClick,onStartClick:t.props.onStartClick,onStopClick:t.props.onStopClick,onUpClick:t.props.onUpClick,onDownClick:t.props.onDownClick})}));return a.a.createElement("div",{id:"timers"},e)}}]),n}(a.a.Component),w=function(t){Object(p.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={editFormOpen:!1},t.handleEditClick=function(){t.openForm()},t.handleFormClose=function(){t.closeForm()},t.handleSubmit=function(e){t.props.onFormSubmit(e),t.closeForm()},t.closeForm=function(){t.setState({editFormOpen:!1})},t.openForm=function(){t.setState({editFormOpen:!0})},t}return Object(l.a)(n,[{key:"render",value:function(){return this.state.editFormOpen?a.a.createElement(T,{id:this.props.id,title:this.props.title,project:this.props.project,onFormSubmit:this.handleSubmit,onFormClose:this.handleFormClose}):a.a.createElement(y,{id:this.props.id,title:this.props.title,project:this.props.project,elapsed:this.props.elapsed,position:this.props.position,numberOfTimers:this.props.numberOfTimers,runningSince:this.props.runningSince,onEditClick:this.handleEditClick,onTrashClick:this.props.onTrashClick,onStartClick:this.props.onStartClick,onStopClick:this.props.onStopClick,onUpClick:this.props.onUpClick,onDownClick:this.props.onDownClick})}}]),n}(a.a.Component),T=function(t){Object(p.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={title:t.props.title||"",project:t.props.project||""},t.handleTitleChange=function(e){t.setState({title:e.target.value})},t.handleProjectChange=function(e){t.setState({project:e.target.value})},t.handleSubmit=function(){t.props.onFormSubmit({id:t.props.id,title:t.state.title,project:t.state.project})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.id?"Update":"Create";return a.a.createElement("div",{className:"ui centered card"},a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"ui form white"},a.a.createElement("div",{className:"field"},a.a.createElement("label",null,"Title"),a.a.createElement("input",{type:"text",value:this.state.title,onChange:this.handleTitleChange})),a.a.createElement("div",{className:"field"},a.a.createElement("label",null,"Project"),a.a.createElement("input",{type:"text",value:this.state.project,onChange:this.handleProjectChange})),a.a.createElement("div",{className:"ui two bottom attached buttons"},a.a.createElement("button",{className:"ui basic blue button",onClick:this.handleSubmit},t),a.a.createElement("button",{className:"ui basic red button",onClick:this.props.onFormClose},"Cancel")))))}}]),n}(a.a.Component),F=function(t){Object(p.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={isOpen:!1},t.handleFormOpen=function(){t.setState({isOpen:!0})},t.handleFormClose=function(){t.setState({isOpen:!1})},t.handleFormSubmit=function(e){t.props.onFormSubmit(e),t.setState({isOpen:!1})},t}return Object(l.a)(n,[{key:"render",value:function(){return this.state.isOpen?a.a.createElement(T,{onFormSubmit:this.handleFormSubmit,onFormClose:this.handleFormClose}):a.a.createElement("div",{className:"ui basic content center aligned segment"},a.a.createElement("button",{className:"ui yellow basic button icon",onClick:this.handleFormOpen},a.a.createElement("i",{className:"plus icon"})))}}]),n}(a.a.Component),y=function(t){Object(p.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).handleStartClick=function(){j.play(),t.props.onStartClick(t.props.id)},t.handleStopClick=function(){O.play(),t.props.onStopClick(t.props.id)},t.handleTrashClick=function(){t.props.onTrashClick(t.props.id,t.props.position)},t.handleUpClick=function(){t.props.onUpClick(t.props.id,t.props.position)},t.handleDownClick=function(){t.props.onDownClick(t.props.id,t.props.position)},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.forceUpdateInterval=setInterval((function(){return t.forceUpdate()}),50)}},{key:"componentWillUnmount",value:function(){clearInterval(this.forceUpdateInterval)}},{key:"render",value:function(){var t=u.renderElapsedString(this.props.elapsed,this.props.runningSince);return a.a.createElement("div",{className:"ui centered card"},a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"header"},this.props.title),a.a.createElement("div",{className:"meta"},this.props.project),a.a.createElement("div",{className:"center aligned description"},a.a.createElement("h2",null,t)),a.a.createElement("div",{className:"extra content"},a.a.createElement("span",{className:"right floated edit icon",onClick:this.props.onEditClick},a.a.createElement("i",{className:"edit icon"})),a.a.createElement("span",{className:"right floated trash icon",onClick:this.handleTrashClick},a.a.createElement("i",{className:"trash icon"})),0!==this.props.position&&a.a.createElement("span",{className:"left floated up icon",onClick:this.handleUpClick},a.a.createElement("i",{className:"arrow circle up icon"})),this.props.position!==this.props.numberOfTimers&&a.a.createElement("span",{className:"left floated down icon",onClick:this.handleDownClick},a.a.createElement("i",{className:"arrow circle down icon"})))),a.a.createElement(N,{timerIsRunning:!!this.props.runningSince,onStartClick:this.handleStartClick,onStopClick:this.handleStopClick}))}}]),n}(a.a.Component),N=function(t){Object(p.a)(n,t);var e=Object(m.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return this.props.timerIsRunning?a.a.createElement("div",{className:"ui bottom attached red basic button",onClick:this.props.onStopClick},"Stop"):a.a.createElement("div",{className:"ui bottom attached blue basic button",onClick:this.props.onStartClick},"Start")}}]),n}(a.a.Component);var U=function(){return a.a.createElement(g,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(U,null),document.getElementById("content")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.47541b6f.chunk.js.map