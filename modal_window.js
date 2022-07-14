let cont_4_button_1 = document.querySelector('.cont_4_button_1');
let cont_4_button_2 = document.querySelector('.cont_4_button_2');
let cont_4_button_3 = document.querySelector('.cont_4_button_3');

let cont_4_img_1 = document.querySelector('.cont_4_img_1');
let cont_4_img_2 = document.querySelector('.cont_4_img_2');
let cont_4_img_3 = document.querySelector('.cont_4_img_3');

let modal_close_1 = document.querySelector('.modal_close_1');
let modal_close_2 = document.querySelector('.modal_close_2');
let modal_close_3 = document.querySelector('.modal_close_3');

let container_4_modal_window_1 = document.querySelector('.container_4_modal_window_1');
let container_4_modal_window_2 = document.querySelector('.container_4_modal_window_2');
let container_4_modal_window_3 = document.querySelector('.container_4_modal_window_3');

/*------окно 1---------*/

cont_4_img_1.addEventListener('click', function () {
    container_4_modal_window_1.classList.add('active');
    container_4_modal_window_2.classList.remove('active');
    container_4_modal_window_3.classList.remove('active');
    document.body.style.overflow = 'hidden';
})

cont_4_button_1.addEventListener('click', function() {
    container_4_modal_window_1.classList.add('active');
    container_4_modal_window_2.classList.remove('active');
    container_4_modal_window_3.classList.remove('active');
    document.body.style.overflow = 'hidden';
})
modal_close_1.addEventListener('click', function() {
    container_4_modal_window_1.classList.remove('active');
    document.body.style.overflow = '';
})
/*------окно 2---------*/

cont_4_img_2.addEventListener('click', function () {
    container_4_modal_window_1.classList.remove('active');
    container_4_modal_window_2.classList.add('active');
    container_4_modal_window_3.classList.remove('active');
    document.body.style.overflow = 'hidden';
})  

cont_4_button_2.addEventListener('click', function () {
    container_4_modal_window_1.classList.remove('active');
    container_4_modal_window_2.classList.add('active');
    container_4_modal_window_3.classList.remove('active');
    document.body.style.overflow = 'hidden';
})
modal_close_2.addEventListener('click', function () {
    container_4_modal_window_2.classList.remove('active');
    document.body.style.overflow = '';
})

/*------окно 3---------*/

cont_4_img_3.addEventListener('click', function () {
    container_4_modal_window_1.classList.remove('active');
    container_4_modal_window_2.classList.remove('active');
    container_4_modal_window_3.classList.add('active');
    document.body.style.overflow = 'hidden';
})

cont_4_button_3.addEventListener('click', function () {
    container_4_modal_window_1.classList.remove('active');
    container_4_modal_window_2.classList.remove('active');
    container_4_modal_window_3.classList.add('active');
    document.body.style.overflow = 'hidden';
})
modal_close_3.addEventListener('click', function () {
    container_4_modal_window_3.classList.remove('active');
    document.body.style.overflow = '';
})