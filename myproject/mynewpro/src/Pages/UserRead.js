import React,{useState,useEffect} from 'react'
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"
import "./Allpages.css"
function UserRead() {
      let navigate=useNavigate()
   let[val,setval] =useState()
let getdata=()=>{
  axios.get("http://localhost:3000/User").then((res)=>{
// console.log(res.data);
setval(res.data)
})
}
useEffect(()=>{
getdata()

   },[])


let userdelete=(sno)=>{
axios.delete("http://localhost:3000/User/"+sno).then((res)=>{
getdata()
navigate('/read')
})
}

  return (
<>
<div className='displaydata'>
  <table border="2px" className='mytable'>
<thead>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
    <th>Email</th>
    <th>Edit</th>
    <th>Delete</th>
  </tr>
</thead>
{val?<tbody>
  {val.map((item,index)=>{
return(
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.age}</td>
    <td>{item.city}</td>
    <td>{item.email}</td>
    <td><Link to={'/update/'+item.id}><i className='fa fa-edit'></i></Link></td>
    <td><Link to={'/delete/'+item.id} onClick={()=>{userdelete(item.id)}}><i className='fa fa-trash'></i></Link></td>
  </tr>
)
  })}
</tbody>:null}


    
  </table>
</div>

</>
  )
}

export default UserRead