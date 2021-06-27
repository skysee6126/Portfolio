const carouselSlide = document.querySelector(".slide_box");
const carouselImages = document.querySelector(".slide_list");
const numberOfImages = document.querySelectorAll(".slide_list img").length;

const Btn = document.querySelectorAll(".btn");

let imgIndex = 1;
let translateX = 0;


Btn.forEach(button => {
  button.addEventListener('click', event => {
    if (event.target.class === 'fa-angle-left') {
      if (imgIndex !== 1) {
        imgIndex--;
        translateX += 500;
      }
    } else {
      if (imgIndex !== numberOfImages) {
        imgIndex++;
        translateX -= 500;
      }
    }
    carouselImages.style.transform = `translateX(${translateX}px)`;
  });
});
