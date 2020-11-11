import React from "react"
import styled from "styled-components"
import Wrapper from "../Wrapper"
import ReactPlayer from "react-player"

const TechSection = styled.section`
  background: var(--electric);
  width: 100%;
  position: relative;
  height: 100vh;
`

const HomepageTechnologiesSection = ({ data }) => {
  const techSection = data.allWpAcfPage.nodes[0].homepage.technologiesSection
  console.log(techSection)
  return (
    <TechSection>
      <Wrapper>
        <ReactPlayer
          url={techSection.video}
          playing
          loop
          muted
          width="70%"
          height="70%"
          style={{
            position: "absolute",
            top: "50%",
            left: "-20%",
            transform: "translate(0, -50%)",
            objectFit: "cover",
          }}
        />
        <h2>Technologies</h2>
        <h3>{techSection.sectionTitle}</h3>
        <p>{techSection.paragraph}</p>
      </Wrapper>
    </TechSection>
  )
}

export default HomepageTechnologiesSection
