let display = document.getElementById("display");

function appendTodisplay(value) {
  if (display.value == "Error" || display.value == "undefined" || display.value =="Infinity") {
    display.value = "";
  }
  display.value += value;
}

function clearLast() {
  display.value = display.value.slice(0, -1);
}

function cleardisplay() {
  display.value = "";
}

function Calculator() {
  try {
    let result = eval(display.value);

    if (isNaN(result) || result === undefined) {
      display.value = "Error";
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "Error"; 
  }
}
