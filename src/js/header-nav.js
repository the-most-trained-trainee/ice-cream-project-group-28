const headerNavEL = document.querySelector(".header__nav-list");
const headerNavLinksEL = document.querySelectorAll(".header__nav-link");

headerNavEL.addEventListener("click", doNavigationBySections);

function doNavigationBySections(event) {
    if (event.target.nodeName !== "A") {
        return;
    }
    
    headerNavLinksEL.forEach(el => el.classList.remove("header__scroll-current"));
    event.target.classList.add("header__scroll-current");
}