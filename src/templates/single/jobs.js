import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import { NewHeroSection } from "./news"

const Jobs = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <NewHeroSection></NewHeroSection>
    </Layout>
  )
}

export default Jobs

export const query = graphql`
  query jobs($id: String!) {
    wpJob(id: { eq: $id }) {
      title
      id
    }
  }
`
