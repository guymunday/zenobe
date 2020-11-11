import React from "react"
import styled from "styled-components"

const BackgroundVidStyles = styled.div`
  padding: 0;
  margin: 0;
  .vimeo-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
    overflow: hidden;
    padding: 0;
    margin: 0;
    object-fit: cover;
  }
  .vimeo-wrapper iframe {
    background: var(--black);
    display: block;
    width: 100vw;
    height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
    min-height: 100vh;
    min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }
`

const BackgroundVideo = ({ videoSource }) => {
  return (
    <BackgroundVidStyles>
      <div class="vimeo-wrapper">
        <iframe
          src={videoSource}
          frameborder="0"
          muted
          loop
          allow="autoplay"
        ></iframe>
      </div>
    </BackgroundVidStyles>
  )
}

export default BackgroundVideo
