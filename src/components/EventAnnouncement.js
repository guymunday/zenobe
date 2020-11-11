import React from "react"
import Img from "gatsby-image"

const EventAnnouncment = ({ data }) => {
  //   console.log(
  //     data.allWpAcfPage.nodes[0].homepage.eventLaunchSection.image.localFile
  //       .childImageSharp.fluid
  //   )
  return (
    <>
      <p>Hello</p>
      <Img
        fluid={
          data.allWpAcfPage.nodes[0].homepage.eventLaunchSection.image.localFile
            .childImageSharp.fluid
        }
      />
      <div>Event Announcement</div>
    </>
  )
}

export default EventAnnouncment
