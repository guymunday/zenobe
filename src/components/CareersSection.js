import React, { useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"
import "../slick-carousel/slick/slick.css"
import "../slick-carousel/slick/slick-theme.css"
import { useMediaQuery } from "../hooks/useMediaQuery"
import ButtonInvert from "./ButtonInvert"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const CareerSection = styled.section`
  padding: 50px;
  overflow: hidden;
  h3 {
    padding: 30px;
    font-size: 2.5rem;
  }
  .career-inner {
    background: var(--electric);
    width: 100%;
    .career-inner-flex {
      display: flex;
      width: 100%;
      @media only screen and (max-width: 768px) {
        flex-direction: column;
      }
      .gatsby-image-wrapper {
        width: 70%;
        margin-left: -10%;
        margin-bottom: -10%;
        @media only screen and (max-width: 768px) {
          display: none;
        }
      }
    }
    .slick-prev {
      display: none !important;
    }
  }
`

const CareerThumb = styled.div`
  padding: 20px;
  h3 {
    padding: 0;
    margin-bottom: 20px;
    font-size: 1.8rem;
  }
  span {
    display: block;
    height: 1px;
    background: #000;
    margin: 30px 0;
    width: 100%;
  }
  .button {
    border: 1px solid #000;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 50%;
    line-height: 1.8;
    transition: 0.3s ease;
    margin-bottom: 30px;
    :hover {
      background: #000;
      color: var(--glow);
    }
  }
`

const Careers = () => {
  const isSmall = useMediaQuery("(min-width: 768px)")

  const animation = useAnimation()
  const [featured, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      const sequence = async () => {
        await animation.start({
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: [0.6, 0.05, -0.01, 0.9],
          },
        })
      }
      sequence()
    }
  }, [animation, inView])

  const jobs = useStaticQuery(graphql`
    {
      allWpJob {
        edges {
          node {
            title
            content
            slug
            id
            careers {
              sendCv
              shortDescription
              emailLink
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

  console.log()

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: jobs.allWpJob.edges[1] ? 2 : 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: jobs.allWpJob.edges[1] ? 2 : 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <CareerSection id="careers">
      <motion.div
        className="career-inner"
        ref={featured}
        animate={animation}
        initial={{ scale: 0.8, opacity: 1 }}
      >
        <motion.h3>Join the team</motion.h3>
        <div className="career-inner-flex">
          <Img
            fluid={
              jobs.allWpJob.edges[0].node.careers.image.localFile
                .childImageSharp.fluid
            }
            alt="careers"
          />
          <Slider
            {...settings}
            style={{
              width: isSmall ? "50%" : "100%",
            }}
          >
            {jobs.allWpJob.edges.map((job) => {
              return (
                <CareerThumb key={job.node.id}>
                  <span></span>
                  <h3>{job.node.title}</h3>
                  <p>{job.node.careers.shortDescription}</p>
                  <span></span>
                  <Link to={`/careers/${job.node.slug}`}>
                    <div className="button">+</div>
                  </Link>
                </CareerThumb>
              )
            })}
            {jobs.allWpJob.edges[1] ? null : (
              <CareerThumb>
                <span></span>
                <ButtonInvert link="/careers" text="Go to careers" />
              </CareerThumb>
            )}
          </Slider>
        </div>
      </motion.div>
    </CareerSection>
  )
}

export default Careers
