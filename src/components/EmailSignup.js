import React from "react"
import styled from "styled-components"

const EmailBanner = styled.section`
  background: var(--electric);
  .email-inner {
    padding: 100px 20px;
    text-align: center;
    @media only screen and (max-width: 600px) {
      text-align: left;
      padding: 60px 20px;
    }
    h3 {
      font-size: 3rem;
      max-width: 675px;
      margin: 0 auto;
      @media only screen and (max-width: 600px) {
        font-size: 2rem;
      }
    }
    p {
      max-width: 540px;
      margin: 30px auto;
    }
    form {
      .email {
        padding: 10px 15px;
        border-radius: 23px;
        border: none;
        outline: none;
        color: #000;
        margin-right: 15px;
        @media only screen and (max-width: 600px) {
          display: block;
          margin-bottom: 15px;
        }
      }
      .email::placeholder {
        color: #000;
        font-family: Work sans, sans-serif;
      }
      .submit {
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
          margin-right: 10px;
          transform: scale(1.2);
        }
      }
    }
  }
`

function handleForm(event) {
  event.preventDefault()
}

const EmailSignup = () => {
  return (
    <EmailBanner>
      <div className="email-inner">
        <h3>Sign up to receive email news, promotions and information</h3>
        <p>
          You will be able to opt-out of these emails at any time. By signing
          up, you understand that the information you provide is subject to
          Google's privacy policy and terms. Opens in new window.
        </p>
        <form>
          <input type="email" className="email" size="35" placeholder="Email" />
          <input
            type="submit"
            value="Sign up"
            className="submit"
            onClick={handleForm}
          />
        </form>
      </div>
    </EmailBanner>
  )
}

export default EmailSignup
