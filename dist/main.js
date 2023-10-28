(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>a});var o=t(537),i=t.n(o),A=t(645),r=t.n(A)()(i());r.push([n.id,"body {\n    margin: 0;\n    background-image: linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% );\n}\n\n.mainContainer {\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.todoItemContainer {\n    width: 70%;\n    height: 65%;\n    background-color: aliceblue;\n    z-index: 0;\n    position: absolute;\n    display: grid;\n    border-radius: 15px;\n    border: 2px solid rgb(67, 108, 145);\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: 1fr 4fr;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    overflow: hidden;\n}\n\n.menu {\n    grid-column: 1;\n    grid-row: 1 / -1;\n    width: 100%;\n    height: 100%;\n    \n    display: grid;\n    grid-template-rows: 1fr repeat(6, 2fr);\n    grid-template-columns: 1fr;\n    z-index: 5;\n}\n\n.menuItem {\n    border-bottom: 2px solid;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 1.5em;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: aliceblue;\n    z-index: 5;\n    border-right: 3px solid rgba(0, 0, 0, 0.566);\n}\n\n.menuItem > h3,\n.menuItem > h4 {\n    margin: 0;\n    user-select: none;\n}\n\n#sort {\n    border-top-left-radius: 15px;\n}\n\n#notes {\n    border-bottom: 0px;\n    border-bottom-left-radius: 15px;\n}\n\n#sortArrow {\n    position: absolute;\n    left: 130px;\n    font-size: .8em;\n    transition: .4s;\n}\n\n.arrowRotate {\n    rotate: 180deg;\n}\n\n.sortMenu {\n    grid-column: 1;\n    grid-row: 1 / 4;\n    position: absolute;\n    z-index: 4;\n    width: 22%;\n    min-width: 120px;\n    height: 100%;\n    background-color: rgb(196, 196, 196);\n    left: 18%;\n    border-bottom-right-radius: 10px;\n    display: none;\n    grid-template: repeat(3, 1fr) / 1fr repeat(2, 2fr) .4fr;\n}\n\n#sortDateButton {\n    width: 75%;\n    height: 75%;\n    align-self: center;\n    \n    grid-column: 2;\n    border: 2px solid black;\n    border-radius: 7px;\n    background-color: #ffdb58;\n    box-shadow: 1px 1px black;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: 700;\n    font-size: .9em;\n    user-select: none;\n}\n\n#sortDateButton:active {\n    transform: scale(.95);\n    box-shadow: 0px 0px;\n    transform: translateX(1px) translateY(1px);\n    background-color: #f7d559;\n    box-shadow: inset 1px 1px  #00000096;\n}\n\n#sortMenuExit {\n    grid-column: 4;\n    margin: 0;\n    width: 100%;\n    text-align: center;\n    align-self: start;\n    position: relative;\n    right: 4px;\n    top: 3px;\n    background-color: #f7d559;\n    border-radius: 100px;\n}\n\n#sortMenuExit:active {\n    transform: scale(.95);\n    box-shadow: 0px 0px;\n    background-color: #efce57;\n    border: 1px solid;\n}\n\n.sortMenuTran {\n    display: grid;\n    \n    animation-name: sortMenuAni;\n    animation-duration: 1s;\n    animation-iteration-count: 1;\n}\n\n.sortMenuCloseTran {\n    display: none;\n    animation-name: sortMenuCloseAni;\n    animation-duration: 1s;\n    animation-iteration-count: 1;\n}\n\n@keyframes sortMenuAni {\n    0%{\n        transform: translateX(-260px);\n    }\n    100%{\n        transform: translateX(0px);\n    }\n}\n\n@keyframes sortMenuCloseAni {\n    0%{\n        transform: translateX(0px);\n        display: grid;\n    }\n    100%{\n        transform: translateX(-260px);\n        display: grid;\n    }\n}\n\n.todoPreview {\n    width: 90%;\n    height: 100%;\n    max-height: 1fr;\n    background-color: rgb(255, 255, 255);\n    border: 2px solid;\n    border-radius: 10px;\n    box-shadow: 2px 2px black;\n    display: grid;\n    grid-template-columns: 2fr 2fr 1fr 1fr;\n    margin-top: 20px;\n    z-index: 1;\n    font-family: Arial, Helvetica, sans-serif;\n    justify-self: center;\n    min-width: 0;\n    overflow: hidden;\n    align-items: center;\n    user-select: none;\n}\n\n.todoPreview > p {\n    margin-right: 40px;\n    position: relative;\n    left: 20px;\n    bottom: 5px;\n}\n\n#todoMore,\n#todoClose {\n    width: 25%;\n    grid-column: 4;\n    grid-row: 1;\n    position: relative;\n    bottom: 5px;\n    background-color: #2e79e375;\n    border-radius: 20px;\n    outline: 1px solid black;\n    box-shadow: 1px 1px black;\n}\n\n#todoMore:active,\n#todoClose:active {\n    transform: scale(.95);\n    box-shadow: 0px 0px;\n    transform: translateX(1px) translateY(1px);\n    background-color: #296bc875;\n    box-shadow: inset 1px 1px  #00000096;\n}\n\n#todoMore {\n    justify-self: start;\n    left: 12px;\n}\n\n#todoClose {\n    justify-self: end;\n    right: 12px;\n}\n\n.button {\n    margin-left: 20px;\n    margin-top: 20px;\n    position: absolute;\n    bottom: 5%;\n}\n\n.newTodo {\n    display: flex;\n    width: 50%;\n    height: 55%;\n    z-index: 2;\n}\n\n.todoItemDelete {\n    grid-column: 4;\n    width: 60%;\n    \n    justify-self: center;\n    position: relative;\n    bottom: 5px;\n}\n\n.todoMain {\n    z-index: 3;\n    position: relative;\n    background-color: rgb(197, 203, 242);\n    width: 90%;\n    height: 100%;\n    max-height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-self: center;\n    margin-top: 20px;\n    min-width: 0;\n    overflow: hidden;\n    border: 2px solid;\n    border-radius: 10px;\n    box-shadow: 3px 2px black;\n    font-family: Arial, Helvetica, sans-serif;\n    /*\n    top: 0; \n    bottom: 0; \n    margin-top: auto; \n    margin-bottom: auto; \n    */\n\n}\n\n.todoMain > p {\n    margin: 0;\n    position: relative;\n    left: 30px;\n}\n\n.todoMain > h3 {\n    position: relative;\n    left: 30px;\n    border-bottom: 2px solid;\n}\n\nlegend {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.todoInputContainer {\n    display: flex;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(244, 252, 252, 0.998);\n    flex-direction: column;\n    justify-content: space-between;\n    z-index: 2;\n}\n\ninput:not(.radio) {\n    border: 0px solid;\n    border-radius: 5px;\n    box-shadow: inset rgba(103, 103, 103, 0.09) 0px 3px 8px;\n    height: 30px;\n    width: 80%;\n    padding-left: 10px;\n    background-color: rgba(0, 0, 0, 0);\n    margin-bottom: 20px;\n}\n\ninput:focus-visible,\ntextarea:focus-visible{\n    border: 0px solid;\n    outline: 0px solid;\n}\n\ntextarea{\n    min-width: 60%;\n    min-height: 25%;\n    max-width: 60%;\n    max-height: 25%;\n    border: 0px solid;\n    border-radius: 5px;\n    box-shadow: inset rgba(103, 103, 103, 0.09) 0px 3px 8px;\n    padding-left: 10px;\n    padding-top: 10px;\n    background-color: rgba(0, 0, 0, 0);\n    margin-bottom: 20px;\n}\n\n#todoDate {\n    width: 40%;\n}\n\n.priorityRadioContainer {\n    display: grid;\n    grid-template: 1fr / repeat(3, 1fr);\n    width: 80%;\n    border: 0px;\n    border-radius: 5px;\n    box-shadow: inset rgba(103, 103, 103, 0.09) 0px 3px 8px;\n}\n\n.priorityRadioContainer > div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n}\n\n.priorityRadioContainer > legend {\n    position: relative;\n    bottom: 10px;\n}\n\n.radio {\n    box-shadow: 0px;\n}\n\n.submitButton {\n    width: 60px;\n    position: relative;\n    left: 10px;\n}\n\n.previewTran {\n    animation-name: previewFlip;\n    animation-duration: .35s;\n    animation-iteration-count: 1;\n}\n\n@keyframes previewFlip {\n    0%{\n        transform: rotateX(0deg);\n    }\n    100%{\n        transform: rotateX(90deg);\n    }\n}\n\n.previewTranRev {\n    animation-name: previewFlipRev;\n    animation-duration: .35s;\n    animation-iteration-count: 1;\n}\n\n@keyframes previewFlipRev {\n    0%{\n        transform: rotateX(-90deg);\n    }\n    100%{\n        transform: rotateX(0deg);\n    }\n}\n\n.mainTran {\n    animation-name: mainFlip;\n    animation-duration: .7s;\n    animation-iteration-count: 1;\n    position: absolute;\n    height: 95%;\n    top: 0px;\n    margin-top: 8px;\n    grid-row: 1;\n    transition: .2s;\n}\n\n.mainTranRev {\n    animation-name: mainFlipRev;\n    animation-duration: .7s;\n    animation-iteration-count: 1;\n    animation-direction: reverse;\n    display: none;\n}\n\n@keyframes mainFlip {\n    0%{\n        transform: rotateX(-90deg);\n        position: relative;\n        grid-row: initial;\n        \n    }\n    50%{\n        transform: rotateX(0deg);\n        margin-top: calc(var(--margin-amount));\n        position: relative;\n    }\n    50.01%{\n        \n        position: absolute;\n        height: 55px;\n        grid-row: initial;\n        margin-top: 8px;\n    }\n    75%{\n        \n        margin-top: 8px;\n    }\n    100%{\n        height: 95%;\n        grid-row: initial;\n        display: flex;\n    }\n}\n@keyframes mainFlipRev {\n    0%{\n        transform: rotateX(90deg);\n        \n        \n        height: 100%;\n        visibility: hidden;\n    }\n    5%{\n        grid-row: initial;\n        visibility: hidden;\n        display: none;\n    }\n    6%{\n        visibility: visible;\n    }\n    50%{\n        transform: rotateX(0deg);\n        margin-top: calc(var(--margin-amount));\n        position: relative;\n    }\n    50.0000001%{\n        \n        position: absolute;\n        height: 30px;\n        grid-row: initial;\n        margin-top: 8px;\n        \n    }\n    100%{\n        height: 95%;\n        grid-row: initial;\n        position: absolute;\n        margin-top: 8px;\n    }\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:["body {\n    margin: 0;\n    background-image: linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% );\n}\n\n.mainContainer {\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.todoItemContainer {\n    width: 70%;\n    height: 65%;\n    background-color: aliceblue;\n    z-index: 0;\n    position: absolute;\n    display: grid;\n    border-radius: 15px;\n    border: 2px solid rgb(67, 108, 145);\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: 1fr 4fr;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    overflow: hidden;\n}\n\n.menu {\n    grid-column: 1;\n    grid-row: 1 / -1;\n    width: 100%;\n    height: 100%;\n    \n    display: grid;\n    grid-template-rows: 1fr repeat(6, 2fr);\n    grid-template-columns: 1fr;\n    z-index: 5;\n}\n\n.menuItem {\n    border-bottom: 2px solid;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 1.5em;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: aliceblue;\n    z-index: 5;\n    border-right: 3px solid rgba(0, 0, 0, 0.566);\n}\n\n.menuItem > h3,\n.menuItem > h4 {\n    margin: 0;\n    user-select: none;\n}\n\n#sort {\n    border-top-left-radius: 15px;\n}\n\n#notes {\n    border-bottom: 0px;\n    border-bottom-left-radius: 15px;\n}\n\n#sortArrow {\n    position: absolute;\n    left: 130px;\n    font-size: .8em;\n    transition: .4s;\n}\n\n.arrowRotate {\n    rotate: 180deg;\n}\n\n.sortMenu {\n    grid-column: 1;\n    grid-row: 1 / 4;\n    position: absolute;\n    z-index: 4;\n    width: 22%;\n    min-width: 120px;\n    height: 100%;\n    background-color: rgb(196, 196, 196);\n    left: 18%;\n    border-bottom-right-radius: 10px;\n    display: none;\n    grid-template: repeat(3, 1fr) / 1fr repeat(2, 2fr) .4fr;\n}\n\n#sortDateButton {\n    width: 75%;\n    height: 75%;\n    align-self: center;\n    \n    grid-column: 2;\n    border: 2px solid black;\n    border-radius: 7px;\n    background-color: #ffdb58;\n    box-shadow: 1px 1px black;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: 700;\n    font-size: .9em;\n    user-select: none;\n}\n\n#sortDateButton:active {\n    transform: scale(.95);\n    box-shadow: 0px 0px;\n    transform: translateX(1px) translateY(1px);\n    background-color: #f7d559;\n    box-shadow: inset 1px 1px  #00000096;\n}\n\n#sortMenuExit {\n    grid-column: 4;\n    margin: 0;\n    width: 100%;\n    text-align: center;\n    align-self: start;\n    position: relative;\n    right: 4px;\n    top: 3px;\n    background-color: #f7d559;\n    border-radius: 100px;\n}\n\n#sortMenuExit:active {\n    transform: scale(.95);\n    box-shadow: 0px 0px;\n    background-color: #efce57;\n    border: 1px solid;\n}\n\n.sortMenuTran {\n    display: grid;\n    \n    animation-name: sortMenuAni;\n    animation-duration: 1s;\n    animation-iteration-count: 1;\n}\n\n.sortMenuCloseTran {\n    display: none;\n    animation-name: sortMenuCloseAni;\n    animation-duration: 1s;\n    animation-iteration-count: 1;\n}\n\n@keyframes sortMenuAni {\n    0%{\n        transform: translateX(-260px);\n    }\n    100%{\n        transform: translateX(0px);\n    }\n}\n\n@keyframes sortMenuCloseAni {\n    0%{\n        transform: translateX(0px);\n        display: grid;\n    }\n    100%{\n        transform: translateX(-260px);\n        display: grid;\n    }\n}\n\n.todoPreview {\n    width: 90%;\n    height: 100%;\n    max-height: 1fr;\n    background-color: rgb(255, 255, 255);\n    border: 2px solid;\n    border-radius: 10px;\n    box-shadow: 2px 2px black;\n    display: grid;\n    grid-template-columns: 2fr 2fr 1fr 1fr;\n    margin-top: 20px;\n    z-index: 1;\n    font-family: Arial, Helvetica, sans-serif;\n    justify-self: center;\n    min-width: 0;\n    overflow: hidden;\n    align-items: center;\n    user-select: none;\n}\n\n.todoPreview > p {\n    margin-right: 40px;\n    position: relative;\n    left: 20px;\n    bottom: 5px;\n}\n\n#todoMore,\n#todoClose {\n    width: 25%;\n    grid-column: 4;\n    grid-row: 1;\n    position: relative;\n    bottom: 5px;\n    background-color: #2e79e375;\n    border-radius: 20px;\n    outline: 1px solid black;\n    box-shadow: 1px 1px black;\n}\n\n#todoMore:active,\n#todoClose:active {\n    transform: scale(.95);\n    box-shadow: 0px 0px;\n    transform: translateX(1px) translateY(1px);\n    background-color: #296bc875;\n    box-shadow: inset 1px 1px  #00000096;\n}\n\n#todoMore {\n    justify-self: start;\n    left: 12px;\n}\n\n#todoClose {\n    justify-self: end;\n    right: 12px;\n}\n\n.button {\n    margin-left: 20px;\n    margin-top: 20px;\n    position: absolute;\n    bottom: 5%;\n}\n\n.newTodo {\n    display: flex;\n    width: 50%;\n    height: 55%;\n    z-index: 2;\n}\n\n.todoItemDelete {\n    grid-column: 4;\n    width: 60%;\n    \n    justify-self: center;\n    position: relative;\n    bottom: 5px;\n}\n\n.todoMain {\n    z-index: 3;\n    position: relative;\n    background-color: rgb(197, 203, 242);\n    width: 90%;\n    height: 100%;\n    max-height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-self: center;\n    margin-top: 20px;\n    min-width: 0;\n    overflow: hidden;\n    border: 2px solid;\n    border-radius: 10px;\n    box-shadow: 3px 2px black;\n    font-family: Arial, Helvetica, sans-serif;\n    /*\n    top: 0; \n    bottom: 0; \n    margin-top: auto; \n    margin-bottom: auto; \n    */\n\n}\n\n.todoMain > p {\n    margin: 0;\n    position: relative;\n    left: 30px;\n}\n\n.todoMain > h3 {\n    position: relative;\n    left: 30px;\n    border-bottom: 2px solid;\n}\n\nlegend {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.todoInputContainer {\n    display: flex;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(244, 252, 252, 0.998);\n    flex-direction: column;\n    justify-content: space-between;\n    z-index: 2;\n}\n\ninput:not(.radio) {\n    border: 0px solid;\n    border-radius: 5px;\n    box-shadow: inset rgba(103, 103, 103, 0.09) 0px 3px 8px;\n    height: 30px;\n    width: 80%;\n    padding-left: 10px;\n    background-color: rgba(0, 0, 0, 0);\n    margin-bottom: 20px;\n}\n\ninput:focus-visible,\ntextarea:focus-visible{\n    border: 0px solid;\n    outline: 0px solid;\n}\n\ntextarea{\n    min-width: 60%;\n    min-height: 25%;\n    max-width: 60%;\n    max-height: 25%;\n    border: 0px solid;\n    border-radius: 5px;\n    box-shadow: inset rgba(103, 103, 103, 0.09) 0px 3px 8px;\n    padding-left: 10px;\n    padding-top: 10px;\n    background-color: rgba(0, 0, 0, 0);\n    margin-bottom: 20px;\n}\n\n#todoDate {\n    width: 40%;\n}\n\n.priorityRadioContainer {\n    display: grid;\n    grid-template: 1fr / repeat(3, 1fr);\n    width: 80%;\n    border: 0px;\n    border-radius: 5px;\n    box-shadow: inset rgba(103, 103, 103, 0.09) 0px 3px 8px;\n}\n\n.priorityRadioContainer > div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n}\n\n.priorityRadioContainer > legend {\n    position: relative;\n    bottom: 10px;\n}\n\n.radio {\n    box-shadow: 0px;\n}\n\n.submitButton {\n    width: 60px;\n    position: relative;\n    left: 10px;\n}\n\n.previewTran {\n    animation-name: previewFlip;\n    animation-duration: .35s;\n    animation-iteration-count: 1;\n}\n\n@keyframes previewFlip {\n    0%{\n        transform: rotateX(0deg);\n    }\n    100%{\n        transform: rotateX(90deg);\n    }\n}\n\n.previewTranRev {\n    animation-name: previewFlipRev;\n    animation-duration: .35s;\n    animation-iteration-count: 1;\n}\n\n@keyframes previewFlipRev {\n    0%{\n        transform: rotateX(-90deg);\n    }\n    100%{\n        transform: rotateX(0deg);\n    }\n}\n\n.mainTran {\n    animation-name: mainFlip;\n    animation-duration: .7s;\n    animation-iteration-count: 1;\n    position: absolute;\n    height: 95%;\n    top: 0px;\n    margin-top: 8px;\n    grid-row: 1;\n    transition: .2s;\n}\n\n.mainTranRev {\n    animation-name: mainFlipRev;\n    animation-duration: .7s;\n    animation-iteration-count: 1;\n    animation-direction: reverse;\n    display: none;\n}\n\n@keyframes mainFlip {\n    0%{\n        transform: rotateX(-90deg);\n        position: relative;\n        grid-row: initial;\n        \n    }\n    50%{\n        transform: rotateX(0deg);\n        margin-top: calc(var(--margin-amount));\n        position: relative;\n    }\n    50.01%{\n        \n        position: absolute;\n        height: 55px;\n        grid-row: initial;\n        margin-top: 8px;\n    }\n    75%{\n        \n        margin-top: 8px;\n    }\n    100%{\n        height: 95%;\n        grid-row: initial;\n        display: flex;\n    }\n}\n@keyframes mainFlipRev {\n    0%{\n        transform: rotateX(90deg);\n        \n        \n        height: 100%;\n        visibility: hidden;\n    }\n    5%{\n        grid-row: initial;\n        visibility: hidden;\n        display: none;\n    }\n    6%{\n        visibility: visible;\n    }\n    50%{\n        transform: rotateX(0deg);\n        margin-top: calc(var(--margin-amount));\n        position: relative;\n    }\n    50.0000001%{\n        \n        position: absolute;\n        height: 30px;\n        grid-row: initial;\n        margin-top: 8px;\n        \n    }\n    100%{\n        height: 95%;\n        grid-row: initial;\n        position: absolute;\n        margin-top: 8px;\n    }\n}"],sourceRoot:""}]);const a=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,A){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(r[l]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);o&&r[d[0]]||(void 0!==A&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=A),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),A="/*# ".concat(i," */");return[e].concat([A]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var A={},r=[],a=0;a<n.length;a++){var l=n[a],s=o.base?l[0]+o.base:l[0],d=A[s]||0,p="".concat(s," ").concat(d);A[s]=d+1;var c=t(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==c)e[c].references++,e[c].updater(m);else{var C=i(m,o);o.byIndex=a,e.splice(a,0,{identifier:p,updater:C,references:1})}r.push(p)}return r}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var A=o(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<A.length;r++){var a=t(A[r]);e[a].references--}for(var l=o(n,i),s=0;s<A.length;s++){var d=t(A[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}A=l}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var A=t.sourceMap;A&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var A=e[o]={id:o,exports:{}};return n[o](A,A.exports,t),A.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&!n;)n=o[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0;var o={};(()=>{t.d(o,{JV:()=>x,Nk:()=>v,B_:()=>f,x_:()=>h,bo:()=>w});var n=t(379),e=t.n(n),i=t(795),A=t.n(i),r=t(569),a=t.n(r),l=t(565),s=t.n(l),d=t(216),p=t.n(d),c=t(589),m=t.n(c),C=t(426),u={};u.styleTagTransform=m(),u.setAttributes=s(),u.insert=a().bind(null,"head"),u.domAPI=A(),u.insertStyleElement=p(),e()(C.Z,u),C.Z&&C.Z.locals&&C.Z.locals;const B=t.p+"947b9f91d0fa0ca2b0c3.png",g=t.p+"1f07b941d0927c23ddf6.png",I=document.documentElement;function f(){console.log("hello!")}function x(n,e,t,o){return{title:n,description:e,date:t,priority:o}}function h(n,e,t){return{id:n,prevId:e,fullDate:t}}let b,y;function v(n){if(b=[],n.length>0){for(let e=0;e<n.length;e++)if(0==b.length)b[e]=n[e];else for(let t=0;t<b.length;t++){if(n[e].fullDate<=b[t].fullDate){b.splice(t,0,n[e]);break}if(n[e].fullDate>b[b.length-1].fullDate){b.push(n[e]);break}}let e;console.log(b),y=b;let t=[];for(let n=0;n<b.length;n++)t[n]=b[n].id,e=document.getElementById(t[n]),e.classList.add(`obj${n+1}`),e.id=void 0;for(let n=0;n<b.length;n++)e=document.querySelector(`.obj${n+1}`),e.classList.remove(`obj${n+1}`),e.id=n+1,e.style.gridRow=e.id,b[n].id=n+1;return console.log(t),y}}function w(n,e){let t,o;null==y&&(y=e);let i=y[n-1];y.splice(n-1,1),document.getElementById(n).remove();for(let e=n-1;e<y.length;e++){t=y[e],o=y[e+1],y[e].id=e+1,y[e].prevId=i.prevId;let n=document.getElementById(e+2);n.id=e+1,console.log(e),console.log(y),i=o,n.style.gridRow=n.id,console.log(y)}}!function(){let n,e,t=!1,o=1,i=[],A=[],r=/[^T:-]/g;const a=document.querySelector(".mainContainer"),l=document.createElement("div"),s=document.createElement("div");s.className="menu",l.appendChild(s),s.style.gridRow="1 / -1",s.style.gridColumn="1",function(){function n(){(n=document.createElement("div")).className="sortMenu",n.classList.add("sortMenuCloseTran");let e=document.createElement("button");e.id="sortDateButton",e.textContent="Date";let t=new Image;return t.src=B,t.id="sortMenuExit",n.appendChild(e),n.appendChild(t),n}s.appendChild(function(){const n=document.createElement("div");n.id="sort",n.className="menuItem";const e=document.createElement("h4");e.textContent="Sort";const o=document.createElement("h4");o.id="sortArrow",o.textContent=">",n.appendChild(e),n.appendChild(o);let i=!1;return n.addEventListener("click",(()=>{0==i&&(document.querySelector(".sortMenu").classList.toggle("sortMenuTran"),document.querySelector(".sortMenu").classList.toggle("sortMenuCloseTran"),o.classList.toggle("arrowRotate"),i=!0)})),setTimeout((()=>{document.getElementById("sortDateButton").addEventListener("click",(()=>{t=!0,A=v(A)})),document.getElementById("sortMenuExit").addEventListener("click",(()=>{document.querySelector(".sortMenu").classList.toggle("sortMenuTran"),document.querySelector(".sortMenu").classList.toggle("sortMenuCloseTran"),o.classList.toggle("arrowRotate"),i=!1}))}),100),n}()),s.appendChild(function(){const n=document.createElement("div");n.id="home",n.className="menuItem";const e=document.createElement("h3");return e.textContent="Home",n.appendChild(e),n}()),s.appendChild(function(){const n=document.createElement("div");n.id="today",n.className="menuItem";const e=document.createElement("h3");return e.textContent="Today",n.appendChild(e),n}()),s.appendChild(function(){const n=document.createElement("div");n.id="week",n.className="menuItem";const e=document.createElement("h3");return e.textContent="Week",n.appendChild(e),n}()),s.appendChild(function(){const n=document.createElement("div");n.id="month",n.className="menuItem";const e=document.createElement("h3");return e.textContent="Month",n.appendChild(e),n}()),s.appendChild(function(){const n=document.createElement("div");n.id="projects",n.className="menuItem";const e=document.createElement("h3");return e.textContent="Projects",n.appendChild(e),n}()),s.appendChild(function(){const n=document.createElement("div");n.id="notes",n.className="menuItem";const e=document.createElement("h3");return e.textContent="Notes",n.appendChild(e),n}()),s.appendChild(n())}(),l.className="todoItemContainer",a.appendChild(l);const d=document.querySelector(".newTodo");d.style.display="none",function(){let a=document.getElementById("todoTitle"),s=document.getElementById("todoDescription"),p=document.getElementById("todoDate"),c=document.getElementById("priorityRadio1"),m=document.getElementById("priorityRadio2"),C=document.getElementById("priorityRadio3");document.querySelector(".submitButton"),d.addEventListener("submit",(u=>{let f;c.checked?f="Low":m.checked?f="Med":C.checked&&(f="High"),u.preventDefault(),console.log(a.value),d.style.display="none",document.querySelector(".button").textContent="New",function(){let d=x(a.value,s.value,p.value,f);Object[`todoListing${o}`]=d;let c=document.createElement("div"),m=document.createElement("div"),C=document.createElement("p"),u=document.createElement("p"),b=document.createElement("p"),y=document.createElement("p"),k=document.createElement("p"),E=document.createElement("p"),T=document.createElement("button");T.className="todoItemDelete",T.textContent="delete",m.className="todoPreview",C.textContent=d.title,C.className="todoEntryTitle",u.textContent=d.description,b.textContent=d.date,b.className="todoEntryDate",y.textContent=d.title,y.className="todoEntryTitle",k.textContent=d.description,E.textContent=d.date,b.textContent=d.date;const j=new Image,U=new Image;j.src=B,U.src=g,j.id="todoClose",U.id="todoMore",m.appendChild(C),m.appendChild(b),m.appendChild(U),m.appendChild(j),l.appendChild(m),c.className="todoMain";let M=document.createElement("h3");M.textContent="Title:";let Q=document.createElement("h3");Q.textContent="Description:";let X=document.createElement("h3");X.textContent="Date/Time:",c.appendChild(M),c.appendChild(y),c.appendChild(Q),c.appendChild(k),c.appendChild(X),c.appendChild(E),l.appendChild(c),c.style.display="none",c.style.gridRow=o,c.style.gridColumn=2,m.style.gridColumn=2,m.id=Number(o),m.style.gridRow=m.id,i[o-1]=o,console.log(i),n=document.getElementById(o),e=n.querySelector(".todoEntryDate").textContent,console.log(e),Object[`tododateObj${o}`]=h(o,o,function(n){if(n){let e=n.join("");return console.log(e),e}console.log("no date")}(e.match(r))),A[o-1]=Object[`tododateObj${o}`],console.log(A),o++,U.addEventListener("mouseup",(()=>{m.classList.toggle("previewTran"),setTimeout((()=>{1==m.id?I.style.setProperty("--margin-amount","20px"):I.style.setProperty("--margin-amount",`calc(-${13*(Number(m.id)-1)}vh + ${6.5/(Number(m.id)-1)+10}px)`),m.style.display="none",c.classList.toggle("mainTran"),c.style.display="flex",c.style.gridRow=1}),340),setTimeout((()=>{c.style.top=0,c.style.marginTop="8px"}),700)})),c.addEventListener("click",(()=>{c.classList.toggle("mainTran"),c.classList.toggle("mainTranRev"),m.classList.toggle("previewTran"),setTimeout((()=>{c.style.display="none",m.style.display="grid",m.classList.toggle("previewTranRev")}),690),setTimeout((()=>{m.classList.toggle("previewTranRev"),c.classList.toggle("mainTranRev")}),1050)})),j.addEventListener("click",(()=>{o--,console.log(i),w(Number(m.id),A)})),a.value=null,s.value=null,p.value=null,1==t&&(A=v(A))}()}))}(),a.appendChild(function(){const n=document.createElement("button");return n.className="button",n.textContent="New",n.addEventListener("click",(()=>{"none"==d.style.display?(d.style.display="flex",n.textContent="Close"):(d.style.display="none",n.textContent="New"),console.log(d.style.display),f()})),n}())}()})()})();
//# sourceMappingURL=main.js.map