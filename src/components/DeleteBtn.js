import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUpdateExpenses } from '../actions';
import deleteIcon from '../assets/delete-icon/1x/outline_delete_forever_black_24dp.png';

function DeleteBtn({ id, expenses, setUpdateExpensesProp }) {
  const deleteItem = (idItem) => {
    const updateExpenses = expenses.filter((item) => item.id !== idItem);
    setUpdateExpensesProp(updateExpenses);
  };

  return (
    <button
      className="btn"
      type="button"
      data-testid="delete-btn"
      onClick={ () => deleteItem(id) }
    >
      <img src={ deleteIcon } alt="" />

    </button>
  );
}

const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

const mapDispatchToProps = (dispatch) => ({
  setUpdateExpensesProp: (update) => dispatch(setUpdateExpenses(update)) });

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBtn);

DeleteBtn.propTypes = {
  id: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  setUpdateExpensesProp: PropTypes.func.isRequired,
};
