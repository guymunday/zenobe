import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import { BlackHeader, NewsFlex } from "./newsList"
import ButtonInvert from "../components/ButtonInvert"

const CaseStudyList = (props) => {
  console.log(props)
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/case-studies" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  return (
    <Layout>
      <BlackHeader>
        <h1>Case Studies</h1>
      </BlackHeader>
      <NewsFlex>
        {props.data.allWpCaseStudy.edges.map((c) => {
          return (
            <div className="flex-item" key={c.node.id}>
              <Img
                fluid={
                  c.node.caseStudy.heroSection.heroImage.localFile
                    .childImageSharp.fluid
                }
                alt={c.node.title}
              />
              <div>
                <h2>{c.node.title}</h2>
                <ButtonInvert link={c.node.slug} text="Find out more" />
              </div>
            </div>
          )
        })}
      </NewsFlex>
      {!isFirst && (
        <Link to={prevPage} rel="prev">
          ← Previous Page
        </Link>
      )}
      {!isLast && (
        <Link to={nextPage} rel="next">
          Next Page →
        </Link>
      )}
    </Layout>
  )
}

export default CaseStudyList

export const caseListQuery = graphql`
  query caseListQuery($skip: Int!, $limit: Int!) {
    allWpCaseStudy(limit: $limit, skip: $skip) {
      edges {
        node {
          id
          slug
          title
          caseStudy {
            heroSection {
              heroImage {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
