const navbar = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");

hamburger.onclick = function(){
    navbar.classList.toggle("active");
}


const swiper = new Swiper(".swiper", {
    loop: true,
})