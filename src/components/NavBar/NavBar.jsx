import React from 'react'
import './navbar.css'

function NavBar() {
  return (
    <>
        <nav className="nav-bar">
            <div className="logo">
                <h1 className=''>METRICKS</h1>
            </div>
            <ul className="nav-links d-flex align-items-center justify-content-evenly">
                <li><a href="/">ABOUT US</a></li>
                <li><a href="/">BLOG</a></li>
                <button className='contact-btn'>CONTACT US</button>
            </ul>
        </nav>
    </>
  )
}

export default NavBar