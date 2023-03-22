import React, { useState } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle, BsXLg } from 'react-icons/bs';
import './gallery.css';

const Gallery = ({ galleryImages }) => {

    const [slideNumber, setSlideNumber] = useState(0)
    const [open, setOpen] = useState(false)

    const handleOpen = (index) => {
        setSlideNumber(index)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const prevSlide = () => {
        slideNumber === 0 
        ? setSlideNumber(galleryImages.length -1) 
        : setSlideNumber(slideNumber -1)

    }

    const nextSlide = () => {
        slideNumber + 1 === galleryImages.length 
        ? setSlideNumber(0) 
        : setSlideNumber(slideNumber +1)
    }

  return (
    <div className='re__gallery section__padding' id='gallery'>

        <div className='re__gallery-heading'><h1>Gallery</h1></div>

    {open && 
        <div className='slider-wrap'>
            <BsXLg className='btn-close' onClick={handleClose}/>
            <BsArrowLeftCircle className='btn-previous' onClick={prevSlide}/>
            <BsArrowRightCircle className='btn-next' onClick={nextSlide}/>
            <div className='full-screen'>
                <img src={galleryImages[slideNumber].img} alt='gallery image' />
            </div>
        </div>
    }

      <div className='re__gallery-wrap'>
        {
            galleryImages && galleryImages.map((slide, index) => {
                return(
                    <div 
                        className='single' 
                        key={index}
                        onClick={ () => handleOpen(index) }
                        >
                        <img src={slide.img} alt='gallery image' />
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Gallery
