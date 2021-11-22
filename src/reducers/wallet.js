import { GET_EXPENSES, SET_UPDATE_EXPENSES } from '../actions';

// state incial para o store
const INITIAL_STATE = {
  expenses: [],
};

function wallet(state = INITIAL_STATE, { type, expenses, updateForExpenses }) {
  const arrExpenses = [...state.expenses, expenses];
  switch (type) {
  case GET_EXPENSES:
    return {
      ...state,
      expenses: arrExpenses,
    };
  case SET_UPDATE_EXPENSES:
    return {
      ...state,
      expenses: updateForExpenses,
    };
  default:
    return state;
  }
}

export default wallet;
