import React, { Component } from 'react'

export default class App extends Component {
  state={
    name:"amit",
    age:25,
    sroll:this.props.roll
  }
  render() {
    return (
     <>
     <h2>App Component</h2>
     <h3>user name={this.state.name} user age={this.state.age}</h3>
     <p>roll no with props={this.props.roll}</p>
     <p>roll no with state={this.state.sroll}</p>
     </>
    )
  }
}
