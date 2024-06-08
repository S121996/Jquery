import React from 'react'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
function App() {
  return (
    <>
    <BrowserRouter>
    <Link to="/">Home</Link>
    <br/><br/>
    <Link to="/about">About</Link>
    <br/><br/>
    <Link to="/news">news</Link>
    <Routes>
<Route path='/' element={<h2>home page data</h2>}/>
<Route path='/about' element={<h2>about page data</h2>}/>
<Route path='/news' element={<h2>news page data</h2>}/>
<Route path='*' element={<h2>404 page not found</h2>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App