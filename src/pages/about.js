import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import BoardMembers from "../components/aboutPage/BoardMembers"
import TeamMembers from "../components/aboutPage/TeamMembers"
import NewsThumbnails from "../components/NewsTumbnails"
import VideoHero from "../components/VideoHero"
import styled from "styled-components"
import EventAnnouncement from "../components/EventAnnouncement"
import Careers from "../components/CareersSection"
import ReactPlayer from "react-player"
import Wrapper from "../components/Wrapper"
import EmailSignup from "../components/EmailSignup"

const AboutStyles = styled.div`
  h3 {
    font-size: 3rem;
    margin-top: 20px;
  }
  .paragraphs {
    max-width: 675px;
    margin: 30px 0 60px;
  }
`

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 10px 10px 50px 10px;
  div {
    width: 25%;
    padding: 10px 10px 30px 10px;
    @media only screen and (max-width: 768px) {
      width: 33%;
    }
    @media only screen and (max-width: 500px) {
      width: 50%;
    }
    .gatsby-image-wrapper {
      width: 100%;
    }
    h2 {
      font-size: 1rem;
      margin: 1rem 0 0.5rem 0;
    }
    p {
      font-size: 0.8rem;
    }
  }
`

export const IframeContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    outline: none;
    border: none;
  }
`

const About = ({ data: { board, team, page, jobs } }) => {
  const aboutData = page.nodes[0]
  console.log(aboutData)
  return (
    <Layout>
      <AboutStyles>
        <VideoHero data={aboutData.hero_section} title="About" />
        <Wrapper>
          <h3 id="story">Our story</h3>
          <div
            className="paragraphs"
            dangerouslySetInnerHTML={{ __html: aboutData.about.ourStory }}
          />
          {/* <ReactPlayer url={aboutData.about.aboutVideo} width="100%" /> */}
          <IframeContainer>
            <iframe src={aboutData.about.aboutVideo} />
          </IframeContainer>
          <h3 id="team">Our Team</h3>
          <div
            className="paragraphs"
            dangerouslySetInnerHTML={{ __html: aboutData.about.ourTeam }}
          />
          <h3>The Board</h3>
        </Wrapper>
        <FlexBox>
          <BoardMembers board={board} />
        </FlexBox>
        <div style={{ background: "rgba(50,219,255,0.2)" }}>
          <Wrapper>
            <h3>The Team</h3>
          </Wrapper>
          <FlexBox>
            <TeamMembers team={team} />
          </FlexBox>
        </div>
      </AboutStyles>
      {jobs ? <Careers /> : null}
      <EventAnnouncement />
      <NewsThumbnails />
      <EmailSignup />
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
