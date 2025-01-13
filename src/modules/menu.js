const menu = () => {
  const menu = document.querySelector("menu");

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  const scrollToTarget = (element) => {
    const targetId = element.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => {
    document.addEventListener("click", (e) => {
      if (e.target.closest(".menu") || e.target.classList.contains("close-btn")) {
        handleMenu();
      } else if (e.target.closest("menu") && e.target.closest("a")) {
        e.preventDefault();
        scrollToTarget(e.target);
        handleMenu();
      } else if (e.target.closest('[href="#service-block"]')) {
        e.preventDefault();
        scrollToTarget(e.target.closest('[href="#service-block"]'));
      } else if (e.target.closest("main") && !e.target.closest("menu")) {
        menu.classList.remove("active-menu");
      }
    });
  };

  toggleMenu();
};

export default menu;
