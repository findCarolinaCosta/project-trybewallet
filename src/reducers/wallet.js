import { GET_EXPENSES } from '../actions';

// state incial para o store
const INITIAL_STATE = {
  expenses: [],
  totalExpense: 0,
};

function wallet(state = INITIAL_STATE, { type, expenses, currentExchange }) {
  switch (type) {
  case GET_EXPENSES:
    return {
      ...state,
      expenses,
      currentExchange,
      totalExpense: expenses !== null
        ? expenses.reduce((prev, { expenseAmount }) => prev
      + Number(expenseAmount), 0) : 0,
    };
  default:
    return state;
  }
}

export default wallet;
