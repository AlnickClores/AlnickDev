const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry);
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
