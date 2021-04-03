const RandExp = require("randexp");

const resolvers = {
  Query: {
    async link(root, { id }, { models }) {
      return models.Link.findByPk(id);
    },
    async allLinks(root, args, { models }) {
      return models.Link.findAll();
    }
  },
  Mutation: {
    async createLink(root, { url, slug }, { models }) {
      const randomSlug = new RandExp(/^[0-9A-Z]{4}$/).gen();
      const newUrl = slug
        ? `http://localhost:4000/${slug}`
        : `http://localhost:4000/${randomSlug}`;

      return models.Link.create({
        slug,
        url: newUrl
      });
    }
  }
};

module.exports = resolvers;
