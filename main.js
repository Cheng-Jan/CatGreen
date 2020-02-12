// <------- loading_page ------->
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
 
var time = 0;

 function countDown() {
   time++;
   $(".loading").css(
     "clip-path",
     "polygon(0 100%, 100% 100%, 100% " + (100 - time) + "%, 0 " + (100 - time) + "%"
   );

   if (time === 60) {
     $(".loading_rose2").css('opacity', "1");
   }

   // $("h2").text(time + "%")
   if (time === 100) {
     clearInterval(timer);
     $(".loading_bg").addClass("done");
     $("body").css('overflow', 'auto');
     console.log($("body"));
     $(".parent").removeClass("done");
     

     setTimeout(function () {
       $(".loading_bg").css("display", "none");
     }, 1000);
   }
 }

 var timer = setInterval(countDown, 50);


// <------- navbar 隱藏+滑出 ------->

$(window).on("load", function () {
  mainNav();
  $(window).scroll(function () {
    mainNav();
  });

  function mainNav() {
    var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    if (top > 100) $('.header').stop().animate({
      "opacity": '1',
      "top": '0'
    });
    else $('.header').stop().animate({
      "top": '-100',
      "opacity": '0'
    });

  }
});

// <------- banner parallax -------> 

//   var scene = document.getElementById("scene");
//   var parallaxInstance = new Parallax(scene);

var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene, {
  calibrateX: false,
  calibrateY: true,
  invertX: false,
  invertY: true,
  limitX: false,
  limitY: 10,
  scalarX: 2,
  scalarY: 8,
  frictionX: 0.2,
  frictionY: 0.8,
});

var scene2 = document.getElementById("scene2");
var parallaxInstance2 = new Parallax(scene2, {
  calibrateX: true,
  calibrateY: false,
  invertX: true,
  invertY: false,
  limitX: 6,
  limitY: false,
  scalarX: 3,
  scalarY: 3,
  frictionX: 0.3,
  frictionY: 0.3,
});

// <------- 作品集 Swiper ------->

const swiper1 = new Swiper('.illustration_swiper', {
  // direction: 'vertical',
  // mousewheel: true,
  // effect: 'cube',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false
  },

  loop: true,

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

// <------ 商店 > 手提袋 button 連結網址 ------>

function bag_click() {
  window.open("https://www.pinkoi.com/product/Sx7dcuxY");
}

function bag_click_more() {
  window.open("https://www.pinkoi.com/store/yourscat?category=1");
}

// <------ 商店 > 配件飾品 button 連結網址 ------>

function menu2_click1() {
  window.open("https://www.pinkoi.com/product/fH27kww6");
}

function menu2_click2() {
  window.open("https://www.pinkoi.com/product/MCH32DFR");
}

function menu2_click3() {
  window.open("https://www.pinkoi.com/product/eNfDRbLr");
}

function menu2_click_more() {
  window.open("https://www.pinkoi.com/store/yourscat?category=2");
}

// <------ 商店 > 文具卡片 button 連結網址 ------>

function menu3_click1() {
  window.open("https://www.pinkoi.com/product/dqcSTVrt");
}

function menu3_click2() {
  window.open("https://www.pinkoi.com/product/RSBhKAXU");
}

function menu3_click3() {
  window.open("https://www.pinkoi.com/product/z9HSD3kV");
}

function menu3_click_more() {
  window.open("https://www.pinkoi.com/store/yourscat?category=3");
}

// <------ 商店 > 美妝工具 button 連結網址 ------>

function menu4_click1() {
  window.open("https://www.pinkoi.com/product/dHPaL7Av");
}

function menu4_click2() {
  window.open("https://www.pinkoi.com/product/svWDZfbD");
}

function menu4_click3() {
  window.open("https://hk.pinkoi.com/product/qBRnWcCq");
}

function menu4_click_more() {
  window.open("https://www.pinkoi.com/store/yourscat?category=14");
}