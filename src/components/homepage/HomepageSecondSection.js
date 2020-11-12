import React from "react"
import styled from "styled-components"
import ButtonInvert from "../ButtonInvert"
import Wrapper from "../Wrapper"

const SecondSection = styled.section`
  width: 100%;
  padding: 100px 0;
  @media only screen and (max-width: 600px) {
    padding: 50px 0;
  }
  h2 {
    font-size: 3.2rem;
    max-width: 775px;
    @media only screen and (max-width: 768px) {
      font-size: 2.7rem;
    }
    @media only screen and (max-width: 600px) {
      font-size: 2rem;
    }
  }
  .inner-flex {
    display: flex;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
    p {
      padding: 50px 0;
      @media only screen and (max-width: 600px) {
        padding: 0;
      }
      :first-child {
        margin-right: 1rem;
        @media only screen and (max-width: 600px) {
          margin: 30px 0;
        }
      }
      :nth-child(2) {
        margin-left: 1rem;
        @media only screen and (max-width: 600px) {
          margin: 0 0 30px 0;
        }
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
