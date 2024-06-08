import React from 'react'
import "./style.css"
import {Link} from "react-router-dom"
import {useAuth0} from "@auth0/auth0-react"
function Menu() {
    let{loginWithPopup,loginWithRedirect,logout,user,isAuthenticated}  =useAuth0()
  return (
  <>
  <div className='menu'>
<Link to="/" className='mylink'>Home</Link>
<Link to="/read" className='mylink'>ReadData</Link>
<Link to="/create" className='mylink'>CreateData</Link>
<Link to="/update/2" className='mylink'>UpdateData</Link>
<Link to="/search" className='mylink'>Searchdata</Link>
<Link to="/search" className='mylink' onClick={loginWithPopup}>login withpopup</Link>
<Link to="/search" className='mylink' onClick={loginWithRedirect}>login withredirect</Link>
<Link to="/search" className='mylink' onClick={logout}>logout</Link>
  </div>
  <div>
    {isAuthenticated?"welcome-"+user.email:"user logout"}
  </div>
  </>
  )
}

export default Menu