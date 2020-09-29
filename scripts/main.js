// Hamburge Menu
const hamburgerButton = document.querySelector('.main-nav .hamburger-icon-container');

hamburgerButton.addEventListener('click', () => {
    document.body.classList.toggle('collapse');
});

// Carousel

const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-container .carousel-item');
const carouselIndicators = document.querySelectorAll('.carousel-indicators .indicator');

const marginRight = parseFloat(getComputedStyle(carouselItems[0]).marginRight);
const marginLeft = parseFloat(getComputedStyle(carouselItems[0]).marginLeft);

const size = carouselItems[0].offsetWidth + marginLeft + marginRight;
let counter = 1;

carouselContainer.style.transform = `translateX(${-size * counter}px)`;

carouselContainer.addEventListener('transitionend', () => {

    if(carouselItems[counter].classList.contains('last-clone')) {

        carouselContainer.classList.remove('applyTransition');
        counter = carouselItems.length - 1;
        carouselContainer.style.transform = `translateX(${-size * counter}px)`;
    }

    if(carouselItems[counter].classList.contains('first-clone')) {
        carouselContainer.classList.remove('applyTransition');
        counter = carouselItems.length - counter;
        carouselContainer.style.transform = `translateX(${-size * counter}px)`;
    }
});

let indicatorNumber = 0;

setInterval(() => {
    if(counter >= carouselItems.length - 1) return;

    carouselIndicators[indicatorNumber].classList.remove('active');
    indicatorNumber++;

    carouselContainer.classList.add('applyTransition');
    counter++;
    carouselContainer.style.transform = `translateX(${-size * counter}px)`;

    if(indicatorNumber > carouselIndicators.length - 1) {
        indicatorNumber = 0;
        carouselIndicators[indicatorNumber].classList.add('active');
    } else {
        carouselIndicators[indicatorNumber].classList.add('active');
    }

}, 3000);

// email validation 
const form = document.querySelector('.main-footer .footer-form');
const validationWarning = document.querySelector('.main-footer .validationText');
const regx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(!regx.test(form.elements.email.value)) {
        validationWarning.classList.add('invalid');
        return false;
    }

    validationWarning.classList.remove('invalid');

});

