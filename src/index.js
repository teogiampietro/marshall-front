import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import rootReducer from './reducers'
import './index.css'
import Routes from './routes'
import * as serviceWorker from './serviceWorker'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import thunk from 'redux-thunk'

export default function configureStore() {
  const enhancer =  composeWithDevTools(
    applyMiddleware(thunk)
  )
  return createStore(rootReducer, enhancer)
}

const store = configureStore()

render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
