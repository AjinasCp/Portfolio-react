import React from 'react'
import './header.css'
import CV from './CV.jsx'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>AJINAS CP</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CV/>
      </div>
    </header> 
  )
}

export default Header