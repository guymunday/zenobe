import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import SliceZoneNews from "../../components/caseStudies/SliceZoneNews"
import Img from "gatsby-image"
import styled from "styled-components"

export const NewHeroSection = styled.section`
  display: flex;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 0 0 0;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
  .gatsby-image-wrapper {
    width: 50%;
    padding: 20px;
    object-fit: cover;
    @media only screen and (max-width: 768px) {
      width: 100%;
      order: 1;
    }
  }
  .title {
    width: 50%;
    padding: 20px;
    font-family: Syne, sans-serif;
    line-height: 1.15;
    @media only screen and (max-width: 768px) {
      width: 100%;
      order: 2;
    }
    h1 {
      @media only screen and (max-width: 1024px) {
        font-size: 2.5rem;
      }
    }
  }
`

const News = ({ data }) => {
  console.log(data.page.case_news.heroSection.title)
  const title = data.page.case_news.heroSection.title
  const heroImage =
    data.page.case_news.heroSection.heroImage.localFile.childImageSharp.fluid

  return (
    <Layout>
      <NewHeroSection>
        <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
        <Img fluid={heroImage} />
      </NewHeroSection>
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
