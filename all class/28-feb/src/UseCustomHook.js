import React,{useState} from 'react'

function UseCustomHook() {
      let[val,setval]=useState(50)
let show=()=>{
    setval(val+1)
}
let dec=()=>{
    setval(val-1)
}
    
  return {val, show,dec}
}

export default UseCustomHook