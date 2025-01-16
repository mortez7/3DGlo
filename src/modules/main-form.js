import { validate } from "./helpers";

const mainForm = () => {
  const mainForm = document.querySelector(".main-form");
  const nameInput = mainForm.querySelector(".form-name");
  const emailInput = mainForm.querySelector(".form-email");
  const phoneInput = mainForm.querySelector(".form-phone");

  mainForm.addEventListener("input", (e) => {
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
};

export default mainForm;
