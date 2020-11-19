import React, { useEffect } from "react"
import styled from "styled-components"
import BackgroundVideo from "../BackgroundVideo"
import Button from "../Button"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const HomeAboutWrapper = styled.section`
  background: var(--black);
  width: 100%;
  position: relative;
  display: flex;
  padding: 100px 0px 100px 50px;
  color: var(--white);
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    padding: 20px 0 30px 0;
    flex-direction: column;
  }
  .video-container {
    position: relative;
    width: 100%;
    min-height: 600px;
    z-index: 2;
    margin-left: -25%;
    margin-right: 100px;
    @media only screen and (max-width: 1024px) {
      width: 80%;
    }
    @media only screen and (max-width: 768px) {
      width: 100%;
      margin-left: 30px;
    }
  }
  .copy-container {
    width: 50%;
    padding: 100px 50px;
    max-width: 675px;
    z-index: 7;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0)
    );
    @media only screen and (max-width: 1024px) {
      width: 70%;
    }
    @media only screen and (max-width: 768px) {
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

const HomepageAboutSection = ({ data }) => {
  const animationTitle = useAnimation()
  const animationHeader = useAnimation()
  const animationParagraph = useAnimation()
  const animationButton = useAnimation()
  const [featured, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px",
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

  return (
    <HomeAboutWrapper ref={featured}>
      <div className="copy-container">
        <motion.h2 animate={animationTitle} initial={{ opacity: 0, x: -200 }}>
          Our story
        </motion.h2>
        <motion.h3 animate={animationHeader} initial={{ opacity: 0, x: -200 }}>
          Where have we come from?
        </motion.h3>
        <motion.p
          animate={animationParagraph}
          initial={{ y: -200, opacity: 0 }}
        >
          {data.nodes[0].hero_section.heroSection.introParagraph}
        </motion.p>
        <motion.div
          style={{ display: "inline-block" }}
          animate={animationButton}
          initial={{ scale: 0.3, opacity: 0 }}
        >
          <Button link="/about" text="Find out more" />
        </motion.div>
      </div>
      <div className="video-container">
        <BackgroundVideo
          videoSource={data.nodes[0].hero_section.heroSection.backgroundVideo}
        />
      </div>
    </HomeAboutWrapper>
  )
}

export default HomepageAboutSection
