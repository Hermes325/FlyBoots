import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"


import "./Snikers.css"
import "../css/about_us.css"
import "../css/catalog.css"
import "../css/citata.css"
import "../css/fonts.css"
import "../css/HIW.css"
import "../css/main.css"
import "../css/media.css"
import "../css/nav.css"
import "../css/planshet.css"
import "../css/question.css"
import "../css/ramka_tovara.css"




const Snikers = ({ data }) => {
  console.log(data);
  const _data = data.datoCmsBoot
  const images = _data.snikersImages;


  return <>


    <HelmetDatoCms
      favicon={data.datoCmsSite.faviconMetaTags}
      seo={data.datoCmsBoot.seoMetaTags} />

    <Header />



    <h2 className="flex_center" style={{ marginTop: "70px" }}>
      Оформляй скорее, пидор!
    </h2>
    <div class="ramka_tovara">
      <div style={{ paddingLeft: "50px" }}>
        <h3 style={{ marginTop: "30px" }}>{_data.snikersTitle}</h3>
        <div class="flex_space-evenly" style={{ marginTop: "70px" }}>
          <div>
            {images.map((image, i) =>
              <GatsbyImage
                className='snikers'
                key={i}
                image={getImage(image)}
                alt={image.alt} />)}
          </div>
          <div>
            <p class="jost400 text_ramka">
              {_data.description1}
            </p>
            <br />
            <p class="jost400 text_ramka">
            {_data.description2}
            </p>
            
            <div class="flex_space-evenly">
              <button class="buy jost500_2">
                Купить сразу
              </button>

              <button class="buy jost500_2">
                В корзину
              </button>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>

    <Footer />


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
      description1
      description2
  }
}`
















