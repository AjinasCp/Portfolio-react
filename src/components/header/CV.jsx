import React from 'react'
import Ajinas from '../../assets/Ajinas cv.pdf'

const CV = () => {
  return (
    <div className='cv'>
        <a href={Ajinas} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'> Let' s Talk</a>
    </div>
  )
}

export default CV
