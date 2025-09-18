
let display = document.querySelector(".st1"); 

function press(value) {
  switch (value) {
    case "C": 
      display.value = "";
      break;

    case "CE": 
      display.value = display.value.slice(0, -1);
      break;

    case "=": 
      try {
        display.value = eval(display.value); 
      } catch (error) {
        display.value = "Error";
      }
      break;

    case "+/-": 
      if (display.value) {
        display.value = String(-parseFloat(display.value));
      }
      break;

    case "%": 
      if (display.value) {
        display.value = String(parseFloat(display.value) / 100);
      }
      break;

    default: 
      display.value += value;
      break;
  }
}