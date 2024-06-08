

function User(props) {
  return (
   <>
   <img src={props.idata} alt="..."/>
   </>
  )
}
function Guest(props) {
  return (
   <>
   <img src={props.idata} alt="..."/>
   </>
  )
}
function App() {
  return (
  <>
  <User idata="image/m1.jpg"/>
  <User idata="image/m2.jpg"/>
<Guest idata="image/s1.jpg"/>
<Guest idata="image/s2.jpg"/>
  </>
  )
}

export default App





