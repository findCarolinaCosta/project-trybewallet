import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      totalExpense: 0, // irá armazenar localmente o valor total das despesas
    };
  }

  render() {
    const { totalExpense } = this.state;
    const { email } = this.props;
    return (
      <div>
        <h1>Teste</h1>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">
          Despesa total:
          {' '}
          { totalExpense }
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
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
}); // recupera o email do store

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
};
