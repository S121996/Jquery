import React from 'react'

function App() {

  let show=(list)=>{
    console.log(list+"-button click");
  }
  return (
    <>
    <h2>Function component</h2>
    {/* <button onClick={show}>click</button> */}
    <button onClick={()=>{show('shirt')}}>shirt</button>
    <button onClick={()=>{show('watch')}}>watch</button>
    
    </>
  )
}

export default App