import React from "react"
import Img from "gatsby-image"

const BoardMembers = ({ board }) => {
  console.log(board)
  return board.edges.map((boardMemember) => {
    return (
      <>
        <div>{boardMemember.node.title}</div>
        <Img
          fluid={
            boardMemember.node.team_acf.photo.localFile.childImageSharp.fluid
          }
          alt="board-member"
        />
      </>
    )
  })
}

export default BoardMembers
