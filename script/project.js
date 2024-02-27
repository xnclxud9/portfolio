// 슬라이드
$(function () {
  $('.project_wrap').slick({
    slidesToShow: 1,
    // adaptiveHeight: true,
    prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i> Prev</button>",
    nextArrow: "<button type='button' class='slick-next'>Next <i class='fas fa-chevron-right'></i></button>",
    asNavFor: '.slide_nav',
  });

  // 내비 슬라이드
  $('.slide_nav').slick({
    slidesToShow: 3,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '.project_wrap',
    responsive: [ // 반응형 웹 구현 옵션
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]

  });

  $('.project_wrap').on('afterChange', function () {
    $('html, body').animate({
      scrollTop: 100
    }, 300);

    // 슬라이드 높이 변경
    let currentSlide = $('.project_wrap').slick('slickCurrentSlide');

    s_h = $('.project_wrap .slick-slide').eq(currentSlide + 1).outerHeight();

    $('.project_wrap .slick-list').height(s_h);
    // console.log(s_h);

    return false;
  });

  p_id = $(location).attr('href').split('?')[1];
  // console.log(p_id);

  switch (p_id) {
    case "canon_user":
      $('.project_wrap').slick('slickGoTo', 1);
      break

    case "canon_admin":
      $('.project_wrap').slick('slickGoTo', 2);
      break

    case "emart":
      $('.project_wrap').slick('slickGoTo', 3);
      break

    case "freitag":
      $('.project_wrap').slick('slickGoTo', 4);
      break

    case "tgi":
      $('.project_wrap').slick('slickGoTo', 5);
      break

    default:
      $('.project_wrap').slick('slickGoTo', 0);
  }
});