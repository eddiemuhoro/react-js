import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FiTwitter, FiFacebook } from 'react-icons/fi';
const Socials = () => {
  return (
    <div className='social-icons'>
      {/* <p style={{fontSize:'13px'}}>social links</p> */}
        <FaInstagram />
        <FiTwitter />
        <FiFacebook />
    </div>
  )
}

export default Socials