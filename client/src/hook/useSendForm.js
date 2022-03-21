import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const useSendForm = (user) => {
    const navigate = useNavigate()
    const [serverError, setServerError] = useState('')
    
    const sendRegistrationForm = async () => {
        try {
            await axios.post('http://localhost:5000/api/auth/registration', user)
            setServerError('')
            navigate('/login')
        } catch (e) {
            setServerError(e)
        }
    }

    return {sendRegistrationForm, serverError}
}

export default useSendForm

