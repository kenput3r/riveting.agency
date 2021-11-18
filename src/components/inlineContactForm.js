import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const InlineContactForm = () => {

  return (
    <Component>
      <div className="row">
        <StaticImage 
          src="../images/man-icon.png" 
          alt="business man" 
          placeholder="none"
          width={120} />
        <div className="col">
          <h3>Request a Free Consultation</h3>
          <p>We will analyze your online presence and give no-obligation advice.</p>
          <form className="row" name="InlineContact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="InlineContact" />
            <input type="text" name="ContactName" id="ContactName" placeholder="Name*" required={true} />
            <input type="text" name="BusinessName" id="BusinessName" placeholder="Business Name*" required={true} />
            <input type="email" name="ContactEmail" id="ContactEmail" placeholder="Email*" required={true} />
            <input type="submit" name="SubmitContact" id="SubmitContact" value="Send" />
          </form>
        </div>

      </div>
    </Component>
  )
}

export default InlineContactForm

const Component = styled.div`
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;
  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media (max-width: 500px) {
      flex-wrap: wrap;
    }
  }
  .col {
    display: flex;
    flex-direction: column;
    width: 85%;
    @media (max-width: 500px) {
      padding: 0 10px;
      width: 100%;
    }
  }
  [data-gatsby-image-wrapper] {
    margin: 10px 1.45rem 10px;
  }
  h3 {
    margin-bottom: 0.75rem;
  }
  form.row {
    justify-content: flex-start;
    margin-bottom: 0;
    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
  }
  input {
    border: 1px solid #c9c9c9;
    border-radius: 30em;
    height: auto;
    line-height: 1.1em;
    margin-bottom: 1.45rem;
    margin-right: 1.45rem;
    padding: 15px 25px;
    width: calc(28% - 1.45rem);
    @media (max-width: 768px) {
      margin-right: calc(1.45rem / 2);
      width: calc(50% - calc(1.45rem / 2));
    }
    @media (max-width: 500px) {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
    &[type="submit"] {
      background-color: var(--primary-blue);
      border: none;
      box-shadow: 0 0 25px -14px var(--primary-blue);
      color: #fff;
      margin-right: 0;
      transition: color .3s ease-out,border .3s ease-out,background .3s ease-out,box-shadow .3s ease-out!important;
      width: 12%;
      :hover {
        background-color: #000;
        box-shadow: 0 0 25px -14px #000;
      }
      @media (max-width: 768px) {
        width: calc(50% - calc(1.45rem / 2));
      }
      @media (max-width: 500px) {
        margin-left: 0;
        margin-right: 0;
        width: auto;
      }
    }
  }
`