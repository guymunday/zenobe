import React, { useState } from "react"
import styled from "styled-components"
import BackgroundVideo from "../BackgroundVideo"
import Button from "../Button"
import Wrapper from "../Wrapper"

const HeroSection = styled.section`
  width: 100%;
  color: white;
  position: relative;
  object-fit: cover;
  overflow: hidden;
  .hero-section-inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 140px 0;
    justify-content: center;
    position: relative;
    @media only screen and (max-width: 1024px) {
      padding: 110px 0;
    }
    @media only screen and (max-width: 768px) {
      padding: 90px 0;
    }
    @media only screen and (max-width: 600px) {
      padding: 80px 0;
    }
    h1 {
      max-width: 530px;
      font-size: 2.5rem;
      @media only screen and (max-width: 600px) {
        font-size: 2rem;
      }
    }
    nav {
      display: flex;
      flex-direction: column;
      margin-top: 50px;
      a:nth-child(2) {
        margin: 15px 0;
      }
    }
  }
`

const HomepageHero = ({ data }) => {
  const [videoOne, setVideoOne] = useState(false)

  const homepageHeroData = data.allWpAcfPage.nodes[0].homepage.homepageHero
  const heading = homepageHeroData.homepageHeroCopy

  return (
    <>
      <HeroSection>
        <BackgroundVideo
          videoSource={homepageHeroData.commercialIndustrialVideo}
        />
        {/* <div>{homepageHeroData.commercialIndustrialVideo}</div>
        <div>{homepageHeroData.networkInfrastructureVideo}</div>
        <div>{homepageHeroData.electricVehiclesVideo}</div> */}
        <div className="hero-section-inner">
          <Wrapper>
            <div dangerouslySetInnerHTML={{ __html: heading }} />
            <nav>
              <Button
                onMouseEnter={() => setVideoOne(!videoOne)}
                link="/electric-vehicles"
                text="Electric Vehicles"
              />
              <Button
                link="/commercial-and-industrial"
                text="Commercial & Industrial"
              />
              <Button
                link="/network-infrastructure"
                text="Network Infrastructure"
              />
            </nav>
          </Wrapper>
        </div>
      </HeroSection>
    </>
  )
}

export default HomepageHero
