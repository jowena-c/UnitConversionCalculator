let factors1 = new Array(1, 0.1, 0.01, 0.001, 0.0001, 0.000001, 0.0393701, 0.003280841666667, 0.0010936138888889999563, 6.213715277778408823e-7);
let factors2 = new Array(10, 1, 0.1, 0.01, 0.001, 0.00001, 0.393701, 0.0328084, 0.0109361, 0.00000621);
let factors3 = new Array(100, 10, 1, 0.1, 0.01, 0.0001, 3.93701, 0.328084, 0.109361, 0.00006214);
let factors4 = new Array(1000, 100, 10, 1, 0.1, 0.001, 39.3701, 3.28084, 1.09361, 0.000621371);
let factors5 = new Array(10000, 1000, 100, 10, 1, 0.01, 393.701, 32.8084, 10.9361, 0.00621371);
let factors6 = new Array(1000000, 100000, 10000, 1000, 100, 1, 39370.1, 3280.84, 1093.61, 0.621371);
let factors7 = new Array(25.4, 2.54, 0.254, 0.0254, 0.00254, 0.0000254, 1, 0.0833333, 0.0277778, 0.000015783);
let factors8 = new Array(304.8, 30.48, 3.048, 0.3048, 0.03048, 0.0003048, 12, 1, 0.333333, 0.000189394);
let factors9 = new Array(914.4, 91.44, 9.144, 0.9144, 0.09144, 0.0009144, 36, 3, 1, 0.000568182);
let factors10 = new Array(1609344, 160934.4, 16093.44, 1609.344, 160.9344, 1.609344, 63360, 5280, 1760, 1);
let factors = new Array(factors1,factors2,factors3,factors4,factors5,factors6,factors7,factors8,factors9,factors10);

function convertUnit() {
  fromIndex = document.lengthConverter.fromUnit.selectedIndex;
  toIndex = document.lengthConverter.toUnit.selectedIndex;
  factor = factors[fromIndex][toIndex];


  fromUnitText = document.lengthConverter.fromUnit.options[document.lengthConverter.fromUnit.selectedIndex].text;
  toUnitText = document.lengthConverter.toUnit.options[document.lengthConverter.toUnit.selectedIndex].text;
  document.getElementById("formula").innerHTML = fromUnitText + ' = ' + factor + ' ' + toUnitText;


  if(isNaN(document.lengthConverter.fromValue.value))
    document.getElementById("toValue").innerHTML = "Not a valid number.";
  else {
    document.getElementById("toValue").innerHTML = factor * document.lengthConverter.fromValue.value + " " +toUnitText;
  }
}

function resetForm() {

  document.querySelector("form").reset();
  document.querySelector("#inputSection").innerHTML = "";
}