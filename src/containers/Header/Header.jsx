import React from "react";
import './header.css'

function Header() {


    return (
      <div className='re__header' id="home">
        <div className='re__header-bg'>
            <div className='re__header-container'>
                <div className='re__header-container_text'>
                    <h1>BEST STEAK IN TOWN</h1>
                    <h1>a taste to die for</h1>
                </div>
                <div className='re__header-container_cta'>
                    <a href="/menu"><button>MENU</button></a>
                    <a href="#contacts"><button>ORDER</button></a>
                </div>
            </div>
        </div>
      </div>
    )
  }

export default Header;