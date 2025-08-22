const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 1; // começamos no primeiro "real"
const slideWidth = slides[0].clientWidth;

track.style.transform = `translateX(-${slideWidth * index}px)`;

function updateSlide() {
  track.style.transition = "transform 0.6s ease-in-out";
  track.style.transform = `translateX(-${slideWidth * index}px)`;
}

function nextSlide() {
  if (index >= slides.length - 1) return;
  index++;
  updateSlide();
}

function prevSlide() {
  if (index <= 0) return;
  index--;
  updateSlide();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Reset quando chega no clone
track.addEventListener('transitionend', () => {
  if (index === slides.length - 1) {
    track.style.transition = "none";
    index = 1;
    track.style.transform = `translateX(-${slideWidth * index}px)`;
  }
  if (index === 0) {
    track.style.transition = "none";
    index = slides.length - 2;
    track.style.transform = `translateX(-${slideWidth * index}px)`;
  }
});

// Automático
setInterval(nextSlide, 5000);