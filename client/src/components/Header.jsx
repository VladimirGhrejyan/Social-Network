import React from 'react'
import { StyledHeader } from '../styles/StyledComponents'
import { Wrapper, Button, NavButton } from '../styles/StyledComponents'
import { SiReact } from 'react-icons/si'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux' 
import { logOut } from '../store/reducers/userReducer'

const Header = () => {
    const navigate = useNavigate()
    const isAuth = useSelector( state => state.user.isAuth )
    const dispatch = useDispatch()
    
    const handleLogOut = () => {
        navigate('/')
        dispatch(logOut())
    } 

    return (
        <StyledHeader>
            
            <Wrapper justifyContent={'center'} alignContent={'center'}>
                <SiReact 
                    style={{cursor: 'pointer', color: `whitesmoke`}} 
                    size={'4rem'} 
                    onClick={ () => navigate('/') } 
                />
            </Wrapper>

            <Wrapper gridTemplateColumns={'1fr 1fr 1fr'} margin={'0 20% 0 0'}>
                <Wrapper justifyItems={'center'} alignItems={'center'}>
                    <NavButton onClick={ () => navigate('/users') } >
                        Users
                    </NavButton>
                </Wrapper>

                <Wrapper justifyItems={'center'} alignItems={'center'}>
                    <NavButton onClick={ () => navigate('/posts') }>
                        Posts
                    </NavButton>
                </Wrapper>

                <Wrapper justifyItems={'center'} alignItems={'center'}>
                    <NavButton>Messenger</NavButton>
                </Wrapper>
            </Wrapper>

            <Wrapper gridTemplateColumns={'1fr 1fr'}>
                
                {
                    isAuth ? 
                    (
                        <>
                        <Wrapper justifyItems={'center'} alignItems={'center'}>
                            <Button 
                                border={'3px solid'} 
                                width={'80%'} height={'60%'}
                                onClick={ () => navigate('/myprofile') }
                            >
                                My Profile
                            </Button>
                        </Wrapper>
                
                        <Wrapper justifyItems={'center'} alignItems={'center'}>
                            <Button 
                                border={'3px solid'} 
                                width={'80%'} height={'60%'}
                                onClick={ handleLogOut }
                            >
                                Log Out
                            </Button>
                        </Wrapper>
                        </>
                    ) : 
                    (
                        <>
                        <Wrapper justifyItems={'center'} alignItems={'center'}>
                            <Button 
                                border={'3px solid'} 
                                width={'80%'} height={'60%'}
                                onClick={ () => navigate('/login') }
                            >
                                Log In
                            </Button>
                        </Wrapper>
                
                        <Wrapper justifyItems={'center'} alignItems={'center'}>
                            <Button 
                                border={'3px solid'} 
                                width={'80%'} height={'60%'}
                                onClick={ () => navigate('/registration') }
                            >
                                Sign Up
                            </Button>
                        </Wrapper>
                        </>
                    )
                }

            </Wrapper>

        </StyledHeader>
    )
}

export default Header