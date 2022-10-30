(()=>{"use strict";var n={576:(n,t,e)=>{e.d(t,{Z:()=>s});var r=e(81),a=e.n(r),o=e(645),i=e.n(o)()(a());i.push([n.id,'/*\n! tailwindcss v3.2.0 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted currentColor;\n          text-decoration: underline dotted currentColor;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.mx-8 {\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n.mt-8 {\n  margin-top: 2rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: flex;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.font-sans {\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n}\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}',""]);const s=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var h=[].concat(n[l]);r&&i[h[0]]||(void 0!==o&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=o),e&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=e):h[2]=e),a&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=a):h[4]="".concat(a)),t.push(h))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],h=o[l]||0,u="".concat(l," ").concat(h);o[l]=h+1;var d=e(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var f=a(p,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=e(o[i]);t[s].references--}for(var c=r(n,a),l=0;l<o.length;l++){var h=e(o[l]);0===t[h].references&&(t[h].updater(),t.splice(h,1))}o=c}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,a&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return n[r](o,o.exports,e),o.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{var n=function(){function n(n,t,e,r){this.vertices=n,this.texRecords=e,this.normals=t,this.faces=r}return n.fromFile=function(t){return e=this,r=void 0,o=function(){var e,r,a,o,i,s,c,l,h,u,d,p,f,m,b,g;return function(n,t){var e,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(n,i)}catch(n){o=[6,n],r=0}finally{e=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}(this,(function(w){switch(w.label){case 0:return[4,fetch(t)];case 1:if(!(e=w.sent()))throw new Error("Could not load obj file");return r=[],a=[],o=[],i=[],[4,e.text()];case 2:for(s=w.sent(),c=s.split("\n"),l=0,h=c;l<h.length;l++)if(0!==(u=h[l]).length)switch(d=u.split(" ")[0],p=u.split(d)[1].trim(),d){case"v":r.push(p.split(" ").map((function(n){return parseFloat(n)})));break;case"vt":o.push(p.split(" ").map((function(n){return parseFloat(n)})));break;case"vn":a.push(p.split(" ").map((function(n){return parseFloat(n)})));break;case"f":for(f=[],m=0,b=p.split(" ");m<b.length;m++)g=b[m],f.push(g.split("/").map((function(n){return parseFloat(n)})));i.push(f)}return[2,new n(r,a,o,i)]}}))},new((a=void 0)||(a=Promise))((function(n,t){function i(n){try{c(o.next(n))}catch(n){t(n)}}function s(n){try{c(o.throw(n))}catch(n){t(n)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof a?e:new a((function(n){n(e)}))).then(i,s)}c((o=o.apply(e,r||[])).next())}));var e,r,a,o},n}(),t=1e-6,r="undefined"!=typeof Float32Array?Float32Array:Array;function a(){var n=new r(3);return r!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n}function o(n,t,e){var a=new r(3);return a[0]=n,a[1]=t,a[2]=e,a}Math.random,Math.PI,Math.hypot||(Math.hypot=function(){for(var n=0,t=arguments.length;t--;)n+=arguments[t]*arguments[t];return Math.sqrt(n)}),a();var i=e(379),s=e.n(i),c=e(795),l=e.n(c),h=e(569),u=e.n(h),d=e(565),p=e.n(d),f=e(216),m=e.n(f),b=e(589),g=e.n(b),w=e(576),v={};function y(){var n=new r(16);return r!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0),n[0]=1,n[5]=1,n[10]=1,n[15]=1,n}function x(n){var t=new r(16);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function M(n,t,e){var r=t[0],a=t[1],o=t[2],i=t[3],s=t[4],c=t[5],l=t[6],h=t[7],u=t[8],d=t[9],p=t[10],f=t[11],m=t[12],b=t[13],g=t[14],w=t[15],v=e[0],y=e[1],x=e[2],M=e[3];return n[0]=v*r+y*s+x*u+M*m,n[1]=v*a+y*c+x*d+M*b,n[2]=v*o+y*l+x*p+M*g,n[3]=v*i+y*h+x*f+M*w,v=e[4],y=e[5],x=e[6],M=e[7],n[4]=v*r+y*s+x*u+M*m,n[5]=v*a+y*c+x*d+M*b,n[6]=v*o+y*l+x*p+M*g,n[7]=v*i+y*h+x*f+M*w,v=e[8],y=e[9],x=e[10],M=e[11],n[8]=v*r+y*s+x*u+M*m,n[9]=v*a+y*c+x*d+M*b,n[10]=v*o+y*l+x*p+M*g,n[11]=v*i+y*h+x*f+M*w,v=e[12],y=e[13],x=e[14],M=e[15],n[12]=v*r+y*s+x*u+M*m,n[13]=v*a+y*c+x*d+M*b,n[14]=v*o+y*l+x*p+M*g,n[15]=v*i+y*h+x*f+M*w,n}function k(n,t,e){var r,a,o,i,s,c,l,h,u,d,p,f,m=e[0],b=e[1],g=e[2];return t===n?(n[12]=t[0]*m+t[4]*b+t[8]*g+t[12],n[13]=t[1]*m+t[5]*b+t[9]*g+t[13],n[14]=t[2]*m+t[6]*b+t[10]*g+t[14],n[15]=t[3]*m+t[7]*b+t[11]*g+t[15]):(r=t[0],a=t[1],o=t[2],i=t[3],s=t[4],c=t[5],l=t[6],h=t[7],u=t[8],d=t[9],p=t[10],f=t[11],n[0]=r,n[1]=a,n[2]=o,n[3]=i,n[4]=s,n[5]=c,n[6]=l,n[7]=h,n[8]=u,n[9]=d,n[10]=p,n[11]=f,n[12]=r*m+s*b+u*g+t[12],n[13]=a*m+c*b+d*g+t[13],n[14]=o*m+l*b+p*g+t[14],n[15]=i*m+h*b+f*g+t[15]),n}function S(n,t,e){var r=e[0],a=e[1],o=e[2];return n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n[3]=t[3]*r,n[4]=t[4]*a,n[5]=t[5]*a,n[6]=t[6]*a,n[7]=t[7]*a,n[8]=t[8]*o,n[9]=t[9]*o,n[10]=t[10]*o,n[11]=t[11]*o,n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function C(n,t,e){var r=Math.sin(e),a=Math.cos(e),o=t[4],i=t[5],s=t[6],c=t[7],l=t[8],h=t[9],u=t[10],d=t[11];return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n[4]=o*a+l*r,n[5]=i*a+h*r,n[6]=s*a+u*r,n[7]=c*a+d*r,n[8]=l*a-o*r,n[9]=h*a-i*r,n[10]=u*a-s*r,n[11]=d*a-c*r,n}function A(n,t,e){var r=Math.sin(e),a=Math.cos(e),o=t[0],i=t[1],s=t[2],c=t[3],l=t[8],h=t[9],u=t[10],d=t[11];return t!==n&&(n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n[0]=o*a-l*r,n[1]=i*a-h*r,n[2]=s*a-u*r,n[3]=c*a-d*r,n[8]=o*r+l*a,n[9]=i*r+h*a,n[10]=s*r+u*a,n[11]=c*r+d*a,n}function R(n,t,e){var r=Math.sin(e),a=Math.cos(e),o=t[0],i=t[1],s=t[2],c=t[3],l=t[4],h=t[5],u=t[6],d=t[7];return t!==n&&(n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n[0]=o*a+l*r,n[1]=i*a+h*r,n[2]=s*a+u*r,n[3]=c*a+d*r,n[4]=l*a-o*r,n[5]=h*a-i*r,n[6]=u*a-s*r,n[7]=d*a-c*r,n}v.styleTagTransform=g(),v.setAttributes=p(),v.insert=u().bind(null,"head"),v.domAPI=l(),v.insertStyleElement=m(),s()(w.Z,v),w.Z&&w.Z.locals&&w.Z.locals;var E=function(n,t,e,r,a){this.translation=n,this.rotation=t,this.scale=e,this.viewMatrix=r,this.vertexData=a,this.sceneObjectMatrix=y(),k(this.sceneObjectMatrix,this.sceneObjectMatrix,this.translation),C(this.sceneObjectMatrix,this.sceneObjectMatrix,this.rotation[0]),A(this.sceneObjectMatrix,this.sceneObjectMatrix,this.rotation[1]),R(this.sceneObjectMatrix,this.sceneObjectMatrix,this.rotation[2]),S(this.sceneObjectMatrix,this.sceneObjectMatrix,this.scale),M(this.sceneObjectMatrix,this.sceneObjectMatrix,this.viewMatrix)};const z=function(){function n(n,t){var e=this;this.sceneObjects=[],this.polyCount=0,this.camPosition=o(0,0,5),this.camRotation=o(0,0,0),this.targetPosition=o(0,0,0),this.zoomLevel=5,this.width=n,this.height=t,this.then=0;var r=document.querySelector("#renderer");r.width=r.clientWidth,r.height=r.clientHeight;var i=r.getContext("webgl");if(i){var s=i.canvas.clientWidth/i.canvas.clientHeight;this.computeCameraMatrix(o(0,0,0));var c=y();(function(n,t,e,r,a){var o,i=1/Math.tan(t/2);n[0]=i/e,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=i,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,null!=a&&a!==1/0?(o=1/(r-a),n[10]=(a+r)*o,n[14]=2*a*r*o):(n[10]=-1,n[14]=-2*r)})(c,2*Math.PI/3,s,.001,2e3),this.perspectiveMatrix=c,this.gl=i,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.initProgram(this.gl),this.drawMode=this.gl.TRIANGLES;var l=this.gl.getUniformLocation(this.program,"u_texture"),h=i.createTexture(),u=new Image;u.src="model.bmp",u.addEventListener("load",(function(){e.gl.bindTexture(e.gl.TEXTURE_2D,h),e.gl.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,u),i.generateMipmap(i.TEXTURE_2D),e.gl.uniform1i(l,0)})),document.onkeydown=function(n){switch(n.key){case"1":e.drawMode=e.gl.TRIANGLES;break;case"2":e.drawMode=e.gl.POINTS;break;case"3":e.drawMode=e.gl.LINES;break;case"z":e.zoomLevel>0&&(e.computeCameraMatrix(o(0,0,-.5)),e.zoomLevel-=1);break;case"x":e.zoomLevel<10&&(e.computeCameraMatrix(o(0,0,.5)),e.zoomLevel+=1);break;case"w":e.targetPosition[1]+=.5,e.computeCameraMatrix(o(0,.5,0));break;case"s":e.targetPosition[1]-=.5,e.computeCameraMatrix(o(0,-.5,0));break;case"ArrowRight":e.camRotation[1]-=.1,e.computeCameraMatrix(a());break;case"ArrowLeft":e.camRotation[1]+=.1,e.computeCameraMatrix(a());break;case"ArrowUp":e.camRotation[0]-=.1,e.computeCameraMatrix(a());break;case"ArrowDown":e.camRotation[0]+=.1,e.computeCameraMatrix(a())}}}}return n.prototype.computeCameraMatrix=function(n){var e=y();k(e,e,this.camPosition),k(e,e,n);var r,a,i,s,c,l,h,u,d,p,f,m,b,g,w,v,x,M,S,R,E,z,T,F=o(e[12],e[13],e[14]);this.camPosition=F,r=e,a=F,i=this.targetPosition,s=o(0,1,0),w=a[0],v=a[1],x=a[2],M=s[0],S=s[1],R=s[2],E=i[0],z=i[1],T=i[2],Math.abs(w-E)<t&&Math.abs(v-z)<t&&Math.abs(x-T)<t?function(n){n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1}(r):(f=w-E,m=v-z,b=x-T,c=S*(b*=g=1/Math.hypot(f,m,b))-R*(m*=g),l=R*(f*=g)-M*b,h=M*m-S*f,(g=Math.hypot(c,l,h))?(c*=g=1/g,l*=g,h*=g):(c=0,l=0,h=0),u=m*h-b*l,d=b*c-f*h,p=f*l-m*c,(g=Math.hypot(u,d,p))?(u*=g=1/g,d*=g,p*=g):(u=0,d=0,p=0),r[0]=c,r[1]=u,r[2]=f,r[3]=0,r[4]=l,r[5]=d,r[6]=m,r[7]=0,r[8]=h,r[9]=p,r[10]=b,r[11]=0,r[12]=-(c*w+l*v+h*x),r[13]=-(u*w+d*v+p*x),r[14]=-(f*w+m*v+b*x),r[15]=1),C(e,e,this.camRotation[0]),A(e,e,this.camRotation[1]),this.viewMatrix=e},n.prototype.createObj=function(n,t,e,r){for(var a=[],o=0,i=n.faces;o<i.length;o++){for(var s=i[o],c=0;c<3;c++){var l=n.vertices[s[c][0]-1];a.push(l[0]),a.push(l[1]),a.push(l[2]);var h=n.texRecords[s[c][1]-1];a.push(h[0]),a.push(h[1]);var u=n.normals[s[c][2]-1];a.push(u[0]),a.push(u[1]),a.push(u[2])}if(this.polyCount+=1,4===s.length){this.polyCount+=1;for(var d=0,p=[0,2,3];d<p.length;d++)c=p[d],l=n.vertices[s[c][0]-1],a.push.apply(a,l),h=n.texRecords[s[c][1]-1],a.push.apply(a,h),u=n.normals[s[c][2]-1],a.push.apply(a,u)}}var f=new E(t,e,r,this.viewMatrix,a);this.sceneObjects.push(f)},n.prototype.draw=function(n){var t=this;n*=.001,this.then,this.gl.enable(this.gl.CULL_FACE),this.gl.enable(this.gl.DEPTH_TEST),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT);for(var e=0,r=this.sceneObjects;e<r.length;e++){var a=r[e],o=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,o);var i=this.gl.getUniformLocation(this.program,"u_matrix"),s=x(this.perspectiveMatrix);k(s,s,a.translation),C(s,s,a.rotation[0]),A(s,s,a.rotation[1]),R(s,s,a.rotation[2]),S(s,s,a.scale);var c=x(this.viewMatrix);M(c,s,this.viewMatrix);var l=this.gl.getAttribLocation(this.program,"a_position");this.setFigure(this.gl,a.vertexData),this.gl.uniformMatrix4fv(i,!1,c),this.gl.enableVertexAttribArray(l),this.gl.vertexAttribPointer(l,3,this.gl.FLOAT,!1,32,0);var h=this.gl.getAttribLocation(this.program,"a_textcoord");this.gl.enableVertexAttribArray(h),this.gl.vertexAttribPointer(h,2,this.gl.FLOAT,!1,32,12);var u=this.drawMode;this.gl.drawArrays(u,0,3*this.polyCount)}this.then=n,requestAnimationFrame((function(n){return t.draw(n)}))},n.prototype.initProgram=function(n){var t=document.querySelector("#vertex-shader-2d").text,e=document.querySelector("#fragment-shader-2d").text,r=this.createShader(n,n.VERTEX_SHADER,t),a=this.createShader(n,n.FRAGMENT_SHADER,e),o=this.createProgram(n,r,a);n.useProgram(o),this.program=o},n.prototype.createShader=function(n,t,e){var r=n.createShader(t);if(n.shaderSource(r,e),n.compileShader(r),n.getShaderParameter(r,n.COMPILE_STATUS))return r;console.error(n.getShaderInfoLog(r)),n.deleteShader(r)},n.prototype.setFigure=function(n,t){n.bufferData(n.ARRAY_BUFFER,new Float32Array(t),n.STATIC_DRAW)},n.prototype.createProgram=function(n,t,e){var r=n.createProgram();if(n.attachShader(r,t),n.attachShader(r,e),n.linkProgram(r),n.getProgramParameter(r,n.LINK_STATUS))return r;console.error(n.getProgramInfoLog(r)),n.deleteProgram(r)},n}();var T,F;F=function(){var t,e;return function(n,t){var e,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(n,i)}catch(n){o=[6,n],r=0}finally{e=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}(this,(function(r){switch(r.label){case 0:return[4,n.fromFile("face.obj")];case 1:return t=r.sent(),(e=new z(1,1)).createObj(t,o(0,0,0),o(0,0,0),o(2,2,1)),requestAnimationFrame((function(n){return e.draw(n)})),[2]}}))},new((T=void 0)||(T=Promise))((function(n,t){function e(n){try{a(F.next(n))}catch(n){t(n)}}function r(n){try{a(F.throw(n))}catch(n){t(n)}}function a(t){var a;t.done?n(t.value):(a=t.value,a instanceof T?a:new T((function(n){n(a)}))).then(e,r)}a((F=F.apply(void 0,[])).next())}))})()})();