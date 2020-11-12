import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import BoardMembers from "../components/aboutPage/BoardMembers"
// import TeamMembers from "../components/aboutPage/TeamMembers"
import NewsThumbnails from "../components/NewsTumbnails"
import VideoHero from "../components/VideoHero"

const About = ({ data: { board, team, page } }) => {
  const aboutData = page.nodes[0]
  console.log(aboutData)
  return (
    <Layout>
      <VideoHero data={aboutData.hero_section} title="About" />
      <h3>Our story</h3>
      <div dangerouslySetInnerHTML={{ __html: aboutData.about.ourStory }} />
      <h3>Our Team</h3>
      <div dangerouslySetInnerHTML={{ __html: aboutData.about.ourTeam }} />
      <BoardMembers board={board} />
      {/* <TeamMembers team={team} /> */}
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
    team: allWpTeamMember(
      filter: { team_acf: { boardMember: { eq: false } } }
    ) {
      edges {
        node {
          team_acf {
            boardMember
            fieldGroupName
            jobTitle
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
                    fluid {
                      base64
                      tracedSVG
                      srcWebp
                      srcSetWebp
                      originalImg
                      originalName
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
  }
`
