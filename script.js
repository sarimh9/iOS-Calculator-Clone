const screenText = document.querySelector(".text-in-screen");
const allButtons = document.querySelectorAll(".btn");
var currentScreenValue = "";
var flag = 0;

allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    var currentButton = button.innerText;
    if (currentButton == "+/-") {
      return;
    }
    if (currentButton == "÷") {
      currentButton = "/";
    }
    if (currentButton == "AC") {
      currentScreenValue = "";
      displayOnScreen(0);
      return;
    }
    if (currentButton == "x") {
      currentButton = "*";
    }
    if (currentButton == "=") {
      try {
        currentScreenValue = eval(currentScreenValue);
      } catch (error) {
        displayOnScreen("Error!");
        currentScreenValue = "";
        return;
      }
      var stringAns = currentScreenValue.toString();
      if (stringAns.includes(".")) {
        stringAns = trimString(stringAns);
      }
      displayOnScreen(stringAns);
      return;
    }
    currentScreenValue += currentButton;
    displayOnScreen(currentScreenValue);
  });
});

function displayOnScreen(ans) {
  screenText.innerText = ans;
}

function trimString(str) {
  var temp = str * 1.0;
  return temp.toFixed(4);
}
