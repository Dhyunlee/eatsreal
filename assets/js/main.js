// use swiper
const swiper = new Swiper(".swiper-container", {
  speed: 400,
  spaceBetween: 100,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// 더블 클릭 방지
document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
})