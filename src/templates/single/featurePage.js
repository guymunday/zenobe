import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import CaseStudyMain from "../../components/caseStudies/CaseStudyMain"

const FeaturePage = ({ data }) => {
  console.log(data)
  const bigCopy = data.main.featureContent.bigCopy
  return (
    <Layout>
      <div>{data.main.title}</div>
      <div className="big-copy" dangerouslySetInnerHTML={{ __html: bigCopy }} />
      <div className="big-copy" dangerouslySetInnerHTML={{ __html: bigCopy }} />
      {data.page ? <CaseStudyMain data={data} /> : null}
    </Layout>
  )
}

export default FeaturePage

export const query = graphql`
  query feature($id: String!, $slug: String!) {
    main: wpFeaturePage(id: { eq: $id }) {
      id
      title
      slug
      hero_section {
        heroSection {
          backgroundVideo
          introParagraph
        }
      }
      featureContent {
        bigCopy
        financing {
          copy
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
        services {
          copy
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
      }
    }
    page: wpCaseStudy(caseStudy: { featuredCaseStudy: { eq: $slug } }) {
      caseStudy {
        approach
        context
        images {
          image1 {
            localFile {
              childImageSharp {
                fluid {
                  base64
                  tracedSVG
                  srcWebp
                  srcSetWebp
                  originalImg
                  originalName
                }
              }
            }
          }
          image2 {
            localFile {
              childImageSharp {
                fluid {
                  base64
                  tracedSVG
                  srcWebp
                  srcSetWebp
                  originalImg
                  originalName
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
