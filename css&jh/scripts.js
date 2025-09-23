let currentSlide = 0;
let autoSlideInterval = null;
const slideInterval = 12000; // 12 segundos por diapositiva
let totalSlides = 0;

function updateSlider(transition = true) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    totalSlides = slides.length;

    // Ajustar para bucle infinito
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
        slider.style.transition = 'none';
        slider.style.transform = `translateX(0%)`;
        setTimeout(() => {
            slider.style.transition = 'transform 0.5s ease-in-out';
            updateSlider();
        }, 50);
        return;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    if (transition) {
        slider.style.transition = 'transform 0.5s ease-in-out';
    }
    slider.style.transform = `translateX(${-currentSlide * 100}%)`;

    // Actualizar puntos
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function moveSlide(direction) {
    clearInterval(autoSlideInterval);
    currentSlide += direction;
    updateSlider();
    startAutoSlide();
}

function jumpToSlide(index) {
    clearInterval(autoSlideInterval);
    currentSlide = index;
    updateSlider();
    startAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentSlide++;
        updateSlider();
    }, slideInterval);
}

// Configurar puntos y clonar primera diapositiva para bucle
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    totalSlides = slides.length;
    const slider = document.querySelector('.slider');
    const dotsContainer = document.querySelector('.dots');

    // Generar puntos
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => jumpToSlide(index));
        dotsContainer.appendChild(dot);
    });

    // Clonar la primera diapositiva para el bucle
    const firstSlideClone = slides[0].cloneNode(true);
    firstSlideClone.classList.add('clone');
    slider.appendChild(firstSlideClone);

    // Iniciar carrusel
    startAutoSlide();
});

// Pausar y reanudar con hover
const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
    document.querySelector('.pause-indicator').style.opacity = '1';
});
sliderContainer.addEventListener('mouseleave', () => {
    startAutoSlide();
    document.querySelector('.pause-indicator').style.opacity = '0';
});