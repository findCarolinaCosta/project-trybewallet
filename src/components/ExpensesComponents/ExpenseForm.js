import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencyQuotes } from '../../actions';
import exchangeApiFetch from '../../services/exchangeApiFetch';
import InputsValueAndDescription from './InputsValueAndDescription';
import SelectsOption from './SelectsOption';
import './ExpenseForm.css';

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      arrCurrency: [],
      value: '',
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
    const { getExpensesArray, expenses } = this.props;
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;

    const obj = {
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: {},
    };
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Selecione',
      tag: 'Selecione',
    }, () => getExpensesArray(obj));
  }

  /* cria dinamicamente os option do select do currency */
  async getOptionsCurrency() {
    const { arrCurrency } = this.state;
    const response = await exchangeApiFetch();
    Object.keys(response).forEach((item) => (item !== 'USDT'
      ? arrCurrency.push(item) : null));
    this.setState({ arrCurrency });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    this.getArrayExpenses();
  }

  render() {
    const { value, description, currency,
      method, tag, arrCurrency } = this.state;
    return (
      <section className="container-form">
        <form className="form-expenses align-middle">
          <InputsValueAndDescription
            values={ { value, description } }
            handleChange={ this.handleChange }
          />
          <SelectsOption
            arrCurrency={ arrCurrency }
            values={ { currency, method, tag } }
            handleChange={ this.handleChange }
          />
          <div>
            <button
              type="button"
              onClick={ this.handleClick }
              className="btn btn-primary mb-0"
            >
              Adicionar despesa
            </button>
          </div>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

const mapDispatchToProps = (dispatch) => ({
  getExpensesArray: (arrayExpenses) => dispatch(fetchCurrencyQuotes(arrayExpenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);

ExpenseForm.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  getExpensesArray: PropTypes.func.isRequired,
};
