import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag, faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src="./images/logo.png" alt="Logo" />
      </div>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/skills">Skills</NavLink></li>
        <li><NavLink to="/work">Work</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <div className="nav-btn">
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <FontAwesomeIcon icon={faShoppingBag} className="icon" />
          <FontAwesomeIcon icon={faBars} className="icon" />
        </div>
      </ul>
    </nav>
  );
};

export default Header;
