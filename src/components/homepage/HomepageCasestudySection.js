import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Slider from "react-slick"
import Img from "gatsby-image"
import Button from "../Button"
// slider css
import "../../slick-carousel/slick/slick.css"
import "../../slick-carousel/slick/slick-theme.css"

const CaseStudySlider = styled.div`
  width: 100%;
  position: relative;
  color: var(--white);
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .gatsby-image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }
  /* .gatsby-image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
  } */
  .case-study-outer {
    position: relative;
    width: 100%;
    padding: 100px 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .case-study-inner {
    width: 100%;
    max-width: 1080px;
    padding: 20px;
    margin: 0 auto;
    h2 {
      font-size: 1.5rem;
      margin-bottom: 30px;
    }
    h3 {
      font-size: 2.5rem;
      max-width: 400px;
    }
    p {
      margin: 50px 0;
      max-width: 400px;
    }
    a {
      color: var(--white);
      overflow: hidden;
    }
  }
`

const HomepageCasestudySection = () => {
  const caseStudyData = useStaticQuery(graphql`
    {
      allWpCaseStudy(limit: 3) {
        edges {
          node {
            id
            slug
            title
            caseStudy {
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
      }
    }
  `)

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  }
  return (
    <>
      <Slider {...settings} style={{ zIndex: 9 }}>
        {caseStudyData.allWpCaseStudy.edges.map((edge) => {
          return (
            <>
              <CaseStudySlider>
                <div className="background-image">
                  <Img
                    fluid={
                      edge.node.caseStudy.heroSection.heroImage.localFile
                        .childImageSharp.fluid
                    }
                    alt={edge.node.title}
                  />
                </div>
                <div className="case-study-outer">
                  <div className="case-study-inner">
                    <h2>Case Study</h2>
                    <Link to={`/case-studies/${edge.node.slug}`}>
                      <h3>{edge.node.title}</h3>
                      <p>We should incluide an excerpt here</p>
                    </Link>
                    <Button
                      text="See case study"
                      link={`/case-studies/${edge.node.slug}`}
                    />
                  </div>
                </div>
              </CaseStudySlider>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default HomepageCasestudySection
