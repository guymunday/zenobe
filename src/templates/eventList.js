import React from "react"
import { graphql, Link } from "gatsby"
import LayoutAlt from "../components/LayoutAlt"
import Img from "gatsby-image"
import { BlackHeader, NewsFlex } from "./newsList"
import ButtonInvert from "../components/ButtonInvert"

const EventList = (props) => {
  console.log(props)
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/events" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  return (
    <LayoutAlt>
      <BlackHeader>
        <h1>Events</h1>
      </BlackHeader>
      <NewsFlex>
        {props.data.allWpEvent.edges.map((e) => {
          return (
            <div className="flex-item" key={e.node.id}>
              <Img
                fluid={e.node.event.image.localFile.childImageSharp.fluid}
                alt={e.node.title}
              />
              <div>
                <h2>{e.node.title}</h2>
                <p>
                  {e.node.event.date} | {e.node.event.location}
                </p>
                <p></p>
                <ButtonInvert link={e.node.slug} text="Find out more" />
              </div>
            </div>
          )
        })}
      </NewsFlex>
      {!isFirst && (
        <Link to={prevPage} rel="prev">
          ← Previous Page
        </Link>
      )}
      {!isLast && (
        <Link to={nextPage} rel="next">
          Next Page →
        </Link>
      )}
    </LayoutAlt>
  )
}

export default EventList

export const eventListQuery = graphql`
  query eventListQuery($skip: Int!, $limit: Int!) {
    allWpEvent(limit: $limit, skip: $skip) {
      edges {
        node {
          id
          title
          slug
          event {
            cost
            date(formatString: "")
            location
            time
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
`
