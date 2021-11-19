import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} /> {/*cria rota para página de login */}
        <Route path="/carteira" component={Wallet} /> {/* rota para página de wallet */}
      </Switch>
    ) // retante no index do src para que ao renderizar o app nos teste poder manipular rotas e store separadamente;
  }
}

export default App;
