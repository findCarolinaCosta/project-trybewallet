import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { saveEmailLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      redirect: false, // usado para redirecionar página se true;
    }
  }

  //salva as infos do input no state do componente
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  //função verifica os dados do formulário e retorna um boleano para ativar ou não o botão
  getDisabled() {
    const { email, password } = this.state;
    const checkEmail = emailElem => {
      const verify = /\S+@\S+\.\S+/; // regex formato texto@texto.com
      return verify.test(emailElem); // test retorna booleano
    }
    const checkPassword = pass => pass.length >= 6;

    return checkEmail(email) && checkPassword(password); /* funções verifica o email e senha e 
    retorna true se as duas verificação derem true também, que por sua vez enquanto a função getDisabled retornar false o botão fica desabilitado
    e se retornar true o botão de enviar é habilitado e é possível ser clicado */
  } //fonte: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/

  /* ao clicar no botão de enviar seta o state de redirecionamento para true, logo o Redirect direciona rota para /carteira
   e dipara a action passando o email do state interno para o ser salvo no store */
  handleClick = () => {
    const { saveLogin } = this.props;
    this.setState({
      redirect: true,
    })
    saveLogin(this.state.email)
  }

  render() {
    const { redirect } = this.state;
    //verifica se redirect é true se sim redireciona a página, sendo true somente ao apertar o botão de enviar
    if (redirect) {
      return <Redirect to="/carteira" />;
    }
    return (
      <div>
        <h1>Login</h1>
        <form>
          <input
            data-testid="email-input"
            aria-label='email'
            type="email"
            name='email'
            onChange={this.handleChange}
          />
          <input
            data-testid="password-input"
            type="text"
            name='password'
            onChange={this.handleChange}
          />
          <button
            disabled={!this.getDisabled()}
            onClick={this.handleClick}
          >
            Entrar
          </button>
        </form>
      </div>);
  }
}

//dipara a action passando o email do state interno para o ser salvo no store
const mapDispatchToProps = (dispatch) => ({ saveLogin: (email) => dispatch(saveEmailLogin(email)) })

export default connect(null, mapDispatchToProps)(Login);
