import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/Portrait.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jayden Gaydosh</h1>
        <h5 className="text-light">Mechaincal Engineer</h5>
        <div className='me'>
          <img src={ME} alt="me" />
        </div>
        <CTA />
        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header