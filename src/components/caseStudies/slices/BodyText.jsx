import React from "react"
import styled from "styled-components"

export const BodyContent = styled.div`
  max-width: 780px;
  margin: 60px auto;
`

const BodyText = ({ input }) => (
  <BodyContent dangerouslySetInnerHTML={{ __html: input }} />
)

export default BodyText
