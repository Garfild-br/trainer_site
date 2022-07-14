let menu_burger_links = document.querySelector('.menu_burger_links')
let li_animation_1 = document.querySelector('.li_animation_1')
let li_animation_2 = document.querySelector('.li_animation_2')
let li_animation_3 = document.querySelector('.li_animation_3')
let li_animation_4 = document.querySelector('.li_animation_4')

const nav = document.querySelector('.nav');
nav.addEventListener('click', (event) => {
    nav.classList.toggle('open');
    menu_burger_links.classList.toggle('active')
    li_animation_1.classList.toggle('active');
    li_animation_2.classList.toggle('active');
    li_animation_3.classList.toggle('active');
    li_animation_4.classList.toggle('active');
});


//----------добавление класса при скролле-------//


let scrollpos = window.scrollY

const header = document.querySelector('.menu')
const scrollChange = 50;

const add_class_on_scroll = () =>
header.classList.add('active')

const remove_class_on_scroll = () =>
header.classList.remove('active')

window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;

    if (scrollpos >= scrollChange) {
        add_class_on_scroll()}
            else {remove_class_on_scroll()
            }
})



