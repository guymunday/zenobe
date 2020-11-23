import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

const FooterStyles = styled.footer`
  background: var(--black);
  color: var(--white);
  .footer-outer {
    padding: 50px;
    .footer-inner {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .rethink {
        display: block;
        width: 40%;
        @media only screen and (max-width: 768px) {
          width: 100%;
          margin-bottom: 30px;
        }
      }
      .footer-item {
        display: flex;
        flex-direction: column;
        width: calc(60% / 3);
        font-size: 0.8rem;
        @media only screen and (max-width: 768px) {
          width: 100%;
          margin-bottom: 30px;
        }
        a {
          color: var(--white);
          :hover {
            color: var(--glow);
          }
        }
      }
    }
    .small-print {
      font-size: 0.8rem;
      margin-top: 50px;
    }
  }
`

const Footer = () => {
  const footerData = useStaticQuery(graphql`
    {
      allWpAcfPage(filter: { id: { eq: "cG9zdDo2NTM=" } }) {
        nodes {
          footer {
            smallPrint
            contact
            quickLinks {
              link {
                linkText
                linkAddress
              }
            }
          }
        }
      }
    }
  `)
  const f = footerData.allWpAcfPage.nodes[0].footer
  console.log(f.quickLinks)
  return (
    <FooterStyles>
      <div className="footer-outer">
        <div className="footer-inner">
          <div className="rethink">
            <h3>+ Rethinking energy -</h3>
          </div>
          <nav className="footer-item">
            <h3 style={{ marginBottom: 16 }}>Quick links</h3>
            {f.quickLinks.map((l) => {
              return <Link to={l.link.linkAddress}>{l.link.linkText}</Link>
            })}
          </nav>
          <div className="footer-item">
            <h3 style={{ marginBottom: 16 }}>Contact</h3>
            <div dangerouslySetInnerHTML={{ __html: f.contact }} />
          </div>
          <div className="footer-item">
            <h3>Social</h3>
          </div>
        </div>
        <div
          className="small-print"
          dangerouslySetInnerHTML={{ __html: f.smallPrint }}
        />
      </div>
    </FooterStyles>
  )
}

export default Footer
