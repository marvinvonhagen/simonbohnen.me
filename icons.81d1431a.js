parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FryP":[function(require,module,exports) {
var define;
var t;!function(){function n(t,n,i){return t.call.apply(t.bind,arguments)}function i(t,n,i){if(!t)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,e),t.apply(n,i)}}return function(){return t.apply(n,arguments)}}function e(t,o,a){return(e=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?n:i).apply(null,arguments)}var o=Date.now||function(){return+new Date};function a(t,n){this.a=t,this.o=n||t,this.c=this.o.document}var s=!!window.FontFace;function r(t,n,i,e){if(n=t.c.createElement(n),i)for(var o in i)i.hasOwnProperty(o)&&("style"==o?n.style.cssText=i[o]:n.setAttribute(o,i[o]));return e&&n.appendChild(t.c.createTextNode(e)),n}function f(t,n,i){(t=t.c.getElementsByTagName(n)[0])||(t=document.documentElement),t.insertBefore(i,t.lastChild)}function c(t){t.parentNode&&t.parentNode.removeChild(t)}function h(t,n,i){n=n||[],i=i||[];for(var e=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var a=!1,s=0;s<e.length;s+=1)if(n[o]===e[s]){a=!0;break}a||e.push(n[o])}for(n=[],o=0;o<e.length;o+=1){for(a=!1,s=0;s<i.length;s+=1)if(e[o]===i[s]){a=!0;break}a||n.push(e[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function l(t,n){for(var i=t.className.split(/\s+/),e=0,o=i.length;e<o;e++)if(i[e]==n)return!0;return!1}function u(t,n,i){function e(){h&&o&&a&&(h(c),h=null)}n=r(t,"link",{rel:"stylesheet",href:n,media:"all"});var o=!1,a=!0,c=null,h=i||null;s?(n.onload=function(){o=!0,e()},n.onerror=function(){o=!0,c=Error("Stylesheet failed to load"),e()}):setTimeout(function(){o=!0,e()},0),f(t,"head",n)}function p(t,n,i,e){var o=t.c.getElementsByTagName("head")[0];if(o){var a=r(t,"script",{src:n}),s=!1;return a.onload=a.onreadystatechange=function(){s||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(s=!0,i&&i(null),a.onload=a.onreadystatechange=null,"HEAD"==a.parentNode.tagName&&o.removeChild(a))},o.appendChild(a),setTimeout(function(){s||(s=!0,i&&i(Error("Script load timeout")))},e||5e3),a}return null}function g(){this.a=0,this.c=null}function d(t){return t.a++,function(){t.a--,w(t)}}function v(t,n){t.c=n,w(t)}function w(t){0==t.a&&t.c&&(t.c(),t.c=null)}function m(t){this.a=t||"-"}function y(t,n){this.c=t,this.f=4,this.a="n";var i=(n||"n4").match(/^([nio])([1-9])$/i);i&&(this.a=i[1],this.f=parseInt(i[2],10))}function b(t){var n=[];t=t.split(/,\s*/);for(var i=0;i<t.length;i++){var e=t[i].replace(/['"]/g,"");-1!=e.indexOf(" ")||/^\d/.test(e)?n.push("'"+e+"'"):n.push(e)}return n.join(",")}function x(t){return t.a+t.f}function j(t){var n="normal";return"o"===t.a?n="oblique":"i"===t.a&&(n="italic"),n}function _(t){var n=4,i="n",e=null;return t&&((e=t.match(/(normal|oblique|italic)/i))&&e[1]&&(i=e[1].substr(0,1).toLowerCase()),(e=t.match(/([1-9]00|normal|bold)/i))&&e[1]&&(/bold/i.test(e[1])?n=7:/[1-9]00/.test(e[1])&&(n=parseInt(e[1].substr(0,1),10)))),i+n}function k(t,n){this.c=t,this.f=t.o.document.documentElement,this.h=n,this.a=new m("-"),this.j=!1!==n.events,this.g=!1!==n.classes}function T(t){if(t.g){var n=l(t.f,t.a.c("wf","active")),i=[],e=[t.a.c("wf","loading")];n||i.push(t.a.c("wf","inactive")),h(t.f,i,e)}S(t,"inactive")}function S(t,n,i){t.j&&t.h[n]&&(i?t.h[n](i.c,x(i)):t.h[n]())}function C(){this.c={}}function A(t,n){this.c=t,this.f=n,this.a=r(this.c,"span",{"aria-hidden":"true"},this.f)}function N(t){f(t.c,"body",t.a)}function E(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+b(t.c)+";font-style:"+j(t)+";font-weight:"+t.f+"00;"}function W(t,n,i,e,o,a){this.g=t,this.j=n,this.a=e,this.c=i,this.f=o||3e3,this.h=a||void 0}function F(t,n,i,e,o,a,s){this.v=t,this.B=n,this.c=i,this.a=e,this.s=s||"BESbswy",this.f={},this.w=o||3e3,this.u=a||null,this.m=this.j=this.h=this.g=null,this.g=new A(this.c,this.s),this.h=new A(this.c,this.s),this.j=new A(this.c,this.s),this.m=new A(this.c,this.s),t=E(t=new y(this.a.c+",serif",x(this.a))),this.g.a.style.cssText=t,t=E(t=new y(this.a.c+",sans-serif",x(this.a))),this.h.a.style.cssText=t,t=E(t=new y("serif",x(this.a))),this.j.a.style.cssText=t,t=E(t=new y("sans-serif",x(this.a))),this.m.a.style.cssText=t,N(this.g),N(this.h),N(this.j),N(this.m)}m.prototype.c=function(t){for(var n=[],i=0;i<arguments.length;i++)n.push(arguments[i].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.a)},W.prototype.start=function(){var t=this.c.o.document,n=this,i=o(),e=new Promise(function(e,a){!function s(){o()-i>=n.f?a():t.fonts.load(function(t){return j(t)+" "+t.f+"00 300px "+b(t.c)}(n.a),n.h).then(function(t){1<=t.length?e():setTimeout(s,25)},function(){a()})}()}),a=null,s=new Promise(function(t,i){a=setTimeout(i,n.f)});Promise.race([s,e]).then(function(){a&&(clearTimeout(a),a=null),n.g(n.a)},function(){n.j(n.a)})};var I={D:"serif",C:"sans-serif"},O=null;function P(){if(null===O){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);O=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return O}function B(t,n,i){for(var e in I)if(I.hasOwnProperty(e)&&n===t.f[I[e]]&&i===t.f[I[e]])return!0;return!1}function L(t){var n,i=t.g.a.offsetWidth,a=t.h.a.offsetWidth;(n=i===t.f.serif&&a===t.f["sans-serif"])||(n=P()&&B(t,i,a)),n?o()-t.A>=t.w?P()&&B(t,i,a)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?D(t,t.v):D(t,t.B):function(t){setTimeout(e(function(){L(this)},t),50)}(t):D(t,t.v)}function D(t,n){setTimeout(e(function(){c(this.g.a),c(this.h.a),c(this.j.a),c(this.m.a),n(this.a)},t),0)}function $(t,n,i){this.c=t,this.a=n,this.f=0,this.m=this.j=!1,this.s=i}F.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=o(),L(this)};var q=null;function H(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&h(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),S(t,"active")):T(t.a))}function M(t){this.j=t,this.a=new C,this.h=0,this.f=this.g=!0}function z(t,n,i,o,a){var s=0==--t.h;(t.f||t.g)&&setTimeout(function(){var t=a||null,r=o||{};if(0===i.length&&s)T(n.a);else{n.f+=i.length,s&&(n.j=s);var f,c=[];for(f=0;f<i.length;f++){var l=i[f],u=r[l.c],p=n.a,g=l;if(p.g&&h(p.f,[p.a.c("wf",g.c,x(g).toString(),"loading")]),S(p,"fontloading",g),p=null,null===q)if(window.FontFace){g=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var d=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);q=g?42<parseInt(g[1],10):!d}else q=!1;p=q?new W(e(n.g,n),e(n.h,n),n.c,l,n.s,u):new F(e(n.g,n),e(n.h,n),n.c,l,n.s,t,u),c.push(p)}for(f=0;f<c.length;f++)c[f].start()}},0)}function G(t,n){this.c=t,this.a=n}function K(t,n){this.c=t,this.a=n}function R(t,n){this.c=t||U,this.a=[],this.f=[],this.g=n||""}$.prototype.g=function(t){var n=this.a;n.g&&h(n.f,[n.a.c("wf",t.c,x(t).toString(),"active")],[n.a.c("wf",t.c,x(t).toString(),"loading"),n.a.c("wf",t.c,x(t).toString(),"inactive")]),S(n,"fontactive",t),this.m=!0,H(this)},$.prototype.h=function(t){var n=this.a;if(n.g){var i=l(n.f,n.a.c("wf",t.c,x(t).toString(),"active")),e=[],o=[n.a.c("wf",t.c,x(t).toString(),"loading")];i||e.push(n.a.c("wf",t.c,x(t).toString(),"inactive")),h(n.f,e,o)}S(n,"fontinactive",t),H(this)},M.prototype.load=function(t){this.c=new a(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,n,i){var e=[],o=i.timeout;!function(t){t.g&&h(t.f,[t.a.c("wf","loading")]),S(t,"loading")}(n);var e=function(t,n,i){var e,o=[];for(e in n)if(n.hasOwnProperty(e)){var a=t.c[e];a&&o.push(a(n[e],i))}return o}(t.a,i,t.c),a=new $(t.c,n,o);for(t.h=e.length,n=0,i=e.length;n<i;n++)e[n].load(function(n,i,e){z(t,a,n,i,e)})}(this,new k(this.c,t),t)},G.prototype.load=function(t){var n=this,i=n.a.projectId,e=n.a.version;if(i){var o=n.c.o;p(this.c,(n.a.api||"https://fast.fonts.net/jsapi")+"/"+i+".js"+(e?"?v="+e:""),function(e){e?t([]):(o["__MonotypeConfiguration__"+i]=function(){return n.a},function n(){if(o["__mti_fntLst"+i]){var e,a=o["__mti_fntLst"+i](),s=[];if(a)for(var r=0;r<a.length;r++){var f=a[r].fontfamily;null!=a[r].fontStyle&&null!=a[r].fontWeight?(e=a[r].fontStyle+a[r].fontWeight,s.push(new y(f,e))):s.push(new y(f))}t(s)}else setTimeout(function(){n()},50)}())}).id="__MonotypeAPIScript__"+i}else t([])},K.prototype.load=function(t){var n,i,e=this.a.urls||[],o=this.a.families||[],a=this.a.testStrings||{},s=new g;for(n=0,i=e.length;n<i;n++)u(this.c,e[n],d(s));var r=[];for(n=0,i=o.length;n<i;n++)if((e=o[n].split(":"))[1])for(var f=e[1].split(","),c=0;c<f.length;c+=1)r.push(new y(e[0],f[c]));else r.push(new y(e[0]));v(s,function(){t(r,a)})};var U="https://fonts.googleapis.com/css";function V(t){this.f=t,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},J={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Q={i:"i",italic:"i",n:"n",normal:"n"},Y=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function Z(t,n){this.c=t,this.a=n}var tt={Arimo:!0,Cousine:!0,Tinos:!0};function nt(t,n){this.c=t,this.a=n}function it(t,n){this.c=t,this.f=n,this.a=[]}Z.prototype.load=function(t){var n=new g,i=this.c,e=new R(this.a.api,this.a.text),o=this.a.families;!function(t,n){for(var i=n.length,e=0;e<i;e++){var o=n[e].split(":");3==o.length&&t.f.push(o.pop());var a="";2==o.length&&""!=o[1]&&(a=":"),t.a.push(o.join(a))}}(e,o);var a=new V(o);!function(t){for(var n=t.f.length,i=0;i<n;i++){var e=t.f[i].split(":"),o=e[0].replace(/\+/g," "),a=["n4"];if(2<=e.length){var s;if(s=[],r=e[1])for(var r,f=(r=r.split(",")).length,c=0;c<f;c++){var h;if((h=r[c]).match(/^[\w-]+$/))if(null==(u=Y.exec(h.toLowerCase())))h="";else{if(h=null==(h=u[2])||""==h?"n":Q[h],null==(u=u[1])||""==u)u="4";else var l=J[u],u=l||(isNaN(u)?"4":u.substr(0,1));h=[h,u].join("")}else h="";h&&s.push(h)}0<s.length&&(a=s),3==e.length&&(s=[],0<(e=(e=e[2])?e.split(","):s).length&&(e=X[e[0]])&&(t.c[o]=e))}for(t.c[o]||(e=X[o])&&(t.c[o]=e),e=0;e<a.length;e+=1)t.a.push(new y(o,a[e]))}}(a),u(i,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var n=t.a.length,i=[],e=0;e<n;e++)i.push(t.a[e].replace(/ /g,"+"));return n=t.c+"?family="+i.join("%7C"),0<t.f.length&&(n+="&subset="+t.f.join(",")),0<t.g.length&&(n+="&text="+encodeURIComponent(t.g)),n}(e),d(n)),v(n,function(){t(a.a,a.c,tt)})},nt.prototype.load=function(t){var n=this.a.id,i=this.c.o;n?p(this.c,(this.a.api||"https://use.typekit.net")+"/"+n+".js",function(n){if(n)t([]);else if(i.Typekit&&i.Typekit.config&&i.Typekit.config.fn){n=i.Typekit.config.fn;for(var e=[],o=0;o<n.length;o+=2)for(var a=n[o],s=n[o+1],r=0;r<s.length;r++)e.push(new y(a,s[r]));try{i.Typekit.load({events:!1,classes:!1,async:!0})}catch(f){}t(e)}},2e3):t([])},it.prototype.load=function(t){var n=this.f.id,i=this.c.o,e=this;n?(i.__webfontfontdeckmodule__||(i.__webfontfontdeckmodule__={}),i.__webfontfontdeckmodule__[n]=function(n,i){for(var o=0,a=i.fonts.length;o<a;++o){var s=i.fonts[o];e.a.push(new y(s.name,_("font-weight:"+s.weight+";font-style:"+s.style)))}t(e.a)},p(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+n+".js",function(n){n&&t([])})):t([])};var et=new M(window);et.a.c.custom=function(t,n){return new K(n,t)},et.a.c.fontdeck=function(t,n){return new it(n,t)},et.a.c.monotype=function(t,n){return new G(n,t)},et.a.c.typekit=function(t,n){return new nt(n,t)},et.a.c.google=function(t,n){return new Z(n,t)};var ot={load:e(et.load,et)};"function"==typeof t&&t.amd?t(function(){return ot}):"undefined"!=typeof module&&module.exports?module.exports=ot:(window.WebFont=ot,window.WebFontConfig&&et.load(window.WebFontConfig))}();
},{}],"lgb1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.positionTitle=r;var e,n,t,i=a(require("webfontloader")),o=require("./connector");function a(e){return e&&e.__esModule?e:{default:e}}function r(){var t=($("body").width()-n)/2-e;$("#title-wrapper").css({left:"".concat(t,"px")})}function c(){$(function(){var i=document.querySelector("#tagCanvas");i.width=.98*window.innerWidth,i.height=.98*window.innerHeight,e=document.getElementById("measureBefore").clientWidth,n=document.getElementById("measureSimon").clientWidth,r(),$("#flickering").html("|"),location.href.includes("de")?(t="Hi, ich bin Simon.",o.config[1].href="http://xing.to/SimonBohnen",o.config[1].iconId="fa-xing"):t="Hi, I'm Simon.";var a=new Date("2000-10-12"),c=new Date,f=new Date(c-a).getFullYear()-1970;document.getElementById("age").innerHTML=f,l(0)})}function l(e){if(e<t.length)$("#spell").html(t.substring(0,e+1)),setTimeout(function(){l(e+1)},3===e?300:70);else{$("#flickering").animate({color:"#000"},300).animate({color:"#fff"},300).animate({color:"#000"},300).animate({color:"#fff"},300).animate({color:"#000"},300),setTimeout(function(){$("#title-wrapper").html('<span class="fade">'.concat($("#measureBefore").html(),'</span><span>Simon</span><span class="fade">.</span>')),$(".fade").animate({color:"#000"},300,"swing",s)},2e3)}}i.default.load({google:{families:["Orbitron"]},active:c}),$(window).resize(r);var f=0;function s(){0===f?f=1:(f=0,(0,o.draw)())}
},{"webfontloader":"FryP","./connector":"GkEL"}],"GkEL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.draw=a,exports.drawspeed=exports.iconRadius=exports.config=exports.ctx=void 0;var e,t,o=require("./typing"),i=require("./icons");exports.ctx=e;var n=[{sx:.4,sy:.45,ex:.2,ey:.2,diagFirst:!0,iconId:"fa-twitter",href:"https://twitter.com/SimonBohnen"},{sx:.6,sy:.45,ex:.8,ey:.2,diagFirst:!0,iconId:"fa-linkedin",href:"https://linkedin.com/in/SimonBohnen"},{sx:.65,sy:.55,ex:.85,ey:.7,diagFirst:!0,iconId:"fa-stack-overflow",href:"https://stackoverflow.com/users/7804181/SimonBohnen"},{sx:.5,sy:.55,ex:.5,ey:.7,diagFirst:!1,iconId:"fa-envelope",href:"mailto:simonbohnen@tum.de"},{sx:.35,sy:.55,ex:.15,ey:.7,diagFirst:!0,iconId:"fa-github",href:"https://github.com/SimonBohnen"}];function a(){$("#title-wrapper").html("Simon"),(0,o.positionTitle)(),t=document.querySelector("#tagCanvas"),exports.ctx=e=t.getContext("2d"),e.strokeStyle="#ffffff",e.fillStyle="#333333",e.lineCap="round",e.lineWidth=2,$("#subtitle").fadeIn(),y(450,450,600,600),y(200,200,400,200),$(".socialIcon").css({width:"".concat(2*s,"px"),height:"".concat(2*s,"px"),"line-height":"".concat(2*s,"px")})}function r(o){var i=n[o];v(e,i.sx*t.width,i.sy*t.height,i.ex*t.width,i.ey*t.height,i.diagFirst,i.iconId,i.href),o<n.length-1&&setTimeout(function(){r(o+1)},300)}exports.config=n,$(window).resize(function(){e.clearRect(0,0,t.width,t.height),$(".socialIcon").remove(),r(0)});var s=38;exports.iconRadius=s;var c,h=0,f=1,l=2,u=3,d=4,m=5,x=6,g=7,p=7;function v(e,t,o,i,n,a,r,c){var p=Math.abs(i-t)>Math.abs(o-n),v=n>o?1:-1,y=i>t?1:-1;if(a){var T=p?t+y*Math.abs(n-o):i;w(e,t,o,T,y,v,0,function(){p?k(e,T,n,i-y*s,y,0,function(){b(e,i,n,0,1===y?u:f,r,c)}):I(e,i,o+v*Math.abs(i-t),n-v*s,v,0,function(){b(e,i,n,0,1===v?h:l,r,c)})})}else if(p){var P=i-y*Math.abs(n-o);k(e,t,o,P,y,0,function(){w(e,P,o,i-y*s*M/2,y,v,0,function(){b(e,i,n,0,1===y?1===v?g:x:1===v?d:m,r,c)})})}else{var F=n-v*Math.abs(i-t);I(e,t,o,F,v,0,function(){w(e,t,F,i-y*s*M/2,y,v,0,function(){b(e,i,n,0,1===y?1===v?g:x:1===v?d:m,r,c)})})}}function b(e,t,o,n,a,r,u){if(n>2*s)(0,i.showIcon)(t,o,r,u);else{switch(0===n&&(c=document.getElementById("circle-img")),n+=p/2,e.save(),e.translate(t,o),a){case h:e.rotate(.5*Math.PI);break;case f:e.rotate(Math.PI);break;case l:e.rotate(1.5*Math.PI);break;case d:e.rotate(.75*Math.PI);break;case m:e.rotate(1.25*Math.PI);break;case x:e.rotate(1.75*Math.PI);break;case g:e.rotate(.25*Math.PI)}e.clearRect(-s-1,-s-5,2*s+6,2*s+10),e.drawImage(c,0,0,n,2*s,-s,-s,n,2*s),e.restore(),requestAnimationFrame(function(){b(e,t,o,n,a,r,u)})}}exports.drawspeed=p;var M=Math.sqrt(2);function w(e,t,o,i,n,a,r,s){e.lineWidth=1;var c=t+n*r;e.clearRect(t,o,i-t,i-t),1===n&&c<i||-1===n&&c>i?(e.beginPath(),e.moveTo(t,o),e.lineTo(c,o+a*r),e.stroke(),requestAnimationFrame(function(){w(e,t,o,i,n,a,r+p/M,s)})):(e.beginPath(),e.moveTo(t,o),e.lineTo(i,o+a*Math.abs(i-t)),e.stroke(),s())}function I(e,t,o,i,n,a,r){e.lineWidth=2;var s=o+n*a;e.clearRect(t-2,o,4,i-o),1===n&&s<i||-1===n&&s>i?(e.beginPath(),e.moveTo(t,o),e.lineTo(t,s),e.stroke(),requestAnimationFrame(function(){I(e,t,o,i,n,a+p,r)})):(e.beginPath(),e.moveTo(t,o),e.lineTo(t,i),e.stroke(),r())}function k(e,t,o,i,n,a,r){e.lineWidth=2;var s=t+n*a;e.clearRect(t,o-2,i-t,4),1===n&&s<i||-1===n&&s>i?(e.beginPath(),e.moveTo(t,o),e.lineTo(s,o),e.stroke(),requestAnimationFrame(function(){k(e,t,o,i,n,a+p,r)})):(e.beginPath(),e.moveTo(t,o),e.lineTo(i,o),e.stroke(),r())}function y(t,o,i,n,a,r,s,c,h,f){if(!a){var l=Math.atan2(n-o,i-t);c=Math.sqrt(Math.pow(n-o,2)+Math.pow(i-t,2)),a=0,r=Math.sin(l),s=Math.cos(l),h=i-t,f=n-o}e.clearRect(t-5,o-5,h+10,f+10),e.beginPath(),e.moveTo(t,o),e.lineTo(t+a*s,o+a*r),e.stroke(),a<c&&requestAnimationFrame(function(){y(t,o,i,n,a+p,r,s,c,h,f)})}
},{"./typing":"lgb1","./icons":"kzZT"}],"kzZT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.showIcon=i;var c=require("./connector");function i(i,o,t,e){var s=document.querySelector("#tagCanvas");$("body").append('<div class="socialIcon" id="'.concat(t,'"><a class="fab ').concat(t,'"></a></div>'));var d=$("#".concat(t));d.css({left:"".concat(i-c.iconRadius,"px"),top:"".concat(o-c.iconRadius,"px"),width:"".concat(2*c.iconRadius,"px"),height:"".concat(2*c.iconRadius,"px")}),d.animate({color:"#ffffff"},300);var u=n(s,i,o);d.hover(function(){d.stop(!0,!1),d.animate({color:"#000000"},300),a(i,o,0,"#ffffff",.95*c.iconRadius)},function(){d.stop(!0,!1),d.animate({color:"#ffffff"},300),a(i,o,0,"rgba(0, 0, 0, 0.3)",.9*c.iconRadius,function(){c.ctx.clearRect(i-c.iconRadius,o-c.iconRadius,2*c.iconRadius,2*c.iconRadius),c.ctx.drawImage(u,i-c.iconRadius,o-c.iconRadius)})}),d.click(function(){window.open(e,"_blank")})}function a(i,n,o,t,e,s){c.ctx.fillStyle=t,c.ctx.beginPath(),c.ctx.arc(i,n,e,.5*Math.PI-o,.5*Math.PI+o),c.ctx.closePath(),c.ctx.fill(),o<Math.PI?requestAnimationFrame(function(){a(i,n,o+c.drawspeed/50,t,e,s)}):s&&s()}function n(i,a,n){var o=document.createElement("canvas"),t=o.getContext("2d");return o.width=2*c.iconRadius,o.height=2*c.iconRadius,t.drawImage(i,a-c.iconRadius,n-c.iconRadius,2*c.iconRadius,2*c.iconRadius,0,0,2*c.iconRadius,2*c.iconRadius),o}
},{"./connector":"GkEL"}]},{},["kzZT"], null)
//# sourceMappingURL=/icons.81d1431a.js.map