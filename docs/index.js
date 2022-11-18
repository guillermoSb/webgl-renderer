(()=>{"use strict";var e={576:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,'/*\n! tailwindcss v3.2.0 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted currentColor;\n          text-decoration: underline dotted currentColor;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.ml-3 {\n  margin-left: 0.75rem;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.w-screen {\n  width: 100vw;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.rounded-sm {\n  border-radius: 0.125rem;\n}\n.bg-indigo-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(67, 56, 202, var(--tw-bg-opacity));\n}\n.bg-indigo-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(79, 70, 229, var(--tw-bg-opacity));\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.font-sans {\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.hover\\:-translate-y-1:hover {\n  --tw-translate-y: -0.25rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}',""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var h=t(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)n[h].references++,n[h].updater(p);else{var f=o(p,r);r.byIndex=s,n.splice(s,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var u=t(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=function(){function e(e,n,t,r){this.vertices=e,this.texRecords=t,this.normals=n,this.faces=r}return e.fromFile=function(n){return t=this,r=void 0,a=function(){var t,r,o,a,i,s,c,l,u,d,h,p,f,m,g,b;return function(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}(this,(function(w){switch(w.label){case 0:return[4,fetch(n)];case 1:if(!(t=w.sent()))throw new Error("Could not load obj file");return r=[],o=[],a=[],i=[],[4,t.text()];case 2:for(s=w.sent(),c=s.split("\n"),l=0,u=c;l<u.length;l++)if(0!==(d=u[l]).length)switch(h=d.split(" ")[0],p=d.split(h)[1].trim(),h){case"v":r.push(p.split(" ").map((function(e){return parseFloat(e)})));break;case"vt":a.push(p.split(" ").map((function(e){return parseFloat(e)})));break;case"vn":o.push(p.split(" ").map((function(e){return parseFloat(e)})));break;case"f":for(f=[],m=0,g=p.split(" ");m<g.length;m++)b=g[m],f.push(b.split("/").map((function(e){return parseFloat(e)})));i.push(f)}return[2,new e(r,o,a,i)]}}))},new((o=void 0)||(o=Promise))((function(e,n){function i(e){try{c(a.next(e))}catch(e){n(e)}}function s(e){try{c(a.throw(e))}catch(e){n(e)}}function c(n){var t;n.done?e(n.value):(t=n.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,s)}c((a=a.apply(t,r||[])).next())}));var t,r,o,a},e}(),n=1e-6,r="undefined"!=typeof Float32Array?Float32Array:Array;function o(){var e=new r(3);return r!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function a(e,n,t){var o=new r(3);return o[0]=e,o[1]=n,o[2]=t,o}function i(e,n,t,r){var o=[],a=[];return o[0]=n[0]-t[0],o[1]=n[1]-t[1],o[2]=n[2]-t[2],a[0]=o[2]*Math.sin(r)+o[0]*Math.cos(r),a[1]=o[1],a[2]=o[2]*Math.cos(r)-o[0]*Math.sin(r),e[0]=a[0]+t[0],e[1]=a[1]+t[1],e[2]=a[2]+t[2],e}Math.random,Math.PI,Math.hypot||(Math.hypot=function(){for(var e=0,n=arguments.length;n--;)e+=arguments[n]*arguments[n];return Math.sqrt(e)}),o();var s=t(379),c=t.n(s),l=t(795),u=t.n(l),d=t(569),h=t.n(d),p=t(565),f=t.n(p),m=t(216),g=t.n(m),b=t(589),w=t.n(b),v=t(576),y={};function x(){var e=new r(16);return r!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function M(e){var n=new r(16);return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function k(e,n,t){var r,o,a,i,s,c,l,u,d,h,p,f,m=t[0],g=t[1],b=t[2];return n===e?(e[12]=n[0]*m+n[4]*g+n[8]*b+n[12],e[13]=n[1]*m+n[5]*g+n[9]*b+n[13],e[14]=n[2]*m+n[6]*g+n[10]*b+n[14],e[15]=n[3]*m+n[7]*g+n[11]*b+n[15]):(r=n[0],o=n[1],a=n[2],i=n[3],s=n[4],c=n[5],l=n[6],u=n[7],d=n[8],h=n[9],p=n[10],f=n[11],e[0]=r,e[1]=o,e[2]=a,e[3]=i,e[4]=s,e[5]=c,e[6]=l,e[7]=u,e[8]=d,e[9]=h,e[10]=p,e[11]=f,e[12]=r*m+s*g+d*b+n[12],e[13]=o*m+c*g+h*b+n[13],e[14]=a*m+l*g+p*b+n[14],e[15]=i*m+u*g+f*b+n[15]),e}function S(e,n,t){var r=Math.sin(t),o=Math.cos(t),a=n[4],i=n[5],s=n[6],c=n[7],l=n[8],u=n[9],d=n[10],h=n[11];return n!==e&&(e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15]),e[4]=a*o+l*r,e[5]=i*o+u*r,e[6]=s*o+d*r,e[7]=c*o+h*r,e[8]=l*o-a*r,e[9]=u*o-i*r,e[10]=d*o-s*r,e[11]=h*o-c*r,e}function C(e,n,t){var r=Math.sin(t),o=Math.cos(t),a=n[0],i=n[1],s=n[2],c=n[3],l=n[8],u=n[9],d=n[10],h=n[11];return n!==e&&(e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15]),e[0]=a*o-l*r,e[1]=i*o-u*r,e[2]=s*o-d*r,e[3]=c*o-h*r,e[8]=a*r+l*o,e[9]=i*r+u*o,e[10]=s*r+d*o,e[11]=c*r+h*o,e}y.styleTagTransform=w(),y.setAttributes=f(),y.insert=h().bind(null,"head"),y.domAPI=u(),y.insertStyleElement=g(),c()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals;var A=function(){function e(e,n,t,r,o,a){this.polyCount=0,this.translation=e,this.rotation=n,this.scale=t,this.viewMatrix=r,this.vertexData=o,this.polyCount=a,this.sceneObjectMatrix=x()}return e.prototype.draw=function(e,n,t,r,o,a){var i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i);var s,c,l,u,d,h,p,f,m,g,b,w,v,y=e.getUniformLocation(n,"u_matrix"),x=M(t);k(x,x,this.translation),S(x,x,this.rotation[0]),C(x,x,this.rotation[1]),s=x,c=x,l=this.rotation[2],u=Math.sin(l),d=Math.cos(l),h=c[0],p=c[1],f=c[2],m=c[3],g=c[4],b=c[5],w=c[6],v=c[7],c!==s&&(s[8]=c[8],s[9]=c[9],s[10]=c[10],s[11]=c[11],s[12]=c[12],s[13]=c[13],s[14]=c[14],s[15]=c[15]),s[0]=h*d+g*u,s[1]=p*d+b*u,s[2]=f*d+w*u,s[3]=m*d+v*u,s[4]=g*d-h*u,s[5]=b*d-p*u,s[6]=w*d-f*u,s[7]=v*d-m*u,function(e,n,t){var r=t[0],o=t[1],a=t[2];e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=n[3]*r,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=n[7]*o,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=n[11]*a,e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15]}(x,x,this.scale);var A=M(this.viewMatrix);!function(e,n,t){var r=n[0],o=n[1],a=n[2],i=n[3],s=n[4],c=n[5],l=n[6],u=n[7],d=n[8],h=n[9],p=n[10],f=n[11],m=n[12],g=n[13],b=n[14],w=n[15],v=t[0],y=t[1],x=t[2],M=t[3];e[0]=v*r+y*s+x*d+M*m,e[1]=v*o+y*c+x*h+M*g,e[2]=v*a+y*l+x*p+M*b,e[3]=v*i+y*u+x*f+M*w,v=t[4],y=t[5],x=t[6],M=t[7],e[4]=v*r+y*s+x*d+M*m,e[5]=v*o+y*c+x*h+M*g,e[6]=v*a+y*l+x*p+M*b,e[7]=v*i+y*u+x*f+M*w,v=t[8],y=t[9],x=t[10],M=t[11],e[8]=v*r+y*s+x*d+M*m,e[9]=v*o+y*c+x*h+M*g,e[10]=v*a+y*l+x*p+M*b,e[11]=v*i+y*u+x*f+M*w,v=t[12],y=t[13],x=t[14],M=t[15],e[12]=v*r+y*s+x*d+M*m,e[13]=v*o+y*c+x*h+M*g,e[14]=v*a+y*l+x*p+M*b,e[15]=v*i+y*u+x*f+M*w}(A,x,this.viewMatrix);var R=e.getUniformLocation(n,"u_intensity");e.uniform1f(R,r);var E=e.getUniformLocation(n,"u_lightPosition");e.uniform3fv(E,o);var F=e.getAttribLocation(n,"a_position");this.setFigure(e,this.vertexData),e.uniformMatrix4fv(y,!1,A),e.enableVertexAttribArray(F),e.vertexAttribPointer(F,3,e.FLOAT,!1,32,0);var P=e.getAttribLocation(n,"a_textcoord");e.enableVertexAttribArray(P),e.vertexAttribPointer(P,2,e.FLOAT,!1,32,12);var T=e.getAttribLocation(n,"a_normal");e.enableVertexAttribArray(T),e.vertexAttribPointer(T,3,e.FLOAT,!1,32,20);var L=a;e.drawArrays(L,0,3*this.polyCount)},e.prototype.setFigure=function(e,n){e.bufferData(e.ARRAY_BUFFER,new Float32Array(n),e.STATIC_DRAW)},e}();const R=function(){function e(e,n,t){var r=this;this.sceneObjects=[],this.polyCount=0,this.camPosition=a(0,0,4),this.camRotation=a(0,0,0),this.targetPosition=a(0,0,0),this.zoomLevel=5,this.delta=0,this.lightIntensity=1.5,this.lightPosition=a(0,0,100),this.imageLoaded=!1,this.mouseMode=0,this.width=e,this.height=n,this.then=0;var s=document.querySelector("#renderer");s.width=s.clientWidth,s.height=s.clientHeight;var c=s.getContext("webgl");if(c){var l=c.canvas.clientWidth/c.canvas.clientHeight;this.computeCameraMatrix(a(0,0,0));var u=x();(function(e,n,t,r,o){var a,i=1/Math.tan(n/2);e[0]=i/t,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=i,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,null!=o&&o!==1/0?(a=1/(r-o),e[10]=(o+r)*a,e[14]=2*o*r*a):(e[10]=-1,e[14]=-2*r)})(u,2*Math.PI/3,l,.001,2e3),this.perspectiveMatrix=u,this.gl=c,this.initProgram("toonVertexShader","toonFragmentShader"),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.drawMode=this.gl.TRIANGLES;var d=this.gl.getUniformLocation(this.program,"u_texture"),h=c.createTexture(),p=new Image;p.src=t,p.addEventListener("load",(function(){r.gl.bindTexture(r.gl.TEXTURE_2D,h),r.gl.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,p),c.generateMipmap(c.TEXTURE_2D),r.gl.uniform1i(d,0),r.imageLoaded=!0})),document.onkeydown=function(e){var n=e.key;switch(e.preventDefault(),n){case"1":r.drawMode=r.gl.TRIANGLES;break;case"2":r.drawMode=r.gl.POINTS;break;case"3":r.drawMode=r.gl.LINES;break;case"z":r.zoomLevel>0&&(r.computeCameraMatrix(a(0,0,-.5)),r.zoomLevel-=1);break;case"x":r.zoomLevel<10&&(r.computeCameraMatrix(a(0,0,.5)),r.zoomLevel+=1);break;case"m":var t=document.getElementById("audio");t.muted=!t.muted;break;case"w":r.targetPosition[1]+=4*r.delta,r.computeCameraMatrix(a(0,4*r.delta,0));break;case"s":r.targetPosition[1]-=4*r.delta,r.computeCameraMatrix(a(0,-4*r.delta,0));break;case"d":i(r.lightPosition,r.lightPosition,a(0,0,0),4*r.delta);break;case"a":i(r.lightPosition,r.lightPosition,a(0,0,0),-4*r.delta);break;case"ArrowRight":r.camRotation[1]-=4*r.delta,r.computeCameraMatrix(o());break;case"ArrowLeft":r.camRotation[1]+=4*r.delta,r.computeCameraMatrix(o());break;case"ArrowUp":r.camRotation[0]-=4*r.delta,r.computeCameraMatrix(o());break;case"ArrowDown":r.camRotation[0]+=4*r.delta,r.computeCameraMatrix(o())}},document.getElementById("renderer").onclick=function(){r.mouseMode++;var e=document.getElementById("mouse-mode");1===r.mouseMode&&(e.innerHTML="Mouse Mode: Rotate X"),2===r.mouseMode&&(e.innerHTML="Mouse Mode: Rotate Y"),3==r.mouseMode&&(e.innerHTML="Mouse Mode: OFF (Click To Switch)",r.mouseMode=0)},document.onmousemove=function(e){r.mouseMode&&e.pageY>60&&(e.pageX>r.prevMouseX&&1==r.mouseMode?r.camRotation[1]+=4*r.delta:e.pageX<r.prevMouseX&&1==r.mouseMode?r.camRotation[1]-=4*r.delta:e.pageY>r.prevMouseY&&2==r.mouseMode?(r.targetPosition[1]+=4*r.delta,r.computeCameraMatrix(a(0,4*r.delta,0))):e.pageY<r.prevMouseY&&2==r.mouseMode&&(r.targetPosition[1]-=4*r.delta,r.computeCameraMatrix(a(0,-4*r.delta,0))),r.prevMouseX=e.pageX,r.prevMouseY=e.pageY)},document.onwheel=function(e){e.deltaY>0?r.computeCameraMatrix(a(0,0,-1*r.delta)):e.deltaY<0&&r.computeCameraMatrix(a(0,0,1*r.delta))}}else alert("No webgl support available")}return e.prototype.computeCameraMatrix=function(e){var t=x();k(t,t,this.camPosition),k(t,t,e);var r,o,i,s,c,l,u,d,h,p,f,m,g,b,w,v,y,A,R,E,F,P,T,L=a(t[12],t[13],t[14]);if(!(L[2]<=0||L[2]>=10)){this.camPosition=L,r=t,o=L,i=this.targetPosition,s=a(0,1,0),w=o[0],v=o[1],y=o[2],A=s[0],R=s[1],E=s[2],F=i[0],P=i[1],T=i[2],Math.abs(w-F)<n&&Math.abs(v-P)<n&&Math.abs(y-T)<n?function(e){e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1}(r):(f=w-F,m=v-P,g=y-T,c=R*(g*=b=1/Math.hypot(f,m,g))-E*(m*=b),l=E*(f*=b)-A*g,u=A*m-R*f,(b=Math.hypot(c,l,u))?(c*=b=1/b,l*=b,u*=b):(c=0,l=0,u=0),d=m*u-g*l,h=g*c-f*u,p=f*l-m*c,(b=Math.hypot(d,h,p))?(d*=b=1/b,h*=b,p*=b):(d=0,h=0,p=0),r[0]=c,r[1]=d,r[2]=f,r[3]=0,r[4]=l,r[5]=h,r[6]=m,r[7]=0,r[8]=u,r[9]=p,r[10]=g,r[11]=0,r[12]=-(c*w+l*v+u*y),r[13]=-(d*w+h*v+p*y),r[14]=-(f*w+m*v+g*y),r[15]=1),S(t,t,this.camRotation[0]),C(t,t,this.camRotation[1]),this.viewMatrix=t;for(var I=0,z=this.sceneObjects;I<z.length;I++)z[I].viewMatrix=M(this.viewMatrix)}},e.prototype.createObj=function(e,n,t,r){for(var o=[],a=0,i=e.faces;a<i.length;a++){for(var s=i[a],c=0;c<3;c++){var l=e.vertices[s[c][0]-1];o.push(l[0]),o.push(l[1]),o.push(l[2]);var u=e.texRecords[s[c][1]-1];o.push(u[0]),o.push(u[1]);var d=e.normals[s[c][2]-1];o.push(d[0]),o.push(d[1]),o.push(d[2])}if(this.polyCount+=1,4===s.length){this.polyCount+=1;for(var h=0,p=[0,2,3];h<p.length;h++)c=p[h],l=e.vertices[s[c][0]-1],o.push.apply(o,l),u=e.texRecords[s[c][1]-1],o.push.apply(o,u),d=e.normals[s[c][2]-1],o.push.apply(o,d)}}var f=new A(n,t,r,M(this.viewMatrix),o,this.polyCount);this.sceneObjects.push(f)},e.prototype.draw=function(e){var n=this;if(this.imageLoaded){e*=.001,this.delta=e-this.then,this.gl.enable(this.gl.CULL_FACE),this.gl.enable(this.gl.DEPTH_TEST),this.gl.clearColor(0,0,0,.9),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.computeCameraMatrix(o());var t=this.gl.getUniformLocation(this.program,"u_time");this.gl.uniform1f(t,e);for(var r=0,a=this.sceneObjects;r<a.length;r++)a[r].draw(this.gl,this.program,M(this.perspectiveMatrix),this.lightIntensity,this.lightPosition,this.drawMode);this.then=e}requestAnimationFrame((function(e){return n.draw(e)}))},e.prototype.initProgram=function(e,n){var t=document.querySelector("#".concat(e)).text,r=document.querySelector("#".concat(n)).text,o=this.createShader(this.gl,this.gl.VERTEX_SHADER,t),a=this.createShader(this.gl,this.gl.FRAGMENT_SHADER,r),i=this.createProgram(this.gl,o,a);this.gl.useProgram(i),this.program=i},e.prototype.createShader=function(e,n,t){var r=e.createShader(n);if(e.shaderSource(r,t),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS))return r;console.error(e.getShaderInfoLog(r)),e.deleteShader(r)},e.prototype.setFigure=function(e,n){e.bufferData(e.ARRAY_BUFFER,new Float32Array(n),e.STATIC_DRAW)},e.prototype.createProgram=function(e,n,t){var r=e.createProgram();if(e.attachShader(r,n),e.attachShader(r,t),e.linkProgram(r),e.getProgramParameter(r,e.LINK_STATUS))return r;console.error(e.getProgramInfoLog(r)),e.deleteProgram(r)},e}();var E,F;F=function(){var n,t,r,o,i,s,c,l,u,d,h;return function(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}(this,(function(p){switch(p.label){case 0:return document.getElementById("mouse-mode").innerHTML="Mouse Mode: OFF (Click To Switch)",n=new URL(window.location.href),t=n.searchParams.get("model")||null,(r=document.getElementById("modelSelect")).value=t,[4,e.fromFile("".concat(t,".obj"))];case 1:return o=p.sent(),i=[],s="","face"===t?(s="model.bmp",i.push(a(0,0,0),a(0,0,0),a(1,1,1))):"cat2"===t?(s="cat.jpg",i.push(a(0,0,0),a(0,0,0),a(.05,.05,.05))):"temple"===t?(s="temple.png",i.push(a(0,0,-.2),a(0,0,0),a(.01,.01,.01))):"lantern"===t?(s="lantern.jpg",i.push(a(0,0,0),a(0,0,0),a(.01,.01,.01))):"fish"===t?(s="fish.jpg",i.push(a(0,0,0),a(0,0,0),a(.4,.4,.4))):"baloon"===t&&(s="baloon.jpg",i.push(a(0,0,0),a(0,0,0),a(.4,.4,.4))),(c=new R(1,1,s)).createObj(o,i[0],i[1],i[2]),l=document.getElementById("toonShader"),u=document.getElementById("wavyShader"),d=document.getElementById("lineShader"),h=document.getElementById("noiseShader"),r.addEventListener("change",(function(){var e=new URL(window.location.href);e.searchParams.set("model",r.value),location.replace(e.href)})),l.addEventListener("click",(function(){c.initProgram("toonVertexShader","toonFragmentShader")})),u.addEventListener("click",(function(){c.initProgram("wavyVertexShader","phongFragmentShader")})),d.addEventListener("click",(function(){c.initProgram("toonVertexShader","lineFragmentShader")})),h.addEventListener("click",(function(){c.initProgram("toonVertexShader","noiseShaderFragmentShader")})),requestAnimationFrame((function(e){return c.draw(e)})),[2]}}))},new((E=void 0)||(E=Promise))((function(e,n){function t(e){try{o(F.next(e))}catch(e){n(e)}}function r(e){try{o(F.throw(e))}catch(e){n(e)}}function o(n){var o;n.done?e(n.value):(o=n.value,o instanceof E?o:new E((function(e){e(o)}))).then(t,r)}o((F=F.apply(void 0,[])).next())}))})()})();