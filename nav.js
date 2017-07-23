/**
 * menu zwężające się  */

var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
var scrollEvent = isFirefox ? 'DOMMouseScroll' : 'mousewheel';


function onScroll(event) {
    if (window.innerWidth < 768) {
        return false;
    }
    var scrollDirection = event.wheelDelta || event.detail;
    if (isFirefox ? scrollDirection > 0 : scrollDirection < 0) {
        navbar.classList.add("small")
    } else {
        navbar.classList.remove("small")
    }
    console.log(event.wheelDelta, event.detail)
}
$(document).ready(function () {
    var navbar = document.getElementById("navbar")
    document.addEventListener(scrollEvent, onScroll)


    /* płynnie przejeżdżająca strona*/

    $("nav a").click(function () {
        //console.log($("#contact").offset());
        var hash = $(this).attr('href');
        $("html,body").animate({
            scrollTop: $(hash).offset().top
        }, 500)
    })


// * podświetlenie sekcji z menu */

    $(".nav__link a").mouseover(function () {
        console.log(this)
        var id = $(this).attr('href');
        var $element = $(id)
        // console.log(element)
        $element.parent("section").css("background-color", "red")

    })
})

