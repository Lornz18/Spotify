const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(" .header .header__wrapper .header__content1 .header__text");
const header = document.querySelector(".header");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headNav.classList.toggle("open");
});