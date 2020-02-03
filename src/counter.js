const number = document.querySelector("#number");
// const increase = document.querySelector("#increase");
// const decrease = document.querySelector("#decrease");
const buttons = document.querySelectorAll("button");
const [increase, decrease] = buttons;

increase.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
  console.log("increase");
};
decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
  console.log("decrease");
};
