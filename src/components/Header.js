import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';

class Header extends Component {
  render() {
    const { email, totalExpense } = this.props;
    return (
      <>
        <div>
          <h1>Teste</h1>
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">
            Despesa total:
            {' '}
            {totalExpense}
          </p>
          <label htmlFor="currency-field">
            <p>Cambio utilizado:</p>
            <select
              id="currency-field"
              data-testid="header-currency-field"
            >
              <option>BRL</option>
            </select>
          </label>
        </div>
        <ExpenseForm />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  totalExpense: state.wallet.totalExpense,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpense: PropTypes.number.isRequired,
};
