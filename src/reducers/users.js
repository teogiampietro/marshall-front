import initialState from '../initial-states/users'
import {
    GET_USERS_PENDING,
    GET_USERS_FULLFILED,
    GET_USERS_REJECTED,
    ADD_USER_PENDING,
    ADD_USER_FULLFILED,
    ADD_USER_REJECTED,
    DELETE_USER
}
    from '../actions/users'

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_USERS_PENDING:
            return {
                ...state,
                error: '',
                isLoading: true
            }

        case GET_USERS_FULLFILED:
            return {
                ...state,
                error: '',
                isLoading: false,
                list: action.list
            }

        case GET_USERS_REJECTED:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }

        case ADD_USER_PENDING:
            return {
                ...state,
                error: '',
                isLoading: true
            }

        case ADD_USER_FULLFILED: {
            console.log(action)
            return {
                ...state,
                error: '',
                isLoading: false,
                list: [
                    ...state.list,
                    action.product
                ]
            }
        }

        case ADD_USER_REJECTED:{
            return{
                ...state,
                isLoading: false,
                error: action.errorMsg
            }
        }

        case DELETE_USER:
            return {
                ...state,
                list: state.list.filter(
                    item => item.id !== action.userId
                )
            }

        default:
            return state
    }
}

export default reducer