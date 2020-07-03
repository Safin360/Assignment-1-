
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        // autoplaySpeed: true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        dots: true,
        dotsEach: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});


//nav color 
    $(window).scroll(function(){

        var top = $(window).scrollTop();
        if(top>=60){
            $("#navstart").addClass('secondary-dark-blue-bg');
            $("#navstart").removeClass('custom_nv_bg_col');
        }

        else
            if($("#navstart").hasClass('secondary-dark-blue-bg')){
                $("#navstart").removeClass('secondary-dark-blue-bg');
                $("#navstart").addClass('custom_nv_bg_col');
            }
    });
//Scroll Button
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }
  });

  $('.scroll-top').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 100);
      return false;
  });

});
