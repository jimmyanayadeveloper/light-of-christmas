'use strict'

const categories = {
    velasBaby: ['./assets/img/velababy/vela-paquete-10-small.jpeg', './assets/img/velababy/velas-paquete-10-small.jpeg'],
    velasPesebre: ['./assets/img/velapesebre/vela-pesebre-caja-small.jpeg']
}

const productsList = document.querySelectorAll(".product");
const lightbox = document.querySelector(".lightbox");
const dialogImage = document.querySelector(".dialog-image");
const closeButton = document.querySelector(".lightbox__close");
const lightboxCarrousel = document.querySelector(".lightbox__carrousel");

productsList.forEach( (eachProduct) => {
    eachProduct.addEventListener('click', () => {
        lightboxCarrousel.innerHTML = '';
        const category = eachProduct.getAttribute('data-category');
        const images = categories[category] || [];

        images.forEach(image => {
            const imageCandle = document.createElement('img');
            imageCandle.src = image;
            imageCandle.classList.add('light-dialog-image')
            console.log(imageCandle)
            lightboxCarrousel.appendChild(imageCandle);    
        });

        lightboxCarrousel.classList.add("carrousel__lightbox")
        lightbox.classList.add('isActive');
        
    });
});

closeButton.addEventListener('click', () => {
    lightbox.classList.remove('isActive');
})