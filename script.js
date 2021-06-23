const carouselSlide = document.querySelector(".slide_box");
const carouselImages = document.querySelectorAll(".slide_list img");

const prevBtn = document.querySelector(".fa-angle-left");
const nextBtn = document.querySelector(".fa-angle-right");

let counter = 1;
const size = carouselImages[0].clientWidth;

// carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
  carouselSlide.style.transform = "transfrom 0.4s ease-in-out";
});

prevBtn.addEventListener('click', () => {
  carouselSlide.style.transition = "transfrom 0.4s ease-in-out";
});