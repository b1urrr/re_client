import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png'


const Menu = () => (
  <>
    <p><a href='/#home'>Home</a></p>
    <p><a href='/menu'>Menu</a></p>
    <p><a href='/#delivery'>Delivery</a></p>
    <p><a href='/#gallery'>Gallery</a></p>
    <p><a href='/#about'>About Us</a></p>
    <p><a href='/#contacts'>Contacts</a></p>
  </>
)

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
      <div className='re__navbar'>
        <div className='re__navbar-links'>
          <div className='re__navbar-links_logo'>
            <a href='/'><img src={logo} alt='logo'/></a>
          </div>
          <div className='re__navbar-links_container'>
            <Menu />
          </div>
        </div>
        <div className='re__navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='re__navbar-menu_container scale-up-center'>
              <div className='re__navbar-menu_container-links'>
              <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

export default Navbar;