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
    <div className={navbar?'Navbar active': 'Navbar'}>
        <div className='nav-1'>
            <h1>Justbooks</h1>
        </div>
        <div className='extra-div'></div>
        <div className='extra-div'></div>
        <div className='extra-div'></div>
        <div className='nav-2'>
            <Link to="/">Home</Link>
            <Link to="/novels">Novels</Link>
            <Link to="/study">Study</Link>
            <Link to="/comics">Comics</Link>
            <button>Login / SignUp</button>
        </div>
    </div>
  )
}

export default Navbar