import styled from 'styled-components'

const AppContainer = styled.div`
    display: grid;
    height: 100vh;
    width: 100%;
    grid-template-areas: 
        'header'
        'main'
        'footer';
    grid-template-rows: 1fr 8fr 1fr;
`

export default AppContainer