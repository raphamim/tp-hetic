let burger = document.getElementById("burger-button");
let bodyOpen = document.getElementById("page-top");

burger.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("open");
  burger.classList.toggle("open");
  document.body.classList.toggle("open");
  bodyOpen.classList.toggle("open");
});