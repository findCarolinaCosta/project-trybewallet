import { GET_EXPENSES } from '../actions';

// state incial para o store
const INITIAL_STATE = {
  expenses: [],
  totalExpense: 0,
};

function wallet(state = INITIAL_STATE, { type, expenses }) {
  const arrExpenses = [...state.expenses, expenses];
  switch (type) {
  case GET_EXPENSES:
    return {
      ...state,
      expenses: arrExpenses,
      totalExpense: expenses !== null
        ? arrExpenses.reduce((prev, { value }) => prev
      + Number(value), 0) : 0,
    };
  default:
    return state;
  }
}

export default wallet;
