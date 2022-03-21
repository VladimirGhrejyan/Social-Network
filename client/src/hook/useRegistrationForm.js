import { useState, useEffect } from "react"

const useRegistrationForm = (initial) => {
    const [user, setUser] = useState(initial)
    const [clientErrors, setClientErrors] = useState(initial)
    const [dirty, setDirty] = useState({
        username: false,
        email: false,
        password: false
    })
    const [isFormValid, setIsFormValid] = useState(false)


    const usernameValidation = (event) => {
        const usernameRegex = /^[a-z0-9_-]{3,16}$/
        const value = event.target.value
        
            if ( !value.length ) {
                setClientErrors( prev => (
                    {
                         ...prev,
                        username: 'this field is required'
                    }
                ))
            } else if ( !usernameRegex.test( value.toLowerCase() )) {
                setClientErrors( prev => (
                    {
                        ...prev,
                        username: 'username must be alphanumeric with 3-16 char'
                    }
                ))
            } else {
                setClientErrors( prev => (
                    {
                        ...prev,
                        username: ''
                    }
                ))
            }
    }

    const emailValidation = (event) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
        const value = event.target.value

        if ( !value.length ) {
            setClientErrors( prev => (
                {
                    ...prev,
                    email: 'this field is required'
                }
            ) )
        } else if ( !emailRegex.test( value.toLowerCase() )) {
            setClientErrors( prev => (
                {
                    ...prev,
                    email: 'invalid email address'
                }
            ) )
        } else {
            setClientErrors( prev => (
                {
                    ...prev,
                    email: ''
                }
            ) )
        }

    }

    const passwordValidation = (event) => {
        const value = event.target.value

        if ( !value.length ) {
            setClientErrors( prev => (
                {
                    ...prev,
                    password: 'this field is required'
                }
            ))
        } else if ( value.length < 6 || value.length > 15 ) {
            setClientErrors( prev => (
                {
                    ...prev,
                    password: 'password must be longer than 5 and shorter than 16'
                }
            ))
        } else {
            setClientErrors( prev => (
                {
                    ...prev,
                    password: ''
                }
            ))
        }
    }

    const handleInputChange = (e) => {
        switch (e.target.name) {
            case 'username':
                usernameValidation(e)
                break
            case 'email':
                emailValidation(e)
                break
            case 'password':
                passwordValidation(e)
                break
            default:
        }

        setUser( prev => (
            {
                ...prev,
                [e.target.name]: e.target.value
            }
        ))
    }

    const handleBlur = (e) => {
        switch (e.target.name) {
            case 'username': 
                setDirty( prev => ({...prev, username: true}))
                break
            case 'email': 
                setDirty( prev => ({...prev, email: true}))
                break
            case 'password':
                setDirty( prev => ({...prev, password: true}))
                break
            default:
        }
    }

    useEffect( () => {
        let error = false
        for (let prop in clientErrors) {
            if (clientErrors[prop]) {
                setIsFormValid(false)
                error = true
                break
            } 
        }
        if (!error && user.username && user.email && user.password) setIsFormValid(true)
    }, [clientErrors, user] )

    return {user, handleInputChange, clientErrors, handleBlur, dirty, isFormValid }
}

export default useRegistrationForm