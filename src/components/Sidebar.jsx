import { Link, NavLink } from 'react-router-dom';
import BlogSidebar from './BlogSidebar';
import '../styles/sidebar-components.css';

const Sidebar = ({ isInactive, onToggle, isMobile }) => {
  const handleLinkClick = (e) => {
    // On mobile, close sidebar when a link is clicked
    if (isMobile && onToggle) {
      setTimeout(() => {
        onToggle(e);
      }, 100);
    }
  };

  return (
    <div id="sidebar" className={isInactive ? 'inactive' : ''}>
      {isMobile && (
        <a 
          href="#sidebar" 
          className="toggle" 
          onClick={onToggle}
          aria-label="Toggle Navigation Menu"
        >
          Toggle
        </a>
      )}
      <div className="inner">
        {/* Search */}
        <section id="search" className="alt">
          <form method="post" action="#" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              name="query" 
              id="query" 
              placeholder="Search" 
              onFocus={() => {
                // Prevent iOS zoom on input focus
                if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
                  document.querySelector('meta[name=viewport]').setAttribute(
                    'content', 
                    'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
                  );
                }
              }}
              onBlur={() => {
                // Restore normal viewport on blur
                if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
                  document.querySelector('meta[name=viewport]').setAttribute(
                    'content', 
                    'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
                  );
                }
              }}
            />
          </form>
        </section>

        {/* Menu */}
        <nav id="menu">
          <header className="major">
            <h2>Menu</h2>
          </header>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} onClick={handleLinkClick}>Home</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""} onClick={handleLinkClick}>Projects</NavLink></li>
            <li><NavLink to="/repositories" className={({ isActive }) => isActive ? "active" : ""} onClick={handleLinkClick}>Repositories</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""} onClick={handleLinkClick}>Blog</NavLink></li>
            <li><NavLink to="/cv" className={({ isActive }) => isActive ? "active" : ""} onClick={handleLinkClick}>Curriculum Vitae</NavLink></li>
          </ul>
        </nav>

        {/* Blog Section */}
        <BlogSidebar onLinkClick={handleLinkClick} />

        {/* Recent Projects Section */}
        <section>
          <header className="major">
            <h2>Recent Projects</h2>
          </header>
          <div className="mini-posts">
            <article>
              <Link to="/projects#skysearch" className="image" onClick={handleLinkClick}>
                <img 
                  src="images/skysearch.webp" 
                  alt="SkySearch UAVs" 
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </Link>
              <p>Check out SkySearch UAVs</p>
            </article>
            <article>
              <Link to="/projects#diffusionmodels" className="image" onClick={handleLinkClick}>
                <img 
                  src="images/diffusionmodel.webp" 
                  alt="Diffusion Models" 
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </Link>
              <p>Image GenAI with Stable Denoising Diffusion models</p>
            </article>
          </div>
          <ul className="actions">
            <li><Link to="/projects" className="button" onClick={handleLinkClick}>More</Link></li>
          </ul>
        </section>

        {/* Contact Section */}
        <section>
          <header className="major">
            <h2>Get in touch</h2>
          </header>
          <p></p>
          <ul className="contact">
            <li className="icon solid fa-envelope">
              <a href="mailto:zachariah.farahany@gmail.com">zachariah.farahany@gmail.com</a>
            </li>
            <li className="icon brands fa-linkedin">
              <a href="https://www.linkedin.com/in/zachariah-farahany-3818aa1bb/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
