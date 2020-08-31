import { ADD_CHARACTER, REMOVE_CHAR } from "../actions/actions";
import characters_json from "../data/characters.json";

function heroes(state = [], action) {
  let heroes = [...state, createCharacter(action.id)];
  switch (action.type) {
    case ADD_CHARACTER:
      return heroes;
    case REMOVE_CHAR:
      heroes = state.filter((item) => item.id !== action.id);
      return heroes;
    default:
      return state;
  }
}

export function createCharacter(id) {
  let character = characters_json.find((c) => c.id === id);
  return character;
}

export default heroes;
