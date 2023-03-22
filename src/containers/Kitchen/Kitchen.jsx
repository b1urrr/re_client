import React from "react";
import './kitchen.css';
import chef from '../../assets/chef.jpg'

function Kitchen() {


    return (
      <div className='re__kitchen section__padding'>
        <div className='re__kitchen-heading'>
            <h1>A little glimpse of our chefs' passion</h1>
        </div>
        <div className='re__kitchen-container'>
            <div className='re__kitchen-container_content'>
                <p>Fresh meat masterfully cooked with our original recipes. Made with the love every steak deserves.
                Served with passion in an amazing atmosphere.</p>
                <a href="/menu"><button>MENU</button></a>
            </div>
            <div className='re__kitchen-container_image'>
                <img src={chef} alt='chef'/>
            </div>
        </div>
      </div>
    )
  }

export default Kitchen;