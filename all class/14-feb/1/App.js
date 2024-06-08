import React from 'react'

import User from './User'
import {Provider} from "./ContextData"
function App() {
let age=20;
  return (
   <>
   <h2>App component</h2>
   <hr/>
<Provider value={age}>
<User/>
</Provider>
   
 
  
   </>
  )
}

export default App