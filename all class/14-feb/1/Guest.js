import React from 'react'
import {Consumer} from "./ContextData"
function Guest() {
  return (
   <>
   <h2>Guest Component</h2>
<Consumer>
  {val=><h2>{val}</h2>}
</Consumer>
   </>
  )
}

export default Guest