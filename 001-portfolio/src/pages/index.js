import React from "react"
import Layout from '../components/Layout'
import* as styles from '../styles/main.module.css'
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'

export default function Home({ data }) {
 // console.log(data);
  //const {title, description} = data.site.siteMetadata
  return (
    <Layout>
    <section className={styles.header}>
       <div>
          <h2>yo</h2>
          <h3>dev and deploy</h3>
          <p>Lorem ipsum, tenetur debitis ipsam laboriosam?</p>
          <Link className={styles.btn} to="/projects">my portfolio projects</Link>
          {/*<img src="/banner.png" alt="" style={{maxWidth: '100%'}}/>*/}
          {/* <p>{title} - {description}</p>*/}
       </div>
       <Img fluid={data.file.childImageSharp.fluid} />
    </section>
    </Layout>
  )
}

export const query = graphql`
query banner {
   file(sourceInstanceName: {}, relativePath: {eq: "banner.png"}) {
     id
     childrenImageSharp {
       fluid {
         ...GatsbyImageSharpFluid
       }
     }
   }
 }`;
 
//old
// export const query = graphql`
// query siteInfo {
//   site {
//     siteMetadata {
//       description
//       title
//     }
//   }
// }
// `;