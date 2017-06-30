/* SIMPLE VERSION CONNECTED TO THE MOUSE OVER

$( '#about' ).mouseover(function() {
    $( '.img-circle' ).addClass('active');
});
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
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
        $('.img-circle').addClass('active');
    }
});



/* PONIZEJ KOD WERYFIKUJACY DO USUNIECA W FINALNEJ WERSJI PROJEKTU */

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    console.log('pozycja scrolla' + scroll)
});
