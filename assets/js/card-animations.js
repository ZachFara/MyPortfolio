/**
 * This script enhances the hover effects on cards throughout the site
 * by directly manipulating the DOM elements when needed.
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Function to apply hover effects to project cards
  function enhanceProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
      // Store original transform and box-shadow
      const originalTransform = window.getComputedStyle(card).transform;
      const originalBoxShadow = window.getComputedStyle(card).boxShadow;
      
      // Add event listeners for mouseenter
      card.addEventListener('mouseenter', function() {
        // Apply transform and box-shadow directly
        card.style.transform = 'translateY(-8px)';
        card.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.15)';
        
        // Find and enhance the image if it exists
        const img = card.querySelector('.project-image img');
        if (img) {
          img.style.transform = 'scale(1.05)';
        }
        
        // Enhance project info
        const info = card.querySelector('.project-info');
        if (info) {
          // Removed blue background color
        }
      });
      
      // Add event listeners for mouseleave
      card.addEventListener('mouseleave', function() {
        // Restore original styles
        card.style.transform = originalTransform;
        card.style.boxShadow = originalBoxShadow;
        card.style.borderColor = '';
        
        // Restore image
        const img = card.querySelector('.project-image img');
        if (img) {
          img.style.transform = '';
        }
        
        // Restore project info
        const info = card.querySelector('.project-info');
        if (info) {
          info.style.backgroundColor = '';
        }
      });
    });
  }
  
  // Function to apply hover effects to repository cards
  function enhanceRepoCards() {
    const repoCards = document.querySelectorAll('.repo-card');
    
    repoCards.forEach(card => {
      // Store original transform and box-shadow
      const originalTransform = window.getComputedStyle(card).transform;
      const originalBoxShadow = window.getComputedStyle(card).boxShadow;
      
      // Add event listeners for mouseenter
      card.addEventListener('mouseenter', function() {
        // Apply transform and box-shadow directly
        card.style.transform = 'translateY(-8px)';
        card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
      });
      
      // Add event listeners for mouseleave
      card.addEventListener('mouseleave', function() {
        // Restore original styles
        card.style.transform = originalTransform;
        card.style.boxShadow = originalBoxShadow;
        card.style.borderColor = '';
        
        // Restore title
        const title = card.querySelector('.repo-title');
        if (title) {
          title.style.color = '';
        }
      });
    });
  }
  
  // Function to apply hover effects to mini-posts
  function enhanceMiniPosts() {
    const miniPosts = document.querySelectorAll('.mini-posts article');
    
    miniPosts.forEach(post => {
      // Store original transform and box-shadow
      const originalTransform = window.getComputedStyle(post).transform;
      const originalBoxShadow = window.getComputedStyle(post).boxShadow;
      
      // Add event listeners for mouseenter
      post.addEventListener('mouseenter', function() {
        // Apply transform and box-shadow directly
        post.style.transform = 'translateY(-5px)';
        post.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        post.style.borderTopColor = 'transparent';
        
        // Enhance image
        const img = post.querySelector('.image img');
        if (img) {
          img.style.transform = 'scale(1.05)';
        }
      });
      
      // Add event listeners for mouseleave
      post.addEventListener('mouseleave', function() {
        // Restore original styles
        post.style.transform = originalTransform;
        post.style.boxShadow = originalBoxShadow;
        post.style.borderTopColor = '';
        
        // Restore image
        const img = post.querySelector('.image img');
        if (img) {
          img.style.transform = '';
        }
      });
    });
  }
  
  // Execute all enhancements
  enhanceProjectCards();
  enhanceRepoCards();
  enhanceMiniPosts();
  
  // Re-apply enhancements if DOM changes (for dynamic content)
  const observer = new MutationObserver(function(mutations) {
    enhanceProjectCards();
    enhanceRepoCards();
    enhanceMiniPosts();
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
});
