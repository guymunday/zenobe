import React from "react"
import Header from "./Header"
import HeaderMain from "./HeaderMain"
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
    scroll-behavior: smooth;
    
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
    line-height: 1.15;
    strong {
    font-family: Syne, sans-serif;
    font-weight: 400;
    font-style: normal;
    line-height: 1.15;
    color: var(--glow);
    }
  }
  .glow {
    color: var(--glow);
  }
  a {
    transition: 0.3s ease;
    text-decoration: none;
    color: #000;
  }
`

const Layout = ({ children }) => (
  <div style={{ position: "relative" }}>
    <GlobalStyle />
    {(typeof window !== "undefined" &&
      window.location.pathname === "/about/") ||
    (typeof window !== "undefined" &&
      window.location.pathname === "/network-infrastructure/") ||
    (typeof window !== "undefined" &&
      window.location.pathname === "/commercial-and-industrial/") ||
    (typeof window !== "undefined" &&
      window.location.pathname === "/electric-vehicles/") ||
    (typeof window !== "undefined" && window.location.pathname === "/") ? (
      <Header />
    ) : (
      <HeaderMain />
    )}
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
