import React from "react"
import Menu from "./Menu"
import Logo from "./Logo"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const HeaderContainer = styled(motion.header)`
  display: flex;
  width: 100%;
  padding: 40px 20px 80px 20px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
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

const Header = () => {
  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{
        y: 0,
        transition: {
          duration: 0.3,
          ease: [0.6, 0.05, -0.01, 0.9],
        },
      }}
    >
      <Link to="/">
        <Logo />
      </Link>
      <Menu />
    </HeaderContainer>
  )
}

export default Header
