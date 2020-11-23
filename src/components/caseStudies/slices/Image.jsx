import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Wrapper from "../../Wrapper"

const Image = ({ input }) => (
  <Wrapper>
    <Img fluid={input.localFile.childImageSharp.fluid} />
  </Wrapper>
)

export default Image
