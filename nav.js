
/**
 *
 /* podświetlenie sekcji w menu */



$(window).on('scroll', function () {
    $('.target').each(function () {
        if ($(window).scrollTop() >= $(this).position().top) {
            var id = $(this).attr('id');
            $('nav a').removeClass('nav__link__active');
            $('nav a[href="#' + id + '"]').addClass('nav__link__active');
        }
    });
});

/* menu zwężające się  */

$(document).ready(function() {
    var navbar = document.getElementById("navbar")
    document.addEventListener("wheel", function (event) {
        if (window.innerWidth < 768) {
            return false;
        }
        if (event.wheelDelta < 0) {
            navbar.classList.add("small")
        } else {
            navbar.classList.remove("small")
        }
        console.log(event.wheelDelta)
    })

    /* płynnie przejeżdżająca strona*/

    $("nav a").click(function () {
        //console.log($("#contact").offset());
        var hash = $(this).attr('href');
        $("html,body").animate({
            scrollTop: $(hash).offset().top
        }, 500)
    })
})


/* podświetlenie sekcji w menu */



           $(window).on('scroll', function () {
            $('.target').each(function () {
                if ($(window).scrollTop() >= $(this).position().top) {
                    var id = $(this).attr('id');
                    $('nav a').removeClass('nav__link__active');
                    $('nav a[href="#' + id + '"]').addClass('nav__link__active');
                }
            });
        });
