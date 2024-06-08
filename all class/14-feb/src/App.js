import React from 'react'
import User from './User'
export let contextData=React.createContext()
function App() {
 let obj={
  name:"amit",
  age:20
 }
  return (
   <>
   <h2>App component</h2>
   <hr/>
   <contextData.Provider value={obj}>
   <User/>
   </contextData.Provider>
  
   </>
  )
}

export default App