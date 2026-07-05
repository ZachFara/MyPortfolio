import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NAV = [
  { to: '/', label: 'Index', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/repositories', label: 'Repositories' },
  { to: '/blog', label: 'Writing' },
  { to: '/cv', label: 'CV' },
];

const SOCIAL = [
  { href: 'https://github.com/ZachFara', icon: 'fab fa-github', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/zachariah-farahany-3818aa1bb/', icon: 'fab fa-linkedin', label: 'LinkedIn' },
  { href: 'mailto:zfarahany193@gmail.com', icon: 'fas fa-envelope', label: 'Email' },
];

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu on navigation
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  // Lock scroll + allow Escape while the overlay is open
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <div className="shell">
      {/* Fixed identity rail (desktop) */}
      <aside className="rail" aria-hidden="true">
        <NavLink to="/" className="rail__mark">ZF</NavLink>
        <span className="rail__spine">Z. Farahany — Portfolio</span>
        <div className="rail__social">
          {SOCIAL.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
              <i className={s.icon} />
            </a>
          ))}
        </div>
      </aside>

      {/* Top bar */}
      <header className="topbar">
        <NavLink to="/" className="topbar__brand">Zachariah <b>Farahany</b></NavLink>
        <nav className="topbar__nav">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.end}
              className={({ isActive }) => (isActive ? 'active' : undefined)}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <button className="topbar__toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <span>MENU</span>
        </button>
      </header>

      {/* Full-screen mobile menu */}
      <div className={`menu-overlay${menuOpen ? ' open' : ''}`}>
        <div className="menu-overlay__top">
          <span className="topbar__brand">Zachariah <b>Farahany</b></span>
          <button className="menu-overlay__close" onClick={() => setMenuOpen(false)} aria-label="Close menu">✕</button>
        </div>
        <nav>
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.end}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={() => setMenuOpen(false)}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="menu-overlay__social">
          {SOCIAL.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
              <i className={s.icon} />
            </a>
          ))}
        </div>
      </div>

      <main className="page">{children}</main>
    </div>
  );
};

export default Layout;
