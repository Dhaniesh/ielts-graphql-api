export const typeDefs = `#graphql
type Article {
  id: ID!
  title: String!
  description: Description!
  articleType: String!
  imageUrl: String!
  urlSlug: String!
  hrefLang: String!
  robots: String!
  website: String!
  quiz: String
}


type Description {
    id: ID!
    shortDescription: String!
    longDescription: String!
}

type Query{
    articleCollection: [Article]
    article(id: ID!): Article
}
`