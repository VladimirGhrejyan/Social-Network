import React from 'react'
import AppContainer from '../styles/AppContainer'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const AppLayout = () => {
    return (
        <AppContainer>
            <Header />
            <Main />
            <Footer />
        </AppContainer>
    )
}

export default AppLayout