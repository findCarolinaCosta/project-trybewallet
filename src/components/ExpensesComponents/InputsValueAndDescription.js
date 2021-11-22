import React from 'react';
import PropTypes from 'prop-types';

function InputsValueAndDescription({ expenseAmount, handleChange }) {
  return (
    <>
      <div className="div-alinhar-verticalmente">
        <label
          htmlFor="expenseAmount"
          className="input-group label form-label input-group-sm mb-0"
        >
          Valor:
          <input
            className="form-control"
            name="expenseAmount"
            id="expenseAmount"
            value={ expenseAmount }
            data-testid="value-input"
            placeholder="Valor da despesa"
            onChange={ handleChange }
          />
        </label>
      </div>
      <div className="div-alinhar-verticalmente">
        <label
          htmlFor="description"
          className="input-group label form-label input-group-sm mb-0"
        >
          Descrição:
          <input
            className="form-control"
            name="description"
            id="description"
            data-testid="description-input"
            placeholder="Descrição da despesa"
            onChange={ handleChange }
          />
        </label>
      </div>
    </>
  );
}

export default InputsValueAndDescription;

InputsValueAndDescription.propTypes = {
  expenseAmount: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
