let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('.list');

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('active');
})

const scrollToTop = document.querySelector('.scroll-back');

window.addEventListener('scroll', () => {
    if (window.scrollY > 680) {
        scrollToTop.style.display = 'block';
    } else {
        scrollToTop.style.display = 'none';
    }
})