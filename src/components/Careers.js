import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"
import "../slick-carousel/slick/slick.css"
import "../slick-carousel/slick/slick-theme.css"

const CareerSection = styled.section`
  padding: 50px;
  overflow: hidden;
  h3 {
    padding: 30px;
    font-size: 2.5rem;
  }
  .career-inner {
    background: var(--electric);
    .career-inner-flex {
      display: flex;
      .gatsby-image-wrapper {
        width: 70%;
        margin-left: -10%;
        margin-bottom: -10%;
      }
    }
  }
`

const CareerThumb = styled.div`
  padding: 20px;
  h3 {
    padding: 0;
    margin-bottom: 20px;
    font-size: 1.8rem;
  }
  span {
    display: block;
    height: 1px;
    background: #000;
    margin: 30px 0;
    width: 100%;
  }
  .button {
    border: 1px solid #000;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 50%;
    line-height: 1.8;
    transition: 0.3s ease;
    margin-bottom: 30px;
    :hover {
      background: #000;
      color: var(--glow);
    }
  }
`

const Careers = () => {
  const jobs = useStaticQuery(graphql`
    {
      allWpJob {
        edges {
          node {
            title
            content
            slug
            id
            careers {
              shortDescription
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
      }
    }
  `)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <CareerSection>
      <div className="career-inner">
        <h3>Join the team</h3>
        <div className="career-inner-flex">
          <Img
            fluid={
              jobs.allWpJob.edges[0].node.careers.image.localFile
                .childImageSharp.fluid
            }
            alt="careers"
          />
          <Slider {...settings} style={{ width: "50%" }}>
            {jobs.allWpJob.edges.map((job) => {
              return (
                <CareerThumb key={job.node.id}>
                  <span></span>
                  <h3>{job.node.title}</h3>
                  <p>{job.node.careers.shortDescription}</p>
                  <span></span>
                  <Link to={`/careers/${job.node.slug}`}>
                    <div className="button">+</div>
                  </Link>
                </CareerThumb>
              )
            })}
          </Slider>
        </div>
      </div>
    </CareerSection>
  )
}

export default Careers
