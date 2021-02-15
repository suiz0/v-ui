/*!
 * v-ui.js v0.1.7
 * 
 */!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){e.exports=Vue},function(e,t,n){"use strict";var i,a=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function s(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},i=[],a=0;a<e.length;a++){var r=e[a],d=t.base?r[0]+t.base:r[0],l=n[d]||0,p="".concat(d," ").concat(l);n[d]=l+1;var c=s(p),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==c?(o[c].references++,o[c].updater(u)):o.push({identifier:p,updater:v(u,t),references:1}),i.push(p)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var a=n.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var o=r(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var p,c=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function u(e,t,n,i){var a=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=c(t,a);else{var r=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(r,o[t]):e.appendChild(r)}}function b(e,t,n){var i=n.css,a=n.media,r=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var f=null,m=0;function v(e,t){var n,i,a;if(t.singleton){var r=m++;n=f||(f=l(t)),i=u.bind(null,n,r,!1),a=u.bind(null,n,r,!0)}else n=l(t),i=b.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var a=s(n[i]);o[a].references--}for(var r=d(e,t),l=0;l<n.length;l++){var p=s(n[l]);0===o[p].references&&(o[p].updater(),o.splice(p,1))}n=r}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var a=(o=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(d," */")),r=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([a]).join("\n")}var o,s,d;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(i)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(a[o]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);i&&a[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},function(e,t,n){var i=n(1),a=n(4);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1};i(a,r);e.exports=a.locals||{}},function(e,t,n){(t=n(2)(!1)).push([e.i,"body{\n    height: 100vh;\n}\n\n.view-container {\n    display: flex;\n    flex: 1 1 auto;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n}\n\n.view-content {\n    flex: 1 1 100vw;\n    height: 100%;\n    overflow-y: auto;\n}\n\n.view--with-toolbar {\n    flex-direction: column;\n}",""]),e.exports=t},function(e,t,n){var i=n(1),a=n(6);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1};i(a,r);e.exports=a.locals||{}},function(e,t,n){(t=n(2)(!1)).push([e.i,".app-screen__content {\n    padding-top: 10px;\n}\n\n.item__icon {\n    margin-right: 12px;\n} \n\n/*\napp-master-details\n*/\n.app-master-details__header {\n    display: flex;\n    padding: 5px;\n    background-color: #e0e0e0;\n}\n\n/*\napp-master-details\n*/\n.sidebar {\n    flex: 0 0 auto;\n    display: flex;\n    flex-direction: column;\n    padding: 15px 15px;\n    box-shadow: 4px 0px 6px 2px rgba(0, 0, 0, .16);\n    z-index: 1000;\n}\n\n.sidebar--collapsed {\n    width: 55px;\n    padding-left: 0px;\n    padding-right: 0px;\n}\n\n.sidebar--extended.sidebar--collapsed .sidebar__header, .sidebar--extended.sidebar--no-title .sidebar__header\n{\n    margin-top: 32px;\n}\n\n.sidebar--collapsed.sidebar--with-title .sidebar__content {\n    margin-top: 32px;\n}\n\n.sidebar--extended .sidebar__content {\n    margin-top: 0px !important;\n}\n\n.sidebar--expanded {\n    width: 300px !important;\n}\n\n.sidebar__footer {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.sidebar--collapsed .sidebar__content, .sidebar--collapsed .sidebar__footer {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n.sidebar__item {\n    border: none;\n    border-radius: 0px 0px !important;\n    background-color: transparent;\n    cursor: pointer;\n    align-items: center;\n    display: flex;\n    margin: 0px 0px 5px 0px;\n}\n\n.sidebar__button {\n    margin: 0px 0px 5px 0px;\n}\n\n.sidebar__item__icon {\n    margin-right: 12px;\n}\n\n.sidebar__footer {\n    margin-top: auto;\n}\n\n/*Themes*/\n.sidebar--dark {\n    color: #fff !important;\n}\n\n.sidebar--dark .sidebar__item {\n    color: #fff !important;\n}\n\n.sidebar--dark .sidebar__item {\n    border-radius: .25rem !important;\n}\n\n.sidebar--dark .sidebar__button {\n    color: #fff !important;\n}\n\n.sidebar--dark .sidebar__item:hover, .sidebar--dark .sidebar__button:hover, .sidebar--dark .sidebar__item--active {\n    background-color: #007bff;\n}\n\n.app-tree-node {\n    border: none;\n}\n\n.app-tree-node--dark {\n    color: #fff;\n}\n\n.app-tree-node--light {\n    color: #000;\n}\n\n.app-tree-node--empty {\n    margin-left: 20px;\n}\n\n.app-tree-node__icon {\n    cursor: pointer;\n}",""]),e.exports=t},function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r={created:function(){this.$emit("created")},mounted:function(){this.$emit("mounted")}};function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=a.a.component("app-screen",{mixins:[r],template:'<div class="view-container view--with-toolbar">\n    <b-navbar toggleable="lg" type="dark" variant="primary">\n        <b-navbar-brand tag="h1">{{title}}</b-navbar-brand>\n        <b-navbar-nav class="ml-auto">\n            <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">\n                <b-button-group class="mx-1" v-if="!hideDefaultToolbar">\n                    <b-button @click="$emit(\'new\')">New</b-button>\n                    <b-button @click="$emit(\'edit\')">Edit</b-button>\n                    <b-button @click="save">Save</b-button>\n                    <b-button @click="cancel">Cancel</b-button>\n                </b-button-group>\n                <slot name="custom-toolbar">\n                </slot>\n            </b-button-toolbar>\n        </b-navbar-nav>\n    </b-navbar>\n    <div class="view-content app-screen__content">\n        <slot v-bind:entity="entity">\n        </slot>\n    </div>\n</div>',props:{title:{type:String,default:"Screen"},hideDefaultToolbar:{type:Boolean,default:!1},model:{type:Object,default:function(){}}},data:function(){return{entity:s({},this.model)}},methods:{save:function(){this.$emit("save",Object.assign({},this.entity))},cancel:function(){this.$emit("cancel")},reset:function(){this.entity={}}}}),p=a.a.component("app-toolbar",{template:'<b-navbar :variant="variant" :type="type">\n        <b-container v-if="isFixed">\n            <b-navbar-brand><slot name="brand">App Toolbar</slot></b-navbar-brand>\n            <slot></slot>\n        </b-container>\n        <template v-else>\n            <b-navbar-brand><slot name="brand">App Toolbar</slot></b-navbar-brand>\n            <slot></slot>\n        </template>\n    </b-navbar>',props:{variant:{type:String,default:"dark"},type:{type:String,default:"dark"},isFixed:{type:Boolean,default:!1}}}),c=a.a.component("app-form",{template:'<b-form @submit="submit">\n        <slot>\x3c!-- default content--\x3e<slot>\n    </b-form>',methods:{submit:function(e){!0===e.target.checkValidity()?this.$emit("submitted",e):e.preventDefault()}}}),u=a.a.component("app-input",{template:'<b-form-group :label="label">\n        <b-form-input :type="type" :state="isValid" :size="size" v-model="value"></b-form-input>\n        <b-form-invalid-feedback :state="isValid">{{error}}</b-form-invalid-feedback>\n        </b-form-group>',props:{isValid:{type:Boolean,default:null},error:{type:String,default:""},value:{type:Object},size:{type:String,default:"sm"},type:{type:String,default:function(){return"text"}},label:{type:String,default:function(){return"Input type"}}},watch:{value:function(){this.$emit("input",this.value)}}}),b=a.a.component("app-sidebar",{template:'\n        <div class="sidebar" :class="[\'bg-\' + variant, CSSStatus, \'sidebar--\' + variant, (title.length === 0) ? \'sidebar--no-title\' : \'sidebar--with-title\']">\n            <section class="sidebar__header">\n                <h5 class="sidebar__title" v-show="title.length>0 && isExpanded">{{title}}</h5>\n            </section>\n            <section class="sidebar__content" v-show="isExpanded">\n                <slot>\n                    Content here\n                </slot>\n            </section>\n            <section class="sidebar__content" v-show="!isExpanded">\n                <slot name="collapsed">\n                &lt;C&gt;\n                </slot>\n            </section>\n            <section class="sidebar__footer">\n                <slot name="footer">\n                </slot>\n            </section>\n        </div>',props:{title:{type:String,default:""},variant:{type:String,default:"dark"},isCollapsed:{type:Boolean,default:!1}},data:function(){return{isExpanded:!this.isCollapsed}},watch:{isCollapsed:function(e){this.isExpanded=!e}},computed:{CSSStatus:function(){return this.isExpanded?"sidebar--expanded":"sidebar--collapsed"}}}),f=a.a.component("app-sidebar-button",{template:"<button :class=\"['btn', 'sidebar__button', isSelected? 'sidebar__item--active': '']\" @click=\"clicked\">\n        <slot>\n        </slot>\n    </button>",props:{id:{type:String,default:null},variant:{type:String,default:"primary"},isSelected:{type:Boolean,default:!1}},methods:{clicked:function(){this.$emit("clicked",this.id)}}}),m=a.a.component("app-sidebar-item",{template:'<div class="sidebar__item list-group-item list-group-item-action" :class="[\'text-\' + variant, isSelected? \'sidebar__item--active\': \'\']" v-on:click="clicked">\n            <div class="sidebar__item__icon">\n                <slot name="icon">\n                </slot>\n            </div>\n            <div class="sidebar__item__text">\n                <slot>\n                </slot>\n            </div>\n        </div>',props:{id:{type:String,default:null},variant:{type:String,default:"primary"},isSelected:{type:Boolean,default:!1}},methods:{clicked:function(){this.$emit("clicked",this.id)}}}),v=b,h=a.a.component("app-sidebar-extended",{template:'<app-sidebar :title="title" :is-collapsed="!isExpanded" class="sidebar--extended" :variant="variant">\n            <div class="list-group">\n                <template v-for="(item, index) in items">\n                    <app-sidebar-item :is-selected="item==selected" :key="index" @clicked="itemClicked(item)">\n                        <template v-slot:icon>\n                            <span v-html="item.icon"></span>\n                        </template>\n                        {{item.description}}\n                    </app-sidebar-item>\n                    <app-tree v-if="item.children && item.children.length > 0 && item === selected" :items="item.children"></<app-tree>\n                </template>\n            </div>\n            <template v-slot:footer>\n                <button class="btn btn-dark sidebar__button sidebar__toggler" @click="toggle">\n                    <span class="oi oi-expand-right" v-show="isExpanded"></span>\n                    <span class="oi oi-expand-left" v-show="!isExpanded"></span>\n                </button>\n            </template>\n            <template v-slot:collapsed>\n                <app-sidebar-button v-for="(item, index) in items" :is-selected="item==selected" v-html="item.icon" @clicked="itemClicked(item)">\n                </app-sidebar-button>\n            </template>\n        </app-sidebar>',props:{title:{type:String,default:""},variant:{type:String,default:"dark"},items:{type:Array,default:[]},selectedIndex:{type:Number,default:0}},data:function(){return{isExpanded:!1,selected:this.items?this.items[this.selectedIndex]:null}},methods:{toggle:function(){this.isExpanded=!this.isExpanded},itemClicked:function(e){this.$emit("item-selected",e),this.setSelected(e)},setSelected:function(e){this.selected=e}}}),g={AppTree:a.a.component("app-tree",{template:'<div class="list-group app-tree">\n        <app-tree-node v-for="item in items" :node="item" :variant="variant">\n        </app-tree-node>\n    </div>',props:{variant:{type:String,default:"light"},items:{type:Object,default:function(){return[]}}}}),AppTreeNode:a.a.component("app-tree-node",{template:'<div class="app-tree-node list-group-item" :class="[\'bg-\'+variant, \'app-tree-node--\' + variant]">\n        <div class="app-tree-node__wrapper d-flex">\n            <div class="app-tree-node__icon item__icon" @click="toggle" v-show="hasChildren">\n                <span class="oi oi-caret-right"></span>\n            </div>\n            <div class="app-tree-node__content" :class="{\'app-tree-node--empty\' :!hasChildren}">\n            {{node.description}}\n            </div>\n        </div>\n        <app-tree v-if="hasChildren" :items="node.children" v-show="isExpanded" class="app-tree__subtree" :variant="variant"></app-tree>\n\n    </div>',props:{variant:{type:String,default:"light"},node:{type:Object,default:function(){return{icon:"",description:"item",children:[]}}}},data:function(){return{isExpanded:!1}},computed:{hasChildren:function(){return this.node.children&&this.node.children.length>0}},methods:{toggle:function(){this.isExpanded=!this.isExpanded}}})},y={AppMasterDetails:Vue.component("app-master-details",{template:'<div class="app-master-details">\n        <section class="app-master-details__header d-flex">\n            <h3>{{title}}</h3>\n            <div class="d-flex ml-auto mr-1" role="group" aria-label="Basic example">\n                <button type="button" class="btn ml-1 btn-outline-dark"><span class="oi oi-magnifying-glass" @click="search"></span></button>\n                <button type="button" class="btn ml-1 btn-outline-dark" @click="add"> + </button>\n            </div>\n        </section>\n        <table :class="[\'table\', variant ? \'table-\' + variant: null]">\n            <thead :class="[headersConfig.variant ? \'thead-\' + headersConfig.variant: null]">\n                <tr>\n                    <th>#</th>\n                    <th v-for="header in headers">\n                        {{header.description}}\n                    </th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr v-for="(row, index) in rows">\n                    <td>{{index+1}}</td>\n                    <td v-for="header in headers">{{row[header.name]}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>',props:{title:{type:String,default:"Data Sample"},headers:{type:Array,default:function(){return[]}},rows:{type:Array,default:function(){return[]}},variant:{type:String,default:"light"},headersConfig:{type:Object,default:function(){return{variant:"light"}}}},methods:{add:function(){this.$emit("add")},search:function(){this.$emit("search")}}})};n(3),n(5),t.default={AppScreen:l,AppToolbar:p,AppForm:c,AppInput:u,AppSidebar:v,AppSidebarItem:m,AppSidebarExtended:h,AppSidebarButton:f,AppTree:g,AppTable:y}}]);
//# sourceMappingURL=v-ui.js.map