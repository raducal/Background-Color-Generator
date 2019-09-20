var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient(){
  body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
  css.textContent = body.style.background + ";";

}

function initialGradientValues () {
    css.textContent = window.getComputedStyle(body).getPropertyValue('background-image');
}

function generateRandom(){
  var letters = "0123456789ABCDEF";
    var color = '#';
    for (var i = 0; i < 6; i++){
       var x = color += letters[(Math.floor(Math.random() * 16))];
}
return color;
}

function setBackground(){
  color1.value = generateRandom();
  color2.value = generateRandom();

  setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setBackground);

window.onload = initialGradientValues();
