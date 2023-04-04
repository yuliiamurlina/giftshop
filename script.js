openMobileMenu();
closeMobileMenu();

const mobileMenu = document.querySelector(".menu");

function openMobileMenu() {
  const hamburger = document.querySelector(".header__mobile");

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });
}

function closeMobileMenu() {
  const close = document.querySelector(".close");
  close.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
}
