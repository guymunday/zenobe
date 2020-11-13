import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Img from "gatsby-image"
import styled from "styled-components"
import { NewHeroSection } from "./news"
import CaseStudyMain from "../../components/caseStudies/CaseStudyMain"

const CaseStudyWrapper = styled.div`
  background: var(--black);
  color: var(--white);
`

const CaseStudy = ({ data }) => {
  const title = data.page.caseStudy.heroSection.title
  const titleFallback = data.page.title
  return (
    <Layout>
      <CaseStudyWrapper>
        <NewHeroSection>
          <div
            className="title"
            dangerouslySetInnerHTML={{ __html: title ? title : titleFallback }}
          />
          <Img
            fluid={
              data.page.caseStudy.heroSection.heroImage.localFile
                .childImageSharp.fluid
            }
            alt={title}
          />
        </NewHeroSection>
        <CaseStudyMain data={data} />
      </CaseStudyWrapper>
    </Layout>
  )
}

export default CaseStudy

export const query = graphql`
  query casestudy($id: String!) {
    page: wpCaseStudy(id: { eq: $id }) {
      id
      title
      caseStudy {
        context
        approach
        heroSection {
          heroImage {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          title
        }
        images {
          image1 {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          image2 {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        inNumbers {
          stat {
            information
            number
          }
        }
      }
    }
  }
`
