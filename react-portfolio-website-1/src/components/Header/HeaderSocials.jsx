import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/jayden-gaydosh-15b3a4167' target="_blank" rel="noreferrer"><AiOutlineLinkedin/></a>
        <a href='https://github.com/Jaydosh' target="_blank" rel="noreferrer"><AiOutlineGithub/></a>

    </div>
  )
}

export default HeaderSocials