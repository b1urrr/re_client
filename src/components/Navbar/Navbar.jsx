import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Menu = () => (
  <>
    <Link to="/">
      <p>Home</p>
    </Link>
    <Link to="/menu">
      <p>Menu</p>
    </Link>
    <HashLink to="/#delivery">
      <p>Delivery</p>
    </HashLink>
    <HashLink to="/#gallery">
      <p>Gallery</p>
    </HashLink>
    <HashLink to="/#about">
      <p>About Us</p>
    </HashLink>
    <HashLink to="/#contacts">
      <p>Contacts</p>
    </HashLink>
  </>
);

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="re__navbar">
      <div className="re__navbar-links">
        <div className="re__navbar-links_logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="re__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="re__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="re__navbar-menu_container scale-up-center">
            <div className="re__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
