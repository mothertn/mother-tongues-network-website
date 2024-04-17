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
	const modals = document.querySelectorAll(".modal");
	modals.forEach(modal => {
		modal.classList.add("hidden");
	});
	document.body.classList.remove("fixed");
	topBtn.classList.remove("hidden");
};

var closeBtn = document.querySelectorAll(".close-btn");
closeBtn.forEach(btn => {
	btn.addEventListener("click", closeModal);
});

// Open modal
var teamMembers = document.querySelectorAll(".person");
teamMembers.forEach(member => {
	member.addEventListener("click", function () {
		var modalId = member.getAttribute("data-modal");
		var modal = document.getElementById(modalId);
		modal.classList.remove("hidden");
		document.body.classList.add("fixed");
		topBtn.classList.add("hidden");
	});
});

document.addEventListener("keydown", function (e) {
	if (e.key === "Escape") {
		const modals = document.querySelectorAll(".modal");
		modals.forEach(modal => {
			if (!modal.classList.contains("hidden")) {
				closeModal();
			}
		});
	}
});
