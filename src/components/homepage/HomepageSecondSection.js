import React from "react"
import styled from "styled-components"
import BackgroundVideo from "../BackgroundVideo"
import ButtonInvert from "../ButtonInvert"
import Wrapper from "../Wrapper"

const SecondSection = styled.section`
  width: 100%;
  padding: 100px 0;
  h2 {
    font-size: 3.2rem;
    max-width: 775px;
  }
  .inner-flex {
    display: flex;
    p {
      padding: 50px 0;
      :first-child {
        margin-right: 1rem;
      }
      :nth-child(2) {
        margin-left: 1rem;
      }
    }
  }
`

const HomepageSecondSection = ({ data }) => {
  console.log(data.allWpAcfPage.nodes[0].homepage)
  const homepageHeroData =
    data.allWpAcfPage.nodes[0].homepage.whiteBackgroundCopy

  const heading = homepageHeroData.sectionTitle

  return (
    <SecondSection>
      <Wrapper>
        <div dangerouslySetInnerHTML={{ __html: heading }} />
        <div className="inner-flex">
          <p>{homepageHeroData.paragraph1}</p>
          <p>{homepageHeroData.paragraph2}</p>
        </div>

        <ButtonInvert text="Find out more" link="" />
      </Wrapper>
    </SecondSection>
  )
}

export default HomepageSecondSection
