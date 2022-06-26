import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import {header, btn, topheader} from "../styles/home.module.css"

export default function Home() {
  return (
  <section>
    <Layout>
      <div className={topheader}>
        <div className={header}>
        <h2>Design</h2>
        <h3>Develop & Deploy</h3>
        <p>Web & mobile developer based in Tunisia</p>
        <Link className={btn} to="/projects">See portfolio projects</Link>
      </div>
      <img src="/developer.svg"/>
      </div>
    </Layout>
  </section>
  )
}
