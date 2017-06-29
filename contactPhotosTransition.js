

var photo = document.getElementById("photo-center")
document.addEventListener("wheel", function (event) {
   if (event.wheelDelta < 0) {
      photo.classList.add("active")
   }
});

var photo2 = document.getElementById("photo-left")
document.addEventListener("wheel", function (event) {
    if (event.wheelDelta < 0) {
        photo2.classList.add("active")
    }
});

var photo3 = document.getElementById("photo-right")
document.addEventListener("wheel", function (event) {
    if (event.wheelDelta < 0) {
        photo3.classList.add("active")
    }
});