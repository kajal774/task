import React from 'react';
import './CSS/Header.css'
import LoginImg from '../Images/avatar.png'
const Header = () => {
  return (
    <div className='head'>
      <div className='taskboard'>Task Board</div>
      <img className='logimg' src={LoginImg} alt='image_not_found'></img>
      </div>
  )
}

export default Header
