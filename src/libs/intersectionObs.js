import { useEffect } from "react";

function useIntersectionObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("opacity-1");
          } else {
            entry.target.classList.remove("opacity-1");
            entry.target.classList.add("opacity-0");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const hiddenElements = document.querySelectorAll(".animateHidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup function to disconnect observer when component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render
}

export default useIntersectionObserver;
