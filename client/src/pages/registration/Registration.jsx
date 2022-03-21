import React from 'react'
import { StyledFormContainer, Title, Text, Label } from '../../styles/StyledForm'
import { Input, Button, Wrapper } from '../../styles/StyledComponents'
import useRegistrationForm from '../../hook/useRegistrationForm'
import useSendForm from '../../hook/useSendForm'
import { Link } from 'react-router-dom'

const Registration = () => {
    
    const {user, handleInputChange, handleBlur, clientErrors, dirty, isFormValid} = useRegistrationForm({
        'username': '',
        'email': '',
        'password': ''
    })

    const {sendRegistrationForm, serverError} = useSendForm(user)

    return (
        <StyledFormContainer>
            <Wrapper justifyItems={'center'} alignItems={'center'}>
                <Title>Create Account</Title>
            </Wrapper>

            <Wrapper  >

                <Wrapper justifyItems={'center'} alignItems={'center'} >
                    {
                        dirty.username && clientErrors.username &&
                        <Label htmlFor='username'>{clientErrors.username}</Label>
                    }
                    {
                        serverError && 
                        <Label>{serverError}</Label>
                    }
                    <Input 
                        type='text' placeholder='username' name='username' 
                        value={user.username} onChange={ e => handleInputChange(e) }
                        onBlur={ e => handleBlur(e) }
                    />
                </Wrapper>

                <Wrapper justifyItems={'center'} alignItems={'center'}>
                    {
                        dirty.email && clientErrors.email &&
                        <Label htmlFor='email'>{clientErrors.email}</Label>
                    }
                    <Input 
                        type='email' placeholder='email' name='email' 
                        value={user.email} onChange={ e => handleInputChange(e) }
                        onBlur={ e => handleBlur(e) }
                    />
                </Wrapper>

                <Wrapper justifyItems={'center'} alignItems={'center'}>
                    {
                        dirty.password && clientErrors.password &&
                        <Label htmlFor='password'>{clientErrors.password}</Label>
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
                    disabled={!isFormValid} onClick={sendRegistrationForm} 
                    width={'40%'} height={'60%'}
                >Sign Up</Button>
            </Wrapper>

            <Wrapper justifyItems={'center'} alignItems={'center'}>
                <Text>Have already an account? <Link style={{textDecoration: 'none', color: 'rgb(54, 69, 79)'}} to='/login' >Login here</Link></Text>
            </Wrapper>
        </StyledFormContainer>
    )
}

export default Registration