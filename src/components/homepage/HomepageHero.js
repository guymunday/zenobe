import React from "react"
import ReactPlayer from "react-player"

const HomepageHero = ({ data }) => {
  console.log(data.allWpAcfPage.nodes[0].homepage.homepageHero)
  const homepageHeroData = data.allWpAcfPage.nodes[0].homepage.homepageHero

  return (
    <>
      <div>{homepageHeroData.homepageHeroCopy}</div>
      <ReactPlayer
        url={homepageHeroData.commercialIndustrialVideo}
        loop
        muted
        width="100"
        height="100"
      />
      <ReactPlayer url={homepageHeroData.networkInfrastructureVideo} />
      <div>{homepageHeroData.commercialIndustrialVideo}</div>
      <div>{homepageHeroData.networkInfrastructureVideo}</div>
      <div>{homepageHeroData.electricVehiclesVideo}</div>
    </>
  )
}

export default HomepageHero
