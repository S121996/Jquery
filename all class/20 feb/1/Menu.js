import React from 'react'
import {Link} from "react-router-dom"
function Menu() {
  return (
   <>
   <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           services
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/services/html">HTML</Link></li>
            <li><Link className="dropdown-item" to="/services/php">PHP</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/services/java">JAVA</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/news">News</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
   </>
  )
}

export default Menu