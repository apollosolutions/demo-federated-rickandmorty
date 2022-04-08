import { nicknames } from "./data.js";

// Add a nickname to a few different characters or default
export const resolvers = {
  Character: {
    nickname: (character) => nicknames.find(it => it.characterID == character.id)?.nickname ?? 'Hello World!'
  }
};