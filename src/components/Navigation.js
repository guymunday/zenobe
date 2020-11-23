import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link, useStaticQuery, graphql } from "gatsby"

const MenuBackground = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  nav-right: 0;
  right: 0;
  border-left: 10px solid var(--glow);
  background: var(--black);
`

const MenuWrapper = styled(motion.div)`
  position: fixed;
  width: 50%;
  height: 100%;
  top: 0;
  nav-right: 0;
  right: 0;
  background: var(--electric);
  padding: 30px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  @media screen and (max-width: 768px) {
    width: calc(100% - 10px);
  }
  .button {
    border: 1px solid #000;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 50%;
    line-height: 1.8;
    transition: 0.3s ease;
    align-self: flex-end;
    :hover {
      background: #000;
      color: var(--glow);
    }
  }
  ul {
    list-style: none;
    li {
      font-family: Syne, sans-serif;
      font-size: 2rem;
    }
  }
`

const Navigation = ({ menuOpen, setMenuOpen }) => {
  const menuItems = useStaticQuery(graphql`
    {
      allWpAcfPage(filter: { id: { eq: "cG9zdDo4MTM=" } }) {
        nodes {
          menu {
            menuItems {
              menuLink
              menuName
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <MenuBackground
        onClick={() => setMenuOpen(false)}
        initial={{ x: "100%" }}
        animate={{
          x: 0,
          transition: {
            ease: [0.6, 0.05, -0.01, 0.9],
          },
        }}
        exit={{
          x: "100%",
          transition: {
            delay: 0.1,
            ease: [0.6, 0.05, -0.01, 0.9],
          },
        }}
      />
      <MenuWrapper
        initial={{ x: "100%" }}
        animate={{
          x: 0,
          transition: {
            delay: 0.1,
            ease: [0.6, 0.05, -0.01, 0.9],
          },
        }}
        exit={{
          x: "100%",
          transition: {
            ease: [0.6, 0.05, -0.01, 0.9],
          },
        }}
      >
        <div
          className="button"
          role="button"
          onClick={() => setMenuOpen(false)}
        >
          &times;
        </div>
        <ul>
          {menuItems.allWpAcfPage.nodes[0].menu.menuItems.map((item) => {
            return (
              <Link to={item.menuLink}>
                <li>{item.menuName}</li>
              </Link>
            )
          })}
        </ul>
      </MenuWrapper>
    </>
  )
}

export default Navigation
