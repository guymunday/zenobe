import React from "react"
import BackgroundVideo from "./BackgroundVideo"
import Wrapper from "./Wrapper"
import { VideoHeroSection } from "./VideoHero"

const VideoHeroCareers = ({ data, title }) => {
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

export default VideoHeroCareers
