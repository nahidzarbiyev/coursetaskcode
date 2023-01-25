import React from 'react'
import './index.scss'
import {BsPinterest,BsLinkedin,BsInstagram,BsTwitter} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
const Footer = () => {
  return (
<>
<footer>
   
<div className='footer'>

    <p>
    Copyright ©2023 All rights reserved | This template is made with  by Colorlib

    </p>
    <div className="icons">
        <BsPinterest/><BsLinkedin/><BsInstagram/><FaFacebookF/><BsTwitter/>
    </div>
</div>
</footer>
</>  )
}

export default Footer