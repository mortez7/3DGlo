import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import calculator from "./modules/calculator";
import mainForm from "./modules/main-form";
import footerForm from "./modules/footer-form";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import sendForm from "./modules/sendForm";

timer("10 january 2025");
menu();
modal();
calculator(100);
mainForm();
footerForm();
tabs();
slider("portfolio-content", "portfolio-item", "dot", "portfolio-btn");
// sendForm({
//   formId: "form1",
//   someElem: [
//     {
//       type: "block",
//       id: "total",
//     },
//   ],
// });
