webpackJsonp([5],{"+im6":function(e,t){},Ms6z:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("Dd8w"),r=n.n(s),o=n("NYxO"),a={name:"",data:function(){return{username:"",password:""}},methods:r()({onLogin:function(){var e=this;this.login({username:this.username,password:this.password}).then(function(){e.$router.push("/")})}},Object(o.b)(["login"]))},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login"}},[n("div",{staticClass:"cell"},[n("h4",[e._v("用户名")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{placeholder:"用户名"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._v(" "),n("h4",[e._v("密码")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:e.password},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.onLogin(t):null},input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),n("div",{staticClass:"btn"},[n("el-button",{attrs:{size:"medium"},on:{click:e.onLogin}},[e._v("立即登录  ")])],1),e._v(" "),n("p",{staticClass:"notice"},[e._v("没有账号？"),n("router-link",{attrs:{to:"/register"}},[e._v("注册新账号")])],1)])])},staticRenderFns:[]};var u=n("VU/8")(a,i,!1,function(e){n("+im6")},null,null);t.default=u.exports}});
//# sourceMappingURL=5.e23a5c18e71fc71eba25.js.map