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
    color: var(--glow);
    margin-right: 10px;
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
