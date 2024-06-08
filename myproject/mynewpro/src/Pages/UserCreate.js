import React,{useState} from 'react'
import {useNavigate}  from "react-router-dom"
import axios from "axios"
import "./Allpages.css"
function UserCreate() {
   let[name,setname]   =useState()
   let[age,setage]   =useState()
   let[city,setcity]   =useState()
   let[email,setemail]   =useState()
        let navigate =useNavigate()
   
let usersubmit=(e)=>{
  e.preventDefault()
  axios.post("http://localhost:3000/User",{
    name,age,city,email
  }).then((res)=>{
// console.log(res.data);
navigate('/read');
  })
}
  return (
    <>
  
    <div className='myform'>
    <h2 className='myheading'>Create User</h2>
    <form method="post" onSubmit={usersubmit}>
      <div className='inputdata'>
<label>Name:</label>
<input type="text" name="name" placeholder='Enter Name' onChange={(e)=>{setname(e.target.value)}}/>
      </div>
      <div className='inputdata'>
<label>Age:</label>
<input type="number" name="age" placeholder='Enter Age' onChange={(e)=>{setage(e.target.value)}}/>
      </div>
      <div className='inputdata'>
<label>City:</label>
<input type="text" name="city" placeholder='Enter City' onChange={(e)=>{setcity(e.target.value)}}/>
      </div>
      <div className='inputdata'>
<label>Email:</label>
<input type="email" name="email" placeholder='Enter email' onChange={(e)=>{setemail(e.target.value)}}/>
      </div>
      <div className='inputdata'>
<input type="submit" name="sub" />
      </div>
      </form>
    </div>
    
    </>
  )
}

export default UserCreate