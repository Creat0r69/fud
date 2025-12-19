$(function(){
 var pageScroll = 100;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= pageScroll ) {
           $('header').addClass('fixed');
        }
        else {
            $('header').removeClass('fixed');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});

$('.nav-item').click(function() {
    $(this).siblings('.nav-item').removeClass('active'); // remove from all other <SPAN>s
    $(this).addClass('active'); // add onto current
});


$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
 });


// Counter To Count Number Visit
let a = 0;
$(window).scroll(function() {

  let oTop = $('#counter').offset().top - window.innerHeight;
  // Md.Asaduzzaman Muhid
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter').each(function() {
        let $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 2000,
            easing: 'swing',
            step: function () {
                $this.text(Math.ceil(this.Counter));
            }
        });
    });
    a = 1;// Md.Asaduzzaman Muhid
  }
});