const toggleButton = document.getElementById("toggleButton");
const mobileMenu = document.getElementById("mobileMenu");
const barsIcon = toggleButton.querySelector(".fa-bars");
const xIcon = toggleButton.querySelector(".fa-x");

toggleButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
  barsIcon.classList.toggle("hidden");
  xIcon.classList.toggle("hidden");
});

function closeNavbar() {
  mobileMenu.classList.add("hidden");
  barsIcon.classList.remove("hidden");
  xIcon.classList.add("hidden");
}

//to close navbar when a link is clicked
document.querySelectorAll(".navbar .nav-link").forEach(function (link) {
  link.addEventListener("click", closeNavbar);
});
