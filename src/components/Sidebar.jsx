import { Link, NavLink } from 'react-router-dom';
import BlogSidebar from './BlogSidebar';
import '../styles/sidebar-components.css';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div className="inner">
        {/* Search */}
        <section id="search" className="alt">
          <form method="post" action="#">
            <input type="text" name="query" id="query" placeholder="Search" />
          </form>
        </section>

        {/* Menu */}
        <nav id="menu">
          <header className="major">
            <h2>Menu</h2>
          </header>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink></li>
            <li><NavLink to="/repositories" className={({ isActive }) => isActive ? "active" : ""}>Repositories</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""}>Blog</NavLink></li>
            <li><NavLink to="/cv" className={({ isActive }) => isActive ? "active" : ""}>Curriculum Vitae</NavLink></li>
          </ul>
        </nav>

        {/* Blog Section */}
        <BlogSidebar />

        {/* Recent Projects Section */}
        <section>
          <header className="major">
            <h2>Recent Projects</h2>
          </header>
          <div className="mini-posts">
            <article>
              <Link to="/projects#skysearch" className="image">
                <img 
                  src="images/skysearch.webp" 
                  alt="SkySearch UAVs" 
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </Link>
              <p>Check out SkySearch UAVs</p>
            </article>
            <article>
              <Link to="/projects#diffusionmodels" className="image">
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
            <li><Link to="/projects" className="button">More</Link></li>
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
            <li className="icon solid fa-phone">(847) 502-5010</li>
            <li className="icon solid fa-home">
              711 N. Broadway Ave.<br />
              Park Ridge, IL 60068
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
