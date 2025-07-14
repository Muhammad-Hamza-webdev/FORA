document.addEventListener("DOMContentLoaded", function () {
  // Select all quantity containers
  const quantityContainers = document.querySelectorAll(".quantity");

  // Loop through each quantity container
  quantityContainers.forEach((container) => {
    const minusBtn = container.querySelector(".minus");
    const plusBtn = container.querySelector(".plus");
    const inputBox = container.querySelector(".input-box");

    // Add click event for minus button
    minusBtn.addEventListener("click", function () {
      let currentValue = parseInt(inputBox.value);
      if (currentValue > parseInt(inputBox.min)) {
        inputBox.value = currentValue - 1;
      }
    });

    // Add click event for plus button
    plusBtn.addEventListener("click", function () {
      let currentValue = parseInt(inputBox.value);
      if (currentValue < parseInt(inputBox.max)) {
        inputBox.value = currentValue + 1;
      }
    });

    // Ensure input stays within min/max bounds
    inputBox.addEventListener("change", function () {
      let value = parseInt(this.value);
      if (isNaN(value) || value < parseInt(this.min)) {
        this.value = this.min;
      } else if (value > parseInt(this.max)) {
        this.value = this.max;
      }
    });
  });
});
