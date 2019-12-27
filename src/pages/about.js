import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

var textShadow = { textShadow: "2px 4px 3px rgba(0,0,0,0.3)" }

const About = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="about" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `1fr 1fr`,
          padding: `2rem 1rem`,
          alignItems: "center",
          justifyContent: "center",
          background: "rgb(62, 78, 80)",
          borderRadius: "1rem",
          color: "#fff",
          padding: "1rem",
          boxShadow: "2px 4px 3px rgba(0,0,0,0.3)",
        }}
      >
        <div
          style={{
            gridColumn: 1,
            margin: "0 auto",
            width: 300,
          }}
        >
          <Image />
        </div>
        <div style={{ gridColumn: 2 }}>
          <h2
            style={{
              fontSize: "50px",
              textShadow: "2px 4px 3px rgba(0,0,0,0.3)",
            }}
          >
            Hi! I'm <span style={{ color: "#f5ac72" }}>Conner.</span>
          </h2>
          <p style={textShadow}>
            I'm a <span style={{ color: "#f5ac72" }}>web developer</span> from
            Sandy, Utah.
          </p>
          <p style={textShadow}>
            I specialize in using{" "}
            <span style={{ color: "#f5ac72" }}>React</span> and{" "}
            <span style={{ color: "#f5ac72" }}>Golang</span> to construct clean
            and performant web applications.
          </p>
          <p style={textShadow}>
            In my free time I enjoy hiking, powerlifting, reading, spending time
            with my family and learning new things about computer science and
            software architecture.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
