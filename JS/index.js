let Layer1 = document.getElementById("Layer1");
let Layer2 = document.getElementById("Layer2");
let Layer3 = document.getElementById("Layer3");
let Layer4 = document.getElementById("Layer4");
let Layer5 = document.getElementById("Layer5");
let Layer6 = document.getElementById("Layer6");
let Layer7 = document.getElementById("Layer7");





window.addEventListener("scroll", () => {
    let value = window.scrollY;
        Layer2.style.left = `${(value) * -0.25}px`;
        Layer1.style.left = `${(value) * 0.25}px`;
        let scaleValue = 1 + (value / 3000);
        Layer6.style.transform = `scale(${scaleValue})`;
        Layer3.style.transform = `scale(${scaleValue})`;

    
});

/* 
==========
workshops
==========
 */

const carousel = document.querySelector('.carousel-container');
const quantity = document.querySelectorAll('.items').length - 1;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let i =0;

next.addEventListener('click', () => {
    carousel.style.rotate = `${-(++i)*(360/quantity)}deg`
    // document.querySelectorAll('.items')[i%quantity].classList.add('active');
    // console.log(i%quantity);
    
});

prev.addEventListener('click', () => {
    carousel.style.rotate = `${-(--i)*(360/quantity)}deg`
    // console.log(i%quantity);
     
})




