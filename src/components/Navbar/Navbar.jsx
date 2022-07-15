import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.png";

const Navbar = ({ setcontactSection, contactSection }) => {
  const activeStyle = {
    color: "#FF00F7",
  };

  function handleClick(e) {
    e.preventDefault();
    setcontactSection((prevcontactSection) => {
      return {
        ...prevcontactSection,
        arrowClicked: !contactSection.arrowClicked,
      };
    });
  }

  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/">
          <img className="logo" src={logo} alt="logo" />
        </NavLink>

        <ul>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Blog
            </NavLink>
          </li>
          <li className="contactus-link" onClick={handleClick}>
            <Link to="/" alt="contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
