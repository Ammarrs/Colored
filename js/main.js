var btn = document.querySelector("#btn");
var div = document.querySelector("#colored");
var colorInput = document.getElementById("colorInput");
var AddBtn = document.getElementById("AddBtn");

var colors = ["red", "yellow", "green", "blue", "brown"];
var i = 0;

AddBtn.onclick = function () {
  var color = colorInput.value;
  colors.push(color);
}



btn.onclick = function () {
  console.log("pressed!");
  div.style.backgroundColor = colors[i];
  i++;
  if (i == colors.length) {
    i = 0;
  }
}