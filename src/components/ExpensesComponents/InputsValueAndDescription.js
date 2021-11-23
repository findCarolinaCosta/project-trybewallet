import React from 'react';
import PropTypes from 'prop-types';

function InputsValueAndDescription({ objectInfos, handleChange,
  values: { value, description } }) {
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
            name="value"
            id="expenseAmount"
            value={ objectInfos !== undefined ? objectInfos.value : value }
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
            value={ objectInfos !== undefined ? objectInfos.description : description }
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
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  objectInfos: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
};
