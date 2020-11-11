import React, { Component } from "react"
import styled from "styled-components"
import { BodyText, Embed, Image } from "./slices/index"

const Content = styled.div`
  padding: 0 20px;
`

export default class SliceZoneNews extends Component {
  render() {
    const { allSlices } = this.props
    const slice = allSlices.map((s) => {
      console.log(s.fieldGroupName)
      switch (s.fieldGroupName) {
        // These are the API IDs of the slices
        case "post_CaseNews_Content_Copy":
          return <BodyText key={Math.random()} input={s.copy} />
        case "post_CaseNews_Content_Image":
          return <Image key={Math.random()} input={s.image} />
        case "post_CaseNews_Content_Video":
          return <Embed key={Math.random()} input={s.video} />
        default:
          return null
      }
    })
    return <Content>{slice}</Content>
  }
}
