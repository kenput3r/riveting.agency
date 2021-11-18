import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import OurProcess from "../components/ourProcess"
import ExperienceTable from "../components/experienceTable"
import Carousel from "../components/carousel"
import Columns from "../components/columns"
import InlineContactForm from "../components/inlineContactForm"

const IndexPage = ({ data }) => {
  const titles = ["seen.", "heard.", "liked.", "followed.", "supported."]
  const carousel_text = {
    social: `We pair organic social media with paid social media strategies to maximize the effectiveness of brand reach, leaving lasting impressions that result in efficient ad spend and high conversion rates.`,
    email: `Whether you are converting a non-supporter into a supporter or an ad into a sale, there is no denying the power of a captivating email that actually reaches the inbox. We use powerful tools that are supercharged by first-party data, allowing for highly personalized emails to be sent only to those most likely to open them.`,
    sms: `Clever text message campaigns can have open rates as high as 98 percent. We leverage peer-to-peer messaging to engage the unengaged and mass text the already engaged, maximizing awareness and reach while reducing costs.`,
    websites: `Well-built and thoughtfully designed websites do more than just establish legitimacy to a campaign. They tell a story in a controlled, distraction-free environment. Websites are where the conversion happens.`
  }
  const { social, email, sms, websites } = carousel_text
  const carouselSlides = [
    { title: `Social`, text: social, image: data.paidSocial },
    { title: `Email`, text: email, image: data.email },
    { title: `SMS`, text: sms, image: data.sms },
    { title: `Websites`, text: websites, image: data.website },
  ]
  return (
    <Layout>
      <Seo title="Consulting Services" />
      <Page>
        <section id="hero">
          <Hero />
        </section>
        <section id="process">
          <OurProcess />
        </section>
        <section id="experience">
          <h2>10+ Years of Experience</h2>
          <ExperienceTable />
        </section>
        <section id="features">
          <Columns />
        </section>
        <section id="services">
          <Carousel titles={titles} slides={carouselSlides} />
        </section>
        <section id="contact">
          <InlineContactForm />
        </section>
      </Page>
    </Layout>
  )
}

const Page = styled.div`
  section#services, section#experience {
    background-color: var(--soft-blue);
    padding: 6rem 3rem;
    @media (max-width: 768px) {
      padding: 4rem 1rem;
    }
    @media (max-width: 500px) {
      padding: 2rem 0;
    }
  }
  section#experience {
    padding-top: 5rem;
    h2 {
      color: var(--h2-color);
      font-size: 44px;
      margin-bottom: 4rem;
      text-align: center;
    }
  }
  section#contact {
    border-bottom: 1px solid #ededed;
    padding-top: 30px;
    padding-bottom: 20px;
  }
`

export default IndexPage

export const query = graphql`
  query IndexQuery {
    hero: file(relativePath: {eq: "hero.jpg"}) {
      childImageSharp {
        gatsbyImageData(aspectRatio: 1.25, placeholder: BLURRED, width: 640)
      }
    }
    email: file(relativePath: {eq: "email.jpg"}) {
      childImageSharp {
        gatsbyImageData(aspectRatio: 1.25, placeholder: BLURRED, width: 640)
      }
    }
    sms: file(relativePath: {eq: "sms.jpg"}) {
      childImageSharp {
        gatsbyImageData(aspectRatio: 1.25, placeholder: BLURRED, width: 640)
      }
    }
    paidSocial: file(relativePath: {eq: "paid-social.jpg"}) {
      childImageSharp {
        gatsbyImageData(aspectRatio: 1.25, placeholder: BLURRED, width: 640)
      }
    }
    website: file(relativePath: {eq: "website.jpg"}) {
      childImageSharp {
        gatsbyImageData(aspectRatio: 1.25, placeholder: BLURRED, width: 640)
      }
    }
  }
`
