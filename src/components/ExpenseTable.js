import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DeleteBtn from './DeleteBtn';

function ExpenseTable({ expenses }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Descrição</th>
          <th>Método de pagamento</th>
          <th>Tag</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(({ id, value,
          description, currency, method, tag, exchangeRates }) => {
          const conversionCurrency = exchangeRates !== undefined
            ? exchangeRates[currency].name : null;
          const exchange = exchangeRates !== undefined
            ? Number(exchangeRates[currency].ask).toFixed(2) : null;
          const convertedValue = exchangeRates !== undefined ? Number(value
              * exchangeRates[currency].ask).toFixed(2) : null;
          return (
            <tr key={ id }>
              <td>{value}</td>
              <td>{conversionCurrency}</td>
              <td>{exchange}</td>
              <td>{convertedValue}</td>
              <td>Real</td>
              <td>{description}</td>
              <td>{method}</td>
              <td>{tag}</td>
              <td>
                <button type="button">Editar</button>
                <DeleteBtn id={ id } />
              </td>
            </tr>
          );
        }) }
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

export default connect(mapStateToProps)(ExpenseTable);

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
