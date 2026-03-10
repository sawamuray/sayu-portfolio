const fadeElements = document.querySelectorAll(".fade");

function showOnScroll() {
  fadeElements.forEach((element) => {
    const position = element.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);