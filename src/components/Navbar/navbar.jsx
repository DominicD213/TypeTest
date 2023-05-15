import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <h1>Typo</h1>
        </div>
        <div className='navbar-account'>
            <a href='#'>login</a>
            <a href='#'>signup</a>
        </div>
    </div>
  )
}

export default Navbar