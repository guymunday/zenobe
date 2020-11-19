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

  const jobsTemplate = require.resolve("./src/templates/single/jobs.js")

  const caseStudyPage = require.resolve("./src/templates/caseStudyList.js")

  const newsPage = require.resolve("./src/templates/newsList.js")

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
        allWpJob {
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
  const jobList = result.data.allWpJob.edges

  caseStudyList.forEach((edge) => {
    createPage({
      path: `/case-studies/${edge.node.slug}`,
      component: caseStudyTemplate,
      context: {
        id: edge.node.id,
      },
    })
  })

  const postsPerPage = 11
  const numPages = Math.ceil(caseStudyList.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/case-studies` : `/case-studies/${i + 1}`,
      component: caseStudyPage,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
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

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/news` : `/news/${i + 1}`,
      component: newsPage,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  jobList.forEach((edge) => {
    createPage({
      path: `/careers/${edge.node.slug}`,
      component: jobsTemplate,
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
