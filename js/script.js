var swiper = new Swiper(".project__mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});