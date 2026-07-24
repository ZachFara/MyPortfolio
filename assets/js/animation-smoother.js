/**
 * Animation Smoother - Helps optimize animations by reducing browser repaints
 * and ensuring optimal timing for transitions
 */
(function() {
  // Function to reduce animation jank
  function optimizeAnimations() {
    // Force repaint to clean up any visual artifacts
    document.body.style.willChange = 'transform';
    document.body.style.transform = 'translateZ(0)';
    
    // Better touch/scroll handling
    document.documentElement.style.touchAction = 'manipulation';
    
    // Target all animated elements
    const animatedElements = document.querySelectorAll('.project-card, .repo-card, .mini-posts article');
    
    // Set properties that help with animation performance
    animatedElements.forEach(el => {
      // Use transform3d for hardware acceleration
      el.style.transform = 'translate3d(0,0,0)';
      el.style.backfaceVisibility = 'hidden';
      el.style.perspective = '1000px';
      
      // Adjust timing function for smoother animations
      const computedStyle = window.getComputedStyle(el);
      const currentTransition = computedStyle.getPropertyValue('transition');
      
      if (currentTransition && !currentTransition.includes('cubic-bezier(0.25, 0.1, 0.25, 1)')) {
        // Replace with the smoother timing function
        el.style.transition = currentTransition.replace(
          /cubic-bezier\([^)]+\)/g, 
          'cubic-bezier(0.25, 0.1, 0.25, 1)'
        );
      }
    });
  }
  
  // Monitor for resize which can cause animation jitter
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    document.body.classList.add('resize-animation-stopper');
    resizeTimer = setTimeout(function() {
      document.body.classList.remove('resize-animation-stopper');
      optimizeAnimations();
    }, 400);
  });
  
  // Run optimization on page load
  document.addEventListener('DOMContentLoaded', function() {
    optimizeAnimations();
  });
  
  // Run again after page is fully loaded
  window.addEventListener('load', function() {
    setTimeout(optimizeAnimations, 100);
  });
  
  // Monitor for route changes in SPA
  const pushState = history.pushState;
  history.pushState = function() {
    pushState.apply(history, arguments);
    setTimeout(optimizeAnimations, 100);
  };
  
  window.addEventListener('popstate', function() {
    setTimeout(optimizeAnimations, 100);
  });
})();
