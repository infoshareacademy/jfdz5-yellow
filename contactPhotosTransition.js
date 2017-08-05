/* SIMPLE VERSION CONNECTED TO THE MOUSE OVER

$( '#about' ).mouseover(function() {
    $( '.img-circle' ).addClass('active');
});

ZEBY DZIALALO TRZEBA DODAC ID ABOUT TO DIV ABOUT
*/

/* Y FIXED VERSION, not good for RWD

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y >= 1592) {
        $('.img-circle').addClass('active');
    }
});
*/

$(window).scroll(function() {
    var a = Math.round($(window).scrollTop() + $(window).height());
    var b = Math.round($(document).height());
    console.log(a, b)
    if( a === b ) {
        $('.img-circle').addClass('active');
    }
});

/* KOD POMOCNICZY

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    console.log('wielkosc dokumentu ' + $(document).height());
    console.log('wielkosc okna ' + $(window).height());
    console.log('pozycja scrolla ' + $(window).scrollTop());
});


 */