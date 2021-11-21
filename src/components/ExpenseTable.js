import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function ExpenseTable({ expenses }) {
  return (
    <table>
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
          const exchange = exchangeRates[currency].name;
          const convertedValue = Number(exchangeRates[currency].ask).toFixed(2);
          const conversionCurrency = Number(value
             * exchangeRates[currency].ask).toFixed(2);

          return (
            <tr key={ id }>
              <td>{value}</td>
              <td>{currency}</td>
              <td>{exchange}</td>
              <td>{convertedValue}</td>
              <td>{conversionCurrency}</td>
              <td>{description}</td>
              <td>{method}</td>
              <td>{tag}</td>
              <td>
                <button type="button">Editar</button>
                <button type="button">Excluir</button>
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
