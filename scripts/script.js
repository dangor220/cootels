// *****************spoiler__clients*******************

const listSteps = document.querySelector(".connection__steps");
const listTitle = document.querySelectorAll(".connection__step-title");

listSteps.addEventListener("click", (e) => {
  if (e.target.classList.contains("connection__step-title")) {
    if (e.target.classList.contains("connection__step-title_active")) {
      e.target.classList.remove("connection__step-title_active");
      e.target.nextElementSibling.classList.remove(
        "connection__step-descr_show"
      );
    } else {
      listTitle.forEach((item) => {
        item.classList.remove("connection__step-title_active");
        item.nextElementSibling.classList.remove("connection__step-descr_show");
      });
      e.target.classList.add("connection__step-title_active");
      e.target.nextElementSibling.classList.add("connection__step-descr_show");
    }
  }
});

// *****************spoiler__nav*******************

const listFooterNav = document.querySelector(".footer__list");
const listTitleNav = document.querySelectorAll(".footer__list-title");

listFooterNav.addEventListener("click", (e) => {
  if (e.target.classList.contains("footer__list-title")) {
    if (e.target.classList.contains("footer__list-title_active")) {
      e.target.classList.remove("footer__list-title_active");
      e.target.nextElementSibling.classList.remove("footer__nav_show");
    } else {
      listTitleNav.forEach((item) => {
        item.classList.remove("footer__list-title_active");
        item.nextElementSibling.classList.remove("footer__nav_show");
      });
      e.target.classList.add("footer__list-title_active");
      e.target.nextElementSibling.classList.add("footer__nav_show");
    }
  }
});

// *****************slider*******************

$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1800,
  });
});

// *****************burger*******************

const burger = document.querySelector(".header__nav-burger");
const listNav = document.querySelector(".header__list");
const btnHeader = document.querySelector(".header__wrapper");
const bodyHamburger = document.querySelector("body");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  listNav.classList.toggle("active");
  btnHeader.classList.toggle("active");
  bodyHamburger.classList.toggle("active__burger");
});

listNav.addEventListener("click", (e) => {
  if (e.target.classList.contains("header__link")) {
    burger.classList.remove("active");
    listNav.classList.remove("active");
    btnHeader.classList.remove("active");
    bodyHamburger.classList.remove("active__burger");
  }
});
