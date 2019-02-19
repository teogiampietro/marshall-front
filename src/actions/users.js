import { post } from '../helpers/api'
import { get } from "../helpers/api"
import { ADD_PRODUCT_FULLFILED, DELETE_PRODUCT } from './products';

export const GET_USERS_PENDING = 'GET_USERS_PENDING'
export const GET_USERS_FULLFILED = 'GET_USERS_FULLFILED'
export const GET_USERS_REJECTED = 'GET_USERS_REJECTED'
export const ADD_USER_PENDING = 'ADD_USER_PENDING'
export const ADD_USER_FULLFILED = 'ADD_USER_FULLFILED'
export const ADD_USER_REJECTED = 'ADD_USER_REJECTED'
export const DELETE_USER = 'DELETE_USER'

export const getUsersThunk = () => dispatch => {
dispatch({
    type: GET_USERS_PENDING
})
get('/users')
.then(list => {
    console.log("List : ", list);
    dispatch({
        type: GET_USERS_FULLFILED,
        list,
    })
})
.catch(err => {
    console.log("err: ", err);
    dispatch({
        type: GET_USERS_REJECTED,
        err
    })
})
}

export const addUserThunk = item => dispatch => {
    dispatch({
        type: ADD_USER_PENDING,
    })
    post('/users', item)
    .then(() => {
        dispatch({
            type: ADD_PRODUCT_FULLFILED,
            product: item
        })
    })
    .catch(err => {
        dispatch({
            type: ADD_USER_REJECTED,
            errorMsg: 'No se pudo agregar el item'
        })
    })
}

export const deleteUser = id => ({
    type: DELETE_PRODUCT,
    productId: id
})