import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

const News = ({ data }) => {
  console.log(data.page.title)
  return (
    <Layout>
      <div>{data.page.title}</div>
    </Layout>
  )
}

export default News

export const query = graphql`
  query news($id: String!) {
    page: wpPost(id: { eq: $id }) {
      title
    }
  }
`
