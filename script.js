const slides = document.querySelectorAll(".slide");
// console.log(slides);
var counter = 0;
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
  counter === 0 ? (counter = slides.length - 1) : counter--;

  slideCards();
};
const goNext = () => {
  counter === slides.length - 1 ? (counter = 0) : counter++;
  slideCards();
};

const slideCards = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
