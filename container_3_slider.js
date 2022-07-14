let open_close_1 = document.querySelector('.open_close_1');
let open_close_2 = document.querySelector('.open_close_2');
let open_close_3 = document.querySelector('.open_close_3');

let importent_text_1 = document.querySelector('.importent_text_1');
let importent_text_2 = document.querySelector('.importent_text_2');
let importent_text_3 = document.querySelector('.importent_text_3');

let cont_3_1 = document.querySelector('.cont_3_1');
let cont_3_2 = document.querySelector('.cont_3_2');
let cont_3_3 = document.querySelector('.cont_3_3');

const nav_cont_1 = document.querySelector('.nav_cont_1');
const nav_cont_2 = document.querySelector('.nav_cont_2');
const nav_cont_3 = document.querySelector('.nav_cont_3');

nav_cont_1.addEventListener('click', (event) => {

    nav_cont_1.classList.toggle('open');
    nav_cont_2.classList.remove('open');
    nav_cont_3.classList.remove('open');

    importent_text_1.classList.toggle('active');
    importent_text_2.classList.remove('active');
    importent_text_3.classList.remove('active');

    cont_3_1.classList.toggle('active');
    cont_3_2.classList.remove('active');
    cont_3_3.classList.remove('active');
})

nav_cont_2.addEventListener('click', (event) => {
    
    nav_cont_2.classList.toggle('open');
    nav_cont_3.classList.remove('open');
    nav_cont_1.classList.remove('open');

    importent_text_1.classList.remove('active');
    importent_text_2.classList.toggle('active');
    importent_text_3.classList.remove('active');

    cont_3_1.classList.remove('active');
    cont_3_2.classList.toggle('active');
    cont_3_3.classList.remove('active');
})

nav_cont_3.addEventListener('click', (event) => {
    
    nav_cont_3.classList.toggle('open');
    nav_cont_2.classList.remove('open');
    nav_cont_1.classList.remove('open');

    importent_text_1.classList.remove('active');
    importent_text_2.classList.remove('active');
    importent_text_3.classList.toggle('active');

    cont_3_1.classList.remove('active');
    cont_3_2.classList.remove('active');
    cont_3_3.classList.toggle('active');
})

//--------анимация вылетающих элементов-------//

    //-----первый блок----//

let cont_3_1_anime = window.scrollY

const text_in_cont_3_1 = document.querySelector('.text_in_slider_1')
const height_for_anime = 1150;

const add_class_in_text_in_cont_3_1 = () =>
    text_in_cont_3_1.classList.add('right')


window.addEventListener('scroll', function () {
    cont_3_1_anime = window.scrollY;

    if (cont_3_1_anime >= height_for_anime) {
        add_class_in_text_in_cont_3_1()
    }

})

 //-----второй блок----//

let cont_3_2_anime = window.scrollY

const text_in_cont_3_2 = document.querySelector('.text_in_slider_2')
const height_for_anime_2 = 1200;

const add_class_in_text_in_cont_3_2 = () =>
    text_in_cont_3_2.classList.add('right')

window.addEventListener('scroll', function () {
    cont_3_2_anime = window.scrollY;

    if (cont_3_2_anime >= height_for_anime_2) {
        add_class_in_text_in_cont_3_2()
    }
})

//-------третий блок------//


let cont_3_3_anime = window.scrollY

const text_in_cont_3_3 = document.querySelector('.text_in_slider_3')
const height_for_anime_3 = 1250;

const add_class_in_text_in_cont_3_3 = () =>
    text_in_cont_3_3.classList.add('right')


window.addEventListener('scroll', function () {
    cont_3_3_anime = window.scrollY;

    if (cont_3_3_anime >= height_for_anime_3) {
        add_class_in_text_in_cont_3_3()
    }

})
