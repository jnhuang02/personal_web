import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; // Optional: Import CSS for styling
import logo from "../imgs/starwars.svg"
import bell from "../imgs/bell.svg";
import search from "../imgs/search.svg"

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
            <div className="navbar-logo">
                <img src={logo} alt="Logo" className="logo" />
            </div>
        </li>
        <li>
          <NavLink to="/Home" exact activeClassName="active">
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
        <div class = "spacer"></div>
        <li>
            <img src={bell} alt="notification" className="nav-left" />
        </li>
        <li>
            <img src={search} alt="search tool" className="nav-left" />
        </li>
        
      </ul>
    </nav>
  );
}

export default NavBar;