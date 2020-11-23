import React, { useEffect } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import ButtonInvert from "./ButtonInvert"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const EventWrapper = styled.section`
  width: 100%;
  padding: 50px;
  .event-flex {
    width: 100%;
    max-width: 1300px;
    margin: auto;
    display: flex;
    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
    background: var(--electric);
    .event-inner {
      width: 50%;
      padding: 60px 30px;
      @media only screen and (max-width: 768px) {
        order: 2;
        width: 100%;
      }
      h3 {
        font-size: 2.5rem;
        max-width: 400px;
        @media only screen and (max-width: 768px) {
          font-size: 2rem;
        }
      }
      p {
        margin: 30px 0;
      }
    }
    .gatsby-image-wrapper {
      min-width: 50%;
      flex-grow: 1;
      object-fit: cover;
    }
  }
`

const EventAnnouncment = () => {
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
        await animationHeader.start({
          opacity: 1,
          x: 0,
          transition: {
            ease: [0.6, 0.05, -0.01, 0.9],
            duration: 0.4,
          },
        })
        await animationParagraph.start((i) => ({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
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

  const event = useStaticQuery(graphql`
    {
      allWpEvent(limit: 1, sort: { fields: date, order: ASC }) {
        edges {
          node {
            id
            title
            slug
            event {
              date(formatString: "")
              shortDescription
              location
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
      }
    }
  `)
  const data = event.allWpEvent.edges[0].node

  return (
    <EventWrapper ref={featured}>
      <div className="event-flex">
        <div className="event-inner" key={data.id}>
          <motion.h3
            animate={animationHeader}
            initial={{ opacity: 0, x: -200 }}
          >
            {data.title}
          </motion.h3>
          <motion.p
            style={{ textDecoration: "underline" }}
            custom={0}
            animate={animationParagraph}
            initial={{ y: -100, opacity: 0 }}
          >
            {data.event.date} | {data.event.location}
          </motion.p>
          <motion.p
            custom={1}
            animate={animationParagraph}
            initial={{ y: -100, opacity: 0 }}
          >
            {data.event.shortDescription}
          </motion.p>
          <motion.div
            style={{ display: "inline-block" }}
            animate={animationButton}
            initial={{ scale: 0.3, opacity: 0 }}
          >
            <ButtonInvert link={`/events/${data.slug}`} text="Find out more" />
          </motion.div>
        </div>
        <Img
          fluid={data.event.image.localFile.childImageSharp.fluid}
          alt={data.title}
        />
      </div>
    </EventWrapper>
  )
}

export default EventAnnouncment
