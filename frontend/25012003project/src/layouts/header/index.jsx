import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
const Header = () => {
  return (
<div className='header'>
    <nav>
        <div className="logo"><Link><img src="https://preview.colorlib.com/theme/course/images/logo.png"  /></Link><span>COURSE</span></div>

        <ul>
            <li><Link to={`/`}>HOME</Link></li>
            <li><Link> ABOUT US</Link></li>
            <li><Link>COURSES</Link></li>
            <li><Link>ELEMENTS</Link></li>
            <li><Link>NEWS</Link></li>
            <li><Link> CONTACT</Link></li>
            <li><Link to={'/add-courses'}> ADD COURSES</Link></li>
        </ul>
        <div className='contact'>
            <div className='image'><img src="https://preview.colorlib.com/theme/course/images/phone-call.svg" alt="" /></div>
            <p>+43 4566 7788 2457</p>
        </div>
    </nav>
</div>
    )
}

export default Header