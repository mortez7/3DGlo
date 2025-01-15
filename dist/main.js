(()=>{"use strict";(()=>{const e=document.getElementById("timer-hours"),t=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds"),a=()=>{const a=(()=>{const e=(new Date("10 january 2025").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();e.textContent=a.hours.toString().padStart(2,"0"),t.textContent=a.minutes.toString().padStart(2,"0"),r.textContent=a.seconds.toString().padStart(2,"0"),a.timeRemaining<=0&&(clearInterval(l),e.textContent="00",t.textContent="00",r.textContent="00")},l=setInterval(a,1e3);a()})(),(()=>{const e=document.querySelector("menu"),t=()=>{e.classList.toggle("active-menu")},r=e=>{const t=e.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth"})};document.addEventListener("click",(a=>{a.target.closest(".menu")||a.target.classList.contains("close-btn")?t():a.target.closest("menu")&&a.target.closest("a")?(a.preventDefault(),r(a.target),t()):a.target.closest('[href="#service-block"]')?(a.preventDefault(),r(a.target.closest('[href="#service-block"]'))):a.target.closest("main")&&!a.target.closest("menu")&&e.classList.remove("active-menu")}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),r=e.querySelector(".popup-content"),a=r.querySelector(".main-form"),l=a.querySelector(".form-name"),n=a.querySelector(".form-email"),o=a.querySelector(".form-phone");let c=-300;e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none",window.innerWidth>=768&&(r.style.transform="translateX(-300%)",c=-300))})),l.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^А-Яа-яёЁ -]+/,"")})),l.addEventListener("blur",(()=>{let e=l.value;e=e.replace(/[\s+]+/g," "),e=e.replace(/-+/g,"-"),e=e.trim(),e=e.split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())).join(" "),l.value=e})),n.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^A-Za-z0-9@\-_.!~*']+/,"")})),n.addEventListener("blur",(()=>{let e=n.value;e=e.replace(/-+/g,"-"),n.value=e})),o.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9()\-]+/,"")})),o.addEventListener("blur",(()=>{let e=o.value;e=e.replace(/-+/g,"-"),o.value=e}));const s=()=>{c+=10,c<=0&&(r.style.transform=`translateX(${c}%)`,requestAnimationFrame(s))};t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",window.innerWidth>=768&&s()}))})),window.addEventListener("resize",(()=>{window.innerWidth<=768?r.style.transform="translateX(-10%)":r.style.transform="translateX(0%)"}))})(),((e=100)=>{const t=document.querySelector(".calc-block"),r=document.querySelector(".calc-type"),a=document.querySelector(".calc-square"),l=document.querySelector(".calc-count"),n=document.querySelector(".calc-day"),o=document.getElementById("total");t.addEventListener("input",(t=>{t.target!==r&&t.target!==a&&t.target!==l&&t.target!==n||(t.target.value=t.target.value.replace(/\D+/,""),(()=>{const t=+r.options[r.selectedIndex].value,c=+a.value;let s=0,u=1,i=1;l.value>1&&(u+=+l.value/10),n.value&&n.value<5?i=2:n.value&&n.value<10&&(i=1.5),s=r.value&&a.value?e*t*c*u*i:0,((e,t)=>{const r=+o.textContent,a=performance.now(),l=n=>{const o=n-a,c=Math.min(o/1e3,1),s=Math.round(r+(t-r)*c);e.textContent=s,c<1&&requestAnimationFrame(l)};requestAnimationFrame(l)})(o,s)})())}))})(100),(()=>{const e=document.querySelector(".main-form"),t=e.querySelector(".form-name"),r=e.querySelector(".form-email"),a=e.querySelector(".form-phone");t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^А-Яа-яёЁ -]+/,"")})),t.addEventListener("blur",(()=>{let e=t.value;e=e.replace(/[\s+]+/g," "),e=e.replace(/-+/g,"-"),e=e.trim(),e=e.split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())).join(" "),t.value=e})),r.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^A-Za-z0-9@\-_.!~*']+/,"")})),r.addEventListener("blur",(()=>{let e=r.value;e=e.replace(/-+/g,"-"),r.value=e})),a.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9()\-]+/,"")})),a.addEventListener("blur",(()=>{let e=a.value;e=e.replace(/-+/g,"-"),a.value=e}))})(),(()=>{const e=document.querySelector(".footer-form"),t=e.querySelector("#form2-name"),r=e.querySelector(".form-email"),a=e.querySelector(".form-phone"),l=e.querySelector(".mess");t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^А-Яа-яёЁ -]+/,"")})),t.addEventListener("blur",(()=>{let e=t.value;e=e.replace(/[\s+]+/g," "),e=e.replace(/-+/g,"-"),e=e.trim(),e=e.split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())).join(" "),t.value=e})),r.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^A-Za-z0-9@\-_.!~*']+/,"")})),r.addEventListener("blur",(()=>{let e=r.value;e=e.replace(/-+/g,"-"),r.value=e})),a.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9()\-]+/,"")})),a.addEventListener("blur",(()=>{let e=a.value;e=e.replace(/-+/g,"-"),a.value=e})),l.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^А-Яа-яёЁ -]+/,"")})),l.addEventListener("blur",(()=>{let e=l.value;e=e.replace(/[\s+]+/g," "),e=e.replace(/-+/g,"-"),e=e.trim(),l.value=e}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),r=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const a=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===a?(e.classList.add("active"),r[t].classList.remove("d-none")):(e.classList.remove("active"),r[t].classList.add("d-none"))}))}}))})(),((e,t,r,a,l="portfolio-item-active",n="dot-active")=>{if(!document.querySelector("."+e)||!document.querySelector("."+t))return;const o=document.querySelector("."+e),c=document.querySelectorAll("."+t),s=document.querySelector(".portfolio-dots");let u,i,d=0;const v=(e,t,r)=>{e[t].classList.remove(r)},m=(e,t,r)=>{e[t].classList.add(r)},p=()=>{v(c,d,l),v(u,d,n),d++,d>=c.length&&(d=0),m(c,d,l),m(u,d,n)},g=(e=1500)=>{i=setInterval(p,e)};o.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(`.${r}, .${a}`)&&(v(c,d,l),v(u,d,n),e.target.matches("#arrow-right")?d++:e.target.matches("#arrow-left")?d--:e.target.classList.contains(r)&&u.forEach(((t,r)=>{e.target===t&&(d=r)})),d>=c.length&&(d=0),d<0&&(d=c.length-1),m(c,d,l),m(u,d,n))})),o.addEventListener("mouseenter",(e=>{e.target.matches(`.${r}, .${a}`)&&clearInterval(i)}),!0),o.addEventListener("mouseleave",(e=>{e.target.matches(`.${r}, .${a}`)&&g(2e3)}),!0),u=(()=>{for(let e=0;e<c.length;e++){let t=document.createElement("li");0===e&&t.classList.add(n),t.classList.add(r),s.appendChild(t)}return document.querySelectorAll("."+r)})(),g(2e3)})("portfolio-content","portfolio-item","dot","portfolio-btn")})();