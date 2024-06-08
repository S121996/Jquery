import React, { Component } from 'react'

export default class App extends Component {
constructor(props){
  super(props)
  this.state={
    fname:"sumit",
    lname:"kumar",
    age:27,
    sroll:this.props.roll
  }
}
  render() {
    return (
     <>
     <h2>App Component</h2>
   <h3>Name={this.state.fname} {this.state.lname} age={this.state.age}</h3>
   <p>roll no with props={this.props.roll}</p>
   <p>roll no with state={this.state.sroll}</p>
     </>
    )
  }
}
