(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"2Pik":function(n,e,t){var o=t("dRvM");n.exports="string"==typeof o?o:o.toString()},ANJM:function(n,e,t){var o=t("wW48");n.exports="string"==typeof o?o:o.toString()},"Hp/m":function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".description {\n    grid-row: 2 / 3;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 2rem;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .description {\n        padding: 1.5rem;\n    }\n}\n\n.description > *:not(:last-child) {\n    margin-bottom: 1rem;\n}\n",""]),n.exports=e},KIIj:function(n,e,t){var o=t("cRcm");n.exports="string"==typeof o?o:o.toString()},OsHv:function(n){"use strict";n.exports=function(n){for(var e=1,t=0,o=0,r=n.length,i=-4&r;o<i;){for(var a=Math.min(o+4096,i);o<a;o+=4)t+=(e+=n.charCodeAt(o))+(e+=n.charCodeAt(o+1))+(e+=n.charCodeAt(o+2))+(e+=n.charCodeAt(o+3));e%=65521,t%=65521}for(;o<r;o++)t+=e+=n.charCodeAt(o);return(e%=65521)|(t%=65521)<<16}},Oxty:function(n,e,t){var o=t("hwuB");n.exports="string"==typeof o?o:o.toString()},Rsgl:function(n,e,t){var o=t("mn5G");n.exports="string"==typeof o?o:o.toString()},SOrw:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".logo {\n    display: flex;\n    align-items: flex-start;\n\n    /* Fix logo to the top and scroll the content beneath*/\n    position: sticky;\n    top: 0;\n    background: white;\n\n    margin: -1rem -2rem 0 -2rem;\n    padding: 1.5rem 2rem;\n}\n\n.logo > *:not(:last-child) {\n    margin-right: 1rem;\n}\n\n.logo__heading > * {\n    min-height: 1rem;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .logo {\n        margin: -1rem -1.5rem 0 -1.5rem;\n        padding: 1.5rem 1.5rem;\n    }\n}\n\n.logo__img {\n    height: 2rem;\n}\n\n.logo__link:link,\n.logo__link:visited {\n    color: black;\n    opacity: 1;\n    text-decoration: none;\n}\n",""]),n.exports=e},SZxn:function(n,e,t){var o=t("Hp/m");n.exports="string"==typeof o?o:o.toString()},UpYz:function(n,e,t){var o=t("SOrw");n.exports="string"==typeof o?o:o.toString()},VNgF:function(n){"use strict";function e(n,e){var t,o,r=n[1]||"",i=n[3];if(!i)return r;if(e&&"function"==typeof btoa){var a=(t=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),"/*# ".concat(o," */")),l=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[r].concat(l).concat([a]).join("\n")}return[r].join("\n")}n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t,n);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);o&&r[c[0]]||(e&&(c[2]=c[2]?"".concat(e," and ").concat(c[2]):e),t.push(c))}},t}},W2lv:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,'.radio-button {\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 8px;\n    transition: all 0.2s;\n    overflow: hidden;\n}\n\n.radio-button--selected {\n    border-color: #000000;\n}\n\n.radio-button__input {\n    display: none;\n}\n\n.radio-button__label {\n    padding: 1.25rem;\n    cursor: pointer;\n\n    display: flex;\n    align-items: center;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .radio-button__label {\n        padding: 0.75rem;\n    }\n}\n\n@media only screen and (max-width: 37.5em) {\n    .radio-button--selected .radio-button__extra {\n        display: grid;\n        padding: 1rem;\n        visibility: visible;\n        height: auto;\n    }\n}\n\n.radio-button__extra {\n    visibility: hidden;\n    height: 0;\n    grid-template-columns: 1fr 65%;\n    gap: 1rem;\n    transition: all 0.2s;\n}\n\n.radio-button__img-container {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    grid-column: 1/2;\n    overflow: hidden;\n    border-radius: 0.5rem;\n}\n\n.radio-button__img-container::after {\n    content: "";\n    display: block;\n    padding-bottom: 80%;\n}\n\n.radio-button__image {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    height: auto;\n    object-fit: cover;\n    object-position: center;\n\n    /* https://stackoverflow.com/questions/14562457/center-oversized-image-in-div */\n    top: -9999px;\n    bottom: -9999px;\n    left: -9999px;\n    right: -9999px;\n    margin: auto;\n}\n\n/* Only on iOS Devices */\n/* @supports (-webkit-touch-callout: none) {\n    .radio-button__image {\n        height: auto;\n    }\n} */\n\n.radio-button__description {\n    grid-column: 2/3;\n}\n',""]),n.exports=e},cRcm:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,'/* \n* Reset stylesheet\n*/\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\n/* \n* Base styles\n*/\n\n.wrapper {\n  --color-primary: #2e3434;\n  z-index: 999;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  background: rgba(0, 0, 0, 0.5);\n  color: var(--color-primary);\n  justify-content: center;\n  align-items: center;\n  font-family: "Basis Grotesque Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen-Sans, Ubuntu, Cantarell,\n    "Helvetica Neue", Roboto, sans-serif;\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .wrapper {\n    background: #fff;\n  }\n}\n\n.close {\n  position: absolute;\n  top: 1.5rem;\n  right: 1rem;\n  width: 1.5rem;\n  height: 2px;\n  background: #000;\n  transform: rotate(45deg);\n  z-index: 5;\n\n  transition: all 0.2s;\n}\n\n.close::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  background: #000;\n  width: 1.5rem;\n  height: 2px;\n\n  transform: rotate(-90deg);\n}\n\n/* \n* Typography\n*/\n\n.t-heading-primary {\n  font-size: 2rem;\n  line-height: 1.25;\n  font-weight: bold;\n  letter-spacing: -0.025em;\n}\n\n.t-heading-secondary {\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #000000;\n  letter-spacing: -0.01em;\n  font-weight: 400;\n}\n\n.t-title {\n  font-size: 1rem;\n  line-height: 1.25;\n  font-weight: bold;\n}\n\n.t-body {\n  font-size: 0.75rem;\n  line-height: 1.33;\n  font-weight: 400;\n  color: #000;\n}\n\n.t-body--small {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 400;\n  opacity: 0.5;\n  color: #000;\n}\n\n.t-input {\n  font-weight: bold;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #2e3434;\n}\n\n.t-label {\n  font-weight: bold;\n  font-size: 1rem;\n  line-height: 1;\n  color: #2e3434;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n  .t-heading-primary {\n    font-size: 1.5rem;\n    line-height: 1.167;\n    letter-spacing: -0.02em;\n  }\n\n  .t-heading-secondary {\n    font-size: 0.75rem;\n    line-height: 1.43;\n    letter-spacing: -0.01em;\n  }\n\n  .t-title {\n    font-size: 0.75rem;\n    line-height: 1;\n  }\n\n  .t-body--small {\n    font-size: 0.75rem;\n    line-height: 1.33;\n  }\n\n  .t-input {\n    font-size: 0.875rem;\n    line-height: 1.71;\n  }\n}\n\n/* \n* Components\n*/\n\n.widget {\n  background: white;\n  border-radius: 1.5rem;\n  overflow: hidden;\n\n  box-sizing: border-box;\n\n  font-weight: normal;\n  line-height: 1.2;\n  transition: all 0.2s;\n}\n\n.widget--split {\n  width: 888px;\n  height: max-content;\n  max-height: 95%;\n  display: grid;\n\n  grid-template-columns: repeat(2, 50%);\n  grid-template-rows: 1fr max-content;\n}\n\n.widget--single {\n  width: 444px;\n  max-height: 95%;\n  display: grid;\n  height: auto;\n}\n\n.btn-mobile {\n  padding: 1.5rem 1rem;\n  position: sticky;\n  bottom: 0;\n  background: white;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n/* @media only screen and (max-height: 57.5em) {\n  .widget--single {\n    width: 300px;\n  }\n} */\n\n/* 1024px */\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n  .widget--split {\n    width: 600px;\n  }\n\n  .widget--single {\n    width: 300px;\n  }\n\n  .widget--single {\n    width: 300px;\n  }\n}\n\n/* 600px */\n@media only screen and (max-width: 37.5em) {\n  .widget {\n    height: 100%;\n  }\n\n  .widget--split {\n    grid-template-columns: 1fr;\n    width: 100%;\n    height: 100%;\n    max-height: none;\n    overflow-y: auto;\n  }\n\n  .widget--single {\n    grid-template-columns: 1fr;\n    max-height: none;\n    width: 100%;\n    height: 100%;\n  }\n}\n\n.right-panel {\n  height: 100%;\n  display: grid;\n\n  position: relative;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .right-panel {\n    display: none;\n  }\n}\n\n.right-panel__item {\n  display: grid;\n\n  grid-row: 1/-1;\n  grid-column: 1/-1;\n  grid-template-rows: 1fr max-content;\n}\n\n.right-panel__item--active {\n  z-index: 99;\n}\n\n.right-panel__item--hidden {\n  opacity: 0;\n}\n\n.fadeOutDown {\n  animation: fadeOutDown 0.3s;\n}\n\n.fadeInDown {\n  animation: fadeInDown 0.3s;\n}\n\n.fadeOutUp {\n  animation: fadeOutUp 0.3s;\n}\n\n.fadeInUp {\n  animation: fadeInUp 0.3s;\n}\n\n@keyframes fadeOutDown {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n\n  99% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    transform: translateY(-100%);\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes fadeOutUp {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n\n  99% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n}\n\n@keyframes fadeInUp {\n  0% {\n    transform: translateY(100%);\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n/* \n* Utils\n*/\n\n.u-justify-content-space-between {\n  justify-content: space-between;\n}\n\n.u-justify-content-center {\n  justify-content: center;\n}\n\n.u-hide-desktop {\n  display: none;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .u-hide-mobile {\n    display: none;\n  }\n\n  .u-hide-desktop {\n    display: block;\n  }\n}\n',""]),n.exports=e},dRvM:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".company {\n    position: absolute;\n    top: 1.5rem;\n    left: 2rem;\n\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: repeat(2, 1fr);\n    align-items: center;\n    column-gap: 1rem;\n\n    z-index: 999;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .company {\n        top: 1rem;\n        left: 1.5rem;\n    }\n}\n\n.company__img {\n    box-sizing: content-box;\n    height: 2rem;\n    width: 2rem;\n    grid-row: 1 / -1;\n    border: 4px solid #ffff;\n    border-radius: 100%;\n}\n\n.company__title {\n    color: white;\n    align-self: start;\n}\n\n.company__subtitle {\n    color: white;\n    text-transform: uppercase;\n    align-self: end;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .company {\n        top: 1rem;\n        left: 1.5rem;\n    }\n\n    .company__img {\n        box-sizing: content-box;\n        height: 1.5rem;\n        width: 1.5rem;\n        grid-row: 1 / -1;\n        border: 4px solid #ffff;\n        border-radius: 100%;\n    }\n}\n",""]),n.exports=e},ek2p:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".donations {\n    grid-column: 1 / 2;\n    grid-row: 1 / -1;\n    padding: 0 2rem;\n    display: grid;\n    grid-template-rows: repeat(2, max-content) max-content repeat(2, max-content);\n    overflow-y: auto;\n    row-gap: 2rem;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .donations {\n        row-gap: 1.5rem;\n        padding: 0 1.5rem;\n    }\n}\n\n.donations__header *:not(:last-child) {\n    margin-bottom: 0.5rem;\n}\n\n.donations__form {\n    align-self: center;\n}\n\n.donations__form--one-column > *:not(:last-child) {\n    margin-bottom: 1rem;\n}\n\n.donations__form--two-column {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1rem;\n}\n\n.donations__input {\n    grid-column: 1 / -1;\n}\n\n.donations__submit {\n    display: flex;\n    flex-direction: column;\n}\n\n.donations__submit > *:not(:last-child) {\n    margin-bottom: 1rem;\n}\n",""]),n.exports=e},fBbg:function(n,e,t){"use strict";function o(n,e,t,o){if(n){var r=new RegExp("<"+e+">(.*)</"+e+">","g"),i=n.split(r),a=i[0],l=i[1],c=i[2],s=Object(j.g)(t,o,l);return Object(j.g)(j.b,null,a,s,c)}return n}function r(n,e){for(var t in e)n[t]=e[t];return n}function i(n,e){for(var t in n)if("__source"!==t&&!(t in e))return!0;for(var o in e)if("__source"!==o&&n[o]!==e[o])return!0;return!1}function a(n){this.props=n}function l(n,e){function t(n){var t=this.props.ref,o=t==n.ref;return!o&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!o:i(this.props,n)}function o(e){return this.shouldComponentUpdate=t,Object(j.e)(n,e)}return o.displayName="Memo("+(n.displayName||n.name)+")",o.prototype.isReactComponent=!0,o.__f=!0,o}function c(){this.__u=0,this.t=null,this.__b=null}function s(n){var e=n.__.__c;return e&&e.__e&&e.__e(n)}function u(){this.u=null,this.o=null}function p(){}function d(){return this.cancelBubble}function m(){return this.defaultPrevented}function f(){return(f=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function g(){return(g=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function h(){return(h=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function b(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function _(n,e){return(_=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function y(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function v(){return(v=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}t.r(e),t.d(e,"default",(function(){return En}));var j=t("NMMh"),O=t("uOFG"),x=Object(j.d)(null),w=t("QLgr"),N=Object(j.d)(w.c),k=N,C=function(n,e){return e.replace(/{{(\w*)}}/g,(function(e,t){return n[t]?n[t]:""}))},S=function(){var n,e,t,o=(t=window.navigator.language).includes("-")?t.split("-")[0]:t,r=Object(O.b)(N),i=r.i18n;return null!=(n=null!=(e=i[r.language])?e:i[o])?n:i.en},D=t("SZxn"),E=t.n(D),T=function(n,e,t,r){if(!n)return null;if(e){var i=n.monthly.levels?!t||r?n.monthly.custom:function(n,e){var t=[].concat(n).sort((function(n,e){return Number(n.amount)-Number(e.amount)}));return Number.isNaN(Number(e))?t[0]:t[Math.max(0,t.findIndex((function(n){return Number(n.amount)>Number(e)}))-1)]}(n.monthly.levels,t):void 0;return i&&("description1"in i&&"description2"in i)?Object(j.g)(j.b,null,Object(j.g)("p",{className:"t-heading-secondary"},i.description1&&o(i.description1,"bold",(function(n){return Object(j.g)("strong",n)}),{})),i.description2&&Object(j.g)("p",{className:"t-heading-secondary"},i.description2)):null}return Object(j.g)("p",{className:"t-heading-secondary"},n.oneTime.description)},z=function(n){var e=n.monthlyBgColor,t=Object(O.i)(null),o=Object(O.b)(x),r=Object(O.b)(k),i=S();if(Object(O.f)((function(){t.current&&o&&(o.monthlyDonation&&e?t.current.style.background=e:r.oneTime.bgColor&&(t.current.style.background=r.oneTime.bgColor))}),[r.oneTime.bgColor,o,e]),!o)return null;var a=o.donationAmount,l=o.monthlyDonation,c=o.customDonation;return Object(j.g)("div",{ref:t,className:"description"},T(i,l,a,c))};(a.prototype=new j.a).isPureReactComponent=!0,a.prototype.shouldComponentUpdate=function(n,e){return i(this.props,n)||i(this.state,e)};var U=j.j.__b;j.j.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),U&&U(n)};"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var P=j.j.__e;j.j.__e=function(n,e,t){if(n.then)for(var o,r=e;r=r.__;)if((o=r.__c)&&o.__c)return null==e.__e&&(e.__e=t.__e,e.__k=t.__k),o.__c(n,e);P(n,e,t)},(c.prototype=new j.a).__c=function(n,e){var t=e.__c,o=this;null==o.t&&(o.t=[]),o.t.push(t);var r=s(o.__v),i=!1,a=function(){i||(i=!0,t.componentWillUnmount=t.__c,r?r(l):l())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){a(),t.__c&&t.__c()};var l=function(){if(!--o.__u){if(o.state.__e){var n=o.state.__e;o.__v.__k[0]=function n(e,t,o){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map((function(e){return n(e,t,o)})),e.__c&&e.__c.__P===t&&(e.__e&&o.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=o)),e}(n,n.__c.__P,n.__c.__O)}var e;for(o.setState({__e:o.__b=null});e=o.t.pop();)e.forceUpdate()}},c=!0===e.__h;o.__u++||c||o.setState({__e:o.__b=o.__v.__k[0]}),n.then(a,a)},c.prototype.componentWillUnmount=function(){this.t=[]},c.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=function n(e,t,o){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(n){"function"==typeof n.__c&&n.__c()})),e.__c.__H=null),null!=(e=r({},e)).__c&&(e.__c.__P===o&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map((function(e){return n(e,t,o)}))),e}(this.__b,t,o.__O=o.__P)}this.__b=null}var i=e.__e&&Object(j.e)(j.b,null,n.fallback);return i&&(i.__h=null),[Object(j.e)(j.b,null,e.__e?null:n.children),i]};var A=function(n,e,t){if(++t[1]===t[0]&&n.o.delete(e),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(t=n.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;n.u=t=t[2]}};(u.prototype=new j.a).__e=function(n){var e=this,t=s(e.__v),o=e.o.get(n);return o[0]++,function(r){var i=function(){e.props.revealOrder?(o.push(r),A(e,n,o)):r()};t?t(i):i()}},u.prototype.render=function(n){this.u=null,this.o=new Map;var e=Object(j.l)(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&e.reverse();for(var t=e.length;t--;)this.o.set(e[t],this.u=[1,0,this.u]);return n.children},u.prototype.componentDidUpdate=u.prototype.componentDidMount=function(){var n=this;this.o.forEach((function(e,t){A(n,t,e)}))};var I="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,R=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,M=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};j.a.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(n){Object.defineProperty(j.a.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(e){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:e})}})}));var F=j.j.event;j.j.event=function(n){return F&&(n=F(n)),n.persist=p,n.isPropagationStopped=d,n.isDefaultPrevented=m,n.nativeEvent=n};var V={configurable:!0,get:function(){return this.class}},B=j.j.vnode;j.j.vnode=function(n){var e=n.type,t=n.props,o=t;if("string"==typeof e){for(var r in o={},t){var i=t[r];"value"===r&&"defaultValue"in t&&null==i||("defaultValue"===r&&"value"in t&&null==t.value?r="value":"download"===r&&!0===i?i="":/ondoubleclick/i.test(r)?r="ondblclick":/^onchange(textarea|input)/i.test(r+e)&&!M(t.type)?r="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(r)?r=r.toLowerCase():R.test(r)?r=r.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===i&&(i=void 0),o[r]=i)}"select"==e&&o.multiple&&Array.isArray(o.value)&&(o.value=Object(j.l)(t.children).forEach((function(n){n.props.selected=-1!=o.value.indexOf(n.props.value)}))),"select"==e&&null!=o.defaultValue&&(o.value=Object(j.l)(t.children).forEach((function(n){n.props.selected=o.multiple?-1!=o.defaultValue.indexOf(n.props.value):o.defaultValue==n.props.value}))),n.props=o}e&&t.class!=t.className&&(V.enumerable="className"in t,null!=t.className&&(o.class=t.className),Object.defineProperty(o,"className",V)),n.$$typeof=I,B&&B(n)};var L=j.j.__r;j.j.__r=function(n){L&&L(n),n.__c};"object"==typeof performance&&"function"==typeof performance.now&&performance.now.bind(performance);var Y=t("ANJM"),$=t.n(Y),W=function(n){var e=n.handleClick,t=n.extraClasses,o=void 0===t?[]:t,r=n.disabled,i=void 0!==r&&r,a=n.children;return Object(j.g)("button",{type:"button",className:["btn"].concat(i?["btn--disabled"]:[]).concat(o).join(" "),onClick:e,disabled:i},a)},H=function(n){var e=n.monthlyDonation,t=n.extraClasses,o=void 0===t?[]:t,r=n.disabled,i=S(),a=Object(O.b)(x),l=Object(O.b)(k),c=l.onSubmit,s=l.currency,u=l.mode,p=e?i.monthly:i.oneTime,d=null==a?void 0:a.donationAmount,m=function(n){if(d&&!Number.isNaN(Number(d))){var t,o,r,i,a=e?"MONTHLY":"ONCE";if("function"==typeof c)c({amount:d,frequency:a});else{var l=(i=void 0===(r=(t={company:c.charity,frequency:a,amount:d,mode:n,extras:c.params}).extras)?{}:r,"https://www.every.org/"+(o=t.company)+"/donate?"+Object.entries(f({frequency:t.frequency,amount:t.amount,utm_campaign:"single-or-split",utm_content:t.mode.toLowerCase(),utm_source:o,utm_medium:"donate-button-0.2"},i)).map((function(n){return n.join("=")})).join("&"));window.location.href=l}}};return Object(j.g)(W,{extraClasses:o,handleClick:function(){m(u)},disabled:r},function(n,e,t){return t&&!Number.isNaN(Number(t))?C({amount:"$"+t+" "+e},n):C({amount:""},n)}(p.button,s,d))},G=t("Oxty"),J=t.n(G),q=function(n){"."===n.key&&n.preventDefault()},K=Object(j.g)("span",{className:"t-input input__prefix no-line-height"},"$"),Z=function(n){var e=n.value,t=n.setValue,o=n.error,r=n.setError,i=n.extraClasses,a=n.label,l=n.placeholder,c=n.description,s=n.selected,u=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)e.indexOf(t=i[o])>=0||(r[t]=n[t]);return r}(n,["value","setValue","error","setError","extraClasses","label","placeholder","description","selected"]);Object(O.d)((function(){var n=setTimeout((function(){e&&+e<10&&r("The minimum amount is 10")}),200);return+e>=10&&r(""),function(){return clearTimeout(n)}}),[e]);var p=["input__container"].concat(i).concat([s?"input--selected":""]).concat(e?["input--filled"]:[]).concat(o?["input--error"]:[]);return Object(j.g)(j.b,null,Object(j.g)("div",{className:p.join(" ")},Object(j.g)("div",{className:"input"},K,Object(j.g)("input",g({className:["t-input","input__input"].join(" "),placeholder:l,type:"number",min:"10",onKeyDown:q,value:e,onInput:function(n){t(n.currentTarget.value)}},u)),a&&Object(j.g)("span",{className:"t-input input__suffix no-line-height"},a)),c&&Object(j.g)("p",{className:"t-body input__description"},c)))},Q=t("uuJQ"),X=t.n(Q),nn=function(n){var e=n.name,t=n.text,o=n.amount,r=n.handleClick,i=n.description,a=n.image,l=n.bgColor,c=["radio-button"];n.selected&&c.push("radio-button--selected");var s=["radio-button__label"].concat([t?"u-justify-content-space-between":"u-justify-content-center"]);return Object(j.g)("div",{className:c.join(" ")},Object(j.g)("input",{className:"radio-button__input",type:"radio",name:e,id:o,onClick:r}),Object(j.g)("label",{className:s.join(" "),htmlFor:o},t&&Object(j.g)("span",{className:"t-label radio-button__text"},t),Object(j.g)("span",{className:"t-label radio-button__amount"},"$",o)),t&&i&&Object(j.g)("div",{style:{backgroundColor:l},className:"radio-button__extra"},Object(j.g)("div",{className:"radio-button__img-container"},Object(j.g)("img",{className:"radio-button__image",src:a,alt:t})),Object(j.g)("p",{className:"t-body radio-button__description"},i)))},en=function(n,e){return n.findIndex((function(n){return n.amount===e}))},tn=function(n){var e=n.monthlyDonation,t=Object(O.b)(x),r=Object(O.b)(k),i=r.monthly,a=r.oneTime,l=Object(O.j)(!1),c=l[0],s=l[1],u=S(),p=e?u.monthly:u.oneTime,d=Object(O.a)((function(n){if(t){var o=t.donationAmount,r=t.setDonationAmount,a=t.customDonation,l=t.setCustomDonation,c=t.setTriggerAnimation,s=t.setCustomInputError,u=a||!o?i.levels.length-1:en(i.levels,o),p=en(i.levels,n);e&&c&&p!==u&&c([u,p]),n!==o&&(r(n),s("")),a&&l("")}}),[i.levels,e,t]),m=Object(O.j)(!1),f=m[0],g=m[1];if(Object(O.d)((function(){if(!f){var n=i.levels.find((function(n){return n.default}));n&&d(n.amount),g(!0)}}),[f,d,i.levels]),!t)return null;var h=t.donationAmount,b=t.setDonationAmount,_=t.customDonation,y=t.setCustomDonation,v=t.setTriggerAnimation,w=t.customInputError,N=t.setCustomInputError,C=function(){var n=h?en(i.levels,h):0;e&&v&&v([n,i.levels.length-1]),b&&b(_),s(!0)},D=function(){s(!1)},E=function(n){b(n),y(n)},T=i.levels.filter((function(n){return"custom"!==n.amount})),z=i.levels.find((function(n){return"custom"===n.amount})),U=e?T.every((function(n){var e,t;return null==p||null==(e=p.levels)||null==(t=e.find((function(e){return e.amount===n.amount})))?void 0:t.name})):a.levels.every((function(n){var e,t;return null==p||null==(e=p.levels)||null==(t=e.find((function(e){return e.amount===String(n)})))?void 0:t.name})),P=["donations__form"].concat([U?"donations__form--one-column":"donations__form--two-column"]);return Object(j.g)(j.b,null,Object(j.g)("div",{className:P.join(" ")},e&&Object(j.g)(j.b,null,T.map((function(n){var e,t,r,i,a,l,c=null==(e=p.levels)||null==(t=e.find((function(e){return e.amount===n.amount})))?void 0:t.description1;return Object(j.g)(nn,{key:n.amount,name:"amount",amount:n.amount,selected:h===n.amount,handleClick:function(){d(n.amount)},text:U&&null!=(r=null==(i=p.levels)||null==(a=i.find((function(e){return e.amount===n.amount})))?void 0:a.name)?r:"",description:c&&(l=c,o(l,"bold",(function(n){return Object(j.g)("span",n)}),{})),image:n.img,bgColor:n.bgColor})})),z&&Object(j.g)(Z,{label:p.custom.label,placeholder:p.custom.placeholder,value:_,setValue:E,description:u.oneTime.description,extraClasses:["donations__input"],selected:c,onFocus:C,onBlur:D,error:w,setError:N})),!e&&Object(j.g)(j.b,null,a.levels.map((function(n){var e,t;return Object(j.g)(nn,{key:n,name:"amount",amount:String(n),selected:h===String(n),handleClick:function(){d(String(n))},text:U?null==p||null==(e=p.levels)||null==(t=e.find((function(e){return(null==e?void 0:e.amount)===String(n)})))?void 0:t.name:""})})),a.allowCustom&&Object(j.g)(Z,{placeholder:p.custom.placeholder,value:_,setValue:E,extraClasses:["donations__input"],selected:c,onFocus:C,onBlur:D,error:w,setError:N}))),Object(j.g)("div",{className:"donations__submit"},Object(j.g)(H,{monthlyDonation:e,extraClasses:["u-hide-mobile"],disabled:Boolean(w)}),Object(j.g)("p",{className:"t-body--small"},u.footer)))},on=function(n){var e=n.monthlyDonation,t=S(),o=e?t.monthly:t.oneTime;return Object(j.g)(j.b,null,Object(j.g)("h1",{className:"t-heading-primary"},o.header),Object(j.g)("h2",{className:"t-heading-secondary"},o.info))},rn=t.p+"36f5abc6ad7bf3734f2a5c3a4f33ec90.svg",an=t("UpYz"),ln=t.n(an),cn=Object(j.g)("img",{className:"logo__img",src:rn,alt:"logo"}),sn=function(n){var e=n.monthlyDonation,t=void 0===e||e,r=n.scrolled,i=void 0!==r&&r,a=S(),l=t?a.monthly.logo:a.oneTime.logo,c=function(n,e){return o(n,"link",(function(n){return Object(j.g)("a",n)}),{className:"logo__link",href:e})}(l.text,l.link),s=i?"box-shadow: 0 3px 7px 0px rgba(0, 0, 0, 0.1)":"";return Object(j.g)("div",{className:"logo",style:s},cn,Object(j.g)("div",{className:"logo__heading"},Object(j.g)("h3",{className:"t-title logo__title"},l.header),Object(j.g)("p",{className:"t-body--small logo__link"},c)))},un=t("lUhE"),pn=t.n(un),dn=l((function(n){var e=n.handleClick,t=n.monthlyDonation,r=S(),i=t?r.monthly:r.oneTime;return Object(j.g)("p",{className:"t-title donation-type"},function(n,e){return o(n,"action",(function(n){return Object(j.g)("span",n)}),{onClick:e})}(i.switch,e))})),mn=t("jgzK"),fn=t.n(mn),gn=l((function(n){var e=n.monthlyDonation,t=n.setMonthlyDonation,o=Object(O.i)(null),r=Object(O.j)(!1),i=r[0],a=r[1];return Object(O.d)((function(){var n=o.current,e=function(){n&&a(n.scrollTop>0)};return null==n||n.addEventListener("scroll",e),e(),function(){return null==n?void 0:n.removeEventListener("scroll",e)}}),[]),Object(j.g)("div",{ref:o,className:"donations"},Object(j.g)(sn,{scrolled:i,monthlyDonation:e}),Object(j.g)("div",{className:"donations__header"},Object(j.g)(on,{monthlyDonation:e})),Object(j.g)(tn,{monthlyDonation:e}),Object(j.g)(dn,{handleClick:function(){t(!e)},monthlyDonation:e}))})),hn=t("KIIj"),bn=t.n(hn),_n=t("2Pik"),yn=t.n(_n),vn=t("Rsgl"),jn=[bn.a,X.a,J.a,t.n(vn).a,yn.a,fn.a,pn.a,ln.a,E.a,$.a],On=function(n){var e,t=n.image,o=Object(O.b)(k),r=Object(O.b)(x),i=null==(e=null==r?void 0:r.monthlyDonation)||e?t:o.oneTime.img;return i?Object(j.g)("div",{className:"images",style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 24.02%), url("+i+")"}}):null},xn=function(){var n=S().company,e=n.logo||rn;return Object(j.g)("div",{className:"company"},Object(j.g)("img",{className:"company__img",src:e,alt:"Compoany logo"}),Object(j.g)("p",{className:"t-title company__title"},n.name),Object(j.g)("p",{className:"t-body--small company__subtitle"},n.location))},wn=t("OsHv"),Nn=t.n(wn),kn={">":"&gt;","<":"&lt;"},Cn=function(n){function e(){for(var e,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return y(b(e=n.call.apply(n,[this].concat(o))||this),"scopeClassNameCache",{}),y(b(e),"scopedCSSTextCache",{}),y(b(e),"scoped",void 0===e.props.scoped||e.props.scoped),y(b(e),"pepper",""),y(b(e),"getStyleString",(function(){if(Array.isArray(e.props.children)){var n=e.props.children.filter((function(n){return!Object(j.i)(n)&&"string"==typeof n}));if(n.length>1)throw new Error("Multiple style objects as direct descedents of a\n        Style component are not supported ("+n.length+" style objects detected):\n        "+n[0]+"\n        ");return n[0]}return"string"!=typeof e.props.children||Object(j.i)(e.props.children)?null:e.props.children})),y(b(e),"getRootElement",(function(){if(Array.isArray(e.props.children)){var n=e.props.children.filter(j.i);return n[0]}return Object(j.i)(e.props.children)?e.props.children:null})),y(b(e),"getRootSelectors",(function(n){var e=[],t=n.props,o=t.id,r=t.className;return o&&e.push("#"+o),r&&r.trim().split(/\s+/g).forEach((function(n){return e.push(n)})),0===e.length&&"function"!=typeof n.type&&e.push(n.type),e})),y(b(e),"processCSSText",(function(n,t,o){return n.replace(/\s*\/\/(?![^(]*\)).*|\s*\/\*.*\*\//g,"").replace(/\s\s+/g," ").split("}").map((function(n){var r=/.*:.*;/g,i=/.*:.*(;|$|\s+)/g,a=/\s*@/g,l=/\s*((\d{1,2}|100)\s*%)|\s*(to|from)\s*$/g;return n.split("{").map((function(n,c,s){if(0===n.trim().length)return"";var u=s.length-1===c&&n.match(i);if(n.match(r)||u)return e.escapeTextContentForBrowser(n);var p=n;return t&&!/:target/gi.test(p)?p.match(a)||p.match(l)?p:e.scopeSelector(t,p,o):p})).join("{\n")})).join("}\n")})),y(b(e),"escaper",(function(n){return kn[n]||""})),y(b(e),"escapeTextContentForBrowser",(function(n){return n.replace(/[><]/g,e.escaper)})),y(b(e),"scopeSelector",(function(n,t,o){var r=[];return t.split(/,(?![^(|[]*\)|])/g).forEach((function(t){var i;if(null!=o&&o.length&&o.some((function(n){return t.includes(n)}))){i=t;var a=null==o?void 0:o.map((function(n){return n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}));i=i.replace(new RegExp("("+(null==a?void 0:a.join("|"))+")"),"$1"+n),r.push(i,e.scoped?n+" "+t:t)}else r.push(e.scoped?n+" "+t:t)})),!e.scoped&&r.length>1?r[1]:r.join(", ")})),y(b(e),"getScopeClassName",(function(n,t){var o=n;return t&&(e.pepper="",e.traverseObjectToGeneratePepper(t),o+=e.pepper),"s"+String(Nn()(o))})),y(b(e),"traverseObjectToGeneratePepper",(function(n,t){void 0===t&&(t=0),t>32||e.pepper.length>1e4||"object"==typeof n&&n&&Object.entries(n).forEach((function(n){var o=n[1],r=/^[_$]|type|ref|^value$/.test(n[0]);Boolean(o)&&"object"==typeof o&&!r?e.traverseObjectToGeneratePepper(o,t+1):Boolean(o)&&!r&&"function"!=typeof o&&(e.pepper+=o)}))})),y(b(e),"isVoidElement",(function(n){return["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"].some((function(e){return n===e}))})),y(b(e),"createStyleElement",(function(n,e){return Object(j.g)("style",{key:e,dangerouslySetInnerHTML:{__html:n||""},id:"direflow_styles",type:"text/css"})})),y(b(e),"getNewChildrenForCloneElement",(function(n,t,o){return[e.createStyleElement(n,o),t.props.children]})),e}var t,o;return o=n,(t=e).prototype=Object.create(o.prototype),t.prototype.constructor=t,_(t,o),e.prototype.render=function(){var n,e,t,o=null!=(n=this.getStyleString())?n:"",r=this.getRootElement();if(!o&&r)return r.props.children;if(o&&!r)return this.createStyleElement(this.processCSSText(o),this.getScopeClassName(o,r));var i,a,l=null!=(e=(null==r?void 0:r.props).id)?e:"",c=null!=(t=(null==r?void 0:r.props).className)?t:"",s=c+l+o;this.scopeClassNameCache[s]?a=this.scopedCSSTextCache[i=this.scopeClassNameCache[s]]:(i=this.getScopeClassName(o,r),a=this.processCSSText(o,"."+i,r&&this.getRootSelectors(r)),this.scopeClassNameCache[s]=i,this.scopedCSSTextCache[i]=a);var u=this.scoped?""+c+i:c;return r&&Object(j.c)(r,h({},r.props,{className:u.trim()}),this.getNewChildrenForCloneElement(a,r,i))},e}(j.a),Sn=function(n){var e="string"==typeof n.styles?n.styles.toString():n.styles.join(" ");return Object(j.g)(Cn,{scoped:n.scoped},e,n.children)},Dn=Object(j.g)(xn,null),En=function(n){var e,t=n.options,o=n.hide,r=function(n){n.target===n.currentTarget&&o()},i=t.defaultMode!==w.a.ONE_TIME,a=Object(O.j)(i),l=a[0],c=a[1],s=t.monthly.levels.find((function(n){return n.default})),u=Object(O.j)(null!=(e=null==s?void 0:s.amount)?e:t.monthly.levels[0].amount),p=u[0],d=u[1],m=Object(O.j)(""),f=m[0],g=m[1],h=Object(O.j)(""),b=h[0],_=h[1],y=Object(O.j)([-1,0]),N=y[0],C=y[1],S=Object(O.j)([].concat(t.monthly.levels).sort((function(n,e){return Number.isNaN(Number(e.amount))?-1:0}))),D=S[0],E=S[1];Object(O.d)((function(){var n=N[0],e=N[1];if(n>e){var t=D.map((function(t,o){return o===n?v({},t,{classes:["fadeOutDown"]}):o===e?v({},t,{classes:["fadeInDown","right-panel__item--active"]}):t}));E(t)}if(n<e){var o=D.map((function(t,o){return v({},t,o===n?{classes:["fadeOutUp"]}:o===e?{classes:["fadeInUp","right-panel__item--active"]}:{classes:["right-panel__item--hidden"]})}));E(o)}var r=setTimeout((function(){var n=D.map((function(n,t){return v({},n,t===e?{classes:["right-panel__item--active"]}:{classes:["right-panel__item--hidden"]})}));E(n)}),300);return function(){clearTimeout(r)}}),[N,D]);var T=Object(O.g)((function(){return{customInputError:b,setCustomInputError:_,monthlyDonation:l,setMonthlyDonation:c,donationAmount:p,setDonationAmount:d,customDonation:f,setCustomDonation:g,setTriggerAnimation:C}}),[b,_,l,c,p,d,f,g,C]);return Object(j.g)(Sn,{scoped:!1,styles:jn},Object(j.g)("div",null,Object(j.g)("div",{className:"wrapper",onClick:r},Object(j.g)("div",{className:"close",onClick:r}),Object(j.g)(k.Provider,{value:t},Object(j.g)(x.Provider,{value:T},"SPLIT_PANEL"===t.mode.toUpperCase()&&Object(j.g)("div",{className:"widget widget--split"},Object(j.g)(gn,{monthlyDonation:l,setMonthlyDonation:c}),Object(j.g)("div",{className:"right-panel"},Dn,D.map((function(n){var e;return Object(j.g)("div",{key:n.amount,className:["right-panel__item"].concat(null!=(e=n.classes)?e:[]).join(" ")},n.img&&Object(j.g)(On,{image:n.img}),Object(j.g)(z,{monthlyBgColor:n.bgColor}))})))),"SINGLE"===t.mode.toUpperCase()&&Object(j.g)("div",{className:"widget widget--single"},Object(j.g)(gn,{monthlyDonation:l,setMonthlyDonation:c})),Object(j.g)("div",{className:"u-hide-desktop btn-mobile"},Object(j.g)(H,{monthlyDonation:l,extraClasses:["u-hide-desktop"],disabled:Boolean(b)})))))))}},hwuB:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".input {\n    position: relative;\n    display: flex;\n    /* padding: 1rem; */\n}\n\n.input__container {\n    display: flex;\n    flex-direction: column;\n    border-radius: 8px;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    overflow: hidden;\n}\n\n.input--selected {\n    border-color: #000;\n}\n\n.input--error {\n    border-color: red!important\n}\n\n@media only screen and (max-width: 37.5em) {\n    .input--selected .input__description {\n        padding: 1rem;\n        height: auto;\n        visibility: visible;\n        border-top: 1px solid #000;\n    }\n}\n\n.input__description {\n    visibility: hidden;\n    height: 0;\n    transition: all 0.2s;\n}\n\n.input__error {\n    grid-column: 1 / -1;\n}\n\n.no-line-height {\n    line-height: 1;\n}\n\n.input__input {\n    border: none;\n    font-family: inherit;\n    border-bottom: 1px solid transparent;\n    background-color: #f3f6f6;\n\n    width: 100%;\n    padding: 1rem 4.5rem 1rem 3rem;\n    outline: none;\n\n    transition: all 0.4s;\n}\n\n.input__input::placeholder {\n    opacity: 0.4;\n    font-weight: 500;\n}\n\n.input--filled .input__input,\n.input__input:focus {\n    background: #fff;\n}\n\n.input--filled {\n    border: 1px solid rgba(0, 0, 0);\n    background: #fff;\n}\n\n.no-line-height {\n    line-height: 1;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .input__input {\n        padding: 0.75rem 4rem 0.75rem 2.5rem;\n    }\n}\n\n.input__prefix {\n    position: absolute;\n    top: 50%;\n    left: 1rem;\n    opacity: 0.4;\n    font-weight: 500;\n    transform: translateY(-50%);\n}\n\n.input__suffix {\n    position: absolute;\n    top: 50%;\n    right: 1rem;\n    transform: translateY(-50%);\n}\n\n.input__input::-webkit-outer-spin-button,\n.input__input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n.input__input {\n    -moz-appearance: textfield;\n}",""]),n.exports=e},jgzK:function(n,e,t){var o=t("ek2p");n.exports="string"==typeof o?o:o.toString()},lUhE:function(n,e,t){var o=t("u9N7");n.exports="string"==typeof o?o:o.toString()},mn5G:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".images {\n    grid-row: 1 / 2;\n    position: relative;\n    background-size: cover;\n    background-position: center;\n}\n\n.images__img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n}\n",""]),n.exports=e},u9N7:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".donation-type {\n    font-weight: bold;\n    color: var(--color-primary);\n    padding-bottom: 2rem;\n}\n\n.donation-type span {\n    color: #00a37f;\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n@media only screen and (max-width: 37.5em) {\n    .donation-type {\n        padding-bottom: 1.5rem;\n    }\n}\n",""]),n.exports=e},uuJQ:function(n,e,t){var o=t("W2lv");n.exports="string"==typeof o?o:o.toString()},wW48:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".btn {\n    border: none;\n    outline: none;\n    width: 100%;\n\n    font-family: inherit;\n    font-size: 1rem;\n    font-weight: 500;\n    line-height: 1;\n\n    cursor: pointer;\n    border-radius: 100px;\n    color: white;\n    padding: 1.25rem 0;\n    background-color: rgb(0, 163, 127);\n\n    transition: all 0.2s;\n}\n\n.btn.btn--disabled,\n.btn:disabled {\n    background-color: #c2c2c2;\n}\n\n.btn.btn--disabled:hover {\n    background-color: #c2c2c2;\n}\n\n.btn:hover {\n    background-color: rgb(0, 124, 97);\n}\n\n.btn:active {\n    background-color: rgb(0, 139, 109);\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .btn {\n        font-size: 0.875rem;\n        padding: 1rem 0;\n    }\n}\n",""]),n.exports=e}}]);
//# sourceMappingURL=1.chunk.04124.js.map