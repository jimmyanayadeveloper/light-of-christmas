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
