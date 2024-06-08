import React from 'react'
import "../CSS/Navbar.css"


export default function Navbar() {
  return (
    <>
    <div className="nav">
    <h2>Spering</h2>
    <a href='#'>Home</a>
    <a href='#'>About</a>
    <a href='#'>Work</a>
    <a href='#'>Category</a>
    <a href='#' className='login'>Login</a>
    </div>
    </>
  )
}
