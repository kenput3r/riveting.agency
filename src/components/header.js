import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaGithub, FaBars } from "react-icons/fa"

const Header = ({ siteTitle }) => (
  <Component>
    <nav className="top-nav">
      <ul>
        <li>
          <a href="tel:+17148311389">
            <FaPhoneAlt /> <span>+1 714-831-1389</span>
          </a>
        </li>
        <li>
          <a href="mailto:info@riveting.agency">
            <FaEnvelope /> <span>info@riveting.agency</span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/Riveting.Agency/" aria-label="Facebook"><FaFacebookF alt="Facebook" /></a>
          <a href="https://instagram.com/riveting.agency" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://github.com/kenput3r" aria-label="Github"><FaGithub /></a>
        </li>
      </ul>
    </nav>
    <div className="container">
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          <StaticImage 
            src="../images/riveting-logo-b.png" 
            alt={siteTitle}
            layout="constrained"
            placeholder="tracedSVG"
            width={200}
            transformOptions={{fit: "contain"}} />
        </Link>
      </h1>
      {/* <nav>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/#contact">Contact</Link>
        </span>
      </nav> 
      <div className="burger-container">
        <button><FaBars /></button>
      </div>
      */}
    </div>
    
  </Component>
)

export default Header

const Component = styled.header`
  nav {
    @media (max-width: 500px) {
      display: none;
    }
  }
  nav.top-nav {
    background-color: var(--primary-blue);
    font-size: 14px;
    width: 100%;
    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      max-width: 960px;
      margin: 0 auto;
    }
    li {
      flex: 1;
      list-style-type: none;
      margin-top: calc(1.45rem / 4);
      margin-bottom: calc(1.45rem / 4);
      text-align: right;
    }
    a {
      color: #fff;
      display: inline-flex;
      align-items: center;
      padding: 5px;
    }
    span {
      margin-left: 5px;
    }
  }
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 960px;
    padding: calc(1.45rem - 8.5px) calc(1.0875rem - 8.5px);
  }
  h1 {
    margin: 0;
  }
  span {
    margin-left: 10px;
    position: relative;
  }
  nav a {
    color: #2d3035;
    text-decoration: none;
    &[aria-current="page"] {
      color: var(--primary-blue);
      ::after {
        content: " ";
        text-align: center;
        width: 20px;
        height: 3px;
        background: var(--primary-blue);
        display: block;
        position: absolute;
        top: calc(50% + 14px);
        left: calc(50% - 10px);
      }
    }
  }
  .burger-container {
    @media (min-width: 501px) {
      display: none;
    }
    button {
      background: none;
      border: 0;
      color: var(--h2-color);
    }
  }
`
