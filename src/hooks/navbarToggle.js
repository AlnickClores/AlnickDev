import { useEffect } from "react";

function useMobileMenuToggle() {
  useEffect(() => {
    const toggleButton = document.getElementById("toggleButton");
    const mobileMenu = document.getElementById("mobileMenu");
    const barsIcon = toggleButton.querySelector(".fa-bars");
    const xIcon = toggleButton.querySelector(".fa-x");

    const toggleMenu = () => {
      mobileMenu.classList.toggle("hidden");
      barsIcon.classList.toggle("hidden");
      xIcon.classList.toggle("hidden");
    };

    const handleLinkClick = () => {
      toggleMenu();
    };

    toggleButton.addEventListener("click", toggleMenu);

    document.querySelectorAll(".navbar .nav-link").forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      toggleButton.removeEventListener("click", toggleMenu);
      document.querySelectorAll(".navbar .nav-link").forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);
}

export default useMobileMenuToggle;
