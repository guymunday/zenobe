import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const NewsThumbnails = () => {
  const newsData = useStaticQuery(graphql`
    {
      allWpPost(limit: 4) {
        edges {
          node {
            id
            case_news {
              heroSection {
                heroImage {
                  localFile {
                    childImageSharp {
                      fluid {
                        base64
                        tracedSVG
                        srcWebp
                        srcSetWebp
                        originalImg
                        originalName
                      }
                    }
                  }
                }
                title
              }
            }
            excerpt
            title
          }
        }
      }
    }
  `)
  console.log(newsData.allWpPost.edges)

  const data = newsData.allWpPost.edges

  return data.map((edge) => {
    console.log(edge.node.id)
    return <div key={edge.node.id}>{edge.node.title}</div>
  })
}

export default NewsThumbnails
