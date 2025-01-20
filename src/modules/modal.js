import { animate, validate } from "./helpers";
import sendForm from "./sendForm";

const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const popupContent = modal.querySelector(".popup-content");

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

  popupContent.addEventListener("focusout", (e) => {
    let value = e.target.value;
    if (e.target.matches(".form-name")) {
      value = value.replace(/[\s+]+/g, " ");
      value = value.replace(/-+/g, "-");
      value = value.trim();
      value = value
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
    } else if (e.target.matches(".form-email")) {
      value = value.replace(/-+/g, "-");
    } else if (e.target.matches(".form-phone")) {
      value = value.replace(/-+/g, "-");
    }

    e.target.value = value;
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

  sendForm({ formId: "form3" });
};

export default modal;
