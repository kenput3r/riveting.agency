import React from "react"
import styled from "styled-components"
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa"

const Footer = () => (
  <Component>
    <div style={{marginLeft: 14}}>© {new Date().getFullYear()} Riveting, Inc.</div>
    <div>
      <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
      <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
      <a href="https://github.com" aria-label="Github"><FaGithub /></a>
    </div>
  </Component>
)

export default Footer

const Component = styled.footer`
  font-size: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem auto;
  max-width: 100%;
  width: 1280px;

  a {
    color: var(--primary-blue);
    font-size: 16px;
    margin-right: 14px;
  }
`