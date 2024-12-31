'use strict'

const menuToggle = document.getElementById("menu-toggle");
const menu       = document.getElementById("menu");
const close      = document.getElementById("menu-close");
const body       = document.body;
/* const header     = document.querySelector(".header"); 
const headerMenu = document.querySelector(".header__menu");   */

// Toggle menu visibility
menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    if (isOpen) {
        menuToggle.innerText="X";    
    } else {
        menuToggle.innerText="☰";
    }
    menuToggle.classList.add("open");
    body.classList.toggle("no-scroll", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen);
    menu.setAttribute("aria-hidden", !isOpen);
});

// Close menu when clicking on a menu option
menu.addEventListener("click", (event) => {
    if (event.target.classList.contains("menu__navigation-option")) {
        menu.classList.remove("open");
        body.classList.remove("no-scroll");
        menuToggle.innerText="☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-hidden", "true");        
    }
})
