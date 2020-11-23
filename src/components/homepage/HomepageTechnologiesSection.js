import React, { useEffect } from "react"
import styled from "styled-components"
import BackgroundVideo from "../../components/BackgroundVideo"
import { useStaticQuery, graphql } from "gatsby"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import ButtonInvert from "../ButtonInvert"

const TechSection = styled.section`
  background: var(--electric);
  width: 100%;
  position: relative;
  display: flex;
  padding: 100px 50px 100px 0;
  @media only screen and (max-width: 768px) {
    padding: 20px 0 30px 0;
    flex-direction: column;
  }
  .video-container {
    position: relative;
    width: 50%;
    min-height: 600px;
    z-index: 2;
    @media only screen and (max-width: 768px) {
      order: 2;
      width: 100%;
      margin-left: 30px;
    }
  }
  .copy-container {
    width: 50%;
    padding: 100px 50px;
    max-width: 675px;
    @media only screen and (max-width: 768px) {
      order: 1;
      width: 100%;
      padding: 30px;
    }
    h2 {
      color: var(--white);
      font-size: 1.5rem;
      margin-bottom: 10px;
      @media only screen and (max-width: 768px) {
        display: none;
      }
    }
    h3 {
      font-size: 3rem;
      @media only screen and (max-width: 768px) {
        font-size: 2rem;
      }
    }
    p {
      margin: 30px 0;
    }
  }
`

const HomepageTechnologiesSection = () => {
  const animationTitle = useAnimation()
  const animationHeader = useAnimation()
  const animationParagraph = useAnimation()
  const animationButton = useAnimation()
  const [featured, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      const sequence = async () => {
        await animationTitle.start({
          opacity: 1,
          x: 0,
          transition: {
            ease: [0.6, 0.05, -0.01, 0.9],
            duration: 0.5,
          },
        })
        await animationHeader.start({
          opacity: 1,
          x: 0,
          transition: {
            ease: [0.6, 0.05, -0.01, 0.9],
            duration: 0.5,
          },
        })
        await animationParagraph.start({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
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

  const data = useStaticQuery(graphql`
    {
      allWpAcfPage(filter: { id: { eq: "cG9zdDo0NQ==" } }) {
        nodes {
          id
          homepage {
            technologiesSection {
              paragraph
              sectionTitle
              video
            }
          }
        }
      }
    }
  `)

  const techSection = data.allWpAcfPage.nodes[0].homepage.technologiesSection
  console.log(techSection)
  return (
    <TechSection ref={featured}>
      <motion.div className="video-container">
        <BackgroundVideo videoSource={techSection.video} />
      </motion.div>
      <div className="copy-container">
        <motion.h2 animate={animationTitle} initial={{ opacity: 0, x: 200 }}>
          Network infastructure
        </motion.h2>
        <motion.h3 animate={animationHeader} initial={{ opacity: 0, x: 200 }}>
          {techSection.sectionTitle}
        </motion.h3>
        <motion.p
          animate={animationParagraph}
          initial={{ y: -200, opacity: 0 }}
        >
          {techSection.paragraph}
        </motion.p>
        <motion.div
          style={{ display: "inline-block" }}
          animate={animationButton}
          initial={{ scale: 0.3, opacity: 0 }}
        >
          <ButtonInvert link="/network-infrastructure" text="Find out more" />
        </motion.div>
      </div>
    </TechSection>
  )
}

export default HomepageTechnologiesSection
