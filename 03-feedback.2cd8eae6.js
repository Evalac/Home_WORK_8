!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,p=function(){return s.Date.now()};function g(e,t,n){var r,i,f,a,u,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function O(e){return l=e,u=setTimeout(h,t),d?g(e):a}function S(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=f}function h(){var e=p();if(S(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-c);return s?b(n,f-(e-l)):n}(e))}function w(e){return u=void 0,v&&r?g(e):(r=i=void 0,a)}function T(){var e=p(),n=S(e);if(r=arguments,i=this,c=e,n){if(void 0===u)return O(c);if(s)return u=setTimeout(h,t),g(c)}return void 0===u&&(u=setTimeout(h,t)),a}return t=j(t)||0,y(n)&&(d=!!n.leading,f=(s="maxWait"in n)?m(j(n.maxWait)||0,t):f,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=i=u=void 0},T.flush=function(){return void 0===u?a:w(p())},T}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||u.test(t)?c(t.slice(2),o?2:8):f.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};var O={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea")},S={};O.form.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem("feedback-form-state")})),O.form.addEventListener("input",e(t)((function(e){S[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S)),function(e){var t=JSON.parse(localStorage.getItem("feedback-form-state"));e.target.value=t}(e)}),500))}();
//# sourceMappingURL=03-feedback.2cd8eae6.js.map
