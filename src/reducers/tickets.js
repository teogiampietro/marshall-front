import initialState from '../initial-states/tickets'
import {
    GET_TICKETS_PENDING,
    GET_TICKETS_FULLFILED,
    GET_TICKETS_REJECTED,
    ADD_TICKET_PENDING,
    ADD_TICKET_FULLFILED,
    ADD_TICKET_REJECTED,
    DELETE_TICKET
} from '../actions/tickets'

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_TICKETS_PENDING:
            return {
                ...state,
                error: '',
                isLoading: true
            }

        case GET_TICKETS_FULLFILED:
            return {
                ...state,
                error: '',
                isLoading: false,
                list: action.list
            }

        case GET_TICKETS_REJECTED:
            return {
                ...state,
                isLoading: false,
                error: action.err
            }

        case ADD_TICKET_PENDING:
            return {
                ...state,
                error: '',
                isLoading: true
            }

        case ADD_TICKET_FULLFILED: {
            console.log(action)
            return {
                ...state,
                error: '',
                isLoading: false,
                list: [
                    ...state.list,
                    action.ticket
                ]
            }
        }

        case ADD_TICKET_REJECTED: {
            return {
                ...state,
                isLoading: false,
                error: action.errorMsg
            }
        }

        case DELETE_TICKET:
            return {
                ...state,
                list: state.list.filter(
                    item => item.id !== action.ticketId
                )
            }

        default:
            return state
    }
}

export default reducer