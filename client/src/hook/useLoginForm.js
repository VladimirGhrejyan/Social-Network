import { useState, useEffect } from "react"

const useLoginForm = (initial) => {
    const [user, setUser] = useState(initial)
    const [dirty, setDirty] = useState({
        username: false,
        password: false
    })
    const [isFormValid, setIsFormValid] = useState(false)

    const handleInputChange = (e) => {
        setUser( prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }) )
    }

    const handleBlur = (e) => {
        switch (e.target.name) {
            case 'username':
                setDirty( prev => ({
                    ...prev,
                    username: true
                }) )
                break
            case 'password':
                setDirty( prev => ({
                    ...prev,
                    password: true
                }) )
                break
            default:
        }
    }

    useEffect( () => {
        if (user.username && user.password) {
            setIsFormValid(true)
        } else {
            setIsFormValid(false)
        }
    }, [user] )

    return {user, dirty, isFormValid, handleInputChange, handleBlur}
}

export default useLoginForm