import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaPaperPlane } from "react-icons/fa"
import webDev from "../images/web-design@100px.png"
import responsiveDesign from "../images/responsive-design@100px.png"
import ecommerce from "../images/ecommerce@100px.png"
import socialMedia from "../images/social-media@100px.png"
import searchEngineOptimization from "../images/search-engine-optimization@100px.png"
import payPerClick from "../images/pay-per-click@100px.png"
import brandReputation from "../images/brand-reputation@100px.png"
import graphicDesign from "../images/graphic-design@100px.png"
import erp from "../images/erp@100px.png"

const ExperienceTable = () => {
  return(
    <Component>
      <div className="flex-container">
        <div className="row">
          <div className="block">
            <div className="row">
              <div className="col img-col">
                <img src={webDev} alt="web development" height="50px" width="57px" />
              </div>
              <div className="col">
                <h3>Web Development</h3>
                <p>Custom integrations, static websites, dynamic websites, campaign-specific landing pages, theme development, and full-fledged web apps.</p>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="row">
              <div className="col img-col">
                <img src={responsiveDesign} alt="responsive design" height="50px" width="68px" />
              </div>
              <div className="col">
                <h3>Responsive Design</h3>
                <p>We design for all viewers, not just the viewers with a large screen and high-speed internet. Mobile users are first-class citizens and should have a first-class experience.</p>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="row">
              <div className="col img-col">
                <img src={ecommerce} alt="ecommerce" height="50px" width="44px" />
              </div>
              <div className="col">
                <h3>Ecommerce</h3>
                <p>Capture maximum D2C sales by controlling the marketplaces that your customers shop on while providing a superior shopping experience on your own online store.</p>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="block">
            <div className="row">
              <div className="col img-col">
                <img src={socialMedia} alt="social media" height="50px" width="49px" />
              </div>
              <div className="col">
                <h3>Social Media</h3>
                <p>Reach your target audience with content that they are most likely to react to. Every piece of media has a purpose - to get viewers to engage, or to get viewers to convert.</p>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="row">
              <div className="col img-col">
                <img src={searchEngineOptimization} alt="search engine optimization" height="50px" width="76px" />
              </div>
              <div className="col">
                <h3>SEO</h3>
                <p>Search Engine Optimization has evolved far beyond throwing up a few blog posts. We optimize content hierarchy, metadata, accessibility, and use W3C best practices.</p>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="row">
              <div className="col img-col">
                <img src={payPerClick} alt="pay per click" height="50px" width="61px" />
              </div>
              <div className="col">
                <h3>PPC</h3>
                <p>Pay Per Click ads are part of a well-rounded Search Engine Marketing strategy. We use Google Ads to attract new customers as well as make your sites easy to find for existing customers.</p>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="block">
            <div className="row">
              <div className="col img-col">
                <img src={brandReputation} alt="brand reputation" height="50px" width="44px" />
              </div>
              <div className="col">
                <h3>Brand Reputation</h3>
                <p>Consistency in verbiage, logos, and information is crucial for establishing trust. We tailor your online presence to build a strong reputation for your brand.</p>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="row">
              <div className="col img-col">
                <img src={graphicDesign} alt="graphic design" height="50px" width="74px" />
              </div>
              <div className="col">
                <h3>Graphic Design</h3>
                <p>Visually stimulating media is far more effective than boring, or worse yet, cluttered media jumbled full of text. We design on-brand attention-grabbing digital and printed media.</p>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="row">
              <div className="col img-col">
                <img src={erp} alt="enterprise resource planning" height="50px" width="51px" />
              </div>
              <div className="col">
                <h3>ERP</h3>
                <p>Keeping data tied together and consolidated into a single source of truth is essential for understanding growth potential. We help select and implement the right Enterprise Resource Planning software for your business.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row table-footer">
          <div className="col">
            <p>Are you looking for professional advice on these services?</p>
          </div>
          <div className="col">
            <Link to="/contact"><FaPaperPlane /> Get a Free Quote</Link>
          </div>
        </div>
      </div>
    </Component>
  )
}

export default ExperienceTable

const Component = styled.div`
  background-color: #fff;
  box-shadow: 0 5px 30px 0 rgb(0 0 0 / 5%);
  margin: 0 auto;
  width: 1280px;
  max-width: 90vw;
  padding-top: 30px;
  padding-bottom: 0;
  @media (max-width: 500px) {
    max-width: calc(100% - 20px);
  }
  .row {
    display: flex;
    flex-direction: row;
  }
  .flex-container > .row {
    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
    > .col {
      @media (max-width: 768px) {
        flex: none;
        width: 100%;
      }
    }
  }
  .block {
    flex: 1;
    margin: 10px;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
    @media (max-width: 500px) {
      flex: none;
      width: calc(100% - 20px);
    }
  }
  .col {
    display: flex;
    flex-direction: column;
    flex: 4;
    font-size: 0.8rem;
    line-height: 1.2rem;
  }
  .img-col {
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-right: 10px;
    img {
      height: auto;
    }
  }
  h3 {
    font-weight: normal;
    margin-bottom: 1rem;
  }
  hr {
    background: #ededed;
    margin: 10px;
    @media (max-width: 500px) {
      display: none;
    }
  }
  .table-footer {
    background-color: var(--primary-blue);
    color: #fff;
    .col {
      :nth-of-type(1) {
        padding: 20px 0 20px 30px;
        @media (max-width: 500px) {
          padding-bottom: 0;
          padding-left: 0;
        }
      }
      :nth-of-type(2) {
        align-items: flex-end;
        justify-content: center;
        padding-right: 30px;
        @media (max-width: 500px) {
          align-items: flex-start;
          padding-bottom: 10px;
        }
      }
    }
    p {
      font-size: 18px;
      margin: 10px;
    }
    a {
      background-color: #fff;
      border-radius: 100px;
      box-shadow: 0 0 25px -14px #fff;
      color: #000;
      font-size: 14px;
      line-height: 16px;
      margin: 10px;
      padding: 16px 32px;
      text-decoration: none;
      transition: color .3s ease-out,border .3s ease-out,background .3s ease-out,box-shadow .3s ease-out;
      :hover {
        background-color: #0d3885;
        box-shadow: 0 0 25px -14px var(--vamtam-accent-color-2);
        color: #fff;
      }
      svg {
        margin-right: 5px;
      }
    }
  }
`