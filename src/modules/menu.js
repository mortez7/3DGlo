const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");
  const scrollBtn = document.querySelector('[href="#service-block"]');

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  const scrollToTarget = (element) => {
    const targetId = element.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  menuBtn.addEventListener("click", handleMenu);
  closeBtn.addEventListener("click", handleMenu);

  menuItems.forEach((menuItem) =>
    menuItem.addEventListener("click", (event) => {
      event.preventDefault();
      scrollToTarget(menuItem);
      handleMenu();
    })
  );

  scrollBtn.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToTarget(scrollBtn);
  });
};

export default menu;
