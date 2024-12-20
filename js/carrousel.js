'use strict'

const containerImages = document.querySelector('.container-images');
const punto           = document.querySelectorAll('.punto');

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