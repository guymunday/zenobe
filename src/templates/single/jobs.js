import React from "react"
import { graphql } from "gatsby"
import LayoutAlt from "../../components/LayoutAlt"
import { NewHeroSection } from "./news"
import FormDownload from "../../components/FormDownload"
import Img from "gatsby-image"
import ButtonInvertEmail from "../../components/ButtonInvertEmail"

const Jobs = ({ data }) => {
  console.log(data)

  return (
    <LayoutAlt>
      <NewHeroSection>
        <div className="title">
          <h1>We're Hiring!</h1>
          <span
            style={{
              display: "block",
              width: "80%",
              height: 1,
              background: "var(--black)",
              margin: "30px 0",
            }}
          ></span>
          <h2>{data.wpJob.title}</h2>
          <span
            style={{
              display: "block",
              width: "80%",
              height: 1,
              background: "var(--black)",
              margin: "30px 0",
            }}
          ></span>
          <p styl={{ marginBottom: 20 }}>{data.wpJob.careers.sendCv}</p>
          <ButtonInvertEmail
            link={`mailto:${data.wpJob.careers.emailLink}`}
            text="Apply here"
          />
        </div>
        <Img
          fluid={data.wpJob.careers.image.localFile.childImageSharp.fluid}
          alt={data.wpJob.title}
        />
      </NewHeroSection>
      <div
        style={{ maxWidth: 780, padding: "100px 20px", margin: "auto" }}
        dangerouslySetInnerHTML={{ __html: data.wpJob.content }}
      />
      <FormDownload />
    </LayoutAlt>
  )
}

export default Jobs

export const query = graphql`
  query jobs($id: String!) {
    wpJob(id: { eq: $id }) {
      title
      content
      slug
      id
      careers {
        sendCv
        shortDescription
        emailLink
        image {
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
`
