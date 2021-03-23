import React from "react"
import Layout from '../components/Layout'
import* as styles from '../styles/main.module.css'
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
    <section className={styles.header}>
       <div>
          <h2>yo</h2>
          <h3>dev and deploy</h3>
          <p>Lorem ipsum, tenetur debitis ipsam laboriosam?</p>
          <Link className={styles.btn} to="/projects">my portfolio projects</Link>
          <img src="/banner.png" alt="" style={{maxWidth: '100%'}}/>
       </div>
    </section>
    </Layout>
  )
}
