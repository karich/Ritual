let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (var slide of slides) {
        slide.style.display = "none";
    }   
    slides[slideIndex - 1].style.display = "block"; 
}
var timer = setInterval(function(){
    slideIndex++;
    showSlides(slideIndex);
  },6000);