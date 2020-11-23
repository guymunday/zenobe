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
  border: 1px #fff solid;
  outline: none;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s ease;
  :hover {
    background: #fff;
    color: var(--glow);
  }
  ::before {
    content: "+";
    display: inline-block;
    margin-right: 10px;
    color: var(--glow);
    transform: scale(1.3);
    line-height: 0.3;
  }
`

const Button = ({ link, text, varAni }) => {
  return (
    <motion.div variants={varAni}>
      <Link to={link}>
        <ButtonStyles whileTap={{ scale: 0.9 }}>{text}</ButtonStyles>
      </Link>
    </motion.div>
  )
}

export default Button
