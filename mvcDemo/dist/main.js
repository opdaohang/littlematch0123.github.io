parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"AQoi":[function(require,module,exports) {

},{}],"US5u":[function(require,module,exports) {
var e=document.getElementById("app1"),n=document.getElementById("showNumber"),t=e.getElementsByClassName("actions")[0],a=localStorage.getItem("num");n.innerHTML=null==a?100:a,t.onclick=function(e){var t=e.target;if("BUTTON"===t.nodeName){var a=t.innerHTML,m=+n.innerHTML,l=0;"+1"===a?l=m+1:"-1"===a?l=m-1:"*2"===a?l=2*m:"/2"===a&&(l=m/2),localStorage.setItem("num",l),n.innerHTML=l}};
},{}],"vZ5o":[function(require,module,exports) {
"use strict";require("./app2.css");var e=document.getElementById("app2"),t=e.getElementsByClassName("nav-tit")[0],a=e.getElementsByClassName("nav-txt")[0];Array.from(t.children).forEach(function(e,t){e.relatedTextItem=a.children[t]}),t.onclick=function(e){var t=e.target,a=e.currentTarget;"DIV"===t.nodeName&&(Array.from(a.children).forEach(function(e){return e.classList.remove("nav-titI_active")}),t.classList.add("nav-titI_active"),Array.from(t.relatedTextItem.parentNode.children).forEach(function(e){return e.classList.remove("nav-txtI_active")}),t.relatedTextItem.classList.add("nav-txtI_active"))},t.children[0].click();
},{"./app2.css":"AQoi"}],"y8lT":[function(require,module,exports) {
"use strict";require("./app3.css");var e=document.getElementById("app3").getElementsByClassName("square")[0];e.onclick=function(e){e.currentTarget.classList.toggle("active")};
},{"./app3.css":"AQoi"}],"eWpN":[function(require,module,exports) {
"use strict";require("./app4.css");
},{"./app4.css":"AQoi"}],"epB2":[function(require,module,exports) {
"use strict";require("./reset.css"),require("./global.css"),require("./app1.js"),require("./app2.js"),require("./app3.js"),require("./app4.js");
},{"./reset.css":"AQoi","./global.css":"AQoi","./app1.js":"US5u","./app2.js":"vZ5o","./app3.js":"y8lT","./app4.js":"eWpN"}]},{},["epB2"], null)
//# sourceMappingURL=/main.js.map