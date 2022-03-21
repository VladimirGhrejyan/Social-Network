import styled from 'styled-components'

export const StyledHeader = styled.div`
    grid-area: header;
    display: grid;
    background-color: ${ props => props.theme.colors.primary };
    grid-template-columns: 10% 70% 20%;
`

export const StyledFooter = styled.div`
    grid-area: footer;
    color: ${ props => props.theme.colors.secondary };
    background-color: ${ props => props.theme.colors.primary };
    font-weight: bold;
    user-select: none;
`

export const Wrapper = styled.div`
    display: ${ props => props.display || 'grid' };
    grid-template-rows: ${ props => props.gridTemplateRows || 'auto' };
    grid-template-columns: ${ props => props.gridTemplateColumns || 'auto' };
    justify-content: ${ props => props.justifyContent || 'stretch' };
    align-content: ${ props => props.alignContent || 'stretch' };
    justify-items: ${ props => props.justifyItems || 'stretch' };
    align-items: ${ props => props.alignItems || 'stretch' };
    margin: ${ props => props.margin || '0' };
    height: ${ props => props.height || 'auto' };
    width: ${ props => props.width || 'auto' };
    grid-row-gap: ${ props => props.gridRowGap || '0' };
    grid-column-gap: ${ props => props.gridColumnGap || '0' };
    border: ${ props => props.border || 'none' };
`

export const ImageWrapper = styled.div`
    height: 200px;
    overflow: hidden;
`

export const Input = styled.input`
    font-size: ${ props => props.fonstSize || '16px' };
    padding-left: 1rem;
    width: 75%;
    height: 3rem;
    border: none;
    border-bottom: 1px solid ${ props => props.theme.colors.primary };
    background-color: transparent;
    outline-color: ${ props => props.theme.colors.primary };
    &:focus {
        border-radius: 8px;
    }
`

export const Button = styled.button`
    width: ${ props => props.width || 'auto' };
    height: ${ props => props.height || 'auto' };
    user-select: none;
    border-radius: 5px;
    font-size: ${ props => props.fontSize || '1rem' };
    font-weight: bold;
    border: ${ props => props.border || 'none' };
    border-color: ${ props => props.borderColor || props.theme.colors.secondary };
    background-color: ${ props => props.backgroundColor || props.theme.colors.primary };
    color: ${ props => props.color || props.theme.colors.secondary };
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
    :disabled {
        opacity: 0.4;
    }
`

export const CardButton = styled(Button)`
    width: 7rem;
    height: 2.5rem;
    border: 3px solid;
`

export const NavButton = styled(Button)`
    margin-top: 0.6rem;
    height: 3rem;
    width: 10rem;
    border-radius: 10px;
    font-size: ${ props => props.fontSize || '18px' };
`
export const Img = styled.img`
    height: ${ props => props.height || '300px' };
    width: ${ props => props.width || '500px' };
    border-radius: ${ props => props.borderRadius || '8px' };
    margin-top: ${ props => props.marginTop || '0' };
`

export const PaginationItem = styled.li`
    display: inline-block;
    list-style: none;
`