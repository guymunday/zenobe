import React, { useEffect } from "react"
import Img from "gatsby-image"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const TeamMembers = ({ team }) => {
  const animationThumbnail = useAnimation()
  const [featured, inView] = useInView({
    // threshold: 0.5,
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
      }
      sequence()
    }
  }, [animationThumbnail, inView])

  return team.edges.map((teamMemember, i) => {
    return (
      <motion.div
        ref={featured}
        className="team-thumbnail"
        key={teamMemember.node.id}
        custom={i}
        animate={animationThumbnail}
        initial={{ x: 500, opacity: 0 }}
      >
        <Img
          fluid={
            teamMemember.node.team_acf.photo.localFile.childImageSharp.fluid
          }
          alt={teamMemember.node.title}
        />
        <h2>{teamMemember.node.title}</h2>
        <p>{teamMemember.node.team_acf.jobTitle}</p>
      </motion.div>
    )
  })
}

export default TeamMembers
