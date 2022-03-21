import actionTypes from '../actions/actionTypes'
const {SET_USER, LOG_OUT, SET_ERROR} = actionTypes

const defaultState = {
    currentUser: {},
    isAuth: false,
    serverError: ''
}

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER: 
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            }
        case LOG_OUT: 
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        case SET_ERROR:
            return {
                ...state,
                serverError: action.payload
            }

        default: return state
    }
}

export default userReducer
export const setUser = (user) => ({type: SET_USER, payload: user})
export const logOut = () => ({type: LOG_OUT})
export const setError = (err) => ({type: SET_ERROR, payload: err})

