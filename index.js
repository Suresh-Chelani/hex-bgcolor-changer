const colorInput = document.getElementById("colorInput");
const errorMessage = document.querySelector(".error-message");
const hexDisplay = document.querySelector(".hex-display");
const resetBtn = document.querySelector(".reset-btn");
const previewBtn = document.querySelector(".preview-btn");
const applyBtn = document.querySelector(".apply-btn");

// Function to validate a 6-digit number or alphanumeric string.
const validateHex = (value) => {
  return /^[0-9a-f]{6}$/.test(value);
};

//  Function to display a message (success or error).
const showMessage = (message, isSuccess) => {
  errorMessage.textContent = message;
  errorMessage.style.color = isSuccess ? "green" : "red";
  errorMessage.style.visibility = "visible";
  // If it's an error, apply a temporary shake effect
  if (!isSuccess) {
    colorInput.classList.add("error");
    setTimeout(() => colorInput.classList.remove("error"), 400);
  }

  // Hide the message after 3 seconds
  setTimeout(() => {
    errorMessage.style.visibility = "hidden";
  }, 3000);
};

/**
 * Function to preview the background color without saving it.
 */

const previewFun = () => {
  const value = colorInput.value.trim();
  colorInput.classList.remove("animated");
  if (validateHex(value)) {
    document.body.style.backgroundColor = `#${value}`;
    hexDisplay.textContent = `#${value}`;
    hexDisplay.classList.add("visible");
    colorInput.classList.remove("error");
    errorMessage.textContent = "";
    showMessage("PREVIEW", true);
    const scrollAmount = document.body.scrollHeight * 0.25;
    window.scrollBy({
      top: scrollAmount,
      behavior: "smooth",
    });
  } else {
    if (value.length < 6) {
      showMessage("Minimum 6 alphanumeric digits required!", false);
    } else {
      showMessage("Enter only 6 digits allowed (0-9, a-f)!", false);
    }
  }
};

/**
 * Function to apply the selected color permanently and save it in localStorage.
 */

const applyFun = () => {
  const value = colorInput.value.trim();
  colorInput.classList.remove("animated");
  if (validateHex(value)) {
    document.body.style.backgroundColor = `#${value}`;
    hexDisplay.textContent = `#${value}`;
    hexDisplay.classList.add("visible");
    colorInput.classList.remove("error");
    errorMessage.textContent = "";
    localStorage.setItem("bgColor", `#${value}`);
    showMessage("Successfully Applied", true);
    const scrollAmount = document.body.scrollHeight * 0.25;
    window.scrollBy({
      top: scrollAmount,
      behavior: "smooth",
    });
  } else {
    if (value.length < 6) {
      showMessage("Minimum 6 alphanumeric digits required!", false);
    } else {
      showMessage("Enter only 6 digits allowed (0-9, a-f)!", false);
    }
  }
};

/**
 * Function to reset the input field and background color.
 */

const resetFun = () => {
  colorInput.value = "";
  document.body.style.backgroundColor = "";
  hexDisplay.textContent = "";
  colorInput.classList.remove("error");
  errorMessage.textContent = "";
  showMessage("RESET", true);
  localStorage.removeItem("bgColor");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/**
 * Function to handle the Enter key event for the input field.
 */

colorInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const inputValue = colorInput.value.trim();

    if (validateHex(inputValue)) {
      const scrollAmount = document.body.scrollHeight * 0.25;
      window.scrollBy({
        top: scrollAmount,
        behavior: "smooth",
      });
      applyFun();
    } else {
      if (inputValue.length < 6) {
        showMessage("Minimum 6 alphanumeric digits required!", false);
      } else {
        showMessage("Enter only 6 digits allowed (0-9, a-f)!", false);
      }
    }
  }
});

/**
 * When the page loads, check if there is a saved color in localStorage.
 * If a color exists, apply it to the background.
 */
document.addEventListener("DOMContentLoaded", () => {
  const savedColor = localStorage.getItem("bgColor");
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    hexDisplay.textContent = savedColor;
    hexDisplay.classList.add("visible");
  }
});
