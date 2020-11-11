import React from "react"
import styled from "styled-components"
import ReactPlayer from "react-player"

const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding-top: 56.25%;
  background: var(--black);
  color: white;
  position: relative;
  object-fit: cover;
  overflow: hidden;
`

const Embed = ({ input }) => {
  return (
    <Content>
      <ReactPlayer
        url={input}
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          objectFit: "cover",
        }}
      />
    </Content>
  )
}

export default Embed
