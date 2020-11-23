import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import HomepageHero from "../components/homepage/HomepageHero"
import HomepageSecondSection from "../components/homepage/HomepageSecondSection"
import HomepageCasestudySection from "../components/homepage/HomepageCasestudySection"
import HomepageTechnologiesSection from "../components/homepage/HomepageTechnologiesSection"
import HomepageAboutSection from "../components/homepage/HomepageAboutSection"
import EventAnnouncment from "../components/EventAnnouncement"
import NewsThumbnails from "../components/NewsTumbnails"
import EmailSignup from "../components/EmailSignup"

const Homepage = ({ data }) => {
  return (
    <>
      <Layout>
        <HomepageHero data={data} />
        <HomepageSecondSection data={data} />
        <HomepageCasestudySection />
        <HomepageTechnologiesSection />
        <HomepageAboutSection data={data.about} />
        <EventAnnouncment />
        <NewsThumbnails />
        <EmailSignup />
      </Layout>
    </>
  )
}
export default Homepage

export const query = graphql`
  query Homepage {
    allWpAcfPage(filter: { id: { eq: "cG9zdDo0NQ==" } }) {
      nodes {
        id
        homepage {
          homepageHero {
            commercialIndustrialVideo
            electricVehiclesVideo
            homepageHeroCopy
            networkInfrastructureVideo
          }
          whiteBackgroundCopy {
            paragraph1
            paragraph2
            sectionTitle
          }
        }
      }
    }
    about: allWpAcfPage(filter: { id: { eq: "cG9zdDoxNDI=" } }) {
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
