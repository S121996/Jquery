import React,{useState} from 'react'
import "./style.css"
function App() {
     let[inputdata,setinputdata] =useState('')
     let[user,setuser] =useState([])

     let adduser=()=>{
     if(!inputdata){
      alert("field empty")
     }
     else
     {
      const mydata={
        id:new Date().getTime().toString(),
        name:inputdata
      }
      setuser([...user,mydata])
     }
     }
     let deleteUser=(sno)=>{
// console.log(sno);
let fdata=user.filter((pro)=>{
return sno !==pro.id
})
setuser(fdata)
     }
  return (
   <>
   <div className='main'>
    <div className='data'>
    <input type="text" name="n" className='myinput' onChange={(e)=>{setinputdata(e.target.value)}} />
    <i className="fa-solid fa-plus btn btn-outline-danger" onClick={adduser}></i>
    </div>
    <div className='showuser'>
      {user.map((item,index)=>{
return(
 <div className='myspan' key={index}>
   <span>{item.name} </span><i className="icon fa-solid fa-x" onClick={()=>{deleteUser(item.id)}}></i>
  </div>
)
      })}
    </div>
   </div>
   
   
   </>
  )
}

export default App