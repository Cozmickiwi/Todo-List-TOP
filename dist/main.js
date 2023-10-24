(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>d});var o=t(81),i=t.n(o),r=t(645),a=t.n(r)()(i());a.push([n.id,"body {\n    margin: 0;\n    \n}\n\n.mainContainer {\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.todoItemContainer {\n    width: 70%;\n    height: 65%;\n    background-color: aliceblue;\n    z-index: 0;\n    position: absolute;\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: 1fr;\n    flex-direction: column;\n    align-items: center;\n    \n}\n\n.todoPreview {\n    width: 90%;\n    height: 100%;\n    max-height: 1fr;\n    background-color: rgb(255, 255, 255);\n    border: 2px solid;\n    border-radius: 10px;\n    box-shadow: 2px 2px black;\n    display: flex;\n    margin-top: 20px;\n    z-index: 1;\n    \n    justify-self: center;\n    min-width: 0;\n    overflow: hidden;\n}\n\n.todoPreview > p {\n    margin-right: 40px;\n}\n\n.button {\n    margin-left: 20px;\n    margin-top: 20px;\n    position: absolute;\n    bottom: 5%;\n}\n\n.newTodo {\n    display: flex;\n    width: 50%;\n    height: 55%;\n    z-index: 2;\n}\n\n.todoItemDelete {\n    position: absolute;\n    right: 80px;\n    margin-top: 15px;\n}\n\n.todoMain {\n    z-index: 3;\n    position: relative;\n    background-color: rgb(197, 203, 242);\n    width: 90%;\n    height: 100%;\n    max-height: 1fr;\n    display: flex;\n    flex-direction: column;\n    justify-self: center;\n    margin-top: 20px;\n    min-width: 0;\n    overflow: hidden;\n    border: 2px solid;\n    border-radius: 10px;\n    box-shadow: 2px 2px black;\n    /*\n    top: 0; \n    bottom: 0; \n    margin-top: auto; \n    margin-bottom: auto; \n    */\n\n}\n\n.todoMain > p {\n    margin: 0;\n}\n\nlegend {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.todoInputContainer {\n    display: flex;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(244, 252, 252, 0.998);\n    flex-direction: column;\n    justify-content: space-between;\n    z-index: 2;\n}\n\ninput:not(.radio) {\n    border: 0px solid;\n    border-radius: 5px;\n    box-shadow: inset rgba(103, 103, 103, 0.09) 0px 3px 8px;\n    height: 30px;\n    width: 80%;\n    padding-left: 10px;\n    background-color: rgba(0, 0, 0, 0);\n    margin-bottom: 20px;\n}\n\ninput:focus-visible,\ntextarea:focus-visible{\n    border: 0px solid;\n    outline: 0px solid;\n}\n\ntextarea{\n    min-width: 60%;\n    min-height: 25%;\n    max-width: 60%;\n    max-height: 25%;\n    border: 0px solid;\n    border-radius: 5px;\n    box-shadow: inset rgba(103, 103, 103, 0.09) 0px 3px 8px;\n    padding-left: 10px;\n    padding-top: 10px;\n    background-color: rgba(0, 0, 0, 0);\n    margin-bottom: 20px;\n}\n\n#todoDate {\n    width: 40%;\n}\n\n.priorityRadioContainer {\n    display: grid;\n    grid-template: 1fr / repeat(3, 1fr);\n    width: 80%;\n    border: 0px;\n    border-radius: 5px;\n    box-shadow: inset rgba(103, 103, 103, 0.09) 0px 3px 8px;\n}\n\n.priorityRadioContainer > div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n}\n\n.priorityRadioContainer > legend {\n    position: relative;\n    bottom: 10px;\n}\n\n.radio {\n    box-shadow: 0px;\n}\n\n.submitButton {\n    width: 60px;\n    position: relative;\n    left: 10px;\n}\n\n.previewTran {\n    animation-name: previewFlip;\n    animation-duration: .35s;\n    animation-iteration-count: 1;\n}\n\n@keyframes previewFlip {\n    0%{\n        transform: rotateX(0deg);\n    }\n    100%{\n        transform: rotateX(90deg);\n    }\n}\n\n.mainTran {\n    animation-name: mainFlip;\n    animation-duration: .7s;\n    animation-iteration-count: 1;\n    position: absolute;\n    height: 95%;\n    top: 0px;\n    margin-top: 20px;\n    grid-row: 1;\n    transition: .2s;\n}\n\n@keyframes mainFlip {\n    0%{\n        transform: rotateX(-90deg);\n        position: relative;\n        grid-row: initial;\n        margin-top: 20px;   \n    }\n    50%{\n        transform: rotateX(0deg);\n        margin-top: calc(var(--margin-amount) + 20px);\n        position: relative;\n    }\n    51%{\n        \n        position: absolute;\n        height: 55px;\n        grid-row: initial;\n        margin-top: 0px;\n    }\n    52%{\n        \n    }\n    75%{\n        \n        margin-top: 20px;\n    }\n    100%{\n        height: 90%;\n        grid-row: initial;\n        \n    }\n}",""]);const d=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(a[l]=!0)}for(var s=0;s<n.length;s++){var p=[].concat(n[s]);o&&a[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},a=[],d=0;d<n.length;d++){var l=n[d],s=o.base?l[0]+o.base:l[0],p=r[s]||0,c="".concat(s," ").concat(p);r[s]=p+1;var u=t(c),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=i(m,o);o.byIndex=d,e.splice(d,0,{identifier:c,updater:f,references:1})}a.push(c)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var d=t(r[a]);e[d].references--}for(var l=o(n,i),s=0;s<r.length;s++){var p=t(r[s]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}r=l}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var o={};(()=>{t.d(o,{J:()=>y,B:()=>h});var n=t(379),e=t.n(n),i=t(795),r=t.n(i),a=t(569),d=t.n(a),l=t(565),s=t.n(l),p=t(216),c=t.n(p),u=t(589),m=t.n(u),f=t(426),x={};x.styleTagTransform=m(),x.setAttributes=s(),x.insert=d().bind(null,"head"),x.domAPI=r(),x.insertStyleElement=c(),e()(f.Z,x),f.Z&&f.Z.locals&&f.Z.locals;const g=document.documentElement;function h(){console.log("hello!")}function y(n,e,t,o){return{title:n,description:e,date:t,priority:o}}!function(){let n=1;const e=document.querySelector(".mainContainer"),t=document.createElement("div");t.className="todoItemContainer",e.appendChild(t);const o=document.querySelector(".newTodo");o.style.display="none",function(){let e=document.getElementById("todoTitle"),i=document.getElementById("todoDescription"),r=document.getElementById("todoDate");document.querySelector(".submitButton").addEventListener("click",(()=>{console.log(e.value),o.style.display="none",document.querySelector(".button").textContent="New",function(){let o=y(e.value,i.value,r.value,"abcda"),a=document.createElement("div"),d=document.createElement("div"),l=document.createElement("p"),s=document.createElement("p"),p=document.createElement("p"),c=document.createElement("p"),u=document.createElement("p"),m=document.createElement("p"),f=document.createElement("button");f.className="todoItemDelete",f.textContent="delete",d.className="todoPreview",l.textContent=o.title,l.className="todoEntryTitle",s.textContent=o.description,p.textContent=o.date,c.textContent=o.title,c.className="todoEntryTitle",u.textContent=o.description,m.textContent=o.date,p.textContent=o.date,d.appendChild(l),d.appendChild(p),d.appendChild(f),t.appendChild(d),a.className="todoMain",a.appendChild(c),a.appendChild(u),a.appendChild(m),t.appendChild(a),a.style.display="none",a.style.gridRow=n,a.style.gridColumn=1,d.style.gridColumn=1,d.style.gridRow=n,d.id=n,n++,d.addEventListener("click",(e=>{d.classList.toggle("previewTran"),console.log(e.target.id),setTimeout((()=>{g.style.setProperty("--margin-amount",`-${10*(Number(e.target.id)-1)}%`),d.style.display="none",a.classList.toggle("mainTran"),a.style.display="flex",a.style.backdropFilter="blur(10px)",a.style.gridRow=1,a.style.top=10*(n-2)+"%",a.style.marginTop=`-${10*(n-2)}%`}),350),setTimeout((()=>{a.style.top=0,a.style.marginTop="20px"}),700)})),a.addEventListener("click",(()=>{a.style.display="none",a.style.backdropFilter="none"})),f.addEventListener("click",(()=>{d.style.display="none"})),e.value=null,i.value=null,r.value=null}()}))}(),e.appendChild(function(){const n=document.createElement("button");return n.className="button",n.textContent="New",n.addEventListener("click",(()=>{"none"==o.style.display?(o.style.display="flex",n.textContent="Close"):(o.style.display="none",n.textContent="New"),console.log(o.style.display),h()})),n}())}()})()})();