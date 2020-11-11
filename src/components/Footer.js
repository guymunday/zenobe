import React from "react"
import styled from "styled-components"

const FooterStyles = styled.footer`
  background: var(--black);
  color: var(--white);
  .footer-outer {
    padding: 50px;
    .footer-inner {
      display: flex;
      justify-content: space-between;
    }
  }
`

const Footer = () => {
  return (
    <FooterStyles>
      <div className="footer-outer">
        <div className="footer-inner">
          <h3>+ Rethinking energy -</h3>
          <div>Quick links</div>
          <div>Contact</div>
          <div>Social</div>
        </div>
      </div>
    </FooterStyles>
  )
}

export default Footer
