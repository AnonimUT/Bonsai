const swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 60,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000
    }
});