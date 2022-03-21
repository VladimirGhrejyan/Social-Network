import axios from 'axios'
import {setUser, setError} from '../reducers/userReducer'

export const login = (user) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', user)
            dispatch(setUser(response.data.user))
            dispatch(setError(''))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            dispatch(setError(e.response.data.message))
        }
    }
}

export const auth = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/auth/auth`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            localStorage.removeItem('token')
        }
    }
}
