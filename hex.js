const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
  let hexColor = "#";
  for (var i = 0; i < 6; i++) {
    let x = Math.floor(Math.random() * (15 - 0) + 1) + 0;
    hexColor += hex[x];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});
