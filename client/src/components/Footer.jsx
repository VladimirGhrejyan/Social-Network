import React from 'react'
import { StyledFooter, Wrapper } from '../styles/StyledComponents'
import { SiGithub } from 'react-icons/si'

const Footer = () => {

    return (
        <StyledFooter>
            <Wrapper margin={'1rem 0 1rem 1rem'}>
                Copyright &#169; 2022
            </Wrapper>

            <Wrapper margin={'0 0 0 1rem'}>
                <SiGithub 
                    size={'2.5rem'}
                    style={{cursor: 'pointer'}}
                    onClick={ () => window.location.href = 'https://github.com/VladimirGhrejyan' }
                />
            </Wrapper>
        </StyledFooter>
    )
}

export default Footer