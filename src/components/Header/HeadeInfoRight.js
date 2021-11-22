import React from 'react';
import PropTypes from 'prop-types';

function HeaderInfoRight({ props: { email, expenses } }) {
  let convertedTotal = 0;
  expenses.forEach((expenseElem) => {
    const { currency } = expenseElem;
    const total = currency ? convertedTotal += Number(expenseElem.value
      * expenseElem.exchangeRates[currency].ask) : null;
    return total;
  });
  return (
    <>
      <p data-testid="email-field">{email}</p>
      <p data-testid="total-field">
        Despesa total:
        {' '}
        {convertedTotal.toFixed(2)}
        {' '}
        <span data-testid="header-currency-field">BRL</span>
      </p>
    </>
  );
}

export default HeaderInfoRight;

HeaderInfoRight.propTypes = {
  props: PropTypes.shape({
    email: PropTypes.string.isRequired,
    expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};
