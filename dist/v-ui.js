!function(e){var n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(a,i,function(n){return e[n]}.bind(null,i));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=6)}([function(e,n,t){"use strict";var a,i=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),r=[];function s(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},a=[],i=0;i<e.length;i++){var o=e[i],l=n.base?o[0]+n.base:o[0],d=t[l]||0,c="".concat(l," ").concat(d);t[l]=d+1;var p=s(c),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==p?(r[p].references++,r[p].updater(u)):r.push({identifier:c,updater:v(u,n),references:1}),a.push(c)}return a}function d(e){var n=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var i=t.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(e){n.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(n);else{var r=o(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var c,p=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function u(e,n,t,a){var i=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=p(n,i);else{var o=document.createTextNode(i),r=e.childNodes;r[n]&&e.removeChild(r[n]),r.length?e.insertBefore(o,r[n]):e.appendChild(o)}}function b(e,n,t){var a=t.css,i=t.media,o=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var f=null,m=0;function v(e,n){var t,a,i;if(n.singleton){var o=m++;t=f||(f=d(n)),a=u.bind(null,t,o,!1),i=u.bind(null,t,o,!0)}else t=d(n),a=b.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return a(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;a(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<t.length;a++){var i=s(t[a]);r[i].references--}for(var o=l(e,n),d=0;d<t.length;d++){var c=s(t[d]);0===r[c].references&&(r[c].updater(),r.splice(c,1))}t=o}}}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",a=e[3];if(!a)return t;if(n&&"function"==typeof btoa){var i=(r=a,s=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[t].concat(o).concat([i]).join("\n")}var r,s,l;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,a){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(a)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(i[r]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&i[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},function(e,n,t){var a=t(0),i=t(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};a(i,o);e.exports=i.locals||{}},function(e,n,t){(n=t(1)(!1)).push([e.i,"body{\n    height: 100vh;\n}\n\n.view-container {\n    display: flex;\n    flex: 1 1 auto;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n}\n\n.view-content {\n    flex: 1 1 100vw;\n    height: 100%;\n    overflow-y: auto;\n}\n\n.view--with-toolbar {\n    flex-direction: column;\n}",""]),e.exports=n},function(e,n,t){var a=t(0),i=t(5);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};a(i,o);e.exports=i.locals||{}},function(e,n,t){(n=t(1)(!1)).push([e.i,".sidebar {\n    flex: 0 0 auto;\n    display: flex;\n    flex-direction: column;\n    padding: 15px 0px;\n}\n\n.sidebar--collapsed {\n    width: 55px;\n}\n\n.sidebar--extended.sidebar--collapsed .sidebar__header, .sidebar--extended.sidebar--no-title .sidebar__header\n{\n    margin-top: 32px;\n}\n\n.sidebar--collapsed.sidebar--with-title .sidebar__content {\n    margin-top: 32px;\n}\n\n.sidebar--extended .sidebar__content {\n    margin-top: 0px !important;\n}\n\n.sidebar--expanded {\n    width: 300px !important;\n}\n\n.sidebar--collapsed .sidebar__content {\n    text-align: center;\n}\n\n.sidebar__item {\n    border: none;\n    border-radius: 0px 0px !important;\n    background-color: transparent;\n    cursor: pointer;\n    align-items: center;\n    display: flex;\n}\n\n.sidebar__button {\n    margin: 0px 0px 5px 0px;\n}\n\n.sidebar__item__icon {\n    margin-right: 16px;\n}\n\n.sidebar__footer {\n    margin-top: auto;\n}\n\n/*Themes*/\n.sidebar--dark {\n    color: #fff !important;\n}\n\n.sidebar--dark .sidebar__item {\n    color: #fff !important;\n}\n\n.sidebar--dark .sidebar__item:hover, .sidebar--dark .sidebar__button:hover  {\n    background-color: #007bff;\n}",""]),e.exports=n},function(e,n,t){"use strict";t.r(n);var a=Vue.component("app-screen",{template:'<div class="view-container view--with-toolbar">\n    <b-navbar toggleable="lg" type="dark" variant="primary">\n        <b-navbar-brand tag="h1">{{title}}</b-navbar-brand>\n        <b-navbar-nav class="ml-auto">\n            <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">\n                <b-button-group class="mx-1" v-if="!hideDefaultToolbar">\n                    <b-button @click="$emit(\'new\')">New</b-button>\n                    <b-button @click="$emit(\'edit\')">Edit</b-button>\n                    <b-button @click="save">Save</b-button>\n                    <b-button @click="cancel">Cancel</b-button>\n                </b-button-group>\n                <slot name="custom-toolbar">\n                </slot>\n            </b-button-toolbar>\n        </b-navbar-nav>\n    </b-navbar>\n    <div class="view-content">\n        <slot v-bind:entity="entity">\n        </slot>\n    </div>\n</div>',props:{title:{type:String,default:"Screen"},hideDefaultToolbar:{type:Boolean,default:!1}},data:function(){return{entity:{}}},methods:{save:function(){this.$emit("save",Object.assign({},this.entity))},cancel:function(){this.$emit("cancel")},reset:function(){this.entity={}}}}),i=Vue.component("app-toolbar",{template:'<b-navbar :variant="variant" :type="type">\n        <b-container v-if="isFixed">\n            <b-navbar-brand><slot name="brand">App Toolbar</slot></b-navbar-brand>\n            <slot></slot>\n        </b-container>\n        <template v-else>\n            <b-navbar-brand><slot name="brand">App Toolbar</slot></b-navbar-brand>\n            <slot></slot>\n        </template>\n    </b-navbar>',props:{variant:{type:String,default:"dark"},type:{type:String,default:"dark"},isFixed:{type:Boolean,default:!1}}}),o=Vue.component("app-form",{template:'<b-form @submit="submit">\n        <slot>\x3c!-- default content--\x3e<slot>\n    </b-form>',methods:{submit:function(e){!0===e.target.checkValidity()?this.$emit("submitted",e):e.preventDefault()}}}),r=Vue.component("app-input",{template:'<b-form-group :label="label">\n        <b-form-input :type="type" :state="isValid" :size="size" v-model="value"></b-form-input>\n        <b-form-invalid-feedback :state="isValid">{{error}}</b-form-invalid-feedback>\n        </b-form-group>',props:{isValid:{type:Boolean,default:null},error:{type:String,default:""},value:{type:Object},size:{type:String,default:"sm"},type:{type:String,default:function(){return"text"}},label:{type:String,default:function(){return"Input type"}}},watch:{value:function(){this.$emit("input",this.value)}}}),s=Vue.component("app-sidebar",{template:'\n        <div class="sidebar" :class="[\'bg-\' + variant, CSSStatus, \'sidebar--\' + variant, (title.length === 0) ? \'sidebar--no-title\' : \'sidebar--with-title\']">\n            <section class="sidebar__header">\n                <h5 class="ml-3 sidebar__title" v-show="title.length>0 && isExpanded">{{title}}</h5>\n            </section>\n            <section class="sidebar__content" v-show="isExpanded">\n                <slot>\n                    Content here\n                </slot>\n            </section>\n            <section class="sidebar__content" v-show="!isExpanded">\n                <slot name="collapsed">\n                &lt;C&gt;\n                </slot>\n            </section>\n            <section class="sidebar__footer">\n            </section>\n        </div>',props:{title:{type:String,default:""},variant:{type:String,default:"dark"},isCollapsed:{type:Boolean,default:!1},showCollapse:{type:Boolean,default:!1}},data:function(){return{isExpanded:!this.isCollapsed}},watch:{isCollapsed:function(e){this.isExpanded=!e}},computed:{CSSStatus:function(){return this.isExpanded?"sidebar--expanded":"sidebar--collapsed"}}}),l=Vue.component("app-sidebar-item",{template:'<div class="sidebar__item list-group-item list-group-item-action" :class="\'text-\' + variant" v-on:click="clicked">\n            <div class="sidebar__item__icon">\n                <slot name="icon">\n                </slot>\n            </div>\n            <div class="sidebar__item__text">\n                <slot>\n                </slot>\n            </div>\n        </div>',props:{variant:{type:String,default:"primary"}},methods:{clicked:function(){this.$emit("clicked")}}}),d=s,c=Vue.component("app-sidebar-extended",{template:'<app-sidebar :title="title" :is-collapsed="!isExpanded" class="sidebar--extended" :variant="variant">\n                <app-sidebar-item @clicked="toggle" v-show="isExpanded">\n                    <template v-slot:icon>\n                        <span class="oi oi-menu"></span>\n                    </template>\n                </app-sidebar-item>\n            <slot>\n            </slot>\n            <template v-slot:collapsed>\n                <button v-show="!isExpanded" class="btn btn-dark sidebar__button" @click="toggle"><span class="oi oi-menu"></span></button>\n                <slot name="collapsed">\n                </slot>\n            </template>\n        </app-sidebar>',props:{title:{type:String,default:""},variant:{type:String,default:"dark"}},data:function(){return{isExpanded:!1}},methods:{toggle:function(){this.isExpanded=!this.isExpanded}}});t(2),t(4),n.default={AppScreen:a,AppToolbar:i,AppForm:o,AppInput:r,AppSidebar:d,AppSidebarItem:l,AppSidebarExtended:c}}]);
//# sourceMappingURL=v-ui.js.map