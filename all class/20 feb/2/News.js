import React from 'react'
import {useNavigate} from "react-router-dom"
function News() {
   let kuchbhi=useNavigate()

   let show=()=>{
    kuchbhi('/about')
   }
  return (
  <>
  
  <h2>this is news data</h2>
  <p>We are thriving to establish ourselves as an education provider that focuses on giving learners job-oriented skills.
We understand what the monthly paycheck will make you and your family feel.</p>
 <button onClick={show}>Redirect</button>
 
  </>
  )
}

export default News