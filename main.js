const buttons = [...document.querySelectorAll(".btn")];
const screen = document.querySelector(".screen");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "C") {
      const confirmClear = confirm("Do you want to clear ?");
      if (confirmClear) {
        screen.textContent = "";
      }
    } else if (button.textContent === "=") {
      try {
        screen.textContent = math.evaluate(screen.textContent);
      } catch (error) {
        screen.textContent = "Error";
      }
    } else {
      screen.textContent += button.textContent;
    }
  });
});
