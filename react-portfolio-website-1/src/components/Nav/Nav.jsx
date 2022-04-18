import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {BsJournalBookmark} from 'react-icons/bs'
import {RiContactsLine} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><SiAboutdotme /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience') } className={activeNav === '#experience' ? 'active' : ''}><BsJournalBookmark /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsLine /></a>
    </nav>
  )
}

export default Nav