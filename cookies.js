
var acceptClick = document.getElementById('acceptCookie');
var rejectClick = document.getElementById('rejectCookie');
var cookie = document.getElementById('cookie');

acceptClick.addEventListener('click', function (event) {
    cookie.classList.add("hidden")
    setCookie('cookiesAccepted2', 'yes', 30)
});

rejectClick.addEventListener('click', function (event) {
    window.open('https://www.cookielaw.org/the-cookie-law/', "_blank");
});

var cookieValue = getCookie('cookiesAccepted2')
if (cookieValue !== "") {
    cookie.classList.add("hidden")
}


