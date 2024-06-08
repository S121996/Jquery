import React, { Component } from 'react'

export default class App extends Component {

show=(cat)=>{
  console.log(cat+"-called");
}
  render() {
    return (
      <>
      <h2>App Component</h2>
      <button onClick={()=>{this.show('mobile')}}>Mobile</button>
      <button onClick={()=>{this.show('laptop')}}>Laptop</button>
      <button onClick={()=>{this.show('tv')}}>TV</button>
      </>
    )
  }
}
