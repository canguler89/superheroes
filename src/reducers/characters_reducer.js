import characters_json from "../data/characters.json";
import { ADD_CHARACTER, REMOVE_CHAR } from "../actions/actions";
import { createCharacter } from "../reducers/heroes_reducer";

function characters(state = characters_json, action) {
  let characters = state.filter((item) => item.id !== action.id);
  switch (action.type) {
    case ADD_CHARACTER:
      return characters;
    case REMOVE_CHAR:
      characters = [...state, createCharacter(action.id)];
      return characters;
    default:
      return state;
  }
}

export default characters;
