import React from "react"
import { graphql } from "gatsby"
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
      <HomepageHero data={data} />
      <HomepageSecondSection data={data} />
      <HomepageCasestudySection />
      <HomepageTechnologiesSection data={data} />
      <HomepageAboutSection />
      <EventAnnouncment data={data} />
      <NewsThumbnails />
      <EmailSignup />
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
          technologiesSection {
            paragraph
            sectionTitle
            video
          }
          ourStorySection {
            paragraph
            sectionTitle
            video
          }
          eventLaunchSection {
            image {
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
            link
            paragraph
            sectionTitle
          }
        }
      }
    }
  }
`
