const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// Add event listener to capture keypress events
document.addEventListener("keypress", function (event) {
  // Check which key is pressed and call corresponding function
  switch (event.key) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      appendToDisplay(event.key);
      break;
    case "+":
    case "-":
    case "*":
    case "/":
    case ".":
      appendToDisplay(event.key);
      break;
    case "%":
      appendToDisplay("/100");
      break;
    case "Enter":
      calculate();
      break;
    case "c":
      clearDisplay();
      break;
    case " ":
      // Ignore space key
      break;
    case "Backspace":
      // Handle backspace if needed
      break;
    case "=":
      calculate();
      break;
    case "Enter":
      calculate();
      break;
    case "Delete":
      clearDisplay();
      break;
    case "-":
      if (display.value === "") {
        appendToDisplay(event.key);
      }
      break;
    default:
      break;
  }
});

