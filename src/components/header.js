import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"

const linkList = ["about", "skills", "portfolio", "contact"]

const Header = ({ siteTitle }) => {
  const [activeLink, setActiveLink] = useState("")

  //On initial load set the active link to the url pathname
  useEffect(() => {
    let currentPathname = window.location.pathname
    console.log(currentPathname)
    setActiveLink(currentPathname)
  }, [])

  return (
    <header
      style={{
        background: `#f5ac72`,
        height: `100vh`,
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          margin: `auto 0`,
        }}
      >
        <div style={{ color: "#ffffff", padding: `3rem 1rem 0rem 1rem` }}>
          CONNER JENSEN
        </div>
        <ul
          style={{
            listStyle: `none`,
            color: "#ffffff",
            margin: `30px 0`,
          }}
        >
          {linkList.map((link, i) => {
            return (
              <AniLink
                paintDrip
                duration={0.3}
                hex="#f5ac72"
                to={`/${link}`}
                onClick={() => setActiveLink(`/${link}`)}
              >
                <li
                  style={{ padding: `1rem 1rem` }}
                  className={activeLink === `/${link}` ? "activeLink" : ""}
                >
                  {link}
                </li>
              </AniLink>
            )
          })}
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
