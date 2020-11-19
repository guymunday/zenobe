import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"
import CaseStudyMain from "../../components/caseStudies/CaseStudyMain"
import styled from "styled-components"
import Img from "gatsby-image"
import BackgroundVideo from "../../components/BackgroundVideo"
import Wrapper from "../../components/Wrapper"
import HomepageTechnologiesSection from "../../components/homepage/HomepageTechnologiesSection"

const FeatureHero = styled.section`
  position: relative;
  color: var(--white);
  object-fit: cover;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
  .hero-inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 140px 0 0 0;
    justify-content: center;
    position: relative;
    @media only screen and (max-width: 1024px) {
      padding: 110px 0 0 0;
    }
    @media only screen and (max-width: 768px) {
      padding: 90px 0 0 0;
    }
    @media only screen and (max-width: 600px) {
      padding: 80px 0 0 0;
    }
    h1 {
      max-width: 530px;
      font-size: 3rem;
      @media only screen and (max-width: 600px) {
        font-size: 2rem;
      }
    }
    p {
      max-width: 575px;
      margin: 50px 0 100px 0;
    }
    nav {
      display: flex;
      flex-direction: column;
      a {
        color: var(--white);
        transition: 0.3s ease;
        :hover {
          color: var(--glow);
        }
      }
    }
  }
`

const BigCopy = styled.div`
  max-width: 1080px;
  margin: 100px auto;
  padding: 0 20px;
  h1,
  h2 {
    font-size: 3rem;
    @media only screen and (max-width: 600px) {
      font-size: 2rem;
    }
  }
`

const FeaturePageSection = styled.section`
  width: 100%;
  max-width: 1000px;
  margin: 280px auto 100px auto;
  position: relative;
  @media only screen and (max-width: 1024px) {
    margin: 100px auto 100px auto;
  }
  .services-container {
    max-width: 400px;
    position: absolute;
    left: 60%;
    top: -20%;
    @media only screen and (max-width: 1024px) {
      position: relative;
      left: 0;
      padding: 20px;
    }
    h3 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }
  .images {
    display: flex;
    pointer-events: none;
    z-index: 0;
    /* padding: 20px; */
    max-width: 900px;
    margin: auto;
    @media only screen and (max-width: 1024px) {
      flex-direction: column;
      padding: 0 20px;
    }
    .image-1 {
      width: 60%;
      height: 375px;
      margin-bottom: 180px;
      margin-right: -100px;
      object-fit: cover;
      @media only screen and (max-width: 1024px) {
        margin: 0 0 20px 0;
        width: 100%;
        height: auto;
      }
    }
    .image-2 {
      width: 60%;
      margin-top: 150px;
      margin-bottom: 300px;
      height: 375px;
      object-fit: cover;
      @media only screen and (max-width: 1024px) {
        margin: 0;
        width: 100%;
        height: auto;
      }
    }
  }
  .financing-container {
    max-width: 400px;
    margin-top: -400px;
    @media only screen and (max-width: 1024px) {
      position: relative;
      left: 0;
      padding: 20px;
      margin: 0;
    }
    h3 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }
`

const FeaturePage = ({ data }) => {
  console.log(data)
  const bigCopy = data.main.featureContent.bigCopy
  const servicesCopy = data.main.featureContent.services.copy
  const financeCopy = data.main.featureContent.financing.copy
  return (
    <Layout>
      <FeatureHero>
        <BackgroundVideo
          videoSource={data.main.hero_section.heroSection.backgroundVideo}
        />
        <Wrapper>
          <div className="hero-inner">
            <h1>{data.main.title}</h1>
            <p>{data.main.hero_section.heroSection.introParagraph}</p>
            <nav>
              <div>On this page</div>
              <Link to="#services">Services</Link>
              <Link to="#financing">Financing</Link>
              <Link to="#tech">Technology</Link>
              {data.page ? <Link to="#casestudy">Case study</Link> : null}
            </nav>
          </div>
        </Wrapper>
      </FeatureHero>

      <BigCopy
        className="big-copy"
        dangerouslySetInnerHTML={{ __html: bigCopy }}
      />
      <FeaturePageSection>
        <div className="services-container" id="services">
          <h3>Services</h3>
          <div
            className="services-copy"
            dangerouslySetInnerHTML={{ __html: servicesCopy }}
          />
        </div>
        <div className="images">
          <Img
            className="image-1"
            fluid={
              data.main.featureContent.services.image.localFile.childImageSharp
                .fluid
            }
          />
          <Img
            className="image-2"
            fluid={
              data.main.featureContent.financing.image.localFile.childImageSharp
                .fluid
            }
          />
        </div>
        <div className="financing-container" id="financing">
          <h3>Financing</h3>
          <div
            className="finance-copy"
            dangerouslySetInnerHTML={{ __html: financeCopy }}
          />
        </div>
      </FeaturePageSection>
      <HomepageTechnologiesSection />
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
