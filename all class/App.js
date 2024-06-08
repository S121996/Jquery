import React from "react"
import User from  "./User"
import Guest from "./Guest"
export default function App(){
  return(
  <>
  <h2>App Component</h2>
  <Guest age="60" name="Amit Kumar"/>
  
  <User/>
  </>
  )
}
 


/* import User from "./User"
function App(){
  return(
  <>
  <h2>App Component</h2>
  <hr/>
  <User name="Amit" roll="10"/>
  <hr/>
  <User name="Sumit" roll="11"/>
  <hr/>
  <User name="Hari" roll="12"/>
  </>
  )
}
export default App */



/* function User(){
  return(
    <h2>welcome to react component</h2>
  )
}

export default User
*/

// function App(props){
//   // console.log(props.name)
//   // console.log(props.age)
//   return(
//     <>
//     <h2>User name={props.name}</h2>
//     <p>age={props.age}</p>
//     </>
//   )
// }
// export default App


// let Guest=()=>{
//   return(
//     <h2>Hello Users</h2>
//   )
// }

// export default Guest

// import React,{Component} from "react";


// class User extends Component{
//   render(){
//   return(
//     <React.Fragment>
//     <h2> hello User</h2>
//     <p>lorem4 </p>
//     </React.Fragment>
//   )
// }
// }
// export default User