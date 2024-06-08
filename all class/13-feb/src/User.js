import React, { Component } from 'react'

export default class User extends Component {
    constructor(props){
        super(props)
        this.state={
            sroll:this.props.uroll
        }
    }
    static getDerivedStateFromProps(props,state)
{
    console.log("user getDerivedStateFromProps called");
    if(props.uroll!==state.sroll){
        return {sroll:props.uroll}
    }
    return null 

}
shouldComponentUpdate(nextprops,nextstate)
{
   if(this.state.sroll<58){
    console.log("user shouldComponentUpdate");
    console.log(nextprops,nextstate);
    return true
   }
   console.log(nextprops,nextstate);
   return false
}


getSnapshotBeforeUpdate(prevprops,prevstate)
{
console.log("user getSnapshotBeforeUpdate called");
console.log(prevprops,prevstate);
return 190
}
componentDidUpdate(prevprops,prevstate,snapsort)
{
console.log("user componentDidUpdate called");
console.log(prevprops,prevstate,snapsort);
}
  render() {
    console.log(" user render");
    return (
      <>
      <h2>User component</h2>
      <h3>{this.state.sroll}</h3>
      </>
    )
  }
}
