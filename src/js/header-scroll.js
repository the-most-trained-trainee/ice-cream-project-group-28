const headerEL = document.querySelector("header");
const headerNavHome = document.querySelector("a[data-color]");
const headerNavLinksEL = document.querySelectorAll(".header__nav-link");

window.addEventListener("scroll", makeHeaderFixed);

function makeHeaderFixed() {
    if (window.scrollY !== 0) {
        headerEL.classList.remove("header");
        headerEL.classList.add("header__scroll");
    } else {
        headerNavLinksEL.forEach(el => el.classList.remove("header__scroll-current"));
        headerNavHome.classList.add("header__scroll-current");
        
        headerEL.classList.add("header");
        headerEL.classList.remove("header__scroll");
    }
}