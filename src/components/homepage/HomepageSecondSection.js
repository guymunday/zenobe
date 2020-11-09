import React from "react"

const HomepageSecondSection = ({ data }) => {
  console.log(data.allWpAcfPage.nodes[0].homepage)
  const homepageHeroData =
    data.allWpAcfPage.nodes[0].homepage.whiteBackgroundCopy

  return (
    <>
      <div>{homepageHeroData.sectionTitle}</div>
      <div>{homepageHeroData.paragraph1}</div>
      <div>{homepageHeroData.paragraph2}</div>
    </>
  )
}

export default HomepageSecondSection
