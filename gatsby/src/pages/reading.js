import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const Reading = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="What's on my bookshelf" />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <div className="blog-header-wrapper">
            <h1>Reading</h1>
          </div>
        </header>
        <div className="page-wrapper">
          <p>Bookshelf</p>
          <p>
            This is a list of books I'm reading, or have started reading. I hope
            to write some reviews of these books to help me distill my thoughts,
            reinforce their learnings, and acknowledge/thank the authors for the
            efforts they've spent in writing these books to share their
            knowledge.
          </p>
          <ol>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/the-phoenix-project.jpg"
                  alt="The Phoenix Project Front Cover"
                />
                <figcaption>The Phoenix Project</figcaption>
              </figure>
            </li>
          </ol>
        </div>
      </article>
    </Layout>
  )
}

export default Reading

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
