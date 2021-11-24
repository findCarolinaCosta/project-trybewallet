import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderInfoRight from './HeadeInfoRight';
import ExpenseForm from '../ExpensesComponents/ExpenseForm';
import './Header.css';
import EditExpenseForm from '../EditExpenseForm';
import wallet from '../../assets/wallet-icon/2x/wallet_black.png';
import money from '../../assets/money-icon/2x/outline_attach_money_black_24dp.png';

class Header extends Component {
  render() {
    const { email, expenses, editForm } = this.props;
    return (
      <>
        <header className="navbar navbar-expand-lg">
          <div className="container">
            <div className="container-header-left">
              <img src={ wallet } alt="" width="auto" />
              <h1>
                TRYBEWALLET
              </h1>
              <img src={ money } alt="" width="auto" />
            </div>
            <div className="header-right">
              <HeaderInfoRight
                props={ { email, expenses } }
              />
            </div>
          </div>
        </header>
        {editForm ? <EditExpenseForm /> : <ExpenseForm />}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  editForm: state.wallet.editForm,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  editForm: PropTypes.bool.isRequired,
};
