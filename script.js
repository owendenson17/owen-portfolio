const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  if (navMenu.classList.contains("open")) {
    menuButton.textContent = "Close";
  } else {
    menuButton.textContent = "Menu";
  }
});

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight - 80;

    if (position < screenPosition) {
      element.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

document.getElementById("year").textContent = new Date().getFullYear();