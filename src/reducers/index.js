import { combineReducers } from 'redux'
import products from './products'
import pages from './pages'

const rootReducer = combineReducers({
  products,
  pages
})

export default rootReducer
