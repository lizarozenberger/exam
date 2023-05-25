var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    initialSlide: 2,
});

new WOW({
    scrollContainer: null,
}).init();