(()=>{"use strict";var n={576:(n,t,e)=>{e.d(t,{Z:()=>s});var r=e(81),a=e.n(r),o=e(645),i=e.n(o)()(a());i.push([n.id,'/*\n! tailwindcss v3.2.0 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted currentColor;\n          text-decoration: underline dotted currentColor;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.mx-8 {\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n.mt-8 {\n  margin-top: 2rem;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.w-screen {\n  width: 100vw;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.rounded-sm {\n  border-radius: 0.125rem;\n}\n.bg-indigo-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(67, 56, 202, var(--tw-bg-opacity));\n}\n.bg-indigo-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(79, 70, 229, var(--tw-bg-opacity));\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.font-sans {\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.hover\\:-translate-y-1:hover {\n  --tw-translate-y: -0.25rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}',""]);const s=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],u=o[l]||0,h="".concat(l," ").concat(u);o[l]=u+1;var d=e(h),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var f=a(p,r);r.byIndex=s,t.splice(s,0,{identifier:h,updater:f,references:1})}i.push(h)}return i}function a(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=e(o[i]);t[s].references--}for(var c=r(n,a),l=0;l<o.length;l++){var u=e(o[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=c}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,a&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return n[r](o,o.exports,e),o.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{var n=function(){function n(n,t,e,r){this.vertices=n,this.texRecords=e,this.normals=t,this.faces=r}return n.fromFile=function(t){return e=this,r=void 0,o=function(){var e,r,a,o,i,s,c,l,u,h,d,p,f,m,g,b;return function(n,t){var e,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(n,i)}catch(n){o=[6,n],r=0}finally{e=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}(this,(function(w){switch(w.label){case 0:return[4,fetch(t)];case 1:if(!(e=w.sent()))throw new Error("Could not load obj file");return r=[],a=[],o=[],i=[],[4,e.text()];case 2:for(s=w.sent(),c=s.split("\n"),l=0,u=c;l<u.length;l++)if(0!==(h=u[l]).length)switch(d=h.split(" ")[0],p=h.split(d)[1].trim(),d){case"v":r.push(p.split(" ").map((function(n){return parseFloat(n)})));break;case"vt":o.push(p.split(" ").map((function(n){return parseFloat(n)})));break;case"vn":a.push(p.split(" ").map((function(n){return parseFloat(n)})));break;case"f":for(f=[],m=0,g=p.split(" ");m<g.length;m++)b=g[m],f.push(b.split("/").map((function(n){return parseFloat(n)})));i.push(f)}return[2,new n(r,a,o,i)]}}))},new((a=void 0)||(a=Promise))((function(n,t){function i(n){try{c(o.next(n))}catch(n){t(n)}}function s(n){try{c(o.throw(n))}catch(n){t(n)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof a?e:new a((function(n){n(e)}))).then(i,s)}c((o=o.apply(e,r||[])).next())}));var e,r,a,o},n}(),t=1e-6,r="undefined"!=typeof Float32Array?Float32Array:Array;function a(){var n=new r(3);return r!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n}function o(n,t,e){var a=new r(3);return a[0]=n,a[1]=t,a[2]=e,a}function i(n,t,e,r){var a=[],o=[];return a[0]=t[0]-e[0],a[1]=t[1]-e[1],a[2]=t[2]-e[2],o[0]=a[2]*Math.sin(r)+a[0]*Math.cos(r),o[1]=a[1],o[2]=a[2]*Math.cos(r)-a[0]*Math.sin(r),n[0]=o[0]+e[0],n[1]=o[1]+e[1],n[2]=o[2]+e[2],n}Math.random,Math.PI,Math.hypot||(Math.hypot=function(){for(var n=0,t=arguments.length;t--;)n+=arguments[t]*arguments[t];return Math.sqrt(n)}),a();var s=e(379),c=e.n(s),l=e(795),u=e.n(l),h=e(569),d=e.n(h),p=e(565),f=e.n(p),m=e(216),g=e.n(m),b=e(589),w=e.n(b),v=e(576),y={};function x(){var n=new r(16);return r!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0),n[0]=1,n[5]=1,n[10]=1,n[15]=1,n}function k(n){var t=new r(16);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function S(n,t,e){var r,a,o,i,s,c,l,u,h,d,p,f,m=e[0],g=e[1],b=e[2];return t===n?(n[12]=t[0]*m+t[4]*g+t[8]*b+t[12],n[13]=t[1]*m+t[5]*g+t[9]*b+t[13],n[14]=t[2]*m+t[6]*g+t[10]*b+t[14],n[15]=t[3]*m+t[7]*g+t[11]*b+t[15]):(r=t[0],a=t[1],o=t[2],i=t[3],s=t[4],c=t[5],l=t[6],u=t[7],h=t[8],d=t[9],p=t[10],f=t[11],n[0]=r,n[1]=a,n[2]=o,n[3]=i,n[4]=s,n[5]=c,n[6]=l,n[7]=u,n[8]=h,n[9]=d,n[10]=p,n[11]=f,n[12]=r*m+s*g+h*b+t[12],n[13]=a*m+c*g+d*b+t[13],n[14]=o*m+l*g+p*b+t[14],n[15]=i*m+u*g+f*b+t[15]),n}function M(n,t,e){var r=Math.sin(e),a=Math.cos(e),o=t[4],i=t[5],s=t[6],c=t[7],l=t[8],u=t[9],h=t[10],d=t[11];return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n[4]=o*a+l*r,n[5]=i*a+u*r,n[6]=s*a+h*r,n[7]=c*a+d*r,n[8]=l*a-o*r,n[9]=u*a-i*r,n[10]=h*a-s*r,n[11]=d*a-c*r,n}function A(n,t,e){var r=Math.sin(e),a=Math.cos(e),o=t[0],i=t[1],s=t[2],c=t[3],l=t[8],u=t[9],h=t[10],d=t[11];return t!==n&&(n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n[0]=o*a-l*r,n[1]=i*a-u*r,n[2]=s*a-h*r,n[3]=c*a-d*r,n[8]=o*r+l*a,n[9]=i*r+u*a,n[10]=s*r+h*a,n[11]=c*r+d*a,n}y.styleTagTransform=w(),y.setAttributes=f(),y.insert=d().bind(null,"head"),y.domAPI=u(),y.insertStyleElement=g(),c()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals;var C=function(){function n(n,t,e,r,a,o){this.polyCount=0,this.translation=n,this.rotation=t,this.scale=e,this.viewMatrix=r,this.vertexData=a,this.polyCount=o,this.sceneObjectMatrix=x()}return n.prototype.draw=function(n,t,e,r,a){var o=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,o);var i,s,c,l,u,h,d,p,f,m,g,b,w,v=n.getUniformLocation(t,"u_matrix"),y=k(e);S(y,y,this.translation),M(y,y,this.rotation[0]),A(y,y,this.rotation[1]),i=y,s=y,c=this.rotation[2],l=Math.sin(c),u=Math.cos(c),h=s[0],d=s[1],p=s[2],f=s[3],m=s[4],g=s[5],b=s[6],w=s[7],s!==i&&(i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15]),i[0]=h*u+m*l,i[1]=d*u+g*l,i[2]=p*u+b*l,i[3]=f*u+w*l,i[4]=m*u-h*l,i[5]=g*u-d*l,i[6]=b*u-p*l,i[7]=w*u-f*l,function(n,t,e){var r=e[0],a=e[1],o=e[2];n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n[3]=t[3]*r,n[4]=t[4]*a,n[5]=t[5]*a,n[6]=t[6]*a,n[7]=t[7]*a,n[8]=t[8]*o,n[9]=t[9]*o,n[10]=t[10]*o,n[11]=t[11]*o,n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]}(y,y,this.scale);var x=k(this.viewMatrix);!function(n,t,e){var r=t[0],a=t[1],o=t[2],i=t[3],s=t[4],c=t[5],l=t[6],u=t[7],h=t[8],d=t[9],p=t[10],f=t[11],m=t[12],g=t[13],b=t[14],w=t[15],v=e[0],y=e[1],x=e[2],k=e[3];n[0]=v*r+y*s+x*h+k*m,n[1]=v*a+y*c+x*d+k*g,n[2]=v*o+y*l+x*p+k*b,n[3]=v*i+y*u+x*f+k*w,v=e[4],y=e[5],x=e[6],k=e[7],n[4]=v*r+y*s+x*h+k*m,n[5]=v*a+y*c+x*d+k*g,n[6]=v*o+y*l+x*p+k*b,n[7]=v*i+y*u+x*f+k*w,v=e[8],y=e[9],x=e[10],k=e[11],n[8]=v*r+y*s+x*h+k*m,n[9]=v*a+y*c+x*d+k*g,n[10]=v*o+y*l+x*p+k*b,n[11]=v*i+y*u+x*f+k*w,v=e[12],y=e[13],x=e[14],k=e[15],n[12]=v*r+y*s+x*h+k*m,n[13]=v*a+y*c+x*d+k*g,n[14]=v*o+y*l+x*p+k*b,n[15]=v*i+y*u+x*f+k*w}(x,y,this.viewMatrix);var C=n.getUniformLocation(t,"u_intensity");n.uniform1f(C,r);var R=n.getUniformLocation(t,"u_lightPosition");n.uniform3fv(R,a);var E=n.getAttribLocation(t,"a_position");this.setFigure(n,this.vertexData),n.uniformMatrix4fv(v,!1,x),n.enableVertexAttribArray(E),n.vertexAttribPointer(E,3,n.FLOAT,!1,32,0);var F=n.getAttribLocation(t,"a_textcoord");n.enableVertexAttribArray(F),n.vertexAttribPointer(F,2,n.FLOAT,!1,32,12);var P=n.getAttribLocation(t,"a_normal");n.enableVertexAttribArray(P),n.vertexAttribPointer(P,3,n.FLOAT,!1,32,20);var T=n.TRIANGLES;n.drawArrays(T,0,3*this.polyCount)},n.prototype.setFigure=function(n,t){n.bufferData(n.ARRAY_BUFFER,new Float32Array(t),n.STATIC_DRAW)},n}();const R=function(){function n(n,t){var e=this;this.sceneObjects=[],this.polyCount=0,this.camPosition=o(0,0,5),this.camRotation=o(0,0,0),this.targetPosition=o(0,0,0),this.zoomLevel=5,this.delta=0,this.lightIntensity=1,this.lightPosition=o(0,0,100),this.width=n,this.height=t,this.then=0;var r=document.querySelector("#renderer");r.width=r.clientWidth,r.height=r.clientHeight;var s=r.getContext("webgl");if(s){var c=s.canvas.clientWidth/s.canvas.clientHeight;this.computeCameraMatrix(o(0,0,0));var l=x();(function(n,t,e,r,a){var o,i=1/Math.tan(t/2);n[0]=i/e,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=i,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,null!=a&&a!==1/0?(o=1/(r-a),n[10]=(a+r)*o,n[14]=2*a*r*o):(n[10]=-1,n[14]=-2*r)})(l,2*Math.PI/3,c,.001,2e3),this.perspectiveMatrix=l,this.gl=s,this.initProgram("toonVertexShader","toonFragmentShader"),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.drawMode=this.gl.TRIANGLES;var u=this.gl.getUniformLocation(this.program,"u_texture"),h=s.createTexture(),d=new Image;d.src="model.bmp",d.addEventListener("load",(function(){e.gl.bindTexture(e.gl.TEXTURE_2D,h),e.gl.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,d),s.generateMipmap(s.TEXTURE_2D),e.gl.uniform1i(u,0)})),document.onkeydown=function(n){var t=n.key;switch(n.preventDefault(),t){case"1":e.drawMode=e.gl.TRIANGLES;break;case"2":e.drawMode=e.gl.POINTS;break;case"3":e.drawMode=e.gl.LINES;break;case"z":e.zoomLevel>0&&(e.computeCameraMatrix(o(0,0,-.5)),e.zoomLevel-=1);break;case"x":e.zoomLevel<10&&(e.computeCameraMatrix(o(0,0,.5)),e.zoomLevel+=1);break;case"w":e.targetPosition[1]+=4*e.delta,e.computeCameraMatrix(o(0,4*e.delta,0));break;case"s":e.targetPosition[1]-=4*e.delta,e.computeCameraMatrix(o(0,-4*e.delta,0));break;case"d":i(e.lightPosition,e.lightPosition,o(0,0,0),4*e.delta);break;case"a":i(e.lightPosition,e.lightPosition,o(0,0,0),-4*e.delta);break;case"ArrowRight":e.camRotation[1]-=4*e.delta,e.computeCameraMatrix(a());break;case"ArrowLeft":e.camRotation[1]+=4*e.delta,e.computeCameraMatrix(a());break;case"ArrowUp":e.camRotation[0]-=4*e.delta,e.computeCameraMatrix(a());break;case"ArrowDown":e.camRotation[0]+=4*e.delta,e.computeCameraMatrix(a())}}}else alert("No webgl support available")}return n.prototype.computeCameraMatrix=function(n){var e=x();S(e,e,this.camPosition),S(e,e,n);var r,a,i,s,c,l,u,h,d,p,f,m,g,b,w,v,y,C,R,E,F,P,T,z=o(e[12],e[13],e[14]);this.camPosition=z,r=e,a=z,i=this.targetPosition,s=o(0,1,0),w=a[0],v=a[1],y=a[2],C=s[0],R=s[1],E=s[2],F=i[0],P=i[1],T=i[2],Math.abs(w-F)<t&&Math.abs(v-P)<t&&Math.abs(y-T)<t?function(n){n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1}(r):(f=w-F,m=v-P,g=y-T,c=R*(g*=b=1/Math.hypot(f,m,g))-E*(m*=b),l=E*(f*=b)-C*g,u=C*m-R*f,(b=Math.hypot(c,l,u))?(c*=b=1/b,l*=b,u*=b):(c=0,l=0,u=0),h=m*u-g*l,d=g*c-f*u,p=f*l-m*c,(b=Math.hypot(h,d,p))?(h*=b=1/b,d*=b,p*=b):(h=0,d=0,p=0),r[0]=c,r[1]=h,r[2]=f,r[3]=0,r[4]=l,r[5]=d,r[6]=m,r[7]=0,r[8]=u,r[9]=p,r[10]=g,r[11]=0,r[12]=-(c*w+l*v+u*y),r[13]=-(h*w+d*v+p*y),r[14]=-(f*w+m*v+g*y),r[15]=1),M(e,e,this.camRotation[0]),A(e,e,this.camRotation[1]),this.viewMatrix=e;for(var L=0,I=this.sceneObjects;L<I.length;L++)I[L].viewMatrix=k(this.viewMatrix)},n.prototype.createObj=function(n,t,e,r){for(var a=[],o=0,i=n.faces;o<i.length;o++){for(var s=i[o],c=0;c<3;c++){var l=n.vertices[s[c][0]-1];a.push(l[0]),a.push(l[1]),a.push(l[2]);var u=n.texRecords[s[c][1]-1];a.push(u[0]),a.push(u[1]);var h=n.normals[s[c][2]-1];a.push(h[0]),a.push(h[1]),a.push(h[2])}if(this.polyCount+=1,4===s.length){this.polyCount+=1;for(var d=0,p=[0,2,3];d<p.length;d++)c=p[d],l=n.vertices[s[c][0]-1],a.push.apply(a,l),u=n.texRecords[s[c][1]-1],a.push.apply(a,u),h=n.normals[s[c][2]-1],a.push.apply(a,h)}}var f=new C(t,e,r,k(this.viewMatrix),a,this.polyCount);this.sceneObjects.push(f)},n.prototype.draw=function(n){var t=this;n*=.001,this.delta=n-this.then,this.gl.enable(this.gl.CULL_FACE),this.gl.enable(this.gl.DEPTH_TEST),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.computeCameraMatrix(a());var e=this.gl.getUniformLocation(this.program,"u_time");this.gl.uniform1f(e,n);for(var r=0,o=this.sceneObjects;r<o.length;r++)o[r].draw(this.gl,this.program,k(this.perspectiveMatrix),this.lightIntensity,this.lightPosition);this.then=n,requestAnimationFrame((function(n){return t.draw(n)}))},n.prototype.initProgram=function(n,t){var e=document.querySelector("#".concat(n)).text,r=document.querySelector("#".concat(t)).text,a=this.createShader(this.gl,this.gl.VERTEX_SHADER,e),o=this.createShader(this.gl,this.gl.FRAGMENT_SHADER,r),i=this.createProgram(this.gl,a,o);this.gl.useProgram(i),this.program=i},n.prototype.createShader=function(n,t,e){var r=n.createShader(t);if(n.shaderSource(r,e),n.compileShader(r),n.getShaderParameter(r,n.COMPILE_STATUS))return r;console.error(n.getShaderInfoLog(r)),n.deleteShader(r)},n.prototype.setFigure=function(n,t){n.bufferData(n.ARRAY_BUFFER,new Float32Array(t),n.STATIC_DRAW)},n.prototype.createProgram=function(n,t,e){var r=n.createProgram();if(n.attachShader(r,t),n.attachShader(r,e),n.linkProgram(r),n.getProgramParameter(r,n.LINK_STATUS))return r;console.error(n.getProgramInfoLog(r)),n.deleteProgram(r)},n}();var E,F;F=function(){var t,e,r,a,i;return function(n,t){var e,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(n,i)}catch(n){o=[6,n],r=0}finally{e=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}(this,(function(s){switch(s.label){case 0:return[4,n.fromFile("face.obj")];case 1:return t=s.sent(),(e=new R(1,1)).createObj(t,o(0,0,0),o(0,0,0),o(2,2,1)),r=document.getElementById("toonShader"),a=document.getElementById("wavyShader"),i=document.getElementById("lineShader"),r.addEventListener("click",(function(){e.initProgram("toonVertexShader","toonFragmentShader")})),a.addEventListener("click",(function(){e.initProgram("wavyVertexShader","phongFragmentShader")})),i.addEventListener("click",(function(){e.initProgram("toonVertexShader","lineFragmentShader")})),requestAnimationFrame((function(n){return e.draw(n)})),[2]}}))},new((E=void 0)||(E=Promise))((function(n,t){function e(n){try{a(F.next(n))}catch(n){t(n)}}function r(n){try{a(F.throw(n))}catch(n){t(n)}}function a(t){var a;t.done?n(t.value):(a=t.value,a instanceof E?a:new E((function(n){n(a)}))).then(e,r)}a((F=F.apply(void 0,[])).next())}))})()})();