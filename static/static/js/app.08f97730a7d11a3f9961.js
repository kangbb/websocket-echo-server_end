webpackJsonp([1],{"1XTk":function(e,t){},"3sWP":function(e,t){},"4/hK":function(e,t){},J8LS:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},r,!1,function(e){n("RszT")},null,null).exports,s=n("/ocq"),c=n("E5Az"),a=(n("4/hK"),n("CQVp"),n("1XTk"),n("vq+x"),n("aX1R"),{name:"Editor",data:function(){return{code:"",cmOptions:{indentUnit:2,tabSize:4,styleActiveLine:!0,mode:"text/x-go",theme:"mbo",lineWrapping:!1,lineNumbers:!0,line:!0}}},components:{codemirror:c.codemirror},methods:{onCmReady:function(e){console.log("the editor is readied!",e.getTextArea())},onCmFocus:function(e){console.log("the editor is focus!",e)},onCmCodeChange:function(e){console.log("this is new code",e),this.code=e}}}),l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"editor"}},[n("p",{staticClass:"func_button"},[e._v("保存")]),e._v(" "),n("div",{attrs:{id:"edit-area"}},[n("codemirror",{attrs:{options:e.cmOptions},on:{ready:e.onCmReady,focus:e.onCmFocus,input:e.onCmCodeChange},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1)])},staticRenderFns:[]};var u=n("VU/8")(a,l,!1,function(e){n("xd3S")},null,null).exports,d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"header"}},[t("h1",[this._v("在线编辑器")]),this._v(" "),t("p",{attrs:{id:"signin"}},[this._v("登陆")]),this._v(" "),t("p",{attrs:{id:"register"}},[this._v("注册")])])}]};var m=n("VU/8")({name:"Header"},d,!1,function(e){n("xymq")},null,null).exports,h=n("R2KS");n("fIPj"),n("bqw/");Object.defineProperty(i.a.prototype,"$terminal",{value:h.Terminal});var f={name:"Shell",data:function(){return{term:null,ws:null}},methods:{Xterm:function(){var e=new this.$terminal({cursorBlink:!0,cols:43,rows:24});if(e.open(this.$refs.xterm),!e._initialized){e._initialized=!0;return e.prompt=function(){e.write("\r\n$ ")},e.writeln("Welcome to xterm.js"),e.writeln("Type some keys and commands to play around."),e.writeln(""),e.prompt(),e}},Ws:function(){return new WebSocket("ws://localhost:8080/echo")}},mounted:function(){var e="",t=!0,n=this.Xterm(),i=this.Ws();console.log(n),n.on("key",function(r,o){var s=!(o.altKey||o.altGraphKey||o.ctrlKey||o.metaKey);i.onopen=function(){console.log("success")},i.onerror=function(){console.log("error")},13==o.keyCode?(n.prompt(),t&&i.send(e),t=!1,i.onmessage=function(i){n.write(i.data),n.prompt(),e="",t=!0}):8==o.keyCode?n.buffer.x>2&&(e=e.slice(0,e.length),n.write("\b \b")):s&&(t&&(e+=r),n.write(r))}),n.on("paste",function(i,r){t&&(e+=i),n.write(i)})}},p={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"xterm",staticClass:"my_terminal"})},staticRenderFns:[]};var v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"command_hint"}},[t("p",{staticClass:"func_button"},[this._v("常用命令")]),this._v(" "),t("li",[this._v("ls")]),this._v(" "),t("li",[this._v("cd")]),this._v(" "),t("li",[this._v("rm")])])}]};var _={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"project_view"}},[t("p",{staticClass:"func_button"},[this._v("文件视图")])])}]};var w={name:"Home",components:{editor:u,heads:m,shell:n("VU/8")(f,p,!1,function(e){n("3sWP")},null,null).exports,hint:n("VU/8")({name:"Hint"},v,!1,function(e){n("xCUz")},null,null).exports,"project-view":n("VU/8")({name:"Project_view"},_,!1,function(e){n("emc4")},null,null).exports}},x={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"home"}},[t("heads"),this._v(" "),t("div",{attrs:{id:"content"}},[t("project-view"),this._v(" "),t("editor"),this._v(" "),t("div",{attrs:{id:"command_line"}},[t("hint"),this._v(" "),t("shell")],1)],1)],1)},staticRenderFns:[]};var y=n("VU/8")(w,x,!1,function(e){n("J8LS")},null,null).exports;i.a.use(s.a);var C=new s.a({routes:[{path:"/",name:"Homepage",component:y}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:C,components:{App:o},template:"<App/>"})},RszT:function(e,t){},emc4:function(e,t){},fIPj:function(e,t){},xCUz:function(e,t){},xd3S:function(e,t){},xymq:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.08f97730a7d11a3f9961.js.map