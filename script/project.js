// 슬라이드
$('.project_wrap').slick({
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i> Prev</button>",
  nextArrow: "<button type='button' class='slick-next'>Next <i class='fas fa-chevron-right'></i></button>",
  asNavFor: '.slide_nav',
});

$('.slide_nav').slick({
  slidesToShow: 3,
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
  asNavFor: '.project_wrap',
});

$('.slide_nav').on('afterChange', function () {
  $('html, body').animate({
    scrollTop: 100
  }, 300);
  return false;
});