import React, { useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Slider from "react-slick"
import Img from "gatsby-image"
import Button from "../Button"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
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
  const animationTitle = useAnimation()
  const animationHeader = useAnimation()
  const animationParagraph = useAnimation()
  const animationButton = useAnimation()
  const [featured, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      const sequence = async () => {
        await animationTitle.start({
          opacity: 1,
          x: 0,
          transition: {
            ease: [0.6, 0.05, -0.01, 0.9],
            duration: 0.4,
          },
        })
        await animationHeader.start({
          opacity: 1,
          x: 0,
          transition: {
            ease: [0.6, 0.05, -0.01, 0.9],
            duration: 0.4,
          },
        })
        await animationParagraph.start({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
            ease: [0.6, 0.05, -0.01, 0.9],
          },
        })
        await animationButton.start({
          opacity: 1,
          scale: 1,
        })
      }
      sequence()
    }
  }, [
    animationTitle,
    animationHeader,
    animationParagraph,
    animationButton,
    inView,
  ])

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
    autoplaySpeed: 3000,
    // fade: true,
  }
  return (
    <div ref={featured} id="tech">
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
                    <motion.h2
                      animate={animationTitle}
                      initial={{ opacity: 0, x: 200 }}
                    >
                      Case Study
                    </motion.h2>
                    <motion.h3
                      animate={animationHeader}
                      initial={{ opacity: 0, x: 200 }}
                    >
                      {edge.node.title}
                    </motion.h3>
                    <motion.p
                      animate={animationParagraph}
                      initial={{ y: -100, opacity: 0 }}
                    >
                      We should incluide an excerpt here
                    </motion.p>
                    <motion.div
                      style={{ display: "inline-block" }}
                      animate={animationButton}
                      initial={{ scale: 0.3, opacity: 0 }}
                    >
                      <Button
                        text="See case study"
                        link={`/case-studies/${edge.node.slug}`}
                      />
                    </motion.div>
                  </div>
                </div>
              </CaseStudySlider>
            </>
          )
        })}
      </Slider>
    </div>
  )
}

export default HomepageCasestudySection
