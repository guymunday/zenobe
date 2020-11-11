import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Content = styled.div`
  margin: 60px auto;
  width: 100%;
  max-width: 1100px;
  position: relative;
  .gatsby-image-wrapper {
    max-width: 1100px;
  }
`

const Image = ({ input }) => (
  <Content>
    <Img fluid={input.localFile.childImageSharp.fluid} />
  </Content>
)

export default Image
