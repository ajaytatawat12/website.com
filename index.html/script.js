document.addEventListener("DOMContentLoaded", function () {

  // MENU TOGGLE
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.getElementById("menu");
  
  if (menuIcon && menu) {
    menuIcon.addEventListener("click", function (e) {
      e.stopPropagation();
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function () {
      menu.style.display = "none";
    });

    menu.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }

  // SECTIONS
  const aboutLink = document.querySelector(".about-link");
  const servicesLink = document.querySelector(".services-link");
  const aboutSection = document.getElementById("about-section");
  const servicesSection = document.getElementById("services-section");
  const heroSection = document.getElementById("hero-section");
  const formSection = document.getElementById("form-section");
  const backBtn = document.getElementById("back-btn");
  const servicesBackBtn = document.getElementById("services-back-btn");
  const contactLink = document.querySelector(".contact-link");
  const contactSection = document.getElementById("contact-section");
  const contactBackBtn = document.getElementById("contact-back-btn");

  let currentSection = "home";

  // ABOUT BUTTON
  if (aboutLink) {
    aboutLink.addEventListener("click", function (e) {
      e.preventDefault();
      
      if (currentSection === "about") {
        // Hide About and show home
        aboutSection.style.display = "none";
        heroSection.style.display = "flex";
        formSection.style.display = "block";
        currentSection = "home";
      } else {
        // Show About
        heroSection.style.display = "none";
        formSection.style.display = "none";
        servicesSection.style.display = "none";
        aboutSection.style.display = "block";
        currentSection = "about";
      }
      menu.style.display = "none";
    });
  }

  // SERVICES BUTTON
  if (servicesLink) {
    servicesLink.addEventListener("click", function (e) {
      e.preventDefault();
      
      if (currentSection === "services") {
        // Hide Services and show home
        servicesSection.style.display = "none";
        heroSection.style.display = "flex";
        formSection.style.display = "block";
        currentSection = "home";
      } else {
        // Show Services
        heroSection.style.display = "none";
        formSection.style.display = "none";
        aboutSection.style.display = "none";
        servicesSection.style.display = "block";
        currentSection = "services";
      }
      menu.style.display = "none";
    });
  }

  // CONTACT BUTTON
  if (contactLink) {
    contactLink.addEventListener("click", function (e) {
      e.preventDefault();
      
      if (typeof currentSection !== "undefined" && currentSection === "contact") {
        contactSection.style.display = "none";
        heroSection.style.display = "flex";
        formSection.style.display = "block";
        currentSection = "home";
      } else {
        heroSection.style.display = "none";
        formSection.style.display = "none";
        aboutSection.style.display = "none";
        servicesSection.style.display = "none";
        contactSection.style.display = "block";
        currentSection = "contact";
      }
      menu.style.display = "none";
    });
  }

  // BACK BUTTONS
  if (backBtn) {
    backBtn.addEventListener("click", function () {
      aboutSection.style.display = "none";
      heroSection.style.display = "flex";
      formSection.style.display = "block";
      currentSection = "home";
    });
  }

  if (servicesBackBtn) {
    servicesBackBtn.addEventListener("click", function () {
      servicesSection.style.display = "none";
      heroSection.style.display = "flex";
      formSection.style.display = "block";
      currentSection = "home";
    });
  }

  if (contactBackBtn) {
    contactBackBtn.addEventListener("click", function () {
      contactSection.style.display = "none";
      heroSection.style.display = "flex";
      formSection.style.display = "block";
      currentSection = "home";
    });
  }

});