import { post } from '../helpers/api'
import { get } from "../helpers/api"

export const GET_TICKETS_PENDING = 'GET_TICKETS_PENDING'
export const GET_TICKETS_FULLFILED = 'GET_TICKETS_FULLFILED'
export const GET_TICKETS_REJECTED = 'GET_TICKETS_REJECTED'
export const ADD_TICKET_PENDING = 'ADD_TICKET_PENDING'
export const ADD_TICKET_FULLFILED = 'ADD_TICKET_FULLFILED'
export const ADD_TICKET_REJECTED = 'ADD_TICKET_REJECTED'
export const DELETE_TICKET = 'DELETE_TICKET'

export const getTicketsThunk = () => dispatch => {
dispatch({
    type: GET_TICKETS_PENDING
})
get('/tickets')
.then(list => {
    console.log("List : ", list);
    dispatch({
        type: GET_TICKETS_FULLFILED,
        list,
    })
})
.catch(err => {
    console.log("err: ", err);
    dispatch({
        type: GET_TICKETS_REJECTED,
        err
    })
})
}

export const addTicketThunk = item => dispatch => {
    dispatch({
        type: ADD_TICKET_PENDING,
    })
    post('/tickets', item)
    .then(() => {
        dispatch({
            type: ADD_TICKET_FULLFILED,
            ticket: item
        })
    })
    .catch(err => {
        dispatch({
            type: ADD_TICKET_REJECTED,
            errorMsg: 'No se pudo agregar el item'
        })
    })
}

export const deleteTicket = id => ({
    type: DELETE_TICKET,
    ticketId: id
})