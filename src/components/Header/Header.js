import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeadeInfoRight from './HeadeInfoRight';
import ExpenseForm from '../ExpensesComponents/ExpenseForm';
import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      totalExpense: 0, // irá armazenar localmente o valor total das despesas
    };
    this.setTotalFromProps = this.setTotalFromProps.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { totalExpenseProp, expenses } = this.props;
    if (prevProps.totalExpenseProp !== totalExpenseProp
      && totalExpenseProp !== undefined) {
      this.setTotalFromProps();
    }
    if (prevProps.expenses !== expenses) {
      this.getTotalFromExpenses();
    }
  }

  setTotalFromProps() {
    const { totalExpenseProp } = this.props;
    this.setState({ totalExpense: totalExpenseProp });
  }

  getTotalFromExpenses() {
    const { expenses } = this.props;
    let convertedTotal = 0;
    expenses.forEach((expenseElem) => {
      const { currency } = expenseElem;
      const settingTotal = currency !== undefined ? convertedTotal
       += expenseElem.value * expenseElem.exchangeRates[currency].ask : null;
      return settingTotal;
    });
    this.setState({
      totalExpense: convertedTotal.toFixed(2),
    });
  } // fonte: Requisito 4 do Leandro Oliveira - Turma 15 - Tribo b;

  render() {
    const { totalExpense } = this.state;
    const { email } = this.props;
    return (
      <>
        <header className="navbar navbar-expand-lg">
          <div className="container">
            <h1>Teste</h1>
            <div className="header-right">
              <HeadeInfoRight props={ { email, totalExpense } } />
            </div>
          </div>
        </header>
        <ExpenseForm />

      </>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  totalExpenseProp: state.wallet.totalExpense,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpenseProp: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
