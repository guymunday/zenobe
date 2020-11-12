import React from "react"
import Img from "gatsby-image"

const TeamMembers = ({ team }) => {
  console.log(team)
  return team.edges.map((teamMemember) => {
    return (
      <>
        <div>{teamMemember.node.title}</div>
        <Img
          fluid={
            teamMemember.node.team_acf.photo.localFile.childImageSharp.fluid
          }
          alt="team-member"
        />
      </>
    )
  })
}

export default TeamMembers
