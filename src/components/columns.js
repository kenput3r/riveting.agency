import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { BsArrowDown } from "react-icons/bs"
import bgShape from "../images/shape-bg.svg"
import R from "../images/R-b2@160.png"

const Columns = () => {
  const ipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  return (
    <Component bgShape={bgShape}>
      <div className="row">
        <div className="fixed-col col">
          <div className="bg-wrapper">
            <div><img src={R} alt="R" width="80px" height="82px" /></div>
            <h2>Who we serve</h2>
            <p><Link to="/contact"><span>Contact us</span></Link></p>
          </div>
        </div>
        <div className="scrolling-col col">
          <div className="item">
            <p className="h2">01.</p>
            <h3>Public Figures</h3>
            <p>Public servants and special interest groups, such as city officials, county officials, and non-profit organizations.</p>
            <div>
              <StaticImage 
                src="../images/public-figures-2.png" 
                alt="public figure"
                layout="constrained"
                placeholder="tracedSVG"
                width={300}
                quality={100}
                transformOptions={{fit: "contain"}} />
            </div>
          </div>
          <div className="separator"></div>
          <div className="item">
            <p className="h2">02.</p>
            <h3>Brands</h3>
            <p>Companies that target large audiences and sell under their own brand name either D2C, B2B, or both.</p>
            <div>
              <StaticImage 
                src="../images/brands.png" 
                alt="brands"
                layout="constrained"
                placeholder="tracedSVG"
                width={300}
                quality={100}
                transformOptions={{fit: "contain"}} />
            </div>
          </div>
          <div className="separator"></div>
          <div className="item">
            <p className="h2">03.</p>
            <h3>Local Businesses</h3>
            <p>Businesses with local target audiences, such as retail stores, barbershops, breweries, restaurants, and coffee shops.</p>
            <div>
              <StaticImage 
                src="../images/local-businesses.png" 
                alt="brands"
                layout="constrained"
                placeholder="tracedSVG"
                width={300}
                quality={100}
                transformOptions={{fit: "contain"}} />
            </div>
          </div>
          <div className="separator"></div>
          <div className="item">
            <p className="h2">04.</p>
            <h3>Professionals</h3>
            <p>Professional services providers, such as CPAs, construction companies, and plumbers.</p>
            <div>
              <StaticImage 
                src="../images/professionals.png" 
                alt="brands"
                layout="constrained"
                placeholder="tracedSVG"
                width={300}
                quality={100}
                transformOptions={{fit: "contain"}} />
            </div>
          </div>
          <div className="separator"></div>
          <div className="item">
            <h3 className="h2">Need more?</h3>
            <p className="h3">Learn about our services</p>
            <p className="down-arrow"><BsArrowDown /></p>
          </div>
        </div>
      </div>

    </Component>
  )
}

export default Columns

const Component = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  .row {
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
  }
  .col {
    display: flex;
    flex-direction: column;
    flex: 3;
  }
  .fixed-col {
    border-right: 1px solid #ededed;
    flex: 2;
    align-items: center;
    padding: 4rem 1rem;
    @media (min-width: 769px) {
      justify-content: center;
      height: 100vh;
      position: sticky;
      top: 0;
    }
    @media (max-width: 768px) {
      border-right: 0;
      flex: none;
      padding: 20px 1rem 0 1rem;
      width: 100%;
    }
  }
  .bg-wrapper {
    background-image: url(${props => props.bgShape});
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: scroll;
    background-size: contain;
    padding: 40px 40px;
    text-align: center;
    @media (max-width: 768px) {
      position: relative;
      top: 0;
    }
    img {
      margin-bottom: 0.5rem;
    }
    h2 {
      font-size: 2.7rem;
    }
    a {
      background-color: rgba(0,0,0,0);
      color: #000;
      font-size: 14px;
      line-height: 16px;
      padding: 16px 32px;
      border-radius: 100px;
      border: 1px solid #000;
      margin-bottom: 1.45rem;
      text-decoration: none;
      transition: color .3s ease-out, background-color .3s ease-out;
      :hover {
        background-color: rgba(0,0,0,1);
        color: #fff;
      }
    }
  }
  .scrolling-col {
    padding: 0 2rem;
    @media (max-width: 500px) {
      padding: 0 1rem;
    }
  }
  .item {
    padding: 4rem 2rem;
    @media (max-width: 500px) {
      padding: 2rem 0;
    }
  }
  .separator {
    border-bottom: 1px solid #d8d8d8;
    margin: 0 2rem;
    width: calc(100% - 4rem);
    @media (max-width: 500px) {
      margin: 0;
      width: 100%;
    }
  }
  h3 {
    font-weight: bold;
    font-size: 2.5rem;
    line-height: 2.5rem;
  }
  .h2 {
    color: #767676;
    font-family: var(--r-rufina-stack);
    font-size: 70px;
  }
  p.down-arrow {
    color: var(--primary-blue);
    font-size: 70px;
    svg {
      transform: translate(-25px)
    }
  }
`

