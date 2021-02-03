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