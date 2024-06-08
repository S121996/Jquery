import React,{useState} from 'react'

function App() {
  let[check,setcheck] =useState(true)
let data1={
  background:"orange",
  color:"red"
}
let data2={
  background:"blue",
  color:"white"
}
let show=()=>{
  // setcheck(false)
  setcheck(check?false:true)
}
  return (
 <>
 

 <h2 style={check?data1:data2}>app component</h2>
 <button onClick={show}>click</button>
 </>
  )
}

export default App