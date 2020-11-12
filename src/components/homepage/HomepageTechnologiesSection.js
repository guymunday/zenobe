import React from "react"
import styled from "styled-components"
import BackgroundVideo from "../../components/BackgroundVideo"
import Button from "../Button"

const TechSection = styled.section`
  background: var(--electric);
  width: 100%;
  position: relative;
  display: flex;
  padding: 100px 50px 100px 0;
  @media only screen and (max-width: 768px) {
    padding: 20px 0 30px 0;
    flex-direction: column;
  }
  .video-container {
    position: relative;
    width: 50%;
    min-height: 500px;
    z-index: 2;
    @media only screen and (max-width: 768px) {
      order: 2;
      width: 100%;
      margin-left: 30px;
    }
  }
  .copy-container {
    width: 50%;
    padding: 50px;
    max-width: 675px;
    @media only screen and (max-width: 768px) {
      order: 1;
      width: 100%;
      padding: 30px;
    }
    h2 {
      color: var(--white);
      font-size: 1.5rem;
      margin-bottom: 10px;
      @media only screen and (max-width: 768px) {
        display: none;
      }
    }
    h3 {
      font-size: 3rem;
      @media only screen and (max-width: 768px) {
        font-size: 2rem;
      }
    }
    p {
      margin: 30px 0;
    }
  }
`

const HomepageTechnologiesSection = ({ data }) => {
  const techSection = data.allWpAcfPage.nodes[0].homepage.technologiesSection
  console.log(techSection)
  return (
    <TechSection>
      <div className="video-container">
        <BackgroundVideo videoSource={techSection.video} />
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
