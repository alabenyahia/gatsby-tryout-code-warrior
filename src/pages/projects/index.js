import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import {project, projects, projectsContainer} from "../../styles/projects.module.css"

export default function index({data}) {
  const projectsData = data.allMarkdownRemark.nodes
  return (
    <Layout>
        <div className={projects}>
            <h3>Projects i built</h3>
            <div className={projectsContainer}>
                {projectsData.map(singleProject => (
                    <Link key={singleProject.id} className={project} to={`/projects/${singleProject.frontmatter.slug}`}>
                        <h3>{singleProject.frontmatter.title}</h3>
                    </Link>
                ))}
            </div>
        </div>
    </Layout>
  )
}

export const projectsQuery = graphql`
query ProjectsQuery {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          slug
          title
        }
      }
    }
  }  
`
