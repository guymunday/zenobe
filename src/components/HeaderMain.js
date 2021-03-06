import React from "react"
import Menu from "./Menu"
import Logo from "./Logo"
import styled from "styled-components"
import { Link } from "gatsby"

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  padding: 40px 20px;
  position: relative;
  background: var(--black);
  top: 0;
  left: 0;
  z-index: 9;
  a {
    div.logo {
      svg {
        height: 25px;
        fill: var(--white);
        transition: 0.3s ease;
        :hover {
          fill: var(--glow);
        }
      }
    }
  }
  nav {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    a {
      color: var(--white);
      text-decoration: none;
      text-align: center;
      margin: 0 20px;
      font-size: 13px;
      :hover {
        color: var(--glow);
      }
    }
  }
`

const HeaderMain = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <Menu />
    </HeaderContainer>
  )
}

export default HeaderMain
