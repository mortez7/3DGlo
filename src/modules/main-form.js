import { validate } from "./helpers";
import sendForm from "./sendForm";

const mainForm = () => {
  const mainForm = document.querySelector(".main-form");

  mainForm.addEventListener("input", (e) => {
    validate(e);
  });

  mainForm.addEventListener("focusout", (e) => {
    if (e.target.matches(".form-name")) {
      let value = e.target.value;

      value = value.replace(/[\s+]+/g, " ");
      value = value.replace(/-+/g, "-");
      value = value.trim();
      value = value
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
      e.target.value = value;
    } else if (e.target.matches(".form-email")) {
      let value = e.target.value;
      value = value.replace(/-+/g, "-");
      e.target.value = value;
    } else if (e.target.matches(".form-phone")) {
      let value = e.target.value;
      value = value.replace(/-+/g, "-");
      e.target.value = value;
    }
  });

  sendForm({
    formId: "form1",
    someElem: [
      {
        type: "block",
        id: "total",
      },
    ],
  });
};

export default mainForm;
