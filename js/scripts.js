window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".nav_list"),
        hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("hamburger_active");
        menu.classList.toggle("menu_active");
    });
});

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

const items = document.querySelectorAll(".item");
const item1Img = document.querySelector(".item1 img");

items.forEach((item) => {
    item.addEventListener("click", () => {
        const itemImg = item.querySelector("img");
        let imgSrc = itemImg.src;
        itemImg.src = item1Img.src;
        item1Img.src = imgSrc;
    });
});
