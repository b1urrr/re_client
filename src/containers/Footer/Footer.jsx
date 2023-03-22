import React from 'react';
import './footer.css';

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <div className='re__footer section__padding'>
      <div className='re__footer-content'>
         <a href='/'><p>© {year} Restaurant Empire</p></a>
         <a href='https://www.linkedin.com/in/kristiangogov/'><p>© {year} Website by Kristian Gogov</p></a>
      </div>

    </div>
  )
}

export default Footer
