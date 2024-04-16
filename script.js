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
		topBtn.classList.add("active");
	} else {
		topBtn.classList.remove("active");
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}



// TEAM MODALS

// close modal
const closeModal = function () {
	liannaModal.classList.add("hidden");
	mirandaModal.classList.add("hidden");
	kylaModal.classList.add("hidden");
	maxModal.classList.add("hidden");
	trishModal.classList.add("hidden");
	charliModal.classList.add("hidden");
	document.body.classList.remove("fixed");
	topBtn.classList.remove("hidden");
  };

var closeBtn = document.querySelectorAll(".close-btn");
closeBtn.forEach( (btn) => {
	btn.addEventListener("click", closeModal);
  })
  

// Lianna modal
var liannaImg = document.getElementById("lianna-img");
var liannaModal = document.getElementById("lianna-modal");

liannaImg.addEventListener("click", function() {
	liannaModal.classList.remove("hidden");
	document.body.classList.add("fixed");
	topBtn.classList.add("hidden");
});

// Miranda modal
var mirandaImg = document.getElementById("miranda-img");
var mirandaModal = document.getElementById("miranda-modal");

mirandaImg.addEventListener("click", function() {
	mirandaModal.classList.remove("hidden");
	document.body.classList.add("fixed");
	topBtn.classList.add("hidden");
});

// Kyla modal
var kylaImg = document.getElementById("kyla-img");
var kylaModal = document.getElementById("kyla-modal");

kylaImg.addEventListener("click", function() {
	kylaModal.classList.remove("hidden");
	document.body.classList.add("fixed");
	topBtn.classList.add("hidden");
});

// Max modal
var maxImg = document.getElementById("max-img");
var maxModal = document.getElementById("max-modal");

maxImg.addEventListener("click", function() {
	maxModal.classList.remove("hidden");
	document.body.classList.add("fixed");
	topBtn.classList.add("hidden");
});

// Trish modal
var trishImg = document.getElementById("trish-img");
var trishModal = document.getElementById("trish-modal");

trishImg.addEventListener("click", function() {
	trishModal.classList.remove("hidden");
	document.body.classList.add("fixed");
	topBtn.classList.add("hidden");
});

// Charli modal
var charliImg = document.getElementById("charli-img");
var charliModal = document.getElementById("charli-modal");

charliImg.addEventListener("click", function() {
	charliModal.classList.remove("hidden");
	document.body.classList.add("fixed");
	topBtn.classList.add("hidden");
});