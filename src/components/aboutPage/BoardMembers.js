import React from "react"
import Img from "gatsby-image"

const BoardMembers = ({ board }) => {
  console.log(board)
  return board.edges.map((boardMemember) => {
    return (
      <div className="team-thumbnail">
        <Img
          fluid={
            boardMemember.node.team_acf.photo.localFile.childImageSharp.fluid
          }
          alt={boardMemember.node.title}
        />
        <h2>{boardMemember.node.title}</h2>
        <p>{boardMemember.node.team_acf.jobTitle}</p>
      </div>
    )
  })
}

export default BoardMembers
