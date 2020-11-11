import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ButtonStyles = styled.button`
  padding: 10px 40px;
  font-family: Syne, sans-serif;
  border-radius: 23px;
  text-align: center;
  background: transparent;
  border: 1px #000 solid;
  outline: none;
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s ease;
  :hover {
    background: #000;
    color: var(--glow);
  }
  .glow {
    margin-right: 10px;
    transform: scale(1.2);
  }
`

const ButtonInvert = ({ link, text }) => {
  return (
    <Link to={link}>
      <ButtonStyles>
        <span className="glow">+</span> {text}
      </ButtonStyles>
    </Link>
  )
}

export default ButtonInvert
