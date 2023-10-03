import React from 'react'
import './header.css'
import CV from './CV.jsx'
import ME from '../../assets/IMG_8080.jpg'


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>AJINAS CP</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CV/>

        <div className='me'>
          <img  src={ME}alt='aj'/>
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header> 
  )
}

export default Header