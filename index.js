const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const models = require("./models");

const server = new ApolloServer({
  // Construct a schema, using GraphQL schema language
  typeDefs,
  // Provide resolver functions for your schema fields
  resolvers,
  // Bring in models created through Sequelize
  context: { models }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
