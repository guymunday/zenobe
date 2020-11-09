import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

const CaseStudy = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>{data.page.title}</div>
    </Layout>
  )
}

export default CaseStudy

export const query = graphql`
  query casestudy($id: String!) {
    page: wpCaseStudy(id: { eq: $id }) {
      title
    }
  }
`
