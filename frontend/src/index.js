const toggleMenu = document.querySelector("#menu-toggle");
const dropdownMenu = document.querySelector("#dropdown-example");
const navigation = document.querySelector("#nav-bar");

toggleMenu.addEventListener("mouseenter", () => {
  dropdownMenu.style.display = "flex";
});

navigation.addEventListener("mouseleave", (event) => {
  dropdownMenu.style.display = "none";
});
