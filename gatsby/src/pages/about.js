import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutMe = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About me" />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <div className="blog-header-wrapper">
            <h1>About Me</h1>
          </div>
        </header>
        <div className="page-wrapper">
          <StaticImage
            className="bio-avatar"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/profile-pic.jpeg"
            width={250}
            height={250}
            quality={95}
            alt="Profile picture"
          />
          <h2>👋 Hi, I'm Tyson</h2>
          <p>
            I live an work in Australia with my wife and two delightful boys. My
            career started in 2008 when I started at Janison, an e-learning
            company. It's there that I developed my skills as a software
            developer and grew as a technology professional and earned the trust
            of my colleagues.
          </p>
          <p>
            I have always revelled in technical challenges and I have had the
            opportunity to work on plenty of interesting projects. I have worked
            on a wide range of projects, from small internal tools to large
            scale enterprise applications - focused specifically in the learning
            and assessment domains. I am proud of my persistence and dedication
            to solving problems and delivering quality solutions, and the
            thought that I have been able to see my work used by millions of
            people across the world is a great feeling for any technology
            professional.
          </p>
          <p>
            My future objective is to position myself as a leader that delivers
            technology transformation initiatives that act as force multipliers
            in achieving successful business outcomes.
          </p>
          <p>
            After reading the Phoenix Project and DevOps Handbook in 2016 I
            experienced a seismic shift in my career. With a new found sense of
            purpose I analysed the current maturity level of the business and
            determined the next actions to take to begin Janison's DevOps
            journey. A key part of this journey was in learning how to lead by
            influence, rather than authority. I've since found that one of the
            most effective strategies is in planting the idea as a seed in
            others, by sharing the case studies from the books at the opportune
            moment, and then watching the idea grow in others as they draw their
            own comparisons to how they apply to our situation.
          </p>
          <p>
            I have also enjoyed the opportunities to mentor and coach others
            during my career, and I have found that I have a natural ability to
            connect with people and bring them on the journey to deliver their
            best work.
          </p>
        </div>
      </article>
    </Layout>
  )
}

export default AboutMe

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
