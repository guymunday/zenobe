import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"

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
  ::before {
    content: "+";
    display: inline-block;
    margin-right: 10px;
    color: var(--glow);
    transform: scale(1.3);
    line-height: 0.5;
  }
`

const ButtonInvert = ({ link, text, varAni }) => {
  return (
    <Link to={link}>
      <ButtonStyles>{text}</ButtonStyles>
    </Link>
  )
}

export default ButtonInvert
