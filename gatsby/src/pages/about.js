import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutMe = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About me" />
      <div className="page-wrapper">
        <h1>About Me</h1>

        <p>My photo</p>

        <p>Longer bio</p>
      </div>
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
