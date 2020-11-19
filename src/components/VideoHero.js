import React from "react"
import styled from "styled-components"
import BackgroundVideo from "./BackgroundVideo"
import Wrapper from "./Wrapper"

const VideoHeroSection = styled.section`
  width: 100%;
  color: white;
  position: relative;
  object-fit: cover;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  .hero-inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 160px 0;
    justify-content: center;
    position: relative;
    h1 {
      max-width: 530px;
      font-size: 2.5rem;
    }
    p {
      max-width: 575px;
      margin: 30px 0;
    }
  }
`

const VideoHero = ({ data, title }) => {
  console.log(data)
  return (
    <VideoHeroSection>
      <BackgroundVideo videoSource={data.heroSection.backgroundVideo} />
      <Wrapper>
        <div className="hero-inner">
          <h1>{title}</h1>
          <p>{data.heroSection.introParagraph}</p>
        </div>
      </Wrapper>
    </VideoHeroSection>
  )
}

export default VideoHero
