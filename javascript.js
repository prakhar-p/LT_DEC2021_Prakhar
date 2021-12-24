function like1(){
  document.getElementById("like1").style.color="blue"
  document.getElementById("dislike1").style.color="black"
 
}
function dislike1(){
  document.getElementById("dislike1").style.color="blue"
  document.getElementById("like1").style.color="black"
}
function like2(){
  document.getElementById("like2").style.color="blue"
  document.getElementById("dislike2").style.color="black"
 
}
function dislike2(){
  document.getElementById("dislike2").style.color="blue"
  document.getElementById("like2").style.color="black"
}
function like3(){
  document.getElementById("like3").style.color="blue"
  document.getElementById("dislike3").style.color="black"
 
}
function dislike3(){
  document.getElementById("dislike3").style.color="blue"
  document.getElementById("like3").style.color="black"
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2500);
}
