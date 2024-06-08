import React from 'react'

function App() {
  let data={
    background:"orange",
    textAlign:"center",
    padding:"40px"
  }
  let data2={
    color:"red"
  }
  return (
 <>
 
 {/* <h2 style={data}>app component</h2> */}
 <h2 style={{...data,...data2,fontSize:"40px"}}>app component</h2>
 </>
  )
}

export default App