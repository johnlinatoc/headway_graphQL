const resolvers = {
  Query: {
    async link(root, { id }, { models }) {
      return models.Link.findByPk(id);
    },
    async allLinks(root, args, { models }) {
      return models.Link.findAll();
    }
  }
};

module.exports = resolvers;
