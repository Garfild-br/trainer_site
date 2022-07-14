//------------для заголовка (контейнер 2)--------//

let anime_for_tittle = window.scrollY

const tittle_in_cont_2 = document.querySelector('.container_2_tittle')
const scroll_tittle_2 = 230;

const add_class_in_tittle = () =>
    tittle_in_cont_2.classList.add('active')


window.addEventListener('scroll', function () {
    anime_for_tittle = window.scrollY;

    if (anime_for_tittle >= scroll_tittle_2) {
        add_class_in_tittle()
    }

})
//---------------для текста (контейнер 2)----------------//

let anime_for_cont_2 = window.scrollY

const text_in_cont_2 = document.querySelector('.container_2_item')
const scroll_text_2 = 260;

const add_class_in_text = () =>
    text_in_cont_2.classList.add('active')

window.addEventListener('scroll', function () {
    anime_for_cont_2 = window.scrollY;

    if (anime_for_cont_2 >= scroll_text_2) {
        add_class_in_text()
    }

})

//---------------анимация боксов (контейнер 4)----------------//

//------------box 1----------//

let anime_for_cont_4_box_1 = window.scrollY

const cont_4_box_1 = document.querySelector('.cont_4_box_1')
const scroll_cont_4_box_1 = 1450;

const add_class_at_cont_4_img_1 = () =>
    cont_4_box_1.classList.add('active')

window.addEventListener('scroll', function () {
    anime_for_cont_4_box_1 = window.scrollY;

    if (anime_for_cont_4_box_1 >= scroll_cont_4_box_1) {
        add_class_at_cont_4_img_1()
    } 
})

//------------box for 2----------//

let anime_for_cont_4_box_2 = window.scrollY

const cont_4_box_2 = document.querySelector('.cont_4_box_2')
const scroll_cont_4_box_2 = 1450;

const add_class_at_cont_4_img_2 = () =>
    cont_4_box_2.classList.add('active')



window.addEventListener('scroll', function () {
    anime_for_cont_4_box_2 = window.scrollY;

    if (anime_for_cont_4_box_2 >= scroll_cont_4_box_2) {
        add_class_at_cont_4_img_2()
    } 
})

//------------box for 3----------//

let anime_for_cont_4_box_3 = window.scrollY

const cont_4_box_3 = document.querySelector('.cont_4_box_3')
const scroll_cont_4_box_3 = 1600;

const add_class_at_cont_4_img_3 = () =>
    cont_4_box_3.classList.add('active')

window.addEventListener('scroll', function () {
    anime_for_cont_4_box_3 = window.scrollY;

    if (anime_for_cont_4_box_3 >= scroll_cont_4_box_3) {
        add_class_at_cont_4_img_3()
    } 
})