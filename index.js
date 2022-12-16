const burger = document.querySelector('.burger');
const list = document.querySelector('.list');

function showList() {
    burger.classList.add('active');
}

burger.addEventListener('click', () => showList());