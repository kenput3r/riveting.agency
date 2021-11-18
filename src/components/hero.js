import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Hero = () => {
  return (
    <Component>
      <div className="grid">
        <StaticImage 
          src="../images/hero-social-cropped-3.jpg" 
          alt="The Riveting Team"
          placeholder="blurred"
          layout="fullWidth"
          aspectRatio={16 / 5}
          objectPosition="0% 0%"
          objectFit="contain"
          transformOptions={{cropFocus: "north"}}
          quality="100%"
          formats={["auto", "webp", "avif"]}
          style={{gridArea: "1/1"}} 
        />
        <div className="grid grid-overlay">
          <h2>Consulting for a <br />mobile-first world</h2>
        </div>
      </div>
    </Component>
  )
}

export default Hero

const Component = styled.div`
  .grid {
    display: grid;
  }
  .gatsby-image-wrapper {
    @media (max-width: 1024px) and (min-height: 1366px) {
      min-height: 33vh;
    }
    @media (max-width: 768px) {
      min-height: 40vh;
    }
    @media (max-width: 500px) {
      min-height: 50vh;
    }
    [aria-hidden="true"] {
      @media (max-width: 1024px) and (min-height: 1366px) {
        padding-top: 33vh;
      }
      @media (max-width: 768px) {
        padding-top: 40vh !important;
      }
      @media (max-width: 500px) {
        padding-top: 50vh !important;
      }
    }
  }
  img[data-main-image] {
    @media (max-width: 1024px) and (min-height: 1366px) {
      object-fit: cover !important;
    }
    @media (max-width: 768px) {
      object-fit: cover !important;
      object-position: 40% center !important;
    }
    @media (max-width: 500px) {
      object-position: 50% center !important;
    }
  }
  .grid-overlay {
    background-color: rgb(244 249 254 / 32%);
    grid-area: 1/1;
    position: relative;
    place-items: center left;
    @media (max-width: 500px) {
      padding-top: 1.45rem;
      place-items: flex-start;
    }
  }
  h2 {
    font-size: 62px;
    margin-left: calc(1.45rem * 2);
    @media (max-width: 768px) {
      font-size: 42px;
      margin-left: calc(1.0875rem - 8.5px);
    }
    @media (max-width: 500px) {
      font-size: 33px;
      max-width: 49%;
    }
    @media (max-width: 375px) {
      font-size: 30px;
    }
    @media (max-width: 320px) {
      font-size: 26px;
    }
  }
`