import { animate, validate } from "./helpers";

const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const popupContent = modal.querySelector(".popup-content");
  const modalForm = popupContent.querySelector(".main-form");
  const nameInput = modalForm.querySelector(".form-name");
  const emailInput = modalForm.querySelector(".form-email");
  const phoneInput = modalForm.querySelector(".form-phone");

  modal.addEventListener("click", (e) => {
    if (!e.target.closest(".popup-content") || e.target.classList.contains("popup-close")) {
      modal.style.display = "none";
      if (window.innerWidth >= 768) {
        popupContent.style.transform = "translateX(-300%)";
      }
    }
  });

  popupContent.addEventListener("input", (e) => {
    validate(e);
  });

  nameInput.addEventListener("blur", () => {
    let value = nameInput.value;

    value = value.replace(/[\s+]+/g, " ");
    value = value.replace(/-+/g, "-");
    value = value.trim();
    value = value
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    nameInput.value = value;
  });

  emailInput.addEventListener("blur", () => {
    let value = emailInput.value;
    value = value.replace(/-+/g, "-");
    emailInput.value = value;
  });

  phoneInput.addEventListener("blur", () => {
    let value = phoneInput.value;
    value = value.replace(/-+/g, "-");
    phoneInput.value = value;
  });

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      if (window.innerWidth >= 768) {
        animate({
          duration: 400,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            const start = -300;
            const end = 0;
            const current = start + (end - start) * progress;
            popupContent.style.transform = `translateX(${current}%)`;
          },
        });
      }
    });
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
