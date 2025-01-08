const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");
  const popupContent = modal.querySelector(".popup-content");
  let position = -300;

  const animate = () => {
    position += 10;
    if (position <= 0) {
      popupContent.style.transform = `translateX(${position}%)`;
      requestAnimationFrame(animate);
    }
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      if (window.innerWidth >= 768) {
        animate();
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    if (window.innerWidth >= 768) {
      popupContent.style.transform = "translateX(-300%)";
      position = -300;
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
      popupContent.style.transform = "translateX(-10%)";
    } else {
      popupContent.style.transform = "translateX(0%)";
    }
  });
};

export default modal;
