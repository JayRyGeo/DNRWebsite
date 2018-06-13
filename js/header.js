//var contentBody = document.getElementById('contentBG');
var nav = document.getElementById('nav');
var stickyNav = document.getElementsByTagName('')
var headTop = $('#nav').offset().top;


$(window).scroll(function() {
	var wS = $(this).scrollTop();
		//console.log(wS, "Math: ", (headTop - wS));
	if ((headTop - wS) <= 0) {
		//console.log("Target");
		nav.classList.add("stickyNav");
	}
	else{
		nav.classList.remove("stickyNav");
	}
});