'use strict'

const containerImages = document.querySelector('.container-images');
const punto           = document.querySelectorAll('.punto');

const carousel = document.querySelector(".lightbox__carrousel");
 
const prev = document.querySelector("#prev");
const next = document.querySelector("#next")
let imagesCarrousel;
let totalItems;
let currentIndex = 0;

prev.addEventListener("click", () => {
    imagesCarrousel = document.querySelectorAll(".lightbox__carousel-item");
    totalItems = imagesCarrousel.length;
    currentIndex = ( currentIndex - 1 + totalItems ) % totalItems;
    updateCarousel();
})

next.addEventListener("click", () => {
    imagesCarrousel = document.querySelectorAll(".lightbox__carousel-item");
    totalItems = imagesCarrousel.length;
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
})

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`    
}

// Cuando realizo CLICK en un punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al containerImages
    // Quitar la calse activo de todos los puntos
    // Añadir la clase activo al punto que hemos hecho click

punto.forEach(( cadaPunto, position ) => {
    cadaPunto.addEventListener('click', () => {

        punto.forEach(punto => punto.classList.remove('activo'));

        const operacion = position * -50

        containerImages.style.transform = `translateX(${operacion}%)`

        cadaPunto.classList.add('activo')

    })
})    