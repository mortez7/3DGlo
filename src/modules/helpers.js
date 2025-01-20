const animate = ({ timing, draw, duration }) => {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

const validate = (e) => {
  if (e.target.matches('input[type="tel"]')) {
    e.target.value = e.target.value.replace(/[^0-9()\-\+]+/, "");
  } else if (e.target.matches('input[type="email"]')) {
    e.target.value = e.target.value.replace(/[^A-Za-z0-9@\-_.!~*']+/, "");
  } else if (e.target.matches('input[type="text"], input') && !e.target.matches("input.calc-item")) {
    e.target.value = e.target.value.replace(/[^А-Яа-яёЁ \-.,?!]+/, "");
  } else if (e.target.matches("input.calc-item")) {
    e.target.value = e.target.value.replace(/\D+/, "");
  }
};

export { animate, validate };
