import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useProfile from '../../hook/useProfile'
import noAvatar from '../../assets/images/noavatar.jpg'
import { auth } from '../../store/actions/userActions'
import { Wrapper, Img, Button } from '../../styles/StyledComponents'

const MyProfile = () => {
    const user = useSelector( state => state.user.currentUser )
    const [img, setImg] = useState(null)

    const {avatar, handleSendAvatar} = useProfile(user, img)

    const handleInputChange = (e) => {
        setImg(e.target.files[0])
    }

    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(auth())
    }, [avatar])
    
    return (
        
            <Wrapper margin={'1rem 0 0 1rem'} gridTemplateColumns={'520px 1fr'} >
                <Wrapper >
                    <Img src={avatar ? avatar : noAvatar}/>
                </Wrapper>

                <Wrapper alignContent={'start'} justifyContent={'start'} gridRowGap={'1rem'}>
                    <Wrapper>
                        <input id='file-input' type='file' name='image' style={{display: 'none'}} onChange={ (e) => handleInputChange(e) }/>
                        <label htmlFor='file-input'>Choose avatar</label>
                    </Wrapper>
                    <Wrapper>
                        <Button 
                            onClick={ (e) => {handleSendAvatar(e); setImg(null)} }
                            height={'2rem'} width={'8rem'}
                            disabled={!img}
                        >{avatar ? 'Change avatar' : 'Add avatar'}</Button>
                    </Wrapper>
                    <Wrapper>
                        <h3>{user.username}</h3>
                        <h3>{user.email}</h3>
                    </Wrapper>
                </Wrapper> 

            </Wrapper>

    )
}

export default MyProfile