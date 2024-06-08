import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
    <BrowserRouter>
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