import { GET_EXPENSES, SET_OBJECT_TO_EDIT, SET_UPDATE_EXPENSES } from '../actions';

// state incial para o store
const INITIAL_STATE = {
  expenses: [],
  editForm: false,
};

function wallet(state = INITIAL_STATE, { type, expenses,
  updateForExpenses, objectToEdit }) {
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
      editForm: false,
    };
  case SET_OBJECT_TO_EDIT:
    return {
      ...state,
      editForm: true,
      objectToEdit,
    };
  default:
    return state;
  }
}

export default wallet;
