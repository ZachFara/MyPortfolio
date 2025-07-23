import { NavLink } from 'react-router-dom';

const Topbar = () => {
  return (
    <header id="header">
      <NavLink to="/" className={({ isActive }) => isActive ? "logo active" : "logo"}>
        <strong>Home</strong>
      </NavLink>
    </header>
  );
};

export default Topbar;
