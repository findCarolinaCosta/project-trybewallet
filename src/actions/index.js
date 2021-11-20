import exchangeApiFetch from '../services/exchangeApiFetch';

export const LOGIN = 'LOGIN'; // para padronizar cria constante do tipo e exporta para também ser usado no reducer do user
export const GET_EXPENSES = 'GET_EXPENSES';

/* action que só é disparada ao clicar no botaõ de enviar no formulário de login, recebe o email por parâmetro e envia type,
e o dito cujo email via action para o reducer do user para ser de fato salvo no store */
export const saveEmailLogin = (email) => ({ type: LOGIN, email });

export const getExpenses = (expenses, currentExchange) => ({
  type: GET_EXPENSES, expenses, currentExchange });

export function fetchCurrencyQuotes(expenses) {
  return async (dispatch) => {
    try {
      const response = await exchangeApiFetch();
      dispatch(getExpenses(expenses, response));
    } catch (e) {
      console.log(e);
    }
  };
}
