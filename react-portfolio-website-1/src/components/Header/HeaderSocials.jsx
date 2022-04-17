import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a herf='https://linkedin.com' target="_blank"><AiOutlineLinkedin/></a>
        <a herf='https://github.com' target="_blank"><AiOutlineGithub/></a>

    </div>
  )
}

export default HeaderSocials