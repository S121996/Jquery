import React from 'react'
import { contextData } from './App'
function Guest() {
  return (
   <>
   <h2>Guest Component</h2>
   <contextData.Consumer>

{kuchbhi=><h4>{kuchbhi}</h4>}


   </contextData.Consumer>
   </>
  )
}

export default Guest