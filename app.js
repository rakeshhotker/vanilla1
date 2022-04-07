const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
  //get randomNumber between 0-3

  const randomNumber = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
