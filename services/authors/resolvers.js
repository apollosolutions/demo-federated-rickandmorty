import { authors } from "./data.js";

export const resolvers = {
  Query: {
    authors() {
      return authors;
    }
  }
};