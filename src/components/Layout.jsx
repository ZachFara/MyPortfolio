import { useEffect } from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
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
      <div id="main">
        <div className="inner">
          <Topbar />
          {children}
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Layout;
