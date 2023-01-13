/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Шаблоны
  const snickersTemplate = path.resolve(`./src/templates/Snikers.jsx`)
 
  // Запросы к DatoCMS
  const allSnikersFromCMS = await graphql(`
  {
    allDatoCmsBoot {
      nodes {
        snikersSlug
      }
    }
  }
	`)

  if (allSnikersFromCMS.errors) throw newsFromCMS.errors

  // Создаём страницы
  const snikers = allSnikersFromCMS.data.allDatoCmsBoot.nodes

  snikers.forEach(pair => {
    createPage({
      path: `/snikers/${pair.snikersSlug}`,
      component: snickersTemplate,
      context: { slug: pair.snikersSlug }
    })
  })
}
