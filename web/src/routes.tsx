import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ModalVisibilityProvider } from './components/modalContext';

import Admin from './pages/Admin';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <ModalVisibilityProvider>
          <Route path="/" exact component={Admin} />
        </ModalVisibilityProvider>
      </Switch>
    </BrowserRouter>
  );
}
