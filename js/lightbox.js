'use strict'

const categories = {
    velasBaby: ['./assets/img/velababy/vela-paquete-10-small.jpeg', './assets/img/velababy/velas-paquete-10-small.jpeg', './assets/img/velapesebre/vela-pesebre-caja-small.jpeg'],
    velasPesebre: ['./assets/img/velapesebre/vela-pesebre-caja-small.jpeg']
}

const productsList = document.querySelectorAll(".product");
const lightbox = document.querySelector(".lightbox");
const lightboxClose = document.getElementById("lightbox__close");
const lightboxCarrousel = document.querySelector(".lightbox__carrousel");

function closeLightbox() {
    lightbox.classList.add('hidden');
    lightboxCarrousel.style.transform = `translateX(0%)` 
}

function openLightbox(eachProduct) {
        lightboxCarrousel.innerHTML = ''
        const category = eachProduct.getAttribute('data-category');
        const images = categories[category] || [];
        images.forEach(image => {
            const imageCandle = document.createElement('img');
            imageCandle.src = image;
            imageCandle.classList.add('lightbox__carousel-item')
            lightboxCarrousel.appendChild(imageCandle);
        });
    lightbox.classList.remove('hidden');
}

lightboxClose.addEventListener('click', closeLightbox);

productsList.forEach( (eachProduct) => {
    eachProduct.addEventListener('click', () => {
    openLightbox(eachProduct)
    })
})

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox ) {
        closeLightbox()
    }
});
