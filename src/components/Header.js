import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      totalExpense: 0, // irá armazenar localmente o valor total das despesas
    };
    this.getTotal = this.getTotal.bind(this);
  }

  componentDidMount() {
    this.getTotal();
  }

  getTotal() {
    const { expenses } = this.props;
    this.setState({ totalExpense: expenses });
    console.log(expenses);
  }

  render() {
    const { totalExpense } = this.state;
    const { email } = this.props;
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
  expenses: state.wallet.arrayExpenses.reduce((prev, { expenseAmount }) => prev
     + Number(expenseAmount), 0),
}); // recupera o email do store

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
