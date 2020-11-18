import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import BoardMembers from "../components/aboutPage/BoardMembers"
import TeamMembers from "../components/aboutPage/TeamMembers"
import NewsThumbnails from "../components/NewsTumbnails"
import VideoHero from "../components/VideoHero"
import styled from "styled-components"
import EventAnnouncement from "../components/EventAnnouncement"
import Careers from "../components/Careers"

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  div {
    width: 25%;
    padding: 10px;
    .gatsby-image-wrapper {
      width: 100%;
    }
  }
`

const About = ({ data: { board, team, page, jobs } }) => {
  const aboutData = page.nodes[0]
  console.log(aboutData)
  return (
    <Layout>
      <VideoHero data={aboutData.hero_section} title="About" />
      <h3>Our story</h3>
      <div dangerouslySetInnerHTML={{ __html: aboutData.about.ourStory }} />
      <h3>Our Team</h3>
      <div dangerouslySetInnerHTML={{ __html: aboutData.about.ourTeam }} />
      <h3>The Board</h3>
      <FlexBox>
        <BoardMembers board={board} />
      </FlexBox>
      <h3>The Team</h3>
      <FlexBox>
        <TeamMembers team={team} />
      </FlexBox>
      {jobs ? <Careers /> : null}
      <EventAnnouncement />
      <NewsThumbnails />
    </Layout>
  )
}
export default About

export const query = graphql`
  query TeamMembers {
    board: allWpTeamMember(
      filter: { team_acf: { boardMember: { eq: true } } }
    ) {
      edges {
        node {
          team_acf {
            boardMember
            fieldGroupName
            jobTitle
            photo {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          slug
          id
          title
        }
      }
    }
    team: allWpTeamMember(filter: { team_acf: { boardMember: { ne: true } } }) {
      edges {
        node {
          team_acf {
            boardMember
            fieldGroupName
            jobTitle
            photo {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          slug
          id
          title
        }
      }
    }
    allWpPost(limit: 4) {
      edges {
        node {
          slug
          title
          id
          news_excerpt {
            excerpt
          }
          case_news {
            heroSection {
              heroImage {
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
    page: allWpAcfPage(filter: { id: { eq: "cG9zdDoxNDI=" } }) {
      nodes {
        about {
          aboutVideo
          ourStory
          ourTeam
        }
        hero_section {
          heroSection {
            backgroundVideo
            introParagraph
          }
        }
      }
    }
    jobs: allWpJob {
      edges {
        node {
          title
        }
      }
    }
  }
`
