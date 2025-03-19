
export const initScrollAnimations = () => {
  // Initialize scroll animations
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  };

  // Create the intersection observer
  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: "0px 0px -100px 0px",
    threshold: 0.1,
  });

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll(
    ".scroll-fade-in, .scroll-fade-right, .scroll-fade-left, .scroll-scale, .scroll-fade-up, .scroll-stagger-item"
  );
  
  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  return () => {
    // Cleanup when component unmounts
    animatedElements.forEach((element) => {
      observer.unobserve(element);
    });
  };
};

// Function to initialize scroll animations on page load/change
export const setupScrollAnimations = () => {
  // Clean up any previous observers first
  const cleanup = initScrollAnimations();
  
  // Re-initialize on subsequent navigations
  window.addEventListener("popstate", () => {
    cleanup();
    initScrollAnimations();
  });
  
  // Re-initialize when route changes cause new content to load
  const mainContent = document.querySelector("main");
  if (mainContent) {
    const observer = new MutationObserver(() => {
      cleanup();
      initScrollAnimations();
    });
    
    observer.observe(mainContent, { childList: true, subtree: true });
    
    return () => {
      observer.disconnect();
      cleanup();
    };
  }
  
  return cleanup;
};
