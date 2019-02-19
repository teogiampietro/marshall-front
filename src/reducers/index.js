import { combineReducers } from 'redux'
import products from './products'
import users from './users'
import pages from './pages'

const rootReducer = combineReducers({
  products,
  users,
  pages
})

export default rootReducer
