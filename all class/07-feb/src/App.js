import React from 'react'
import User from './User'
function App() {
  let data="amit kumar"
  return (
    <>
    <h3>App Component</h3>
    <hr/>
    <User udata={data}/>
    </>
  )
}

export default App