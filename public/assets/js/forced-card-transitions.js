/**
 * Forced card transitions - This script applies the animations directly using JavaScript
 * to ensure they work across browsers
 */
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    // Apply hover effects to all project cards
    function applyProjectCardEffects() {
      const projectCards = document.querySelectorAll('.project-card');
      
      projectCards.forEach(card => {
        // Apply smoother animation using CSS transitions
        card.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)';
        card.style.willChange = 'transform, box-shadow';
        card.style.transform = 'translateZ(0)'; // Force hardware acceleration
        
        let animationFrame = null;
        
        card.addEventListener('mouseenter', function() {
          // Cancel any pending animation frame
          if (animationFrame) cancelAnimationFrame(animationFrame);
          
          // Use double requestAnimationFrame for improved timing across browsers
          animationFrame = requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              this.style.transform = 'translateY(-5px)';
              this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.12)';
              
              // Apply image effect if there's an image
              const image = this.querySelector('.project-image img');
              if (image) {
                image.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)';
                image.style.transform = 'scale(1.05)';
              }
            });
          });
        });
        
        card.addEventListener('mouseleave', function() {
          // Cancel any pending animation frame
          if (animationFrame) cancelAnimationFrame(animationFrame);
          
          // Use double requestAnimationFrame for improved timing across browsers
          animationFrame = requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              this.style.transform = 'translateY(0)';
              this.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
              
              // Reset image effect
              const image = this.querySelector('.project-image img');
              if (image) {
                image.style.transform = 'scale(1)';
              }
            });
          });
        });
      });
    }
    
    // Apply hover effects to repository cards
    function applyRepoCardEffects() {
      const repoCards = document.querySelectorAll('.repo-card');
      
      repoCards.forEach(card => {
        // Apply smoother animation using CSS transitions
        card.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)';
        card.style.willChange = 'transform, box-shadow';
        card.style.transform = 'translateZ(0)'; // Force hardware acceleration
        
        let animationFrame = null;
        
        card.addEventListener('mouseenter', function() {
          // Cancel any pending animation frame
          if (animationFrame) cancelAnimationFrame(animationFrame);
          
          // Use double requestAnimationFrame for improved timing across browsers
          animationFrame = requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              this.style.transform = 'translateY(-5px)';
              this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.12)';
              
              // Apply title effect
              const title = this.querySelector('.repo-title');
              if (title) {
                title.style.transition = 'color 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)';
                title.style.color = '#2c86c5';
              }
            });
          });
        });
        
        card.addEventListener('mouseleave', function() {
          // Cancel any pending animation frame
          if (animationFrame) cancelAnimationFrame(animationFrame);
          
          // Use double requestAnimationFrame for improved timing across browsers
          animationFrame = requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              this.style.transform = 'translateY(0)';
              this.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
              
              // Reset title effect
              const title = this.querySelector('.repo-title');
              if (title) {
                title.style.color = '#0366d6';
              }
            });
          });
        });
      });
    }
    
    // Apply hover effects to mini-posts
    function applyMiniPostEffects() {
      const miniPosts = document.querySelectorAll('.mini-posts article');
      
      miniPosts.forEach(post => {
        // Apply smoother animation using CSS transitions
        post.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)';
        post.style.willChange = 'transform, box-shadow';
        post.style.transform = 'translateZ(0)'; // Force hardware acceleration
        
        let animationFrame = null;
        
        post.addEventListener('mouseenter', function() {
          // Cancel any pending animation frame
          if (animationFrame) cancelAnimationFrame(animationFrame);
          
          // Use double requestAnimationFrame for improved timing across browsers
          animationFrame = requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              this.style.transform = 'translateY(-3px)';
              this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
              
              // Apply image effect
              const image = this.querySelector('.image img');
              if (image) {
                image.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)';
                image.style.transform = 'scale(1.05)';
              }
            });
          });
        });
        
        post.addEventListener('mouseleave', function() {
          // Cancel any pending animation frame
          if (animationFrame) cancelAnimationFrame(animationFrame);
          
          // Use double requestAnimationFrame for improved timing across browsers
          animationFrame = requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              this.style.transform = 'translateY(0)';
              this.style.boxShadow = 'none';
              
              // Reset image effect
              const image = this.querySelector('.image img');
              if (image) {
                image.style.transform = 'scale(1)';
              }
            });
          });
        });
      });
    }
    
    // Apply all effects
    applyProjectCardEffects();
    applyRepoCardEffects();
    applyMiniPostEffects();
    
    // Re-apply effects when the DOM changes (for SPA navigation)
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() {
        applyProjectCardEffects();
        applyRepoCardEffects();
        applyMiniPostEffects();
      }, 100);
    });
    
    // Also re-apply on window load to catch any delayed elements
    window.addEventListener('load', function() {
      setTimeout(function() {
        applyProjectCardEffects();
        applyRepoCardEffects();
        applyMiniPostEffects();
      }, 100);
    });
    
    // Add an interval to periodically check for new cards (useful for SPA navigation)
    setInterval(function() {
      applyProjectCardEffects();
      applyRepoCardEffects();
      applyMiniPostEffects();
    }, 2000); // Check every 2 seconds
  });
})();
