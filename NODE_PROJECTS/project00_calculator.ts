<!DOCTYPE html>
<html>
<head>
  <title>Simple Calculator</title>
  <style>
    /* Add CSS styling for buttons and display */
  </style>
</head>
<body>
  <div id="calculator">
    <input type="text" id="display" disabled>
    <div class="buttons">
      <!-- Add number and operator buttons here -->
      <button id="btn0">0</button>
      <button id="btn1">1</button>
      <!-- ... -->
      <button id="btnAdd">+</button>
      <button id="btnSubtract">-</button>
      <!-- ... -->
      <button id="btnEquals">=</button>
      <button id="btnClear">C</button>
    </div>
  </div>
  
  <script>
    // TypeScript code for the calculator logic
    const display = document.getElementById("display") as HTMLInputElement;

    // Initialize the current input and result
    let currentInput = "";
    let result = 0;

    // Handle button clicks
    function handleButtonClick(value: string) {
      if (value === "=") {
        // Calculate the result and display it
        result = eval(currentInput);
        display.value = result.toString();
      } else if (value === "C") {
        // Clear the input and display
        currentInput = "";
        display.value = "";
      } else {
        // Append the clicked value to the input
        currentInput += value;
        display.value = currentInput;
      }
    }

    // Attach click event listeners to buttons
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        handleButtonClick(button.textContent || "");
      });
    });
  </script>
</body>
</html>

