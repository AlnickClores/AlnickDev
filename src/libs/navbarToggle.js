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

    toggleButton.addEventListener("click", toggleMenu);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      toggleButton.removeEventListener("click", toggleMenu);
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render
}

export default useMobileMenuToggle;
