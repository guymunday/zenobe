import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SliceZone from "../../components/caseStudies/SliceZone"
import Img from "gatsby-image"

const CaseStudy = ({ data }) => {
  const title = data.page.case_news.heroSection.title
  const heroImage =
    data.page.case_news.heroSection.heroImage.localFile.childImageSharp.fluid
  return (
    <Layout>
      <section>
        <div dangerouslySetInnerHTML={{ __html: title }} />
        <Img fluid={heroImage} />
      </section>
      <SliceZone allSlices={data.page.case_news.content} />
    </Layout>
  )
}

export default CaseStudy

export const query = graphql`
  query casestudy($id: String!) {
    page: wpCaseStudy(id: { eq: $id }) {
      id
      case_news {
        content {
          ... on WpCase_Study_CaseNews_Content_Copy {
            copy
            fieldGroupName
          }
          ... on WpCase_Study_CaseNews_Content_Image {
            fieldGroupName
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          ... on WpCase_Study_CaseNews_Content_Video {
            fieldGroupName
            video
          }
        }
        heroSection {
          title
          heroImage {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
