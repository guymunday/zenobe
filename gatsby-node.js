const _ = require("lodash")

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = (promise) =>
  promise.then((result) => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const caseStudyTemplate = require.resolve(
    "./src/templates/single/casestudy.js"
  )
  const newsTemplate = require.resolve("./src/templates/single/news.js")

  const featureTemplate = require.resolve(
    "./src/templates/single/featurePage.js"
  )

  const result = await wrapper(
    graphql(`
      {
        allWpCaseStudy {
          edges {
            node {
              id
              slug
              title
            }
          }
        }
        allWpPost {
          edges {
            node {
              title
              slug
              id
            }
          }
        }
        allWpFeaturePage {
          edges {
            node {
              slug
              id
              title
            }
          }
        }
      }
    `)
  )

  const caseStudyList = result.data.allWpCaseStudy.edges
  const newsList = result.data.allWpPost.edges
  const featureList = result.data.allWpFeaturePage.edges

  caseStudyList.forEach((edge) => {
    createPage({
      path: `/case-studies/${edge.node.slug}`,
      component: caseStudyTemplate,
      context: {
        id: edge.node.id,
      },
    })
  })

  newsList.forEach((edge) => {
    createPage({
      path: `/news/${edge.node.slug}`,
      component: newsTemplate,
      context: {
        id: edge.node.id,
      },
    })
  })

  featureList.forEach((edge) => {
    createPage({
      path: `/${edge.node.slug}`,
      component: featureTemplate,
      context: {
        id: edge.node.id,
        slug: edge.node.slug,
      },
    })
  })
}
