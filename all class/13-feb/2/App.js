import React,{useState,useEffect} from 'react'

function App() {
  let[no,setno]=useState(1)
  let[data,setdata]=useState(100)

  let fun1=()=>{
    setno(no+1)
  }
  let fun2=()=>{
    setdata(data-1)
  }
  useEffect(()=>{
    console.log("useeffect called");
  },[no])
  return (
    <>
    <h2>number={no}</h2>
    <button onClick={fun1}>increment</button>
    <h2>value={data}</h2>
    <button onClick={fun2}>decrement</button>
    
    </>
  )
}

export default App