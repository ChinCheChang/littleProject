// Write a function that converts HEX to RGB. Then Make that
// function auto-dect the formats so that if you enter HEX color
// format it returns RGB and if you enter RGB color format it
// returns HEX.

const convertTo16 = (num) => {
  let temp = num.toString(16);
  return (temp.length === 1) ? "0" + temp : temp;
}

const HextoRgb = (inputColor) => {
  let r = inputColor.slice(1,3);
  let g = inputColor.slice(3,5);
  let b = inputColor.slice(5,7);

  return `(${r.toString(10)}, ${g.toString(10)}, ${b.toString(10)})`;
}

const rgbToHex2 = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const rgbToHex1 = (r, g, b) => {
  return "#" + convertTo16(r) + convertTo16(g) + convertTo16(b);
}


//Check format is "Hex" or "rgb"
const HexOrRgb = (input) => {
  if(input.includes("#")){
    return HextoRgb(input);
  }else if(input.includes("rgb") || input.includes("(")){
    let rgb = input.match(/[0-9]{1,3}/g);
    return rgbToHex2(Number(rgb[0]), Number(rgb[1]), Number(rgb[2]));
  }else{
    return "format is wrong!";
  }
}

const showColor = () => {
  alert(HexOrRgb(document.getElementById('color').value));
}


//console.log(HexOrRgb("fff"));
//alert( rgbToHex(0, 51, 255) ); // #0033ff
//console.log(rgbToHex(0, 51, 255));
//console.log(((1 << 24) + (0 << 16) + (51 << 8) + 255).toString(16));
