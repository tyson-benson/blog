import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Reading = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="What's on my bookshelf" />
      <div className="page-wrapper">
        <h1>Reading</h1>

        <p>Bookshelf</p>

        <p>List of books I have and will read</p>
      </div>
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
