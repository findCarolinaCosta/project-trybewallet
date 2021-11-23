import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setObjToEdit } from '../actions';

function EditBtn({ idExpense, expenses, dispatch }) {
  const handleClick = (idItem) => {
    const itemToEdit = expenses.filter((item) => item.id === idItem);
    itemToEdit.forEach((element) => {
      const { id, value, description, currency, method, tag, exchangeRates } = element;
      const objItemEdit = {
        id,
        value,
        description,
        currency,
        method,
        tag,
        exchangeRates };
      dispatch(setObjToEdit(objItemEdit));
    });
  };
  return (
    <button
      type="button"
      data-testid="edit-btn"
      onClick={ () => handleClick(idExpense) }
    >
      Editar

    </button>
  );
}
const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

// const mapDispatchToProps = (dispatch) => {
//   saveObjToEdit: (obj) => dispatch(setObjToEdit(obj));
// };

export default connect(mapStateToProps)(EditBtn);

EditBtn.propTypes = {
  idExpense: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};
