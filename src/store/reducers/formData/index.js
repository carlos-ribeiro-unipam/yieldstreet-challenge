/* eslint-disable no-case-declarations */
import { FORM_DATA_UPDATE, FORM_DATA_RESET } from "../../types/formData";

const FORM_DATA_STORAGE = 'yieldStreet-formData';

const initialState = {
  key: '1',
  stepIndex:0,
  favoriteColors: []
};

let localStorageState = initialState;

try {
  const serializedState = localStorage.getItem(FORM_DATA_STORAGE);
  if (serializedState) {
    localStorageState = JSON.parse(serializedState);
  }
} catch (err) {
  console.error(err);
}

const reducer = (state = localStorageState, action) => {
  switch (action.type) {
    case FORM_DATA_UPDATE:
      const newState = { ...state, ...action.payload };
      try {
        const serializedState = JSON.stringify(newState);
        localStorage.setItem(FORM_DATA_STORAGE, serializedState);
      } catch(err) {
        console.error(err);
      }
      return newState;
    case FORM_DATA_RESET:
      const submitState = { ...initialState, submited: true };
      try {
        const serializedState = JSON.stringify(submitState);
        localStorage.setItem(FORM_DATA_STORAGE, serializedState);
      } catch(err) {
        console.error(err);
      }
      return submitState;
    default:
      return state;
  }
};

export default reducer;
