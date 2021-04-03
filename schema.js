const { gql } = require("apollo-server");

const typeDefs = gql`
  type Link {
    url: String
    slug: String
  }

  type Query {
    link(id: Int!): Link
    allLinks: [Link]
  }

  type Mutation {
    createLink(slug: String, url: String!): Link
  }
`;

module.exports = typeDefs;
