import React from "react"
import Header from "./header"
import Footer from "./Footer"
import { createGlobalStyle } from "styled-components"
import reset from "../styles/reset"

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    --black: #000000;
    --white: #ffffff;
    --electric: #32DBFF;
    --glow: #F86906;
    transition: 0.2s ease all;
  }
  body {
    font-family: Work sans, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;

  }
  h1, h2, h3 {
    font-family: Syne, sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  h1 {
    font-size: 3rem;
    line-height: 1.1;
  }
  .glow {
    color: var(--glow);
  }
`

// import "../assets/style.css"

const Layout = ({ children }) => (
  <div style={{ position: "relative" }}>
    <GlobalStyle />
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
