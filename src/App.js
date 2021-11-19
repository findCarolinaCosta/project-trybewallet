import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends Component {
  render() {
    return (
      <Switch>
        {/* cria rota para página de login */}
        <Route exact path="/" component={ Login } />
        {/* rota para página de wallet */}
        <Route path="/carteira" component={ Wallet } />
      </Switch>
    ); // retante no index do src para que ao renderizar o app nos teste poder manipular rotas e store separadamente;
  }
}

export default App;
