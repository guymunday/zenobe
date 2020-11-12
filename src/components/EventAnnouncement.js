import React from "react"
import Img from "gatsby-image"
import { useStaticQuery } from "gatsby"
import styled from "styled-components"

const EventWrapper = styled.section`
  width: 100%;
  padding: 50px;
  .event-flex {
    width: 100%;
    max-width: 1300px;
    margin: auto;
    display: flex;
    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
    background: var(--electric);
    .event-inner {
      width: 50%;
      padding: 60px 30px;
      @media only screen and (max-width: 768px) {
        order: 2;
        width: 100%;
      }
      h3 {
        font-size: 2.5rem;
        max-width: 400px;
        @media only screen and (max-width: 768px) {
          font-size: 2rem;
        }
      }
      p {
        margin: 30px 0;
      }
    }
    .gatsby-image-wrapper {
      min-width: 50%;
      flex-grow: 1;
      object-fit: cover;
    }
  }
`

const EventAnnouncment = () => {
  const event = useStaticQuery(graphql`
    {
      allWpAcfPage(filter: { id: { eq: "cG9zdDo0NQ==" } }) {
        nodes {
          homepage {
            eventLaunchSection {
              link
              paragraph
              sectionTitle
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
  const data = event.allWpAcfPage.nodes[0].homepage.eventLaunchSection

  return (
    <EventWrapper>
      <div className="event-flex">
        <div className="event-inner">
          <h3>{data.sectionTitle}</h3>
          <p>{data.paragraph}</p>
          <a href={data.link}>Find out more</a>
        </div>
        <Img
          fluid={data.image.localFile.childImageSharp.fluid}
          alt={data.sectionTitle}
        />
      </div>
    </EventWrapper>
  )
}

export default EventAnnouncment
