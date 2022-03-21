import React from 'react'
import { StyledFormContainer, Title, Text, Label } from '../../styles/StyledForm'
import { Input, Button, Wrapper } from '../../styles/StyledComponents'
import useLoginForm from '../../hook/useLoginForm'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../store/actions/userActions'
import { useNavigate, Link } from 'react-router-dom'


const Login = () => {
    
    const {user, dirty, isFormValid, handleInputChange, handleBlur} = useLoginForm({
        'username': '',
        'password': ''
    })
    const dispatch = useDispatch()
    const serverError = useSelector( state => state.user.serverError )
    const navigate = useNavigate()

    const handleClick = async () => {
        await dispatch(login(user))
        if (localStorage.getItem('token')) {
            navigate('/')
        }
    }
    
    return (
        <StyledFormContainer>
            <Wrapper justifyItems={'center'} alignItems={'center'}>
                <Title>Log In</Title>
            </Wrapper>

            <Wrapper  >

                <Wrapper justifyItems={'center'} alignItems={'center'} >
                    {
                        serverError === 'User not found' && 
                        <Label>{serverError}</Label>
                    }
                    {
                        dirty.username && !user.username &&
                        <Label>enter username</Label>
                    }
                    <Input 
                        type='text' placeholder='username' name='username' 
                        value={user.username} onChange={ e => handleInputChange(e) }
                        onBlur={ e => handleBlur(e) }
                    />
                </Wrapper>

                <Wrapper justifyItems={'center'} alignItems={'center'}>
                    {
                        serverError === 'Invalid password' && 
                        <Label>{serverError}</Label>
                    }
                    {
                        dirty.password && !user.password &&
                        <Label>enter password</Label>
                    }
                    <Input 
                    type='password' placeholder='password' name='password'
                    value={user.password} onChange={ e => handleInputChange(e) }
                    onBlur={ e => handleBlur(e) }
                    />
                </Wrapper>

            </Wrapper>

            <Wrapper justifyItems={'center'} alignItems={'center'}>
                <Button 
                    disabled={!isFormValid} onClick={ handleClick } 
                    width={'40%'} height={'60%'}
                >Log In</Button>
            </Wrapper>

            <Wrapper justifyItems={'center'} alignItems={'center'}>
                <Text>Don't have an account? <Link style={{textDecoration: 'none', color: 'rgb(54, 69, 79)'}} to='/registration' >Sign Up</Link></Text>
            </Wrapper>
        </StyledFormContainer>
    )
}

export default Login