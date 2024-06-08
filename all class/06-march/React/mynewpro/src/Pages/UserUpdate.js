import React,{useState,useEffect} from 'react'
import {useParams,useNavigate} from "react-router-dom"
import axios from "axios"
function UserUpdate() {
         let{id} =useParams()
            let navigate  =useNavigate()
        let[name,setname]   =useState()
        let[age,setage]   =useState()
        let[city,setcity]   =useState()
       let[email,setemail]   =useState()
         useEffect(()=>{
  axios.get("http://localhost:3000/User/"+id).then((res)=>{
// console.log(res.data);
setname(res.data.name)
setage(res.data.age)
setcity(res.data.city)
setemail(res.data.email)
  })          
         },[id])

let updateuser=(e)=>{
      e.preventDefault()
      axios.put("http://localhost:3000/User/"+id,{
            name,age,city,email
      }).then((res)=>{
            navigate('/read')
      })
}
  return (
   <>
   <div className='myform'>
    <h2 className='myheading'>Update User</h2>
    <form method="post" onSubmit={updateuser}>
      <div className='inputdata'>
<label>Name:</label>
<input type="text" name="name" placeholder='Enter Name'
value={name} onChange={(e)=>{setname(e.target.value)}}/>
      </div>
      <div className='inputdata'>
<label>Age:</label>
<input type="number" name="age" placeholder='Enter Age' 
value={age} onChange={(e)=>{setage(e.target.value)}}/>
      </div>
      <div className='inputdata'>
<label>City:</label>
<input type="text" name="city" placeholder='Enter City'
value={city} onChange={(e)=>{setcity(e.target.value)}}/>
      </div>
      <div className='inputdata'>
<label>Email:</label>
<input type="email" name="email" placeholder='Enter email'
value={email} onChange={(e)=>{setemail(e.target.value)}}/>
      </div>
      <div className='inputdata'>
<input type="submit" name="sub" value="update" />
      </div>
      </form>
    </div>
   </>
  )
}

export default UserUpdate