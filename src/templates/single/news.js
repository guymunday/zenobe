import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SliceZoneNews from "../../components/caseStudies/SliceZoneNews"
import Img from "gatsby-image"

const News = ({ data }) => {
  console.log(data.page.case_news.heroSection.title)
  const title = data.page.case_news.heroSection.title
  const heroImage =
    data.page.case_news.heroSection.heroImage.localFile.childImageSharp.fluid

  return (
    <Layout>
      <section>
        <div dangerouslySetInnerHTML={{ __html: title }} />
        <Img fluid={heroImage} />
      </section>
      <SliceZoneNews allSlices={data.page.case_news.content} />
    </Layout>
  )
}

export default News

export const query = graphql`
  query news($id: String!) {
    page: wpPost(id: { eq: $id }) {
      title
      id
      case_news {
        content {
          ... on WpPost_CaseNews_Content_Copy {
            fieldGroupName
            copy
          }
          ... on WpPost_CaseNews_Content_Image {
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
          ... on WpPost_CaseNews_Content_Video {
            fieldGroupName
            video
          }
        }
        fieldGroupName
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
