var navbar = document.getElementById("navbar")
document.addEventListener("wheel", function (event) {
    if (event.wheelDelta < 0) {
        navbar.classList.add("hidden")
    } else {
        navbar.classList.remove("hidden")
    }
    console.log(event.wheelDelta)
})
