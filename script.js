// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Dark mode toggle
    const toggleBtn = document.getElementById("darkToggle");
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  
    // Scroll to top
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    window.addEventListener("scroll", () => {
      scrollToTopBtn.style.display = window.scrollY > 100 ? "block" : "none";
    });
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // Auto type effect
    const words = ["Build Websites", "Boost Your Brand", "Grow Your Business"];
    let wordIndex = 0, charIndex = 0;
    const typedText = document.getElementById("typedText");
    function typeEffect() {
      if (charIndex < words[wordIndex].length) {
        typedText.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
      } else {
        setTimeout(() => {
          typedText.textContent = "";
          charIndex = 0;
          wordIndex = (wordIndex + 1) % words.length;
          typeEffect();
        }, 1500);
      }
    }
    typeEffect();

    document.getElementById("year").textContent = new Date().getFullYear();
  });
  const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(link => link.classList.remove("active"));
    link.classList.add("active");
  });
});
