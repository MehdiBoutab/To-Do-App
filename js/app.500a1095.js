(function(e){function t(t){for(var o,l,a=t[0],u=t[1],i=t[2],s=0,f=[];s<a.length;s++)l=a[s],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&f.push(r[l][0]),r[l]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},c=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/To-Do-App/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var d=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"43be":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={class:"wrapper"},c=Object(o["d"])("h1",{class:"title"},"To-Do List",-1),l={class:"title-date"},a=Object(o["d"])("button",null,[Object(o["d"])("i",{class:"fas fa-plus"})],-1),u={class:"todoList"},i=["onClick"],d=["onClick"],s=Object(o["d"])("i",{class:"fas fa-trash"},null,-1),f=[s],p={class:"footer"};function b(e,t,n,s,b,O){return Object(o["g"])(),Object(o["c"])("div",r,[c,Object(o["d"])("h1",l,Object(o["j"])(s.date),1),Object(o["d"])("form",{onSubmit:t[1]||(t[1]=Object(o["m"])((function(){return s.addNewTodo&&s.addNewTodo.apply(s,arguments)}),["prevent"])),class:"inputField"},[Object(o["l"])(Object(o["d"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return s.newTodo=e})},null,512),[[o["k"],s.newTodo]]),a],32),Object(o["d"])("ul",u,[(Object(o["g"])(!0),Object(o["c"])(o["a"],null,Object(o["i"])(s.todos,(function(e,t){return Object(o["g"])(),Object(o["c"])("li",{key:e.id,onClick:function(t){return s.toggleDone(e)},class:Object(o["f"])({done:e.done})},[Object(o["e"])(Object(o["j"])(e.content)+" ",1),Object(o["d"])("span",{class:"icon",onClick:function(e){return s.removeTodo(t)}},f,8,d)],10,i)})),128))]),Object(o["d"])("div",p,[Object(o["d"])("button",{onClick:t[2]||(t[2]=function(){return s.removeAll&&s.removeAll.apply(s,arguments)})},"Clear All"),Object(o["d"])("button",{onClick:t[3]||(t[3]=function(){return s.markAllDone&&s.markAllDone.apply(s,arguments)})},"Mark All Done")])])}n("e9c4"),n("a434"),n("d3b7"),n("159b");var O={setup:function(){var e=(new Date).toLocaleDateString(),t=Object(o["h"])(""),n=JSON.parse(localStorage.getItem("todos")),r=Object(o["h"])(n);function c(){var e=JSON.stringify(r.value);localStorage.setItem("todos",e)}function l(){t.value&&(r.value.push({done:!1,content:t.value}),t.value=""),c()}function a(e){e.done=!e.done,c()}function u(e){r.value.splice(e,1),c()}function i(){r.value=[],c()}function d(){r.value.forEach((function(e){return e.done=!0})),c()}return{date:e,newTodo:t,addNewTodo:l,todos:r,toggleDone:a,removeTodo:u,removeAll:i,markAllDone:d,saveData:c}}},j=(n("ab84"),n("6b0d")),v=n.n(j);const g=v()(O,[["render",b]]);var h=g;Object(o["b"])(h).mount("#app")},ab84:function(e,t,n){"use strict";n("43be")}});
//# sourceMappingURL=app.500a1095.js.map