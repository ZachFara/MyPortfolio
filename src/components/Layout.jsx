import { useEffect, useState } from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import HamburgerMenu from './HamburgerMenu';
import '../styles/responsive-content.css';
import '../styles/hide-original-toggle.css';
import '../styles/mobile-sidebar-fix.css';
import '../styles/sidebar-spacing.css';

const Layout = ({ children }) => {
  const [sidebarInactive, setSidebarInactive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile/tablet
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 1280;
      console.log('Mobile check:', { windowWidth: window.innerWidth, isMobile: mobile });
      setIsMobile(mobile);
      if (mobile) {
        setSidebarInactive(true);
      } else {
        setSidebarInactive(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobile && !sidebarInactive) {
        const sidebar = document.getElementById('sidebar');
        const hamburger = document.querySelector('.hamburger-menu');
        
        if (sidebar && hamburger && 
            !sidebar.contains(e.target) && 
            !hamburger.contains(e.target)) {
          setSidebarInactive(true);
        }
      }
    };

    if (isMobile) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMobile, sidebarInactive]);

  const toggleSidebar = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSidebarInactive(!sidebarInactive);
  };

  useEffect(() => {
    // Add is-preload class to body when component mounts
    document.body.classList.add('is-preload');

    // Clean up function to remove class when component unmounts
    return () => {
      document.body.classList.remove('is-preload');
    };
  }, []);

  // Load main.js functionality
  useEffect(() => {
    // Import scripts from the public folder
    const loadScripts = async () => {
      try {
        // These scripts are already included in index.html, so we don't need to load them again
        // But we might need to execute some initialization code from main.js
        
        // If there's specific initialization logic needed, we can add it here
        // For example, to handle sidebar toggles, mobile responsiveness, etc.
        
        // Add any browser-specific classes
        if (navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS)/)) {
          document.body.classList.add('is-mobile');
        }
      } catch (error) {
        console.error("Error loading scripts:", error);
      }
    };

    loadScripts();
  }, []);

  return (
    <div id="wrapper">
      <HamburgerMenu 
        isOpen={!sidebarInactive}
        onToggle={toggleSidebar}
        isMobile={isMobile}
      />
      <div id="main">
        <div className="inner">
          <Topbar />
          {children}
        </div>
      </div>
      <Sidebar 
        isInactive={sidebarInactive} 
        onToggle={toggleSidebar}
        isMobile={isMobile}
      />
    </div>
  );
};

export default Layout;
