const calculator = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const total = document.getElementById("total");

  // принимаем элемент, в который будем записывать значение, итоговое значение, и время анимации
  const animateValue = (target, targetValue, duration) => {
    const startValue = +total.textContent; // за стартовое значение берем текущее значение в элементе
    const startTime = performance.now(); // время отправной точки анимации

    const update = (currentTime) => {
      const elapsed = currentTime - startTime; // вычисляем сколько времени прошло с начала анимации
      const progress = Math.min(elapsed / duration, 1); // вычисляем долю завершенности анимации
      const currentValue = Math.round(startValue + (targetValue - startValue) * progress); // в зависимости от прогресса вычисляем текущее значение

      target.textContent = currentValue;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = +calcSquare.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcType.value && calcSquare.value) {
      totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }

    animateValue(total, totalValue, 1000);
  };

  calcBlock.addEventListener("input", (e) => {
    if (e.target.matches('[type="text"]')) {
      e.target.value = e.target.value.replace(/\D+/, "");
    }
    if (e.target === calcType || e.target === calcSquare || e.target === calcCount || e.target === calcDay) {
      countCalc();
    }
  });
};

export default calculator;
