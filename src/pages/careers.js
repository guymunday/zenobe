import React from "react"
import Careers from "../components/CareersSection"
import EmailSignup from "../components/EmailSignup"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import VideoHeroCareers from "../components/VideoHeroCareers"
import Wrapper from "../components/Wrapper"

const CareersPage = ({ data }) => {
  console.log(data.allWpAcfPage.nodes[0].hero_section.heroSection)
  return (
    <Layout>
      <VideoHeroCareers
        data={data.allWpAcfPage.nodes[0].hero_section}
        title={data.allWpAcfPage.nodes[0].title}
      />
      <Wrapper>
        <div
          style={{ maxWidth: 780, padding: "100px 0" }}
          className="content"
          dangerouslySetInnerHTML={{
            __html: data.allWpAcfPage.nodes[0].content,
          }}
        />
      </Wrapper>
      <Careers />
      <div style={{ height: 50 }} />
      <EmailSignup />
    </Layout>
  )
}

export default CareersPage

export const careersHero = graphql`
  query CareersData {
    allWpAcfPage(filter: { id: { eq: "cG9zdDo4NDA=" } }) {
      nodes {
        id
        title
        slug
        content
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
