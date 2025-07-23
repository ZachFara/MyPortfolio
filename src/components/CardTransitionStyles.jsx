import React from 'react';

// Style component to inject directly into the head
const CardTransitionStyles = () => {
  return (
    <style jsx global>{`
      /* Force card animations to work */
      .project-card {
        transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), 
                    box-shadow 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) !important;
        overflow: hidden !important;
        will-change: transform, box-shadow !important;
        backface-visibility: hidden !important;
        perspective: 1000px !important;
        transform: translateZ(0) !important;
        box-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;
      }
      
      .project-card:hover {
        transform: translateY(-5px) !important;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12) !important;
      }
      
      .project-card .project-image {
        overflow: hidden !important;
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
        box-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;
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
        box-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;
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
    `}</style>
  );
};

export default CardTransitionStyles;
