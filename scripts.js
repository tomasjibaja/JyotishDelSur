// BOTÓN GO UP
function scrollValue() {
    var goup = document.getElementById('goup');
    var scroll = window.scrollY;
    if (scroll < 700) {
        goup.classList.remove('goup-scrolled');
    } else {
        goup.classList.add('goup-scrolled');
    }
}

window.addEventListener('scroll', scrollValue);

// SLIDER CUADROS
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');
let sliderLastClick = (new Date()).getTime();

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function sliderNext() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 1s ease-in-out";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 1000);
}

btnRight.addEventListener('click', function(){
    sliderNext();
    sliderLastClick = (new Date()).getTime();
})

function sliderPrev() {
    let sliderSection = document.querySelectorAll('.slider__section');
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 1s ease-in-out";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 1000);
}

btnLeft.addEventListener('click', function(){
    sliderPrev();
    sliderLastClick = (new Date()).getTime();
})

setInterval(function(){
    if (((new Date()).getTime() - sliderLastClick) > 3000 ) {
        sliderNext();
    }
}, 5000);



