// code referenced from https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
var prevScrollpos = window.scrollY;
window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("nav").style.top = "0";
    } else {
        document.querySelector("nav").style.top = "-10rem";
    }
    prevScrollpos = currentScrollPos;
}
