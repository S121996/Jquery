import React, { Component } from 'react'

export default class App extends Component {
  state={
   sroll:this.props.roll
  }
data=()=>{
  this.setState({sroll:this.state.sroll+1})
}
  render() {
    return (
      <>
      <h2>App class component</h2>
    <p>roll no with props={this.props.roll}</p>
    <p>roll no with state={this.state.sroll}</p>
    <button onClick={this.data}>click</button>
      </>
    )
  }
}
