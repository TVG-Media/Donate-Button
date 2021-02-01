(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"1LOa":function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".donation-type {\n    font-weight: bold;\n    color: var(--color-primary);\n}\n\n.donation-type span {\n    color: #00a37f;\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n@media only screen and (max-width: 37.5em) {\n    .donation-type {\n        padding-bottom: 0.5rem;\n    }\n}\n",""]),n.exports=e},"2Pik":function(n,e,t){var o=t("mU8M");n.exports="string"==typeof o?o:o.toString()},"4kCZ":function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".btn {\n    border: none;\n    outline: none;\n    width: 100%;\n\n    font-family: inherit;\n    font-size: 1rem;\n    font-weight: 500;\n    line-height: 1;\n\n    cursor: pointer;\n    border-radius: 100px;\n    color: white;\n    padding: 1.25rem 0;\n    background-color: rgb(0, 163, 127);\n\n    transition: all 0.2s;\n}\n\n.btn:hover {\n    background-color: rgb(0, 124, 97);\n}\n\n.btn:active {\n    background-color: rgb(0, 139, 109);\n}\n\n@media only screen and (max-width: 64em) {\n    .btn {\n        font-size: 0.875rem;\n        padding: 1rem 0;\n    }\n}\n",""]),n.exports=e},"7hI2":function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".donations {\n    grid-column: 1 / 2;\n    grid-row: 1 / -1;\n    padding: 1.875rem 2.5rem;\n\n    display: grid;\n    grid-template-rows: repeat(2, max-content) max-content repeat(2, max-content);\n    overflow-y: auto;\n    row-gap: 2rem;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.875em) {\n    .donations {\n        row-gap: 1rem;\n        padding: 1rem 1.625rem;\n    }\n}\n\n.donations__header *:not(:last-child) {\n    margin-bottom: 0.5rem;\n}\n\n.donations__form {\n    align-self: center;\n}\n\n.donations__form--monthly > *:not(:last-child) {\n    margin-bottom: 1rem;\n}\n\n.donations__form--one-time {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1rem;\n}\n\n.donations__input--one-time {\n    grid-column: 1 / -1;\n}\n\n.donations__submit {\n    display: flex;\n    flex-direction: column;\n}\n\n.donations__submit > *:not(:last-child) {\n    margin-bottom: 1rem;\n}\n",""]),n.exports=e},Ai0b:function(n){"use strict";function e(n,e){var t,o,i=n[1]||"",r=n[3];if(!r)return i;if(e&&"function"==typeof btoa){var a=(t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),"/*# ".concat(o," */")),s=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[i].concat(s).concat([a]).join("\n")}return[i].join("\n")}n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t,n);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);o&&i[c[0]]||(e&&(c[2]=c[2]?"".concat(e," and ").concat(c[2]):e),t.push(c))}},t}},CvPi:function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".input {\n    position: relative;\n    display: flex;\n    /* padding: 1rem; */\n}\n\n.input__container {\n    display: flex;\n    flex-direction: column;\n    border-radius: 8px;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    overflow: hidden;\n}\n\n.input--selected {\n    border-color: #000;\n}\n\n@media only screen and (max-width: 37.5em) {\n    .input--selected .input__description {\n        padding: 1rem;\n        height: auto;\n        visibility: visible;\n        border-top: 1px solid #000;\n    }\n}\n\n.input__description {\n    visibility: hidden;\n    height: 0;\n    transition: all 0.2s;\n}\n\n.no-line-height {\n    line-height: 1;\n}\n\n.input__input {\n    border: none;\n    font-family: inherit;\n    border-bottom: 1px solid transparent;\n    background-color: #f3f6f6;\n\n    width: 100%;\n    padding: 1rem 4.5rem 1rem 3rem;\n    outline: none;\n\n    transition: all 0.4s;\n}\n\n.input__input::placeholder {\n    opacity: 0.4;\n    font-weight: 500;\n}\n\n.input--filled .input__input,\n.input__input:focus {\n    background: #fff;\n}\n\n.input--filled {\n    border: 1px solid rgba(0, 0, 0);\n    background: #fff;\n}\n\n.no-line-height {\n    line-height: 1;\n}\n\n@media only screen and (max-width: 64em) {\n    .input__input {\n        padding: 0.75rem 4rem 0.75rem 2.5rem;\n    }\n}\n\n.input__prefix {\n    position: absolute;\n    top: 50%;\n    left: 1rem;\n    opacity: 0.4;\n    font-weight: 500;\n    transform: translateY(-50%);\n}\n\n.input__suffix {\n    position: absolute;\n    top: 50%;\n    right: 1rem;\n    transform: translateY(-50%);\n}\n",""]),n.exports=e},EJIf:function(n,e,t){var o=t("4kCZ");n.exports="string"==typeof o?o:o.toString()},KIIj:function(n,e,t){var o=t("ZaWy");n.exports="string"==typeof o?o:o.toString()},LhVE:function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".images {\n    grid-row: 1 / 2;\n    position: relative;\n    background-size: cover;\n    background-position: center;\n}\n\n.images__img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n}\n",""]),n.exports=e},Oxty:function(n,e,t){var o=t("CvPi");n.exports="string"==typeof o?o:o.toString()},"R3/S":function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".logo {\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: repeat(2, 1fr);\n    column-gap: 1rem;\n}\n\n.logo__img {\n    height: 2rem;\n    grid-row: 1 / -1;\n    align-self: center;\n}\n\n.logo__title {\n    align-self: start;\n}\n\n.logo__link {\n    align-self: end;\n}\n\n.logo__link:link,\n.logo__link:visited {\n    color: black;\n    opacity: 1;\n    text-decoration: none;\n}\n",""]),n.exports=e},Rsgl:function(n,e,t){var o=t("LhVE");n.exports="string"==typeof o?o:o.toString()},SZxn:function(n,e,t){var o=t("tEhV");n.exports="string"==typeof o?o:o.toString()},UpYz:function(n,e,t){var o=t("R3/S");n.exports="string"==typeof o?o:o.toString()},YENv:function(n){"use strict";n.exports=function(n){for(var e=1,t=0,o=0,i=n.length,r=-4&i;o<r;){for(var a=Math.min(o+4096,r);o<a;o+=4)t+=(e+=n.charCodeAt(o))+(e+=n.charCodeAt(o+1))+(e+=n.charCodeAt(o+2))+(e+=n.charCodeAt(o+3));e%=65521,t%=65521}for(;o<i;o++)t+=e+=n.charCodeAt(o);return(e%=65521)|(t%=65521)<<16}},YuUb:function(n,e,t){"use strict";function o(){return(o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function i(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(){return(a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function s(n,e){for(var t in e)n[t]=e[t];return n}function c(n,e){for(var t in n)if("__source"!==t&&!(t in e))return!0;for(var o in e)if("__source"!==o&&n[o]!==e[o])return!0;return!1}function l(n){this.props=n}function u(n){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach((function(n){"function"==typeof n.__c&&n.__c()})),n.__c.__H=null),(n=s({},n)).__c=null,n.__k=n.__k&&n.__k.map(u)),n}function p(n){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(p)),n}function d(){this.__u=0,this.t=null,this.__b=null}function m(n){var e=n.__.__c;return e&&e.__e&&e.__e(n)}function h(){this.u=null,this.o=null}function f(){}function g(){return this.cancelBubble}function b(){return this.defaultPrevented}function _(){return(_=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}t.r(e),t.d(e,"default",(function(){return Sn}));var y=t("hosL"),v=t("QRet"),j=t("KIIj"),O=t.n(j),w=t("uuJQ"),x=t.n(w),k=t("Oxty"),C=t.n(k),N=t("Rsgl"),S=t.n(N),D=t("2Pik"),A=t.n(D),E=t("jgzK"),T=t.n(E),U=t("lUhE"),z=t.n(U),I=t("UpYz"),P=t.n(I),R=t("SZxn"),L=t.n(R),Y=t("EJIf"),M=[O.a,x.a,C.a,S.a,A.a,T.a,z.a,P.a,L.a,t.n(Y).a],$=t("YENv"),F=t.n($),V=function(n){function e(){for(var e,t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return r(i(e=n.call.apply(n,[this].concat(o))||this),"scopeClassNameCache",{}),r(i(e),"scopedCSSTextCache",{}),r(i(e),"scoped",void 0===e.props.scoped||e.props.scoped),r(i(e),"pepper",""),r(i(e),"getStyleString",(function(){if(e.props.children instanceof Array){var n=e.props.children.filter((function(n){return!Object(y.j)(n)&&"string"==typeof n}));if(n.length>1)throw new Error("Multiple style objects as direct descedents of a\n        Style component are not supported ("+n.length+" style objects detected):\n        "+n[0]+"\n        ");return n[0]}return"string"!=typeof e.props.children||Object(y.j)(e.props.children)?null:e.props.children})),r(i(e),"getRootElement",(function(){if(e.props.children instanceof Array){var n=e.props.children.filter((function(n){return Object(y.j)(n)}));return n[0]}return Object(y.j)(e.props.children)?e.props.children:null})),r(i(e),"getRootSelectors",(function(n){var e=[];return n.props.id&&e.push("#"+n.props.id),n.props.className&&n.props.className.trim().split(/\s+/g).forEach((function(n){return e.push(n)})),e.length||"function"==typeof n.type||e.push(n.type),e})),r(i(e),"processCSSText",(function(n,t,o){return n.replace(/\s*\/\/(?![^(]*\)).*|\s*\/\*.*\*\//g,"").replace(/\s\s+/g," ").split("}").map((function(n){var i=/.*:.*;/g,r=/.*:.*(;|$|\s+)/g,a=/\s*@/g,s=/\s*(([0-9][0-9]?|100)\s*%)|\s*(to|from)\s*$/g;return n.split("{").map((function(n,c,l){if(!n.trim().length)return"";var u=l.length-1===c&&n.match(r);if(n.match(i)||u)return e.escapeTextContentForBrowser(n);var p=n;return t&&!/:target/gi.test(p)?p.match(a)||p.match(s)?p:e.scopeSelector(t,p,o):p})).join("{\n")})).join("}\n")})),r(i(e),"escaper",(function(n){return{">":"&gt;","<":"&lt;"}[n]})),r(i(e),"escapeTextContentForBrowser",(function(n){return(""+n).replace(/[><]/g,e.escaper)})),r(i(e),"scopeSelector",(function(n,t,o){var i=[];return t.split(/,(?![^(|[]*\)|\])/g).forEach((function(t){var r;if((null==o?void 0:o.length)&&o.some((function(n){return t.match(n)}))){r=t;var a=null==o?void 0:o.map((function(n){return n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}));r=r.replace(new RegExp("("+(null==a?void 0:a.join("|"))+")"),"$1"+n),i.push(r,e.scoped?n+" "+t:t)}else i.push(e.scoped?n+" "+t:t)})),!e.scoped&&i.length>1?i[1]:i.join(", ")})),r(i(e),"getScopeClassName",(function(n,t){var o=n;return t&&(e.pepper="",e.traverseObjectToGeneratePepper(t),o+=e.pepper),"s"+F()(o)})),r(i(e),"traverseObjectToGeneratePepper",(function(n,t){void 0===t&&(t=0),t>32||e.pepper.length>1e4||Object.keys(n).forEach((function(o){var i=/^[_$]|type|ref|^value$/.test(o);n[o]&&"object"==typeof n[o]&&!i?e.traverseObjectToGeneratePepper(n[o],t+1):n[o]&&!i&&"function"!=typeof n[o]&&(e.pepper+=n[o])}))})),r(i(e),"isVoidElement",(function(n){return["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"].some((function(e){return n===e}))})),r(i(e),"createStyleElement",(function(n,e){return Object(y.h)("style",{id:"direflow_styles",type:"text/css",key:e,dangerouslySetInnerHTML:{__html:n||""}})})),r(i(e),"getNewChildrenForCloneElement",(function(n,t,o){return[e.createStyleElement(n,o)].concat(t.props.children)})),e}var t,a;return a=n,(t=e).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,e.prototype.render=function(){var n=this.getStyleString(),e=this.getRootElement();if(!n&&e)return e.props.children;if(n&&!e)return this.createStyleElement(this.processCSSText(n),this.getScopeClassName(n,e));var t,i,r=e.props.className?e.props.className+" ":"",a=r+(e.props.id?e.props.id:"")+n;this.scopeClassNameCache[a]?i=this.scopedCSSTextCache[t=this.scopeClassNameCache[a]]:(t=this.getScopeClassName(n,e),i=this.processCSSText(n,"."+t,this.getRootSelectors(e)),this.scopeClassNameCache[a]=t,this.scopedCSSTextCache[t]=i);var s=this.scoped?""+r+t:r;return Object(y.d)(e,o({},e.props,{className:s.trim()}),this.getNewChildrenForCloneElement(i,e,t))},e}(y.a),W=function(n){var e;return e="string"==typeof n.styles?n.styles.toString():n.styles.reduce((function(n,e){return n+" "+e})),Object(y.h)(V,{scoped:n.scoped},e,n.children)},B=Object(y.e)({}),Z=B,H=function(){var n=function(){var n=window.navigator.language;return n.includes("-")?n.split("-")[0]:n}(),e=Object(v.b)(B),t=e.i18n,o=e.language;return t[o]?t[o]:t[n]?t[n]:t.en},J=function(n,e){return e.replace(/{{(\w*)}}/g,(function(e,t){return n[t]?n[t]:""}))},G=function(n,e,t,o){var i=new RegExp("<"+e+">(.*)</"+e+">","g"),r=n.split(i),a=r[0],s=r[1],c=r[2],l=Object(y.h)(t,o,s);return Object(y.h)(y.b,null,a,l,c)},K=t.p+"36f5abc6ad7bf3734f2a5c3a4f33ec90.svg",q=Object(y.h)("img",{className:"logo__img",src:K,alt:"logo"}),Q=function(n){var e=n.monthlyDonation,t=void 0===e||e,o=H(),i=t?o.monthly.logo:o.oneTime.logo,r=function(n,e){return G(n,"link","a",{className:"logo__link",href:e})}(i.text,i.link);return Object(y.h)("div",{className:"logo"},q,Object(y.h)("div",{className:"t-title logo__title"},i.header),Object(y.h)("p",{className:"t-body--small logo__link"},r))},X=function(n){var e=n.handleClick,t=n.monthlyDonation,o=H(),i=t?o.monthly:o.oneTime;return Object(y.h)("p",{className:"t-title donation-type"},function(n,e){return G(n,"action","span",{onClick:e})}(i.switch,e))},nn=function(n){var e=n.monthlyDonation,t=H(),o=e?t.monthly:t.oneTime;return Object(y.h)(y.b,null,Object(y.h)("h1",{className:"t-heading-primary"},o.header),Object(y.h)("h2",{className:"t-heading-secondary"},o.info))},en=function(n){var e=n.name,t=n.text,o=n.amount,i=n.handleClick,r=n.description,a=n.image,s=n.bgColor,c=["radio-button"];n.selected&&c.push("radio-button--selected");var l=["radio-button__label"].concat([t?"u-justify-content-space-between":"u-justify-content-center"]);return Object(y.h)("div",{className:c.join(" ")},Object(y.h)("input",{onClick:i,className:"radio-button__input",type:"radio",name:e,id:o}),Object(y.h)("label",{className:l.join(" "),htmlFor:o},t&&Object(y.h)("span",{className:"t-input radio-button__text"},t),Object(y.h)("span",{className:"t-input radio-button__amount"},"$",o)),r&&Object(y.h)("div",{style:{backgroundColor:s},className:"radio-button__extra"},Object(y.h)("div",{className:"radio-button__img-container"},Object(y.h)("img",{className:"radio-button__image",src:a,alt:t})),Object(y.h)("p",{className:"t-body radio-button__description"},r)))},tn=Object(y.h)("span",{className:"t-input input__prefix no-line-height"},"$"),on=function(n){var e=n.value,t=n.setValue,o=n.extraClasses,i=n.label,r=n.placeholder,s=n.description,c=n.selected,l=function(n,e){if(null==n)return{};var t,o,i={},r=Object.keys(n);for(o=0;o<r.length;o++)e.indexOf(t=r[o])>=0||(i[t]=n[t]);return i}(n,["value","setValue","extraClasses","label","placeholder","description","selected"]),u=["input__container"].concat(o).concat([c?"input--selected":""]).concat(e?["input--filled"]:[]);return Object(y.h)("div",{className:u.join(" ")},Object(y.h)("div",{className:"input"},tn,Object(y.h)("input",a({className:["t-input","input__input"].join(" "),placeholder:r,type:"text",value:e,onChange:function(n){return t(n.target.value)}},l)),i&&Object(y.h)("span",{className:"t-input input__suffix no-line-height"},i)),s&&Object(y.h)("p",{className:"t-body input__description"},s))},rn=function(n){var e=n.handleClick,t=n.extraClasses,o=n.children;return Object(y.h)("button",{className:["btn"].concat(t).join(" "),onClick:e},o)},an=function(n){return!!(n&&n.constructor&&n.call&&n.apply)},sn=Object(y.e)();(l.prototype=new y.a).isPureReactComponent=!0,l.prototype.shouldComponentUpdate=function(n,e){return c(this.props,n)||c(this.state,e)};var cn=y.k.__b;y.k.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),cn&&cn(n)};"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var ln=y.k.__e;y.k.__e=function(n,e,t){if(n.then)for(var o,i=e;i=i.__;)if((o=i.__c)&&o.__c)return null==e.__e&&(e.__e=t.__e,e.__k=t.__k),o.__c(n,e);ln(n,e,t)},(d.prototype=new y.a).__c=function(n,e){var t=e.__c,o=this;null==o.t&&(o.t=[]),o.t.push(t);var i=m(o.__v),r=!1,a=function(){r||(r=!0,t.componentWillUnmount=t.__c,i?i(s):s())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){a(),t.__c&&t.__c()};var s=function(){var n;if(!--o.__u)for(o.__v.__k[0]=p(o.state.__e),o.setState({__e:o.__b=null});n=o.t.pop();)n.forceUpdate()};!0===e.__h||o.__u++||o.setState({__e:o.__b=o.__v.__k[0]}),n.then(a,a)},d.prototype.componentWillUnmount=function(){this.t=[]},d.prototype.render=function(n,e){this.__b&&(this.__v.__k&&(this.__v.__k[0]=u(this.__b)),this.__b=null);var t=e.__e&&Object(y.f)(y.b,null,n.fallback);return t&&(t.__h=null),[Object(y.f)(y.b,null,e.__e?null:n.children),t]};var un=function(n,e,t){if(++t[1]===t[0]&&n.o.delete(e),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(t=n.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;n.u=t=t[2]}};(h.prototype=new y.a).__e=function(n){var e=this,t=m(e.__v),o=e.o.get(n);return o[0]++,function(i){var r=function(){e.props.revealOrder?(o.push(i),un(e,n,o)):i()};t?t(r):r()}},h.prototype.render=function(n){this.u=null,this.o=new Map;var e=Object(y.m)(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&e.reverse();for(var t=e.length;t--;)this.o.set(e[t],this.u=[1,0,this.u]);return n.children},h.prototype.componentDidUpdate=h.prototype.componentDidMount=function(){var n=this;this.o.forEach((function(e,t){un(n,t,e)}))};var pn="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,dn=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,mn="undefined"!=typeof Symbol?/fil|che|rad/i:/fil|che|ra/i;y.a.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(n){Object.defineProperty(y.a.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(e){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:e})}})}));var hn=y.k.event;y.k.event=function(n){return hn&&(n=hn(n)),n.persist=f,n.isPropagationStopped=g,n.isDefaultPrevented=b,n.nativeEvent=n};var fn={configurable:!0,get:function(){return this.class}},gn=y.k.vnode;y.k.vnode=function(n){var e=n.type,t=n.props,o=t;if("string"==typeof e){for(var i in o={},t){var r=t[i];"defaultValue"===i&&"value"in t&&null==t.value?i="value":"download"===i&&!0===r?r="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+e)&&!mn.test(t.type)?i="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(i)?i=i.toLowerCase():dn.test(i)?i=i.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===r&&(r=void 0),o[i]=r}"select"==e&&o.multiple&&Array.isArray(o.value)&&(o.value=Object(y.m)(t.children).forEach((function(n){n.props.selected=-1!=o.value.indexOf(n.props.value)}))),n.props=o}e&&t.class!=t.className&&(fn.enumerable="className"in t,null!=t.className&&(o.class=t.className),Object.defineProperty(o,"className",fn)),n.$$typeof=pn,gn&&gn(n)};var bn=y.k.__r;y.k.__r=function(n){bn&&bn(n),n.__c};var _n=function(n){var e=n.monthlyDonation,t=n.extraClasses,o=void 0===t?[]:t,i=Object(v.b)(sn).donationAmount,r=Object(v.b)(Z),a=r.onSubmit,s=r.currency,c=r.mode,l=H(),u=e?l.monthly:l.oneTime,p=function(n){if(!isNaN(i)){var t=e?"MONTHLY":"ONCE";if(an(a))a({amount:i,frequency:t});else{var o=function(n,e,t,o,i){return""+("https://www.every.org/"+n+"/donate?frequency="+e+"&amount="+t+"&utm_campaign=single-or-split&utm_content="+o.toLowerCase()+"&utm_source="+n+"&utm_medium=every-month")+Object.keys(i).reduce((function(n,e){return n.concat("&"+e+"="+i[e])}),"")}(a.charity,t,i,n,a.params);window.location.href=o}}};return Object(y.h)(rn,{extraClasses:o,handleClick:function(){return p(c)}},function(n,e,t){return n&&!isNaN(n)?J({amount:"$"+n+" "+t},e):J({amount:""},e)}(i,u.button,s))},yn=function(n,e){return n.findIndex((function(n){return n.amount==e}))},vn=function(n){var e=n.monthlyDonation,t=Object(v.b)(sn),o=t.donationAmount,i=t.setDonationAmount,r=t.customDonation,a=t.setCustomDonation,s=t.setTriggerAnimation,c=Object(v.b)(Z),l=c.monthly,u=c.oneTime,p=Object(v.j)(!1),d=p[0],m=p[1],h=H(),f=e?h.monthly:h.oneTime;Object(v.d)((function(){var n=l.levels.find((function(n){return n.default}));if(n){_(l.levels[0].amount);var e=setTimeout((function(){_(n.amount)}));return function(){return clearTimeout(e)}}}),[]);var g=function(){var n=yn(l.levels,o);e&&s([n,l.levels.length-1]),i(r),m(!0)},b=function(){m(!1)},_=function(n){var t=r||!o?l.levels.length-1:yn(l.levels,o),c=yn(l.levels,n);e&&s([t,c]),i(n),a("")},j=function(n){i(n),a(n)},O=["donations__form"].concat([e?"donations__form--monthly":"donations__form--one-time"]),w=l.levels.filter((function(n){return"custom"!==n.amount})),x=l.levels.find((function(n){return"custom"===n.amount}));return Object(y.h)(y.b,null,Object(y.h)("div",{className:O.join(" ")},e&&Object(y.h)(y.b,null,w.map((function(n,e){return Object(y.h)(en,{key:e,name:"amount",text:f.levels.find((function(e){return e.amount===n.amount})).name,amount:n.amount,selected:o===n.amount,handleClick:function(){return _(n.amount)},description:(t=f.levels.find((function(e){return e.amount===n.amount})).description1,G(t,"bold","span",{})),image:n.img,bgColor:n.bgColor});var t})),x&&Object(y.h)(on,{label:f.custom.label,placeholder:f.custom.placeholder,value:r,setValue:j,description:h.oneTime.description,onFocus:g,onBlur:b,selected:d})),!e&&Object(y.h)(y.b,null,u.levels.map((function(n){return Object(y.h)(en,{key:n,name:"amount",amount:n,selected:o===n,handleClick:function(){return _(n)}})})),u.allowCustom&&Object(y.h)(on,{placeholder:f.custom.placeholder,value:r,setValue:j,extraClasses:["donations__input--one-time"],onFocus:g,onBlur:b,selected:d}))),Object(y.h)("div",{className:"donations__submit"},Object(y.h)(_n,{extraClasses:["u-hide-mobile"]}),Object(y.h)("p",{className:"t-body--small"},h.footer)))},jn=function(n){var e=n.monthlyDonation,t=n.setMonthlyDonation;return Object(y.h)(y.b,null,Object(y.h)("div",{className:"donations"},Object(y.h)(Q,{monthlyDonation:e}),Object(y.h)("div",{className:"donations__header"},Object(y.h)(nn,{monthlyDonation:e})),Object(y.h)(vn,{monthlyDonation:e}),Object(y.h)(X,{handleClick:function(){return t(!e)},monthlyDonation:e})))},On=function(n,e,t,o){if(e){var i=!t||o?n.monthly.custom:function(n,e){return n.reduce((function(n,t){return parseInt(t.amount,10)<=parseInt(e,10)?t:n}))}(n.monthly.levels,t);return Object(y.h)(y.b,null,Object(y.h)("p",{className:"t-heading-secondary"},i.description1&&G(i.description1,"bold","strong",{})),i.description2&&Object(y.h)("p",{className:"t-heading-secondary"},i.description2))}return Object(y.h)("p",{className:"t-heading-secondary"},n.oneTime.description)},wn=function(n){var e=n.bgColor,t=Object(v.i)(null),o=Object(v.b)(sn),i=o.donationAmount,r=o.monthlyDonation,a=o.customDonation,s=Object(v.b)(Z),c=H();return Object(v.f)((function(){t.current&&(t.current.style.background=r?e:s.oneTime.bgColor)}),[i,r,s,e]),Object(y.h)("div",{ref:t,className:"description"},On(c,r,i,a))},xn=function(n){var e=n.image,t=Object(v.b)(Z),o=Object(v.b)(sn).monthlyDonation?e:t.oneTime.img;return Object(y.h)("div",{className:"images",style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 24.02%), url("+o+")"}})},kn=function(){var n=H().company,e=n.logo||K;return Object(y.h)("div",{className:"company"},Object(y.h)("img",{className:"company__img",src:e,alt:"Compoany logo"}),Object(y.h)("p",{className:"t-title company__title"},n.name),Object(y.h)("p",{className:"t-body--small company__subtitle"},n.location))},Cn=t("ahFK"),Nn=Object(y.h)(kn,null),Sn=function(n){var e,t,o=n.options,i=n.hide,r=function(n){return n.target===n.currentTarget&&i()},a=Object(v.j)(!0),s=a[0],c=a[1],l=o.monthly.levels.find((function(n){return n.default})),u=Object(v.j)((null==l?void 0:l.amount)||(null==(e=o.monthly.levels)||null==(t=e[0])?void 0:t.amount)),p=u[0],d=u[1],m=Object(v.j)(""),h=m[0],f=m[1],g=Object(v.j)([-1,0]),b=g[0],j=g[1],O=Object(v.j)(o.monthly.levels.sort((function(n,e){return isNaN(e.amount)?-1:0}))),w=O[0],x=O[1];return Object(v.d)((function(){var n=b[0],e=b[1];if(n>e){var t=w.map((function(t,o){return o===n?_({},t,{classes:["fadeOutDown"]}):o===e?_({},t,{classes:["fadeInDown","right-panel__item--active"]}):t}));x(t)}if(n<e){var o=w.map((function(t,o){return _({},t,o===n?{classes:["fadeOutUp"]}:o===e?{classes:["fadeInUp","right-panel__item--active"]}:{classes:["right-panel__item--hidden"]})}));x(o)}var i=setTimeout((function(){var n=w.map((function(n,t){return _({},n,t===e?{classes:["right-panel__item--active"]}:{classes:["right-panel__item--hidden"]})}));x(n)}),300);return function(){return clearTimeout(i)}}),[b]),Object(y.h)(W,{scoped:!1,styles:M},Object(y.h)("div",null,Object(y.h)("div",{className:"wrapper",onClick:r},Object(y.h)("div",{className:"close",onClick:r}),Object(y.h)(Z.Provider,{value:o},Object(y.h)(sn.Provider,{value:{monthlyDonation:s,setMonthlyDonation:c,donationAmount:p,setDonationAmount:d,customDonation:h,setCustomDonation:f,setTriggerAnimation:j}},o.mode.toUpperCase()===Cn.a.SPLIT_PANEL&&Object(y.h)("div",{className:"widget widget--split"},Object(y.h)(jn,{monthlyDonation:s,setMonthlyDonation:c}),Object(y.h)("div",{className:"right-panel"},Nn,w.map((function(n,e){return Object(y.h)("div",{key:e,className:["right-panel__item"].concat(n.classes).join(" ")},Object(y.h)(xn,{image:n.img}),Object(y.h)(wn,{bgColor:n.bgColor}))})))),o.mode.toUpperCase()===Cn.a.SINGLE&&Object(y.h)("div",{className:"widget widget--single"},Object(y.h)(jn,{monthlyDonation:s,setMonthlyDonation:c})),Object(y.h)("div",{className:"u-hide-desktop btn-mobile"},Object(y.h)(_n,{monthlyDonation:s,extraClasses:["u-hide-desktop"]})))))))}},ZaWy:function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,'/* \n* Reset stylesheet\n*/\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\n/* \n* Base styles\n*/\n\n.wrapper {\n  --color-primary: #2e3434;\n  z-index: 999;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  background: rgba(0, 0, 0, 0.5);\n  color: var(--color-primary);\n  justify-content: center;\n  align-items: center;\n  font-family: "Basis Grotesque Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen-Sans, Ubuntu, Cantarell,\n    "Helvetica Neue", Roboto, sans-serif;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .wrapper {\n    background: #fff;\n  }\n}\n\n.close {\n  position: absolute;\n  top: 1.5rem;\n  right: 1rem;\n  width: 1.5rem;\n  height: 2px;\n  background: #000;\n  transform: rotate(45deg);\n\n  transition: all 0.2s;\n}\n\n.close::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  background: #000;\n  width: 1.5rem;\n  height: 2px;\n\n  transform: rotate(-90deg);\n}\n\n/* \n* Typography\n*/\n\n.t-heading-primary {\n  font-size: 2rem;\n  line-height: 1.25;\n  font-weight: bold;\n  letter-spacing: -0.025em;\n}\n\n.t-heading-secondary {\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #000000;\n  letter-spacing: -0.01em;\n  font-weight: 400;\n}\n\n.t-title {\n  font-size: 1rem;\n  line-height: 1.25;\n  font-weight: bold;\n}\n\n.t-body {\n  font-size: 0.75rem;\n  line-height: 1.33;\n  font-weight: 400;\n  color: #000;\n}\n\n.t-body--small {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 400;\n  opacity: 0.5;\n  color: #000;\n}\n\n.t-input {\n  font-weight: bold;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #2e3434;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.875em) {\n  .t-heading-primary {\n    font-size: 1.5rem;\n    line-height: 1.167;\n    letter-spacing: -0.02em;\n  }\n\n  .t-heading-secondary {\n    font-size: 0.75rem;\n    line-height: 1.43;\n    letter-spacing: -0.01em;\n  }\n\n  .t-title {\n    font-size: 0.75rem;\n    line-height: 1;\n  }\n\n  .t-body--small {\n    font-size: 0.75rem;\n    line-height: 1.33;\n  }\n\n  .t-input {\n    font-size: 0.875rem;\n    line-height: 1.71;\n  }\n}\n\n/* \n* Components\n*/\n\n.widget {\n  background: white;\n  border-radius: 1.5rem;\n  overflow: hidden;\n\n  box-sizing: border-box;\n\n  font-weight: normal;\n  line-height: 1.2;\n  transition: all 0.2s;\n}\n\n.widget--split {\n  width: 888px;\n  height: auto;\n  max-height: 95%;\n  display: grid;\n\n  grid-template-columns: repeat(2, 50%);\n  grid-template-rows: 1fr max-content;\n}\n\n.widget--single {\n  width: 444px;\n  max-height: 95%;\n  overflow-y: auto;\n  height: auto;\n}\n\n.btn-mobile {\n  padding: 1.5rem 1rem;\n  position: sticky;\n  bottom: 0;\n  background: white;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n/* @media only screen and (max-height: 57.5em) {\n  .widget--single {\n    width: 300px;\n  }\n} */\n\n/* 1024px */\n@media only screen and (max-width: 64em) {\n  .widget--split {\n    width: 600px;\n  }\n\n  .widget--single {\n    width: 300px;\n  }\n\n  .widget--single {\n    width: 300px;\n  }\n}\n\n/* 600px */\n@media only screen and (max-width: 37.5em) {\n  .widget {\n    height: 100%;\n  }\n\n  .widget--split {\n    grid-template-columns: 1fr;\n    width: 100%;\n    height: 100%;\n    max-height: none;\n    overflow-y: auto;\n  }\n\n  .widget--single {\n    grid-template-columns: 1fr;\n    max-height: none;\n    width: 100%;\n    height: 100%;\n  }\n}\n\n.right-panel {\n  height: 100%;\n  display: grid;\n\n  position: relative;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .right-panel {\n    display: none;\n  }\n}\n\n.right-panel__item {\n  display: grid;\n\n  grid-row: 1/-1;\n  grid-column: 1/-1;\n  grid-template-rows: 1fr max-content;\n}\n\n.right-panel__item--active {\n  z-index: 99;\n}\n\n.right-panel__item--hidden {\n  opacity: 0;\n}\n\n.fadeOutDown {\n  animation: fadeOutDown 0.3s;\n}\n\n.fadeInDown {\n  animation: fadeInDown 0.3s;\n}\n\n.fadeOutUp {\n  animation: fadeOutUp 0.3s;\n}\n\n.fadeInUp {\n  animation: fadeInUp 0.3s;\n}\n\n@keyframes fadeOutDown {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n\n  99% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    transform: translateY(-100%);\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes fadeOutUp {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n\n  99% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n}\n\n@keyframes fadeInUp {\n  0% {\n    transform: translateY(100%);\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n/* \n* Utils\n*/\n\n.u-justify-content-space-between {\n  justify-content: space-between;\n}\n\n.u-justify-content-center {\n  justify-content: center;\n}\n\n.u-hide-desktop {\n  display: none;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .u-hide-mobile {\n    display: none;\n  }\n\n  .u-hide-desktop {\n    display: block;\n  }\n}\n',""]),n.exports=e},fANn:function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,'.radio-button {\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 8px;\n    transition: all 0.2s;\n    overflow: hidden;\n}\n\n.radio-button--selected {\n    border-color: #000000;\n}\n\n.radio-button__input {\n    display: none;\n}\n\n.radio-button__label {\n    padding: 1rem;\n    cursor: pointer;\n\n    display: flex;\n    align-items: center;\n}\n\n@media only screen and (max-width: 64em) {\n    .radio-button__label {\n        padding: 0.75rem;\n    }\n}\n\n@media only screen and (max-width: 37.5em) {\n    .radio-button--selected .radio-button__extra {\n        display: grid;\n        padding: 1rem;\n        visibility: visible;\n        height: auto;\n    }\n}\n\n.radio-button__extra {\n    visibility: hidden;\n    height: 0;\n    grid-template-columns: 1fr 65%;\n    gap: 1rem;\n    transition: all 0.2s;\n}\n\n.radio-button__img-container {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    grid-column: 1/2;\n    overflow: hidden;\n    border-radius: 0.5rem;\n}\n\n.radio-button__img-container::after {\n    content: "";\n    display: block;\n    padding-bottom: 80%;\n}\n\n.radio-button__image {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    height: auto;\n    object-fit: cover;\n    object-position: center;\n\n    /* https://stackoverflow.com/questions/14562457/center-oversized-image-in-div */\n    top: -9999px;\n    bottom: -9999px;\n    left: -9999px;\n    right: -9999px;\n    margin: auto;\n}\n\n/* Only on iOS Devices */\n/* @supports (-webkit-touch-callout: none) {\n    .radio-button__image {\n        height: auto;\n    }\n} */\n\n.radio-button__description {\n    grid-column: 2/3;\n}\n',""]),n.exports=e},jgzK:function(n,e,t){var o=t("7hI2");n.exports="string"==typeof o?o:o.toString()},lUhE:function(n,e,t){var o=t("1LOa");n.exports="string"==typeof o?o:o.toString()},mU8M:function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".company {\n    position: absolute;\n    top: 1.875rem;\n    left: 2.5rem;\n\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: repeat(2, 1fr);\n    align-items: center;\n    column-gap: 1rem;\n\n    z-index: 999;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.875em) {\n    .company {\n        top: 1rem;\n        left: 1.625rem;\n    }\n}\n\n.company__img {\n    box-sizing: content-box;\n    height: 2rem;\n    width: 2rem;\n    grid-row: 1 / -1;\n    border: 4px solid #ffff;\n    border-radius: 100%;\n}\n\n.company__title {\n    color: white;\n    align-self: start;\n}\n\n.company__subtitle {\n    color: white;\n    text-transform: uppercase;\n    align-self: end;\n}\n\n@media only screen and (max-width: 64em) {\n    .company {\n        top: 1rem;\n        left: 1.5rem;\n    }\n\n    .company__img {\n        box-sizing: content-box;\n        height: 1.5rem;\n        width: 1.5rem;\n        grid-row: 1 / -1;\n        border: 4px solid #ffff;\n        border-radius: 100%;\n    }\n}\n",""]),n.exports=e},tEhV:function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".description {\n    grid-row: 2 / 3;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 2.5rem;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.875em) {\n    .description {\n        padding: 1.5rem;\n    }\n}\n\n.description > *:not(:last-child) {\n    margin-bottom: 1rem;\n}\n",""]),n.exports=e},uuJQ:function(n,e,t){var o=t("fANn");n.exports="string"==typeof o?o:o.toString()}}]);
//# sourceMappingURL=1.chunk.8f1b1.js.map