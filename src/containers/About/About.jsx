import React from "react";
import './about.css';

function About() {

    return (
        <div className='re__about' id="about">
          <div className='re__about-bg'>
              <div className='re__about-container'>
                  <div className='re__about-container_text'>
                      <h1>About Restaurant Empire</h1>
                      <p>Welcome to the Restaurant Empire, where we believe that every steak should be a masterpiece. 
                      Our passion for premium cuts of beef and expert grilling techniques has made us a favorite among 
                      steak lovers in the city. Since opening our doors in 2005, we've been committed to sourcing only 
                      the highest quality meat from local farms and ranches, ensuring that every bite is juicy, tender, 
                      and bursting with flavor. </p>
                      <p>Our menu features a variety of steak cuts, from classic Ribeye and New York Strip
                        to the decadent Porterhouse and Tomahawk. We also offer a range of delicious sides and salads, along with an
                        extensive wine list to perfectly complement your meal.</p>
                  </div>
              </div>
          </div>
        </div>
      )
  }

export default About;