import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginRight: `1.45rem`,
      height: `100vh`,
      maxWidth: 200,
      position: `fixed`,
    }}
  >
    <div
      style={{
        margin: `auto 0`,
        padding: `2rem 1.0875rem`,
      }}
    >
      <span style={{ color: "#ffffff" }}>Conner Jensen</span>
      <ul
        style={{
          listStyle: `none`,
          color: "#ffffff",
          margin: `50px 0`,
        }}
      >
        <li>About</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
