import React from 'react'
import User from './User'
export let contextData=React.createContext()
function App() {
  let data="amit kumar"
  return (
   <>
   <h2>App component</h2>
   <hr/>
   <contextData.Provider value={data}>
   <User/>
   </contextData.Provider>
  
   </>
  )
}

export default App