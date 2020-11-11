import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { normalizePath } from "../utils/get-url-path"
import styled from "styled-components"

const Hamburger = styled.button`
  width: 25px;
  height: 15px;
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
    height: 1px;
    width: 100%;
    background: var(--white);
    transition: 0.3s ease;
  }
`

export default () => {
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
    <nav>
      {wpMenu.menuItems.nodes.map((menuItem, i) => {
        if (menuItem.parentId) {
          return null
        }

        const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

        return (
          <Link
            key={i + menuItem.url}
            style={{ display: `block` }}
            to={normalizePath(path)}
          >
            {menuItem.label}
          </Link>
        )
      })}
      <Hamburger>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
    </nav>
  ) : null
}
