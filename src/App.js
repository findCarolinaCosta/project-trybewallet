import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} /> {/*cria rota para página de login */}
      </Switch>
    ) // retante no index do src para que ao renderizar o app nos teste poder manipular rotas e store separadamente;
  }
}

export default App;
