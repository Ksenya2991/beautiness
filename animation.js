const catalogItemFadeInLeft = document.querySelector('.item-1');
const catalogItemFadeInRight = document.querySelector('.item-2');

const aboutBlockFadeInLeft = document.querySelector('.about__wrapper__content');
const aboutBlockFadeInRight = document.querySelector('.about__wrapper__photo');

const servicesTitleZoomIn = document.querySelector('.services__title');

const reviewsTitleZoomIn = document.querySelector('.reviews__title');

const benefitsTitleZoomIn = document.querySelector('.benefits__title');

const offerBlockFadeInLeft = document.querySelector('.offer__wrapper__content');
const offerBlockFadeInRight = document.querySelector('.offer__wrapper__form');

window.addEventListener('scroll', () => {
    const offsetTopToShowElement = window.innerHeight - 200;
    const catalogMiddelPosition = catalogItemFadeInLeft.offsetTop - window.scrollY;
    if (offsetTopToShowElement >= catalogMiddelPosition) {
        catalogItemFadeInLeft.style.opacity = '1';
        catalogItemFadeInLeft.classList.add('animate__fadeInLeft');
        catalogItemFadeInRight.style.opacity = '1';
        catalogItemFadeInRight.classList.add('animate__fadeInRight');
    };

    const aboutBlockMiddelPosition = aboutBlockFadeInLeft.offsetTop - window.scrollY;
    if (offsetTopToShowElement >= aboutBlockMiddelPosition) {
        aboutBlockFadeInLeft.style.opacity = '1';
        aboutBlockFadeInLeft.classList.add('animate__fadeInLeft');
        aboutBlockFadeInRight.style.opacity = '1';
        aboutBlockFadeInRight.classList.add('animate__fadeInRight');
    };

    const servicesTitleMiddelPosition = servicesTitleZoomIn.offsetTop - window.scrollY;
    if (offsetTopToShowElement >= servicesTitleMiddelPosition) {
        servicesTitleZoomIn.style.opacity = '1';
        servicesTitleZoomIn.classList.add('animate__zoomIn');
    };

    const reviewsTitleMiddelPosition = reviewsTitleZoomIn.offsetTop - window.scrollY;
    if (offsetTopToShowElement >= reviewsTitleMiddelPosition) {
        reviewsTitleZoomIn.style.opacity = '1';
        reviewsTitleZoomIn.classList.add('animate__zoomIn');
    };

    const benefitsBoxMiddelPosition = benefitsTitleZoomIn.offsetTop - window.scrollY;
    if (offsetTopToShowElement >= benefitsBoxMiddelPosition) {
        benefitsTitleZoomIn.style.opacity = '1';
        benefitsTitleZoomIn.classList.add('animate__zoomIn');
    };

    const offerBlockMiddelPosition = offerBlockFadeInLeft.offsetTop - window.scrollY;
    if (offsetTopToShowElement >= offerBlockMiddelPosition) {
        offerBlockFadeInLeft.style.opacity = '1';
        offerBlockFadeInLeft.classList.add('animate__fadeInLeft');
        offerBlockFadeInRight.style.opacity = '1';
        offerBlockFadeInRight.classList.add('animate__fadeInRight');
    };
})