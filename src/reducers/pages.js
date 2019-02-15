import initialState from '../initial-states/pages'
import { SELECT_PAGE } from '../actions/pages'

const reducer = (state= initialState, action) => {

  switch (action.type) {

    case SELECT_PAGE:
      return {
        ...state,
        current: action.page
      }

    default:
      return state

  }

}

export default reducer
