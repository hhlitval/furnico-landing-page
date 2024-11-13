const mobileMenu = document.querySelector(".header-nav-burger"),
  nav = document.querySelector(".header-nav-main__list");

mobileMenu.addEventListener("click", () => {
  nav.classList.toggle("mobile");
  mobileMenu.classList.toggle("mobile");

  if (nav.classList.contains("mobile")) {
    document.documentElement.classList.add("no-scroll");
  } else {
    document.documentElement.classList.remove("no-scroll");
  }
  // window.addEventListener("resize", function () {
  //   // above 978px
  //   if (window.matchMedia("(min-width: 978px)").matches) {
  //     if (nav.classList.contains("mobile")) {
  //       nav.classList.remove("mobile");
  //       document.documentElement.classList.remove("no-scroll");
  //     }
  //   }
  // });
});
