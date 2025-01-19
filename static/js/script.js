let currentIndex = 0;

    function nextSlide() {
        const sliderTrack = document.querySelector('.slider-track');
        const slides = document.querySelectorAll('.slider-track img');
        const totalSlides = slides.length;
        const slideWidth = slides[0].clientWidth + 10; // Adjust for margin

        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }
    }
