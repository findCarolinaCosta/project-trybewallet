import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencyQuotes } from '../actions';

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      allExpenses: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getArrayExpenses = this.getArrayExpenses.bind(this);
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
      expenseAmount,
      description,
      currency,
      method,
      tag,
      exchangeRates: {},
    };

    this.setState({
      allExpenses: obj,
    }, () => getExpensesArray(obj));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    this.getArrayExpenses();
  }

  returnInputs() {
    return (
      <>
        <input
          name="expenseAmount"
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
        <input
          name="currency"
          data-testid="currency-input"
          placeholder="Moeda será registrada a despesa"
          onChange={ this.handleChange }
        />

      </>
    );
  }

  render() {
    return (
      <section>
        <form>
          {this.returnInputs()}
          <label htmlFor="payment-method">
            <p>Método de pagamento:</p>
            <select
              name="method"
              id="payment-method"
              data-testid="method-input"
              onChange={ this.handleChange }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="category">
            <p>Categoria:</p>
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
          </label>
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
