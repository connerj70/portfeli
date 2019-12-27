import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Skills = () => (
  <Layout>
    <SEO title="Skills" />
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
      <div style={{ gridColumn: 3 }}>skills</div>
    </div>
  </Layout>
)

export default Skills
