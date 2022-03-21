import axios from "axios"
import { useState } from "react"

const useProfile = (user, file) => {
    const [avatar, setAvatar] = useState(user.avatar)

    const handleSendAvatar = async (e) => {
        try {
            e.preventDefault()
            const data = new FormData()
            data.append('image', file)

            const response = avatar ? 
            await axios.put('http://localhost:5000/api/cloud/change', data, {
                headers: {
                    'content-type': 'multipart/form-data',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }) :
            await axios.post('http://localhost:5000/api/cloud/upload', data, {
                headers: {
                    'content-type': 'multipart/form-data',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })

            console.log(response)
            setAvatar(response.data.user.avatar)

        } catch (err) {
            console.log(err)
        }
    }

    return {avatar, handleSendAvatar}
}

export default useProfile