/**
 * Created by Wundawaffę on 2017-07-20.
 */

$(document).ready(function() {
    var navbar = document.getElementById("navbar");
    document.addEventListener("wheel", function (event) {
        if (event.wheelDelta < 0) {
            navbar.classList.add("small")
        } else {
            navbar.classList.remove("small")
        }
        console.log(event.wheelDelta)
    })
});