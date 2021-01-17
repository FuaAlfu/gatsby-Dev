import React from "react"
import Link from "gatsby-link"

 class Counter extends React.Component{
     //adding constructor
     constructor(){
         super()
         //state var
         this.state = {count: 0}
     }
     render(){
  return <div style={{color:'red'}}>
  <h1>hi there!</h1>
  <p>let me server you well) ..</p>

  <h2>COUNTER</h2>
  <p>current count: {this.state.count}</p>
  <button onClick={() => this.setState({count:this.state.count -1})}>minus</button>
  <button  onClick={() => this.setState({count:this.state.count +1})}>plus</button>
  <br/>
 <Link to="/">go back</Link>
  </div>
     }
    }
 

export default Counter