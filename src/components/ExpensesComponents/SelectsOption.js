import React from 'react';
import PropTypes from 'prop-types';

const getArrayCurrency = (arrCurrency) => (
  arrCurrency.map((elem) => (
    <option
      data-testid={ elem }
      key={ elem }
      value={ elem }
    >
      {elem}
    </option>
  ))
);

function SelectsOption({ arrCurrency, handleChange }) {
  return (
    <>
      <label htmlFor="currency" className="input-group select w-auto">
        Moeda:
        <select
          className="form-select form-select-sm mb-0"
          name="currency"
          id="currency"
          data-testid="currency-input"
          placeholder="Moeda que será registrada a despesa"
          onChange={ handleChange }
        >
          {getArrayCurrency(arrCurrency)}
        </select>
      </label>
      <label htmlFor="method" className="input-group select w-auto">
        <p className="mb-0">Método de pagamento:</p>
        <select
          className="form-select form-select-sm mb-0"
          name="method"
          id="method"
          data-testid="method-input"
          onChange={ handleChange }
        >
          <option>Selecione</option>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
      <label htmlFor="tag" className="input-group select w-auto">
        Tag:
        <select
          className="form-select form-select-sm mb-0 "
          name="tag"
          id="tag"
          data-testid="tag-input"
          onChange={ handleChange }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    </>
  );
}

export default SelectsOption;

SelectsOption.propTypes = {
  arrCurrency: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
};
