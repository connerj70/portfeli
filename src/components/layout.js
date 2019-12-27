/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./main.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "200px 1fr",
        justifyContent: "center",
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          maxWidth: 960,
          paddingLeft: "1rem",
          paddingTop: "2rem",
          gridColumn: 2,
        }}
      >
        <div className="bouncer">
          <div className="bouncer-inner"></div>
        </div>
        <div className="bouncer2">
          <div className="bouncer-inner2"></div>
        </div>
        <div className="bouncer3">
          <div className="bouncer-inner3"></div>
        </div>

        <main>{children}</main>
        <footer></footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
