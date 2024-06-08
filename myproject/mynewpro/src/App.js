import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import UserCreate from './Pages/UserCreate'
import UserRead from './Pages/UserRead'
import UserSearch from './Pages/UserSearch'
import UserUpdate from './Pages/UserUpdate'
import Home from './Pages/Home'
import Header from './comman/Header'
import Menu from './comman/Menu'
import Footer from './comman/Footer'
function App() {
  return (
    <>
  <BrowserRouter>
  <Header/>
  <Menu/>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/read' element={<UserRead/>}/>
  <Route path='/create' element={<UserCreate/>}/>
  <Route path='/update/:id' element={<UserUpdate/>}/>
  <Route path='/search' element={<UserSearch/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
    
    </>
  )
}

export default App