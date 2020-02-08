// <------- 作品集 Swiper ------->

const swiper1 = new Swiper('.illustration_swiper', {
    direction: 'vertical',
    mousewheel: true,
    // effect: 'cube',
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
    
    keyboard: {
        enabled: true,
        onlyInViewport: false
    }
});

// <------ 商店 > 手提袋 Swiper ------>

var swiper2 = new Swiper('.tabs_swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });