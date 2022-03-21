import React from 'react'
import styled from 'styled-components'
import {Outlet} from 'react-router-dom'

const StyledMain = styled.div`
    grid-area: main;
    display: inherit;
    background-color: ${ props => props.theme.colors.secondary };
`

const Main = () => {
    return (
        <StyledMain>
            <Outlet />
        </StyledMain>
    )
}

export default Main