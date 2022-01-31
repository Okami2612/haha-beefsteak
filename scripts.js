let menuBtn = document.querySelector("#menu_btn");
let navBar = document.querySelector(".navbar ul");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navBar.classList.toggle("active");
};

window.onscroll = () => {
  menuBtn.classList.remove("fa-times");
  navBar.classList.remove("active");
};

// Reviews slider
var swiper = new Swiper(".reviews_box", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  loopPreventsSlide: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// ------ AOS ------
AOS.init({
  duration: 800,
});