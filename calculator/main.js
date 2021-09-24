"use strict";
let a = 0;
let result = "";
let operator = "";
function onNumberClick(el) {
  let value = el.dataset.value;
  let currentNumber = Number(a + value);
  if (!isNaN(currentNumber)) {
    a = currentNumber;
    console.log("Number 2 " + a);
    console.log("Number 1 " + result);
    printToScreen(currentNumber);
  }
}
function printToScreen(value) {
  let screen = document.getElementsByClassName("calc-value")[0];
  screen.innerHTML = value;
}

function onClearScreen() {
  result = NaN;
  a = NaN;
  operator = "";
  printToScreen("0");
}
function onOperatorClick(el) {
  let opt = el.dataset.value;
  console.log(opt);

  if (opt !== "equal") {
    operator = opt;
    result = a;
    a = 0;
    return;
  }
  switch (operator) {
    case "equal":
      result = Number(result) + Number(a);
      console.log(result);
      printToScreen(result);
      break;
    case "add":
      result = Number(result) + Number(a);
      break;
    case "sub":
      result = Number(result) - Number(a);
      break;
    case "multiply":
      result = Number(result) * Number(a);
      break;
    case "divide":
      result = Number(result) / Number(a);
      break;
    case "percent":
      result = Number(result) / 100;
      break;
  }
  printToScreen(result);
}
