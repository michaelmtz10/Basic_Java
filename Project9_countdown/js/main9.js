var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(m) {
  showSlides(slideIndex += m);
}

function currentSlide(m) {
  showSlides(slideIndex = m);
}


function showSlides(m) {
  var i;
  var slides = document.getElementsByClassName("my_slides");
  var dots = document.getElementsByClassName("dot");
  if (m > slides.length) {slideIndex = 1}    
  if (m < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function countdown() {
    var seconds = document.getElementById("seconds").value;
    function tick() {
        seconds = seconds -1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
    if(seconds == -1) {
        alert("Time's up!");

    }
            }
        tick();
}