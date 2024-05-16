document.addEventListener('DOMContentLoaded', (event) => {
    let activeSlideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
        });

        slides[activeSlideIndex].classList.add('active');
    }

    prevButton.addEventListener('click', () => {
        activeSlideIndex = (activeSlideIndex - 1 + slides.length) % slides.length;
        updateSlides();
    });

    nextButton.addEventListener('click', () => {
        activeSlideIndex = (activeSlideIndex + 1) % slides.length;
        updateSlides();
    });

    updateSlides();
});