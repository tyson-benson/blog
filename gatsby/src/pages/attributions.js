import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Attributions = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="What's on my bookshelf" />
      <div className="page-wrapper">
        <h1>Attributions</h1>
        <ul>
          <li>
            Dark mode blog post title background - Photo by{" "}
            <a href="https://unsplash.com/@mischievous_penguins" rel="nofollow">
              Casey Horner
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/" rel="nofollow">
              Unsplash
            </a>{" "}
            / Cropped from original
          </li>
          <li>
            Light mode blog post title background - GPlay by{" "}
            <a href="https://dhesign.com/" rel="nofollow">
              Dimitrie Hoekstra
            </a>
            , used under CC BY-SA 3.0,{" "}
            <a
              href="https://www.toptal.com/designers/subtlepatterns/gplay/"
              rel="nofollow"
            >
              Toptal Subtle Patterns
            </a>
            .
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default Attributions

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
