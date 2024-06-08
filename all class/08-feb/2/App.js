import React, { Component } from 'react'

export default class App extends Component {

show=()=>{
  console.log("button click");
}

  render() {
    return (
      <>
      <h2>App Component</h2>
      <button onClick={this.show}>click</button>
      
      </>
    )
  }
}
