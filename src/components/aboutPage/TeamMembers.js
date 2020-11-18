import React from "react"
import Img from "gatsby-image"

const TeamMembers = ({ team }) => {
  console.log(team)

  return team.edges.map((teamMemember) => {
    return (
      <div className="team-thumbnail">
        <Img
          fluid={
            teamMemember.node.team_acf.photo.localFile.childImageSharp.fluid
          }
          alt={teamMemember.node.title}
        />
        <h2>{teamMemember.node.title}</h2>
        <p>{teamMemember.node.team_acf.jobTitle}</p>
      </div>
    )
  })
}

export default TeamMembers
