!function(t){var n={};function e(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(a,r,function(n){return t[n]}.bind(null,r));return a},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=6)}([function(t,n,e){"use strict";var a,r=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},o=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),i=[];function s(t){for(var n=-1,e=0;e<i.length;e++)if(i[e].identifier===t){n=e;break}return n}function l(t,n){for(var e={},a=[],r=0;r<t.length;r++){var o=t[r],l=n.base?o[0]+n.base:o[0],c=e[l]||0,u="".concat(l," ").concat(c);e[l]=c+1;var d=s(u),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(i[d].references++,i[d].updater(p)):i.push({identifier:u,updater:m(p,n),references:1}),a.push(u)}return a}function c(t){var n=document.createElement("style"),a=t.attributes||{};if(void 0===a.nonce){var r=e.nc;r&&(a.nonce=r)}if(Object.keys(a).forEach((function(t){n.setAttribute(t,a[t])})),"function"==typeof t.insert)t.insert(n);else{var i=o(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var u,d=(u=[],function(t,n){return u[t]=n,u.filter(Boolean).join("\n")});function p(t,n,e,a){var r=e?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(t.styleSheet)t.styleSheet.cssText=d(n,r);else{var o=document.createTextNode(r),i=t.childNodes;i[n]&&t.removeChild(i[n]),i.length?t.insertBefore(o,i[n]):t.appendChild(o)}}function b(t,n,e){var a=e.css,r=e.media,o=e.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),o&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}var f=null,v=0;function m(t,n){var e,a,r;if(n.singleton){var o=v++;e=f||(f=c(n)),a=p.bind(null,e,o,!1),r=p.bind(null,e,o,!0)}else e=c(n),a=b.bind(null,e,n),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return a(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;a(t=n)}else r()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var e=l(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var a=0;a<e.length;a++){var r=s(e[a]);i[r].references--}for(var o=l(t,n),c=0;c<e.length;c++){var u=s(e[c]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}e=o}}}},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",a=t[3];if(!a)return e;if(n&&"function"==typeof btoa){var r=(i=a,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=a.sources.map((function(t){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(t," */")}));return[e].concat(o).concat([r]).join("\n")}var i,s,l;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,a){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(a)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);a&&r[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),n.push(l))}},n}},function(t,n,e){var a=e(0),r=e(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};a(r,o);t.exports=r.locals||{}},function(t,n,e){(n=e(1)(!1)).push([t.i,"body{\n    height: 100vh;\n}\n\n.view-container {\n    display: flex;\n    flex: 1 1 auto;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n}\n\n.view-content {\n    flex: 1 1 auto;\n    height: 100%;\n    overflow-y: auto;\n}\n\n.view--with-toolbar {\n    flex-direction: column;\n}",""]),t.exports=n},function(t,n,e){var a=e(0),r=e(5);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};a(r,o);t.exports=r.locals||{}},function(t,n,e){(n=e(1)(!1)).push([t.i,".sidebar {\n    flex: 0 0 auto;\n}\n\n.sidebar--collapsed {\n    width: 55px;\n}\n\n.sidebar--expanded {\n    width: 230px !important;\n}\n\n.sidebar--collapsed .sidebar__content {\n    text-align: center;\n}\n\n.sidebar .btn {\n    margin-top: 5px;\n}\n\n.sidebar__item {\n    border: none;\n    border-radius: 0px 0px !important;\n    background-color: transparent;\n    cursor: pointer;\n    align-items: center;\n    display: flex;\n}\n\n.sidebar__item__icon {\n    margin-right: 16px;\n}\n\n/*Themes*/\n.sidebar--dark .sidebar__item {\n    color: #fff !important;\n}\n\n.sidebar--dark .sidebar__item:hover {\n    background-color: #007bff;\n}",""]),t.exports=n},function(t,n,e){"use strict";e.r(n);var a=Vue.component("app-screen",{template:'<div class="view-container view--with-toolbar">\n    <b-navbar toggleable="lg" type="dark" variant="primary">\n        <b-navbar-brand tag="h1">{{title}}</b-navbar-brand>\n        <b-navbar-nav class="ml-auto">\n            <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">\n                <b-button-group class="mx-1" v-if="!hideDefaultToolbar">\n                    <b-button @click="$emit(\'new\')">New</b-button>\n                    <b-button @click="$emit(\'edit\')">Edit</b-button>\n                    <b-button @click="save">Save</b-button>\n                    <b-button @click="cancel">Cancel</b-button>\n                </b-button-group>\n                <slot name="custom-toolbar">\n                </slot>\n            </b-button-toolbar>\n        </b-navbar-nav>\n    </b-navbar>\n    <div class="view-content">\n        <slot v-bind:entity="entity">\n        </slot>\n    </div>\n</div>',props:{title:{type:String,default:"Screen"},hideDefaultToolbar:{type:Boolean,default:!1}},data:function(){return{entity:{}}},methods:{save:function(){this.$emit("save",Object.assign({},this.entity))},cancel:function(){this.$emit("cancel")},reset:function(){this.entity={}}}}),r=Vue.component("app-toolbar",{template:'<b-navbar :variant="variant" :type="type">\n        <b-container v-if="isFixed">\n            <b-navbar-brand><slot name="brand">App Toolbar</slot></b-navbar-brand>\n            <slot></slot>\n        </b-container>\n        <template v-else>\n            <b-navbar-brand><slot name="brand">App Toolbar</slot></b-navbar-brand>\n            <slot></slot>\n        </template>\n    </b-navbar>',props:{variant:{type:String,default:"dark"},type:{type:String,default:"dark"},isFixed:{type:Boolean,default:!1}}}),o=Vue.component("app-form",{template:'<b-form @submit="submit">\n        <slot>\x3c!-- default content--\x3e<slot>\n    </b-form>',methods:{submit:function(t){!0===t.target.checkValidity()?this.$emit("submitted",t):t.preventDefault()}}}),i=Vue.component("app-input",{template:'<b-form-group :label="label">\n        <b-form-input :type="type" :state="isValid" :size="size" v-model="value"></b-form-input>\n        <b-form-invalid-feedback :state="isValid">{{error}}</b-form-invalid-feedback>\n        </b-form-group>',props:{isValid:{type:Boolean,default:null},error:{type:String,default:""},value:{type:Object},size:{type:String,default:"sm"},type:{type:String,default:function(){return"text"}},label:{type:String,default:function(){return"Input type"}}},watch:{value:function(){this.$emit("input",this.value)}}}),s=Vue.component("app-sidebar",{template:'\n        <div class="sidebar" :class="[\'bg-\' + variant, CSSStatus, \'sidebar--\' + variant]">\n            <h3 class="ml-3" v-show="title.length>0">{{title}}</h3>\n            <section class="sidebar__content" v-show="isExpanded">\n                <slot>\n                    Content here\n                </slot>\n            </section>\n            <section class="sidebar__content" v-show="!isExpanded">\n                <slot name="collapsed">\n                &lt;C&gt;\n                </slot>\n            </section>\n        </div>',props:{title:{type:String,default:""},variant:{type:String,default:"dark"},isCollapsed:{type:Boolean,default:!1}},data:function(){return{isExpanded:!this.isCollapsed}},watch:{isCollapsed:function(t){this.isExpanded=!t}},computed:{CSSStatus:function(){return this.isExpanded?"sidebar--expanded":"sidebar--collapsed"}}}),l=Vue.component("app-sidebar-item",{template:'<div class="sidebar__item list-group-item list-group-item-action" :class="\'text-\' + variant">\n            <div class="sidebar__item__icon">\n                <slot name="icon">\n                </slot>\n            </div>\n            <div class="sidebar__item__text">\n                <slot>\n                </slot>\n            </div>\n        </div>',props:{variant:{type:String,default:"primary"}}}),c=s;e(2),e(4),n.default={AppScreen:a,AppToolbar:r,AppForm:o,AppInput:i,AppSidebar:c,AppSidebarItem:l}}]);
//# sourceMappingURL=v-ui.js.map