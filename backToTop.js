/**
 * Created by magda on 30/06/17.
 */
function onOff () {
    var x = document.getElementById("topControl");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

$(window).scroll(function() {
    var height = $(window).scrollTop();

    var x = document.getElementById("topControl");

//    console.log(height);
    console.log(x.style.display);
    if(height  > 100 && x.style.display == "none") {
//        alert("Kuba");
        onOff();
    } else if (height  <= 100 && x.style.display != "none") {
        onOff();
    }
});

$("img").click(function() {
    $('html,body').animate({
            scrollTop: $(".start").offset().top},
        'slow');
});

