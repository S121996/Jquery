import React,{useState} from 'react'
import axios from "axios"
import "./Allpages.css"
function UserSearch() {
    let[searchdata,setsearchdata]  =useState()
    let[val,setval]  =useState()

  let searchUser=(key)=>{
// console.log(key);
axios.get("http://localhost:3000/User?name="+key).then((res)=>{
// console.log(res.data);
setval(res.data)
})
  }
  return (
    <>
    <div className='outer'>
    
        <span className='inner'>
          <input type="search" name="search" placeholder='search data' className='myinput'
          onChange={(e)=>{setsearchdata(e.target.value)}}/>
          <i className="myicon fa-brands fa-searchengin" onClick={()=>{searchUser(searchdata)}}></i>
        </span>
    
    </div>
    
    <div className='displaydata'>
  <table border="2px" className='mytable'>
<thead>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
    <th>Email</th>
  </tr>
</thead>
{val?<tbody>
  {val.map((item)=>{
return(
  <tr>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.age}</td>
    <td>{item.city}</td>
    <td>{item.email}</td>
  </tr>
)
  })}
</tbody>:null}
</table>
</div>
    </>
  )
}

export default UserSearch