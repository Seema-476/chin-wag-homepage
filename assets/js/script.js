// scroll top btn 
const topBtn = document.querySelector(".topBtn")

window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
        topBtn.classList.add("show")
    } else {
        topBtn.classList.remove("show");
    }
})
topBtn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
})
const toggler = document.getElementById("toggler");
toggler.addEventListener("click", function () {
    toggler.classList.toggle("align-items-center");
});

// animations
AOS.init({
    duration: 1200,
    once: true
});