
/**
 * menu zwężające się  */

$(document).ready(function() {
        var navbar = document.getElementById("navbar")
        document.addEventListener("wheel", function (event) {
        if (event.wheelDelta < 0) {
            navbar.classList.add("hidden1")
        } else {
            navbar.classList.remove("hidden1")
        }
        console.log(event.wheelDelta)
    })

/* płynnie przejeżdżająca strona*/

    $("#kontakt").click(function () {
        console.log($("#contact").offset());
        $("html,body").animate({
            scrollTop:$("#contact").offset().top
        }, 500)
    })



/* podświetlenie sekcji w menu */






})