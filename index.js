// const burger = document.querySelector('.burger');
// const list = document.querySelector('.list');

// function showList() {
//     burger.classList.add('active');
// }

// burger.addEventListener('click', () => showList());

let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('.list');

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('active');
})