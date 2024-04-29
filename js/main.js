// // Shrink Navigation Menu
const getElement = (selector) => {
  return document.querySelector(selector);
};

getElement(".header__right").addEventListener("click", () => {
  const menu = getElement(".nav__container");

  if (menu.style.display == "") {
    menu.style.display = "flex";
  }else{
    menu.style.display = "";
  }
});

$(document).ready(function () {
  const screenWidth = $(window).width();

  if (screenWidth <= 430) {
    $(".owl-carousel").owlCarousel({
      items: 1
    });
  }else{
    $(".owl-carousel").owlCarousel({
      items: 3
    });
  }
});

