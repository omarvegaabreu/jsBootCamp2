const button = document.querySelector("button");
// const form = document.querySelector("form");
const div = document.querySelector("div");

// const buttonClickHandler = (event) => {
//   event.preventDefault();
//   console.log("FORM CLICKED");
//   console.log(event);
// };

// buttons.forEach((button) => {
//   button.addEventListener("mouseenter", buttonClickHandler);
// });

div.addEventListener("click", (event) => {
  console.log("CLICKED DIV");
});
button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log(event);
  console.log("BUTTON CLICKED");
});
// form.addEventListener("submit", buttonClickHandler);
