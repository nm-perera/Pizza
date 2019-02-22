/* =============
====== Nav =====
=============== */
$(document).ready(function () {

    showHideNav();

    $(window).scroll(function () {
        showHideNav();
    });

    function showHideNav () {
        if ($(window).scrollTop() > 100) {
            $('nav').addClass('nav-white');
        } else {
            $('nav').removeClass('nav-white');
        }
    }
});

$(document).ready(function () {
    $('a.smooth-scroll').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top - 50
        }, 1000);
    });;
});

/* =============
====== Menus =====
=============== */
$(document).ready(function(){
    $(".menus").owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        autoplay: true,
        smartSpeed: 300,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 4
            }
        }
    });
  });
/* =============
====== Testimonials =====
=============== */
$(document).ready(function(){
$(".testimonials").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    autoplay: true,
    smartSpeed: 300
});
});
/* =============
====== Dishes =====
=============== */
$(document).ready(function () {
    var grid = $('.isotope-container').isotope({
       
    });

    $('.isotope-filter').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        grid.isotope({
            filter: filterValue
        });
        $('.isotope-filter').find('.active').removeClass('active');
        $(this).addClass('active');
    });
});;