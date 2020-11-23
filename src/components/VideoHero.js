import React from "react"
import styled from "styled-components"
import BackgroundVideo from "./BackgroundVideo"
import Wrapper from "./Wrapper"
import { Link } from "gatsby"
import { motion } from "framer-motion"

export const VideoHeroSection = styled.section`
  width: 100%;
  color: white;
  position: relative;
  object-fit: cover;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  .hero-inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 150px 0;
    justify-content: center;
    position: relative;
    @media only screen and (max-width: 1024px) {
      padding: 110px 0;
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

const VideoHero = ({ data, title }) => {
  console.log(data)
  return (
    <VideoHeroSection>
      <BackgroundVideo videoSource={data.heroSection.backgroundVideo} />
      <Wrapper>
        <div className="hero-inner">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                delay: 0.8,
                duration: 0.6,
                ease: [0.6, 0.05, -0.01, 0.9],
              },
            }}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                delay: 1.3,
                duration: 0.6,
                ease: [0.6, 0.05, -0.01, 0.9],
              },
            }}
          >
            {data.heroSection.introParagraph}
          </motion.p>
          <nav>
            <div>
              <span className="glow">↓</span> On this page
            </div>
            <Link to="#story">Our story</Link>
            <Link to="#team">Our team</Link>
            <Link to="#careers">Careers</Link>
          </nav>
        </div>
      </Wrapper>
    </VideoHeroSection>
  )
}

export default VideoHero
