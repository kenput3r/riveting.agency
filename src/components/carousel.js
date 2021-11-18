import React, { useState, useEffect, useRef } from "react"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Carousel = ({ titles, slides }) => {
  const [title, setTitle] = useState(titles[0])
  const [changeTitle, setChangeTitle] = useState(false)
  const [index, setIndex] = useState(0)
  const [activeSlide, setActiveSlide] = useState(slides[index])
  const [statefulTimer, setStatefulTimer] = useState(() => {})
  const [statefulTimer2, setStatefulTimer2] = useState(() => {})
  const observedElement = useRef()

  /**
   * @function changeSlide
   * @param {object} next - slide to be shown next
   */
  const changeSlide = (next) => {
    if (next) {
      if(index + 1 < slides.length) {
        setIndex(index + 1)
      } else {
        setIndex(0)
      }
    } else {
      if(index - 1 >= 0) {
        setIndex(index - 1)
      } else {
        setIndex(slides.length - 1)
      }
    }
  }

  /**
 * Observe h2
 */
    useEffect(() => {
    const rootMargin = "0px"
    const observer = new IntersectionObserver(
      ([entry]) => {
        setChangeTitle(entry.isIntersecting)
      }, { rootMargin }
    )
    if (observedElement && observer.observe(observedElement.current)) {
      observer.unobserve(observedElement.current)
    }
  }, [])

  /**
   * Type in title
   */
  let titleIndex = 0
  useEffect(() => {
    if (changeTitle) {
      let i = 0
      function setNextChar() {
        i++
        if (i <= titles[titleIndex].length) {
          const new_title = titles[titleIndex].slice(0, i)
          setTitle(new_title)
          setStatefulTimer(setTimeout(function() {
            setNextChar()
          }, 50))
        } else {
          setStatefulTimer(setTimeout(function() {
            function removePrevChar() {
              i--
              if (i >= 0) {
                const new_title = titles[titleIndex].slice(0, i)
                setTitle(new_title)
                setStatefulTimer2(setTimeout(function() {
                  removePrevChar()
                }, 50))
              } else {
                if (titleIndex +1 < titles.length) {
                  titleIndex += 1
                }else {
                  titleIndex = 0
                }
                setNextChar()
              }
            }
            removePrevChar()
          }, 3000))
        }
      }
      setNextChar()
    } else {
      clearTimeout(statefulTimer)
      clearTimeout(statefulTimer2)
    }
  }, [changeTitle])

  /**
   * Set the next active slide when the index is updated
   */
  useEffect(() => {
    setActiveSlide(slides[index])
  }, [index])

  return (
    <Component>
      <div className="slide">
        <h2 ref={observedElement}>Be {title}</h2>
        <div className="row">
          <div className="slide-image">
            <GatsbyImage image={getImage(activeSlide.image)} alt={activeSlide.title} />
            <div className="controlls">
              <button onClick={() => changeSlide(false)}>
                <StaticImage 
                  src="../images/chevron-left.png" 
                  alt="previous" 
                  placeholder="none"
                  width={16} />
              </button>
              <button onClick={() => changeSlide(true)}>
                <StaticImage 
                  src="../images/chevron-right.png" 
                  alt="next" 
                  placeholder="none"
                  width={16} />
              </button>
            </div>
          </div>
          <div className="slide-text">
            <h3>{activeSlide.title}</h3>
            <div className="underline">
              <span></span><span></span><span></span><span></span>
            </div>
            <p>{activeSlide.text}</p>
          </div>
        </div>
      </div>
    </Component>
  )
}

export default Carousel

const Component = styled.div`
  h2 {
    font-family: var(--r-rufina-stack);
    font-size: 3.5rem;
    margin-top: -6rem;
    margin-bottom: 3rem;
    @media (max-width: 1279px) {
      margin-top: -3rem;
      margin-bottom: 2rem;
    }
    @media (max-width: 500px) {
      font-size: 3rem;
      margin-top: 0;
      margin-bottom: 0;
      padding: 1rem 1rem;
    }
    @media (max-width: 374px) {
      font-size: 2.7rem;
    }
  }
  .row {
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
  }
  .underline {
    margin-bottom: 1.45rem;
    span {
      background-color: var(--primary-blue);
      border-radius: 20px;
      display: inline-block;
      height: 5px;
      width: 88px;
      :nth-of-type(2) {
        margin-left: 3px;
        width: 30px;
      }
      :nth-of-type(3) {
        margin-left: 3px;
        width: 10px;
      }
      :nth-of-type(4) {
        margin-left: 3px;
        width: 6px;
      }
    }
  }
  .slide {
    background-color: #fff;
    box-shadow: rgb(0 0 0 / 7%) 0px 2px 40px 0px;
    margin-left: auto;
    margin-right: auto;
    padding: 4rem;
    transform: translate(8vw);
    max-width: 90vw;
    width: 900px;
    @media (max-width: 1279px) {
      padding: 1rem 4rem;
      max-width: 75vw;
    }
    @media (max-width: 768px) {
      max-width: 100%;
      padding: 1rem;
      transform: initial;
    }
    @media (max-width: 500px) {
      padding: 0;
    }
  }
  .slide-image {
    flex: 1;
    margin-left: calc((20vw + 2rem) * -1);
    max-width: 640px;
    [data-gatsby-image-wrapper] {
      filter: drop-shadow(0rem 1rem 1rem rgba(0,0,0,0.5));
    }
    @media (max-width: 768px) {
      flex: none;
      margin-left: 0;
      width: 90%;
    }
    @media (max-width: 500px) {
      margin-bottom: 1rem;
      width: 100%;
    }
  }
  .slide-text {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 3rem 1rem 5rem;
    @media (max-width: 1279px) {
      padding: 2rem 1rem 2rem 5rem;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
      min-height: 346px;
    }
    @media (max-width: 768px) {
      flex: none;
      margin-left: 0;
      padding: 1rem;
      width: 100%;
    }
    h3 {
      font-size: 2rem;
      margin-bottom: 0;
    }
  }
  .controlls {
    text-align: right;
    margin-bottom: 2rem;
    margin-right: -57px;
    margin-top: -100px;
    position: relative;
    z-index: 10;
    @media (max-width: 500px) {
      margin-top: -68px;
      margin-right: 0;
      margin-bottom: 0;
      position: absolute;
      right: 0;
    }
  }
  button {
    background-color: var(--primary-blue);
    border: none;
    padding: 20px;
    -webkit-appearance: none;
    -moz-appearance: none;
    :nth-of-type(1) {
      border-right: 1px solid #fff;
    }
    :nth-of-type(2) {
      border-left: 1px solid #fff;
    }
    :hover {
      cursor: pointer;
    }
  }
`
