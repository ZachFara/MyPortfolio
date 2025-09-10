import React from 'react';

// Style component to inject directly into the head
const CardTransitionStyles = () => {
  return (
    <style jsx global>{`
      /* CRITICAL FIX: Remove blue highlighting from anchor tags wrapping project cards */
      .project-link {
        color: inherit !important;
        text-decoration: none !important;
        border: none !important;
        outline: none !important;
        background: none !important;
        -webkit-tap-highlight-color: transparent !important;
      }
      
      .project-link:hover,
      .project-link:focus,
      .project-link:active,
      .project-link:visited {
        color: inherit !important;
        text-decoration: none !important;
        border: none !important;
        border-bottom: none !important;
        outline: none !important;
        background: none !important;
        box-shadow: none !important;
        -webkit-tap-highlight-color: transparent !important;
      }

      /* Force card animations to work */
      .project-card,
      .repo-card {
        transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), 
                    box-shadow 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) !important;
        overflow: hidden !important;
        will-change: transform, box-shadow !important;
        backface-visibility: hidden !important;
        perspective: 1000px !important;
        transform: translateZ(0) !important;
      }
      
      .project-card:hover,
      .repo-card:hover {
        transform: translateY(-5px) !important;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12) !important;
      }
      
      .project-card .project-image,
      .repo-card .repo-image {
        overflow: hidden !important;
      }
      
      .project-card .project-image img,
      .repo-card .repo-image img {
        transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1) !important;
        will-change: transform !important;
        backface-visibility: hidden !important;
      }
      
      .project-card:hover .project-image img,
      .repo-card:hover .repo-image img {
        transform: scale(1.05) !important;
      }
      
      .project-card .project-image img {
        transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) !important;
        backface-visibility: hidden !important;
        transform: translateZ(0) !important;
      }
      
      .project-card:hover .project-image img {
        transform: scale(1.05) !important;
      }
      
      /* Repository cards */
      .repo-card {
        transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), 
                    box-shadow 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) !important;
        will-change: transform, box-shadow !important;
        backface-visibility: hidden !important;
        perspective: 1000px !important;
        transform: translateZ(0) !important;
      }
      
      .repo-card:hover {
        transform: translateY(-5px) !important;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12) !important;
      }
      
      /* Sidebar mini-posts */
      .mini-posts article {
        transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), 
                    box-shadow 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) !important;
        border-top-color: transparent !important;
        will-change: transform, box-shadow !important;
        backface-visibility: hidden !important;
        perspective: 1000px !important;
        transform: translateZ(0) !important;
        border: 1px solid rgba(210, 215, 217, 0.75) !important;
      }
      
      .mini-posts article:hover {
        transform: translateY(-3px) !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
      }
      
      .mini-posts article .image img {
        transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) !important;
        backface-visibility: hidden !important;
        transform: translateZ(0) !important;
      }
      
      .mini-posts article:hover .image img {
        transform: scale(1.05) !important;
      }

      /* Disable text selection highlighting - this causes the blue rectangle */
      ::selection {
        background: transparent !important;
        color: inherit !important;
      }

      ::-moz-selection {
        background: transparent !important;
        color: inherit !important;
      }

      .project-link::selection,
      .project-card::selection,
      .project-card *::selection {
        background: transparent !important;
        color: inherit !important;
      }

      .project-link::-moz-selection,
      .project-card::-moz-selection,
      .project-card *::-moz-selection {
        background: transparent !important;
        color: inherit !important;
      }

      /* Disable user selection entirely for project cards */
      .project-link,
      .project-card,
      .project-card * {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
      }

      /* Additional focus outline removal */
      .project-link:focus,
      .project-link:focus-visible {
        outline: none !important;
        box-shadow: none !important;
      }
    `}</style>
  );
};

export default CardTransitionStyles;