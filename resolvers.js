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
      let retries = 0;

      try {
        return await models.Link.create({
          slug,
          url: newUrl
        });
      } catch (e) {
        if (e.errors[0].message === "url must be unique" && retries < 4) {
          retries++;

          return models.Link.create({
            slug,
            url: `http://localhost:4000/${randomSlug}`
          });
        } else if (
          e.errors[0].message === "slug must be unique" &&
          retries < 4
        ) {
          retries++;

          const updatedUserSlug = `${slug}_${randomSlug}`;
          return models.Link.create({
            slug: updatedUserSlug,
            url: `http://localhost:4000/${updatedUserSlug}`
          });
        } else {
          throw e;
        }
      }
    }
  }
};

module.exports = resolvers;
