import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import App from './components/App'
import Products from './components/pages/Products'
import Recover from './components/pages/Recover'
import Access from './components/pages/Access'
import Register from './components/pages/Register'
import Tickets from './components/pages/Tickets'

const Routes = () => {
  return (
    <App>
      <Switch>
        <Route exact path="/products" component={Products} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/recover" component={Recover} />
        <Route exact path="/access" component={Access} />
        <Route exact path="/tickets" component={Tickets} />
      </Switch>
    </App>
  )
}

export default Routes