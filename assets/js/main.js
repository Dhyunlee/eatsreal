import {recom_prod} from '../data/fake/recom_prod.js';
console.log(recom_prod)

// use swiper
new Swiper(".swiper-container", {
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
  spaceBetween: 0, // 이미지 사이  공백 없애기(= mergin 없앰) 
  // 무한 슬라이드
  loop: true,
  loopAdditionalSlides: 1,
});


// 더블 클릭 방지
document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
})