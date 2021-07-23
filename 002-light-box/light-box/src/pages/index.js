import * as React from "react"
import { Link, graphql } from "gatsby"
import {  GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Container, Row, Col  } from 'react-bootstrap';
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import styled from 'styled-components';

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi everyone</h1>
    <B>
    <p>Welcome to your new thing.</p>
    </B>

   {/* Bootstrap works off of a 12 column so if we divide these 12 b 4 we got 3 colums */}
    <Container>
        <SimpleReactLightbox>
          <SRLWrapper>
              <Text>
              <Row>
             {data.gallery.edges.map(({node}) => (
              <Col lg={4} md={6} key={node.id} className="py-3">
              {node.base.split('-').join(' ').split('.')[0]}
                {/* <a href={node.publicURL}>{node.publicURL}</a> */}
                <Image>
                  <a href={node.publicURL}>
                    <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base.split('-').join(' ').split('.')[0]} />
                  </a>
                  </Image>
              </Col>
               ))}
               </Row>
               </Text>
           </SRLWrapper>
        </SimpleReactLightbox>
    </Container>
   

    <p>
      <Link to="https://jolly-borg-908e59.netlify.app/">Go to HOME</Link> <br />
    </p>
  </Layout>
)

const B = styled.div`
text-align: center;
`;

const Text = styled.div`
 color: #777;
 font-size: 1rem;
 text-align: center;
`;

const Image = styled.div`
 border:1px solid #ccc;
 border-raduis: 5px;
`;

export default IndexPage

export const pageQuery = graphql`
query{
  gallery: 
  allFile(
    filter: {relativeDirectory: {eq: "girls-images"}}
    sort: {fields: base, order: ASC}
  ) {
    edges {
      node {
        id
        base
        publicURL
        childImageSharp {
          gatsbyImageData(
            height: 1080
            width: 1920
            transformOptions: {fit: COVER}
            placeholder: BLURRED
            webpOptions: {quality: 50}
          )
        }
      }
    }
  }
}
`;