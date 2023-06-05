// 슬라이드
const swiper = new Swiper(".mySwiper", {
  slidesPerView: "1",
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});