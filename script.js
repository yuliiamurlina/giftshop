openMobileMenu();
closeMobileMenu();
closeModal();
openModal();

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

function closeModal() {
  const closeButton = document.querySelector(".modal__close");
  closeButton.addEventListener("click", () => {
    document.querySelector(".overlay").style.display = "none";
  });
}

function openModal() {
  const button = document.querySelectorAll(".button");
  button.forEach((b) => {
    b.addEventListener("click", () => {
      document.querySelector(".overlay").style.display = "block";
    });
  });
}
