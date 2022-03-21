import styled from 'styled-components'

export const StyledFormContainer = styled.div`
    display: grid;
    width: 350px;
    height: 60%;
    background-color: ${ props => props.theme.colors.secondary };
    justify-self: center;
    align-self: center;
    border: 1px solid ${ props => props.theme.colors.primary };
    border-radius: 12px;
    box-shadow: 0 4px 16px ${ props => props.theme.colors.primary };
    grid-template-rows: 15% 60% 15% 10%;
`

export const Title = styled.h1`
    color: ${ props => props.theme.colors.primary };
    user-select: none;
`

export const Text = styled.p`
    user-select: none;
    font-weight: bold;
    color: ${ props => props.theme.colors.primary };
`

export const Label = styled.label`
    color: red;
    font-weight: bold;
    font-size: 0.8rem;
    user-select: none;
`
