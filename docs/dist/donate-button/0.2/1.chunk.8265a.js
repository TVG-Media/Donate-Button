(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"2Pik":function(n,e,t){var o=t("dRvM");n.exports="string"==typeof o?o:o.toString()},ANJM:function(n,e,t){var o=t("wW48");n.exports="string"==typeof o?o:o.toString()},"Hp/m":function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".description {\n    grid-row: 2 / 3;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 2rem;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .description {\n        padding: 1.5rem;\n    }\n}\n\n.description > *:not(:last-child) {\n    margin-bottom: 1rem;\n}\n",""]),n.exports=e},KIIj:function(n,e,t){var o=t("cRcm");n.exports="string"==typeof o?o:o.toString()},OsHv:function(n){"use strict";n.exports=function(n){for(var e=1,t=0,o=0,r=n.length,i=-4&r;o<i;){for(var a=Math.min(o+4096,i);o<a;o+=4)t+=(e+=n.charCodeAt(o))+(e+=n.charCodeAt(o+1))+(e+=n.charCodeAt(o+2))+(e+=n.charCodeAt(o+3));e%=65521,t%=65521}for(;o<r;o++)t+=e+=n.charCodeAt(o);return(e%=65521)|(t%=65521)<<16}},Oxty:function(n,e,t){var o=t("hwuB");n.exports="string"==typeof o?o:o.toString()},Rsgl:function(n,e,t){var o=t("mn5G");n.exports="string"==typeof o?o:o.toString()},SOrw:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".logo {\n    display: flex;\n    align-items: flex-start;\n\n    /* Fix logo to the top and scroll the content beneath*/\n    position: sticky;\n    top: 0;\n    background: white;\n\n    margin: -1rem -2rem 0 -2rem;\n    padding: 1.5rem 2rem;\n}\n\n.logo > *:not(:last-child) {\n    margin-right: 1rem;\n}\n\n.logo__heading > * {\n    min-height: 1rem;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .logo {\n        margin: -1rem -1.5rem 0 -1.5rem;\n        padding: 1.5rem 1.5rem;\n    }\n}\n\n.logo__img {\n    height: 2rem;\n}\n\n.logo__link:link,\n.logo__link:visited {\n    color: black;\n    opacity: 1;\n    text-decoration: none;\n}\n",""]),n.exports=e},SZxn:function(n,e,t){var o=t("Hp/m");n.exports="string"==typeof o?o:o.toString()},UpYz:function(n,e,t){var o=t("SOrw");n.exports="string"==typeof o?o:o.toString()},VNgF:function(n){"use strict";function e(n,e){var t,o,r=n[1]||"",i=n[3];if(!i)return r;if(e&&"function"==typeof btoa){var a=(t=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),"/*# ".concat(o," */")),l=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[r].concat(l).concat([a]).join("\n")}return[r].join("\n")}n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t,n);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);o&&r[c[0]]||(e&&(c[2]=c[2]?"".concat(e," and ").concat(c[2]):e),t.push(c))}},t}},W2lv:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,'.radio-button {\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 8px;\n    transition: all 0.2s;\n    overflow: hidden;\n}\n\n.radio-button--selected {\n    border-color: #000000;\n}\n\n.radio-button__input {\n    display: none;\n}\n\n.radio-button__label {\n    padding: 1.25rem;\n    cursor: pointer;\n\n    display: flex;\n    align-items: center;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .radio-button__label {\n        padding: 0.75rem;\n    }\n}\n\n@media only screen and (max-width: 37.5em) {\n    .radio-button--selected .radio-button__extra {\n        display: grid;\n        padding: 1rem;\n        visibility: visible;\n        height: auto;\n    }\n}\n\n.radio-button__extra {\n    visibility: hidden;\n    height: 0;\n    grid-template-columns: 1fr 65%;\n    gap: 1rem;\n    transition: all 0.2s;\n}\n\n.radio-button__img-container {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    grid-column: 1/2;\n    overflow: hidden;\n    border-radius: 0.5rem;\n}\n\n.radio-button__img-container::after {\n    content: "";\n    display: block;\n    padding-bottom: 80%;\n}\n\n.radio-button__image {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    height: auto;\n    object-fit: cover;\n    object-position: center;\n\n    /* https://stackoverflow.com/questions/14562457/center-oversized-image-in-div */\n    top: -9999px;\n    bottom: -9999px;\n    left: -9999px;\n    right: -9999px;\n    margin: auto;\n}\n\n/* Only on iOS Devices */\n/* @supports (-webkit-touch-callout: none) {\n    .radio-button__image {\n        height: auto;\n    }\n} */\n\n.radio-button__description {\n    grid-column: 2/3;\n}\n',""]),n.exports=e},cRcm:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,'/* \n* Reset stylesheet\n*/\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\n/* \n* Base styles\n*/\n\n.wrapper {\n  --color-primary: #2e3434;\n  z-index: 999;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  background: rgba(0, 0, 0, 0.5);\n  color: var(--color-primary);\n  justify-content: center;\n  align-items: center;\n  font-family: "Basis Grotesque Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen-Sans, Ubuntu, Cantarell,\n    "Helvetica Neue", Roboto, sans-serif;\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .wrapper {\n    background: #fff;\n  }\n}\n\n.close {\n  position: absolute;\n  top: 1.5rem;\n  right: 1rem;\n  width: 1.5rem;\n  height: 2px;\n  background: #000;\n  transform: rotate(45deg);\n  z-index: 5;\n\n  transition: all 0.2s;\n}\n\n.close::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  background: #000;\n  width: 1.5rem;\n  height: 2px;\n\n  transform: rotate(-90deg);\n}\n\n/* \n* Typography\n*/\n\n.t-heading-primary {\n  font-size: 2rem;\n  line-height: 1.25;\n  font-weight: bold;\n  letter-spacing: -0.025em;\n}\n\n.t-heading-secondary {\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #000000;\n  letter-spacing: -0.01em;\n  font-weight: 400;\n}\n\n.t-title {\n  font-size: 1rem;\n  line-height: 1.25;\n  font-weight: bold;\n}\n\n.t-body {\n  font-size: 0.75rem;\n  line-height: 1.33;\n  font-weight: 400;\n  color: #000;\n}\n\n.t-body--small {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 400;\n  opacity: 0.5;\n  color: #000;\n}\n\n.t-input {\n  font-weight: bold;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #2e3434;\n}\n\n.t-label {\n  font-weight: bold;\n  font-size: 1rem;\n  line-height: 1;\n  color: #2e3434;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n  .t-heading-primary {\n    font-size: 1.5rem;\n    line-height: 1.167;\n    letter-spacing: -0.02em;\n  }\n\n  .t-heading-secondary {\n    font-size: 0.75rem;\n    line-height: 1.43;\n    letter-spacing: -0.01em;\n  }\n\n  .t-title {\n    font-size: 0.75rem;\n    line-height: 1;\n  }\n\n  .t-body--small {\n    font-size: 0.75rem;\n    line-height: 1.33;\n  }\n\n  .t-input {\n    font-size: 0.875rem;\n    line-height: 1.71;\n  }\n}\n\n/* \n* Components\n*/\n\n.widget {\n  background: white;\n  border-radius: 1.5rem;\n  overflow: hidden;\n\n  box-sizing: border-box;\n\n  font-weight: normal;\n  line-height: 1.2;\n  transition: all 0.2s;\n}\n\n.widget--split {\n  width: 888px;\n  height: max-content;\n  max-height: 95%;\n  display: grid;\n\n  grid-template-columns: repeat(2, 50%);\n  grid-template-rows: 1fr max-content;\n}\n\n.widget--single {\n  width: 444px;\n  max-height: 95%;\n  display: grid;\n  height: auto;\n}\n\n.btn-mobile {\n  padding: 1.5rem 1rem;\n  position: sticky;\n  bottom: 0;\n  background: white;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n/* @media only screen and (max-height: 57.5em) {\n  .widget--single {\n    width: 300px;\n  }\n} */\n\n/* 1024px */\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n  .widget--split {\n    width: 600px;\n  }\n\n  .widget--single {\n    width: 300px;\n  }\n\n  .widget--single {\n    width: 300px;\n  }\n}\n\n/* 600px */\n@media only screen and (max-width: 37.5em) {\n  .widget {\n    height: 100%;\n  }\n\n  .widget--split {\n    grid-template-columns: 1fr;\n    width: 100%;\n    height: 100%;\n    max-height: none;\n    overflow-y: auto;\n  }\n\n  .widget--single {\n    grid-template-columns: 1fr;\n    max-height: none;\n    width: 100%;\n    height: 100%;\n  }\n}\n\n.right-panel {\n  height: 100%;\n  display: grid;\n\n  position: relative;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .right-panel {\n    display: none;\n  }\n}\n\n.right-panel__item {\n  display: grid;\n\n  grid-row: 1/-1;\n  grid-column: 1/-1;\n  grid-template-rows: 1fr max-content;\n}\n\n.right-panel__item--active {\n  z-index: 99;\n}\n\n.right-panel__item--hidden {\n  opacity: 0;\n}\n\n.fadeOutDown {\n  animation: fadeOutDown 0.3s;\n}\n\n.fadeInDown {\n  animation: fadeInDown 0.3s;\n}\n\n.fadeOutUp {\n  animation: fadeOutUp 0.3s;\n}\n\n.fadeInUp {\n  animation: fadeInUp 0.3s;\n}\n\n@keyframes fadeOutDown {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n\n  99% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    transform: translateY(-100%);\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes fadeOutUp {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n\n  99% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n}\n\n@keyframes fadeInUp {\n  0% {\n    transform: translateY(100%);\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n/* \n* Utils\n*/\n\n.u-justify-content-space-between {\n  justify-content: space-between;\n}\n\n.u-justify-content-center {\n  justify-content: center;\n}\n\n.u-hide-desktop {\n  display: none;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .u-hide-mobile {\n    display: none;\n  }\n\n  .u-hide-desktop {\n    display: block;\n  }\n}\n',""]),n.exports=e},dRvM:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".company {\n    position: absolute;\n    top: 1.5rem;\n    left: 2rem;\n\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: repeat(2, 1fr);\n    align-items: center;\n    column-gap: 1rem;\n\n    z-index: 999;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .company {\n        top: 1rem;\n        left: 1.5rem;\n    }\n}\n\n.company__img {\n    box-sizing: content-box;\n    height: 2rem;\n    width: 2rem;\n    grid-row: 1 / -1;\n    border: 4px solid #ffff;\n    border-radius: 100%;\n}\n\n.company__title {\n    color: white;\n    align-self: start;\n}\n\n.company__subtitle {\n    color: white;\n    text-transform: uppercase;\n    align-self: end;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .company {\n        top: 1rem;\n        left: 1.5rem;\n    }\n\n    .company__img {\n        box-sizing: content-box;\n        height: 1.5rem;\n        width: 1.5rem;\n        grid-row: 1 / -1;\n        border: 4px solid #ffff;\n        border-radius: 100%;\n    }\n}\n",""]),n.exports=e},ek2p:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".donations {\n    grid-column: 1 / 2;\n    grid-row: 1 / -1;\n    padding: 0 2rem;\n    display: grid;\n    grid-template-rows: repeat(2, max-content) max-content repeat(2, max-content);\n    overflow-y: auto;\n    row-gap: 2rem;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .donations {\n        row-gap: 1.5rem;\n        padding: 0 1.5rem;\n    }\n}\n\n.donations__header *:not(:last-child) {\n    margin-bottom: 0.5rem;\n}\n\n.donations__form {\n    align-self: center;\n}\n\n.donations__form--one-column > *:not(:last-child) {\n    margin-bottom: 1rem;\n}\n\n.donations__form--two-column {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1rem;\n}\n\n.donations__input {\n    grid-column: 1 / -1;\n}\n\n.donations__submit {\n    display: flex;\n    flex-direction: column;\n}\n\n.donations__submit > *:not(:last-child) {\n    margin-bottom: 1rem;\n}\n",""]),n.exports=e},fBbg:function(n,e,t){"use strict";function o(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return y.a.all([v].concat(e),j)}function r(n,e,t,o){if(n){var r=new RegExp("<"+e+">(.*)</"+e+">","g"),i=n.split(r),a=i[0],l=i[1],c=i[2],s=Object(g.e)(t,o,l);return Object(g.e)(g.b,null,a,s,c)}return n}function i(){return(i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function a(){return(a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function l(){return(l=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function c(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function s(n,e){return(s=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function u(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function m(){return(m=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}t.r(e),t.d(e,"default",(function(){return fn}));var d,p,g=t("NMMh"),f=t("uOFG"),h=Object(g.d)(null),b=t("nr9d"),y=t.n(b);!function(n){n.SINGLE="SINGLE",n.SPLIT="SPLIT"}(d||(d={})),function(n){n.MONTHLY="monthly",n.ONE_TIME="one-time"}(p||(p={}));var v={show:!1,language:"en",mode:d.SPLIT,onSubmit:{charity:"your-foundation",params:{share_info:1,no_exit:1}},defaultMode:p.MONTHLY,currency:"USD",monthly:{levels:[{amount:"25"},{amount:"50",default:!0},{amount:"100"},{amount:"200"},{amount:"custom"}]},oneTime:{levels:[10,20,30,50,100,200],allowCustom:!0,bgColor:"#BCD9DD"},i18n:{en:{company:{logo:"https://assets.every.org/every-month/assets/logo.svg",name:"Your Foundation",location:"Your Foundation's Location"},monthly:{logo:{header:"Monthly donation",text:"on <link>every.org</link>",link:"https://every.org"},header:"Become a regular supporter",info:"Monthly gifts help us focus on our mission and long-term impact",levels:[{amount:"5"},{amount:"10"},{amount:"20"},{amount:"50"},{amount:"100"},{amount:"200"}],custom:{label:"Custom",placeholder:"Enter amount"},button:"Donate {{amount}} Every Month",switch:"Or make a <action>One Time Donation</action>"},oneTime:{logo:{header:"One time donation",text:"on <link>every.org</link>",link:"https://every.org"},name:"One time donation",header:"Help us make a difference",info:"Thank you for your support!",custom:{placeholder:"Enter custom amount"},button:"Donate {{amount}}",switch:"Or make a <action>Monthly donation</action>"},footer:"You will be redirected to a secure page on Every.org to complete your donation."}}},j={arrayMerge:function(n,e){return e}},O=Object(g.d)(v),x=O,_=function(n,e){return e.replace(/{{(\w*)}}/g,(function(e,t){return n[t]?n[t]:""}))},w=function(){var n,e,t,o=(t=window.navigator.language).includes("-")?t.split("-")[0]:t,r=Object(f.a)(O),i=r.i18n;return null!=(n=null!=(e=i[r.language])?e:i[o])?n:i.en},N=t("SZxn"),k=t.n(N),C=function(n,e,t,o){if(!n)return null;if(e){var i=n.monthly.levels?!t||o?n.monthly.custom:function(n,e){var t=[].concat(n).sort((function(n,e){return Number(n.amount)-Number(e.amount)}));return Number.isNaN(Number(e))?t[0]:t[Math.max(0,t.findIndex((function(n){return Number(n.amount)>Number(e)}))-1)]}(n.monthly.levels,t):void 0;return i&&("description1"in i&&"description2"in i)?Object(g.e)(g.b,null,Object(g.e)("p",{className:"t-heading-secondary"},i.description1&&r(i.description1,"bold",(function(n){return Object(g.e)("strong",n)}),{})),i.description2&&Object(g.e)("p",{className:"t-heading-secondary"},i.description2)):null}return Object(g.e)("p",{className:"t-heading-secondary"},n.oneTime.description)},S=function(n){var e=n.monthlyBgColor,t=Object(f.d)(null),o=Object(f.a)(h),r=Object(f.a)(x),i=w();if(Object(f.c)((function(){t.current&&o&&(o.monthlyDonation&&e?t.current.style.background=e:r.oneTime.bgColor&&(t.current.style.background=r.oneTime.bgColor))}),[o,e]),!o)return null;var a=o.donationAmount,l=o.monthlyDonation,c=o.customDonation;return Object(g.e)("div",{ref:t,className:"description"},C(i,l,a,c))},D=t("ANJM"),T=t.n(D),E=function(n){var e=n.handleClick,t=n.extraClasses,o=void 0===t?[]:t,r=n.children;return Object(g.e)("button",{className:["btn"].concat(o).join(" "),onClick:e},r)},M=function(n){var e=n.monthlyDonation,t=n.extraClasses,o=void 0===t?[]:t,r=w(),a=Object(f.a)(h),l=Object(f.a)(x),c=l.onSubmit,s=l.currency,u=l.mode,m=e?null==r?void 0:r.monthly:null==r?void 0:r.oneTime,d=null==a?void 0:a.donationAmount,p=function(n){if(d&&!Number.isNaN(Number(d))){var t,o,r,a,l=e?"MONTHLY":"ONCE";if("function"==typeof c)c({amount:d,frequency:l});else{var s=(a=void 0===(r=(t={company:c.charity,frequency:l,amount:d,mode:n,extras:c.params}).extras)?{}:r,"https://www.every.org/"+(o=t.company)+"/donate?"+Object.entries(i({frequency:t.frequency,amount:t.amount,utm_campaign:"single-or-split",utm_content:t.mode.toLowerCase(),utm_source:o,utm_medium:"donate-button-0.2"},a)).map((function(n){return n.join("=")})).join("&"));window.location.href=s}}};return Object(g.e)(E,{extraClasses:o,handleClick:function(){p(u)}},function(n,e,t){return t&&!Number.isNaN(Number(t))?_({amount:"$"+t+" "+e},n):_({amount:""},n)}(m.button,s,d))},z=t("Oxty"),A=t.n(z),I=Object(g.e)("span",{className:"t-input input__prefix no-line-height"},"$"),F=function(n){var e=n.value,t=n.setValue,o=n.extraClasses,r=n.label,i=n.placeholder,l=n.description,c=n.selected,s=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)e.indexOf(t=i[o])>=0||(r[t]=n[t]);return r}(n,["value","setValue","extraClasses","label","placeholder","description","selected"]),u=["input__container"].concat(o).concat([c?"input--selected":""]).concat(e?["input--filled"]:[]);return Object(g.e)("div",{className:u.join(" ")},Object(g.e)("div",{className:"input"},I,Object(g.e)("input",a({className:["t-input","input__input"].join(" "),placeholder:i,type:"text",value:e,onChange:function(n){t(n.currentTarget.value)}},s)),r&&Object(g.e)("span",{className:"t-input input__suffix no-line-height"},r)),l&&Object(g.e)("p",{className:"t-body input__description"},l))},P=t("uuJQ"),U=t.n(P),R=function(n){var e=n.name,t=n.text,o=n.amount,r=n.handleClick,i=n.description,a=n.image,l=n.bgColor,c=["radio-button"];n.selected&&c.push("radio-button--selected");var s=["radio-button__label"].concat([t?"u-justify-content-space-between":"u-justify-content-center"]);return Object(g.e)("div",{className:c.join(" ")},Object(g.e)("input",{onClick:r,className:"radio-button__input",type:"radio",name:e,id:o}),Object(g.e)("label",{className:s.join(" "),htmlFor:o},t&&Object(g.e)("span",{className:"t-label radio-button__text"},t),Object(g.e)("span",{className:"t-label radio-button__amount"},"$",o)),t&&i&&Object(g.e)("div",{style:{backgroundColor:l},className:"radio-button__extra"},Object(g.e)("div",{className:"radio-button__img-container"},Object(g.e)("img",{className:"radio-button__image",src:a,alt:t})),Object(g.e)("p",{className:"t-body radio-button__description"},i)))},L=function(n,e){return n.findIndex((function(n){return n.amount===e}))},Y=function(n){var e=n.monthlyDonation,t=Object(f.a)(h),o=Object(f.a)(x),i=o.monthly,a=o.oneTime,l=Object(f.e)(!1),c=l[0],s=l[1],u=w(),m=e?u.monthly:u.oneTime;if(Object(f.b)((function(){var n=i.levels.find((function(n){return n.default}));if(n){_(i.levels[0].amount);var e=setTimeout((function(){_(n.amount)}));return function(){clearTimeout(e)}}}),[]),!t)return null;var d=t.donationAmount,p=t.setDonationAmount,b=t.customDonation,y=t.setCustomDonation,v=t.setTriggerAnimation,j=function(){var n=d?L(i.levels,d):0;e&&v&&v([n,i.levels.length-1]),p&&p(b),s(!0)},O=function(){s(!1)},_=function(n){var t=b||!d?i.levels.length-1:L(i.levels,d),o=L(i.levels,n);e&&v&&v([t,o]),p(n),y("")},N=function(n){p(n),y(n)},k=i.levels.filter((function(n){return"custom"!==n.amount})),C=i.levels.find((function(n){return"custom"===n.amount})),S=e?k.every((function(n){var e,t;return null==m||null==(e=m.levels)||null==(t=e.find((function(e){return e.amount===n.amount})))?void 0:t.name})):a.levels.every((function(n){var e,t;return null==m||null==(e=m.levels)||null==(t=e.find((function(e){return e.amount===String(n)})))?void 0:t.name})),D=["donations__form"].concat([S?"donations__form--one-column":"donations__form--two-column"]);return Object(g.e)(g.b,null,Object(g.e)("div",{className:D.join(" ")},e&&Object(g.e)(g.b,null,k.map((function(n,e){var t,o,i,a,l,c,s=null==(t=m.levels)||null==(o=t.find((function(e){return e.amount===n.amount})))?void 0:o.description1;return Object(g.e)(R,{key:e,name:"amount",amount:n.amount,selected:d===n.amount,handleClick:function(){_(n.amount)},text:S&&null!=(i=null==(a=m.levels)||null==(l=a.find((function(e){return e.amount===n.amount})))?void 0:l.name)?i:"",description:s&&(c=s,r(c,"bold",(function(n){return Object(g.e)("span",n)}),{})),image:n.img,bgColor:n.bgColor})})),C&&Object(g.e)(F,{label:m.custom.label,placeholder:m.custom.placeholder,value:b,setValue:N,description:u.oneTime.description,extraClasses:["donations__input"],onFocus:j,onBlur:O,selected:c})),!e&&Object(g.e)(g.b,null,a.levels.map((function(n){var e,t;return Object(g.e)(R,{key:n,name:"amount",amount:String(n),selected:d===String(n),handleClick:function(){_(String(n))},text:S?null==m||null==(e=m.levels)||null==(t=e.find((function(e){return(null==e?void 0:e.amount)===String(n)})))?void 0:t.name:""})})),a.allowCustom&&Object(g.e)(F,{placeholder:m.custom.placeholder,value:b,setValue:N,extraClasses:["donations__input"],onFocus:j,onBlur:O,selected:c}))),Object(g.e)("div",{className:"donations__submit"},Object(g.e)(M,{monthlyDonation:e,extraClasses:["u-hide-mobile"]}),Object(g.e)("p",{className:"t-body--small"},u.footer)))},B=function(n){var e=n.monthlyDonation,t=w(),o=e?t.monthly:t.oneTime;return Object(g.e)(g.b,null,Object(g.e)("h1",{className:"t-heading-primary"},o.header),Object(g.e)("h2",{className:"t-heading-secondary"},o.info))},V=t.p+"36f5abc6ad7bf3734f2a5c3a4f33ec90.svg",$=t("UpYz"),G=t.n($),H=Object(g.e)("img",{className:"logo__img",src:V,alt:"logo"}),J=function(n){var e=n.monthlyDonation,t=void 0===e||e,o=n.scrolled,i=void 0!==o&&o,a=w(),l=t?a.monthly.logo:a.oneTime.logo,c=function(n,e){return r(n,"link",(function(n){return Object(g.e)("a",n)}),{className:"logo__link",href:e})}(l.text,l.link),s=i?"box-shadow: 0 3px 7px 0px rgba(0, 0, 0, 0.1)":"";return Object(g.e)("div",{className:"logo",style:s},H,Object(g.e)("div",{className:"logo__heading"},Object(g.e)("h3",{className:"t-title logo__title"},l.header),Object(g.e)("p",{className:"t-body--small logo__link"},c)))},q=t("lUhE"),K=t.n(q),W=function(n){var e=n.handleClick,t=n.monthlyDonation,o=w(),i=t?o.monthly:o.oneTime;return Object(g.e)("p",{className:"t-title donation-type"},function(n,e){return r(n,"action",(function(n){return Object(g.e)("span",n)}),{onClick:e})}(i.switch,e))},Q=t("jgzK"),Z=t.n(Q),X=function(n){var e=n.monthlyDonation,t=n.setMonthlyDonation,o=Object(f.d)(null),r=Object(f.e)(!1),i=r[0],a=r[1];return Object(f.b)((function(){var n,e=function(){o.current&&a(o.current.scrollTop>0)};return null==(n=o.current)||n.addEventListener("scroll",e),e(),function(){var n;return null==(n=o.current)?void 0:n.removeEventListener("scroll",e)}}),[]),Object(g.e)(g.b,null,Object(g.e)("div",{ref:o,className:"donations"},Object(g.e)(J,{scrolled:i,monthlyDonation:e}),Object(g.e)("div",{className:"donations__header"},Object(g.e)(B,{monthlyDonation:e})),Object(g.e)(Y,{monthlyDonation:e}),Object(g.e)(W,{handleClick:function(){t(!e)},monthlyDonation:e})))},nn=t("KIIj"),en=t.n(nn),tn=t("2Pik"),on=t.n(tn),rn=t("Rsgl"),an=[en.a,U.a,A.a,t.n(rn).a,on.a,Z.a,K.a,G.a,k.a,T.a],ln=function(n){var e,t=n.image,o=Object(f.a)(x),r=Object(f.a)(h),i=null==(e=null==r?void 0:r.monthlyDonation)||e?t:o.oneTime.img;return i?Object(g.e)("div",{className:"images",style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 24.02%), url("+i+")"}}):null},cn=function(){var n=w().company,e=n.logo||V;return Object(g.e)("div",{className:"company"},Object(g.e)("img",{className:"company__img",src:e,alt:"Compoany logo"}),Object(g.e)("p",{className:"t-title company__title"},n.name),Object(g.e)("p",{className:"t-body--small company__subtitle"},n.location))},sn=t("OsHv"),un=t.n(sn),mn={">":"&gt;","<":"&lt;"},dn=function(n){function e(){for(var e,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return u(c(e=n.call.apply(n,[this].concat(o))||this),"scopeClassNameCache",{}),u(c(e),"scopedCSSTextCache",{}),u(c(e),"scoped",void 0===e.props.scoped||e.props.scoped),u(c(e),"pepper",""),u(c(e),"getStyleString",(function(){if(Array.isArray(e.props.children)){var n=e.props.children.filter((function(n){return!Object(g.g)(n)&&"string"==typeof n}));if(n.length>1)throw new Error("Multiple style objects as direct descedents of a\n        Style component are not supported ("+n.length+" style objects detected):\n        "+n[0]+"\n        ");return n[0]}return"string"!=typeof e.props.children||Object(g.g)(e.props.children)?null:e.props.children})),u(c(e),"getRootElement",(function(){if(Array.isArray(e.props.children)){var n=e.props.children.filter(g.g);return n[0]}return Object(g.g)(e.props.children)?e.props.children:null})),u(c(e),"getRootSelectors",(function(n){var e=[],t=n.props,o=t.id,r=t.className;return o&&e.push("#"+o),r&&r.trim().split(/\s+/g).forEach((function(n){return e.push(n)})),0===e.length&&"function"!=typeof n.type&&e.push(n.type),e})),u(c(e),"processCSSText",(function(n,t,o){return n.replace(/\s*\/\/(?![^(]*\)).*|\s*\/\*.*\*\//g,"").replace(/\s\s+/g," ").split("}").map((function(n){var r=/.*:.*;/g,i=/.*:.*(;|$|\s+)/g,a=/\s*@/g,l=/\s*((\d{1,2}|100)\s*%)|\s*(to|from)\s*$/g;return n.split("{").map((function(n,c,s){if(0===n.trim().length)return"";var u=s.length-1===c&&n.match(i);if(n.match(r)||u)return e.escapeTextContentForBrowser(n);var m=n;return t&&!/:target/gi.test(m)?m.match(a)||m.match(l)?m:e.scopeSelector(t,m,o):m})).join("{\n")})).join("}\n")})),u(c(e),"escaper",(function(n){return mn[n]||""})),u(c(e),"escapeTextContentForBrowser",(function(n){return n.replace(/[><]/g,e.escaper)})),u(c(e),"scopeSelector",(function(n,t,o){var r=[];return t.split(/,(?![^(|[]*\)|])/g).forEach((function(t){var i;if(null!=o&&o.length&&o.some((function(n){return t.includes(n)}))){i=t;var a=null==o?void 0:o.map((function(n){return n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}));i=i.replace(new RegExp("("+(null==a?void 0:a.join("|"))+")"),"$1"+n),r.push(i,e.scoped?n+" "+t:t)}else r.push(e.scoped?n+" "+t:t)})),!e.scoped&&r.length>1?r[1]:r.join(", ")})),u(c(e),"getScopeClassName",(function(n,t){var o=n;return t&&(e.pepper="",e.traverseObjectToGeneratePepper(t),o+=e.pepper),"s"+String(un()(o))})),u(c(e),"traverseObjectToGeneratePepper",(function(n,t){void 0===t&&(t=0),t>32||e.pepper.length>1e4||"object"==typeof n&&n&&Object.entries(n).forEach((function(n){var o=n[1],r=/^[_$]|type|ref|^value$/.test(n[0]);Boolean(o)&&"object"==typeof o&&!r?e.traverseObjectToGeneratePepper(o,t+1):Boolean(o)&&!r&&"function"!=typeof o&&(e.pepper+=o)}))})),u(c(e),"isVoidElement",(function(n){return["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"].some((function(e){return n===e}))})),u(c(e),"createStyleElement",(function(n,e){return Object(g.e)("style",{id:"direflow_styles",type:"text/css",key:e,dangerouslySetInnerHTML:{__html:n||""}})})),u(c(e),"getNewChildrenForCloneElement",(function(n,t,o){return[e.createStyleElement(n,o),t.props.children]})),e}var t,o;return o=n,(t=e).prototype=Object.create(o.prototype),t.prototype.constructor=t,s(t,o),e.prototype.render=function(){var n,e,t,o=null!=(n=this.getStyleString())?n:"",r=this.getRootElement();if(!o&&r)return r.props.children;if(o&&!r)return this.createStyleElement(this.processCSSText(o),this.getScopeClassName(o,r));var i,a,c=null!=(e=(null==r?void 0:r.props).id)?e:"",s=null!=(t=(null==r?void 0:r.props).className)?t:"",u=s+c+o;this.scopeClassNameCache[u]?a=this.scopedCSSTextCache[i=this.scopeClassNameCache[u]]:(i=this.getScopeClassName(o,r),a=this.processCSSText(o,"."+i,r&&this.getRootSelectors(r)),this.scopeClassNameCache[u]=i,this.scopedCSSTextCache[i]=a);var m=this.scoped?""+s+i:s;return r&&Object(g.c)(r,l({},r.props,{className:m.trim()}),this.getNewChildrenForCloneElement(a,r,i))},e}(g.a),pn=function(n){var e="string"==typeof n.styles?n.styles.toString():n.styles.join(" ");return Object(g.e)(dn,{scoped:n.scoped},e,n.children)},gn=Object(g.e)(cn,null),fn=function(n){var e,t=n.options,r=n.hide,i=function(n){n.target===n.currentTarget&&r()},a=Object(f.e)(o(t)),l=a[0],c=a[1];Object(f.b)((function(){c(o(t))}),[t]);var s=l.defaultMode!==p.ONE_TIME,u=Object(f.e)(s),d=u[0],b=u[1],y=l.monthly.levels.find((function(n){return n.default})),v=Object(f.e)(null!=(e=null==y?void 0:y.amount)?e:l.monthly.levels[0].amount),j=v[0],O=v[1],_=Object(f.e)(""),w=_[0],N=_[1],k=Object(f.e)([-1,0]),C=k[0],D=k[1],T=Object(f.e)([].concat(l.monthly.levels).sort((function(n,e){return Number.isNaN(Number(e.amount))?-1:0}))),E=T[0],z=T[1];return Object(f.b)((function(){var n=C[0],e=C[1];if(n>e){var t=E.map((function(t,o){return o===n?m({},t,{classes:["fadeOutDown"]}):o===e?m({},t,{classes:["fadeInDown","right-panel__item--active"]}):t}));z(t)}if(n<e){var o=E.map((function(t,o){return m({},t,o===n?{classes:["fadeOutUp"]}:o===e?{classes:["fadeInUp","right-panel__item--active"]}:{classes:["right-panel__item--hidden"]})}));z(o)}var r=setTimeout((function(){var n=E.map((function(n,t){return m({},n,t===e?{classes:["right-panel__item--active"]}:{classes:["right-panel__item--hidden"]})}));z(n)}),300);return function(){clearTimeout(r)}}),[C]),Object(g.e)(pn,{scoped:!1,styles:an},Object(g.e)("div",null,Object(g.e)("div",{className:"wrapper",onClick:i},Object(g.e)("div",{className:"close",onClick:i}),Object(g.e)(x.Provider,{value:l},Object(g.e)(h.Provider,{value:{monthlyDonation:d,setMonthlyDonation:b,donationAmount:j,setDonationAmount:O,customDonation:w,setCustomDonation:N,setTriggerAnimation:D}},"SPLIT_PANEL"===l.mode.toUpperCase()&&Object(g.e)("div",{className:"widget widget--split"},Object(g.e)(X,{monthlyDonation:d,setMonthlyDonation:b}),Object(g.e)("div",{className:"right-panel"},gn,E.map((function(n,e){var t;return Object(g.e)("div",{key:e,className:["right-panel__item"].concat(null!=(t=n.classes)?t:[]).join(" ")},n.img&&Object(g.e)(ln,{image:n.img}),Object(g.e)(S,{monthlyBgColor:n.bgColor}))})))),"SINGLE"===l.mode.toUpperCase()&&Object(g.e)("div",{className:"widget widget--single"},Object(g.e)(X,{monthlyDonation:d,setMonthlyDonation:b})),Object(g.e)("div",{className:"u-hide-desktop btn-mobile"},Object(g.e)(M,{monthlyDonation:d,extraClasses:["u-hide-desktop"]})))))))}},hwuB:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".input {\n    position: relative;\n    display: flex;\n    /* padding: 1rem; */\n}\n\n.input__container {\n    display: flex;\n    flex-direction: column;\n    border-radius: 8px;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    overflow: hidden;\n}\n\n.input--selected {\n    border-color: #000;\n}\n\n@media only screen and (max-width: 37.5em) {\n    .input--selected .input__description {\n        padding: 1rem;\n        height: auto;\n        visibility: visible;\n        border-top: 1px solid #000;\n    }\n}\n\n.input__description {\n    visibility: hidden;\n    height: 0;\n    transition: all 0.2s;\n}\n\n.no-line-height {\n    line-height: 1;\n}\n\n.input__input {\n    border: none;\n    font-family: inherit;\n    border-bottom: 1px solid transparent;\n    background-color: #f3f6f6;\n\n    width: 100%;\n    padding: 1rem 4.5rem 1rem 3rem;\n    outline: none;\n\n    transition: all 0.4s;\n}\n\n.input__input::placeholder {\n    opacity: 0.4;\n    font-weight: 500;\n}\n\n.input--filled .input__input,\n.input__input:focus {\n    background: #fff;\n}\n\n.input--filled {\n    border: 1px solid rgba(0, 0, 0);\n    background: #fff;\n}\n\n.no-line-height {\n    line-height: 1;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .input__input {\n        padding: 0.75rem 4rem 0.75rem 2.5rem;\n    }\n}\n\n.input__prefix {\n    position: absolute;\n    top: 50%;\n    left: 1rem;\n    opacity: 0.4;\n    font-weight: 500;\n    transform: translateY(-50%);\n}\n\n.input__suffix {\n    position: absolute;\n    top: 50%;\n    right: 1rem;\n    transform: translateY(-50%);\n}\n",""]),n.exports=e},jgzK:function(n,e,t){var o=t("ek2p");n.exports="string"==typeof o?o:o.toString()},lUhE:function(n,e,t){var o=t("u9N7");n.exports="string"==typeof o?o:o.toString()},mn5G:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".images {\n    grid-row: 1 / 2;\n    position: relative;\n    background-size: cover;\n    background-position: center;\n}\n\n.images__img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n}\n",""]),n.exports=e},nr9d:function(n){"use strict";function e(n){var e=Object.prototype.toString.call(n);return"[object RegExp]"===e||"[object Date]"===e||function(n){return n.$$typeof===s}(n)}function t(n,e){return!1!==e.clone&&e.isMergeableObject(n)?l(Array.isArray(n)?[]:{},n,e):n}function o(n,e,o){return n.concat(e).map((function(n){return t(n,o)}))}function r(n){return Object.keys(n).concat(function(n){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(n).filter((function(e){return n.propertyIsEnumerable(e)})):[]}(n))}function i(n,e){try{return e in n}catch(n){return!1}}function a(n,e,o){var a={};return o.isMergeableObject(n)&&r(n).forEach((function(e){a[e]=t(n[e],o)})),r(e).forEach((function(r){(function(n,e){return i(n,e)&&!(Object.hasOwnProperty.call(n,e)&&Object.propertyIsEnumerable.call(n,e))})(n,r)||(a[r]=i(n,r)&&o.isMergeableObject(e[r])?function(n,e){if(!e.customMerge)return l;var t=e.customMerge(n);return"function"==typeof t?t:l}(r,o)(n[r],e[r],o):t(e[r],o))})),a}function l(n,e,r){(r=r||{}).arrayMerge=r.arrayMerge||o,r.isMergeableObject=r.isMergeableObject||c,r.cloneUnlessOtherwiseSpecified=t;var i=Array.isArray(e);return i===Array.isArray(n)?i?r.arrayMerge(n,e,r):a(n,e,r):t(e,r)}var c=function(n){return function(n){return!!n&&"object"==typeof n}(n)&&!e(n)},s="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;l.all=function(n,e){if(!Array.isArray(n))throw new Error("first argument should be an array");return n.reduce((function(n,t){return l(n,t,e)}),{})},n.exports=l},u9N7:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".donation-type {\n    font-weight: bold;\n    color: var(--color-primary);\n    padding-bottom: 2rem;\n}\n\n.donation-type span {\n    color: #00a37f;\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n@media only screen and (max-width: 37.5em) {\n    .donation-type {\n        padding-bottom: 1.5rem;\n    }\n}\n",""]),n.exports=e},uuJQ:function(n,e,t){var o=t("W2lv");n.exports="string"==typeof o?o:o.toString()},wW48:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".btn {\n    border: none;\n    outline: none;\n    width: 100%;\n\n    font-family: inherit;\n    font-size: 1rem;\n    font-weight: 500;\n    line-height: 1;\n\n    cursor: pointer;\n    border-radius: 100px;\n    color: white;\n    padding: 1.25rem 0;\n    background-color: rgb(0, 163, 127);\n\n    transition: all 0.2s;\n}\n\n.btn:hover {\n    background-color: rgb(0, 124, 97);\n}\n\n.btn:active {\n    background-color: rgb(0, 139, 109);\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .btn {\n        font-size: 0.875rem;\n        padding: 1rem 0;\n    }\n}\n",""]),n.exports=e}}]);
//# sourceMappingURL=1.chunk.8265a.js.map