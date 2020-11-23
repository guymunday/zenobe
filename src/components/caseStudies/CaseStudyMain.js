import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const CaseStudyContainer = styled.section`
  background: var(--black);
  color: var(--white);
  padding-bottom: 50px;
  .context-outer {
    position: relative;
    width: 100%;
    max-width: 1300px;
    margin: auto;
    .context-inner {
      padding: 100px 0 20px 20px;
      max-width: 500px;
      z-index: 5;
      @media only screen and (max-width: 1100px) {
        max-width: 450px;
        padding: 100px 20px 0 20px;
      }
      @media only screen and (max-width: 768px) {
        max-width: 100%;
      }
      h2 {
        font-size: 2.5rem;
        margin-bottom: 2.5rem;
      }
      h3 {
        margin-bottom: 0.5rem;
      }
    }
    .images {
      display: flex;
      pointer-events: none;
      z-index: 0;
      padding: 20px;
      max-width: 1300px;
      margin: auto;
      @media only screen and (max-width: 1024px) {
        flex-direction: column;
      }
      .image-1 {
        width: 70%;
        height: auto;
        margin-top: 200px;
        margin-right: -150px;
        object-fit: cover;
        @media only screen and (max-width: 1024px) {
          margin: 0 0 20px 0;
          width: 100%;
        }
      }
      .image-2 {
        width: 70%;
        margin-top: -150px;
        margin-bottom: 200px;
        height: auto;
        object-fit: cover;
        @media only screen and (max-width: 1024px) {
          margin: 0;
          width: 100%;
        }
      }
    }
  }
  .approach-outer {
    display: flex;
    width: 100%;
    max-width: 900px;
    margin: auto;
    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
    .stats {
      padding: 20px;
      .stat-no {
        font-size: 4rem;
        color: var(--glow);
        -webkit-text-fill-color: var(--black);
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: var(--glow);
        font-weight: 700;
      }
    }
    .approach-inner {
      padding: 20px;
      h3 {
        margin-bottom: 0.5rem;
      }
    }
  }
`

const CaseStudyMain = ({ data }) => {
  const [featured, inView] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true,
  })

  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 100,
    },
  }

  const context = data.page.caseStudy.context
  const approach = data.page.caseStudy.approach
  return (
    <CaseStudyContainer id="casestudy">
      <div className="context-outer">
        <div className="context-inner">
          <h2>Case Study</h2>
          <h3>Context</h3>
          <div dangerouslySetInnerHTML={{ __html: context }} />
        </div>
        <div className="images" ref={featured}>
          <motion.div
            className="image-1"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
          >
            <Img
              fluid={
                data.page.caseStudy.images.image1.localFile.childImageSharp
                  .fluid
              }
            />
          </motion.div>
          <motion.div
            className="image-2"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
          >
            <Img
              fluid={
                data.page.caseStudy.images.image2.localFile.childImageSharp
                  .fluid
              }
            />
          </motion.div>
        </div>
      </div>
      <div className="approach-outer">
        <div className="stats">
          <h3>In numbers</h3>
          {data.page.caseStudy.inNumbers.map((stat) => {
            return (
              <>
                <div className="stat-no">{stat.stat.number}</div>
                <p className="stat-info">{stat.stat.information}</p>
              </>
            )
          })}
        </div>
        <div className="approach-inner">
          <h3>Our Approach</h3>
          <div dangerouslySetInnerHTML={{ __html: approach }} />
        </div>
      </div>
    </CaseStudyContainer>
  )
}

export default CaseStudyMain
