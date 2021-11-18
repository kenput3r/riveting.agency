import * as React from "react"
import styled from "styled-components"
import { IoIosConstruct } from "react-icons/io"
import { FaBullhorn, FaChartLine } from "react-icons/fa"
import bgShape from "../images/shape-bg.svg"

const OurProcess = () => {
  return (
    <Component bgShape={bgShape}>
      <h2>We establish and scale your digital presence.</h2>
      <div className="row">
        <div className="block">
          <p>
            <IoIosConstruct />
          </p>
          <h3>
            We build
          </h3>
          <p>We develop a strong, growth-ready digital foundation.</p>
        </div>

        <div className="block">
          <p>
            <FaBullhorn />
          </p>
          <h3>
            We grow
          </h3>
          <p>We reach new prospects and grow your core audience.</p>
        </div>

        <div className="block">
          <p>
            <FaChartLine />
          </p>
          <h3>
            We convert
          </h3>
          <p>We win over your audience &amp; acheive the objective.</p>
        </div>
      </div>
    </Component>
  )
}

export default OurProcess

const Component = styled.div`
  padding: 4rem 5px;
  margin: 0 auto;
  max-width: 100%;
  width: 1280px;
  svg {
    color: var(--primary-blue);
    font-size: 60px;
  }
  h2 {
    font-weight: normal;
    text-align: center;
    @media (max-width: 1024px) {
      margin-left: auto;
      margin-right: auto;
      max-width: 95vw;
      width: 640px;
    }
  }
  .row {
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
  }
  .block {
    background-image: url(${props => props.bgShape});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    flex: 1;
    padding: 50px;
    text-align: center;
    @media (max-width: 768px) {
      flex: none;
      margin: 0 auto;
      max-width: calc(100vw - 10px);
      width: 320px;
    }
  }
  h3 {
    font-weight: normal;
  }
`