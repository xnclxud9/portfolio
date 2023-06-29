// 슬라이드
$(function () {
  $('.project_wrap').slick({
    slidesToShow: 1,
    // adaptiveHeight: true,
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

  p_id = $(location).attr('href').split('?')[1];
  console.log(p_id);

  switch (p_id) {
    case "canon_admin":
      $('.project_wrap').slick('slickGoTo', 1);
      break

    case "petfriends":
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