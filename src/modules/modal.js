const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");
  const popupContent = modal.querySelector(".popup-content");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      if (window.innerWidth >= 768) {
        popupContent.style.transform = "translateX(-300%)";
        popupContent.style.transition = "transform 0.3s";

        setTimeout(() => {
          popupContent.style.transform = "translateX(0%)";
        }, 200);
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    if (window.innerWidth >= 768) {
      popupContent.style.transform = "translateX(-300%)";
    }
  });
};

export default modal;
