(this["webpackJsonptodo-example-app"]=this["webpackJsonptodo-example-app"]||[]).push([[0],{16:function(e,t,n){e.exports=n(25)},21:function(e,t,n){},22:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),l=n(4),i=n.n(l),c=(n(21),n(5)),u=n(6),s=n(13),d=n(7),r=n(14),m=(n(22),n(8));function p(){var e=Object(m.a)(['\n  color: #aa0000;\n  font-family: "Helvetica";\n  font-size: 36px;\n  text-align: center;\n  animation: fadeOut ease 3s;\n\n  @keyframes fadeOut {\n    0% {\n      opacity: 1;\n    }\n    90% {\n      opacity: 0;\n    }\n    100% {\n      display: none;\n    }\n  }\n']);return p=function(){return e},e}var f=n(9).a.p(p()),h=function(){return a.a.createElement(f,null,"Completed!")},v=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).onChange=function(t){e.setState({inputValue:t.target.value})},e.onInputFocus=function(){window.amplitude.getInstance().logEvent("add user input",{type:"Element Click",elementName:"Input Field",elementId:2})},e.onAdd=function(){var t={type:"Element Click",elementName:"Add Button",elementId:3,userInput:e.state.inputValue};window.amplitude.getInstance().logEvent("click add btn",t),e.state.inputValue&&(e.list.push(e.state.inputValue),e.setState({todos:e.list,inputValue:null}),document.getElementById("todo").value=null)},e.onComplete=function(t){window.amplitude.getInstance().logEvent("click complete btn",{type:"Element Click",elementName:"Complete Button",elementId:4}),e.state.todos.splice(t,1),e.setState({todos:e.state.todos,completed:!0}),setTimeout((function(){e.setState({completed:!1})}),2500)},e.showCompleted=function(){if(e.state.completed)return a.a.createElement(h,null)},e.state={todos:[],inputValue:null,completed:!1},e.list=[],e}return Object(r.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.amplitude.getInstance().logEvent("view homepage",{type:"Page Load",elementName:"Home Page",elementId:1})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("h1",null,"To Do List"),a.a.createElement("div",{className:"input-add-wrapper"},a.a.createElement("input",{onClick:this.onInputFocus,onChange:this.onChange,id:"todo",placeholder:"To do..."}),a.a.createElement("button",{onClick:this.onAdd,id:"add-btn"},"Add")),a.a.createElement("ul",null,this.state.todos.map((function(t,n){return a.a.createElement("div",{key:n,className:"list-item-wrapper"},a.a.createElement("button",{id:"complete-btn",onClick:function(){e.onComplete(n)}}),a.a.createElement("li",null,t))}))),this.showCompleted())}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.48b89b58.chunk.js.map