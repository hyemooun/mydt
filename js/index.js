//==========================헤더 네비게이션 메뉴==========================//
$(".gnb").mouseover(function(){
    $("header").addClass("on");
});
$("header").mouseleave(function(){
    $("header").removeClass("on");
});
//인아웃을 다르게 적용해도 된다 


//==========================햄버거 메뉴 풀스크린==========================//

$("header .wrap > a").on("click", function(){
    $(".fullscreen_menu").fadeIn();
    $("html").css({"overflow-y":"hidden"});
});
$(".fullscreen_menu .wrap > a").on("click", function(){
    $(".fullscreen_menu").fadeOut();
    $("html").css({"overflow-y":"visible"});
});


//==========================메인 슬라이드 배너==========================//

var swiper = new Swiper(".mySwiper", {
  effect: "fade",
//  loop:true,
//  centeredSlides:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,  
  },
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  }
});

//==========================마이데이터 슬라이드==========================//

//var n = 0; //횟수
//function slide() {
//    n++; // 자기 자신한테 1을 더해준다 
//    if ( n > 11 ) {  //슬라이드가 11 이상이 될 때 0으로 다시 돌아간다
//        n = 0
//    }
//    $(".slide").animate({"left":-n*346},700);
//}
//
//setInterval("slide()",2000); //slide를 2초마다 반복해줄게





//==========================서비스추천 슬라이드==========================//

var swiper = new Swiper(".swiper list", {
  pagination: {
    el: ".swiperlist-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiperlist-button-next",
    prevEl: ".swiperlist-button-prev",
  },
});
