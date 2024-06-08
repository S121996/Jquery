import React from 'react'
import "./app.css"
function App() {
  return (
    <>
    {/* <h2 className='data txt'>hello users</h2> */}
    <h2 className={false?'data1':'data2'}>hello users</h2>
    </>
  )
}

export default App