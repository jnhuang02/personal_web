import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; // Optional: Import CSS for styling

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/AboutMe" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/Projects" activeClassName="active">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/ContactMe" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;