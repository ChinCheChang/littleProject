var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var gradientDiv = document.getElementsByClassName('gradientDiv');
var random = document.getElementsByClassName('random');

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function setFormInputColor() {
  var RGB1 = hexToRgb(color1.value);
  var RGB2 = hexToRgb(color2.value);
  var RGBA1 = generatRGBA(RGB1);
  var RGBA2 = generatRGBA(RGB2);
  setBackground(RGBA1, RGBA2);
}

function setBackground(RGBA1, RGBA2) {
  gradientDiv[0].style.background =
    "linear-gradient(to right, " +
    RGBA1 +
    ", " +
    RGBA2 +
    ")";
  css.textContent = gradientDiv[0].style.background;
}

function generatRGBA(rgbaColor) {
  var col = "rgba(" +
    rgbaColor.r +
    ", " +
    rgbaColor.g +
    ", " +
    rgbaColor.b +
    ", 0.5)";

    return col;
}

function randomColor() {
  var rgbaColor1 = {
    r : Math.round(Math.random() * 255),
    g : Math.round(Math.random() * 255),
    b : Math.round(Math.random() * 255)
  }
  var rgbaColor2 = {
    r : Math.round(Math.random() * 255),
    g : Math.round(Math.random() * 255),
    b : Math.round(Math.random() * 255)
  }
  setBackground(generatRGBA(rgbaColor1), generatRGBA(rgbaColor2));
}

window.onload = setFormInputColor;

color1.addEventListener("input", setFormInputColor);
color2.addEventListener("input", setFormInputColor);
random[0].addEventListener("click", randomColor);
