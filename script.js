// hamburger menu start
// FOR BUTTON DROP DOWN

// Make a function that will drop down a menu.
// Clickable, and hover. (will go away when not clicked?)

// IF CLICKED, THEN MENU SHOWS. MENU STAYS WHEN IS HOVERED. WHEN YOU MOVE OFF MENU THEN IT COLLAPSE.

// <div="menu-container"
// <button="mobile-menu

// var mobileMenu = document.getElementById("mobile-menu");
var navLinks = document.getElementById("nav-links-container");
// X button
// var mobileClose = document.getElementById("mobileClose");
// // Hamburger
var menuBtn = document.getElementById("menuBtn");
// open svg
var openSvg = document.getElementById("openSvg");
// close svg
var closeSvg = document.getElementById("closeSvg");

menuBtn.addEventListener("click", function () {
	// Toggle Menu Appear
	navLinks.classList.toggle("visible");
	closeSvg.classList.toggle("hidden");
	openSvg.classList.toggle("hidden");
});

// hamburger menu end

let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		topBtn.style.display = "block";
	} else {
		topBtn.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
