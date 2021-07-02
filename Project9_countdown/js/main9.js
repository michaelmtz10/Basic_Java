var slideIndex = 1;
showSlides(slideIndex);


function plusSlide(m) {
    showSlides(slideIndex += m);
}

function currentSlide(m) {
    showSlides(slideIndex = m);
}

function showSlides(m) {
    var x;
    var slides = document.getElementsByClassName("my_slides");
    var dots = document.getElementsByClassName("dot");
    if (m > slides.length) {slideIndex = 1}
    if (m < 1) {slideIndex = slides.length}
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    for (x = 0; x < dots.length; x++) {
        dots[x].className = dots[x].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}