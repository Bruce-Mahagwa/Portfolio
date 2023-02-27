const nav_toggle = document.querySelector(".nav-reveal");
const nav_links = document.querySelectorAll(".nav-list-item-link")
nav_toggle.addEventListener("click", (e) => {
	document.body.classList.toggle("nav-open");
})    
nav_links.forEach((link) => {
	link.addEventListener("click", (e) => {
		document.body.classList.remove("nav-open")
	})
})