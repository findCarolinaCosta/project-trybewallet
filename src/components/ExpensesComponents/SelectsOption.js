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

const methodSelect = (objectInfos, method, handleChange) => (
  <label htmlFor="method" className="input-group select w-auto">
    <p className="mb-0">Método de pagamento:</p>
    <select
      className="form-select form-select-sm mb-0"
      name="method"
      id="method"
      value={ objectInfos !== undefined ? objectInfos.method : method }
      data-testid="method-input"
      onChange={ handleChange }
    >
      <option>Selecione</option>
      <option>Dinheiro</option>
      <option>Cartão de crédito</option>
      <option>Cartão de débito</option>
    </select>
  </label>
);

const tagSelect = (objectInfos, tag, handleChange) => (
  <label htmlFor="tag" className="input-group select w-auto">
    Tag:
    <select
      className="form-select form-select-sm mb-0 "
      name="tag"
      id="tag"
      value={ objectInfos !== undefined ? objectInfos.tag : tag }
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

);

function SelectsOption({ arrCurrency, handleChange,
  values: { currency, method, tag }, objectInfos }) {
  return (
    <>
      <label htmlFor="currency" className="input-group select w-auto">
        Moeda:
        <select
          className="form-select form-select-sm mb-0"
          name="currency"
          id="currency"
          value={ objectInfos !== undefined ? objectInfos.currency : currency }
          data-testid="currency-input"
          placeholder="Moeda que será registrada a despesa"
          onChange={ handleChange }
        >
          {getArrayCurrency(arrCurrency)}
        </select>
      </label>
      {methodSelect(objectInfos, method, handleChange)}
      {tagSelect(objectInfos, tag, handleChange)}
    </>
  );
}

export default SelectsOption;

SelectsOption.propTypes = {
  arrCurrency: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  objectInfos: PropTypes.objectOf(PropTypes.string).isRequired,
};
