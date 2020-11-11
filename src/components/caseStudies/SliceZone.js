import React, { Component } from "react"
import styled from "styled-components"
import { BodyText, Embed, Image } from "./slices/index"

const Content = styled.div`
  padding: 0 20px;
`

export default class SliceZone extends Component {
  render() {
    const { allSlices } = this.props
    const slice = allSlices.map((s) => {
      switch (s.fieldGroupName) {
        // These are the API IDs of the slices
        case "Case_Study_CaseNews_Content_Copy":
          return <BodyText key={Math.random()} input={s.copy} />
        case "Case_Study_CaseNews_Content_Image":
          return <Image key={Math.random()} input={s.image} />
        case "Case_Study_CaseNews_Content_Video":
          return <Embed key={Math.random()} input={s.video} />
        default:
          return null
      }
    })
    return <Content>{slice}</Content>
  }
}

