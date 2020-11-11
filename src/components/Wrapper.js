import React from "react"
import styled from "styled-components"

const Wrap = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  padding: 20px;
`
const Wrapper = ({ children }) => {
  return <Wrap>{children}</Wrap>
}

export default Wrapper
