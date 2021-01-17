import React from "react"
import Link from "gatsby-link"

export default function Home() {
  return <div style={{color:'red'}}>
  <h1>Hello fua!</h1>
 <Link to="/">go back</Link>
 <br/>
 <Link to="/depth/page-3/">go to page 3</Link>
  </div>
}
