import React from 'react'
import './about.css'
import ME from '../../assets/IMG_8294.JPEG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2> 

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1 Year working</small>
            </article>
          </div>
        </div> 

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients World wide</h5>
              <small>50+</small>
            </article>
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>50+ completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus velit amet suscipit laborum voluptatum repellendus, qui perspiciatis? Nostrum ut, molestiae dolores, ab aperiam fugit quod quia eum quidem consequatur animi?</p>
        
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About