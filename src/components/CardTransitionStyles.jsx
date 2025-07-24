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
      
      /* Sidebar mini-posts - super specific selectors to override all other styles */
      html body #sidebar .mini-posts article,
      html body #sidebar .inner .mini-posts article,
      html body #sidebar .mini-posts .sidebar-blog-post,
      html body .mini-posts article,
      html body .mini-posts .sidebar-blog-post,
      body section.mini-posts article,
      #wrapper .mini-posts article,
      #wrapper #sidebar .mini-posts article,
      .mini-posts article.sidebar-blog-post,
      .mini-posts article {
        transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), 
                    box-shadow 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) !important;
        border-top-color: transparent !important;
        will-change: transform, box-shadow !important;
        backface-visibility: hidden !important;
        perspective: 1000px !important;
        transform: translateZ(0) !important;
        box-shadow: none !important;
        border: 1px solid rgba(210, 215, 217, 0.75) !important;
      }
      
      html body #sidebar .mini-posts article:hover,
      html body #sidebar .inner .mini-posts article:hover,
      html body #sidebar .mini-posts .sidebar-blog-post:hover,
      html body .mini-posts article:hover,
      html body .mini-posts .sidebar-blog-post:hover,
      body section.mini-posts article:hover,
      #wrapper .mini-posts article:hover,
      #wrapper #sidebar .mini-posts article:hover,
      .mini-posts article.sidebar-blog-post:hover,
      .mini-posts article:hover {
        transform: translateY(-3px) !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
      }
      
      html body #sidebar .mini-posts article .image img,
      html body .mini-posts article .image img,
      body section.mini-posts article .image img,
      #wrapper .mini-posts article .image img,
      .mini-posts article .image img {
        transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) !important;
        backface-visibility: hidden !important;
        transform: translateZ(0) !important;
      }
      
      html body #sidebar .mini-posts article:hover .image img,
      html body .mini-posts article:hover .image img,
      body section.mini-posts article:hover .image img,
      #wrapper .mini-posts article:hover .image img,
      .mini-posts article:hover .image img {
        transform: scale(1.05) !important;
      }
      
      /* Target all sidebar elements with maximum specificity */
      html body #sidebar .mini-posts article,
      html body #sidebar article,
      html body #sidebar .sidebar-blog-post,
      html body #sidebar > .inner > section > .mini-posts article,
      html body #sidebar .inner .mini-posts article,
      #wrapper #sidebar .mini-posts article,
      #wrapper #sidebar article,
      #sidebar article,
      #sidebar .mini-posts article,
      #sidebar section article {
        transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), 
                    box-shadow 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) !important;
        box-shadow: none !important;
        border: 1px solid rgba(210, 215, 217, 0.75) !important;
        will-change: transform, box-shadow !important;
        backface-visibility: hidden !important;
        transform: translateZ(0) !important;
      }
      
      html body #sidebar .mini-posts article:hover,
      html body #sidebar article:hover,
      html body #sidebar .sidebar-blog-post:hover,
      html body #sidebar > .inner > section > .mini-posts article:hover,
      html body #sidebar .inner .mini-posts article:hover,
      #wrapper #sidebar .mini-posts article:hover,
      #wrapper #sidebar article:hover,
      #sidebar article:hover,
      #sidebar .mini-posts article:hover,
      #sidebar section article:hover {
        transform: translateY(-3px) !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
      }
      
      /* Special override for homepage features */
      html body .features article,
      .features article,
      #wrapper .features article,
      section .features article {
        box-shadow: none !important;
      }
      
      html body .features article:hover,
      .features article:hover,
      #wrapper .features article:hover,
      section .features article:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
        transform: translateY(-3px) !important;
      }
    `}</style>
  );
};

export default CardTransitionStyles;
