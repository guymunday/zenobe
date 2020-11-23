import React from "react"
import { graphql, Link } from "gatsby"
import LayoutAlt from "../components/LayoutAlt"
import Img from "gatsby-image"
import ButtonInvert from "../components/ButtonInvert"
import styled from "styled-components"

export const BlackHeader = styled.div`
  background: var(--black);
  color: var(--white);
  padding: 50px 0;
  h1 {
    display: block;
    max-width: 1100px;
    margin: auto;
    padding: 0 20px;
  }
`

export const NewsFlex = styled.section`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  max-width: 1110px;
  margin: 50px auto;
  .flex-item {
    width: 50%;
    padding: 20px 20px 40px 20px;
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
    :first-child {
      width: 100%;
      display: flex;
      padding: 0;
      @media only screen and (max-width: 768px) {
        display: block;
        padding: 20px;
      }
      .gatsby-image-wrapper {
        width: 50%;
        @media only screen and (max-width: 768px) {
          width: 100%;
        }
      }
      div {
        width: 50%;
        margin: 20px;
        @media only screen and (max-width: 768px) {
          width: 100%;
          margin: 0;
        }
        h2 {
          font-size: 2.5rem;
          @media only screen and (max-width: 768px) {
            font-size: 1.5em;
          }
        }

        p {
          @media only screen and (max-width: 768px) {
            margin-bottom: 30px;
          }
        }
      }
    }
    :nth-child(2)::before,
    :nth-child(3)::before {
      content: "";
      display: block;
      height: 1px;
      background: black;
      margin-bottom: 40px;
      @media only screen and (max-width: 768px) {
        display: none;
      }
    }
    div {
      h2 {
        margin: 30px 0;
      }
      p {
        margin-bottom: 30px;
      }
    }
  }
`

const NewsList = (props) => {
  console.log(props)
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/news" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  return (
    <LayoutAlt>
      <BlackHeader>
        <h1>News</h1>
      </BlackHeader>
      <NewsFlex>
        {props.data.allWpPost.edges.map((n) => {
          return (
            <div className="flex-item" key={n.node.id}>
              <Img
                fluid={
                  n.node.case_news.heroSection.heroImage.localFile
                    .childImageSharp.fluid
                }
                alt={n.node.title}
              />
              <div>
                <h2>{n.node.title}</h2>
                <p>{n.node.news_excerpt.excerpt}</p>
                <ButtonInvert
                  link={`/news/${n.node.slug}`}
                  text="Find out more"
                />
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
    </LayoutAlt>
  )
}

export default NewsList

export const newsListQuery = graphql`
  query newsListQuery($skip: Int!, $limit: Int!) {
    allWpPost(limit: $limit, skip: $skip) {
      edges {
        node {
          id
          slug
          title
          news_excerpt {
            excerpt
          }
          case_news {
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
