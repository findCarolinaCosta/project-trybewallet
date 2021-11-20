import { GET_EXPENSES } from '../actions';

// state incial para o store
const INITIAL_STATE = {
  arrayExpenses: [],
};

function wallet(state = INITIAL_STATE, { type, arrayExpenses }) {
  switch (type) {
  case GET_EXPENSES:
    return {
      ...state,
      arrayExpenses,
    };
  default:
    return state;
  }
}

export default wallet;
