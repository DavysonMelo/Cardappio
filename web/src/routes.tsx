import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ModalVisibilityProvider } from './components/modalContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Admin from './pages/Admin';
import Login from './pages/Login';
import Kitchen from './pages/Kitchen';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <DndProvider backend={HTML5Backend}>
          <Route path="/kitchen" component={Kitchen} />
        </DndProvider>
        <ModalVisibilityProvider>
          <Route path="/admin" component={Admin} />
        </ModalVisibilityProvider>
      </Switch>
    </BrowserRouter>
  );
}
