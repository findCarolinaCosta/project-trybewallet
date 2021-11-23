import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function EditBtn({ idExpense, expenses }) {
  const handleClick = (idItem) => {
    const itemToEdit = expenses.filter((item) => item.id === idItem);
    itemToEdit.forEach((element) => {
      const { id, value, description, currency, method, tag, exchangeRates } = element;
      const objItemInfos = {
        id,
        value,
        description,
        currency,
        method,
        tag,
        exchangeRates };
      console.log(objItemInfos);
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

export default connect(mapStateToProps)(EditBtn);

EditBtn.propTypes = {
  idExpense: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
