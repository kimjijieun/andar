$(function () {

//광고 슬라이드
  var ad = new Swiper(".ad-box", {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false, // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.
    }, 
});


// 메인슬라이드
  var slide = new Swiper(".main-slide", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });

//레깅스,브라탑,세트
  var slide3 = new Swiper(".sc-leggings .list-box2", {
    slidesPerView: "2.2",
    spaceBetween: 10,
  });
  // var swiper = new Swiper(".sc-leggings .list-box2", {});
  var slide4 = new Swiper(".sc-top .list-box2", {
    slidesPerView: "2.2",
    spaceBetween: 10,
  });
  var slide5 = new Swiper(".sc-set .list-box2", {
    slidesPerView: "2.2",
    spaceBetween: 10,
  });



  // 스크롤이벤트
  // $(window).scroll(function () {

  //   hi = $(this).scrollTop();
  //   target = $('.logo-area').offset().top;

  //   // if (hi = target) {
  //   //     $('.gnb-area','.logo-area').addClass('here'),
  //   //     // $('.gnb-out').css('display','block','fixed')
  //   //     $('.gnb-out').css('display','block').addClass('here2')
  //   // } else {
  //   //     $('.logo-area').removeClass('here'),
  //   //     $('.gnb-out').css('display','none').removeClass('here2')
  //   // }
  //   if (hi = target) {
  //     $('.logo-area').addClass('here'),
  //       // $('.gnb-out').css('display','block','fixed')
  //       // $('.gnb-area.gnb-out').css('display','block').addClass('here2')
  //       $('.gnb-area').css('display', 'block'),
  //       $('.gnb-out').css('display', 'block').addClass('here2')
  //   } else {
  //     $('.logo-area').removeClass('here'),
  //       $('.gnb-area').css('display', 'none'),
  //       $('.gnb-out').css('display', 'none').removeClass('here2')
  //   }
  // })

  // $(window).trigger('scroll');

  $(window).scroll(function(){
    if ($(this).scrollTop()>0) {
        $('.header, .gnb-area').addClass('active');
    } else {
        $('.header, .gnb-area').removeClass('active');
    }
  })

  // //////////gnb펼치라/////////////
  $('.ic-arrow-b').click(function(){
    $(this).toggleClass("turn");
    $('.gnb-list').stop().slideToggle();
  })
  // $('.ic-arrow-b').click(function (e) {
  //   e.preventDefault();

  //   if ($(this).siblings('.gnb-list').css('display') == 'none') {
  //     $('.gnb-in').css('display', 'block')
  //     $(this).siblings('.gnb-list').stop().slideDown();

  // } else {
  //     $('.gnb-list').stop().slideUp();
  // }
  // })

  // $('.ic-arrow-b').click(function (e) {
  //   e.preventDefault();
  //   $('.gnb-in').css('display', 'block')

  //   if ($(this).siblings('.gnb-list').css('display') == 'none') {
  //     $(this).siblings('.gnb-list').stop().slideDown();

  //   } else {
  //     $('.gnb-list').stop().slideUp();
  //   }
  // })



//사이드 메뉴
  $('.link-menu').click(function(){
    $('.sc-menu, .dimmed').addClass('active');
    $('body').addClass('hidden');
  })//END

  $('.close, .dimmed').click(function(){
    $('.sc-menu, .dimmed').removeClass('active');
    $('body').removeClass('hidden');
  })

  // $('.menu-btn').click(function (e) {
  //   e.preventDefault();
  //   $('.sc-menu').animate({
  //     left: 0
  //   }, 300)
  // })

  // $('.close').click(function (e) {
  //   e.preventDefault();
  //   $('.sc-menu').animate({
  //     left: -100 + '%'
  //   }, 300)
  // })


// 사이드메뉴 오픈
$('.category-item').click(function(){
  // $(this).children('ul').length == 0
 
  if ($(this).children('ul').css('display') == 'none') {
      $(this).children('ul').stop().slideDown();

  } else {
      $(this).children('ul').stop().slideUp();
  }

})




  // $('.open').click(function (e) {
  //   // e.preventDefault();
  //   // $('.category-wrap').animate({
  //   //   top: 0
  //   // }, 300)
  //   e.preventDefault();

  //   if ($(this).siblings('.category-wrap').css('display') == 'none') {
  //     $('.category-wrap').stop().slideUp(); /* 다 닫힘 */
  //     $(this).siblings('.category-wrap').stop().slideDown();

  //   } else {
  //     $('.category-wrap').stop().slideUp();
  //   }
  // })






})