const e=document.querySelector(".feedback-form");console.log(e),e.addEventListener("click",(function(e){e.preventDefault();const t=e.currentTarget.elements;if(console.log(t),console.dir(e.target),"email"!==e.target.type)return;if(console.log(e.target.value),"TEXTAREA"!==e.target.nodeName)return;console.log(e.target.value)}));
//# sourceMappingURL=03-feedback.7218accc.js.map
