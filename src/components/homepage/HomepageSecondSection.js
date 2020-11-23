import React, { useEffect } from "react"
import styled from "styled-components"
import ButtonInvert from "../ButtonInvert"
import Wrapper from "../Wrapper"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const SecondSection = styled(motion.section)`
  width: 100%;
  padding: 100px 0;
  @media only screen and (max-width: 600px) {
    padding: 50px 0;
  }
  h2 {
    font-size: 3.2rem;
    max-width: 775px;
    @media only screen and (max-width: 768px) {
      font-size: 2.7rem;
    }
    @media only screen and (max-width: 600px) {
      font-size: 2rem;
    }
  }
  .inner-flex {
    display: flex;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
    p {
      padding: 50px 0;
      @media only screen and (max-width: 600px) {
        padding: 0;
      }
      :first-child {
        margin-right: 1rem;
        @media only screen and (max-width: 600px) {
          margin: 30px 0;
        }
      }
      :nth-child(2) {
        margin-left: 1rem;
        @media only screen and (max-width: 600px) {
          margin: 0 0 30px 0;
        }
      }
    }
  }
`

const HomepageSecondSection = ({ data }) => {
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
        await animationHeader.start({
          opacity: 1,
          x: 0,
          transition: {
            ease: [0.6, 0.05, -0.01, 0.9],
            duration: 0.5,
          },
        })
        await animationParagraph.start((i) => ({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: i * 0.3,
            ease: [0.6, 0.05, -0.01, 0.9],
          },
        }))
        await animationButton.start({
          opacity: 1,
          scale: 1,
        })
      }
      sequence()
    }
  }, [animationHeader, animationParagraph, animationButton, inView])

  const homepageHeroData =
    data.allWpAcfPage.nodes[0].homepage.whiteBackgroundCopy

  const heading = homepageHeroData.sectionTitle

  return (
    <SecondSection ref={featured}>
      <Wrapper>
        <motion.div
          dangerouslySetInnerHTML={{ __html: heading }}
          animate={animationHeader}
          initial={{ opacity: 0, x: -200 }}
        />
        <div className="inner-flex">
          <motion.p
            custom={0}
            animate={animationParagraph}
            initial={{ y: -100, opacity: 0 }}
          >
            {homepageHeroData.paragraph1}
          </motion.p>
          <motion.p
            custom={1}
            animate={animationParagraph}
            initial={{ y: -100, opacity: 0 }}
          >
            {homepageHeroData.paragraph2}
          </motion.p>
        </div>
        <motion.span
          style={{ display: "inline-block" }}
          animate={animationButton}
          initial={{ scale: 0.3, opacity: 0 }}
        >
          <ButtonInvert text="Find out more" link="" />
        </motion.span>
      </Wrapper>
    </SecondSection>
  )
}

export default HomepageSecondSection
