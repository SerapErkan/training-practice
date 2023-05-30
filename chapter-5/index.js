const toggleBtn = document.querySelector(".toggle-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");
const navbar = document.querySelector(".navbar");

toggleBtn.onclick = function () {
  dropdownMenu.classList.toggle("open");
  toggleBtn.classList.toggle("active");
};