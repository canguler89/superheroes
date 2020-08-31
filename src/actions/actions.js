export const ADD_CHARACTER = "ADD_CHARACTER";
export const REMOVE_CHAR = "REMOVE_CHAR";

export function addCharacterById(id) {
  const action = {
    type: ADD_CHARACTER,
    id,
  };
  return action;
}

export function removeCharById(id) {
  const action = {
    type: REMOVE_CHAR,
    id,
  };
  return action;
}
