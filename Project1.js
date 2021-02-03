// When the user scrolls down 40px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 80) {
    	document.getElementById("myNavbar").style.padding = "0px 10px";
    	document.getElementById("myNavbar").style.fontSize = "24px";
    	document.getElementById("logo").style.width = "35px";
    	document.getElementById("m-logo").style.width = "48px";
    	document.getElementById("myNavbar1").style.padding = "0px 10px";
    	document.getElementById("n-logo").style.fontSize = "24px";
  	} 
  	else {
    document.getElementById("myNavbar").style.padding = "40px 10px";
    document.getElementById("myNavbar").style.fontSize = "40px";
    document.getElementById("logo").style.width = "110px";
    document.getElementById("m-logo").style.width = "100px";
    document.getElementById("myNavbar1").style.padding = "40px 10px";
  	document.getElementById("n-logo").style.fontSize = "80px";
  	}

}


/* Tabbed Menu Script*/

function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
    	x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
    	tablinks[i].className = tablinks[i].className.replace(" red", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " red";
}

/*end Tabbed Menu script*/


/*start Hamburger Menu script*/

//Hamburger icon animation script
function myFunction() {
	var x = document.getElementById("close");
  	x.classList.toggle("change");
}

//open and close hamburger menu
function openClose() {
	var x = document.getElementById("myNav");
	if (x.style.width === "100%") {
		x.style.width = "0%";
	} else {
		x.style.width = "100%";
	}
}

/*end Hamburger Menu script*/


/*start Slideshow script*/

var timer = null;
// Next/previous controls
function plusSlides(n) {
  n--;
  clearTimeout(timer);
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  n--;
  clearTimeout(timer);
  showSlides(slideIndex = n);
}

document.getElementById("myLink").click();

var slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  n++;
  slideIndex++;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active1", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active1";
  timer = setTimeout(showSlides, 5000, slideIndex); // Change image every 2 seconds
}

/*end Slideshow script*/

