import React from "react"
import Link from "gatsby-link"

export default function Home() {
  return <div style={{color:'red'}}>
  <h1>Hello world!</h1>
  {/*link here take place ..<a herf="like)">*/} 
  <Link to="/page-2/">Page 2 </Link>
  <br />
  <Link to="/counting/">go to our counter</Link>
  </div>
}
