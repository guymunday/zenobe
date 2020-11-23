import React from "react"
import { IframeContainer } from "../../../pages/about"
import Wrapper from "../../Wrapper"

const Embed = ({ input }) => {
  return (
    <Wrapper>
      <IframeContainer>
        <iframe src={input} />
      </IframeContainer>
    </Wrapper>
  )
}

export default Embed
