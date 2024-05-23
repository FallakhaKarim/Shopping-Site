let slideIndex = 1;
let slideTimer;

showSlides(slideIndex);
startTimer();

function plusSlides(n) {
  clearTimeout(slideTimer);
  showSlides(slideIndex += n);
  startTimer();
}

function showSlides(n) {
  let slides = document.getElementsByClassName("intro-box");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  // Remove active class from all slides (animation will handle visibility)
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  // Add active class to the current slide (triggers animation)
  slides[slideIndex - 1].classList.add("active");
}

function startTimer() {
  slideTimer = setTimeout(autoSlide, 8000); // Start the timer again after 5 seconds
}

// Function to automatically change slides every 5 seconds
function autoSlide() {
  plusSlides(1); // Simulate a click on the next arrow
}
