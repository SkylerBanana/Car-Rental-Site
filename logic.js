let carTypeSelect = document.querySelector("#carType");
let carImage = document.querySelector("#currentCar");

carTypeSelect.addEventListener("change", function () {
  let selectedOption = carTypeSelect.options[carTypeSelect.selectedIndex];

  let selectedValue = selectedOption.value;

  if (selectedValue === "chevy-bolt") {
    currentCar.src = "Chevy Bolt.png";
  } else if (selectedValue === "model-3") {
    currentCar.src = "Tesla Model 3.png";
  } else if (selectedValue === "ioniq") {
    currentCar.src = "hyundai ioniq.webp";
  } else if (selectedValue === "ev-6") {
    currentCar.src = "Kia Ev 6.png";
  } else {
    currentCar.src = "default_image.jpg";
  }
});
