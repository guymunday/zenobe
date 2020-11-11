import React, { useState, useEffect } from "react"
import ReactPlayer from "react-player"
import styled from "styled-components"
import Button from "../Button"
import Wrapper from "../Wrapper"

const HeroSection = styled.section`
  width: 100%;
  padding-top: 56.25%;
  background: var(--black);
  color: white;
  position: relative;
  object-fit: cover;
  overflow: hidden;
  .hero-section-inner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 100px 0;
    justify-content: center;
    h1 {
      max-width: 530px;
      font-size: 2.5rem;
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
    <HeroSection>
      {videoOne ? (
        <ReactPlayer
          url={homepageHeroData.commercialIndustrialVideo}
          playing
          loop
          muted
          width="120%"
          height="120%"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
          }}
        />
      ) : (
        <ReactPlayer
          url={homepageHeroData.electricVehiclesVideo}
          playing
          loop
          muted
          width="120%"
          height="120%"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
          }}
        />
      )}
      <div>{homepageHeroData.commercialIndustrialVideo}</div>
      <div>{homepageHeroData.networkInfrastructureVideo}</div>
      <div>{homepageHeroData.electricVehiclesVideo}</div>

      <div className="hero-section-inner">
        <Wrapper>
          <div dangerouslySetInnerHTML={{ __html: heading }} />
          <nav>
            <Button
              onMouseEnter={() => setVideoOne(!videoOne)}
              link="/electric-vehicles"
              text="Electric Vehicles"
            />
            {console.log(videoOne)}
            <Button link="/electric-vehicles" text="Commercial & Industrial" />
            <Button link="/electric-vehicles" text="Network Infrastructure" />
          </nav>
        </Wrapper>
      </div>
    </HeroSection>
  )
}

export default HomepageHero
