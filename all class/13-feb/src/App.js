import React, { Component } from 'react'
import User from './User'
export default class App extends Component {
  constructor(){
    super()
    this.state={
      roll:50
    }
  }

  show=()=>{
   return this.setState({roll:this.state.roll+1})
  }
  render() {
    return (
      <>
      <User uroll={this.state.roll}/>
      <button onClick={this.show}>click</button>
      </>
    )
  }
}
