import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputsValueAndDescription from './ExpensesComponents/InputsValueAndDescription';
import SelectsOption from './ExpensesComponents/SelectsOption';
import { setUpdateExpenses } from '../actions';

const INITIAL_STATE = {
  id: '',
  value: '',
  description: '',
  currency: 'USD',
  method: 'Selecione',
  tag: 'Alimentação',
  exchangeRates: {},
};

class EditExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      objectInfos: INITIAL_STATE,
      arrCurrency: [],
    };
    this.setObjectInfo = this.setObjectInfo.bind(this);
    this.getOptionsCurrency = this.getOptionsCurrency.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setObjectInfo();
  }

  getOptionsCurrency() {
    const { arrCurrency } = this.state;
    const { objInfoForEditProp } = this.props;
    const objectInfoExchange = objInfoForEditProp.exchangeRates;
    Object.keys(objectInfoExchange).forEach((item) => (item !== 'USDT'
      ? arrCurrency.push(item) : null));
    this.setState({ arrCurrency });
  }

  setObjectInfo() {
    const { objInfoForEditProp } = this.props;
    this.setState({
      objectInfos: objInfoForEditProp,
    });
    this.getOptionsCurrency();
    const { objectInfos } = this.state;
    return objectInfos;
  }

  handleChange({ target }) {
    const { name, value } = target;
    const { objectInfos } = this.state;
    this.setState({
      objectInfos: { ...objectInfos, [name]: value },
    });
  }

  handleClick() {
    const { expenses, dispatch } = this.props;
    const { objectInfos } = this.state;
    const newObj = expenses.map((item) => (item.id === objectInfos.id
      ? objectInfos : item));
    dispatch(setUpdateExpenses(newObj));
  }

  render() {
    const { arrCurrency, objectInfos } = this.state;
    console.log(objectInfos, 'render');
    return (
      <section className="container-form">
        <form className="form-expenses align-middle">
          <InputsValueAndDescription
            objectInfos={ objectInfos }
            values={ {
              expenseAmount: INITIAL_STATE.value,
              description: INITIAL_STATE.description,
            } }
            handleChange={ this.handleChange }
          />
          <SelectsOption
            arrCurrency={ arrCurrency }
            objectInfos={ objectInfos }
            values={ {} }
            handleChange={ this.handleChange }
          />
          <div>
            <button
              type="button"
              onClick={ this.handleClick }
              className="btn btn-primary mb-0"
            >
              Editar despesa
            </button>
          </div>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  objInfoForEditProp: state.wallet.objectToEdit,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(EditExpenseForm);

EditExpenseForm.propTypes = {
  objInfoForEditProp: PropTypes.objectOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};
