var btn = document.querySelector("#btn");
var div = document.querySelector("#colored");

var colors = ["red", "yellow", "green"];
var i = 0;

btn.onclick = function () {
  console.log("pressed!");
  div.style.backgroundColor = colors[i];
  i++;
  if (i == 3) {
    i = 0;
  }
}