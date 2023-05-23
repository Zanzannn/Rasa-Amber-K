const hamburger = document.querySelector(".header-navbar-hamburger");
const navMenu = document.querySelector(".header-navbar-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".eader-navbar-menu-item-link").forEach(n => n.addEventListener('click', () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))