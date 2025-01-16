import { validate } from "./helpers";

const footerForm = () => {
  const footerForm = document.querySelector(".footer-form");
  const nameInput = footerForm.querySelector("#form2-name");
  const emailInput = footerForm.querySelector(".form-email");
  const phoneInput = footerForm.querySelector(".form-phone");
  const textField = footerForm.querySelector(".mess");

  footerForm.addEventListener("input", (e) => {
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

  textField.addEventListener("blur", () => {
    let value = textField.value;

    value = value.replace(/[\s+]+/g, " ");
    value = value.replace(/-+/g, "-");
    value = value.trim();

    textField.value = value;
  });
};

export default footerForm;
