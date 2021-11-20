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
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { getExpensesArray } = this.props;
    const {
      allExpenses,
      valueInput,
      descriptionInput,
      currencyInput,
      paymentMethod,
      category,
    } = this.state;
    const array = {
      id: allExpenses.length,
      expenseAmount: valueInput,
      description: descriptionInput,
      currency: currencyInput,
      method: paymentMethod,
      tag: category,
    };
    allExpenses.push(array);
    this.setState({
      allExpenses,
    }, () => getExpensesArray(allExpenses));
  }

  returnInputs() {
    return (
      <>
        <input
          name="valueInput"
          data-testid="value-input"
          placeholder="Valor da despesa"
          onChange={ this.handleChange }
        />
        <input
          name="descriptionInput"
          data-testid="description-input"
          placeholder="Descrição da despesa"
          onChange={ this.handleChange }
        />
        <input
          name="currencyInput"
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
              name="paymentMethod"
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
              name="category"
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
