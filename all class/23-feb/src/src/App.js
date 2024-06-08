import React,{useState} from 'react'
import Data from './Data'
const App = () => {
      let[item,setitem] =useState(Data)
let catfilter=(cat)=>{
  let fdata=Data.filter((curele)=>{
return cat===curele.category
  })
  // console.log(fdata);
  setitem(fdata)
}
let subcatfilter=(cat,subcat)=>{
let fsdata=Data.filter((val)=>{
return cat===val.category && subcat===val.subcat
})
// console.log(fsdata);
setitem(fsdata)
}
  return (
   <>
 <div className='container-fluid'>
  <div className='row'>
    <div className='left col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-2 p-3 '>
    <ul className="list-group text-center ">
  <li className="list-group-item active">Category</li>
  <li className="list-group-item"><button className='btn' onClick={()=>{catfilter('mobile')}}>Mobile</button></li>
  <li className="list-group-item"><button className='btn' onClick={()=>{catfilter('shirt')}}>Shirt</button></li>
  <li className="list-group-item"><button className='btn' onClick={()=>{catfilter('watch')}}>Watch</button></li>
  <li className="list-group-item"><button className='btn' onClick={()=>{setitem(Data)}}>All</button></li>
</ul>

<ul class="list-group text-center mt-4">
  <li class="list-group-item active">Sub-Category Mobile</li>
  <li class="list-group-item"><button className='btn' onClick={()=>{subcatfilter('mobile','lg')}}>LG</button></li>
  <li class="list-group-item"><button className='btn' onClick={()=>{subcatfilter('mobile','nokia')}}>Nokia</button></li>
  <li class="list-group-item"><button className='btn' onClick={()=>{subcatfilter('mobile','samsung')}}>Samsung</button></li>
</ul>
    </div>
    <div className='right col-sm-12 col-md-8 col-lg-8 col-xl-9 col-xxl-10 p-3 '>
      {item?<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2">
        {item.map((pro,index)=>{
return(
  <div className="col" key={index}>
  <div className="card">
    <img src={pro.pimage} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{pro.pname}</h5>
      <p className="card-text">Price=Rs.{pro.price}</p>
      <p>Category={pro.category} and subcat={pro.subcat}</p>
      <button className='btn btn-danger'>Add to cart</button>
    </div>
  </div>
</div>
)
        })}
      </div>:<p>no data</p>}
    </div>
  </div>
 </div>
   
   
   </>
  )
}

export default App