import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencyQuotes } from '../actions';
import exchangeApiFetch from '../services/exchangeApiFetch';

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      allExpenses: [],
      arrCurrency: [],
      expenseAmount: '',
      method: '',
      currency: 'USD',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getArrayExpenses = this.getArrayExpenses.bind(this);
    this.getOptionsCurrency = this.getOptionsCurrency.bind(this);
  }

  componentDidMount() {
    this.getOptionsCurrency();
  }

  async getArrayExpenses() {
    const { getExpensesArray } = this.props;
    const {
      allExpenses,
      expenseAmount,
      description,
      currency,
      method,
      tag,
    } = this.state;

    const obj = {
      id: allExpenses.length,
      value: expenseAmount,
      description,
      currency,
      method,
      tag,
      exchangeRates: {},
    };
    allExpenses.push(obj);
    this.setState({
      expenseAmount: '',
    }, () => getExpensesArray(obj));
  }

  /* Desenvolver lógica para criar dinamicamente os option do select do currency */
  async getOptionsCurrency() {
    const { arrCurrency } = this.state;
    const response = await exchangeApiFetch();
    Object.keys(response).forEach((item) => {
      arrCurrency.push(item);
    });
  /* return (arrCurrency.map((elem) => (
    <option
      key={ elem }
      value={ elem }
    >
      {elem}
    </option>))); */
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    this.getArrayExpenses();
  }

  returnInputs() {
    const { expenseAmount } = this.state;
    return (
      <>
        <input
          name="expenseAmount"
          value={ expenseAmount }
          data-testid="value-input"
          placeholder="Valor da despesa"
          onChange={ this.handleChange }
        />
        <input
          name="description"
          data-testid="description-input"
          placeholder="Descrição da despesa"
          onChange={ this.handleChange }
        />
        <select
          name="currency"
          data-testid="currency-input"
          placeholder="Moeda que será registrada a despesa"
          onChange={ this.handleChange }
        >
          <option>USD </option>
          <option>USDT</option>
          <option>CAD</option>
          <option>GBP</option>
          <option>ARS</option>
          <option>BTC</option>
          <option>LTC</option>
          <option>EUR</option>
          <option>JPY</option>
          <option>CHF</option>
          <option>AUD</option>
          <option>CNY</option>
          <option>ILS</option>
          <option>ETH</option>
          <option>XRP</option>
          <option>DOGE</option>
        </select>
      </>
    );
  }

  render() {
    return (
      <section>
        <form>
          {this.returnInputs()}
          <select
            name="method"
            id="payment-method"
            data-testid="method-input"
            onChange={ this.handleChange }
          >
            <option>Selecione</option>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
          <select
            name="tag"
            id="category"
            data-testid="tag-input"
            onChange={ this.handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
          <button
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getExpensesArray: (arrayExpenses) => dispatch(fetchCurrencyQuotes(arrayExpenses)),
});

export default connect(null, mapDispatchToProps)(ExpenseForm);

ExpenseForm.propTypes = {
  getExpensesArray: PropTypes.func.isRequired,
};
