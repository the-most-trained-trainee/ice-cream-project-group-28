(()=>{const e=document.querySelector(".header__menu--js"),t=document.querySelector(".js-open"),s=document.querySelector(".js-close"),n=document.querySelectorAll(".link-close-menu"),c=()=>{const s="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!s),e.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")};t.addEventListener("click",c),s.addEventListener("click",c);const o=()=>{e.classList.contains("is-open")&&(e.classList.remove("is-open"),document.body.classList.remove("no-scroll"))};n.forEach((e=>{e.addEventListener("click",o)})),window.matchMedia("(min-width: 1200px)").addEventListener("change",(s=>{s.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))}))})();
//# sourceMappingURL=index.f638d70f.js.map
