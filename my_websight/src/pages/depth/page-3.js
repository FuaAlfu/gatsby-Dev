import React from "react"
import Link from "gatsby-link"

export default function Home() {
  return <div style={{color:'red'}}>
  <h1>glad to have you here bb!</h1>
 <Link to="/">go back</Link>
 <br/>
 <Link to="/page-2/">go page 2</Link>
  </div>
}
