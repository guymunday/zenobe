import React from "react"
import HeaderMain from "./HeaderMain"
import Footer from "./Footer"

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
