import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Slider from "react-slick"
// slider css
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const NewsSection = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: auto;
  padding: 0 50px 50px 50px;
`
const SliderThumb = styled.div`
  padding: 0 20px;
  span {
    display: block;
    height: 1px;
    background: #000;
    margin: 30px 0;
    width: 100%;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 200px;
    object-fit: cover;
    picture {
      pointer-events: none;
    }
  }
  a {
    h3 {
      margin: 20px 0;
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
      :hover {
        background: #000;
        color: var(--glow);
      }
    }
  }
`

const NewsThumbnails = () => {
  const newsData = useStaticQuery(graphql`
    {
      allWpPost(limit: 4) {
        edges {
          node {
            slug
            title
            id
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
  `)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <>
      <NewsSection>
        <Slider {...settings} style={{ zIndex: 9 }}>
          {newsData.allWpPost.edges.map((edge) => {
            return (
              <SliderThumb key={edge.node.id}>
                <span></span>
                <div className="image">
                  <Img
                    fluid={
                      edge.node.case_news.heroSection.heroImage.localFile
                        .childImageSharp.fluid
                    }
                    alt={edge.node.title}
                  />
                </div>
                <Link to={`/news/${edge.node.slug}`} className="news-thumb">
                  <h3>{edge.node.title}</h3>
                  <p>{edge.node.news_excerpt.excerpt}</p>
                  <span></span>
                  <div class="button">+</div>
                </Link>
              </SliderThumb>
            )
          })}
        </Slider>
      </NewsSection>
    </>
  )
}

export default NewsThumbnails
