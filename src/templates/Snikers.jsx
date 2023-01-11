import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./Snikers.css"

const Snikers = ({ data }) => {
  console.log(data);
  const _data = data.datoCmsBoot
  const images = _data.snikersImages;

  return <>
    <HelmetDatoCms
      favicon={data.datoCmsSite.faviconMetaTags}
      seo={data.datoCmsBoot.seoMetaTags} />

    <h1>{_data.snikersTitle}</h1>
    <p>текст</p>
    <div>
      {images.map((image, i) =>
        <GatsbyImage
          className='snikers'
          key={i}
          image={getImage(image)}
          alt={image.alt} />)}
    </div>
  </>
}


export default Snikers

export const pageQuery = graphql`
query SnikersData($slug: String!) {
  datoCmsSite {
    faviconMetaTags {
      tags
    }
  }
  datoCmsBoot(snikersSlug: {eq: $slug}) {
      seoMetaTags {
        tags
      }
      snikersId
      snikersImages {
        alt
        gatsbyImageData
      }
      snikersTitle
  }
}`