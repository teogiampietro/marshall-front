import { combineReducers } from 'redux'
import products from './products'
import tickets from './tickets'
import pages from './pages'

const rootReducer = combineReducers({
  products,
  tickets,
  pages
})

export default rootReducer
