import React from 'react';
import PropTypes from 'prop-types';

function HeadeInfoRight({ props: { email, totalExpense } }) {
  return (
    <>
      <p data-testid="email-field">{email}</p>
      <p data-testid="total-field">
        Despesa total:
        {' '}
        {totalExpense}
        {' '}
        <span data-testid="header-currency-field">BRL</span>
      </p>
    </>
  );
}

export default HeadeInfoRight;

HeadeInfoRight.propTypes = {
  props: PropTypes.shape({
    email: PropTypes.string.isRequired,
    totalExpense: PropTypes.number.isRequired,
  }).isRequired,
};
