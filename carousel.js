let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        // Set each slide's transform based on the index, creating a smooth sliding effect
        slide.style.transition = "transform 0.5s ease-in-out"; // Smooth transition
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Automatically switch slides every 3 seconds
setInterval(nextSlide, 3000);

// Initialize the carousel
showSlide(currentSlide);
