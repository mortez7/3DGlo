const slider = (sliderClass, slideClass, dotClass, arrowsClass, slideActive = "portfolio-item-active", dotActive = "dot-active") => {
  if (!document.querySelector("." + sliderClass) || !document.querySelector("." + slideClass)) {
    return;
  }
  const sliderBlock = document.querySelector("." + sliderClass);
  const slides = document.querySelectorAll("." + slideClass);
  const dotsContainer = document.querySelector(".portfolio-dots");
  const timeInterval = 2000;
  let dots;
  let currentSlide = 0;
  let interval;

  const renderDots = () => {
    for (let i = 0; i < slides.length; i++) {
      let dot = document.createElement("li");
      if (i === 0) {
        dot.classList.add(dotActive);
      }
      dot.classList.add(dotClass);
      dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll("." + dotClass);
    return dots;
  };

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, slideActive);
    prevSlide(dots, currentSlide, dotActive);
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    nextSlide(slides, currentSlide, slideActive);
    nextSlide(dots, currentSlide, dotActive);
  };

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener("click", (e) => {
    e.preventDefault();

    if (!e.target.matches(`.${dotClass}, .${arrowsClass}`)) {
      return;
    }

    prevSlide(slides, currentSlide, slideActive);
    prevSlide(dots, currentSlide, dotActive);

    if (e.target.matches("#arrow-right")) {
      currentSlide++;
    } else if (e.target.matches("#arrow-left")) {
      currentSlide--;
    } else if (e.target.classList.contains(dotClass)) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, slideActive);
    nextSlide(dots, currentSlide, dotActive);
  });

  sliderBlock.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(`.${dotClass}, .${arrowsClass}`)) {
        stopSlide();
      }
    },
    true
  );

  sliderBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(`.${dotClass}, .${arrowsClass}`)) {
        startSlide(timeInterval);
      }
    },
    true
  );

  dots = renderDots();
  startSlide(timeInterval);
};

export default slider;
