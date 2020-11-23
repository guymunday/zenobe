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

  const eventTemplate = require.resolve("./src/templates/single/event.js")

  const eventPage = require.resolve("./src/templates/eventList.js")

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
        allWpEvent {
          edges {
            node {
              id
              title
              slug
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
  const events = result.data.allWpEvent.edges

  const postsPerPage = 11
  const numPages = Math.ceil(caseStudyList.length / postsPerPage)
  const numPagesNews = Math.ceil(newsList.length / postsPerPage)
  const numPagesEvents = Math.ceil(events.length / postsPerPage)

  caseStudyList.forEach((edge) => {
    createPage({
      path: `/case-studies/${edge.node.slug}`,
      component: caseStudyTemplate,
      context: {
        id: edge.node.id,
        slug: edge.node.slug,
      },
    })
  })

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

  events.forEach((edge) => {
    createPage({
      path: `/events/${edge.node.slug}`,
      component: eventTemplate,
      context: {
        id: edge.node.id,
        slug: edge.node.slug,
      },
    })
  })

  Array.from({ length: numPagesEvents }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/events` : `/events/${i + 1}`,
      component: eventPage,
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
        slug: edge.node.slug,
      },
    })
  })

  Array.from({ length: numPagesNews }).forEach((_, i) => {
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
        slug: edge.node.slug,
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
