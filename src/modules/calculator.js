const calculator = () => {
  const calcInputs = document.querySelectorAll("input.calc-item");

  calcInputs.forEach((item) => {
    item.addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/\D+/, "");
    });
  });
};

export default calculator;
