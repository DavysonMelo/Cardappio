import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Admin from './pages/Admin'

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Admin}/>
      </Switch>
    </BrowserRouter>
  )
}
