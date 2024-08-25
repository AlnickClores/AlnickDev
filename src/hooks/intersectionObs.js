import { useEffect } from "react";

function useIntersectionObserver(isActive) {
  useEffect(() => {
    if (!isActive) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-1");
            entry.target.classList.remove("opacity-0");
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

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, [isActive]);
}

export default useIntersectionObserver;
