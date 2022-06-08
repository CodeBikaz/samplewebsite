var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 0,
    pagination: {
    el: ".swiper-pagination",
      clickable: true,
    },
    
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
      speed: 100,
      loop: true,
      roundLengths:true,
  });