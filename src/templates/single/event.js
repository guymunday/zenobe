import React from "react"
import { graphql } from "gatsby"
import LayoutAlt from "../../components/LayoutAlt"
import Img from "gatsby-image"
// import styled from "styled-components"
import { NewHeroSection } from "./news"
// import FormDownload from "../../components/FormDownload"
import ButtonInvert from "../../components/ButtonInvert"
import EventsThumbnails from "../../components/EventsThumbnails"
import EventsThumbnailsSingle from "../../components/EventsThumbnailsSingle"

const Event = ({ data }) => {
  return (
    <LayoutAlt>
      <NewHeroSection>
        <div className="title">
          <h1>{data.event.title}</h1>
          <span
            style={{
              display: "block",
              width: "80%",
              height: 1,
              background: "var(--black)",
              margin: "30px 0",
            }}
          ></span>
          <p>Date: {data.event.event.date}</p>
          <p>Time: {data.event.event.time}</p>
          <p>Location: {data.event.event.location}</p>
          <p>Cost: {data.event.event.cost}</p>
          <ButtonInvert text="Find out more" />
        </div>
        <Img
          fluid={data.event.event.image.localFile.childImageSharp.fluid}
          alt={data.event.title}
        />
      </NewHeroSection>
      <div
        style={{ maxWidth: 780, padding: "100px 20px", margin: "auto" }}
        className="content"
        dangerouslySetInnerHTML={{ __html: data.event.content }}
      />
      <EventsThumbnailsSingle eventsData={data} />
    </LayoutAlt>
  )
}

export default Event

export const query = graphql`
  query events($id: String!) {
    event: wpEvent(id: { eq: $id }) {
      id
      title
      slug
      content
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
    allWpEvent(limit: 4, filter: { id: { ne: $id } }) {
      edges {
        node {
          slug
          title
          id
          event {
            date(formatString: "")
            shortDescription
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
