import {Component} from "react"
class App extends Component{
  render(){
    console.log(this.props.roll);
    return(
      <>
      <h2>User Name-{this.props.name}</h2>
      <p>Roll-{this.props.roll}</p>
      
      </>
    )
  }
}

export default App