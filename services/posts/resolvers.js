import { posts } from "./data.js";

export const resolvers = {
  Author: {
    posts(author) {
      return posts.filter(post => post.authorID == author.id);
    }
  },

  Query: {
    posts() {
      return posts;
    }
  },
};