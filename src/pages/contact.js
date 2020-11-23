import React from "react"
import LayoutAlt from "../components/LayoutAlt"
import { BlackHeader } from "../templates/newsList"
import styled from "styled-components"

const ContactForm = styled.div`
  background: var(--black);
  max-width: 1110px;
  margin: auto;
  padding: 20px;
  form {
    display: flex;
    flex-direction: column;
    input {
      background: none;
      color: var(--white);
      outline: none;
      border: none;
      border-bottom: 1px solid var(--white);
      position: relative;
      font-family: Work sans, sans-serif;
      padding: 5px 0;
      margin: 1rem 0;
      ::placeholder {
        color: gray;
        font-family: Work sans, sans-serif;
      }
    }
    .submit {
      display: inline-block;
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
        line-height: 0.5;
      }
    }
  }
`

const Contact = () => {
  return (
    <LayoutAlt>
      <BlackHeader>
        <h1>Contact</h1>
      </BlackHeader>
      <ContactForm>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text-area" placeholder="Message" />
          <input type="submit" className="submit" />
        </form>
      </ContactForm>
    </LayoutAlt>
  )
}

export default Contact
