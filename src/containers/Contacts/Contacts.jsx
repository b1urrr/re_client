import React from 'react';
import { BsPin, BsTelephone, BsClock} from 'react-icons/bs';
import './contacts.css'

const Contacts = () => {
  return (
    <div className='re__contacts section__padding' id='contacts'>
      <div className='re__contacts-header'>
      <h1>Contacts</h1>
      </div>
      <div className='re__contacts-contents'>
        <div className='re__contacts-contents_phone'>
          <BsTelephone />
          <p>For reservations</p>
          <p>and orders please call:</p>
          <p>+359 888 999 000</p>
        </div>
        <div className='re__contacts-contents_address'>
          <BsPin />
          <p>45 Steak str.,</p>
          <p>Sofia City</p>
          <p>Bulgaria</p>
        </div>
        <div className='re__contacts-contents_workhours'>
          <BsClock />
          <p>Workhours</p>
          <p>Monday to Sunday</p>
          <p>11:00-23:00</p>
        </div>
      </div>
      
    </div>
  )
}

export default Contacts
