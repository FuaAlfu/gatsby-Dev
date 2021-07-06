import { graphql,Link } from 'gatsby';
import React from 'react'
import Layout from '../../components/Layout'
import* as styles from '../../styles/projects.module.css'
import Img from 'gatsby-image'

export default function Projects({ data }) {
    console.log(data);
    //const projects = data.allMarkdownRemark.nodes //old but gold:: before we named our queries
    const projects = data.projects.nodes
    const contact = data.contact.siteMetadata.contact
    return (
        <Layout>
        <div className={styles.portfolio}>
            <h1>base route</h1>
            <h2>testo</h2>
            <div className={styles.projects}>
              {projects.map(project =>(
                  <Link to={"/projects/" + project.frontmatter.slug}
                  key={project.id}
                  >
                  <div>
                    <Img fluid={project.frontmatter.thumbs.childImageSharp.fluid}/>
                      <h3>{project.frontmatter.title}</h3>
                      <p>{project.frontmatter.stack}</p>
                  </div>
                  </Link>
              ))}
            </div>
            <p>contact us. Email me at: {contact}</p>
        </div>
        </Layout>
    )
}

//export page query
export const query = graphql`
query ProjectsPage {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        thumb
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`;

/*
thumb{
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
*/