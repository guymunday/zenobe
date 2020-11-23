import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { normalizePath } from "../utils/get-url-path"
import styled from "styled-components"
import Navigation from "./Navigation"
import { AnimatePresence } from "framer-motion"

const Nav = styled.nav`
  .hide-link {
    @media only screen and (max-width: 800px) {
      display: none;
    }
  }
`

const Hamburger = styled.button`
  width: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: none;
  border: none;
  outline: none;
  align-self: center;
  margin-left: 20px;
  cursor: pointer;
  transition: 0.3s ease;
  :hover {
    span {
      background: var(--glow);
    }
  }
  span {
    display: block;
    height: 2px;
    width: 100%;
    background: var(--white);
    transition: 0.3s ease;
  }
`

export default () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "menu" }) {
        name
        menuItems {
          nodes {
            label
            url
            parentId
            connectedNode {
              node {
                ... on WpContentNode {
                  uri
                }
              }
            }
          }
        }
      }
    }
  `)

  return !!wpMenu && !!wpMenu.menuItems && !!wpMenu.menuItems.nodes ? (
    <Nav>
      {wpMenu.menuItems.nodes.map((menuItem, i) => {
        if (menuItem.parentId) {
          return null
        }

        const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

        return (
          <Link
            className="hide-link"
            key={i + menuItem.url}
            // style={{ display: `block` }}
            to={normalizePath(path)}
          >
            {menuItem.label}
          </Link>
        )
      })}
      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span style={{ margin: "6px 0" }}></span>
        <span></span>
      </Hamburger>
      <AnimatePresence>
        {menuOpen ? (
          <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        ) : null}
      </AnimatePresence>
    </Nav>
  ) : null
}
