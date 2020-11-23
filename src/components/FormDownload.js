import React, { useEffect } from "react"
import styled from "styled-components"
import ButtonInvert from "./ButtonInvert"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const EmailBanner = styled.section`
  background: var(--electric);
  .email-inner {
    padding: 100px 20px;
    text-align: center;
    @media only screen and (max-width: 600px) {
      text-align: left;
      padding: 60px 20px;
    }
    h3 {
      font-size: 3rem;
      max-width: 675px;
      margin: 0 auto;
      @media only screen and (max-width: 600px) {
        font-size: 2rem;
      }
    }
    p {
      max-width: 540px;
      margin: 30px auto;
    }
  }
`

function handleForm(event) {
  event.preventDefault()
}

const FormDownload = () => {
  const animationParagraph = useAnimation()
  const animationButton = useAnimation()
  const [featured, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      const sequence = async () => {
        await animationParagraph.start({
          opacity: 1,
          y: 0,
          transition: {
            ease: [0.6, 0.05, -0.01, 0.9],
            duration: 0.5,
          },
        })
        await animationButton.start({
          opacity: 1,
          scale: 1,
        })
      }
      sequence()
    }
  }, [animationParagraph, animationButton, inView])

  return (
    <EmailBanner ref={featured}>
      <div className="email-inner">
        <h3>Contact for next steps</h3>
        <motion.p
          animate={animationParagraph}
          initial={{ y: -100, opacity: 0 }}
        >
          For enquiries regarding Electric Vehicle Fleets, please email{" "}
          <a href="mailto:contact@zenobe.com">contact@zenobe.com</a> or call +44
          (0)20 3912 7853
        </motion.p>
        <motion.div
          style={{ display: "inline-block" }}
          animate={animationButton}
          initial={{ scale: 0.3, opacity: 0 }}
        >
          <ButtonInvert link="" text="Download form" />
        </motion.div>
      </div>
    </EmailBanner>
  )
}

export default FormDownload
