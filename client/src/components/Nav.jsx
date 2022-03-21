import React from 'react'
import { StyledNav, Wrapper, NavButton } from '../styles/StyledComponents'
import { NavLink } from '../styles/StyledComponents'

const Nav = () => {
    return (
        <StyledNav>
            <Wrapper justifyItems={'center'} alignItems={'center'}>
                <NavButton>
                    <NavLink to='/users' >Users</NavLink>
                </NavButton>
                <NavButton>
                    <NavLink to='/posts' >Posts</NavLink>
                </NavButton>
                <NavButton>Messenger</NavButton>
            </Wrapper>
        </StyledNav>
    )
}

export default Nav