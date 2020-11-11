import React from "react"
import styled from "styled-components"
import Wrapper from "../Wrapper"
import BackgroundVideo from "../../components/BackgroundVideo"
import Button from "../Button"

const TechSection = styled.section`
  background: var(--electric);
  width: 100%;
  position: relative;
  display: flex;
  padding: 100px 50px 100px 0;
  .video-container {
    position: relative;
    width: 50%;
    height: 500px;
    z-index: 2;
  }
  .copy-container {
    width: 50%;
    padding: 50px;
    max-width: 500px;
    h2 {
      color: var(--white);
      font-size: 1.5rem;
    }
    h3 {
      font-size: 3rem;
    }
    p {
    }
  }
`

const HomepageTechnologiesSection = ({ data }) => {
  const techSection = data.allWpAcfPage.nodes[0].homepage.technologiesSection
  console.log(techSection)
  return (
    <TechSection>
      <div className="video-container">
        <BackgroundVideo videoSource="https://player.vimeo.com/video/153950600?background=1" />
      </div>
      <div className="copy-container">
        <h2>Technologies</h2>
        <h3>{techSection.sectionTitle}</h3>
        <p>{techSection.paragraph}</p>
        <Button link="" text="Find out more" />
      </div>
    </TechSection>
  )
}

export default HomepageTechnologiesSection
