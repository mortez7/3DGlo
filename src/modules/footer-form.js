import { validate } from "./helpers";
import sendForm from "./sendForm";

const footerForm = () => {
  const footerForm = document.querySelector(".footer-form");

  footerForm.addEventListener("input", (e) => {
    validate(e);
  });

  footerForm.addEventListener("focusout", (e) => {
    let value = e.target.value;
    if (e.target.matches("#form2-name")) {
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
    } else if (e.target.matches(".mess")) {
      value = value.replace(/[\s+]+/g, " ");
      value = value.replace(/-+/g, "-");
      value = value.trim();
    }

    e.target.value = value;
  });

  sendForm({ formId: "form2" });
};

export default footerForm;
