import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ModalVisibilityProvider } from './components/modalContext';

import Admin from './pages/Admin';
import Login from './pages/Login';
import Kitchen from './pages/Kitchen';
import { BoardProvider } from './components/boardContext';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <BoardProvider>
          <Route path="/kitchen" component={Kitchen} />
          <ModalVisibilityProvider>
            <Route path="/admin" component={Admin} />
          </ModalVisibilityProvider>
        </BoardProvider>
      </Switch>
    </BrowserRouter>
  );
}
