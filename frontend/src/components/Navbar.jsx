import React from 'react'
import '../App'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);
  const changeBackground = ()=>{
    if(window.scrollY>=1)  setNavbar(false);
    else  setNavbar(true);
  }
  window.addEventListener('scroll',changeBackground)
  return (
    <div className={`navbar ${navbar?'active': ''}`}>
        <div className='nav-1'>
            <h1>Justbooks</h1>
        </div>
        <div className='extra-div'></div>
        <div className='extra-div'></div>
        <div className='extra-div'></div>
        <div className='nav-2'>
            <Link className='navbar-link' to="/">Home</Link>
            {/* <Link className='navbar-link' to="/novels">Novels</Link> */}
            <Link className='navbar-link' to="/study">Study</Link>
            <Link className='navbar-link' to="/comics">Comics</Link>
            <Link className='navbar-link' to="/uploader">Upload</Link>
            <button className='secondary-button'>Login / SignUp</button>
        </div>
    </div>
  )
}

export default Navbar