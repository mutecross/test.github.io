function HeightAllFixed() {
  let height_all = 0;
  $('.fixed-top').each(function () {
    height_all += $(this).outerHeight();
  })
  return height_all;
}

function HeightFixedArray() {
  let height_array = [];
  let $i = 0;
  $('.fixed-top').each(function () {
    height_array[$i] = $(this).outerHeight();
    $i++;
  })
  return height_array;
}

function HeaderFixed() {

  $(window).scroll(function () {
    let height_all = HeightAllFixed();
    let height_array = HeightFixedArray();
    if ($(this).scrollTop() > 1 || $(this).scrollLeft() > 1) {
      $('.fixed-top').addClass("header--fixed");

      $(".page-block").css({
        paddingTop: height_all + "px", 
      });
      let $i = 0;
      $('.fixed-top').each(function () {
        if ($i) {
          $(this).css({
            top: height_array[$i - 1] + "px",
          });
        }
        $i++
      });

    } else {
      $('.fixed-top').removeClass("header--fixed");
      $(".page-block").css({
        paddingTop: 0, 
      });

      $('.fixed-top').each(function () {
          $(this).css({
            top: 0,
          });
      });
    }
  });
}

function HeaderTableSticky() {
  if($('.sticky-block').length){
    let height_all = HeightAllFixed();
    $('.sticky-block').each(function () {
      $(this).css({
        top: height_all,
      });
    });
  }
}

function FooterFixed() {
  if($('.footer--fixed').length){
    let footer_height = $('.footer--fixed').outerHeight();
    $(".main").css({
      paddingBottom: footer_height + "px",
    });
  }
 
}


