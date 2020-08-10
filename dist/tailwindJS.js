const icon = document.querySelector("#icon");
const menu = document.querySelector("#menu");
const woman = document.querySelector("#woman");

icon.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

// if (screen.width > 640) {
//   woman.style.display = "block";
// } else {
//   woman.style.display = "none";
// }
