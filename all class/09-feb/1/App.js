import React, { Component } from 'react'

export default class App extends Component {
  state={
    no:1
  }
show=()=>{
this.setState({no:this.state.no+1})
}
dec=()=>{
  this.setState({no:this.state.no-1})
}
  render() {
    return (
      <>
      <h2>App class component</h2>
      <h3>number={this.state.no}</h3>
      <button onClick={this.show}>increment</button>
      <button onClick={this.dec}>decrement</button>
      </>
    )
  }
}
