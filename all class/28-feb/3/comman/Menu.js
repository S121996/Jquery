import React from 'react'
import "./style.css"
import {Link} from "react-router-dom"
function Menu() {
  return (
  <>
  <div className='menu'>
<Link to="/" className='mylink'>Home</Link>
<Link to="/read" className='mylink'>ReadData</Link>
<Link to="/create" className='mylink'>CreateData</Link>
<Link to="/update" className='mylink'>UpdateData</Link>
<Link to="/search" className='mylink'>Searchdata</Link>
  </div>
  
  </>
  )
}

export default Menu