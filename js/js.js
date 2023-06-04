

$(document).ready(function () {
    $('.slider-box').slick({
        infinite: true,
        arrows: true,
        nextArrow: '.next',
        prevArrow: '.prev',
        slidesToShow: 5,
        slidesToScroll: 1,
        touchThreshold: 20,

        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2,
                },
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
            },]
    });

});


const filterbtn = document.querySelector('.filter__btn-box');
const card = document.querySelectorAll('.filter-card');


filterbtn.addEventListener('click', function (event) {
    let btnId = event.target.dataset['id'];
    console.log(btnId)

    let target = event.target;


    card.forEach(elem => {
        if (btnId === 'all') {
            elem.classList.remove('active')

        } else {

            if (!elem.classList.contains(btnId)) {
                elem.classList.add('active')

            } else {
                elem.classList.remove('active')

            }
        }

    })




});


const burgerbtn = document.querySelector('.burgermenu');
const burgermenu = document.querySelector('.burger-inner');

burgerbtn.addEventListener('click', function () {

    burgermenu.classList.toggle('menu')

});