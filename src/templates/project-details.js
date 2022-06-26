import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import {container} from '../styles/projectdetails.module.css'

export default function ProjectDetails({data}) {
  const {html} = data.markdownRemark
  const {title} = data.markdownRemark.frontmatter
  return (
    <Layout>
        <div className={container}>
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{__html: html}}/>
        </div>
    </Layout>
  )
}


export const projectDetails = graphql`
query ProjectDetailsQuery($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
      }
    }
  }
`