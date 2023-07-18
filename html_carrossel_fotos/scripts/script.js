const carousel = document.querySelector('.carousel');
const slide = carousel.querySelector('.carousel-slide');
const prevButton = carousel.querySelector('.prev');
const nextButton = carousel.querySelector('.next');
const images = slide.querySelectorAll('img');

let currentIndex = 0;

function goToSlide(index) {
  slide.style.transform = `translateX(-${index * 100}%)`;
}

function goToNextSlide() {
  currentIndex++;
  if (currentIndex === images.length) {
    currentIndex = 0;
  }
  goToSlide(currentIndex);
}

function goToPrevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  goToSlide(currentIndex);
}

nextButton.addEventListener('click', goToNextSlide);
prevButton.addEventListener('click', goToPrevSlide);
