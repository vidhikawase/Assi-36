// var style = document.createElement('style');
// var postion = "right";

// style.innerHTML= `
// @keyframes my-animation{
//  0%{${postion}:-${document.querySelector('.text').offsetWidth +10}px;}
//  100%{${postion}:100%;}
// }`;
// document.head.append(style);

let open = document.querySelector(".hamburger")
let menu = document.querySelector(".menu")

let close = document.querySelector(".cross")

open.addEventListener("click", function(){
    menu.style.display = 'block'
})

close.addEventListener("click", function(){
    menu.style.display = 'none'
})


const slides = document.querySelectorAll(".slides img")
var slideIndex = 0;
let intervalId = null;

document.addEventListener ("DOMContentLoaded",initializeSlider)

function initializeSlider(){

    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide")
        // intervalId = setInterval(nextSlide,6000)

    }

}
initializeSlider();


function showSlider( index){
 
   if (index>=slides.length) {
     slideIndex = 0;
   }
   else if(index < 0) {
    slideIndex = slides.length -1;
   }


slides.forEach(slide => {
    slide.classList.remove("displaySlide");
        
    });
    slides[slideIndex].classList.add("displaySlide");

}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlider(slideIndex);
}

function nextSlide(){
  slideIndex++;
  showSlider(slideIndex);
}