import React, { useState } from "react"
import styled from "styled-components"
import BackgroundVideo from "../BackgroundVideo"
import Button from "../Button"
import Wrapper from "../Wrapper"
import { motion, AnimatePresence } from "framer-motion"

const HeroSection = styled.section`
  width: 100%;
  color: var(--white);
  position: relative;
  object-fit: cover;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
  .hero-section-inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 150px 0;
    justify-content: center;
    position: relative;
    @media only screen and (max-width: 1024px) {
      padding: 130px 0 100px 0;
    }
    /* @media only screen and (max-width: 768px) {
      padding: 90px 0;
    }
    @media only screen and (max-width: 600px) {
      padding: 80px 0;
    } */
    h1 {
      max-width: 530px;
      font-size: 2.5rem;
      @media only screen and (max-width: 600px) {
        font-size: 2rem;
      }
    }
    nav {
      display: flex;
      flex-direction: column;
      margin-top: 50px;
      div:nth-child(2) {
        margin: 15px 0;
      }
    }
  }
`

const headingAni = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.8,
      duration: 0.6,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
}

const container = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.3,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
}

const listItem = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
}

const HomepageHero = ({ data }) => {
  const [video, setVideo] = useState(0)

  const homepageHeroData = data.allWpAcfPage.nodes[0].homepage.homepageHero
  const heading = homepageHeroData.homepageHeroCopy

  return (
    <>
      <HeroSection>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: video === 2 ? 1 : 0 }}
            exit={{ opacity: 0 }}
          >
            <BackgroundVideo
              videoSource={homepageHeroData.networkInfrastructureVideo}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: video === 1 ? 1 : 0 }}
            exit={{ opacity: 0 }}
          >
            <BackgroundVideo
              videoSource={homepageHeroData.electricVehiclesVideo}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: video === 1 || video === 2 ? 0 : 1 }}
          >
            <BackgroundVideo videoSource="https://www.youtube.com/watch?v=YH8MCKNkBuY" />
          </motion.div>
        </AnimatePresence>
        <div className="hero-section-inner">
          <Wrapper>
            <motion.div
              dangerouslySetInnerHTML={{ __html: heading }}
              variants={headingAni}
              initial="hidden"
              animate="show"
            />
            <motion.nav variants={container} initial="hidden" animate="show">
              <motion.div
                onHoverStart={() => setVideo(1)}
                onHoverEnd={() => setVideo(0)}
                style={{ display: "inline-block" }}
              >
                <Button
                  link="/electric-vehicles"
                  text="Electric Vehicles"
                  varAni={listItem}
                />
              </motion.div>
              <motion.div
                onHoverStart={() => setVideo(2)}
                onHoverEnd={() => setVideo(0)}
                style={{ display: "inline-block" }}
              >
                <Button
                  link="/commercial-and-industrial"
                  text="Commercial & Industrial"
                  varAni={listItem}
                />
              </motion.div>
              <Button
                link="/network-infrastructure"
                text="Network Infrastructure"
                varAni={listItem}
              />
            </motion.nav>
          </Wrapper>
        </div>
      </HeroSection>
    </>
  )
}

export default HomepageHero
