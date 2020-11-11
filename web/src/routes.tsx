import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ModalVisibilityProvider } from './components/modalContext';

import Admin from './pages/Admin';
import Login from './pages/Login';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <ModalVisibilityProvider>
          <Route path="/admin" component={Admin} />
        </ModalVisibilityProvider>
      </Switch>
    </BrowserRouter>
  );
}
