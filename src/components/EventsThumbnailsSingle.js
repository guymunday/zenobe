import React, { useEffect } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"
import "../slick-carousel/slick/slick.css"
import "../slick-carousel/slick/slick-theme.css"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { NewsSection, SliderThumb } from "./NewsTumbnails"

const EventsThumbnailsSingle = ({ eventsData }) => {
  const animationThumbnail = useAnimation()
  const animationButton = useAnimation()
  const [featured, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      const sequence = async () => {
        await animationThumbnail.start((i) => ({
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.3,
            delay: i * 0.2,
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
  }, [animationThumbnail, animationButton, inView])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <>
      <NewsSection ref={featured}>
        <Slider {...settings} style={{ zIndex: 9 }}>
          {eventsData.allWpEvent.edges.map((edge, i) => {
            return (
              <SliderThumb
                key={edge.node.id}
                custom={i}
                animate={animationThumbnail}
                initial={{ x: 500, opacity: 0 }}
              >
                <span></span>
                <div className="image">
                  <Img
                    fluid={
                      edge.node.event.image.localFile.childImageSharp.fluid
                    }
                    alt={edge.node.title}
                  />
                </div>
                <Link to={`/events/${edge.node.slug}`} className="news-thumb">
                  <h3>{edge.node.title}</h3>
                  <p>{edge.node.event.shortDescription}</p>
                  <span></span>
                  <motion.div
                    className="button"
                    animate={animationButton}
                    initial={{ scale: 0.3, opacity: 0 }}
                  >
                    +
                  </motion.div>
                </Link>
              </SliderThumb>
            )
          })}
        </Slider>
      </NewsSection>
    </>
  )
}

export default EventsThumbnailsSingle
