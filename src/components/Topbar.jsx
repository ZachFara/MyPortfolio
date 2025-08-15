import { NavLink } from 'react-router-dom';

const Topbar = () => {
  return (
    <header id="header">
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? "logo active" : "logo"}
        style={{
          // Ensure the logo is easily tappable on mobile
          minHeight: '44px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <strong>Home</strong>
      </NavLink>
    </header>
  );
};

export default Topbar;
