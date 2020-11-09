import React from "react"
import { graphql } from "gatsby"

const Casestudies = ({ data }) => {
  return data.allWpCaseStudy.edges.map((casestudy) => {
    const title = casestudy.node.title
    console.log(title)
    return (
      <>
        <h1>{title}</h1>
      </>
    )
  })
}
export default Casestudies

export const query = graphql`
  query CaseStudy {
    allWpCaseStudy {
      edges {
        node {
          title
          slug
          id
        }
      }
    }
  }
`
