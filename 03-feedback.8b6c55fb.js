function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(t,e,n){var r,o,i,f,a,u,c=0,l=!1,d=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=r,i=o;return r=o=void 0,c=e,f=t.apply(i,n)}function j(t){return c=t,a=setTimeout(w,e),l?y(t):f}function h(t){var n=t-u;return void 0===u||n>=e||n<0||d&&t-c>=i}function w(){var t=v();if(h(t))return x(t);a=setTimeout(w,function(t){var n=e-(t-u);return d?m(n,i-(t-c)):n}(t))}function x(t){return a=void 0,p&&r?y(t):(r=o=void 0,f)}function O(){var t=v(),n=h(t);if(r=arguments,o=this,u=t,n){if(void 0===a)return j(u);if(d)return a=setTimeout(w,e),y(u)}return void 0===a&&(a=setTimeout(w,e)),f}return e=b(e)||0,g(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(b(n.maxWait)||0,e):i,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=u=o=a=void 0},O.flush=function(){return void 0===a?f:x(v())},O}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=i.test(t);return n||f.test(t)?a(t.slice(2),n?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(t,e,{leading:r,maxWait:e,trailing:o})};const y={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea")},j={};y.form.addEventListener("submit",(function(t){t.preventDefault(),t.target.reset(),localStorage.removeItem("feedback-form-state")})),y.form.addEventListener("input",t(e)((function(t){j[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j)),function(t){const e=JSON.parse(localStorage.getItem("feedback-form-state"));t.target.value=e}(t)}),500));
//# sourceMappingURL=03-feedback.8b6c55fb.js.map
