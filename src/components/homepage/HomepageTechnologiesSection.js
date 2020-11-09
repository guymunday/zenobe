import React from "react"

const HomepageTechnologiesSection = ({ data }) => {
  const techSection = data.allWpAcfPage.nodes[0].homepage.technologiesSection
  return (
    <>
      <div>{techSection.sectionTitle}</div>
      <div>{techSection.paragraph}</div>
    </>
  )
}

export default HomepageTechnologiesSection
