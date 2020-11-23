import React from "react"
// import Header from "./Header"
import HeaderMain from "./HeaderMain"
import Footer from "./Footer"
// import { createGlobalStyle } from "styled-components"
// import reset from "../styles/reset"
import { GlobalStyle } from "./Layout"

const LayoutAlt = ({ children }) => (
  <div style={{ position: "relative" }}>
    <GlobalStyle />
    <HeaderMain />
    <main>{children}</main>
    <Footer />
  </div>
)

export default LayoutAlt
