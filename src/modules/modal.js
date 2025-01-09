const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");
  const popupContent = modal.querySelector(".popup-content");
  const modalForm = popupContent.querySelector(".main-form");
  const nameInput = modalForm.querySelector(".form-name");
  const emailInput = modalForm.querySelector(".form-email");
  const phoneInput = modalForm.querySelector(".form-phone");
  let position = -300;

  nameInput.addEventListener("input", (event) => {
    event.target.value = event.target.value.replace(/[^А-Яа-яёЁ -]+/, "");
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

  emailInput.addEventListener("input", (event) => {
    event.target.value = event.target.value.replace(/[^A-Za-z0-9@\-_.!~*']+/, "");
  });

  emailInput.addEventListener("blur", () => {
    let value = emailInput.value;
    value = value.replace(/-+/g, "-");
    emailInput.value = value;
  });

  phoneInput.addEventListener("input", (event) => {
    event.target.value = event.target.value.replace(/[^0-9()\-]+/, "");
  });

  phoneInput.addEventListener("blur", () => {
    let value = phoneInput.value;
    value = value.replace(/-+/g, "-");
    phoneInput.value = value;
  });

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
