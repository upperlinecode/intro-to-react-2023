const buttons = document.querySelectorAll("button.add-item");
const orderDescription = document.querySelector("#items");
const orderTotal = document.querySelector("#order-total");

console.log(buttons);

const order = [];
let total = 0;

const updateFinalOrder = () => {};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button);
  });
});
