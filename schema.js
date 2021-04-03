const { gql } = require("apollo-server");

const typeDefs = gql`
  type Link {
    url: String
    slug: String
  }

  type Query {
    link(url: String): Link
    allLinks: [Link]
  }
`;

module.exports = typeDefs;
