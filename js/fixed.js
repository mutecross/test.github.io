function HeightAllFixed() {
    let height_all = 0;
    $('.fixed').each(function () {
      height_all += $(this).outerHeight();
    })
    return height_all;
  }

  function HeightFixedArray() {
    let height_array = [];
    let $i = 0;
    $('.fixed').each(function () {
      height_array[$i] = $(this).outerHeight();
      $i++;
    })
    return height_array;
  }

  function HeaderFixed(){
    let height_all = HeightAllFixed();
    let height_array = HeightFixedArray();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1 || $(this).scrollLeft() > 1) {
          $i = 0;
          $("body").css({
            paddingTop: height_all + "px",
          });
          $('.fixed')
            .addClass('header-fixed')
            .each(function () {
              if ($i) {
                $(this).css({
                  top: height_array[$i - 1] + "px",
                });
              }
              $i++
            });
        } else {
          $("body").css({
            paddingTop: 0,
            top: 0,
          });
          $('.fixed')
            .removeClass('header-fixed')
            .css({
              top: 0,
            });
        }
      });
  }

  function HeaderTableSticky(){
    let height_all = HeightAllFixed();

    $(window).scroll(function () {
      $('.sticky-block').each(function(){
        $(this).css({
          top: height_all,
        });
      });
    });

  }

  