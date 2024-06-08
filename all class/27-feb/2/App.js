import React,{useReducer} from 'react'
const reducer=(state,action)=>{
 if(action.type==='inc'){
  state=state+1
 }
 if(state>0 && action.type==='dec'){
  state=state-1
 }
 return state
}
function App() {
           let inistatevalue=10   
     let[state,dispatch] =useReducer(reducer,inistatevalue)
  return (
    <>
    <button onClick={()=>{dispatch({type:'inc'})}}>+</button>
    <span>{state}</span>
    <button onClick={()=>{dispatch({type:'dec'})}}>-</button>
    
    </>
  )
}

export default App