/**
 * Override script to remove any blue highlighting from project cards
 * This script runs after all other scripts to ensure blue styles are removed
 */
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    // Function to remove blue styles from any element
    function removeBlueStyles(element) {
      if (element && element.style) {
        // Remove any blue colors
        if (element.style.color && (element.style.color.includes('#2c86c5') || element.style.color.includes('#2c2f9a') || element.style.color.includes('#0366d6'))) {
          element.style.color = '';
        }
        if (element.style.borderColor && (element.style.borderColor.includes('#2c86c5') || element.style.borderColor.includes('#2c2f9a') || element.style.borderColor.includes('#0366d6'))) {
          element.style.borderColor = '';
        }
        if (element.style.backgroundColor && (element.style.backgroundColor.includes('44, 134, 197') || element.style.backgroundColor.includes('44, 47, 154'))) {
          element.style.backgroundColor = '';
        }
        if (element.style.outline) {
          element.style.outline = 'none';
        }
        if (element.style.boxShadow && element.style.boxShadow.includes('44, 134, 197')) {
          element.style.boxShadow = element.style.boxShadow.replace(/rgba?\([^)]*44[^)]*134[^)]*197[^)]*\)/g, 'transparent');
        }
      }
    }
    
    // Override mouseenter events on project cards
    function overrideProjectCardEvents() {
      const projectCards = document.querySelectorAll('.project-card');
      
      projectCards.forEach(card => {
        // Override mouseenter
        card.addEventListener('mouseenter', function() {
          // Allow original animations but remove blue colors
          setTimeout(() => {
            removeBlueStyles(this);
            
            // Remove blue from all child elements
            const children = this.querySelectorAll('*');
            children.forEach(child => removeBlueStyles(child));
            
            // Specifically target project info and titles
            const info = this.querySelector('.project-info');
            const title = this.querySelector('.repo-title');
            if (info) removeBlueStyles(info);
            if (title) removeBlueStyles(title);
          }, 0);
        }, true); // Use capture phase to run after other handlers
        
        // Override mouseleave
        card.addEventListener('mouseleave', function() {
          // Ensure no blue styles remain
          setTimeout(() => {
            removeBlueStyles(this);
            
            // Remove blue from all child elements
            const children = this.querySelectorAll('*');
            children.forEach(child => removeBlueStyles(child));
          }, 0);
        }, true);
      });
    }
    
    // Run immediately and also after a delay to catch dynamically added elements
    overrideProjectCardEvents();
    setTimeout(overrideProjectCardEvents, 1000);
    
    // Create a mutation observer to handle dynamically added cards
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(function(node) {
            if (node.nodeType === 1) { // Element node
              if (node.classList && node.classList.contains('project-card')) {
                removeBlueStyles(node);
                // Add event listeners to new cards
                setTimeout(overrideProjectCardEvents, 100);
              }
              // Check for project cards in added subtrees
              const cards = node.querySelectorAll && node.querySelectorAll('.project-card');
              if (cards && cards.length > 0) {
                cards.forEach(removeBlueStyles);
                setTimeout(overrideProjectCardEvents, 100);
              }
            }
          });
        }
      });
    });
    
    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
})();
